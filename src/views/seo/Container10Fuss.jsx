"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const massTable = {
  headers: ["Merkmal", "Außenmaß", "Innenmaß"],
  rows: [
    ["Länge", "2.991 mm", "2.802 mm"],
    ["Breite", "2.438 mm", "2.352 mm"],
    ["Höhe (Standard)", "2.591 mm", "2.393 mm"],
    ["Türöffnung Breite", "–", "2.286 mm"],
    ["Türöffnung Höhe", "–", "2.261 mm"],
    ["Ladevolumen", "–", "ca. 15,7 m³"],
  ],
};

const preisTable = {
  headers: ["Zustand", "Typ", "Preis (netto)"],
  rows: [
    ["Gebraucht", "10 Fuß Standard", "ab 990 €"],
    ["Generalüberholt", "10 Fuß Standard", "ab 1.390 €"],
    ["Neu", "10 Fuß Standard", "ab 1.890 €"],
    ["Gebraucht", "10 Fuß High Cube", "ab 1.190 €"],
    ["Neu", "10 Fuß High Cube", "ab 2.190 €"],
  ],
};

const faqs = [
  {
    q: "Wie groß ist ein 10 Fuß Container?",
    a: "Ein 10 Fuß Container misst außen 2.991 mm in der Länge, 2.438 mm in der Breite und 2.591 mm in der Höhe. Das Innenvolumen beträgt ca. 15,7 m³ – ideal für kompakte Lagerlösungen."
  },
  {
    q: "Was kostet ein 10 Fuß Container?",
    a: "Gebrauchte 10 Fuß Container starten ab ca. 990 € netto. Neue Einheiten sind ab ca. 1.890 € erhältlich. Hinzu kommen Transportkosten, die je nach Lieferort variieren."
  },
  {
    q: "Wofür eignet sich ein 10 Fuß Container?",
    a: "10 Fuß Container eignen sich hervorragend als Gartencontainer, Baustellenlager, Werkzeugcontainer, Archivcontainer oder als Basismodul für individuelle Containergebäude."
  },
  {
    q: "Kann ein 10 Fuß Container gestapelt werden?",
    a: "Ja, 10 Fuß Container verfügen über ISO-genormte Eckbeschläge und können mit kompatiblen Containern gestapelt werden. Bitte beachten Sie die Herstellervorgaben zur maximalen Stapellast."
  },
  {
    q: "Wie wird ein 10 Fuß Container geliefert?",
    a: "Die Lieferung erfolgt per Kranwagen direkt an Ihren Wunschort – deutschlandweit innerhalb von 3–7 Werktagen. Express-Lieferung innerhalb von 72 Stunden ist auf Anfrage möglich."
  },
  {
    q: "Brauche ich eine Genehmigung für einen 10 Fuß Container?",
    a: "Für vorübergehende Aufstellungen (bis 3 Monate) ist in den meisten Bundesländern keine Genehmigung erforderlich. Bei dauerhafter Nutzung sollten Sie Ihr lokales Bauamt kontaktieren."
  },
];

const relatedLinks = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Der meistverkaufte Standardcontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maximaler Stauraum – ab 2.990 €" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Alle Lagercontainer im Überblick" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Übersicht aller Typen & Preise" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Abmessungen verglichen" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Aktuelle Preisübersicht 2024" },
];

const ratgeberLinks = [
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport & Aufstellung erklärt" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Den richtigen Untergrund wählen" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliche Anforderungen klären" },
  { href: "/container-gewicht", title: "Container Gewicht", desc: "Eigengewicht & Nutzlast" },
];

export default function Container10Fuss() {
  return (
    <SeoPageLayout
      breadcrumb={[
        { label: "Seecontainer kaufen", href: "/seecontainer-kaufen" },
        { label: "10 Fuß Container kaufen" }
      ]}
      label="Produkt-Ratgeber"
      title="10 Fuß Container kaufen – Kompakte Seecontainer für Lagerung und Transport"
      intro="Der 10 Fuß Container ist die kompakteste Variante der ISO-Seecontainer – ideal für begrenzte Platzverhältnisse. Erfahren Sie alles über Maße, Preise, Anwendungsbereiche und wie Sie den richtigen 10 Fuß Container für Ihren Bedarf finden."
    >
      {/* Introduction */}
      <SeoSection title="Was ist ein 10 Fuß Container?">
        <p>
          Der 10 Fuß Container, auch als Halbcontainer oder halber TEU bezeichnet, ist die kleinste in der Praxis weit verbreitete ISO-Containereinheit. Mit einer Außenlänge von knapp drei Metern bietet er ein Ladevolumen von ca. 15,7 m³ – mehr als genug für zahlreiche Lager- und Transportaufgaben, bei denen ein <Link to="/20-fuss-container-kaufen" className="text-orange-500 hover:underline">20 Fuß Container</Link> zu groß und zu teuer wäre.
        </p>
        <p>
          DIE Container GmbH führt 10 Fuß Seecontainer in verschiedenen Ausführungen: als Standard- und High-Cube-Variante, neu oder gebraucht, in unterschiedlichen Farben. Alle Einheiten werden vor der Auslieferung einer mehrstufigen Qualitätsprüfung unterzogen und sind wasser- sowie winddicht.
        </p>
        <p>
          Ob als <Link to="/lagercontainer-kaufen" className="text-orange-500 hover:underline">Lagercontainer</Link> im Garten, als Baustellendepot oder als Basis für einen individuellen Umbauprojekt – der 10 Fuß Container ist vielseitiger als sein kompaktes Format vermuten lässt. Auf dieser Seite erhalten Sie alle relevanten Informationen, um die richtige Kaufentscheidung zu treffen.
        </p>
      </SeoSection>

      {/* Vorteile */}
      <SeoSection title="Vorteile eines 10 Fuß Containers">
        <p>
          Warum entscheiden sich viele Kunden für den kleinen 10 Fuß Container? Die Vorteile liegen auf der Hand:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Platzsparend:</strong> Mit unter 3 m Länge passt der 10 Fuß Container auch auf beengte Grundstücke, in schmale Gärten oder Garagenauffahrten – Bereiche, in denen ein <Link to="/20-fuss-container-kaufen" className="text-orange-500 hover:underline">20 Fuß Standardcontainer</Link> schlicht nicht aufgestellt werden kann.
          </li>
          <li>
            <strong className="text-foreground">Geringes Eigengewicht:</strong> Der 10 Fuß Container wiegt leer nur ca. 1.300–1.500 kg. Das erleichtert den Transport und reduziert die Anforderungen an den <Link to="/container-fundament" className="text-orange-500 hover:underline">Untergrund und das Fundament</Link> erheblich.
          </li>
          <li>
            <strong className="text-foreground">Kostengünstig:</strong> Gebrauchte 10 Fuß Container sind bereits ab ca. 990 € erhältlich – damit ist er die preisgünstigste Einstiegslösung für sichere, witterungsbeständige Lagerung.
          </li>
          <li>
            <strong className="text-foreground">Robust & diebstahlsicher:</strong> Wie alle Seecontainer besteht auch der 10 Fuß Container aus hochwertigem Corten-Stahl. Die massiven Riegelverschlüsse an der Türseite bieten wirksamen Schutz vor Diebstahl.
          </li>
          <li>
            <strong className="text-foreground">Kompatibel & stapelbar:</strong> Dank ISO-genormter Eckbeschläge lassen sich 10 Fuß Container mit anderen ISO-Containern kombinieren und stapeln. Das eröffnet flexible Erweiterungsmöglichkeiten.
          </li>
          <li>
            <strong className="text-foreground">Schnell verfügbar:</strong> 10 Fuß Container sind ab Lager lieferbar. DIE Container GmbH liefert deutschlandweit innerhalb von 72 Stunden. Details zur <Link to="/container-lieferung" className="text-orange-500 hover:underline">Container Lieferung</Link> finden Sie in unserem Ratgeber.
          </li>
        </ul>
      </SeoSection>

      {/* Technische Daten */}
      <SeoSection title="Technische Daten und Abmessungen">
        <p>
          Die genauen <Link to="/container-masse" className="text-orange-500 hover:underline">Container Maße</Link> sind entscheidend für die Planung von Aufstellfläche, Transportlogistik und Raumnutzung. Alle Angaben beziehen sich auf den ISO-genormten 10 Fuß Standardcontainer:
        </p>
        <SeoTable headers={massTable.headers} rows={massTable.rows} />
        <p>
          Das nutzbare Innenvolumen von ca. 15,7 m³ entspricht ungefähr dem Inhalt eines großen Abstellraums oder Kellers. Die Bodentragfähigkeit liegt bei 30 t/m². Zum Vergleich: Ein <Link to="/40-fuss-container-kaufen" className="text-orange-500 hover:underline">40 Fuß Container</Link> bietet mit ca. 67 m³ mehr als viermal so viel Raum.
        </p>
        <p>
          Das Eigengewicht (Tara) des 10 Fuß Containers liegt je nach Ausführung und Baujahr zwischen 1.300 und 1.500 kg. Für detaillierte Angaben zum <Link to="/container-gewicht" className="text-orange-500 hover:underline">Container Gewicht</Link> aller Größen empfehlen wir unseren Ratgeber.
        </p>
      </SeoSection>

      {/* Preise */}
      <SeoSection title="Was kostet ein 10 Fuß Container?">
        <p>
          Die Preise für 10 Fuß Container richten sich nach Zustand (neu, generalüberholt oder gebraucht), Typ (Standard oder High Cube) und aktueller Verfügbarkeit. Hier eine Übersicht aktueller Richtpreise netto:
        </p>
        <SeoTable headers={preisTable.headers} rows={preisTable.rows} />
        <p>
          Hinzu kommen Transportkosten, die sich nach Lieferentfernung und Abladeaufwand richten. Sie erhalten die genauen Gesamtkosten in Ihrem individuellen Angebot. Für einen umfassenden Überblick über alle <Link to="/container-kosten" className="text-orange-500 hover:underline">Container Kosten</Link> inklusive Transport und Nebenkosten lesen Sie unseren Preisratgeber.
        </p>
      </SeoSection>

      <CtaBanner text="10 Fuß Container anfragen – kostenlos & unverbindlich" btnHref="/angebot" />

      {/* Neu oder gebraucht */}
      <SeoSection title="Neue oder gebrauchte 10 Fuß Container – Was passt zu mir?">
        <p>
          Bei der Wahl zwischen einem neuen und einem gebrauchten 10 Fuß Container spielen mehrere Faktoren eine Rolle:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Gebrauchte 10 Fuß Container (Cargo-Worthy):</strong> Diese Einheiten wurden im aktiven Seefrachtbetrieb eingesetzt. Sie weisen normale Gebrauchsspuren auf, sind jedoch struktur- und dichtigkeitsgeprüft. Ideal für preisbewusste Käufer, bei denen Optik eine untergeordnete Rolle spielt.
          </li>
          <li>
            <strong className="text-foreground">Generalüberholte Container:</strong> Gereinigt, ausgebessert und neu lackiert. Ein guter Kompromiss zwischen Preis und Erscheinungsbild – besonders beliebt für gewerbliche Lagerzwecke.
          </li>
          <li>
            <strong className="text-foreground">Neue 10 Fuß Container (One-Way):</strong> Makellos, ohne Gebrauchsspuren. Empfehlenswert wenn der Container sichtbar aufgestellt wird (z. B. als Hauscontainer im Garten), für Lebensmittellagerung oder wenn besondere Hygienestandards gelten.
          </li>
        </ul>
        <p>
          Alle Zustandsklassen finden Sie auch in unserem <Link to="/shop?size=10ft" className="text-orange-500 hover:underline">Shop gefiltert nach 10 Fuß Containern</Link>.
        </p>
      </SeoSection>

      {/* Anwendungsbereiche */}
      <SeoSection title="Anwendungsbereiche des 10 Fuß Containers">
        <p>
          Trotz seiner kompakten Größe ist der 10 Fuß Container äußerst vielseitig einsetzbar. Typische Anwendungen in der Praxis:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-foreground">Gartenlager:</strong> Fahrräder, Gartengeräte, Außenmöbel und Werkzeug sicher und witterungsgeschützt aufbewahren – ohne den Keller oder die Garage zu belegen.</li>
          <li><strong className="text-foreground">Baustellen-Depot:</strong> Werkzeuge, Materialien und Kleingeräte direkt auf der Baustelle lagern. Der robuste Stahlbau schützt vor Diebstahl und Witterung.</li>
          <li><strong className="text-foreground">Archiv & Aktenlager:</strong> Wichtige Unterlagen trocken und sicher aufbewahren. Durch die hermetische Dichtigkeit ist der Container auch für empfindliche Dokumente geeignet.</li>
          <li><strong className="text-foreground">Event & Pop-up Store:</strong> Der 10 Fuß Container lässt sich schnell aufstellen und als temporärer Verkaufsstand, Bar oder Info-Pavillon nutzen.</li>
          <li><strong className="text-foreground">Modulares Bauen:</strong> Als Basismodul für größere Containerprojekte. Mehrere 10 Fuß Container lassen sich zu individuellen Raumlösungen kombinieren – z. B. als Gartenhaus oder <Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">Bürocontainer</Link>.</li>
          <li><strong className="text-foreground">Gastronomie & Foodtruck-Basis:</strong> Der überschaubare Grundriss ist ideal für mobilen Kaffee- oder Snack-Verkauf, als Küche oder Schankanlage.</li>
        </ul>
      </SeoSection>

      {/* Lieferung */}
      <SeoSection title="Lieferung innerhalb Deutschlands">
        <p>
          DIE Container GmbH liefert 10 Fuß Container deutschlandweit per Kranwagen direkt an Ihren gewünschten Aufstellort. Da der Container nur ca. 1.300–1.500 kg wiegt, sind auch beengte Zufahrtssituationen oft problemlos handhabbar.
        </p>
        <p>
          Wichtig für die Lieferplanung: Der Unterstellplatz sollte eben und tragfähig sein. Für weichen Untergrund (Rasen, lockere Erde) empfehlen wir eine einfache Fundamentlösung. Unser <Link to="/container-fundament" className="text-orange-500 hover:underline">Ratgeber zu Container-Fundamenten</Link> zeigt alle gängigen Varianten mit Kosten- und Aufwandsschätzung.
        </p>
        <p>
          Die Standard-Lieferzeit beträgt 3–7 Werktage. Express-Lieferung innerhalb von 72 Stunden ist möglich. Alle Details zu Ablauf, Anforderungen und Kosten finden Sie in unserem <Link to="/container-lieferung" className="text-orange-500 hover:underline">Ratgeber zur Container Lieferung</Link>.
        </p>
        <p>
          Für die meisten kurzfristigen Aufstellungen (unter 3 Monaten) ist in Deutschland keine Baugenehmigung erforderlich. Bei dauerhafter Nutzung sollten Sie vorab das Bauamt kontaktieren. Mehr dazu in unserem <Link to="/container-genehmigung" className="text-orange-500 hover:underline">Leitfaden zur Container Genehmigung</Link>.
        </p>
      </SeoSection>

      {/* Warum DIE Container GmbH */}
      <SeoSection title="Warum einen 10 Fuß Container bei DIE Container GmbH kaufen?">
        <p>
          Als spezialisierter Containerhandel mit langjähriger Erfahrung bieten wir Ihnen mehr als nur den Kauf eines Containers:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-foreground">Qualitätsgeprüfte Ware:</strong> Jeder Container durchläuft vor der Auslieferung eine mehrstufige Prüfung auf Wasserdichtheit, Strukturintegrität und Türverriegelung.</li>
          <li><strong className="text-foreground">Transparente Preise:</strong> Keine versteckten Kosten. Sie erhalten ein vollständiges Angebot inkl. Transport und eventueller Nebenleistungen.</li>
          <li><strong className="text-foreground">Persönliche Beratung:</strong> Unser Team begleitet Sie von der Containerauswahl über Lieferplanung bis hin zu individuellen Umbaufragen.</li>
          <li><strong className="text-foreground">Schnelle Lieferung:</strong> Deutschlandweite Lieferung ab Lager – Standard innerhalb einer Woche, Express in 72 Stunden.</li>
          <li><strong className="text-foreground">Individualisierung möglich:</strong> Lackierung, Zusatzbelüftung, Regalsysteme, Schlösser, Dachfenster – wir realisieren Ihre Wünsche.</li>
        </ul>
      </SeoSection>

      <SeoSection title="Weitere Container-Typen im Überblick">
        <p>Der 10 Fuß Container ist nicht das Richtige? Entdecken Sie alle verfügbaren Containertypen:</p>
      </SeoSection>
      <InternalLinkGrid links={relatedLinks} />

      <SeoSection title="Ratgeber: Alles für Ihre Planung">
        <p>Wichtige Informationen für eine reibungslose Aufstellung und Nutzung:</p>
      </SeoSection>
      <InternalLinkGrid links={ratgeberLinks} />

      <SeoSection title="Häufig gestellte Fragen zum 10 Fuß Container">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}
