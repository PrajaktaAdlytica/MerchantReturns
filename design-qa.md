# MerchantReturns — textile and visual-depth refinement

Date: 28 October 2026

final result: passed

## Scope and visual truth

The user asked to incorporate the visual elements in eight supplied screenshots across the existing website and add wool, silk, chiffon and printed textile backgrounds. This is an adaptation to the already-selected forest/ivory/sage palette, editorial homepage and Atlas secondary pages, not a pixel clone of the burgundy references.

Source directory: `/Users/prajaktagaikwad/Desktop/`. Sources: `Screenshot 2026-10-28 at 22.42.50.png`, `22.42.40.png`, `22.42.38.png`, `22.42.36.png`, `22.42.23.png`, `22.42.21.png`, `22.42.17.png`, `22.42.15.png` (each filename uses the same Screenshot prefix). Each source is 2880×1800, including desktop UI and image-viewer zoom. Relevant website regions were cropped and normalized to 1120px width for comparison; source browser CSS dimensions are unknown. Implementation captures use 1440×960 and 390×844 CSS viewports, captured at 1 image pixel per CSS pixel. No claim of pixel-identical typography or composition is made.

Implementation: http://127.0.0.1:4186/

## Comparison evidence

All paths below are relative to this project root.

- `qa/v2/compare-handoff.png`: source and implemented parcel/timeline/evidence/appeal composition in one image.
- `qa/v2/compare-context.png`: source and implemented policy/customer/appeal → case → evidence/reviewer map.
- `qa/v2/compare-inspection-hero.png`: source and implemented warehouse hero, floating case and inspection checklist.
- `qa/v2/compare-learning.png`: source and implemented garment specimen, swatches and reason table.
- `qa/v2/compare-timeline-focus.png`: enlarged source and implemented timeline labels, status and evidence boundary.
- Browser captures: `home-desktop.png`, `home-mobile.png`, `handoff-desktop.png`, `context-desktop.png`, `context-mobile.png`, `signal-desktop.png`, `signal-mobile.png`, `learning-desktop.png`, `ledger-desktop.png`, `ledger-mobile-policy.png`, plus all five module hero captures in `qa/v2/`.

Comparisons intentionally preserve the current brand typography and palette. A vertical timeline replaces the reference's wide handoff table; the separate case desk provides the full interactive table. The compact inspection checklist expands on demand to keep the absent-evidence state prominent. The source's fictional branding and inconsistent dates were not copied.

## Findings and fixes

1. P2 — Intrinsic image height stretched the Atlas hero. Fixed the hero image viewport and reserved image dimensions. Recaptured `signal-desktop.png`: hero returns to 660px and the warehouse scene remains inside its visual column.
2. P2 — Parcel text overlapped the physical box and lacked contrast. Moved it to a separate ivory case card. Recaptured `handoff-desktop.png`; no text is painted onto the photograph.
3. P2 — Marketing paragraph spacing made the compact Returns Signal timeline clip its last event. Scoped compact typography, block-level dates and row spacing. Final browser measurement: four approximately 45px rows; last event is inside the card. `compact-timeline-final.png` records the revised state.
4. P2 — Full-page captures initially omitted lazy-loaded offscreen images. Reserved dimensions and inspected/captured sections after scrolling into view. Initial full-page evidence is diagnostic only; use the targeted final captures above.

No remaining actionable P0/P1/P2 visual issue found in this refinement scope.

## Required fidelity surfaces

- Typography: Newsreader editorial headings and Manrope UI retained; Atlas heroes use bolder Manrope. Source thumbnails and metadata remain intentionally compact; primary body copy, CTA labels and interactive tabs are readable in desktop/mobile captures.
- Layout: distinct full-width material sections; three-column handoff, connected workflow, layered product previews, garment-plus-reason matrix. Mobile stacks cards and provides a labeled horizontally scrollable workflow illustration and locally scrollable event table.
- Color: option 3 forest, ivory, sage and restrained orange retained. Silk brightens hero/workbench; sage chiffon supports learning; dark wool frames review; muted botanical print supports context and evaluation. Solid cards protect dense UI text.
- Imagery: seven new original assets: silk, chiffon, botanical print, parcel, garment study, connected workflow and warehouse inspection world. Raster assets are optimized JPEG/WebP. Cards, tables, diagrams and controls remain real HTML/React, not flattened UI screenshots.
- Copy: synthetic/demo labels remain; inspection stays not received; no automatic refunds, live store integrations or ROI claim. Reason bars derive from the ten seed records (5/2/1/1/1), not invented measured outcomes. Assigned next action aligns with the ER-118 fixture.

## Verification

- Browser audit of all 30 routes at 390px: document width remains 390px, h1 present, no broken loaded images. Evidence: `qa/v2/mobile-route-audit.json`.
- Desktop checks across module heroes, platform, solutions, pricing and pilot: no document overflow or broken loaded images. Evidence: `qa/v2/desktop-route-audit.json` and individual captures.
- Overview/Evidence/Policy tabs switch real content. Evidence tab explicitly explains absent inspection findings.
- Selecting a learning-table reason updates the question and garment label emphasis.
- Inspection draft checkbox works and does not change “Inspection not received.”
- GSAP/Lenis horizontal story exercised; track moved from 0 to -378px to -594px. Reduced-motion mode provides static content and a grid alternative.
- Browser console audit returned no warnings/errors during the route checks.
- `npm run build`: passed. `npm run test:sites`: 4/4 passed.

## Follow-up polish

P3: illustration art direction varies slightly between the miniature workflow and the more photographic warehouse hero; both use the same garment/packaging palette. No mobile reference was supplied, so mobile is an intentional responsive adaptation. Backend, payment, deployment and connected-store validation remain outside this local concept-preview refinement.


## Forest wool footer refinement
- Reused original fabric.jpg behind a contrasting ivory editorial headline, paper pilot card and oversized brand signature.
- Preserved product, company, legal and motion-control routes; added back-to-top anchor. Pilot card links to /pilot.
- Browser-reviewed at 1440px desktop and 390px mobile; mobile document/footer width exactly 390px, no horizontal overflow.
- Captures: qa/v2/footer-desktop.png and qa/v2/footer-mobile.png.
- Production build passed.


## Selected Selvedge identity
- Recreated Option 1 as vector paths; outlined Newsreader wordmarks. 24 SVG assets plus PNG/ICO icons and social image.
- Updated shared header, footer lockup/signature, embedded product preview, favicon links, manifest and OG image.
- Browser verified at 1440px and 390px; all four visible brand assets loaded; 390px document width, no overflow. Dark footer identity reviewed.
- Complete kit: public/brand/merchantreturns-selvedge-kit.zip. Asset gallery: /brand/index.html.
- Homepage evidence: qa/v2/selvedge-home-desktop.png. SVG XML validation and production build passed.


## GitHub / Hostinger pre-push check — 28 October 2026
- Seven key routes at 390px: home, products, Returns Signal, pricing, pilot, demo, sign-in. No document overflow or broken loaded images.
- Product index at 768px tablet and 1440px desktop: no document overflow or broken loaded images. Mobile navigation opens/closes in clean QA tab.
- Clean QA tab: no captured console errors. Screenshots and measurements in qa/v2/prepush-*.
- Build and four Sites tests pass. Added Apache/LiteSpeed .htaccess SPA fallback for PHP/HTML hosting; actual Hostinger routing and SSL require post-deployment verification.
- Forms/auth remain local concept previews; no lead backend. noindex retained. This is a quick responsive smoke check, not an exhaustive cross-browser/accessibility audit.

## Sticky navigation fix
- Header now uses position: sticky with top: 0; anchor destinations include header clearance.
- Mobile menu height is bounded to the available viewport and scrolls when needed.
- Browser: desktop 1440px, scrollY 1717, header top 0; mobile 390px, scrollY 1286.5, header top 0, menu opens/closes, no horizontal overflow.
- Production build and all four tests pass. Captures: qa/v2/sticky-nav-desktop.png and sticky-nav-mobile.png.
