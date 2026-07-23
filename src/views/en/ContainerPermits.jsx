"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, SeoTable, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const BRAND_BLUE = "#1E5FAE";

const PERMIT_TABLE = [
  ["Storage container (temp., <3 months)", "Usually permit-free", "§ 55 LBO (varies by state)"],
  ["Storage container (permanent)", "Often permit-required", "§ 63 BauO NRW or equivalent"],
  ["Office container (temp.)", "Usually permit-free", "Subject to local regulations"],
  ["Office container (permanent)", "Building permit required", "§ 63–65 State building code"],
  ["Living container / tiny house", "Building permit required", "§ 2 BauGB, local development plan"],
  ["Construction site container", "Usually permit-free", "§ 55 LBO, temporary use"],
];

const STEPS = [
  { n: 1, title: "Check development plan", desc: "Request the local development plan (Bebauungsplan) from your local authority. This shows what is permitted on your plot." },
  { n: 2, title: "Consult local building authority", desc: "Contact your local building authority and describe your project. They will tell you whether a permit is required and what documents are needed." },
  { n: 3, title: "Prepare application documents", desc: "Typical documents include: site plan, floor plan, elevations, structural calculations, project description." },
  { n: 4, title: "Submit planning application", desc: "Submit the complete application to the building authority. Processing time varies by municipality (typically 4–12 weeks)." },
  { n: 5, title: "Await decision and start work", desc: "Once the permit is granted, you may order and install the container. Keep the permit document on site during construction." },
];

const FAQS = [
  { q: "Do I need planning permission for a shipping container?", a: "This depends on the intended use, duration and your local building regulations. Temporary storage containers (under 3 months) are usually permit-free in most German states. Permanent installations almost always require a building permit." },
  { q: "What counts as 'temporary' for containers?", a: "The threshold varies by state — typically 3 months, sometimes up to 6 months. After this period, planning permission is usually required. Check with your local building authority for the exact rules in your area." },
  { q: "Are construction site containers permit-free?", a: "Yes, in most cases. Construction site containers placed for the duration of a building project are usually classed as temporary and do not require a separate permit." },
  { q: "What happens if I place a container without a permit?", a: "Placing a container without the required permit is a building violation and can result in fines and a mandatory removal order. Always clarify the permit requirement in advance." },
  { q: "Can I live in a container?", a: "Yes, but a residential container (tiny house, container home) always requires a building permit. It must also comply with thermal insulation, fire protection and escape route requirements just like a conventional building." },
];

const LINKS = [
  { href: "/en/container-fundament", title: "Container foundation", desc: "Foundation types and planning" },
  { href: "/en/container-lieferung", title: "Container delivery", desc: "Transport and placement" },
  { href: "/en/kategorien/buerocontainer", title: "Office containers", desc: "Mobile offices and welfare units" },
  { href: "/en/shop", title: "Container shop", desc: "Browse all available containers" },
];

export default function ContainerPermits() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: BRAND_BLUE }}>Guide</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Container Permits – Do I Need Planning Permission?
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            When is a building permit required for a shipping container? Complete guide to permit requirements by usage type, how to apply and what to watch out for.
          </p>
          <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white" style={{ backgroundColor: BRAND_BLUE }}>
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SeoSection title="Permit requirement by usage type">
          <SeoTable
            headers={["Usage type", "Permit required?", "Legal basis"]}
            rows={PERMIT_TABLE}
          />
          <p className="text-xs text-muted-foreground mt-2">Note: Building regulations vary by German state (Bundesland). Always check the specific regulations in your area with your local building authority.</p>
        </SeoSection>

        <SeoSection title="Storage containers: mostly permit-free">
          <p>Storage containers placed temporarily (usually up to 3 months, depending on state regulations) are generally permit-free in most German states. The key criterion is the temporary nature of the placement. If the container is to remain permanently, a building permit application is usually required.</p>
          <p>On agricultural land and commercial premises, longer periods without a permit are often possible. We recommend always confirming with the relevant building authority before placement.</p>
        </SeoSection>

        <SeoSection title="Residential containers: building permit required">
          <p>Anyone wishing to live in a container permanently must apply for a building permit. The same requirements apply as for conventional buildings: compliance with the local development plan, thermal insulation requirements, fire protection and connection to the utilities network.</p>
        </SeoSection>

        <SeoSection title="How to apply for a building permit">
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

        <CtaBanner text="We advise you on planning and permit requirements" btnLabel="Contact us" btnHref="/en/kontakt" />

        <SeoSection title="Frequently asked questions about container permits">
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
