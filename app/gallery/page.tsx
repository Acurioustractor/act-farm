import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getMedia,
  filterCulturallySafe,
  type MediaAsset,
} from '@/lib/empathy-ledger/client';

export const metadata: Metadata = {
  title: 'Gallery | Black Cockatoo Valley',
  description:
    'Photos from Black Cockatoo Valley — Country, the farm, guests, and the work of stewardship.',
};

export const revalidate = 300;

export default async function GalleryPage() {
  const data = await getMedia({ type: 'image', limit: 48 });
  const photos: MediaAsset[] = filterCulturallySafe(data?.media ?? []);

  return (
    <div className="bg-site-bg min-h-screen">
      <section className="max-w-[960px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-4">From the Valley</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light text-site-ink mb-6 leading-[1.05]">
          Gallery
        </h1>
        <p className="text-lg md:text-xl text-site-muted max-w-2xl leading-relaxed">
          A living archive of Country, the farm, and the people who pass through.
          Photos are sourced from the Empathy Ledger — cultural protocols honoured,
          consent respected.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 pb-20 md:pb-28">
        {photos.length === 0 ? (
          <div className="bg-site-surface rounded-[var(--site-radius)] p-10 text-center max-w-2xl mx-auto">
            <p className="text-site-muted">
              The gallery is being indexed. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo) => (
              <figure
                key={photo.id}
                className="relative aspect-square overflow-hidden rounded-[var(--site-radius)] bg-site-surface group"
              >
                <Image
                  src={photo.thumbnailUrl ?? photo.url}
                  alt={photo.altText ?? photo.title ?? 'Photo from Black Cockatoo Valley'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  unoptimized
                />
                {photo.attributionText ? (
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white text-[11px] px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                    {photo.attributionText}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        )}

        <p className="text-center mt-12 text-sm text-site-muted font-sans">
          Photos syndicated from the{' '}
          <a
            href="https://empathy-ledger-v2.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-site-green underline underline-offset-4"
          >
            Empathy Ledger
          </a>{' '}
          · ACT-BV project
        </p>
      </section>

      <nav className="py-10 bg-site-surface border-t border-site-line">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <Link href="/stories" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Stories
          </Link>
          <Link href="/map" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Explore the Map
          </Link>
          <Link href="/stay" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Stay
          </Link>
          <Link href="/connect" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
}
