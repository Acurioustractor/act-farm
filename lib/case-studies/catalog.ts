import type { CaseStudy } from '@/lib/experiences/types';

/**
 * ACT Farm case studies — typed mirror of
 * `act-global-infrastructure/wiki/projects/act-farm/case-studies/`.
 *
 * Case studies are evidence. They link back to the experience(s) they
 * demonstrate so `/experiences/<slug>` can render "Related case studies"
 * automatically.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: 'community-capital-at-bcv',
    title: 'Community Capital at BCV \u2014 a year in the valley',
    summary:
      'Community Capital paid for a year of accommodation at Black Cockatoo Valley. The Caravan came here. The retreat came home. This is the case study for what a convening program looks like when it\u2019s no longer a single event in a rented venue \u2014 it\u2019s a year on Country.',
    wikiPath: 'wiki/projects/act-farm/case-studies/community-capital-at-bcv.md',
    period: '2025\u20132026 (year in residence)',
    experienceSlugs: ['the-space-at-bcv'],
    themes: ['community-capital', 'systems', 'country'],
    status: 'published',
  },
  {
    slug: 'the-caravan-at-bcv',
    title: 'The Caravan at BCV',
    summary:
      'The Caravan was built for the Community Capital retreat in Bowral. It now lives at Black Cockatoo Valley. A mobile dignity object, parked on Country, still working. This is the case study of what happens when a studio piece stops touring and takes up residence.',
    wikiPath: 'wiki/projects/act-farm/case-studies/the-caravan-at-bcv.md',
    period: '2025\u2013present',
    experienceSlugs: ['the-space-at-bcv'],
    themes: ['art', 'community-capital', 'country'],
    status: 'published',
  },
  {
    slug: 'radical-scoops-at-the-harvest',
    title: 'Radical Scoops at The Harvest \u2014 the RAA Industry Residency',
    summary:
      'A 2,000-square-metre former nursery in Witta, a 12-month lease, about a thousand milk crates, an elder with a saw blade and a story about red cedar, an oyster farmer from up the coast, and ice cream as the connective tissue. Radical Scoops is ACT\u2019s first large-scale industry residency \u2014 the case study for what an arts-and-industry fellowship looks like when you run it the way we\u2019d build it ourselves.',
    wikiPath: 'wiki/projects/act-farm/case-studies/radical-scoops-at-the-harvest.md',
    period: '2025\u20132026 active; Capacity Lab phase Jul 2026 \u2013 Jun 2027',
    experienceSlugs: ['industry-residency-at-the-harvest', 'harvest-pairings', 'artist-residency'],
    themes: ['art', 'regenerative-practice', 'storytelling', 'making', 'country'],
    status: 'published',
  },
  {
    slug: 'junes-patch-year-one-2025',
    title: 'June\u2019s Patch Year One \u2014 the JCF partnership, 2024\u20132025',
    summary:
      'A multi-year partnership between ACT and the June Canavan Foundation, named for Dr June Canavan\u2019s belief in the health\u2013nature intersection. Year One was supposed to be about nature prescriptions for healthcare workers. What it actually became was a hybrid community that runs as much online as on the land, and that is now pivoting into food production as the next form of therapy.',
    wikiPath: 'wiki/projects/act-farm/case-studies/junes-patch-year-one-2025.md',
    period: 'Oct 2024 \u2013 Sep 2025 (Year One of 3)',
    experienceSlugs: ['junes-patch-healthcare-retreat'],
    themes: ['health', 'wellbeing', 'country', 'regenerative-practice'],
    status: 'published',
  },
  {
    slug: 'dad-lab-bcv-2025',
    title: 'DAD.LAB \u2014 the inaugural cohort at BCV, 2025',
    summary:
      'Twenty dads. One weekend at Black Cockatoo Valley. A silent walk, a pile of soil, a pizza oven, and a framework small enough to carry home \u2014 I have, I am, I can. This is the case study of what happens when you take fatherhood out of the living room and put it on Country.',
    wikiPath: 'wiki/projects/act-farm/case-studies/dad-lab-bcv-2025.md',
    period: '2025 (inaugural cohort)',
    experienceSlugs: ['dad-lab-at-bcv'],
    themes: ['health', 'wellbeing', 'country'],
    status: 'published',
  },
  {
    slug: 'community-capital-bowral-2025',
    title: 'Community Capital \u2014 Bowral, 23\u201325 Feb 2025',
    summary:
      'Phase 1 of Community Capital: a 10x10 leadership retreat held over three days in Bowral, NSW. Community leaders and capital holders in one room, making candles while talking about money. INV-0289 is the ledger. Phase 2 \u2014 Catalysing Impact \u2014 was signed thirteen months later.',
    wikiPath: 'wiki/projects/act-farm/case-studies/community-capital-bowral-2025.md',
    period: '23\u201325 Feb 2025',
    experienceSlugs: ['the-space-at-bcv'],
    themes: ['community-capital', 'systems'],
    status: 'published',
  },
];

export function findCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function caseStudiesForExperience(
  experienceSlug: string
): CaseStudy[] {
  return caseStudies.filter((c) =>
    c.experienceSlugs.includes(experienceSlug)
  );
}
