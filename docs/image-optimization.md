# Image optimization guide

The storefront uses Next.js Image Optimization for responsive raster delivery. The browser receives an image close to the actual rendered size instead of the full source file, and below-the-fold media is lazy-loaded.

## Format policy

- Use **WebP** for container, depot, delivery, interior and other photographic media.
- Keep **SVG** for logos, icons and line art. Never rasterize an SVG merely to make it smaller.
- Use **PNG** only when transparency or exact pixel rendering is required. Transparent WebP is acceptable when it is visually identical and significantly smaller.
- Keep product detail and technical images at higher quality (about 82–90). Small decorative thumbnails can normally use 72–80.
- Do not convert favicons, Open Graph images, merchant-feed images, QR codes or email assets without checking every external consumer first.

## Recommended source dimensions

Next.js creates responsive output variants, but source files should still be sensible:

- Homepage/landing hero: desktop source around 1920–2400 px wide; mobile art-directed source around 720–900 px wide.
- Product gallery: 1600–2000 px on the longest edge when customers need to inspect condition details.
- Product cards/category cards: 900–1400 px on the longest edge is normally sufficient.
- Lower-page editorial images: about twice their maximum CSS display width, capped near 2000–2400 px.

Never upscale a small source. Preserve the original aspect ratio unless an intentional hero crop has been approved.

## Adding images in React

Use `next/image` directly, or the existing `MediaImage` helper for dynamic local/Supabase URLs. Always provide:

- meaningful `alt` text (empty only for genuinely decorative media),
- accurate intrinsic `width` and `height`,
- a `sizes` value matching the layout breakpoints,
- `priority` only for the single genuine above-the-fold LCP image.

Product cards should generally use a value similar to:

```jsx
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
```

Do not preload lower-page category cards, recommendations or secondary gallery images.

## Creating WebP derivatives

The repository includes a non-destructive Sharp script. It never overwrites the source unless an existing derivative is explicitly replaced with `--force`.

```bash
npm run optimize:images -- --input public/images/example.jpg --quality 84 --max-width 2000
```

For transparent line art that must remain exact:

```bash
npm run optimize:images -- --input public/images/diagram.png --lossless
```

After conversion:

1. Compare the original and derivative at their real rendered size.
2. Update every application, metadata, structured-data and feed reference.
3. Run lint, typecheck and the production build.
4. Only remove the original when no dynamic or external consumer can still depend on its URL.

## Product and merchant images

Supabase product images are optimized on storefront pages through a restrictive remote pattern. If Google Merchant Center or another feed uses the direct Supabase URL, keep that stable. Do not replace a merchant URL with a temporary `/_next/image` URL.
