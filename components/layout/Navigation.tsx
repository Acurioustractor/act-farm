'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-semibold text-stone-900 hover:text-stone-700 transition-colors">
            A Curious Tractor Farm
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

          <div className="hidden md:flex space-x-8">
            <Link href="/map" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
              Map
            </Link>
            <Link href="/about" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
              About
            </Link>
            <Link href="/activities" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
              Activities
            </Link>
            <Link href="/residencies" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
              Residencies
            </Link>
            <Link href="/accommodation" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
              Accommodation
            </Link>
            <Link href="/connect" className="text-stone-700 hover:text-stone-900 transition-colors font-medium">
              Connect
            </Link>
            <a
              href="https://theharvest.acurioustractor.com"
              className="text-emerald-700 hover:text-emerald-900 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Harvest →
            </a>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/map" className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2">
                Map
              </Link>
              <Link href="/about" className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2">
                About
              </Link>
              <Link href="/activities" className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2">
                Activities
              </Link>
              <Link href="/residencies" className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2">
                Residencies
              </Link>
              <Link href="/accommodation" className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2">
                Accommodation
              </Link>
              <Link href="/connect" className="text-stone-700 hover:text-stone-900 transition-colors font-medium py-2">
                Connect
              </Link>
              <a
                href="https://theharvest.acurioustractor.com"
                className="text-emerald-700 hover:text-emerald-900 transition-colors font-medium py-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Harvest →
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
