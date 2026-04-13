import Link from 'next/link';
import BeforeAfterSlider from '@/components/vision/BeforeAfterSlider';

export const metadata = {
  title: 'Vision | Black Cockatoo Valley',
  description: 'What Black Cockatoo Valley could become. From paddock to pilgrimage — regenerative art, atmospheric experiences, and community on Jinibara Country.',
};

export default function VisionPage() {
  return (
    <div className="bg-[#080c14] text-white min-h-screen -mb-8">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero/farm-drone.jpg"
            alt="Black Cockatoo Valley aerial"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-[#080c14]/60 via-transparent to-[#080c14]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-emerald-400 mb-6 block">
            Jinibara Country, Sunshine Coast Hinterland
          </span>
          <h1 className="font-serif text-5xl md:text-8xl font-black tracking-tight leading-[0.85] mb-8">
            Black Cockatoo<br />Valley
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl font-light text-white/50">
            A place where people come to be amazed, to reconnect,
            and to remember what matters.
          </p>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8 mb-12 text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-emerald-400 mb-4 block">
            150 Acres — Threatened Species Habitat
          </span>
          <h2 className="font-serif text-4xl md:text-7xl font-bold tracking-tight">
            From paddock<br />to pilgrimage.
          </h2>
        </div>
        <BeforeAfterSlider
          beforeSrc="/images/map/drone-before.jpg"
          afterSrc="/images/map/site-plan.jpg"
          beforeLabel="Today"
          afterLabel="The Plan"
        />
        <div className="max-w-[1400px] mx-auto px-8 mt-12">
          <p className="max-w-2xl text-white/40 font-light leading-relaxed">
            150 acres of dense subtropical forest wrapping open green space.
            Native corridor restoration, threatened species habitat, creek systems
            down to Elaman Creek, and views to the Mary River. The land as it
            is — and where it's heading.
          </p>
        </div>
      </section>

      {/* Vision Concepts */}
      <section className="py-16 md:py-24 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-emerald-400 mb-4 block">
              What We're Growing Toward
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
              Five seeds<br />in the ground.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VisionCard
              number="01"
              title="The Regenerative Art Trail"
              description="A walking trail through remnant vegetation where art installations respond to the ecology. Sculptures that hold rainwater. Sound pieces triggered by bird calls. Interpretation that comes from Jinibara knowledge holders, not gallery labels."
              color="text-emerald-400"
            />
            <VisionCard
              number="02"
              title="Atmospheric Night Walk"
              description="Projection mapping on ancient trees. Sound installations breathing through the bush. Light paths that respond to footsteps. An Elder by the firepit, voice and flame and stars. The forest after dark, revealed rather than disturbed."
              color="text-purple-400"
            />
            <VisionCard
              number="03"
              title="The Harvest Table"
              description="A long communal table under festoon lights. Farm-to-table dining with live music drifting across the garden. No phones. Two hours. Just the landscape and the people you share it with. Food from the ground you're sitting on."
              color="text-pink-400"
            />
            <VisionCard
              number="04"
              title="The Living Dashboard"
              description="Where technology reveals nature instead of replacing it. Real-time soil health, bird migration, carbon sequestration — made visible through timber-framed displays at the forest edge. Science made beautiful."
              color="text-amber-400"
            />
            <VisionCard
              number="05"
              title="Community Co-Stewardship"
              description="The end game. This land held by the community it serves. Every residency, every workshop, every harvest gathering builds capacity and shared ownership. We design for the day we hand over the keys."
              color="text-sky-400"
            />
          </div>
        </div>
      </section>

      {/* Signature Moments */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/20 mb-4 block">
              Signature Experiences
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold tracking-tight">
              Moments that<br />change people.
            </h2>
          </div>

          <div className="space-y-16">
            <MomentCard
              title="The Night Walk"
              description="Projection mapping on ancient trees. Sound installations breathing through the bush. Light paths that respond to your footsteps. A Jinibara Elder by the firepit, voice and flame and stars."
              detail="Seasonal — small groups only"
              accentColor="border-purple-400/30 text-purple-400"
            />
            <MomentCard
              title="The Harvest Table"
              description="A long communal table under festoon lights. Farm-to-table dining with live music drifting across the garden. No phones. Two hours. Just the landscape and the people you share it with."
              detail="Saturday nights — seasonal"
              accentColor="border-emerald-400/30 text-emerald-400"
            />
            <MomentCard
              title="Dawn on Country"
              description="First light across 150 acres. A guided walk with someone who knows this land — not as a tour, but as an introduction. The cockatoos. The creek. The quiet before the day arrives."
              detail="By arrangement"
              accentColor="border-amber-400/30 text-amber-400"
            />
          </div>
        </div>
      </section>

      {/* Founder's Quote */}
      <section className="py-20 md:py-32 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-white/15 mb-12 block">
            The Ethos
          </span>
          <h2 className="font-serif text-3xl md:text-6xl font-bold tracking-tight leading-tight">
            &ldquo;We are not building a business.<br />
            We are <em className="text-emerald-400">growing a place</em>.&rdquo;
          </h2>
          <p className="mt-10 max-w-2xl mx-auto text-lg text-white/30 font-light leading-relaxed">
            A place where art is how you feel, not what you see. Where technology
            reveals nature instead of replacing it. Where an Elder's story has more
            power than a CEO's keynote. Where the food comes from the ground
            you're standing on.
          </p>
          <p className="mt-8 text-lg text-white/40 font-light">
            We are building something that makes people say:<br />
            <em className="text-white/60">&ldquo;I didn't know a place like this could exist.&rdquo;</em>
          </p>
          <div className="mt-16">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-bold mb-1">
              Benjamin Knight & Nicholas Marchesi OAM
            </p>
            <p className="text-white/15 text-[10px] tracking-[0.2em] uppercase font-semibold">
              ACT — A Curious Tractor &middot; Jinibara Country
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-2xl md:text-4xl font-bold mb-6">
            Want to be part of this?
          </h3>
          <p className="text-white/40 mb-8">
            The farm is open for workshops, events, retreats, and residencies today.
            The vision is what we're growing toward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/use-the-farm"
              className="px-8 py-4 bg-white text-[#080c14] rounded-full font-semibold hover:bg-emerald-400 transition-colors"
            >
              Use the Farm
            </Link>
            <Link
              href="/connect"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-white/40 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function VisionCard({
  number,
  title,
  description,
  color,
}: {
  number: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-lg p-8 hover:bg-white/[0.05] transition-colors">
      <span className={`text-[9px] tracking-[0.2em] uppercase font-semibold ${color} mb-4 block`}>
        Vision {number}
      </span>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white/40 font-light leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function MomentCard({
  title,
  description,
  detail,
  accentColor,
}: {
  title: string;
  description: string;
  detail: string;
  accentColor: string;
}) {
  return (
    <div className="grid md:grid-cols-3 gap-8 items-start">
      <div className="md:col-span-2">
        <h3 className="font-serif text-3xl md:text-5xl font-bold tracking-tight mb-4">
          {title}
        </h3>
        <p className="text-white/40 font-light leading-relaxed text-lg">
          {description}
        </p>
      </div>
      <div className="flex md:justify-end md:pt-4">
        <span className={`inline-block px-6 py-3 border ${accentColor} text-xs tracking-widest font-bold uppercase rounded-full`}>
          {detail}
        </span>
      </div>
    </div>
  );
}
