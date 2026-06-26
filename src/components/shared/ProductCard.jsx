"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";

const badgeStyles = {
  Neu: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  Gebraucht: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  Bestseller: "bg-amber-500/10 text-amber-700 border-amber-500/20",
  Angebot: "bg-rose-500/10 text-rose-700 border-rose-500/20",
};

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
    >
      {/* Clickable image → product detail */}
      <Link to={`/produkt/${product.slug || product.id}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {product.badge && (
            <Badge
              className={`absolute top-3 left-3 text-xs font-semibold border ${
                badgeStyles[product.badge] || "bg-muted text-muted-foreground"
              }`}
            >
              {product.badge}
            </Badge>
          )}
          {product.is_available && (
            <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-white" />
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <h3 className="font-heading font-semibold text-sm leading-snug line-clamp-2">
            {product.title}
          </h3>
        </div>

        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
            {product.size}
          </span>
          <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
            {product.condition}
          </span>
        </div>

        <div className="mb-4">
          <span className="font-heading font-bold text-xl text-foreground">
            Ab {product.price_from?.toLocaleString("de-DE")} €
          </span>
          <p className="text-xs text-muted-foreground mt-0.5">zzgl. Transportkosten</p>
        </div>

        <div className="flex gap-2">
          <Link to={`/produkt/${product.slug || product.id}`} className="flex-1">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-xs font-medium border-[#1B3A5C]/30 text-[#1B3A5C] hover:bg-[#1B3A5C]/5"
            >
              Details ansehen
            </Button>
          </Link>
          <Link to={`/angebot?product=${product.id}`} className="flex-1">
            <Button
              size="sm"
              className="w-full text-xs font-medium text-[#1a1a1a] hover:opacity-90"
              style={{ backgroundColor: "#F28C28" }}
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              Angebot
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}