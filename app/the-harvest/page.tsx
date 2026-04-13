import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Harvest | Black Cockatoo Valley',
  description:
    'The Harvest in Witta — regenerative community hub, sister project to Black Cockatoo Valley. Eat. Gather. Make. Grow.',
};

export default function HarvestPage() {
  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="ui-label text-site-muted mb-4">Sister project · Witta</p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-light text-site-ink mb-6 leading-[1.02]">
          The Harvest
        </h1>
        <p className="text-xl md:text-2xl text-site-muted max-w-2xl leading-relaxed font-light">
          A regenerative community hub on the former Green Harvest site. Where
          ACT&apos;s enterprise, story, and land systems meet the public.
        </p>
        <p className="text-site-muted font-sans text-sm mt-6">
          Sat–Sun · 8am–2pm · Witta, Sunshine Coast Hinterland
        </p>
      </section>

      {/* Four pillars */}
      <section className="max-w-[1200px] mx-auto px-4 py-12 md:py-16">
        <p className="ui-label text-site-muted mb-4">The seed</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-10 leading-tight max-w-2xl">
          Four beliefs, not services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Pillar title="Eat" body="Food from what grows here. The farmer sits next to the architect sits next to the kid wanting a milkshake." />
          <Pillar title="Gather" body="Witta has no gathering place. Two thousand cars pass through weekly and never stop. A reason to." />
          <Pillar title="Make" body="Artisan workshops. Makers in residence. Barry's shed. Rust, wood, machines, story." />
          <Pillar title="Grow" body="Native plant garden centre. Highest homeschooling rate in Australia, no learning infrastructure — yet." />
        </div>
      </section>

      {/* Nine Movements */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[960px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">NM&apos;s Compendium · Feb 2026</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-12 leading-tight">
            The Nine Movements
          </h2>
          <ol className="space-y-8">
            {movements.map((m, i) => (
              <li key={m.title} className="grid grid-cols-[auto_1fr] gap-6 md:gap-8">
                <span className="font-display text-[56px] md:text-[72px] font-light text-site-green leading-none tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-light text-site-ink mb-2">
                    {m.title}
                  </h3>
                  <p className="text-site-ink leading-relaxed">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Barry's shed */}
      <section className="max-w-[720px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-4">The Shed</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-6 leading-tight">
          Barry Rodgerig&apos;s archaeology
        </h2>
        <p className="text-lg text-site-ink leading-relaxed mb-6">
          The machines that built the hinterland, kept: an AB184 log truck
          (1963), ex-army Blitz trucks, a 1957 Land Rover. Living memory of
          working country. Barry is the shed&apos;s custodian.
        </p>
        <blockquote className="text-xl md:text-2xl font-light text-site-ink leading-snug italic border-l-2 border-site-green pl-6">
          &ldquo;Rust is terrible. It&apos;s just like cancer in humans.&rdquo;
          <footer className="not-italic text-sm text-site-muted mt-3 font-sans">
            — Barry
          </footer>
        </blockquote>
      </section>

      {/* Current status */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">Right now</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-6 leading-tight">
            Phase 1 is underway
          </h2>
          <p className="text-lg text-site-ink leading-relaxed mb-4">
            $117,800 funded. Site establishment, community garden, pavilion.
            Soft opening May–June 2026.
          </p>
          <p className="text-lg text-site-ink leading-relaxed">
            Anchor points first — regular reasons to come. Simplicity first —
            coffee before scaling. Pop-ups before capital. You&apos;re part of
            something unfinished.
          </p>
        </div>
      </section>

      {/* Handover */}
      <section className="max-w-[720px] mx-auto px-4 py-16 md:py-20 text-center">
        <p className="ui-label text-site-muted mb-6">Beautiful Obsolescence</p>
        <p className="text-2xl md:text-3xl font-light text-site-ink leading-snug italic">
          Ready to hand over when the community is ready.
        </p>
      </section>

      <nav className="py-10 bg-site-surface border-t border-site-line">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <Link href="/lcaa" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            LCAA Method
          </Link>
          <Link href="/about" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            About
          </Link>
          <Link href="/country" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Country
          </Link>
          <Link href="/connect" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
}

const movements = [
  {
    title: 'The Silence',
    body: 'Witta has no gathering place. Two thousand cars pass through every week and never stop. The problem that started everything.',
  },
  {
    title: 'The Shed',
    body: "Barry Rodgerig's archaeology of machines that built the hinterland. AB184 log truck, Blitz trucks, a 1957 Land Rover. Living memory of working country.",
  },
  {
    title: 'The Seed',
    body: 'Four beliefs: Eat. Gather. Make. Grow. Not services to be consumed. Daily acts to be practiced.',
  },
  {
    title: 'The Cycle',
    body: "Shaun Fisher's oysters, eaten. Shells collected. Worked into benchtops. Returned. LCAA made physical.",
  },
  {
    title: 'The Canvas',
    body: "Gallery, not museum. Pop-ups before capital. You're part of something unfinished.",
  },
  {
    title: 'The Garden',
    body: 'Witta has the highest homeschooling rate in Australia and no learning infrastructure. Garden-as-classroom.',
  },
  {
    title: 'The Table',
    body: 'Food from what grows here. Farmer sits next to architect sits next to kid wanting a milkshake.',
  },
  {
    title: 'The Commons',
    body: 'Platform funding local economy. Every dollar stays local.',
  },
  {
    title: 'The Handover',
    body: 'Beautiful Obsolescence. Ready to hand over when the community is ready.',
  },
];

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-site-surface p-6 rounded-[var(--site-radius)]">
      <h3 className="font-display text-[44px] font-light text-site-green mb-3 leading-none">
        {title}
      </h3>
      <p className="text-site-ink leading-relaxed text-[15px]">{body}</p>
    </div>
  );
}
