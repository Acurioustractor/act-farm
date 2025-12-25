# ACT Farm Website Wiki

## What This Is

A **real** knowledge base that captures:
- **Why decisions were made** (not just what was built)
- **How things work** (processes that actually get used)
- **Who's involved** (people, their roles, their context)
- **What we learned** (honest lessons, not just successes)
- **How it connects** (to other ACT projects, partners, patterns)

This wiki **documents the actual work**, not corporate fluff.

---

## Wiki Structure

```
wiki/
├── projects/          # What we're building
├── people/            # Who's involved (roles, context, handoffs)
├── processes/         # How we work (workflows that actually happen)
├── decisions/         # Why we chose what we chose
├── technical/         # How it's built (architecture, patterns)
├── integrations/      # How it connects to other systems
└── README.md          # This file
```

---

## Start Here

### New to the Project?
1. Read [[projects/act-farm-website]] - Complete project context
2. Read [[processes/deployment-workflow]] - How to deploy changes
3. Scan [[decisions/why-interactive-map]] - Understand key choices

### Need to Do Something?
- **Deploy changes**: [[processes/deployment-workflow]]
- **Update map**: [[processes/map-location-workflow]] (to be created)
- **Fix an issue**: [[technical/troubleshooting-guide]] (to be created)
- **Add content**: [[processes/content-update-workflow]] (to be created)

### Want Context?
- **Why this exists**: [[projects/act-farm-website#why-this-exists]]
- **How it makes money**: [[projects/act-farm-website#costs--sustainability]]
- **How it fits ACT**: [[projects/act-farm-website#strategic-alignment]]
- **What we learned**: [[decisions/why-interactive-map#lessons-learned]]

---

## Current Pages

### Projects
- **[[projects/act-farm-website]]** - Main project page (⭐ START HERE)
  - Overview, why it exists, what we built
  - Key decisions, metrics, team
  - Costs, limitations, roadmap

### Processes
- **[[processes/deployment-workflow]]** - How to deploy to production
  - Step-by-step deployment
  - Scenarios (content update, new feature, hotfix)
  - Rollback procedures
  - Checklists and troubleshooting

### Decisions
- **[[decisions/why-interactive-map]]** - Why we built the map this way
  - Problem statement, options considered
  - Trade-offs, risks, success metrics
  - Lessons learned, future enhancements

### Technical
- (To be created as needed)

### People
- (To be created as needed)

### Integrations
- (To be created as needed)

---

## How to Use This Wiki

### For Different Roles

**If you're a developer**:
- Read technical/ for architecture
- Read processes/ for workflows
- Read decisions/ for "why" context

**If you're editing content**:
- Read processes/content-update-workflow (to be created)
- Read projects/act-farm-website for context
- Use deployment-workflow to publish

**If you're a stakeholder**:
- Read projects/act-farm-website for overview
- Read decisions/ for strategic choices
- Check metrics in projects/act-farm-website#metrics

**If you're new to the team**:
- Read projects/act-farm-website (30 min)
- Read processes/deployment-workflow (15 min)
- Try deploying a small change (30 min)
- You're ready to contribute!

---

## Wiki Philosophy

### What We Document

✅ **Yes - Document This**:
- Decisions and why they were made
- Processes that actually get used
- Failures and what we learned
- Connections to other ACT work
- Context for future team members
- Trade-offs and alternatives considered

❌ **No - Don't Waste Time On**:
- Generic best practices (link to external docs instead)
- Corporate mission statements (we have real work to do)
- Theoretically perfect processes (document what actually happens)
- Documenting for documentation's sake
- Stuff that's already in code comments

### How We Write

**Good wiki page**:
- Starts with "Why this matters"
- Explains decisions, not just facts
- Shows what we tried that didn't work
- Links to related context
- Has specific examples
- Updated when things change

**Bad wiki page**:
- Lists features without context
- Hides failures
- Written once, never updated
- No links to related work
- Generic platitudes
- Cargo-culted from templates

### How We Maintain

**Not a graveyard**:
- Pages have "Last Updated" dates
- Outdated pages get archived or updated
- Dead links are fixed or removed
- Review frequency noted on each page

**Living documentation**:
- Update when processes change
- Add lessons as we learn them
- Link to new related work
- Mark decisions as "superseded" if changed

---

## Examples of Good Wiki Companies

### Basecamp (37signals)
- "How we work" is public and honest
- Explains why, not just what
- Updates reflect real changes
- Short, scannable pages

### GitLab Handbook
- Everything documented
- Single source of truth
- Processes link to examples
- Transparent decision-making

### Oxide Computer Company Blog
- Deep technical context
- Explains trade-offs
- Shows what didn't work
- Connects to broader goals

**We're aiming for this level**: Honest, useful, connected documentation that respects the reader's intelligence.

---

## Creating New Pages

### Page Template

```markdown
# [Page Title]

## Purpose
One sentence: Why this page exists

## Context
What you need to know to understand this

## [Main Content]
The actual information

## Related Pages
- [[category/related-page-1]]
- [[category/related-page-2]]

---

**Last Updated**: YYYY-MM-DD
**Owner**: Name/Team
**Review Frequency**: Weekly/Monthly/Quarterly
```

### Naming Conventions

**Files**: `lowercase-with-dashes.md`
- ✅ `deployment-workflow.md`
- ❌ `Deployment_Workflow.md`

**Links**: `[[category/page-name]]`
- ✅ `[[projects/act-farm-website]]`
- ❌ `[ACT Farm](../projects/act-farm-website.md)`

**Categories**:
- `projects/` - Things we're building
- `processes/` - How we do things
- `decisions/` - Why we chose things
- `technical/` - How things work
- `people/` - Who does what
- `integrations/` - How systems connect

---

## Next Pages to Create

### High Priority
- [ ] `processes/content-update-workflow.md` - How to update page text
- [ ] `processes/map-location-workflow.md` - How to add/update map pins
- [ ] `technical/interactive-map-architecture.md` - How the map works
- [ ] `technical/troubleshooting-guide.md` - Common issues and fixes
- [ ] `people/ben-knight.md` - Product owner context
- [ ] `integrations/vercel-deployment.md` - How Vercel works

### Medium Priority
- [ ] `decisions/conservation-first-messaging.md` - Content strategy
- [ ] `decisions/premium-pricing-transparency.md` - Business model
- [ ] `decisions/dual-site-strategy.md` - BCV vs The Harvest
- [ ] `technical/percentage-positioning-system.md` - Map coordinates
- [ ] `integrations/github-workflow.md` - Git/GitHub process
- [ ] `processes/monitoring-routine.md` - Daily health checks

### Future
- [ ] `people/wishlist-partnership.md` - June's Patch partners
- [ ] `people/usc-research-collaboration.md` - Research partners
- [ ] `integrations/ghl-setup.md` - GoHighLevel (when implemented)
- [ ] `technical/booking-system.md` - Future booking system
- [ ] `decisions/why-nextjs.md` - Framework choice
- [ ] `processes/annual-review.md` - Yearly assessment

---

## Contributing to the Wiki

### When to Add a Page

**Add a page when**:
- You make a significant decision (why did we choose this?)
- You establish a new process (how do we do this?)
- You discover a pattern (this keeps coming up)
- You solve a tricky problem (so others don't repeat it)
- You join the team (who are you, what's your context?)

**Don't add a page for**:
- One-off tasks (put in project management tool)
- Temporary workarounds (fix the root cause)
- Personal notes (keep in personal notes)
- Stuff that changes daily (belongs in code, not wiki)

### How to Add a Page

1. **Choose category** (projects/processes/decisions/technical/people/integrations)
2. **Create file**: `wiki/category/page-name.md`
3. **Use template** (see above)
4. **Link from relevant pages**
5. **Update this README** (add to page list)
6. **Commit with clear message**: `docs: add [page-name] to wiki`

---

## Wiki vs Other Documentation

### Wiki (This Directory)
**Purpose**: Context, decisions, processes, people
**Audience**: Team members, future contributors
**Style**: Narrative, explanatory, honest
**Examples**: Why we chose map, deployment process, team roles

### Technical Docs (`.claude/skills/`, `README.md`)
**Purpose**: How to use tools, commands, APIs
**Audience**: Developers, operators
**Style**: Reference, step-by-step, technical
**Examples**: CLI commands, API references, configuration

### User Guides (`MAP_SETUP_GUIDE.md`, `QUICK_START.md`)
**Purpose**: How to accomplish specific tasks
**Audience**: Content editors, new users
**Style**: Tutorial, task-oriented
**Examples**: Add map location, deploy changes, update content

**All three are necessary. Use the right one for the job.**

---

## Related Documentation

### In This Repository
- `README.md` - Project overview and getting started
- `MAP_SETUP_GUIDE.md` - Interactive map feature guide
- `QUICK_START.md` - First steps for new users
- `DEPLOYMENT_GUIDE.md` - Deployment instructions
- `.claude/skills/` - CLI automation and workflows

### External
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation
- [Vercel Docs](https://vercel.com/docs) - Hosting platform
- [PICC Station](file:///Users/benknight/Code/PICC%20Station%20Site%20Plan) - Map pattern source

---

## Feedback

**This wiki should be useful, not perfect.**

If you find:
- Outdated information → Update it
- Missing context → Add it
- Confusing explanation → Rewrite it
- Dead link → Fix or remove it
- Needed page → Create it

**The wiki serves us, not the other way around.**

---

**Last Updated**: 2025-12-23
**Maintainer**: ACT Team
**Status**: Active, growing
