"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/lib/productData";
import { useFeaturedCategories } from "@/hooks/useCategories";
import { useSection } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { resolveCatalogCategoryHref } from "@/lib/catalogLinks";

const CATEGORY_PAGE_PATHS = {
  shipping: "/seecontainer-kaufen",
  openSide: "/open-side-container-kaufen",
  doubleDoor: "/double-door-container-kaufen",
  office: "/buerocontainer-kaufen",
  reefer: "/kuehlcontainer-kaufen",
};

function getCategoryContentKey(category) {
  const value = `${category.slug || ""} ${category.name || ""}`
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (/open[ -]?side|offene[rn]? seite|offener-seite/.test(value)) return "openSide";
  if (/double[ -]?door|doppeltur|tunnel/.test(value)) return "doubleDoor";
  if (/buro|office/.test(value)) return "office";
  if (/kuhl|kuehl|reefer|refrigerated/.test(value)) return "reefer";
  if (/seecontainer|shipping container|standardcontainer/.test(value)) return "shipping";
  return null;
}

export default function ContainerTypes() {
  const { categories, loading } = useFeaturedCategories();
  const T = useSection("containerTypes");
  const locale = useLocale();

  if (loading || categories.length === 0) return null;

  const types = categories.map((cat) => {
    const contentKey = getCategoryContentKey(cat);
    const localizedContent = contentKey ? T.types?.[contentKey] : null;

    return {
      type: cat.slug,
      label: localizedContent?.label || cat.name,
      desc: localizedContent?.description || cat.description || T.description,
      image: cat.image_url || HERO_IMAGE,
      path: CATEGORY_PAGE_PATHS[contentKey] || resolveCatalogCategoryHref(cat, locale),
    };
  });

  return (
    <section className="relative overflow-hidden bg-[#DDF4DF] py-20 text-[#0D2A12] lg:py-32">
      <div className="pointer-events-none absolute -left-32 -top-36 h-[28rem] w-[28rem] rounded-full border border-[#176B20]/15" />
      <div className="pointer-events-none absolute -left-10 -top-16 h-64 w-64 rounded-full border border-[#176B20]/15" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-4xl lg:mb-16"
        >
          <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#123E19] sm:text-5xl lg:text-7xl">
            {T.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {T.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {types.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <Link
                to={item.path}
                className="group block h-full overflow-hidden rounded-[2rem] border border-white bg-white/90 p-2 shadow-[0_24px_60px_rgba(18,62,25,0.12)] transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-[0_30px_70px_rgba(18,62,25,0.18)]"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-white/95">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 p-5 pb-6 sm:p-6 sm:pb-7">
                  <div className="min-w-0">
                    <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-[#123E19] sm:text-3xl">{item.label}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#46C54B] text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
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
