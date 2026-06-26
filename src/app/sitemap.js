import { siteUrl } from "./seo";

const STATIC_PATHS = [
  "/",
  "/shop",
  "/kategorien/10ft",
  "/kategorien/20ft",
  "/kategorien/40ft",
  "/kategorien/kuehlcontainer",
  "/kategorien/buerocontainer",
  "/kategorien/open-side",
  "/angebot",
  "/ueber-uns",
  "/kontakt",
  "/faq",
  "/kaufberater",
  "/container-kaufen",
  "/seecontainer-kaufen",
  "/wohncontainer-kaufen",
  "/buerocontainer-kaufen",
  "/lagercontainer-kaufen",
  "/kuehlcontainer-kaufen",
  "/10-fuss-container-kaufen",
  "/20-fuss-container-kaufen",
  "/40-fuss-container-kaufen",
  "/open-side-container-kaufen",
  "/double-door-container-kaufen",
  "/container-masse",
  "/container-gewicht",
  "/container-kosten",
  "/container-fundament",
  "/container-lieferung",
  "/container-genehmigung",
  "/was-kostet-ein-seecontainer",
  "/wie-schwer-ist-ein-seecontainer",
  "/wie-gross-ist-ein-20-fuss-container",
  "/welche-container-groessen-gibt-es",
  "/wie-lange-haelt-ein-seecontainer",
  "/wie-wird-ein-container-geliefert",
];

export default function sitemap() {
  const now = new Date();

  return STATIC_PATHS.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("container") ? 0.8 : 0.6,
  }));
}
