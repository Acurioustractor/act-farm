# Deployment Workflow

## Purpose
How to safely deploy changes to the ACT Farm website from local development to live production.

---

## Quick Reference

```bash
# Check what will be deployed
./scripts/status.sh

# Deploy to production
./scripts/deploy.sh

# Monitor after deployment
./scripts/monitor.sh
```

---

## Full Deployment Process

### Prerequisites
- Changes tested locally (`npm run dev`)
- Build successful (`npm run build`)
- Code committed to Git
- Vercel CLI authenticated

### Step-by-Step

**1. Make Changes Locally**
```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"

# Edit files (pages, components, data, etc.)
code app/activities/page.tsx

# Test changes
npm run dev
# Visit http://localhost:3000
```

**2. Verify Build**
```bash
npm run build

# Check for errors:
# - TypeScript errors
# - Missing imports
# - Build failures
```

**3. Check Status**
```bash
./scripts/status.sh

# Shows:
# - Git status (uncommitted changes)
# - Recent deployments
# - Build status
# - Available commands
```

**4. Deploy**
```bash
./scripts/deploy.sh

# Script will:
# 1. Build project (fail fast if errors)
# 2. Show uncommitted changes
# 3. Prompt for commit message
# 4. Commit to Git
# 5. Push to GitHub
# 6. Ask: Preview or Production?
# 7. Deploy to Vercel
# 8. Show deployment URL
# 9. Offer to open in browser
```

**5. Verify Deployment**
```bash
# Automated health check
./scripts/monitor.sh

# Manual verification
open https://act-farm.vercel.app

# Check specific pages:
# - Homepage
# - /map (interactive map)
# - /activities
# - /junes-patch
# - /connect (contact form)
```

**6. Check Logs (if issues)**
```bash
# View recent logs
vercel logs --prod --since 1h

# Follow logs in real-time
vercel logs --prod --follow

# Check for errors
vercel logs --prod | grep -i error
```

---

## Deployment Scenarios

### Scenario 1: Content Update (Low Risk)

**What**: Update text, images, or simple content
**Risk**: Low
**Process**: Fast-track

```bash
# 1. Edit content
code app/about/page.tsx

# 2. Test locally
npm run dev

# 3. Deploy directly
./scripts/deploy.sh
# Choose option 2 (Production)

# 4. Verify
./scripts/monitor.sh
```

**Time**: 5-10 minutes

### Scenario 2: New Feature (Medium Risk)

**What**: Add new component, page, or functionality
**Risk**: Medium
**Process**: Preview first

```bash
# 1. Create feature branch
git checkout -b feature/new-workshop-page

# 2. Develop and test
npm run dev
npm run build

# 3. Deploy preview
vercel
# Get preview URL: https://act-farm-xyz.vercel.app

# 4. Test preview thoroughly
# Share with team if needed

# 5. Merge to main
git checkout main
git merge feature/new-workshop-page

# 6. Deploy to production
./scripts/deploy.sh
```

**Time**: 30-60 minutes

### Scenario 3: Critical Fix (High Priority)

**What**: Fix broken link, critical bug, site down
**Risk**: High (production is broken)
**Process**: Hotfix

```bash
# 1. Create hotfix branch
git checkout -b hotfix/critical-bug

# 2. Make minimal fix
code app/page.tsx

# 3. Test quickly
npm run build

# 4. Deploy immediately
./scripts/deploy.sh
# Choose option 2 (Production)

# 5. Verify fix
./scripts/monitor.sh

# 6. Document what happened
# Add to wiki/decisions/hotfixes.md
```

**Time**: 10-20 minutes

### Scenario 4: Map Update (Special Case)

**What**: Add/update location on interactive map
**Risk**: Low
**Process**: Use admin tool

```bash
# 1. Go to admin tool
open https://act-farm.vercel.app/map/admin

# 2. Click on drone photo where location is

# 3. Copy generated code

# 4. Paste into farmData.ts
code lib/map/farmData.ts
# Add new location object

# 5. Deploy
./scripts/deploy.sh

# 6. Verify on map
open https://act-farm.vercel.app/map
```

**Time**: 10-15 minutes

---

## Rollback Procedure

### When to Rollback
- New deployment breaks critical functionality
- Performance degradation
- Build errors on production
- User-reported issues with new version

### How to Rollback

**Option 1: Via Vercel Dashboard**
```
1. Go to https://vercel.com/dashboard
2. Select act-farm project
3. Click "Deployments"
4. Find previous working deployment
5. Click "⋯" → "Promote to Production"
6. Confirm
```

**Option 2: Via CLI**
```bash
# List recent deployments
vercel ls --prod

# Inspect deployment before rollback
vercel inspect <deployment-url>

# Rollback to previous
vercel rollback <previous-deployment-url> --prod

# Verify
./scripts/monitor.sh
```

**Option 3: Git Revert + Redeploy**
```bash
# Revert the commit
git revert HEAD
git push origin main

# Vercel auto-deploys the revert
# Or manually:
./scripts/deploy.sh
```

**Time**: 2-5 minutes

---

## Automated Deployments

### GitHub → Vercel Auto-Deploy

Every push to `main` branch triggers automatic deployment:

```bash
# Local changes
git add .
git commit -m "feat: update content"
git push origin main

# Vercel automatically:
# 1. Detects push to main
# 2. Pulls code
# 3. Runs npm install
# 4. Runs npm run build
# 5. Deploys to production
# 6. Updates https://act-farm.vercel.app
```

**How to disable** (if needed):
```bash
vercel --no-auto-deploy
```

**How to re-enable**:
```bash
vercel env add VERCEL_GIT_COMMIT_REF main
```

---

## Pre-Deployment Checklist

Before every production deployment:

- [ ] Changes tested locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] No TypeScript errors (`npx tsc --noEmit`)
- [ ] No console errors in browser
- [ ] Mobile responsiveness checked (Chrome DevTools)
- [ ] All new pages/features work
- [ ] External links tested (The Harvest)
- [ ] Images load correctly
- [ ] Map functionality intact (if changed)
- [ ] Contact form renders (if changed)

---

## Post-Deployment Checklist

After production deployment:

- [ ] Run monitoring script (`./scripts/monitor.sh`)
- [ ] Check all critical pages load (homepage, map, connect)
- [ ] Verify new content/features visible
- [ ] Test on mobile device (actual phone, not just DevTools)
- [ ] Check Vercel dashboard for errors
- [ ] Review deployment logs (`vercel logs --prod --since 5m`)
- [ ] Monitor for 10-15 minutes
- [ ] Document deployment in changelog (if major change)

---

## Deployment Schedule

### Recommended Timing

**Best Times to Deploy**:
- Tuesday-Thursday, 10am-4pm (low traffic, working hours for fixes)
- After testing on preview deployment
- When team is available to monitor

**Avoid**:
- Friday evenings (can't fix issues over weekend)
- Monday mornings (high traffic, team ramping up)
- Late nights (no one to monitor)
- During known high-traffic events

**Emergency Deployments**: Any time (critical fixes)

---

## Monitoring After Deployment

### First 10 Minutes
```bash
# Run health check
./scripts/monitor.sh

# Watch logs
vercel logs --prod --follow
```

### First Hour
- Check Vercel dashboard for errors
- Monitor traffic for anomalies
- Test critical user flows:
  - Homepage → Map → Location details
  - Homepage → Activities → June's Patch
  - Connect → Contact form

### First Day
- Review analytics (traffic, bounces)
- Check for user-reported issues
- Monitor error rates
- Review Core Web Vitals

---

## Deployment Metrics

### Track These Metrics
- **Build Time**: Target <60 seconds
- **Deployment Time**: Target <2 minutes (total)
- **Error Rate**: Target 0% (no build/deploy errors)
- **Rollback Rate**: Target <5% (successful deployments)
- **Time to Recovery**: Target <5 minutes (if rollback needed)

### Where to Find Metrics
- **Vercel Dashboard**: Deployment history, build times
- **CLI**: `vercel ls --prod` (recent deployments)
- **Monitoring Script**: `./scripts/monitor.sh` (health status)
- **GitHub**: Commit history, branch activity

---

## Troubleshooting

### Build Fails Locally

```bash
# Clear build cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Build again
npm run build

# Check specific errors
npx tsc --noEmit
```

### Build Fails on Vercel

```bash
# View build logs
vercel logs <deployment-url>

# Check environment variables
vercel env ls

# Redeploy
vercel --prod --force
```

### Site Down After Deployment

```bash
# Immediate rollback
vercel rollback <previous-url> --prod

# Check logs for errors
vercel logs --prod --since 5m

# Test previous deployment URL
curl -I <previous-deployment-url>
```

### Changes Not Visible

```bash
# Check if deployment succeeded
vercel ls --prod

# Clear browser cache
# Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Check deployment URL vs production URL
vercel ls --prod | head -3

# Verify correct branch deployed
git branch --show-current
```

---

## Team Handoff

### If Someone Else Needs to Deploy

**Send them**:
1. This wiki page (deployment workflow)
2. `.claude/skills/cli-automation.md` (CLI commands)
3. QUICK_START.md (getting started)
4. Access to:
   - GitHub repository (Acurioustractor/act-farm)
   - Vercel project (via team invite)

**They need**:
- Node.js installed
- Git configured
- GitHub CLI (`gh`) authenticated
- Vercel CLI (`vercel`) authenticated

**One-time setup**:
```bash
# Clone repository
git clone https://github.com/Acurioustractor/act-farm.git
cd act-farm

# Install dependencies
npm install

# Login to Vercel
vercel login

# Link to project
vercel link

# Ready to deploy!
./scripts/deploy.sh
```

---

## Related Documentation
- [[processes/content-update-workflow]] - How to update page content
- [[processes/map-location-workflow]] - How to add/update map pins
- [[technical/build-pipeline]] - Technical deployment details
- [[decisions/deployment-strategy]] - Why we chose this approach

---

**Last Updated**: 2025-12-23
**Owner**: ACT Team
**Review Frequency**: Monthly
