"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useFeaturedCategories } from "@/hooks/useCategories";
import { HERO_IMAGE } from "@/lib/productData";
import { useT } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { isLocalizablePath, stripLocalePrefix } from "@/lib/locale";
import { isCatalogPath, resolveCatalogCategoryHref } from "@/lib/catalogLinks";
import NextLink from "next/link";

const simpleNavItems = [
  { label: "Home", path: "/" },
  { label: "Ãœber uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

const SERVICE_ITEMS = [
  { label: "Container Lieferung", path: "/container-lieferung", desc: "Lieferoptionen & Logistik" },
  { label: "Container MaÃŸe", path: "/container-masse", desc: "Alle Abmessungen & Gewichte" },
  { label: "FAQ", path: "/faq", desc: "HÃ¤ufig gestellte Fragen" },
];

/* â”€â”€â”€ Reusable hover-dropdown hook â”€â”€â”€ */
function useHoverDropdown(delay = 180) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const onEnter = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const onLeave = () => {
    timerRef.current = setTimeout(() => setOpen(false), delay);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return { open, setOpen, onEnter, onLeave };
}

/* â”€â”€â”€ Mega dropdown component â”€â”€â”€ */
function CatalogDropdown({ visible, categories, locale }) {
  const t = useT();
  if (categories.length === 0) return null;

  return (
    <AnimatePresence>
      {visible && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px] z-50">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
          style={{ pointerEvents: "auto" }}
        >
          {/* Header bar */}
          <div className="px-5 py-3 border-b border-border bg-muted/50 flex items-center justify-between">
            <span className="font-heading font-bold text-sm text-foreground">{t("nav.catalog")}</span>
            <Link
              to="/shop"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.showAll")}
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-3 p-4">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={resolveCatalogCategoryHref(cat, locale)}
                className="group flex flex-col rounded-xl border border-border bg-card hover:border-[#F28C28]/70 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Image area */}
                <div className="relative bg-[#fdf8f0] flex items-center justify-center p-3 h-28 overflow-hidden">
                  <img
                    src={cat.image_url || HERO_IMAGE}
                    alt={cat.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Label */}
                <div className="px-3 py-2.5 border-t border-border/60">
                  <p className="font-heading font-semibold text-xs text-foreground group-hover:text-[#1B3A5C] transition-colors leading-tight">
                    {cat.name}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-4 pb-4">
            <Link
              to="/shop"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#F28C28" }}
            >
              {t("nav.requestQuote")}
            </Link>
          </div>
        </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const catalog = useHoverDropdown();
  const service = useHoverDropdown();
  const [mobileKatalogOpen, setMobileKatalogOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const location = useLocation();
  const { categories } = useFeaturedCategories();
  const t = useT();
  const locale = useLocale();

  // Build the alternate-locale URL for the switcher.
  // If the current page has no English equivalent, fall back to /en homepage.
  const alternatePath = (() => {
    const raw = location.pathname;
    if (locale === "de") {
      // If an EN version of this page exists, link to it.
      // Otherwise stay on the same German page â€” never bounce to homepage.
      return isLocalizablePath(raw) ? `/en${raw === "/" ? "" : raw}` : raw;
    }
    // English â†’ German: strip /en prefix
    const stripped = stripLocalePrefix(raw);
    return stripped || "/";
  })();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center" aria-label="DIE Container GmbH â€“ Startseite">
            <div className="relative h-12 w-28 overflow-hidden sm:w-32 lg:h-14 lg:w-36">
              <img
                src="/images/die-container-logo-blue.png"
                alt="DIE Container GmbH Logo"
                className="absolute left-1/2 top-1/2 h-28 w-28 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-200 group-hover:scale-105 sm:h-32 sm:w-32 lg:h-36 lg:w-36"
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home */}
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                location.pathname === "/"
                  ? "text-secondary font-semibold"
                  : "text-foreground/80 hover:text-foreground hover:bg-muted"
              }`}
            >
              {t("nav.home")}
            </Link>

            {/* Container Katalog with mega dropdown */}
            <div
              className="relative"
              onMouseEnter={catalog.onEnter}
              onMouseLeave={catalog.onLeave}
            >
              <Link
                to="/shop"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isCatalogPath(location.pathname)
                    ? "text-secondary font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {t("nav.catalog")}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${catalog.open ? "rotate-180" : ""}`}
                />
              </Link>
              <CatalogDropdown visible={catalog.open} categories={categories} locale={locale} />
            </div>

            {/* Container Service dropdown */}
            <div
              className="relative"
              onMouseEnter={service.onEnter}
              onMouseLeave={service.onLeave}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  SERVICE_ITEMS.some(i => location.pathname === i.path)
                    ? "text-secondary font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {t("nav.service")}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${service.open ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {service.open && (
                  <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-background border border-border rounded-xl shadow-xl overflow-hidden"
                    style={{ pointerEvents: "auto" }}
                  >
                    {SERVICE_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="px-4 py-3 hover:bg-muted transition-colors border-b border-border/50 last:border-0 font-heading font-semibold text-sm text-foreground block"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Ãœber uns & Kontakt */}
            {[{ label: t("nav.about"), path: "/ueber-uns" }, { label: t("nav.contact"), path: "/kontakt" }].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? "text-secondary font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+491635393159"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0049 163 5393 159</span>
            </a>
            <Link to="/shop">
              <Button className="font-heading font-semibold text-sm text-[#1a1a1a]" style={{ backgroundColor: "#F28C28" }}>
                {t("nav.cta")}
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label={t("nav.menu")}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {simpleNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.path ? "bg-secondary/10 text-secondary" : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile katalog accordion */}
              <div>
                <button
                  onClick={() => setMobileKatalogOpen(!mobileKatalogOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                >
                  {t("nav.catalog")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileKatalogOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileKatalogOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 px-2 py-2">
                        {categories.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={resolveCatalogCategoryHref(cat, locale)}
                            className="flex flex-col items-center p-2 rounded-xl border border-border bg-card text-center overflow-hidden"
                          >
                            <div className="w-full h-16 bg-[#fdf8f0] rounded-lg mb-1.5 flex items-center justify-center p-1">
                              <img src={cat.image_url || HERO_IMAGE} alt={cat.name} className="w-full h-full object-contain" />
                            </div>
                            <p className="font-heading font-semibold text-[11px] text-foreground leading-tight">{cat.name}</p>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Service accordion */}
              <div>
                <button
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                >
                  {t("nav.service")}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServiceOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col gap-1 px-2 py-1">
                        {SERVICE_ITEMS.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="px-4 py-2.5 rounded-lg hover:bg-muted transition-colors font-heading font-semibold text-sm text-foreground block"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-3 border-t border-border mt-3 space-y-2">
                <Link to="/shop" className="block">
                  <Button className="w-full font-heading font-semibold text-[#1a1a1a]" style={{ backgroundColor: "#F28C28" }}>
                    {t("nav.cta")}
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


