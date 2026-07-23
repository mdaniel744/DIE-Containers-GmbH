"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { HERO_IMAGE } from "@/lib/productData";
import { useT } from "@/lib/i18n";
import { useLocale } from "@/hooks/useLocale";
import { isLocalizablePath, stripLocalePrefix } from "@/lib/locale";
import { isCatalogPath, resolveCatalogCategoryHref } from "@/lib/catalogLinks";

const simpleNavItems = [
  { label: "Home", path: "/" },
  { label: "Über uns", path: "/ueber-uns" },
  { label: "Kontakt", path: "/kontakt" },
];

const SERVICE_ITEMS = [
  { label: "Container Lieferung", path: "/container-lieferung", desc: "Lieferoptionen & Logistik" },
  { label: "Container Maße", path: "/container-masse", desc: "Alle Abmessungen & Gewichte" },
  { label: "FAQ", path: "/faq", desc: "Häufig gestellte Fragen" },
];

const FALLBACK_CATALOG_CATEGORIES = [
  { slug: "seecontainer", nameDe: "Seecontainer", nameEn: "Shipping containers", image_url: "/images/quote-category-seecontainer.png?v=20260723" },
  { slug: "10ft", nameDe: "10 Fuß Container", nameEn: "10ft containers", image_url: "/images/container-category-10ft.png" },
  { slug: "20ft", nameDe: "20 Fuß Container", nameEn: "20ft containers", image_url: "/images/container-category-20ft.png" },
  { slug: "40ft", nameDe: "40 Fuß Container", nameEn: "40ft containers", image_url: "/images/container-category-40ft.png" },
  { slug: "open-side", nameDe: "Container mit offener Seite", nameEn: "Open side containers", image_url: "/images/open-side-20hc-ral7016-open-3.jpg" },
  { slug: "double-door", nameDe: "Doppeltüren Container", nameEn: "Double door containers", image_url: "/images/double-door-40hc-ral5010-open.jpg" },
  { slug: "lagercontainer", nameDe: "Lagercontainer", nameEn: "Storage containers", image_url: "/images/container-category-20ft.png" },
  { slug: "buerocontainer", nameDe: "Bürocontainer", nameEn: "Office containers", image_url: "/images/quote-category-buerocontainer.png" },
  { slug: "kuehlcontainer", nameDe: "Kühlcontainer", nameEn: "Refrigerated containers", image_url: "/images/quote-category-kuehlcontainer.png" },
  { slug: "wohncontainer", nameDe: "Wohncontainer", nameEn: "Living containers", image_url: "/images/quote-category-wohncontainer.png" },
];

function getFallbackCatalogCategories(locale) {
  return FALLBACK_CATALOG_CATEGORIES.map(({ nameDe, nameEn, ...category }) => ({
    ...category,
    name: locale === "de" ? nameDe : nameEn,
  }));
}

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
function CatalogDropdown({ visible, categories, locale, onClose }) {
  const t = useT();
  if (categories.length === 0) return null;

  return (
    <AnimatePresence>
      {visible && (
        <div id="desktop-catalog-menu" className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px] z-50">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background shadow-2xl"
          style={{ pointerEvents: "auto" }}
        >
          {/* Header bar */}
          <div className="px-5 py-3 border-b border-border bg-muted/50 flex items-center justify-between">
            <span className="font-heading font-bold text-sm text-foreground">{t("nav.catalog")}</span>
            <Link
              to={locale === "de" ? "/shop" : "/en/shop"}
              onClick={onClose}
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
                onClick={onClose}
                className="group flex flex-col rounded-xl border border-border bg-card hover:border-[#1E5FAE]/70 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Image area */}
                <div className="relative bg-[#F2F7FC] flex items-center justify-center p-3 h-28 overflow-hidden">
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
              to="/angebot"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-heading font-semibold text-sm text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#1E5FAE" }}
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
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const catalogMenuRef = useRef(null);
  const serviceMenuRef = useRef(null);
  const location = useLocation();
  const { itemCount } = useCart();
  const t = useT();
  const locale = useLocale();
  const catalogCategories = getFallbackCatalogCategories(locale);

  // Build the alternate-locale URL for the switcher.
  // If the current page has no English equivalent, fall back to /en homepage.
  const alternatePath = (() => {
    const raw = location.pathname;
    if (locale === "de") {
      // If an EN version of this page exists, link to it.
      // Otherwise stay on the same German page — never bounce to homepage.
      return isLocalizablePath(raw) ? `/en${raw === "/" ? "" : raw}` : raw;
    }
    // English â†’ German: strip /en prefix
    const stripped = stripLocalePrefix(raw);
    return stripped || "/";
  })();

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileKatalogOpen(false);
    setMobileServiceOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
    setMobileKatalogOpen(false);
    setMobileServiceOpen(false);
    catalog.setOpen(false);
    service.setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const closeDesktopMenus = (event) => {
      if (event.key === "Escape") {
        catalog.setOpen(false);
        service.setOpen(false);
        return;
      }

      if (event.type === "pointerdown") {
        if (!catalogMenuRef.current?.contains(event.target)) catalog.setOpen(false);
        if (!serviceMenuRef.current?.contains(event.target)) service.setOpen(false);
      }
    };

    document.addEventListener("keydown", closeDesktopMenus);
    document.addEventListener("pointerdown", closeDesktopMenus);
    return () => {
      document.removeEventListener("keydown", closeDesktopMenus);
      document.removeEventListener("pointerdown", closeDesktopMenus);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => mobileMenuRef.current?.focus());

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setMobileKatalogOpen(false);
        setMobileServiceOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setMobileKatalogOpen(false);
        setMobileServiceOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center" aria-label="DIE Container GmbH – Startseite">
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
              ref={catalogMenuRef}
              className="relative"
              onMouseEnter={() => {
                service.setOpen(false);
                catalog.onEnter();
              }}
              onMouseLeave={catalog.onLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) catalog.setOpen(false);
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={catalog.open}
                aria-controls="desktop-catalog-menu"
                onClick={() => {
                  service.setOpen(false);
                  catalog.setOpen((current) => !current);
                }}
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
              </button>
              <CatalogDropdown
                visible={catalog.open}
                categories={catalogCategories}
                locale={locale}
                onClose={() => catalog.setOpen(false)}
              />
            </div>

            {/* Container Service dropdown */}
            <div
              ref={serviceMenuRef}
              className="relative"
              onMouseEnter={() => {
                catalog.setOpen(false);
                service.onEnter();
              }}
              onMouseLeave={service.onLeave}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) service.setOpen(false);
              }}
            >
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={service.open}
                aria-controls="desktop-service-menu"
                onClick={() => {
                  catalog.setOpen(false);
                  service.setOpen((current) => !current);
                }}
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
                  <div id="desktop-service-menu" className="absolute top-full left-0 pt-2 w-56 z-50">
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
                        onClick={() => service.setOpen(false)}
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

            {/* Über uns & Kontakt */}
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
            <Link to="/warenkorb" className="relative p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Warenkorb">
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              {itemCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] rounded-full text-[11px] font-bold flex items-center justify-center text-white px-1 leading-none"
                  style={{ backgroundColor: "#1E5FAE" }}
                >
                  {itemCount > 99 ? "99+" : itemCount}
                </span>
              )}
            </Link>
            <Link to="/angebot">
              <Button className="font-heading font-semibold text-sm text-white" style={{ backgroundColor: "#1E5FAE" }}>
                {t("nav.cta")}
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-1">
            <Link
              to="/warenkorb"
              className="relative inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-xl hover:bg-muted active:bg-muted transition-colors"
              aria-label="Warenkorb"
            >
              <ShoppingCart className="w-5 h-5 text-foreground/70" />
              {itemCount > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 rounded-full text-[10px] font-bold flex items-center justify-center text-white px-0.5 leading-none"
                  style={{ backgroundColor: "#1E5FAE" }}
                >
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => (isOpen ? closeMobileMenu() : setIsOpen(true))}
              className="inline-flex h-12 w-12 touch-manipulation items-center justify-center rounded-xl border border-transparent hover:bg-muted active:border-border active:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E5FAE] focus-visible:ring-offset-2 transition-colors"
              aria-label={isOpen ? (locale === "de" ? "Menü schließen" : "Close menu") : t("nav.menu")}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 h-full w-full cursor-default bg-slate-950/40 backdrop-blur-[1px]"
              onClick={closeMobileMenu}
              aria-label={locale === "de" ? "Navigation schließen" : "Close navigation"}
            />
            <motion.div
              id="mobile-navigation"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label={locale === "de" ? "Mobile Navigation" : "Mobile navigation"}
              tabIndex={-1}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-y-0 right-0 z-10 w-[calc(100%_-_1.5rem)] max-w-sm overflow-y-auto overscroll-contain border-l border-border bg-background shadow-2xl focus:outline-none"
            >
            <nav className="min-h-full space-y-1 px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
              {simpleNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`flex min-h-12 touch-manipulation items-center rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === item.path ? "bg-secondary/10 text-secondary" : "hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile katalog accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setMobileKatalogOpen((current) => !current);
                    setMobileServiceOpen(false);
                  }}
                  className="flex min-h-12 w-full touch-manipulation items-center justify-between rounded-xl px-4 py-3 text-base font-medium hover:bg-muted active:bg-muted transition-colors"
                  aria-expanded={mobileKatalogOpen}
                  aria-controls="mobile-catalog-links"
                >
                  {t("nav.catalog")}
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileKatalogOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileKatalogOpen && (
                    <motion.div
                      id="mobile-catalog-links"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-2 px-2 py-2">
                        {catalogCategories.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={resolveCatalogCategoryHref(cat, locale)}
                            onClick={closeMobileMenu}
                            className="flex min-h-28 touch-manipulation flex-col items-center overflow-hidden rounded-xl border border-border bg-card p-2 text-center transition-colors hover:border-[#1E5FAE]/70 active:bg-muted"
                          >
                            <div className="w-full h-16 bg-[#F2F7FC] rounded-lg mb-1.5 flex items-center justify-center p-1">
                              <img src={cat.image_url || HERO_IMAGE} alt={cat.name} className="w-full h-full object-contain" />
                            </div>
                            <p className="font-heading text-xs font-semibold leading-tight text-foreground">{cat.name}</p>
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
                  type="button"
                  onClick={() => {
                    setMobileServiceOpen((current) => !current);
                    setMobileKatalogOpen(false);
                  }}
                  className="flex min-h-12 w-full touch-manipulation items-center justify-between rounded-xl px-4 py-3 text-base font-medium hover:bg-muted active:bg-muted transition-colors"
                  aria-expanded={mobileServiceOpen}
                  aria-controls="mobile-service-links"
                >
                  {t("nav.service")}
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileServiceOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServiceOpen && (
                    <motion.div
                      id="mobile-service-links"
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
                            onClick={closeMobileMenu}
                            className="flex min-h-12 touch-manipulation items-center rounded-xl px-4 py-2.5 font-heading text-sm font-semibold text-foreground transition-colors hover:bg-muted active:bg-muted"
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
                <Link to="/angebot" className="block touch-manipulation" onClick={closeMobileMenu}>
                  <Button className="w-full font-heading font-semibold text-white" style={{ backgroundColor: "#1E5FAE" }}>
                    {t("nav.cta")}
                  </Button>
                </Link>
              </div>
            </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


