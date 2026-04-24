# Design System — ACT Farm

> **Inherits identity from** `act-global-infrastructure/.claude/skills/act-brand-alignment/references/brand-core.md`. **Visual cluster: Editorial Warmth — uses parent visual unchanged.** ACT Farm is the place expression of the act.place narrative; visual continuity with the parent makes the relationship legible to anyone arriving here from act.place. See `act-global-infrastructure/wiki/decisions/act-brand-alignment-map.md`.

## Product Context

- **What this is:** Site for ACT Farm on Jinibara Country. Land care, learning, art-making. Home base.
- **Who it's for:** Visitors, residency applicants, workshop attendees, neighbours, partners, funders curious about the place.
- **Project type:** Editorial / portfolio with booking + program surfaces. Sister to The Harvest Witta.

## Inheritance from parent

This site uses **parent visual unchanged.** Specifically:

- **Type:** Fraunces (display) + Source Serif 4 (body) + Work Sans (UI labels) + Geist Mono (data). Same as `act-regenerative-studio/DESIGN.md`.
- **Color:** Forest green `#2D5A3D` (primary accent) + Clay `#C4845C` (secondary) + Warm white `#FAFAF7` (background) + Dark `#1A1F1A` (dark sections). Same.
- **Components:** Where possible, lift component patterns from `act-regenerative-studio/src/components/design-system/` (DocHero, SectionHeader, HairlineGrid, LeadVoice, PrinciplesList, DarkCTA, WarmCard).
- **Two design languages:** Bold Documentary (single-narrative project pages, residency stories, hero gallery) + Warm Editorial (program listings, calendar, contact, governance).

## What's specific to Farm (not in parent)

- **Place-first naming:** Always lead with "on Jinibara Country" before the postal address. Indigenous place name is primary; colonial in brackets.
- **Land-practice content:** When showing land-care work, link to `.claude/skills/act-brand-alignment/references/land-practice.md` for the protocols around imagery + storytelling.
- **Calendar / seasonal:** Farm content should track seasonal rhythm (planting, harvest, fire, rain). Hero imagery rotates with season; the site should never feel "static-summer" in winter or vice versa.

## Voice (inherits parent rules)

- All ACT voice rules from `brand-core.md` + `writing-voice.md` apply unchanged.
- **Farm-specific**: never write "facility" or "venue" — write "the place" or "the farm." Land verbs over noun structures: "we plant" beats "planting takes place."

## Decision rules

| Question | Answer | Treatment |
|---|---|---|
| Is this the homepage / landing? | Yes | Bold Documentary, hero video or large still of the land |
| Is this a residency / program page? | Yes | Bold Documentary, single-narrative |
| Is this a calendar / list / governance page? | Yes | Warm Editorial |
| Is this an artist or resident profile? | Yes | Bold Documentary if standalone; Warm Editorial card if list view |

## Open

- Site doesn't yet exist as a separate web property. Decision: build standalone or extend `act.place/farm`? Default recommendation: extend act.place's existing `/farm` route. Standalone justified only if Farm grows enough programming to warrant its own brand surface.
- If standalone: target deploy at `act-farm.vercel.app` (already provisioned per project-codes.json `production_url`).

## Backlinks

- [[../act-global-infrastructure/wiki/decisions/act-brand-alignment-map|Brand alignment map]]
- [[../act-regenerative-studio/DESIGN|Parent visual system]]
- [[../act-global-infrastructure/wiki/projects/act-farm/act-farm|Wiki: ACT Farm]]
