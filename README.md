# Aurelia — Next.js diamond storefront

Original luxury diamond shopping application inspired by the interaction structure of the supplied Ritani collection page. Uses Next.js App Router, TypeScript, Tailwind CSS, shadcn-style Radix UI components, Lucide, Framer Motion, Zustand, TanStack Query, Prisma/PostgreSQL, Auth.js, and Stripe.

## Run locally

```sh
npm install
npm run db:generate
npm run dev
```

Open http://localhost:3000. The app works without environment variables using 180 deterministic **synthetic demonstration diamonds**. All original SVG diamond illustrations are illustrative, not product inspection photography. Grading data, shipping flags, setting prices, and lab labels are synthetic; no certificates are verified.

## Implemented

- Responsive collection page, desktop navigation dropdowns, mobile navigation, search, and ring progress.
- Server API filtering, numeric ranges, grade and shape selections, removable filter chips, query-string persistence, sorting, grid/list views, pagination, retry and empty states.
- Advanced polish, symmetry, fluorescence, culet, price-per-carat, crown/pavilion, dimensions, depth/table, and ratio filtering.
- Product detail pages, original diamond illustrations with inspection zoom, full specs.
- Browser-persisted wishlist, comparison up to four diamonds with differences highlighted, shopping bag, and complete ring configurations.
- Seven ring settings, four metals, US ring sizing, price breakdowns, editing selections.
- Rule-based natural language search. Does not claim to use an AI model.
- Prisma relational schema and seed script. Database queries filter and paginate before returning records.
- Auth.js Google sign-in and database-backed account/order history when configured.
- Administrator-only overview and recent orders when configured.
- Credential-gated Stripe hosted checkout, server-side price validation, inventory reservation, idempotent signed payment webhook handling. Synthetic diamonds cannot be purchased.
- SEO metadata, canonical collection routes, sitemap, robots policy, real-products-only structured data, keyboard accessible Radix dialogs and dual-thumb sliders.

## PostgreSQL

Copy `.env.example` to `.env.local` and configure `DATABASE_URL`. Prisma CLI reads `.env`, so use the same database URL there or export it in your shell.

```sh
npm run db:generate
npm run db:push
npm run db:seed
```

`db:push` is for local development. Use reviewed Prisma migrations for production. Catalog indexes cover availability/origin/shape with price or carat, color/clarity, price-per-carat, and creation date. Monetary catalog data currently uses Float; Stripe/order/payment amounts are integer minor units. Migrate catalog prices to integer minor units before production.

## Sign-in

Configure `AUTH_SECRET`, `AUTH_GOOGLE_ID`, and `AUTH_GOOGLE_SECRET`. Set the Google OAuth callback to `http://localhost:3000/api/auth/callback/google` for development. Successful sign-in creates a database customer. Password registration/reset is not implemented; Google handles identity. Administrator roles are assigned directly through trusted database operations; public users cannot self-promote.

## Checkout

Configure Stripe secrets, `NEXT_PUBLIC_SITE_URL`, and `ENABLE_LIVE_CHECKOUT=true` only after replacing synthetic catalog data with reviewed real inventory, pricing, shipping, and policies. Real inventory must have `isDemo=false`, `available=true`, and an Inventory record with status `AVAILABLE`. Subscribe `/api/webhooks/stripe` to checkout session completed, expired, async payment succeeded, and async payment failed events. Raw card details never pass through this app.

Production checkout still needs shipping rates, tax handling, merchant policy content, email confirmations, fulfillment workflow, reservation recovery monitoring, and concurrent-purchase/end-to-end payment verification. Do not deploy this demonstration as a live selling store.

## Checks

```sh
npm test
npm run typecheck
npm run build
```

## Remaining from the full brief

This is the initial collection-first implementation, not completion of every production requirement. Cross-device wishlist/cart/configuration synchronization, addresses/profile editing, full admin catalog CRUD and CSV import, promotions, content editing, advanced analytics, verified certificates, videos/360 media, photorealistic setting renders, AI-model integration, and real order fulfillment remain. PostgreSQL/OAuth/Stripe integration paths require external credentials and have not been live-tested. No browser tool was available for desktop/mobile screenshot QA.

## Verification performed

- Next.js production build: passed using Webpack (Turbopack port binding was restricted in this environment).
- TypeScript: passed.
- Catalog tests: 6 passed.
- Prisma schema: validated with a placeholder local connection string; no live database was connected.
- Dependency audit: 0 vulnerabilities after upgrading Auth.js and overriding `deepmerge-ts` to its patched major. Prisma validation and the build pass with the override.
- Local HTTP smoke checks: collection, product, comparison, wishlist, bag, ring builder, account, admin setup, education, and sitemap returned 200; unknown diamond returned 404.
- API smoke checks: combined shape/budget/carat filtering passed, invalid price ranges returned 400, disabled demonstration checkout returned 503.
- No browser-based visual or interaction testing was performed.

## Typography and visual styling

The current visual finish uses locally hosted Libre Bodoni (headings/wordmark) and Jost (interface/body), loaded through `next/font/local`. Both font files and their SIL Open Font License notices are in `public/fonts/`. They are open-source equivalents selected for a Didot/Futura direction, not copied commercial brand fonts. No Adobe subscription or runtime font CDN is required.

References reviewed: [Tiffany engagement rings](https://www.tiffany.com/engagement/engagement-rings/), [Cartier engagement rings](https://www.cartier.com/en-us/jewelry/engagement-rings/), [Graff engagement rings](https://www.graff.com/us-en/engagement-bridal/engagement/engagement-rings/), and [De Beers rings](https://www.debeers.com/en-us/fine-jewellery/rings/). De Beers' publicly accessible CSS explicitly identifies Linotype Didot and FuturaStd. Direct stylesheet inspection of Tiffany and Cartier was blocked, and Graff redirected repeatedly; their exact webfont families were not verified.

Font sources: [Libre Bodoni](https://github.com/google/fonts/tree/main/ofl/librebodoni) and [Jost](https://github.com/google/fonts/tree/main/ofl/jost). Styling in `app/luxury-theme.css` applies charcoal, ivory, champagne accents, clearer control labels, and editorial headings to the existing page structure. Original routes, filters, grids, state, and ring-builder steps are retained. Font delivery and page responses were checked over HTTP; browser visual QA remains unavailable.

## Screenshot-led redesign (16 October 2026)

The supplied Ritani homepage PDF (five pages), engagement, wedding, lab-diamond, education, and rewards screenshots now ground the editorial experience. The homepage is a dedicated editorial page; diamond shopping remains under `/collections/*`.

- Compact sticky single-row navigation, mint utility bar, contextual category menus, responsive mobile drawer, and a persistent workshop shortcut.
- Image-led homepage with shape/origin selection, navy editorial panels, exploration tiles, comparison/education tools, craftsmanship guide, numbered decision steps, care guides, link rows, loyalty preview, and FAQ accordions.
- `/pages/diamonds`, `/pages/lab-grown-diamonds`, `/pages/engagement-rings`, and `/pages/wedding-rings` use shared sections based on their supplied page structures. Jewelry and gemstones have clearly identified editorial placeholders for future catalog categories; they do not claim purchasable inventory.
- Education has category filters, article cards, a show-more control, and eight original guide pages. Rewards reproduces the supplied FAQ-focused arrangement while accurately describing an unlaunched program.
- Footer links, explanatory policies, working privacy preferences, and a validated newsletter form with an explicit not-connected response.
- Lato replaces Jost for interface/body text; Libre Bodoni remains the freely available display-face approximation. Both are self-hosted with license notices.
- Built-in image generation produced original campaign, workshop, ring-setting, and diamond-shape photography. These illustrate synthetic inventory and style inspiration; they are not Ritani assets or pictures of a real Aurelia workshop.

The user explicitly chose **“Build from the screenshots only”** rather than Playwright/browser automation. No rendered desktop/mobile screenshot comparison, browser interaction test, or accessibility certification is claimed. TypeScript, production builds, catalog tests, HTTP routes, and internal destination links are checked independently.

The follow-up image pass adds six distinct generated editorial assets under `public/editorial/`: three Explore photographs, a drafting-paper ring inset, and two care-card photographs. Full prompts and saved paths are recorded in `.design-reference/image-prompts.json`. The homepage now has eighteen FAQ entries, restored jewelry/certification links, and an original certification guide linking to the official GIA and IGI report-check services. All six new images and their optimized versions, 41 internal destinations, the production build, and six catalog tests passed verification. Live service integrations and rendered visual comparison remain outstanding.
