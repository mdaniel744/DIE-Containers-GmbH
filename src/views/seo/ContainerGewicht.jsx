"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";

const gewichtTable = {
  headers: ["Typ", "Eigengewicht (Tara)", "Max. Zuladung (Payload)", "Gesamtgewicht (MGW)"],
  rows: [
    ["10 Fuß Standard", "ca. 1.300 kg", "ca. 10.900 kg", "12.200 kg"],
    ["20 Fuß Standard", "ca. 2.200 kg", "ca. 21.700 kg", "24.000 kg"],
    ["20 Fuß High Cube", "ca. 2.350 kg", "ca. 21.650 kg", "24.000 kg"],
    ["40 Fuß Standard", "ca. 3.800 kg", "ca. 26.500 kg", "30.480 kg"],
    ["40 Fuß High Cube", "ca. 4.000 kg", "ca. 26.300 kg", "30.480 kg"],
    ["20 Fuß Kühlcontainer", "ca. 3.000 kg", "ca. 21.000 kg", "24.000 kg"],
    ["40 Fuß Kühlcontainer", "ca. 4.800 kg", "ca. 25.600 kg", "30.480 kg"],
  ],
};

const faqs = [
  { q: "Wie schwer ist ein Seecontainer?", a: "Ein leerer 20 Fuß Standardcontainer wiegt ca. 2.200 kg. Ein 40 Fuß Container ca. 3.800 kg. Kühlcontainer sind durch das Aggregat schwerer (ca. 3.000 bzw. 4.800 kg)." },
  { q: "Wie schwer ist ein 20 Fuß Container leer?", a: "Das Eigengewicht (Tara) eines 20 Fuß Standardcontainers beträgt ca. 2.200 kg (2,2 t)." },
  { q: "Was bedeutet MGW bei Containern?", a: "MGW steht für Maximum Gross Weight – das zulässige Gesamtgewicht inklusive Container und Ladung. Für 20 Fuß Container beträgt das MGW 24.000 kg, für 40 Fuß 30.480 kg." },
  { q: "Kann mein Untergrund das Gewicht tragen?", a: "Die Aufstandskräfte verteilen sich auf vier Eckbeschläge à ca. 8–10 t (bei 20 Fuß, beladen). Normaler Asphalt, Beton und verdichteter Schotter tragen diese Lasten problemlos. Weiches Erdreich kann einsinken." },
  { q: "Wie wird ein Container transportiert?", a: "Per LKW-Kran (Reach-Stacker oder Hafenmobilkran für große Mengen). Der Kran hebt den Container an den vier ISO-Eckbeschlägen an. Gewicht und Zufahrt bestimmen die Krankapazität." },
];

const relatedLinks = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Gewicht: ~2.200 kg leer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Gewicht: ~3.800 kg leer" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Schwerer durch Aggregat" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Nutzlast für Ihre Waren" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Gewicht für Statik" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Gewicht & Fundament" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport & Kranaufstellung" },
  { href: "/container-masse", title: "Container Maße", desc: "Abmessungen im Überblick" },
  { href: "/seecontainer-kaufen", title: "Alle Seecontainer", desc: "Typen & Preise" },
];

export default function ContainerGewicht() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "Ratgeber" }, { label: "Container Gewicht" }]}
      label="Ratgeber"
      title="Container Gewicht – Eigengewicht & Zuladung aller Typen"
      intro="Wie schwer ist ein Seecontainer? Eigengewicht, maximale Zuladung und Gesamtgewicht für alle Container-Typen – wichtig für Transport, Untergrundplanung und statische Berechnungen."
    >
      <SeoSection title="Container Gewicht Übersicht">
        <p>Die Gewichte variieren nach Typ, Größe und Ausstattung. Alle Angaben sind Richtwerte; das genaue Taragewicht steht auf dem CSC-Schild des jeweiligen Containers:</p>
        <SeoTable headers={gewichtTable.headers} rows={gewichtTable.rows} />
      </SeoSection>

      <CtaBanner text="Container anfragen – mit Gewichtsangabe im Angebot" btnHref="/angebot" />

      <SeoSection title="Warum ist das Gewicht wichtig?">
        <p>
          <strong className="text-foreground">Untergrundplanung:</strong> Jeder Aufstandspunkt (Eckbeschlag) eines voll beladenen 20-Fuß-Containers trägt ca. 6–7 t. Weicher Untergrund (Gartenerde, Sand) kann unter dieser Last einsinken und den Container schief stellen. Empfehlung: Betonplatten oder Fundamentstreifen von mind. 20 cm Stärke.
        </p>
        <p>
          <strong className="text-foreground">Transportplanung:</strong> LKW-Krane haben Hebekapazitäten von typischerweise 10–30 t. Ein leerer 40-Fuß-Container wiegt ca. 3,8 t – kein Problem für alle gängigen Kranfahrzeuge. Beladen kann jedoch eine Genehmigung für Schwertransport erforderlich werden.
        </p>
        <p>
          <strong className="text-foreground">Statische Berechnungen:</strong> Für Büro- und Wohncontainer auf Fundamenten benötigen Statiker das genaue Taragewicht des Containers plus die geplante Zuladung (Möbel, Technik, Personen).
        </p>
      </SeoSection>

      <SeoSection title="Wo finde ich das genaue Gewicht meines Containers?">
        <p>
          Das exakte Taragewicht steht auf dem <strong className="text-foreground">CSC-Schild</strong> (Convention for Safe Containers), das am Container angebracht ist. Zusätzlich ist es auf dem Steuerbord-Türflügel aufgestempelt. Diese Angabe ist rechtsverbindlich für Transport und Zollabfertigung.
        </p>
      </SeoSection>

      <SeoSection title="Weiterführende Ratgeber">
        <p>Weitere wichtige Informationen für Ihren Container:</p>
      </SeoSection>
      <InternalLinkGrid links={relatedLinks} />

      <SeoSection title="Häufige Fragen">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}