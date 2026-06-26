"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Package, Wrench } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* ── Images ── */
const IMG_20FT_STANDARD = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/7d8b11ed6_20FuContainerkaufen.jpg";
const IMG_20FT_HC = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/0da1d666b_20FuHighCubeContainerkaufen.jpg";
const IMG_20FT_BUERO = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/af1ff6035_20FuBrocontainerRAL7016.jpg";

/* ── Specs table ── */
const SPECS = [
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

/* ── Use cases ── */
const USE_CASES = [
  "Baustellen und Handwerksbetriebe",
  "Landwirtschaft und Industrie",
  "Lagerung von Werkzeugen und Maschinen",
  "Waren, Paletten und Ersatzteile",
  "Private Lagerung bei Umzug oder Renovierung",
  "Saisonale Lagerflächen für Gewerbe",
];

/* ── Checklist ── */
const CHECKLIST = [
  "Einsatzzweck definieren (Lager, Transport, Gewerbe)",
  "Zustand festlegen (Neu oder Gebraucht)",
  "Stellfläche und Zufahrt am Standort prüfen",
  "Untergrund: eben, tragfähig und stabil",
  "Transportkosten und Entlademethode klären",
  "Bei Daueraufstellung: Genehmigung prüfen",
];

/* ── Advantages ── */
const ADVANTAGES = [
  { title: "Kompakt & flexibel", desc: "Groß genug für viele Lagerzwecke, klein genug für begrenzte Flächen und einfache Lieferung." },
  { title: "Beliebteste Größe", desc: "20 Fuß Container gehören zu den meistgenutzten Containergrößen – häufig schnell verfügbar." },
  { title: "Extrem robust", desc: "Massive Stahlkonstruktion für jahrzehntelangen Einsatz unter anspruchsvollen Bedingungen." },
  { title: "Wind- & wasserdicht", desc: "Zuverlässiger Schutz vor Witterung und unbefugtem Zugriff bei Daueraufstellung." },
  { title: "Gutes Preis Leistungs Verhältnis", desc: "Besonders gebrauchte 20 Fuß Container bieten viel Stauraum zu überschaubaren Kosten." },
  { title: "Mobil & versetzbar", desc: "Bei Bedarf jederzeit an einen anderen Standort transportierbar." },
];

/* ── FAQ ── */
const FAQS = [
  { q: "Was kostet ein 20 Fuß Container?", a: "Der Preis hängt von Zustand, Baujahr, Ausstattung, Standort und Lieferung ab. Gebrauchte 20 Fuß Container sind in der Regel günstiger als neue Modelle. Für ein genaues Angebot sollten Lieferort, gewünschter Zustand und Einsatzzweck angegeben werden." },
  { q: "Kann man einen 20 Fuß Container gebraucht kaufen?", a: "Ja, gebrauchte 20 Fuß Container sind sehr beliebt. Sie eignen sich besonders für Lagerung, Baustellen, Landwirtschaft, Gewerbe und private Nutzung. Wichtig ist, dass der Container technisch intakt, wind und wasserdicht sowie sicher verschließbar ist." },
  { q: "Welche Maße hat ein 20 Fuß Container?", a: "Ein 20 Fuß Container hat typischerweise Außenmaße von ca. 6,06 m Länge, 2,44 m Breite und 2,59 m Höhe. Die Innenmaße liegen ungefähr bei 5,90 m Länge, 2,35 m Breite und 2,39 m Höhe." },
  { q: "Wie schwer ist ein 20 Fuß Container?", a: "Ein Standard 20 Fuß Container wiegt in der Regel etwa 2.200 bis 2.400 kg. Das genaue Gewicht hängt vom Hersteller, Baujahr und der Ausführung ab." },
  { q: "Wird ein 20 Fuß Container mit Lieferung angeboten?", a: "Ja, ein 20 Fuß Container kann direkt zum gewünschten Standort geliefert werden. Die Lieferung erfolgt meist per LKW, häufig mit Kranentladung. Wichtig sind eine geeignete Zufahrt, genügend Platz und ein tragfähiger Untergrund." },
  { q: "Ist ein 20 Fuß Container wasserdicht?", a: "Ein technisch intakter 20 Fuß Seecontainer ist in der Regel wind und wasserdicht. Bei gebrauchten Containern sollten Dach, Türen, Dichtungen und Wände geprüft werden." },
  { q: "Wofür eignet sich ein 20 Fuß Container?", a: "Ein 20 Fuß Container eignet sich für Lagerung, Transport, Baustellen, Handwerk, Landwirtschaft, Industrie und private Nutzung. Er ist groß genug für viele Lagerzwecke und gleichzeitig kompakt genug für kleinere Standorte." },
  { q: "Was ist besser: 20 Fuß oder 40 Fuß Container?", a: "Ein 20 Fuß Container ist kompakter, leichter zu platzieren und für viele Standardanwendungen ausreichend. Ein 40 Fuß Container bietet mehr Stauraum und ist besser geeignet, wenn große Mengen oder sperrige Güter gelagert werden sollen." },
  { q: "Braucht man eine Genehmigung für einen 20 Fuß Container?", a: "Das hängt von Standort, Nutzungsdauer und Nutzung ab. Für kurzfristige Lagerung ist eine Genehmigung oft weniger problematisch. Bei dauerhafter Aufstellung oder gewerblicher Nutzung sollte die zuständige Behörde gefragt werden." },
];

/* ── Ratgeber links ── */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische Transport- und Lagercontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maximaler Stauraum" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Außen- und Innenmaße" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preise und Kostenfaktoren" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf und Transportkosten" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund und Aufstellung" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliches und Vorschriften" },
];

/* ── Helpers ── */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

export default function Container20Fuss() {
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

      {/* ── Hero ── */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img src={IMG_20FT_STANDARD} alt="20 Fuß Container kaufen" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.87) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">20 Fuß Container kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            20 Fuß Container kaufen – kompakte Lagerlösung mit vielseitigem Einsatz
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            20 Fuß Container kaufen in Deutschland – neue und gebrauchte 20 Fuß Container für Lagerung, Transport, Baustelle und Gewerbe. Mit Lieferung direkt zum Standort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/angebot" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop?size=20ft" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              20 Fuß Container ansehen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Intro ── */}
        <section className="mb-14">
          <SH>20 Fuß Container kaufen für Lagerung, Transport und Gewerbe</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wenn Sie einen <strong className="text-foreground">20 Fuß Container kaufen</strong> möchten, entscheiden Sie sich für eine der beliebtesten Containergrößen überhaupt. Der 20 Fuß Container bietet ein sehr gutes Verhältnis zwischen Stauraum, Transportfähigkeit und Platzbedarf. Er ist groß genug für Werkzeuge, Maschinen, Waren, Möbel oder Baumaterialien, bleibt aber gleichzeitig kompakt genug, um auf vielen Grundstücken, Baustellen und Firmengeländen problemlos aufgestellt zu werden.
            </p>
            <p>
              Ein 20 Fuß Container eignet sich für private Kunden, Handwerksbetriebe, Bauunternehmen, Landwirtschaft, Industrie und Handel. Er kann als Lagercontainer, Materialcontainer, Transportcontainer oder mobile Abstellfläche genutzt werden. Besonders gefragt ist diese Größe, weil sie flexibel einsetzbar ist und im Vergleich zu größeren Containern weniger Stellfläche benötigt.
            </p>
            <p>
              Bei uns können Sie neue und gebrauchte 20 Fuß Container kaufen – auf Wunsch mit Lieferung direkt zum gewünschten Standort. Wenn Sie sich zunächst einen allgemeinen Überblick über verschiedene Containerarten verschaffen möchten, finden Sie weitere Informationen auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL>.
            </p>
          </div>
        </section>

        {/* ── Warum so beliebt? ── */}
        <section className="mb-14">
          <SH>Warum ist der 20 Fuß Container so beliebt?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der 20 Fuß Container gilt als praktischer Allrounder. Er bietet ausreichend Lagerfläche für viele Anwendungen, ohne zu viel Platz auf dem Gelände einzunehmen. Dadurch eignet er sich besonders für Kunden, die eine robuste, mobile und wirtschaftliche Lösung suchen.
            </p>
            <p>
              Auf Baustellen wird der 20 Fuß Container häufig zur sicheren Lagerung von Werkzeugen, Baumaterialien und Maschinen eingesetzt. Unternehmen nutzen ihn als zusätzliche Lagerfläche für Waren, Ersatzteile oder saisonale Produkte. Auch private Kunden kaufen 20 Fuß Container, zum Beispiel für Renovierungen, Umzüge, Möbel, Gartengeräte oder langfristigen Stauraum.
            </p>
            <p>
              Im Vergleich zum 40 Fuß Container ist der 20 Fuß Container leichter zu platzieren und oft einfacher zu liefern. Wenn Sie jedoch deutlich mehr Stauraum benötigen, kann ein Blick auf <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL> sinnvoll sein.
            </p>
          </div>
        </section>

        {/* ── Neue oder gebrauchte? ── */}
        <section className="mb-14">
          <SH>Neue oder gebrauchte 20 Fuß Container kaufen?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Beim Kauf eines 20 Fuß Containers können Sie zwischen neuen und gebrauchten Modellen wählen. Welche Variante die richtige ist, hängt vom geplanten Einsatz, dem Budget und den Anforderungen an den optischen Zustand ab.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_20FT_HC} alt="Neuer 20 Fuß High Cube Container" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neue 20 Fuß Container (One Trip)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein neuer 20 Fuß Container ist besonders geeignet, wenn ein sehr gepflegtes Erscheinungsbild, eine lange Nutzungsdauer und möglichst wenige Gebrauchsspuren wichtig sind. Neue Container werden häufig für gewerbliche Standorte, sichtbare Kundenbereiche oder langfristige Projekte gewählt.</p>
                <ul className="space-y-1.5">
                  {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal für repräsentative Standorte", "Vollständiger Korrosionsschutz"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_20FT_STANDARD} alt="Gebrauchter 20 Fuß Container kaufen" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte 20 Fuß Container (Cargo-Worthy)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Wer eine preisbewusste Lösung sucht, kann einen <strong className="text-foreground">20 Fuß Container gebraucht kaufen</strong>. Gebrauchte Container sind oft deutlich wirtschaftlicher und für viele praktische Anwendungen vollkommen ausreichend. Türen, Dichtungen, Boden, Dach und Wände sollten funktionsfähig sein.</p>
                <ul className="space-y-1.5">
                  {["Deutlich günstiger als Neuware", "Kurzfristig verfügbar", "Ideal für Lager, Baustelle & Gewerbe", "Sofort einsatzbereit"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Die Suchanfragen <strong className="text-foreground">container kaufen 20 fuß</strong>, <strong className="text-foreground">20 fuß container kaufen gebraucht</strong> und <strong className="text-foreground">container 20 fuß gebraucht kaufen</strong> zeigen deutlich, dass viele Kunden eine robuste Lösung mit gutem Preis Leistungs Verhältnis suchen. Genau dafür ist der gebrauchte 20 Fuß Container besonders interessant.
          </p>
        </section>

        <CtaBanner text="Unverbindliches Angebot für 20 Fuß Container" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* ── 20 Fuß Seecontainer ── */}
        <section className="mb-14">
          <SH>20 Fuß Seecontainer kaufen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Der klassische 20 Fuß Seecontainer ist für viele Kunden die erste Wahl, wenn es um Lagerung und Transport geht. Er besteht aus widerstandsfähigem Stahl, ist für hohe Belastungen ausgelegt und kann dauerhaft im Außenbereich eingesetzt werden.
            </p>
            <p>
              Wenn Sie gezielt klassische Transport und Lagercontainer suchen, finden Sie weitere Informationen auf der Seite <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>. Dort wird erklärt, wann ein Seecontainer die richtige Wahl ist und worin der Unterschied zu <IL to="/buerocontainer-kaufen">Bürocontainern</IL>, <IL to="/wohncontainer-kaufen">Wohncontainern</IL> oder <IL to="/kuehlcontainer-kaufen">Kühlcontainern</IL> besteht.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Package className="w-4 h-4" style={{ color: ORANGE }} />
              20 Fuß Seecontainer – besonders geeignet für:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {USE_CASES.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technische Daten ── */}
        <section className="mb-14">
          <SH>Technische Daten und Maße eines 20 Fuß Containers</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die genauen Maße können je nach Hersteller und Bauart leicht variieren. Ein klassischer 20 Fuß Container hat jedoch standardisierte Richtwerte, die für die Planung sehr hilfreich sind.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  <th className="px-5 py-4 text-left font-heading font-semibold text-white text-xs uppercase tracking-wide">Merkmal</th>
                  <th className="px-5 py-4 text-right font-heading font-semibold text-white text-xs uppercase tracking-wide">Richtwert</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((row, i) => (
                  <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-5 py-3 font-heading font-semibold text-foreground text-sm">{row[0]}</td>
                    <td className="px-5 py-3 text-muted-foreground text-right">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Diese Maße machen den 20 Fuß Container zu einer praktischen Lösung für viele Lager und Transportaufgaben. Eine vollständige Übersicht zu <strong className="text-foreground">20 Fuß Container Maße</strong>, 40 Fuß Container Maße, High Cube Maßen und weiteren Größen finden Sie auf unserer Seite <IL to="/container-masse">Container Maße</IL>.
          </p>
        </section>

        {/* ── Container mit Lieferung ── */}
        <section className="mb-14">
          <SH>20 Fuß Container kaufen mit Lieferung</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Viele Kunden suchen gezielt nach <strong className="text-foreground">20 Fuß Container kaufen mit Lieferung</strong>, weil der Transport eines Containers ohne geeignetes Fahrzeug kaum möglich ist. Die Lieferung erfolgt in der Regel per LKW. Je nach Standort und Entladesituation kann ein LKW mit Kran eingesetzt werden, damit der Container direkt am gewünschten Platz abgesetzt werden kann.
              </p>
              <p>
                Vor der Lieferung sollte geprüft werden, ob die Zufahrt ausreichend breit ist, ob genug Rangierfläche vorhanden ist und ob der Untergrund tragfähig und eben ist. Ein 20 Fuß Container ist im Vergleich zu einem 40 Fuß Container meist einfacher zu liefern und aufzustellen.
              </p>
              <p>
                Mehr zum Thema erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_20FT_BUERO} alt="20 Fuß Bürocontainer RAL 7016" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">20 Fuß Bürocontainer</p>
                  <p className="text-xs text-muted-foreground">Auch als Bürocontainer oder Wohncontainer in 20 Fuß verfügbar.</p>
                  <Link to="/buerocontainer-kaufen" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                    Bürocontainer entdecken <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Was kostet ein 20 Fuß Container? ── */}
        <section className="mb-14">
          <SH>Was kostet ein 20 Fuß Container?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der Preis eines 20 Fuß Containers hängt von mehreren Faktoren ab. Dazu gehören Zustand, Baujahr, Ausstattung, Verfügbarkeit, Farbe, Standort und Lieferkosten. Ein gebrauchter 20 Fuß Container ist in der Regel günstiger als ein neuer Container. Dafür können Gebrauchsspuren wie Kratzer, Dellen oder leichte Roststellen vorhanden sein.
            </p>
            <p>
              Neue 20 Fuß Container kosten mehr, bieten dafür aber einen besseren optischen Zustand und eine lange Nutzungsdauer. Zusätzlich zum Kaufpreis sollten immer die Transportkosten berücksichtigt werden. Für ein genaues Angebot sind Angaben zum gewünschten Lieferort, zur Containergröße und zur geplanten Nutzung wichtig.
            </p>
            <p>
              Mehr zu aktuellen Preisen erfahren Sie auf unserer Seite <IL to="/container-kosten">Container Kosten</IL>.
            </p>
          </div>
        </section>

        {/* ── Wofür eignet sich ein 20 Fuß Container? ── */}
        <section className="mb-14">
          <SH>Wofür eignet sich ein 20 Fuß Container?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein 20 Fuß Container ist sehr vielseitig einsetzbar. Für Bauunternehmen ist er eine sichere Lösung zur Lagerung von Werkzeugen, Maschinen und Material. Handwerksbetriebe nutzen ihn als mobiles Lager direkt am Einsatzort. In der Landwirtschaft eignet er sich zur Unterbringung von Geräten, Ersatzteilen oder saisonalen Produkten.
            </p>
            <p>
              Auch im Handel und in der Industrie wird der 20 Fuß Container häufig als zusätzliche Lagerfläche genutzt. Private Kunden kaufen 20 Fuß Container häufig für Umzüge, Renovierungen, Hausbau oder langfristigen Stauraum.
            </p>
            <p>
              Wenn Sie statt Lagerfläche eine Arbeitsfläche benötigen, kann ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> besser geeignet sein. Für Wohnzwecke empfiehlt sich ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL>, während temperaturempfindliche Waren in einem <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> gelagert werden sollten.
            </p>
          </div>
        </section>

        {/* ── Worauf achten? ── */}
        <section className="mb-14">
          <SH>Worauf sollte man beim Kauf achten?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Vor dem Kauf sollte genau festgelegt werden, wofür der Container genutzt werden soll. Für einfache Lagerung reicht oft ein gebrauchter Container in gutem technischen Zustand. Achten Sie bei gebrauchten Containern besonders auf den Zustand der Türen, Dichtungen und des Bodens. Der Container sollte auf einem ebenen, tragfähigen <IL to="/container-fundament">Untergrund</IL> stehen. Bei langfristiger Aufstellung kann eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4" style={{ color: ORANGE }} />
              Checkliste vor dem Kauf
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vorteile ── */}
        <section className="mb-14">
          <SH>Vorteile eines 20 Fuß Containers</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADVANTAGES.map((adv, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-all">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1">{adv.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
          <div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt 20 Fuß Container anfragen</h2>
            <p className="text-white/60 text-sm">Unverbindlich anfragen – Angebot inkl. Lieferung erhalten.</p>
          </div>
          <Link to="/angebot" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zum 20 Fuß Container</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* ── Ratgeber links ── */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weiterführende Ratgeber</h2>
          <InternalLinkGrid links={RATGEBER} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}