"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, CtaBanner
} from "@/components/seo/SeoPageLayout";

const groeTable = {
  headers: ["Größe", "Außenlänge", "Außenhöhe Standard", "Außenhöhe HC", "Volumen Standard"],
  rows: [
    ["10 Fuß", "2.991 mm (~3 m)", "2.591 mm", "N/A", "ca. 16 m³"],
    ["20 Fuß", "6.058 mm (~6 m)", "2.591 mm", "2.896 mm", "ca. 33 m³"],
    ["40 Fuß", "12.192 mm (~12 m)", "2.591 mm", "2.896 mm", "ca. 67 m³"],
    ["45 Fuß (HC)", "13.716 mm (~14 m)", "N/A", "2.896 mm", "ca. 86 m³"],
  ],
};

const links = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Alle Typen & Kaufberatung" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "33 m³ – meistgekauft" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "67 m³ – doppelter Stauraum" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Welche Größe brauche ich?" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "40 HC für Wohnprojekte" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "20 Fuß als Büromodul" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "20 & 40 Fuß Reefer" },
  { href: "/container-masse", title: "Container Maße", desc: "Genaue Abmessungen aller Typen" },
];

export default function ContainerGroessen() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "FAQ" }, { label: "Welche Containergrößen gibt es?" }]}
      label="FAQ"
      title="Welche Seecontainer Größen gibt es? – Übersicht 2024"
      intro="ISO-Seecontainer gibt es in drei Standardgrößen: 10, 20 und 40 Fuß – jeweils in Standard und High Cube. Hier ein vollständiger Überblick aller Containergrößen mit Maßen."
    >
      <SeoSection title="Alle Seecontainer Größen im Überblick">
        <SeoTable headers={groeTable.headers} rows={groeTable.rows} />
        <p>Alle Breiten sind einheitlich 2.438 mm (8 Fuß) – die ISO-Normbreite für Seecontainer.</p>
      </SeoSection>

      <SeoSection title="Die wichtigsten Containergrößen erklärt">
        <p>
          <strong className="text-foreground">10 Fuß Container:</strong> Kompaktes Format für kleine Gärten, enge Betriebshöfe oder als Ergänzung zu größeren Containern. Ideal für Werkzeuge, Archivgut oder Saisonartikel.
        </p>
        <p>
          <strong className="text-foreground">20 Fuß Container (TEU):</strong> Die weltweit häufigste Einheit. Ideal für gewerbliche Lagerzwecke, Umzüge und kleine Ausbauprojekte. Beste Preis-Leistungs-Verfügbarkeit.
        </p>
        <p>
          <strong className="text-foreground">40 Fuß Container (FEU):</strong> Doppelter Stauraum bei vergleichsweise geringem Mehrpreis. Beliebt für großvolumige Güter, Wohn- und Büroprojekte sowie als Kombilösung.
        </p>
        <p>
          <strong className="text-foreground">High Cube (HC):</strong> Steht als Variante für 20- und 40-Fuß-Container zur Verfügung. Bietet 30 cm mehr Innenhöhe (2,70 m vs. 2,39 m) – empfehlenswert für Ausbauprojekte.
        </p>
      </SeoSection>

      <CtaBanner text="Container in der richtigen Größe anfragen" btnHref="/angebot" />

      <SeoSection title="Weiterführende Informationen">
        <p>Detaillierte Maßangaben und Kaufberatung:</p>
      </SeoSection>
      <InternalLinkGrid links={links} />
    </SeoPageLayout>
  );
}