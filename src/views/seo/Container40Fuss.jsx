"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Package, Truck } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Images â”€â”€ */
const IMG_40FT_STANDARD = "/images/40ft-container-blue-stack.jpg";
const IMG_40FT_HC = "/images/40ft-hc-white-modified.jpg";
const IMG_40FT_OPENSIDE = "/images/40ft-hc-open-side-blue.jpg";
const IMG_40FT_NEW = "/images/40ft-hc-open-side-render.webp";
const IMG_40FT_USED = "/images/40ft-open-side-ral1015.jpg";

/* â”€â”€ Specs table â”€â”€ */
const SPECS = [
  ["Außenlänge", "ca. 12,19 m", "ca. 12,19 m"],
  ["Außenbreite", "ca. 2,44 m", "ca. 2,44 m"],
  ["Außenhöhe", "ca. 2,59 m", "ca. 2,90 m"],
  ["Innenlänge", "ca. 12,03 m", "ca. 12,03 m"],
  ["Innenbreite", "ca. 2,35 m", "ca. 2,35 m"],
  ["Innenhöhe", "ca. 2,39 m", "ca. 2,69 m"],
  ["Volumen", "ca. 67 m³", "ca. 76 m³"],
  ["Eigengewicht", "ca. 3.700–4.000 kg", "ca. 3.900–4.200 kg"],
  ["Türöffnung Breite", "ca. 2,34 m", "ca. 2,34 m"],
  ["Türöffnung Höhe", "ca. 2,28 m", "ca. 2,58 m"],
];

/* â”€â”€ High Cube use cases â”€â”€ */
const HC_USE_CASES = [
  "Sperrige Waren und Maschinen",
  "Palettenware mit zusätzlicher Höhe",
  "Lagerregale und gewerbliche Lagerung",
  "Industrie und Logistik",
  "Langfristige Lagerlösungen",
  "Projekte mit maximalem Innenvolumen",
];

/* â”€â”€ Delivery checklist â”€â”€ */
const DELIVERY_INFO = [
  "Genaue Lieferadresse",
  "Gewünschte Containergröße",
  "Standard oder High Cube",
  "Zufahrtsbreite und Platzverhältnisse",
  "Gewünschte Position des Containers",
  "Untergrund am Aufstellort",
  "Mögliche Hindernisse (Bäume, Zäune, Kabel, enge Einfahrten)",
];

/* â”€â”€ Use cases â”€â”€ */
const USE_CASES = [
  "Industrie und Produktion",
  "Baustellen und Bauunternehmen",
  "Landwirtschaftliche Betriebe",
  "Handel und Online Shops",
  "Maschinen und Ersatzteillager",
  "Logistik und Transport",
  "Möbel und Umzugslagerung",
  "Saisonale Lagerflächen",
  "Großes Materiallager auf Firmengeländen",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { title: "Maximale Lagerfläche", desc: "Viel nutzbarer Raum auf vergleichsweise kompakter Grundfläche – ideal für große Warenmengen." },
  { title: "Extrem robust", desc: "Massive Stahlkonstruktion für jahrzehntelangen Außeneinsatz unter anspruchsvollen Bedingungen." },
  { title: "Vielseitig einsetzbar", desc: "Als Lager, Materialraum, Transportcontainer, Werkstattbasis oder Erweiterung bestehender Flächen." },
  { title: "Wirtschaftlich", desc: "Eine kostengünstige Alternative zu festen Lagerhallen oder dauerhaft gemieteten Lagerflächen." },
  { title: "Mobil & versetzbar", desc: "Bei Bedarf jederzeit an einen anderen Standort transportierbar oder durch weitere Container ergänzbar." },
  { title: "Standard & High Cube", desc: "Verfügbar als Standard Container oder als High Cube Variante mit zusätzlicher Innenhöhe." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein 40 Fuß Container?", a: "Der Preis eines 40 Fuß Containers hängt von Zustand, Ausführung, Baujahr, Standort, Verfügbarkeit und Lieferung ab. Gebrauchte 40 Fuß Container sind meist günstiger als neue Modelle. High Cube Container oder isolierte Varianten können teurer sein als Standard Container." },
  { q: "Kann man einen 40 Fuß Container gebraucht kaufen?", a: "Ja, gebrauchte 40 Fuß Container sind sehr gefragt. Sie eignen sich besonders für Lagerung, Baustellen, Industrie, Landwirtschaft und Gewerbe. Wichtig ist, dass der Container trotz Gebrauchsspuren technisch intakt, wind und wasserdicht sowie sicher verschließbar ist." },
  { q: "Was ist der Unterschied zwischen 40 Fuß Standard und 40 Fuß High Cube?", a: "Der wichtigste Unterschied ist die Höhe. Ein 40 Fuß High Cube Container ist höher als ein Standard Container und bietet dadurch mehr Innenvolumen. Das ist besonders praktisch für sperrige Waren, Lagerregale oder Projekte mit hohem Raumbedarf." },
  { q: "Welche Maße hat ein 40 Fuß Container?", a: "Ein 40 Fuß Standard Container hat typischerweise Außenmaße von ca. 12,19 m Länge, 2,44 m Breite und 2,59 m Höhe. Die Innenmaße liegen ungefähr bei 12,03 m Länge, 2,35 m Breite und 2,39 m Höhe. Ein High Cube Container ist ca. 2,90 m hoch." },
  { q: "Wie schwer ist ein 40 Fuß Container?", a: "Ein 40 Fuß Standard Container wiegt in der Regel etwa 3.700 bis 4.000 kg. Ein 40 Fuß High Cube Container kann etwas schwerer sein. Das genaue Gewicht hängt von Hersteller, Baujahr und Ausführung ab." },
  { q: "Wird ein 40 Fuß Container mit Lieferung angeboten?", a: "Ja, ein 40 Fuß Container kann direkt zum gewünschten Standort geliefert werden. Wegen der Größe sollte die Lieferung gut geplant werden. Wichtig sind eine geeignete Zufahrt, ausreichend Rangierfläche und ein tragfähiger Untergrund." },
  { q: "Kann man einen 40 Fuß Container isoliert kaufen?", a: "Ja, isolierte 40 Fuß Container sind möglich und eignen sich für Anwendungen, bei denen Temperaturschwankungen oder Kondenswasser reduziert werden sollen. Für aktiv gekühlte Lagerung ist jedoch ein Kühlcontainer besser geeignet." },
  { q: "Ist ein 40 Fuß Container wasserdicht?", a: "Ein technisch intakter 40 Fuß Seecontainer ist in der Regel wind und wasserdicht. Bei gebrauchten Modellen sollten Dach, Türen, Dichtungen und Wände geprüft werden, damit der Container trocken bleibt." },
  { q: "Braucht man eine Genehmigung für einen 40 Fuß Container?", a: "Das hängt von Standort, Nutzungsdauer und Nutzung ab. Für kurzfristige Lagerung kann die Aufstellung unkomplizierter sein. Bei dauerhafter Nutzung, gewerblicher Aufstellung oder baulichen Veränderungen sollte die zuständige Behörde kontaktiert werden." },
  { q: "Was ist besser: 20 Fuß oder 40 Fuß Container?", a: "Ein 20 Fuß Container ist kompakter und einfacher auf kleineren Flächen zu platzieren. Ein 40 Fuß Container bietet deutlich mehr Lagerraum und eignet sich besser für große Warenmengen, Industrie, Logistik und gewerbliche Lagerung." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische Transport- und Lagercontainer" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Kompakte Allround-Lösung" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Außen- und Innenmaße" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preise und Kostenfaktoren" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf und Transportkosten" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund und Aufstellung" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliches und Vorschriften" },
];

/* â”€â”€ Helpers â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

export default function Container40Fuss() {
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
        <div className="absolute inset-0">
          <img src={IMG_40FT_OPENSIDE} alt="40 Fuß Container kaufen" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.87) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">40 Fuß Container kaufen</span>
          </nav>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            40 Fuß Container kaufen – große Lagerfläche für Gewerbe, Industrie und Transport
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            40 Fuß Container kaufen in Deutschland – neue und gebrauchte 40 Fuß Container, Standard und High Cube, für Lagerung, Gewerbe, Industrie und Transport. Mit Lieferung direkt zum Standort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop?size=40ft" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              40 Fuß Container ansehen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Intro â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container kaufen für maximale Lagerkapazität</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wenn Sie einen <strong className="text-foreground">40 Fuß Container kaufen</strong> möchten, entscheiden Sie sich für eine besonders große und robuste Containerlösung. Der 40 Fuß Container bietet deutlich mehr Stauraum als kleinere Modelle und eignet sich ideal für Unternehmen, Baustellen, Industrie, Landwirtschaft, Handel und Logistik. Er wird häufig dort eingesetzt, wo große Mengen an Waren, Maschinen, Baumaterialien, Werkzeugen oder saisonalen Produkten sicher gelagert werden müssen.
            </p>
            <p>
              Ein 40 Fuß Container ist besonders interessant, wenn langfristig viel Lagerfläche benötigt wird und am Standort ausreichend Platz für Lieferung und Aufstellung vorhanden ist. Durch seine stabile Stahlkonstruktion ist er für den dauerhaften Außeneinsatz geeignet und schützt den Inhalt zuverlässig vor Wind, Regen und unbefugtem Zugriff.
            </p>
            <p>
              Bei uns können Sie neue und gebrauchte 40 Fuß Container kaufen – je nach Bedarf als Standard Container, High Cube Container oder spezielle Ausführung. Wenn Sie zunächst verschiedene Containerarten vergleichen möchten, finden Sie weitere Informationen auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Warum einen 40 Fuß Container? â”€â”€ */}
        <section className="mb-14">
          <SH>Warum einen 40 Fuß Container kaufen?</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein 40 Fuß Container bietet vor allem eines: viel nutzbaren Raum. Im Vergleich zum 20 Fuß Container verdoppelt sich die Länge nahezu, wodurch deutlich mehr Waren, Geräte oder Materialien gelagert werden können. Das macht ihn besonders attraktiv für gewerbliche Kunden, die eine wirtschaftliche Alternative zu festen Lagerhallen oder dauerhaft gemieteten Lagerflächen suchen.
              </p>
              <p>
                Auf Baustellen wird der 40 Fuß Container häufig als großes Materiallager genutzt. In der Industrie dient er zur Lagerung von Ersatzteilen, Maschinenkomponenten, Verpackungsmaterial oder Palettenware. Landwirtschaftliche Betriebe nutzen ihn zur Unterbringung von Geräten, Werkzeugen und saisonalen Produkten. Auch Händler und Online Shops profitieren von zusätzlichem Lagerraum direkt am Standort.
              </p>
              <p>
                Wenn Sie weniger Platz benötigen oder der Standort begrenzt ist, kann ein <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL> die bessere Wahl sein. Für maximale Lagerfläche ist der 40 Fuß Container jedoch die stärkere Lösung.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_40FT_STANDARD} alt="40 Fuß Standard Container" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">40 Fuß Standard Container</p>
                  <p className="text-xs text-muted-foreground">ca. 12,19 × 2,44 × 2,59 m | ~67 m³ Volumen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Neue oder gebrauchte? â”€â”€ */}
        <section className="mb-14">
          <SH>Neue oder gebrauchte 40 Fuß Container kaufen?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Beim Kauf eines 40 Fuß Containers stellt sich häufig die Frage, ob ein neuer oder gebrauchter Container sinnvoller ist. Beide Varianten haben klare Vorteile.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden bg-muted/30">
                <img src={IMG_40FT_NEW} alt="Neuer 40 Fuß High Cube Open Side Container" className="w-full h-full object-contain p-4" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neue 40 Fuß Container (One Trip)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein neuer 40 Fuß Container eignet sich besonders, wenn ein sehr guter optischer Zustand, lange Nutzungsdauer und möglichst geringe Gebrauchsspuren wichtig sind. Wenn der Container gut sichtbar auf dem Firmengelände steht oder für ein langfristiges Projekt genutzt wird, ist ein neues Modell oft die beste Wahl.</p>
                <ul className="space-y-1.5">
                  {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal für repräsentative Standorte", "Vollständiger Korrosionsschutz"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_40FT_USED} alt="Gebrauchter 40 Fuß Open Side Container RAL 1015" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte 40 Fuß Container (Cargo-Worthy)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein gebrauchter 40 Fuß Container ist besonders interessant, wenn der praktische Nutzen im Vordergrund steht. Viele Kunden suchen nach <strong className="text-foreground">40 Fuß Container gebraucht kaufen</strong>, weil sie eine robuste Lagerlösung zu einem attraktiveren Preis benötigen. Gebrauchsspuren sind normal – entscheidend ist, dass der Container technisch intakt, stabil, sicher verschließbar sowie wind und wasserdicht ist.</p>
                <ul className="space-y-1.5">
                  {["Deutlich günstiger als Neuware", "Kurzfristig verfügbar", "Ideal für Lager, Baustelle & Gewerbe", "Sofort einsatzbereit"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Preis â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container gebraucht kaufen Preis</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Die Frage nach dem <strong className="text-foreground">40 Fuß Container gebraucht kaufen Preis</strong> gehört zu den wichtigsten Suchanfragen. Der Preis hängt jedoch von mehreren Faktoren ab. Entscheidend sind Zustand, Baujahr, Ausführung, Verfügbarkeit, Standort, Farbe und Lieferkosten. Ein einfacher gebrauchter Standard Container ist in der Regel günstiger als ein neuwertiger 40 Fuß High Cube Container oder ein speziell ausgestatteter Container.
            </p>
            <p>
              Auch der Lieferort beeinflusst den Gesamtpreis. Ein Container, der nahe am Depot verfügbar ist, kann häufig günstiger geliefert werden als ein Modell, das über eine längere Strecke transportiert werden muss. Deshalb sollte bei einer Anfrage immer der gewünschte Lieferort angegeben werden.
            </p>
            <p>
              Für ein realistisches Angebot sind folgende Informationen hilfreich: gewünschter Zustand, Standard oder High Cube, geplanter Einsatzbereich, Lieferadresse, gewünschter Lieferzeitraum und Entlademöglichkeit vor Ort. Mehr zu Preisen erfahren Sie auf unserer Seite <IL to="/container-kosten">Container Kosten</IL>.
            </p>
          </div>
        </section>

        <CtaBanner text="Unverbindliches Angebot für 40 Fuß Container" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ High Cube â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß High Cube Container kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">40 Fuß High Cube Container kaufen</strong> ist besonders sinnvoll, wenn zusätzliche Innenhöhe benötigt wird. Der High Cube Container ist im Vergleich zum Standard Container höher und bietet dadurch mehr Ladevolumen. Das ist besonders praktisch für sperrige Waren, Maschinen, Lagerregale, Verpackungsmaterial oder gewerbliche Lagerlösungen mit hohem Raumbedarf.
              </p>
              <p>
                Viele Kunden suchen gezielt nach <strong className="text-foreground">40 Fuß High Cube Container gebraucht kaufen</strong> oder <strong className="text-foreground">40 Fuß HC Container kaufen</strong>, weil diese Variante mehr nutzbare Höhe bietet und für viele Lagerzwecke komfortabler ist.
              </p>
              <p>
                Wenn die zusätzliche Höhe nicht benötigt wird, reicht oft ein Standard 40 Fuß Container aus. Wenn jedoch jeder Kubikmeter zählt, ist der High Cube Container meist die bessere Wahl.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_40FT_HC} alt="40 Fuß High Cube Container Maße" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">40 Fuß High Cube Container</p>
                  <p className="text-xs text-muted-foreground">ca. 12,19 × 2,44 × 2,90 m | ~76 m³ Volumen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 mt-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Package className="w-4 h-4" style={{ color: ORANGE }} />
              40 Fuß High Cube Container – besonders geeignet für:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {HC_USE_CASES.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Standard oder High Cube? â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container Standard oder High Cube?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Die Entscheidung zwischen Standard und High Cube hängt vom geplanten Einsatz ab. Ein Standard 40 Fuß Container bietet bereits sehr viel Lagerfläche und ist für viele Anwendungen ausreichend. Er eignet sich für Maschinen, Werkzeuge, Baumaterialien, Möbel, Waren und allgemeine Lagerzwecke.
            </p>
            <p>
              Ein 40 Fuß High Cube Container bietet zusätzlich mehr Innenhöhe. Das macht ihn ideal für sperrige Güter oder wenn Lagerregale genutzt werden sollen. Auch für Umbauten, Werkstattlösungen oder spezielle Projekte ist die High Cube Variante oft praktischer, weil sie mehr Bewegungsfreiheit und mehr Volumen bietet.
            </p>
            <p>
              Wenn Sie unsicher sind, welche Variante besser geeignet ist, hilft ein Blick auf die Seite <IL to="/container-masse">Container Maße</IL>. Dort können Sie Standard, High Cube, 20 Fuß und 40 Fuß Container direkt miteinander vergleichen.
            </p>
          </div>
        </section>

        {/* â”€â”€ Maße und technische Daten â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container Maße und technische Daten</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die genauen Maße können je nach Hersteller und Ausführung leicht variieren. Für die Planung sind Außenmaße, Innenmaße, Türöffnung, Eigengewicht und Volumen besonders wichtig.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  <th className="px-5 py-4 text-left font-heading font-semibold text-white text-xs uppercase tracking-wide">Merkmal</th>
                  <th className="px-5 py-4 text-right font-heading font-semibold text-white text-xs uppercase tracking-wide">40 Fuß Standard</th>
                  <th className="px-5 py-4 text-right font-heading font-semibold text-white text-xs uppercase tracking-wide">40 Fuß High Cube</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((row, i) => (
                  <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-5 py-3 font-heading font-semibold text-foreground text-sm">{row[0]}</td>
                    <td className="px-5 py-3 text-muted-foreground text-right">{row[1]}</td>
                    <td className="px-5 py-3 text-muted-foreground text-right">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Diese Werte sind Richtwerte und können je nach Modell leicht abweichen. Eine ausführliche Übersicht zu <strong className="text-foreground">40 Fuß Container Maße</strong>, 20 Fuß Container Maße, 10 Fuß Container Maße und High Cube Container Maße finden Sie auf unserer Seite <IL to="/container-masse">Container Maße</IL>.
          </p>
        </section>

        {/* â”€â”€ Lieferung â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container kaufen mit Lieferung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Viele Kunden suchen nach <strong className="text-foreground">40 Fuß Container kaufen mit Lieferung</strong>, weil der Transport eines großen Containers sorgfältig geplant werden muss. Ein 40 Fuß Container ist lang, schwer und benötigt ausreichend Platz für Zufahrt, Rangieren und Entladung. Die Lieferung erfolgt in der Regel per LKW. Je nach Standort und Entladesituation kann ein Fahrzeug mit Kran notwendig sein.
            </p>
            <p>
              Vor der Lieferung sollte geprüft werden, ob die Zufahrt breit genug ist und ob vor Ort ausreichend Platz zum Absetzen des Containers vorhanden ist. Auch der Untergrund muss tragfähig, eben und stabil sein. Besonders bei einem 40 Fuß Container ist ein geeigneter Aufstellplatz wichtig, da das Gewicht und die Länge deutlich höher sind als bei kleineren Modellen.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4" style={{ color: ORANGE }} />
              Für die Lieferung hilfreiche Angaben
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {DELIVERY_INFO.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Regionen â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container kaufen Hamburg, Nürnberg und weitere Regionen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Viele Käufer suchen regional, zum Beispiel nach <strong className="text-foreground">40 Fuß Container kaufen Hamburg</strong> oder <strong className="text-foreground">40 Fuß Container gebraucht kaufen Nürnberg</strong>. Der Standort spielt beim Containerkauf eine wichtige Rolle, weil Verfügbarkeit und Transportkosten je nach Region unterschiedlich sein können.
            </p>
            <p>
              In großen Logistikregionen wie Hamburg sind Seecontainer oft besonders gefragt, weil dort viele Containerbewegungen stattfinden. Auch in Städten wie Nürnberg, München, Berlin, Hannover oder im Ruhrgebiet werden 40 Fuß Container häufig für Gewerbe, Bauprojekte, Lagerung und Industrie genutzt.
            </p>
            <p>
              Je näher ein passender Container am Lieferort verfügbar ist, desto effizienter kann die Lieferung geplant werden. Deshalb lohnt es sich, bei der Anfrage immer die gewünschte Lieferadresse anzugeben. Mehr zum Transport erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Isoliert â”€â”€ */}
        <section className="mb-14">
          <SH>40 Fuß Container isoliert kaufen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein <strong className="text-foreground">40 Fuß Container isoliert kaufen</strong> ist dann sinnvoll, wenn der Inhalt besser vor Temperaturschwankungen, Kondenswasser oder Hitze geschützt werden soll. Isolierte Container werden häufig für empfindlichere Waren, Werkstattlösungen, technische Lagerung oder spezielle Projekte genutzt.
            </p>
            <p>
              Ein isolierter 40 Fuß Container ist jedoch nicht dasselbe wie ein Kühlcontainer. Während ein isolierter Container den Innenraum besser gegen äußere Temperaturen abschirmt, sorgt ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> aktiv für eine kontrollierte Temperatur. Für Lebensmittel, Medikamente oder temperaturempfindliche Waren ist deshalb häufig ein Kühlcontainer die bessere Lösung.
            </p>
            <p>
              Für einfache Lagerzwecke reicht oft ein normaler <IL to="/seecontainer-kaufen">Seecontainer</IL>. Wenn jedoch Feuchtigkeit, Temperaturschwankungen oder längere Lagerzeiten eine Rolle spielen, kann eine isolierte Variante sinnvoll sein.
            </p>
          </div>
        </section>

        {/* â”€â”€ Wofür eignet sich? â”€â”€ */}
        <section className="mb-14">
          <SH>Wofür eignet sich ein 40 Fuß Container?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Ein 40 Fuß Container eignet sich besonders für große Lager und Transportaufgaben. Er bietet ausreichend Platz für Maschinen, Baumaterialien, Werkzeuge, Paletten, Möbel, Ersatzteile, Handelswaren und saisonale Produkte. Durch seine robuste Bauweise kann er dauerhaft im Außenbereich eingesetzt werden.
            </p>
            <p>
              Wenn Sie hingegen eine mobile Arbeitsfläche suchen, kann ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> besser geeignet sein. Für Wohnzwecke empfiehlt sich ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL>. Für Kühlware oder temperaturgeführte Lagerung ist ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> die richtige Lösung.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Package className="w-4 h-4" style={{ color: ORANGE }} />
              Typische Einsatzbereiche
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {USE_CASES.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Worauf achten? â”€â”€ */}
        <section className="mb-14">
          <SH>Worauf sollte man beim Kauf achten?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Bevor Sie einen 40 Fuß Container kaufen, sollten Sie den Einsatzzweck genau festlegen. Für reine Lagerung ist ein gebrauchter Standard Container oft ausreichend. Für repräsentative Standorte, langfristige Nutzung oder sichtbare Unternehmensbereiche kann ein neuer Container sinnvoll sein. Wenn zusätzlicher Stauraum in der Höhe benötigt wird, ist ein High Cube Container empfehlenswert.
            </p>
            <p>
              Bei gebrauchten Containern sollten Türen, Dichtungen, Boden, Dach und Wände sorgfältig geprüft werden. Der Container sollte sicher verschließbar sein und innen trocken bleiben. Auch der Standort ist entscheidend: Der Untergrund sollte eben und tragfähig sein. Für langfristige Aufstellung können Punktfundamente, Betonplatten oder verdichteter Schotter sinnvoll sein. Bei Daueraufstellung kann eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein.
            </p>
          </div>
        </section>

        {/* â”€â”€ Vorteile â”€â”€ */}
        <section className="mb-14">
          <SH>Vorteile eines 40 Fuß Containers</SH>
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

        {/* â”€â”€ CTA â”€â”€ */}
        <div className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
          <div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt 40 Fuß Container anfragen</h2>
            <p className="text-white/60 text-sm">Unverbindlich anfragen – Angebot inkl. Lieferung erhalten.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zum 40 Fuß Container</h2>
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

