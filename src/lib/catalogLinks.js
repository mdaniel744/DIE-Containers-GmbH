import { isLocalizablePath, localePath, stripLocalePrefix } from "@/lib/locale";

const CATALOG_ACTIVE_PATHS = new Set([
  "/shop",
  "/container-kaufen",
  "/seecontainer-kaufen",
  "/lagercontainer-kaufen",
  "/wohncontainer-kaufen",
  "/double-door-container-kaufen",
  "/open-side-container-kaufen",
]);

const CATALOG_CATEGORY_LINKS = [
  { keys: ["10ft", "10-fuss", "10-foot"], path: "/kategorien/10ft" },
  { keys: ["20ft", "20-fuss", "20-foot"], path: "/kategorien/20ft" },
  { keys: ["40ft", "40-fuss", "40-foot"], path: "/kategorien/40ft" },
  { keys: ["kuehlcontainer", "kuhlcontainer", "reefer", "refrigerated"], path: "/kategorien/kuehlcontainer" },
  { keys: ["buerocontainer", "burocontainer", "office"], path: "/kategorien/buerocontainer" },
  { keys: ["modifizierter-container", "modifiziert", "modified-container", "modified"], path: "/kategorien/open-side" },
  { keys: ["open-side", "openside"], path: "/kategorien/open-side" },
  { keys: ["doppeltuer", "doppeltur", "double-door", "doubledoor"], path: "/double-door-container-kaufen" },
  { keys: ["lagercontainer", "storage"], path: "/lagercontainer-kaufen" },
  { keys: ["wohncontainer", "living", "residential"], path: "/wohncontainer-kaufen" },
  { keys: ["seecontainer", "shipping-container", "shipping"], path: "/seecontainer-kaufen" },
  { keys: ["container-kaufen", "all-containers"], path: "/container-kaufen" },
  { keys: ["container-garage", "garage"], shopType: "Container Garage" },
  { keys: ["werkstattcontainer", "workshop"], shopType: "Werkstattcontainer" },
  { keys: ["high-cube", "highcube"], shopType: "High Cube" },
  { keys: ["standard"], shopType: "Standard" },
];

function normalizeCatalogText(...values) {
  return values
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function localizeCatalogPath(path, locale) {
  if (locale === "de") return path;
  return isLocalizablePath(path) ? localePath(path, locale) : path;
}

function shopFilterPath(filter, locale) {
  const base = localizeCatalogPath("/shop", locale);
  const query = new URLSearchParams(filter).toString();
  return query ? `${base}?${query}` : base;
}

export function resolveCatalogCategoryHref(category, locale = "de") {
  const normalized = normalizeCatalogText(category?.slug, category?.name);
  const match = CATALOG_CATEGORY_LINKS.find((item) =>
    item.keys.some((key) => normalized.includes(key))
  );

  if (match?.path) return localizeCatalogPath(match.path, locale);
  if (match?.shopType) return shopFilterPath({ type: match.shopType }, locale);

  // Safe fallback: /shop understands `type`, not `category`.
  // Use the display name first because it usually matches product.container_type.
  const fallbackType = category?.name || category?.slug || "";
  return fallbackType ? shopFilterPath({ type: fallbackType }, locale) : localizeCatalogPath("/shop", locale);
}

export function isCatalogPath(pathname) {
  const path = stripLocalePrefix(pathname);
  return path.startsWith("/kategorien") || CATALOG_ACTIVE_PATHS.has(path);
}
