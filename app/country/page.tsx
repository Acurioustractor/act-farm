import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Country | Black Cockatoo Valley',
  description:
    'Black Cockatoo Valley operates on Jinibara Country. Threatened species habitat, water stewardship, and Country setting the pace.',
};

export default function CountryPage() {
  return (
    <div className="bg-site-bg min-h-screen">
      {/* Hero */}
      <section className="max-w-[960px] mx-auto px-4 pt-20 md:pt-28 pb-12 md:pb-16">
        <p className="ui-label text-site-muted mb-4">Jinibara Country</p>
        <h1 className="text-[clamp(2.75rem,7vw,6rem)] font-light text-site-ink mb-6 leading-[1.02]">
          Country
        </h1>
        <p className="text-xl md:text-2xl text-site-muted max-w-2xl leading-relaxed font-light">
          138 acres of threatened species habitat. Views to the Mary River
          headwaters. A land that teaches, and a land that limits.
        </p>
      </section>

      {/* Custodianship */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">Custodianship</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-6 leading-tight">
            Jinibara People, first and always
          </h2>
          <p className="text-lg text-site-ink leading-relaxed mb-4">
            Black Cockatoo Valley operates on Jinibara Country. We acknowledge
            the Jinibara People as the Traditional Owners and custodians of this
            land, and we pay our respects to Elders past, present, and emerging.
          </p>
          <p className="text-lg text-site-ink leading-relaxed">
            First Nations cultural authority over this land is non-negotiable.
            What we&apos;re building is the business model underneath — a
            revenue engine that funds conservation while Jinibara People remain
            the cultural and custodial authority.
          </p>
        </div>
      </section>

      {/* Habitat */}
      <section className="max-w-[960px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-4">Habitat</p>
        <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-10 leading-tight">
          138 acres, threatened species
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="The land"
            body="Views to the Mary River headwaters. Creeks and forest winding down to Elaman Creek. Native canopy, open clearings, water systems shaping everything."
          />
          <Card
            title="The species"
            body="The name points where the work points. Glossy black cockatoo. The creatures that share this canopy, whose habitat the farm holds and protects."
          />
          <Card
            title="The water"
            body="Elaman Creek watershed. Water stewardship is not optional here. Every land decision is a water decision."
          />
          <Card
            title="The limit"
            body="Capacity is a land decision before it is a calendar decision. If a project asks for more than the land can give, we redesign the project, not the land."
          />
        </div>
      </section>

      {/* Commitments */}
      <section className="bg-site-surface py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-muted mb-4">Commitments</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light text-site-ink mb-10 leading-tight">
            Not platitudes. Practice.
          </h2>
          <ul className="space-y-5 text-lg text-site-ink leading-relaxed">
            <Commitment text="No activities during sensitive seasons. Habitat areas protected." />
            <Commitment text="Low-volume operations to minimise disturbance. Max two to three concurrent residencies." />
            <Commitment text="Ongoing weed management and native species restoration." />
            <Commitment text="Wildlife corridors maintained. Water systems respected." />
            <Commitment text="Revenue from every stay and program reinvested directly in conservation." />
            <Commitment text="The land has veto power over capacity decisions." />
          </ul>
        </div>
      </section>

      {/* Country sets the pace */}
      <section className="max-w-[720px] mx-auto px-4 py-20 md:py-28">
        <p className="ui-label text-site-muted mb-6">Daily practice</p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-light text-site-ink mb-8 leading-tight">
          Country sets the pace
        </h2>
        <p className="text-lg text-site-ink leading-relaxed mb-6">
          Not a metaphor. When the creek is low or the grass is tired, we slow
          down. Residencies, harvest shares, and activity are planned to seasons
          and capacity.
        </p>
        <blockquote className="text-2xl md:text-3xl font-light text-site-ink leading-snug italic border-l-2 border-site-green pl-6 my-10">
          If we&apos;re too busy to notice the birds, we&apos;re too busy.
        </blockquote>
        <p className="text-lg text-site-ink leading-relaxed">
          The land is the teacher. The land is the limiter. Our job is to
          listen, and to build things the land can carry.
        </p>
      </section>

      <nav className="py-10 bg-site-surface border-t border-site-line">
        <div className="flex items-center justify-center gap-8 flex-wrap px-4">
          <Link href="/lcaa" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            LCAA Method
          </Link>
          <Link href="/residencies" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Residencies
          </Link>
          <Link href="/map" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Explore the Map
          </Link>
          <Link href="/connect" className="ui-label text-site-muted hover:text-site-ink transition-colors">
            Get in Touch
          </Link>
        </div>
      </nav>
    </div>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-site-surface p-6 md:p-7 rounded-[var(--site-radius)]">
      <h3 className="text-xl font-light text-site-green mb-3">{title}</h3>
      <p className="text-site-ink leading-relaxed text-[15px]">{body}</p>
    </div>
  );
}

function Commitment({ text }: { text: string }) {
  return (
    <li className="flex gap-4">
      <span className="text-site-green font-sans text-sm font-semibold mt-1.5 shrink-0">
        &mdash;
      </span>
      <span>{text}</span>
    </li>
  );
}
