"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useLocale } from "@/hooks/useLocale";
import { DEFAULT_LOCALE } from "@/lib/locale";
import { fetchTranslations } from "@/api/translationsClient";

/**
 * Builds a reverse lookup map: { rawValue: translatedDisplayValue }
 * for all attribute_values in this store, for the current locale.
 *
 * Usage in a component:
 *   const translateAttrValue = useAttributeValueTranslations();
 *   translateAttrValue("Kühlcontainer") // → "Refrigerated container" on /en/
 *   translateAttrValue("Kühlcontainer") // → "Kühlcontainer" on German site
 *
 * Falls back to the raw value if no translation exists.
 */
export function useAttributeValueTranslations() {
  const [map, setMap] = useState({});
  const locale = useLocale();

  useEffect(() => {
    if (locale === DEFAULT_LOCALE) {
      setMap({});
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const values = await base44.entities.AttributeValue.list();
        if (!values.length) return;

        const translationMap = await fetchTranslations(
          "attribute_value",
          values.map((v) => v.id),
          locale
        );

        // Build reverse lookup: raw value string → translated display string
        const lookup = {};
        for (const v of values) {
          const translated = translationMap[v.id]?.value;
          if (translated) lookup[v.value] = translated;
        }

        if (!cancelled) setMap(lookup);
      } catch {
        if (!cancelled) setMap({});
      }
    })();

    return () => { cancelled = true; };
  }, [locale]);

  // Returns translated value or falls back to the raw source string
  return (rawValue) => map[rawValue] ?? rawValue;
}
