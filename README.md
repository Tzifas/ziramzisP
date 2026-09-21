# Ziramzis — Busy Bee Studio

Ziramzis is a Mombasa-based brand, web design and development studio. The public site introduces the studio, captures project briefs through WhatsApp, and explains the Bee/Colony way of working. The private-facing product in progress is **The Inner Hive**: an operations workspace for the bees, their skills, assignments and reports.

## Live site and hosting

- Host: Vercel
- Current Vercel URL: `https://ziramzis-p.vercel.app`
- Contact email: `ziramzisfeis@gmail.com`
- WhatsApp: `+254 711 410 442`
- Location: Mombasa, Kenya

Set `NEXT_PUBLIC_SITE_URL` in Vercel when a custom domain is ready. The code falls back to the current Vercel URL in `lib/site.js`.

## Routes

- `/` — Public studio landing page
- `/keeper` — Meet the Keeper: person, process and working principles
- `/terms` and `/privacy` — Legal pages
- `/admin` — Inner Hive prototype. It is intentionally `noindex` and disallowed in `robots.txt`.

## Brand assets

Source brand artwork lives in `Assets/`. Deployment-ready copies live in `public/brand/`:

- `wordmark.jpg` — primary Ziramzis Busy Bee Studio lockup
- `mark.jpg` — Z bee mark
- `campaign.jpg` — landscape campaign/social card
- `campaign-square.jpg` — square campaign asset

The visible site lockup is provided by `components/BrandLockup.js`. The code-native `components/LogoMark.js` remains available for places that need a lightweight SVG mark.

## Inner Hive direction

`/admin` is not a CRM yet. It is a visual foundation for the real Inner Hive. The architecture should grow around these roles:

- **Managing Bee / Queen’s Secretary** — receives reports, delegates work, flags blockers and gives the owner a concise daily summary.
- **Lead Management Bees** — Scout/Hunting Bees find local business signals, qualify them and move them into outreach.
- **Landing Page Bee** — handles the first visitor conversation and turns useful context into a Hive Brief.
- **Research and Planning Bees** — competitor research, opportunity mapping, PRDs, scope, roadmap and architecture.
- **Creation Bees** — design, branding, content, marketing and build work, each with explicit skills and assignments.
- **Care Bee** — follow-ups, launch checks, client updates and long-term relationship care.

Before adding a backend, define the data model for bees, skills, tasks, leads, briefs, reports, approvals and activity history. The current admin numbers and cards are mock data only.

## Stack

- Next.js 14, Pages Router, React 18
- Tailwind CSS 3 plus `styles/globals.css` design tokens
- Framer Motion with user reduced-motion support
- Static Vercel deployment

## Local development

```bash
npm install
npm run dev
npm run build
npm start
```

## Content and configuration

- Site URL and contact constants: `lib/site.js`
- Public page metadata: `pages/index.js`, `pages/keeper.js`, `pages/terms.js`, `pages/privacy.js`
- Sitemap and crawl rules: `public/sitemap.xml`, `public/robots.txt`
- Public site sections: `components/`
- Inner Hive prototype: `pages/admin/index.js`

## Deployment

Push to the connected GitHub repository. Vercel deploys the production build from `main`.
