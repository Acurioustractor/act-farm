'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/map', label: 'Explore' },
  { href: '/use-the-farm', label: 'Use the Farm' },
  { href: '/vision', label: 'Vision' },
  { href: '/about', label: 'About' },
  { href: '/connect', label: 'Get in Touch' },
];

export default function SiteNav() {
  const pathname = usePathname();

  // Hide on vision page — it has its own nav
  if (pathname === '/vision') return null;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="flex items-center justify-center gap-6 md:gap-10 py-4 px-4 overflow-x-auto no-scrollbar">
        <Link href="/" className="flex-shrink-0 mr-2 md:mr-6">
          <img src="/images/bcv-logo-dark.png" alt="Black Cockatoo Valley" className="h-8" />
        </Link>
        {navItems.filter(n => n.href !== '/').map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-[10px] md:text-xs tracking-[0.15em] uppercase font-semibold whitespace-nowrap transition-colors ${
              pathname === href
                ? 'text-emerald-700'
                : href === '/connect'
                  ? 'text-emerald-700 hover:text-emerald-800'
                  : 'text-stone-500 hover:text-stone-900'
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
