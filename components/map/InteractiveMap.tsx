'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Location } from '@/types/map';
import { farmData } from '@/lib/map/farmData';
import { getLocationTypeColor } from '@/lib/map/mapConstants';
import LocationSidebar from './LocationSidebar';

export default function InteractiveMap({ compact = false }: { compact?: boolean }) {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handlePinClick = (location: Location) => {
    setSelectedLocation(location);
  };

  return (
    <div className={`flex flex-col lg:flex-row ${compact ? 'h-[80vh]' : 'h-screen'}`}>
      {/* Map Container */}
      <div className="flex-1 relative bg-stone-900 overflow-hidden">
        {/* Map label */}
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
          <p className="text-xs font-semibold text-stone-700">Click a pin to explore</p>
        </div>

        {/* Map Info or Full screen link */}
        {!compact ? (
          <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg max-w-xs">
            <h3 className="font-bold text-stone-900 mb-1">{farmData.metadata.title}</h3>
            <p className="text-sm text-stone-600">{farmData.metadata.description}</p>
            <p className="text-xs text-stone-500 mt-2">{farmData.metadata.totalAcres} acres</p>
          </div>
        ) : (
          <Link
            href="/map"
            className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors"
          >
            Full screen →
          </Link>
        )}

        {/* Map Image with Pins */}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-w-full" style={{ aspectRatio: '1920 / 1440' }}>
            {/* Drone Image */}
            <Image
              src="/images/map/drone-current.jpg"
              alt="Aerial view of Black Cockatoo Valley"
              width={1920}
              height={1440}
              className="w-full h-full select-none"
              priority
              style={{
                width: '100%',
                maxWidth: 'min(100%, 1920px)',
                aspectRatio: '1920 / 1440',
              }}
            />

            {/* Location Pins */}
            {farmData.locations.map((location) => (
              <button
                key={location.id}
                onClick={() => handlePinClick(location)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                aria-label={`View ${location.title}`}
              >
                {/* Pulse Effect */}
                <span className="absolute inset-0 w-8 h-8 rounded-full bg-white opacity-75 animate-ping"></span>

                {/* Pin Head */}
                <span
                  className={`relative block w-8 h-8 rounded-full ${getLocationTypeColor(location.type)} shadow-lg border-2 border-white group-hover:scale-110 transition-transform cursor-pointer`}
                >
                  {/* Inner Dot */}
                  <span className="absolute inset-2 bg-white rounded-full"></span>
                </span>

                {/* Label */}
                <span className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {location.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Close Sidebar Overlay */}
        {selectedLocation && (
          <div
            className="lg:hidden absolute inset-0 bg-black/50 z-20"
            onClick={() => setSelectedLocation(null)}
          />
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:relative right-0 top-0 bottom-0 left-0 lg:left-auto z-30 transform transition-transform duration-300 ${
          selectedLocation ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <LocationSidebar
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      </div>
    </div>
  );
}
