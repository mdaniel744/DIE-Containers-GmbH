import { Suspense } from "react";
import { notFound, redirect } from "next/navigation";
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
import Warenkorb from "@/views/Warenkorb";
import Kasse from "@/views/Kasse";
import BestellungBestaetigt from "@/views/BestellungBestaetigt";

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

export const revalidate = 300;

const ROUTES = {
  warenkorb: {
    component: Warenkorb,
    title: "Warenkorb | DIE Container GmbH",
    description: "Ihr Warenkorb bei DIE Container GmbH.",
  },
  kasse: {
    component: Kasse,
    title: "Kasse | DIE Container GmbH",
    description: "Bestellung abschließen bei DIE Container GmbH.",
  },
  "bestellung-bestaetigt": {
    component: BestellungBestaetigt,
    title: "Bestellung abgeschlossen | DIE Container GmbH",
    description: "Ihre Bestellung wurde erfolgreich aufgegeben.",
  },
  shop: {
    component: Shop,
    title: "Container Shop - Alle Container kaufen | DIE Container GmbH",
    description:
      "Alle verfügbaren Container im Überblick: 10ft, 20ft, 40ft, Standard, High Cube, Bürocontainer und Kühlcontainer.",
  },
  "kategorien/10ft": {
    component: Container10ftCategory,
    title: "10 Fuß Container kaufen | DIE Container GmbH",
    description:
      "10 Fuß Container kaufen: kompakte Lagercontainer für Garten, Baustelle und Gewerbe mit deutschlandweiter Lieferung.",
  },
  "kategorien/20ft": {
    component: Container20ftCategory,
    title: "20 Fuß Container kaufen | DIE Container GmbH",
    description:
      "20 Fuß Container kaufen: der meistgefragte ISO-Container für Lagerung, Transport und Umbauten.",
  },
  "kategorien/40ft": {
    component: Container40ftCategory,
    title: "40 Fuß Container kaufen | DIE Container GmbH",
    description:
      "40 Fuß Container kaufen: maximale Lagerfläche für Gewerbe, Baustellen und große Projekte.",
  },
  "kategorien/kuehlcontainer": {
    component: KuehlcontainerCategory,
    title: "Kühlcontainer kaufen | DIE Container GmbH",
    description:
      "Kühlcontainer kaufen oder anfragen: temperaturgeführte Container für Lebensmittel, Pharma und Gewerbe.",
  },
  "kategorien/buerocontainer": {
    component: BuerocontainerCategory,
    title: "Bürocontainer kaufen | DIE Container GmbH",
    description:
      "Bürocontainer kaufen: mobile Büro- und Arbeitsräume mit Ausstattung, Lieferung und Beratung.",
  },
  "kategorien/open-side": {
    component: OpenSideCategory,
    title: "Open Side Container kaufen | DIE Container GmbH",
    description:
      "Open Side Container kaufen: Seecontainer mit vollständig öffnender Seitenwand für flexible Beladung.",
  },
  angebot: {
    component: QuoteRequest,
    title: "Container Angebot anfordern | DIE Container GmbH",
    description:
      "Fordern Sie ein kostenloses und unverbindliches Angebot für Ihren Container inklusive Lieferung an.",
  },
  "ueber-uns": {
    component: About,
    title: "Über DIE Container GmbH | Seecontainer Händler aus Putzbrunn",
    description:
      "DIE Container GmbH ist Ihr Seecontainer Händler aus Putzbrunn: faire Preise, geprüfte Qualität, persönliche Beratung und zuverlässige Lieferung deutschlandweit.",
  },
  kontakt: {
    component: Contact,
    title: "Kontakt | DIE Container GmbH",
    description:
      "Kontaktieren Sie DIE Container GmbH für Beratung, Angebote und Fragen zu Seecontainern und Lieferung.",
  },
  faq: {
    component: FAQ,
    title: "FAQ - Häufige Fragen zu Containern | DIE Container GmbH",
    description:
      "Antworten auf häufige Fragen zu Containerkauf, Lieferung, Größen, Kosten und Aufstellung.",
  },
  kaufberater: {
    component: Kaufberater,
    title: "Container Kaufberater | DIE Container GmbH",
    description:
      "Finden Sie mit wenigen Fragen den passenden Container für Lagerung, Büro, Transport oder Spezialnutzung.",
  },
  "container-kaufen": {
    component: ContainerKaufen,
    title: "Container kaufen - Neue und gebrauchte Container | DIE Container GmbH",
    description:
      "Container kaufen in Deutschland: Seecontainer, Lagercontainer, Bürocontainer, Wohncontainer und Kühlcontainer mit Lieferung.",
  },
  "seecontainer-kaufen": {
    component: SeecontainerKaufen,
    title: "Seecontainer kaufen - 10ft, 20ft und 40ft | DIE Container GmbH",
    description:
      "Seecontainer kaufen: robuste ISO-Container neu oder gebraucht, wind- und wasserdicht, deutschlandweit lieferbar.",
  },
  "wohncontainer-kaufen": {
    component: WohncontainerKaufen,
    title: "Wohncontainer kaufen | DIE Container GmbH",
    description:
      "Wohncontainer kaufen: flexible Wohnlösungen, Ausstattung, Genehmigung, Lieferung und Kosten im Überblick.",
  },
  "buerocontainer-kaufen": {
    component: BuerocontainerKaufen,
    title: "Bürocontainer kaufen - Mobile Büroräume | DIE Container GmbH",
    description:
      "Bürocontainer kaufen: mobile Büros, Baustellenbüros und Arbeitsräume mit Ausstattung und Lieferung.",
  },
  "lagercontainer-kaufen": {
    component: LagercontainerKaufen,
    title: "Lagercontainer kaufen | Neu, gebraucht & mit Lieferung",
    description:
      "Lagercontainer kaufen in Deutschland – neue und gebrauchte Lagercontainer für Baustelle, Gewerbe, Landwirtschaft und private Nutzung. Robuste Container mit Lieferung.",
  },
  "kuehlcontainer-kaufen": {
    component: KuehlcontainerKaufen,
    title: "Kühlcontainer kaufen - Reefer Container | DIE Container GmbH",
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
    title: "Container mit offener Seite kaufen | Open Side Container mit Lieferung",
    description:
      "Container mit offener Seite kaufen – Open Side Container für Lagerung, Baustelle, Gewerbe und sperrige Güter. 20 Fuß und 40 Fuß Modelle, neu oder gebraucht mit Lieferung.",
  },
  "double-door-container-kaufen": {
    component: DoubleDoorContainerKaufen,
    title: "Doppeltüren Container kaufen | Double Door Container mit Lieferung",
    description:
      "Doppeltüren Container kaufen – Double Door Container mit Türen an beiden Stirnseiten für Lagerung, Baustelle, Gewerbe und schnellen Zugriff. Neu, gebraucht und mit Lieferung.",
  },
  "container-masse": {
    component: ContainerMasse,
    title: "Container Maße - 10ft, 20ft, 40ft | DIE Container GmbH",
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
    title: "Container Kosten - Preise und Transportkosten | DIE Container GmbH",
    description:
      "Container Kosten: Kaufpreise, Transportkosten, Zustandsklassen und Zusatzkosten beim Containerkauf.",
  },
  "container-fundament": {
    component: ContainerFundament,
    title: "Container Fundament und Untergrund | DIE Container GmbH",
    description:
      "Container Fundament: geeigneter Untergrund, Punktfundament, Betonplatte und Tipps zur sicheren Aufstellung.",
  },
  "container-lieferung": {
    component: ContainerLieferung,
    title: "Container Lieferung - Ablauf und Kosten | DIE Container GmbH",
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
    title: "Was kostet ein Seecontainer? | DIE Container GmbH",
    description:
      "Aktuelle Preise und Kostenfaktoren für Seecontainer, Transport und Lieferung in Deutschland.",
  },
  "wie-schwer-ist-ein-seecontainer": {
    component: WieSchwer,
    title: "Wie schwer ist ein Seecontainer? | DIE Container GmbH",
    description:
      "Leergewicht, Nutzlast und Gesamtgewicht von 10 Fuß, 20 Fuß und 40 Fuß Seecontainern.",
  },
  "wie-gross-ist-ein-20-fuss-container": {
    component: WieGrossIst20Fuss,
    title: "Wie groß ist ein 20 Fuß Container? | DIE Container GmbH",
    description:
      "Maße, Volumen und praktische Nutzung eines 20 Fuß Containers einfach erklärt.",
  },
  "welche-container-groessen-gibt-es": {
    component: ContainerGroessen,
    title: "Welche Containergrößen gibt es? | DIE Container GmbH",
    description:
      "Übersicht der gängigen Containergrößen: 10 Fuß, 20 Fuß, 40 Fuß und High Cube Varianten.",
  },
  "wie-lange-haelt-ein-seecontainer": {
    component: WieLangeHaelt,
    title: "Wie lange hält ein Seecontainer? | DIE Container GmbH",
    description:
      "Lebensdauer, Material, Wartung und Haltbarkeit von neuen und gebrauchten Seecontainern.",
  },
  "wie-wird-ein-container-geliefert": {
    component: WieWirdGeliefert,
    title: "Wie wird ein Container geliefert? | DIE Container GmbH",
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
    title: `${path.replace(/-/g, " ")} | DIE Container GmbH`,
    description: "Rechtliche Informationen von DIE Container GmbH.",
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
      title: "Seite nicht gefunden | DIE Container GmbH",
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

  // Routes that have an /en/ mirror get hreflang alternates.
  // Keep in sync with EN_ROUTES in src/app/en/[...slug]/page.jsx.
  const EN_MIRRORED = new Set(["shop", "angebot", "ueber-uns", "kontakt", "faq"]);
  const enPath = EN_MIRRORED.has(key) ? `/en/${key}` : undefined;

  return makeMetadata({
    title: route.title,
    description: route.description,
    path: `/${key}`,
    enPath,
  });
}

export default async function Page({ params }) {
  const key = getKey(await params);
  if (key === "angebot") redirect("/shop");

  const route = ROUTES[key];

  if (!route) notFound();

  const Component = route.component;
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
}
