"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSizeOptions } from "@/hooks/useSizeOptions";
import { useSection } from "@/lib/i18n";
import { SIZE_IMAGES } from "@/lib/imageAssets";

// Homepage should show only the three primary product categories.
// High Cube attribute values can exist in the database, but they should not
// create extra home-page banners here.
const HOME_SIZE_ORDER = ["10ft", "20ft", "40ft"];

// Image and dedicated SEO route for the three sizes that have them.
// Label and description now come from i18n.js so they translate automatically.
const KNOWN_SIZE_META = {
  "10ft": { image: SIZE_IMAGES["10ft"], path: "/kategorien/10ft" },
  "20ft": { image: SIZE_IMAGES["20ft"], path: "/kategorien/20ft" },
  "40ft": { image: SIZE_IMAGES["40ft"], path: "/kategorien/40ft" },
};
const FALLBACK_IMAGE = SIZE_IMAGES["20ft"];

export default function ShopBySize() {
  const { values, loading } = useSizeOptions();
  const T = useSection("shopBySize");

  if (loading) return null;

  const sizes = HOME_SIZE_ORDER.map((size) => {
    const v = values.find((item) => item.value === size);
    const known = KNOWN_SIZE_META[size];
    const sizeStrings = T.sizes?.[size];
    return {
      size,
      label: v?.label || sizeStrings?.label || `${size} Container`,
      description: v?.description || sizeStrings?.description || T.genericDesc,
      image: known?.image || FALLBACK_IMAGE,
      path: known?.path || `/shop?size=${encodeURIComponent(size)}`,
    };
  });

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label={T.label} title={T.title} description={T.description} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sizes.map((item, i) => (
            <motion.div key={item.size} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
              <Link to={item.path} className="group block relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                  <img src={item.image} alt={item.label} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-secondary transition-colors">{item.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    {T.watchNow}
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
