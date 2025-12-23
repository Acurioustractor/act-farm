'use client';

import { useState } from 'react';
import Image from 'next/image';
import { pixelsToPercentage } from '@/lib/map/mapConstants';

export default function AdminPinTool() {
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const [percentPosition, setPercentPosition] = useState<{ x: number; y: number } | null>(null);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate relative position
    const relativeX = (x / rect.width) * 100;
    const relativeY = (y / rect.height) * 100;

    setClickPosition({ x, y });
    setPercentPosition({ x: relativeX, y: relativeY });
  };

  const copyToClipboard = () => {
    if (!percentPosition) return;

    const code = `{
  id: 'new-location',
  x: ${percentPosition.x.toFixed(2)},
  y: ${percentPosition.y.toFixed(2)},
  title: 'New Location',
  type: 'building', // or 'nature', 'garden', 'infrastructure', 'habitat', 'activity'
  description: 'Description here',
  overview: 'Overview here',
  status: 'existing', // or 'in-development', 'planned'
},`;

    navigator.clipboard.writeText(code);
    alert('Location code copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-stone-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">Admin Pin Positioning Tool</h1>
          <p className="text-stone-700 mb-4">
            Click on the drone image below to get the coordinates for a new location pin.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
            <h3 className="font-semibold text-amber-900 mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside space-y-1 text-sm text-amber-800">
              <li>Click on the drone image where you want to place a pin</li>
              <li>The coordinates will appear below</li>
              <li>Click "Copy Location Code" to copy the template</li>
              <li>Paste it into <code className="bg-amber-100 px-1 rounded">lib/map/farmData.ts</code></li>
              <li>Fill in the location details (title, description, etc.)</li>
            </ol>
          </div>
        </div>

        {/* Coordinate Display */}
        {percentPosition && (
          <div className="bg-emerald-50 border-l-4 border-emerald-700 p-6 rounded-lg mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-semibold text-emerald-900 mb-2">Clicked Position:</h3>
                <p className="text-emerald-800 font-mono">
                  x: {percentPosition.x.toFixed(2)}% | y: {percentPosition.y.toFixed(2)}%
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
              >
                Copy Location Code
              </button>
            </div>
            <pre className="bg-stone-900 text-emerald-400 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  id: 'new-location',
  x: ${percentPosition.x.toFixed(2)},
  y: ${percentPosition.y.toFixed(2)},
  title: 'New Location',
  type: 'building', // or 'nature', 'garden', 'infrastructure', 'habitat', 'activity'
  description: 'Description here',
  overview: 'Overview here',
  status: 'existing', // or 'in-development', 'planned'
  // Add images, activities, habitat info, etc.
},`}
            </pre>
          </div>
        )}

        {/* Drone Image */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold text-stone-900 mb-4">
            Click on the image to position a pin
          </h2>
          <div
            onClick={handleImageClick}
            className="relative cursor-crosshair bg-stone-900 rounded-lg overflow-hidden"
            style={{ aspectRatio: '1920 / 1440' }}
          >
            <Image
              src="/images/map/drone-current.jpg"
              alt="Drone view of Black Cockatoo Valley"
              width={1920}
              height={1440}
              className="w-full h-full select-none"
              priority
            />

            {/* Show clicked position */}
            {clickPosition && percentPosition && (
              <div
                className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${percentPosition.x}%`, top: `${percentPosition.y}%` }}
              >
                {/* Pulse */}
                <span className="absolute inset-0 w-8 h-8 rounded-full bg-red-500 opacity-75 animate-ping"></span>
                {/* Pin */}
                <span className="relative block w-8 h-8 rounded-full bg-red-600 shadow-lg border-2 border-white">
                  <span className="absolute inset-2 bg-white rounded-full"></span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Type Reference */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-6">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Location Type Reference</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <TypeCard type="building" color="bg-stone-600" description="Structures, cabins, facilities" />
            <TypeCard type="nature" color="bg-emerald-600" description="Natural features, viewpoints" />
            <TypeCard type="garden" color="bg-green-600" description="Gardens, growing areas" />
            <TypeCard type="infrastructure" color="bg-slate-600" description="Utilities, systems" />
            <TypeCard type="habitat" color="bg-teal-600" description="Conservation zones" />
            <TypeCard type="activity" color="bg-amber-600" description="Workshop spaces, gathering areas" />
          </div>
        </div>
      </div>
    </div>
  );
}

interface TypeCardProps {
  type: string;
  color: string;
  description: string;
}

function TypeCard({ type, color, description }: TypeCardProps) {
  return (
    <div className="bg-stone-50 p-4 rounded-lg">
      <div className="flex items-center gap-3 mb-2">
        <span className={`w-6 h-6 rounded-full ${color}`}></span>
        <span className="font-semibold text-stone-900">{type}</span>
      </div>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
}
