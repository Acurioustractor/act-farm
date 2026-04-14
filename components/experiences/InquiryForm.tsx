'use client';

import { useState } from 'react';
import type { Experience, InquiryPayload } from '@/lib/experiences/types';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const today = () => new Date().toISOString().slice(0, 10);

/**
 * Generic inquiry form for every experience except direct-booking stays.
 *
 * Reads `experience.inquiryShape` to decide which optional fields to render.
 * Name, email, and message are always shown. POSTs to `/api/inquiries` which
 * routes to the right GHL pipeline based on `experience.category`.
 */
export default function InquiryForm({ experience }: { experience: Experience }) {
  const shape = experience.inquiryShape;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [preferredMonths, setPreferredMonths] = useState('');
  const [groupSize, setGroupSize] = useState<number | ''>('');
  const [organisation, setOrganisation] = useState('');
  const [topic, setTopic] = useState('');
  const [residencyType, setResidencyType] = useState('');
  const [duration, setDuration] = useState('');

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [ref, setRef] = useState<string | null>(null);

  const canSubmit =
    name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(email) &&
    status !== 'submitting';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('submitting');
    setErrorMessage(null);

    const payload: InquiryPayload = {
      experienceSlug: experience.slug,
      experienceTitle: experience.title,
      category: experience.category,
      name,
      email,
      phone: phone || undefined,
      message: message || undefined,
      checkIn: shape.datesRange && checkIn ? checkIn : undefined,
      checkOut: shape.datesRange && checkOut ? checkOut : undefined,
      preferredMonths:
        shape.preferredMonths && preferredMonths ? preferredMonths : undefined,
      groupSize:
        shape.groupSize && typeof groupSize === 'number' ? groupSize : undefined,
      organisation: shape.organisation && organisation ? organisation : undefined,
      topic: shape.topic && topic ? topic : undefined,
      residencyType:
        shape.residencyType && residencyType ? residencyType : undefined,
      duration: shape.duration && duration ? duration : undefined,
    };

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? `Request failed (${res.status})`);
      }
      setRef(data?.bookingRef ?? null);
      setStatus('success');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-site-surface p-7 md:p-8 rounded-[var(--site-radius)]">
        <p className="ui-label text-site-green mb-4">Inquiry received</p>
        <h3 className="text-2xl font-light text-site-ink mb-4 leading-tight">
          We&apos;ll be in touch within a few working days.
        </h3>
        <p className="text-site-muted leading-relaxed">
          Every inquiry gets read personally. Expect a reply with next steps,
          usually a short call before we confirm anything.
        </p>
        {ref ? (
          <p className="text-sm text-site-muted mt-4 font-sans">
            Reference: <span className="text-site-ink">{ref}</span>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-site-surface p-6 md:p-8 rounded-[var(--site-radius)] space-y-5"
      aria-label={`Inquire about ${experience.title}`}
    >
      <div>
        <p className="ui-label text-site-muted mb-1">Inquire</p>
        <h3 className="text-2xl md:text-[28px] font-light text-site-ink leading-tight">
          About {experience.title}
        </h3>
        <p className="text-sm text-site-muted mt-2">
          We take inquiries, not instant bookings. We reply within a few working days.
        </p>
      </div>

      {shape.datesRange ? (
        <div className="grid grid-cols-2 gap-3">
          <Field label="Preferred start">
            <input
              type="date"
              value={checkIn}
              min={today()}
              onChange={(e) => setCheckIn(e.target.value)}
              className={inputCls}
            />
          </Field>
          <Field label="Preferred end">
            <input
              type="date"
              value={checkOut}
              min={checkIn || today()}
              onChange={(e) => setCheckOut(e.target.value)}
              className={inputCls}
            />
          </Field>
        </div>
      ) : null}

      {shape.preferredMonths ? (
        <Field label="Rough window">
          <input
            type="text"
            value={preferredMonths}
            onChange={(e) => setPreferredMonths(e.target.value)}
            placeholder="e.g. April–May 2026, or spring"
            className={inputCls}
          />
        </Field>
      ) : null}

      {shape.duration ? (
        <Field label="How long?">
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="e.g. 2 weeks, a long weekend, negotiable"
            className={inputCls}
          />
        </Field>
      ) : null}

      {shape.groupSize ? (
        <Field label="Group size (approx)">
          <input
            type="number"
            min={1}
            value={groupSize}
            onChange={(e) => {
              const v = e.target.value;
              setGroupSize(v === '' ? '' : Math.max(1, Number(v)));
            }}
            className={inputCls}
          />
        </Field>
      ) : null}

      {shape.organisation ? (
        <Field label="Organisation / group">
          <input
            type="text"
            value={organisation}
            onChange={(e) => setOrganisation(e.target.value)}
            className={inputCls}
          />
        </Field>
      ) : null}

      {shape.residencyType ? (
        <Field label="Residency type">
          <select
            value={residencyType}
            onChange={(e) => setResidencyType(e.target.value)}
            className={inputCls}
          >
            <option value="">Choose one</option>
            <option value="self-funded">Self-funded</option>
            <option value="funded">Funded placement</option>
            <option value="supported">Supported (negotiated)</option>
          </select>
        </Field>
      ) : null}

      {shape.topic ? (
        <Field label="Topic / focus">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="What are you working on?"
            className={inputCls}
          />
        </Field>
      ) : null}

      <div className="grid grid-cols-1 gap-3">
        <Field label="Your name">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            className={inputCls}
          />
        </Field>
        <Field label="Email">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className={inputCls}
          />
        </Field>
        <Field label="Phone (optional)">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            className={inputCls}
          />
        </Field>
        <Field label="Tell us more (optional)">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Context, questions, what you’re hoping for."
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>

      {status === 'error' && errorMessage ? (
        <p className="text-sm text-red-700 bg-red-50 p-3 rounded font-sans">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-site-green text-white px-6 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending\u2026' : 'Send inquiry'}
      </button>

      <p className="text-xs text-site-muted text-center font-sans">
        Every inquiry gets read personally. No auto-replies.
      </p>
    </form>
  );
}

const inputCls =
  'w-full bg-site-bg border border-site-line rounded-[var(--site-radius)] px-3 py-2.5 text-site-ink font-sans text-[15px] focus:outline-none focus:border-site-green transition-colors';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="ui-label text-site-muted block mb-1.5">{label}</span>
      {children}
    </label>
  );
}
