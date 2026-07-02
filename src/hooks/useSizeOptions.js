"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { useLocale } from "@/hooks/useLocale";
import { DEFAULT_LOCALE } from "@/lib/locale";
import { fetchTranslations } from "@/api/translationsClient";

export function useSizeOptions() {
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const attributes = await base44.entities.Attribute.filter({ name: "Size" });
        const sizeAttribute = attributes[0];
        if (!sizeAttribute) {
          if (!cancelled) { setValues([]); setLoading(false); }
          return;
        }

        const results = await base44.entities.AttributeValue.filter({ attribute_id: sizeAttribute.id });
        if (!results?.length) {
          if (!cancelled) { setValues([]); setLoading(false); }
          return;
        }

        // Overlay translations for label and description when on non-default locale.
        // translationMap[id] = { label: "...", description: "...", value: "..." }
        // Each field_name that has a translation row is keyed inside the entry.
        let translationMap = {};
        if (locale !== DEFAULT_LOCALE) {
          translationMap = await fetchTranslations(
            "attribute_value",
            results.map((v) => v.id),
            locale
          );
        }

        if (!cancelled) {
          setValues(
            results.map((v) => {
              const t = translationMap[v.id] || {};
              return {
                ...v,
                label: t.label ?? v.label,
                description: t.description ?? v.description,
                // "value" (the raw filter key) is never overridden — it must
                // always match what's stored in products.attributes.Size
              };
            })
          );
          setLoading(false);
        }
      } catch {
        if (!cancelled) { setValues([]); setLoading(false); }
      }
    })();

    return () => { cancelled = true; };
  }, [locale]);

  return { values, loading };
}
