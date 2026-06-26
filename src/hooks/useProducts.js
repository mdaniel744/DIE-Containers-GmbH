"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.Product.list()
      .then(setProducts)
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
}

export function useProduct(slugOrId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slugOrId) return;
    base44.entities.Product.filter({ slug: slugOrId })
      .then((results) => {
        if (results.length > 0) {
          setProduct(results[0]);
        } else {
          // fallback: try by id
          return base44.entities.Product.get(slugOrId).then(setProduct).catch(() => {});
        }
      })
      .finally(() => setLoading(false));
  }, [slugOrId]);

  return { product, loading };
}