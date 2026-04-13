import Link from "next/link";

interface Project {
  name: string;
  href: string;
  tagline: string;
}

const projects: Project[] = [
  {
    name: "ACT Farm",
    href: "http://localhost:3001",
    tagline: "Conservation-first residencies & land practice",
  },
  {
    name: "The Harvest",
    href: "http://localhost:3004",
    tagline: "Community-led CSA & seasonal gatherings",
  },
  {
    name: "Empathy Ledger",
    href: "http://localhost:3003",
    tagline: "Ethical storytelling & narrative sovereignty",
  },
  {
    name: "JusticeHub",
    href: "http://localhost:3002",
    tagline: "Forkable justice models & community governance",
  },
  {
    name: "Goods on Country",
    href: "https://goodsoncountry.netlify.app",
    tagline: "Circular economy co-designed with community",
  },
];

interface UnifiedFooterProps {
  currentProject?: string;
  showProjects?: boolean;
  customLinks?: Array<{ label: string; href: string }>;
  contactEmail?: string;
}

export default function UnifiedFooter({
  currentProject,
  showProjects = true,
  customLinks = [],
  contactEmail = "hi@act.place",
}: UnifiedFooterProps) {
  const filteredProjects = currentProject
    ? projects.filter((p) => p.name !== currentProject)
    : projects;

  return (
    <footer className="border-t border-site-line bg-site-surface px-6 py-12">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="ui-label text-site-ink !text-[12px]">
              A Curious Tractor
            </h3>
            <p className="text-sm text-site-muted leading-relaxed">
              A regenerative innovation studio stewarding a working farm on
              Jinibara Country. We cultivate seeds of impact through listening,
              curiosity, action, and art.
            </p>

            {customLinks.length > 0 && (
              <nav className="space-y-2 pt-4">
                {customLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-site-muted transition hover:text-site-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}
          </div>

          {/* Column 2: ACT Ecosystem */}
          {showProjects && (
            <div className="space-y-4">
              <h3 className="ui-label text-site-ink !text-[12px]">
                ACT Ecosystem
              </h3>
              <nav className="space-y-3">
                {filteredProjects.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    className="group block"
                  >
                    <div className="text-sm font-medium text-site-ink transition group-hover:text-site-green font-sans">
                      {project.name}
                    </div>
                    <div className="text-xs text-site-muted">
                      {project.tagline}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Column 3: Connect */}
          <div className="space-y-4">
            <h3 className="ui-label text-site-ink !text-[12px]">
              Connect
            </h3>

            <div className="space-y-3">
              <a
                href={`mailto:${contactEmail}`}
                className="block text-sm text-site-muted transition hover:text-site-ink"
              >
                {contactEmail}
              </a>

              <div className="pt-4">
                <h4 className="mb-2 text-sm font-medium text-site-ink font-sans">
                  Stay Connected
                </h4>
                <p className="mb-3 text-xs text-site-muted">
                  Seeds, stories, and seasonal updates
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 rounded-[var(--site-radius)] border border-site-line bg-site-bg px-3 py-2 text-sm text-site-ink placeholder:text-site-muted/50 focus:border-site-green focus:outline-none font-sans"
                  />
                  <button
                    type="submit"
                    className="rounded-[var(--site-radius)] bg-site-green px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90 font-sans"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-site-line pt-8 text-xs text-site-muted md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p>
              We acknowledge the Jinibara people as the Traditional Custodians
              of the land on which we work and live. We pay our respects to
              Elders past and present, and extend that respect to all Aboriginal
              and Torres Strait Islander peoples.
            </p>
          </div>

          <div className="flex gap-4 font-sans">
            <Link href="/privacy" className="hover:text-site-ink transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-site-ink transition-colors">
              Terms
            </Link>
            <span>&copy; {new Date().getFullYear()} A Curious Tractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
