import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { caseStudies, findCaseStudy } from '@/lib/case-studies/catalog';
import { findExperience } from '@/lib/experiences/catalog';
import ThemeBadge from '@/components/experiences/ThemeBadge';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = findCaseStudy(slug);
  if (!cs) return { title: 'Case study not found' };
  return {
    title: `${cs.title} | Black Cockatoo Valley`,
    description: cs.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const cs = findCaseStudy(slug);
  if (!cs) notFound();

  const relatedExperiences = cs.experienceSlugs
    .map(findExperience)
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-10 md:pb-14">
        <Link
          href="/case-studies"
          className="ui-label text-site-muted hover:text-site-ink transition-colors"
        >
          &larr; All case studies
        </Link>
        <p className="ui-label text-site-muted mt-6 mb-4">{cs.period}</p>
        <h1 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-light text-site-ink mb-6 leading-[1.05]">
          {cs.title}
        </h1>
        <p className="text-xl md:text-2xl text-site-muted leading-relaxed font-light">
          {cs.summary}
        </p>
        {cs.themes.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-8">
            {cs.themes.map((t) => (
              <ThemeBadge key={t} theme={t} />
            ))}
          </div>
        ) : null}
      </section>

      {/* Deep read pointer */}
      <section className="bg-site-surface py-16 md:py-20">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-3">Deep read</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-site-ink leading-tight mb-4">
            The full case study lives in the ACT wiki.
          </h2>
          <p className="text-site-muted leading-relaxed text-lg mb-6">
            Case studies publish to the wiki first and land here as a summary
            with cross-links. The canonical source is:
          </p>
          <code className="block text-sm text-site-ink bg-site-bg px-4 py-3 rounded-[var(--site-radius)] break-all">
            {cs.wikiPath}
          </code>
        </div>
      </section>

      {/* Related experiences */}
      {relatedExperiences.length > 0 ? (
        <section className="py-16 md:py-20 bg-site-bg">
          <div className="max-w-[960px] mx-auto px-4">
            <p className="ui-label text-site-muted mb-3">Offered as</p>
            <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-site-ink mb-8 leading-tight">
              The experience behind this case study
            </h2>
            <div className="space-y-4">
              {relatedExperiences.map((exp) => (
                <Link
                  key={exp.slug}
                  href={`/experiences/${exp.slug}`}
                  className="card-hover block bg-site-surface p-6 md:p-7 rounded-[var(--site-radius)] group"
                >
                  <h3 className="text-[22px] font-light text-site-ink mb-2 leading-snug group-hover:text-site-green transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-site-muted leading-relaxed text-[15px]">
                    {exp.summary}
                  </p>
                  <span className="inline-block mt-4 text-site-green font-medium text-sm font-sans">
                    Inquire about this &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Cross-links */}
      <section className="py-16 md:py-20 bg-site-surface border-t border-site-line">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <p className="ui-label text-site-muted mb-4">Explore more</p>
          <nav className="flex items-center justify-center gap-6 md:gap-10 flex-wrap">
            <Link href="/case-studies" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              All case studies
            </Link>
            <Link href="/experiences" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              All experiences
            </Link>
            <Link href="/country" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              Country
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
