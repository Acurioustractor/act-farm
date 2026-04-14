import Link from 'next/link';
import HomeHero from '@/components/vision/HomeHero';
import InteractiveMap from '@/components/map/InteractiveMap';
import StoriesStrip from '@/components/sections/StoriesStrip';
import CaseStudyStrip from '@/components/sections/CaseStudyStrip';
import OpenInvitationsStrip from '@/components/sections/OpenInvitationsStrip';

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
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="ui-label text-site-muted text-center mb-4">What you can do here</p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-14 text-center">
            Use the Farm
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <UseCaseCard
              title="Workshops"
              description="Run your program in an outdoor setting with creek walks, native forest, and space to think. Groups of 8-20."
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
              description="1-4 week stays for conservation technology, regenerative practice, creative documentation, or wellbeing research."
              href="/use-the-farm#residencies"
            />
          </div>
        </div>
      </section>

      {/* Open invitations — experiences actively recruiting their first cohort */}
      <OpenInvitationsStrip />

      {/* Stories strip — EL syndicated content, renders nothing if empty */}
      <StoriesStrip />

      {/* Case studies strip — evidence from the catalog, renders nothing if empty */}
      <CaseStudyStrip />

      {/* Contact CTA */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-5">
            Want to use the farm?
          </h2>
          <p className="text-lg text-site-muted mb-10">
            Tell us what you're planning. We'll get back to you within a few days.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-site-green text-white px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Bottom nav links */}
      <nav className="py-10 bg-site-bg border-t border-site-line">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap px-4">
          {[
            { href: '/stay', label: 'Stay' },
            { href: '/experiences', label: 'Experiences' },
            { href: '/case-studies', label: 'Case Studies' },
            { href: '/map', label: 'Explore the Map' },
            { href: '/use-the-farm', label: 'Use the Farm' },
            { href: '/residencies', label: 'Residencies' },
            { href: '/country', label: 'Country' },
            { href: '/lcaa', label: 'LCAA Method' },
            { href: '/the-harvest', label: 'The Harvest' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/stories', label: 'Stories' },
            { href: '/vision', label: 'Vision' },
            { href: '/about', label: 'About' },
            { href: '/junes-patch', label: "June's Patch" },
            { href: '/connect', label: 'Get in Touch' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="ui-label text-site-muted hover:text-site-ink transition-colors"
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
    <Link href={href} className="card-hover block bg-site-surface p-6 rounded-[var(--site-radius)] group">
      <h3 className="text-[24px] font-light text-site-ink mb-3 group-hover:text-site-green transition-colors">
        {title}
      </h3>
      <p className="text-site-muted leading-relaxed text-[15px]">{description}</p>
      <span className="inline-block mt-4 text-site-green font-medium text-sm font-sans">
        Learn more &rarr;
      </span>
    </Link>
  );
}
