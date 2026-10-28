# MerchantReturns — local concept website

A responsive React frontend for Concept 49, with an isolated synthetic returns workbench. This is not an operating returns product. No real orders, payments, refunds, messages, authentication, lead delivery or analytics are connected.

## Run

Node 20+ and npm are required.

```sh
npm install
npm run dev -- --host 127.0.0.1 --port 4186 --strictPort
npm run build
npm run test:sites
```

Local preview: http://127.0.0.1:4186/

The browser-verified preview uses port 4186 to avoid another project's existing localhost preview. The Vite starter's Sites-compatible build adapter and tests are preserved. Static client output is `dist/client`. The generated server adapter is in `dist/server`.

For a future Vercel deployment, use this directory as project root, `npm run build` as build command, and `dist/client` as static output; configure a SPA fallback for non-asset routes. GitHub source and Hostinger-ready deployment branches are provided. See HOSTINGER.md for PHP/HTML hosting without a Node.js web-app slot. Hostinger and custom-domain deployment are not yet performed. The current page intentionally carries `noindex,nofollow`; replace only after live content and legal review.

## Approved direction

- Homepage: the selected corrected **Merchant Atelier** composition (displayed option 2), editorial garment hero and evidence cards.
- Supporting pages: **Returns Atlas** (displayed option 3), operational sans headings, isometric inspection imagery and workflow UI.
- Entire site uses option 3's palette: chalk `#F7F4EE`, forest `#203A31`, sage `#DCE2D5`, restrained terracotta. The small-text orange is darkened to `#B84726` for legibility.
- Local Newsreader display serif and Manrope body/UI fonts. Phosphor icons. Selected Selvedge SVG logo/favicons, original sweater, warehouse scenes and fabric textures.
- Original PNG sources: `assets-original/`. Web-optimized imagery: `public/images/`. SVG brand kit and favicons: `public/brand/`.

## Source map

- `src/App.jsx`: shared navigation, homepage, five product pages, content pages, lead form, authentication preview, legal notices, synthetic case desk and motion.
- `src/data.js`: module inventory, ten fictional return records and supporting-page content.
- `src/styles.css`: semantic palette, layout, responsive design, visual states and reduced-motion behavior.
- `qa/`: real browser captures and route-check evidence.
- `design-qa.md`: comparison findings, fixes, browser checks and remaining limits.
- `fixtures/`: exported synthetic records and policy matrix.

## Routes

Home; product index; Returns Desk, Review, Proof, Signal and Report; platform; solutions; why exceptions; native/specialist comparison; pricing; evaluation; pilot; request demo; contact; demo; integrations; trust; appeals; about; journal; fit exception map; pilot method; build notes; policy matrix; sign-in; access help; privacy; terms; branded 404.

Every named module remains a proposed separate test. Returns Desk is the first pilot hypothesis. Other module prices are deliberately unspecified, not invented.

## Demo behavior

- Ten records (4 pending, 2 blocked, 2 completed reviews, 2 rejected alternatives at seed).
- Search and status filters, including a useful empty state.
- Item, fictional SKU/order, source policy, explicit condition uncertainty and review owner.
- ER-118: delivered 12 October; requested 28 October; within the 30-day fictional policy. Size M, compatible size L with four mock units, CX approval pending, inspection absent.
- Policy window can be locally simulated as 14/30/45 days. This changes the explanatory window state; it does not change eligibility or the source policy.
- Rationale required before approve/reject/escalate; rationale retained in the local record and exported. These are review decisions, never executed refunds/exchanges.
- A warehouse inspection event can be added/cleared per case. No physical action occurs.
- Customer appeal per selected record, local only.
- Original-fixture report with illustrative counts, and explicitly unmeasured commercial metrics.
- Reset restores the seed fixtures. Reload discards all changes. JSON export contains only the fictional case records and local fictional rationale.

## Motion

Lenis is synchronized to GSAP's ticker (one RAF driver) and ScrollTrigger. Text/card entrances complete quickly; original evidence UI reveals in stages. Desktop product panels pin for one horizontal sequence when width >900px and height >=700px. Mobile/short viewports use native horizontal scrolling. Reduced-motion visitors receive complete static states and stacked module cards. The product-story skip link and normal links preserve navigation. Media-query contexts clean up on resize.

## Forms and authentication

The lead form validates names, work-email syntax, stack, role, exception bracket and acknowledgment. It is intentionally local and does not send/store input. The success state explicitly says this. No password or real credentials are requested. No environment variables are required. Before launch, agree a CRM destination, privacy terms, retention, consent, transport/security controls and actual delivery monitoring.

## Evidence and operating boundaries

Shopify native return requests and Loop exchange recommendations are acknowledged with direct official links. No customer logos, partnerships, certifications, testimonials, measured ROI or actual operating statuses are invented. Generated imagery is illustrative, never proof of garment condition. Sources, metrics and build/pivot/stop gates are explained in the public pages.

`$600 / 100 cases` and a future `$250/month + $0.50` above an undefined threshold are validation hypotheses. No checkout exists. Four additional module fees remain open.

Live Shopify/3PL integration needs merchant/app permissions, historical cohort consent, carrier/event semantics verification, data rights and paid incremental value. Brand/domain/legal clearance, legal identity/contact, approved social URLs and production form destination remain outstanding.
