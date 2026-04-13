import Link from 'next/link';
import type { Metadata } from 'next';
import { getStories, formatDate } from '@/lib/empathy-ledger/client';

export const metadata: Metadata = {
  title: 'Stories | Black Cockatoo Valley',
  description:
    'Voices from the valley. Stories from people, projects, and Country at Black Cockatoo Valley.',
};

export const revalidate = 300;

export default async function StoriesPage() {
  const data = await getStories({ limit: 24 });
  const stories = data?.stories ?? [];

  return (
    <div className="bg-site-bg min-h-screen">
      <section className="max-w-[960px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-4">Voices from the Valley</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light text-site-ink mb-6 leading-[1.05]">
          Stories
        </h1>
        <p className="text-lg md:text-xl text-site-muted max-w-2xl leading-relaxed">
          Field notes, conversations, and reflections from Black Cockatoo Valley —
          people working the land, guests who stayed, Country teaching us the pace.
        </p>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 pb-20 md:pb-28">
        {stories.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {stories.map((s) => (
              <Link
                key={s.id}
                href={`/stories/${s.id}`}
                className="card-hover block bg-site-surface p-6 md:p-7 rounded-[var(--site-radius)] group"
              >
                <p className="ui-label text-site-muted mb-3">
                  {formatDate(s.publishedAt)}
                </p>
                <h2 className="text-[22px] md:text-[26px] font-light text-site-ink mb-3 leading-snug group-hover:text-site-green transition-colors">
                  {s.title}
                </h2>
                {s.summary ? (
                  <p className="text-site-muted leading-relaxed text-[15px] mb-4 line-clamp-3">
                    {s.summary}
                  </p>
                ) : null}
                {s.authorName ? (
                  <p className="text-sm text-site-ink/70 font-sans">
                    by {s.authorName}
                  </p>
                ) : null}
                {s.themes.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.themes.slice(0, 3).map((t) => (
                      <span
                        key={t.name}
                        className="ui-label text-[10px] text-site-green bg-site-green/10 px-2 py-1 rounded"
                      >
                        {t.name}
                      </span>
                    ))}
                  </div>
                ) : null}
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-site-surface rounded-[var(--site-radius)] p-10 md:p-14 text-center max-w-2xl mx-auto">
      <p className="ui-label text-site-green mb-4">Coming soon</p>
      <h2 className="text-[28px] md:text-[36px] font-light text-site-ink mb-4 leading-tight">
        Stories are being gathered
      </h2>
      <p className="text-site-muted leading-relaxed mb-6">
        We&apos;re collecting voices from Country, from residents, from guests —
        people who&apos;ve spent time at Black Cockatoo Valley and have something
        to share. Check back soon, or{' '}
        <Link href="/connect" className="text-site-green underline underline-offset-4">
          tell us yours
        </Link>
        .
      </p>
      <Link
        href="/gallery"
        className="inline-block bg-site-green text-white px-6 py-3 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
      >
        See the Gallery
      </Link>
    </div>
  );
}
