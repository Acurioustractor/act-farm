import Link from 'next/link';

export const metadata = {
  title: "June's Patch | A Curious Tractor Farm",
  description: 'A prescription to nature project nourishing healthcare workers through fresh food, time on land, and experience-based wellbeing.',
};

export default function JunesPatchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            A Seed Taking Root on Jinibara Country
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">June's Patch</h1>
          <p className="text-2xl md:text-3xl text-emerald-50 leading-relaxed">
            A prescription to nature—co-designed with healthcare workers to nourish
            the people holding the health system, so they can better hold everyone else.
          </p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">The Soil This Grows From</h2>
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="text-xl mb-6 leading-relaxed">
              <strong>If we look after the people holding the health system, they can better look after everyone else.</strong>
            </p>
            <p className="mb-6">
              Not another clinical program. <strong>Fresh food</strong>, <strong>time on Country</strong>, and{' '}
              <strong>experience-based wellbeing</strong>—hands in soil, shared meals, and
              restoration that starts with the carers.
            </p>
            <p className="mb-6">
              At its heart, June's Patch is a <strong>food garden + experience subscription</strong>: participants
              receive produce and are invited into restorative, practical experiences—gardening, workshops, tours,
              shared meals, non-clinical outdoor time—that rebuild energy, connection, and agency.
              This is LCAA in practice: listening to healthcare workers, getting curious about what
              actually restores them, acting through food and land, and sharing the story.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">How It Grows</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard
              step="1"
              title="Listen → Design → Test"
              description="Ground the work in evidence and community voice. Design the space and experience together. Pilot and learn in the real world."
            />
            <ProcessCard
              step="2"
              title="Community-Led Partnerships"
              description="Co-designed with health workers (Wishlist), researchers (USC), and community collaborators. Communities lead; we support."
            />
            <ProcessCard
              step="3"
              title="Rooted in Country"
              description="Operates at Black Cockatoo Valley on Jinibara Country—the land itself is part of the intervention, not just the backdrop."
            />
          </div>
        </div>
      </section>

      {/* What We're Proving */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">What We're Learning</h2>
          <div className="space-y-6">
            <ProofPoint
              title="Nature + food + structured experiences can reduce stress and burnout"
              description="Healthcare workers need connection to something restorative, tangible, and outside the hospital system—not another program to attend."
            />
            <ProofPoint
              title="Caring for carers has downstream impact"
              description="When healthcare workers are nourished, the care they provide to patients and community strengthens measurably. The harvest flows outward."
            />
            <ProofPoint
              title="The model can be forked and replicated"
              description="Not as a rigid program, but as a living place-based practice—forkable, adaptable, designed for communities to make it their own."
            />
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">What Participants Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ExperienceCard
              title="Fresh Produce Subscription"
              items={[
                'Seasonal vegetables and herbs grown at Black Cockatoo Valley',
                'Regular harvest boxes delivered or picked up',
                'Connection to the source of your food',
                'Understanding of regenerative growing practices'
              ]}
            />
            <ExperienceCard
              title="Restorative Land Experiences"
              items={[
                'Hands-on gardening and planting sessions',
                'Guided nature walks through 150 acres',
                'Shared meals using garden produce',
                'Non-clinical outdoor time and restoration'
              ]}
            />
            <ExperienceCard
              title="Community & Connection"
              items={[
                'Meet other healthcare workers outside clinical settings',
                'Build relationships with local food growers',
                'Participate in seasonal harvest gatherings',
                'Share skills and knowledge in informal settings'
              ]}
            />
            <ExperienceCard
              title="Research & Impact"
              items={[
                'Contribute to wellbeing research with USC',
                'Help shape future healthcare worker support',
                'Document your experience and learnings',
                'Be part of an evidence-based intervention'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">Growing Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PartnerCard
              name="Wishlist Community"
              description="Healthcare workers who co-design this work—not beneficiaries, but partners shaping what care looks like."
            />
            <PartnerCard
              name="University of the Sunshine Coast"
              description="Research collaboration grounding the practice in evidence—listening deeply to what works and why."
            />
            <PartnerCard
              name="Black Cockatoo Valley"
              description="The Country itself—150 acres of threatened species habitat where restoration and wellbeing grow from the same soil."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Be Part of This Seed</h2>
          <p className="text-xl text-emerald-100 mb-8">
            We're in the pilot phase—growing carefully, learning from each season.
            If you're a healthcare worker, researcher, or organisation aligned with this
            work, we'd love to hear what you're growing too.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            Express Your Interest
          </Link>
        </div>
      </section>
    </div>
  );
}

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
}

function ProcessCard({ step, title, description }: ProcessCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="text-4xl font-bold text-emerald-700 mb-4">{step}</div>
      <h3 className="text-2xl font-semibold text-stone-900 mb-4">{title}</h3>
      <p className="text-stone-700 leading-relaxed">{description}</p>
    </div>
  );
}

interface ProofPointProps {
  title: string;
  description: string;
}

function ProofPoint({ title, description }: ProofPointProps) {
  return (
    <div className="border-l-4 border-emerald-700 pl-6 py-2">
      <h3 className="text-xl font-semibold text-stone-900 mb-2">{title}</h3>
      <p className="text-stone-700 leading-relaxed">{description}</p>
    </div>
  );
}

interface ExperienceCardProps {
  title: string;
  items: string[];
}

function ExperienceCard({ title, items }: ExperienceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold text-stone-900 mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-emerald-700 font-bold mr-3 mt-1">✓</span>
            <span className="text-stone-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface PartnerCardProps {
  name: string;
  description: string;
}

function PartnerCard({ name, description }: PartnerCardProps) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-stone-900 mb-3">{name}</h3>
      <p className="text-stone-700 leading-relaxed">{description}</p>
    </div>
  );
}
