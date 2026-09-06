'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomeHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const scale = 1 + scrollY * 0.0003;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Centred content */}
      <div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity, transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <p className="ui-label mb-8 !text-[10px] !tracking-[0.5em] text-white/50">
          On Jinibara Country &middot; Sunshine Coast Hinterland
        </p>

        <img
          src="/images/bcv-logo-white.png"
          alt="Black Cockatoo Valley"
          className="mx-auto mb-10 w-full max-w-md md:max-w-lg"
        />

        <h1 className="text-[clamp(1.3rem,3.5vw,2.2rem)] font-light leading-[1.3] text-white/70 max-w-2xl mx-auto mb-10" style={{ fontFamily: 'var(--font-body), Georgia, serif' }}>
          138 acres of threatened species habitat available for workshops,
          events, retreats, and research residencies.
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/use-the-farm"
            className="px-8 py-3 bg-white text-site-ink rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:bg-site-surface transition-all duration-500"
          >
            Use the Farm
          </Link>
          <Link
            href="/vision"
            className="px-8 py-3 border border-white/30 text-white rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:border-white/60 transition-all duration-500"
          >
            See the Vision
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <svg
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="1.5"
          className="text-white/30 animate-bounce"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
