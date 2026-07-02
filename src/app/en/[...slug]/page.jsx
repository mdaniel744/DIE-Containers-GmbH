import { Suspense } from "react";
import { notFound } from "next/navigation";
import { makeMetadata } from "../../seo";

import Shop from "@/views/Shop";
import QuoteRequest from "@/views/QuoteRequest";
import About from "@/views/About";
import Contact from "@/views/Contact";
import FAQ from "@/views/FAQ";
import Kaufberater from "@/views/Kaufberater";
import Container10ftCategory from "@/views/categories/Container10ft";
import Container20ftCategory from "@/views/categories/Container20ft";
import Container40ftCategory from "@/views/categories/Container40ft";
import KuehlcontainerCategory from "@/views/categories/Kuehlcontainer";
import BuerocontainerCategory from "@/views/categories/Buerocontainer";
import OpenSideCategory from "@/views/categories/OpenSide";
// English-only pages
import ContainerDimensions from "@/views/en/ContainerDimensions";
import ContainerWeight from "@/views/en/ContainerWeight";
import ContainerCosts from "@/views/en/ContainerCosts";
import ContainerFoundation from "@/views/en/ContainerFoundation";
import ContainerDelivery from "@/views/en/ContainerDelivery";
import ContainerPermits from "@/views/en/ContainerPermits";
import BuyShippingContainers from "@/views/en/BuyShippingContainers";
import LegalPageEn from "@/views/en/LegalPageEn";

const EN_ROUTES = {
  // ─── Core pages ──────────────────────────────────────────────────────────
  shop: {
    component: Shop,
    title: "Container Shop — All Shipping Containers | CSAV Container",
    description: "Browse all available shipping containers: 10ft, 20ft, 40ft, Standard, High Cube, Office and Refrigerated containers.",
  },
  angebot: {
    component: QuoteRequest,
    title: "Request a Container Quote | CSAV Container",
    description: "Request a free, no-obligation quote for your container including delivery.",
  },
  "ueber-uns": {
    component: About,
    title: "About CSAV Container | Buy Containers in Germany",
    description: "Learn more about CSAV Container — delivery, consultation and quality assurance.",
  },
  kontakt: {
    component: Contact,
    title: "Contact | CSAV Container",
    description: "Contact CSAV Container for advice, quotes and questions about shipping containers.",
  },
  faq: {
    component: FAQ,
    title: "FAQ — Frequently Asked Questions | CSAV Container",
    description: "Answers to common questions about buying containers, delivery, sizes, costs and setup.",
  },
  kaufberater: {
    component: Kaufberater,
    title: "Container Advisor — Find Your Container | CSAV Container",
    description: "Answer 3 short questions and get a personalised container recommendation.",
  },

  // ─── Guide pages ─────────────────────────────────────────────────────────
  "container-masse": { component: ContainerDimensions, title: "Container Dimensions – All Sizes at a Glance | CSAV Container", description: "Compare 10 ft, 20 ft, 40 ft and High Cube container external dimensions, internal dimensions, volume, weight and door openings." },
  "container-gewicht": { component: ContainerWeight, title: "Container Weight – Tare Weight & Payload | CSAV Container", description: "Tare weight, maximum payload and gross weight for all container types." },
  "container-kosten": { component: ContainerCosts, title: "Container Costs – Prices by Size & Condition | CSAV Container", description: "Current shipping container prices from stock in Germany. All prices net, excluding transport." },
  "container-fundament": { component: ContainerFoundation, title: "Container Foundation – Which Foundation for a Shipping Container? | CSAV Container", description: "Foundation types, costs and step-by-step guide for storage, office and residential containers." },
  "container-lieferung": { component: ContainerDelivery, title: "Container Delivery throughout Germany | CSAV Container", description: "Everything about the delivery process, vehicle types, transport costs and site preparation." },
  "container-genehmigung": { component: ContainerPermits, title: "Container Permits – Do I Need Planning Permission? | CSAV Container", description: "When is a building permit required? Complete guide to permit requirements by usage type." },

  // ─── Buy landing pages ────────────────────────────────────────────────────
  "seecontainer-kaufen": { component: BuyShippingContainers, title: "Buy Shipping Containers in Germany | CSAV Container", description: "New and used shipping containers for storage, transport, office and residential use." },
  "lagercontainer-kaufen": { component: Shop, title: "Buy Storage Containers | CSAV Container", description: "Secure and flexible storage containers for commercial and private use." },
  "double-door-container-kaufen": { component: Shop, title: "Buy Double Door Containers | CSAV Container", description: "Tunnel containers with doors on both ends for flexible loading." },
  "wohncontainer-kaufen": { component: Shop, title: "Buy Living Containers | CSAV Container", description: "Fully converted residential containers as tiny houses or guest accommodation." },
  "container-kaufen": { component: BuyShippingContainers, title: "Buy Containers – New and Used | CSAV Container", description: "Shipping containers, storage containers, office containers and refrigerated containers with nationwide delivery." },

  // ─── Legal pages ──────────────────────────────────────────────────────────
  "impressum": { component: LegalPageEn, title: "Imprint | CSAV Container", description: "Legal information about CSAV Container GmbH.", noindex: true },
  "datenschutz": { component: LegalPageEn, title: "Privacy Policy | CSAV Container", description: "Privacy policy for CSAV Container.", noindex: true },
  "cookie-policy": { component: LegalPageEn, title: "Cookie Policy | CSAV Container", description: "Cookie policy for CSAV Container.", noindex: true },
  "agb": { component: LegalPageEn, title: "Terms & Conditions | CSAV Container", description: "General terms and conditions of CSAV Container GmbH.", noindex: true },
  "widerrufsrecht": { component: LegalPageEn, title: "Right of Withdrawal | CSAV Container", description: "Right of withdrawal for consumers.", noindex: true },
  "rueckgabe": { component: LegalPageEn, title: "Returns & Refunds | CSAV Container", description: "Return and refund policy of CSAV Container.", noindex: true },
  "versand": { component: LegalPageEn, title: "Shipping & Delivery | CSAV Container", description: "Delivery conditions and transport information.", noindex: true },
  "zahlungsbedingungen": { component: LegalPageEn, title: "Payment Terms | CSAV Container", description: "Payment methods and payment terms.", noindex: true },

  // ─── Category pages ───────────────────────────────────────────────────────
  "kategorien/10ft": {
    component: Container10ftCategory,
    title: "Buy 10-foot Containers | CSAV Container",
    description: "Compact ISO shipping containers with approx. 15.7 m³ volume – ideal for gardens, construction sites and small storage areas.",
  },
  "kategorien/20ft": {
    component: Container20ftCategory,
    title: "Buy 20-foot Containers | CSAV Container",
    description: "The world's best-selling ISO container – approx. 33 m³ volume, ideal as storage, workshop or for transport.",
  },
  "kategorien/40ft": {
    component: Container40ftCategory,
    title: "Buy 40-foot Containers | CSAV Container",
    description: "Maximum storage space with approx. 67 m³ volume – ideal for large projects and professional storage.",
  },
  "kategorien/kuehlcontainer": {
    component: KuehlcontainerCategory,
    title: "Buy Refrigerated Containers | CSAV Container",
    description: "Refrigerated containers with integrated cooling unit – temperature range -25 °C to +25 °C. Ideal for food and pharmaceuticals.",
  },
  "kategorien/buerocontainer": {
    component: BuerocontainerCategory,
    title: "Buy Office Containers | CSAV Container",
    description: "Ready-to-use office containers with electrical installation, insulation, windows and door – immediately available.",
  },
  "kategorien/open-side": {
    component: OpenSideCategory,
    title: "Buy Open Side Containers | CSAV Container",
    description: "Shipping containers with fully openable side – maximum accessibility for forklift operation and fast loading.",
  },
};

function getKey(params) {
  return (params?.slug || []).join("/");
}

export function generateStaticParams() {
  return Object.keys(EN_ROUTES).map((key) => ({
    slug: key.split("/"),
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const key = getKey(resolvedParams);

  // Product detail page
  if (key.startsWith("produkt/") && key.split("/").length === 2) {
    const slug = key.split("/")[1];
    const readable = slug.replace(/-/g, " ");
    return makeMetadata({
      title: `${readable} — Buy | CSAV Container`,
      description: "Product details, technical specs, images and request a no-obligation quote for this container.",
      path: `/en/produkt/${slug}`,
      locale: "en",
    });
  }

  const route = EN_ROUTES[key];
  if (!route) {
    return {
      title: "Page not found | CSAV Container",
      robots: { index: false, follow: false },
    };
  }

  return makeMetadata({
    title: route.title,
    description: route.description,
    path: `/en/${key}`,
    locale: "en",
  });
}

export default async function EnPage({ params }) {
  const resolvedParams = await params;
  const key = getKey(resolvedParams);

  // Product pages handled by dedicated /en/produkt/[slug]/page.jsx
  const route = EN_ROUTES[key];
  if (!route) notFound();

  const Component = route.component;
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
