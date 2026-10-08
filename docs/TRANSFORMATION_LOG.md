# Ziramzis — Transformation Log

> A living record of how the studio site is being rebuilt. This is not a release note; it explains the intention behind each change so later decisions remain consistent.

## North star

Ziramzis should feel like a focused Mombasa digital studio led by a real keeper — not a generic AI agency, not a neon template, and not a collection of unrelated bee illustrations. The site uses the hive as a working metaphor: clear roles, craft, care and human sign-off.

## Baseline — October 2026

The project already had a strong name, usable brand campaign assets, a public portfolio, a Keeper page, and an early Inner Hive prototype. Its main problem was not lack of content; it was inconsistency:

- raster campaign work, code-drawn cyber bees and cute 3D bees were competing visually;
- mobile type and controls were too large in several sections;
- the Hero tried to explain too much with a typewriter, moving bee and mock live panel;
- the Keeper page had useful content but lacked a deliberate visual story;
- the Inner Hive appeared private but had only a client-visible password and browser-local data.

## Foundation completed

### Private Inner Hive

- Replaced the browser-visible password gate with server-side session authentication.
- Added a dedicated sign-in route and sign-out control.
- Restricted the model-runner API to authenticated Keeper sessions.
- Added a safe environment-variable example for Vercel configuration.
- Kept the current colony data as an explicit local prototype; a database and real user accounts remain the next architectural layer.

### Verification

- Model fallback runner: 10/10 tests pass.
- Production build: compiles successfully after the security foundation change.

## Visual direction — chosen

### The direction

**Digital beekeeper atelier.** Dark, calm, editorial, practical. Honey and cyan remain accents rather than effects everywhere. Bees appear only when they carry meaning; they are not decoration on every surface.

### Rules

1. One primary brand asset language per view. Existing campaign artwork is used as framed editorial art, not repeated as wallpaper.
2. Large type earns its place on desktop and compresses intentionally on phones.
3. Calls to action are content-width, never full-width by default on mobile.
4. Background patterns and glow support hierarchy; they never fight the words.
5. The Keeper should eventually appear through a considered portrait/editorial image. The supplied personal photos are reference material, not final hero artwork.

## Public-site rebuild

### Homepage Hero — in progress

**Before:** animated typewriter heading, oversized cyber bee and a mock Colony Live panel. It combined too many ideas and did not translate well to mobile.

**Now:** one clear statement, concise studio positioning, one primary action, one secondary route to work, and the existing campaign asset inside a restrained editorial frame. The Hero no longer depends on an exaggerated floating bee to communicate the brand.

**Why:** the homepage should make a visitor understand the studio in seconds. The colony belongs deeper in the narrative, not as the first thing everyone must decode.

## Open work

- Finish responsive styles and visual QA for the rebuilt Hero.
- Recompose the Keeper hero around a genuine keeper story and future intentional portrait.
- Replace remaining mixed bee treatments with one role-based visual language.
- Create the design/practice section: typography, logo systems, brand assets, interface design and build.
- Build the Services Library only after the studio narrative is coherent.
- Replace browser-local Inner Hive storage with authenticated persistent data and audit history.

## How to use this log

Every material design or architecture change should add:

1. what changed;
2. why it changed;
3. how it was verified;
4. the next dependency or unfinished decision.

### Homepage Hero — implementation note

- Replaced the animated typewriter, public mock dashboard and Hero cyber-bee with a single editorial composition.
- Used `public/brand/campaign.jpg` as a contained studio artefact rather than stretching it across the page.
- Added a dedicated responsive style block: heading scale, action sizing and visual notes all reduce on narrow phones.
- The old `BeeCharacter` export remains temporarily because the floating contact widget still consumes it. It is scheduled for a role-specific replacement instead of a rushed global deletion.

**Verification:** Next.js compilation completed successfully through static-page generation. Manual browser QA remains the next check because the available browser-preview tool reset during capture.

## Landing-page system — implementation in progress

### Services

**Changed:** Replaced the four icon-heavy tiles with a numbered studio ledger. Industries are now a quiet capability strip rather than six more floating cards.

**Why:** The landing page had too many equally weighted cards. The ledger makes the offer easier to scan, reduces generic SVG decoration, and creates an editorial rhythm that can carry through the entire site.

### Idea Intake

**Changed:** The animated WhatsApp conversation is now deliberately phone-sized: `24.5rem` maximum width on desktop, `21.5rem` maximum width on phones, with a shorter mobile conversation body.

**Why:** It is a conversation preview, not a dashboard. Its scale now supports the idea-intake story instead of taking over the section.

### Responsive rules

- All principal landing sections now use one responsive spacing system.
- Service rows collapse into a readable number/title/description layout on phones.
- Work selectors become one column on phones instead of squeezing cards into narrow two-column cells.
- Brief and contact actions remain content-width rather than being forced full-width.

### Contact close

**Changed:** Rebuilt the final contact area as a two-part conversation close: a direct keeper invitation, a compact phone-bee cue, then an honest contact grid. It no longer relies on an oversized flying bee, several decorative hexes or oversized buttons.

**Why:** The final section should make it easy to choose the next step, not repeat the visual noise from previous sections. The existing phone-bee idea remains, but it is framed and scaled as a contact cue.

### Footer consistency

- Replaced the final hard-coded WhatsApp link with the shared site contact constant.

### Contact Bee refinement

**Changed:** Replaced the generic contact bee with a dedicated cyber-style conversation bee. It uses the same amber/cyan/glass material language as the Hero Bee and holds a separately drawn phone with a clear visual gap from its body.

**Why:** The contact character needs to communicate conversation at a glance without looking like a phone was attached to the bee. The Keeper messenger was not changed.

### Website-direction image ownership

- Moved the three currently used Unsplash direction photos into `public/images/work-samples/`.
- Updated the work showcase to reference the local files.

**Why:** The section no longer relies on an external image host at runtime. These are transitional visual references and should later be replaced with original Ziramzis project imagery or generated/licensed assets.

## Editorial landing pass — October 2026

- Website Directions now presents each reference as a deliberate starting direction instead of a grid of generic cards.
- Hive Brief now uses a guided, compact brief flow while preserving its WhatsApp handoff and budget control.
- How I Work is now an editorial five-step route; the Keeper Bee remains in place and still routes to the Keeper page.
- The Keeper label changes from teal to gold on hover without changing the bee or its destination.
- The temporary home-page error was a malformed template literal in HiveBrief. It was corrected; the local Next server owns .next while running, so the cache does not need manual removal when the server is already compiling successfully.

## Mobile rhythm correction — October 2026

- Replaced the repetitive mobile service ledger with a compact staggered service deck.
- Condensed the Idea Intake explanation into three visual waypoints while keeping the animated WhatsApp conversation as the main feature.
- Website Directions now leads with the live sample on mobile; compact direction selectors come afterward. Desktop switches the sample to the left and the selectors to the right.
- Hive Brief options use clear, selectable two-column cards on phones.
- Restored visual personality to How I Work with a staggered five-stop route instead of a text-only list.
- Added a distinct dental visual composition to the Health sample.
- Fixed Keeper Bee hover wiring: the label now shifts from teal to gold on hover.

## Screenshot-driven visual refinement — October 2026

- Converted the four What I Build panels from empty text cards into miniature visual systems: brand marks, a website frame, a product grid and a growth chart.
- Replaced the Idea Intake mobile cards with three deliberately irregular honey-droplet waypoints.
- Reduced Website Directions phone mockup typography, browser chrome, captions and selector heights; the direction controls now fit their short labels.
- Tuned the What I Build desktop heading and grid proportions so the section is not dominated by oversized text and empty space.

## Landing-page finishing pass — October 2026

- Reframed What I Build as an interactive service navigator: one service explanation and visual system at a time, instead of oversized cards or a long list.
- Changed the Idea Intake mobile waypoints into balanced honey droplets and centered the arrow-free Start with your idea CTA.
- Replaced the How I Work card glows with contextual mini illustrations for listening, shaping, building, checking and launch.
- Removed the Mombasa, Kenya / working worldwide hero line.
- Restored every footer item after a compression attempt removed content; the footer now only changes spacing and responsive layout.
- Verification: local home page returned HTTP 200 and the production build reached optimized compilation after the correction.

## Targeted landing refinement — October 2026

- Preserved the side-chat landing structure after a full Hero-to-Footer audit.
- Replaced the Idea Intake profile letter with the actual Ziramzis logo mark.
- Improved mobile honey-droplet alignment and label scale without turning them back into cards.
- Rebalanced Website Directions on desktop: a wider, controlled showcase stage at left and tighter direction controls at right; reduced real-site mockup typography and mobile control density.
- Refined the How I Work illustrations into five contextual artefacts: brief note, moodboard, build screen, QA check and handover.
- Recovered the local dev server from a corrupted generated .next cache; source syntax checks and existing tests passed, and the homepage returned HTTP 200 after the clean rebuild.

## Brand mark correction — October 2026

- Verified that Assets/ZLogo.jfif is byte-identical to public/brand/mark.jpg; this is the authoritative Ziramzis mark.
- Replaced the previously generated SVG LogoMark with the real mark everywhere it is shared: Keeper page, PageShell headers and the Idea Intake chat profile.
- Changed the document favicon reference from the generated SVG to the real brand mark.
- Kept the full wordmark lockup separate for Header and Footer use.

## Keeper page editorial refinement - October 2026

- Replaced the faux Keeper header text with the actual Ziramzis wordmark asset.
- Tightened the hero type scale and spacing so the introduction reads confidently on phones without overwhelming the screen.
- Reframed "The Deal" as a Keeper-led editorial split: a personal accountability statement sits alongside the three commitments, rather than another full-width list.
- Rebuilt "The Craft" as three connected disciplines with a compact delivery path and a single contextual Hive Materials inventory. This absorbs the old standalone Toolkit section and shortens the page.
- Replaced the repeated Working With Me rows with a balanced four-part trust grid, retaining the requirements for client collaboration below it.
- Renumbered the remaining sections accordingly; the Colony, Blueprint, handover, FAQ, and contact paths remain intact.
- Verification: source syntax check passed, existing project tests passed, and /keeper returned HTTP 200 locally.
