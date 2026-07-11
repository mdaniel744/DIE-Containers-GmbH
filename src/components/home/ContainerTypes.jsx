"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { HERO_IMAGE } from "@/lib/productData";
import { useFeaturedCategories } from "@/hooks/useCategories";
import { useSection } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { resolveCatalogCategoryHref } from "@/lib/catalogLinks";

export default function ContainerTypes() {
  const { categories, loading } = useFeaturedCategories();
  const T = useSection("containerTypes");
  const locale = useLocale();

  if (loading || categories.length === 0) return null;

  const types = categories.map((cat) => ({
    type: cat.slug,
    label: cat.name,
    desc: cat.description || T.description,
    image: cat.image_url || HERO_IMAGE,
    path: resolveCatalogCategoryHref(cat, locale),
  }));

  return (
    <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label={T.label} title={T.title} description={T.description} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={item.path}
                className="group flex items-center gap-4 bg-card p-4 rounded-xl border border-border hover:shadow-md hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-sm group-hover:text-secondary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-secondary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
