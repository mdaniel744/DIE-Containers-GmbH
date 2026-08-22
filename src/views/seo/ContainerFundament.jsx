"use client";
import React from "react";
import {
  SeoPageLayout, SeoSection, SeoTable, InternalLinkGrid, FaqAccordion, CtaBanner
} from "@/components/seo/SeoPageLayout";
import MediaImage from "@/components/shared/MediaImage";

const fundamentTable = {
  headers: ["Fundamenttyp", "Aufwand", "Kosten", "Geeignet für"],
  rows: [
    ["4 Betonsteine (DIY)", "½ Stunde", "ca. 40–80 €", "Temporäre Aufstellung, Lager"],
    ["Schotterplanum", "1–2 Tage", "ca. 500–1.500 €", "Lager, gewerblich"],
    ["Betonstreifen (2 Läufer)", "1–3 Tage", "ca. 800–2.500 €", "Lager, Büro, dauerhaft"],
    ["Streifenfundament tief", "2–5 Tage", "ca. 2.000–5.000 €", "Wohncontainer, baulich"],
    ["Schraubfundamente", "½ Tag", "ca. 800–2.000 €", "Hanglagen, schlechter Baugrund"],
    ["Punktfundamente (Beton)", "1–2 Tage", "ca. 600–1.800 €", "Alle Typen"],
  ],
};

const foundationExamples = [
  {
    image: "/images/container-fundament/betonplatten-eckauflager.webp",
    alt: "Eckbeschlag eines Seecontainers auf Beton-Ausgleichsplatten",
    tag: "Eckauflager",
    title: "Betonplatten unter den Eckbeschlägen",
    description:
      "Robuste Ausgleichsplatten werden exakt unter den vier ISO-Eckbeschlägen positioniert und auf eine gemeinsame Höhe gebracht.",
  },
  {
    image: "/images/container-fundament/betonflaeche-containeranlage.jpg",
    alt: "Containeranlage auf einer tragfähigen Betonfläche",
    tag: "Dauerhafte Lösung",
    title: "Betonfläche für Containeranlagen",
    description:
      "Eine ebene, tragfähige Betonfläche eignet sich besonders für dauerhaft genutzte, gekoppelte oder übereinander aufgestellte Container.",
  },
  {
    image: "/images/container-fundament/holzauflager-provisorisch.webp",
    alt: "Seecontainer auf provisorischen Holzauflagerbalken",
    tag: "Nur kurzfristig",
    title: "Holzauflager als provisorische Lösung",
    description:
      "Kanthölzer können kurzfristig als Auflager dienen. Für eine dauerhafte Aufstellung sind formstabile und witterungsbeständige Fundamentlösungen vorzuziehen.",
  },
  {
    image: "/images/container-fundament/vorbereitete-betonplatte.webp",
    alt: "Vorbereitete Betonplatte vor dem Aufstellen eines Seecontainers",
    tag: "Vorbereitet",
    title: "Betonplatte vor der Containerlieferung",
    description:
      "Eine vorab nivellierte und ausreichend dimensionierte Betonplatte schafft eine belastbare Fläche für das sichere Absetzen des Containers.",
  },
];

const faqs = [
  { q: "Brauche ich ein Fundament für einen Container?", a: "Nicht zwingend für temporäre Aufstellung. Für dauerhaften Einsatz empfehlen wir dringend ein Fundament, um Einsinken, Schiefstellung und Rostbildung durch Bodenfeuchtigkeit zu verhindern." },
  { q: "Was ist das günstigste Fundament für einen Lagercontainer?", a: "4 Betonpflastersteine (50×50×10 cm, ca. 10 € pro Stück) unter den vier Eckbeschlägen sind die günstigste Lösung für unkritische Böden. Gesamtkosten ca. 40–80 €." },
  { q: "Welches Fundament für einen Wohncontainer?", a: "Für dauerhaft bewohnte Container ist ein Streifenfundament unterhalb der Frosttiefe (70–120 cm je nach Region) vorgeschrieben. Dies verhindert Frostverschiebungen und ist meist Bedingung für die Baugenehmigung." },
  { q: "Muss das Fundament genehmigt werden?", a: "Schotterplatten und provisorische Aufstellungen meist nicht. Für Streifenfundamente im Zusammenhang mit genehmigungspflichtigen Bauvorhaben (Wohn-/Bürocontainer) ist das Fundament Teil des Baugenehmigungsantrags." },
  { q: "Kann ich einen Container auf Gras oder Erde abstellen?", a: "Kurzfristig ja, aber nicht empfohlen. Weicher Untergrund kann einsinken und den Container schief stellen. Feuchtigkeit von unten fördert Korrosion am Boden. Mindestens Schotter-Planierung empfohlen." },
];

const relatedLinks = [
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Einfachste Aufstelloptionen" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Fundament für Bürocontainer" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Tieffundament erforderlich" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Eckmaße für Fundament" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Eckmaße für Fundament" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Schwerer – Fundament wichtig" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliche Anforderungen" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf der Lieferung" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Fundamentkosten einplanen" },
];

export default function ContainerFundament() {
  return (
    <SeoPageLayout
      breadcrumb={[{ label: "Ratgeber" }, { label: "Container Fundament" }]}
      label="Ratgeber"
      title="Container Fundament – Welches Fundament für Seecontainer?"
      intro="Fundament für Container: Welche Fundamenttypen gibt es, was kosten sie, und welches Fundament ist für Lager-, Büro- oder Wohncontainer am besten geeignet? Vollständiger Ratgeber."
    >
      <SeoSection title="Warum ist ein Fundament wichtig?">
        <p>
          Ein Container steht auf vier ISO-Eckbeschlägen – die Mitte des Bodens liegt frei. Ohne tragfähigen Untergrund kann es zu Einsinken der Aufstandspunkte kommen, was den Container schief stellt und auf Dauer die Türen verklemmt und den Boden verzieht. Zusätzlich führt direkter Bodenkontakt zu Feuchtigkeit von unten, was Korrosion am Containerboden begünstigt.
        </p>
        <p>
          Ein gutes Fundament verlängert die Nutzungsdauer des Containers erheblich, vereinfacht die Aufstellung und ist bei genehmigungspflichtiger Nutzung (Wohnen, Büro) ohnehin behördlich vorgeschrieben.
        </p>
      </SeoSection>

      <SeoSection title="Beispiele für vorbereitete Aufstellflächen">
        <p>
          Welche Vorbereitung geeignet ist, hängt von Containergröße, Gesamtgewicht, Nutzungsdauer und Bodenbeschaffenheit ab. Die folgenden Beispiele zeigen typische Lösungen für unterschiedliche Anforderungen.
        </p>
        <div className="not-prose mt-7 grid gap-6 md:grid-cols-2">
          {foundationExamples.map((example) => (
            <figure
              key={example.title}
              className="group overflow-hidden rounded-[1.75rem] border border-border bg-white shadow-[0_18px_45px_-32px_rgba(13,42,18,0.35)]"
            >
              <div className="overflow-hidden bg-[#EAF6EB]">
                <MediaImage
                  src={example.image}
                  alt={example.alt}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] sm:h-72"
                  width={1600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={82}
                />
              </div>
              <figcaption className="p-6">
                <span className="inline-flex rounded-full bg-[#DDF4DF] px-3 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#176B20]">
                  {example.tag}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold leading-tight text-foreground">
                  {example.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {example.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="rounded-2xl border border-[#BEE6C1] bg-[#F1FAF2] px-5 py-4 text-sm leading-7 text-[#34533A]">
          Vor einer dauerhaften oder genehmigungspflichtigen Aufstellung sollten Tragfähigkeit, Entwässerung, Frosttiefe und die erforderliche Fundamentausführung fachlich geprüft werden.
        </p>
      </SeoSection>

      <SeoSection title="Fundamenttypen im Vergleich">
        <SeoTable headers={fundamentTable.headers} rows={fundamentTable.rows} />
      </SeoSection>

      <CtaBanner text="Container bestellen – wir beraten Sie zur Aufstellung" btnHref="/angebot" />

      <SeoSection title="Schritt-für-Schritt: Fundament für Lagercontainer">
        <ol className="list-decimal pl-5 space-y-2 text-sm">
          <li><strong className="text-foreground">Standort abstecken:</strong> Markieren Sie die vier Eckpositionen des Containers (20 Fuß: 6.058 × 2.438 mm; 40 Fuß: 12.192 × 2.438 mm).</li>
          <li><strong className="text-foreground">Untergrund prüfen:</strong> Handgrabung von 30 cm Tiefe – wenn der Boden nach 10 cm fest wird, reicht eine Schotteraufbettung. Bei Lehm oder Ton tieferes Fundament notwendig.</li>
          <li><strong className="text-foreground">Auflagerpunkte vorbereiten:</strong> Je Eckpunkt eine Betonplatte (mind. 50×50×10 cm) eingraben und waagerecht ausrichten. Wasserwaage verwenden.</li>
          <li><strong className="text-foreground">Alle vier Punkte auf gleiche Höhe bringen:</strong> Abweichung von max. ±5 mm empfohlen. Container kann später mit Unterlegscheiben nachjustiert werden.</li>
          <li><strong className="text-foreground">Container absetzen:</strong> Kran setzt Container präzise auf die vier Punkte. Türen auf Leichtgängigkeit prüfen.</li>
        </ol>
      </SeoSection>

      <SeoSection title="Frosttiefe beachten">
        <p>
          In Deutschland liegt die Frosttiefe je nach Region zwischen 60 cm (Norddeutschland) und 120 cm (Alpenvorland). Für Wohn- und Bürocontainer mit Baugenehmigung muss das Fundament unterhalb der lokalen Frosttiefe gegründet werden, um Frostverschiebungen zu vermeiden. Ihr Bauordnungsamt gibt Auskunft über die regional geltenden Werte.
        </p>
      </SeoSection>

      <SeoSection title="Weiterführende Ratgeber">
        <p>Alles rund um die Aufstellung Ihres Containers:</p>
      </SeoSection>
      <InternalLinkGrid links={relatedLinks} />

      <SeoSection title="Häufige Fragen">
        <FaqAccordion items={faqs} />
      </SeoSection>
    </SeoPageLayout>
  );
}
