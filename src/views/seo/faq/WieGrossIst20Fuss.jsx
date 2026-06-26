"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, CtaBanner
} from "@/components/seo/SeoPageLayout";

const massTable = {
  headers: ["Merkmal", "Außenmaß", "Innenmaß"],
  rows: [
    ["Länge", "6.058 mm (ca. 6 m)", "5.898 mm"],
    ["Breite", "2.438 mm (ca. 2,4 m)", "2.352 mm"],
    ["Höhe Standard", "2.591 mm (ca. 2,6 m)", "2.393 mm"],
    ["Höhe High Cube", "2.896 mm (ca. 2,9 m)", "2.698 mm"],
    ["Türbreite", "–", "2.340 mm"],
    ["Türhöhe Standard", "–", "2.280 mm"],
    ["Ladevolumen Standard", "–", "ca. 33 m³"],
  ],
};

const links = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Preise ab 1.990 €" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Doppelter Stauraum" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "20 Fuß als Lager nutzen" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "20 Fuß als Büro" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "20 Fuß als Wohnraum" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Typen & Größen verglichen" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Übersicht & Kauftipps" },
];

export default function WieGrossIst20Fuss() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "FAQ" }, { label: "Wie groß ist ein 20 Fuß Container?" }]}
      label="FAQ"
      title="Wie groß ist ein 20 Fuß Container? – Genaue Maße 2024"
      intro="Genaue Außen- und Innenmaße eines 20 Fuß Seecontainers – Standard und High Cube – inklusive Türöffnungsmaßen und Ladevolumen."
    >
      <SeoSection title="Maße eines 20 Fuß Containers">
        <p>Ein 20 Fuß Container (auch 20' ISO-Container oder TEU) hat weltweit einheitliche Maße nach ISO 668:</p>
        <SeoTable headers={massTable.headers} rows={massTable.rows} />
      </SeoSection>

      <SeoSection title="Was passt hinein?">
        <p>Mit 33 m³ Ladevolumen passt in einen 20 Fuß Container:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>10–11 Europaletten (1.200 × 800 mm) nebeneinander</li>
          <li>Der komplette Inhalt einer 3–4-Zimmer-Wohnung</li>
          <li>2 Pkw nebeneinander (je nach Fahrzeugbreite)</li>
          <li>Ca. 25 t Schüttgut bei maximaler Ausnutzung</li>
        </ul>
      </SeoSection>

      <CtaBanner text="20 Fuß Container anfragen – Lieferung in 72 Stunden" btnHref="/angebot" />

      <SeoSection title="Weiterführende Informationen">
        <p>Mehr zu Container-Maßen und Typen:</p>
      </SeoSection>
      <InternalLinkGrid links={links} />
    </SeoPageLayout>
  );
}