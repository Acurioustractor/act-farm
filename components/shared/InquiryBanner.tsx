'use client';

import { useState } from 'react';

export default function InquiryBanner() {
  const [formData, setFormData] = useState({ name: '', email: '', interest: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, message: `Quick inquiry from ${formData.name}` }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', interest: '' });
      }
    } catch {
      // Silent fail — full form is at /connect
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-site-ink py-6">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <p className="text-white/60 font-medium font-sans text-sm">
            Thanks — we'll be in touch within a few days.
          </p>
        </div>
      </div>
    );
  }

  const inputClasses = "flex-1 px-4 py-2.5 rounded-[var(--site-radius)] bg-white/10 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 font-sans text-sm";

  return (
    <div className="bg-site-ink py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-5">
          <h3 className="text-xl font-light text-white">Want to use the farm?</h3>
          <p className="text-white/40 text-sm mt-1 font-sans">
            Leave your details and we'll get back to you.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-3xl mx-auto">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className={inputClasses}
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className={inputClasses}
          />
          <select
            name="interest"
            required
            value={formData.interest}
            onChange={e => setFormData(prev => ({ ...prev, interest: e.target.value }))}
            className={`${inputClasses} appearance-none`}
          >
            <option value="" className="text-site-ink bg-site-bg">I'm interested in...</option>
            <option value="workshop" className="text-site-ink bg-site-bg">Workshop</option>
            <option value="event" className="text-site-ink bg-site-bg">Event / Wedding</option>
            <option value="retreat" className="text-site-ink bg-site-bg">Retreat / Stay</option>
            <option value="residency" className="text-site-ink bg-site-bg">R&D Residency</option>
            <option value="other" className="text-site-ink bg-site-bg">Other</option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-site-green text-white rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50 whitespace-nowrap"
          >
            {isSubmitting ? 'Sending...' : 'Get in Touch'}
          </button>
        </form>
      </div>
    </div>
  );
}
