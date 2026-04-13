import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The LCAA Method | Black Cockatoo Valley',
  description:
    'Listen. Curiosity. Action. Art. The practice underneath everything we do — at the farm and across the ACT ecosystem.',
};

export default function LCAAPage() {
  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="ui-label text-site-muted mb-4">The practice</p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-light text-site-ink mb-6 leading-[1.02]">
          LCAA
        </h1>
        <p className="text-xl md:text-2xl text-site-muted max-w-2xl leading-relaxed font-light">
          Listen. Curiosity. Action. Art. A cyclical method for working with
          Country, community, and complexity.
        </p>
      </section>

      {/* The Loop */}
      <section className="max-w-[960px] mx-auto px-4 py-12 md:py-16">
        <p className="ui-label text-site-muted mb-4">The loop</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-8 leading-tight">
          Four phases, one cycle
        </h2>
        <p className="text-lg text-site-ink leading-relaxed mb-8">
          LCAA is not linear. Art returns us to Listen. Some projects live in
          Listen for years. Others move quickly to Action. The discipline is
          staying present to where you actually are.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <Phase
            letter="L"
            title="Listen"
            quote="We sit in silence to take in knowledge."
            body="Deeply listening to Country, Traditional Owners, community, Elders, youth, and the silenced. Physical presence over time. Story over data points."
          />
          <Phase
            letter="C"
            title="Curiosity"
            quote="We lean into the unknown with open minds and hearts."
            body="Following threads from listening. Asking better questions. Design thinking with community as designers."
          />
          <Phase
            letter="A"
            title="Action"
            quote="We are makers who play and take chances."
            body="Collaborative building, with community as co-creators. Open source, iterative, documented for handover. If we cannot hand it over, we are still in Curiosity."
          />
          <Phase
            letter="A"
            title="Art"
            quote="We recognise art as the first form of revolution."
            body="Consciousness-shifting work: installations, storytelling, performance, land art. Making the invisible visible. Revealing futures not yet possible."
          />
        </div>
      </section>

      {/* At the farm */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[960px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">At Black Cockatoo Valley</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-8 leading-tight">
            LCAA on the land
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-site-ink">
            <p>
              <strong className="font-normal text-site-green">Listen</strong> happens
              before anything else. We walked this land for months before we
              built. We listen to the creek, the canopy, the pace the land sets.
              Every residency starts here.
            </p>
            <p>
              <strong className="font-normal text-site-green">Curiosity</strong> shows
              up as the questions we let residents ask — about habitat, about
              regeneration, about storytelling, about wellbeing — without
              prescribing answers.
            </p>
            <p>
              <strong className="font-normal text-site-green">Action</strong> is the
              trails rebuilt, the native beds restored, the low-impact
              accommodation, the monitoring infrastructure. Built by hand, built
              to hand over.
            </p>
            <p>
              <strong className="font-normal text-site-green">Art</strong> is how the
              farm travels outward — photographs, films, writing, field notes,
              the stories that move a wider world toward care.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="max-w-[960px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-4">Across the ecosystem</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-8 leading-tight">
          LCAA in other projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <EcoCard
            project="Gold.Phone"
            body="Thousands of authentic conversations across difference — a Listen phase at scale."
          />
          <EcoCard
            project="Goods on Country"
            body="Shell cycles become benchtops. Waste becomes wealth. The Curiosity question: can the circular be local?"
          />
          <EcoCard
            project="Empathy Ledger"
            body="Communities feared extraction. That fear shaped the platform architecture. Listen became Action."
          />
        </div>
      </section>

      {/* Field note */}
      <section className="max-w-[720px] mx-auto px-4 py-16 md:py-20 text-center">
        <p className="ui-label text-site-muted mb-6">Field note</p>
        <blockquote className="text-2xl md:text-3xl font-light text-site-ink leading-snug italic">
          &ldquo;LCAA is not a checklist. It&apos;s a practice. Some projects
          need years in Listen. Others move quickly to Action. The discipline is
          staying present to where you actually are.&rdquo;
        </blockquote>
      </section>

      {/* Nav */}
      <nav className="py-10 bg-site-surface border-t border-site-line">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <Link href="/about" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            About
          </Link>
          <Link href="/country" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Country
          </Link>
          <Link href="/residencies" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Residencies
          </Link>
          <Link href="/the-harvest" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            The Harvest
          </Link>
          <Link href="/connect" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
}

function Phase({
  letter,
  title,
  quote,
  body,
}: {
  letter: string;
  title: string;
  quote: string;
  body: string;
}) {
  return (
    <div className="bg-site-surface p-7 md:p-8 rounded-[var(--site-radius)]">
      <div className="flex items-baseline gap-4 mb-4">
        <span className="font-display text-[72px] font-light text-site-green leading-none">
          {letter}
        </span>
        <h3 className="text-2xl font-light text-site-ink">{title}</h3>
      </div>
      <p className="italic text-site-muted leading-relaxed mb-3 text-[15px]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-site-ink leading-relaxed text-[15px]">{body}</p>
    </div>
  );
}

function EcoCard({ project, body }: { project: string; body: string }) {
  return (
    <div className="bg-site-surface p-6 rounded-[var(--site-radius)]">
      <p className="ui-label text-site-green mb-3">{project}</p>
      <p className="text-site-ink leading-relaxed text-[15px]">{body}</p>
    </div>
  );
}
