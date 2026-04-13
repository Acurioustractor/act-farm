import Link from 'next/link';

export const metadata = {
  title: 'Use the Farm | Black Cockatoo Valley',
  description: 'Workshops, events, weddings, retreats, and R&D residencies on 150 acres of Jinibara Country. Conservation-first, community-led.',
};

export default function UseTheFarmPage() {
  return (
    <div className="pt-20">
      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Use the Farm
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Black Cockatoo Valley is available for workshops, events, retreats,
            and research residencies. 150 acres on Jinibara Country near Witta,
            with views to the Mary River, native forest, and creek systems down
            to Elaman Creek. Everything we host supports conservation of
            threatened species habitat.
          </p>
        </div>
      </section>

      {/* Workshops */}
      <section id="workshops" className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-widest text-emerald-700 font-medium">
              Groups of 8–20
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Workshops</h2>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700 mb-8">
            <p>
              Run your program in an outdoor setting surrounded by native forest.
              Dad's Lab ran a weekend workshop here — 12 people, open-air sessions
              with creek walks between them. The kind of space where ideas land
              differently because the setting does half the work.
            </p>
            <p>
              We provide the land, the workshop and gathering space (open-air,
              capacity 8–20), trails, creek access, and eco-accommodation if your
              group needs to stay. You bring the program, or we help you shape one
              around the land.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-semibold text-stone-900 mb-3">Works well for</h3>
            <ul className="text-stone-600 space-y-2">
              <li>Facilitated workshops and offsites</li>
              <li>Team retreats and strategy sessions</li>
              <li>Creative and design sprints</li>
              <li>Wellbeing and mindfulness programs</li>
              <li>Conservation and ecology field sessions</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=workshop"
            className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
          >
            Enquire about workshops
          </Link>
        </div>
      </section>

      {/* Events & Weddings */}
      <section id="events" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-widest text-emerald-700 font-medium">
              Up to 40 people
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Events & Weddings</h2>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700 mb-8">
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
          <div className="bg-stone-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-semibold text-stone-900 mb-3">What's possible</h3>
            <ul className="text-stone-600 space-y-2">
              <li>Outdoor ceremonies and receptions</li>
              <li>Intimate weddings and celebrations</li>
              <li>Milestone gatherings and family reunions</li>
              <li>End-of-season and harvest celebrations</li>
              <li>Corporate events with a conservation focus</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=event"
            className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
          >
            Enquire about events
          </Link>
        </div>
      </section>

      {/* Retreats & Stays */}
      <section id="retreats" className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-widest text-emerald-700 font-medium">
              Small groups
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">Retreats & Stays</h2>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700 mb-8">
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
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-semibold text-stone-900 mb-3">What to expect</h3>
            <ul className="text-stone-600 space-y-2">
              <li>Private eco-accommodation on conservation land</li>
              <li>Access to 150 acres of forest, trails, and creek systems</li>
              <li>Off-grid quiet — no traffic, no noise</li>
              <li>Support to design a program if you need one</li>
              <li>Seasonal food from June's Patch garden</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=retreat"
            className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
          >
            Enquire about retreats
          </Link>
        </div>
      </section>

      {/* R&D Residencies */}
      <section id="residencies" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <span className="text-sm uppercase tracking-widest text-emerald-700 font-medium">
              1–4 weeks · $300–$500/night
            </span>
            <h2 className="text-3xl font-bold text-stone-900 mt-2">R&D Residencies</h2>
          </div>
          <div className="prose prose-lg max-w-none text-stone-700 mb-8">
            <p>
              Immersive stays for researchers, technologists, creatives, and
              practitioners working on conservation-aligned projects. Residencies
              follow the LCAA method — deep listening to Country, curious
              prototyping, tangible action, and storytelling that moves people
              toward care.
            </p>
            <p>
              Availability is deliberately limited to protect habitat. Maximum
              2–3 concurrent residencies. 40% of residency profits flow to
              community ownership — because value belongs where it's grown.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ResidencyType
              title="Conservation Technology"
              duration="1–2 weeks"
              description="Habitat monitoring, ethical AI, sensor networks, species observation tools."
            />
            <ResidencyType
              title="Regenerative Practice"
              duration="1–4 weeks"
              description="Ecosystem recovery, soil health, water systems, native species propagation."
            />
            <ResidencyType
              title="Creative Documentation"
              duration="1–2 weeks"
              description="Felt stories of place and practice. Photography, writing, film, sound."
            />
            <ResidencyType
              title="Community Wellbeing"
              duration="2–3 weeks"
              description="June's Patch evaluation, healthcare worker wellbeing, nature-based programs."
            />
          </div>
          <div className="bg-stone-50 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="font-semibold text-stone-900 mb-3">What's included</h3>
            <ul className="text-stone-600 space-y-2">
              <li>Eco-accommodation on conservation land</li>
              <li>Full property access — 150 acres, trails, creek systems</li>
              <li>Existing habitat data and monitoring infrastructure</li>
              <li>Research support and Jinibara Country connections</li>
              <li>Shared kitchen and workspace</li>
            </ul>
          </div>
          <Link
            href="/connect?interest=residency"
            className="inline-block bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
          >
            Apply for a residency
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not sure which fits?</h2>
          <p className="text-lg text-emerald-100 mb-8">
            Tell us what you're thinking and we'll work it out together.
            Every use of the farm supports conservation of threatened species habitat.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
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
    <div className="bg-stone-50 p-5 rounded-lg">
      <h4 className="font-semibold text-stone-900 mb-1">{title}</h4>
      <p className="text-sm text-emerald-700 font-medium mb-2">{duration}</p>
      <p className="text-stone-600 text-sm">{description}</p>
    </div>
  );
}
