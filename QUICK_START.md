# Angel Bail Bonds - Quick Start Guide

## Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory**
```bash
cd /sessions/lucid-laughing-knuth/angel-bail-bonds-astro
```

2. **Install dependencies** (if not already done)
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This generates a static HTML site in the `dist/` directory ready for deployment.

## Preview Production Build

```bash
npm run preview
```

## File Structure Quick Reference

```
src/
├── layouts/
│   └── BaseLayout.astro       # Main page layout
├── pages/
│   ├── index.astro            # Home page
│   ├── services.astro         # Services page
│   ├── how-bail-works.astro   # Educational page
│   ├── about.astro            # About page
│   ├── contact.astro          # Contact page
│   ├── payne-county-jail-bail-bonds.astro
│   └── blog/
│       ├── index.astro        # Blog listing
│       └── what-to-do-if-arrested-in-stillwater-oklahoma.astro
└── styles/
    └── global.css             # Global styles

public/
├── robots.txt                 # SEO robots
├── llms.txt                   # LLM business info
└── llms-full.txt              # Comprehensive LLM content

Configuration:
├── astro.config.mjs           # Astro config
├── tailwind.config.mjs        # Tailwind config
└── tsconfig.json              # TypeScript config
```

## Key URLs & Routes

- **Home**: `/` (or `/index`)
- **Services**: `/services`
- **How Bail Works**: `/how-bail-works`
- **About**: `/about`
- **Contact**: `/contact`
- **Blog**: `/blog`
- **Blog Post**: `/blog/what-to-do-if-arrested-in-stillwater-oklahoma`
- **Payne County**: `/payne-county-jail-bail-bonds`

## Customization Guide

### Updating Business Information

**Contact Details** - Search and replace in all Astro files:
- Phone: `(405) 614-3000`
- Email: `bailbondangel@gmail.com`
- Owner: `Karri McBride`
- Location: `Stillwater, Oklahoma`

### Changing Colors

Edit `tailwind.config.mjs`:
```javascript
colors: {
  'agate': '#1a6b6a',    // Primary color
  'cream': '#f5efe6',    // Background
  'gold': '#c9a84c',     // Accents
  'orchid': '#9b30ff',   // Secondary
  'charcoal': '#2d2d2d', // Text
}
```

### Updating Images

Replace image URLs in pages:
- Logo: Used in BaseLayout
- Hero: Used on home page
- Karri's photo: Used on about page

Search for `manuscdn.com` URLs and replace with your own image URLs.

### Adding New Pages

1. Create file in `src/pages/[page-name].astro`
2. Import `BaseLayout` from `'../layouts/BaseLayout.astro'`
3. Wrap content in `<BaseLayout>` component
4. Add title, description, and structured data props

Example:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout 
  title="Page Title"
  description="Page description for meta tags"
>
  <!-- Your content here -->
</BaseLayout>
```

### Adding Blog Posts

1. Create file in `src/pages/blog/[post-slug].astro`
2. Use similar structure to existing blog post
3. Update blog index in `src/pages/blog/index.astro` to list the new post

## SEO Optimization

All pages include:
- Proper `<title>` and `<meta description>` tags
- Open Graph meta tags
- Canonical URLs
- JSON-LD structured data (where applicable)
- Semantic HTML

For the home page, LocalBusiness structured data is included.

## Mobile Responsiveness

The site is fully responsive:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

Navigation includes a mobile hamburger menu that works on screens under 768px.

## Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy
- Alt text on all images
- ARIA labels on interactive elements
- Color contrast compliant
- Keyboard navigation support

## Performance

- Static HTML generation (fast)
- Optimized Tailwind CSS
- Google Fonts for typography
- Configured image domains for optimization
- Ready for Vercel deployment

## Deployment Options

### Vercel (Recommended)
```bash
npm run build
# Deploy the dist/ folder to Vercel
```

### Other Hosting
The `dist/` folder can be deployed to any static hosting:
- AWS S3 + CloudFront
- GitHub Pages
- Netlify
- Firebase Hosting
- Any web server

## Troubleshooting

### Port Already in Use
If port 3000 is in use:
```bash
npm run dev -- --port 3001
```

### Build Errors
1. Clear node_modules: `rm -rf node_modules package-lock.json`
2. Reinstall: `npm install`
3. Try build again: `npm run build`

### Images Not Loading
- Check that image URLs are correct
- Verify image domains are allowed in `astro.config.mjs`
- Ensure image files exist at specified URLs

## Development Tips

### Fast Refresh
Astro supports hot module reloading. Changes to Astro files are reflected instantly in the browser.

### Component Reuse
The `BaseLayout` component can be imported and used in all pages for consistent layout.

### Styling
- Use Tailwind utility classes for most styling
- Custom CSS in `global.css` for brand-specific styles
- Color utilities available through custom Tailwind config

### Content Structure
- Use semantic HTML elements (header, nav, main, article, section, footer)
- Maintain proper heading hierarchy (h1, h2, h3)
- Break content into logical sections with gold dividers

## Support & Resources

- **Astro Docs**: https://docs.astro.build
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Business Info**: See `llms.txt` and `llms-full.txt`

## Next Steps

1. Test the site locally: `npm run dev`
2. Review all pages for accuracy
3. Update images with your own
4. Customize colors/branding if needed
5. Add your own blog posts
6. Deploy to production

## Questions?

Refer to:
- `PROJECT_STRUCTURE.md` - Detailed file descriptions
- Page comments in Astro files
- Inline CSS comments
- Component structure in BaseLayout.astro

---

**Ready to launch?** Follow the production build steps above and deploy!
