"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";

const CONTAINER_TYPES = [
  { label: "Shipping container", desc: "Robust ISO containers from Corten steel – windproof and waterproof, available in 10 ft, 20 ft and 40 ft.", href: "/en/shop", cta: "View shipping containers" },
  { label: "40-foot container", desc: "Maximum storage space for large projects, industrial storage and commercial use.", href: "/en/kategorien/40ft", cta: "View 40 ft containers" },
  { label: "Office container", desc: "Ready-to-use mobile office with insulation, electrics and windows – immediately available.", href: "/en/kategorien/buerocontainer", cta: "View office containers" },
  { label: "Refrigerated container", desc: "Integrated cooling unit for temperature-controlled storage from -25 °C to +25 °C.", href: "/en/kategorien/kuehlcontainer", cta: "View refrigerated containers" },
];

const STEPS = [
  { n: 1, title: "Choose your container", desc: "Select the right size and type in our container shop or use the container advisor." },
  { n: 2, title: "Request a free quote", desc: "Submit your enquiry online, by phone or email. We respond within 24 hours." },
  { n: 3, title: "Confirm the order", desc: "After accepting the binding quote, the delivery date is scheduled." },
  { n: 4, title: "Delivery to your site", desc: "We deliver throughout Germany with our own crane vehicle within 72 hours of order confirmation." },
];

const FAQS = [
  { q: "How do I buy a shipping container?", a: "Browse our container shop, select your container and request a free no-obligation quote. After accepting the quote, we schedule delivery." },
  { q: "Can I buy a used container?", a: "Yes. We offer a large selection of inspected used (cargo-worthy) containers. All used containers are checked for water and wind tightness before sale." },
  { q: "How long does delivery take?", a: "Typically 3–7 working days after order confirmation. Express delivery within 48 hours is possible for stock in your area." },
  { q: "Do you deliver throughout Germany?", a: "Yes. We deliver to all regions of Germany with our own crane vehicles. Transport costs depend on distance and start from approx. €250." },
  { q: "What sizes are available?", a: "We stock 10 ft, 20 ft and 40 ft containers in standard and High Cube variants, as well as refrigerated containers, office containers and special types." },
];

const LINKS = [
  { href: "/en/shop", title: "Container shop", desc: "Browse all available containers" },
  { href: "/en/kategorien/20ft", title: "20-foot container", desc: "The most popular size" },
  { href: "/en/kategorien/40ft", title: "40-foot container", desc: "Maximum storage space" },
  { href: "/en/container-masse", title: "Container dimensions", desc: "All sizes at a glance" },
  { href: "/en/container-kosten", title: "Container costs", desc: "Prices and cost factors" },
  { href: "/en/container-lieferung", title: "Container delivery", desc: "How delivery works" },
];

export default function BuyShippingContainers() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Overview 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Buy Shipping Containers – New and Used for Every Purpose
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            Buy shipping containers in Germany — new and used containers for storage, transport, office, residential and refrigeration use. Wide selection, fair prices and delivery direct to your location.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a]" style={{ backgroundColor: ORANGE }}>
              Request a free quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/en/shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-foreground border border-border hover:bg-muted transition-colors">
              Container shop
            </Link>
          </div>
        </div>

        <SeoSection title="Which containers can I buy?">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {CONTAINER_TYPES.map((c, i) => (
              <div key={i} className="p-5 bg-card border border-border rounded-xl">
                <p className="font-heading font-semibold text-base mb-2">{c.label}</p>
                <p className="text-sm text-muted-foreground mb-4">{c.desc}</p>
                <Link to={c.href} className="inline-flex items-center gap-1.5 text-sm font-medium hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>
                  {c.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </SeoSection>

        <SeoSection title="How to buy a container — step by step">
          <div className="space-y-3 mt-2">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-7 h-7 shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-xs">{s.n}</div>
                <div>
                  <p className="font-heading font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SeoSection>

        <CtaBanner text="Buy a container with delivery throughout Germany" btnLabel="Request a free quote" btnHref="/en/angebot" />

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
