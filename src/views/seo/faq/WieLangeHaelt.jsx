"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, InternalLinkGrid, CtaBanner
} from "@/components/seo/SeoPageLayout";

const links = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Kaufberatung & Tipps" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Langlebige Lagerlösung" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Dauerhaftes Wohnen" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Büro für Jahrzehnte" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Aggregatlebensdauer beachten" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "Hält 25–50 Jahre" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Hält 25–50 Jahre" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preisübersicht & Instandhaltung" },
];

export default function WieLangeHaelt() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "FAQ" }, { label: "Wie lange hält ein Seecontainer?" }]}
      label="FAQ"
      title="Wie lange hält ein Seecontainer? – Lebensdauer & Pflege"
      intro="Seecontainer aus Corten-Stahl sind für Jahrzehnte ausgelegt. Wie lange ein Container tatsächlich hält und wie Sie die Lebensdauer maximieren, erfahren Sie hier."
    >
      <SeoSection title="Lebensdauer: 25–50 Jahre und mehr">
        <p>
          Ein Seecontainer aus Corten-Stahl (wetterfester Baustahl nach EN 10025-5) hat eine theoretische Nutzungsdauer von <strong className="text-foreground">25–50 Jahren</strong> – bei sachgemäßer Aufstellung und regelmäßiger Pflege. Im aktiven Seefrachtverkehr werden Container typischerweise 10–15 Jahre betrieben, bevor sie aussortiert werden. Diese „Gebrauchtcontainer" haben noch eine lange Restnutzungsdauer vor sich.
        </p>
        <p>
          Die natürliche Rostschutzschicht des Corten-Stahls (Patina) schützt den Stahl vor weiterer Korrosion, ohne dass Farbanstriche nötig wären. Dennoch empfiehlt sich eine regelmäßige Sichtprüfung und gegebenenfalls Ausbesserung von Kratzern und Schlagstellen.
        </p>
      </SeoSection>

      <SeoSection title="Was beeinflusst die Lebensdauer?">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-foreground">Aufstellort:</strong> Küstennahe Lagen (Salzluft) und chemisch belastete Industriegebiete können die Korrosion beschleunigen. Regelmäßige Inspektion wichtiger.
          </li>
          <li>
            <strong className="text-foreground">Untergrund:</strong> Direkter Erdkontakt fördert Korrosion am Containerboden. Gutes Fundament verlängert die Lebensdauer erheblich.
          </li>
          <li>
            <strong className="text-foreground">Dach:</strong> Stehende Wasserlachen auf dem Dach können zum Durchrosten führen. Regelmäßig prüfen und bei Bedarf abdichten.
          </li>
          <li>
            <strong className="text-foreground">Türdichtungen:</strong> Alle 5–10 Jahre erneuern, damit die Wasserdichtheit erhalten bleibt.
          </li>
          <li>
            <strong className="text-foreground">Mechanische Schäden:</strong> Beulen und Kratzer sofort mit Container-Rostschutzfarbe ausbessern, bevor Rost eindringt.
          </li>
        </ul>
      </SeoSection>

      <SeoSection title="Pflegetipps für maximale Lebensdauer">
        <ol className="list-decimal pl-5 space-y-1 text-sm">
          <li>Jährliche Sichtprüfung aller Außenwände, Dach und Boden</li>
          <li>Kratzer und Schlagstellen mit Container-Farbe (RAL-Farbe + Rostschutzgrundierung) ausbessern</li>
          <li>Türdichtungen auf Risse prüfen und bei Bedarf tauschen (alle 5–7 Jahre)</li>
          <li>Dach auf Wasseransammlungen kontrollieren und ggf. Entwässerungsgefälle schaffen</li>
          <li>Holzboden alle 3–5 Jahre mit Holzschutzöl behandeln (bei genehmigter Dauernutzung)</li>
        </ol>
      </SeoSection>

      <CtaBanner text="Container kaufen – mit Qualitätsgarantie von CSAV" btnHref="/angebot" />

      <SeoSection title="Weiterführende Informationen">
        <p>Mehr zu Container-Typen und Kauf:</p>
      </SeoSection>
      <InternalLinkGrid links={links} />
    </SeoPageLayout>
  );
}