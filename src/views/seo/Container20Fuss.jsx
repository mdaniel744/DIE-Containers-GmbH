"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Package, Wrench } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Images â”€â”€ */
const IMG_20FT_HERO = "/images/20ft-used-red-rear.jpg";
const IMG_20FT_STANDARD = "/images/20ft-used-red-side.jpg";
const IMG_20FT_HC = "/images/20ft-hc-blue-ral5013.jpg";
const IMG_20FT_OPEN_SIDE_CLOSED = "/images/20ft-hc-open-side-blue-closed.jpg";
const IMG_20FT_OPEN_SIDE_OPEN = "/images/20ft-hc-open-side-blue-open.jpg";
const IMG_20FT_BUERO = "/images/20ft-mobiler-wohncontainer.jpg";

/* â”€â”€ Specs table â”€â”€ */
const SPECS = [
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

/* â”€â”€ Use cases â”€â”€ */
const USE_CASES = [
  "Baustellen und Handwerksbetriebe",
  "Landwirtschaft und Industrie",
  "Lagerung von Werkzeugen und Maschinen",
  "Waren, Paletten und Ersatzteile",
  "Private Lagerung bei Umzug oder Renovierung",
  "Saisonale LagerflÃ¤chen fÃ¼r Gewerbe",
];

/* â”€â”€ Checklist â”€â”€ */
const CHECKLIST = [
  "Einsatzzweck definieren (Lager, Transport, Gewerbe)",
  "Zustand festlegen (Neu oder Gebraucht)",
  "StellflÃ¤che und Zufahrt am Standort prÃ¼fen",
  "Untergrund: eben, tragfÃ¤hig und stabil",
  "Transportkosten und Entlademethode klÃ¤ren",
  "Bei Daueraufstellung: Genehmigung prÃ¼fen",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { title: "Kompakt & flexibel", desc: "GroÃŸ genug fÃ¼r viele Lagerzwecke, klein genug fÃ¼r begrenzte FlÃ¤chen und einfache Lieferung." },
  { title: "Beliebteste GrÃ¶ÃŸe", desc: "20 FuÃŸ Container gehÃ¶ren zu den meistgenutzten ContainergrÃ¶ÃŸen â€“ hÃ¤ufig schnell verfÃ¼gbar." },
  { title: "Extrem robust", desc: "Massive Stahlkonstruktion fÃ¼r jahrzehntelangen Einsatz unter anspruchsvollen Bedingungen." },
  { title: "Wind- & wasserdicht", desc: "ZuverlÃ¤ssiger Schutz vor Witterung und unbefugtem Zugriff bei Daueraufstellung." },
  { title: "Gutes Preis Leistungs VerhÃ¤ltnis", desc: "Besonders gebrauchte 20 FuÃŸ Container bieten viel Stauraum zu Ã¼berschaubaren Kosten." },
  { title: "Mobil & versetzbar", desc: "Bei Bedarf jederzeit an einen anderen Standort transportierbar." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein 20 FuÃŸ Container?", a: "Der Preis hÃ¤ngt von Zustand, Baujahr, Ausstattung, Standort und Lieferung ab. Gebrauchte 20 FuÃŸ Container sind in der Regel gÃ¼nstiger als neue Modelle. FÃ¼r ein genaues Angebot sollten Lieferort, gewÃ¼nschter Zustand und Einsatzzweck angegeben werden." },
  { q: "Kann man einen 20 FuÃŸ Container gebraucht kaufen?", a: "Ja, gebrauchte 20 FuÃŸ Container sind sehr beliebt. Sie eignen sich besonders fÃ¼r Lagerung, Baustellen, Landwirtschaft, Gewerbe und private Nutzung. Wichtig ist, dass der Container technisch intakt, wind und wasserdicht sowie sicher verschlieÃŸbar ist." },
  { q: "Welche MaÃŸe hat ein 20 FuÃŸ Container?", a: "Ein 20 FuÃŸ Container hat typischerweise AuÃŸenmaÃŸe von ca. 6,06 m LÃ¤nge, 2,44 m Breite und 2,59 m HÃ¶he. Die InnenmaÃŸe liegen ungefÃ¤hr bei 5,90 m LÃ¤nge, 2,35 m Breite und 2,39 m HÃ¶he." },
  { q: "Wie schwer ist ein 20 FuÃŸ Container?", a: "Ein Standard 20 FuÃŸ Container wiegt in der Regel etwa 2.200 bis 2.400 kg. Das genaue Gewicht hÃ¤ngt vom Hersteller, Baujahr und der AusfÃ¼hrung ab." },
  { q: "Wird ein 20 FuÃŸ Container mit Lieferung angeboten?", a: "Ja, ein 20 FuÃŸ Container kann direkt zum gewÃ¼nschten Standort geliefert werden. Die Lieferung erfolgt meist per LKW, hÃ¤ufig mit Kranentladung. Wichtig sind eine geeignete Zufahrt, genÃ¼gend Platz und ein tragfÃ¤higer Untergrund." },
  { q: "Ist ein 20 FuÃŸ Container wasserdicht?", a: "Ein technisch intakter 20 FuÃŸ Seecontainer ist in der Regel wind und wasserdicht. Bei gebrauchten Containern sollten Dach, TÃ¼ren, Dichtungen und WÃ¤nde geprÃ¼ft werden." },
  { q: "WofÃ¼r eignet sich ein 20 FuÃŸ Container?", a: "Ein 20 FuÃŸ Container eignet sich fÃ¼r Lagerung, Transport, Baustellen, Handwerk, Landwirtschaft, Industrie und private Nutzung. Er ist groÃŸ genug fÃ¼r viele Lagerzwecke und gleichzeitig kompakt genug fÃ¼r kleinere Standorte." },
  { q: "Was ist besser: 20 FuÃŸ oder 40 FuÃŸ Container?", a: "Ein 20 FuÃŸ Container ist kompakter, leichter zu platzieren und fÃ¼r viele Standardanwendungen ausreichend. Ein 40 FuÃŸ Container bietet mehr Stauraum und ist besser geeignet, wenn groÃŸe Mengen oder sperrige GÃ¼ter gelagert werden sollen." },
  { q: "Braucht man eine Genehmigung fÃ¼r einen 20 FuÃŸ Container?", a: "Das hÃ¤ngt von Standort, Nutzungsdauer und Nutzung ab. FÃ¼r kurzfristige Lagerung ist eine Genehmigung oft weniger problematisch. Bei dauerhafter Aufstellung oder gewerblicher Nutzung sollte die zustÃ¤ndige BehÃ¶rde gefragt werden." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Ãœbersicht aller Containertypen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische Transport- und Lagercontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 FuÃŸ Container kaufen", desc: "Maximaler Stauraum" },
  { href: "/container-masse", title: "Container MaÃŸe", desc: "Alle AuÃŸen- und InnenmaÃŸe" },
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

      {/* â”€â”€ Hero â”€â”€ */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img src={IMG_20FT_HERO} alt="Gebrauchter 20 FuÃŸ Seecontainer kaufen" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.87) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">20 FuÃŸ Container kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            20 FuÃŸ Container kaufen â€“ kompakte LagerlÃ¶sung mit vielseitigem Einsatz
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            20 FuÃŸ Container kaufen in Deutschland â€“ neue und gebrauchte 20 FuÃŸ Container fÃ¼r Lagerung, Transport, Baustelle und Gewerbe. Mit Lieferung direkt zum Standort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop?size=20ft" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              20 FuÃŸ Container ansehen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Intro â”€â”€ */}
        <section className="mb-14">
          <SH>20 FuÃŸ Container kaufen fÃ¼r Lagerung, Transport und Gewerbe</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wenn Sie einen <strong className="text-foreground">20 FuÃŸ Container kaufen</strong> mÃ¶chten, entscheiden Sie sich fÃ¼r eine der beliebtesten ContainergrÃ¶ÃŸen Ã¼berhaupt. Der 20 FuÃŸ Container bietet ein sehr gutes VerhÃ¤ltnis zwischen Stauraum, TransportfÃ¤higkeit und Platzbedarf. Er ist groÃŸ genug fÃ¼r Werkzeuge, Maschinen, Waren, MÃ¶bel oder Baumaterialien, bleibt aber gleichzeitig kompakt genug, um auf vielen GrundstÃ¼cken, Baustellen und FirmengelÃ¤nden problemlos aufgestellt zu werden.
            </p>
            <p>
              Ein 20 FuÃŸ Container eignet sich fÃ¼r private Kunden, Handwerksbetriebe, Bauunternehmen, Landwirtschaft, Industrie und Handel. Er kann als Lagercontainer, Materialcontainer, Transportcontainer oder mobile AbstellflÃ¤che genutzt werden. Besonders gefragt ist diese GrÃ¶ÃŸe, weil sie flexibel einsetzbar ist und im Vergleich zu grÃ¶ÃŸeren Containern weniger StellflÃ¤che benÃ¶tigt.
            </p>
            <p>
              Bei uns kÃ¶nnen Sie neue und gebrauchte 20 FuÃŸ Container kaufen â€“ auf Wunsch mit Lieferung direkt zum gewÃ¼nschten Standort. Wenn Sie sich zunÃ¤chst einen allgemeinen Ãœberblick Ã¼ber verschiedene Containerarten verschaffen mÃ¶chten, finden Sie weitere Informationen auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Warum so beliebt? â”€â”€ */}
        <section className="mb-14">
          <SH>Warum ist der 20 FuÃŸ Container so beliebt?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der 20 FuÃŸ Container gilt als praktischer Allrounder. Er bietet ausreichend LagerflÃ¤che fÃ¼r viele Anwendungen, ohne zu viel Platz auf dem GelÃ¤nde einzunehmen. Dadurch eignet er sich besonders fÃ¼r Kunden, die eine robuste, mobile und wirtschaftliche LÃ¶sung suchen.
            </p>
            <p>
              Auf Baustellen wird der 20 FuÃŸ Container hÃ¤ufig zur sicheren Lagerung von Werkzeugen, Baumaterialien und Maschinen eingesetzt. Unternehmen nutzen ihn als zusÃ¤tzliche LagerflÃ¤che fÃ¼r Waren, Ersatzteile oder saisonale Produkte. Auch private Kunden kaufen 20 FuÃŸ Container, zum Beispiel fÃ¼r Renovierungen, UmzÃ¼ge, MÃ¶bel, GartengerÃ¤te oder langfristigen Stauraum.
            </p>
            <p>
              Im Vergleich zum 40 FuÃŸ Container ist der 20 FuÃŸ Container leichter zu platzieren und oft einfacher zu liefern. Wenn Sie jedoch deutlich mehr Stauraum benÃ¶tigen, kann ein Blick auf <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container kaufen</IL> sinnvoll sein.
            </p>
          </div>
        </section>

        {/* â”€â”€ Neue oder gebrauchte? â”€â”€ */}
        <section className="mb-14">
          <SH>Neue oder gebrauchte 20 FuÃŸ Container kaufen?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Beim Kauf eines 20 FuÃŸ Containers kÃ¶nnen Sie zwischen neuen und gebrauchten Modellen wÃ¤hlen. Welche Variante die richtige ist, hÃ¤ngt vom geplanten Einsatz, dem Budget und den Anforderungen an den optischen Zustand ab.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_20FT_HC} alt="Neuer 20 FuÃŸ High Cube Container" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neue 20 FuÃŸ Container (One Trip)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein neuer 20 FuÃŸ Container ist besonders geeignet, wenn ein sehr gepflegtes Erscheinungsbild, eine lange Nutzungsdauer und mÃ¶glichst wenige Gebrauchsspuren wichtig sind. Neue Container werden hÃ¤ufig fÃ¼r gewerbliche Standorte, sichtbare Kundenbereiche oder langfristige Projekte gewÃ¤hlt.</p>
                <ul className="space-y-1.5">
                  {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal fÃ¼r reprÃ¤sentative Standorte", "VollstÃ¤ndiger Korrosionsschutz"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_20FT_STANDARD} alt="Gebrauchter 20 FuÃŸ Container kaufen" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte 20 FuÃŸ Container (Cargo-Worthy)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Wer eine preisbewusste LÃ¶sung sucht, kann einen <strong className="text-foreground">20 FuÃŸ Container gebraucht kaufen</strong>. Gebrauchte Container sind oft deutlich wirtschaftlicher und fÃ¼r viele praktische Anwendungen vollkommen ausreichend. TÃ¼ren, Dichtungen, Boden, Dach und WÃ¤nde sollten funktionsfÃ¤hig sein.</p>
                <ul className="space-y-1.5">
                  {["Deutlich gÃ¼nstiger als Neuware", "Kurzfristig verfÃ¼gbar", "Ideal fÃ¼r Lager, Baustelle & Gewerbe", "Sofort einsatzbereit"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Die Suchanfragen <strong className="text-foreground">container kaufen 20 fuÃŸ</strong>, <strong className="text-foreground">20 fuÃŸ container kaufen gebraucht</strong> und <strong className="text-foreground">container 20 fuÃŸ gebraucht kaufen</strong> zeigen deutlich, dass viele Kunden eine robuste LÃ¶sung mit gutem Preis Leistungs VerhÃ¤ltnis suchen. Genau dafÃ¼r ist der gebrauchte 20 FuÃŸ Container besonders interessant.
          </p>
        </section>

        <CtaBanner text="Unverbindliches Angebot fÃ¼r 20 FuÃŸ Container" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ 20 FuÃŸ Seecontainer â”€â”€ */}
        <section className="mb-14">
          <SH>20 FuÃŸ Seecontainer kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Der klassische 20 FuÃŸ Seecontainer ist fÃ¼r viele Kunden die erste Wahl, wenn es um Lagerung und Transport geht. Er besteht aus widerstandsfÃ¤higem Stahl, ist fÃ¼r hohe Belastungen ausgelegt und kann dauerhaft im AuÃŸenbereich eingesetzt werden.
              </p>
              <p>
                Wenn Sie gezielt klassische Transport und Lagercontainer suchen, finden Sie weitere Informationen auf der Seite <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>. Dort wird erklÃ¤rt, wann ein Seecontainer die richtige Wahl ist und worin der Unterschied zu <IL to="/buerocontainer-kaufen">BÃ¼rocontainern</IL>, <IL to="/wohncontainer-kaufen">Wohncontainern</IL> oder <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainern</IL> besteht.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_20FT_OPEN_SIDE_CLOSED} alt="20 FuÃŸ High Cube Open Side Container geschlossen" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">20 FuÃŸ Open Side Container</p>
                  <p className="text-xs text-muted-foreground">Seitliche TÃ¼ren fÃ¼r komfortables Beladen sperriger Waren.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Package className="w-4 h-4" style={{ color: ORANGE }} />
              20 FuÃŸ Seecontainer â€“ besonders geeignet fÃ¼r:
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

        {/* â”€â”€ Technische Daten â”€â”€ */}
        <section className="mb-14">
          <SH>Technische Daten und MaÃŸe eines 20 FuÃŸ Containers</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start mb-6">
            <p className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed">
              Die genauen MaÃŸe kÃ¶nnen je nach Hersteller und Bauart leicht variieren. Ein klassischer 20 FuÃŸ Container hat jedoch standardisierte Richtwerte, die fÃ¼r die Planung sehr hilfreich sind.
            </p>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-border">
              <img src={IMG_20FT_OPEN_SIDE_OPEN} alt="20 FuÃŸ High Cube Open Side Container geÃ¶ffnet" className="w-full h-56 object-cover" />
            </div>
          </div>
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
            Diese MaÃŸe machen den 20 FuÃŸ Container zu einer praktischen LÃ¶sung fÃ¼r viele Lager und Transportaufgaben. Eine vollstÃ¤ndige Ãœbersicht zu <strong className="text-foreground">20 FuÃŸ Container MaÃŸe</strong>, 40 FuÃŸ Container MaÃŸe, High Cube MaÃŸen und weiteren GrÃ¶ÃŸen finden Sie auf unserer Seite <IL to="/container-masse">Container MaÃŸe</IL>.
          </p>
        </section>

        {/* â”€â”€ Container mit Lieferung â”€â”€ */}
        <section className="mb-14">
          <SH>20 FuÃŸ Container kaufen mit Lieferung</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Viele Kunden suchen gezielt nach <strong className="text-foreground">20 FuÃŸ Container kaufen mit Lieferung</strong>, weil der Transport eines Containers ohne geeignetes Fahrzeug kaum mÃ¶glich ist. Die Lieferung erfolgt in der Regel per LKW. Je nach Standort und Entladesituation kann ein LKW mit Kran eingesetzt werden, damit der Container direkt am gewÃ¼nschten Platz abgesetzt werden kann.
              </p>
              <p>
                Vor der Lieferung sollte geprÃ¼ft werden, ob die Zufahrt ausreichend breit ist, ob genug RangierflÃ¤che vorhanden ist und ob der Untergrund tragfÃ¤hig und eben ist. Ein 20 FuÃŸ Container ist im Vergleich zu einem 40 FuÃŸ Container meist einfacher zu liefern und aufzustellen.
              </p>
              <p>
                Mehr zum Thema erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_20FT_BUERO} alt="20 FuÃŸ BÃ¼rocontainer RAL 7016" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">20 FuÃŸ BÃ¼rocontainer</p>
                  <p className="text-xs text-muted-foreground">Auch als BÃ¼rocontainer oder Wohncontainer in 20 FuÃŸ verfÃ¼gbar.</p>
                  <Link to="/buerocontainer-kaufen" className="inline-flex items-center gap-1 mt-2 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                    BÃ¼rocontainer entdecken <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Was kostet ein 20 FuÃŸ Container? â”€â”€ */}
        <section className="mb-14">
          <SH>Was kostet ein 20 FuÃŸ Container?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der Preis eines 20 FuÃŸ Containers hÃ¤ngt von mehreren Faktoren ab. Dazu gehÃ¶ren Zustand, Baujahr, Ausstattung, VerfÃ¼gbarkeit, Farbe, Standort und Lieferkosten. Ein gebrauchter 20 FuÃŸ Container ist in der Regel gÃ¼nstiger als ein neuer Container. DafÃ¼r kÃ¶nnen Gebrauchsspuren wie Kratzer, Dellen oder leichte Roststellen vorhanden sein.
            </p>
            <p>
              Neue 20 FuÃŸ Container kosten mehr, bieten dafÃ¼r aber einen besseren optischen Zustand und eine lange Nutzungsdauer. ZusÃ¤tzlich zum Kaufpreis sollten immer die Transportkosten berÃ¼cksichtigt werden. FÃ¼r ein genaues Angebot sind Angaben zum gewÃ¼nschten Lieferort, zur ContainergrÃ¶ÃŸe und zur geplanten Nutzung wichtig.
            </p>
            <p>
              Mehr zu aktuellen Preisen erfahren Sie auf unserer Seite <IL to="/container-kosten">Container Kosten</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ WofÃ¼r eignet sich ein 20 FuÃŸ Container? â”€â”€ */}
        <section className="mb-14">
          <SH>WofÃ¼r eignet sich ein 20 FuÃŸ Container?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein 20 FuÃŸ Container ist sehr vielseitig einsetzbar. FÃ¼r Bauunternehmen ist er eine sichere LÃ¶sung zur Lagerung von Werkzeugen, Maschinen und Material. Handwerksbetriebe nutzen ihn als mobiles Lager direkt am Einsatzort. In der Landwirtschaft eignet er sich zur Unterbringung von GerÃ¤ten, Ersatzteilen oder saisonalen Produkten.
            </p>
            <p>
              Auch im Handel und in der Industrie wird der 20 FuÃŸ Container hÃ¤ufig als zusÃ¤tzliche LagerflÃ¤che genutzt. Private Kunden kaufen 20 FuÃŸ Container hÃ¤ufig fÃ¼r UmzÃ¼ge, Renovierungen, Hausbau oder langfristigen Stauraum.
            </p>
            <p>
              Wenn Sie statt LagerflÃ¤che eine ArbeitsflÃ¤che benÃ¶tigen, kann ein <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL> besser geeignet sein. FÃ¼r Wohnzwecke empfiehlt sich ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL>, wÃ¤hrend temperaturempfindliche Waren in einem <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainer</IL> gelagert werden sollten.
            </p>
          </div>
        </section>

        {/* â”€â”€ Worauf achten? â”€â”€ */}
        <section className="mb-14">
          <SH>Worauf sollte man beim Kauf achten?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Vor dem Kauf sollte genau festgelegt werden, wofÃ¼r der Container genutzt werden soll. FÃ¼r einfache Lagerung reicht oft ein gebrauchter Container in gutem technischen Zustand. Achten Sie bei gebrauchten Containern besonders auf den Zustand der TÃ¼ren, Dichtungen und des Bodens. Der Container sollte auf einem ebenen, tragfÃ¤higen <IL to="/container-fundament">Untergrund</IL> stehen. Bei langfristiger Aufstellung kann eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein.
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

        {/* â”€â”€ Vorteile â”€â”€ */}
        <section className="mb-14">
          <SH>Vorteile eines 20 FuÃŸ Containers</SH>
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
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt 20 FuÃŸ Container anfragen</h2>
            <p className="text-white/60 text-sm">Unverbindlich anfragen â€“ Angebot inkl. Lieferung erhalten.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">HÃ¤ufige Fragen zum 20 FuÃŸ Container</h2>
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

