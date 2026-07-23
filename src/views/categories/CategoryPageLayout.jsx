"use client";
import React from "react";
import { Link } from "react-router-dom";
import ProductListingSection from "@/components/shop/ProductListingSection";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";

const BRAND_BLUE = "#1E5FAE";

/**
 * Shared layout for all category pages (10ft, 20ft, 40ft, Kühl, Büro, OpenSide).
 *
 * @param {string}   filterKey   - product field to filter on: "size" or "container_type"
 * @param {string|string[]} filterValue - value(s) to match, e.g. "10ft", ["10ft", "10ft HC"] or "Kühlcontainer"
 * @param {string}   i18nSection - key in i18n.js, e.g. "cat10ft"
 * @param {string[]} crossLinks  - array of cross-link i18n keys to show at bottom
 * @param {ReactNode} seoContent - SEO article component rendered below the grid
 */
export default function CategoryPageLayout({ filterKey, filterValue, i18nSection, crossLinks, seoContent }) {
  const T = useSection(i18nSection);
  const Tpage = useSection("categoryPage");

  return (
    <div className="pt-20 lg:pt-24 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">{Tpage.breadcrumbHome}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-foreground transition-colors">{Tpage.breadcrumbCatalog}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">{T.title}</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: BRAND_BLUE }}>{T.label}</span>
          </div>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-3">{T.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{T.description}</p>
          <div className="mt-3 text-sm text-muted-foreground">
            <Link to={T.guidePath} className="text-blue-500 hover:underline">{T.guideLink}</Link>
          </div>
        </motion.div>

        <ProductListingSection
          filterKey={filterKey}
          filterValue={filterValue}
          emptyTitle={T.noContainers}
        />

        {/* SEO article section */}
        {seoContent}

        {/* Cross-links */}
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="font-heading font-semibold text-lg mb-4">{Tpage.moreCategories}</h2>
          <div className="flex flex-wrap gap-2">
            {crossLinks.map(({ key, href }) => (
              <Link key={href} to={href} className="px-4 py-2 bg-card border border-border rounded-lg text-sm hover:border-blue-300 transition-colors">
                {Tpage.crossLinks[key]}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
