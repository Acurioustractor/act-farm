'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function ConnectForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    groupSize: '',
    dates: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const interest = searchParams.get('interest');
    if (interest) {
      setFormData(prev => ({ ...prev, interest }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', interest: '', groupSize: '', dates: '', message: '' });
      } else {
        alert(data.error || 'There was an error submitting your inquiry. Please try again.');
      }
    } catch {
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitSuccess) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-bold text-emerald-900 mb-3">Thanks for getting in touch</h3>
        <p className="text-emerald-800 mb-2">We'll get back to you within a few days.</p>
        <p className="text-emerald-700 text-sm">
          If you need something sooner, email{' '}
          <a href="mailto:hello@acurioustractor.com" className="underline">
            hello@acurioustractor.com
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="interest" className="block text-sm font-semibold text-stone-900 mb-1.5">
            I'm interested in *
          </label>
          <select
            id="interest"
            name="interest"
            required
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors bg-white"
          >
            <option value="">Select an option</option>
            <option value="workshop">Workshop</option>
            <option value="event">Event / Wedding</option>
            <option value="retreat">Retreat / Group Stay</option>
            <option value="residency">R&D Residency</option>
            <option value="junes-patch">June's Patch</option>
            <option value="partnership">Research Partnership</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="groupSize" className="block text-sm font-semibold text-stone-900 mb-1.5">
            Approximate group size
          </label>
          <input
            type="text"
            id="groupSize"
            name="groupSize"
            placeholder="e.g. 12 people"
            value={formData.groupSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="dates" className="block text-sm font-semibold text-stone-900 mb-1.5">
            Approximate dates
          </label>
          <input
            type="text"
            id="dates"
            name="dates"
            placeholder="e.g. March 2026, flexible"
            value={formData.dates}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-1.5">
          Tell us what you're planning *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="What are you hoping to do at Black Cockatoo Valley?"
          className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Inquiry'}
      </button>
    </form>
  );
}

export default function ConnectPage() {
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <h1 className="text-4xl font-bold text-stone-900 mb-3">Get in Touch</h1>
              <p className="text-lg text-stone-600 mb-8">
                Tell us what you're planning and we'll get back to you within a few days.
              </p>
              <Suspense fallback={null}>
                <ConnectForm />
              </Suspense>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">Email</h3>
                  <a href="mailto:hello@acurioustractor.com" className="text-emerald-700 hover:text-emerald-800">
                    hello@acurioustractor.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">Location</h3>
                  <p className="text-stone-600">
                    Black Cockatoo Valley<br />
                    Witta, Queensland<br />
                    <span className="text-sm text-stone-500">On Jinibara Country</span>
                  </p>
                </div>

                <div className="bg-stone-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-stone-900 mb-3">Good to know</h3>
                  <ul className="text-sm text-stone-600 space-y-2">
                    <li>We respond within 3–5 business days</li>
                    <li>Availability is limited by ecology, not scarcity</li>
                    <li>We prioritise conservation-aligned work</li>
                    <li>40% of profits flow to community ownership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
