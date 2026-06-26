# CSAV Germany

This project has been migrated from Vite + React Router to Next.js App Router so the public pages can be statically pre-rendered for SEO.

## Local Setup

Install dependencies:

```bash
pnpm install
```

Create `.env.local` with the Base44 values:

```bash
NEXT_PUBLIC_BASE44_APP_ID=your_app_id
NEXT_PUBLIC_BASE44_APP_BASE_URL=https://your-base44-app.base44.app
NEXT_PUBLIC_BASE44_FUNCTIONS_VERSION=prod
```

Legacy `VITE_BASE44_*` variables are still accepted by `next.config.mjs`, but new deployments should use `NEXT_PUBLIC_BASE44_*`.

Run the development server:

```bash
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Start the production server:

```bash
pnpm preview
```

## SEO Notes

- Public marketing and SEO routes live under `src/app/(site)`.
- Route metadata, canonical URLs, robots rules, and sitemap generation live in `src/app/seo.js`, `src/app/robots.js`, and `src/app/sitemap.js`.
- Admin and auth pages are marked `noindex`.
