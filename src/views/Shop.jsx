"use client";
import React, { useState, useMemo, useEffect } from "react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shared/ProductCard";
import ShopFilters from "@/components/shop/ShopFilters";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X, Package } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";
import ShopSeoBanner20ft from "@/components/shop/ShopSeoBanner20ft";
import ShopSeoBanner40ft from "@/components/shop/ShopSeoBanner40ft";
import ShopSeoContainerKaufen from "@/components/shop/ShopSeoContainerKaufen";
import SeecontainerKaufen from "@/views/seo/SeecontainerKaufen";
import KuehlcontainerKaufen from "@/views/seo/KuehlcontainerKaufen";
import BuerocontainerKaufen from "@/views/seo/BuerocontainerKaufen";
import OpenSideContainerKaufen from "@/views/seo/OpenSideContainerKaufen";

export default function Shop() {
  const { products: allProducts, loading } = useProducts();
  const T = useSection("shop");
  const [searchParams] = useSearchParams();

  const getFiltersFromParams = () => {
    const normalize = (val) => val ? decodeURIComponent(val).trim() : null;
    const size = normalize(searchParams.get("size"));
    const type = normalize(searchParams.get("type"));
    const condition = normalize(searchParams.get("condition"));
    const catalog = normalize(searchParams.get("catalog"));
    return {
      size: size ? [size] : [],
      container_type: catalog === "seecontainer" ? ["Standard", "High Cube"] : type ? [type] : [],
      condition: condition ? [condition] : [],
    };
  };

  const [filters, setFilters] = useState(getFiltersFromParams());
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [sortBy, setSortBy] = useState("price_asc");

  useEffect(() => {
    setFilters(getFiltersFromParams());
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (!allProducts.length) return [];
    let result = allProducts.filter((p) => {
      for (const [key, values] of Object.entries(filters)) {
        if (values.length > 0) {
          const productVal = (p[key] || "").toString().toLowerCase();
          const match = values.some((v) => v.toLowerCase() === productVal);
          if (!match) return false;
        }
      }
      if (p.price_from != null && (p.price_from < priceRange[0] || p.price_from > priceRange[1])) return false;
      return true;
    });

    if (sortBy === "price_asc") result.sort((a, b) => a.price_from - b.price_from);
    else if (sortBy === "price_desc") result.sort((a, b) => b.price_from - a.price_from);

    return result;
  }, [allProducts, filters, priceRange, sortBy]);

  const activeCount = Object.values(filters).flat().length + (priceRange[1] < 50000 ? 1 : 0);
  const selectedTypes = filters.container_type || [];
  const isShippingContainerFilter = selectedTypes.length > 0 && selectedTypes.every((type) => ["Standard", "High Cube"].includes(type));
  const selectedSeoContent = (() => {
    if (selectedTypes.length === 1 && selectedTypes[0] === "Open Side") {
      return <OpenSideContainerKaufen embedded showProducts={false} />;
    }
    if (selectedTypes.length === 1 && selectedTypes[0] === "Kühlcontainer") {
      return <KuehlcontainerKaufen embedded showProducts={false} />;
    }
    if (selectedTypes.length === 1 && selectedTypes[0] === "Bürocontainer") {
      return <BuerocontainerKaufen embedded showProducts={false} />;
    }
    if (isShippingContainerFilter) {
      return <SeecontainerKaufen embedded showProducts={false} />;
    }
    return null;
  })();

  const filterContent = (
    <ShopFilters
      filters={filters}
      setFilters={setFilters}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
      availableProducts={allProducts}
    />
  );

  if (loading) {
    return (
      <div className="pt-32 pb-20 flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-border border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-bold text-3xl lg:text-4xl tracking-tight"
          >
            {T.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mt-2"
          >
            {filteredProducts.length} {T.available}
          </motion.p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 bg-card/80 backdrop-blur-xl rounded-xl border border-border p-5 max-h-[calc(100vh-7rem)] overflow-y-auto">
              {filterContent}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 gap-3">
              {/* Mobile filter */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="lg:hidden">
                    <SlidersHorizontal className="w-4 h-4 mr-2" />
                    {T.filter}
                    {activeCount > 0 && (
                      <span className="ml-1.5 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                        {activeCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 p-6 overflow-y-auto">
                  {filterContent}
                </SheetContent>
              </Sheet>

              <div className="hidden lg:block" />

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-border rounded-lg px-3 py-2 bg-card focus:ring-2 focus:ring-secondary/30 focus:border-secondary outline-none"
              >
                <option value="price_asc">{T.sortAsc}</option>
                <option value="price_desc">{T.sortDesc}</option>
              </select>
            </div>

            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Package className="w-12 h-12 mx-auto text-muted-foreground/40 mb-4" />
                <h3 className="font-heading font-semibold text-lg mb-2">{T.empty}</h3>
                <p className="text-sm text-muted-foreground mb-6">{T.emptyHint}</p>
                <Button
                  variant="outline"
                  onClick={() => { setFilters({}); setPriceRange([0, 50000]); }}
                >
                  <X className="w-4 h-4 mr-2" /> {T.resetFilters}
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Size-specific guides only apply when no type-specific article is selected. */}
        {!selectedSeoContent && filters.size?.includes("20ft") && filters.size?.length === 1 && (
          <ShopSeoBanner20ft />
        )}

        {!selectedSeoContent && filters.size?.includes("40ft") && filters.size?.length === 1 && (
          <ShopSeoBanner40ft />
        )}

        {selectedSeoContent || <ShopSeoContainerKaufen />}
      </div>
    </div>
  );
}
