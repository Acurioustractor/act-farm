import Link from 'next/link';
import { experiences } from '@/lib/experiences/catalog';

/**
 * Homepage open-invitations strip — surfaces experiences actively
 * recruiting their inaugural cohort or placement. Reads `inviteFirst`
 * off the catalog so copy stays in one place (per-experience) and this
 * section grows or shrinks without code changes.
 *
 * Renders nothing when no experiences are recruiting — same discipline
 * as StoriesStrip and CaseStudyStrip.
 */
export default function OpenInvitationsStrip() {
  const openInvites = experiences.filter((e) => e.inviteFirst);
  if (openInvites.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-site-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-baseline justify-between mb-10 md:mb-14 flex-wrap gap-4">
          <div>
            <p className="ui-label text-site-green mb-3">Open invitations</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink">
              Be our first.
            </h2>
            <p className="text-site-muted mt-3 text-lg max-w-xl leading-relaxed">
              Some of what we offer is actively looking for its inaugural
              cohort or placement. If one of these fits your practice,
              we&apos;d love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {openInvites.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiences/${exp.slug}#inquire`}
              className="group block border border-dashed border-site-green/40 rounded-[var(--site-radius)] p-7 md:p-8 bg-site-surface hover:border-site-green transition-colors"
            >
              <p className="ui-label text-site-green mb-3">{exp.title}</p>
              <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] font-light text-site-ink mb-4 leading-snug group-hover:text-site-green transition-colors">
                {exp.inviteFirst!.label}.
              </h3>
              <p className="text-site-muted leading-relaxed text-[15px] mb-5 line-clamp-4">
                {exp.inviteFirst!.body}
              </p>
              <span className="inline-block text-site-green font-medium text-sm font-sans">
                Send us an inquiry &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
