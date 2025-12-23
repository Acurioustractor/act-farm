'use client';

import { Location } from '@/types/map';
import { getLocationTypeColor, getLocationTypeLabel } from '@/lib/map/mapConstants';
import { X } from 'lucide-react';

interface LocationSidebarProps {
  location: Location | null;
  onClose: () => void;
  onOpenGallery?: (index: number) => void;
}

export default function LocationSidebar({ location, onClose, onOpenGallery }: LocationSidebarProps) {
  if (!location) return null;

  return (
    <div className="w-full lg:w-96 h-full bg-white shadow-2xl overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-stone-200 p-6 z-10">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getLocationTypeColor(location.type)}`}>
                {getLocationTypeLabel(location.type)}
              </span>
              {location.status && (
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  location.status === 'existing' ? 'bg-emerald-100 text-emerald-800' :
                  location.status === 'in-development' ? 'bg-amber-100 text-amber-800' :
                  'bg-stone-100 text-stone-800'
                }`}>
                  {location.status === 'existing' ? 'Existing' :
                   location.status === 'in-development' ? 'In Development' :
                   'Planned'}
                </span>
              )}
            </div>
            <h2 className="text-2xl font-bold text-stone-900">{location.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100 transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-stone-600" />
          </button>
        </div>
        <p className="text-stone-700 leading-relaxed">{location.description}</p>
      </div>

      {/* Content */}
      <div className="p-6 space-y-8">
        {/* Overview */}
        {location.overview && (
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Overview</h3>
            <p className="text-stone-700 leading-relaxed">{location.overview}</p>
          </div>
        )}

        {/* Photos */}
        {location.images && location.images.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Photos</h3>
            <div className="grid grid-cols-2 gap-3">
              {location.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => onOpenGallery?.(index)}
                  className="relative aspect-square rounded-lg overflow-hidden hover:opacity-90 transition-opacity bg-stone-100"
                >
                  <img
                    src={image.url}
                    alt={image.caption || location.title}
                    className="w-full h-full object-cover"
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2">
                      {image.caption}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Activities */}
        {location.activities && location.activities.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Activities</h3>
            <div className="space-y-4">
              {location.activities.map((activity) => (
                <div key={activity.id} className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-900 mb-2">{activity.name}</h4>
                  <p className="text-sm text-stone-700 mb-3">{activity.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {activity.frequency && (
                      <span className="bg-white px-3 py-1 rounded-full text-stone-600">
                        {activity.frequency}
                      </span>
                    )}
                    {activity.capacity && (
                      <span className="bg-white px-3 py-1 rounded-full text-stone-600">
                        {activity.capacity}
                      </span>
                    )}
                  </div>
                  {activity.link && (
                    <a
                      href={activity.link}
                      className="inline-block mt-3 text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors"
                    >
                      Learn More →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Habitat Information */}
        {location.habitat && (
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Habitat Information</h3>
            <div className="bg-emerald-50 p-4 rounded-lg space-y-3">
              {location.habitat.species && location.habitat.species.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-emerald-900 mb-2">Species</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.habitat.species.map((species, index) => (
                      <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-stone-700">
                        {species}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {location.habitat.status && (
                <div>
                  <h4 className="text-sm font-semibold text-emerald-900 mb-2">Status</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    location.habitat.status === 'threatened' ? 'bg-red-100 text-red-800' :
                    location.habitat.status === 'restored' ? 'bg-green-100 text-green-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {location.habitat.status === 'threatened' ? 'Threatened' :
                     location.habitat.status === 'restored' ? 'Restored' :
                     'In Progress'}
                  </span>
                </div>
              )}
              {location.habitat.notes && (
                <div>
                  <h4 className="text-sm font-semibold text-emerald-900 mb-2">Notes</h4>
                  <p className="text-sm text-stone-700">{location.habitat.notes}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Videos */}
        {location.videos && location.videos.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Videos</h3>
            <div className="space-y-4">
              {location.videos.map((video) => (
                <div key={video.id} className="bg-stone-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-stone-900 mb-2">{video.title}</h4>
                  {video.description && (
                    <p className="text-sm text-stone-700 mb-3">{video.description}</p>
                  )}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-800 transition-colors"
                  >
                    Watch Video →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Future Scope */}
        {location.futureScope && (
          <div>
            <h3 className="text-lg font-semibold text-stone-900 mb-3">Future Scope</h3>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <p className="text-stone-700 leading-relaxed">{location.futureScope}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
