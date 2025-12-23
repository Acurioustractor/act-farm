# CLI Automation Skill - ACT Farm

## Description
Complete command-line automation for deploying, monitoring, and managing the ACT Farm website using GitHub CLI and Vercel CLI.

## ✅ Your Site is LIVE!

**Production URL**: https://act-farm.vercel.app
**GitHub**: https://github.com/Acurioustractor/act-farm
**Vercel Dashboard**: https://vercel.com/dashboard

---

## Quick Commands

### Check Status
```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"
./scripts/status.sh
```

### Deploy Changes
```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"
./scripts/deploy.sh
```

### Monitor Site Health
```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"
./scripts/monitor.sh
```

---

## Automated Scripts Created

### 1. Deploy Script (`scripts/deploy.sh`)

**What it does**:
- ✅ Builds the project
- ✅ Commits changes to Git
- ✅ Pushes to GitHub
- ✅ Deploys to Vercel (preview or production)
- ✅ Opens site in browser

**Usage**:
```bash
./scripts/deploy.sh
```

**Features**:
- Interactive prompts for commit messages
- Choice between preview and production deployment
- Automatic error checking at each step
- Extracts and displays deployment URL
- Option to open in browser automatically

### 2. Monitor Script (`scripts/monitor.sh`)

**What it does**:
- ✅ Checks all critical pages (/, /map, /about, etc.)
- ✅ Verifies drone photo loads
- ✅ Checks response times
- ✅ Reviews recent deployments
- ✅ Scans logs for errors
- ✅ Optional Lighthouse audit

**Usage**:
```bash
./scripts/monitor.sh
```

**Checks**:
- Homepage status and response time
- All 7 content pages
- Map page and admin tool
- Drone photo asset
- Recent deployment status
- Error logs (last hour)
- Performance metrics (optional)

### 3. Status Script (`scripts/status.sh`)

**What it does**:
- ✅ Shows Git status
- ✅ Lists recent deployments
- ✅ Checks build status
- ✅ Verifies dependencies
- ✅ Shows available commands

**Usage**:
```bash
./scripts/status.sh
```

---

## Common Workflows

### Workflow 1: Update Content & Deploy

```bash
# 1. Check current status
./scripts/status.sh

# 2. Make your changes
# Edit files in app/, components/, lib/, etc.

# 3. Test locally
npm run dev
# Visit http://localhost:3000

# 4. Deploy (handles git commit + push + Vercel deploy)
./scripts/deploy.sh
# Choose option 2 for production
# Script will:
#   - Build project
#   - Prompt for commit message
#   - Commit and push to GitHub
#   - Deploy to Vercel production
#   - Show you the live URL

# 5. Monitor deployment
./scripts/monitor.sh
```

### Workflow 2: Add Map Location

```bash
# 1. Go to admin tool
open https://act-farm.vercel.app/map/admin

# 2. Click on drone photo to get coordinates

# 3. Edit farmData.ts
code lib/map/farmData.ts
# Paste the generated location code

# 4. Deploy
./scripts/deploy.sh

# 5. Verify on live site
open https://act-farm.vercel.app/map
```

### Workflow 3: Quick Health Check

```bash
# Daily monitoring
./scripts/monitor.sh

# If issues found, check logs:
vercel logs --prod --since 1h

# Check specific deployment:
vercel inspect <deployment-url> --logs
```

### Workflow 4: Rollback Deployment

```bash
# 1. List recent deployments
vercel ls --prod

# 2. Inspect specific deployment
vercel inspect <deployment-url>

# 3. Rollback to previous deployment
vercel rollback <previous-deployment-url> --prod

# 4. Verify
./scripts/monitor.sh
```

---

## GitHub CLI Commands

### Repository Management

```bash
# View repository
gh repo view --web

# View repository info
gh repo view

# Edit repository settings
gh repo edit

# View issues
gh issue list

# Create issue
gh issue create --title "Bug: Map pin positioning" --body "Description here"

# View pull requests
gh pr list

# Create pull request
gh pr create --title "Add new photos" --body "Added location photos"

# View repository stats
gh repo view --json forks,stars,watchers
```

### Workflow Automation

```bash
# Run GitHub Action manually
gh workflow run deploy.yml

# View workflow runs
gh run list

# View specific run
gh run view <run-id>

# Download artifacts
gh run download <run-id>
```

---

## Vercel CLI Commands

### Deployment Commands

```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod

# Deploy with specific name
vercel --name act-farm --prod

# Deploy without prompts
vercel --yes --prod

# Deploy from specific branch
git checkout feature/new-content
vercel
```

### Project Management

```bash
# List all deployments
vercel ls

# List production deployments only
vercel ls --prod

# Remove old deployment
vercel remove <deployment-url>

# Link local directory to project
vercel link

# Pull environment variables
vercel env pull

# Add environment variable
vercel env add NEXT_PUBLIC_GA_ID
```

### Monitoring & Logs

```bash
# View recent logs
vercel logs

# View production logs
vercel logs --prod

# Follow logs in real-time
vercel logs --prod --follow

# View logs from last hour
vercel logs --prod --since 1h

# View logs for specific deployment
vercel logs <deployment-url>

# Inspect deployment
vercel inspect <deployment-url>

# View deployment details with logs
vercel inspect <deployment-url> --logs
```

### Domain Management

```bash
# List domains
vercel domains ls

# Add domain
vercel domains add farm.acurioustractor.com

# Remove domain
vercel domains rm farm.acurioustractor.com

# Verify domain
vercel domains verify farm.acurioustractor.com

# List aliases
vercel alias ls

# Set alias
vercel alias set <deployment-url> farm.acurioustractor.com
```

---

## Automated Monitoring Setup

### Option 1: Cron Job (Scheduled Checks)

```bash
# Edit crontab
crontab -e

# Add these lines:

# Daily health check at 9 AM
0 9 * * * cd /Users/benknight/Code/ACT\ Farm/act-farm && ./scripts/monitor.sh > /tmp/act-farm-monitor.log 2>&1

# Weekly Lighthouse audit on Mondays at 10 AM
0 10 * * 1 cd /Users/benknight/Code/ACT\ Farm/act-farm && lighthouse https://act-farm.vercel.app --view

# View cron logs
tail -f /tmp/act-farm-monitor.log
```

### Option 2: GitHub Actions (Automated Tests)

Create `.github/workflows/monitor.yml`:

```yaml
name: Site Health Check

on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
  workflow_dispatch:  # Manual trigger

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Check site status
        run: |
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://act-farm.vercel.app)
          if [ "$STATUS" -ne 200 ]; then
            echo "Site returned HTTP $STATUS"
            exit 1
          fi

      - name: Check map page
        run: |
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://act-farm.vercel.app/map)
          if [ "$STATUS" -ne 200 ]; then
            echo "Map page returned HTTP $STATUS"
            exit 1
          fi

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://act-farm.vercel.app
            https://act-farm.vercel.app/map
          uploadArtifacts: true
```

Deploy:
```bash
git add .github/workflows/monitor.yml
git commit -m "ci: add automated health checks"
git push origin main
```

### Option 3: UptimeRobot (External Monitoring)

```bash
# Sign up at uptimerobot.com (free)
# Add monitor:
#   - Type: HTTP(s)
#   - URL: https://act-farm.vercel.app
#   - Interval: 5 minutes
#   - Alert contacts: your email/SMS

# Features:
# - 50 monitors free
# - 5-minute checks
# - Email/SMS alerts
# - Status page
# - 90-day logs
```

---

## Performance Optimization Commands

### Analyze Bundle Size

```bash
# Build and analyze
npm run build

# View bundle analyzer (if configured)
ANALYZE=true npm run build
```

### Check Performance

```bash
# Lighthouse audit
lighthouse https://act-farm.vercel.app --view

# Lighthouse with specific categories
lighthouse https://act-farm.vercel.app --only-categories=performance,accessibility

# Lighthouse CI (multiple runs)
lhci autorun --config=lighthouserc.json

# Check Core Web Vitals
curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://act-farm.vercel.app" | jq '.lighthouseResult.categories.performance.score'
```

### Image Optimization

```bash
# Find large images
find public/images -type f -size +200k -exec ls -lh {} \;

# Optimize images (requires imagemagick)
for img in public/images/map/*.jpg; do
  convert "$img" -quality 85 -resize 1920x1440\> "$img"
done
```

---

## Troubleshooting

### Build Fails

```bash
# Clean build
rm -rf .next
npm run build

# Check TypeScript errors
npx tsc --noEmit

# Check specific file
npx tsc --noEmit app/page.tsx

# Fix linting issues
npm run lint --fix
```

### Deployment Issues

```bash
# View deployment logs
vercel logs --prod

# Inspect failed deployment
vercel inspect <deployment-url> --logs

# Redeploy
vercel --prod --force

# Clear Vercel cache
vercel env pull && vercel --prod
```

### Site Down

```bash
# Check status
curl -I https://act-farm.vercel.app

# View recent deployments
vercel ls --prod

# Rollback
vercel rollback <previous-deployment-url> --prod

# Check Vercel status
curl https://www.vercelstatus.com/api/v2/status.json
```

### Map Not Working

```bash
# Check map page
curl -I https://act-farm.vercel.app/map

# Verify drone photo
curl -I https://act-farm.vercel.app/images/map/drone-current.jpg

# Check browser console
open https://act-farm.vercel.app/map
# Open DevTools > Console

# View logs for /map route
vercel logs --prod | grep "/map"
```

---

## Best Practices

### Git Workflow

```bash
# Always pull before starting work
git pull origin main

# Create feature branch for major changes
git checkout -b feature/new-content
# Make changes
git commit -m "feat: add new content"
git push origin feature/new-content

# Create PR
gh pr create --title "Add new content" --body "Description"

# After PR merge, sync main
git checkout main
git pull origin main
```

### Deployment Strategy

```bash
# Test locally first
npm run dev

# Build to check for errors
npm run build

# Deploy preview for testing
vercel
# Test preview URL

# Deploy to production when ready
vercel --prod
```

### Monitoring Routine

```bash
# Daily: Quick check
./scripts/monitor.sh

# Weekly: Full audit
lighthouse https://act-farm.vercel.app --view
vercel logs --prod --since 7d | grep "error" | wc -l

# Monthly: Analytics review
open https://vercel.com/dashboard
# Review traffic, performance, errors
```

---

## Quick Reference Card

```bash
# STATUS
./scripts/status.sh              # Project status
vercel ls --prod                 # Recent deployments
gh repo view                     # GitHub repo info

# DEPLOY
./scripts/deploy.sh              # Automated deploy
vercel --prod                    # Manual deploy
git push origin main             # Auto-deploy via GitHub

# MONITOR
./scripts/monitor.sh             # Health check
vercel logs --prod               # View logs
lighthouse <url> --view          # Performance audit

# ROLLBACK
vercel ls --prod                 # List deployments
vercel rollback <url> --prod     # Rollback

# LOGS
vercel logs --prod               # Production logs
vercel logs --prod --follow      # Real-time logs
vercel logs --prod --since 1h    # Last hour
```

---

## Your Site Information

**Production URL**: https://act-farm.vercel.app
**Admin Tool**: https://act-farm.vercel.app/map/admin
**GitHub Repo**: https://github.com/Acurioustractor/act-farm
**Vercel Dashboard**: https://vercel.com/dashboard

**Project Path**: `/Users/benknight/Code/ACT Farm/act-farm`

**Key Pages**:
- Homepage: https://act-farm.vercel.app
- Interactive Map: https://act-farm.vercel.app/map
- About: https://act-farm.vercel.app/about
- Activities: https://act-farm.vercel.app/activities
- June's Patch: https://act-farm.vercel.app/junes-patch
- Residencies: https://act-farm.vercel.app/residencies
- Connect: https://act-farm.vercel.app/connect

---

**Your site is live and monitored!** 🎉

Use the scripts and commands above to manage your deployment with ease.
