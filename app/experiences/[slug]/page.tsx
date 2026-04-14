import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import type { Metadata } from 'next';
import {
  experiences,
  findExperience,
  categoryLabels,
} from '@/lib/experiences/catalog';
import { caseStudiesForExperience } from '@/lib/case-studies/catalog';
import InquiryForm from '@/components/experiences/InquiryForm';
import CaseStudyCard from '@/components/experiences/CaseStudyCard';
import ThemeBadge from '@/components/experiences/ThemeBadge';
import FirstCaseStudyInvite from '@/components/experiences/FirstCaseStudyInvite';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return experiences
    .filter((e) => !e.directBookingHref)
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exp = findExperience(slug);
  if (!exp) return { title: 'Experience not found' };
  return {
    title: `${exp.title} | Black Cockatoo Valley`,
    description: exp.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const exp = findExperience(slug);
  if (!exp) notFound();

  // Direct-booking experiences (stays) redirect to their dedicated flow
  if (exp.directBookingHref) redirect(exp.directBookingHref);

  const relatedCases = caseStudiesForExperience(exp.slug);

  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-10 md:pb-14">
        <Link
          href="/experiences"
          className="ui-label text-site-muted hover:text-site-ink transition-colors"
        >
          &larr; All experiences
        </Link>
        <p className="ui-label text-site-muted mt-6 mb-4">
          {categoryLabels[exp.category]}
        </p>
        <h1 className="text-[clamp(2.25rem,5.5vw,4.5rem)] font-light text-site-ink mb-6 leading-[1.05]">
          {exp.title}
        </h1>
        <p className="text-xl md:text-2xl text-site-muted leading-relaxed font-light">
          {exp.summary}
        </p>
        {exp.themes.length > 0 ? (
          <div className="flex flex-wrap gap-2 mt-8">
            {exp.themes.map((t) => (
              <ThemeBadge key={t} theme={t} />
            ))}
          </div>
        ) : null}
      </section>

      {/* Price + inquiry */}
      <section id="inquire" className="bg-site-surface py-16 md:py-20 scroll-mt-20">
        <div className="max-w-[960px] mx-auto px-4 grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          <div className="md:col-span-3 space-y-6">
            <div>
              <p className="ui-label text-site-muted mb-3">How this works</p>
              <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-site-ink leading-tight mb-4">
                Inquire first. We’ll reply within a few working days.
              </h2>
              <p className="text-site-muted leading-relaxed text-lg">
                Every inquiry gets read personally. We usually want a short call
                before we confirm anything — who you are, what you’re
                working on, what the fit is.
              </p>
            </div>

            {exp.pricing ? (
              <div className="bg-site-bg rounded-[var(--site-radius)] p-5">
                <p className="ui-label text-site-muted mb-2">Indicative</p>
                <p className="text-site-ink leading-relaxed">{exp.pricing}</p>
              </div>
            ) : null}

            <p className="text-sm text-site-muted leading-relaxed font-sans">
              Canonical source: <code className="text-[12px] text-site-ink/80 break-all">{exp.wikiPath}</code>
            </p>
          </div>

          <div className="md:col-span-2">
            <InquiryForm experience={exp} />
          </div>
        </div>
      </section>

      {/* Open invitation — recruiting the first placement/cohort */}
      {exp.inviteFirst ? (
        <FirstCaseStudyInvite
          label={exp.inviteFirst.label}
          body={exp.inviteFirst.body}
        />
      ) : null}

      {/* Related case studies */}
      {relatedCases.length > 0 ? (
        <section className="py-16 md:py-20 bg-site-bg">
          <div className="max-w-[1200px] mx-auto px-4">
            <p className="ui-label text-site-muted mb-3">Evidence</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-10 leading-tight">
              Related case studies
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedCases.map((c) => (
                <CaseStudyCard key={c.slug} caseStudy={c} />
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
            <Link href="/experiences" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              All experiences
            </Link>
            <Link href="/case-studies" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              Case studies
            </Link>
            <Link href="/country" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              Country
            </Link>
            <Link href="/lcaa" className="ui-label text-site-muted hover:text-site-ink transition-colors">
              LCAA Method
            </Link>
          </nav>
        </div>
      </section>
    </div>
  );
}
