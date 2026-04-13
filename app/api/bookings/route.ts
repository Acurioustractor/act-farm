import { NextRequest, NextResponse } from 'next/server';
import { createGHLClient } from '@/lib/ghl/client';

/**
 * Direct booking request handler.
 *
 * Flow:
 *   1. Validate input
 *   2. Upsert contact in GoHighLevel (with booking tags + custom fields)
 *   3. Create opportunity in the Stay pipeline (if configured)
 *   4. Trigger an auto-response workflow to the guest (if configured)
 *   5. Return 202 Accepted — this is a REQUEST, not an instant confirmation.
 *      Nic reviews and confirms personally.
 *
 * If GHL creds are placeholder/missing, we log the booking server-side and
 * return 202 anyway so the guest experience isn't broken while env wiring
 * is still in progress. The booking payload is surfaced in logs for Nic
 * to retrieve manually.
 */

type BookingPayload = {
  accommodationId: string;
  accommodationName: string;
  checkIn: string;
  checkOut: string;
  nights: number;
  guests: number;
  nightlyRateAud: number;
  totalAud: number;
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

function isConfigured(): boolean {
  const key = process.env.GHL_API_KEY;
  const loc = process.env.GHL_LOCATION_ID;
  return Boolean(
    key && loc && !key.startsWith('xxxx') && !loc.startsWith('xxxx')
  );
}

function isValid(payload: Partial<BookingPayload>): payload is BookingPayload {
  return (
    typeof payload.accommodationId === 'string' &&
    typeof payload.accommodationName === 'string' &&
    typeof payload.checkIn === 'string' &&
    typeof payload.checkOut === 'string' &&
    typeof payload.nights === 'number' &&
    payload.nights > 0 &&
    typeof payload.guests === 'number' &&
    payload.guests > 0 &&
    typeof payload.name === 'string' &&
    payload.name.trim().length > 1 &&
    typeof payload.email === 'string' &&
    /^\S+@\S+\.\S+$/.test(payload.email) &&
    typeof payload.totalAud === 'number'
  );
}

export async function POST(request: NextRequest) {
  let payload: BookingPayload;
  try {
    const raw = await request.json();
    if (!isValid(raw)) {
      return NextResponse.json(
        { error: 'Invalid booking payload' },
        { status: 400 }
      );
    }
    payload = raw;
  } catch {
    return NextResponse.json({ error: 'Malformed request' }, { status: 400 });
  }

  const bookingRef = `BCV-${Date.now().toString(36).toUpperCase()}`;

  // Always log server-side so Nic can retrieve manually even if GHL is down
  console.log(
    `[booking:${bookingRef}]`,
    JSON.stringify(
      {
        accommodation: payload.accommodationName,
        dates: `${payload.checkIn} → ${payload.checkOut} (${payload.nights}n)`,
        guests: payload.guests,
        total: `$${payload.totalAud} AUD`,
        guest: `${payload.name} <${payload.email}>`,
        phone: payload.phone ?? '',
        message: payload.message ?? '',
      },
      null,
      2
    )
  );

  if (!isConfigured()) {
    // Env not wired yet — booking captured in logs. Email fallback would
    // go here if SMTP is configured; otherwise return accepted.
    return NextResponse.json(
      {
        ok: true,
        bookingRef,
        note: 'Booking captured. GHL not yet configured — check server logs.',
      },
      { status: 202 }
    );
  }

  try {
    const ghl = createGHLClient();

    const [firstName, ...rest] = payload.name.trim().split(/\s+/);
    const lastName = rest.join(' ');

    const contact = await ghl.contacts.upsert({
      email: payload.email,
      firstName,
      lastName: lastName || undefined,
      phone: payload.phone,
      source: 'BCV Direct Booking',
      tags: [
        'act-farm',
        'stay-booking',
        `accommodation:${payload.accommodationId}`,
        'priority:booking',
      ],
      customFields: {
        booking_ref: bookingRef,
        accommodation: payload.accommodationName,
        check_in: payload.checkIn,
        check_out: payload.checkOut,
        nights: payload.nights,
        guests: payload.guests,
        total_aud: payload.totalAud,
        guest_message: payload.message ?? '',
        submitted_at: new Date().toISOString(),
      },
    });

    const pipelineId = process.env.GHL_STAY_PIPELINE_ID;
    const stageId = process.env.GHL_STAY_INITIAL_STAGE_ID;
    if (contact?.id && pipelineId && stageId) {
      try {
        await ghl.opportunities.create({
          contactId: contact.id,
          pipelineId,
          pipelineStageId: stageId,
          name: `${payload.name} · ${payload.accommodationName} · ${payload.checkIn}`,
          monetaryValue: payload.totalAud,
          status: 'open',
          source: 'Website - Direct Booking',
        });
      } catch (err) {
        console.error(`[booking:${bookingRef}] opportunity create failed`, err);
        // Don't fail the request — contact + tags are enough for Nic to follow up
      }
    }

    const workflowId = process.env.GHL_STAY_BOOKING_WORKFLOW_ID;
    if (contact?.id && workflowId) {
      try {
        await ghl.workflows.trigger(workflowId, contact.id);
      } catch (err) {
        console.error(`[booking:${bookingRef}] workflow trigger failed`, err);
      }
    }

    return NextResponse.json(
      {
        ok: true,
        bookingRef,
        contactId: contact?.id ?? null,
      },
      { status: 202 }
    );
  } catch (err) {
    console.error(`[booking:${bookingRef}] GHL error`, err);
    // Booking is still captured in logs — don't leave the guest hanging.
    return NextResponse.json(
      {
        ok: true,
        bookingRef,
        note: 'Booking captured, CRM sync pending review.',
      },
      { status: 202 }
    );
  }
}
