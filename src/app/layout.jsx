import "@/index.css";
import Providers from "./providers";
import { makeMetadata, siteUrl } from "./seo";
import { LocaleHtmlLang } from "./LocaleHtmlLang";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...makeMetadata({
    title: "DIE Container GmbH – Neue & gebrauchte Container kaufen",
    description:
      "Kaufen Sie neue und gebrauchte Container bei DIE Container GmbH. Wir bieten zuverlässige Containerlösungen für Unternehmen und Privatkunden in Deutschland und Europa.",
    path: "/",
    keywords: [
      "Seecontainer kaufen",
      "Container Deutschland",
      "Schiffscontainer",
      "Lagercontainer",
      "20ft Container",
      "40ft Container",
    ],
  }),
  // PWA manifest and app metadata
  manifest: "/manifest.json",
  applicationName: "DIE Container GmbH",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DIE Container GmbH",
  },
  formatDetection: { telephone: false },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  themeColor: "#46C54B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "DIE Container GmbH",
  url: siteUrl,
  logo: `${siteUrl}/images/die-container-logo-green.png`,
  email: "contact@diecontainers.com",
  telephone: "+49 (0) 89 277 808 979",
  vatID: "DE 330443785",
  identifier: {
    "@type": "PropertyValue",
    name: "Handelsregister / EUID",
    value: "HRB256757",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hermann-Oberth-Str. 23",
    postalCode: "85640",
    addressLocality: "Putzbrunn",
    addressCountry: "DE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        <meta
          name="google-site-verification"
          content="8C-y9coHfuJRqd1J-cws6FPE4QDG4LW4Gybn76HvBBo"
        />
        {/* PWA — Apple-specific tags (not covered by Next.js metadata API) */}
        <link rel="apple-touch-icon" href="/images/die-container-logo-green.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DIE Container GmbH" />
        {/* Prevent Chrome from suggesting phone number formatting */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LocaleHtmlLang />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
