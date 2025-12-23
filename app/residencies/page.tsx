import Link from 'next/link';

export const metadata = {
  title: 'R&D Residencies | A Curious Tractor Farm',
  description: 'Low-impact eco-residencies for focused prototyping at Black Cockatoo Valley. Immersive stays informing conservation and ethical technology platforms.',
};

export default function ResidenciesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">R&D Residencies</h1>
          <p className="text-2xl text-stone-200 leading-relaxed">
            Low-impact eco-residencies for focused prototyping. Immersive stays that inform platforms
            like habitat monitoring, ethical AI tools, and regenerative practice research.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8">Immersive Conservation R&D</h2>
          <div className="prose prose-lg max-w-none text-stone-700">
            <p className="text-xl mb-6">
              Residencies at Black Cockatoo Valley offer deep immersion in conservation-first prototyping—stays
              that test ideas while restoring habitat.
            </p>
            <p className="mb-6">
              Limited availability to protect threatened species habitat. Each residency contributes to our
              ongoing research into regenerative practices, habitat monitoring, and ethical technology development.
            </p>
            <p>
              150 acres of Jinibara lands with views to the Mary River, native forest, and creek systems.
              Your work becomes part of a living laboratory for conservation innovation.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <InclusionCard
              title="Eco-Accommodation"
              items={[
                'Private, serene space for focused work',
                'Low-impact design integrated with habitat',
                'Views over conservation land',
                'Quiet environment for deep thinking'
              ]}
            />
            <InclusionCard
              title="Access to Land & Resources"
              items={[
                '150 acres for observation and research',
                'Habitat monitoring equipment and tools',
                'Conservation data and species records',
                'Walking trails and natural water features'
              ]}
            />
            <InclusionCard
              title="R&D Support"
              items={[
                'Collaboration with conservation team',
                'Access to ongoing restoration projects',
                'Integration with ethical AI prototyping',
                'Documentation and learning resources'
              ]}
            />
            <InclusionCard
              title="Community & Knowledge"
              items={[
                'Connection with Jinibara knowledge holders',
                'Engagement with research partners (USC)',
                'Optional participation in workshops',
                'Sharing learnings with broader network'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Residency Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">Residency Types</h2>
          <div className="space-y-8">
            <ResidencyType
              title="Conservation Technology R&D"
              duration="1-2 weeks"
              focus="Prototyping habitat monitoring tools, ethical AI platforms, or biodiversity observation systems. Work directly with threatened species data and conservation challenges."
              suitedFor="Technologists, researchers, designers working on conservation-aligned projects"
            />
            <ResidencyType
              title="Regenerative Practice Research"
              duration="1-4 weeks"
              focus="Deep exploration of regenerative agriculture, native species restoration, or ecosystem recovery methods. Contribute to our ongoing land stewardship learning."
              suitedFor="Ecologists, permaculture practitioners, land managers, environmental researchers"
            />
            <ResidencyType
              title="Creative Documentation & Storytelling"
              duration="1-2 weeks"
              focus="Document conservation work through writing, photography, film, or other media. Create 'felt stories' that communicate the importance of habitat protection."
              suitedFor="Writers, photographers, filmmakers, artists working with environmental themes"
            />
            <ResidencyType
              title="Community Wellbeing Research"
              duration="2-3 weeks"
              focus="Research connections between nature, food systems, and community health. Collaborate on June's Patch evaluation or related wellbeing interventions."
              suitedFor="Health researchers, social scientists, community development practitioners"
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Residency Principles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <PrincipleCard
              title="Low-Impact & Limited"
              description="Maximum 2-3 concurrent residencies. No high-volume extractive models. Every stay protects and strengthens habitat."
            />
            <PrincipleCard
              title="R&D Focused"
              description="Residencies inform tangible outputs—platforms, research, practices. Not retreats, but active prototyping and learning."
            />
            <PrincipleCard
              title="Conservation First"
              description="All activities align with habitat restoration and species protection. Your work contributes to measurable ecological outcomes."
            />
            <PrincipleCard
              title="Phased & Transitional"
              description="Piloting toward community co-stewardship. Early residents help shape future governance and ownership models."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">Investment</h2>
          <div className="bg-white p-10 rounded-lg shadow-sm max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-stone-900 mb-2">$300-$500</div>
              <div className="text-xl text-stone-600">per night</div>
            </div>
            <ul className="space-y-3 text-stone-700 mb-8">
              <li className="flex items-start">
                <span className="text-emerald-700 font-bold mr-3">✓</span>
                <span>Premium pricing reflects low-volume, high-impact model</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 font-bold mr-3">✓</span>
                <span>Prepaid booking ensures commitment and stable cashflow</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 font-bold mr-3">✓</span>
                <span>Revenue supports habitat restoration and conservation work</span>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-700 font-bold mr-3">✓</span>
                <span>Limited availability maintains ecological integrity</span>
              </li>
            </ul>
            <p className="text-sm text-stone-600 text-center">
              Discounts available for longer stays (2+ weeks) and research partnerships.
              Scholarships considered on case-by-case basis for aligned projects.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">Ready to Apply?</h2>
          <p className="text-lg text-stone-700 mb-8">
            Residencies are carefully selected to align with our conservation mission and R&D focus.
            Tell us about your project and how it connects to our work.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-stone-800 transition-colors"
          >
            Submit Residency Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}

interface InclusionCardProps {
  title: string;
  items: string[];
}

function InclusionCard({ title, items }: InclusionCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <h3 className="text-2xl font-semibold text-stone-900 mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-emerald-700 font-bold mr-3">→</span>
            <span className="text-stone-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ResidencyTypeProps {
  title: string;
  duration: string;
  focus: string;
  suitedFor: string;
}

function ResidencyType({ title, duration, focus, suitedFor }: ResidencyTypeProps) {
  return (
    <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-stone-900">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <h3 className="text-2xl font-semibold text-stone-900 mb-2 md:mb-0">{title}</h3>
        <span className="inline-block bg-stone-900 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
          {duration}
        </span>
      </div>
      <p className="text-stone-700 mb-4 leading-relaxed">{focus}</p>
      <div className="text-sm text-stone-600">
        <span className="font-semibold">Suited for:</span> {suitedFor}
      </div>
    </div>
  );
}

interface PrincipleCardProps {
  title: string;
  description: string;
}

function PrincipleCard({ title, description }: PrincipleCardProps) {
  return (
    <div className="bg-emerald-800/50 backdrop-blur-sm p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-emerald-100 leading-relaxed">{description}</p>
    </div>
  );
}
