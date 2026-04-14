import Link from 'next/link';

/**
 * "Be our first" invitation block, rendered on experience detail pages
 * for experiences actively recruiting their inaugural cohort or placement.
 * Intentionally a call-to-action, not a placeholder — this is how the site
 * asks for the person who becomes the first case study.
 */
export default function FirstCaseStudyInvite({
  label,
  body,
  inquireAnchor = '#inquire',
}: {
  label: string;
  body: string;
  inquireAnchor?: string;
}) {
  return (
    <section className="py-16 md:py-20 bg-site-bg">
      <div className="max-w-[720px] mx-auto px-4">
        <div className="border border-dashed border-site-green/40 rounded-[var(--site-radius)] p-7 md:p-9 bg-site-surface">
          <p className="ui-label text-site-green mb-3">Open invitation</p>
          <h2 className="text-[clamp(1.5rem,3vw,2.25rem)] font-light text-site-ink leading-tight mb-4">
            {label}.
          </h2>
          <p className="text-site-muted leading-relaxed text-lg mb-6">{body}</p>
          <Link
            href={inquireAnchor}
            className="inline-block bg-site-green text-white px-6 py-3 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Send us an inquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
