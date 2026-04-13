/**
 * Accommodation data for /stay index and per-accommodation detail pages.
 * Pricing is editable here; Nic reviews every booking personally before
 * confirming, so these are indicative rates not instant-buy.
 */

export type Accommodation = {
  id: 'pink-cabin' | 'train-carriage';
  name: string;
  subtitle: string;
  guests: string;
  maxGuests: number;
  nightlyRateAud: number;
  cleaningFeeAud: number;
  minNights: number;
  features: string[];
  description: string;
  longDescription: string;
  highlight: string;
  images: string[];
};

export const accommodations: Accommodation[] = [
  {
    id: 'pink-cabin',
    name: 'The Pink Cabin',
    subtitle: 'Tuscan Cabin',
    guests: '2 guests',
    maxGuests: 2,
    nightlyRateAud: 210,
    cleaningFeeAud: 45,
    minNights: 2,
    features: [
      'Queen bed',
      'Kitchenette',
      'Outdoor bathtub',
      'Fire pit',
      'Valley views',
      'Pet-friendly',
    ],
    description:
      'A cosy Tuscan-inspired cabin with panoramic valley views and cattle grazing out front. Wake with the sunrise from bed, watch the sunset from the outdoor bath with a glass of wine.',
    longDescription:
      'The Pink Cabin sits on a ridge with uninterrupted views over grazing paddocks and out toward the Mary River headwaters. The kitchenette has a cooktop, fridge, and everything you need to cook a proper meal. Outside: a private fire pit for evenings under the stars, and an outdoor bath placed precisely to catch the sunset. Guests consistently call this "a peaceful oasis" — most book a second night the moment they arrive.',
    highlight:
      'Most loved — guests call it "a peaceful oasis to rejuvenate"',
    images: [
      '/images/stay/pink-cabin-1.jpg',
      '/images/stay/pink-cabin-2.jpg',
      '/images/stay/pink-cabin-3.jpg',
      '/images/stay/pink-cabin-4.jpg',
      '/images/stay/pink-cabin-5.jpg',
    ],
  },
  {
    id: 'train-carriage',
    name: 'Train Carriage Lookout',
    subtitle: 'Converted Railway Carriage',
    guests: '2 guests',
    maxGuests: 2,
    nightlyRateAud: 190,
    cleaningFeeAud: 45,
    minNights: 2,
    features: [
      'Double bed',
      'Outdoor shower',
      'Bathtub',
      'Valley lookout',
      'Composting toilet',
      'Pet-friendly',
    ],
    description:
      'A converted railway carriage perched on the ridge with views across the valley. Simple, warm, and unlike anything else.',
    longDescription:
      'A genuine railway carriage, lifted onto the ridge and converted with care. Double bed, outdoor shower, bathtub outside with the kind of view that makes people forget their phones. The communal pizza oven is a short walk away. There is no phone reception up here — bring something to read, or don\'t. That is the whole point.',
    highlight:
      'Named "glamping with a twist" — guests love the views and the quiet',
    images: [
      '/images/stay/train-carriage-1.jpg',
      '/images/stay/train-carriage-2.jpg',
      '/images/stay/train-carriage-3.jpg',
      '/images/stay/train-carriage-4.jpg',
      '/images/stay/train-carriage-5.jpg',
    ],
  },
];

export function findAccommodation(id: string): Accommodation | undefined {
  return accommodations.find((a) => a.id === id);
}

/** Calculate nights between two ISO dates (YYYY-MM-DD). Returns 0 if invalid. */
export function nightsBetween(checkIn: string, checkOut: string): number {
  const a = Date.parse(checkIn);
  const b = Date.parse(checkOut);
  if (!Number.isFinite(a) || !Number.isFinite(b) || b <= a) return 0;
  return Math.round((b - a) / (1000 * 60 * 60 * 24));
}

export function calculateTotal(
  acc: Accommodation,
  nights: number
): { subtotal: number; cleaning: number; total: number } {
  const subtotal = acc.nightlyRateAud * Math.max(0, nights);
  const cleaning = nights > 0 ? acc.cleaningFeeAud : 0;
  return { subtotal, cleaning, total: subtotal + cleaning };
}
