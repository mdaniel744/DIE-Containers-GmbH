"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import ContactBanner from "@/components/shared/ContactBanner";
export { default as ContainerDiagram } from "./ContainerDiagram";

const ORANGE = "#F28C28";

export function SeoPageLayout({ breadcrumb, label, title, intro, children }) {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumb && (
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6 flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">Startseite</Link>
            {breadcrumb.map((crumb, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="w-3 h-3" />
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-foreground transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-foreground font-medium">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {label && (
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>
              {label}
            </span>
          )}
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">{title}</h1>
          {intro && (
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-2xl">{intro}</p>
          )}
        </motion.div>

        {children}

        <ContactBanner />
      </div>
    </div>
  );
}

export function SeoSection({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="font-heading font-bold text-xl lg:text-2xl tracking-tight mb-4 text-foreground">{title}</h2>
      <div className="text-muted-foreground text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export function SeoTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border mb-6">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted border-b border-border">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3 text-left font-heading font-semibold text-foreground text-xs uppercase tracking-wide">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InternalLinkGrid({ links }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
      {links.map((link, i) => (
        <Link
          key={i}
          to={link.href}
          className="flex items-center justify-between gap-3 p-4 bg-card border border-border rounded-xl hover:border-orange-300 hover:shadow-sm transition-all group"
        >
          <div>
            <p className="font-heading font-semibold text-sm text-foreground group-hover:text-orange-600 transition-colors">{link.title}</p>
            {link.desc && <p className="text-xs text-muted-foreground mt-0.5">{link.desc}</p>}
          </div>
          <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 shrink-0 transition-colors" />
        </Link>
      ))}
    </div>
  );
}

export function FaqAccordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-2 mb-8">
      {items.map((item, i) => (
        <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="font-heading font-semibold text-sm text-foreground">{item.q}</span>
            <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-90" : ""}`} />
          </button>
          {open === i && (
            <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function CtaBanner({ text, btnLabel, btnHref }) {
  return (
    <div className="rounded-2xl p-6 sm:p-8 my-8 flex flex-col sm:flex-row items-center gap-4 justify-between" style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }}>
      <p className="font-heading font-bold text-white text-lg sm:text-xl">{text}</p>
      <Link
        to={btnHref || "/angebot"}
        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
        style={{ backgroundColor: ORANGE }}
      >
        {btnLabel || "Angebot anfordern"}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}