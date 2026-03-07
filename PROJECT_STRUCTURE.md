# Angel Bail Bonds - Astro Project Structure

## Overview
This is a production-ready Astro website for Angel Bail Bonds, a professional bail bond service in Stillwater, Oklahoma. The site features a luxury mineral aesthetic ("Agate & Satin") with comprehensive information about bail bond services, legal processes, and detailed business information.

## Project Files

### Configuration Files

**astro.config.mjs**
- Main Astro configuration
- Site URL: https://angelbailbonds.com
- Static output with Vercel adapter
- Tailwind and Sitemap integrations
- Image domain configuration

**tailwind.config.mjs**
- Custom Tailwind theme with brand colors
- Custom font families (Playfair Display & Lato)
- Extended color palette (agate, cream, gold, orchid, charcoal)
- Custom sizing and spacing

**src/styles/global.css**
- Global styles and Tailwind imports
- Brand color utilities
- Custom button styles (.btn-primary, .btn-secondary)
- Link hover effects
- Card component styling
- Responsive typography
- Navigation underline effects
- Prose styles for blog content

## Layout & Components

**src/layouts/BaseLayout.astro**
Complete base layout with:
- HTML head with Google Fonts, viewport meta, Open Graph tags
- Semantic HTML structure
- Fixed navigation bar (responsive with mobile hamburger menu)
- Logo and brand identity
- Navigation links with hover effects
- Call-to-action button
- Footer with business info, service areas, quick links, contact details
- Mobile menu toggle script
- Slot for page-specific content

## Pages

### src/pages/index.astro (Home)
Comprehensive home page with:
- Hero section with gradient background and marble texture overlay
- Trust signals (24/7, 5.0 stars, women-owned, 15+ years)
- Services grid (6 main services)
- Service areas (5 counties served)
- Why Choose Us section
- Client testimonials (3 reviews)
- Final CTA section
- JSON-LD LocalBusiness structured data
- Gold dividers between sections

### src/pages/services.astro (Services)
Detailed services page featuring:
- All 8 service types with descriptions and details
- Service grid layout with card styling
- County service tags
- Pricing information and examples
- Payment method options
- Flexible payment plans info
- CTA sections

### src/pages/how-bail-works.astro (Educational)
Step-by-step bail education page:
- 7-step bail process with numbered sections
- Types of bail (OwnRecognizance, Surety, Cash, Property)
- Co-signer responsibilities and liabilities
- Bail conditions explanation
- Failure to appear consequences
- Bail vs Bond comparison
- Semantic HTML with proper heading hierarchy

### src/pages/about.astro (About)
Owner profile and values page:
- Karri McBride's photo and biography
- 15+ years experience highlight
- Core values section (Integrity, Compassion, Excellence)
- Why choose us detailed information
- Business statistics
- Client testimonials
- Multiple trust signals

### src/pages/contact.astro (Contact)
Contact and service information page:
- Phone, email, and location
- Hours of operation (24/7)
- Contact form with fields for:
  - Name, email, phone, subject, message
  - Subject dropdown (emergency, question, service, other)
- Service area information
- 5 county coverage details
- FAQ accordion section with 6 common questions
- Final CTA

### src/pages/payne-county-jail-bail-bonds.astro (Specialty Page)
Dedicated Payne County Jail page:
- Local expertise highlights
- Payne County-specific procedure steps
- Charge types handled
- Court knowledge section
- FAQ section specific to Payne County
- Testimonials from local clients
- Specialized service messaging

### src/pages/blog/index.astro (Blog Index)
Blog listing page:
- Featured blog posts grid
- Category system (Guides, Legal Info, Tips & Advice, News)
- Post metadata (date, author, category)
- Read more links
- Call to action for emergency services

### src/pages/blog/what-to-do-if-arrested-in-stillwater-oklahoma.astro (Blog Post)
Comprehensive guide with:
- Immediate arrest actions (stay calm, know rights, get attorney)
- Booking process details
- Contact information guidance
- Initial appearance explanation
- Bail setting information
- How Angel Bail Bonds helps (5 steps)
- Post-release responsibilities
- Resource links
- FAQ section
- Disclaimer about legal advice

## Public Files

**public/robots.txt**
- Allows all legitimate crawlers
- Explicitly permits AI/LLM crawlers (GPTBot, ClaudeBot, anthropic-ai, Amazonbot, Google-Extended, etc.)
- Sitemap reference

**public/llms.txt**
- Concise LLM-friendly business information
- Business overview, contact, services, pricing
- Service areas, core values, FAQs
- Key features and specializations

**public/llms-full.txt**
- Comprehensive content for LLM indexing
- Complete service descriptions
- Full bail process explanation
- Pricing details and examples
- Co-signer responsibilities
- FAQ section
- What to do if arrested guide
- All page content summaries
- Testimonials and business reputation

## Design System

### Colors
- **Agate (Teal)**: #1a6b6a - Primary brand color
- **Cream**: #f5efe6 - Background and light sections
- **Gold**: #c9a84c - Accents and highlights
- **Orchid**: #9b30ff - Secondary (for future use)
- **Charcoal**: #2d2d2d - Text and dark sections

### Typography
- **Display Font**: Playfair Display (serif) - Headlines and brand
- **Body Font**: Lato (sans-serif) - Body text and UI
- **H1**: 3.5rem, **H2**: 2.5rem, **H3**: 1.875rem

### Components
- **.card** - White cards with shadow and hover effect
- **.btn-primary** - Agate background with white text
- **.btn-secondary** - Gold background with charcoal text
- **.gold-divider** - Gradient line accent
- **.section-padding** - Standard 4rem padding
- **.link-agate** - Text links with underline hover

### Responsive Design
- Mobile-first approach
- Breakpoint at 768px for tablet/desktop
- Responsive navigation with hamburger menu
- Grid layouts that stack on mobile
- Readable typography on all screen sizes

## Key Features

### SEO & Metadata
- Proper title and description tags on all pages
- Open Graph meta tags for social sharing
- Structured data (JSON-LD) for LocalBusiness
- Canonical URLs
- Meta viewport for responsive design
- Semantic HTML throughout

### Accessibility
- Semantic HTML (header, nav, main, article, section, footer)
- Proper heading hierarchy (h1, h2, h3)
- Alt text for images
- ARIA labels for interactive elements
- Color contrast compliant
- Mobile-friendly design

### Performance
- Static HTML generation
- Tailwind CSS for minimal bundle size
- Optimized font loading via Google Fonts
- Image domains configured for optimization
- Vercel deployment ready

### Business Information
- 24/7 availability emphasized
- Multiple contact methods (phone, email, form)
- Service area clearly defined
- Pricing transparent (10% premium)
- Testimonials and reviews prominent
- Trust signals throughout

## Content Organization

### Primary Services
1. Felony Bail Bonds
2. Misdemeanor Bail Bonds
3. DUI/DWI Bonds
4. Domestic Violence Bonds
5. Drug Charges Bonds
6. Warrant Bonds
7. Traffic Violation Bonds
8. Federal Bonds

### Service Areas
- Payne County (Primary - Stillwater)
- Pawnee County
- Lincoln County
- Kay County
- Noble County

### Key Information
- Owner: Karri McBride
- Phone: (405) 614-3000
- Email: bailbondangel@gmail.com
- Rating: 5.0 Stars (27+ reviews)
- Experience: 15+ years
- Type: Women-owned business
- Availability: 24/7

## Build & Deployment

### Dependencies
- Astro 5.18+
- Tailwind CSS 4.2+
- @astrojs/sitemap 3.7+
- @astrojs/tailwind 6.0+
- @astrojs/vercel 9.0+

### Build Commands
```bash
npm run dev        # Development server
npm run build      # Production build
npm run preview    # Preview production build
```

### Deployment
- Configured for Vercel deployment
- Static output suitable for any host
- Sitemap auto-generated
- All content is static HTML (no backend needed)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design supports devices from 320px to 4K

## Future Enhancements
- Blog post creation workflow
- Client testimonial submissions
- Calendar integration for consultation scheduling
- Live chat functionality
- Document download section
- Appointment booking system
- Blog image optimization
- Video content integration
- Interactive service calculator
- Client portal

---

**Last Updated:** March 7, 2026
**Status:** Production Ready
