import InteractiveMap from '@/components/map/InteractiveMap';

export const metadata = {
  title: 'Interactive Map | A Curious Tractor Farm',
  description: 'Explore Black Cockatoo Valley through an interactive drone photo map. Discover conservation areas, activities, and future developments.',
};

export default function MapPage() {
  return <InteractiveMap />;
}
