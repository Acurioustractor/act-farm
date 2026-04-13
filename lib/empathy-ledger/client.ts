/**
 * Empathy Ledger Content Hub client.
 *
 * Pulls stories, articles, galleries, and media tagged to the ACT-BV
 * (Black Cockatoo Valley) project from the Empathy Ledger platform.
 *
 * API docs: https://empathy-ledger-v2.vercel.app/api/v1/content-hub/*
 * Anonymous access works for public (is_public=true, privacy_level=public) content.
 */

const EL_API_URL =
  process.env.NEXT_PUBLIC_EL_API_URL ?? 'https://empathy-ledger-v2.vercel.app';

export const ACT_PROJECT_CODE =
  process.env.NEXT_PUBLIC_EL_ACT_PROJECT_CODE ?? 'ACT-BV';

// ---------------------------------------------------------------- types

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  hasMore: boolean;
};

export type StoryTheme = { name: string };

export type StorySummary = {
  id: string;
  title: string;
  summary: string | null;
  authorName: string | null;
  authorId: string | null;
  publishedAt: string | null;
  themes: StoryTheme[];
  visibility: 'public' | 'community' | 'private';
  isPublic: boolean;
};

export type Story = StorySummary & {
  content: string | null;
  authorBio: string | null;
  featuredMediaUrl: string | null;
  syndicationEnabled: boolean;
};

export type Storyteller = {
  id: string;
  displayName: string | null;
  avatarUrl: string | null;
  bio: string | null;
};

export type MediaPreview = {
  url: string;
  title: string | null;
  alt_text: string | null;
};

export type Cta = { label: string; href: string };

export type ArticleSummary = {
  id: string;
  title: string;
  slug: string;
  subtitle: string | null;
  excerpt: string | null;
  authorName: string | null;
  articleType: string | null;
  primaryProject: string | null;
  publishedAt: string | null;
  tags: string[];
  themes: string[];
  visibility: 'public' | 'community' | 'private';
  syndicationDestinations: string[];
  featuredImageUrl: string | null;
  featuredImageAlt: string | null;
  storyteller: Storyteller | null;
  media: {
    photoCount: number;
    videoCount: number;
    photoPreviews: MediaPreview[];
    videoPreviews: MediaPreview[];
  };
  ctas: Cta[];
};

export type Article = ArticleSummary & {
  content: string | null;
  authorBio: string | null;
  relatedProjects: string[];
  metaTitle: string | null;
  metaDescription: string | null;
};

export type MediaAsset = {
  id: string;
  url: string;
  thumbnailUrl: string | null;
  title: string | null;
  description: string | null;
  altText: string | null;
  mediaType: 'image' | 'video' | 'audio' | string;
  width: number | null;
  height: number | null;
  duration: number | null;
  organizationId: string | null;
  projectCode: string | null;
  projectId: string | null;
  sourceType: string | null;
  elderApproved: boolean;
  consentObtained: boolean;
  culturalTags: string[];
  attributionText: string | null;
  createdAt: string | null;
  isHero: boolean;
};

export type Gallery = {
  id: string;
  title: string;
  description: string | null;
  organizationId: string | null;
  createdAt: string | null;
  photoCount?: number;
  photos?: Array<{
    id: string;
    url: string;
    thumbnailUrl: string | null;
    filename: string | null;
    fileType: string | null;
    fileSize: number | null;
    altText: string | null;
    culturalSensitivity: string | null;
    sortOrder: number;
    isCover: boolean;
    caption: string | null;
  }>;
};

// ---------------------------------------------------------------- fetch

type QueryValue = string | number | boolean | undefined | null;

function buildUrl(path: string, params: Record<string, QueryValue>): string {
  const url = new URL(`${EL_API_URL}${path}`);
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '') continue;
    url.searchParams.set(key, String(value));
  }
  return url.toString();
}

/**
 * ISR-friendly fetch. Revalidates every 5 minutes on the server.
 * Failures return null so pages can render graceful empty states
 * rather than 500ing — EL is an upstream dependency we don't control.
 */
async function elFetch<T>(
  path: string,
  params: Record<string, QueryValue> = {},
  revalidate = 300
): Promise<T | null> {
  try {
    const res = await fetch(buildUrl(path, params), {
      next: { revalidate },
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      console.warn(`[EL] ${path} → ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[EL] ${path} failed`, err);
    return null;
  }
}

// ---------------------------------------------------------------- stories

export async function getStories(opts: {
  project?: string;
  theme?: string;
  limit?: number;
  page?: number;
} = {}): Promise<{ stories: StorySummary[]; pagination: Pagination } | null> {
  const { project = ACT_PROJECT_CODE, theme, limit = 12, page = 1 } = opts;
  return elFetch('/api/v1/content-hub/stories', {
    project,
    theme,
    limit,
    page,
  });
}

export async function getStory(id: string): Promise<Story | null> {
  return elFetch(`/api/v1/content-hub/stories/${encodeURIComponent(id)}`);
}

// ---------------------------------------------------------------- articles

export async function getArticles(opts: {
  project?: string;
  type?: string;
  tag?: string;
  theme?: string;
  limit?: number;
  page?: number;
} = {}): Promise<{ articles: ArticleSummary[]; pagination: Pagination } | null> {
  const {
    project = ACT_PROJECT_CODE,
    type,
    tag,
    theme,
    limit = 12,
    page = 1,
  } = opts;
  return elFetch('/api/v1/content-hub/articles', {
    project,
    type,
    tag,
    theme,
    limit,
    page,
  });
}

export async function getArticle(slug: string): Promise<Article | null> {
  return elFetch(`/api/v1/content-hub/articles/${encodeURIComponent(slug)}`);
}

// ---------------------------------------------------------------- galleries

export async function getGalleries(opts: {
  organization?: string;
  limit?: number;
  page?: number;
  includePhotos?: boolean;
} = {}): Promise<{ galleries: Gallery[]; pagination: Pagination } | null> {
  const { organization, limit = 12, page = 1, includePhotos = true } = opts;
  return elFetch('/api/v1/content-hub/galleries', {
    organization,
    limit,
    page,
    include: includePhotos ? undefined : 'metadata_only',
  });
}

// ---------------------------------------------------------------- media

export async function getMedia(opts: {
  projectCode?: string;
  type?: 'image' | 'video' | 'audio';
  theme?: string;
  elderApproved?: boolean;
  limit?: number;
  page?: number;
} = {}): Promise<{
  media: MediaAsset[];
  pagination: Pagination;
} | null> {
  const {
    projectCode = ACT_PROJECT_CODE,
    type,
    theme,
    elderApproved,
    limit = 20,
    page = 1,
  } = opts;
  return elFetch('/api/v1/content-hub/media', {
    project_code: projectCode,
    type,
    theme,
    elder_approved: elderApproved,
    limit,
    page,
  });
}

// ---------------------------------------------------------------- helpers

/**
 * Respect cultural sensitivity: only show media where consent is either
 * obtained OR the content is standard sensitivity (not sacred/restricted).
 * Elder-approved content is always safe.
 */
export function filterCulturallySafe<T extends { consentObtained?: boolean; elderApproved?: boolean; culturalTags?: string[] }>(
  items: T[]
): T[] {
  return items.filter((item) => {
    if (item.elderApproved) return true;
    const tags = item.culturalTags ?? [];
    const restricted = tags.some((t) =>
      ['sacred', 'restricted', 'mens-business', 'womens-business'].includes(t.toLowerCase())
    );
    return !restricted;
  });
}

export function formatDate(iso: string | null): string {
  if (!iso) return '';
  try {
    return new Date(iso).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}
