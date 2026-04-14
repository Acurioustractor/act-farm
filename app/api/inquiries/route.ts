import { NextRequest, NextResponse } from 'next/server';
import { createGHLClient } from '@/lib/ghl/client';
import type { ExperienceCategory, InquiryPayload } from '@/lib/experiences/types';
import { findExperience } from '@/lib/experiences/catalog';

/**
 * Generic experience inquiry handler.
 *
 * Mirrors the /api/bookings contract but routes to the right GHL pipeline
 * based on the experience's category. Same shape of fallbacks:
 *   1. Validate input
 *   2. Always log server-side with a BCV-XXXXX reference
 *   3. If GHL is configured, upsert contact + create opportunity (when the
 *      category has a pipeline wired) + trigger workflow (when configured)
 *   4. If GHL is not configured, return 202 so the inquirer's experience
 *      isn\u2019t broken while env wiring is in progress
 *
 * Direct-booking stays still go through /api/bookings — this route is for
 * everything else.
 */

type PipelineEnvKey = 'RETREATS' | 'RESIDENCIES' | 'SESSIONS' | 'HEALTH' | 'MAKERS' | 'HARVEST';

const CATEGORY_TO_ENV_KEY: Record<ExperienceCategory, PipelineEnvKey | null> = {
  stays: null, // stays go through /api/bookings
  retreats: 'RETREATS',
  residencies: 'RESIDENCIES',
  'facilitated-sessions': 'SESSIONS',
  health: 'HEALTH',
  makers: 'MAKERS',
  'harvest-pairings': 'HARVEST',
};

function isConfigured(): boolean {
  const key = process.env.GHL_API_KEY;
  const loc = process.env.GHL_LOCATION_ID;
  return Boolean(
    key && loc && !key.startsWith('xxxx') && !loc.startsWith('xxxx')
  );
}

function isValid(payload: Partial<InquiryPayload>): payload is InquiryPayload {
  return (
    typeof payload.experienceSlug === 'string' &&
    typeof payload.experienceTitle === 'string' &&
    typeof payload.category === 'string' &&
    typeof payload.name === 'string' &&
    payload.name.trim().length > 1 &&
    typeof payload.email === 'string' &&
    /^\S+@\S+\.\S+$/.test(payload.email)
  );
}

function pipelineEnvFor(category: ExperienceCategory): {
  pipelineId?: string;
  stageId?: string;
  workflowId?: string;
} {
  const key = CATEGORY_TO_ENV_KEY[category];
  if (!key) return {};
  return {
    pipelineId: process.env[`GHL_${key}_PIPELINE_ID`],
    stageId: process.env[`GHL_${key}_INITIAL_STAGE_ID`],
    workflowId: process.env[`GHL_${key}_WORKFLOW_ID`],
  };
}

export async function POST(request: NextRequest) {
  let payload: InquiryPayload;
  try {
    const raw = await request.json();
    if (!isValid(raw)) {
      return NextResponse.json(
        { error: 'Invalid inquiry payload' },
        { status: 400 }
      );
    }
    payload = raw;
  } catch {
    return NextResponse.json({ error: 'Malformed request' }, { status: 400 });
  }

  // Guard against unknown experience slugs so the catalog stays the contract.
  const experience = findExperience(payload.experienceSlug);
  if (!experience) {
    return NextResponse.json(
      { error: `Unknown experience: ${payload.experienceSlug}` },
      { status: 400 }
    );
  }

  const bookingRef = `BCV-${Date.now().toString(36).toUpperCase()}`;

  // Always log so the team can retrieve manually even if GHL is down.
  console.log(
    `[inquiry:${bookingRef}]`,
    JSON.stringify(
      {
        experience: payload.experienceTitle,
        category: payload.category,
        inquirer: `${payload.name} <${payload.email}>`,
        phone: payload.phone ?? '',
        organisation: payload.organisation ?? '',
        window:
          payload.checkIn && payload.checkOut
            ? `${payload.checkIn} \u2192 ${payload.checkOut}`
            : (payload.preferredMonths ?? ''),
        groupSize: payload.groupSize ?? '',
        duration: payload.duration ?? '',
        topic: payload.topic ?? '',
        residencyType: payload.residencyType ?? '',
        message: payload.message ?? '',
      },
      null,
      2
    )
  );

  if (!isConfigured()) {
    return NextResponse.json(
      {
        ok: true,
        bookingRef,
        note: 'Inquiry captured. GHL not yet configured \u2014 check server logs.',
      },
      { status: 202 }
    );
  }

  try {
    const ghl = createGHLClient();

    const [firstName, ...rest] = payload.name.trim().split(/\s+/);
    const lastName = rest.join(' ');

    const customFields: Record<string, unknown> = {
      booking_ref: bookingRef,
      experience: payload.experienceTitle,
      experience_slug: payload.experienceSlug,
      category: payload.category,
      submitted_at: new Date().toISOString(),
    };
    if (payload.checkIn) customFields.preferred_start = payload.checkIn;
    if (payload.checkOut) customFields.preferred_end = payload.checkOut;
    if (payload.preferredMonths)
      customFields.preferred_months = payload.preferredMonths;
    if (payload.groupSize) customFields.group_size = payload.groupSize;
    if (payload.organisation) customFields.organisation = payload.organisation;
    if (payload.topic) customFields.topic = payload.topic;
    if (payload.residencyType)
      customFields.residency_type = payload.residencyType;
    if (payload.duration) customFields.duration = payload.duration;
    if (payload.message) customFields.guest_message = payload.message;

    const contact = await ghl.contacts.upsert({
      email: payload.email,
      firstName,
      lastName: lastName || undefined,
      phone: payload.phone,
      source: `BCV Experience Inquiry \u2014 ${payload.experienceTitle}`,
      tags: [
        'act-farm',
        'experience-inquiry',
        `experience:${payload.experienceSlug}`,
        `category:${payload.category}`,
      ],
      customFields,
    });

    const { pipelineId, stageId, workflowId } = pipelineEnvFor(payload.category);

    if (contact?.id && pipelineId && stageId) {
      try {
        await ghl.opportunities.create({
          contactId: contact.id,
          pipelineId,
          pipelineStageId: stageId,
          name: `${payload.name} \u00b7 ${payload.experienceTitle}`,
          status: 'open',
          source: `Website \u2014 ${payload.experienceTitle}`,
        });
      } catch (err) {
        console.error(`[inquiry:${bookingRef}] opportunity create failed`, err);
      }
    }

    if (contact?.id && workflowId) {
      try {
        await ghl.workflows.trigger(workflowId, contact.id);
      } catch (err) {
        console.error(`[inquiry:${bookingRef}] workflow trigger failed`, err);
      }
    }

    return NextResponse.json(
      { ok: true, bookingRef, contactId: contact?.id ?? null },
      { status: 202 }
    );
  } catch (err) {
    console.error(`[inquiry:${bookingRef}] GHL error`, err);
    return NextResponse.json(
      {
        ok: true,
        bookingRef,
        note: 'Inquiry captured, CRM sync pending review.',
      },
      { status: 202 }
    );
  }
}
