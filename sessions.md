# TMRW Creatives CIC - Development Sessions Log

## Project Overview
- **Project:** TMRW Creatives CIC Website
- **Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Lucide React
- **Live URL:** https://tmrw-creatives-cic.vercel.app
- **GitHub:** https://github.com/tmrwcreativescic/tmrw-creatives-cic

---

## Session 1: Initial Build

### Website Foundation
- Created Next.js 15 project with App Router
- Configured Tailwind CSS with custom brand theme
- Installed and configured shadcn/ui components
- Set up custom fonts (League Spartan, Plus Jakarta Sans, Space Grotesk)

### Brand Configuration
```
Colors:
- tmrw-purple: #3A26CC
- tmrw-magenta: #A715A4
- tmrw-cyan: #51A6DD
- tmrw-white: #FDFEFE
- tmrw-black: #141414
```

### Pages Created
1. **Homepage** (`/`)
   - Hero section
   - About section
   - Programmes section
   - Manifesto block
   - News grid
   - Testimonial section
   - CTA section

2. **About** (`/about`)
   - Mission, vision, values
   - Team section
   - Timeline/history

3. **Programmes** (`/programmes`)
   - Landing page with all 4 programmes
   - `/programmes/create` - CREATE programme
   - `/programmes/build` - BUILD programme
   - `/programmes/connect` - CONNECT programme
   - `/programmes/work` - WORK programme

4. **Events** (`/events`)
   - Events listing with filters
   - Featured events section

5. **Opportunities** (`/opportunities`)
   - Opportunities listing
   - Featured opportunities
   - How it works section

6. **News** (`/news`)
   - News articles grid
   - Featured articles
   - Category filters

7. **Get Involved** (`/get-involved`)
   - Ways to participate
   - Application info

8. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Social links

### Components Created
- Header (with mobile responsive navigation)
- Footer (with newsletter signup)
- PageHero (reusable hero component)
- NewsCard
- Badge variants (purple, magenta, cyan, dark)
- Button variants (including outline-dark for light backgrounds)

### Git & Deployment
- Initialized Git repository
- Configured for user: tmrwcreativescic
- Created GitHub repo: tmrwcreativescic/tmrw-creatives-cic
- Deployed to Vercel

---

## Session 2: Dynamic Pages & Interactivity

### Events System
- Created `/src/data/events.ts` with event data structure
- Added dynamic routes: `/events/[id]`
- Created `EventDetailClient.tsx` with:
  - Event hero with background image
  - Event details sidebar (sticky)
  - What to bring section
  - Requirements section
  - Facilitator card
  - Share functionality
- Created `RegistrationModal.tsx`:
  - Form fields: name, email, phone, age, how heard
  - Loading state with spinner
  - Success confirmation message

### Opportunities System
- Created `/src/data/opportunities.ts` with opportunity data
- Added dynamic routes: `/opportunities/[id]`
- Created `OpportunityDetailClient.tsx` with:
  - Opportunity hero
  - Full description
  - Responsibilities (What You'll Do)
  - Requirements
  - Benefits (What You'll Get)
  - Sidebar with details
  - Share functionality
- Created `ApplicationModal.tsx`:
  - Form fields: name, email, phone, portfolio, experience, message
  - File upload instructions
  - Success confirmation with next steps

### News System
- Created `/src/data/news.ts` with full article content
- Added dynamic routes: `/news/[id]`
- Created `ArticleDetailClient.tsx` with:
  - Article hero with background image
  - Markdown-like content rendering (headers, lists, bold)
  - Author info card
  - Related articles sidebar
  - Tags display
  - Newsletter signup card
  - Share functionality

### Homepage Updates
- Updated `NewsGrid.tsx` to use centralized news data
- Made news cards fully clickable (entire card, not just link)
- Fixed links to use correct `/news/[id]` routes

### Bug Fixes
- Fixed sticky sidebar on event pages (both cards now stick together)
- Fixed "View All Events" button visibility (added `outline-dark` variant)
- Updated hero text to have TMRW on second line

---

## Session 3: QA Audit & Fixes

### QA Audit Performed
Comprehensive review of all pages checking for:
- Broken links (404 errors)
- Button/CTA functionality
- Form validation
- Build errors/warnings
- Accessibility issues

### Critical Issues Fixed

#### Missing Pages Created
1. **Privacy Policy** (`/privacy`)
   - GDPR compliance information
   - Data collection practices
   - User rights
   - Contact information

2. **Terms of Use** (`/terms`)
   - Acceptance of terms
   - Use of services
   - Intellectual property
   - Programme participation rules
   - Limitation of liability

3. **Safeguarding** (`/safeguarding`)
   - Commitment statement
   - Key principles
   - DBS checks, training info
   - Reporting concerns (with contact)
   - Code of conduct
   - External resources (NSPCC, Childline)

#### UI Fixes
- Fixed mobile nav close button (X) visibility - changed to white color

### Documented Non-Critical Items
(Expected for MVP - require backend integration)
- "Load More Articles" button (placeholder)
- Category filter buttons (placeholder)
- Newsletter forms (simulate success)
- Contact form (simulate success)
- Registration/Application modals (simulate success)
- Map placeholder on contact page

---

## Final Site Structure

```
/
├── / (Homepage)
├── /about
├── /programmes
│   ├── /programmes/create
│   ├── /programmes/build
│   ├── /programmes/connect
│   └── /programmes/work
├── /events
│   └── /events/[id] (6 event pages)
├── /opportunities
│   └── /opportunities/[id] (8 opportunity pages)
├── /news
│   └── /news/[id] (8 article pages)
├── /get-involved
├── /contact
├── /privacy
├── /terms
└── /safeguarding

Total: 40 pages
```

---

## Data Files

### `/src/data/events.ts`
- 6 events with full details
- Fields: id, title, date, time, location, description, fullDescription, type, image, spots, featured, requirements, whatToBring, facilitator

### `/src/data/opportunities.ts`
- 8 opportunities with full details
- Fields: id, title, company, location, type, deadline, description, fullDescription, requirements, responsibilities, benefits, compensation, featured, contactEmail, postedDate

### `/src/data/news.ts`
- 8 news articles with full content
- Fields: id, title, excerpt, content, date, author, authorRole, category, image, featured, tags
- Helper functions: getArticleById, getFeaturedArticles, getArticlesByCategory, getRelatedArticles

---

## Key Components

### UI Components (shadcn/ui)
- Button (with custom variants: default, outline, outline-dark, purple)
- Card, CardContent
- Badge (with variants: purple, magenta, cyan, dark)
- Input
- Dialog (for modals)
- Sheet (for mobile nav)
- Separator
- Avatar

### Custom Components
- `Header` - Fixed header with scroll effect, mobile responsive
- `Footer` - Newsletter, social links, explore links
- `PageHero` - Reusable hero with badge, title, highlight, description
- `NewsCard` - Featured and regular news card variants
- `RegistrationModal` - Event registration form
- `ApplicationModal` - Opportunity application form

---

## Commits History

1. Initial project setup and homepage
2. Create all inner pages
3. Add clickable event pages with registration modal
4. Fix sticky sidebar on event detail page
5. Move TMRW to second line in hero description
6. Fix View All Events button visibility on light background
7. Add clickable opportunity pages with application modal
8. Add clickable news articles with detailed pages
9. Fix homepage Latest News to link to article pages
10. Add missing legal pages (privacy, terms, safeguarding)
11. Fix mobile nav close button visibility

---

## Environment

- **Framework:** Next.js 15.5.9
- **Node:** v18+
- **Package Manager:** npm
- **Hosting:** Vercel
- **Repository:** GitHub

---

## Future Enhancements (Not Implemented)

1. Backend integration for forms (contact, registration, application)
2. Newsletter subscription functionality
3. Category filtering on news page
4. Pagination / "Load More" functionality
5. Google Maps integration on contact page
6. CMS integration for content management
7. Authentication for member dashboard
8. Search functionality

---

*Last updated: January 22, 2026*
