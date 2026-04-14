import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies/catalog';
import CaseStudyCard from '@/components/experiences/CaseStudyCard';

/**
 * Homepage case-study strip — 3 latest case studies from the catalog.
 * Renders nothing if the catalog is empty (mirrors StoriesStrip discipline).
 */
export default function CaseStudyStrip() {
  const items = caseStudies.slice(0, 3);
  if (items.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-site-surface">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-baseline justify-between mb-10 md:mb-14 flex-wrap gap-4">
          <div>
            <p className="ui-label text-site-muted mb-3">Evidence</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink">
              Case studies
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="ui-label text-site-green hover:opacity-80 transition-opacity"
          >
            All case studies &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((c) => (
            <CaseStudyCard key={c.slug} caseStudy={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
