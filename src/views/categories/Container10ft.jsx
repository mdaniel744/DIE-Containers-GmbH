"use client";
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/shared/ProductCard";
import { Button } from "@/components/ui/button";
import { X, Package, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Container10Fuss from "@/views/seo/Container10Fuss";

const ORANGE = "#F28C28";

export default function Container10ftCategory() {
  const { products: allProducts, loading } = useProducts();
  const [sortBy, setSortBy] = useState("price_asc");
  const [conditionFilter, setConditionFilter] = useState("all");

  const products = useMemo(() => {
    let result = allProducts.filter((p) => {
      if (p.size !== "10ft") return false;
      if (conditionFilter !== "all" && p.condition !== conditionFilter) return false;
      return true;
    });
    if (sortBy === "price_asc") result.sort((a, b) => a.price_from - b.price_from);
    else result.sort((a, b) => b.price_from - a.price_from);
    return result;
  }, [sortBy, conditionFilter, allProducts]);

  const conditions = ["all", "Neu", "Gebraucht", "Generalüberholt"];

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
          <span className="text-foreground font-medium">10 Fuß Container</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: ORANGE }}>Produktkategorie</span>
          </div>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-3">
            10 Fuß Container kaufen
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Kompakte ISO-Seecontainer mit ca. 15,7 m³ Volumen – ideal für Garten, Baustelle und kleine Lagerflächen. Gebraucht ab 990 €, neu ab 1.890 €.
          </p>
          <div className="mt-3 text-sm text-muted-foreground">
            <Link to="/10-fuss-container-kaufen" className="text-orange-500 hover:underline">
              → Ratgeber: 10 Fuß Container – Maße, Preise & Anwendungen
            </Link>
          </div>
        </motion.div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
          <div className="flex flex-wrap gap-2">
            {conditions.map((c) => (
              <button
                key={c}
                onClick={() => setConditionFilter(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  conditionFilter === c
                    ? "text-white border-transparent"
                    : "bg-card border-border text-muted-foreground hover:border-orange-300"
                }`}
                style={conditionFilter === c ? { backgroundColor: ORANGE } : {}}
              >
                {c === "all" ? "Alle Zustände" : c}
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
            <h3 className="font-heading font-semibold text-lg mb-2">Keine Container gefunden</h3>
            <Button variant="outline" onClick={() => setConditionFilter("all")}>
              <X className="w-4 h-4 mr-2" /> Filter zurücksetzen
            </Button>
          </div>
        )}

        <Container10Fuss />

        {/* Cross-links */}
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="font-heading font-semibold text-lg mb-4">Weitere Kategorien</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "20 Fuß Container", href: "/kategorien/20ft" },
              { label: "40 Fuß Container", href: "/kategorien/40ft" },
              { label: "Kühlcontainer", href: "/kategorien/kuehlcontainer" },
              { label: "Bürocontainer", href: "/kategorien/buerocontainer" },
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