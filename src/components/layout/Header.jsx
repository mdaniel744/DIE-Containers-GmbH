"use client";
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Category data for the mega dropdown ─── */
const CATEGORIES = [
  {
    label: "10ft Container",
    path: "/kategorien/10ft",
    desc: "Kompakt & vielseitig",
    img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/d97452f56_Standard_10-Fuss-1024x668.png",
  },
  {
    label: "20ft Container",
    path: "/kategorien/20ft",
    desc: "Meistverkauft",
    badge: "Bestseller",
    img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/87f1ec1e8_Standard_20-Fuss-1024x6681.png",
  },
  {
    label: "40ft Container",
    path: "/kategorien/40ft",
    desc: "Maximales Volumen",
    img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/e840b5a6e_Pallet-Wide-Container-2-1024x668.png",
  },
  {
    label: "Kühlcontainer",
    path: "/kategorien/kuehlcontainer",
    desc: "Reefer mit Kühlaggregat",
    img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/2fca4821f_Kuehlcontainer-2-600x391.png",
  },
  {
    label: "Bürocontainer",
    path: "/kategorien/buerocontainer",
    desc: "Mobiles Büro & Arbeitsraum",
    img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/9cb0b31d1_Hard-Top-Container-2-1024x668.png",
  },
  {
    label: "Open Side Container",
    path: "/kategorien/open-side",
    desc: "Seitenwand vollständig öffenbar",
    img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/21a6ae7d4_Open-Side-Container-2-1024x668.png",
  },
];

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

/* ─── Reusable hover-dropdown hook ─── */
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

/* ─── Mega dropdown component ─── */
function CatalogDropdown({ visible }) {
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
            <span className="font-heading font-bold text-sm text-foreground">Container Kategorien</span>
            <Link
              to="/shop"
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Alle anzeigen →
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-3 gap-3 p-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.path}
                to={cat.path}
                className="group flex flex-col rounded-xl border border-border bg-card hover:border-[#F28C28]/70 hover:shadow-md transition-all overflow-hidden"
              >
                {/* Image area */}
                <div className="relative bg-[#fdf8f0] flex items-center justify-center p-3 h-28 overflow-hidden">
                  {cat.badge && (
                    <span
                      className="absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white z-10"
                      style={{ backgroundColor: "#F28C28" }}
                    >
                      {cat.badge}
                    </span>
                  )}
                  <img
                    src={cat.img}
                    alt={cat.label}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Label */}
                <div className="px-3 py-2.5 border-t border-border/60">
                  <p className="font-heading font-semibold text-xs text-foreground group-hover:text-[#1B3A5C] transition-colors leading-tight">
                    {cat.label}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="px-4 pb-4">
            <Link
              to="/angebot"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#F28C28" }}
            >
              Kostenloses Angebot anfordern →
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

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/1f0c99f16_csav-germany.png"
              alt="CSAV Container Logo"
              className="w-20 h-20 rounded-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg leading-none tracking-tight">CSAV</span>
              <span className="font-heading text-[10px] font-semibold tracking-[0.25em] text-muted-foreground uppercase">Container</span>
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
              Home
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
                  location.pathname.startsWith("/kategorien") || location.pathname === "/shop"
                    ? "text-secondary font-semibold"
                    : "text-foreground/80 hover:text-foreground hover:bg-muted"
                }`}
              >
                Container Katalog
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${catalog.open ? "rotate-180" : ""}`}
                />
              </Link>
              <CatalogDropdown visible={catalog.open} />
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
                Container Service
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

            {/* Über uns & Kontakt */}
            {[{ label: "Über uns", path: "/ueber-uns" }, { label: "Kontakt", path: "/kontakt" }].map((item) => (
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
              href="tel:+491512437142"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+49 151 243 71427</span>
            </a>
            <Link to="/angebot">
              <Button className="font-heading font-semibold text-sm text-[#1a1a1a]" style={{ backgroundColor: "#F28C28" }}>
                Angebot anfordern
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Menü"
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
                  Container Katalog
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
                        {CATEGORIES.map((cat) => (
                          <Link
                            key={cat.path}
                            to={cat.path}
                            className="flex flex-col items-center p-2 rounded-xl border border-border bg-card text-center overflow-hidden"
                          >
                            <div className="w-full h-16 bg-[#fdf8f0] rounded-lg mb-1.5 flex items-center justify-center p-1">
                              <img src={cat.img} alt={cat.label} className="w-full h-full object-contain" />
                            </div>
                            <p className="font-heading font-semibold text-[11px] text-foreground leading-tight">{cat.label}</p>
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
                  Container Service
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

              <div className="pt-3 border-t border-border mt-3">
                <Link to="/angebot" className="block">
                  <Button className="w-full font-heading font-semibold text-[#1a1a1a]" style={{ backgroundColor: "#F28C28" }}>
                    Angebot anfordern
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