# Ziramzis - The Digital Hive

One-page portfolio for Ziramzis, a digital studio based in Mombasa, Kenya.
Dark navy + honey gold + cyan neon palette, bee/hexagon motif, animated bee
characters, and a WhatsApp-first conversion flow.

## Sections (single page)

- Header - fixed nav with mobile menu
- Hero - typewriter headline, cyber-bee mascot, orbit visual
- Services - "What the hive builds" cards + industries grid
- HiveRoles - "The Idea Hive", animated WhatsApp-style conversation
- Work - "Website directions": three interactive browser-frame design directions
- Process - five steps + summary cards
- HiveBrief - package picker (KSh ranges), idea box, budget slider, prefilled WhatsApp message
- CTA - contact grid with WhatsApp and call buttons
- Footer - quick links, contact, "Follow the Bee" back-to-top
- WhatsAppWidget - floating chat button

## Admin route

/admin - "The Inner Hive": a static mock CRM dashboard (leads, roles, briefs,
pipeline) with mock data only. No auth yet; marked noindex and disallowed in
robots.txt. Next step noted in-app: connect real lead data and auth.

## Tech stack

- Next.js 14 (Pages Router), React 18
- Tailwind CSS 3 + custom design tokens in styles/globals.css
- framer-motion 12 (reduced-motion aware via MotionConfig)
- Static pages, deployed on Vercel: https://ziramzis.vercel.app

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Project structure

```
ziramzis-portfolio/
  components/   Header, Hero, Services, HiveRoles, Work, Process,
                HiveBrief, CTA, Footer, WhatsAppWidget, BeeScenes, Icons
  pages/        _app, _document, index, admin/
  styles/       globals.css (design tokens + custom classes)
  public/       robots.txt, sitemap.xml, favicon.svg
```

## Customization

- WhatsApp number (wa.me/254711410442): Hero, Header, Footer, CTA,
  WhatsAppWidget and the HiveBrief message builder
- Packages and KSh price ranges: `packages` array in components/HiveBrief.js
- Industries grid: components/Services.js
- Sample website directions: components/Work.js
- Admin mock data (leads, roles, briefs, pipeline): pages/admin/index.js
- Colors and tokens: tailwind.config.js and the :root block at the top of
  styles/globals.css

## Deployment

Push to GitHub, import the repo on Vercel, and it deploys on every push.
`npm run build` produces fully prerendered static pages.

## Contact

WhatsApp +254 711 410 442 | Mombasa, Kenya | hello@ziramzis.app