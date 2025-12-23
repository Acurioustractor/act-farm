import Link from 'next/link';

export const metadata = {
  title: "June's Patch | A Curious Tractor Farm",
  description: 'A prescription to nature project nourishing healthcare workers through fresh food, time on land, and experience-based wellbeing.',
};

export default function JunesPatchPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-800 to-teal-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Healthcare Worker Wellbeing Program
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">June's Patch</h1>
          <p className="text-2xl md:text-3xl text-emerald-50 leading-relaxed">
            A prescription to nature project designed to nourish healthcare workers and, in turn,
            strengthen patient and community wellbeing.
          </p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">The Core Idea</h2>
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="text-xl mb-6 leading-relaxed">
              <strong>If we look after the people holding the health system, they can better look after everyone else.</strong>
            </p>
            <p className="mb-6">
              We do that through <strong>fresh food</strong>, <strong>time on land</strong>, and{' '}
              <strong>experience-based wellbeing</strong> rather than another clinical program.
            </p>
            <p className="mb-6">
              At its heart, June's Patch is a <strong>food garden + experience subscription</strong>: participants
              receive produce and are invited into restorative, practical experiences—gardening, workshops, tours,
              shared meals, non-clinical outdoor time—that rebuild energy, connection, and agency.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard
              step="1"
              title="Research → Design → Test"
              description="Start by grounding the idea in evidence and local needs, then design the space and experience, then pilot and learn in the real world."
            />
            <ProcessCard
              step="2"
              title="Partnership-Led"
              description="Built with health workers (Wishlist community), researchers (University of the Sunshine Coast), and aligned community collaborators."
            />
            <ProcessCard
              step="3"
              title="Place-Based"
              description="Operates at Black Cockatoo Valley in Witta, so the land itself becomes part of the intervention."
            />
          </div>
        </div>
      </section>

      {/* What We're Proving */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">What We're Aiming to Prove</h2>
          <div className="space-y-6">
            <ProofPoint
              title="Nature + food + structured experiences can reduce stress and burnout"
              description="Healthcare workers need more than clinical interventions—they need connection to something restorative, tangible, and outside the hospital system."
            />
            <ProofPoint
              title="A wellbeing investment in staff has downstream benefits"
              description="When healthcare workers are supported and nourished, the quality of care they provide to patients and the broader community improves measurably."
            />
            <ProofPoint
              title="The model can be documented, evaluated, and replicated"
              description="Not as a rigid 'program,' but as a living place-based practice that can be adapted to other contexts and communities."
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
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">Our Partners</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PartnerCard
              name="Wishlist Community"
              description="Healthcare workers and community members who understand the importance of staff wellbeing in delivering quality care."
            />
            <PartnerCard
              name="University of the Sunshine Coast"
              description="Research collaboration providing evidence-based design and evaluation of the program's impact on wellbeing outcomes."
            />
            <PartnerCard
              name="Black Cockatoo Valley"
              description="The land and place that serves as the foundation—150 acres of habitat restoration and regenerative practice."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in June's Patch?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            We're currently in the pilot phase with limited capacity.
            If you're a healthcare worker interested in participating, or a researcher/organization
            interested in collaboration, we'd love to hear from you.
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
