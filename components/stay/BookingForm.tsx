'use client';

import { useMemo, useState } from 'react';
import {
  type Accommodation,
  calculateTotal,
  nightsBetween,
} from '@/lib/stay/accommodations';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const today = () => new Date().toISOString().slice(0, 10);
const addDays = (iso: string, days: number) => {
  const d = new Date(iso);
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
};

export default function BookingForm({ accommodation }: { accommodation: Accommodation }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const nights = useMemo(
    () => nightsBetween(checkIn, checkOut),
    [checkIn, checkOut]
  );
  const pricing = useMemo(
    () => calculateTotal(accommodation, nights),
    [accommodation, nights]
  );

  const minStayUnmet = nights > 0 && nights < accommodation.minNights;
  const canSubmit =
    nights >= accommodation.minNights &&
    guests > 0 &&
    guests <= accommodation.maxGuests &&
    name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(email) &&
    status !== 'submitting';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus('submitting');
    setErrorMessage(null);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accommodationId: accommodation.id,
          accommodationName: accommodation.name,
          checkIn,
          checkOut,
          nights,
          guests,
          nightlyRateAud: accommodation.nightlyRateAud,
          totalAud: pricing.total,
          name,
          email,
          phone,
          message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? `Request failed (${res.status})`);
      }
      setStatus('success');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-site-surface p-7 md:p-8 rounded-[var(--site-radius)]">
        <p className="ui-label text-site-green mb-4">Request received</p>
        <h3 className="text-2xl font-light text-site-ink mb-4 leading-tight">
          We&apos;ll be in touch within a day or two.
        </h3>
        <p className="text-site-muted leading-relaxed">
          Nic reads every booking request personally. You&apos;ll get a
          confirmation email once he&apos;s checked dates and any details worth
          knowing about your stay.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-site-surface p-6 md:p-8 rounded-[var(--site-radius)] space-y-5"
      aria-label={`Request to book ${accommodation.name}`}
    >
      <div>
        <p className="ui-label text-site-muted mb-1">
          AUD ${accommodation.nightlyRateAud} / night
        </p>
        <h3 className="text-2xl md:text-[28px] font-light text-site-ink leading-tight">
          Request to book
        </h3>
        <p className="text-sm text-site-muted mt-2">
          Min {accommodation.minNights} nights · {accommodation.maxGuests} guests max · Nic confirms personally
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Check-in">
          <input
            type="date"
            value={checkIn}
            min={today()}
            onChange={(e) => {
              const v = e.target.value;
              setCheckIn(v);
              if (!checkOut || Date.parse(checkOut) <= Date.parse(v)) {
                setCheckOut(addDays(v, accommodation.minNights));
              }
            }}
            required
            className={inputCls}
          />
        </Field>
        <Field label="Check-out">
          <input
            type="date"
            value={checkOut}
            min={checkIn ? addDays(checkIn, 1) : today()}
            onChange={(e) => setCheckOut(e.target.value)}
            required
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Guests">
        <input
          type="number"
          min={1}
          max={accommodation.maxGuests}
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
          className={inputCls}
        />
      </Field>

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
        <Field label="Anything we should know? (optional)">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="Dogs coming? Celebrating something? Working on a project?"
            className={`${inputCls} resize-none`}
          />
        </Field>
      </div>

      {nights > 0 ? (
        <div className="bg-site-bg rounded-[var(--site-radius)] p-4 text-sm font-sans">
          <Row label={`$${accommodation.nightlyRateAud} × ${nights} ${nights === 1 ? 'night' : 'nights'}`} value={`$${pricing.subtotal}`} />
          <Row label="Cleaning fee" value={`$${pricing.cleaning}`} />
          <div className="border-t border-site-line my-2" />
          <Row label="Estimated total" value={`$${pricing.total} AUD`} bold />
        </div>
      ) : null}

      {minStayUnmet ? (
        <p className="text-sm text-site-clay font-sans">
          Minimum stay is {accommodation.minNights} nights.
        </p>
      ) : null}

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
        {status === 'submitting' ? 'Sending…' : 'Request to book'}
      </button>

      <p className="text-xs text-site-muted text-center font-sans">
        Not charged yet. Nic confirms availability and sends payment details.
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

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className={bold ? 'text-site-ink font-semibold' : 'text-site-muted'}>{label}</span>
      <span className={bold ? 'text-site-ink font-semibold' : 'text-site-ink'}>{value}</span>
    </div>
  );
}
