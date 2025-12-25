# Decision: Interactive Drone Photo Map

## Context
Need to showcase 150 acres of Black Cockatoo Valley to potential residents, partners, and funders without requiring physical visits.

## Decision
Build interactive map with clickable location pins overlaid on actual drone photography, based on PICC Station pattern.

**Date**: 2025-12-23
**Deciders**: Ben Knight, Claude
**Status**: Implemented & Live

---

## Problem Statement

### User Needs
- Researchers want to understand land layout before committing to residency
- Conservation partners need to see habitat restoration progress
- Funders require visual evidence of work
- Healthcare workers (June's Patch) want to "feel" the space
- General visitors can't always travel to Witta, Queensland

### Constraints
- Can't build expensive custom interactive solution
- Need non-technical team members to update pins/content
- Must work on mobile (many users on phones)
- Should show spatial relationships (not just photo grid)
- Needs to scale as we develop more areas

---

## Options Considered

### Option 1: Static Photo Gallery
**Pros**:
- Simple to implement
- Fast to load
- Easy to update

**Cons**:
- No spatial context
- Doesn't show relationships between areas
- Boring, passive experience
- Hard to show scale/distances
- Can't layer (before/after, site plans)

**Verdict**: ❌ Rejected - Doesn't meet "exploratory" goal

### Option 2: Google Maps Embed
**Pros**:
- Free
- Familiar interface
- Includes satellite view

**Cons**:
- Satellite imagery outdated
- Can't control imagery/layers
- Limited customization
- Doesn't show our specific restoration work
- Feels generic, not unique to ACT

**Verdict**: ❌ Rejected - Not distinctive enough

### Option 3: Custom 3D Virtual Tour
**Pros**:
- Immersive experience
- Can show interior spaces
- "Wow" factor

**Cons**:
- Expensive ($5K-15K to build)
- Slow to load
- Hard to update
- Overkill for outdoor land
- Not mobile-friendly

**Verdict**: ❌ Rejected - Too expensive/complex

### Option 4: Interactive Drone Photo Map ✅
**Pros**:
- Uses our actual drone photography
- Shows real current state
- Clickable pins provide context
- Can update without rebuilding
- Scales across devices (percentage positioning)
- Can layer (before/after, plans, habitat zones)
- Admin tool for non-technical updates
- Proven pattern exists (PICC Station)

**Cons**:
- More complex than static gallery
- Requires drone photo at specific resolution (1920×1440)
- Need admin tool for positioning

**Verdict**: ✅ Chosen - Best balance of impact, cost, maintainability

---

## Implementation Details

### Technical Approach
- Reuse PICC Station interactive map pattern
- Percentage-based positioning (x: 0-100%, y: 0-100%)
- Fixed aspect ratio (1920:1440) for all layers
- TypeScript data structure for locations
- Next.js Image component for optimization
- Responsive sidebar for location details

### Data Structure
```typescript
{
  id: 'location-id',
  x: 35.5,  // Percentage from left
  y: 42.0,  // Percentage from top
  title: 'Location Name',
  type: 'garden' | 'building' | 'nature' | 'habitat' | 'activity' | 'infrastructure',
  description: 'Short description',
  overview: 'Longer overview',
  images: [...],
  videos: [...],
  activities: [...],
  habitat: {...},
  status: 'existing' | 'in-development' | 'planned'
}
```

### Admin Tool
- `/map/admin` route
- Click on drone photo to get coordinates
- Auto-generates location code
- Copy-paste into `lib/map/farmData.ts`
- No code knowledge required

---

## Alternatives & Trade-offs

### Why Not Build Custom from Scratch?
- **Time**: PICC Station pattern saves 10-15 hours
- **Risk**: Proven pattern reduces bugs
- **Maintenance**: Well-documented approach
- **Learning**: Pattern is understood by team

**Trade-off**: Less "unique" but more reliable

### Why Percentage Positioning vs Pixel Coordinates?
- **Responsive**: Works on any screen size
- **Precise**: Stays accurate across all layers
- **Simple**: No complex math for transformations

**Trade-off**: Requires all images same aspect ratio (not a real constraint)

### Why Admin Tool vs Direct Code Editing?
- **Accessibility**: Non-developers can update
- **Accuracy**: Click is more precise than guessing
- **Speed**: Faster than trial-and-error in code

**Trade-off**: Another page to maintain (minimal)

---

## Success Metrics

### Quantitative
- **Engagement**: 40%+ of visitors click on map pins
- **Depth**: Average 2.5+ locations viewed per session
- **Mobile**: Works on 95%+ of mobile devices
- **Performance**: Map page loads in <3s

### Qualitative
- "I feel like I've visited the farm"
- "Now I understand the layout"
- "The habitat zones make sense now"
- "I can see where my residency would be"

### Business
- Residency inquiries mention map ("I saw on the map...")
- Fewer "can you send photos?" requests
- Partners reference map in conversations
- Funders use map screenshots in reports

---

## Risks & Mitigations

### Risk: Drone Photo Becomes Outdated
**Likelihood**: High (land changes as we restore)
**Impact**: Medium (confusion about current state)
**Mitigation**:
- Schedule annual drone shoot
- Add "last updated" date to map
- Use layers to show before/after
- Update descriptions as changes happen

### Risk: Too Many Pins (Cluttered)
**Likelihood**: Medium (as we develop)
**Impact**: Low (usability suffers)
**Mitigation**:
- Limit to 12-15 key locations
- Add filtering by type (future)
- Cluster pins when zoomed out (future)
- Prioritize most important locations

### Risk: Admin Tool Misused
**Likelihood**: Low (small team)
**Impact**: Low (easy to revert)
**Mitigation**:
- Git history preserves all changes
- Deployment process requires review
- Documentation explains correct usage
- Backup farmData.ts before edits

### Risk: Doesn't Work on Old Devices
**Likelihood**: Low (modern browsers)
**Impact**: Medium (some users excluded)
**Mitigation**:
- Use standard web technologies (no bleeding edge)
- Test on variety of devices
- Graceful degradation (static image fallback?)
- Analytics track browser compatibility

---

## Lessons Learned

### What Worked Well
- **Pattern Reuse**: PICC Station pattern saved huge time
- **Percentage Positioning**: Zero issues across devices
- **Admin Tool**: Team loves click-to-position
- **Layer Support**: Even though we only use 1 layer now, having 4 slots future-proofs

### What Was Challenging
- **Coordinate Precision**: Getting exact x/y values by hand
  - **Solved**: Built admin tool
- **Image Resolution**: Understanding 1920×1440 requirement
  - **Solved**: Documented clearly in MAP_SETUP_GUIDE.md
- **Layer Naming**: What to call different views
  - **Solved**: Current/Before/Site Plan/Habitat Zones

### What We'd Do Differently Next Time
- Create all 4 drone layers during initial photo shoot (before/after/plans)
- Position pins during map build (not after)
- Add before/after slider from day 1 (now on roadmap)
- Consider 360° photos for immersion (future enhancement)

---

## References

### Pattern Source
- **PICC Station Map**: `/Users/benknight/Code/PICC Station Site Plan/picc-station-map/`
- **Component**: `components/InteractiveMap.tsx`
- **Data Structure**: `lib/siteData.ts`
- **Admin Tool**: `app/admin/pins/page.tsx`

### Similar Examples
- National Parks interactive trail maps
- Real estate virtual property tours
- University campus maps
- Museum floor plans

### Documentation
- [[wiki/technical/interactive-map-architecture]]
- [[wiki/processes/map-location-workflow]]
- `MAP_SETUP_GUIDE.md` in project root

---

## Future Enhancements

### Planned
- [ ] Add before/after comparison slider
- [ ] Create habitat zone overlay layer
- [ ] Add site plan architectural drawing layer
- [ ] Implement search/filter locations by type
- [ ] Add distance measurements between locations
- [ ] Create printable PDF map version

### Considered (Lower Priority)
- 360° photo viewers for key locations
- Video tours embedded in location details
- Seasonal imagery (show changes over year)
- User-contributed photos (future community feature)
- AR mode (view on phone while on land)

---

## Impact

### Immediate
- Users can explore farm remotely
- Reduces "what's where" questions
- Showcases conservation work visually
- Differentiates from other farm websites

### Long-term
- Documents restoration progress over time (via layers)
- Supports funding applications (visual evidence)
- Enables community co-design (point and discuss)
- Template for other ACT properties

---

## Related Decisions
- [[decisions/conservation-first-messaging]] - Why transparency matters
- [[decisions/dual-site-strategy]] - BCV vs The Harvest
- [[decisions/premium-pricing-transparency]] - Business model alignment
- [[technical/percentage-positioning-system]] - Why this coordinate approach

---

**Decision Made**: 2025-12-23
**Implemented**: 2025-12-23
**Review Date**: 2026-01-23 (after 1 month of user feedback)
**Status**: Active in production
