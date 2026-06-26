"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, CtaBanner
} from "@/components/seo/SeoPageLayout";

const priceTable = {
  headers: ["Container-Typ", "Zustand", "Preis ab"],
  rows: [
    ["10 Fuß Standard", "Gebraucht", "1.290 €"],
    ["20 Fuß Standard", "Gebraucht", "1.990 €"],
    ["20 Fuß Standard", "Neu", "2.490 €"],
    ["40 Fuß Standard", "Gebraucht", "2.990 €"],
    ["40 Fuß High Cube", "Gebraucht", "3.490 €"],
    ["20 Fuß Bürocontainer", "Ausgebaut", "5.900 €"],
    ["20 Fuß Kühlcontainer", "Gebraucht", "4.900 €"],
  ],
};

const links = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Kaufberater & alle Typen" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "Ab 1.990 € – meistgekauft" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Ab 2.990 € – größter Stauraum" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Günstigste Lagerlösung" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Bürocontainer ab 3.900 €" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Wohnkosten kalkulieren" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Reefer-Preise" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Vollständige Kostenübersicht" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Was kostet der Transport?" },
];

export default function WasKostetSeecontainer() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "FAQ" }, { label: "Was kostet ein Seecontainer?" }]}
      label="FAQ"
      title="Was kostet ein Seecontainer? – Aktuelle Preise 2024"
      intro="Aktuelle Preise für Seecontainer in Deutschland: Kaufpreise nach Typ und Zustand, Transportkosten und Gesamtkostenrechnung auf einen Blick."
    >
      <SeoSection title="Aktuelle Seecontainer-Preise 2024">
        <p>Die Preise für Seecontainer variieren stark je nach Größe, Zustand und Typ. Gebrauchte Container sind deutlich günstiger als neue, bieten aber nach professioneller Aufbereitung nahezu die gleiche Qualität:</p>
        <SeoTable headers={priceTable.headers} rows={priceTable.rows} />
      </SeoSection>

      <SeoSection title="Hinzu kommen: Transportkosten">
        <p>
          Die Lieferung ist nicht im Kaufpreis enthalten und wird separat berechnet. Richtwerte:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Bis 50 km: ca. 250–400 €</li>
          <li>50–150 km: ca. 400–650 €</li>
          <li>150–300 km: ca. 650–900 €</li>
        </ul>
        <p>Gesamtkosten für einen 20 Fuß Gebrauchtcontainer inkl. Lieferung (100 km): ca. 2.300–2.600 €.</p>
      </SeoSection>

      <CtaBanner text="Jetzt Preisangebot anfordern – kostenlos & unverbindlich" btnHref="/angebot" />

      <SeoSection title="Wovon hängt der Preis ab?">
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-foreground">Größe:</strong> 10 Fuß, 20 Fuß, 40 Fuß</li>
          <li><strong className="text-foreground">Zustand:</strong> Neu, Gebraucht (Cargo-Worthy), Generalüberholt</li>
          <li><strong className="text-foreground">Typ:</strong> Standard, High Cube, Kühl, Büro, Open Side</li>
          <li><strong className="text-foreground">Marktlage:</strong> Containerpreise schwanken je nach globalem Schiffsfrachtmarkt</li>
        </ul>
      </SeoSection>

      <SeoSection title="Weiterführende Informationen">
        <p>Mehr zu Container-Kosten und Kauf:</p>
      </SeoSection>
      <InternalLinkGrid links={links} />
    </SeoPageLayout>
  );
}