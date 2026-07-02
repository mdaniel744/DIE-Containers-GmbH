"use client";
import { supabase, isSupabaseConfigured, STORE_ID } from "@/lib/supabaseClient";

/**
 * Fetch translations for one or more entities in a given locale.
 *
 * Returns a nested map:
 *   { [entityId]: { [fieldName]: translatedValue } }
 *
 * Missing rows mean "use the source-language value" — never blank.
 * Caller is responsible for the overlay step:
 *   const name = translationMap[product.id]?.name ?? product.title;
 *
 * @param {string} entityType  "product" | "category" | "attribute_name" | "attribute_value"
 * @param {string[]} entityIds  Array of UUIDs to fetch translations for
 * @param {string} locale       e.g. "en"
 */
export async function fetchTranslations(entityType, entityIds, locale) {
  if (!isSupabaseConfigured || !entityIds.length || !locale) return {};

  const { data, error } = await supabase
    .from("translations")
    .select("entity_id,field_name,value")
    .eq("store_id", STORE_ID)
    .eq("entity_type", entityType)
    .eq("locale", locale)
    .in("entity_id", entityIds);

  if (error) {
    console.warn("fetchTranslations error:", error.message);
    return {};
  }

  // Build {entityId: {fieldName: value}} map
  const map = {};
  for (const row of data || []) {
    if (!map[row.entity_id]) map[row.entity_id] = {};
    map[row.entity_id][row.field_name] = row.value;
  }
  return map;
}

/**
 * Overlay translations onto a product object.
 * Falls back to original field for any missing translation row.
 * Translatable product fields: name → title, description, short_description, badge.
 */
export function overlayProductTranslations(product, translationMap) {
  if (!product) return product;
  const t = translationMap[product.id] || {};
  return {
    ...product,
    title: t.name ?? product.title,
    description: t.description ?? product.description,
    short_description: t.short_description ?? product.short_description,
    badge: t.badge ?? product.badge,
  };
}

/**
 * Overlay translations onto a category object.
 * Translatable fields: name, description, meta_title, meta_description.
 */
export function overlayCategoryTranslations(category, translationMap) {
  if (!category) return category;
  const t = translationMap[category.id] || {};
  return {
    ...category,
    name: t.name ?? category.name,
    description: t.description ?? category.description,
    meta_title: t.meta_title ?? category.meta_title,
    meta_description: t.meta_description ?? category.meta_description,
  };
}

/**
 * Build a lookup: { [attributeId]: translatedLabel }
 * from attribute_name translations.
 */
export function buildAttributeNameMap(attributes, translationMap) {
  const map = {};
  for (const attr of attributes) {
    map[attr.id] = translationMap[attr.id]?.name ?? attr.name;
  }
  return map;
}

/**
 * Build a lookup: { [attributeValueId]: translatedValue }
 * from attribute_value translations.
 */
export function buildAttributeValueMap(attributeValues, translationMap) {
  const map = {};
  for (const av of attributeValues) {
    map[av.id] = translationMap[av.id]?.value ?? av.value;
  }
  return map;
}
