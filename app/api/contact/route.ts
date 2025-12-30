import { NextRequest, NextResponse } from 'next/server';
import { createGHLClient } from '@/lib/ghl/client';
import { withCache, setCached } from '@/lib/redis';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, interest, message } = body;

    // Validate required fields
    if (!name || !email || !interest) {
      return NextResponse.json(
        { error: 'Name, email, and interest are required' },
        { status: 400 }
      );
    }

    // Initialize GHL client
    const ghlClient = createGHLClient();

    // Check if contact already exists (with Redis caching)
    let existingContact;
    try {
      existingContact = await withCache(
        `ghl:contact:${email}`,
        async () => {
          try {
            return await ghlClient.contacts.searchByEmail(email);
          } catch (error) {
            return null;
          }
        },
        600 // 10-minute cache
      );
    } catch (error) {
      console.log('Contact lookup failed, will create new:', error);
      existingContact = null;
    }

    // Determine tags and pipeline based on interest
    const tags = getTagsForInterest(interest);
    const customFields = {
      interest_area: interest,
      initial_message: message || '',
      submission_date: new Date().toISOString(),
      inquiry_type: getInquiryType(interest),
    };

    // Create or update contact in GHL
    let contact;
    if (existingContact && Array.isArray(existingContact) && existingContact.length > 0) {
      // Update existing contact (use first match)
      const firstContact = existingContact[0];
      if (!firstContact.id) {
        throw new Error('Contact ID not found');
      }
      contact = await ghlClient.contacts.updateCustomFields(
        firstContact.id,
        customFields
      );

      // Add new tags
      await ghlClient.contacts.addTags(firstContact.id, tags);
    } else {
      // Create new contact
      contact = await ghlClient.contacts.upsert({
        email,
        name,
        phone: '', // Can add phone field to form later
        source: 'ACT Farm Website',
        tags,
        customFields,
      });
    }

    // Update cache
    await setCached(`ghl:contact:${email}`, contact, 600);

    // Add to appropriate pipeline based on interest
    if (process.env.GHL_ENABLE_PIPELINES === 'true' && contact?.id) {
      const pipelineId = getPipelineIdForInterest(interest);
      if (pipelineId) {
        try {
          await ghlClient.opportunities.create({
            contactId: contact.id,
            pipelineId,
            pipelineStageId: getInitialStageId(pipelineId),
            name: `${name} - ${interest}`,
            status: 'open',
          });
        } catch (error) {
          console.error('Failed to create opportunity:', error);
          // Don't fail the whole request
        }
      }
    }

    // Trigger workflow if configured
    const workflowId = getWorkflowIdForInterest(interest);
    if (workflowId && contact?.id) {
      try {
        await ghlClient.workflows.trigger(workflowId, contact.id);
      } catch (error) {
        console.error('Failed to trigger workflow:', error);
        // Don't fail the whole request if workflow trigger fails
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Contact submitted successfully',
      contactId: contact?.id || 'unknown',
    });

  } catch (error) {
    console.error('GHL API Error:', error);

    return NextResponse.json(
      {
        error: 'Failed to submit contact form',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * Get tags based on user's interest
 */
function getTagsForInterest(interest: string): string[] {
  const baseTags = ['act-farm'];

  const interestTags: Record<string, string[]> = {
    'residency': ['interest:residency', 'priority:high'],
    'workshop': ['interest:workshop', 'interest:event'],
    'junes-patch': ['interest:junes-patch', 'healthcare', 'priority:high'],
    'accommodation': ['interest:accommodation', 'future-guest'],
    'partnership': ['interest:partnership', 'research', 'priority:high'],
    'collaboration': ['interest:collaboration'],
    'other': ['interest:other'],
  };

  return [...baseTags, ...(interestTags[interest] || ['interest:general'])];
}

/**
 * Get inquiry type for custom field
 */
function getInquiryType(interest: string): string {
  const types: Record<string, string> = {
    'residency': 'R&D Residency Inquiry',
    'workshop': 'Workshop/Event Inquiry',
    'junes-patch': 'June\'s Patch Healthcare Inquiry',
    'accommodation': 'Future Accommodation Inquiry',
    'partnership': 'Research Partnership Inquiry',
    'collaboration': 'General Collaboration Inquiry',
    'other': 'General Inquiry',
  };

  return types[interest] || 'General Inquiry';
}

/**
 * Get pipeline ID based on user's interest
 */
function getPipelineIdForInterest(interest: string): string | null {
  const interestToPipeline: Record<string, string | undefined> = {
    'residency': process.env.GHL_RESIDENCY_PIPELINE_ID,
    'workshop': process.env.GHL_INQUIRY_PIPELINE_ID,
    'junes-patch': process.env.GHL_JUNES_PATCH_PIPELINE_ID,
    'accommodation': process.env.GHL_INQUIRY_PIPELINE_ID,
    'partnership': process.env.GHL_RESIDENCY_PIPELINE_ID, // Research partnerships use residency pipeline
    'collaboration': process.env.GHL_INQUIRY_PIPELINE_ID,
    'other': process.env.GHL_INQUIRY_PIPELINE_ID,
  };

  return interestToPipeline[interest] || null;
}

/**
 * Get workflow ID based on interest
 */
function getWorkflowIdForInterest(interest: string): string | null {
  // Specific workflows for high-value inquiries
  if (interest === 'residency' && process.env.GHL_RESIDENCY_WORKFLOW_ID) {
    return process.env.GHL_RESIDENCY_WORKFLOW_ID;
  }

  if (interest === 'junes-patch' && process.env.GHL_JUNES_PATCH_WORKFLOW_ID) {
    return process.env.GHL_JUNES_PATCH_WORKFLOW_ID;
  }

  // Default contact workflow
  return process.env.GHL_CONTACT_WORKFLOW_ID || null;
}

/**
 * Get initial pipeline stage ID
 */
function getInitialStageId(pipelineId: string): string {
  const pipelineStages: Record<string, string> = {
    [process.env.GHL_RESIDENCY_PIPELINE_ID || '']: process.env.GHL_RESIDENCY_INITIAL_STAGE_ID || 'inquiry',
    [process.env.GHL_INQUIRY_PIPELINE_ID || '']: process.env.GHL_INQUIRY_INITIAL_STAGE_ID || 'new',
    [process.env.GHL_JUNES_PATCH_PIPELINE_ID || '']: process.env.GHL_JUNES_PATCH_INITIAL_STAGE_ID || 'referral',
  };

  return pipelineStages[pipelineId] || 'new';
}
