# Image and media optimization report

## Scope

This pass audited the storefront, product catalogue, product detail gallery, quotation flow, checkout, SEO landing pages, legal pages, administration previews, logos and remote Supabase product media.

The repository originally contained 87 raster files under `public/images` with a combined source size of 29,622,992 bytes (28.25 MiB). Source originals were retained where a historic URL, database record, feed, cached page or external consumer might still depend on the filename.

## Delivery changes

- Storefront raster images now render through `next/image` or the shared `MediaImage` component.
- The homepage hero uses explicit mobile/desktop art direction through `<picture>` and `getImageProps`.
- `sizes` values match the product-card, gallery, thumbnail and editorial layouts.
- Only genuine above-the-fold/LCP media is eager; lower-page media and secondary gallery thumbnails remain lazy.
- Next.js is configured to negotiate AVIF and WebP, use project breakpoints, cache optimized variants for 30 days and accept only public Supabase Storage image URLs.
- The service worker caches generated `/_next/image` responses separately for repeat visits.
- Product and gallery source URLs remain stable; Google Merchant or other consumers can keep using original Supabase URLs.

## Measured source savings

Twenty-eight frequently rendered local assets received WebP derivatives. Their combined source weight changed from 18,479,970 bytes to 3,292,584 bytes, a reduction of **15,187,386 bytes (82.2%)** before Next.js creates the final viewport-specific response.

The homepage hero has separate art-directed outputs:

| Variant | Bytes | Reduction from original |
| --- | ---: | ---: |
| Original JPEG | 315,671 | — |
| Desktop WebP | 234,252 | 25.8% |
| Mobile WebP | 102,046 | 67.7% |

At runtime, Next.js further selects a width close to the rendered layout and negotiates AVIF/WebP based on browser support. For example, browser validation confirmed a 430 px mobile hero request at a 390 px viewport and a 1440 px desktop request at a 1440 px viewport.

Representative locally generated AVIF responses were measured as follows:

| Rendered use | Requested width | Response bytes |
| --- | ---: | ---: |
| Mobile homepage hero | 430 px | 30,310 |
| Desktop homepage hero | 1440 px | 130,399 |
| Container-size category card | 640 px | 23,015 |
| Mobile product card | 430 px | 21,568 |

These are image-response sizes, excluding HTTP headers, measured against the local Next.js image endpoint with modern image negotiation enabled.

## Validation

- Responsive browser checks: 390 px, 768 px and 1440 px.
- Routes checked: homepage, shop, product detail, container dimensions, delivery, foundation and about pages.
- Result: no broken images, no horizontal page overflow and no browser-console errors on the checked routes.
- The production build and lint task complete successfully.
- The repository's project-wide `typecheck` still reports existing JavaScript inference/prop errors in shared UI and admin components. No `MediaImage` typing errors remain, and the production compiler accepts the optimized implementation.

## Deliberately retained assets

Exact duplicate source files were identified, including several Wohncontainer, delivery-crane and container-yard variants. They were not removed in this pass because application data or external integrations may still reference their current public paths. New code should use the canonical optimized paths documented in `src/lib/imageAssets.js`.

Four candidate WebP conversions were discarded because they were larger than their source files. Keeping the smaller original and allowing Next.js to negotiate the final response avoids a false optimization.

## Ongoing workflow

Use `npm run optimize:images` for future local derivatives and follow `docs/image-optimization.md` for format, quality, dimensions, `sizes`, priority and Supabase guidance.
