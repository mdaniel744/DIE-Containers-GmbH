import { Suspense } from "react";
import { notFound } from "next/navigation";
import { makeMetadata } from "../../seo";

import Shop from "@/views/Shop";
import Container10ftCategory from "@/views/categories/Container10ft";
import Container20ftCategory from "@/views/categories/Container20ft";
import Container40ftCategory from "@/views/categories/Container40ft";
import KuehlcontainerCategory from "@/views/categories/Kuehlcontainer";
import BuerocontainerCategory from "@/views/categories/Buerocontainer";
import OpenSideCategory from "@/views/categories/OpenSide";
import QuoteRequest from "@/views/QuoteRequest";
import About from "@/views/About";
import Contact from "@/views/Contact";
import FAQ from "@/views/FAQ";
import Kaufberater from "@/views/Kaufberater";
import LegalPage from "@/views/LegalPage";

import ContainerKaufen from "@/views/seo/ContainerKaufen";
import SeecontainerKaufen from "@/views/seo/SeecontainerKaufen";
import WohncontainerKaufen from "@/views/seo/WohncontainerKaufen";
import BuerocontainerKaufen from "@/views/seo/BuerocontainerKaufen";
import LagercontainerKaufen from "@/views/seo/LagercontainerKaufen";
import KuehlcontainerKaufen from "@/views/seo/KuehlcontainerKaufen";
import Container10Fuss from "@/views/seo/Container10Fuss";
import Container20Fuss from "@/views/seo/Container20Fuss";
import Container40Fuss from "@/views/seo/Container40Fuss";
import OpenSideContainerKaufen from "@/views/seo/OpenSideContainerKaufen";
import DoubleDoorContainerKaufen from "@/views/seo/DoubleDoorContainerKaufen";
import ContainerMasse from "@/views/seo/ContainerMasse";
import ContainerGewicht from "@/views/seo/ContainerGewicht";
import ContainerKosten from "@/views/seo/ContainerKosten";
import ContainerFundament from "@/views/seo/ContainerFundament";
import ContainerLieferung from "@/views/seo/ContainerLieferung";
import ContainerGenehmigung from "@/views/seo/ContainerGenehmigung";
import WasKostetSeecontainer from "@/views/seo/faq/WasKostetSeecontainer";
import WieSchwer from "@/views/seo/faq/WieSchwer";
import WieGrossIst20Fuss from "@/views/seo/faq/WieGrossIst20Fuss";
import ContainerGroessen from "@/views/seo/faq/ContainerGroessen";
import WieLangeHaelt from "@/views/seo/faq/WieLangeHaelt";
import WieWirdGeliefert from "@/views/seo/faq/WieWirdGeliefert";

const ROUTES = {
  shop: {
    component: Shop,
    title: "Container Shop - Alle Container kaufen | CSAV Container",
    description:
      "Alle verfügbaren Container im Überblick: 10ft, 20ft, 40ft, Standard, High Cube, Bürocontainer und Kühlcontainer.",
  },
  "kategorien/10ft": {
    component: Container10ftCategory,
    title: "10 Fuß Container kaufen | CSAV Container",
    description:
      "10 Fuß Container kaufen: kompakte Lagercontainer für Garten, Baustelle und Gewerbe mit deutschlandweiter Lieferung.",
  },
  "kategorien/20ft": {
    component: Container20ftCategory,
    title: "20 Fuß Container kaufen | CSAV Container",
    description:
      "20 Fuß Container kaufen: der meistgefragte ISO-Container für Lagerung, Transport und Umbauten.",
  },
  "kategorien/40ft": {
    component: Container40ftCategory,
    title: "40 Fuß Container kaufen | CSAV Container",
    description:
      "40 Fuß Container kaufen: maximale Lagerfläche für Gewerbe, Baustellen und große Projekte.",
  },
  "kategorien/kuehlcontainer": {
    component: KuehlcontainerCategory,
    title: "Kühlcontainer kaufen | CSAV Container",
    description:
      "Kühlcontainer kaufen oder anfragen: temperaturgeführte Container für Lebensmittel, Pharma und Gewerbe.",
  },
  "kategorien/buerocontainer": {
    component: BuerocontainerCategory,
    title: "Bürocontainer kaufen | CSAV Container",
    description:
      "Bürocontainer kaufen: mobile Büro- und Arbeitsräume mit Ausstattung, Lieferung und Beratung.",
  },
  "kategorien/open-side": {
    component: OpenSideCategory,
    title: "Open Side Container kaufen | CSAV Container",
    description:
      "Open Side Container kaufen: Seecontainer mit vollständig öffnender Seitenwand für flexible Beladung.",
  },
  angebot: {
    component: QuoteRequest,
    title: "Container Angebot anfordern | CSAV Container",
    description:
      "Fordern Sie ein kostenloses und unverbindliches Angebot für Ihren Container inklusive Lieferung an.",
  },
  "ueber-uns": {
    component: About,
    title: "Über CSAV Container | Container kaufen in Deutschland",
    description:
      "Erfahren Sie mehr über CSAV Container, Lieferung, Beratung und Qualitätssicherung.",
  },
  kontakt: {
    component: Contact,
    title: "Kontakt | CSAV Container",
    description:
      "Kontaktieren Sie CSAV Container für Beratung, Angebote und Fragen zu Seecontainern und Lieferung.",
  },
  faq: {
    component: FAQ,
    title: "FAQ - Häufige Fragen zu Containern | CSAV Container",
    description:
      "Antworten auf häufige Fragen zu Containerkauf, Lieferung, Größen, Kosten und Aufstellung.",
  },
  kaufberater: {
    component: Kaufberater,
    title: "Container Kaufberater | CSAV Container",
    description:
      "Finden Sie mit wenigen Fragen den passenden Container für Lagerung, Büro, Transport oder Spezialnutzung.",
  },
  "container-kaufen": {
    component: ContainerKaufen,
    title: "Container kaufen - Neue und gebrauchte Container | CSAV Container",
    description:
      "Container kaufen in Deutschland: Seecontainer, Lagercontainer, Bürocontainer, Wohncontainer und Kühlcontainer mit Lieferung.",
  },
  "seecontainer-kaufen": {
    component: SeecontainerKaufen,
    title: "Seecontainer kaufen - 10ft, 20ft und 40ft | CSAV Container",
    description:
      "Seecontainer kaufen: robuste ISO-Container neu oder gebraucht, wind- und wasserdicht, deutschlandweit lieferbar.",
  },
  "wohncontainer-kaufen": {
    component: WohncontainerKaufen,
    title: "Wohncontainer kaufen | CSAV Container",
    description:
      "Wohncontainer kaufen: flexible Wohnlösungen, Ausstattung, Genehmigung, Lieferung und Kosten im Überblick.",
  },
  "buerocontainer-kaufen": {
    component: BuerocontainerKaufen,
    title: "Bürocontainer kaufen - Mobile Büroräume | CSAV Container",
    description:
      "Bürocontainer kaufen: mobile Büros, Baustellenbüros und Arbeitsräume mit Ausstattung und Lieferung.",
  },
  "lagercontainer-kaufen": {
    component: LagercontainerKaufen,
    title: "Lagercontainer kaufen | CSAV Container",
    description:
      "Lagercontainer kaufen: sichere und flexible Lagerfläche für Gewerbe, Baustelle, Garten und Industrie.",
  },
  "kuehlcontainer-kaufen": {
    component: KuehlcontainerKaufen,
    title: "Kühlcontainer kaufen - Reefer Container | CSAV Container",
    description:
      "Kühlcontainer kaufen: temperaturgeführte Lagerung für Lebensmittel, Pharma, Events und Gewerbe.",
  },
  "10-fuss-container-kaufen": {
    component: Container10Fuss,
    title: "10 Fuß Container kaufen | Maße, Preise, Lieferung",
    description:
      "10 Fuß Container kaufen: kompakte Container für kleine Flächen mit Informationen zu Maßen, Preisen und Lieferung.",
  },
  "20-fuss-container-kaufen": {
    component: Container20Fuss,
    title: "20 Fuß Container kaufen | Maße, Gewicht, Preise",
    description:
      "20 Fuß Container kaufen: Preise, Maße, Gewicht, Varianten und Lieferung des beliebtesten ISO-Containers.",
  },
  "40-fuss-container-kaufen": {
    component: Container40Fuss,
    title: "40 Fuß Container kaufen | Preise, Maße, Lieferung",
    description:
      "40 Fuß Container kaufen: große Lagerfläche, High Cube Varianten, Preise, Maße und deutschlandweite Lieferung.",
  },
  "open-side-container-kaufen": {
    component: OpenSideContainerKaufen,
    title: "Open Side Container kaufen | CSAV Container",
    description:
      "Open Side Container kaufen: seitlich zu öffnende Container für effizientes Be- und Entladen.",
  },
  "double-door-container-kaufen": {
    component: DoubleDoorContainerKaufen,
    title: "Double Door Container kaufen | CSAV Container",
    description:
      "Double Door Container kaufen: Tunnelcontainer mit Türen an beiden Stirnseiten für flexible Nutzung.",
  },
  "container-masse": {
    component: ContainerMasse,
    title: "Container Maße - 10ft, 20ft, 40ft | CSAV Container",
    description:
      "Container Maße im Überblick: Außenmaße, Innenmaße, Türöffnungen und Volumen für 10ft, 20ft und 40ft Container.",
  },
  "container-gewicht": {
    component: ContainerGewicht,
    title: "Container Gewicht | Leergewicht und Nutzlast",
    description:
      "Container Gewicht: Leergewicht, Nutzlast und Gesamtgewicht für gängige Seecontainergrößen.",
  },
  "container-kosten": {
    component: ContainerKosten,
    title: "Container Kosten - Preise und Transportkosten | CSAV Container",
    description:
      "Container Kosten: Kaufpreise, Transportkosten, Zustandsklassen und Zusatzkosten beim Containerkauf.",
  },
  "container-fundament": {
    component: ContainerFundament,
    title: "Container Fundament und Untergrund | CSAV Container",
    description:
      "Container Fundament: geeigneter Untergrund, Punktfundament, Betonplatte und Tipps zur sicheren Aufstellung.",
  },
  "container-lieferung": {
    component: ContainerLieferung,
    title: "Container Lieferung - Ablauf und Kosten | CSAV Container",
    description:
      "Container Lieferung: Ablauf, Kranwagen, Zufahrt, Entladung und Transportkosten für Container in Deutschland.",
  },
  "container-genehmigung": {
    component: ContainerGenehmigung,
    title: "Container Genehmigung | Aufstellung und Rechtliches",
    description:
      "Container Genehmigung: wann für Lagercontainer, Bürocontainer oder Wohncontainer eine Genehmigung nötig sein kann.",
  },
  "was-kostet-ein-seecontainer": {
    component: WasKostetSeecontainer,
    title: "Was kostet ein Seecontainer? | CSAV Container",
    description:
      "Aktuelle Preise und Kostenfaktoren für Seecontainer, Transport und Lieferung in Deutschland.",
  },
  "wie-schwer-ist-ein-seecontainer": {
    component: WieSchwer,
    title: "Wie schwer ist ein Seecontainer? | CSAV Container",
    description:
      "Leergewicht, Nutzlast und Gesamtgewicht von 10 Fuß, 20 Fuß und 40 Fuß Seecontainern.",
  },
  "wie-gross-ist-ein-20-fuss-container": {
    component: WieGrossIst20Fuss,
    title: "Wie groß ist ein 20 Fuß Container? | CSAV Container",
    description:
      "Maße, Volumen und praktische Nutzung eines 20 Fuß Containers einfach erklärt.",
  },
  "welche-container-groessen-gibt-es": {
    component: ContainerGroessen,
    title: "Welche Containergrößen gibt es? | CSAV Container",
    description:
      "Übersicht der gängigen Containergrößen: 10 Fuß, 20 Fuß, 40 Fuß und High Cube Varianten.",
  },
  "wie-lange-haelt-ein-seecontainer": {
    component: WieLangeHaelt,
    title: "Wie lange hält ein Seecontainer? | CSAV Container",
    description:
      "Lebensdauer, Material, Wartung und Haltbarkeit von neuen und gebrauchten Seecontainern.",
  },
  "wie-wird-ein-container-geliefert": {
    component: WieWirdGeliefert,
    title: "Wie wird ein Container geliefert? | CSAV Container",
    description:
      "So läuft die Containerlieferung per LKW, Kranwagen und Entladung am Standort ab.",
  },
};

for (const path of [
  "impressum",
  "datenschutz",
  "cookie-policy",
  "agb",
  "widerrufsrecht",
  "rueckgabe",
  "versand",
  "zahlungsbedingungen",
  "general-terms",
  "vat-duties",
]) {
  ROUTES[path] = {
    component: LegalPage,
    title: `${path.replace(/-/g, " ")} | CSAV Container`,
    description: "Rechtliche Informationen von CSAV Container.",
    noindex: true,
  };
}

function getKey(params) {
  return (params?.slug || []).join("/");
}

export function generateStaticParams() {
  return Object.keys(ROUTES).map((key) => ({
    slug: key.split("/"),
  }));
}

export async function generateMetadata({ params }) {
  const key = getKey(await params);
  const route = ROUTES[key];

  if (!route) {
    return {
      title: "Seite nicht gefunden | CSAV Container",
      robots: { index: false, follow: false },
    };
  }

  if (route.noindex) {
    return {
      title: route.title,
      description: route.description,
      alternates: { canonical: `/${key}` },
      robots: { index: false, follow: false },
    };
  }

  return makeMetadata({
    title: route.title,
    description: route.description,
    path: `/${key}`,
  });
}

export default async function Page({ params }) {
  const route = ROUTES[getKey(await params)];

  if (!route) notFound();

  const Component = route.component;

  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
