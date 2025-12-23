# Interactive Map Setup Guide

## Overview

The ACT Farm interactive map is based on the proven pattern from the PICC Station Site Plan project. It allows visitors to explore Black Cockatoo Valley through an interactive drone photo with clickable location pins.

## Features

- **Interactive Drone Photo**: Click on pins to view detailed information about locations
- **Multiple Image Layers**: Switch between current, before, site plan, and habitat zones views
- **Responsive Sidebar**: Full details, photos, videos, activities, and habitat information
- **Admin Tool**: Easy pin positioning without editing code
- **Mobile Optimized**: Full-screen sidebar on mobile, slide-in panel on desktop
- **Type-Safe**: Full TypeScript support with proper types

## File Structure

```
app/
├── map/
│   ├── page.tsx              # Main map page
│   └── admin/
│       └── page.tsx          # Admin pin positioning tool

components/map/
├── InteractiveMap.tsx        # Main map component
├── LocationSidebar.tsx       # Location detail sidebar
└── ImageLayerSelector.tsx    # Layer switching UI

lib/map/
├── farmData.ts               # Location data (EDIT THIS)
└── mapConstants.ts           # Coordinate helpers

types/
└── map.ts                    # TypeScript interfaces

public/images/map/
├── drone-current.jpg         # Current drone photo (1920x1440)
├── drone-before.jpg          # Before restoration photo
├── site-plan.jpg             # Site plan overlay
└── habitat-zones.jpg         # Habitat zones overlay
```

## Quick Start

### 1. Access the Map

- **Public Map**: Visit `/map` to see the interactive map
- **Admin Tool**: Visit `/map/admin` to position pins

### 2. Adding New Locations

#### Option A: Using Admin Tool (Recommended)

1. Go to `/map/admin`
2. Click on the drone image where you want a pin
3. Click "Copy Location Code"
4. Open `lib/map/farmData.ts`
5. Paste the code into the `locations` array
6. Fill in the location details

#### Option B: Manual Editing

1. Open `lib/map/farmData.ts`
2. Add a new location object to the `locations` array:

```typescript
{
  id: 'unique-id',
  x: 50.0,  // Percentage from left (0-100)
  y: 45.0,  // Percentage from top (0-100)
  title: 'Location Name',
  type: 'garden', // See location types below
  description: 'Short description',
  overview: 'Longer overview text',
  status: 'existing', // or 'in-development', 'planned'
}
```

### 3. Location Types

Each location has a `type` that determines its pin color:

| Type | Color | Use For |
|------|-------|---------|
| `building` | Stone (gray) | Structures, cabins, facilities |
| `nature` | Emerald (green) | Natural features, viewpoints |
| `garden` | Green | Gardens, growing areas (June's Patch) |
| `infrastructure` | Slate (blue-gray) | Utilities, systems, infrastructure |
| `habitat` | Teal | Conservation zones, threatened habitat |
| `activity` | Amber (orange) | Workshop spaces, gathering areas |

### 4. Location Status

- `existing` - Currently operational
- `in-development` - Under construction or active development
- `planned` - Future plans, not yet started

## Adding Rich Content

### Photos

```typescript
images: [
  {
    url: '/images/map/location-name/photo1.jpg',
    caption: 'Photo caption',
    description: 'Detailed description',
    photographer: 'Photographer name',
    dateTaken: '2025-01-15',
    category: 'general', // or 'before', 'during', 'after'
  },
],
```

### Videos

```typescript
videos: [
  {
    id: 'video-1',
    title: 'Video Title',
    url: 'https://youtube.com/watch?v=...',
    type: 'youtube', // or 'vimeo', 'direct'
    thumbnail: '/images/map/video-thumb.jpg',
    description: 'Video description',
  },
],
```

### Activities

```typescript
activities: [
  {
    id: 'activity-1',
    name: 'Activity Name',
    description: 'What happens here',
    frequency: 'Monthly',
    capacity: 'Max 12 participants',
    link: '/activities', // Optional link to more info
  },
],
```

### Habitat Information

```typescript
habitat: {
  species: ['Glossy Black Cockatoo', 'Native species'],
  status: 'in-progress', // or 'threatened', 'restored'
  notes: 'Additional habitat information',
},
```

### Future Scope

```typescript
futureScope: 'Phase 2 development plans and future possibilities',
```

## Image Layer Setup

The map supports 4 different image layers (all should be 1920×1440px):

1. **drone-current.jpg** - Current state (already added ✓)
2. **drone-before.jpg** - Before restoration state
3. **site-plan.jpg** - Architectural/planning overlay
4. **habitat-zones.jpg** - Habitat zone mapping

### To add additional layers:

1. Prepare images at 1920×1440px resolution
2. Save as JPG or WebP for optimal file size
3. Place in `/public/images/map/`
4. Name them exactly as listed above

**Note**: Currently all layers use the same drone photo as placeholders. Replace them with actual overlays when ready.

## Coordinate System

The map uses a **percentage-based positioning system**:

- `x: 0` = Far left of image
- `x: 100` = Far right of image
- `y: 0` = Top of image
- `y: 100` = Bottom of image

This ensures pins stay in the correct position across all screen sizes and maintains accuracy when switching between image layers.

### Fixed Aspect Ratio

All map images MUST be **1920×1440px (4:3 ratio)** to ensure pin positions are accurate across all layers.

## Sample Location

Here's a complete example with all optional fields:

```typescript
{
  id: 'sample-location',
  x: 45.5,
  y: 60.2,
  title: 'Sample Location',
  type: 'garden',
  description: 'A brief one-sentence description',
  overview: 'A more detailed paragraph explaining what this location is, its purpose, and significance.',
  status: 'existing',

  images: [
    {
      url: '/images/map/sample/photo1.jpg',
      caption: 'Main view of the area',
      category: 'general',
    },
    {
      url: '/images/map/sample/photo2.jpg',
      caption: 'Detail shot',
      category: 'general',
    },
  ],

  videos: [
    {
      id: 'sample-video',
      title: 'Tour of the Area',
      url: 'https://youtube.com/watch?v=...',
      type: 'youtube',
      description: 'A walkthrough video',
    },
  ],

  activities: [
    {
      id: 'workshop-1',
      name: 'Monthly Workshop',
      description: 'Hands-on learning sessions',
      frequency: 'Monthly',
      capacity: 'Max 10 participants',
      link: '/activities',
    },
  ],

  habitat: {
    species: ['Native birds', 'Native plants'],
    status: 'restored',
    notes: 'Ongoing monitoring and maintenance',
  },

  futureScope: 'Plans to expand with additional facilities',
},
```

## Tips & Best Practices

### Pin Positioning

- Use the admin tool (`/map/admin`) for accurate placement
- Test on mobile to ensure pins aren't too close together
- Avoid placing pins on the very edge of the image

### Content

- Keep descriptions concise (1-2 sentences)
- Use overview for longer explanations
- Add high-quality photos (optimize for web before uploading)
- Include activities to link back to other pages

### Performance

- Optimize images before adding them (use WebP if possible)
- Keep individual photos under 200KB for fast loading
- Limit videos to YouTube/Vimeo embeds rather than hosting directly

### Organization

- Use consistent naming for location IDs (lowercase-with-dashes)
- Group related locations by type in the data file
- Keep photo files organized in folders: `/public/images/map/[location-id]/`

## Integration with Main Site

The map is linked from:

- **Navigation** - "Map" link in header
- **Homepage** - Can add a "Explore Our Land" CTA
- **About Page** - Natural place to link to the map
- **Activities** - Link specific locations from activity descriptions

## Troubleshooting

### Pins in wrong position

- Check that all map images are exactly 1920×1440px
- Verify x/y values are between 0-100
- Use the admin tool to get accurate coordinates

### Image not loading

- Check file path is correct: `/images/map/filename.jpg`
- Verify file exists in `/public/images/map/`
- Check filename case (case-sensitive on Linux/production)

### Sidebar not showing

- Verify the location object has required fields: `id`, `x`, `y`, `title`, `type`, `description`
- Check browser console for TypeScript errors

## Future Enhancements

Possible additions based on PICC Station features:

- Full-screen photo gallery (currently photos open inline)
- Before/after image comparisons
- Progress tracking for locations (completion percentage)
- Notes system for conservation updates
- Search/filter locations by type
- Keyboard shortcuts for navigation
- Print-friendly map view
- Download location data as PDF

## Questions?

The map system is based on the proven PICC Station implementation. For reference or advanced features, see:
`/Users/benknight/Code/PICC Station Site Plan/picc-station-map/`

---

**Built with** Next.js 16, TypeScript, Tailwind CSS, and Lucide Icons
