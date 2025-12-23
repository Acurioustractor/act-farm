'use client';

import { ImageLayer } from '@/types/map';
import { Map, Image as ImageIcon, Layers, TreePine } from 'lucide-react';

interface ImageLayerSelectorProps {
  currentLayer: ImageLayer;
  onLayerChange: (layer: ImageLayer) => void;
}

export default function ImageLayerSelector({ currentLayer, onLayerChange }: ImageLayerSelectorProps) {
  const layers: Array<{
    id: ImageLayer;
    label: string;
    icon: React.ReactNode;
    description: string;
  }> = [
    {
      id: 'drone-current',
      label: 'Current',
      icon: <ImageIcon className="w-4 h-4" />,
      description: 'Current drone photo',
    },
    {
      id: 'drone-before',
      label: 'Before',
      icon: <ImageIcon className="w-4 h-4" />,
      description: 'Before restoration',
    },
    {
      id: 'site-plan',
      label: 'Site Plan',
      icon: <Map className="w-4 h-4" />,
      description: 'Site plan overlay',
    },
    {
      id: 'habitat-zones',
      label: 'Habitat',
      icon: <TreePine className="w-4 h-4" />,
      description: 'Habitat zones',
    },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-2">
      <div className="flex items-center gap-1 mb-2 px-2">
        <Layers className="w-4 h-4 text-stone-600" />
        <span className="text-xs font-semibold text-stone-700">Map Layers</span>
      </div>
      <div className="flex flex-col gap-1">
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => onLayerChange(layer.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentLayer === layer.id
                ? 'bg-emerald-700 text-white'
                : 'text-stone-700 hover:bg-stone-100'
            }`}
            title={layer.description}
          >
            {layer.icon}
            <span>{layer.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
