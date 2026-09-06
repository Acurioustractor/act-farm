import type {
  Experience,
  ExperienceCategory,
} from './types';

/**
 * The ACT Farm experiences catalog — typed mirror of the wiki source of truth
 * at `act-global-infrastructure/wiki/projects/act-farm/experiences/`.
 *
 * Each entry cites `wikiPath` explicitly. Deep content lives in the wiki;
 * the site renders summary + inquiry form + cross-links. When an offer
 * changes, the wiki changes first — this file follows.
 *
 * Deferred this phase: `walks-on-country` (in co-design with Jinibara
 * custodians; no wiki page yet, no catalog entry, no site route).
 */
export const experiences: Experience[] = [
  // -------------------------------------------------------------------- stays
  {
    slug: 'stays',
    category: 'stays',
    title: 'Stays at Black Cockatoo Valley',
    summary:
      'Two cabins, 138 acres of Jinibara Country, and room to be quiet. The Pink Cabin and the Train Carriage are bookable directly. This is the self-guided end of the farm — you\u2019re on the land, we\u2019re light-touch hosts.',
    wikiPath: 'wiki/projects/act-farm/experiences/stays.md',
    status: 'active',
    themes: ['country', 'wellbeing', 'regenerative-practice'],
    inquiryShape: {}, // Stays go through /stay, not generic inquiry
    pricing: 'Pink Cabin from $210/night · Train Carriage from $190/night · $45 cleaning · 2-night minimum',
    directBookingHref: '/stay',
  },

  // --------------------------------------------------------------- residencies
  {
    slug: 'artist-residency',
    category: 'residencies',
    title: 'Artist Residency at BCV',
    summary:
      'We place artists on Country at Black Cockatoo Valley to make work that couldn\u2019t be made anywhere else. The land is the commission. We are the host, not the curator-in-chief.',
    wikiPath: 'wiki/projects/act-farm/experiences/artist-residency.md',
    status: 'active',
    themes: ['art', 'country', 'storytelling', 'regenerative-practice'],
    inquiryShape: {
      preferredMonths: true,
      duration: true,
      residencyType: true,
    },
    pricing: 'Tiered: funded, supported, and self-funded placements. Negotiated per artist.',
    caseStudySlugs: ['radical-scoops-at-the-harvest'],
    inviteFirst: {
      label: 'Be our first placed artist at BCV',
      body: 'No artist has been placed at Black Cockatoo Valley yet. We\u2019re looking for our inaugural residency \u2014 someone whose practice is in honest dialogue with Country, ecology, or regenerative work. Tell us about your practice and what you\u2019d want to make here. The first residency becomes the case study.',
    },
  },
  {
    slug: 'industry-residency-at-the-harvest',
    category: 'residencies',
    title: 'Industry Residency at The Harvest',
    summary:
      'We host industry residencies at The Harvest \u2014 extended placements where artists, designers and ACT work alongside a regional industry and its people. Not an artist-in-residence at a company. A community treating its own industry, land and elders as the material, with us holding the studio.',
    wikiPath: 'wiki/projects/act-farm/experiences/industry-residency-at-the-harvest.md',
    status: 'active',
    themes: ['art', 'regenerative-practice', 'storytelling', 'making', 'country'],
    inquiryShape: {
      preferredMonths: true,
      duration: true,
      organisation: true,
      topic: true,
    },
    pricing: 'Grant-funded and co-designed per residency (RAA, ANAT, state arts bodies, philanthropic partners). No rack rate \u2014 we help shape the funding case.',
    caseStudySlugs: ['radical-scoops-at-the-harvest'],
  },
  {
    slug: 'empathy-ledger-storytelling-residency',
    category: 'residencies',
    title: 'Empathy Ledger Storytelling Residency',
    summary:
      'We place storytellers on Country to practice the Empathy Ledger method at field scale \u2014 listening, consent, capture, and return. The residency produces stories that live in the Ledger, not content that feeds a marketing calendar.',
    wikiPath: 'wiki/projects/act-farm/experiences/empathy-ledger-storytelling-residency.md',
    status: 'active',
    themes: ['storytelling', 'country', 'regenerative-practice'],
    inquiryShape: {
      preferredMonths: true,
      duration: true,
      organisation: true,
    },
    inviteFirst: {
      label: 'Be our first storytelling resident',
      body: 'The Empathy Ledger Storytelling Residency is live and open. We\u2019re looking for the first storyteller to come through \u2014 someone ready to practice listening, consent, capture, and return at field scale on Country.',
    },
  },

  // ------------------------------------------------------------------ retreats
  {
    slug: 'the-space-at-bcv',
    category: 'retreats',
    title: 'The Space at BCV',
    summary:
      'We hold a convening space at Black Cockatoo Valley \u2014 the kind of room where serious conversations about community, capital, and country can actually happen. Community Capital has already taken a year here. Other groups can too.',
    wikiPath: 'wiki/projects/act-farm/experiences/the-space-at-bcv.md',
    status: 'active',
    themes: ['community-capital', 'systems', 'country'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
      organisation: true,
      topic: true,
    },
    caseStudySlugs: ['community-capital-at-bcv', 'the-caravan-at-bcv'],
  },
  {
    slug: 'corporate-innovation-retreats',
    category: 'retreats',
    title: 'Corporate Innovation Retreats at BCV',
    summary:
      'We host leadership teams at Black Cockatoo Valley for multi-day innovation retreats that don\u2019t look anything like a hotel offsite. Country is the facilitator. We hold the room.',
    wikiPath: 'wiki/projects/act-farm/experiences/corporate-innovation-retreats.md',
    status: 'active',
    themes: ['systems', 'wellbeing', 'country'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
      organisation: true,
      topic: true,
    },
  },

  // -------------------------------------------------------- facilitated sessions
  {
    slug: 'innovation-sessions',
    category: 'facilitated-sessions',
    title: 'Innovation Sessions',
    summary:
      'We run focused one- to two-day innovation sessions across four practice areas \u2014 youth justice, AI and systems, data and evidence, storytelling. Small rooms, real problems, no theatre.',
    wikiPath: 'wiki/projects/act-farm/experiences/innovation-sessions.md',
    status: 'active',
    themes: ['youth-justice', 'systems', 'ai', 'data', 'storytelling'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
      organisation: true,
      topic: true,
    },
  },
  {
    slug: 'facilitation',
    category: 'facilitated-sessions',
    title: 'Facilitation for your team',
    summary:
      'We facilitate. That\u2019s the offer. Your meeting, your offsite, your strategy day \u2014 on our ground or yours, with ACT holding the room.',
    wikiPath: 'wiki/projects/act-farm/experiences/facilitation.md',
    status: 'active',
    themes: ['systems'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
      organisation: true,
      topic: true,
    },
  },
  {
    slug: 'workshops-at-bcv',
    category: 'facilitated-sessions',
    title: 'Workshops at BCV',
    summary:
      'A rolling program of short-form workshops on Country \u2014 land practice, making, writing, systems. Hands in the soil by morning, a real conversation by afternoon. Come for one, come for a series.',
    wikiPath: 'wiki/projects/act-farm/experiences/workshops-at-bcv.md',
    status: 'active',
    themes: ['making', 'regenerative-practice', 'country'],
    inquiryShape: {
      preferredMonths: true,
      topic: true,
    },
  },

  // -------------------------------------------------------------------- health
  {
    slug: 'junes-patch-healthcare-retreat',
    category: 'health',
    title: 'June\u2019s Patch Healthcare Retreat',
    summary:
      'We run healthcare-worker retreats at Black Cockatoo Valley as an extension of the June\u2019s Patch practice \u2014 nature prescription at residential scale, grounded in soil, quiet, and shared meals. No disclosure required. The work is the rest.',
    wikiPath: 'wiki/projects/act-farm/experiences/junes-patch-healthcare-retreat.md',
    status: 'active',
    themes: ['health', 'wellbeing', 'country'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
      organisation: true,
    },
    caseStudySlugs: ['junes-patch-year-one-2025'],
  },
  {
    slug: 'dad-lab-at-bcv',
    category: 'health',
    title: 'DAD.LAB at BCV',
    summary:
      'We host DAD.LAB intensives at Black Cockatoo Valley \u2014 residential time for fathers and men navigating health, identity, and connection, grounded in peer support and done in the bush. Not clinical. Not confessional. Just honest.',
    wikiPath: 'wiki/projects/act-farm/experiences/dad-lab-at-bcv.md',
    status: 'active',
    themes: ['health', 'wellbeing'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
    },
    caseStudySlugs: ['dad-lab-bcv-2025'],
  },

  // -------------------------------------------------------------------- makers
  {
    slug: 'makers-weekend',
    category: 'makers',
    title: 'Goods on Country Makers\u2019 Weekend',
    summary:
      'A weekend of making on Country \u2014 material practice, shared meals, and honest conversation about how we build durable things for communities that need them. Run with Goods on Country.',
    wikiPath: 'wiki/projects/act-farm/experiences/makers-weekend.md',
    status: 'active',
    themes: ['making', 'country', 'regenerative-practice'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
    },
  },

  // ------------------------------------------------------- harvest pairings
  {
    slug: 'harvest-pairings',
    category: 'harvest-pairings',
    title: 'Harvest Pairings',
    summary:
      'The Harvest in Witta and BCV up the hill are a pair, not two venues. Monthly dinners, paired workshops, shared CSA, and seasonal programs run across both sites.',
    wikiPath: 'wiki/projects/act-farm/experiences/harvest-pairings.md',
    status: 'active',
    themes: ['making', 'country', 'regenerative-practice'],
    inquiryShape: {
      preferredMonths: true,
      groupSize: true,
      topic: true,
    },
    caseStudySlugs: ['radical-scoops-at-the-harvest'],
  },
];

export const categoryLabels: Record<ExperienceCategory, string> = {
  stays: 'Stays',
  residencies: 'Residencies',
  retreats: 'Retreats',
  'facilitated-sessions': 'Facilitated sessions',
  health: 'Health',
  makers: 'Makers',
  'harvest-pairings': 'Harvest pairings',
};

export const allCategories: ExperienceCategory[] = Object.keys(
  categoryLabels
) as ExperienceCategory[];

export function findExperience(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function experiencesByCategory(
  category: ExperienceCategory
): Experience[] {
  return experiences.filter((e) => e.category === category);
}

export function groupExperiencesByCategory(): {
  category: ExperienceCategory;
  label: string;
  items: Experience[];
}[] {
  return allCategories
    .map((category) => ({
      category,
      label: categoryLabels[category],
      items: experiencesByCategory(category),
    }))
    .filter((group) => group.items.length > 0);
}
