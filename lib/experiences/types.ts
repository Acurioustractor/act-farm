/**
 * Experiences + Case Studies — shared types.
 *
 * The wiki (`wiki/projects/act-farm/experiences/*.md`) is the source of truth.
 * Entries in this module are typed mirrors that cite `wikiPath` and feed the
 * `/experiences` and `/case-studies` routes plus the unified inquiry flow.
 */

export type ExperienceCategory =
  | 'stays'
  | 'residencies'
  | 'retreats'
  | 'facilitated-sessions'
  | 'health'
  | 'makers'
  | 'harvest-pairings';

export type ExperienceStatus = 'active' | 'in-design' | 'co-design' | 'paused';

export type Theme =
  | 'youth-justice'
  | 'systems'
  | 'ai'
  | 'data'
  | 'wellbeing'
  | 'regenerative-practice'
  | 'storytelling'
  | 'community-capital'
  | 'country'
  | 'art'
  | 'health'
  | 'making';

/**
 * Declares which optional fields the inquiry form should render for a given
 * experience. Name, email, and a free-text "tell us more" message are always
 * present. The form reads this shape off the catalog entry at render time.
 */
export type InquiryShape = {
  datesRange?: boolean; // preferred check-in / check-out
  preferredMonths?: boolean; // loose window instead of fixed dates
  groupSize?: boolean;
  organisation?: boolean;
  topic?: boolean; // for facilitated sessions / innovation tracks
  residencyType?: boolean; // for artist residency variants
  duration?: boolean; // for residencies that negotiate length
};

export type Experience = {
  slug: string;
  category: ExperienceCategory;
  title: string;
  /** The one-sentence promise from the wiki's blockquote. */
  summary: string;
  /** Path into the wiki in act-global-infrastructure — source of truth. */
  wikiPath: string;
  status: ExperienceStatus;
  themes: Theme[];
  inquiryShape: InquiryShape;
  /** Optional indicative pricing copy. Inquiries are not instant bookings. */
  pricing?: string;
  /** Slugs of related case studies in `lib/case-studies/catalog.ts`. */
  caseStudySlugs?: string[];
  /** Direct-booking override — redirect /experiences/<slug> to /stay etc. */
  directBookingHref?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  wikiPath: string;
  /** Human-facing date label; not a date primitive because some cases span years. */
  period: string;
  /** Experience slugs this case study demonstrates. */
  experienceSlugs: string[];
  themes: Theme[];
  status: 'published' | 'draft' | 'evergreen';
};

// ------------------------------------------------------------ inquiry payload

export type InquiryPayload = {
  experienceSlug: string;
  experienceTitle: string;
  category: ExperienceCategory;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  // Optional fields switched on by InquiryShape
  checkIn?: string;
  checkOut?: string;
  preferredMonths?: string;
  groupSize?: number;
  organisation?: string;
  topic?: string;
  residencyType?: string;
  duration?: string;
};
