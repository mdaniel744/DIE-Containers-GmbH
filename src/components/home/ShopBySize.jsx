"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSizeOptions } from "@/hooks/useSizeOptions";
import { useSection } from "@/lib/i18n";

// Image and dedicated SEO route for the three sizes that have them.
// Label and description now come from i18n.js so they translate automatically.
const KNOWN_SIZE_META = {
  "10ft": { image: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/3b5b9ecc9_Neuer10FuHighCubeVersandcontainer.jpg", path: "/kategorien/10ft" },
  "20ft": { image: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/4f2bd8d74_20FuSchiffscontainer.jpg", path: "/kategorien/20ft" },
  "40ft": { image: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/9750089f7_40Fuhighcubecontainerkaufen.jpg", path: "/kategorien/40ft" },
};
const FALLBACK_IMAGE = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/4f2bd8d74_20FuSchiffscontainer.jpg";

export default function ShopBySize() {
  const { values, loading } = useSizeOptions();
  const T = useSection("shopBySize");

  if (loading || values.length === 0) return null;

  const sizes = values.map((v) => {
    const known = KNOWN_SIZE_META[v.value];
    const sizeStrings = T.sizes?.[v.value];
    return {
      size: v.value,
      label: v.label || sizeStrings?.label || `${v.value} Container`,
      description: v.description || sizeStrings?.description || T.genericDesc,
      image: v.image_url || known?.image || FALLBACK_IMAGE,
      path: known?.path || `/shop?size=${encodeURIComponent(v.value)}`,
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
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
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
