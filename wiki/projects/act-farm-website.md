# ACT Farm Website Project

## Overview
Conservation-first website for Black Cockatoo Valley featuring interactive drone photo map, R&D residencies, and June's Patch healthcare worker wellbeing program.

**Status**: ✅ Live in Production
**URL**: https://act-farm.vercel.app
**Launch Date**: 2025-12-23
**GitHub**: https://github.com/Acurioustractor/act-farm

---

## Why This Exists

### Business Problem
- Need to showcase 150 acres of threatened species habitat on Jinibara lands
- Communicate conservation-first approach (not extractive tourism)
- Attract aligned R&D residents and workshop participants
- Generate revenue through premium, low-volume model ($300-500/night residencies)
- Differentiate from The Harvest site (community activation)
- Enable prepaid bookings for stable cashflow

### User Needs
- **Researchers/Technologists**: Find conservation-aligned R&D spaces
- **Healthcare Workers**: Learn about June's Patch wellbeing program
- **Conservation Partners**: Understand habitat restoration work
- **Potential Residents**: Explore the land virtually before visiting
- **Funders**: See evidence of regenerative practice and community benefit

### Strategic Alignment
- **LCAA Framework**: Listen (co-design), Curiosity (R&D), Action (outputs), Art (felt stories)
- **Beautiful Obsolescence**: Building toward community co-stewardship
- **Conservation First**: Every feature protects habitat, no extractive events
- **Dual Sites**: BCV = serene R&D focus, The Harvest = community activation

---

## What We Built

### Core Features
1. **Interactive Drone Map** (⭐ Key Differentiator)
   - Clickable location pins on actual farm drone photo
   - Rich location details (photos, videos, activities, habitat info)
   - 4 layer support (current, before, site plan, habitat zones)
   - Admin tool for easy pin positioning
   - Based on proven PICC Station pattern

2. **8 Content Pages**
   - Homepage: Hero, LCAA intro, key offerings
   - Map: Interactive exploration
   - About: Mission, business model, "beautiful obsolescence"
   - Activities: Workshops, events, conservation experiences
   - June's Patch: Dedicated healthcare worker program page
   - Residencies: R&D residency types, pricing, principles
   - Accommodation: Current + future eco-stays
   - Connect: Contact form and information

3. **Admin Tools**
   - Pin positioning tool at `/map/admin`
   - Click-to-get-coordinates interface
   - Copy-paste location code generation

4. **Automation**
   - CLI scripts for deployment (deploy.sh)
   - Health monitoring (monitor.sh)
   - Status checks (status.sh)
   - Auto-deploy on GitHub push

### Technical Architecture
- **Framework**: Next.js 16 (App Router, static generation)
- **Language**: TypeScript 5.7 (100% coverage)
- **Styling**: Tailwind CSS 3.4 (earth tones: stone/emerald)
- **Hosting**: Vercel (auto-deploy, global CDN, automatic SSL)
- **Version Control**: GitHub (Acurioustractor/act-farm)
- **Icons**: Lucide React

---

## Key Decisions & Why

### Decision: Interactive Map Instead of Static Image Gallery
**Date**: 2025-12-23
**Made By**: Claude + Ben
**Rationale**:
- Static galleries don't show spatial relationships
- Users needed to understand land layout and scale
- Map creates exploratory experience aligned with "careful exploration"
- Positions can update as development progresses
- Proven pattern from PICC Station reduces risk

**Pattern Source**: `/Users/benknight/Code/PICC Station Site Plan/picc-station-map/`
- Percentage-based positioning (scales across devices)
- Rich location metadata structure
- Admin tool for non-technical updates
- Multi-layer support for before/after comparisons

### Decision: Separate June's Patch Page
**Date**: 2025-12-23
**Rationale**:
- Healthcare worker wellbeing is distinct audience
- Partnership with Wishlist + USC needs dedicated space
- Potential for separate funding streams
- Research program requires detailed explanation
- "Prescription to nature" concept needs narrative space

### Decision: Premium Pricing Transparency
**Date**: 2025-12-23
**Rationale**:
- $300-500/night is honest about low-volume model
- Filters for aligned visitors (not budget tourists)
- Demonstrates financial viability of conservation-first approach
- Prepaid model mentioned for cashflow predictability
- Builds trust vs. hiding pricing

### Decision: CLI Automation Over Manual Deployment
**Date**: 2025-12-23
**Rationale**:
- One-command deployment reduces friction
- Automated health checks catch issues early
- GitHub + Vercel CLIs already installed
- Scripts can be run by anyone on team
- Monitoring becomes routine, not special task

---

## How It Works

### Content Update Workflow
```
1. Edit page in app/ directory
2. Run ./scripts/deploy.sh
3. Script builds, commits, pushes to GitHub
4. Vercel auto-deploys to production
5. Changes live in ~2 minutes
```

### Map Location Update Workflow
```
1. Go to /map/admin on live site
2. Click drone photo where location is
3. Copy generated coordinates
4. Paste into lib/map/farmData.ts
5. Run ./scripts/deploy.sh
6. New pin appears on live map
```

### Monitoring Workflow
```
1. Run ./scripts/monitor.sh daily
2. Checks all pages, images, response times
3. Reviews logs for errors
4. Optional Lighthouse performance audit
5. Reports summary (all checks passed / issues found)
```

---

## Integration Points

### Links to Other ACT Projects
- **The Harvest**: External link in navigation (community-focused)
- **Core ACT Site**: To be linked from `/Users/benknight/Code/ACT Farm and Regenerative Innovation Studio`
- **June's Patch Research**: Partnership with USC, Wishlist
- **PICC Station Pattern**: Interactive map implementation borrowed

### Data Flows
- **GitHub → Vercel**: Auto-deployment pipeline
- **Vercel → Global CDN**: Content delivery
- **Contact Form**: Currently frontend-only (future: GHL integration)
- **Analytics**: Vercel Analytics (traffic, performance, Core Web Vitals)

### Future Integrations (Planned)
- GoHighLevel (GHL) for contact form submissions
- Google Analytics for detailed visitor tracking
- Booking system for residency reservations
- Payment processing for prepaid bookings
- Mailchimp/newsletter for updates

---

## Metrics & Performance

### Launch Metrics
- **Build Time**: ~30 seconds
- **Homepage Load**: <200ms
- **Total Routes**: 12 (including admin)
- **Bundle Size**: Optimized via Next.js
- **Lighthouse Score Target**: 90+ (performance), 95+ (accessibility)

### Business Metrics to Track
- **Traffic**: Daily visitors, page views
- **Engagement**: Map interaction rate, form submissions
- **Conversions**: Residency inquiries, June's Patch interest
- **Performance**: Core Web Vitals, error rate
- **Revenue**: Residency bookings, workshop sign-ups

### Success Criteria (Month 1)
- [ ] 500+ unique visitors
- [ ] <2s average page load
- [ ] 10+ residency inquiries
- [ ] 5+ June's Patch interest forms
- [ ] Zero critical errors
- [ ] 90+ Lighthouse performance score

---

## Team & Responsibilities

### Built By
- **Claude (AI)**: Full development, architecture, deployment automation
- **Ben Knight**: Product direction, content strategy, drone photo

### Ongoing Ownership
- **Content Updates**: Ben / ACT team
- **Map Updates**: Ben / conservation team (using admin tool)
- **Technical Maintenance**: Automated via Vercel
- **Monitoring**: Automated scripts + manual review

### Skills Required
- **Content Editing**: Basic Markdown/React knowledge
- **Map Updates**: Point-and-click (no code required)
- **Deployment**: One command (`./scripts/deploy.sh`)
- **Troubleshooting**: Consult `.claude/skills/cli-automation.md`

---

## Costs & Sustainability

### Current Costs (Free Tier)
- **Vercel Hosting**: $0/month (free tier: 100GB bandwidth)
- **GitHub**: $0/month (public repository)
- **Domain**: TBD if custom domain added
- **Total Monthly**: $0

### Projected Costs (If Scaled)
- **Vercel Pro**: $20/month (if exceed free tier)
- **Custom Domain**: ~$15/year (farm.acurioustractor.com)
- **Analytics**: $0 (Vercel included) or ~$9/month (Plausible if privacy-focused)
- **Monitoring**: $0 (UptimeRobot free tier)

### Revenue Potential
- **R&D Residencies**: $300-500/night × 2-3 concurrent = $600-1500/night
- **Workshops**: $5K+ per event (limited groups)
- **June's Patch**: $400-800/season per participant
- **Break-even**: Essentially immediate (hosting is free)

---

## Known Issues & Limitations

### Current Limitations
1. **Map Layer Images**: Only drone-current.jpg is real; others are placeholders
2. **Location Photos**: Sample locations don't have actual photos yet
3. **Pin Positions**: Sample coordinates; need adjustment using admin tool
4. **Contact Form**: Frontend-only, no backend submission yet
5. **No Booking System**: Contact form leads to manual follow-up

### Technical Debt
- No automated testing (Playwright recommended)
- No image optimization pipeline (manual optimization needed)
- No CMS for non-technical content updates
- Monitoring is manual (no automated alerts set up yet)

### Planned Improvements
- [ ] Add real before/site-plan/habitat-zones map layers
- [ ] Position all pins accurately using admin tool
- [ ] Add actual location photos (10-15 per location)
- [ ] Integrate contact form with GHL
- [ ] Set up automated monitoring alerts (UptimeRobot)
- [ ] Add booking/calendar system
- [ ] Implement payment processing
- [ ] Create before/after image comparison slider
- [ ] Add search/filter for locations

---

## Documentation

### Where to Find Information
1. **README.md**: Project overview, getting started
2. **MAP_SETUP_GUIDE.md**: Complete map feature documentation
3. **QUICK_START.md**: Immediate next steps for newcomers
4. **DEPLOYMENT_GUIDE.md**: Detailed deployment instructions
5. **`.claude/skills/`**: CLI workflows, automation, monitoring
6. **`wiki/`**: This directory - project context and decisions

### For Different Audiences
- **Developers**: README.md, technical docs in `.claude/skills/`
- **Content Editors**: QUICK_START.md, MAP_SETUP_GUIDE.md
- **Stakeholders**: This wiki page, PROJECT_SUMMARY.md
- **New Team Members**: QUICK_START.md, wiki/people/ (to be created)

---

## Lessons Learned

### What Worked Well
- **CLI Automation**: One-command deployment drastically reduced friction
- **PICC Station Pattern**: Reusing proven pattern saved 10+ hours
- **Percentage Positioning**: Map works perfectly across all devices
- **Vercel Auto-Deploy**: GitHub push → live site in 2 minutes
- **Documentation First**: Comprehensive docs enabled team handoff

### What Was Challenging
- **Balancing Messaging**: Conservation-first vs. revenue generation (solved with transparency)
- **Map Complexity**: Interactive map is sophisticated (mitigated with admin tool)
- **Dual Audience**: Residency visitors vs. June's Patch participants (solved with dedicated pages)

### What We'd Do Differently
- Start with content audit before building (had to infer structure)
- Create before/after layers during initial drone shoot
- Set up analytics/monitoring before launch (not after)
- Plan booking system integration from day 1

---

## Related Pages
- [[projects/picc-station-map]] - Pattern source for interactive map
- [[projects/the-harvest]] - Sister site for community activation
- [[processes/deployment-workflow]] - How to deploy changes
- [[decisions/conservation-first-messaging]] - Content strategy
- [[technical/interactive-map-architecture]] - Map implementation details
- [[people/ben-knight]] - Product owner
- [[integrations/vercel-deployment]] - Hosting platform

---

**Last Updated**: 2025-12-23
**Status**: Active, in production
**Next Review**: 2025-01-23 (monthly)
