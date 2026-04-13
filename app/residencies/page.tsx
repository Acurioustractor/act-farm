import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'R&D Residencies | Black Cockatoo Valley',
  description:
    'One to four week research and practice residencies on Jinibara Country — conservation technology, regenerative practice, creative documentation, community wellbeing.',
};

export default function ResidenciesPage() {
  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="ui-label text-site-muted mb-4">R&amp;D on Country</p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-light text-site-ink mb-6 leading-[1.02]">
          Residencies
        </h1>
        <p className="text-xl md:text-2xl text-site-muted max-w-2xl leading-relaxed font-light">
          One to four weeks on 150 acres of threatened species habitat. Space
          and time for people working on things that matter.
        </p>
        <p className="text-site-muted font-sans text-sm mt-6">
          $300–$500 / night · max 2–3 concurrent · limited deliberately
        </p>
      </section>

      {/* How it works */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">How it works</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-6 leading-tight">
            LCAA, on the land
          </h2>
          <p className="text-lg text-site-ink leading-relaxed mb-4">
            Residencies follow the LCAA method. Deep listening to Country first.
            Curious prototyping. Tangible action. Storytelling that travels.
          </p>
          <p className="text-lg text-site-ink leading-relaxed">
            Every residency funds conservation, community programming, and the
            next site. Limits are deliberate — we protect habitat over volume.
          </p>
          <div className="mt-8">
            <Link
              href="/lcaa"
              className="ui-label text-site-green hover:opacity-80 transition-opacity"
            >
              Read about LCAA &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Four types */}
      <section className="max-w-[1200px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-4">Four types</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-12 leading-tight">
          What people come to do
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <ResidencyCard
            type="Conservation Technology"
            duration="1–2 weeks"
            body="Habitat monitoring, ethical AI, sensor networks, species observation. Build and test against the farm's existing monitoring infrastructure and habitat data."
            examples="Acoustic monitoring. Camera trap pipelines. Habitat-mapping tools."
          />
          <ResidencyCard
            type="Regenerative Practice"
            duration="1–4 weeks"
            body="Ecosystem recovery, soil health, water systems, native species propagation. The land as teacher. LCAA's Listen phase, rooted in practice."
            examples="Soil health protocols. Creek rehabilitation. Propagation trials."
          />
          <ResidencyCard
            type="Creative Documentation"
            duration="1–2 weeks"
            body="Felt stories of place and practice. Photography, writing, film, sound. Art as the first form of revolution — storytelling that moves people toward care."
            examples="Long-form essays. Photo series. Short films. Field recordings."
          />
          <ResidencyCard
            type="Community Wellbeing"
            duration="2–3 weeks"
            body="Therapeutic landscapes as medicine and methodology. June's Patch evaluation, healthcare worker wellbeing, nature-based programs."
            examples="Program evaluation. Nature therapy pilots. Wellbeing research."
          />
        </div>
      </section>

      {/* What's included */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">What&apos;s included</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-8 leading-tight">
            The setup
          </h2>
          <ul className="space-y-4 text-lg text-site-ink leading-relaxed">
            {[
              'Eco-accommodation on conservation land',
              '150-acre property access — trails, creek systems, native forest',
              'Existing habitat data and monitoring infrastructure',
              'Jinibara Country context and relationships',
              'Shared kitchen and workspace',
              'Slow internet by design. Fast when you need it.',
            ].map((item) => (
              <li key={item} className="flex gap-4">
                <span className="text-site-green font-sans text-sm font-semibold mt-1.5 shrink-0">
                  &mdash;
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Apply */}
      <section className="max-w-[720px] mx-auto px-4 py-20 md:py-28 text-center">
        <p className="ui-label text-site-muted mb-4">Apply</p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-light text-site-ink mb-6 leading-tight">
          Tell us what you&apos;re working on
        </h2>
        <p className="text-lg text-site-muted leading-relaxed mb-10 max-w-xl mx-auto">
          No form to fill in. Send us a paragraph or two about your project,
          your timing, what you need the farm for. We&apos;ll work it out
          together.
        </p>
        <Link
          href="/connect"
          className="inline-block bg-site-green text-white px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
        >
          Get in Touch
        </Link>
      </section>

      <nav className="py-10 bg-site-surface border-t border-site-line">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <Link href="/lcaa" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            LCAA Method
          </Link>
          <Link href="/country" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Country
          </Link>
          <Link href="/stay" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Stay
          </Link>
          <Link href="/use-the-farm" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Use the Farm
          </Link>
        </div>
      </nav>
    </div>
  );
}

function ResidencyCard({
  type,
  duration,
  body,
  examples,
}: {
  type: string;
  duration: string;
  body: string;
  examples: string;
}) {
  return (
    <article className="bg-site-surface p-7 md:p-8 rounded-[var(--site-radius)]">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h3 className="text-2xl md:text-[28px] font-light text-site-ink leading-tight">
          {type}
        </h3>
        <span className="ui-label text-site-muted shrink-0 text-[10px]">
          {duration}
        </span>
      </div>
      <p className="text-site-ink leading-relaxed mb-5">{body}</p>
      <p className="text-sm text-site-muted italic leading-relaxed font-sans">
        {examples}
      </p>
    </article>
  );
}
