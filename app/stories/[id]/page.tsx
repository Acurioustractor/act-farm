import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getStory, formatDate } from '@/lib/empathy-ledger/client';

export const revalidate = 300;

type Params = Promise<{ id: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const story = await getStory(id);
  if (!story) return { title: 'Story | Black Cockatoo Valley' };
  return {
    title: `${story.title} | Black Cockatoo Valley`,
    description: story.summary ?? undefined,
  };
}

export default async function StoryPage({ params }: { params: Params }) {
  const { id } = await params;
  const story = await getStory(id);
  if (!story) notFound();

  const sensitive =
    story.visibility !== 'public' || story.isPublic === false;
  if (sensitive) notFound();

  return (
    <article className="bg-site-bg min-h-screen">
      {story.featuredMediaUrl ? (
        <div className="relative w-full h-[40vh] md:h-[55vh] bg-site-surface">
          <Image
            src={story.featuredMediaUrl}
            alt={story.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      ) : null}

      <div className="max-w-[720px] mx-auto px-4 py-16 md:py-24">
        <Link
          href="/stories"
          className="ui-label text-site-muted hover:text-site-ink transition-colors inline-block mb-8"
        >
          &larr; All stories
        </Link>

        <p className="ui-label text-site-muted mb-4">
          {formatDate(story.publishedAt)}
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-light text-site-ink mb-6 leading-[1.1]">
          {story.title}
        </h1>

        {story.summary ? (
          <p className="text-xl md:text-2xl text-site-muted leading-relaxed mb-10 font-light">
            {story.summary}
          </p>
        ) : null}

        {story.authorName ? (
          <div className="flex items-center gap-3 mb-10 pb-10 border-b border-site-line">
            <div>
              <p className="font-sans text-sm font-semibold text-site-ink">
                {story.authorName}
              </p>
              {story.authorBio ? (
                <p className="text-sm text-site-muted mt-1">
                  {story.authorBio}
                </p>
              ) : null}
            </div>
          </div>
        ) : null}

        {story.content ? (
          <div
            className="prose-like text-[18px] leading-[1.8] text-site-ink space-y-6"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />
        ) : (
          <p className="text-site-muted italic">
            Full story coming soon.
          </p>
        )}

        {story.themes.length > 0 ? (
          <div className="mt-12 pt-8 border-t border-site-line flex flex-wrap gap-2">
            {story.themes.map((t) => (
              <span
                key={t.name}
                className="ui-label text-[10px] text-site-green bg-site-green/10 px-3 py-1.5 rounded"
              >
                {t.name}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
