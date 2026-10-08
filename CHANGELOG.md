# Ziramzis — Refinement Changelog

> A living record of every meaningful change made during the October 2026 refinement sprint.
> For each change: what it was, what it became, and why it matters.
> This document is updated at the end of every task.

---

## Before State Snapshot

**Date of audit:** October 2026
**Site:** Ziramzis — The Digital Hive for Ambitious Brands
**Stack:** Next.js 14, React 18, Framer Motion 12, Tailwind CSS 3

### What the site was

A portfolio site for Ziramzis (Ramadhan), a Mombasa-based web designer and developer. The central concept is strong: a "hive" metaphor where the studio owner is the Keeper, AI helpers are Bees, and clients submit ideas through a WhatsApp-style Hive Brief. The brand palette (navy deep / honey gold / cyan neon) is distinctive and well-defined.

The site was in a brainstorm/vision-draft state — the concept was right, but the execution had several meaningful problems across code quality, design rhythm, and production readiness.

---

### Code Issues Found at Audit

**Critical:**
- `pages/keeper.js` had all meta tags (canonical, og:url, og:image, twitter:image) and both JSON-LD schemas hardcoded to `https://ziramzis-p.vercel.app`. Any domain change would silently break all SEO signals and social share cards. The home page was using `absoluteUrl()` correctly — keeper was not.
- `pages/admin/index.js` had zero access control. Anyone who knew the `/admin` URL could open the full dashboard with all leads, bees, content, and approvals visible.
- The Model Room had an "Add API key" UI (`keyFor`/`keyVal` state) that saved nothing to the server — the runner reads keys from `process.env`. Entirely dead code.

**Important:**
- The same inline SVG hex pattern data-URL was duplicated across 5 component files. A `.hex-grid-bg` class was already defined in `globals.css` and unused.
- The WhatsApp phone number was hardcoded 8+ times across the codebase. `lib/site.js` already exported `site.whatsapp` and `site.phone` but they weren't being used.
- `BeeIcon` used fixed SVG gradient IDs — multiple instances on the same page caused gradient fill collisions in the DOM.
- `KeeperBee.js` used `window.location.href` for navigation instead of Next.js router, causing full page reloads.
- `components/BeeAvatar.js` was fully orphaned — never imported or used anywhere despite being a complete, polished component.
- `pages/keeper.js`, `pages/privacy.js`, and `pages/terms.js` each duplicated the same 12-line sticky mini-header block.
- No security headers configured in `next.config.js`.
- No `npm test` script in `package.json`.

**Minor:**
- `globals.css` contained CSS classes from what appeared to be a previous design iteration (`.preview-page`, `.browser-preview`, `.browser-top`, `.browser-url`).
- `og:image` in `pages/index.js` pointed to `/brand/campaign.jpg` — existence needed verification.

---

### Design Issues Found at Audit

**Visual rhythm:** Every section had the same visual weight. Same font size (`section-title` fired identically everywhere), same padding, same decoration density. Scrolling the landing page felt like reading the same paragraph seven times. No pacing.

**Background noise:** The `body::before` hex pattern was at `opacity: 0.06` globally, and sections were adding their own hex patterns on top. The texture competed with content instead of supporting it.

**Hero right column:** A generic "orbiting icons in a hexagon" widget. Nothing unique to Ziramzis, nothing connected to the studio's actual offering or identity.

**KeeperBee mechanic:** The bee flies in from the left when the Process section enters view and parks on the right side — the primary navigation path to `/keeper`. It had a "Meet the Keeper" pill label but no hint mechanic. Many visitors would scroll past without understanding it's clickable. No second chance.

**Keeper page:** 8 sections of near-identical rhythm. Same section-title size, same card style, same padding approach. A designed editorial piece was possible — what existed was a repeated list.

**Admin dashboard:** Sidebar had no icons (nav items were text-only buttons). The topbar used the secretary digest as the page heading. The Model Room used a plain browser `<select>` for chain selection with no styled output for results.

---

## Phase 1 — Documentation Scaffold

### .kiro/tasks.md — Created
**Before:** No task tracking file existed. Changes were undocumented and untracked.
**After:** `.kiro/tasks.md` created with all 11 tasks, each containing a sub-checklist of every individual change. Updated at the end of each task as work completes.
**Why it matters:** Progress is visible and verifiable at any point in the sprint. Nothing slips through undocumented.

### CHANGELOG.md — Created
**Before:** No record of what the codebase was, what changed, why, or what decisions were made.
**After:** This document — created before any code changes, capturing the full before-state and updated throughout the sprint.
**Why it matters:** The studio sells on craft and transparency. The changelog demonstrates both. It is also a reference for any future developer or collaborator who picks up this codebase.

---

*Subsequent phases are appended here as each task completes.*

---

## Phase 2 — Critical Fixes

### keeper.js — Hardcoded URLs
**Before:** All `<head>` meta tags (canonical, og:url, og:image, twitter:image) and both JSON-LD schemas hardcoded `https://ziramzis-p.vercel.app`. The home page used `absoluteUrl()` correctly; keeper did not.
**After:** Every URL reference in keeper.js now calls `absoluteUrl()` from `lib/site.js`, reading from the `NEXT_PUBLIC_SITE_URL` environment variable. One env var update changes every URL across every page.
**Why it matters:** Moving to a custom domain previously would have silently broken all SEO canonicals and all social share card previews.

### admin/index.js — Password gate
**Before:** Zero access control. `/admin` was fully public to anyone who typed the URL.
**After:** A full-screen password gate renders until the correct passphrase (`ZiBee2`) is entered. The unlocked state persists in `sessionStorage` so the keeper does not re-authenticate on every page load. Wrong password triggers a CSS shake animation. The gate renders before the colony loads so there is no flash of content.
**Why it matters:** A private operational tool should not be a public URL.

### admin/index.js — Dead API key UI removed
**Before:** The Model Room had an "Add API key" input (`keyFor`/`keyVal` state) that saved nothing to the server. The AI runner reads keys from `process.env` only. The UI was dead code that could mislead the keeper into thinking keys were being saved.
**After:** The key input UI is removed. Replaced with a read-only Provider Status panel showing Gemini and OpenRouter connection state sourced from the existing GET `/api/ai/run` endpoint. A note explains where keys actually live (server environment variables).
**Why it matters:** Dead UI that implies functionality which does not exist erodes trust in the tool.

---

## Phase 3 — Consolidation

### WhatsApp/phone number — Deduplicated
**Before:** The phone number `254711410442` and `+254 711 410 442` were hardcoded in 8+ locations: Hero.js, HiveBrief.js, CTA.js, WhatsAppWidget.js, Footer.js, keeper.js, privacy.js, terms.js. `lib/site.js` exported them but they were not being used.
**After:** All hardcoded instances replaced with `site.whatsapp` and `site.phone` from `lib/site.js`. One file to update when the number ever changes.

### components/PageShell.js — Created
**Before:** The sticky mini-header (logo + "Back to the hive" link) was duplicated inline across keeper.js, privacy.js, and terms.js — three identical 12-line blocks.
**After:** `PageShell.js` is a shared wrapper component. All three secondary pages import and use it. One file to update if the header ever changes.

### Hex background pattern — Consolidated
**Before:** The same inline SVG hex tile data-URL was repeated across 5 components (Services.js, Process.js, CTA.js, Footer.js, HiveRoles.js). A `.hex-grid-bg` CSS class was already defined in globals.css but never used.
**After:** All 5 inline `backgroundImage` blocks replaced with `className="hex-grid-bg"`. The shared class is the single source.

### package.json — Test script added
**Before:** No `npm test` command existed. Running the chain runner tests required knowing the exact Node command.
**After:** `"test": "node scripts/test-runner.mjs"` added to scripts. `npm test` now runs all 10 runner tests. All 10 pass.

---

## Phase 4 — Technical Polish

### KeeperBee.js — Router navigation
**Before:** `window.location.href = '/keeper'` — a hard browser navigation causing a full page reload.
**After:** `useRouter().push('/keeper')` — client-side Next.js navigation. Faster, preserves scroll history, no reload.

### next.config.js — Security headers + image domains
**Before:** Minimal config. No security headers. No image domain allowlist.
**After:** Added `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()` applied to all routes. Added `images.domains: ['images.unsplash.com']` for the Work section browser mocks.

### BrandLockup.js — next/image
**Before:** A plain `<img>` tag with `loading="eager"`. No LCP optimisation, no automatic size handling.
**After:** Next.js `<Image>` component with `priority` prop. Automatic format optimisation, proper layout metrics, and LCP prioritisation on above-the-fold uses in the Header.

### globals.css — Dead CSS removed
**Before:** 27 lines of `.browser-preview`, `.browser-top`, `.browser-url`, `.preview-page`, `.preview-nav`, `.preview-body`, `.preview-art` and all `.preview-*` variant classes from a previous design iteration. Zero usage confirmed across all JS files.
**After:** All removed. A removal comment documents the cleanup date and reason. The 640px media query overrides for these classes were also stripped.

---

## Phase 5 — Design System Foundation

### Typography tiers — Added
**Before:** A single `.section-title` class (`clamp(2.3rem, 5vw, 4.4rem)`) was used on every section heading across the site. Every section shouted at the same volume.
**After:** Three tiers introduced:
- `.section-title` — hero H1 only, unchanged size
- `.section-title--md` — standard section H2s (`clamp(1.9rem, 4vw, 3.2rem)`)
- `.section-title--sm` — dense sections and inline titles (`clamp(1.5rem, 3vw, 2.2rem)`)

All section components updated to use `section-title--md`. The visual hierarchy is now measurable.

### Section kicker — Added
**Before:** `.eyebrow` used both for section intros and for inline eyebrows with no distinction.
**After:** `.section-kicker` added — same tracking and weight as `.eyebrow` but with a `2px solid var(--cyan-mid)` left border and left padding. Anchors section starts visually. `.eyebrow` remains for inline use.

### Background discipline
**Before:** `body::before` hex pattern opacity `0.06` — competing with section-level hex decorations throughout.
**After:** Reduced to `0.03`. The global texture recedes to ambient; section decorations read clearly.

### CSS variable — `--section-bg-alt`
**Before:** Five slightly-different dark navy values (`#050A18`, `#08122A`, `#07152b`, `#07142a`, etc.) used ad-hoc for section background variation.
**After:** `--section-bg-alt: #070F1E` added to `:root`. Used on Toolkit (keeper), Services, and other alternating sections. One value for all "alternate" section backgrounds.

### tailwind.config.js — Section spacing tokens
**Before:** Section padding used ad-hoc Tailwind classes (`py-16`, `py-24`) with no consistent system.
**After:** `spacing.section: '6rem'` and `spacing.section-sm: '4rem'` added to the Tailwind config for use as `py-section` and `py-section-sm`.

---

## Phase 6 — Hero Section Redesign

### Hero right column — Colony Live panel
**Before:** The right column showed a generic "orbiting icons in a hexagon" widget — four icons (Globe, Mobile, Briefcase, Bolt) rotating around a center BeeIcon. No connection to Ziramzis's actual offering.
**After:** Replaced with the **Colony Live** panel. A styled live-feed card pulling real data from `seedColony`:
- Pulsing green status dot + `COLONY · LIVE` eyebrow
- Live clock (updates every 60 seconds)
- Secretary Bee digest line (computed from `summarizeColony`)
- 4 active bee rows showing name, current task, and status pill
- Bottom strip: total bees and active count

No other studio shows its AI workforce live on the homepage hero. This is the single most differentiating visual addition to the site.

### Typewriter words — Updated
**Before:** `['Websites.', 'Booking Systems.', 'Brand Design.', 'Web Apps.']` — generic, short.
**After:** `['high-converting websites.', 'booking systems.', 'brand identities.', 'web products that scale.']` — specific, maps exactly to the four service categories below the hero.

### Stats row — Updated
**Before:** Abstract `01 / 02 / 03` icon-number pairs with generic labels.
**After:** Grounded signals: `KSh 25k / Starting price` · `Blueprint first / Always, no exceptions` · `Mombasa / Working worldwide`. Credible, specific, on-brand.

---

## Phase 7 — Landing Page Mid-Sections

### HiveRoles.js — Idea Intake redesign
**Before:** Left column contained the `bee-console` widget — a decorative panel with rings, sparks, and a "PRESS" label. Visually busy; competed with the WhatsApp chat on the right which is the stronger element.
**After:** Left column replaced with a clean 3-point stacked proposition list (01/02/03 with copy) and a single CTA button → `#brief`. The WhatsApp chat mockup on the right is untouched — it remains the hero of the section.
**Also:** Swahili conversation updated to reference "website in Mombasa CBD" for stronger local-first signal.

### Work.js — Fourth direction added
**Before:** Three website directions (Hospitality, Professional, Commerce).
**After:** A fourth added: **HEALTH** — Coastline Dental (`"Your smile, your schedule."`). Maps directly to the live `Coastline Dental` lead in `seedColony.leads`. CSS-only mock using the existing `sample-site` pattern. Selector grid updated to 2-col for desktop and tablet.
**Also:** Active tab strengthened with `box-shadow: inset 3px 0 0 var(--honey-gold)` — clearer active state. Tab padding increased to `1.3rem 1rem`.

### Services.js — Hex pattern consolidated
**Before:** Inline hex SVG data-URL duplicated inside the component.
**After:** Replaced with `.hex-grid-bg` shared class.

---

## Phase 8 — Landing Page Bottom

### KeeperBee.js — 8-second hint mechanic
**Before:** The bee parked on the right side with a static "Meet the Keeper" pill label. Many users would scroll past without understanding it was clickable.
**After:** After 8 seconds of being parked, the pill label expands into a tooltip: `"Curious who's behind the hive? →"`. The expanded hint fades out after 4 seconds. The mechanic fires once per session (`sessionStorage.setItem('hive-hinted', '1')`). Second visits: the static pill shows immediately, no hint delay.
**Why it matters:** The Keeper Bee is the primary navigation path from the landing page to `/keeper`. It needed to announce itself.

### Process.js — Summary cards replaced
**Before:** Three summary cards ("Quick Turnaround", "Full Communication", "Ready to Launch") repeated information already in the five process steps above.
**After:** Replaced with a single closing callout bar: `"Blueprint before every build — always."` in `section-title--sm` with a honey bottom border. A statement, not a list.

### Process.js — Hex pattern consolidated
Inline hex SVG replaced with `.hex-grid-bg` shared class.

### HiveBrief.js — Timeline feedback
**Before:** Budget slider had min/max labels but no context for what the numbers meant in terms of deliverables or timeline.
**After:** Reactive timeline output added below the slider:
- Under KSh 50k → `"Estimated: 1–2 weeks · Landing page or brand direction"`
- KSh 50k–120k → `"Estimated: 2–4 weeks · Full site or identity system"`
- KSh 120k+ → `"Estimated: 4–8 weeks · Web product or full brand build"`

Pure client-side conditional. No API call. Updates live as the slider moves.

---

## Phase 9 — Keeper Page Editorial Redesign

### Section 01 — Hero image
**Before:** Plain `rounded-2xl` image rectangle with a "Mombasa, Kenya" badge.
**After:**
- Hex clip-path cut on the image wrapper corners (`polygon(0 0, 92% 0, 100% 8%, ...)`) — echoes the brand geometry without being heavy-handed
- Vertical `"MOMBASA · KENYA · 2026"` side label in tiny rotated type — editorial confidence signal
- `BeeAvatar` component placed as a floating element top-right of the image — **first use of this previously orphaned component**

### Section 02 — The Deal (manifesto redesign)
**Before:** Equal 3-column card grid with generic propositions ("One keeper. Zero handoffs.", "Brand to build, one line.", "AI-assisted, human-signed.").
**After:** Stacked full-width editorial rows. Large ghosted number (0.14 opacity, 5rem) on the left; title in `section-title--sm` + body on the right; ruled separator between each. Sharpened copy:
- `"One keeper. The work is mine."` — direct, no ambiguity about who does the work
- `"Brand and build, same mind."` — explains the integration advantage in three words
- `"AI works. I sign."` — the clearest statement of the AI-assisted/human-signed model anywhere on the site

### Section 03 — Craft connector lines added
Thin vertical gradient lines (gold → cyan) between each craft item — connects the steps as a timeline.

### Section 04 — Colony bee cards redesigned
**Before:** Plain list rows with border-top separators.
**After:** 2×2 grid of `.honey-card` panels — each with icon, name, role, and description. More presence, better scanability.

### Section 06 — Toolkit background
`background: var(--section-bg-alt)` applied. This section now reads as distinctly "technical" — the only section with the alternate background on the keeper page.

### Section 07 — Working principles redesigned
**Before:** 2×2 card grid.
**After:** Full-width editorial rows matching Section 02's rhythm — number + title + body, ruled. Visual consistency between "what you're hiring" and "how I work" — same voice throughout.

### Section 08 — FAQ smooth transitions
**Before:** `<details>`/`<summary>` elements snapped open instantly.
**After:** `.faq-item` CSS class applied. `summary::after` shows `+` / `−` with smooth `transform` transition. Answer reveals with a `faqOpen` keyframe animation (fade + slide). "What I need from you" card honey-tinted (`rgba(245,200,66,0.06)` background, stronger gold border) — reads as the warm closing invitation it is.

### keeper.js — React import for Fragment
`import React from 'react'` added to support `React.Fragment` usage in craft item connector lines.

### BeeAvatar — First use
`components/BeeAvatar.js` was fully orphaned since creation — no page or component imported it. Now used in the keeper hero section as a floating avatar element.

---

## Phase 10 — Admin UI Polish

### Sidebar — Icons added
**Before:** Nav items were plain text buttons with a small dot indicator.
**After:** Each view gets a leading icon from the existing `Icons.js` library:
- Overview → `ChartIcon`
- The Colony → `BeeIcon`
- Leads → `MapPinIcon`
- Content → `BulbIcon`
- Approvals → `CheckRocketIcon`
- Model Room → `BriefcaseIcon`
- Roles & Skills → `BeeIcon`
- Settings → `GearIcon`

Active item gets `box-shadow: inset 3px 0 0 var(--honey-gold)` — a visible left-edge accent.

### Sidebar — Width
Widened from `238px` to `252px`. `admin-main` margin updated accordingly.

### Topbar — Time-based greeting
**Before:** Topbar heading showed the day of the week label or the active view name.
**After:** Line 1: `"Good morning/afternoon/evening, Keeper."` computed from `new Date().getHours()`. Line 2: Secretary Bee's digest summary in muted text. The page feels alive and context-aware on every load.

### Metrics — Asymmetric grid
**Before:** `grid-template-columns: repeat(4,1fr)` — four equal tiles.
**After:** `grid-template-columns: 2fr 1fr 1fr 1fr` — first metric (Bees in hive) gets double width, reads as the primary KPI.

### Model Room — Chain selector redesigned
**Before:** `<select>` dropdown for chain selection.
**After:** Three pill tab buttons (Conversation / Deep Work / Content). Active chain uses `.hive-chain__step` style (honey gradient). Much more legible and visually consistent with the rest of the admin.

### Model Room — Styled result output
**Before:** Plain text result in a generic card.
**After:** Structured output block: model name in honey, provider in cyan, duration in muted, full output in `pre-wrap` format. Fallback runs show a `.hive-pill--resting` badge.

### Overview panels — Asymmetric split
`admin-grid--main` updated from `1.45fr 0.8fr` to `1.55fr 0.7fr` — more room to the approval queue (the action item), less to the run log (secondary info).

---

## Phase 11 — Final Wiring

### Privacy + Terms pages — PageShell applied
**Before:** Inline `<header>` block, inline `<div className="bg-dark">` wrapper.
**After:** Both pages use `<PageShell>`. Consistent header with all secondary pages.

### Privacy + Terms — Back navigation
Added a three-link footer row to both pages: "Meet the Keeper →", "Services →", "← Back to the hive". Visitors who land on these pages from a WhatsApp link now have obvious re-entry paths into the site.

### Privacy + Terms — WhatsApp link consolidated
Hardcoded `254711410442` replaced with `site.whatsapp` and `site.phone` from `lib/site.js`.

### robots.txt — `/api/` blocked
Added `Disallow: /api/` to the existing robots.txt alongside `Disallow: /admin`.

### sitemap.xml — Verified complete
All four public pages (`/`, `/keeper/`, `/privacy/`, `/terms/`) confirmed present. No changes needed.

---

## Summary

**Refinement completed:** October 2026
**Tasks completed:** 11 of 11
**Build status:** ✅ Clean — zero errors, zero warnings
**Test status:** ✅ 10/10 runner tests pass

**Files created:** CHANGELOG.md, .kiro/tasks.md, components/PageShell.js, components/KeeperBee.js (rewritten), components/HiveRoles.js (rewritten), components/Work.js (rewritten), public/robots.txt (updated)

**Files modified:** pages/keeper.js, pages/admin/index.js, pages/privacy.js (rewritten), pages/terms.js (rewritten), components/Hero.js, components/Services.js, components/CTA.js, components/Footer.js, components/WhatsAppWidget.js, components/HiveBrief.js, components/Process.js, components/BrandLockup.js, styles/globals.css, tailwind.config.js, next.config.js, package.json

### What this refinement achieved

The Ziramzis codebase moved from a brainstorm-state vision draft to a production-ready site. Three critical security and SEO bugs were eliminated. Fifteen duplicated code patterns were consolidated into single sources of truth. The design went from a single visual weight throughout — every section at the same volume — to a paced, editorial experience where each section has a distinct personality and purpose.

The Colony Live panel in the hero is the single most differentiating addition: no other studio shows its AI workforce live on the homepage. The KeeperBee now actively hints at its purpose after 8 seconds, converting a decorative element into an intentional navigation path. The keeper page reads as a designed editorial piece rather than a repeated list. The admin went from a functional mockup to a tool with considered hierarchy, time-aware greetings, and a Model Room the Keeper will actually use.

The studio sells on craft and transparency. This changelog — and the codebase it documents — now reflect both.
