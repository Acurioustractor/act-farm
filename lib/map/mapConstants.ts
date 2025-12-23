// Map constants for drone image dimensions and coordinate conversion

export const MAP_WIDTH = 1920;
export const MAP_HEIGHT = 1440;

/**
 * Convert pixel coordinates to percentage (for positioning pins)
 * @param pixelX - X coordinate in pixels
 * @param pixelY - Y coordinate in pixels
 * @returns Object with x and y as percentages
 */
export function pixelsToPercentage(pixelX: number, pixelY: number) {
  return {
    x: (pixelX / MAP_WIDTH) * 100,
    y: (pixelY / MAP_HEIGHT) * 100,
  };
}

/**
 * Convert percentage to pixel coordinates (for admin tools)
 * @param percentX - X coordinate as percentage
 * @param percentY - Y coordinate as percentage
 * @returns Object with x and y in pixels
 */
export function percentageToPixels(percentX: number, percentY: number) {
  return {
    x: (percentX / 100) * MAP_WIDTH,
    y: (percentY / 100) * MAP_HEIGHT,
  };
}

/**
 * Get the color for a location type
 */
export function getLocationTypeColor(type: string): string {
  const colors: Record<string, string> = {
    building: 'bg-stone-600',
    nature: 'bg-emerald-600',
    garden: 'bg-green-600',
    infrastructure: 'bg-slate-600',
    habitat: 'bg-teal-600',
    activity: 'bg-amber-600',
  };
  return colors[type] || 'bg-stone-600';
}

/**
 * Get a friendly label for location type
 */
export function getLocationTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    building: 'Building',
    nature: 'Nature',
    garden: 'Garden',
    infrastructure: 'Infrastructure',
    habitat: 'Habitat',
    activity: 'Activity',
  };
  return labels[type] || type;
}
