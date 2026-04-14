import Link from 'next/link';
import type { Experience } from '@/lib/experiences/types';
import { categoryLabels } from '@/lib/experiences/catalog';
import ThemeBadge from './ThemeBadge';

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const href = experience.directBookingHref ?? `/experiences/${experience.slug}`;
  return (
    <Link
      href={href}
      className="card-hover block bg-site-surface p-6 md:p-7 rounded-[var(--site-radius)] group h-full"
    >
      <p className="ui-label text-site-muted mb-3">
        {categoryLabels[experience.category]}
      </p>
      <h3 className="text-[22px] font-light text-site-ink mb-3 leading-snug group-hover:text-site-green transition-colors">
        {experience.title}
      </h3>
      <p className="text-site-muted leading-relaxed text-[15px] line-clamp-4">
        {experience.summary}
      </p>
      {experience.themes.length > 0 ? (
        <div className="flex flex-wrap gap-2 mt-5">
          {experience.themes.slice(0, 3).map((t) => (
            <ThemeBadge key={t} theme={t} />
          ))}
        </div>
      ) : null}
    </Link>
  );
}
