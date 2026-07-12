"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Wrench } from "lucide-react";
import { InternalLinkGrid, FaqAccordion, CtaBanner } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* ── Images ── */
const IMG_HERO = "/images/seecontainer-kaufen-hero.png";
const IMG_NEW_20FT = "/images/seecontainer-20ft-grau.jpg";
const IMG_USED = "/images/seecontainer-gebraucht-40ft-stapel.jpg";
const IMG_20FT = "/images/seecontainer-20ft-blau.jpg";
const IMG_40FT = "/images/seecontainer-40ft-crane.jpg";
const IMG_OPEN_SIDE = "/images/seecontainer-40ft-open-side.svg";

/* ── Advantages ── */
const ADVANTAGES = [
  { title: "Extrem robust", desc: "Massive Stahlkonstruktion für jahrzehntelangen Außeneinsatz unter anspruchsvollen Bedingungen." },
  { title: "Wind- & wasserdicht", desc: "Stabiler Schutz vor Witterung und unbefugtem Zugriff – auch bei Daueraufstellung im Freien." },
  { title: "Kurzfristig lieferbar", desc: "Standardgrößen (20ft & 40ft) sind in der Regel sofort oder kurzfristig verfügbar." },
  { title: "Flexibel versetzbar", desc: "Bei Bedarf an einen anderen Standort transportierbar – ideal für Baustellen und wechselnde Projekte." },
  { title: "Wirtschaftlich", desc: "Gebrauchte Seecontainer bieten ein attraktives Preis-Leistungs-Verhältnis für viele praktische Anwendungen." },
  { title: "Keine Mietkosten", desc: "Als Eigentümer sind Sie unabhängig von dauerhaften Miet- oder Lagerflächen." },
];

/* ── Checklist ── */
const CHECKLIST = [
  "Einsatzzweck definieren (Lager, Transport, Gewerbe)",
  "Passende Größe wählen (20ft oder 40ft)",
  "Zustand festlegen (Neu oder Gebraucht)",
  "Zufahrt & Untergrund am Aufstellort prüfen",
  "Transport- und Entladekosten einplanen",
  "Bei Daueraufstellung: Genehmigung klären",
];

/* ── FAQ ── */
const FAQS = [
  { q: "Was kostet ein Seecontainer?", a: "Der Preis hängt von Größe, Zustand, Ausführung und Lieferort ab. Gebrauchte Seecontainer sind meist günstiger als neue Modelle. Ein 20-Fuß-Container ist in der Regel preiswerter als ein 40-Fuß-Container. Zusätzlich beeinflussen Transport, Kranentladung, Farbe und Sonderausstattung den Gesamtpreis." },
  { q: "Kann man gebrauchte Seecontainer kaufen?", a: "Ja, gebrauchte Seecontainer sind sehr beliebt, weil sie robust, sofort nutzbar und meist günstiger als neue Container sind. Sie eignen sich besonders für Lagerung, Baustellen, Landwirtschaft und Gewerbe. Wichtig ist, dass der Container trotz Gebrauchsspuren wind- und wasserdicht sowie technisch funktionsfähig ist." },
  { q: "Welche Größen gibt es bei Seecontainern?", a: "Die häufigsten Größen sind 20 Fuß und 40 Fuß. Ein 20-Fuß-Seecontainer eignet sich für flexible Lagerlösungen mit begrenztem Platzbedarf. Ein 40-Fuß-Seecontainer bietet deutlich mehr Volumen und ist ideal für größere Warenmengen oder gewerbliche Nutzung." },
  { q: "Was sind die Maße eines 20-Fuß-Seecontainers?", a: "Ein 20-Fuß-Seecontainer hat typischerweise Außenmaße von ca. 6,06 m Länge, 2,44 m Breite und 2,59 m Höhe. Die Innenmaße liegen ungefähr bei 5,90 m Länge, 2,35 m Breite und 2,39 m Höhe." },
  { q: "Was ist besser: 20 Fuß oder 40 Fuß Seecontainer?", a: "Ein 20-Fuß-Container ist kompakter, leichter zu platzieren und für viele Lagerzwecke ausreichend. Ein 40-Fuß-Container bietet mehr Stauraum und eignet sich besser für größere Projekte, Industrie, Handel oder umfangreiche Lagerung. Die richtige Wahl hängt von Platzbedarf, Standort und Budget ab." },
  { q: "Wird ein Seecontainer mit Lieferung angeboten?", a: "Ja, Seecontainer können mit Lieferung direkt zum Standort angeboten werden. Die Lieferung erfolgt in der Regel per LKW, häufig mit Kranentladung. Vorher sollte geprüft werden, ob Zufahrt, Rangierfläche und Untergrund geeignet sind." },
  { q: "Ist ein Seecontainer wind- und wasserdicht?", a: "Ein funktionsfähiger Seecontainer ist in der Regel wind- und wasserdicht. Bei gebrauchten Containern sollte jedoch der Zustand von Dach, Türen, Dichtungen und Wänden geprüft werden." },
  { q: "Kann ein Seecontainer dauerhaft draußen stehen?", a: "Ja, Seecontainer sind für den Außeneinsatz gebaut und können dauerhaft im Freien stehen. Ein tragfähiger, ebener Untergrund und eine gute Belüftung helfen dabei, die Lebensdauer zu verlängern." },
  { q: "Braucht man eine Genehmigung für einen Seecontainer?", a: "Das hängt vom Standort, der Nutzungsdauer und dem Bundesland ab. Kurzfristige Nutzung als Lagercontainer ist oft unkomplizierter als eine dauerhafte Aufstellung. Bei langfristiger oder gewerblicher Nutzung sollte die zuständige Behörde kontaktiert werden." },
];

/* ── Ratgeber links ── */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Kompakt & flexibel" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maximaler Stauraum" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Außen- & Innenmaße" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preise & Kostenfaktoren" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliches & Vorschriften" },
];

/* ── Helpers ── */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* ── Dimensions table ── */
const DIMS = [
  ["20 Fuß Seecontainer", "6,06 × 2,44 × 2,59 m", "5,90 × 2,35 × 2,39 m", "ca. 33 m³"],
  ["40 Fuß Seecontainer", "12,19 × 2,44 × 2,59 m", "12,03 × 2,35 × 2,39 m", "ca. 67 m³"],
  ["40 Fuß High Cube", "12,19 × 2,44 × 2,90 m", "12,03 × 2,35 × 2,69 m", "ca. 76 m³"],
];

export default function SeecontainerKaufen() {
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
          <img src={IMG_HERO} alt="Seecontainer kaufen – Containerverladung per Reach Stacker" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.87) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Seecontainer kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Seecontainer kaufen – robuste Container für Lagerung, Transport und Gewerbe
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Seecontainer kaufen in Deutschland – neue und gebrauchte Seecontainer in 20 Fuß und 40 Fuß. Robuste Lager- und Transportcontainer mit Lieferung direkt zum Standort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/angebot" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop?type=Standard" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              Seecontainer ansehen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Seecontainer kaufen für flexible Nutzung ── */}
        <section className="mb-14">
          <SH>Seecontainer kaufen für flexible Nutzung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wenn Sie einen <strong className="text-foreground">Seecontainer kaufen</strong> möchten, entscheiden Sie sich für eine besonders robuste, sichere und vielseitig einsetzbare Containerlösung. Seecontainer werden ursprünglich für den internationalen Warentransport gebaut und sind daher auf hohe Belastbarkeit, lange Nutzungsdauer und wechselnde Wetterbedingungen ausgelegt. Genau deshalb eignen sie sich heute nicht nur für Transportzwecke, sondern auch hervorragend als Lagercontainer, Materialcontainer, Baustellencontainer oder sichere Abstellfläche für Unternehmen und Privatkunden.
            </p>
            <p>
              Ein Seecontainer bietet stabilen Schutz vor Wind, Regen und unbefugtem Zugriff. Er kann auf Firmengeländen, Baustellen, landwirtschaftlichen Betrieben, Industrieflächen oder privaten Grundstücken eingesetzt werden. Je nach Bedarf können Sie neue oder gebrauchte Seecontainer kaufen und zwischen verschiedenen Größen wählen.
            </p>
            <p>
              Besonders gefragt sind der <strong className="text-foreground">Seecontainer 20 Fuß</strong> und der <strong className="text-foreground">Seecontainer 40 Fuß</strong>. Während ein <IL to="/20-fuss-container-kaufen">20 Fuß Container</IL> kompakt und flexibel einsetzbar ist, bietet ein <IL to="/40-fuss-container-kaufen">40 Fuß Container</IL> deutlich mehr Lagerfläche für größere Mengen, Maschinen oder Waren.
            </p>
          </div>
        </section>

        {/* ── Was ist ein Seecontainer? ── */}
        <section className="mb-14">
          <SH>Was ist ein Seecontainer?</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein Seecontainer ist ein genormter Stahlcontainer, der für den sicheren Transport von Waren per Schiff, Bahn und LKW entwickelt wurde. Die stabile Konstruktion aus widerstandsfähigem Stahl macht ihn besonders langlebig und belastbar. Durch seine standardisierten Maße kann ein Seecontainer einfach transportiert, gestapelt und an verschiedenen Standorten eingesetzt werden.
              </p>
              <p>
                Im Alltag werden Seecontainer heute nicht nur für Fracht und Logistik genutzt. Viele Kunden kaufen Seecontainer als dauerhafte Lagerlösung, als mobile Werkstatt, als Materiallager auf Baustellen oder als sichere Unterbringung für Maschinen, Werkzeuge und Waren. Durch die robuste Bauweise sind sie eine praktische Alternative zu festen Lagerräumen oder teuren Mietflächen.
              </p>
              <p>
                Wer sich noch nicht sicher ist, welcher Containertyp der richtige ist, kann zunächst einen Blick auf unsere Übersicht <IL to="/container-kaufen">Container kaufen</IL> werfen. Dort finden Sie verschiedene Containerarten wie Lagercontainer, <IL to="/buerocontainer-kaufen">Bürocontainer</IL>, <IL to="/wohncontainer-kaufen">Wohncontainer</IL> und <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> im Vergleich.
              </p>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 bg-muted/30 flex items-center justify-center">
                <img src={IMG_OPEN_SIDE} alt="40 Fuß High Cube Open Side Seecontainer" className="w-full h-full object-contain p-5" />
              </div>
              <div className="p-4">
                <p className="font-heading font-bold text-sm text-foreground mb-1">Auch als Open-Side-Variante</p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Seitlich öffnende Seecontainer bieten besonders einfachen Zugriff auf sperrige Waren.
                </p>
                <Link to="/open-side-container-kaufen" className="inline-flex items-center gap-1 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                  Open Side ansehen <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Neue oder gebrauchte Seecontainer? ── */}
        <section className="mb-14">
          <SH>Neue oder gebrauchte Seecontainer kaufen?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Beim Kauf eines Seecontainers können Sie in der Regel zwischen neuen und gebrauchten Modellen wählen. Welche Variante besser geeignet ist, hängt vom Einsatzbereich, Budget und gewünschten Zustand ab.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_NEW_20FT} alt="Neuer grauer 20 Fuß Seecontainer" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neue Seecontainer (One Trip)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein neuer Seecontainer ist ideal, wenn ein sehr gepflegtes Erscheinungsbild, eine lange Nutzungsdauer und möglichst wenige Gebrauchsspuren wichtig sind. Neue Container werden häufig von Unternehmen gewählt, die den Container sichtbar auf dem Firmengelände oder für langfristige Projekte einsetzen möchten.</p>
                <ul className="space-y-1.5">
                  {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal für repräsentative Standorte", "Vollständiger Korrosionsschutz"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_USED} alt="Gebrauchte gestapelte 40 Fuß Seecontainer" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte Seecontainer (Cargo-Worthy)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Wenn der praktische Nutzen im Vordergrund steht, ist ein <strong className="text-foreground">Seecontainer gebraucht kaufen</strong> oft die wirtschaftlichere Lösung. Gebrauchsspuren wie Kratzer, Dellen oder leichte Roststellen sind normal. Wichtig ist, dass der Container technisch intakt, stabil sowie wind- und wasserdicht ist.</p>
                <ul className="space-y-1.5">
                  {["Deutlich günstiger als Neuware", "Kurzfristig verfügbar", "Ideal für Lager, Baustelle & Gewerbe", "Sofort einsatzbereit"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Auch die Suchanfrage <strong className="text-foreground">Seecontainer kaufen gebraucht</strong> kommt häufig von Kunden, die eine robuste Lagerlösung suchen und dabei Kosten sparen möchten. Für Baustellen, Landwirtschaft, Industrie und private Lagerzwecke sind gebrauchte Seecontainer oft vollkommen ausreichend.
          </p>
        </section>

        <CtaBanner text="Unverbindliches Angebot in 24 Stunden" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* ── 20 Fuß Seecontainer ── */}
        <section className="mb-14">
          <SH>Seecontainer 20 Fuß kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Der 20-Fuß-Seecontainer gehört zu den beliebtesten Containergrößen. Er bietet ein gutes Verhältnis zwischen Lagerfläche, Transportfähigkeit und Platzbedarf. Viele Kunden, die einen <strong className="text-foreground">Seecontainer kaufen 20 Fuß</strong>, suchen eine praktische Lösung für Material, Werkzeuge, Möbel, Waren oder Maschinen.
              </p>
              <p>
                Ein 20-Fuß-Container eignet sich besonders für Baustellen, Handwerksbetriebe, kleine Unternehmen, landwirtschaftliche Betriebe und private Grundstücke. Er ist groß genug für viele Lagerzwecke, bleibt aber kompakt genug, um auf begrenzten Flächen aufgestellt zu werden.
              </p>
              <p>
                Wenn Sie gezielt einen <strong className="text-foreground">Seecontainer 20 Fuß kaufen</strong> möchten, finden Sie auf unserer Seite <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL> weitere Informationen zu Preisen, Maßen, Gewicht, Lieferung und verfügbaren Ausführungen.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_20FT} alt="20 Fuß Seecontainer kaufen" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">20 Fuß Seecontainer</p>
                  <p className="text-xs text-muted-foreground">ca. 6,06 × 2,44 × 2,59 m | ~33 m³ Volumen</p>
                  <Link to="/20-fuss-container-kaufen" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                    Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 40 Fuß Seecontainer ── */}
        <section className="mb-14">
          <SH>Seecontainer 40 Fuß kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein 40-Fuß-Seecontainer bietet deutlich mehr Stauraum und eignet sich besonders für größere Warenmengen, sperrige Güter oder gewerbliche Lagerflächen. Wer einen <strong className="text-foreground">Seecontainer kaufen 40 Fuß</strong> möchte, sucht meist eine langfristige Lösung für Industrie, Handel, Baugewerbe, Landwirtschaft oder Logistik.
              </p>
              <p>
                Der 40-Fuß-Container ist besonders sinnvoll, wenn viel Lagerfläche benötigt wird und am Standort ausreichend Platz für Lieferung und Aufstellung vorhanden ist. Er kann zur Lagerung von Maschinen, Palettenware, Baumaterialien, Ersatzteilen oder saisonalen Waren eingesetzt werden.
              </p>
              <p>
                Für Kunden mit hohem Platzbedarf empfehlen wir die Seite <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL>. Dort werden Standard- und High-Cube-Varianten, gebrauchte und neue Modelle, Preise und Liefermöglichkeiten genauer erklärt.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_40FT} alt="40 Fuß Seecontainer kaufen – High Cube" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">40 Fuß Seecontainer</p>
                  <p className="text-xs text-muted-foreground">ca. 12,19 × 2,44 × 2,59 m | ~67 m³ Volumen</p>
                  <Link to="/40-fuss-container-kaufen" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                    Mehr erfahren <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Seecontainer Maße ── */}
        <section className="mb-14">
          <SH>Seecontainer Maße und technische Daten</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Die genauen <strong className="text-foreground">Seecontainer Maße</strong> hängen von der jeweiligen Größe und Ausführung ab. Für die Planung sind vor allem Außenmaße, Innenmaße, Türöffnung, Eigengewicht und Ladevolumen wichtig.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  {["Containergröße", "Außenmaße (L×B×H)", "Innenmaße (L×B×H)", "Volumen"].map((h, i) => (
                    <th key={i} className="px-5 py-4 text-left font-heading font-semibold text-white text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DIMS.map((row, i) => (
                  <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-5 py-4 font-heading font-semibold text-foreground text-sm">{row[0]}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row[1]}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row[2]}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Diese Werte können je nach Hersteller und Ausführung leicht abweichen. Wenn Sie die <strong className="text-foreground">Maße Seecontainer</strong> genauer vergleichen möchten, finden Sie eine vollständige Übersicht auf unserer Seite <IL to="/container-masse">Container Maße</IL>.
          </p>
        </section>

        {/* ── Wofür eignet sich ein Seecontainer? ── */}
        <section className="mb-14">
          <SH>Wofür eignet sich ein Seecontainer?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein Seecontainer ist eine sehr vielseitige Lösung. Besonders häufig wird er als Lagercontainer genutzt, weil er stabil, abschließbar und wetterfest ist. Unternehmen nutzen Seecontainer zur Lagerung von Werkzeugen, Ersatzteilen, Baumaterialien, Maschinen oder Handelswaren. Auch auf Baustellen sind Seecontainer beliebt, da sie schnell geliefert, sicher verschlossen und bei Projektende wieder versetzt werden können.
            </p>
            <p>
              In der Landwirtschaft dienen Seecontainer zur Unterbringung von Geräten, Futtermitteln, Ersatzteilen oder saisonaler Ausrüstung. Im privaten Bereich werden sie häufig während Umzügen, Renovierungen oder für zusätzlichen Stauraum genutzt.
            </p>
            <p>
              Für temperaturempfindliche Waren ist ein klassischer Seecontainer jedoch nicht immer ausreichend. In solchen Fällen kann ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> die bessere Wahl sein. Wenn Sie dagegen eine Arbeitsfläche benötigen, ist ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> besser geeignet.
            </p>
          </div>
        </section>

        {/* ── Seecontainer kaufen mit Lieferung ── */}
        <section className="mb-14">
          <SH>Seecontainer kaufen mit Lieferung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Viele Kunden suchen gezielt nach <strong className="text-foreground">Seecontainer kaufen mit Lieferung</strong>, weil der Transport eines Containers ohne Spezialfahrzeug kaum möglich ist. Die Lieferung erfolgt in der Regel per LKW. Je nach Standort, Containergröße und Entlademöglichkeit kann ein LKW mit Kran eingesetzt werden, damit der Container direkt am gewünschten Platz abgesetzt werden kann.
            </p>
            <p>
              Vor der Lieferung sollte geprüft werden, ob die Zufahrt breit genug ist, ob genügend Rangierfläche vorhanden ist und ob der Untergrund für das Gewicht des Containers geeignet ist. Besonders bei 40-Fuß-Containern ist eine sorgfältige Planung wichtig.
            </p>
            <p>
              Mehr zum Thema erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
            </p>
          </div>
        </section>

        {/* ── Worauf achten? ── */}
        <section className="mb-14">
          <SH>Worauf sollte man beim Kauf eines Seecontainers achten?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Beim Kauf eines Seecontainers sollten Sie zuerst den Einsatzzweck definieren. Für einfache Lagerzwecke reicht oft ein gebrauchter Container in gutem Zustand. Für optisch anspruchsvolle Standorte oder langfristige Nutzung kann ein neuer Container sinnvoll sein.
            </p>
            <p>
              Wichtig ist außerdem der Zustand des Containers. Prüfen Sie bei gebrauchten Modellen besonders Türen, Dichtungen, Boden, Dach, Wände und Roststellen. Achten Sie auf die passende Größe und einen festen, ebenen <IL to="/container-fundament">Untergrund</IL>. Bei Daueraufstellung kann eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein.
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
          <SH>Vorteile eines Seecontainers</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Ein Seecontainer ist langlebig, robust und vielseitig nutzbar. Durch seine massive Stahlkonstruktion eignet er sich für anspruchsvolle Bedingungen und den langfristigen Außeneinsatz. Im Vergleich zu festen Lagerflächen bietet ein gekaufter Seecontainer mehr Unabhängigkeit.
          </p>
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
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt den passenden Seecontainer finden</h2>
            <p className="text-white/60 text-sm">Unverbindlich anfragen – Angebot inkl. Lieferung erhalten.</p>
          </div>
          <Link to="/angebot" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zum Seecontainer-Kauf</h2>
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
