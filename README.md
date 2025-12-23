# A Curious Tractor Farm - Black Cockatoo Valley Website

A Next.js website for the ACT Farm at Black Cockatoo Valley, showcasing conservation-first R&D residencies, workshops, and the June's Patch healthcare worker wellbeing program.

## Overview

This site presents Black Cockatoo Valley as a living laboratory for conservation, regenerative practice, and careful co-stewardship on Jinibara lands. Built with Next.js 16, TypeScript, and Tailwind CSS for a world-class, accessible, and performant frontend experience.

## Key Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation
- **SEO Optimized**: Proper metadata, semantic structure, and static generation
- **Performance**: Static generation for fast load times and optimal Core Web Vitals

## Site Structure

### Pages

- **Home** (`/`) - Hero section, LCAA framework introduction, key offerings
- **Interactive Map** (`/map`) - Drone photo-based interactive map with clickable location pins
- **About** (`/about`) - Mission, LCAA framework, land description, business model, vision
- **Activities** (`/activities`) - Workshops, events, and conservation experiences
- **June's Patch** (`/junes-patch`) - Dedicated page for the healthcare worker wellbeing program
- **Residencies** (`/residencies`) - R&D residency details, types, pricing, principles
- **Accommodation** (`/accommodation`) - Current and future eco-stay options
- **Connect** (`/connect`) - Contact form and information
- **Map Admin** (`/map/admin`) - Tool for positioning pins on the drone photo

### Key Content Themes

#### LCAA Framework
All content is framed around the Listen, Curiosity, Action, Art principles:
- **Listen**: Co-design with community, First Nations knowledge holders, the land
- **Curiosity**: R&D prototyping, asking questions, testing hypotheses
- **Action**: Tangible outputs, measurable impact, real-world application
- **Art**: Felt stories, beauty, connection through experience

#### Conservation-First Approach
- Low-impact, limited-volume activities
- Premium pricing model ($300-$500/night residencies)
- Prepaid bookings for stable cashflow
- No extractive tourism or high-volume events
- Revenue reinvested in habitat restoration

#### June's Patch
A "prescription to nature" project designed to nourish healthcare workers through:
- Fresh food subscriptions from regenerative gardens
- Time on land through restorative experiences
- Community connection outside clinical settings
- Partnership with Wishlist community and University of the Sunshine Coast

## Technical Details

### Built With

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **ESLint** - Code quality and consistency

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

The development server runs at [http://localhost:3000](http://localhost:3000).

### Project Structure

```
act-farm/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── accommodation/       # Accommodation page
│   ├── activities/          # Activities & workshops page
│   ├── connect/             # Contact page
│   ├── junes-patch/         # June's Patch dedicated page
│   ├── residencies/         # R&D residencies page
│   ├── layout.tsx           # Root layout with navigation and footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/              # Layout components
│   │   ├── Navigation.tsx   # Site navigation
│   │   └── Footer.tsx       # Site footer
│   ├── sections/            # Page sections (future)
│   └── ui/                  # UI components (future)
├── public/                  # Static assets
└── README.md               # This file
```

### Key Design Decisions

#### Color Palette
- **Stone** (50-900): Primary neutral color for text and backgrounds
- **Emerald** (50-900): Brand color for CTAs, accents, and conservation themes
- Natural, earthy tones aligned with conservation mission

#### Typography
- System fonts (Geist Sans, Geist Mono) for optimal performance
- Clear hierarchy with large headings (text-4xl to text-7xl)
- Readable body text (text-lg, leading-relaxed)

#### Component Patterns
- Reusable card components for consistency
- Inline component definitions for page-specific elements
- TypeScript interfaces for props validation
- Descriptive, semantic component names

## Interactive Map

The site features an interactive drone photo map based on the proven PICC Station pattern. Visitors can click on location pins to explore different areas of the 150-acre property.

**Features:**
- Click pins to view location details, photos, activities, and habitat information
- Switch between map layers (current, before, site plan, habitat zones)
- Responsive sidebar with rich content
- Admin tool for easy pin positioning at `/map/admin`

**For detailed map setup instructions**, see [MAP_SETUP_GUIDE.md](MAP_SETUP_GUIDE.md)

**Current Locations:**
- June's Patch (garden)
- R&D Residency Accommodation
- Threatened Species Habitat Zones
- Mary River Viewpoint
- Elaman Creek Corridor
- Workshop & Gathering Space
- Future developments

## Integration Points

### Future Enhancements

1. **Map Enhancements** - Add before/after photo slider, full-screen gallery, progress tracking
2. **GHL Integration** - Connect contact forms to GoHighLevel for lead nurturing
3. **CMS Integration** - Consider headless CMS for easier map content updates
4. **Enhanced Photography** - Add professional drone footage and 360° views
5. **Blog/Updates** - Add blog section for conservation updates and learnings
6. **Booking System** - Integrate calendar and booking flow for residencies
7. **Analytics** - Add privacy-focused analytics (Plausible, Fathom)

### Link to Core Site

This site is designed to be linked from the main A Curious Tractor site at:
`/Users/benknight/Code/ACT Farm and Regenerative Innovation Studio`

Ensure consistent branding, navigation patterns, and cross-linking between sites.

## Content Strategy

### Tone & Voice
- Honest and authentic (no overclaiming)
- Conservation-focused and ecology-first
- Professional but warm
- Evidence-based with emotional resonance
- Clear about business model and sustainability

### Key Messages
1. Conservation comes first - all activities strengthen habitat
2. Low-impact, premium model is financially viable
3. Phased toward community co-stewardship ("beautiful obsolescence")
4. R&D focus produces tangible outputs and learnings
5. Partnerships with research institutions and community organizations

## SEO & Performance

### Metadata
- Unique title and description for each page
- Semantic HTML structure
- Proper heading hierarchy (h1 → h6)
- Descriptive link text

### Performance Optimizations
- Static generation for all pages
- Minimal JavaScript (mostly static content)
- Optimized CSS with Tailwind's JIT compiler
- Fast load times for rural/mobile users

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Cloudflare Pages**

```bash
# Build and test locally first
npm run build
npm start

# Deploy to Vercel (if using Vercel CLI)
vercel
```

## Accessibility

- Semantic HTML elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Responsive design for all screen sizes
- Mobile-first approach

## Contributing

This site is part of the A Curious Tractor ecosystem. For content updates or feature requests, contact the development team.

## License

© 2025 A Curious Tractor. All rights reserved.

---

Built with care on Jinibara lands · Witta, Queensland
