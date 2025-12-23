import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Black Cockatoo Valley
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-200 max-w-3xl mx-auto leading-relaxed">
            Low-impact eco-residencies and R&D prototyping on 150 acres of threatened species habitat.
            Conservation-first experiences on Jinibara lands.
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
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-8 text-center">
            Careful Expressions of LCAA
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed mb-6">
            Activities at Black Cockatoo Valley are careful expressions of Listen, Curiosity, Action, Art (LCAA)—low-impact
            prototyping that supports conservation, community wellbeing, and exploring shared stewardship.
            Limited and phased to align with ecology.
          </p>
          <p className="text-lg text-stone-700 leading-relaxed">
            Our 150-acre site on Jinibara lands offers serene, conservation-focused experiences with views to the Mary River,
            creeks, and forest down to Elaman Creek. Every activity strengthens habitat and storytelling.
          </p>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <OfferingCard
              title="R&D Residencies"
              description="Low-impact eco-residencies for focused prototyping—immersive stays informing platforms like habitat monitoring and ethical AI tools. Limited availability to protect habitat."
              link="/residencies"
              linkText="Learn More"
            />
            <OfferingCard
              title="Workshops & Events"
              description="Small-group sessions on regeneration, weed monitoring, species observation, and conservation practices. R&D learning aligned with our ecology-first approach."
              link="/activities"
              linkText="View Workshops"
            />
            <OfferingCard
              title="June's Patch"
              description="A special garden space dedicated to community learning and regenerative practices. Seasonal gatherings and hands-on experiences in sustainable cultivation."
              link="/activities#junes-patch"
              linkText="Discover More"
            />
          </div>
        </div>
      </section>

      {/* Conservation Focus */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Conservation First
          </h2>
          <p className="text-xl text-emerald-100 leading-relaxed mb-8">
            We prioritize low-volume, premium experiences that protect threatened species habitat.
            No extractive events—every activity supports restoration, careful observation, and
            building pathways to community co-stewardship.
          </p>
          <Link
            href="/about"
            className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            Our Approach
          </Link>
        </div>
      </section>

      {/* The Harvest Link */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Looking for Community Workshops & Harvest Shares?
          </h2>
          <p className="text-lg text-stone-700 mb-8">
            Visit The Harvest for community-led workshops, shared meals, seasonal gatherings,
            and CSA shares—phased activation building toward local stewardship.
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

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-stone-900 mb-6">
            Ready to Experience Black Cockatoo Valley?
          </h2>
          <p className="text-lg text-stone-700 mb-8">
            Connect with us to learn about upcoming residencies, workshops, and conservation experiences.
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

interface OfferingCardProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

function OfferingCard({ title, description, link, linkText }: OfferingCardProps) {
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
