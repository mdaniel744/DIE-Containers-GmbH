"use client";
import React from "react";
import { Link } from "react-router-dom";
import ProductListingSection from "@/components/shop/ProductListingSection";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";

const BRAND_BLUE = "#46C54B";

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
    <div className="dc-page">
      <div className="dc-page-shell">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">{Tpage.breadcrumbHome}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-foreground transition-colors">{Tpage.breadcrumbCatalog}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">{T.title}</span>
        </nav>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="dc-page-hero">
          <div className="flex items-center gap-2 mb-2">
            <span className="dc-kicker">{T.label}</span>
          </div>
          <h1 className="dc-page-title">{T.title}</h1>
          <p className="dc-page-intro">{T.description}</p>
          <div className="mt-5 text-sm text-[#123E19]/75">
            <Link to={T.guidePath} className="font-semibold text-[#123E19] underline decoration-[#123E19]/35 underline-offset-4 hover:text-[#0D2A12]">{T.guideLink}</Link>
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
        <div className="mt-16 border-t border-border pt-10">
          <h2 className="mb-5 font-heading text-2xl font-bold">{Tpage.moreCategories}</h2>
          <div className="flex flex-wrap gap-2">
            {crossLinks.map(({ key, href }) => (
              <Link key={href} to={href} className="rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-[#176B20] transition-colors hover:border-[#46C54B] hover:bg-[#F0F8F1]">
                {Tpage.crossLinks[key]}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
