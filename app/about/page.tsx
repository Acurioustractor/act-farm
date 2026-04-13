import Link from 'next/link';

export const metadata = {
  title: 'About | Black Cockatoo Valley',
  description: 'Black Cockatoo Valley on Jinibara Country — a regenerative capital engine where every stay, workshop, and residency funds the next. Part of A Curious Tractor.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-site-ink text-white py-28 md:py-36">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-white/50 mb-6">On Jinibara Country</p>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.05] mb-8">
            About Black Cockatoo Valley
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-white/70 leading-relaxed">
            150 acres of threatened species habitat. A living laboratory for
            conservation, regenerative practice, and creative work grounded in Country.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-green mb-4 text-center">
            Part of the A Curious Tractor ecosystem
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-10 text-center">
            Why This Land Matters
          </h2>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7]">
            <p className="text-xl text-site-ink text-center">
              A Curious Tractor is a regenerative innovation ecosystem. Like a tractor's
              power take-off, we transfer resources, knowledge, and capacity to community-led
              initiatives. We build technology that communities can own when we're gone.
            </p>
            <p>
              Black Cockatoo Valley is where that work meets the soil. It's a regenerative
              capital engine — every stay, workshop, and residency we host funds the next one.
              By 2030 we want to operate or partner with 10 residencies like this, each grounded
              in its own place, each generating the capital that builds the next.
            </p>
            <p>
              Jinibara Country stewardship is permanent, not transitional. First Nations cultural
              authority over this land is non-negotiable. What we're building is the business model
              underneath — a revenue engine that funds conservation, community programming, and
              the next site.
            </p>
          </div>
        </div>
      </section>

      {/* LCAA Framework */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-4 text-center">
            The LCAA Method
          </h2>
          <p className="text-lg text-site-muted text-center mb-6 max-w-[720px] mx-auto">
            Listen. Curiosity. Action. Art. Not a checklist — a loop.
            Art returns us to Listen, and the cycle continues.
          </p>

          {/* LCAA Loop Diagram */}
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-3 text-site-muted text-sm font-sans">
              <span className="text-site-green font-semibold">Listen</span>
              <span>&rarr;</span>
              <span className="text-site-green font-semibold">Curiosity</span>
              <span>&rarr;</span>
              <span className="text-site-green font-semibold">Action</span>
              <span>&rarr;</span>
              <span className="text-site-green font-semibold">Art</span>
              <span>&rarr;</span>
              <span className="text-site-muted/50">back to Listen</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <LCAACard
              title="Listen"
              quote="We sit in silence to take in knowledge."
              description="Start by deeply listening to community, Country, and the land itself. Not surveying, not consulting — listening. Understanding what already exists, what's working, what hurts."
              examples={['Partnership with Jinibara knowledge holders', 'USC research collaboration', 'Healthcare worker co-design', 'Habitat observation and monitoring']}
            />
            <LCAACard
              title="Curiosity"
              quote="We lean into the unknown with open minds and hearts."
              description="Follow the threads that emerge from listening. Ask better questions. Explore unexpected connections. Resist premature closure. Innovation lives in the space between what is and what could be."
              examples={['Conservation technology residencies', 'Regenerative practice experiments', 'Ethical AI for habitat monitoring', 'Community wellbeing research']}
            />
            <LCAACard
              title="Action"
              quote="We are makers who play and take chances."
              description="Move from understanding to doing. Build, prototype, test, iterate. Done with community, not to community. If we cannot hand it over, we are still in Curiosity."
              examples={['Habitat restoration activities', 'June\'s Patch food production', 'Platform development', 'Species monitoring systems']}
            />
            <LCAACard
              title="Art"
              quote="We recognise art as the first form of revolution."
              description="Where action becomes something beautiful, meaningful, and lasting. Art is how impact is communicated, how culture is preserved, how stories change the world. Not decoration — the highest expression of the work."
              examples={['Creative documentation residencies', 'Shared meals and gatherings', 'Storytelling through place', 'Aesthetic restoration choices']}
            />
          </div>
        </div>
      </section>

      {/* The Land */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-10">The Country</h2>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7]">
            <p>
              Black Cockatoo Valley spans 150 acres on <strong className="text-site-ink">Jinibara Country</strong> near Witta, Queensland.
              Views stretch to the Mary River headwaters, with creeks and forest winding down to Elaman Creek.
            </p>
            <p>
              This is <strong className="text-site-ink">threatened species habitat</strong>. Conservation-first is the
              baseline, always. When the creek is low or the grass is tired, we slow down. Capacity is a land
              decision before it is a calendar decision.
            </p>
            <div className="bg-site-surface p-8 rounded-[var(--site-radius)] border-l-4 border-site-green my-10">
              <h3 className="text-2xl font-light text-site-ink mb-5">Country Sets the Pace</h3>
              <ul className="space-y-3">
                {[
                  'The land has veto power — no activities during sensitive seasons',
                  'Low-volume operations to minimise habitat disturbance',
                  'Ongoing weed management and native species restoration',
                  'Wildlife corridors maintained, water systems respected',
                  'Revenue from every stay reinvested in conservation',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="text-site-green font-bold mr-3 mt-0.5">&#10003;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="border-l-4 border-site-clay pl-6 italic text-site-muted">
              "If we're too busy to notice the birds, we're too busy."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Farm Metaphor */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-10">
            The Farm Metaphor
          </h2>
          <p className="text-site-muted text-lg leading-[1.7] mb-10">
            The farm metaphor is not branding. It shapes daily operations and enterprise choices.
            The system is the tractor, the humans are the farmers, the community is the harvest.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { element: 'Soil', meaning: 'The knowledge network, community wisdom' },
              { element: 'Seeds', meaning: 'Projects, ideas, initiatives' },
              { element: 'Tending', meaning: 'Ongoing care and attention' },
              { element: 'Harvest', meaning: 'Impact, results, value returned' },
              { element: 'Compost', meaning: 'Learning from failure' },
              { element: 'Seasons', meaning: 'Natural rhythms and timing' },
            ].map((item) => (
              <div key={item.element} className="bg-site-bg p-5 rounded-[var(--site-radius)]">
                <h4 className="text-lg font-light text-site-ink mb-1">{item.element}</h4>
                <p className="text-site-muted text-sm">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regenerative Capital Engine */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-10">
            How the Engine Works
          </h2>
          <div className="space-y-6 text-site-muted text-lg leading-[1.7]">
            <p>
              Every dollar ACT Farm generates builds more residencies, more accommodation,
              more places for artists, researchers, and communities to do transformative work.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-10">
              <div className="bg-site-surface p-6 rounded-[var(--site-radius)]">
                <h3 className="text-xl font-light text-site-ink mb-4">Revenue Streams</h3>
                <ul className="space-y-2 text-site-muted text-[15px]">
                  <li>Philanthropy-sponsored residencies</li>
                  <li>Corporate innovation retreats</li>
                  <li>Innovation workshops</li>
                  <li>Eco-stays (Pink Cabin, Train Carriage)</li>
                  <li>June's Patch healthcare wellness</li>
                  <li>The Harvest CSA and dining events</li>
                </ul>
              </div>
              <div className="bg-site-surface p-6 rounded-[var(--site-radius)]">
                <h3 className="text-xl font-light text-site-ink mb-4">Where It Goes</h3>
                <ul className="space-y-2 text-site-muted text-[15px]">
                  <li>Conservation and habitat restoration</li>
                  <li>Community programming and therapeutic horticulture</li>
                  <li>New accommodation and studio infrastructure</li>
                  <li>First Nations heritage and cultural work</li>
                  <li>The next site in the network</li>
                </ul>
              </div>
            </div>
            <p>
              The vision is a portfolio: 3-5 sites by 2030, each grounded in its own place,
              co-governed with Traditional Owners, and generating the capital that builds the next.
              ACT brings operations, brand, and booking infrastructure. Partners bring land and
              local relationships. Revenue share, not purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-20 md:py-28 bg-site-ink text-white">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light mb-8 text-center">The Tractor</h2>
          <div className="space-y-6 text-white/60 text-lg leading-[1.7]">
            <p>
              A Curious Tractor began with a simple observation: most technology extracts
              value from communities. Data flows out, insights flow out, decisions are made elsewhere.
            </p>
            <p>
              The tractor metaphor came from agricultural machinery: a tractor's Power Take-Off
              transfers engine power to implements. The tractor doesn't do the work itself — it
              enables other tools to work. And crucially, implements can be unhitched, repaired
              locally, and used without the tractor.
            </p>
            <p className="text-white/80 text-xl">
              The question isn't "what can we build?" but "what can communities own when we're gone?"
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-6">Walk With Us</h2>
          <p className="text-lg text-site-muted mb-10">
            Stay at the valley, use the farm for your program, or explore how your
            work connects to what we're building here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay"
              className="inline-block bg-site-green text-white px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
            >
              Stay at the Valley
            </Link>
            <Link
              href="/connect"
              className="inline-block border border-site-ink text-site-ink px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:bg-site-surface transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

interface LCAACardProps {
  title: string;
  quote: string;
  description: string;
  examples: string[];
}

function LCAACard({ title, quote, description, examples }: LCAACardProps) {
  return (
    <div className="card-hover bg-site-bg p-8 rounded-[var(--site-radius)]">
      <h3 className="text-3xl font-light text-site-green mb-2">{title}</h3>
      <p className="text-sm italic text-site-clay mb-4">{quote}</p>
      <p className="text-site-muted mb-6 leading-relaxed">{description}</p>
      <div>
        <h4 className="ui-label text-site-ink mb-3">At the Farm</h4>
        <ul className="space-y-2">
          {examples.map((example, index) => (
            <li key={index} className="flex items-start text-site-muted text-[15px]">
              <span className="text-site-clay mr-2">&rarr;</span>
              <span>{example}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
