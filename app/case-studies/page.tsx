import Link from 'next/link';
import type { Metadata } from 'next';
import { caseStudies } from '@/lib/case-studies/catalog';
import CaseStudyCard from '@/components/experiences/CaseStudyCard';

export const metadata: Metadata = {
  title: 'Case studies | Black Cockatoo Valley',
  description:
    'Evidence of what happens when a convening, residency, or retreat actually lands. Published case studies from Black Cockatoo Valley and the wider ACT ecosystem.',
};

export default function CaseStudiesIndex() {
  return (
    <div className="bg-site-bg min-h-screen">
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="ui-label text-site-muted mb-4">Evidence</p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-light text-site-ink mb-6 leading-[1.02]">
          Case studies
        </h1>
        <p className="text-xl md:text-2xl text-site-muted max-w-2xl leading-relaxed font-light">
          What happens when a convening, a residency, or a retreat actually
          lands. Each case study is published in the ACT wiki first and mirrored
          here for easier reading.
        </p>
      </section>

      <section className="py-12 md:py-16 bg-site-surface">
        <div className="max-w-[1200px] mx-auto px-4">
          {caseStudies.length === 0 ? (
            <p className="text-site-muted">No published case studies yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((c) => (
                <CaseStudyCard key={c.slug} caseStudy={c} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-site-bg border-t border-site-line">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <Link
            href="/experiences"
            className="ui-label text-site-muted hover:text-site-ink transition-colors"
          >
            &larr; Back to experiences
          </Link>
        </div>
      </section>
    </div>
  );
}
