import type { Theme } from '@/lib/experiences/types';
import { themeLabel } from '@/lib/experiences/themes';

export default function ThemeBadge({ theme }: { theme: Theme }) {
  return (
    <span className="ui-label inline-block px-2.5 py-1 rounded-full border border-site-line bg-site-bg text-site-muted text-[10px]">
      {themeLabel(theme)}
    </span>
  );
}
