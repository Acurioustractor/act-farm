import Link from 'next/link';
import type { CaseStudy } from '@/lib/experiences/types';

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${caseStudy.slug}`}
      className="card-hover block bg-site-surface p-6 md:p-7 rounded-[var(--site-radius)] group h-full"
    >
      <p className="ui-label text-site-muted mb-3">{caseStudy.period}</p>
      <h3 className="text-[22px] font-light text-site-ink mb-3 leading-snug group-hover:text-site-green transition-colors">
        {caseStudy.title}
      </h3>
      <p className="text-site-muted leading-relaxed text-[15px] line-clamp-4">
        {caseStudy.summary}
      </p>
    </Link>
  );
}
