import type { Theme } from './types';

export const themeLabels: Record<Theme, string> = {
  'youth-justice': 'Youth Justice',
  systems: 'Systems',
  ai: 'AI',
  data: 'Data & Evidence',
  wellbeing: 'Wellbeing',
  'regenerative-practice': 'Regenerative Practice',
  storytelling: 'Storytelling',
  'community-capital': 'Community Capital',
  country: 'Country',
  art: 'Art',
  health: 'Health',
  making: 'Making',
};

export const allThemes: Theme[] = Object.keys(themeLabels) as Theme[];

export function themeLabel(t: Theme): string {
  return themeLabels[t];
}
