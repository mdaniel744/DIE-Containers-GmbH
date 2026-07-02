"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, SeoTable, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";

const PRICE_TABLE = [
  ["10 ft Standard", "from €990", "from €1,890", "from €2,490"],
  ["20 ft Standard", "from €1,490", "from €2,490", "from €3,490"],
  ["20 ft High Cube", "from €1,690", "from €2,790", "from €3,790"],
  ["40 ft Standard", "from €2,490", "from €3,490", "from €4,990"],
  ["40 ft High Cube", "from €2,790", "from €3,990", "from €5,490"],
  ["20 ft Reefer", "from €2,990", "from €4,990", "on request"],
  ["Office container", "on request", "from €5,900", "from €7,500"],
];

const FAQS = [
  { q: "How much does a shipping container cost?", a: "A used 20-foot standard container costs from approx. €1,490, a new one from approx. €2,490. Prices vary depending on size, condition and current market availability." },
  { q: "What is the difference between new and used containers?", a: "New ('One Trip') containers are in near-perfect condition and have usually made only one journey. Used containers are cargo-worthy inspected and significantly cheaper. For most storage applications, used containers offer excellent value." },
  { q: "Are transport costs included in the price?", a: "No. Container prices are ex-depot (excluding delivery). Transport costs depend on distance and container size and start from approx. €250 for local deliveries." },
  { q: "What influences the final price?", a: "The main factors are container size, condition (new/used/refurbished), container type (standard, High Cube, reefer), regional availability and current market conditions. Request a free quote for your exact price." },
  { q: "Can I negotiate the price?", a: "For larger orders or multiple containers, a discount is often possible. Contact us directly and we'll put together an individual offer." },
];

const LINKS = [
  { href: "/en/shop", title: "Container shop", desc: "See current availability and prices" },
  { href: "/en/container-lieferung", title: "Container delivery", desc: "Transport costs and delivery process" },
  { href: "/en/container-masse", title: "Container dimensions", desc: "All sizes and measurements" },
  { href: "/en/container-fundament", title: "Container foundation", desc: "Setup costs and foundation options" },
  { href: "/en/angebot", title: "Request a quote", desc: "Free, no-obligation quote including delivery" },
];

export default function ContainerCosts() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Market price overview</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Container Prices by Size & Condition
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            Compare current shipping container purchase prices from stock in Germany. All prices are net, excluding transport.
          </p>
          <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a]" style={{ backgroundColor: ORANGE }}>
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SeoSection title="Container price overview">
          <SeoTable
            headers={["Container type", "Used (cargo-worthy)", "New (One Trip)", "Refurbished"]}
            rows={PRICE_TABLE}
          />
          <p className="text-xs text-muted-foreground mt-2">All prices are net, ex depot, excluding delivery. Prices may vary depending on availability and market conditions.</p>
        </SeoSection>

        <SeoSection title="What influences the price?">
          <p><strong className="text-foreground">Container size</strong> — 10 ft, 20 ft and 40 ft differ significantly in price. High Cube variants cost slightly more due to their greater height.</p>
          <p><strong className="text-foreground">Condition (new / used)</strong> — One Trip containers (virtually new) cost more but offer maximum service life. Used (cargo-worthy) containers are significantly cheaper and ideal for storage, construction sites and commercial use.</p>
          <p><strong className="text-foreground">Container type</strong> — Standard containers are the most affordable. Reefers, office containers and special types cost more due to their additional features.</p>
          <p><strong className="text-foreground">Location & availability</strong> — Container availability varies regionally and with global trade flows. Depot location affects both availability and transport costs.</p>
          <p><strong className="text-foreground">Transport costs</strong> — Delivery starts from approx. €250 and depends on distance and container size. We provide the exact cost in your individual quote.</p>
        </SeoSection>

        <CtaBanner text="Get your individual container price including delivery" btnLabel="Request a free quote" btnHref="/en/angebot" />

        <SeoSection title="Frequently asked questions about container prices">
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
