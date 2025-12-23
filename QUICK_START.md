# Quick Start Guide - ACT Farm Website

## Immediate Next Steps

### 1. View Your Site

```bash
cd "/Users/benknight/Code/ACT Farm/act-farm"
npm run dev
```

Then open:
- **Main site**: http://localhost:3000
- **Interactive map**: http://localhost:3000/map
- **Admin tool**: http://localhost:3000/map/admin

### 2. Position Your Location Pins

Your drone photo is already loaded! Now position the pins accurately:

1. Go to http://localhost:3000/map/admin
2. Click on the drone photo where each location actually is
3. Click "Copy Location Code"
4. Open `lib/map/farmData.ts`
5. Find the corresponding location in the array
6. Update its `x` and `y` values with the ones you just copied

**Current locations to position:**
- June's Patch
- R&D Residency Accommodation
- Threatened Species Habitat - Eastern Zone
- Mary River Viewpoint
- Elaman Creek Corridor
- Workshop & Gathering Space
- Future Eco-Glamping Site
- Native Seed Collection Area

### 3. Add Your Photos

1. Create folders for each location:
   ```bash
   mkdir -p public/images/map/junes-patch
   mkdir -p public/images/map/residency
   # etc.
   ```

2. Add photos to these folders

3. Update the `images` array in `lib/map/farmData.ts`:
   ```typescript
   images: [
     {
       url: '/images/map/junes-patch/photo1.jpg',
       caption: 'Your caption here',
     },
   ],
   ```

### 4. Add More Map Layers (Optional)

You have 4 map layer slots:

- ✅ **drone-current.jpg** - Already loaded!
- ⬜ **drone-before.jpg** - Add a "before restoration" photo
- ⬜ **site-plan.jpg** - Add an architectural/planning overlay
- ⬜ **habitat-zones.jpg** - Add a habitat mapping overlay

**Requirements:**
- All images must be **1920×1440px** (4:3 ratio)
- Save as JPG or WebP
- Place in `/public/images/map/`

If you don't have these yet, the layer buttons will still work (they'll all show the current drone photo).

---

## Common Tasks

### Add a New Location

**Easy Way (Recommended):**
1. Go to http://localhost:3000/map/admin
2. Click where you want the pin
3. Copy the generated code
4. Paste into `lib/map/farmData.ts` locations array

**Manual Way:**
1. Open `lib/map/farmData.ts`
2. Add a new object to the `locations` array
3. See [MAP_SETUP_GUIDE.md](MAP_SETUP_GUIDE.md) for full details

### Update Page Content

All content pages are in the `app/` folder:
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Activities: `app/activities/page.tsx`
- etc.

Just edit the text in the TSX files and save. The dev server will auto-reload.

### Change Colors or Fonts

1. **Colors**: Edit `app/globals.css` to change the CSS variables
2. **Fonts**: Edit `app/layout.tsx` to change the font imports
3. **Tailwind Config**: Currently using inline Tailwind v4 config in `globals.css`

---

## Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub:
   ```bash
   cd "/Users/benknight/Code/ACT Farm/act-farm"
   git add .
   git commit -m "Initial ACT Farm website"
   git push origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Done! Your site will be live in ~2 minutes.

### Other Deployment Options

- **Netlify**: Drop the `.next` folder or connect to GitHub
- **Cloudflare Pages**: Connect to GitHub, auto-detects Next.js
- **AWS Amplify**: Follow their Next.js guide

---

## File Organization Tips

### Map Photos

Keep organized like this:
```
public/images/map/
├── drone-current.jpg (main drone photo)
├── drone-before.jpg
├── site-plan.jpg
├── habitat-zones.jpg
└── [location-id]/
    ├── photo1.jpg
    ├── photo2.jpg
    └── video-thumb.jpg
```

### Location IDs

Use consistent naming:
- Lowercase
- Hyphens not spaces
- Descriptive
- Examples: `junes-patch`, `mary-river-viewpoint`, `workshop-area`

---

## Getting Help

### Documentation

- **[README.md](README.md)** - Full project overview
- **[MAP_SETUP_GUIDE.md](MAP_SETUP_GUIDE.md)** - Complete map documentation
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - What was built

### Reference Implementation

The map is based on PICC Station. For advanced features, see:
`/Users/benknight/Code/PICC Station Site Plan/picc-station-map/`

### Common Issues

**Pins in wrong spot?**
- Use the admin tool to get exact coordinates
- Make sure all map images are 1920×1440px

**Build errors?**
- Run `npm run build` to see specific errors
- Check that all required fields are filled in farmData.ts

**Image not loading?**
- Check file path (case-sensitive)
- Verify file exists in `/public/images/map/`
- Check browser console for 404 errors

---

## Development Workflow

```bash
# Start dev server
npm run dev

# Check for errors
npm run build

# Lint code
npm run lint

# Preview production build
npm run build && npm start
```

---

## What's Already Done ✅

- ✅ 8 pages with conservation-first content
- ✅ Interactive map with clickable pins
- ✅ 8 sample locations configured
- ✅ Drone photo loaded (1920×1440px)
- ✅ Admin pin positioning tool
- ✅ Mobile responsive design
- ✅ Navigation with Map link
- ✅ TypeScript types and data structure
- ✅ Build tested and working

## What You Need to Do 📋

1. Position pins accurately using admin tool
2. Add real photos for locations
3. Add before/site plan/habitat layer images (optional)
4. Review and update content as needed
5. Deploy to Vercel or your hosting platform

---

**Ready to go!** Run `npm run dev` and start exploring your new site. 🚀

Questions? Check the documentation files or explore the PICC Station reference implementation.
