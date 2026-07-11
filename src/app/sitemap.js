import { siteUrl } from "./seo";
import { supabaseServer, STORE_ID } from "@/lib/supabaseServer";

// German-only static pages (no /en/ mirror)
const DE_ONLY = [
  { path: "/kategorien/10ft",                        cf: "weekly",  p: 0.8 },
  { path: "/kategorien/20ft",                        cf: "weekly",  p: 0.8 },
  { path: "/kategorien/40ft",                        cf: "weekly",  p: 0.8 },
  { path: "/kategorien/kuehlcontainer",              cf: "weekly",  p: 0.8 },
  { path: "/kategorien/buerocontainer",              cf: "weekly",  p: 0.8 },
  { path: "/kategorien/open-side",                   cf: "weekly",  p: 0.8 },
  { path: "/kaufberater",                            cf: "monthly", p: 0.7 },
  { path: "/container-kaufen",                       cf: "monthly", p: 0.7 },
  { path: "/seecontainer-kaufen",                    cf: "monthly", p: 0.7 },
  { path: "/wohncontainer-kaufen",                   cf: "monthly", p: 0.7 },
  { path: "/buerocontainer-kaufen",                  cf: "monthly", p: 0.7 },
  { path: "/lagercontainer-kaufen",                  cf: "monthly", p: 0.7 },
  { path: "/kuehlcontainer-kaufen",                  cf: "monthly", p: 0.7 },
  { path: "/10-fuss-container-kaufen",               cf: "monthly", p: 0.6 },
  { path: "/20-fuss-container-kaufen",               cf: "monthly", p: 0.6 },
  { path: "/40-fuss-container-kaufen",               cf: "monthly", p: 0.6 },
  { path: "/open-side-container-kaufen",             cf: "monthly", p: 0.6 },
  { path: "/double-door-container-kaufen",           cf: "monthly", p: 0.6 },
  { path: "/container-masse",                        cf: "monthly", p: 0.6 },
  { path: "/container-gewicht",                      cf: "monthly", p: 0.6 },
  { path: "/container-kosten",                       cf: "monthly", p: 0.6 },
  { path: "/container-fundament",                    cf: "monthly", p: 0.6 },
  { path: "/container-lieferung",                    cf: "monthly", p: 0.6 },
  { path: "/container-genehmigung",                  cf: "monthly", p: 0.6 },
  { path: "/was-kostet-ein-seecontainer",            cf: "monthly", p: 0.6 },
  { path: "/wie-schwer-ist-ein-seecontainer",        cf: "monthly", p: 0.6 },
  { path: "/wie-gross-ist-ein-20-fuss-container",    cf: "monthly", p: 0.6 },
  { path: "/welche-container-groessen-gibt-es",      cf: "monthly", p: 0.6 },
  { path: "/wie-lange-haelt-ein-seecontainer",       cf: "monthly", p: 0.6 },
  { path: "/wie-wird-ein-container-geliefert",       cf: "monthly", p: 0.6 },
];

// Pages that exist in both /de (canonical) and /en/ mirror
const BILINGUAL = [
  { de: "/",        en: "/en/",        cf: "weekly",  p: 1.0, enP: 0.9 },
  { de: "/shop",    en: "/en/shop",    cf: "daily",   p: 0.9, enP: 0.8 },
  { de: "/angebot", en: "/en/angebot", cf: "monthly", p: 0.8, enP: 0.7 },
  { de: "/ueber-uns", en: "/en/ueber-uns", cf: "monthly", p: 0.6, enP: 0.6 },
  { de: "/kontakt", en: "/en/kontakt", cf: "monthly", p: 0.7, enP: 0.6 },
  { de: "/faq",     en: "/en/faq",     cf: "monthly", p: 0.7, enP: 0.6 },
];

function u(path) {
  return new URL(path, siteUrl).toString();
}

export default async function sitemap() {
  const now = new Date();

  // Fetch active product slugs + last-modified timestamps from Supabase
  let products = [];
  if (supabaseServer) {
    try {
      const { data } = await supabaseServer
        .from("products")
        .select("slug, updated_at")
        .eq("store_id", STORE_ID)
        .eq("status", "active");
      products = data || [];
    } catch {
      // Supabase unreachable at build/request time — sitemap emits static pages only
    }
  }

  const productEntries = products.flatMap(({ slug, updated_at }) => {
    const lastModified = updated_at ? new Date(updated_at) : now;
    return [
      { url: u(`/produkt/${slug}`),     lastModified, changeFrequency: "weekly", priority: 0.85 },
      { url: u(`/en/produkt/${slug}`),  lastModified, changeFrequency: "weekly", priority: 0.75 },
    ];
  });

  const bilingualEntries = BILINGUAL.flatMap(({ de, en, cf, p, enP }) => [
    { url: u(de), lastModified: now, changeFrequency: cf, priority: p },
    { url: u(en), lastModified: now, changeFrequency: cf, priority: enP },
  ]);

  const deOnlyEntries = DE_ONLY.map(({ path, cf, p }) => ({
    url: u(path),
    lastModified: now,
    changeFrequency: cf,
    priority: p,
  }));

  return [...bilingualEntries, ...deOnlyEntries, ...productEntries];
}
