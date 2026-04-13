import Link from 'next/link';
import { getStories, formatDate } from '@/lib/empathy-ledger/client';

/**
 * Homepage stories strip — latest 3 stories from EL.
 * Renders nothing if no stories are tagged to ACT-BV yet, so we don't
 * ship an empty section to production.
 */
export default async function StoriesStrip() {
  const data = await getStories({ limit: 3 });
  const stories = data?.stories ?? [];
  if (stories.length === 0) return null;

  return (
    <section className="py-20 md:py-28 bg-site-bg">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-baseline justify-between mb-10 md:mb-14 flex-wrap gap-4">
          <div>
            <p className="ui-label text-site-muted mb-3">From the valley</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink">
              Stories
            </h2>
          </div>
          <Link
            href="/stories"
            className="ui-label text-site-green hover:opacity-80 transition-opacity"
          >
            All stories &rarr;
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stories.map((s) => (
            <Link
              key={s.id}
              href={`/stories/${s.id}`}
              className="card-hover block bg-site-surface p-6 md:p-7 rounded-[var(--site-radius)] group"
            >
              <p className="ui-label text-site-muted mb-3">
                {formatDate(s.publishedAt)}
              </p>
              <h3 className="text-[22px] font-light text-site-ink mb-3 leading-snug group-hover:text-site-green transition-colors">
                {s.title}
              </h3>
              {s.summary ? (
                <p className="text-site-muted leading-relaxed text-[15px] line-clamp-3">
                  {s.summary}
                </p>
              ) : null}
              {s.authorName ? (
                <p className="text-sm text-site-ink/70 font-sans mt-4">
                  by {s.authorName}
                </p>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
