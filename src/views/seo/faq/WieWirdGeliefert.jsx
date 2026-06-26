"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, InternalLinkGrid, CtaBanner
} from "@/components/seo/SeoPageLayout";

const links = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Jetzt Container bestellen" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container", desc: "Lieferung in 72 h möglich" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container", desc: "Lieferung deutschlandweit" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Schnelle Lieferung & Aufstellung" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Halbtag-Aufstellung" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Starkstromanschluss beachten" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Vollständiger Lieferratgeber" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Aufstellvorbereitung" },
];

export default function WieWirdGeliefert() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "FAQ" }, { label: "Wie wird ein Seecontainer geliefert?" }]}
      label="FAQ"
      title="Wie wird ein Seecontainer geliefert? – Ablauf erklärt"
      intro="Von der Angebotsanfrage bis zur Aufstellung: So läuft die Lieferung eines Seecontainers ab, was Sie vorbereiten müssen und wie lange es dauert."
    >
      <SeoSection title="Schritt-für-Schritt: Container-Lieferung">
        <ol className="list-decimal pl-5 space-y-3 text-sm">
          <li>
            <strong className="text-foreground">Anfrage & Angebot:</strong> Sie stellen eine unverbindliche Anfrage mit Containertyp und Lieferadresse. Innerhalb von 24 Stunden erhalten Sie ein verbindliches Angebot inklusive Transportkosten.
          </li>
          <li>
            <strong className="text-foreground">Auftragsbestätigung:</strong> Nach Ihrer Bestätigung wird ein Liefertermin (typisch: 3–7 Werktage, Express 72 h) vereinbart.
          </li>
          <li>
            <strong className="text-foreground">Vorbereitung:</strong> Sie bereiten den Aufstellplatz vor – vier Auflagerpunkte (Betonsteine o. ä.) an den Eckpositionen des Containers, Zufahrt freihalten (3,5 m Breite, 4,5 m Höhe).
          </li>
          <li>
            <strong className="text-foreground">Anlieferung per LKW-Kran:</strong> Unser LKW mit integriertem Kran fährt zu Ihrem Standort. Der Kran hebt den Container an den vier ISO-Eckbeschlägen an und setzt ihn präzise auf die Auflagerpunkte ab. Dauer: ca. 30–60 Minuten.
          </li>
          <li>
            <strong className="text-foreground">Abnahme:</strong> Gemeinsame Sichtprüfung. Sie unterschreiben den Lieferschein. Bei Mängeln sofortige Dokumentation und Meldung an uns.
          </li>
        </ol>
      </SeoSection>

      <SeoSection title="Was müssen Sie vorbereiten?">
        <ul className="list-disc pl-5 space-y-1">
          <li>Zufahrt für LKW: mind. 3,5 m breit, 4,5 m hoch</li>
          <li>Stellfläche für LKW: 2–3 m seitlicher Abstand zum Abstellplatz für Kranausleger</li>
          <li>Vier Auflagerpunkte: je eine Betonplatte (50×50×10 cm) an den Eckpositionen</li>
          <li>Ansprechpartner vor Ort für Rückfragen und Abnahme</li>
          <li>Bei engen Verhältnissen: vorab Maße mitteilen, damit wir das passende Fahrzeug einsetzen</li>
        </ul>
      </SeoSection>

      <CtaBanner text="Jetzt Container bestellen – Lieferung in 72 Stunden" btnHref="/angebot" />

      <SeoSection title="Weiterführende Informationen">
        <p>Detaillierte Informationen zu Lieferung und Aufstellung:</p>
      </SeoSection>
      <InternalLinkGrid links={links} />
    </SeoPageLayout>
  );
}