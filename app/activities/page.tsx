import Link from 'next/link';

export const metadata = {
  title: 'Activities | A Curious Tractor Farm',
  description: 'Workshops, events, and conservation experiences at Black Cockatoo Valley, including June\'s Patch healthcare worker wellbeing program.',
};

export default function ActivitiesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 to-stone-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Activities & Experiences</h1>
          <p className="text-xl text-emerald-100">
            Small-group workshops, conservation experiences, and careful gatherings at Black Cockatoo Valley.
            R&D learning aligned with our ecology-first approach.
          </p>
        </div>
      </section>

      {/* June's Patch - Featured */}
      <section id="junes-patch" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Featured Program
              </div>
              <h2 className="text-4xl font-bold text-stone-900 mb-6">June's Patch</h2>
              <p className="text-xl text-stone-700 mb-6 leading-relaxed">
                A "prescription to nature" project designed to nourish healthcare workers and, in turn,
                strengthen patient and community wellbeing.
              </p>
              <p className="text-lg text-stone-700 mb-6">
                If we look after the people holding the health system, they can better look after everyone else.
                We do that through <strong>fresh food</strong>, <strong>time on land</strong>, and{' '}
                <strong>experience-based wellbeing</strong> rather than another clinical program.
              </p>
              <Link
                href="/junes-patch"
                className="inline-block bg-emerald-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-800 transition-colors"
              >
                Learn More About June's Patch →
              </Link>
            </div>
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-stone-900 mb-4">How It Works</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">→</span>
                  <span className="text-stone-700">
                    <strong>Food Garden + Experience Subscription:</strong> Participants receive fresh produce
                    and access to restorative experiences
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">→</span>
                  <span className="text-stone-700">
                    <strong>Partnership-Led:</strong> Built with health workers (Wishlist community), researchers
                    (University of the Sunshine Coast), and community collaborators
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">→</span>
                  <span className="text-stone-700">
                    <strong>Place-Based:</strong> Uses the land at Black Cockatoo Valley in Witta as part of
                    the intervention
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-700 font-bold mr-3">→</span>
                  <span className="text-stone-700">
                    <strong>Evidence-Based:</strong> Research → Design → Test approach with USC collaboration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 text-center">Workshops</h2>
          <p className="text-lg text-stone-700 mb-12 text-center max-w-3xl mx-auto">
            Small-group sessions on regeneration, weed monitoring, species observation, and conservation practices.
            Limited to maintain low-impact and protect habitat.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <WorkshopCard
              title="Species Observation & Monitoring"
              description="Learn techniques for identifying and monitoring threatened species. Hands-on field sessions with conservation biologists, contributing to our ongoing habitat restoration work."
              format="Half-day sessions"
              participants="Max 8 participants"
            />
            <WorkshopCard
              title="Weed Management & Native Regeneration"
              description="Practical workshops on identifying invasive species and supporting native plant recovery. Direct contribution to Black Cockatoo Valley's restoration efforts."
              format="Full-day immersive"
              participants="Max 6 participants"
            />
            <WorkshopCard
              title="Ethical AI for Conservation"
              description="Explore how monitoring platforms and ethical AI tools can support habitat protection. R&D sessions informing our conservation technology prototyping."
              format="Weekend residency"
              participants="Max 10 participants"
            />
            <WorkshopCard
              title="Regenerative Garden Design"
              description="June's Patch garden sessions focused on growing food that nourishes people and strengthens ecosystem health. Open to healthcare workers and community members."
              format="Monthly sessions"
              participants="Max 12 participants"
            />
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-stone-900 mb-4 text-center">Events & Gatherings</h2>
          <p className="text-lg text-stone-700 mb-12 text-center max-w-3xl mx-auto">
            Quiet, intentional gatherings that foster connection, learning, and restoration.
            No extractive events—every gathering supports our conservation mission.
          </p>

          <div className="space-y-6">
            <EventCard
              title="Seasonal Nature Walks"
              description="Guided walks through Black Cockatoo Valley's 150 acres, observing seasonal changes, wildlife, and restoration progress. Led by our conservation team and Jinibara knowledge holders."
              timing="Quarterly"
              capacity="Limited to 15 participants"
            />
            <EventCard
              title="Restoration Working Bees"
              description="Community-led habitat restoration sessions—planting, weeding, mulching. Direct hands-on contribution to threatened species protection. Includes shared morning tea."
              timing="Monthly"
              capacity="Open to all skill levels, max 20"
            />
            <EventCard
              title="June's Patch Harvest Gatherings"
              description="Healthcare worker wellness gatherings featuring garden tours, fresh produce harvesting, shared meals, and restorative outdoor time. Part of our partnership with Wishlist and USC."
              timing="Bi-monthly"
              capacity="Healthcare workers and partners"
            />
            <EventCard
              title="Conservation R&D Showcases"
              description="Quiet presentations of prototyping work—habitat monitoring tools, regenerative practice learnings, and community co-design outcomes. Invite-only, research-focused."
              timing="2-3 times per year"
              capacity="Collaborators and partners"
            />
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Participating?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Activities are intentionally limited to protect habitat and maintain quality.
            Express your interest and we'll notify you of upcoming opportunities.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-colors"
          >
            Express Interest
          </Link>
        </div>
      </section>
    </div>
  );
}

interface WorkshopCardProps {
  title: string;
  description: string;
  format: string;
  participants: string;
}

function WorkshopCard({ title, description, format, participants }: WorkshopCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-2xl font-semibold text-stone-900 mb-4">{title}</h3>
      <p className="text-stone-700 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <div className="flex items-center">
          <span className="font-semibold mr-2">Format:</span>
          <span>{format}</span>
        </div>
        <div className="flex items-center">
          <span className="font-semibold mr-2">Capacity:</span>
          <span>{participants}</span>
        </div>
      </div>
    </div>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  timing: string;
  capacity: string;
}

function EventCard({ title, description, timing, capacity }: EventCardProps) {
  return (
    <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-emerald-700">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <h3 className="text-2xl font-semibold text-stone-900 mb-2 md:mb-0">{title}</h3>
        <span className="inline-block bg-emerald-100 text-emerald-900 px-4 py-1 rounded-full text-sm font-semibold">
          {timing}
        </span>
      </div>
      <p className="text-stone-700 mb-4 leading-relaxed">{description}</p>
      <div className="text-sm text-stone-600">
        <span className="font-semibold">Capacity:</span> {capacity}
      </div>
    </div>
  );
}
