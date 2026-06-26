"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { isBase44Configured } from "@/lib/app-params";
import { PRODUCT_DATA } from "@/lib/productData";

const findLocalProduct = (slugOrId) =>
  PRODUCT_DATA.find((product) => product.slug === slugOrId || product.id === slugOrId) || null;

export function useProducts() {
  const [products, setProducts] = useState(() => isBase44Configured ? [] : PRODUCT_DATA);
  const [loading, setLoading] = useState(isBase44Configured);

  useEffect(() => {
    if (!isBase44Configured) {
      setProducts(PRODUCT_DATA);
      setLoading(false);
      return;
    }

    let cancelled = false;
    base44.entities.Product.list()
      .then((results) => {
        if (!cancelled) setProducts(results);
      })
      .catch(() => {
        if (!cancelled) setProducts(PRODUCT_DATA);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { products, loading };
}

export function useProduct(slugOrId) {
  const [product, setProduct] = useState(() =>
    isBase44Configured ? null : findLocalProduct(slugOrId)
  );
  const [loading, setLoading] = useState(isBase44Configured);

  useEffect(() => {
    if (!slugOrId) {
      setProduct(null);
      setLoading(false);
      return;
    }

    if (!isBase44Configured) {
      setProduct(findLocalProduct(slugOrId));
      setLoading(false);
      return;
    }

    let cancelled = false;
    base44.entities.Product.filter({ slug: slugOrId })
      .then((results) => {
        if (cancelled) return undefined;
        if (results.length > 0) {
          setProduct(results[0]);
        } else {
          // fallback: try by id
          return base44.entities.Product.get(slugOrId)
            .then((result) => {
              if (!cancelled) setProduct(result);
            })
            .catch(() => {
              if (!cancelled) setProduct(findLocalProduct(slugOrId));
            });
        }
      })
      .catch(() => {
        if (!cancelled) setProduct(findLocalProduct(slugOrId));
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [slugOrId]);

  return { product, loading };
}
