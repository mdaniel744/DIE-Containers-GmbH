"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Package, Maximize } from "lucide-react";
import { ContainerSVG } from "@/components/seo/ContainerDiagram";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Helpers â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* â”€â”€ Container size card with SVG + specs â”€â”€ */
function SizeCard({ title, svgProps, specs, note }) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden mb-8">
      <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
        <h3 className="font-heading font-bold text-sm text-foreground">{title}</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* SVG diagram */}
        <div className="p-6 flex items-center justify-center bg-muted/20 border-b lg:border-b-0 lg:border-r border-border">
          <div className="w-full max-w-sm">
            <ContainerSVG {...svgProps} />
          </div>
        </div>
        {/* Specs table */}
        <div className="p-5">
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <tbody>
                {specs.map((row, i) => (
                  <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-4 py-2.5 font-heading font-semibold text-foreground text-xs">{row[0]}</td>
                    <td className="px-4 py-2.5 text-muted-foreground text-right">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {note && <p className="text-xs text-muted-foreground leading-relaxed mt-3">{note}</p>}
        </div>
      </div>
    </div>
  );
}

/* â”€â”€ Specs data â”€â”€ */
const SPECS_10FT = [
  ["Außenlänge", "ca. 2,99 m"],
  ["Außenbreite", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,59 m"],
  ["Innenlänge", "ca. 2,83 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,39 m"],
  ["Volumen", "ca. 15–16 m³"],
  ["Eigengewicht", "ca. 1.200–1.500 kg"],
];

const SPECS_20FT = [
  ["Außenlänge", "ca. 6,06 m"],
  ["Außenbreite", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,59 m"],
  ["Innenlänge", "ca. 5,90 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,39 m"],
  ["Volumen", "ca. 33 m³"],
  ["Eigengewicht", "ca. 2.200–2.400 kg"],
  ["Türöffnung Breite", "ca. 2,34 m"],
  ["Türöffnung Höhe", "ca. 2,28 m"],
];

const SPECS_40FT = [
  ["Außenlänge", "ca. 12,19 m"],
  ["Außenbreite", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,59 m"],
  ["Innenlänge", "ca. 12,03 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,39 m"],
  ["Volumen", "ca. 67 m³"],
  ["Eigengewicht", "ca. 3.700–4.000 kg"],
  ["Türöffnung Breite", "ca. 2,34 m"],
  ["Türöffnung Höhe", "ca. 2,28 m"],
];

const SPECS_10HC = [
  ["Außenlänge", "ca. 2,99 m"],
  ["Außenbreite", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,90 m"],
  ["Innenlänge", "ca. 2,83 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,69 m"],
  ["Volumen", "ca. 17 m³"],
  ["Eigengewicht", "ca. 1.300–1.600 kg"],
  ["Türöffnung Höhe", "ca. 2,58 m"],
];

const SPECS_20HC = [
  ["Außenlänge", "ca. 6,06 m"],
  ["Außenbreite", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,90 m"],
  ["Innenlänge", "ca. 5,90 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,69 m"],
  ["Volumen", "ca. 37 m³"],
  ["Eigengewicht", "ca. 2.300–2.500 kg"],
  ["Türöffnung Breite", "ca. 2,34 m"],
  ["Türöffnung Höhe", "ca. 2,58 m"],
];

const SPECS_40HC = [
  ["Außenlänge", "ca. 12,19 m"],
  ["Außenbreite", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,90 m"],
  ["Innenlänge", "ca. 12,03 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,69 m"],
  ["Volumen", "ca. 76 m³"],
  ["Eigengewicht", "ca. 3.900–4.200 kg"],
  ["Türöffnung Höhe", "ca. 2,58 m"],
];

/* â”€â”€ Size comparison overview â”€â”€ */
const SIZE_OVERVIEW = [
  { size: "10 Fuß", length: "2,99 m", width: "2,44 m", height: "2,59 m", volume: "ca. 16 m³", weight: "ca. 1.350 kg" },
  { size: "10 Fuß HC", length: "2,99 m", width: "2,44 m", height: "2,90 m", volume: "ca. 17 m³", weight: "ca. 1.450 kg" },
  { size: "20 Fuß", length: "6,06 m", width: "2,44 m", height: "2,59 m", volume: "ca. 33 m³", weight: "ca. 2.300 kg" },
  { size: "20 Fuß HC", length: "6,06 m", width: "2,44 m", height: "2,90 m", volume: "ca. 37 m³", weight: "ca. 2.400 kg" },
  { size: "40 Fuß", length: "12,19 m", width: "2,44 m", height: "2,59 m", volume: "ca. 67 m³", weight: "ca. 3.850 kg" },
  { size: "40 Fuß HC", length: "12,19 m", width: "2,44 m", height: "2,90 m", volume: "ca. 76 m³", weight: "ca. 4.050 kg" },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Welche Maße hat ein 20 Fuß Container?", a: "Ein 20 Fuß Container hat typischerweise Außenmaße von ca. 6,06 m Länge, 2,44 m Breite und 2,59 m Höhe. Die Innenmaße liegen ungefähr bei 5,90 m Länge, 2,35 m Breite und 2,39 m Höhe." },
  { q: "Welche Maße hat ein 40 Fuß Container?", a: "Ein 40 Fuß Container hat typischerweise Außenmaße von ca. 12,19 m Länge, 2,44 m Breite und 2,59 m Höhe. Die Innenmaße liegen ungefähr bei 12,03 m Länge, 2,35 m Breite und 2,39 m Höhe." },
  { q: "Was sind High Cube Container Maße?", a: "Ein 40 Fuß High Cube Container hat etwa die gleiche Länge und Breite wie ein Standard 40 Fuß Container, ist aber höher. Die Außenhöhe beträgt ca. 2,90 m, die Innenhöhe ca. 2,69 m." },
  { q: "Welche Containergröße ist am beliebtesten?", a: "Der 20 Fuß Container gehört zu den beliebtesten Größen, weil er vielseitig einsetzbar ist und ein gutes Verhältnis zwischen Stauraum und Stellfläche bietet." },
  { q: "Welche Maße sind für die Lieferung wichtig?", a: "Für die Lieferung sind vor allem Außenlänge, Außenbreite, Außenhöhe, Gesamtgewicht, Zufahrt und Rangierfläche wichtig. Besonders bei 40 Fuß Containern sollte die Entladung vorab gut geplant werden." },
  { q: "Welche Maße sind für Lagerung wichtig?", a: "Für Lagerung sind Innenlänge, Innenbreite, Innenhöhe, Türöffnung und Volumen entscheidend. Diese Werte zeigen, wie viel nutzbarer Raum tatsächlich verfügbar ist." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Maße und Preise" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maße und Preise" },
  { href: "/container-gewicht", title: "Container Gewicht", desc: "Eigengewicht und Nutzlast" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preise und Kostenfaktoren" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transport und Aufstellung" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund und Aufstellung" },
];

export default function ContainerMasse() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">

      {/* Schema.org FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />

      {/* â”€â”€ Hero â”€â”€ */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Container Maße</span>
          </nav>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Container Maße – alle wichtigen Größen im Überblick
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Container Maße im Überblick – 10 Fuß, 20 Fuß, 40 Fuß und High Cube Container mit Außenmaßen, Innenmaßen, Volumen, Gewicht und Türöffnungen vergleichen.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              Container Katalog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Intro â”€â”€ */}
        <section className="mb-14">
          <SH>Container Maße richtig vergleichen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wer einen Container kaufen möchte, sollte die passenden <strong className="text-foreground">Container Maße</strong> genau kennen. Die Größe entscheidet nicht nur darüber, wie viel Platz im Inneren zur Verfügung steht, sondern auch darüber, ob der Container am gewünschten Standort aufgestellt, transportiert und sinnvoll genutzt werden kann. Besonders häufig werden 10 Fuß, 20 Fuß und 40 Fuß Container nachgefragt. Zusätzlich gibt es High Cube Container, die durch ihre größere Höhe mehr Innenvolumen bieten.
            </p>
            <p>
              Die wichtigsten Angaben sind Außenmaße, Innenmaße, Türöffnung, Eigengewicht und Ladevolumen. Die Außenmaße sind entscheidend für Transport und Aufstellung. Die Innenmaße zeigen, wie viel nutzbarer Raum tatsächlich zur Verfügung steht. Türöffnung und Innenhöhe sind besonders wichtig, wenn sperrige Güter, Maschinen, Paletten oder Regalsysteme eingelagert werden sollen.
            </p>
            <p>
              Wenn Sie noch nicht sicher sind, welcher Container zu Ihrem Projekt passt, können Sie zuerst die Seite <IL to="/container-kaufen">Container kaufen</IL> besuchen. Dort erhalten Sie einen Überblick über verschiedene Containerarten und Einsatzbereiche.
            </p>
          </div>
        </section>

        {/* â”€â”€ Overview table â”€â”€ */}
        <section className="mb-14">
          <SH>Container Maße auf einen Blick</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die folgende Übersicht zeigt die wichtigsten Außenmaße, das Volumen und das Eigengewicht aller gängigen Containergrößen im direkten Vergleich.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  {["Größe", "Außenlänge", "Außenbreite", "Außenhöhe", "Volumen", "Eigengewicht"].map((h, i) => (
                    <th key={i} className="px-4 py-4 text-left font-heading font-semibold text-white text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SIZE_OVERVIEW.map((row, i) => (
                  <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-4 py-3 font-heading font-semibold text-foreground text-sm">{row.size}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.length}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.width}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.height}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.volume}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* â”€â”€ Warum wichtig? â”€â”€ */}
        <section className="mb-14">
          <SH>Warum sind Container Maße so wichtig?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Die richtigen Maße helfen dabei, Fehlkäufe zu vermeiden. Ein Container kann auf dem Papier groß wirken, aber je nach Nutzung können Innenhöhe, Türbreite oder Stellfläche entscheidend sein. Für Werkzeug, Möbel oder kleinere Waren reicht häufig ein <IL to="/20-fuss-container-kaufen">20 Fuß Container</IL>. Für größere Warenmengen, Maschinen oder gewerbliche Lagerflächen ist oft ein <IL to="/40-fuss-container-kaufen">40 Fuß Container</IL> besser geeignet.
            </p>
            <p>
              Auch die Zufahrt zum Standort spielt eine wichtige Rolle. Ein 40 Fuß Container benötigt deutlich mehr Platz für Lieferung, Rangieren und Aufstellung als ein kleineres Modell. Wer nur begrenzte Fläche zur Verfügung hat, sollte deshalb besonders genau prüfen, ob der Container problemlos platziert werden kann.
            </p>
            <p>
              Für klassische Lager- und Transportzwecke sind Seecontainer besonders beliebt. Weitere Informationen dazu finden Sie auf der Seite <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ 10 Fuß Container Maße â”€â”€ */}
        <section className="mb-14">
          <SH>10 Fuß Container Maße</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Ein 10 Fuß Container ist eine kompakte Lösung für kleine Lagerflächen, Werkzeuge, Gartengeräte, Ersatzteile oder private Nutzung. Er benötigt wenig Stellfläche und eignet sich gut für Standorte, an denen größere Container nicht möglich sind.
          </p>
          <SizeCard
            title="10 Fuß Standard Container"
            svgProps={{
              boxW: 40, boxD: 28, boxH: 52,
              lengthLabel: "2,99 m", widthLabel: "2,44 m", heightLabel: "2,59 m",
              uid: "10ft-masse"
            }}
            specs={SPECS_10FT}
            note="Ein 10 Fuß Container ist besonders praktisch, wenn eine kleine, sichere und wetterfeste Lagerlösung benötigt wird. Für größere Lageraufgaben ist jedoch meist ein 20 Fuß Container sinnvoller."
          />
          <SizeCard
            title="10 Fuß High Cube Container"
            svgProps={{
              boxW: 40, boxD: 28, boxH: 65,
              lengthLabel: "2,99 m", widthLabel: "2,44 m", heightLabel: "2,90 m",
              uid: "10hc-masse"
            }}
            specs={SPECS_10HC}
            note="Der 10 Fuß High Cube Container bietet durch seine größere Höhe ca. 30 cm mehr Innenraum als der Standard Container. Er eignet sich für sperrige Güter oder wenn zusätzliche Innenhöhe benötigt wird."
          />
        </section>

        {/* â”€â”€ 20 Fuß Container Maße â”€â”€ */}
        <section className="mb-14">
          <SH>20 Fuß Container Maße</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die 20 Fuß Container Maße machen diese Größe zu einer der beliebtesten Lösungen für Lagerung, Baustelle, Gewerbe und private Nutzung. Der 20 Fuß Container bietet ein gutes Verhältnis zwischen Innenraum und Stellfläche.
          </p>
          <SizeCard
            title="20 Fuß Standard Container"
            svgProps={{
              boxW: 80, boxD: 28, boxH: 52,
              lengthLabel: "6,06 m", widthLabel: "2,44 m", heightLabel: "2,59 m",
              uid: "20ft-masse"
            }}
            specs={SPECS_20FT}
            note={<>Ein 20 Fuß Container eignet sich für Werkzeuge, Maschinen, Möbel, Baumaterialien, Waren und vieles mehr. Wer eine flexible Allround Lösung sucht, findet weitere Informationen auf der Seite <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL>.</>}
          />
          <SizeCard
            title="20 Fuß High Cube Container"
            svgProps={{
              boxW: 80, boxD: 28, boxH: 65,
              lengthLabel: "6,06 m", widthLabel: "2,44 m", heightLabel: "2,90 m",
              uid: "20hc-masse"
            }}
            specs={SPECS_20HC}
            note="Der 20 Fuß High Cube Container bietet ca. 30 cm mehr Innenhöhe als der Standard Container und damit mehr Ladevolumen. Er ist ideal für sperrige Waren, Regalsysteme oder wenn jeder Kubikmeter zählt."
          />
        </section>

        {/* â”€â”€ 40 Fuß Container Maße â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container Maße</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die 40 Fuß Container Maße sind besonders relevant für Kunden mit hohem Lagerbedarf. Ein 40 Fuß Container bietet fast doppelt so viel Länge wie ein 20 Fuß Container und eignet sich für große Warenmengen, Industrie, Handel, Landwirtschaft und Logistik.
          </p>
          <SizeCard
            title="40 Fuß Standard Container"
            svgProps={{
              boxW: 140, boxD: 28, boxH: 52,
              lengthLabel: "12,19 m", widthLabel: "2,44 m", heightLabel: "2,59 m",
              uid: "40ft-masse"
            }}
            specs={SPECS_40FT}
            note={<>Ein 40 Fuß Container ist ideal, wenn viel Stauraum benötigt wird und ausreichend Platz für Lieferung und Aufstellung vorhanden ist. Weitere Details finden Sie auf der Seite <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL>.</>}
          />
        </section>

        {/* â”€â”€ High Cube Container Maße â”€â”€ */}
        <section className="mb-14">
          <SH>High Cube Container Maße</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            High Cube Container unterscheiden sich vor allem durch ihre größere Höhe. Während Standard Container meist ca. 2,59 m hoch sind, erreichen High Cube Container etwa 2,90 m Außenhöhe. Dadurch entsteht mehr Innenhöhe und mehr Ladevolumen.
          </p>
          <SizeCard
            title="40 Fuß High Cube Container"
            svgProps={{
              boxW: 140, boxD: 28, boxH: 65,
              lengthLabel: "12,19 m", widthLabel: "2,44 m", heightLabel: "2,90 m",
              uid: "40hc-masse"
            }}
            specs={SPECS_40HC}
            note="Ein High Cube Container ist besonders sinnvoll, wenn sperrige Güter, Regalsysteme, Maschinen oder voluminöse Waren gelagert werden sollen. Auch für Umbauten oder Sonderlösungen kann die zusätzliche Höhe vorteilhaft sein."
          />
        </section>

        <CtaBanner text="Container mit passenden Maßen anfragen" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ Außenmaße oder Innenmaße? â”€â”€ */}
        <section className="mb-14">
          <SH>Außenmaße oder Innenmaße – was ist wichtiger?</SH>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Maximize className="w-5 h-5" style={{ color: NAVY }} />
                <h3 className="font-heading font-bold text-sm text-foreground">Außenmaße</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die Außenmaße sind entscheidend für Transport, Aufstellung und Platzbedarf auf dem Grundstück. Sie zeigen, wie viel Fläche der Container tatsächlich einnimmt. Besonders bei der <IL to="/container-lieferung">Lieferung</IL> sind Außenlänge, Außenbreite und Außenhöhe wichtig.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-5 h-5" style={{ color: ORANGE }} />
                <h3 className="font-heading font-bold text-sm text-foreground">Innenmaße</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die Innenmaße sind wichtig, wenn es darum geht, was im Container gelagert werden kann. Besonders bei Paletten, Maschinen, Möbeln oder Regalen sollten Innenlänge, Innenbreite und Innenhöhe genau geprüft werden. Auch die Türöffnung ist entscheidend, wenn große Gegenstände ein- und ausgeladen werden müssen.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€ Welche Größe passt? â”€â”€ */}
        <section className="mb-14">
          <SH>Welche Containergröße passt zu welchem Einsatz?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Für kleine Lagerflächen, Werkzeuge oder private Nutzung reicht oft ein 10 Fuß Container. Der 20 Fuß Container ist die beste Allround Lösung für Lagerung, Baustellen, Handwerk, Landwirtschaft und Gewerbe. Er bietet ausreichend Stauraum, bleibt aber noch vergleichsweise einfach zu liefern und aufzustellen.
            </p>
            <p>
              Der 40 Fuß Container eignet sich für große Lagerflächen, Maschinen, Palettenware, Industrie und Handel. Wenn zusätzliche Höhe benötigt wird, ist ein High Cube Container sinnvoll. Für Arbeitsräume, Unterkünfte oder gekühlte Lagerung sollten dagegen spezielle Containerarten wie <IL to="/buerocontainer-kaufen">Bürocontainer</IL>, <IL to="/wohncontainer-kaufen">Wohncontainer</IL> oder <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> geprüft werden.
            </p>
          </div>
        </section>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zu Container Maßen</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Ratgeber links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weiterführende Ratgeber</h2>
          <InternalLinkGrid links={RATGEBER} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}
