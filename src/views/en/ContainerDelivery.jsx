"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SeoSection, SeoTable, FaqAccordion, InternalLinkGrid, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";
import { Search, Mail, Truck, CheckCircle, MapPin, FileText } from "lucide-react";

const ORANGE = "#F28C28";

const DELIVERY_STEPS = [
  { icon: FileText, title: "1. Request a quote", desc: "Submit a no-obligation enquiry via our form, by phone or email." },
  { icon: Mail, title: "2. Receive your quote", desc: "You receive a binding quote with the total price including transport within 24 hours." },
  { icon: MapPin, title: "3. Prepare the site", desc: "Prepare the surface and keep the access road clear. We'll advise you on what's needed." },
  { icon: Truck, title: "4. Delivery by truck", desc: "Depending on the container type and distance, we use a tilt-bed trailer, flatbed or step-deck." },
  { icon: CheckCircle, title: "5. Handover", desc: "Joint visual inspection on site. You confirm receipt and the container is ready to use." },
];

const TRANSPORT_TABLE = [
  ["Tilt-bed trailer (tilt trailer)", "Most common method", "Container is tilted and slid off the truck — requires approx. 2× container length of free space"],
  ["Flatbed trailer", "For long distances", "Container is lifted by crane — requires crane access or a crane on site"],
  ["Step-deck / lowloader", "For High Cube containers", "Lower loading height for tall containers under low bridges or height restrictions"],
];

const PRICE_TABLE = [
  ["Up to 50 km", "from €250", "from €350"],
  ["50–100 km", "from €350", "from €450"],
  ["100–200 km", "from €450", "from €600"],
  ["200–400 km", "from €600", "from €850"],
  ["400+ km", "on request", "on request"],
];

const CHECKLIST = [
  "Access road at least 3.5 m wide and 4.5 m high for 20 ft containers",
  "For 40 ft containers: access road at least 4 m wide, 18 m turning radius",
  "Hard, level surface at the placement point (concrete, compacted gravel or similar)",
  "No overhead obstacles (power lines, trees, roofs) at the placement location",
  "Person on site during delivery to guide the driver and confirm placement",
  "Foundation or support points prepared in advance",
];

const FAQS = [
  { q: "How is the container delivered?", a: "We deliver throughout Germany by specialist vehicle directly to your desired location. The most common method is a tilt-bed trailer that slides the container off the truck. Alternatively, cranes or flatbed trailers are used depending on the site conditions." },
  { q: "How long does delivery take?", a: "Typically 3–7 working days after order confirmation. Express deliveries within 48 hours are possible for in-stock items near your location." },
  { q: "What does delivery cost?", a: "Transport costs depend on distance and container size, starting from approx. €250 for local deliveries. You receive the exact cost in your individual quote." },
  { q: "What do I need to prepare for delivery?", a: "The access road must be at least 3.5 m wide and passable for heavy goods vehicles. The placement area must be level and have adequate load-bearing capacity. A person must be on site to guide the driver." },
  { q: "Can I specify the exact placement position?", a: "Yes. Our drivers take great care with precise positioning. You can specify the exact location and we will do our best to meet your wishes. In some cases a crane may be needed for very precise placement." },
  { q: "What happens if access is too narrow?", a: "Narrow access or special conditions may require alternative delivery methods (e.g. crane). We clarify this in advance and will find a solution. Please inform us about any special access conditions when requesting your quote." },
];

const LINKS = [
  { href: "/en/container-fundament", title: "Container foundation", desc: "Prepare the site correctly" },
  { href: "/en/container-genehmigung", title: "Container permits", desc: "When is planning permission needed?" },
  { href: "/en/container-kosten", title: "Container costs", desc: "Prices including transport" },
  { href: "/en/shop", title: "Container shop", desc: "Browse all available containers" },
  { href: "/en/angebot", title: "Request a quote", desc: "Free quote including delivery" },
];

export default function ContainerDelivery() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Delivery service</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-4">
            Container Delivery throughout Germany
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mb-6">
            Shipping containers are delivered by specialist vehicle directly to your site. Here you'll find everything about the delivery process, vehicle types, transport costs and how to prepare your site.
          </p>
          <Link to="/en/angebot" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a]" style={{ backgroundColor: ORANGE }}>
            Request a free quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <SeoSection title="The delivery process in 5 steps">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {DELIVERY_STEPS.map((s, i) => (
              <div key={i} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
                <s.icon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: ORANGE }} />
                <div>
                  <p className="font-heading font-semibold text-sm mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </SeoSection>

        <SeoSection title="Which vehicle is used?">
          <SeoTable
            headers={["Vehicle type", "Typical use", "Notes"]}
            rows={TRANSPORT_TABLE}
          />
        </SeoSection>

        <SeoSection title="Transport costs by distance">
          <SeoTable
            headers={["Distance", "20 ft container", "40 ft container"]}
            rows={PRICE_TABLE}
          />
          <p className="text-xs text-muted-foreground mt-2">All prices are indicative and depend on exact location and access conditions. You receive the binding price in your individual quote.</p>
        </SeoSection>

        <SeoSection title="Delivery checklist — what you need to prepare">
          <div className="space-y-2 mt-2">
            {CHECKLIST.map((item, i) => (
              <div key={i} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </SeoSection>

        <CtaBanner text="Ready to order? We'll advise you on delivery and site preparation." btnLabel="Request a free quote" btnHref="/en/angebot" />

        <SeoSection title="Frequently asked questions about container delivery">
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
