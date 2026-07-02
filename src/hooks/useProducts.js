"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    base44.entities.Product.list()
      .then((results) => {
        if (!cancelled) setProducts(results);
      })
      .catch(() => {
        if (!cancelled) setProducts([]);
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
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slugOrId) {
      setProduct(null);
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
              if (!cancelled) setProduct(null);
            });
        }
      })
      .catch(() => {
        if (!cancelled) setProduct(null);
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
