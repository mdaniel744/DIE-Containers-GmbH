import { getContainerHeightVariant, normalizeQuoteContainerSize } from "./quoteContainer.js";

export const QUOTE_VAT_RATE = 0.19;

const TYPE_ALIASES = {
  "kühlcontainer": ["kühl", "kuehl", "reefer", "refrigerated"],
  "bürocontainer": ["büro", "buero", "office"],
  "wohncontainer": ["wohn", "living"],
  "container garage": ["garage"],
  "open side": ["open side", "openside", "side door"],
  "doppeltür": ["doppeltür", "doppeltuer", "double door", "tunnel"],
  "werkstattcontainer": ["werkstatt", "workshop"],
};

const SPECIAL_TYPE_TERMS = Object.values(TYPE_ALIASES).flat();

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("de-DE")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ß/g, "ss")
    .trim();
}

function getProductText(product = {}) {
  return normalizeText([
    product.container_type,
    product.title,
    product.short_description,
  ].filter(Boolean).join(" "));
}

function hasAnyTerm(text, terms = []) {
  const normalizedTerms = terms.map(normalizeText);
  return normalizedTerms.some((term) => term && text.includes(term));
}

function matchesRequestedType(product, data) {
  const requestedType = data.modified_subtype || data.main_category || data.container_type;
  const normalizedType = normalizeText(requestedType);
  const productText = getProductText(product);

  if (!normalizedType) return false;

  if (normalizedType === "seecontainer") {
    return !hasAnyTerm(productText, SPECIAL_TYPE_TERMS);
  }

  const aliasEntry = Object.entries(TYPE_ALIASES)
    .find(([type]) => normalizeText(type) === normalizedType);

  if (aliasEntry) return hasAnyTerm(productText, aliasEntry[1]);

  return productText.includes(normalizedType);
}

export function quoteProductMatches(product, data = {}) {
  if (!product || !Number.isFinite(Number(product.price_from))) return false;

  const requestedSize = normalizeQuoteContainerSize(data.container_size);
  const requestedHeight = data.container_height || "";
  const requestedCondition = normalizeText(data.condition);

  if (!requestedSize || !requestedHeight || !requestedCondition) return false;
  if (normalizeQuoteContainerSize(product.size) !== requestedSize) return false;
  if (getContainerHeightVariant(product) !== requestedHeight) return false;
  if (normalizeText(product.condition) !== requestedCondition) return false;

  return matchesRequestedType(product, data);
}

export function findMatchingQuoteProduct(products = [], data = {}) {
  const matches = products.filter((product) => quoteProductMatches(product, data));
  if (matches.length === 0) return null;

  const selectedId = String(data.product_id || "");
  const explicitlySelected = matches.find((product) => String(product.id) === selectedId);
  if (explicitlySelected) return explicitlySelected;

  return [...matches].sort(
    (a, b) => Number(a.price_from || 0) - Number(b.price_from || 0)
  )[0];
}

/**
 * @param {{
 *   unitPrice?: number | string,
 *   quantity?: number | string,
 *   unloadingMethod?: string
 * }} values
 */
export function calculateQuoteCosts({
  unitPrice,
  quantity = 1,
  unloadingMethod = "",
} = {}) {
  const safeUnitPrice = Number(unitPrice);
  const safeQuantity = Number(quantity);

  if (
    !Number.isFinite(safeUnitPrice) ||
    safeUnitPrice < 0 ||
    !Number.isInteger(safeQuantity) ||
    safeQuantity < 1
  ) {
    return null;
  }

  const netSubtotal = safeUnitPrice * safeQuantity;
  const vatAmount = netSubtotal * QUOTE_VAT_RATE;
  const grossSubtotal = netSubtotal + vatAmount;
  // Transport is only known after the delivery postcode, number of required
  // truck journeys, site access and unloading method have been assessed.
  // Self-collection is the sole option with a fixed transport charge (€0).
  const shippingFee = unloadingMethod === "self_pickup" ? 0 : null;
  const total = unloadingMethod === "self_pickup" ? grossSubtotal : null;

  return {
    unitPrice: safeUnitPrice,
    quantity: safeQuantity,
    netSubtotal,
    vatRate: QUOTE_VAT_RATE,
    vatAmount,
    grossSubtotal,
    shippingFee,
    total,
  };
}
