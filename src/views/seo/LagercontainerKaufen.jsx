"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const priceTable = {
  headers: ["Typ", "Zustand", "Preis ab"],
  rows: [
    ["10 Fuß Lagercontainer", "Gebraucht", "1.290 €"],
    ["10 Fuß Lagercontainer", "Neu", "1.690 €"],
    ["20 Fuß Lagercontainer", "Gebraucht", "1.990 €"],
    ["20 Fuß Lagercontainer", "Neu", "2.490 €"],
    ["40 Fuß Lagercontainer", "Gebraucht", "2.990 €"],
    ["40 Fuß High Cube", "Gebraucht", "3.490 €"],
  ],
};

const faqs = [
  { q: "Welche Größe Lagercontainer brauche ich?", a: "Ein 20 Fuß Container bietet ca. 33 m³ Stauraum – ausreichend für einen durchschnittlichen Haushaltsinhalt. Ein 40 Fuß Container fasst ca. 67 m³. Für kleine Mengen genügt ein 10 Fuß Container mit ca. 15 m³." },
  { q: "Ist ein Lagercontainer wasserdicht?", a: "Ja. Alle unsere Lagercontainer werden vor der Auslieferung auf Wasser- und Winddichtheit geprüft. Türdichtungen werden bei Bedarf erneuert." },
  { q: "Brauche ich eine Genehmigung für einen Lagercontainer?", a: "In den meisten Bundesländern sind Lagercontainer bis zu einer bestimmten Größe genehmigungsfrei. Bitte prüfen Sie Ihre Landesbauordnung oder fragen Sie beim Bauordnungsamt nach." },
  { q: "Was darf ich im Lagercontainer lagern?", a: "Alle nicht explosiven, nicht selbstentzündlichen und nicht gefährlichen Güter. Für die Lagerung von Gefahrstoffen gelten besondere Vorschriften (TRGS 510)." },
  { q: "Wie werde ich den Container gesichert?", a: "Standard-Container haben Riegelstangenverschlüsse. Zusätzlich empfehlen wir Containerschlösser (Puck-Locks) und für hohe Sicherheitsanforderungen ein Containeralarmsystem." },
];

const otherTypesLinks = [
  { href: "/10-fuss-container-kaufen", title: "10 Fuß Container", desc: "Kompakteste Lagerlösung – ab 990 €" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "Der meistgekaufte Lagercontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Maximaler Stauraum – 67 m³" },
  { href: "/open-side-container-kaufen", title: "Open Side Container", desc: "Seitliche Öffnung für Staplerbeladung" },
  { href: "/double-door-container-kaufen", title: "Double Door Container", desc: "Zugang von beiden Stirnseiten" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer", desc: "Lager + Büro kombinieren" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer", desc: "Für temperaturempfindliche Waren" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Übersicht aller Typen & Preise" },
];

const ratgeberLinks = [
  { href: "/container-masse", title: "Container Maße", desc: "Außen- & Innenmaße im Überblick" },
  { href: "/container-gewicht", title: "Container Gewicht", desc: "Eigengewicht & Nutzlast" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund vorbereiten" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport & Aufstellung" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preise & Kostenfaktoren" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Wann brauche ich eine Genehmigung?" },
];

export default function LagercontainerKaufen() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "Seecontainer kaufen", href: "/seecontainer-kaufen" }, { label: "Lagercontainer kaufen" }]}
      label="Ratgeber"
      title="Lagercontainer kaufen – Preise, Größen & Tipps 2024"
      intro="Lagercontainer kaufen: Aktuelle Preise, Größenvergleich, Tipps zur Aufstellung und was Sie bei Kauf und Genehmigung beachten müssen. Lieferung deutschlandweit in 72 Stunden."
    >
      <SeoSection title="Warum ein Lagercontainer?">
        <p>
          Lagercontainer bieten eine sofort einsatzbereite, wetterfeste und einbruchhemmende Lagerlösung ohne aufwendige Baugenehmigung oder Fundament. Sie eignen sich für Gewerbebetriebe, Handwerker, Landwirte, Kommunen und Privatpersonen gleichermaßen.
        </p>
        <p>
          Im Gegensatz zu Lagerhallen oder Zeltlagern sind Seecontainer stapelbar, leicht umzusetzen und wertstabil. Ein gut gepflegter Gebrauchtcontainer kann nach Jahren zum Kaufpreis oder sogar mit Gewinn weiterverkauft werden. Benötigen Sie neben dem Lager auch Büroraum, kombinieren viele Betriebe einen <Link to="/buerocontainer-kaufen" className="text-orange-500 hover:underline">Bürocontainer</Link> mit einem Lagercontainer.
        </p>
      </SeoSection>

      <SeoSection title="Lagercontainer Preise 2024">
        <p>Die günstigste Möglichkeit für sofortigen Stauraum:</p>
        <SeoTable headers={priceTable.headers} rows={priceTable.rows} />
        <p><Link to="/container-kosten" className="text-orange-500 hover:underline">Transportkosten</Link> variieren je nach Standort und werden individuell kalkuliert. Anfragen kostenlos und unverbindlich.</p>
      </SeoSection>

      <CtaBanner text="Jetzt Lagercontainer anfragen – Lieferung in 72 Stunden" btnHref="/angebot" />

      <SeoSection title="Größenvergleich: 10, 20 & 40 Fuß">
        <p>
          <strong className="text-foreground">10 Fuß (ca. 3 m lang):</strong> 15 m³ Volumen, ideal für Werkzeuge, Gartengeräte, Archivgut. Passt auch in kleinere Gärten oder Betriebshöfe.
        </p>
        <p>
          <strong className="text-foreground"><Link to="/20-fuss-container-kaufen" className="text-orange-500 hover:underline">20 Fuß (ca. 6 m lang):</Link></strong> 33 m³ Volumen, der Klassiker für gewerbliche Lagerzwecke. Großes Angebot, beste Preis-Verfügbarkeit.
        </p>
        <p>
          <strong className="text-foreground"><Link to="/40-fuss-container-kaufen" className="text-orange-500 hover:underline">40 Fuß (ca. 12 m lang):</Link></strong> 67 m³ Volumen, für großvolumige Güter oder wenn zwei Container zu viel Aufwand bedeuten. Hochregallagerung mit Stapler möglich.
        </p>
      </SeoSection>

      <SeoSection title="Aufstellung & Transport">
        <p>
          Lagercontainer werden per <Link to="/container-lieferung" className="text-orange-500 hover:underline">LKW-Kran geliefert</Link> und präzise abgesetzt. Für die Aufstellung benötigen Sie eine ausreichend tragende Fläche (mind. 3,5 t auf den vier Aufstandspunkten). Ideal sind Betonplatten, Pflaster oder kompaktierter Schotter. Lesen Sie unseren <Link to="/container-fundament" className="text-orange-500 hover:underline">Ratgeber zum Container-Fundament</Link> für alle Details.
        </p>
      </SeoSection>

      <SeoSection title="Genehmigung für Lagercontainer">
        <p>
          In den meisten Bundesländern sind Lagercontainer bis zu einer bestimmten Größe genehmigungsfrei – vorausgesetzt, sie werden nicht als Aufenthaltsraum genutzt. Für Details lesen Sie unseren <Link to="/container-genehmigung" className="text-orange-500 hover:underline">vollständigen Genehmigungsratgeber</Link>.
        </p>
      </SeoSection>

      <SeoSection title="Weitere Container-Typen">
        <p>Nicht das Richtige dabei? Alle Container-Typen im Überblick:</p>
      </SeoSection>
      <InternalLinkGrid links={otherTypesLinks} />

      <SeoSection title="Ratgeber: Wichtiges vor dem Kauf">
        <p>Nützliche Informationen für Ihren Lagercontainer:</p>
      </SeoSection>
      <InternalLinkGrid links={ratgeberLinks} />

      <SeoSection title="Häufige Fragen">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}