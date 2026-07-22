export const QUOTE_CONTAINER_SIZES = ["10ft", "20ft", "40ft"];

export function normalizeQuoteContainerSize(value) {
  const match = String(value || "").match(/\b(10|20|40)\s*(?:ft|fuß|fuss)?\b/i);
  return match ? `${match[1]}ft` : "";
}

export function getContainerHeightVariant(product = {}) {
  const text = [
    product.container_height,
    product.height_variant,
    product.height,
    product.container_type,
    product.title,
    product.short_description,
    product.description,
  ].filter(Boolean).join(" ");

  if (/\b(?:high[\s-]*cube|hc)\b/i.test(text)) return "High Cube";

  const heightMatch = String(product.outer_height || "").match(/\d+(?:[.,]\d+)?/);
  const outerHeight = heightMatch ? Number(heightMatch[0].replace(",", ".")) : 0;

  return outerHeight >= 2.75 ? "High Cube" : "Standard";
}
