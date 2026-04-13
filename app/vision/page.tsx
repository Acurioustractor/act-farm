import Link from 'next/link';
import VisionHero from '@/components/vision/VisionHero';
import BeforeAfterSlider from '@/components/vision/BeforeAfterSlider';

export const metadata = {
  title: 'Vision | Black Cockatoo Valley',
  description: 'What Black Cockatoo Valley could become. From paddock to pilgrimage — regenerative art, atmospheric experiences, and community on Jinibara Country.',
};

const navItems = [
  { href: '#visions', label: 'The Land' },
  { href: '#seeds', label: 'Seeds' },
  { href: '#moments', label: 'Moments' },
  { href: '#ethos', label: 'Ethos' },
  { href: '/use-the-farm', label: 'Use the Farm' },
  { href: '/connect', label: 'Get in Touch' },
];

export default function VisionPage() {
  return (
    <div className="bg-[#080c14] text-white min-h-screen -mb-8 pt-0 vision-page">
      {/* Hero — full screen video, centred logo + headline */}
      <VisionHero />

      {/* Inline centred nav */}
      <nav className="sticky top-0 z-50 bg-[#080c14]/90 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center justify-center gap-6 md:gap-12 py-4 px-4 overflow-x-auto no-scrollbar">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-[10px] tracking-[0.3em] uppercase font-semibold text-white/40 hover:text-white transition-colors whitespace-nowrap"
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Before/After Slider */}
      <section id="visions" className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-8 mb-16 text-center">
          <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-emerald-400 mb-4 block">
            150 Acres — Threatened Species Habitat
          </span>
          <h2 className="font-serif text-4xl md:text-7xl font-bold tracking-tight">
            From paddock<br />to pilgrimage.
          </h2>
        </div>
        <BeforeAfterSlider
          beforeSrc="/images/map/drone-current.jpg"
          afterSrc="/images/map/site-plan.jpg"
          beforeLabel="Today"
          afterLabel="The Plan"
        />
        <div className="max-w-[1400px] mx-auto px-8 mt-12 text-center">
          <p className="max-w-2xl mx-auto text-white/40 font-light leading-relaxed">
            Dense subtropical forest wrapping open green space. Native corridor
            restoration, threatened species habitat, creek systems down to Elaman
            Creek, and views to the Mary River.
          </p>
        </div>
      </section>

      {/* Vision Concepts */}
      <section id="seeds" className="py-20 md:py-32 bg-white/[0.02]">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="mb-20 text-center">
            <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-emerald-400 mb-4 block">
              What We're Growing Toward
            </span>
            <h2 className="font-serif text-4xl md:text-7xl font-bold tracking-tight">
              Five seeds in the ground.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VisionCard
              number="01"
              title="The Regenerative Art Trail"
              description="A walking trail through remnant vegetation where art installations respond to the ecology. Sculptures that hold rainwater. Sound pieces triggered by bird calls. Interpretation from Jinibara knowledge holders, not gallery labels."
              color="text-emerald-400"
              borderColor="border-emerald-400/20"
            />
            <VisionCard
              number="02"
              title="Atmospheric Night Walk"
              description="Projection mapping on ancient trees. Sound installations breathing through the bush. Light paths that respond to footsteps. An Elder by the firepit, voice and flame and stars."
              color="text-purple-400"
              borderColor="border-purple-400/20"
            />
            <VisionCard
              number="03"
              title="The Harvest Table"
              description="A long communal table under festoon lights. Farm-to-table dining with live music drifting across the garden. No phones. Two hours. Food from the ground you're sitting on."
              color="text-pink-400"
              borderColor="border-pink-400/20"
            />
            <VisionCard
              number="04"
              title="The Living Dashboard"
              description="Where technology reveals nature instead of replacing it. Real-time soil health, bird migration, carbon sequestration — made visible through timber-framed displays at the forest edge."
              color="text-amber-400"
              borderColor="border-amber-400/20"
            />
            <VisionCard
              number="05"
              title="Community Co-Stewardship"
              description="The end game. This land held by the community it serves. Every residency, workshop, and harvest gathering builds shared ownership. We design for the day we hand over the keys."
              color="text-sky-400"
              borderColor="border-sky-400/20"
            />
          </div>
        </div>
      </section>

      {/* Signature Moments — full bleed sections */}
      <section id="moments">
        <MomentSection
          title="The Night Walk"
          description="Projection mapping on ancient trees. Sound installations breathing through the bush. Light paths that respond to your footsteps. A Jinibara Elder by the firepit, voice and flame and stars."
          detail="$75/head — Sells out monthly"
          accentColor="text-purple-400"
          borderColor="border-purple-400/30"
          align="left"
        />
        <MomentSection
          title="The Harvest Table"
          description="A long communal table under festoon lights. Farm-to-table dining with live music drifting across the garden. No phones. Two hours. Just the landscape and the people you share it with."
          detail="$120/head — Saturday nights"
          accentColor="text-emerald-400"
          borderColor="border-emerald-400/30"
          align="right"
        />
        <MomentSection
          title="Dawn on Country"
          description="First light across 150 acres. A guided walk with someone who knows this land — not as a tour, but as an introduction. The cockatoos. The creek. The quiet before the day arrives."
          detail="By arrangement"
          accentColor="text-amber-400"
          borderColor="border-amber-400/30"
          align="left"
        />
      </section>

      {/* Founder's Quote */}
      <section id="ethos" className="py-24 md:py-40 px-8 text-center">
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
            reveals nature instead of replacing it. Where an Elder&apos;s story has more
            power than a CEO&apos;s keynote. Where the food comes from the ground
            you&apos;re standing on.
          </p>
          <p className="mt-8 text-lg text-white/40 font-light">
            We are building something that makes people say:<br />
            <em className="text-white/60">&ldquo;I didn&apos;t know a place like this could exist.&rdquo;</em>
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
      <section className="py-20 px-8 text-center border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <h3 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Want to be part of this?
          </h3>
          <p className="text-white/40 text-lg mb-10">
            The farm is open today. The vision is what we&apos;re growing toward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/use-the-farm"
              className="px-10 py-4 bg-white text-[#080c14] rounded-full font-semibold hover:bg-emerald-400 transition-all duration-500 text-sm tracking-wide uppercase"
            >
              Use the Farm
            </Link>
            <Link
              href="/connect"
              className="px-10 py-4 border border-white/20 text-white rounded-full font-semibold hover:border-white/40 transition-all duration-500 text-sm tracking-wide uppercase"
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
  borderColor,
}: {
  number: string;
  title: string;
  description: string;
  color: string;
  borderColor: string;
}) {
  return (
    <div className={`border ${borderColor} rounded-xl p-8 hover:bg-white/[0.03] transition-all duration-500 group`}>
      <span className={`text-[9px] tracking-[0.3em] uppercase font-bold ${color} mb-5 block`}>
        Vision {number}
      </span>
      <h3 className="text-xl font-semibold mb-4 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-white/35 font-light leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function MomentSection({
  title,
  description,
  detail,
  accentColor,
  borderColor,
  align,
}: {
  title: string;
  description: string;
  detail: string;
  accentColor: string;
  borderColor: string;
  align: 'left' | 'right';
}) {
  return (
    <div className="relative min-h-[70vh] flex items-center px-6 md:px-24 py-20 border-t border-white/5">
      <div className={`max-w-2xl ${align === 'right' ? 'ml-auto text-right' : ''}`}>
        <h3 className="font-serif text-4xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[0.9]">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-8 md:mb-10">
          {description}
        </p>
        <span className={`inline-block px-6 py-3 border ${borderColor} ${accentColor} text-xs tracking-widest font-bold uppercase rounded-full`}>
          {detail}
        </span>
      </div>
    </div>
  );
}
