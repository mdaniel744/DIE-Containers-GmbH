"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSizeOptions } from "@/hooks/useSizeOptions";
import { useSection } from "@/lib/i18n";
import { SIZE_IMAGES } from "@/lib/imageAssets";
import MediaImage from "@/components/shared/MediaImage";

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
      label: sizeStrings?.label || v?.label || `${size} Container`,
      description: sizeStrings?.description || v?.description || T.genericDesc,
      image: known?.image || FALLBACK_IMAGE,
      path: known?.path || `/shop?size=${encodeURIComponent(size)}`,
    };
  });

  return (
    <section className="relative overflow-hidden bg-[#46C54B] py-20 text-white lg:py-32">
      <div className="pointer-events-none absolute -right-28 -top-32 h-96 w-96 rounded-full border border-white/20" />
      <div className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full border border-white/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-12 max-w-4xl lg:mb-16"
        >
          <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            {T.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            {T.description}
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {sizes.map((item, i) => (
            <motion.div key={item.size} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="h-full">
              <Link to={item.path} className="group block h-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-2 shadow-[0_24px_60px_rgba(18,62,25,0.14)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_70px_rgba(18,62,25,0.2)]">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-white/95 p-6 sm:p-8">
                  <MediaImage
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-contain drop-shadow-[0_16px_18px_rgba(5,55,15,0.2)] transition-transform duration-700 group-hover:scale-[1.06]"
                    sizes="(max-width: 767px) 100vw, 33vw"
                    quality={85}
                  />
                </div>
                <div className="p-5 pb-6 sm:p-6 sm:pb-7">
                  <h3 className="font-heading text-2xl font-bold tracking-[-0.025em] text-[#123E19] sm:text-3xl">{item.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:min-h-[4.5rem]">{item.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-[#176B20]">
                    {T.watchNow}
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#46C54B] text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </span>
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
