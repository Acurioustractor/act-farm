import Link from 'next/link';

export const metadata = {
  title: 'Use the Farm | Black Cockatoo Valley',
  description: 'Workshops, events, weddings, retreats, and R&D residencies on 150 acres of Jinibara Country. Conservation-first, community-led.',
};

export default function UseTheFarmPage() {
  return (
    <div>
      {/* Intro */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-light text-site-ink mb-8 leading-[1.05]">
            Use the Farm
          </h1>
          <p className="text-xl text-site-muted leading-[1.7]">
            Black Cockatoo Valley is available for workshops, events, retreats,
            and research residencies. 150 acres on Jinibara Country near Witta,
            with views to the Mary River, native forest, and creek systems down
            to Elaman Creek. Everything we host supports conservation of
            threatened species habitat.
          </p>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="mb-8">
            <span className="ui-label text-site-green">Groups of 8-20</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mt-3">Workshops</h2>
          </div>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7] mb-10">
            <p>
              Run your program in an outdoor setting surrounded by native forest.
              Dad's Lab ran a weekend workshop here — 12 people, open-air sessions
              with creek walks between them. The kind of space where ideas land
              differently because the setting does half the work.
            </p>
            <p>
              We provide the land, the workshop and gathering space (open-air,
              capacity 8-20), trails, creek access, and eco-accommodation if your
              group needs to stay. You bring the program, or we help you shape one
              around the land.
            </p>
          </div>
          <div className="bg-site-bg p-6 rounded-[var(--site-radius)] mb-10">
            <h3 className="font-sans font-semibold text-site-ink mb-3 text-sm tracking-wide">Works well for</h3>
            <ul className="text-site-muted space-y-2 text-[15px]">
              <li>Facilitated workshops and offsites</li>
              <li>Team retreats and strategy sessions</li>
              <li>Creative and design sprints</li>
              <li>Wellbeing and mindfulness programs</li>
              <li>Conservation and ecology field sessions</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=workshop"
            className="inline-block bg-site-green text-white px-6 py-3 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Enquire about workshops
          </Link>
        </div>
      </section>

      {/* Events & Weddings */}
      <section id="events" className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="mb-8">
            <span className="ui-label text-site-green">Up to 40 people</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mt-3">Events & Weddings</h2>
          </div>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7] mb-10">
            <p>
              Low-key celebrations on 150 acres with views to the Mary River.
              This is rustic, not luxury — native forest, open sky, and the kind
              of quiet that makes a gathering feel different. Conservation-aligned,
              which means small groups, no heavy infrastructure, and genuine care
              for the land you're celebrating on.
            </p>
            <p>
              We work with you to plan something that fits the place. Shared meals,
              outdoor ceremonies, campfire gatherings. The land is the venue.
            </p>
          </div>
          <div className="bg-site-surface p-6 rounded-[var(--site-radius)] mb-10">
            <h3 className="font-sans font-semibold text-site-ink mb-3 text-sm tracking-wide">What's possible</h3>
            <ul className="text-site-muted space-y-2 text-[15px]">
              <li>Outdoor ceremonies and receptions</li>
              <li>Intimate weddings and celebrations</li>
              <li>Milestone gatherings and family reunions</li>
              <li>End-of-season and harvest celebrations</li>
              <li>Corporate events with a conservation focus</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=event"
            className="inline-block bg-site-green text-white px-6 py-3 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Enquire about events
          </Link>
        </div>
      </section>

      {/* Retreats & Stays */}
      <section id="retreats" className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="mb-8">
            <span className="ui-label text-site-green">Small groups</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mt-3">Retreats & Stays</h2>
          </div>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7] mb-10">
            <p>
              Eco-accommodation for small groups on conservation land. 150 acres
              of quiet — native forest, creek corridors, and threatened species
              habitat. Bring your own program or let us help design one around
              the land and its seasons.
            </p>
            <p>
              Low-impact stays integrated with the habitat. Views over conservation
              land, quiet environment for deep thinking, and access to the full
              property including trails, Elaman Creek, and the Mary River viewpoint.
            </p>
          </div>
          <div className="bg-site-bg p-6 rounded-[var(--site-radius)] mb-10">
            <h3 className="font-sans font-semibold text-site-ink mb-3 text-sm tracking-wide">What to expect</h3>
            <ul className="text-site-muted space-y-2 text-[15px]">
              <li>Private eco-accommodation on conservation land</li>
              <li>Access to 150 acres of forest, trails, and creek systems</li>
              <li>Off-grid quiet — no traffic, no noise</li>
              <li>Support to design a program if you need one</li>
              <li>Seasonal food from June's Patch garden</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=retreat"
            className="inline-block bg-site-green text-white px-6 py-3 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Enquire about retreats
          </Link>
        </div>
      </section>

      {/* R&D Residencies */}
      <section id="residencies" className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="mb-8">
            <span className="ui-label text-site-green">1-4 weeks &middot; $300-$500/night</span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mt-3">R&D Residencies</h2>
          </div>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7] mb-10">
            <p>
              Immersive stays for researchers, technologists, creatives, and
              practitioners working on conservation-aligned projects. Residencies
              follow the LCAA method — deep listening to Country, curious
              prototyping, tangible action, and storytelling that moves people
              toward care.
            </p>
            <p>
              Availability is deliberately limited to protect habitat. Maximum
              2-3 concurrent residencies. Every residency funds conservation,
              community programming, and the next site in the network.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ResidencyType
              title="Conservation Technology"
              duration="1-2 weeks"
              description="Habitat monitoring, ethical AI, sensor networks, species observation tools."
            />
            <ResidencyType
              title="Regenerative Practice"
              duration="1-4 weeks"
              description="Ecosystem recovery, soil health, water systems, native species propagation."
            />
            <ResidencyType
              title="Creative Documentation"
              duration="1-2 weeks"
              description="Felt stories of place and practice. Photography, writing, film, sound."
            />
            <ResidencyType
              title="Community Wellbeing"
              duration="2-3 weeks"
              description="June's Patch evaluation, healthcare worker wellbeing, nature-based programs."
            />
          </div>
          <div className="bg-site-surface p-6 rounded-[var(--site-radius)] mb-10">
            <h3 className="font-sans font-semibold text-site-ink mb-3 text-sm tracking-wide">What's included</h3>
            <ul className="text-site-muted space-y-2 text-[15px]">
              <li>Eco-accommodation on conservation land</li>
              <li>Full property access — 150 acres, trails, creek systems</li>
              <li>Existing habitat data and monitoring infrastructure</li>
              <li>Research support and Jinibara Country connections</li>
              <li>Shared kitchen and workspace</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=residency"
            className="inline-block bg-site-green text-white px-6 py-3 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Apply for a residency
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-site-ink text-white">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light mb-5">Not sure which fits?</h2>
          <p className="text-lg text-white/60 mb-10">
            Tell us what you're thinking and we'll work it out together.
            Every use of the farm funds conservation and builds the next residency.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-white text-site-ink px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:bg-site-surface transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

function ResidencyType({ title, duration, description }: { title: string; duration: string; description: string }) {
  return (
    <div className="card-hover bg-site-surface p-5 rounded-[var(--site-radius)]">
      <h4 className="font-light text-lg text-site-ink mb-1">{title}</h4>
      <p className="ui-label text-site-green mb-2 !text-[11px]">{duration}</p>
      <p className="text-site-muted text-[15px]">{description}</p>
    </div>
  );
}
