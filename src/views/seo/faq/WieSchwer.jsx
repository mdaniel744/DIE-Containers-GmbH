"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, CtaBanner
} from "@/components/seo/SeoPageLayout";

const gewichtTable = {
  headers: ["Typ", "Eigengewicht", "Max. Zuladung"],
  rows: [
    ["10 Fuß Standard", "ca. 1.300 kg", "ca. 10.900 kg"],
    ["20 Fuß Standard", "ca. 2.200 kg", "ca. 21.700 kg"],
    ["40 Fuß Standard", "ca. 3.800 kg", "ca. 26.500 kg"],
    ["40 Fuß High Cube", "ca. 4.000 kg", "ca. 26.300 kg"],
    ["20 Fuß Kühlcontainer", "ca. 3.000 kg", "ca. 21.000 kg"],
  ],
};

const links = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "Eigengewicht ca. 2.200 kg" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Eigengewicht ca. 3.800 kg" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Schwerer durch Aggregat" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Nutzlast für Waren" },
  { href: "/container-gewicht", title: "Container Gewicht", desc: "Vollständige Gewichtstabellen" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrundtragfähigkeit" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport & Kranabsetzung" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Typen & Preise" },
];

export default function WieSchwer() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "FAQ" }, { label: "Wie schwer ist ein Seecontainer?" }]}
      label="FAQ"
      title="Wie schwer ist ein Seecontainer? – Gewicht & Zuladung"
      intro="Das Eigengewicht eines Seecontainers – auch Taragewicht genannt – variiert je nach Typ und Größe. Hier alle wichtigen Gewichtsangaben auf einen Blick."
    >
      <SeoSection title="Gewicht aller Container-Typen">
        <p>Seecontainer sind überraschend leicht für ihre Größe – Corten-Stahl ermöglicht eine hohe Tragfähigkeit bei geringem Eigengewicht:</p>
        <SeoTable headers={gewichtTable.headers} rows={gewichtTable.rows} />
      </SeoSection>

      <SeoSection title="Warum ist das Gewicht wichtig?">
        <p>
          <strong className="text-foreground">Untergrundplanung:</strong> Ein voll beladener 20-Fuß-Container übt ca. 6–7 t Last auf jeden der vier Eckbeschläge aus. Normaler Asphalt und Beton tragen das problemlos; weicher Untergrund nicht.
        </p>
        <p>
          <strong className="text-foreground">Transport:</strong> Das Taragewicht steht auf dem CSC-Schild am Container und auf dem Steuerbord-Türflügel. Es ist rechtsverbindlich für alle Transportvorgänge.
        </p>
        <p>
          <strong className="text-foreground">Gabelstapler-Kapazität:</strong> Ein leerer 20-Fuß-Container kann mit einem 4-t-Gabelstapler bewegt werden. Für 40-Fuß-Container sind mind. 5–6 t Hubkapazität erforderlich.
        </p>
      </SeoSection>

      <CtaBanner text="Container anfragen – kostenlose Beratung" btnHref="/angebot" />

      <SeoSection title="Weiterführende Informationen">
        <p>Alles zum Thema Container-Gewicht und Transport:</p>
      </SeoSection>
      <InternalLinkGrid links={links} />
    </SeoPageLayout>
  );
}