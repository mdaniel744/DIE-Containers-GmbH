"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const preisTable = {
  headers: ["Größe", "Zustand", "Preis (netto)"],
  rows: [
    ["20 Fuß Double Door", "Gebraucht", "ab 2.290 €"],
    ["20 Fuß Double Door", "Generalüberholt", "ab 2.790 €"],
    ["20 Fuß Double Door", "Neu", "ab 3.290 €"],
    ["40 Fuß Double Door", "Gebraucht", "ab 3.490 €"],
    ["40 Fuß Double Door", "Generalüberholt", "ab 4.190 €"],
    ["40 Fuß Double Door", "Neu", "ab 4.990 €"],
  ],
};

const techTable = {
  headers: ["Merkmal", "20 Fuß Double Door", "40 Fuß Double Door"],
  rows: [
    ["Außenlänge", "6.058 mm", "12.192 mm"],
    ["Außenbreite", "2.438 mm", "2.438 mm"],
    ["Außenhöhe (Standard)", "2.591 mm", "2.591 mm"],
    ["Türöffnungen", "2 × Stirnseite", "2 × Stirnseite"],
    ["Türöffnungsbreite", "je ca. 2.286 mm", "je ca. 2.286 mm"],
    ["Türöffnungshöhe", "je ca. 2.261 mm", "je ca. 2.261 mm"],
    ["Ladevolumen", "ca. 33 m³", "ca. 67 m³"],
  ],
};

const faqs = [
  {
    q: "Was ist ein Double Door Container?",
    a: "Ein Double Door Container (auch: Tunnelcontainer oder Doppeltürcontainer) ist ein ISO-Seecontainer mit Türen an beiden Stirnseiten. Dadurch kann der Container von beiden Enden be- und entladen werden, was eine durchgängige Zugänglichkeit von vorne nach hinten ermöglicht."
  },
  {
    q: "Was ist der Unterschied zwischen Double Door und Open Side Container?",
    a: "Beim Double Door Container sind beide Stirnseiten mit Türen ausgestattet, der Zugang erfolgt also von vorne und hinten. Ein Open Side Container hat stattdessen eine oder beide Längsseiten geöffnet. Welcher Typ besser passt, hängt von der Belade-Situation und dem verfügbaren Platz ab."
  },
  {
    q: "Was kostet ein Double Door Container?",
    a: "Gebrauchte 20 Fuß Double Door Container starten ab ca. 2.290 € netto, 40 Fuß Varianten ab ca. 3.490 €. Neue Einheiten sind für ca. 3.290 € (20 Fuß) bzw. 4.990 € (40 Fuß) erhältlich."
  },
  {
    q: "Wozu nutzt man einen Tunnelcontainer?",
    a: "Tunnelcontainer werden überall dort eingesetzt, wo ein durchgängiger Ladungsfluss wichtig ist: im Einzelhandel als Durchreiche, in der Logistik für First-In-First-Out-Lagerung, auf Baustellen als begehbarer Lagergang oder als Verbindungsmodul zwischen zwei Gebäudeteilen."
  },
  {
    q: "Ist ein Double Door Container auch als Kühlcontainer erhältlich?",
    a: "Spezielle Doppeltür-Kühlcontainer (Reefer) sind auf Anfrage erhältlich. Für Standardanwendungen stehen unsere regulären Kühlcontainer zur Verfügung. Sprechen Sie uns für individuelle Anforderungen direkt an."
  },
  {
    q: "Wie lange dauert die Lieferung eines Double Door Containers?",
    a: "Standard-Lieferzeit ist 3–7 Werktage ab Auftragsbestätigung. Express-Lieferung innerhalb von 72 Stunden ist auf Anfrage möglich. Wir liefern deutschlandweit per Kranwagen."
  },
];

const relatedLinks = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Der meistverkaufte Standardcontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maximaler Stauraum – ab 2.990 €" },
  { href: "/open-side-container-kaufen", title: "Open Side Container", desc: "Vollständige Seitenöffnung" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Alle Lagercontainer im Überblick" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Übersicht aller Typen & Preise" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Aktuelle Preisübersicht 2024" },
];

const ratgeberLinks = [
  { href: "/container-masse", title: "Container Maße", desc: "Alle Abmessungen auf einen Blick" },
  { href: "/container-gewicht", title: "Container Gewicht", desc: "Eigengewicht & Nutzlast erklärt" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport & Aufstellung erklärt" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Den richtigen Untergrund wählen" },
];

export default function DoubleDoorContainerKaufen() {
  return (
    <SeoPageLayout
      breadcrumb={[
        { label: "Seecontainer kaufen", href: "/seecontainer-kaufen" },
        { label: "Double Door Container kaufen" }
      ]}
      label="Produkt-Ratgeber"
      title="Double Door Container kaufen – Flexible Beladung von beiden Stirnseiten"
      intro="Der Double Door Container – auch Tunnelcontainer oder Doppeltürcontainer genannt – ermöglicht den Zugang von beiden Stirnseiten. Ideal für Durchladelogistik, First-In-First-Out-Lager und kreative Umbauprojekte. Hier erfahren Sie alles über Typen, Maße, Preise und Einsatzbereiche."
    >
      {/* Was ist ein Double Door Container */}
      <SeoSection title="Was ist ein Double Door Container?">
        <p>
          Der Double Door Container, im Deutschen auch als Tunnelcontainer oder Doppeltürcontainer bekannt, unterscheidet sich von einem herkömmlichen <Link to="/seecontainer-kaufen" className="text-orange-500 hover:underline">Seecontainer</Link> durch eine wesentliche Eigenschaft: Er verfügt an beiden Stirnseiten über vollwertige Türen. Das ermöglicht eine durchgängige Zugänglichkeit von einem Ende zum anderen – wie ein begehbarer Tunnel.
        </p>
        <p>
          Beide Türseiten sind mit denselben massiven ISO-genormten Riegeln und Dichtungen ausgestattet wie die Haupttür eines Standardcontainers. Im vollständig verschlossenen Zustand bietet der Double Door Container dieselbe Wasser- und Winddichtheit sowie Einbruchsicherheit wie ein konventioneller ISO-Container.
        </p>
        <p>
          CSAV Container führt Double Door Container in <Link to="/20-fuss-container-kaufen" className="text-orange-500 hover:underline">20 Fuß</Link> und <Link to="/40-fuss-container-kaufen" className="text-orange-500 hover:underline">40 Fuß</Link>, in Standard- und High-Cube-Höhe sowie in verschiedenen Zustandsklassen. Alle Einheiten sind CSC-zertifiziert und vollständig qualitätgeprüft.
        </p>
      </SeoSection>

      {/* Vorteile */}
      <SeoSection title="Vorteile eines Tunnelcontainers – Warum Double Door?">
        <p>
          Der Doppeltürcontainer bietet gegenüber einem klassischen Einzel-Türcontainer entscheidende logistische und praktische Vorteile:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Durchgängiger Ladungsfluss:</strong> Waren können auf einer Seite eingebracht und auf der anderen wieder entnommen werden – ideal für First-In-First-Out-Lagerung (FIFO). Besonders relevant für verderbliche Güter oder Materialien mit Haltbarkeitsdaten.
          </li>
          <li>
            <strong className="text-foreground">Verbesserte Belüftung:</strong> Bei geöffneten Türen auf beiden Seiten entsteht ein natürlicher Luftzug durch den Container. Das reduziert Kondenswasserbildung und schützt feuchtigkeitsempfindliche Güter. Ergänzend empfehlen sich unsere <Link to="/lagercontainer-kaufen" className="text-orange-500 hover:underline">Lagercontainer mit Belüftungsschlitzen</Link>.
          </li>
          <li>
            <strong className="text-foreground">Effiziente Nutzung beengter Stellflächen:</strong> Wenn der Container mit einer Seite an einer Wand oder einem Zaun steht, kann der Zugang problemlos über die entgegengesetzte Seite erfolgen. Die <Link to="/container-masse" className="text-orange-500 hover:underline">Außenmaße</Link> bleiben dabei identisch mit denen eines Standardcontainers.
          </li>
          <li>
            <strong className="text-foreground">Verbindungsmodul für Containergebäude:</strong> In modularen Containerbauprojekten dient der Tunnelcontainer als Verbindungsgang zwischen zwei Containereinheiten. Besonders gefragt beim Bau von <Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">Bürocontainer-Komplexen</Link> und Wohnprojekten.
          </li>
          <li>
            <strong className="text-foreground">Durchreichfunktion im Einzelhandel:</strong> Als mobiler Verkaufsstand, Kiosk oder Ausgabestation kann der Tunnelcontainer Kunden auf einer Seite empfangen und Waren von der Rückseite nachfüllen – ohne Betriebsunterbrechung.
          </li>
          <li>
            <strong className="text-foreground">Identisches Gewicht und gleiche Abmessungen:</strong> Double Door Container entsprechen in Eigengewicht, Nutzlast und Außenmaßen exakt den Standardcontainern. Für alle Details lesen Sie unseren Ratgeber zu <Link to="/container-gewicht" className="text-orange-500 hover:underline">Container Gewicht</Link>.
          </li>
        </ul>
      </SeoSection>

      {/* Technische Daten */}
      <SeoSection title="Technische Eigenschaften des Double Door Containers">
        <p>
          Alle technischen Daten des Doppeltürcontainers entsprechen den ISO-Normen für Seecontainer. Die Besonderheit liegt ausschließlich in der zweiten Türseite:
        </p>
        <SeoTable headers={techTable.headers} rows={techTable.rows} />
        <p>
          Wie bei allen ISO-Containern sind auch beim Double Door Container die Eckbeschläge nach ISO 1161 genormt, was Stapelbarkeit und Krantransport gewährleistet. Das Eigengewicht eines 20 Fuß Double Door Containers liegt bei ca. 2.300 kg, ein 40 Fuß Container wiegt ca. 3.900 kg leer. Ausführliche Angaben finden Sie im <Link to="/container-gewicht" className="text-orange-500 hover:underline">Ratgeber zu Container Gewicht und Nutzlast</Link>.
        </p>
      </SeoSection>

      {/* Beladungsmöglichkeiten */}
      <SeoSection title="Beladungsmöglichkeiten und praktische Anwendung">
        <p>
          Die zweite Tür des Tunnelcontainers eröffnet völlig neue Belade- und Nutzungsszenarien. Hier die wichtigsten Praxisbeispiele:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">FIFO-Lager (First In, First Out):</strong> Materialien werden auf einer Seite eingebracht und auf der anderen wieder entnommen. Keine Umschichtung erforderlich, was Zeit und Arbeit spart.
          </li>
          <li>
            <strong className="text-foreground">Durchfahrt-Lager:</strong> Bei ausreichender Grundstückstiefe kann der Container als befahrbarer Lagergang genutzt werden – Gabelstapler kann durchfahren und direkt abladen.
          </li>
          <li>
            <strong className="text-foreground">Mehrseitige Zugänglichkeit bei eingeschränktem Platz:</strong> Steht der Container mit einer Seite an einer Wand, bleibt die andere Seite voll zugänglich. Im Vergleich dazu muss beim <Link to="/open-side-container-kaufen" className="text-orange-500 hover:underline">Open Side Container</Link> immer ausreichend Seitenraum vorhanden sein.
          </li>
          <li>
            <strong className="text-foreground">Eventlocation und Gastronomie:</strong> Besucher oder Kunden treten auf einer Seite ein und verlassen den Container auf der anderen – kein Rückwärtsgehen, kein Engpass.
          </li>
          <li>
            <strong className="text-foreground">Ausgabe- und Empfangsstelle:</strong> Als Pförtner- oder Empfangshäuschen, Ausgabestation für Arbeitskleidung oder Schlüsselausgabe in Industriebetrieben.
          </li>
        </ul>
      </SeoSection>

      {/* Preise */}
      <SeoSection title="Preisübersicht Double Door Container 2024">
        <p>
          Die Preise für Double Door Container liegen geringfügig über denen vergleichbarer <Link to="/seecontainer-kaufen" className="text-orange-500 hover:underline">Standardseecontainer</Link>, da die zweite vollwertige Tür mit Riegeln und Dichtungen in der Produktion aufwendiger ist. Aktuelle Richtpreise netto:
        </p>
        <SeoTable headers={preisTable.headers} rows={preisTable.rows} />
        <p>
          Alle Preise verstehen sich netto ab Lager Hamburg, zuzüglich Transportkosten. Eine vollständige Übersicht aller Container-Kaufpreise und Transportkosten bietet unser <Link to="/container-kosten" className="text-orange-500 hover:underline">Container Kosten Ratgeber</Link>.
        </p>
      </SeoSection>

      <CtaBanner text="Double Door Container anfragen – persönliche Beratung inklusive" btnHref="/angebot" />

      {/* Lieferung */}
      <SeoSection title="Lieferung in Deutschland – Schnell und zuverlässig">
        <p>
          CSAV Container liefert Double Door Container deutschlandweit per Kranwagen. Da die Außenmaße identisch mit denen von Standardcontainern sind, gelten dieselben Transportanforderungen. Alle Details zum Lieferprozess finden Sie in unserem <Link to="/container-lieferung" className="text-orange-500 hover:underline">Ratgeber zur Container Lieferung</Link>.
        </p>
        <p>
          Für eine reibungslose Aufstellung sollten Sie vorab den Aufstellort vorbereiten:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ebener, tragfähiger Untergrund (Beton, Pflaster oder verdichteter Schotter)</li>
          <li>Freiraum auf beiden Stirnseiten – mindestens 1–2 m für Türöffnung und Betrieb</li>
          <li>Zufahrtsbreite mind. 3,5 m, Höhenfreiheit mind. 4,5 m für den Kranwagen</li>
        </ul>
        <p>
          Für weiche oder unebene Untergründe empfehlen wir eine geeignete Fundamentlösung. Unser <Link to="/container-fundament" className="text-orange-500 hover:underline">Ratgeber zu Container-Fundamenten</Link> zeigt alle Varianten von einfachen Punktfundamenten bis zum Streifenfundament aus Beton – mit Kosten- und Aufwandsschätzungen.
        </p>
        <p>
          Bei dauerhafter Aufstellung und Nutzung als Aufenthaltsraum oder Büro empfehlen wir die Klärung der Genehmigungspflicht. Unser <Link to="/container-genehmigung" className="text-orange-500 hover:underline">Genehmigungsratgeber</Link> gibt eine Übersicht nach Nutzungsart und Bundesland.
        </p>
      </SeoSection>

      <SeoSection title="Weitere Spezialcontainer und Standardgrößen">
        <p>Nicht das Richtige gefunden? Entdecken Sie alle verfügbaren Containertypen:</p>
      </SeoSection>
      <InternalLinkGrid links={relatedLinks} />

      <SeoSection title="Ratgeber: Wichtige Informationen vor dem Kauf">
        <p>Alles, was Sie für Planung, Transport und Aufstellung benötigen:</p>
      </SeoSection>
      <InternalLinkGrid links={ratgeberLinks} />

      <SeoSection title="Häufig gestellte Fragen zum Double Door Container">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}