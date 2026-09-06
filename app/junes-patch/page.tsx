import Link from 'next/link';

export const metadata = {
  title: "June's Patch | Black Cockatoo Valley",
  description: 'Nature prescriptions for healthcare workers. Therapeutic gardens, fresh food, time on Country, and evidence-based social prescribing on Jinibara Country.',
};

export default function JunesPatchPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-site-ink text-white py-28 md:py-36">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-clay mb-6">
            LCAA Phase: Listen + Action
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.05] mb-8">
            June's Patch
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-white/60 leading-relaxed">
            Nature prescriptions for healthcare workers. Not another clinical program —
            soil, plants, community, and time. Responding to a mental health crisis
            in the caring professions through land.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-10">The Hidden Crisis</h2>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7]">
            <p className="text-xl text-site-ink leading-relaxed">
              <strong>If we look after the people holding the health system, they can better look after everyone else.</strong>
            </p>
            <p>
              Healthcare worker burnout is not new, but its scale has intensified. Structural
              understaffing, pandemic aftermath, moral injury from systemic failures, and the
              emotional labour of holding space for suffering day after day — these compound into
              chronic psychological stress that conventional EAP responses struggle to address.
            </p>
            <p>
              Isolation is a particular driver. Healthcare workers often feel they cannot show
              vulnerability to colleagues or employers. June's Patch creates spaces where showing
              up, getting hands dirty, and being in community <em>is</em> the intervention — no
              disclosure required.
            </p>
          </div>
        </div>
      </section>

      {/* The Model */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-14 text-center">The Model</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ModelCard
              title="Therapeutic Gardens"
              description="Nature-based environments designed according to evidence from therapeutic landscape research — sensory richness, productive growing, safe enclosure, and community scale."
            />
            <ModelCard
              title="Nature Prescriptions"
              description="Partnerships with healthcare organisations enable formal referral pathways. A GP or manager can write a nature prescription directing a worker to June's Patch — normalising help-seeking within existing health infrastructure."
            />
            <ModelCard
              title="Evidence-Based Research"
              description="Building an evidence base for therapeutic horticulture as a mental health intervention for healthcare workers. Contributing to the growing literature on social prescribing with USC research collaboration."
            />
            <ModelCard
              title="Phased Community Ownership"
              description="Structured for healthcare worker communities to become stewards of their own garden sites. Reducing dependence on ACT and deepening the ownership that makes therapeutic environments work."
            />
          </div>
        </div>
      </section>

      {/* How It Grows */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-14 text-center">How It Grows</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProcessCard
              step="1"
              title="Listen, Design, Test"
              description="Extended time with healthcare workers. Story circles. Understanding what care looks and feels like, what people need beyond what the clinical system can offer. That listening shapes everything."
            />
            <ProcessCard
              step="2"
              title="Community-Led Partnerships"
              description="Co-designed with health workers (Wishlist), researchers (USC), and community collaborators. A GP can prescribe time at June's Patch the same way they prescribe medication."
            />
            <ProcessCard
              step="3"
              title="Rooted in Country"
              description="Operates at Black Cockatoo Valley on Jinibara Country. The land itself is part of the intervention, not just the backdrop. The garden changes how people relate to place."
            />
          </div>
        </div>
      </section>

      {/* What We're Learning */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-10">What We're Learning</h2>
          <div className="space-y-8">
            <ProofPoint
              title="Showing up is the intervention"
              description="Healthcare workers don't need another program to attend. They need soil under their fingernails, shared meals, and restoration that starts with the carers. No disclosure required."
            />
            <ProofPoint
              title="Caring for carers has downstream impact"
              description="When healthcare workers are nourished, the care they provide strengthens measurably. The harvest flows outward — from garden to worker to patient to community."
            />
            <ProofPoint
              title="The model is forkable"
              description="Not a rigid program but a living place-based practice. Designed for communities to make it their own. Each garden site can be governed by the healthcare workers who use it."
            />
          </div>
        </div>
      </section>

      {/* What Participants Experience */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-14 text-center">What Participants Experience</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ExperienceCard
              title="Fresh Produce"
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
                'Guided walks through 138 acres of native forest',
                'Shared meals using garden produce',
                'Non-clinical outdoor time and restoration'
              ]}
            />
            <ExperienceCard
              title="Community"
              items={[
                'Meet other healthcare workers outside clinical settings',
                'Build relationships with local food growers',
                'Seasonal harvest gatherings',
                'Share skills in informal settings'
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
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-14 text-center">Growing Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PartnerCard
              name="Wishlist Community"
              description="Healthcare workers who co-design this work — not beneficiaries, but partners shaping what care looks like."
            />
            <PartnerCard
              name="University of the Sunshine Coast"
              description="Research collaboration grounding the practice in evidence — listening deeply to what works and why."
            />
            <PartnerCard
              name="Black Cockatoo Valley"
              description="The Country itself — 138 acres of threatened species habitat where restoration and wellbeing grow from the same soil."
            />
          </div>
        </div>
      </section>

      {/* LCAA Connection */}
      <section className="py-16 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="bg-site-surface p-8 rounded-[var(--site-radius)] border-l-4 border-site-clay">
            <h3 className="text-lg font-light text-site-ink mb-3">LCAA in Practice</h3>
            <p className="text-site-muted leading-relaxed">
              June's Patch is LCAA made tangible. <strong className="text-site-ink">Listen</strong> to healthcare
              workers — what is actually happening, what does care feel like, what do people need
              beyond what the clinical system can offer? Get <strong className="text-site-ink">curious</strong> about what
              actually restores them. Take <strong className="text-site-ink">action</strong> through food and land.
              Share the <strong className="text-site-ink">art</strong> — the story of what grows when you tend the carers.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-site-ink text-white">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light mb-8">Be Part of This Seed</h2>
          <p className="text-xl text-white/60 mb-10">
            We're in the pilot phase — growing carefully, learning from each season.
            If you're a healthcare worker, researcher, or organisation aligned with this
            work, we'd love to hear what you're growing too.
          </p>
          <Link
            href="/connect?interest=junes-patch"
            className="inline-block bg-site-green text-white px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Express Your Interest
          </Link>
        </div>
      </section>
    </div>
  );
}

function ModelCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-hover bg-site-bg p-8 rounded-[var(--site-radius)]">
      <h3 className="text-2xl font-light text-site-ink mb-4">{title}</h3>
      <p className="text-site-muted leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="card-hover bg-site-bg p-8 rounded-[var(--site-radius)]">
      <div className="text-4xl font-light text-site-clay mb-4">{step}</div>
      <h3 className="text-2xl font-light text-site-ink mb-4">{title}</h3>
      <p className="text-site-muted leading-relaxed">{description}</p>
    </div>
  );
}

function ProofPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-l-4 border-site-green pl-6 py-2">
      <h3 className="text-xl font-light text-site-ink mb-2">{title}</h3>
      <p className="text-site-muted leading-relaxed">{description}</p>
    </div>
  );
}

function ExperienceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-hover bg-site-surface p-8 rounded-[var(--site-radius)]">
      <h3 className="text-2xl font-light text-site-ink mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-site-green font-bold mr-3 mt-0.5">&#10003;</span>
            <span className="text-site-muted">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnerCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-light text-site-ink mb-3">{name}</h3>
      <p className="text-site-muted leading-relaxed">{description}</p>
    </div>
  );
}
