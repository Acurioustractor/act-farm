import { MapData } from '@/types/map';

/**
 * Black Cockatoo Valley Interactive Map Data
 *
 * To add new locations:
 * 1. Use the admin pin tool at /map/admin to click on the drone image
 * 2. Copy the generated coordinates
 * 3. Add a new location object to the locations array below
 *
 * Note: Replace these sample coordinates with actual positions from your drone photo
 */

export const farmData: MapData = {
  metadata: {
    title: 'Black Cockatoo Valley',
    description: '150 acres of threatened species habitat on Jinibara lands',
    totalAcres: 150,
    lastUpdated: '2025-12-23',
  },

  locations: [
    {
      id: 'junes-patch',
      x: 35.5,
      y: 42.0,
      title: "June's Patch",
      type: 'garden',
      description: 'Healthcare worker wellbeing garden - prescription to nature project',
      overview: 'A food garden and experience subscription for healthcare workers, providing fresh produce and restorative land experiences. Partnership with Wishlist community and University of the Sunshine Coast.',
      status: 'in-development',
      activities: [
        {
          id: 'harvest-gatherings',
          name: 'Harvest Gatherings',
          description: 'Bi-monthly wellness gatherings featuring garden tours, fresh produce harvesting, and shared meals',
          frequency: 'Bi-monthly',
          capacity: 'Healthcare workers and partners',
          link: '/junes-patch',
        },
        {
          id: 'garden-workshops',
          name: 'Regenerative Garden Workshops',
          description: 'Monthly hands-on sessions focused on growing food that nourishes people and strengthens ecosystem health',
          frequency: 'Monthly',
          capacity: 'Max 12 participants',
        },
      ],
      images: [
        {
          url: '/images/map/junes-patch-garden.jpg',
          caption: "June's Patch garden beds",
          category: 'general',
        },
      ],
      futureScope: 'Expand to include greenhouse, expanded food forest, and community kitchen facilities',
    },

    {
      id: 'main-residency',
      x: 50.0,
      y: 35.0,
      title: 'R&D Residency Accommodation',
      type: 'building',
      description: 'Low-impact eco-accommodation for conservation technology and regenerative practice residencies',
      overview: 'Private, serene spaces designed for focused prototyping work. Limited availability to protect threatened species habitat. Accommodates 2-3 concurrent residencies.',
      status: 'existing',
      activities: [
        {
          id: 'tech-residencies',
          name: 'Conservation Technology R&D',
          description: 'Prototyping habitat monitoring tools, ethical AI platforms, and biodiversity observation systems',
          frequency: '1-2 week stays',
          link: '/residencies',
        },
        {
          id: 'practice-residencies',
          name: 'Regenerative Practice Research',
          description: 'Deep exploration of regenerative agriculture, native species restoration, and ecosystem recovery',
          frequency: '1-4 week stays',
          link: '/residencies',
        },
      ],
      images: [
        {
          url: '/images/map/residency-cabin.jpg',
          caption: 'Eco-residency accommodation with valley views',
          category: 'general',
        },
      ],
      futureScope: 'Additional eco-cabins and yurt accommodations planned',
    },

    {
      id: 'threatened-habitat-zone-1',
      x: 25.0,
      y: 60.0,
      title: 'Threatened Species Habitat - Eastern Zone',
      type: 'habitat',
      description: 'Primary conservation area with active restoration and species monitoring',
      overview: 'Native forest corridor connecting to Elaman Creek. Habitat for glossy black cockatoos and other threatened species. Ongoing weed management and native species regeneration.',
      status: 'existing',
      habitat: {
        species: ['Glossy Black Cockatoo', 'Native forest species', 'Creek-dependent species'],
        status: 'in-progress',
        notes: 'Active restoration with quarterly monitoring. Limited access to protect breeding areas.',
      },
      images: [
        {
          url: '/images/map/habitat-zone-east.jpg',
          caption: 'Native forest restoration area',
          category: 'general',
        },
      ],
      activities: [
        {
          id: 'habitat-monitoring',
          name: 'Species Observation Workshops',
          description: 'Small-group field sessions learning monitoring techniques',
          frequency: 'Quarterly',
          capacity: 'Max 8 participants',
          link: '/activities',
        },
      ],
    },

    {
      id: 'mary-river-viewpoint',
      x: 15.0,
      y: 25.0,
      title: 'Mary River Viewpoint',
      type: 'nature',
      description: 'Scenic overlook with views to the top of the Mary River',
      overview: 'Natural observation point offering panoramic views across the valley. Used for guided nature walks and quiet contemplation. Minimal infrastructure to preserve natural character.',
      status: 'existing',
      images: [
        {
          url: '/images/map/mary-river-view.jpg',
          caption: 'Views to Mary River from the valley',
          category: 'general',
        },
      ],
      activities: [
        {
          id: 'nature-walks',
          name: 'Seasonal Nature Walks',
          description: 'Guided walks observing seasonal changes, wildlife, and restoration progress',
          frequency: 'Quarterly',
          capacity: 'Max 15 participants',
          link: '/activities',
        },
      ],
    },

    {
      id: 'elaman-creek',
      x: 70.0,
      y: 75.0,
      title: 'Elaman Creek Corridor',
      type: 'nature',
      description: 'Creek system and riparian restoration zone',
      overview: 'Natural watercourse flowing through the property. Critical habitat corridor connecting to broader landscape. Riparian zone restoration in progress with native plantings.',
      status: 'existing',
      habitat: {
        species: ['Water-dependent species', 'Riparian zone flora', 'Native frogs'],
        status: 'restored',
        notes: 'Ongoing riparian planting and weed control. Water quality monitoring quarterly.',
      },
      images: [
        {
          url: '/images/map/elaman-creek.jpg',
          caption: 'Elaman Creek riparian zone',
          category: 'general',
        },
      ],
    },

    {
      id: 'workshop-area',
      x: 45.0,
      y: 50.0,
      title: 'Workshop & Gathering Space',
      type: 'activity',
      description: 'Outdoor area for small-group workshops and conservation education',
      overview: 'Flexible space for workshops, restoration working bees, and quiet gatherings. Shaded area with basic facilities. Designed for groups of 8-20 people.',
      status: 'existing',
      activities: [
        {
          id: 'weed-workshops',
          name: 'Weed Management & Regeneration',
          description: 'Practical workshops on identifying invasive species and supporting native recovery',
          frequency: 'Monthly',
          capacity: 'Max 12 participants',
          link: '/activities',
        },
        {
          id: 'working-bees',
          name: 'Restoration Working Bees',
          description: 'Community-led habitat restoration sessions - planting, weeding, mulching',
          frequency: 'Monthly',
          capacity: 'Max 20 participants',
          link: '/activities',
        },
      ],
      images: [
        {
          url: '/images/map/workshop-space.jpg',
          caption: 'Outdoor workshop and gathering area',
          category: 'general',
        },
      ],
    },

    {
      id: 'future-glamping',
      x: 60.0,
      y: 40.0,
      title: 'Future Eco-Glamping Site',
      type: 'building',
      description: 'Planned low-impact glamping accommodation',
      overview: 'Future site for thoughtfully designed canvas tents with minimal environmental footprint. Solar power, composting systems, and integration with restored habitat.',
      status: 'planned',
      futureScope: 'Phase 2 development - eco-glamping for 2-4 tents. Pending habitat impact assessment and community co-design.',
      images: [
        {
          url: '/images/map/future-glamping-concept.jpg',
          caption: 'Conceptual eco-glamping design',
          category: 'general',
        },
      ],
    },

    {
      id: 'native-seed-bank',
      x: 55.0,
      y: 65.0,
      title: 'Native Seed Collection Area',
      type: 'infrastructure',
      description: 'Seed collection and native plant propagation',
      overview: 'Area dedicated to collecting native seeds and propagating plants for restoration work. Small nursery setup supports ongoing habitat regeneration across the property.',
      status: 'existing',
      activities: [
        {
          id: 'propagation-workshops',
          name: 'Native Plant Propagation',
          description: 'Learn techniques for collecting seeds and growing native species',
          frequency: 'Seasonal',
          capacity: 'Max 10 participants',
        },
      ],
    },
  ],
};
