import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { findAccommodation, accommodations } from '@/lib/stay/accommodations';
import BookingForm from '@/components/stay/BookingForm';

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return accommodations.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { id } = await params;
  const acc = findAccommodation(id);
  if (!acc) return { title: 'Stay | Black Cockatoo Valley' };
  return {
    title: `${acc.name} | Black Cockatoo Valley`,
    description: acc.description,
  };
}

export default async function AccommodationDetailPage({ params }: { params: Params }) {
  const { id } = await params;
  const acc = findAccommodation(id);
  if (!acc) notFound();

  return (
    <div className="bg-site-bg min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 pt-8">
        <Link href="/stay" className="ui-label text-site-muted hover:text-site-ink transition-colors">
          &larr; All stays
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-4 pt-8 pb-10 md:pb-14">
        <p className="ui-label text-site-clay mb-3">{acc.subtitle} · {acc.guests}</p>
        <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light text-site-ink leading-[1.05]">
          {acc.name}
        </h1>
      </section>

      {/* Gallery — hero + 4 thumbs */}
      <section className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-[2fr_1fr] gap-3 md:gap-4">
          <div className="aspect-[4/3] rounded-[var(--site-radius)] overflow-hidden bg-site-surface">
            <img
              src={acc.images[0]}
              alt={acc.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {acc.images.slice(1, 5).map((img, i) => (
              <div key={i} className="aspect-square rounded-[var(--site-radius)] overflow-hidden bg-site-surface">
                <img
                  src={img}
                  alt={`${acc.name} ${i + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detail + Booking */}
      <section className="max-w-[1200px] mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
        <div>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-site-ink mb-6 leading-tight">
            {acc.description}
          </h2>
          <p className="text-lg text-site-ink leading-relaxed mb-10">
            {acc.longDescription}
          </p>

          <p className="text-sm italic text-site-green mb-8">
            {acc.highlight}
          </p>

          <h3 className="ui-label text-site-muted mb-4">What&apos;s here</h3>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 mb-12">
            {acc.features.map((f) => (
              <li key={f} className="flex items-start">
                <span className="text-site-green mr-3 mt-0.5 font-bold text-sm">&#10003;</span>
                <span className="text-site-ink text-[15px]">{f}</span>
              </li>
            ))}
          </ul>

          <h3 className="ui-label text-site-muted mb-4">Good to know</h3>
          <ul className="space-y-3 text-site-ink leading-relaxed">
            <li>· This is rustic, not luxury. Composting toilets. Off-grid power. No phone reception on site.</li>
            <li>· Dogs welcome — must be kept under control. This is threatened species habitat.</li>
            <li>· Directions and arrival instructions sent the week before your stay.</li>
            <li>· Nic lives on site and meets every guest. BCV is a working conservation farm, not a resort.</li>
          </ul>
        </div>

        {/* Booking form sticky on desktop */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <BookingForm accommodation={acc} />
        </aside>
      </section>

      <nav className="py-10 bg-site-surface border-t border-site-line">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <Link href="/stay" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            All Stays
          </Link>
          <Link href="/country" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Country
          </Link>
          <Link href="/gallery" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Gallery
          </Link>
          <Link href="/connect" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
}
