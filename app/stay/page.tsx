import Link from 'next/link';

export const metadata = {
  title: 'Stay | Black Cockatoo Valley',
  description: 'Unique eco-accommodation on 150 acres of Jinibara Country. The Pink Cabin and Train Carriage Lookout — outdoor baths, valley views, off-grid quiet.',
};

const accommodations = [
  {
    id: 'pink-cabin',
    name: 'The Pink Cabin',
    subtitle: 'Tuscan Cabin',
    guests: '2 guests',
    features: ['Queen bed', 'Kitchenette', 'Outdoor bathtub', 'Fire pit', 'Valley views', 'Pet-friendly'],
    description:
      'A cosy Tuscan-inspired cabin with panoramic valley views and cattle grazing out front. Wake with the sunrise from bed, watch the sunset from the outdoor bath with a glass of wine. The kitchenette has a cooktop and fridge. Private fire pit for evenings under the stars.',
    highlight: 'Most loved — guests call it "a peaceful oasis to rejuvenate"',
    images: ['/images/stay/pink-cabin-1.jpg', '/images/stay/pink-cabin-2.jpg', '/images/stay/pink-cabin-3.jpg', '/images/stay/pink-cabin-4.jpg', '/images/stay/pink-cabin-5.jpg'],
  },
  {
    id: 'train-carriage',
    name: 'Train Carriage Lookout',
    subtitle: 'Converted Railway Carriage',
    guests: '2 guests',
    features: ['Double bed', 'Outdoor shower', 'Bathtub', 'Valley lookout', 'Composting toilet', 'Pet-friendly'],
    description:
      'A converted railway carriage perched on the ridge with views across the valley. Simple, warm, and unlike anything else. Outdoor shower, bathtub, and the communal pizza oven is a short walk away. Disconnect completely — there\'s no phone reception up here.',
    highlight: 'Named "glamping with a twist" — guests love the views and the quiet',
    images: ['/images/stay/train-carriage-1.jpg', '/images/stay/train-carriage-2.jpg', '/images/stay/train-carriage-3.jpg', '/images/stay/train-carriage-4.jpg', '/images/stay/train-carriage-5.jpg'],
  },
];

const reviews = [
  {
    text: 'The cabin was so beautiful — it was in a great position overlooking a field. There were cows and birds and everything we needed for a quiet weekend away.',
    author: 'Mikayla S.',
    accommodation: 'Pink Cabin',
  },
  {
    text: 'What a great experience and what a view. Great to experience the quiet and peace of nature, and just... to chill in the evening over a fire and a bottle of bubbly.',
    author: 'John S.',
    accommodation: 'Train Carriage',
  },
  {
    text: 'We loved our little cabin for a long weekend away. The space has everything you need and is very private. Nic put the cattle in the paddock out front. Highly recommend!',
    author: 'Lauren V.',
    accommodation: 'Pink Cabin',
  },
  {
    text: 'Nic the host made the experience — so friendly, welcoming and always had a smile. He gave us the back story of the land which made it even more special.',
    author: 'Olivia U.',
    accommodation: 'Train Carriage',
  },
  {
    text: 'We enjoyed a lovely warm bath with a view, relaxing meals on the veranda, and gazed at the stars. Back home now, feeling relaxed and rejuvenated.',
    author: 'Rose P.',
    accommodation: 'Pink Cabin',
  },
  {
    text: 'The train carriage was absolutely beautiful and had everything we needed! The property was amazing, we loved seeing the cows and the walk down to the stream was lovely.',
    author: 'Phoebe B.',
    accommodation: 'Train Carriage',
  },
];

export default function StayPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-site-ink text-white py-28 md:py-36">
        <div className="max-w-[720px] mx-auto px-4">
          <p className="ui-label text-site-clay mb-6">
            On Jinibara Country &middot; Witta, Queensland
          </p>
          <h1 className="text-[clamp(3rem,7vw,5.5rem)] font-light leading-[1.05] mb-8">
            Stay at the Valley
          </h1>
          <p className="text-[clamp(1.1rem,2vw,1.5rem)] text-white/60 leading-relaxed mb-10">
            Two unique places to sleep on 150 acres of conservation land in the Sunshine Coast
            Hinterland. Outdoor baths, valley views, composting toilets, no phone reception.
            This is rustic, not luxury — and that's the point.
          </p>
          <div className="flex items-center gap-6 text-white/40">
            <div>
              <span className="text-2xl font-light text-white">97%</span>
              <span className="text-sm ml-1">recommend</span>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div>
              <span className="text-2xl font-light text-white">145</span>
              <span className="text-sm ml-1">reviews</span>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div>
              <span className="text-sm">Best Cabins 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-site-surface">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="ui-label text-site-green mb-2">1. Choose</p>
              <p className="text-site-muted">Pick a cabin, carriage, or tent that fits your vibe</p>
            </div>
            <div>
              <p className="ui-label text-site-green mb-2">2. Book</p>
              <p className="text-site-muted">Message us with your dates and we'll confirm availability</p>
            </div>
            <div>
              <p className="ui-label text-site-green mb-2">3. Arrive</p>
              <p className="text-site-muted">Directions sent before arrival. Nic meets you on site</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[1200px] mx-auto px-4">
          <p className="ui-label text-site-muted text-center mb-4">Accommodation</p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-16 text-center">
            Two Places to Sleep
          </h2>

          <div className="space-y-20">
            {accommodations.map((acc, index) => (
              <AccommodationCard key={acc.id} accommodation={acc} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-12 text-center">
            What Every Stay Includes
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
            {[
              'Access to 150 acres — trails, creeks, viewpoints',
              'Outdoor bathtub (most cabins)',
              'Fire pit and firewood (BYO or buy locally)',
              'Communal pizza oven and gathering area',
              'Kitchenette with cooktop and fridge',
              'Bedding and towels provided',
              'Composting toilets (off-grid)',
              'Creek access down to Elaman Creek',
              'Pet-friendly (most accommodation)',
              'No phone reception — that\'s a feature',
              'Walking distance to national parks',
              'Host Nic on site for anything you need',
            ].map((item) => (
              <div key={item} className="flex items-start">
                <span className="text-site-green mr-3 mt-0.5 font-bold">&#10003;</span>
                <span className="text-site-muted">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28 bg-site-bg">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-14">
            <p className="ui-label text-site-muted mb-4">Guest Reviews</p>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-4">
              What Guests Say
            </h2>
            <p className="text-site-muted text-lg">
              97% recommend &middot; 145 reviews &middot; Hipcamp Best Cabins 2024
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-20 md:py-28 bg-site-surface">
        <div className="max-w-[720px] mx-auto px-4">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light text-site-ink mb-12 text-center">
            Good to Know
          </h2>
          <div className="space-y-8">
            <InfoBlock
              title="Getting here"
              text="Black Cockatoo Valley is near Witta, Queensland — about 90 minutes from Brisbane, 30 minutes from Maleny. Precise directions sent after booking. Some access roads are unsealed."
            />
            <InfoBlock
              title="Off-grid"
              text="No mains power in the cabins. Solar and battery where available. No phone reception (Vodafone, Telstra patchy). Download music and maps before you arrive. That's the whole point."
            />
            <InfoBlock
              title="Composting toilets"
              text="All accommodation uses composting toilets. They're part of the conservation approach. If you've never used one, it's straightforward — instructions in each cabin."
            />
            <InfoBlock
              title="Pets"
              text="Most accommodation is pet-friendly. Let us know when you book. Dogs must be kept under control — this is threatened species habitat."
            />
            <InfoBlock
              title="Working farm"
              text="BCV is a working conservation farm. You may see other guests, cattle, and construction activity. It's real, not curated — and that's what people love about it."
            />
            <InfoBlock
              title="Nearby"
              text="Kondalilla National Park (8km), Mapleton National Park (9km), Maleny and Montville cafes and shops (15-20 min). Eumundi markets on Wednesdays and Saturdays."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-site-ink text-white">
        <div className="max-w-[720px] mx-auto px-4 text-center">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-light mb-6">
            Book Your Stay
          </h2>
          <p className="text-xl text-white/60 mb-10 leading-relaxed">
            We're transitioning to direct bookings with a human touch.
            Tell us which accommodation interests you, your dates, and how many guests.
            Nic will get back to you personally.
          </p>
          <Link
            href="/connect?interest=retreat"
            className="inline-block bg-site-green text-white px-8 py-4 rounded-[var(--site-radius)] font-sans text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity"
          >
            Enquire About a Stay
          </Link>
          <p className="text-white/30 text-sm mt-6">
            Previously on Hipcamp &middot; Now booking direct
          </p>
        </div>
      </section>
    </div>
  );
}

interface AccommodationProps {
  accommodation: typeof accommodations[number];
  reverse: boolean;
}

function AccommodationCard({ accommodation, reverse }: AccommodationProps) {
  return (
    <div id={accommodation.id} className={`grid md:grid-cols-2 gap-10 items-center ${reverse ? 'md:[direction:rtl]' : ''}`}>
      {/* Image gallery */}
      <div className={`${reverse ? 'md:[direction:ltr]' : ''}`}>
        <div className="aspect-[4/3] rounded-[var(--site-radius)] overflow-hidden mb-2">
          <img
            src={accommodation.images[0]}
            alt={accommodation.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {accommodation.images.slice(1, 5).map((img, i) => (
            <div key={i} className="aspect-square rounded-[var(--site-radius)] overflow-hidden">
              <img src={img} alt={`${accommodation.name} ${i + 2}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className={reverse ? 'md:[direction:ltr]' : ''}>
        <p className="ui-label text-site-clay mb-2">{accommodation.subtitle} &middot; {accommodation.guests}</p>
        <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-light text-site-ink mb-4">
          {accommodation.name}
        </h3>
        <p className="text-site-muted leading-[1.7] mb-6">
          {accommodation.description}
        </p>
        <p className="text-sm text-site-green italic mb-6">
          {accommodation.highlight}
        </p>
        <div className="flex flex-wrap gap-2">
          {accommodation.features.map((feature) => (
            <span
              key={feature}
              className="text-xs font-sans bg-site-surface text-site-muted px-3 py-1.5 rounded-[var(--site-radius)]"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <div className="card-hover bg-site-surface p-6 rounded-[var(--site-radius)]">
      <p className="text-site-muted leading-relaxed mb-4 italic">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-sans font-medium text-site-ink">{review.author}</span>
        <span className="text-xs text-site-muted">{review.accommodation}</span>
      </div>
    </div>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-b border-site-line pb-6">
      <h3 className="text-lg font-light text-site-ink mb-2">{title}</h3>
      <p className="text-site-muted leading-relaxed">{text}</p>
    </div>
  );
}
