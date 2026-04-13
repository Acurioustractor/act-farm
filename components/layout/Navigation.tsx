'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/map', label: 'Explore' },
  { href: '/use-the-farm', label: 'Use the Farm' },
  { href: '/junes-patch', label: "June's Patch" },
  { href: '/about', label: 'About' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-semibold text-stone-900 hover:text-stone-700 transition-colors">
            Black Cockatoo Valley
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-stone-700 hover:text-stone-900 hover:bg-stone-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-stone-700 hover:text-stone-900 transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/connect"
              className="bg-emerald-700 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/connect"
                className="bg-emerald-700 text-white px-5 py-2 rounded-full font-medium hover:bg-emerald-800 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
