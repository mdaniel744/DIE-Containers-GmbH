"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const genehmigungTable = {
  headers: ["Nutzungsart", "Genehmigung nötig?", "Rechtsgrundlage"],
  rows: [
    ["Lagercontainer (privat, Garten)", "Meist nein (Bagatellgrenze)", "Landesbauordnung §65"],
    ["Lagercontainer (gewerblich)", "Oft nein, Einzelfallprüfung", "Gewerberecht"],
    ["Bürocontainer (temporär, Baustelle)", "Nein (Bauzeitraum)", "§65 BauO"],
    ["Bürocontainer (dauerhaft)", "Ja", "§64 BauO"],
    ["Wohncontainer", "Ja", "§64 BauO + GEG"],
    ["Container im Außenbereich (§35 BauGB)", "Schwer genehmigbar", "BauGB §35"],
    ["Kühlcontainer (gewerblich)", "Ggf. Nutzungsänderung", "Gewerberecht"],
  ],
};

const faqs = [
  { q: "Brauche ich eine Genehmigung für einen Lagercontainer?", a: "Für private Lagercontainer im Garten gilt in den meisten Bundesländern eine Genehmigungsfreiheit bis zu einer bestimmten Größe (z. B. 40 m³ in NRW, 75 m³ in Bayern). Prüfen Sie Ihre Landesbauordnung oder fragen Sie beim Bauordnungsamt nach." },
  { q: "Ist ein Seecontainer ein Gebäude?", a: "Rechtlich gilt ein Container als Gebäude sobald er zum dauerhaften Aufenthalt von Menschen genutzt wird oder eine gewisse Größe überschreitet. Als reines Lagermittel gilt er in vielen Bundesländern nicht als Gebäude." },
  { q: "Was kostet eine Baugenehmigung für einen Container?", a: "Bauantragsgebühren richten sich nach dem Bauwert. Typisch sind 0,5–1 % des Bauwertes. Bei einem Wohncontainer mit Bauwert 30.000 € also ca. 150–300 €. Dazu kommen ggf. Planungskosten." },
  { q: "Kann ein Container im Außenbereich aufgestellt werden?", a: "Im Außenbereich (§35 BauGB) sind nur privilegierte Vorhaben (Landwirtschaft, öffentliche Versorgung etc.) ohne weiteres genehmigungsfähig. Ein Wohn- oder Lagercontainer ohne landwirtschaftlichen Bezug ist hier schwer genehmigbar." },
  { q: "Wie lange darf ein Container ohne Genehmigung stehen?", a: "Die Regeln variieren nach Bundesland. In Bayern und BW gilt oft eine Genehmigungsfreiheit für maximal 3 Monate temporäre Aufstellung. In anderen Ländern gibt es Flächengrenzen. Immer beim Bauordnungsamt vorher anfragen." },
];

const relatedLinks = [
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Oft genehmigungsfrei" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Temporär vs. dauerhaft" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Baugenehmigung erforderlich" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Gewerbliche Nutzung" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Üblich für Lager & Büro" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Für Wohn- & Büroprojekte" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Fundamentanforderungen" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Typen & Preise" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Genehmigungskosten einplanen" },
];

export default function ContainerGenehmigung() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "Ratgeber" }, { label: "Container Genehmigung" }]}
      label="Ratgeber"
      title="Container Genehmigung – Brauche ich eine Baugenehmigung?"
      intro="Wann brauche ich eine Baugenehmigung für einen Seecontainer? Übersicht nach Nutzungsart, Bundesland-Regelungen und was zu tun ist, bevor Sie einen Container aufstellen."
    >
      <SeoSection title="Genehmigungspflicht nach Nutzungsart">
        <p>Ob Sie eine Baugenehmigung benötigen, hängt vor allem von der Nutzungsart und dem Bundesland ab. Eine erste Orientierung:</p>
        <SeoTable headers={genehmigungTable.headers} rows={genehmigungTable.rows} />
        <p className="text-xs text-muted-foreground mt-1">Hinweis: Dies ist eine allgemeine Übersicht. Die geltenden Regelungen variieren je nach Bundesland und Bebauungsplan. Im Zweifelsfall immer beim zuständigen Bauordnungsamt anfragen.</p>
      </SeoSection>

      <SeoSection title="Lagercontainer: Meist genehmigungsfrei">
        <p>
          In den meisten deutschen Bundesländern sind Lagercontainer bis zu einer bestimmten Größe genehmigungsfrei – vorausgesetzt, sie werden auf einem bebauten Grundstück aufgestellt und nicht als Aufenthaltsraum genutzt. Typische Freigrenzen:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bayern: bis 75 m³ (Brutto-Rauminhalt) in Gewerbegebieten</li>
          <li>NRW: bis 40 m³ im Innenbereich (§65 BauO NRW)</li>
          <li>Baden-Württemberg: bis 40 m³ Brutto-Rauminhalt</li>
          <li>Brandenburg, Berlin: Einzelfallprüfung empfohlen</li>
        </ul>
      </SeoSection>

      <CtaBanner text="Container anfragen – wir beraten Sie zur Genehmigungsfrage" btnHref="/angebot" />

      <SeoSection title="Wohncontainer: Baugenehmigung erforderlich">
        <p>
          Sobald ein Container dauerhaft als Wohnraum oder Bürogebäude genutzt wird, gelten die gleichen Anforderungen wie für konventionelle Gebäude:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Baugenehmigung nach §64 Musterbauordnung (MBO) bzw. der jeweiligen Landesbauordnung</li>
          <li>Einhaltung des Gebäudeenergiegesetzes (GEG) – Dämmstandard, U-Wert-Anforderungen</li>
          <li>Mindestdeckenhöhe (2,40 m Lichtmaß im Wohnbereich) – Standard-Container erfüllen dies knapp, High Cube bequem</li>
          <li>Mindestfensterfläche (1/10 der Raumgrundfläche für natürliche Belichtung)</li>
          <li>Fundament unterhalb der Frosttiefe</li>
        </ul>
      </SeoSection>

      <SeoSection title="So stellen Sie einen Bauantrag">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Zuständiges Bauordnungsamt der Gemeinde kontaktieren und Voranfrage stellen</li>
          <li>Bauzeichnungen (Grundriss, Schnitt, Ansichten) durch einen Entwurfsverfasser erstellen lassen</li>
          <li>Baubeschreibung und Berechnungen (Wohnfläche, Energieausweis) beifügen</li>
          <li>Antrag einreichen – Bearbeitungszeit ca. 4–12 Wochen</li>
          <li>Mit Baugenehmigung kann die Aufstellung und ggf. Anschlussarbeiten beginnen</li>
        </ol>
      </SeoSection>

      <SeoSection title="Weiterführende Ratgeber">
        <p>Weitere Informationen für Ihr Container-Projekt:</p>
      </SeoSection>
      <InternalLinkGrid links={relatedLinks} />

      <SeoSection title="Häufige Fragen">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}