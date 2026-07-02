"use client";
import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";

export function useFeaturedCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    base44.entities.Category.filter({ is_featured: true })
      .then((results) => {
        if (cancelled) return;
        const sorted = [...results].sort((a, b) => a.display_order - b.display_order);
        setCategories(sorted);
      })
      .catch(() => {
        if (!cancelled) setCategories([]);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { categories, loading };
}
