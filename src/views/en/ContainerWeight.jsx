"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, SeoTable, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const BRAND_BLUE = "#1E5FAE";

const WEIGHT_TABLE = [
  ["10 ft Standard", "approx. 1,200–1,500 kg", "approx. 8,500–10,000 kg", "approx. 10,160 kg"],
  ["20 ft Standard", "approx. 2,200–2,400 kg", "approx. 21,700–22,000 kg", "approx. 24,000 kg"],
  ["20 ft High Cube", "approx. 2,300–2,500 kg", "approx. 21,500–21,800 kg", "approx. 24,000 kg"],
  ["40 ft Standard", "approx. 3,700–4,000 kg", "approx. 26,700–27,000 kg", "approx. 30,480 kg"],
  ["40 ft High Cube", "approx. 3,900–4,200 kg", "approx. 26,300–26,600 kg", "approx. 30,480 kg"],
  ["20 ft Reefer", "approx. 2,800–3,200 kg", "approx. 21,000–21,500 kg", "approx. 24,000 kg"],
  ["40 ft Reefer", "approx. 4,500–5,000 kg", "approx. 25,500–26,000 kg", "approx. 30,480 kg"],
];

const FAQS = [
  { q: "How heavy is a shipping container?", a: "A standard 20-foot container weighs approx. 2,200–2,400 kg (tare weight). A 40-foot container weighs approx. 3,700–4,000 kg. The exact weight is stated on the CSC plate of each container." },
  { q: "What is tare weight?", a: "Tare weight (also called empty weight) is the weight of the container without any load. This is the figure relevant for foundation planning and transport permits." },
  { q: "What is the maximum payload?", a: "The maximum payload (maximum cargo weight) depends on the container type and size. A 20-foot standard container typically has a maximum payload of approx. 21,700–22,000 kg." },
  { q: "Where can I find the exact weight of my container?", a: "The exact tare weight and maximum gross weight (MGW) are stated on the CSC plate mounted on each container. This is usually found on the door frame." },
  { q: "What load can my foundation bear?", a: "The weight of a 20-foot container (approx. 2,300 kg empty, up to 24,000 kg loaded) must be supported by the foundation. Always consult a structural engineer for permanent installations." },
];

const LINKS = [
  { href: "/en/container-masse", title: "Container dimensions", desc: "All sizes and measurements" },
  { href: "/en/container-kosten", title: "Container costs", desc: "Prices and cost factors" },
  { href: "/en/container-fundament", title: "Container foundation", desc: "Foundation types and planning" },
  { href: "/en/container-lieferung", title: "Container delivery", desc: "Transport and placement" },
  { href: "/en/shop", title: "Container shop", desc: "Browse all available containers" },
];

export default function ContainerWeight() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: BRAND_BLUE }}>Guide</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Container Weight – Tare Weight & Payload for All Types
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            How heavy is a shipping container? Tare weight, maximum payload and gross weight for all container types – essential for transport planning, foundation design and structural calculations.
          </p>
          <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white" style={{ backgroundColor: BRAND_BLUE }}>
            Request a container quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SeoSection title="Container weight overview">
          <p className="mb-4">Weights vary by type, size and equipment. All figures are indicative; the exact tare weight is stated on the CSC plate of each individual container.</p>
          <SeoTable
            headers={["Type", "Tare weight (empty)", "Max. payload", "Max. gross weight"]}
            rows={WEIGHT_TABLE}
          />
        </SeoSection>

        <SeoSection title="Why does weight matter?">
          <p><strong className="text-foreground">Foundation planning:</strong> The total weight of a loaded container determines the load-bearing requirements of the foundation or ground surface.</p>
          <p><strong className="text-foreground">Transport planning:</strong> Tare weight and payload affect road transport permits, axle loads and required vehicle type.</p>
          <p><strong className="text-foreground">Structural calculations:</strong> For permanent installations (residential or office containers), a structural engineer needs the exact weight figures for approval applications.</p>
        </SeoSection>

        <SeoSection title="Where to find the exact weight">
          <p>The exact tare weight and maximum gross weight (MGW) are stated on the <strong className="text-foreground">CSC plate</strong> attached to every container – usually on the door frame. The CSC plate also shows the manufacture date and next inspection date.</p>
        </SeoSection>

        <CtaBanner text="Need a container with weight specifications in your quote?" btnLabel="Request a free quote" btnHref="/en/angebot" />

        <SeoSection title="Frequently asked questions">
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
