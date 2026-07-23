"use client";
import React, { useMemo, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { X, Package } from "lucide-react";
import { useSection } from "@/lib/i18n";

const BRAND_BLUE = "#1E5FAE";
const CONDITION_CODES = ["all", "new", "used", "refurbished"];

const normalizeFilterValue = (value) =>
  String(value || "")
    .toLowerCase()
    .replace(/high[\s-]*cube/g, "hc")
    .replace(/fuß|fuss/g, "ft")
    .replace(/\s+/g, "")
    .trim();

const matchesFilterValue = (productValue, filterValue) => {
  const allowedValues = Array.isArray(filterValue) ? filterValue : [filterValue];
  const normalizedProductValue = normalizeFilterValue(productValue);
  return allowedValues.some((value) => normalizeFilterValue(value) === normalizedProductValue);
};

/** Reusable filtered product grid for category and SEO pages. */
export default function ProductListingSection({
  filterKey = "container_type",
  filterValue,
  title,
  description,
  emptyTitle = "Keine passenden Container verfügbar",
  id,
  className = "",
}) {
  const { products: allProducts, loading } = useProducts();
  const [sortBy, setSortBy] = useState("price_asc");
  const [conditionFilter, setConditionFilter] = useState("all");
  const Tpage = useSection("categoryPage");
  const Tshop = useSection("shop");
  const Tcond = useSection("filters");

  const conditionLabels = {
    all: Tcond.allConditions,
    new: Tcond.conditionOptions?.[0]?.label || "Neu",
    used: Tcond.conditionOptions?.[1]?.label || "Gebraucht",
    refurbished: Tcond.conditionOptions?.[2]?.label || "Generalüberholt",
  };

  const conditionMatchMap = {
    all: null,
    new: "Neu",
    used: "Gebraucht",
    refurbished: "Generalüberholt",
  };

  const products = useMemo(() => {
    const result = allProducts.filter((product) => {
      if (!matchesFilterValue(product[filterKey], filterValue)) return false;
      const matchLabel = conditionMatchMap[conditionFilter];
      return !matchLabel || product.condition === matchLabel;
    });

    return result.sort((a, b) => (
      sortBy === "price_asc" ? a.price_from - b.price_from : b.price_from - a.price_from
    ));
  }, [allProducts, conditionFilter, filterKey, filterValue, sortBy]);

  if (loading) {
    return (
      <div className="flex min-h-48 items-center justify-center" aria-label="Container werden geladen">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-foreground" />
      </div>
    );
  }

  return (
    <section id={id} className={className}>
      {title && (
        <div className="mb-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">{title}</h2>
          {description && <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{description}</p>}
        </div>
      )}

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex flex-wrap gap-2">
          {CONDITION_CODES.map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setConditionFilter(code)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                conditionFilter === code
                  ? "border-transparent text-white"
                  : "border-border bg-card text-muted-foreground hover:border-blue-300"
              }`}
              style={conditionFilter === code ? { backgroundColor: BRAND_BLUE } : {}}
            >
              {conditionLabels[code]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{products.length} {Tshop.available}</span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none"
            aria-label="Sortierung"
          >
            <option value="price_asc">{Tpage.sortAsc}</option>
            <option value="price_desc">{Tpage.sortDesc}</option>
          </select>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground/40" />
          <h3 className="mb-2 font-heading text-lg font-semibold">{emptyTitle}</h3>
          <Button variant="outline" onClick={() => setConditionFilter("all")}>
            <X className="mr-2 h-4 w-4" /> {Tpage.resetFilter}
          </Button>
        </div>
      )}
    </section>
  );
}
