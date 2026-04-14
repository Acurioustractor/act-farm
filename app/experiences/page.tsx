import Link from 'next/link';
import type { Metadata } from 'next';
import {
  groupExperiencesByCategory,
  categoryLabels,
} from '@/lib/experiences/catalog';
import ExperienceCard from '@/components/experiences/ExperienceCard';

export const metadata: Metadata = {
  title: 'Experiences | Black Cockatoo Valley',
  description:
    'The full catalog of ways people come to Black Cockatoo Valley — stays, residencies, retreats, facilitated sessions, health intensives, makers’ weekends, and harvest pairings with The Harvest in Witta.',
};

export default function ExperiencesIndex() {
  const groups = groupExperiencesByCategory();

  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="ui-label text-site-muted mb-4">What we offer</p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-light text-site-ink mb-6 leading-[1.02]">
          Experiences
        </h1>
        <p className="text-xl md:text-2xl text-site-muted max-w-2xl leading-relaxed font-light">
          Every way people come to Black Cockatoo Valley. Stays, residencies,
          retreats, sessions, health intensives, makers’ weekends, and the
          pairings with The Harvest in Witta.
        </p>
        <p className="text-base md:text-lg text-site-muted mt-6 max-w-2xl leading-relaxed">
          We take inquiries, not instant bookings — except for direct cabin
          stays, which run through{' '}
          <Link href="/stay" className="text-site-green hover:opacity-80">
            /stay
          </Link>
          . Every inquiry gets read personally.
        </p>
      </section>

      {/* Category jump nav */}
      <section className="max-w-[960px] mx-auto px-4 pb-8 md:pb-12">
        <div className="flex flex-wrap gap-2">
          {groups.map((g) => (
            <a
              key={g.category}
              href={`#${g.category}`}
              className="ui-label px-3 py-1.5 rounded-full border border-site-line bg-site-surface text-site-ink hover:border-site-green hover:text-site-green transition-colors"
            >
              {g.label}
            </a>
          ))}
        </div>
      </section>

      {/* Grouped experiences */}
      {groups.map((group, i) => (
        <section
          key={group.category}
          id={group.category}
          className={`py-16 md:py-20 scroll-mt-20 ${
            i % 2 === 0 ? 'bg-site-bg' : 'bg-site-surface'
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-4">
            <p className="ui-label text-site-muted mb-3">
              {categoryLabels[group.category]}
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-10 leading-tight">
              {group.label}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {group.items.map((exp) => (
                <ExperienceCard key={exp.slug} experience={exp} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Footer note */}
      <section className="py-16 md:py-20 bg-site-bg border-t border-site-line">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <p className="ui-label text-site-muted mb-4">Not listed?</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-site-ink mb-5 leading-tight">
            Bring your own shape.
          </h2>
          <p className="text-lg text-site-muted mb-8">
            We design new experiences with partners who’ve found something
            real to work on. If none of these fit, tell us what you’re up to.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-site-green text-white px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
