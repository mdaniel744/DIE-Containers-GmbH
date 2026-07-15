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
  ["AuÃŸenlÃ¤nge", "ca. 2,99 m"],
  ["AuÃŸenbreite", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,59 m"],
  ["InnenlÃ¤nge", "ca. 2,83 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,39 m"],
  ["Volumen", "ca. 15â€“16 mÂ³"],
  ["Eigengewicht", "ca. 1.200â€“1.500 kg"],
];

const SPECS_20FT = [
  ["AuÃŸenlÃ¤nge", "ca. 6,06 m"],
  ["AuÃŸenbreite", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,59 m"],
  ["InnenlÃ¤nge", "ca. 5,90 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,39 m"],
  ["Volumen", "ca. 33 mÂ³"],
  ["Eigengewicht", "ca. 2.200â€“2.400 kg"],
  ["TÃ¼rÃ¶ffnung Breite", "ca. 2,34 m"],
  ["TÃ¼rÃ¶ffnung HÃ¶he", "ca. 2,28 m"],
];

const SPECS_40FT = [
  ["AuÃŸenlÃ¤nge", "ca. 12,19 m"],
  ["AuÃŸenbreite", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,59 m"],
  ["InnenlÃ¤nge", "ca. 12,03 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,39 m"],
  ["Volumen", "ca. 67 mÂ³"],
  ["Eigengewicht", "ca. 3.700â€“4.000 kg"],
  ["TÃ¼rÃ¶ffnung Breite", "ca. 2,34 m"],
  ["TÃ¼rÃ¶ffnung HÃ¶he", "ca. 2,28 m"],
];

const SPECS_10HC = [
  ["AuÃŸenlÃ¤nge", "ca. 2,99 m"],
  ["AuÃŸenbreite", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,90 m"],
  ["InnenlÃ¤nge", "ca. 2,83 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,69 m"],
  ["Volumen", "ca. 17 mÂ³"],
  ["Eigengewicht", "ca. 1.300â€“1.600 kg"],
  ["TÃ¼rÃ¶ffnung HÃ¶he", "ca. 2,58 m"],
];

const SPECS_20HC = [
  ["AuÃŸenlÃ¤nge", "ca. 6,06 m"],
  ["AuÃŸenbreite", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,90 m"],
  ["InnenlÃ¤nge", "ca. 5,90 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,69 m"],
  ["Volumen", "ca. 37 mÂ³"],
  ["Eigengewicht", "ca. 2.300â€“2.500 kg"],
  ["TÃ¼rÃ¶ffnung Breite", "ca. 2,34 m"],
  ["TÃ¼rÃ¶ffnung HÃ¶he", "ca. 2,58 m"],
];

const SPECS_40HC = [
  ["AuÃŸenlÃ¤nge", "ca. 12,19 m"],
  ["AuÃŸenbreite", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,90 m"],
  ["InnenlÃ¤nge", "ca. 12,03 m"],
  ["Innenbreite", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,69 m"],
  ["Volumen", "ca. 76 mÂ³"],
  ["Eigengewicht", "ca. 3.900â€“4.200 kg"],
  ["TÃ¼rÃ¶ffnung HÃ¶he", "ca. 2,58 m"],
];

/* â”€â”€ Size comparison overview â”€â”€ */
const SIZE_OVERVIEW = [
  { size: "10 FuÃŸ", length: "2,99 m", width: "2,44 m", height: "2,59 m", volume: "ca. 16 mÂ³", weight: "ca. 1.350 kg" },
  { size: "10 FuÃŸ HC", length: "2,99 m", width: "2,44 m", height: "2,90 m", volume: "ca. 17 mÂ³", weight: "ca. 1.450 kg" },
  { size: "20 FuÃŸ", length: "6,06 m", width: "2,44 m", height: "2,59 m", volume: "ca. 33 mÂ³", weight: "ca. 2.300 kg" },
  { size: "20 FuÃŸ HC", length: "6,06 m", width: "2,44 m", height: "2,90 m", volume: "ca. 37 mÂ³", weight: "ca. 2.400 kg" },
  { size: "40 FuÃŸ", length: "12,19 m", width: "2,44 m", height: "2,59 m", volume: "ca. 67 mÂ³", weight: "ca. 3.850 kg" },
  { size: "40 FuÃŸ HC", length: "12,19 m", width: "2,44 m", height: "2,90 m", volume: "ca. 76 mÂ³", weight: "ca. 4.050 kg" },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Welche MaÃŸe hat ein 20 FuÃŸ Container?", a: "Ein 20 FuÃŸ Container hat typischerweise AuÃŸenmaÃŸe von ca. 6,06 m LÃ¤nge, 2,44 m Breite und 2,59 m HÃ¶he. Die InnenmaÃŸe liegen ungefÃ¤hr bei 5,90 m LÃ¤nge, 2,35 m Breite und 2,39 m HÃ¶he." },
  { q: "Welche MaÃŸe hat ein 40 FuÃŸ Container?", a: "Ein 40 FuÃŸ Container hat typischerweise AuÃŸenmaÃŸe von ca. 12,19 m LÃ¤nge, 2,44 m Breite und 2,59 m HÃ¶he. Die InnenmaÃŸe liegen ungefÃ¤hr bei 12,03 m LÃ¤nge, 2,35 m Breite und 2,39 m HÃ¶he." },
  { q: "Was sind High Cube Container MaÃŸe?", a: "Ein 40 FuÃŸ High Cube Container hat etwa die gleiche LÃ¤nge und Breite wie ein Standard 40 FuÃŸ Container, ist aber hÃ¶her. Die AuÃŸenhÃ¶he betrÃ¤gt ca. 2,90 m, die InnenhÃ¶he ca. 2,69 m." },
  { q: "Welche ContainergrÃ¶ÃŸe ist am beliebtesten?", a: "Der 20 FuÃŸ Container gehÃ¶rt zu den beliebtesten GrÃ¶ÃŸen, weil er vielseitig einsetzbar ist und ein gutes VerhÃ¤ltnis zwischen Stauraum und StellflÃ¤che bietet." },
  { q: "Welche MaÃŸe sind fÃ¼r die Lieferung wichtig?", a: "FÃ¼r die Lieferung sind vor allem AuÃŸenlÃ¤nge, AuÃŸenbreite, AuÃŸenhÃ¶he, Gesamtgewicht, Zufahrt und RangierflÃ¤che wichtig. Besonders bei 40 FuÃŸ Containern sollte die Entladung vorab gut geplant werden." },
  { q: "Welche MaÃŸe sind fÃ¼r Lagerung wichtig?", a: "FÃ¼r Lagerung sind InnenlÃ¤nge, Innenbreite, InnenhÃ¶he, TÃ¼rÃ¶ffnung und Volumen entscheidend. Diese Werte zeigen, wie viel nutzbarer Raum tatsÃ¤chlich verfÃ¼gbar ist." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Ãœbersicht aller Containertypen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container kaufen", desc: "MaÃŸe und Preise" },
  { href: "/40-fuss-container-kaufen", title: "40 FuÃŸ Container kaufen", desc: "MaÃŸe und Preise" },
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
            <span className="text-white/70">Container MaÃŸe</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Container MaÃŸe â€“ alle wichtigen GrÃ¶ÃŸen im Ãœberblick
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Container MaÃŸe im Ãœberblick â€“ 10 FuÃŸ, 20 FuÃŸ, 40 FuÃŸ und High Cube Container mit AuÃŸenmaÃŸen, InnenmaÃŸen, Volumen, Gewicht und TÃ¼rÃ¶ffnungen vergleichen.
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
          <SH>Container MaÃŸe richtig vergleichen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wer einen Container kaufen mÃ¶chte, sollte die passenden <strong className="text-foreground">Container MaÃŸe</strong> genau kennen. Die GrÃ¶ÃŸe entscheidet nicht nur darÃ¼ber, wie viel Platz im Inneren zur VerfÃ¼gung steht, sondern auch darÃ¼ber, ob der Container am gewÃ¼nschten Standort aufgestellt, transportiert und sinnvoll genutzt werden kann. Besonders hÃ¤ufig werden 10 FuÃŸ, 20 FuÃŸ und 40 FuÃŸ Container nachgefragt. ZusÃ¤tzlich gibt es High Cube Container, die durch ihre grÃ¶ÃŸere HÃ¶he mehr Innenvolumen bieten.
            </p>
            <p>
              Die wichtigsten Angaben sind AuÃŸenmaÃŸe, InnenmaÃŸe, TÃ¼rÃ¶ffnung, Eigengewicht und Ladevolumen. Die AuÃŸenmaÃŸe sind entscheidend fÃ¼r Transport und Aufstellung. Die InnenmaÃŸe zeigen, wie viel nutzbarer Raum tatsÃ¤chlich zur VerfÃ¼gung steht. TÃ¼rÃ¶ffnung und InnenhÃ¶he sind besonders wichtig, wenn sperrige GÃ¼ter, Maschinen, Paletten oder Regalsysteme eingelagert werden sollen.
            </p>
            <p>
              Wenn Sie noch nicht sicher sind, welcher Container zu Ihrem Projekt passt, kÃ¶nnen Sie zuerst die Seite <IL to="/container-kaufen">Container kaufen</IL> besuchen. Dort erhalten Sie einen Ãœberblick Ã¼ber verschiedene Containerarten und Einsatzbereiche.
            </p>
          </div>
        </section>

        {/* â”€â”€ Overview table â”€â”€ */}
        <section className="mb-14">
          <SH>Container MaÃŸe auf einen Blick</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die folgende Ãœbersicht zeigt die wichtigsten AuÃŸenmaÃŸe, das Volumen und das Eigengewicht aller gÃ¤ngigen ContainergrÃ¶ÃŸen im direkten Vergleich.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  {["GrÃ¶ÃŸe", "AuÃŸenlÃ¤nge", "AuÃŸenbreite", "AuÃŸenhÃ¶he", "Volumen", "Eigengewicht"].map((h, i) => (
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
          <SH>Warum sind Container MaÃŸe so wichtig?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Die richtigen MaÃŸe helfen dabei, FehlkÃ¤ufe zu vermeiden. Ein Container kann auf dem Papier groÃŸ wirken, aber je nach Nutzung kÃ¶nnen InnenhÃ¶he, TÃ¼rbreite oder StellflÃ¤che entscheidend sein. FÃ¼r Werkzeug, MÃ¶bel oder kleinere Waren reicht hÃ¤ufig ein <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container</IL>. FÃ¼r grÃ¶ÃŸere Warenmengen, Maschinen oder gewerbliche LagerflÃ¤chen ist oft ein <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container</IL> besser geeignet.
            </p>
            <p>
              Auch die Zufahrt zum Standort spielt eine wichtige Rolle. Ein 40 FuÃŸ Container benÃ¶tigt deutlich mehr Platz fÃ¼r Lieferung, Rangieren und Aufstellung als ein kleineres Modell. Wer nur begrenzte FlÃ¤che zur VerfÃ¼gung hat, sollte deshalb besonders genau prÃ¼fen, ob der Container problemlos platziert werden kann.
            </p>
            <p>
              FÃ¼r klassische Lager- und Transportzwecke sind Seecontainer besonders beliebt. Weitere Informationen dazu finden Sie auf der Seite <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ 10 FuÃŸ Container MaÃŸe â”€â”€ */}
        <section className="mb-14">
          <SH>10 FuÃŸ Container MaÃŸe</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Ein 10 FuÃŸ Container ist eine kompakte LÃ¶sung fÃ¼r kleine LagerflÃ¤chen, Werkzeuge, GartengerÃ¤te, Ersatzteile oder private Nutzung. Er benÃ¶tigt wenig StellflÃ¤che und eignet sich gut fÃ¼r Standorte, an denen grÃ¶ÃŸere Container nicht mÃ¶glich sind.
          </p>
          <SizeCard
            title="10 FuÃŸ Standard Container"
            svgProps={{
              boxW: 40, boxD: 28, boxH: 52,
              lengthLabel: "2,99 m", widthLabel: "2,44 m", heightLabel: "2,59 m",
              uid: "10ft-masse"
            }}
            specs={SPECS_10FT}
            note="Ein 10 FuÃŸ Container ist besonders praktisch, wenn eine kleine, sichere und wetterfeste LagerlÃ¶sung benÃ¶tigt wird. FÃ¼r grÃ¶ÃŸere Lageraufgaben ist jedoch meist ein 20 FuÃŸ Container sinnvoller."
          />
          <SizeCard
            title="10 FuÃŸ High Cube Container"
            svgProps={{
              boxW: 40, boxD: 28, boxH: 65,
              lengthLabel: "2,99 m", widthLabel: "2,44 m", heightLabel: "2,90 m",
              uid: "10hc-masse"
            }}
            specs={SPECS_10HC}
            note="Der 10 FuÃŸ High Cube Container bietet durch seine grÃ¶ÃŸere HÃ¶he ca. 30 cm mehr Innenraum als der Standard Container. Er eignet sich fÃ¼r sperrige GÃ¼ter oder wenn zusÃ¤tzliche InnenhÃ¶he benÃ¶tigt wird."
          />
        </section>

        {/* â”€â”€ 20 FuÃŸ Container MaÃŸe â”€â”€ */}
        <section className="mb-14">
          <SH>20 FuÃŸ Container MaÃŸe</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die 20 FuÃŸ Container MaÃŸe machen diese GrÃ¶ÃŸe zu einer der beliebtesten LÃ¶sungen fÃ¼r Lagerung, Baustelle, Gewerbe und private Nutzung. Der 20 FuÃŸ Container bietet ein gutes VerhÃ¤ltnis zwischen Innenraum und StellflÃ¤che.
          </p>
          <SizeCard
            title="20 FuÃŸ Standard Container"
            svgProps={{
              boxW: 80, boxD: 28, boxH: 52,
              lengthLabel: "6,06 m", widthLabel: "2,44 m", heightLabel: "2,59 m",
              uid: "20ft-masse"
            }}
            specs={SPECS_20FT}
            note={<>Ein 20 FuÃŸ Container eignet sich fÃ¼r Werkzeuge, Maschinen, MÃ¶bel, Baumaterialien, Waren und vieles mehr. Wer eine flexible Allround LÃ¶sung sucht, findet weitere Informationen auf der Seite <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container kaufen</IL>.</>}
          />
          <SizeCard
            title="20 FuÃŸ High Cube Container"
            svgProps={{
              boxW: 80, boxD: 28, boxH: 65,
              lengthLabel: "6,06 m", widthLabel: "2,44 m", heightLabel: "2,90 m",
              uid: "20hc-masse"
            }}
            specs={SPECS_20HC}
            note="Der 20 FuÃŸ High Cube Container bietet ca. 30 cm mehr InnenhÃ¶he als der Standard Container und damit mehr Ladevolumen. Er ist ideal fÃ¼r sperrige Waren, Regalsysteme oder wenn jeder Kubikmeter zÃ¤hlt."
          />
        </section>

        {/* â”€â”€ 40 FuÃŸ Container MaÃŸe â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ Container MaÃŸe</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die 40 FuÃŸ Container MaÃŸe sind besonders relevant fÃ¼r Kunden mit hohem Lagerbedarf. Ein 40 FuÃŸ Container bietet fast doppelt so viel LÃ¤nge wie ein 20 FuÃŸ Container und eignet sich fÃ¼r groÃŸe Warenmengen, Industrie, Handel, Landwirtschaft und Logistik.
          </p>
          <SizeCard
            title="40 FuÃŸ Standard Container"
            svgProps={{
              boxW: 140, boxD: 28, boxH: 52,
              lengthLabel: "12,19 m", widthLabel: "2,44 m", heightLabel: "2,59 m",
              uid: "40ft-masse"
            }}
            specs={SPECS_40FT}
            note={<>Ein 40 FuÃŸ Container ist ideal, wenn viel Stauraum benÃ¶tigt wird und ausreichend Platz fÃ¼r Lieferung und Aufstellung vorhanden ist. Weitere Details finden Sie auf der Seite <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container kaufen</IL>.</>}
          />
        </section>

        {/* â”€â”€ High Cube Container MaÃŸe â”€â”€ */}
        <section className="mb-14">
          <SH>High Cube Container MaÃŸe</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            High Cube Container unterscheiden sich vor allem durch ihre grÃ¶ÃŸere HÃ¶he. WÃ¤hrend Standard Container meist ca. 2,59 m hoch sind, erreichen High Cube Container etwa 2,90 m AuÃŸenhÃ¶he. Dadurch entsteht mehr InnenhÃ¶he und mehr Ladevolumen.
          </p>
          <SizeCard
            title="40 FuÃŸ High Cube Container"
            svgProps={{
              boxW: 140, boxD: 28, boxH: 65,
              lengthLabel: "12,19 m", widthLabel: "2,44 m", heightLabel: "2,90 m",
              uid: "40hc-masse"
            }}
            specs={SPECS_40HC}
            note="Ein High Cube Container ist besonders sinnvoll, wenn sperrige GÃ¼ter, Regalsysteme, Maschinen oder voluminÃ¶se Waren gelagert werden sollen. Auch fÃ¼r Umbauten oder SonderlÃ¶sungen kann die zusÃ¤tzliche HÃ¶he vorteilhaft sein."
          />
        </section>

        <CtaBanner text="Container mit passenden MaÃŸen anfragen" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ AuÃŸenmaÃŸe oder InnenmaÃŸe? â”€â”€ */}
        <section className="mb-14">
          <SH>AuÃŸenmaÃŸe oder InnenmaÃŸe â€“ was ist wichtiger?</SH>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Maximize className="w-5 h-5" style={{ color: NAVY }} />
                <h3 className="font-heading font-bold text-sm text-foreground">AuÃŸenmaÃŸe</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die AuÃŸenmaÃŸe sind entscheidend fÃ¼r Transport, Aufstellung und Platzbedarf auf dem GrundstÃ¼ck. Sie zeigen, wie viel FlÃ¤che der Container tatsÃ¤chlich einnimmt. Besonders bei der <IL to="/container-lieferung">Lieferung</IL> sind AuÃŸenlÃ¤nge, AuÃŸenbreite und AuÃŸenhÃ¶he wichtig.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center gap-2 mb-3">
                <Package className="w-5 h-5" style={{ color: ORANGE }} />
                <h3 className="font-heading font-bold text-sm text-foreground">InnenmaÃŸe</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Die InnenmaÃŸe sind wichtig, wenn es darum geht, was im Container gelagert werden kann. Besonders bei Paletten, Maschinen, MÃ¶beln oder Regalen sollten InnenlÃ¤nge, Innenbreite und InnenhÃ¶he genau geprÃ¼ft werden. Auch die TÃ¼rÃ¶ffnung ist entscheidend, wenn groÃŸe GegenstÃ¤nde ein- und ausgeladen werden mÃ¼ssen.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€ Welche GrÃ¶ÃŸe passt? â”€â”€ */}
        <section className="mb-14">
          <SH>Welche ContainergrÃ¶ÃŸe passt zu welchem Einsatz?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              FÃ¼r kleine LagerflÃ¤chen, Werkzeuge oder private Nutzung reicht oft ein 10 FuÃŸ Container. Der 20 FuÃŸ Container ist die beste Allround LÃ¶sung fÃ¼r Lagerung, Baustellen, Handwerk, Landwirtschaft und Gewerbe. Er bietet ausreichend Stauraum, bleibt aber noch vergleichsweise einfach zu liefern und aufzustellen.
            </p>
            <p>
              Der 40 FuÃŸ Container eignet sich fÃ¼r groÃŸe LagerflÃ¤chen, Maschinen, Palettenware, Industrie und Handel. Wenn zusÃ¤tzliche HÃ¶he benÃ¶tigt wird, ist ein High Cube Container sinnvoll. FÃ¼r ArbeitsrÃ¤ume, UnterkÃ¼nfte oder gekÃ¼hlte Lagerung sollten dagegen spezielle Containerarten wie <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL>, <IL to="/wohncontainer-kaufen">Wohncontainer</IL> oder <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainer</IL> geprÃ¼ft werden.
            </p>
          </div>
        </section>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">HÃ¤ufige Fragen zu Container MaÃŸen</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Ratgeber links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">WeiterfÃ¼hrende Ratgeber</h2>
          <InternalLinkGrid links={RATGEBER} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}
