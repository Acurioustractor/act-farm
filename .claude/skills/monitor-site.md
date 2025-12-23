# Monitor Site Health Skill

## Description
Monitor the ACT Farm website for uptime, performance, errors, and user experience after deployment to Vercel.

## When to Use
- After initial deployment
- Daily health checks
- Before/after major updates
- Investigating user-reported issues
- Performance optimization

## Monitoring Stack

### 1. Vercel Analytics (Built-in)
Free with Vercel deployment

**Access**: Vercel Dashboard → Analytics

**Metrics:**
- Page views and unique visitors
- Top pages
- Traffic sources
- Geographic distribution
- Referrers

### 2. Vercel Speed Insights
Real user performance monitoring

**Access**: Vercel Dashboard → Speed Insights

**Core Web Vitals:**
- **LCP** (Largest Contentful Paint) - Target: < 2.5s
- **FID** (First Input Delay) - Target: < 100ms
- **CLS** (Cumulative Layout Shift) - Target: < 0.1

### 3. Lighthouse (Manual Testing)

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://act-farm.vercel.app --view

# Generate JSON report
lighthouse https://act-farm.vercel.app --output json --output-path ./lighthouse-report.json
```

**Check:**
- Performance Score (Target: 90+)
- Accessibility Score (Target: 95+)
- Best Practices (Target: 95+)
- SEO Score (Target: 95+)

### 4. Uptime Monitoring

**Free Services:**

**UptimeRobot** (Recommended):
```
1. Sign up at uptimerobot.com
2. Add monitor:
   - Type: HTTP(s)
   - URL: https://act-farm.vercel.app
   - Interval: 5 minutes
3. Alert via email/SMS on downtime
```

**Pingdom**:
```
1. Sign up at pingdom.com (free tier)
2. Add check for homepage
3. Set up alerts
```

**Better Uptime**:
```
1. Sign up at betteruptime.com
2. Monitor homepage + critical pages
3. Status page (optional)
```

## Monitoring Checklist

### Daily Quick Check (5 minutes)

```bash
# 1. Check if site is up
curl -I https://act-farm.vercel.app

# 2. Check response time
time curl https://act-farm.vercel.app > /dev/null

# 3. Check critical pages
curl -I https://act-farm.vercel.app/map
curl -I https://act-farm.vercel.app/activities
curl -I https://act-farm.vercel.app/connect

# 4. Check for broken images
curl -I https://act-farm.vercel.app/images/map/drone-current.jpg
```

**Expected:**
- Status: 200 OK
- Response time: < 2 seconds
- All critical pages load
- Images accessible

### Weekly Deep Check (15 minutes)

1. **Run Lighthouse Audit**
   ```bash
   lighthouse https://act-farm.vercel.app --view
   ```

2. **Check Vercel Analytics**
   - Review traffic trends
   - Identify popular pages
   - Check for 404 errors

3. **Test Interactive Features**
   - Click map pins
   - Test contact form
   - Try navigation on mobile
   - Switch map layers

4. **Check Mobile Performance**
   - Use Chrome DevTools mobile emulation
   - Test on actual mobile device
   - Verify responsive design

5. **Review Error Logs**
   ```bash
   vercel logs --prod
   ```

### Monthly Comprehensive Check (30 minutes)

1. **Performance Audit**
   - Run full Lighthouse audit
   - Check Core Web Vitals trends
   - Analyze slow pages
   - Review image sizes

2. **SEO Check**
   - Google Search Console
   - Check meta descriptions
   - Verify structured data
   - Review search rankings

3. **Security Audit**
   - Check SSL certificate (auto-renewed)
   - Review Content Security Policy
   - Test HTTPS enforcement
   - Check for vulnerable dependencies:
     ```bash
     npm audit
     ```

4. **Content Audit**
   - Verify all links work
   - Check for broken images
   - Test all forms
   - Verify video embeds

5. **Accessibility Check**
   - Run axe DevTools
   - Test keyboard navigation
   - Check screen reader compatibility
   - Verify color contrast

## Automated Monitoring Script

**Create `monitor.sh`:**

```bash
#!/bin/bash
# monitor.sh - Quick health check for ACT Farm site

SITE_URL="https://act-farm.vercel.app"
CRITICAL_PAGES=(
  "/"
  "/map"
  "/about"
  "/activities"
  "/residencies"
  "/connect"
)

echo "🔍 Monitoring ACT Farm Website"
echo "================================"
echo ""

# Check homepage
echo "📊 Checking homepage..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$SITE_URL")
RESPONSE_TIME=$(curl -s -o /dev/null -w "%{time_total}" "$SITE_URL")

if [ "$RESPONSE" -eq 200 ]; then
    echo "✅ Homepage: OK (${RESPONSE_TIME}s)"
else
    echo "❌ Homepage: FAILED (Status: $RESPONSE)"
fi

echo ""

# Check critical pages
echo "📄 Checking critical pages..."
for page in "${CRITICAL_PAGES[@]}"; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${SITE_URL}${page}")
    if [ "$STATUS" -eq 200 ]; then
        echo "✅ ${page}: OK"
    else
        echo "❌ ${page}: FAILED (Status: $STATUS)"
    fi
done

echo ""

# Check drone photo
echo "🖼️  Checking map images..."
IMAGE_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "${SITE_URL}/images/map/drone-current.jpg")
if [ "$IMAGE_STATUS" -eq 200 ]; then
    echo "✅ Drone photo: OK"
else
    echo "❌ Drone photo: FAILED (Status: $IMAGE_STATUS)"
fi

echo ""

# Check Vercel deployment status (if CLI installed)
if command -v vercel &> /dev/null; then
    echo "🚀 Recent deployments:"
    vercel ls --prod | head -5
fi

echo ""
echo "================================"
echo "✅ Health check complete!"
echo ""
echo "📊 View detailed analytics at:"
echo "https://vercel.com/dashboard"
```

Make executable and run:
```bash
chmod +x monitor.sh
./monitor.sh
```

## Error Tracking

### Vercel Logs

```bash
# View production logs
vercel logs --prod

# View logs for specific deployment
vercel logs <deployment-url>

# Follow logs in real-time
vercel logs --prod --follow

# Filter by time
vercel logs --prod --since 1h
```

### Common Errors to Watch For

1. **404 Not Found**
   - Broken internal links
   - Moved/renamed pages
   - Missing images

2. **500 Internal Server Error**
   - Build errors
   - Runtime errors in components
   - API route failures

3. **Image Loading Errors**
   - Missing image files
   - Incorrect paths
   - Image size too large

4. **JavaScript Errors**
   - Check browser console
   - Review Vercel function logs

### Set Up Error Alerts

**Vercel Notifications:**
1. Go to Project Settings → Notifications
2. Enable:
   - Deployment Failed
   - Deployment Errors
   - Function Errors

**Sentry Integration** (Optional, for advanced error tracking):
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## Performance Monitoring

### Key Metrics to Track

| Metric | Target | Critical |
|--------|--------|----------|
| Homepage Load Time | < 2s | < 3s |
| Map Page Load Time | < 3s | < 5s |
| Time to Interactive | < 3s | < 5s |
| First Contentful Paint | < 1.5s | < 2.5s |
| Largest Contentful Paint | < 2.5s | < 4s |
| Cumulative Layout Shift | < 0.1 | < 0.25 |

### Lighthouse CI (Automated Performance Testing)

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Create config
cat > lighthouserc.json << EOF
{
  "ci": {
    "collect": {
      "url": [
        "https://act-farm.vercel.app/",
        "https://act-farm.vercel.app/map",
        "https://act-farm.vercel.app/activities"
      ],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.95}]
      }
    }
  }
}
EOF

# Run audit
lhci autorun
```

## Analytics Dashboard

### Create Custom Monitoring Dashboard

Track these KPIs:

**Traffic:**
- Daily visitors
- Page views per session
- Bounce rate
- Traffic sources

**Engagement:**
- Most viewed pages
- Average session duration
- Map interaction rate
- Form submission rate

**Performance:**
- Average load time
- Core Web Vitals scores
- Error rate
- Uptime percentage

**Conversions:**
- Contact form submissions
- Residency inquiries
- June's Patch interest
- Newsletter signups (if added)

### Google Analytics Setup (Optional)

```bash
# Install GA
npm install @next/third-parties
```

Add to layout.tsx:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

## Incident Response

### When Something Goes Wrong

**1. Assess Impact:**
```bash
# Check site status
curl -I https://act-farm.vercel.app

# Check deployment status
vercel ls --prod

# Check logs for errors
vercel logs --prod --since 1h
```

**2. Identify Root Cause:**
- Recent deployments?
- Code changes?
- External dependencies?
- Traffic spike?

**3. Quick Fix Options:**

**Rollback:**
```bash
# List recent deployments
vercel ls

# Rollback to previous
vercel rollback <previous-deployment-url> --prod
```

**Hotfix:**
```bash
git checkout -b hotfix/critical-bug
# Fix the bug
git commit -m "fix: resolve critical issue"
git push origin hotfix/critical-bug
# Vercel auto-deploys
```

**4. Post-Incident:**
- Document what happened
- Update monitoring to catch similar issues
- Consider adding tests
- Review deployment process

## Monitoring Automation

### GitHub Actions Workflow

Create `.github/workflows/monitor.yml`:

```yaml
name: Website Health Check

on:
  schedule:
    # Run every 6 hours
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - name: Check Homepage
        run: |
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://act-farm.vercel.app)
          if [ "$STATUS" -ne 200 ]; then
            echo "Homepage returned $STATUS"
            exit 1
          fi

      - name: Check Map Page
        run: |
          STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://act-farm.vercel.app/map)
          if [ "$STATUS" -ne 200 ]; then
            echo "Map page returned $STATUS"
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

## Status Page

Create a simple status page to show site health:

**Create `app/status/page.tsx`:**

```tsx
export default async function StatusPage() {
  const checks = await runHealthChecks();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Site Status</h1>

      {checks.map(check => (
        <div key={check.name} className="mb-4">
          <div className="flex items-center gap-2">
            {check.status === 'ok' ? '✅' : '❌'}
            <span className="font-semibold">{check.name}</span>
          </div>
          <p className="text-sm text-gray-600">{check.message}</p>
        </div>
      ))}
    </div>
  );
}

async function runHealthChecks() {
  // Implement your health checks here
  return [
    { name: 'Website', status: 'ok', message: 'All systems operational' },
    { name: 'Interactive Map', status: 'ok', message: 'Map functioning correctly' },
    { name: 'Contact Form', status: 'ok', message: 'Form submissions working' },
  ];
}
```

## Best Practices

1. **Monitor Continuously**: Set up automated checks
2. **Track Trends**: Watch metrics over time, not just snapshots
3. **Set Alerts**: Be notified of issues immediately
4. **Document Incidents**: Learn from problems
5. **Review Regularly**: Weekly deep dives into analytics
6. **Test Before Deploy**: Catch issues before production
7. **Have Rollback Plan**: Quick recovery from problems

## Monitoring Checklist

- [ ] Vercel Analytics enabled
- [ ] Speed Insights configured
- [ ] Uptime monitoring set up (UptimeRobot)
- [ ] Error notifications enabled
- [ ] Lighthouse audits scheduled
- [ ] Browser testing on mobile/desktop
- [ ] SSL certificate auto-renewal confirmed
- [ ] Backup/rollback plan documented
- [ ] Performance baselines established
- [ ] Team access to Vercel dashboard configured
