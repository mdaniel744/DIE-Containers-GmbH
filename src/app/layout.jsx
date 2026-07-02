import "@/index.css";
import Providers from "./providers";
import { makeMetadata, siteUrl } from "./seo";
import { LocaleHtmlLang } from "./LocaleHtmlLang";

export const metadata = {
  metadataBase: new URL(siteUrl),
  ...makeMetadata({
    title: "Container Deutschland - Seecontainer kaufen | CSAV Container",
    description:
      "Seecontainer kaufen in Deutschland. Neue und gebrauchte 10ft, 20ft und 40ft Container zu attraktiven Preisen mit deutschlandweiter Lieferung.",
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
  applicationName: "CSAV Container",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CSAV Container",
  },
  formatDetection: { telephone: false },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport = {
  themeColor: "#F28C28",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* PWA — Apple-specific tags (not covered by Next.js metadata API) */}
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CSAV Container" />
        {/* Prevent Chrome from suggesting phone number formatting */}
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <LocaleHtmlLang />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
