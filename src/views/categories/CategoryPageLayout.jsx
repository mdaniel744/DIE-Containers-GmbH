"use client";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { X, Package, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";

const ORANGE = "#F28C28";

// Condition codes (language-neutral) mapped to i18n condition labels
const CONDITION_CODES = ["all", "new", "used", "refurbished"];

/**
 * Shared layout for all category pages (10ft, 20ft, 40ft, Kühl, Büro, OpenSide).
 *
 * @param {string}   filterKey   - product field to filter on: "size" or "container_type"
 * @param {string}   filterValue - value to match, e.g. "10ft" or "Kühlcontainer"
 * @param {string}   i18nSection - key in i18n.js, e.g. "cat10ft"
 * @param {string[]} crossLinks  - array of cross-link i18n keys to show at bottom
 * @param {ReactNode} seoContent - SEO article component rendered below the grid
 */
export default function CategoryPageLayout({ filterKey, filterValue, i18nSection, crossLinks, seoContent }) {
  const { products: allProducts, loading } = useProducts();
  const [sortBy, setSortBy] = useState("price_asc");
  const [conditionFilter, setConditionFilter] = useState("all");

  const T = useSection(i18nSection);
  const Tpage = useSection("categoryPage");
  const Tshop = useSection("shop");
  const Tcond = useSection("filters");

  // Condition labels from i18n (translated)
  const conditionLabels = {
    all: Tcond.allConditions,
    new: Tcond.conditionOptions?.[0]?.label || "Neu",
    used: Tcond.conditionOptions?.[1]?.label || "Gebraucht",
    refurbished: Tcond.conditionOptions?.[2]?.label || "Generalüberholt",
  };

  // German condition labels for filter matching (p.condition is always German)
  const conditionMatchMap = {
    all: null,
    new: "Neu",
    used: "Gebraucht",
    refurbished: "Generalüberholt",
  };

  const products = useMemo(() => {
    let result = allProducts.filter((p) => {
      if (p[filterKey] !== filterValue) return false;
      const matchLabel = conditionMatchMap[conditionFilter];
      if (matchLabel && p.condition !== matchLabel) return false;
      return true;
    });
    if (sortBy === "price_asc") result.sort((a, b) => a.price_from - b.price_from);
    else result.sort((a, b) => b.price_from - a.price_from);
    return result;
  }, [sortBy, conditionFilter, allProducts, filterKey, filterValue]);

  if (loading) return (
    <div className="pt-32 flex items-center justify-center min-h-screen">
      <div className="w-8 h-8 border-4 border-border border-t-foreground rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">{Tpage.breadcrumbHome}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-foreground transition-colors">{Tpage.breadcrumbCatalog}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">{T.title}</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: ORANGE }}>{T.label}</span>
          </div>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-3">{T.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{T.description}</p>
          <div className="mt-3 text-sm text-muted-foreground">
            <Link to={T.guidePath} className="text-orange-500 hover:underline">{T.guideLink}</Link>
          </div>
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {CONDITION_CODES.map((code) => (
              <button
                key={code}
                onClick={() => setConditionFilter(code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  conditionFilter === code
                    ? "text-white border-transparent"
                    : "bg-card border-border text-muted-foreground hover:border-orange-300"
                }`}
                style={conditionFilter === code ? { backgroundColor: ORANGE } : {}}
              >
                {conditionLabels[code]}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{products.length} {Tshop.available}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-border rounded-lg px-3 py-2 bg-card outline-none"
            >
              <option value="price_asc">{Tpage.sortAsc}</option>
              <option value="price_desc">{Tpage.sortDesc}</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Package className="w-12 h-12 mx-auto text-muted-foreground/40 mb-4" />
            <h3 className="font-heading font-semibold text-lg mb-2">{T.noContainers}</h3>
            <Button variant="outline" onClick={() => setConditionFilter("all")}>
              <X className="w-4 h-4 mr-2" /> {Tpage.resetFilter}
            </Button>
          </div>
        )}

        {/* SEO article section */}
        {seoContent}

        {/* Cross-links */}
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="font-heading font-semibold text-lg mb-4">{Tpage.moreCategories}</h2>
          <div className="flex flex-wrap gap-2">
            {crossLinks.map(({ key, href }) => (
              <Link key={href} to={href} className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-orange-300 transition-colors">
                {Tpage.crossLinks[key]}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
