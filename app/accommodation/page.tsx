import Link from 'next/link';

export const metadata = {
  title: 'Accommodation | A Curious Tractor Farm',
  description: 'Eco-accommodation options at Black Cockatoo Valley. Future piloting of serene eco-stays including glamping and yurts for restorative immersion.',
};

export default function AccommodationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-800 to-emerald-800 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Accommodation</h1>
          <p className="text-2xl text-stone-200 leading-relaxed">
            Serene eco-stays designed for restoration and deep connection with the land.
            No high-volume tourism—only careful, low-impact immersion.
          </p>
        </div>
      </section>

      {/* Current Offerings */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">Current Options</h2>
          <p className="text-lg text-stone-700 text-center mb-12 max-w-2xl mx-auto">
            Our accommodation is primarily available through R&D residencies. We're carefully piloting
            additional eco-stay options that align with our conservation-first values.
          </p>

          <div className="bg-emerald-50 p-8 rounded-lg border-l-4 border-emerald-700">
            <h3 className="text-2xl font-semibold text-stone-900 mb-4">R&D Residency Accommodation</h3>
            <p className="text-stone-700 mb-6 leading-relaxed">
              Our primary accommodation offering is through structured R&D residencies for researchers,
              technologists, creatives, and practitioners working on conservation-aligned projects.
            </p>
            <Link
              href="/residencies"
              className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
            >
              Learn About Residencies →
            </Link>
          </div>
        </div>
      </section>

      {/* Future Piloting */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 text-center">Future Eco-Stay Concepts</h2>
          <p className="text-lg text-stone-700 text-center mb-12 max-w-3xl mx-auto">
            We're exploring additional low-impact accommodation options that support habitat restoration
            while offering restorative experiences. These are in the piloting phase.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <ConceptCard
              title="Eco-Glamping"
              description="Thoughtfully designed canvas tents with minimal environmental footprint. Comfortable bedding, solar power, composting systems. Nestled in restored habitat with views to the valley."
              status="Concept Phase"
            />
            <ConceptCard
              title="Conservation Yurts"
              description="Traditional round structures adapted for tropical climate. Natural ventilation, rainwater collection, integration with native plantings. Spaces that feel part of the landscape."
              status="Design Phase"
            />
            <ConceptCard
              title="Observation Cabins"
              description="Small, purpose-built cabins for wildlife observation and habitat monitoring. Educational component with field guides, binoculars, and species identification resources."
              status="Concept Phase"
            />
            <ConceptCard
              title="Regenerative Garden Stays"
              description="Accommodation integrated with June's Patch food garden. Guests participate in morning garden sessions, harvest meals, and learn regenerative growing practices."
              status="Pilot Planning"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">Our Accommodation Principles</h2>
          <div className="space-y-6">
            <PrincipleCard
              title="No Extractive Tourism"
              description="We don't operate like a conventional retreat or high-volume accommodation business. Every stay must strengthen conservation outcomes, not compromise them."
            />
            <PrincipleCard
              title="Limited & Intentional"
              description="Low guest numbers protect threatened species habitat and maintain site integrity. Scarcity ensures quality, intimacy, and genuine restoration."
            />
            <PrincipleCard
              title="Prepaid & Premium"
              description="Premium pricing reflects true value of low-impact experiences. Prepayment ensures stable cashflow without constant marketing churn."
            />
            <PrincipleCard
              title="Phased Development"
              description="We pilot carefully, learn from each iteration, and build capacity slowly. No rush to scale—only to improve alignment with ecology and community."
            />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ExpectationCard
              title="Serene & Quiet"
              items={[
                'No loud events or parties',
                'Limited other guests',
                'Natural soundscapes',
                'Space for deep rest'
              ]}
            />
            <ExpectationCard
              title="Immersed in Nature"
              items={[
                '150 acres to explore',
                'Native forest and creek systems',
                'Threatened species habitat',
                'Walking trails and observation points'
              ]}
            />
            <ExpectationCard
              title="Low-Impact Living"
              items={[
                'Solar power and rainwater',
                'Composting systems',
                'Minimal waste practices',
                'Connection to ecological systems'
              ]}
            />
            <ExpectationCard
              title="Optional Engagement"
              items={[
                'Workshops if interested',
                'Conservation activities',
                'Garden participation',
                'Or simply rest and observe'
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">Interested in Staying with Us?</h2>
          <p className="text-lg text-stone-700 mb-8">
            Current availability is through R&D residencies. For other accommodation options,
            express your interest and we'll notify you as we pilot new offerings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/residencies"
              className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-stone-800 transition-colors"
            >
              Apply for Residency
            </Link>
            <Link
              href="/connect"
              className="inline-block border-2 border-stone-900 text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-50 transition-colors"
            >
              Express Interest
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface ConceptCardProps {
  title: string;
  description: string;
  status: string;
}

function ConceptCard({ title, description, status }: ConceptCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-2xl font-semibold text-stone-900">{title}</h3>
        <span className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ml-2">
          {status}
        </span>
      </div>
      <p className="text-stone-700 leading-relaxed">{description}</p>
    </div>
  );
}

interface PrincipleCardProps {
  title: string;
  description: string;
}

function PrincipleCard({ title, description }: PrincipleCardProps) {
  return (
    <div className="border-l-4 border-emerald-700 pl-6 py-2">
      <h3 className="text-xl font-semibold text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-700 leading-relaxed">{description}</p>
    </div>
  );
}

interface ExpectationCardProps {
  title: string;
  items: string[];
}

function ExpectationCard({ title, items }: ExpectationCardProps) {
  return (
    <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start text-emerald-100">
            <span className="mr-2">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
