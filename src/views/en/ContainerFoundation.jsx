"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, SeoTable, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";

const FOUNDATION_TABLE = [
  ["4 concrete pads (DIY)", "Low", "€0 – €100", "Temporary storage, flat firm ground"],
  ["Compacted gravel bed", "Low–Medium", "€200 – €500", "Storage containers, simple setups"],
  ["Concrete strip (2 runners)", "Medium", "€300 – €800", "Long-term storage, soft ground"],
  ["Deep strip foundation", "High", "€800 – €2,500", "Permanent installation, buildings"],
  ["Screw piles", "Low–Medium", "€500 – €1,500", "Sloped ground, residential use"],
  ["Point foundations (concrete)", "Medium", "€400 – €1,200", "All container types, universal"],
];

const STEPS = [
  { n: 1, title: "Mark out the area", desc: "Mark the four corner points of the container. Leave at least 50 cm clearance on all sides." },
  { n: 2, title: "Check the ground", desc: "Test the load-bearing capacity of the surface. Soft or waterlogged ground must be stabilised first." },
  { n: 3, title: "Prepare support points", desc: "Place concrete pads, paving slabs or compacted gravel at the four corners (or six points for 40 ft containers)." },
  { n: 4, title: "Level all points", desc: "Use a spirit level to ensure all support points are at exactly the same height. Maximum tolerance: ±5 mm." },
  { n: 5, title: "Place the container", desc: "The container is set down by crane or tilt-bed vehicle. After placement, check levelness again." },
];

const FAQS = [
  { q: "Do I always need a foundation for a container?", a: "Not necessarily. For temporary use on solid, flat ground (e.g. concrete or compacted gravel), a foundation may not be required. For permanent installations or soft ground, a foundation is always recommended." },
  { q: "What is the simplest foundation?", a: "Four concrete pads or paving slabs at the corner castings of the container. This is sufficient for temporary storage use on solid ground and can be done as a DIY project." },
  { q: "How deep must a foundation be?", a: "For permanent installations, the foundation must go below the frost line (80–120 cm in Germany). For temporary containers, a surface foundation is often sufficient." },
  { q: "Do I need planning permission for a container foundation?", a: "This depends on local regulations and the intended use. Temporary storage containers are usually permit-free. Permanent installations may require planning permission. We recommend checking with your local building authority." },
  { q: "How level must the surface be?", a: "The container should be placed on a surface with a maximum tolerance of ±5 mm across its entire length. Uneven placement can cause doors to warp and jam." },
];

const LINKS = [
  { href: "/en/container-lieferung", title: "Container delivery", desc: "How delivery and placement works" },
  { href: "/en/container-genehmigung", title: "Container permits", desc: "When is planning permission required?" },
  { href: "/en/container-kosten", title: "Container costs", desc: "Prices and cost factors" },
  { href: "/en/shop", title: "Container shop", desc: "Browse all available containers" },
];

export default function ContainerFoundation() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Guide</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Container Foundation – Which Foundation for a Shipping Container?
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            Complete guide to container foundations: types, costs, and which foundation is best for storage, office or residential containers.
          </p>
          <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a]" style={{ backgroundColor: ORANGE }}>
            Order with delivery & setup advice <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SeoSection title="Why is a foundation important?">
          <p>A stable, level foundation prevents the container from sinking, tilting or moisture entering from below. It ensures the doors open and close correctly, extends the container's service life and is a prerequisite for planning permission in permanent installations.</p>
        </SeoSection>

        <SeoSection title="Foundation types compared">
          <SeoTable
            headers={["Foundation type", "Effort", "Estimated cost", "Suitable for"]}
            rows={FOUNDATION_TABLE}
          />
        </SeoSection>

        <SeoSection title="Step-by-step: foundation for a storage container">
          <div className="space-y-4 mt-2">
            {STEPS.map((s) => (
              <div key={s.n} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-8 h-8 shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-sm">{s.n}</div>
                <div>
                  <p className="font-heading font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SeoSection>

        <SeoSection title="Note on frost depth">
          <p>In Germany, the frost line is typically between 80 and 120 cm below ground level. For permanent foundations, footings must extend below this depth to prevent frost heave. For temporary or seasonal storage containers, a surface foundation is usually sufficient.</p>
        </SeoSection>

        <CtaBanner text="We advise you on site preparation and foundation" btnLabel="Request a free quote" btnHref="/en/angebot" />

        <SeoSection title="Frequently asked questions about container foundations">
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
