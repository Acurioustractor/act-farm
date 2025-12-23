import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-semibold mb-4">A Curious Tractor Farm</h3>
            <p className="text-stone-400 mb-4 max-w-md">
              Low-impact eco-residencies and R&D prototyping at Black Cockatoo Valley.
              Conservation-first experiences on Jinibara lands.
            </p>
            <p className="text-sm text-stone-500">
              150 acres of threatened species habitat, restoration, and careful exploration.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-stone-400 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link href="/residencies" className="text-stone-400 hover:text-white transition-colors">
                  Residencies
                </Link>
              </li>
              <li>
                <Link href="/accommodation" className="text-stone-400 hover:text-white transition-colors">
                  Accommodation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:hello@acurioustractor.com" className="text-stone-400 hover:text-white transition-colors">
                  hello@acurioustractor.com
                </a>
              </li>
              <li>
                <Link href="/connect" className="text-stone-400 hover:text-white transition-colors">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a
                  href="https://theharvest.acurioustractor.com"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit The Harvest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} A Curious Tractor. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            On Jinibara lands · Witta, Queensland
          </p>
        </div>
      </div>
    </footer>
  );
}
