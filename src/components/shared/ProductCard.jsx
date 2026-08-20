"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { useCart } from "@/lib/CartContext";

// Maps raw DB condition codes to locale-correct display labels.
const CONDITION_DISPLAY = {
  de: { new: "Neu", used: "Gebraucht", refurbished: "Generalüberholt" },
  en: { new: "New", used: "Used", refurbished: "Fully refurbished" },
};

const badgeStyles = {
  Neu: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  Gebraucht: "bg-[#E9F6EA] text-[#176B20] border-[#B9DFBC]",
  Bestseller: "bg-[#E9F6EA] text-[#176B20] border-[#B9DFBC]",
  Angebot: "bg-rose-500/10 text-rose-700 border-rose-500/20",
};

export default function ProductCard({ product, index = 0 }) {
  const T = useSection("productCard");
  const locale = useLocale();
  const conditionLabel = CONDITION_DISPLAY[locale]?.[product.condition_code] || product.condition;
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigate("/warenkorb?added=1");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#B9DFBC] hover:shadow-xl"
    >
      <Link to={`/produkt/${product.slug || product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img src={product.image_url} alt={product.image_alts?.[0] || product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          {product.badge && (
            <Badge className={`absolute top-3 left-3 text-xs font-semibold border ${badgeStyles[product.badge] || "bg-muted text-muted-foreground"}`}>
              {product.badge}
            </Badge>
          )}
          {product.is_available && (
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
          )}
        </div>
      </Link>

      <div className="p-5 sm:p-6">
        <div className="mb-2">
          <h3 className="line-clamp-2 font-heading text-base font-semibold leading-snug">{product.title}</h3>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="rounded-full bg-[#F0F7F1] px-3 py-1 font-mono text-xs text-[#176B20]">{product.size}</span>
          <span className="rounded-full bg-[#F0F7F1] px-3 py-1 font-mono text-xs text-[#176B20]">{conditionLabel}</span>
        </div>

        <div className="mb-4">
          <span className="font-heading text-2xl font-bold text-foreground">
            {product.price_from?.toLocaleString("de-DE")} €
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            size="sm"
            onClick={handleAddToCart}
            className="h-11 w-full rounded-full text-sm font-bold hover:opacity-90"
            style={{ backgroundColor: "#46C54B", color: "#0D2A12" }}
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
            {T.cart}
          </Button>
          <Link to={`/produkt/${product.slug || product.id}`} className="w-full">
            <Button size="sm" variant="outline" className="h-11 w-full rounded-full text-sm font-semibold">
              {T.details}
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
