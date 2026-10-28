# Brief-to-build coverage

The supplied master guide provides website quality and architecture defaults. MerchantReturns is the user's selected brand. The final color correction selects option 3's forest/chalk/sage/orange palette across the option 2 homepage and option 3 supporting-page direction.

| Requirement | Implemented destination / evidence |
| --- | --- |
| Buyer, apparel fit exception wedge, policy and budget owner | Home, `/solutions`, `/why-exceptions`, `/about`, pilot intake |
| Five distinct paid-offer hypotheses | Home horizontal suite, navigation menu, `/products`, five dedicated product pages, pricing table and intake selection |
| Native Shopify, Loop, support-desk/RMA alternatives; no uniqueness claim for generic exchange AI | Home baseline, `/compare/native-and-specialist-returns`, official Shopify and Loop links |
| Policy, item/order state, uncertainty, proposed disposition, warehouse state and approval | `/demo`, ten synthetic fixtures, ER-118 evidence pane, source matrix, review actions |
| 30-day policy, worn-status uncertainty, size-L mock inventory, pending approval, absent inspection | ER-118; `/resources/policy-matrix`; `fixtures/policy-matrix.json` |
| Configurable policy simulation | Demo 14/30/45-day control explicitly distinguishes source policy from local override |
| Compatible exchange can be rejected; edge/failed recommendation | Rejection action; zero-stock ER-121 and ER-126 disable approval; human refund review remains open |
| Human approval and customer appeal, including abuse review | Required reviewer rationale; customer tab appeal; `/trust/appeals`; no automatic eligibility/refund/abuse score |
| Fictional records, owners, chronology, sources, next action, pending/blocked/completed/rejected | `fixtures/synthetic-returns.json`, queue, local review record and export |
| Real queue/detail/evidence/report UI captures, 1440px and 390px | `qa/demo-desktop.png`, `qa/demo-mobile.png`, `qa/demo-report-desktop.png` |
| Pilot pricing and unpriced module boundaries | `/pricing`, `/pilot`, module-specific price labels; no payment collection |
| Consenting merchant cohort, human live review, matched baseline | `/evaluation`, `/resources/pilot-method`, pilot intake |
| Metrics: resolution time, exchange acceptance, refund cost, net margin, complaints, CSAT, overrides | Evaluation copy, pilot method, demo report. All commercial metrics are unmeasured |
| Interview 10 merchants + 3 operators; one paid pilot; explicit budget owner and 3PL rights | `/evaluation`, `/pilot` |
| Build/pivot/stop gate and conditional expansion | `/evaluation`, `/about`, `/resources/build-notes`; no GMV/return-value revenue claim |
| API plans, app permissions, policies, carrier labels, events, chargebacks, false positives/discrimination, brand tolerance | `/integrations`, `/trust`, evaluation method |
| Acquisition through agencies/ecosystem/3PL/CX communities/referrals | `/resources/build-notes`; fit exception map and honest comparison guides |
| Two capped LinkedIn creative tests; qualified commitment vs clicks | `/resources/build-notes` |
| CRM stage sequence and Notion tracking fields | Pilot journey and build notes, including all named fields |
| Consent, work email, app stack, monthly bracket, pilot interest | Local validating lead form; privacy notice; explicit non-delivery confirmation |
| Analytics events/source-campaign and qualified booking | Proposed instrumentation documented in build notes; no live analytics or fake success |
| Product overview/features/screenshots/use cases/about/contact/demo request/auth | Complete route families; sign-in gives honest demo access without collecting credentials |
| Brand identity/logo/favicon/fonts/palette | Local original assets, Newsreader/Manrope, semantic CSS tokens; no template artifacts |
| Scroll storytelling and section-specific visuals | Garment hero, knit evidence chapter, baseline cards, pinned module story, warehouse scene, case desk, illustrative report, evaluation cards |
| Lenis/GSAP, hover/focus/responsive/reduced motion | Motion contexts, native anchors, short-screen and mobile fallbacks, OS preference and footer control |
| Original imagery/copyright | Image Gen original assets; no copied merchant/competitor UI, product photos or partnership logos |
| Research status, historical working brand/domain caveat | `/about`, `/resources/build-notes`; no claimed domain/trademark clearance |
| Research brief, mock spec, storyboard, fixture and metric deliverables | Original IA blueprint alongside this project; fixtures; public workflow pages; README; QA report |
| Deployment | Local frontend only. No GitHub repository, Vercel deployment or domain connection claimed |

## Storyboard

1. Fictional customer requests a fit return for ER-118.
2. Intake associates KN-204-M and ORD-118 with source policy POL-APP-03 v3.
3. The request is 16 days after delivery, inside the 30-day review window. Worn status remains uncertain.
4. Size L has four mock units and is a compatible candidate. The CX/merchandising reviewer can approve, reject or escalate with a rationale.
5. Customer sees a plain-language explanation and may appeal for human re-review.
6. Warehouse inspection remains absent until a specifically simulated event is added. It does not execute any physical or financial action.
7. The reviewer can export the fictional records; the report shows seed counts and unmeasured evaluation fields.

## Incumbent gap checklist

- Confirm the native workflow and specialist stack with the merchant.
- Identify a narrow exception unresolved by the current stack.
- Tie the proposed recommendation to policy and evidence.
- Test separately for incremental value and harm, with agreed stopping thresholds.
- Do not claim novelty, paid demand, integrations, accepted prices or outcomes before evidence.

## Open live-launch dependencies

Legal entity/contact and final notices; brand/domain clearance; budget owner and paid commitment; historical cohort consent; actual Shopify/API and 3PL permissions; commercial thresholds and four additional module fees; real lead delivery and consent/retention design; analytics specification approval; production hosting and custom domain. These are outside this isolated concept preview.

## 28 October visual-depth refinement

Implemented reusable evidence mosaics, policy dossiers, side-by-side garment compatibility cards, dated inspection timelines, editable draft inspection checklist, customer appeal cards, context maps, four-stage workflow scenes, owner/next-action cards, interactive case-history tabs, annotated garment study and reason table. Reused these across home, all five product pages, product index and contextual editorial chapters. Added original silk/chiffon/botanical backgrounds and reused dark wool across all page families. Added seven optimized original image assets. See `design-qa.md` and `qa/v2/` for browser evidence and route audits.
