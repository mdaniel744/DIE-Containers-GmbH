"use client";
import { useState, useEffect } from "react";
import { useProduct } from "@/hooks/useProducts";
import { useLocale } from "@/hooks/useLocale";
import { DEFAULT_LOCALE } from "@/lib/locale";
import { fetchTranslations, overlayProductTranslations } from "@/api/translationsClient";

/**
 * Wraps useProduct and overlays translations for the current locale.
 * Falls back to source-language values for any missing translation field.
 * When locale is the default (de), behaves identically to useProduct.
 */
export function useTranslatedProduct(slugOrId) {
  const { product: sourceProduct, loading: productLoading } = useProduct(slugOrId);
  const locale = useLocale();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productLoading) return;

    if (!sourceProduct || locale === DEFAULT_LOCALE) {
      setProduct(sourceProduct);
      setLoading(false);
      return;
    }

    let cancelled = false;
    fetchTranslations("product", [sourceProduct.id], locale)
      .then((translationMap) => {
        if (cancelled) return;
        setProduct(overlayProductTranslations(sourceProduct, translationMap));
      })
      .catch(() => {
        if (cancelled) return;
        // On error fall back silently to source product
        setProduct(sourceProduct);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [sourceProduct, productLoading, locale]);

  return { product, loading };
}
