"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useLocale } from "@/hooks/useLocale";
import { DEFAULT_LOCALE } from "@/lib/locale";
import { fetchTranslations } from "@/api/translationsClient";

/**
 * Returns attribute value options for a given attribute name.
 *
 * Each option is { value, label }:
 *   value — the raw DB string used for filter matching against product data
 *           (must stay German: "Kühlcontainer", "Blau", "10ft" etc.)
 *   label — the locale-correct display string shown in the UI
 *           (translated via the translations table on non-default locales)
 *
 * The value/label split is critical: filters are matched against product
 * attribute fields which always store the source-language value, so changing
 * the display label must never change the filter key.
 */
export function useAttributeOptions(attributeName) {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const attributes = await base44.entities.Attribute.filter({ name: attributeName });
        const attribute = attributes[0];
        if (!attribute) {
          if (!cancelled) { setOptions([]); setLoading(false); }
          return;
        }

        const values = await base44.entities.AttributeValue.filter({ attribute_id: attribute.id });

        // Fetch translations for non-default locales.
        // translations.field_name = "value" contains the translated display string.
        let translationMap = {};
        if (locale !== DEFAULT_LOCALE && values.length > 0) {
          translationMap = await fetchTranslations(
            "attribute_value",
            values.map((v) => v.id),
            locale
          );
        }

        if (!cancelled) {
          setOptions(
            values.map((v) => ({
              value: v.value,
              label: translationMap[v.id]?.value ?? v.value,
            }))
          );
          setLoading(false);
        }
      } catch {
        if (!cancelled) { setOptions([]); setLoading(false); }
      }
    })();

    return () => { cancelled = true; };
  }, [attributeName, locale]);

  return { options, loading };
}
