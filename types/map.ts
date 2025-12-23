// Interactive Map Types for ACT Farm

export type LocationType = 'building' | 'nature' | 'garden' | 'infrastructure' | 'habitat' | 'activity';

export type ImageLayer = 'drone-current' | 'drone-before' | 'site-plan' | 'habitat-zones';

export interface ImageMetadata {
  url: string;
  caption?: string;
  description?: string;
  photographer?: string;
  dateTaken?: string;
  category?: 'before' | 'during' | 'after' | 'general';
}

export interface VideoEmbed {
  id: string;
  title: string;
  url: string;
  type: 'youtube' | 'vimeo' | 'direct';
  thumbnail?: string;
  description?: string;
}

export interface ActivityInfo {
  id: string;
  name: string;
  description: string;
  frequency?: string;
  capacity?: string;
  link?: string;
}

export interface HabitatInfo {
  species?: string[];
  status?: 'threatened' | 'restored' | 'in-progress';
  notes?: string;
}

export interface Location {
  id: string;
  x: number; // Percentage position (0-100)
  y: number; // Percentage position (0-100)
  title: string;
  type: LocationType;
  description: string;
  overview?: string;

  // Media
  images?: ImageMetadata[];
  videos?: VideoEmbed[];

  // Specific to location types
  activities?: ActivityInfo[]; // For activity locations
  habitat?: HabitatInfo; // For nature/habitat locations

  // Status
  status?: 'existing' | 'planned' | 'in-development';
  futureScope?: string;
}

export interface MapData {
  locations: Location[];
  metadata: {
    title: string;
    description: string;
    totalAcres: number;
    lastUpdated: string;
  };
}
