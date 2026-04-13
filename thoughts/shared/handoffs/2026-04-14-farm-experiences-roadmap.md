---
date: 2026-04-14
session_id: ae098763-7678-4b94-a052-744b02d09b9b
branch: main
status: in-progress — 3 of 4 phases shipped, Phase 4 planned
---

# ACT Farm — Experiences Roadmap & Handoff

## What shipped this session (on `main`)

Three commits, all feature-complete, all typecheck-clean, all runtime-verified:

### 1. `36ef177` — Empathy Ledger Content Hub wiring
- `lib/empathy-ledger/client.ts` — typed fetch client for stories, articles, galleries, media; filters by `project_code=ACT-BV`; graceful empty states; cultural sensitivity filter (respects `elderApproved`, `culturalTags`, `consentObtained`)
- `/gallery` — **32 real BCV photos rendering live** from EL (`June's Patch`, `June C Board Meeting`, etc.)
- `/stories` + `/stories/[id]` — ready, empty state until BCV-tagged stories exist in EL
- `<StoriesStrip />` on homepage — renders nothing while empty, auto-populates (300s ISR)
- `next.config.ts` — allows EL Supabase CDN domain for `next/image`
- Env: `NEXT_PUBLIC_EL_API_URL=https://empathy-ledger-v2.vercel.app`, `NEXT_PUBLIC_EL_ACT_PROJECT_CODE=ACT-BV`

### 2. `b7330ee` — Four new editorial pages
- `/lcaa` — Listen → Curiosity → Action → Art, phases + at-farm application + ecosystem cross-refs
- `/the-harvest` — sister project, Nine Movements from NM's Compendium, Eat/Gather/Make/Grow, Barry's shed
- `/country` — Jinibara custodianship, habitat, six specific conservation commitments, "Country sets the pace"
- `/residencies` — four residency types split out from /use-the-farm

### 3. `37d9507` — Direct booking MVP
- `lib/stay/accommodations.ts` — shared accommodation data (Pink Cabin $210/n, Train Carriage $190/n, $45 cleaning, 2-night min)
- `app/stay/[id]/page.tsx` — per-cabin detail page with gallery + sticky booking panel
- `components/stay/BookingForm.tsx` — client form, live pricing, validation, success/error states
- `app/api/bookings/route.ts` — validates, `BCV-XXXXX` ref, logs server-side always, upserts GHL contact + creates opportunity + triggers workflow when env is wired; 202 Accepted (not instant confirm)
- End-to-end test: `202 {"ok":true,"bookingRef":"BCV-MNXT3FNF"}`, booking logged fully

## Environment / setup still pending (user)

1. **Rotate the `gho_...` GitHub token** in `.env.local` — was visible in early tool output this session
2. **Fill real GHL creds** (`GHL_API_KEY`, `GHL_LOCATION_ID` — currently `xxxxx…` placeholders)
3. **Create GHL "Direct Bookings" pipeline** + set `GHL_STAY_PIPELINE_ID`, `GHL_STAY_INITIAL_STAGE_ID`, `GHL_STAY_BOOKING_WORKFLOW_ID`
4. **Author first BCV stories in EL** — tag to `act-farm` project (`ACT-BV` code) → auto-flow to site

## What Phase 4 is (planned, not started)

A unified **Experiences** system that generalises the booking pattern across every way the farm can be used — plus **case studies** as social proof — all grounded in the ACT wiki as source of truth.

### Deep research already done (in this session, available via Braintrust)

1. **Wiki archaeology of farm experiences** — mapped every project in `/wiki/projects/`, every BCV experience doc, every Harvest↔Farm pairing, every cross-project gap (walks on Country = biggest gap, Artist Residency canonical page = biggest gap, Community Capital at BCV = unwritten despite Caravan being there).

2. **Community Capital deep dive** — full inventory across wiki + `thoughts/` + Xero + config:
   - Real dates: retreat was **23–25 Feb 2025** in Bowral (wiki's "Feb 2026" is a reference-date slip)
   - Facilitators: Nic (primary, $5400) + Ben (in-kind support)
   - Invoice INV-0289 ($21,780) is the most concrete primary source — line items: facilitation, candles (25 kits), caravan reno, cookbook, travel
   - "10x10" format unresolved in wiki — probably ~10 community leaders + capital holders + support ≈ 25 in the room
   - **The Caravan now lives at BCV** for 12 months ($550/mo unbilled) — physical CC↔farm link, not written up
   - Phase 1 = the retreat. Phase 2 = Catalysing Impact (signed 17 Mar 2026, up to $400K from $1M pool, QBE-funded via SIH)
   - Keep-as-is verbatim: *"ACT does not hold the capital in Community Capital. It holds the room."* / *"The gap is not a knowledge gap. It's a relationship gap."*

### The full experience catalog (13+ items across 7 categories)

**Stays** · Pink Cabin [DOC] · Train Carriage [DOC] · Future eco-cottages [GAP]
**Residencies** · Artist Residency at BCV [MAJOR GAP — most-referenced undefined] · Conservation Tech · Regenerative Practice · Creative Documentation · Community Wellbeing · Empathy Ledger Storytelling Residency [GAP]
**Retreats** · Community Capital at the Valley [GAP, brings CC home] · Corporate Innovation Retreats [GAP, priced but no writeup] · Strategic partner retreats
**Facilitated sessions** · Innovation Sessions (youth justice, AI/systems, data/evidence, storytelling) [GAP] · Facilitation for your team [GAP] · Workshop series at BCV [GAP]
**Walks** · Walks on Country at BCV [MAJOR GAP, Jinibara co-design required]
**Health** · June's Patch Healthcare Retreat [GAP as experience] · DAD.LAB at BCV [GAP] · The Confessional at BCV [GAP]
**Makers** · Goods on Country Makers' Weekend [GAP] · The Caravan at BCV [GAP as case study — lives here now]
**Harvest pairings** · CSA · Workshops (Witta vs BCV split) · Monthly Dinners at BCV [GAP]

### The plan: wiki first, site second

**Phase 4a — Wiki writeups** (act-global-infrastructure repo)

New structure:
```
wiki/projects/act-farm/experiences/
  README.md                              (catalog index)
  _template.md
  stays.md
  artist-residency.md                    ⭐ biggest gap
  walks-on-country.md                    ⭐ Jinibara co-design flag
  corporate-innovation-retreats.md
  community-capital-at-the-valley.md     ⭐ brings CC home
  empathy-ledger-storytelling-residency.md
  junes-patch-healthcare-retreat.md
  dad-lab-at-bcv.md
  innovation-sessions.md
  facilitation.md
  workshops-at-bcv.md
  makers-weekend.md
  harvest-pairings.md                    (BCV↔Harvest flow)

wiki/projects/act-farm/case-studies/
  community-capital-bowral-2025.md       ⭐ reconcile dates, cohort, outcomes
  the-caravan-at-bcv.md                  ⭐ ready to write, lives here now
  _template.md
```

Plus two update-in-place:
- `wiki/projects/community-capital.md` — fix 2025/2026 date slip; add "Phase 1 = retreat, Phase 2 = Catalysing Impact"; document Caravan-at-BCV; articulate "make candles while you talk about money" methodology
- `wiki/projects/the-harvest/the-harvest.md` — add "pairings with BCV" section

**Phase 4b — Site chassis** (act-farm repo)

```
lib/experiences/catalog.ts         (typed mirror of wiki, cites wiki paths)
app/experiences/page.tsx           (filterable hub by type/theme)
app/experiences/[slug]/page.tsx    (generic detail template)
app/case-studies/page.tsx + [slug]/page.tsx
components/experiences/InquiryForm.tsx   (generalises BookingForm — per-experience inquiryShape)
app/api/inquiries/route.ts          (generalises /api/bookings — routes by experience.category to GHL pipeline)
```

**Phase 4c — Content & polish** — write the four flagship case studies (DAD.LAB, Caravan, Walks, Artist Residency) in your voice, wire EL media into relevant pages.

## Decisions pending (user must answer in next session)

1. **Voice for wiki writeups** — first-person declarative ("we do X") or descriptive third-person ("ACT offers X")? Default to first-person for experience pages, descriptive for indexes.
2. **"Community Capital at the Valley"** — write as "this is the offering now" (Caravan is here) or "future convening we're designing"? Changes who gets pitched.
3. **Jinibara co-design flag** — for Walks on Country, propose wiki page says *"in co-design with Jinibara custodians. Not yet available for public booking."* Agree?

## Nothing is broken

- Dev server was stopped cleanly at end of session
- All three commits on `main`, pushed status: NOT YET PUSHED (intentional — user review first)
- Typecheck: clean
- All new routes verified 200 / 404 / 202 as appropriate
- 32 BCV photos rendering live from EL
