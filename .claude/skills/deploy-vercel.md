# Deploy to Vercel Skill

## Description
Deploy the ACT Farm Next.js website to Vercel with automatic builds, previews, and production deployment.

## When to Use
- Initial deployment to production
- Deploying updates after merging to main
- Creating preview deployments for testing
- Managing environment variables and domains

## Prerequisites
- GitHub repository with the code
- Vercel account (free tier works great)
- Vercel CLI installed (optional but recommended)

## Installation

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login
```

## Deployment Methods

### Method 1: Via Vercel Dashboard (Easiest)

1. **Go to [vercel.com](https://vercel.com)**
2. **Click "Add New Project"**
3. **Import from GitHub**:
   - Connect your GitHub account
   - Select the `act-farm` repository
   - Click "Import"

4. **Configure Project**:
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

5. **Environment Variables** (if needed):
   ```
   Add any environment variables here
   (Currently none required for ACT Farm)
   ```

6. **Click "Deploy"**

Done! Your site will be live in ~2 minutes at:
`https://act-farm.vercel.app`

### Method 2: Via Vercel CLI

```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"

# First deployment
vercel

# Follow the prompts:
# Set up and deploy? Y
# Which scope? [Your account]
# Link to existing project? N
# What's your project's name? act-farm
# In which directory is your code located? ./
# Want to override settings? N

# Deploy to production
vercel --prod
```

## Automatic Deployments

Once connected to GitHub, Vercel automatically:

- ✅ **Deploys main branch to production**
- ✅ **Creates preview for pull requests**
- ✅ **Rebuilds on every push**
- ✅ **Comments PR with preview URL**

**Workflow:**
```bash
# 1. Make changes locally
git checkout -b feature/new-content
# ... make changes ...
git commit -m "feat: add new location photos"
git push origin feature/new-content

# 2. Create PR on GitHub
gh pr create --title "Add new location photos"

# 3. Vercel automatically:
#    - Builds preview deployment
#    - Comments on PR with preview URL
#    - You can test before merging

# 4. Merge PR
gh pr merge 123

# 5. Vercel automatically:
#    - Builds production deployment
#    - Deploys to act-farm.vercel.app
```

## Custom Domain Setup

### Add Custom Domain

1. **In Vercel Dashboard**:
   - Go to Project Settings
   - Click "Domains"
   - Add domain: `farm.acurioustractor.com`

2. **Configure DNS**:
   Add these records to your DNS provider:

   **For Apex Domain** (acurioustractor.com):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For Subdomain** (farm.acurioustractor.com):
   ```
   Type: CNAME
   Name: farm
   Value: cname.vercel-dns.com
   ```

3. **Automatic SSL**:
   Vercel automatically provisions SSL certificate

4. **Done!**
   Site accessible at `https://farm.acurioustractor.com`

## Environment Variables

If you need to add environment variables later:

**Via Dashboard:**
1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables (Development/Preview/Production)

**Via CLI:**
```bash
# Add environment variable
vercel env add NEXT_PUBLIC_SITE_URL

# Pull environment variables locally
vercel env pull .env.local
```

**Example `.env.local`:**
```bash
# Public variables (accessible in browser)
NEXT_PUBLIC_SITE_URL=https://farm.acurioustractor.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX

# Private variables (server-side only)
MAILCHIMP_API_KEY=your-key-here
GHL_API_KEY=your-key-here
```

## Build Configuration

**vercel.json** (optional, for advanced config):
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["syd1"],
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

## Monitoring Deployments

### Via Vercel Dashboard

1. **Deployments Page**:
   - View all deployments
   - See build logs
   - Check deployment status

2. **Analytics**:
   - Page views
   - Unique visitors
   - Top pages
   - Geographic distribution

3. **Real User Monitoring (RUM)**:
   - Core Web Vitals
   - Page load times
   - Performance metrics

### Via CLI

```bash
# List deployments
vercel ls

# View deployment logs
vercel logs <deployment-url>

# Inspect deployment
vercel inspect <deployment-url>

# Roll back to previous deployment
vercel rollback <deployment-url>
```

## Performance Optimization

### Image Optimization

Vercel automatically optimizes images via Next.js Image component:
```tsx
<Image
  src="/images/map/drone-current.jpg"
  alt="Drone photo"
  width={1920}
  height={1440}
  quality={90}
  priority
/>
```

### Edge Functions

Vercel runs Next.js on the Edge for fast response times:
- Automatic global CDN
- Smart caching
- ISR (Incremental Static Regeneration) support

### Analytics Integration

**Enable Vercel Analytics:**
```bash
npm install @vercel/analytics
```

**Add to layout.tsx:**
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` locally (no errors)
- [ ] Test all pages and features
- [ ] Check mobile responsiveness
- [ ] Verify all images load correctly
- [ ] Test interactive map on different devices
- [ ] Review environment variables
- [ ] Update metadata (title, description)
- [ ] Check robots.txt and sitemap
- [ ] Test contact form
- [ ] Verify external links (The Harvest)

## Common Issues

**Problem**: Build fails with TypeScript errors
**Solution**:
```bash
# Fix TypeScript errors locally first
npm run build

# Check specific file
npx tsc --noEmit app/page.tsx
```

**Problem**: Images not loading
**Solution**:
- Ensure images are in `/public` directory
- Check file paths (case-sensitive)
- Verify Next.js Image component usage

**Problem**: Environment variables not working
**Solution**:
- Add `NEXT_PUBLIC_` prefix for client-side vars
- Redeploy after adding env vars
- Check deployment logs

**Problem**: Map not loading
**Solution**:
- Check drone photo exists in `/public/images/map/`
- Verify image dimensions (1920×1440)
- Check browser console for errors

## Rollback Strategy

If deployment has issues:

**Via Dashboard:**
1. Go to Deployments
2. Find previous working deployment
3. Click "Promote to Production"

**Via CLI:**
```bash
vercel ls
vercel rollback <previous-deployment-url> --prod
```

## Preview Deployments

Every branch and PR gets a unique preview URL:
```
https://act-farm-git-feature-new-map-your-team.vercel.app
```

**Benefits:**
- Test changes before production
- Share with team for review
- Client preview without affecting live site

## Production Deployment Process

**Complete Workflow:**

```bash
# 1. Local development
cd "/Users/benknight/Code/ACT Farm/act-farm"
npm run dev
# ... make changes ...

# 2. Build and test locally
npm run build
npm start
# Test at http://localhost:3000

# 3. Commit to git
git add .
git commit -m "feat: add new content"

# 4. Push to GitHub
git push origin main

# 5. Vercel automatically:
#    - Detects push to main
#    - Builds project
#    - Runs checks
#    - Deploys to production
#    - Sends deployment notification

# 6. Verify deployment
# Visit https://act-farm.vercel.app
# Check deployment logs in Vercel dashboard
```

## Webhooks & Notifications

**Set up notifications:**

1. **Slack Integration**:
   - Vercel → Settings → Notifications
   - Connect Slack workspace
   - Choose channels for deployment updates

2. **Email Notifications**:
   - Automatic on deployment success/failure
   - Configure in Account Settings

3. **GitHub Status Checks**:
   - Automatic PR status updates
   - Shows build status in GitHub

## Cost Optimization

**Free Tier Includes:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic SSL
- ✅ Preview deployments
- ✅ Edge Network
- ✅ Analytics (Web Vitals)

**For ACT Farm:**
- Static pages = minimal bandwidth
- Image optimization included
- Should stay well within free tier

## Advanced: Deploy Script

Create automated deployment:

```bash
#!/bin/bash
# deploy-vercel.sh

echo "🚀 Deploying ACT Farm to Vercel..."

# 1. Run tests (if you have them)
# npm test

# 2. Build locally to check for errors
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# 3. Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🎉 Site is live at https://act-farm.vercel.app"
else
    echo "❌ Deployment failed. Check Vercel dashboard for details."
    exit 1
fi
```

Make executable:
```bash
chmod +x deploy-vercel.sh
./deploy-vercel.sh
```

## Monitoring After Deployment

**Check these metrics:**
1. **Build Time**: Should be under 2 minutes
2. **Page Load Time**: Target < 2 seconds
3. **Core Web Vitals**: Aim for "Good" ratings
4. **Error Rate**: Monitor for 404s or build failures
5. **Bandwidth Usage**: Track against free tier limits

**Vercel Dashboard Tabs:**
- **Overview**: Quick deployment status
- **Deployments**: Full deployment history
- **Analytics**: Traffic and performance
- **Speed Insights**: Core Web Vitals
- **Logs**: Real-time function logs
- **Settings**: Configuration and domains
