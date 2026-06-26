"use client";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { X, Package, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import BuerocontainerKaufen from "@/views/seo/BuerocontainerKaufen";

const ORANGE = "#F28C28";

export default function BuerocontainerCategory() {
  const { products: allProducts, loading } = useProducts();
  const [sortBy, setSortBy] = useState("price_asc");
  const [sizeFilter, setSizeFilter] = useState("all");

  const products = useMemo(() => {
    let result = allProducts.filter((p) => {
      if (p.container_type !== "Bürocontainer") return false;
      if (sizeFilter !== "all" && p.size !== sizeFilter) return false;
      return true;
    });
    if (sortBy === "price_asc") result.sort((a, b) => a.price_from - b.price_from);
    else result.sort((a, b) => b.price_from - a.price_from);
    return result;
  }, [sortBy, sizeFilter, allProducts]);

  const sizes = ["all", "10ft", "20ft", "40ft"];

  if (loading) return <div className="pt-32 flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-4 border-border border-t-foreground rounded-full animate-spin" /></div>;

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Startseite</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-foreground transition-colors">Container Katalog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">Bürocontainer</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: ORANGE }}>Produktkategorie</span>
          </div>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-3">
            Bürocontainer kaufen
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Schlüsselfertige Bürocontainer mit Elektroinstallation, Isolierung, Fenster und Tür – sofort einsatzbereit als mobiles Büro, Baubüro oder Sozialraum. Ab 5.900 €.
          </p>
          <div className="mt-3 text-sm text-muted-foreground">
            <Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">
              → Ratgeber: Bürocontainer kaufen – Ausstattung, Preise & Genehmigung
            </Link>
          </div>
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSizeFilter(s)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  sizeFilter === s
                    ? "text-white border-transparent"
                    : "bg-card border-border text-muted-foreground hover:border-orange-300"
                }`}
                style={sizeFilter === s ? { backgroundColor: ORANGE } : {}}
              >
                {s === "all" ? "Alle Größen" : s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{products.length} Container</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-border rounded-lg px-3 py-2 bg-card outline-none"
            >
              <option value="price_asc">Preis aufsteigend</option>
              <option value="price_desc">Preis absteigend</option>
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
            <h3 className="font-heading font-semibold text-lg mb-2">Keine Bürocontainer gefunden</h3>
            <Button variant="outline" onClick={() => setSizeFilter("all")}>
              <X className="w-4 h-4 mr-2" /> Filter zurücksetzen
            </Button>
          </div>
        )}

        <BuerocontainerKaufen />

        {/* Cross-links */}
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="font-heading font-semibold text-lg mb-4">Weitere Kategorien</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "10 Fuß Container", href: "/kategorien/10ft" },
              { label: "20 Fuß Container", href: "/kategorien/20ft" },
              { label: "40 Fuß Container", href: "/kategorien/40ft" },
              { label: "Kühlcontainer", href: "/kategorien/kuehlcontainer" },
              { label: "Open Side Container", href: "/kategorien/open-side" },
            ].map((l) => (
              <Link key={l.href} to={l.href} className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-orange-300 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}