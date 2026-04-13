import Link from 'next/link';
import HomeHero from '@/components/vision/HomeHero';
import InteractiveMap from '@/components/map/InteractiveMap';

export default function Home() {
  return (
    <div>
      {/* Video hero — full screen, centred logo + headline */}
      <HomeHero />

      {/* Map */}
      <section>
        <InteractiveMap compact />
      </section>

      {/* Use case cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-stone-900 mb-10 text-center">
            Use the Farm
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <UseCaseCard
              title="Workshops"
              description="Run your program in an outdoor setting with creek walks, native forest, and space to think. Groups of 8–20."
              href="/use-the-farm#workshops"
            />
            <UseCaseCard
              title="Events & Weddings"
              description="Low-key celebrations on 150 acres with views to the Mary River. Rustic, conservation-aligned, up to 40 people."
              href="/use-the-farm#events"
            />
            <UseCaseCard
              title="Retreats & Stays"
              description="Eco-accommodation for small groups. Bring your own program or let us help design one around the land."
              href="/use-the-farm#retreats"
            />
            <UseCaseCard
              title="R&D Residencies"
              description="1–4 week stays for conservation technology, regenerative practice, creative documentation, or wellbeing research."
              href="/use-the-farm#residencies"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">
            Want to use the farm?
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            Tell us what you're planning. We'll get back to you within a few days.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Bottom nav links */}
      <nav className="py-10 bg-white border-t border-stone-200">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap px-4">
          {[
            { href: '/map', label: 'Explore the Map' },
            { href: '/use-the-farm', label: 'Use the Farm' },
            { href: '/vision', label: 'Vision' },
            { href: '/about', label: 'About' },
            { href: '/junes-patch', label: "June's Patch" },
            { href: '/connect', label: 'Get in Touch' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs tracking-[0.15em] uppercase font-semibold text-stone-400 hover:text-stone-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

function UseCaseCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="block bg-stone-50 p-6 rounded-lg hover:bg-stone-100 transition-colors group">
      <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-emerald-700 transition-colors">
        {title}
      </h3>
      <p className="text-stone-600 leading-relaxed text-sm">{description}</p>
      <span className="inline-block mt-4 text-emerald-700 font-medium text-sm">
        Learn more →
      </span>
    </Link>
  );
}
