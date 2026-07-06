export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://csavcontainer.de";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

/**
 * Build hreflang alternates for a given German-canonical path.
 * Only emitted for pages that actually have an English /en/ route.
 * Pages without an English route (50+ German-only SEO landing pages)
 * should call makeMetadata without enPath so no English hreflang is added.
 *
 * @param {string} dePath   Canonical German path, e.g. "/shop"
 * @param {string} [enPath] English path, e.g. "/en/shop" (omit if no EN route)
 */
function buildAlternates(dePath, enPath) {
  const canonical = absoluteUrl(dePath);
  const alternates = { canonical };

  if (enPath) {
    alternates.languages = {
      de: absoluteUrl(dePath),
      en: absoluteUrl(enPath),
      "x-default": absoluteUrl(dePath), // German is the default
    };
  }

  return alternates;
}

export function makeMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
  locale = "de",
  enPath,   // set when building metadata for an English page or a page with an EN mirror
}) {
  // Determine canonical + hreflang based on locale
  const isEnglish = locale === "en";
  const dePath = isEnglish ? path.replace(/^\/en/, "") || "/" : path;
  const resolvedEnPath = isEnglish ? path : enPath;

  const canonical = isEnglish ? absoluteUrl(path) : absoluteUrl(dePath);
  const ogImage = image || absoluteUrl("/og-image.jpg");
  const ogLocale = isEnglish ? "en_GB" : "de_DE";

  return {
    title,
    description,
    keywords,
    alternates: buildAlternates(dePath, resolvedEnPath),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "DIE Container GmbH",
      locale: ogLocale,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
