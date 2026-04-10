import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-sm uppercase tracking-widest text-stone-300 mb-4">
            On Jinibara Country
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Black Cockatoo Valley
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto leading-relaxed">
            150 acres of threatened species habitat where conservation, story,
            and shared stewardship take root. Every seed planted here grows
            toward community hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/residencies"
              className="bg-white text-stone-900 px-8 py-4 rounded-full font-semibold hover:bg-stone-100 transition-colors"
            >
              Explore Residencies
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* ACT Identity + LCAA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-emerald-700 mb-4 text-center">
            Part of the A Curious Tractor ecosystem
          </p>
          <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
            Listen. Curiosity. Action. Art.
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            A Curious Tractor is a regenerative innovation ecosystem partnering with
            marginalised communities to dismantle extractive systems. Like a tractor's
            power take-off, we transfer resources, knowledge, and capacity to
            community-led initiatives—then hand over the keys.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Black Cockatoo Valley is where that work meets the soil. Every residency,
            workshop, and gathering here follows our LCAA method—deep listening to
            Country and community, curious prototyping, tangible action, and storytelling
            that moves people toward care.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            The land stretches across Jinibara Country near Witta, with views to the
            Mary River, creeks winding down to Elaman Creek, and forest that shelters
            threatened species. Everything we do strengthens this habitat.
          </p>
        </div>
      </section>

      {/* Seeds We're Growing */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 text-center">
            Seeds We're Growing
          </h2>
          <p className="text-lg text-stone-600 mb-12 text-center max-w-2xl mx-auto">
            Low-impact, conservation-first practices that fund habitat restoration
            and build pathways to community co-stewardship.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <SeedCard
              title="R&D Residencies"
              description="Immersive stays on Country for focused prototyping—habitat monitoring, ethical AI, regenerative design. Limited availability because the land comes first."
              link="/residencies"
              linkText="Learn More"
            />
            <SeedCard
              title="Workshops & Working Bees"
              description="Small-group sessions in regeneration, species observation, and conservation practice. Learning by doing, guided by ecology's seasons."
              link="/activities"
              linkText="View Workshops"
            />
            <SeedCard
              title="June's Patch"
              description="A wellbeing garden co-designed with healthcare workers. Seasonal food, hands in soil, and regenerative cultivation that feeds both people and habitat."
              link="/activities#junes-patch"
              linkText="Discover More"
            />
          </div>
        </div>
      </section>

      {/* Conservation First */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Conservation First. Always.
          </h2>
          <p className="text-xl text-emerald-100 leading-relaxed mb-4">
            No extractive events. No high-volume tourism. No glossy retreats.
          </p>
          <p className="text-xl text-emerald-100 leading-relaxed mb-8">
            Every activity on this land supports restoration, careful observation,
            and the long work of building pathways to community co-stewardship.
            40% of profits flow back to community ownership—because value
            belongs where it's grown.
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            How We Practice Care
          </Link>
        </div>
      </section>

      {/* The Harvest */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            The Harvest
          </h2>
          <p className="text-lg text-stone-700 mb-8">
            Community-led workshops, shared meals, seasonal gatherings, and CSA
            shares—the harvest is what happens when seeds reach community hands.
            Phased activation building toward local stewardship.
          </p>
          <a
            href="https://theharvest.acurioustractor.com"
            className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit The Harvest →
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Walk With Us
          </h2>
          <p className="text-lg text-stone-700 mb-8">
            We don't have all the answers—but we're cultivating them together.
            Get in touch to learn about residencies, workshops, and ways to
            steward this land alongside us.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-stone-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-stone-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

interface SeedCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function SeedCard({ title, description, link, linkText }: SeedCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-stone-900 mb-4">{title}</h3>
      <p className="text-stone-700 mb-6 leading-relaxed">{description}</p>
      <Link
        href={link}
        className="inline-block text-emerald-700 font-semibold hover:text-emerald-800 transition-colors"
      >
        {linkText} →
      </Link>
    </div>
  );
}
