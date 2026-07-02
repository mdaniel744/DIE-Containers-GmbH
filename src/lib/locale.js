// Locale utilities. Default locale (German) has no URL prefix — existing
// SEO URLs stay intact. Additional locales get a path prefix (/en/, etc.).
// Supported locales are read from stores.enabled_locales at runtime; this
// file only holds the static helpers needed by the router shim and layouts.

export const DEFAULT_LOCALE = "de";
export const SUPPORTED_LOCALES = ["de", "en"];

/**
 * Derive locale from a Next.js pathname string.
 * e.g. "/en/shop" → "en", "/shop" → "de"
 */
export function getLocaleFromPathname(pathname = "") {
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)) {
      return locale;
    }
  }
  return DEFAULT_LOCALE;
}

/**
 * Strip the locale prefix from a pathname so the raw slug is usable.
 * e.g. "/en/shop" → "/shop", "/shop" → "/shop"
 */
export function stripLocalePrefix(pathname = "") {
  for (const locale of SUPPORTED_LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

/**
 * Prefix a path with the given locale.
 * Default locale gets no prefix — preserves clean German URLs.
 * e.g. localePath("/shop", "en") → "/en/shop"
 *      localePath("/shop", "de") → "/shop"
 */
export function localePath(path = "/", locale = DEFAULT_LOCALE) {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

// Exhaustive list of paths (or prefixes ending in /) that have a real
// English /en/<path> route. Everything NOT in this set links back to the
// German version even when on an /en/ page — this avoids 404s on the 50+
// German-only SEO landing pages that don't have English mirrors yet.
// Keep in sync with EN_ROUTES in src/app/en/[...slug]/page.jsx and
// src/app/en/produkt/[slug]/page.jsx.
const EN_LOCALIZABLE_PATHS = new Set([
  "/",
  "/shop",
  "/angebot",
  "/ueber-uns",
  "/kontakt",
  "/faq",
  "/kaufberater",
  // Category pages
  "/kategorien/10ft",
  "/kategorien/20ft",
  "/kategorien/40ft",
  "/kategorien/kuehlcontainer",
  "/kategorien/buerocontainer",
  "/kategorien/open-side",
  // Guide pages
  "/container-masse",
  "/container-gewicht",
  "/container-kosten",
  "/container-fundament",
  "/container-lieferung",
  "/container-genehmigung",
  // Buy pages
  "/seecontainer-kaufen",
  "/lagercontainer-kaufen",
  "/double-door-container-kaufen",
  "/wohncontainer-kaufen",
  "/container-kaufen",
  // Legal pages
  "/impressum",
  "/datenschutz",
  "/cookie-policy",
  "/agb",
  "/widerrufsrecht",
  "/rueckgabe",
  "/versand",
  "/zahlungsbedingungen",
]);
const EN_LOCALIZABLE_PREFIXES = ["/produkt/", "/en/"];

export function isLocalizablePath(path = "") {
  if (EN_LOCALIZABLE_PATHS.has(path)) return true;
  return EN_LOCALIZABLE_PREFIXES.some((prefix) => path.startsWith(prefix));
}
