# ACT Farm Deployment Guide

## ✅ Status: Ready to Deploy to Vercel

Your ACT Farm website has been successfully pushed to GitHub and is ready for deployment to Vercel!

---

## 🎉 What's Been Completed

### GitHub Repository
✅ **Repository Created**: https://github.com/Acurioustractor/act-farm
✅ **All Code Pushed**: 31 files, 5204 lines added
✅ **Main Branch**: Set up and ready
✅ **Build Verified**: All pages compile successfully

### Website Features
✅ **8 Content Pages**: Home, Map, About, Activities, June's Patch, Residencies, Accommodation, Connect
✅ **Interactive Map**: Drone photo with 8 clickable location pins
✅ **Admin Tool**: Pin positioning tool at `/map/admin`
✅ **Mobile Responsive**: Works beautifully on all devices
✅ **SEO Optimized**: Proper metadata on all pages
✅ **TypeScript**: Fully typed, no errors

### Documentation
✅ **README.md**: Complete project overview
✅ **MAP_SETUP_GUIDE.md**: Interactive map documentation
✅ **PROJECT_SUMMARY.md**: What was built
✅ **QUICK_START.md**: Immediate next steps
✅ **Claude Skills**: GitHub, Vercel, and monitoring guides

---

## 🚀 Deploy to Vercel (5 Minutes)

### Option 1: Via Vercel Dashboard (Easiest)

1. **Go to [vercel.com/new](https://vercel.com/new)**

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select "GitHub"
   - Find `Acurioustractor/act-farm`
   - Click "Import"

3. **Configure Project**:
   ```
   Framework Preset: Next.js (auto-detected)
   Root Directory: ./
   Build Command: npm run build (auto-detected)
   Output Directory: .next (auto-detected)
   Install Command: npm install (auto-detected)
   ```

4. **Environment Variables**:
   - None required for initial deployment
   - Can add later if needed

5. **Click "Deploy"**

6. **Wait ~2 minutes** for build and deployment

7. **Your site will be live at**:
   ```
   https://act-farm.vercel.app
   ```

   Or a custom URL like:
   ```
   https://act-farm-[random-string].vercel.app
   ```

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd "/Users/benknight/Code/ACT Farm/act-farm"
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [Your account]
# - Link to existing project? N
# - Project name? act-farm
# - In which directory is your code? ./
# - Override settings? N

# After first deployment, deploy to production:
vercel --prod
```

---

## 🔗 After Deployment

### 1. Test Your Live Site

Visit your Vercel URL and test:
- [ ] Homepage loads correctly
- [ ] Navigation works (all 8 pages)
- [ ] Interactive map displays drone photo
- [ ] Map pins are clickable
- [ ] Sidebar shows location details
- [ ] Layer switcher works
- [ ] Mobile menu works
- [ ] Contact form renders
- [ ] Footer links work
- [ ] External link to The Harvest works

### 2. Set Up Custom Domain (Optional)

**In Vercel Dashboard**:
1. Go to Project Settings → Domains
2. Add domain: `farm.acurioustractor.com`
3. Configure DNS at your provider:
   ```
   Type: CNAME
   Name: farm
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (~5 minutes)
5. SSL automatically provisioned

### 3. Enable Analytics

**Vercel Analytics** (Free):
1. Go to Project → Analytics
2. Click "Enable Analytics"
3. View traffic, performance, and visitor data

**Vercel Speed Insights** (Free):
1. Go to Project → Speed Insights
2. Click "Enable Speed Insights"
3. Monitor Core Web Vitals

### 4. Configure Automatic Deployments

Already configured! Vercel will now:
- ✅ Deploy `main` branch to production automatically
- ✅ Create preview deployments for pull requests
- ✅ Comment on PRs with preview URLs
- ✅ Send deployment notifications

**Workflow:**
```bash
# Make changes locally
git add .
git commit -m "feat: update content"
git push origin main

# Vercel automatically:
# 1. Detects push
# 2. Builds project
# 3. Deploys to production
# 4. Notifies you
```

---

## 📊 Monitoring Setup

### 1. Vercel Built-in Monitoring

Access in Vercel Dashboard:
- **Analytics**: Traffic, page views, top pages
- **Speed Insights**: Core Web Vitals, performance
- **Logs**: Real-time function and build logs
- **Deployments**: History, status, rollback

### 2. Uptime Monitoring (Recommended)

**UptimeRobot** (Free):
1. Sign up at [uptimerobot.com](https://uptimerobot.com)
2. Add monitor:
   - Type: HTTP(s)
   - URL: Your Vercel URL
   - Monitoring interval: 5 minutes
3. Set up email/SMS alerts
4. Get status page URL

### 3. Run Daily Health Checks

Use the monitoring script:
```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"
./monitor.sh
```

Or create a cron job:
```bash
# Edit crontab
crontab -e

# Add line (runs daily at 9am):
0 9 * * * cd /Users/benknight/Code/ACT\ Farm/act-farm && ./monitor.sh
```

### 4. Weekly Lighthouse Audits

```bash
# Install Lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://act-farm.vercel.app --view

# Target scores:
# Performance: 90+
# Accessibility: 95+
# Best Practices: 95+
# SEO: 95+
```

---

## 🔧 Post-Deployment Tasks

### Immediate (Next 24 hours)

1. **Test Everything**:
   - All pages load
   - Map works on desktop and mobile
   - Forms function properly
   - Images display correctly

2. **Update Pin Positions**:
   - Go to `/map/admin`
   - Click actual locations on drone photo
   - Update coordinates in `lib/map/farmData.ts`
   - Commit and push (auto-deploys)

3. **Add Real Photos**:
   - Upload location photos to `/public/images/map/[location-id]/`
   - Update `images` arrays in `farmData.ts`
   - Commit and push

### Short Term (Next Week)

4. **Content Review**:
   - Proofread all pages
   - Verify conservation messaging aligns
   - Check links to The Harvest
   - Update any placeholder text

5. **SEO Setup**:
   - Submit to Google Search Console
   - Create sitemap.xml (Next.js can auto-generate)
   - Verify meta descriptions
   - Test social media previews

6. **Analytics Review**:
   - Check initial traffic
   - Identify popular pages
   - Monitor Core Web Vitals
   - Review any errors

### Ongoing

7. **Regular Updates**:
   - Add new photos as available
   - Update activities and events
   - Add more map locations
   - Create before/after/habitat zone layers

8. **Performance Monitoring**:
   - Weekly Lighthouse audits
   - Monthly traffic reviews
   - Quarterly content updates
   - Annual domain renewal

---

## 🛠️ Common Tasks

### Update Content

```bash
# 1. Make changes locally
cd "/Users/benknight/Code/ACT Farm/act-farm"
# Edit files...

# 2. Test locally
npm run dev
# View at http://localhost:3000

# 3. Build to verify
npm run build

# 4. Commit and push
git add .
git commit -m "feat: update content"
git push origin main

# 5. Vercel automatically deploys
# Check dashboard for status
```

### Add New Map Location

```bash
# 1. Go to admin tool
# Visit: https://your-url.vercel.app/map/admin

# 2. Click on drone photo where location is

# 3. Copy generated code

# 4. Edit farmData.ts
# Paste code into locations array

# 5. Commit and push
git add lib/map/farmData.ts
git commit -m "feat: add new location to map"
git push origin main
```

### Rollback Deployment

If something goes wrong:

**Via Vercel Dashboard**:
1. Go to Deployments
2. Find previous working deployment
3. Click "⋯" → "Promote to Production"

**Via CLI**:
```bash
vercel ls
vercel rollback <previous-deployment-url> --prod
```

---

## 📈 Success Metrics

### Week 1 Targets
- [ ] Site live and accessible
- [ ] All pages loading correctly
- [ ] No critical errors in logs
- [ ] Performance score 85+
- [ ] Pin positions accurate

### Month 1 Targets
- [ ] Custom domain configured
- [ ] Analytics showing traffic
- [ ] Contact form submissions working
- [ ] All location photos added
- [ ] Before/after layers added (optional)

### Quarter 1 Targets
- [ ] Regular content updates
- [ ] Performance score 90+
- [ ] SEO visibility improving
- [ ] User feedback integrated
- [ ] Additional map locations added

---

## 🆘 Support Resources

### Documentation
- **[README.md](README.md)** - Project overview
- **[MAP_SETUP_GUIDE.md](MAP_SETUP_GUIDE.md)** - Map feature guide
- **[QUICK_START.md](QUICK_START.md)** - Getting started

### Claude Skills
- **[deploy-github.md](.claude/skills/deploy-github.md)** - GitHub deployment
- **[deploy-vercel.md](.claude/skills/deploy-vercel.md)** - Vercel deployment
- **[monitor-site.md](.claude/skills/monitor-site.md)** - Site monitoring

### Official Documentation
- **Next.js**: https://nextjs.org/docs
- **Vercel**: https://vercel.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

### Reference Implementation
- **PICC Station Map**: `/Users/benknight/Code/PICC Station Site Plan/picc-station-map/`

---

## 🎯 Next Steps

1. **Deploy to Vercel** (5 minutes)
   - Go to vercel.com/new
   - Import act-farm repository
   - Click deploy

2. **Test Live Site** (10 minutes)
   - Visit Vercel URL
   - Test all pages and features
   - Check mobile responsiveness

3. **Set Up Monitoring** (15 minutes)
   - Enable Vercel Analytics
   - Configure UptimeRobot
   - Run initial health check

4. **Update Map Pins** (30 minutes)
   - Use `/map/admin` tool
   - Position all 8 locations accurately
   - Commit and push updates

5. **Add Photos** (ongoing)
   - Upload location photos
   - Update farmData.ts
   - Deploy updates

---

## 🎊 You're Ready!

Your ACT Farm website is production-ready and waiting to be deployed. The hardest work is done!

**GitHub Repository**: https://github.com/Acurioustractor/act-farm

**Deploy Now**: https://vercel.com/new

Questions? Check the documentation or Claude skills in `.claude/skills/`

---

Built with care for Black Cockatoo Valley on Jinibara lands 🌿

December 23, 2025
