"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import ContactBanner from "@/components/shared/ContactBanner";
import HeroFloatingMedia from "@/components/shared/HeroFloatingMedia";
export { default as ContainerDiagram } from "./ContainerDiagram";

const BRAND_BLUE = "#46C54B";

export function SeoPageLayout({ breadcrumb, label, title, intro, heroMedia, heroMediaAlt, children, embedded = false }) {
  return (
    <div className={embedded ? "" : "dc-page"}>
      <div className={embedded ? "" : "dc-reading-shell"}>
        {/* Breadcrumb */}
        {!embedded && breadcrumb && (
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

        {!embedded && <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="dc-page-hero">
          <HeroFloatingMedia src={heroMedia} alt={heroMediaAlt} />
          <div className="relative z-10">
            {label && (
              <span className="dc-kicker">
                {label}
              </span>
            )}
            <h1 className="dc-page-title">{title}</h1>
            {intro && (
              <p className="dc-page-intro">{intro}</p>
            )}
          </div>
        </motion.div>}

        <div className="dc-reading">{children}</div>

        <ContactBanner />
      </div>
    </div>
  );
}

export function SeoSection({ title, children }) {
  return (
    <section className="mb-12 border-b border-border pb-12 last:border-0">
      <h2 className="mb-5 font-heading text-2xl font-bold leading-tight tracking-[-0.025em] text-foreground lg:text-3xl">{title}</h2>
      <div className="space-y-4 text-base leading-8 text-muted-foreground">{children}</div>
    </section>
  );
}

export function SeoTable({ headers, rows }) {
  return (
    <div className="mb-8 overflow-x-auto rounded-[1.25rem] border border-border bg-white shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#46C54B] bg-[#46C54B]">
            {headers.map((h, i) => (
              <th key={i} className="px-5 py-4 text-left font-heading text-xs font-semibold uppercase tracking-wide text-white">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/30"}>
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-4 text-muted-foreground">{cell}</td>
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
          className="group flex items-center justify-between gap-3 rounded-[1.25rem] border border-border bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#46C54B] hover:shadow-md"
        >
          <div>
            <p className="font-heading text-base font-semibold text-foreground transition-colors group-hover:text-[#176B20]">{link.title}</p>
            {link.desc && <p className="mt-1 text-sm leading-6 text-muted-foreground">{link.desc}</p>}
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-[#176B20] transition-transform group-hover:translate-x-1" />
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
        <div key={i} className="overflow-hidden rounded-[1.25rem] border border-border bg-white shadow-sm">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-heading text-base font-semibold text-foreground">{item.q}</span>
            <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-90" : ""}`} />
          </button>
          {open === i && (
            <div className="border-t border-border px-6 pb-5 pt-4 text-base leading-7 text-muted-foreground">
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
    <div className="my-10 flex flex-col items-start justify-between gap-5 overflow-hidden rounded-[1.75rem] bg-[#DDF4DF] p-7 sm:flex-row sm:items-center sm:p-9">
      <p className="max-w-2xl font-heading text-xl font-bold leading-tight text-[#123E19] sm:text-2xl">{text}</p>
      <Link
        to={btnHref || "/angebot"}
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#46C54B] px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-[#3CAF41]"
      >
        {btnLabel || "Angebot anfordern"}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
