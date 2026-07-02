# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm install        # install deps (pnpm is the expected package manager — pnpm-workspace.yaml present)
pnpm dev             # next dev --webpack -p 9002, http://localhost:9002
pnpm build           # next build --webpack
pnpm preview         # next start -p 9002 (serve the production build, http://localhost:9002)
pnpm lint            # eslint . --quiet
pnpm lint:fix        # eslint . --fix
pnpm typecheck       # tsc -p ./jsconfig.json (checkJs, no emit — this is a JS/JSX codebase, not TS)
```

Dev/preview run on port **9002**, not the Next.js default 3000 — fixed via `-p 9002` in the `dev`/`preview` scripts in `package.json`.

There is no test runner configured in this repo (no test script, no test files).

Required env vars (`.env.local`) for live product/category/quote data (Supabase, multi-tenant dashboard backend):
```
NEXT_PUBLIC_SUPABASE_URL=https://wizrktgdocaemfkzlkxp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_STORE_ID=da2c7438-4763-416d-bf2d-d1f5f93b9c5f   # this tenant's fixed store id
```
Without these set, the app falls back to the local mock data layer (see below) — it still runs, but with hardcoded sample products and no real quote submissions.

Legacy Base44 env vars (`NEXT_PUBLIC_BASE44_*` / `VITE_BASE44_*`) are still read by `next.config.mjs` and `src/lib/app-params.js` for the `@base44/sdk`-backed **auth** flows (login/register/admin session) — unrelated to the Supabase product/quote wiring above. Base44 is no longer used for products/categories/quotes.

## Architecture

This app was migrated from Vite + React Router to **Next.js App Router** specifically so public marketing/SEO pages can be statically pre-rendered. That migration is incomplete by design and shapes most of the codebase:

- **Routing is still largely React-Router-shaped.** Most components import `react-router-dom` (`Link`, `useNavigate`, `useParams`, `useLocation`, `useSearchParams`, `Navigate`). `next.config.mjs` aliases `react-router-dom` to `src/lib/next-router-compat.jsx`, a shim that re-implements that API on top of `next/navigation` and `next/link`. When touching navigation code, prefer keeping the existing `react-router-dom` import style for consistency rather than introducing native `next/navigation` calls — the shim handles the translation. Check `next-router-compat.jsx` if a router hook seems to behave oddly.
- **One catch-all route drives almost the entire public site**: `src/app/(site)/[...slug]/page.jsx` maps URL slugs to a `ROUTES` table of view components (shop, category pages, SEO landing pages, FAQ pages, legal pages, etc.) and calls `makeMetadata()` (`src/app/seo.js`) per-route for title/description/canonical/OG tags. Adding a new public page usually means adding a view in `src/views/` (or `src/views/seo/`) and registering it in that `ROUTES` table, not creating a new `app/` folder.
- **Route groups under `src/app/`** separate concerns by layout/auth requirement:
  - `(site)` — public, SEO-indexed pages (uses the catch-all above).
  - `(auth)` — login/register/password pages.
  - `(admin)` — protected admin dashboard (`anfragen`/inquiries, `attribute`, `kategorien`, `produkte`); gated by `ProtectedRoute` + `AuthProvider` (`src/lib/AuthContext`) requiring admin role.
  - `(admin-login)` — the admin login page, outside the protected layout.
  - Admin and auth pages are deliberately marked `noindex` (see README SEO notes).
- **Product/category/quote data comes from an external multi-tenant Supabase backend** (a separate "dashboard" app, owned by another agent/team, is the only thing that writes to it). `src/api/base44Client.js` still exports the same `base44.entities.*` shape the rest of the app was written against (a holdover name from the original Base44 SDK integration), but internally it's now a Supabase adapter (`@supabase/supabase-js`, client created in `src/lib/supabaseClient.js`):
  - `entities.Product.list/filter/get` — read-only `SELECT` against the `products` table, scoped by `store_id = NEXT_PUBLIC_STORE_ID` (RLS also restricts reads to `status = 'active'` rows, but the `store_id` filter must still be sent explicitly — the anon key can see other tenants' active products if you omit it). Rows are field-mapped (`name`→`title`, `price`→`price_from`, `images[0]`→`image_url`, `images[1:]`→`gallery_urls`, English `condition` codes → German labels, and a free-form `attributes` JSON object → `size`/`container_type`/`color`/`material`/`floor`/`doors`/`weight`/`payload`/`csc_certified`/`weather_resistant`). See `ATTR_KEYS`/`CONDITION_LABELS` in `base44Client.js` for the exact keys expected from the dashboard side — they must stay in sync with what the dashboard's product form actually writes.
  - `entities.Category.list/filter/get` — same `store_id`-scoped read pattern against `categories`. Rows now also carry `image_url`, `is_featured`, `display_order`, `meta_title`, `meta_description` (added on the dashboard side to let categories be fully admin-controlled instead of hardcoded on the storefront — see `mapCategoryRow` in `base44Client.js`). All five are nullable/defaulted so older rows don't break.
  - `entities.QuoteRequest.create` — `INSERT` into `inquiries`. That table grants the anon key **insert-only, no select** — the insert call must NOT chain `.select()`/`.single()`, or PostgREST's `INSERT ... RETURNING` gets rejected by RLS even though the insert itself would have succeeded.
  - `entities.Attribute.list/filter/get` / `entities.AttributeValue.list/filter/get` — read-only `SELECT` against `attributes` (`store_id`-scoped) and `attribute_values` (no `store_id` column of its own — scoped indirectly by first fetching this store's attribute ids, then `.in("attribute_id", ids)`; see `supabaseAttributeValues.list` in `base44Client.js`). Used for the dashboard's free-form attribute system (Size, Container Type, Color, Material, etc. — the same option set the product attribute dropdowns and `ATTR_KEYS` draw from).
  - **Anon key + RLS trust model (applies to every table above):** there is one shared anon key for every tenant on this Supabase project, not a per-tenant key — so RLS here is not (and structurally cannot be) the thing enforcing tenant isolation. `categories`' real-world RLS policy is a bare `USING (true)` (confirmed with the dashboard team), and `attributes`/`attribute_values` were given the equivalent anon-read policy (the latter via a join check that the row belongs to a real `attributes` row, since it has no `store_id`). **Isolation is enforced entirely by this client always explicitly filtering by `store_id`** — every entity read above must keep doing that; never assume RLS alone will scope a query to this tenant.
  - `entities.Product`/`Category`/`Attribute`/`AttributeValue` **write** methods (`create`/`update`/`delete`) and the `User` entity are no-op local stubs — the anon key has no write access (by design), and admin CRUD for products/categories/attributes is owned by the separate dashboard app, not this repo. Don't wire admin write actions to Supabase here without checking with that team first.
  - When Supabase env vars aren't set (`isSupabaseConfigured` false in `src/lib/supabaseClient.js`), everything silently falls back to the original in-memory mock backed by `src/lib/productData.js` — kept for local dev without credentials, and as the source of static marketing images (`SIZE_IMAGES`, `TYPE_IMAGES`, `HERO_IMAGE`, etc., still used directly by home page components).
  - `base44.auth.*` is still a local-only stub (real auth is a separate, not-yet-wired concern from this product-data integration).
- **Homepage category grid (`src/components/home/ContainerTypes.jsx`) and the header's "Container Katalog" mega-menu (`src/components/layout/Header.jsx`)** read live, dashboard-controlled categories via `useFeaturedCategories()` (`src/hooks/useCategories.js`) — `entities.Category.filter({ is_featured: true })`, sorted by `display_order`. They are **no longer hardcoded arrays**; both render nothing if there are zero featured categories, and fall back to `HERO_IMAGE` (`productData.js`) for any category missing `image_url`. Cards link to `/shop?category=<slug>` — note `Shop.jsx` doesn't actually filter by that param yet, so it's currently a no-op until that's wired up too.
  - The six original placeholder category names (10ft/20ft/40ft/Kühlcontainer/Bürocontainer/Open Side) still have dedicated static SEO landing pages under `/kategorien/*` (see the `ROUTES` table and `src/views/categories/*.jsx`) — those pages still exist and are still routable, they're just no longer linked from the nav/homepage since those sections switched to live category data. New categories added via the dashboard do **not** get an equivalent dedicated SEO page automatically.
- **Homepage size grid (`src/components/home/ShopBySize.jsx`)** similarly reads live values of the dashboard's "Size" attribute via `useSizeOptions()` (`src/hooks/useSizeOptions.js` — looks up the `Attribute` named `"Size"`, then its `AttributeValue` rows). It's no longer a hardcoded array either, but `attribute_values` has no `image_url`/`description` columns (unlike `categories`), so a `KNOWN_SIZES` lookup in that file preserves the original rich image/description/dedicated-route (`/kategorien/10ft` etc.) for the three sizes that already had one; any other live size value (e.g. a newly added `"40ft HC"`) gets a generic fallback card linking to `/shop?size=<value>` instead — which, unlike the `?category=` links above, **is** actually read and filtered by `Shop.jsx` today.
- **`src/views/`** holds the actual page implementations (plain React components, not Next.js route files); `src/app/**/page.jsx` files are thin wrappers that import from `src/views/` and attach metadata/layout.
- **`src/components/ui/`** is shadcn/ui (`components.json`, style "new-york", JSX not TSX) — excluded from eslint and treated as generated/vendored; prefer composing it rather than editing it directly.
- Path alias `@/*` → `src/*` (see `jsconfig.json`).

## i18n / Multi-language

### Completed checklist

- [x] **Job 1 — Locale-prefixed web addresses**
  - URL strategy: German (default) has **no prefix** — all existing SEO URLs preserved intact. English gets `/en/` prefix.
  - `src/lib/locale.js` — helpers: `getLocaleFromPathname()`, `localePath()`, `stripLocalePrefix()`, `DEFAULT_LOCALE`, `SUPPORTED_LOCALES`.
  - `src/lib/next-router-compat.jsx` — `Link` and `useNavigate` are now locale-aware: any internal absolute path (e.g. `to="/shop"`) is automatically prefixed to `/en/shop` when on an `/en/` page. One change here covers every component site-wide — no individual call-site changes needed.
  - `src/app/LocaleHtmlLang.jsx` — client component that sets `document.documentElement.lang` after hydration. Root layout default is `lang="de"` (correct for SSR); this corrects it to `"en"` on `/en/*` pages client-side.
  - `src/app/en/` — English route structure:
    - `layout.jsx` — same `MainLayout` (Header + Footer) as German `(site)` layout.
    - `page.jsx` — English homepage.
    - `[...slug]/page.jsx` — English catch-all for locale-ready pages (shop, angebot, ueber-uns, kontakt, faq). Returns `notFound()` for everything else — 50+ German-only SEO landing pages have no `/en/` mirror intentionally (clean 404 is better than German content under an English URL).
    - `produkt/[slug]/page.jsx` — dedicated English product detail route (named `[slug]` segment matches `useParams()` correctly; a catch-all `[...slug]` would give an array and break `useProduct`).
  - `src/hooks/useLocale.js` — `useLocale()` hook, reads locale from `usePathname()`.

- [x] **Job 2 — Product/category translation overlay** (live data exists; category overlay not yet wired but framework is ready)
  - `src/api/translationsClient.js` — `fetchTranslations(entityType, entityIds, locale)` queries the `translations` Supabase table and returns `{ [entityId]: { [fieldName]: value } }`. Also exports overlay helpers: `overlayProductTranslations`, `overlayCategoryTranslations`, `buildAttributeNameMap`, `buildAttributeValueMap`.
  - `src/hooks/useTranslatedProduct.js` — wraps `useProduct()`, fetches translations for the current locale, overlays them. Falls back silently to source-language value for any missing field. Used by `ProductDetail.jsx`.
  - `translations` table schema (dashboard-managed, anon-readable): `(store_id, entity_type, entity_id, field_name, locale, value)`. Four entity types: `product`, `category`, `attribute_name`, `attribute_value`.
  - **Known data quality note**: the dashboard's auto-translation initially submitted `short_description` for `en` locale in German instead of English — confirmed in the Supabase data. Fix is on the dashboard side (re-generate that field's translation row).
  - `stores` table is anon-readable for exactly three columns (`id`, `enabled_locales`, `google_content_language`) via a column-scoped grant — **not** a blanket SELECT. Attempting `owner_user_id` or `google_merchant_id` correctly returns 401. `google_content_language` is `"de"` and `enabled_locales` is `["en"]` for CSAV.

- [x] **Job 3 — UI strings dictionary (Header + Footer chrome)**
  - `src/lib/i18n.js` — flat `de`/`en` key-value dictionary for nav labels, footer headings, CTA buttons, structural text. `t(key, locale)` function and `useT()` React hook (auto-reads locale from `usePathname()`).
  - **Scope**: Header and Footer only — the "small, simple list" agreed with the dashboard agent. Full ProductDetail UI strings (buttons, labels, badges within the product page itself) are out of scope for this pass and remain in German even on `/en/` pages. Expand `i18n.js` and update those components as needed in future passes.
  - Link labels in Footer (e.g. "Seecontainer kaufen", "10 Fuß Container") are NOT in the i18n dictionary — they're navigation to German-only SEO pages that don't have English mirrors yet, so translating their labels would be premature.

- [x] **Job 4 — hreflang Google signposts**
  - `src/app/seo.js` — `makeMetadata()` now accepts `locale` ("de"|"en") and `enPath` params. When `enPath` is provided (or when `locale="en"`), `alternates.languages` is set with `de`/`en`/`x-default` entries pointing to both language versions. German is `x-default`.
  - hreflang is only generated for pages that actually have both language versions. The 50+ German-only SEO landing pages don't get an `en` alternate (no English mirror exists).
  - English mirrored pages: homepage, shop, angebot, ueber-uns, kontakt, faq, all `/en/produkt/[slug]` pages.

### UI strings dictionary — `src/lib/i18n.js`
Every static UI string on the site now lives in this single file. Structure: `strings.de` and `strings.en`, nested by section (`hero`, `shop`, `filters`, `product`, `quote`, `contact`, `faqPage`, `about`, `contactBanner`, `productCard`, `nav`, `footer`, etc.). Three accessor patterns:
- `useSection("hero")` — returns the full section object for the current locale. Best for components that use many keys from one section.
- `useT()` — returns `t(section, key)` bound to current locale. Best for components that need keys from multiple sections.
- `t(section, key, locale)` — static call outside React.
All accessors fall back to German for any missing English entry — never blank.

**Condition label locale-awareness:** `mapProductRow` in `base44Client.js` now stores both `condition` (German label for backward compat) and `condition_code` (raw DB string: "new"/"used"/"refurbished"). Components that display condition should use `condition_code` + `CONDITION_DISPLAY[locale]` map in `ProductCard.jsx` to pick the right language — not `product.condition` directly.

### What's still NOT done (known gaps, in priority order)

1. **Container type filter values in English** — CONTAINER TYPE filter options ("Kühlcontainer", "Bürocontainer" etc.) come from live `attribute_values.value` strings (raw German DB values). Their English translations exist in the `translations` table (`entity_type=attribute_value`) but the filter sidebar (`ShopFilters.jsx`) doesn't yet fetch and apply them. Wire this by fetching attribute_value translations and substituting in `useAttributeOptions`.
2. **Product detail attribute translations** — `buildAttributeNameMap`/`buildAttributeValueMap` exist in `translationsClient.js` but aren't called in `ProductDetail.jsx`. The attribute grid (Containertyp → Kühlcontainer) still shows source-language values on `/en/` product pages.
3. **Category translation overlay** — `overlayCategoryTranslations` exists in `translationsClient.js` but nothing calls it yet. Category names shown in navigation/cards are source-language on `/en/` pages.
4. **50+ German-only SEO landing pages** — have no `/en/` mirror. English links to these from the footer correctly stay German (not prefixed with `/en/`), but there is no English version of these pages. Content-writing task, not infrastructure.
5. **Footer navigation link labels** — deferred until those SEO landing pages have English equivalents; labels pointing to German-only pages intentionally kept in German.

## Lint notes

`eslint.config.js` only lints `src/app`, `src/components`, `src/hooks`, `src/views` and explicitly excludes `src/lib/**` and `src/components/ui/**`. Unused imports/vars are errors via `eslint-plugin-unused-imports` (prefix intentionally unused args/vars with `_`).
