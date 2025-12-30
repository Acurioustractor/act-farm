'use client';

import { useState } from 'react';

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', interest: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        console.error('Form submission failed:', data);
        alert(data.error || 'There was an error submitting your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-stone-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Connect With Us</h1>
          <p className="text-2xl text-emerald-100">
            Interested in residencies, workshops, June's Patch, or collaboration?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <ContactItem
                  icon="📧"
                  title="Email"
                  content="hello@acurioustractor.com"
                  link="mailto:hello@acurioustractor.com"
                />

                <ContactItem
                  icon="📍"
                  title="Location"
                  content="Black Cockatoo Valley, Witta, Queensland"
                  sublabel="On Jinibara lands"
                />

                <ContactItem
                  icon="🌐"
                  title="The Harvest"
                  content="Community workshops, meals, and CSA shares"
                  link="https://theharvest.acurioustractor.com"
                  linkText="Visit The Harvest →"
                />
              </div>

              <div className="mt-12 bg-stone-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-stone-900 mb-4">What to Expect</h3>
                <ul className="space-y-3 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-emerald-700 font-bold mr-3">✓</span>
                    <span>We respond within 3-5 business days</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 font-bold mr-3">✓</span>
                    <span>Opportunities are limited and carefully selected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 font-bold mr-3">✓</span>
                    <span>We prioritize conservation-aligned inquiries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-700 font-bold mr-3">✓</span>
                    <span>Your information is kept private and secure</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-stone-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Express Your Interest</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-stone-900 mb-2">
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
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">
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

                  <div>
                    <label htmlFor="interest" className="block text-sm font-semibold text-stone-900 mb-2">
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
                      <option value="residency">R&D Residency</option>
                      <option value="workshop">Workshops & Events</option>
                      <option value="junes-patch">June's Patch</option>
                      <option value="accommodation">Future Accommodation</option>
                      <option value="partnership">Research Partnership</option>
                      <option value="collaboration">General Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">
                      Tell us more *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your project, interests, or how you'd like to engage with Black Cockatoo Valley..."
                      className="w-full px-4 py-3 rounded-md border border-stone-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 outline-none transition-colors resize-none"
                    />
                  </div>

                  {submitSuccess && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-md">
                      <p className="font-semibold">✓ Thank you for your inquiry!</p>
                      <p className="text-sm mt-1">We'll be in touch within 3-5 business days.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">
            Explore Our Offerings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <QuickLinkCard
              title="R&D Residencies"
              description="Low-impact eco-residencies for conservation-aligned prototyping and research."
              link="/residencies"
            />
            <QuickLinkCard
              title="Activities & Workshops"
              description="Small-group sessions on regeneration, monitoring, and conservation practices."
              link="/activities"
            />
            <QuickLinkCard
              title="June's Patch"
              description="Healthcare worker wellbeing through food, land, and experience-based restoration."
              link="/junes-patch"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface ContactItemProps {
  icon: string;
  title: string;
  content: string;
  sublabel?: string;
  link?: string;
  linkText?: string;
}

function ContactItem({ icon, title, content, sublabel, link, linkText }: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="text-3xl mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold text-stone-900 mb-1">{title}</h3>
        {link ? (
          <a
            href={link}
            className="text-emerald-700 hover:text-emerald-800 transition-colors"
            target={link.startsWith('http') ? '_blank' : undefined}
            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {linkText || content}
          </a>
        ) : (
          <p className="text-stone-700">{content}</p>
        )}
        {sublabel && <p className="text-sm text-stone-600 mt-1">{sublabel}</p>}
      </div>
    </div>
  );
}

interface QuickLinkCardProps {
  title: string;
  description: string;
  link: string;
}

function QuickLinkCard({ title, description, link }: QuickLinkCardProps) {
  return (
    <a
      href={link}
      className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow block"
    >
      <h3 className="text-xl font-semibold text-stone-900 mb-3">{title}</h3>
      <p className="text-stone-700 mb-4">{description}</p>
      <span className="text-emerald-700 font-semibold">
        Learn More →
      </span>
    </a>
  );
}
