export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://diecontainers.com";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function makeMetadata({
  title,
  description,
  path = "/",
  keywords,
  image,
}) {
  const canonical = absoluteUrl(path);
  const ogImage = image || absoluteUrl("/og-image.jpg");

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "DIE Container GmbH",
      locale: "de_DE",
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
