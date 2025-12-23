import Link from 'next/link';

export const metadata = {
  title: 'About | A Curious Tractor Farm',
  description: 'Learn about Black Cockatoo Valley, our conservation-first approach, and the LCAA framework guiding our work on Jinibara lands.',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 to-emerald-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Black Cockatoo Valley</h1>
          <p className="text-2xl text-stone-200 leading-relaxed">
            150 acres of threatened species habitat on Jinibara lands. A living laboratory for
            conservation, regenerative practice, and careful co-stewardship.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">Our Purpose</h2>
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="text-xl mb-6 text-center">
              We protect and restore threatened species habitat while exploring low-impact models
              for R&D, community wellbeing, and eventual co-stewardship transition.
            </p>
            <p className="mb-6">
              Black Cockatoo Valley is not a conventional retreat, farm, or conservation reserve. It's a place
              where ecology comes first, where human activity strengthens rather than extracts, and where
              we prototype pathways toward genuine community governance.
            </p>
            <p>
              Every residency, workshop, and gathering is a careful expression—testing what's possible when
              conservation, research, and regenerative practice align.
            </p>
          </div>
        </div>
      </section>

      {/* LCAA Framework */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 text-center">The LCAA Framework</h2>
          <p className="text-lg text-stone-700 text-center mb-12 max-w-3xl mx-auto">
            Listen, Curiosity, Action, Art—the principles guiding all our work.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <LCAACard
              title="Listen"
              description="Co-design with community, First Nations knowledge holders, and the land itself. We don't impose solutions—we listen first, then respond with care."
              examples={['Partnership with Jinibara knowledge holders', 'USC research collaboration', 'Healthcare worker co-design (June\'s Patch)', 'Habitat observation and monitoring']}
            />
            <LCAACard
              title="Curiosity"
              description="R&D prototyping, asking questions, testing hypotheses. We embrace not-knowing and use it to fuel careful exploration and learning."
              examples={['Conservation technology residencies', 'Regenerative practice experiments', 'Ethical AI for habitat monitoring', 'Community wellbeing research']}
            />
            <LCAACard
              title="Action"
              description="Tangible outputs, measurable impact, real-world application. We prototype to produce, not just philosophize."
              examples={['Habitat restoration activities', 'June\'s Patch food production', 'Platform development', 'Species monitoring systems']}
            />
            <LCAACard
              title="Art"
              description="Felt stories, beauty, connection. We communicate conservation not just with data, but with experiences that move people."
              examples={['Creative documentation residencies', 'Shared meals and gatherings', 'Storytelling through place', 'Aesthetic restoration choices']}
            />
          </div>
        </div>
      </section>

      {/* The Land */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">The Land</h2>
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="mb-6">
              Black Cockatoo Valley spans 150 acres on <strong>Jinibara lands</strong> near Witta, Queensland.
              The property features views to the top of the Mary River, with creeks and forest down to Elaman Creek.
            </p>
            <p className="mb-6">
              This is <strong>threatened species habitat</strong>. Our primary responsibility is protection and
              restoration—everything else serves that purpose.
            </p>
            <div className="bg-emerald-50 p-8 rounded-lg border-l-4 border-emerald-700 my-8">
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">Conservation Commitments</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">✓</span>
                  <span>Low-volume human activity to minimize habitat disturbance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">✓</span>
                  <span>Ongoing weed management and native species restoration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">✓</span>
                  <span>Systematic monitoring of biodiversity and habitat health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">✓</span>
                  <span>No extractive events, high-volume tourism, or commercial exploitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">✓</span>
                  <span>Revenue from activities reinvested in habitat restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">How We Sustain This Work</h2>
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="mb-6">
              We operate on a <strong>low-volume, premium model</strong> that generates stable revenue without
              compromising conservation. This is financially viable through:
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Revenue Streams</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• R&D residencies ($300-$500/night)</li>
                  <li>• Workshops and events ($5K+ limited groups)</li>
                  <li>• June's Patch subscriptions ($400-$800/season)</li>
                  <li>• Research partnerships and grants</li>
                  <li>• Regenerative offset credits (future)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-stone-900 mb-3">Cost Reduction</h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Community-led activities (volunteers)</li>
                  <li>• Low-volume reduces overhead</li>
                  <li>• Prepaid model ensures cashflow</li>
                  <li>• Phased development limits risk</li>
                  <li>• Aligned partnerships share costs</li>
                </ul>
              </div>
            </div>
            <p>
              This model makes conservation economically sustainable without requiring extractive growth.
              We prove that protecting habitat can be financially viable.
            </p>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Beautiful Obsolescence</h2>
          <p className="text-xl text-emerald-100 text-center mb-8 leading-relaxed">
            Our long-term vision is transition to community co-stewardship and governance.
            We build toward the day when Black Cockatoo Valley is held and managed by the community it serves.
          </p>
          <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-lg">
            <p className="text-emerald-100 leading-relaxed">
              This is what we call "beautiful obsolescence"—creating systems, knowledge, and capacity
              that outlive our individual involvement. Every residency, workshop, and partnership is a step
              toward eventual local ownership. We're building a pathway, not an empire.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">Want to Learn More?</h2>
          <p className="text-lg text-stone-700 mb-8">
            Explore our activities, residencies, and ways to engage with the work at Black Cockatoo Valley.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/activities"
              className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
            >
              View Activities
            </Link>
            <Link
              href="/connect"
              className="inline-block border-2 border-stone-900 text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface LCAACardProps {
  title: string;
  description: string;
  examples: string[];
}

function LCAACard({ title, description, examples }: LCAACardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-3xl font-bold text-emerald-700 mb-4">{title}</h3>
      <p className="text-stone-700 mb-6 leading-relaxed">{description}</p>
      <div>
        <h4 className="text-sm font-semibold text-stone-900 mb-3 uppercase tracking-wide">Examples</h4>
        <ul className="space-y-2">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start text-stone-600 text-sm">
              <span className="text-emerald-700 mr-2">→</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
