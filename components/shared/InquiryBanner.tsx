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
      <div className="bg-emerald-900 py-6">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-emerald-100 font-medium">
            Thanks — we'll be in touch within a few days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-emerald-900 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-5">
          <h3 className="text-xl font-semibold text-white">Want to use the farm?</h3>
          <p className="text-emerald-200 text-sm mt-1">
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
            className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-white/30"
          />
          <select
            name="interest"
            required
            value={formData.interest}
            onChange={e => setFormData(prev => ({ ...prev, interest: e.target.value }))}
            className="flex-1 px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none"
          >
            <option value="" className="text-stone-900">I'm interested in...</option>
            <option value="workshop" className="text-stone-900">Workshop</option>
            <option value="event" className="text-stone-900">Event / Wedding</option>
            <option value="retreat" className="text-stone-900">Retreat / Stay</option>
            <option value="residency" className="text-stone-900">R&D Residency</option>
            <option value="other" className="text-stone-900">Other</option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 bg-white text-emerald-900 rounded-full font-semibold hover:bg-emerald-50 transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {isSubmitting ? 'Sending...' : 'Get in Touch'}
          </button>
        </form>
      </div>
    </div>
  );
}
