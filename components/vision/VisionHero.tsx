'use client';

import { useEffect, useState } from 'react';

export default function VisionHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = 1 + scrollY * 0.0003;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/media/hero-aerial-poster.jpg"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${scale})` }}
        >
          <source src="/media/hero-aerial.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#080c14]" />
      </div>

      {/* Centred content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity, transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/60">
          Jinibara Country &middot; Sunshine Coast Hinterland
        </p>

        <img
          src="/images/bcv-logo-white.png"
          alt="Black Cockatoo Valley"
          className="mx-auto mb-10 w-full max-w-md md:max-w-lg"
        />

        <h1 className="text-[clamp(1.5rem,4vw,2.8rem)] font-light leading-[1.2] text-white/80 max-w-2xl mx-auto">
          A place where people come to be amazed,<br className="hidden md:block" />
          to reconnect, and to remember what matters.
        </h1>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.4em] uppercase font-semibold text-white/30">
            Scroll to explore
          </span>
          <svg
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="1.5"
            className="text-white/30 animate-bounce"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
