"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, SeoTable, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const BRAND_BLUE = "#1E5FAE";
const NAVY = "#1B3A5C";

const SIZE_OVERVIEW = [
  ["10 ft", "2.99 m", "2.44 m", "2.59 m", "approx. 16 m³", "approx. 1,350 kg"],
  ["10 ft HC", "2.99 m", "2.44 m", "2.90 m", "approx. 17 m³", "approx. 1,450 kg"],
  ["20 ft", "6.06 m", "2.44 m", "2.59 m", "approx. 33 m³", "approx. 2,300 kg"],
  ["20 ft HC", "6.06 m", "2.44 m", "2.90 m", "approx. 37 m³", "approx. 2,400 kg"],
  ["40 ft", "12.19 m", "2.44 m", "2.59 m", "approx. 67 m³", "approx. 3,850 kg"],
  ["40 ft HC", "12.19 m", "2.44 m", "2.90 m", "approx. 76 m³", "approx. 4,050 kg"],
];

const SPECS = {
  "10 ft Standard": [
    ["External length", "approx. 2.99 m"], ["External width", "approx. 2.44 m"], ["External height", "approx. 2.59 m"],
    ["Internal length", "approx. 2.83 m"], ["Internal width", "approx. 2.35 m"], ["Internal height", "approx. 2.39 m"],
    ["Volume", "approx. 15–16 m³"], ["Tare weight", "approx. 1,200–1,500 kg"],
  ],
  "20 ft Standard": [
    ["External length", "approx. 6.06 m"], ["External width", "approx. 2.44 m"], ["External height", "approx. 2.59 m"],
    ["Internal length", "approx. 5.90 m"], ["Internal width", "approx. 2.35 m"], ["Internal height", "approx. 2.39 m"],
    ["Volume", "approx. 33 m³"], ["Tare weight", "approx. 2,200–2,400 kg"],
    ["Door opening width", "approx. 2.34 m"], ["Door opening height", "approx. 2.28 m"],
  ],
  "40 ft Standard": [
    ["External length", "approx. 12.19 m"], ["External width", "approx. 2.44 m"], ["External height", "approx. 2.59 m"],
    ["Internal length", "approx. 12.03 m"], ["Internal width", "approx. 2.35 m"], ["Internal height", "approx. 2.39 m"],
    ["Volume", "approx. 67 m³"], ["Tare weight", "approx. 3,700–4,000 kg"],
    ["Door opening width", "approx. 2.34 m"], ["Door opening height", "approx. 2.28 m"],
  ],
  "40 ft High Cube": [
    ["External length", "approx. 12.19 m"], ["External width", "approx. 2.44 m"], ["External height", "approx. 2.90 m"],
    ["Internal length", "approx. 12.03 m"], ["Internal width", "approx. 2.35 m"], ["Internal height", "approx. 2.69 m"],
    ["Volume", "approx. 76 m³"], ["Tare weight", "approx. 3,900–4,200 kg"],
    ["Door opening height", "approx. 2.58 m"],
  ],
};

const FAQS = [
  { q: "What are the dimensions of a 20-foot container?", a: "A 20-foot container typically has external dimensions of approx. 6.06 m length, 2.44 m width and 2.59 m height. Internal dimensions are approx. 5.90 m length, 2.35 m width and 2.39 m height." },
  { q: "What are the dimensions of a 40-foot container?", a: "A 40-foot container typically has external dimensions of approx. 12.19 m length, 2.44 m width and 2.59 m height. Internal dimensions are approx. 12.03 m length, 2.35 m width and 2.39 m height." },
  { q: "What are High Cube container dimensions?", a: "A 40-foot High Cube container has approximately the same length and width as a standard 40-foot container but is taller. External height is approx. 2.90 m, internal height approx. 2.69 m." },
  { q: "Which container size is most popular?", a: "The 20-foot container is one of the most popular sizes because it is versatile and offers a good balance between storage space and footprint." },
  { q: "Which dimensions matter for delivery?", a: "For delivery, the most important factors are external length, external width, external height, total weight, access road width and manoeuvring space. For 40-foot containers in particular, unloading should be planned carefully in advance." },
  { q: "Which dimensions matter for storage?", a: "For storage, the key figures are internal length, internal width, internal height, door opening dimensions and volume. These values show how much usable space is actually available." },
];

const LINKS = [
  { href: "/en/shop", title: "Container shop", desc: "Browse all available containers" },
  { href: "/en/kategorien/10ft", title: "Buy 10-foot containers", desc: "Compact containers for small spaces" },
  { href: "/en/kategorien/20ft", title: "Buy 20-foot containers", desc: "The classic all-rounder" },
  { href: "/en/kategorien/40ft", title: "Buy 40-foot containers", desc: "Maximum storage space" },
  { href: "/en/container-gewicht", title: "Container weight", desc: "Tare weight and payload capacity" },
  { href: "/en/container-kosten", title: "Container costs", desc: "Prices and cost factors" },
  { href: "/en/container-lieferung", title: "Container delivery", desc: "Transport and placement" },
];

function SpecTable({ title, rows }) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden mb-8">
      <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
        <h3 className="font-heading font-bold text-sm text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                <td className="px-4 py-2.5 font-heading font-semibold text-foreground text-xs">{row[0]}</td>
                <td className="px-4 py-2.5 text-muted-foreground text-right">{row[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ContainerDimensions() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: BRAND_BLUE }}>Guide 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl tracking-tight mb-4 max-w-3xl">
            Container Dimensions – All Sizes at a Glance
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            Compare 10 ft, 20 ft, 40 ft and High Cube container external dimensions, internal dimensions, volume, weight and door openings in one overview.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white" style={{ backgroundColor: BRAND_BLUE }}>
              Request a free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/en/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-foreground border border-border hover:bg-muted transition-colors">
              Container shop
            </Link>
          </div>
        </div>

        <SeoSection title="Choosing the right container dimensions">
          <p>Anyone looking to buy a container should know the right dimensions. The size determines not only how much internal space is available but also whether the container can be installed, transported and used effectively at the desired location. The most commonly requested sizes are 10 ft, 20 ft and 40 ft containers. High Cube containers offer additional internal volume thanks to their greater height.</p>
          <p>The key figures are external dimensions, internal dimensions, door opening, tare weight and cargo volume. External dimensions are decisive for transport and placement. Internal dimensions show how much usable space is actually available. Door opening and internal height are particularly important when bulky goods, machinery, pallets or shelving systems need to be stored.</p>
        </SeoSection>

        <SeoSection title="Container dimensions at a glance">
          <p className="mb-4">The following table shows the key external dimensions, volume and tare weight of all common container sizes for direct comparison.</p>
          <SeoTable
            headers={["Size", "Ext. length", "Ext. width", "Ext. height", "Volume", "Tare weight"]}
            rows={SIZE_OVERVIEW}
          />
        </SeoSection>

        <SeoSection title="Why container dimensions matter">
          <p>The right dimensions help avoid costly mistakes. A container may look large on paper, but depending on the use, internal height, door width or footprint can be decisive. For tools, furniture or smaller goods, a 20-foot container is usually sufficient. For larger quantities of goods, machinery or commercial storage space, a 40-foot container is often better suited.</p>
          <p>Access to the site also plays an important role. A 40-foot container requires significantly more space for delivery, manoeuvring and placement than a smaller model. Anyone with limited space should check carefully whether the container can be positioned without difficulty.</p>
        </SeoSection>

        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl tracking-tight mb-6">Detailed specifications by container type</h2>
          {Object.entries(SPECS).map(([title, rows]) => (
            <SpecTable key={title} title={title} rows={rows} />
          ))}
        </section>

        <SeoSection title="External vs internal dimensions — which matters more?">
          <p><strong className="text-foreground">External dimensions</strong> determine whether the container fits on the site, whether it can be delivered and how much space it occupies overall.</p>
          <p><strong className="text-foreground">Internal dimensions</strong> determine the actual usable storage space. For storage use, always base your planning on internal dimensions, not external ones.</p>
        </SeoSection>

        <SeoSection title="Which container size suits which application?">
          <p><strong className="text-foreground">10 ft container</strong> — For small storage needs: tools, garden equipment, spare parts. Ideal where space is limited.</p>
          <p><strong className="text-foreground">20 ft container</strong> — The most versatile all-rounder. Ideal for storage, workshops, commercial use and transport.</p>
          <p><strong className="text-foreground">40 ft container</strong> — Maximum space for large projects, industrial storage and residential or office conversions.</p>
          <p><strong className="text-foreground">High Cube containers</strong> — 30 cm taller than standard. Ideal for bulky goods, tall shelving systems and conversions requiring extra headroom.</p>
        </SeoSection>

        <CtaBanner text="Need help choosing the right container size?" btnLabel="Request a free quote" btnHref="/en/angebot" />

        <SeoSection title="Frequently asked questions about container dimensions">
          <FaqAccordion items={FAQS} />
        </SeoSection>

        <SeoSection title="Further reading">
          <InternalLinkGrid links={LINKS} />
        </SeoSection>

        <ContactBanner />
      </div>
    </div>
  );
}
