---
date: 2026-04-14
session_id: ae098763-7678-4b94-a052-744b02d09b9b
branch: main
status: SHIPPED — Phase 4 complete, pushed to origin
predecessor: 2026-04-14-farm-experiences-roadmap.md
---

# ACT Farm — Phase 4 Shipped

Phase 4 (unified Experiences + Case Studies) is complete and pushed.
Both repos at origin/main HEAD. Outstanding work is environmental
setup + content recruitment, not code.

## Head commits (origin/main)

- `act-farm` → `f58e82a` (Open Invitations strip)
- `act-global-infrastructure` → `32c1d1e` (June's Patch case study)

## What landed this phase

**act-global-infrastructure (wiki):**
- `wiki/projects/act-farm/experiences/` — 13 experience pages + README + template
- `wiki/projects/act-farm/case-studies/` — 6 published case studies + template
- Updates in place: `community-capital.md`, `the-harvest/the-harvest.md`
- New experience added mid-phase from the Radical Scoops case study:
  `industry-residency-at-the-harvest.md` (sibling to Artist Residency at BCV)

**act-farm (site):**
- `lib/experiences/{types,themes,catalog}.ts`, `lib/case-studies/catalog.ts`
  — typed mirrors citing wikiPath as source of truth
- `/experiences` hub + `/experiences/[slug]` detail (12 SSG; `stays` 307→`/stay`)
- `/case-studies` index + `/case-studies/[slug]` (6 SSG, 43 pages total)
- `/api/inquiries` — category → GHL pipeline routing; log-always + 202 fallback
- Components: InquiryForm, ExperienceCard, CaseStudyCard, ThemeBadge,
  FirstCaseStudyInvite, CaseStudyStrip, OpenInvitationsStrip
- Homepage flow now: Hero → Map → Use the Farm → **Open Invitations**
  → Stories → **Case Studies** → Contact

**Phase 4c flagship case studies (new):**
1. DAD.LAB — inaugural cohort at BCV, 2025 (20 dads, HAC framework, 100% return)
2. Radical Scoops at The Harvest — RAA Industry Residency (2nd project in pilot)
3. June's Patch Year One — JCF partnership, Oct 2024–Sep 2025

**Live open invitations (homepage strip + per-experience CTA):**
- Artist Residency at BCV → "Be our first placed artist"
- Empathy Ledger Storytelling Residency → "Be our first storytelling resident"

## Outstanding — env setup (user, not code)

- Fill real GHL creds in `.env.local` (`GHL_API_KEY`, `GHL_LOCATION_ID` still `xxxx…`)
- Create 7 GHL pipelines + set 21 env vars:
  - Stays: `GHL_STAY_PIPELINE_ID`, `GHL_STAY_INITIAL_STAGE_ID`, `GHL_STAY_BOOKING_WORKFLOW_ID`
  - Experiences: `GHL_{RETREATS,RESIDENCIES,SESSIONS,HEALTH,MAKERS,HARVEST}_{PIPELINE_ID,INITIAL_STAGE_ID,WORKFLOW_ID}`
- **Rotate** the `gho_...` GitHub token (was visible in earlier tool output)
- **Rotate** ANAT Blogs admin creds (exposed plain-text on the Radical Scoops
  Notion page: https://www.notion.so/acurioustractor/Regional-Arts-Australia-RAA-x-Radical-Scoops-265ebcf981cf802bbb31fe479e378f01)
- Domain DNS A records (per prior handoff)
- Author first BCV stories in Empathy Ledger → tag `act-farm` / ACT-BV

## Future work when bones arrive

- Case study: first placed artist at BCV (once recruited via the live invitation)
- Case study: first EL storyteller (once recruited)
- Case study: Community Capital Phase 2 / Catalysing Impact (signed 17 Mar 2026)
- Case study: Radical Scoops Stage One pop-ups (7 & 14 March 2026)
- Case study: Radical Scoops Capacity Lab Toolkit (post-Jul 2026)
- Longitudinal: Harvest Pairings monthly dinners (after first year)

## Possible site improvements (defer until needed)

- Theme filters on `/case-studies` (only if count grows >10)
- `publishedAt` field on CaseStudy + auto-sort newest-first (currently manual)
- `/connect` page blurb referencing open invitations as a way-to-work-with-us
- Dedicated `/open-invitations` page with brief attachments / recruitment detail

## How to pick this up next session

Read `~/.claude/projects/-Users-benknight-Code-act-farm/memory/phase4_experiences_plan.md`
(auto-loaded via MEMORY.md) plus this handoff. Both are kept in sync.
Nothing in flight — safe to `/clear` and start a new piece of work.
