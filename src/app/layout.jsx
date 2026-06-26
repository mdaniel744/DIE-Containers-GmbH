import "@/index.css";
import Providers from "./providers";
import { makeMetadata, siteUrl } from "./seo";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
