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
  ["AuÃŸenlÃ¤nge", "ca. 12,19 m", "ca. 12,19 m"],
  ["AuÃŸenbreite", "ca. 2,44 m", "ca. 2,44 m"],
  ["AuÃŸenhÃ¶he", "ca. 2,59 m", "ca. 2,90 m"],
  ["InnenlÃ¤nge", "ca. 12,03 m", "ca. 12,03 m"],
  ["Innenbreite", "ca. 2,35 m", "ca. 2,35 m"],
  ["InnenhÃ¶he", "ca. 2,39 m", "ca. 2,69 m"],
  ["Volumen", "ca. 67 mÂ³", "ca. 76 mÂ³"],
  ["Eigengewicht", "ca. 3.700â€“4.000 kg", "ca. 3.900â€“4.200 kg"],
  ["TÃ¼rÃ¶ffnung Breite", "ca. 2,34 m", "ca. 2,34 m"],
  ["TÃ¼rÃ¶ffnung HÃ¶he", "ca. 2,28 m", "ca. 2,58 m"],
];

/* â”€â”€ High Cube use cases â”€â”€ */
const HC_USE_CASES = [
  "Sperrige Waren und Maschinen",
  "Palettenware mit zusÃ¤tzlicher HÃ¶he",
  "Lagerregale und gewerbliche Lagerung",
  "Industrie und Logistik",
  "Langfristige LagerlÃ¶sungen",
  "Projekte mit maximalem Innenvolumen",
];

/* â”€â”€ Delivery checklist â”€â”€ */
const DELIVERY_INFO = [
  "Genaue Lieferadresse",
  "GewÃ¼nschte ContainergrÃ¶ÃŸe",
  "Standard oder High Cube",
  "Zufahrtsbreite und PlatzverhÃ¤ltnisse",
  "GewÃ¼nschte Position des Containers",
  "Untergrund am Aufstellort",
  "MÃ¶gliche Hindernisse (BÃ¤ume, ZÃ¤une, Kabel, enge Einfahrten)",
];

/* â”€â”€ Use cases â”€â”€ */
const USE_CASES = [
  "Industrie und Produktion",
  "Baustellen und Bauunternehmen",
  "Landwirtschaftliche Betriebe",
  "Handel und Online Shops",
  "Maschinen und Ersatzteillager",
  "Logistik und Transport",
  "MÃ¶bel und Umzugslagerung",
  "Saisonale LagerflÃ¤chen",
  "GroÃŸes Materiallager auf FirmengelÃ¤nden",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { title: "Maximale LagerflÃ¤che", desc: "Viel nutzbarer Raum auf vergleichsweise kompakter GrundflÃ¤che â€“ ideal fÃ¼r groÃŸe Warenmengen." },
  { title: "Extrem robust", desc: "Massive Stahlkonstruktion fÃ¼r jahrzehntelangen AuÃŸeneinsatz unter anspruchsvollen Bedingungen." },
  { title: "Vielseitig einsetzbar", desc: "Als Lager, Materialraum, Transportcontainer, Werkstattbasis oder Erweiterung bestehender FlÃ¤chen." },
  { title: "Wirtschaftlich", desc: "Eine kostengÃ¼nstige Alternative zu festen Lagerhallen oder dauerhaft gemieteten LagerflÃ¤chen." },
  { title: "Mobil & versetzbar", desc: "Bei Bedarf jederzeit an einen anderen Standort transportierbar oder durch weitere Container ergÃ¤nzbar." },
  { title: "Standard & High Cube", desc: "VerfÃ¼gbar als Standard Container oder als High Cube Variante mit zusÃ¤tzlicher InnenhÃ¶he." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein 40 FuÃŸ Container?", a: "Der Preis eines 40 FuÃŸ Containers hÃ¤ngt von Zustand, AusfÃ¼hrung, Baujahr, Standort, VerfÃ¼gbarkeit und Lieferung ab. Gebrauchte 40 FuÃŸ Container sind meist gÃ¼nstiger als neue Modelle. High Cube Container oder isolierte Varianten kÃ¶nnen teurer sein als Standard Container." },
  { q: "Kann man einen 40 FuÃŸ Container gebraucht kaufen?", a: "Ja, gebrauchte 40 FuÃŸ Container sind sehr gefragt. Sie eignen sich besonders fÃ¼r Lagerung, Baustellen, Industrie, Landwirtschaft und Gewerbe. Wichtig ist, dass der Container trotz Gebrauchsspuren technisch intakt, wind und wasserdicht sowie sicher verschlieÃŸbar ist." },
  { q: "Was ist der Unterschied zwischen 40 FuÃŸ Standard und 40 FuÃŸ High Cube?", a: "Der wichtigste Unterschied ist die HÃ¶he. Ein 40 FuÃŸ High Cube Container ist hÃ¶her als ein Standard Container und bietet dadurch mehr Innenvolumen. Das ist besonders praktisch fÃ¼r sperrige Waren, Lagerregale oder Projekte mit hohem Raumbedarf." },
  { q: "Welche MaÃŸe hat ein 40 FuÃŸ Container?", a: "Ein 40 FuÃŸ Standard Container hat typischerweise AuÃŸenmaÃŸe von ca. 12,19 m LÃ¤nge, 2,44 m Breite und 2,59 m HÃ¶he. Die InnenmaÃŸe liegen ungefÃ¤hr bei 12,03 m LÃ¤nge, 2,35 m Breite und 2,39 m HÃ¶he. Ein High Cube Container ist ca. 2,90 m hoch." },
  { q: "Wie schwer ist ein 40 FuÃŸ Container?", a: "Ein 40 FuÃŸ Standard Container wiegt in der Regel etwa 3.700 bis 4.000 kg. Ein 40 FuÃŸ High Cube Container kann etwas schwerer sein. Das genaue Gewicht hÃ¤ngt von Hersteller, Baujahr und AusfÃ¼hrung ab." },
  { q: "Wird ein 40 FuÃŸ Container mit Lieferung angeboten?", a: "Ja, ein 40 FuÃŸ Container kann direkt zum gewÃ¼nschten Standort geliefert werden. Wegen der GrÃ¶ÃŸe sollte die Lieferung gut geplant werden. Wichtig sind eine geeignete Zufahrt, ausreichend RangierflÃ¤che und ein tragfÃ¤higer Untergrund." },
  { q: "Kann man einen 40 FuÃŸ Container isoliert kaufen?", a: "Ja, isolierte 40 FuÃŸ Container sind mÃ¶glich und eignen sich fÃ¼r Anwendungen, bei denen Temperaturschwankungen oder Kondenswasser reduziert werden sollen. FÃ¼r aktiv gekÃ¼hlte Lagerung ist jedoch ein KÃ¼hlcontainer besser geeignet." },
  { q: "Ist ein 40 FuÃŸ Container wasserdicht?", a: "Ein technisch intakter 40 FuÃŸ Seecontainer ist in der Regel wind und wasserdicht. Bei gebrauchten Modellen sollten Dach, TÃ¼ren, Dichtungen und WÃ¤nde geprÃ¼ft werden, damit der Container trocken bleibt." },
  { q: "Braucht man eine Genehmigung fÃ¼r einen 40 FuÃŸ Container?", a: "Das hÃ¤ngt von Standort, Nutzungsdauer und Nutzung ab. FÃ¼r kurzfristige Lagerung kann die Aufstellung unkomplizierter sein. Bei dauerhafter Nutzung, gewerblicher Aufstellung oder baulichen VerÃ¤nderungen sollte die zustÃ¤ndige BehÃ¶rde kontaktiert werden." },
  { q: "Was ist besser: 20 FuÃŸ oder 40 FuÃŸ Container?", a: "Ein 20 FuÃŸ Container ist kompakter und einfacher auf kleineren FlÃ¤chen zu platzieren. Ein 40 FuÃŸ Container bietet deutlich mehr Lagerraum und eignet sich besser fÃ¼r groÃŸe Warenmengen, Industrie, Logistik und gewerbliche Lagerung." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Ãœbersicht aller Containertypen" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische Transport- und Lagercontainer" },
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container kaufen", desc: "Kompakte Allround-LÃ¶sung" },
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
          <img src={IMG_40FT_OPENSIDE} alt="40 FuÃŸ Container kaufen" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.87) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">40 FuÃŸ Container kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            40 FuÃŸ Container kaufen â€“ groÃŸe LagerflÃ¤che fÃ¼r Gewerbe, Industrie und Transport
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            40 FuÃŸ Container kaufen in Deutschland â€“ neue und gebrauchte 40 FuÃŸ Container, Standard und High Cube, fÃ¼r Lagerung, Gewerbe, Industrie und Transport. Mit Lieferung direkt zum Standort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop?size=40ft" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              40 FuÃŸ Container ansehen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Intro â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ Container kaufen fÃ¼r maximale LagerkapazitÃ¤t</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wenn Sie einen <strong className="text-foreground">40 FuÃŸ Container kaufen</strong> mÃ¶chten, entscheiden Sie sich fÃ¼r eine besonders groÃŸe und robuste ContainerlÃ¶sung. Der 40 FuÃŸ Container bietet deutlich mehr Stauraum als kleinere Modelle und eignet sich ideal fÃ¼r Unternehmen, Baustellen, Industrie, Landwirtschaft, Handel und Logistik. Er wird hÃ¤ufig dort eingesetzt, wo groÃŸe Mengen an Waren, Maschinen, Baumaterialien, Werkzeugen oder saisonalen Produkten sicher gelagert werden mÃ¼ssen.
            </p>
            <p>
              Ein 40 FuÃŸ Container ist besonders interessant, wenn langfristig viel LagerflÃ¤che benÃ¶tigt wird und am Standort ausreichend Platz fÃ¼r Lieferung und Aufstellung vorhanden ist. Durch seine stabile Stahlkonstruktion ist er fÃ¼r den dauerhaften AuÃŸeneinsatz geeignet und schÃ¼tzt den Inhalt zuverlÃ¤ssig vor Wind, Regen und unbefugtem Zugriff.
            </p>
            <p>
              Bei uns kÃ¶nnen Sie neue und gebrauchte 40 FuÃŸ Container kaufen â€“ je nach Bedarf als Standard Container, High Cube Container oder spezielle AusfÃ¼hrung. Wenn Sie zunÃ¤chst verschiedene Containerarten vergleichen mÃ¶chten, finden Sie weitere Informationen auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Warum einen 40 FuÃŸ Container? â”€â”€ */}
        <section className="mb-14">
          <SH>Warum einen 40 FuÃŸ Container kaufen?</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein 40 FuÃŸ Container bietet vor allem eines: viel nutzbaren Raum. Im Vergleich zum 20 FuÃŸ Container verdoppelt sich die LÃ¤nge nahezu, wodurch deutlich mehr Waren, GerÃ¤te oder Materialien gelagert werden kÃ¶nnen. Das macht ihn besonders attraktiv fÃ¼r gewerbliche Kunden, die eine wirtschaftliche Alternative zu festen Lagerhallen oder dauerhaft gemieteten LagerflÃ¤chen suchen.
              </p>
              <p>
                Auf Baustellen wird der 40 FuÃŸ Container hÃ¤ufig als groÃŸes Materiallager genutzt. In der Industrie dient er zur Lagerung von Ersatzteilen, Maschinenkomponenten, Verpackungsmaterial oder Palettenware. Landwirtschaftliche Betriebe nutzen ihn zur Unterbringung von GerÃ¤ten, Werkzeugen und saisonalen Produkten. Auch HÃ¤ndler und Online Shops profitieren von zusÃ¤tzlichem Lagerraum direkt am Standort.
              </p>
              <p>
                Wenn Sie weniger Platz benÃ¶tigen oder der Standort begrenzt ist, kann ein <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container kaufen</IL> die bessere Wahl sein. FÃ¼r maximale LagerflÃ¤che ist der 40 FuÃŸ Container jedoch die stÃ¤rkere LÃ¶sung.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_40FT_STANDARD} alt="40 FuÃŸ Standard Container" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">40 FuÃŸ Standard Container</p>
                  <p className="text-xs text-muted-foreground">ca. 12,19 Ã— 2,44 Ã— 2,59 m | ~67 mÂ³ Volumen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Neue oder gebrauchte? â”€â”€ */}
        <section className="mb-14">
          <SH>Neue oder gebrauchte 40 FuÃŸ Container kaufen?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Beim Kauf eines 40 FuÃŸ Containers stellt sich hÃ¤ufig die Frage, ob ein neuer oder gebrauchter Container sinnvoller ist. Beide Varianten haben klare Vorteile.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden bg-muted/30">
                <img src={IMG_40FT_NEW} alt="Neuer 40 FuÃŸ High Cube Open Side Container" className="w-full h-full object-contain p-4" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neue 40 FuÃŸ Container (One Trip)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein neuer 40 FuÃŸ Container eignet sich besonders, wenn ein sehr guter optischer Zustand, lange Nutzungsdauer und mÃ¶glichst geringe Gebrauchsspuren wichtig sind. Wenn der Container gut sichtbar auf dem FirmengelÃ¤nde steht oder fÃ¼r ein langfristiges Projekt genutzt wird, ist ein neues Modell oft die beste Wahl.</p>
                <ul className="space-y-1.5">
                  {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal fÃ¼r reprÃ¤sentative Standorte", "VollstÃ¤ndiger Korrosionsschutz"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={IMG_40FT_USED} alt="Gebrauchter 40 FuÃŸ Open Side Container RAL 1015" className="w-full h-full object-cover" />
              </div>
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte 40 FuÃŸ Container (Cargo-Worthy)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Ein gebrauchter 40 FuÃŸ Container ist besonders interessant, wenn der praktische Nutzen im Vordergrund steht. Viele Kunden suchen nach <strong className="text-foreground">40 FuÃŸ Container gebraucht kaufen</strong>, weil sie eine robuste LagerlÃ¶sung zu einem attraktiveren Preis benÃ¶tigen. Gebrauchsspuren sind normal â€“ entscheidend ist, dass der Container technisch intakt, stabil, sicher verschlieÃŸbar sowie wind und wasserdicht ist.</p>
                <ul className="space-y-1.5">
                  {["Deutlich gÃ¼nstiger als Neuware", "Kurzfristig verfÃ¼gbar", "Ideal fÃ¼r Lager, Baustelle & Gewerbe", "Sofort einsatzbereit"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Preis â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ Container gebraucht kaufen Preis</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Die Frage nach dem <strong className="text-foreground">40 FuÃŸ Container gebraucht kaufen Preis</strong> gehÃ¶rt zu den wichtigsten Suchanfragen. Der Preis hÃ¤ngt jedoch von mehreren Faktoren ab. Entscheidend sind Zustand, Baujahr, AusfÃ¼hrung, VerfÃ¼gbarkeit, Standort, Farbe und Lieferkosten. Ein einfacher gebrauchter Standard Container ist in der Regel gÃ¼nstiger als ein neuwertiger 40 FuÃŸ High Cube Container oder ein speziell ausgestatteter Container.
            </p>
            <p>
              Auch der Lieferort beeinflusst den Gesamtpreis. Ein Container, der nahe am Depot verfÃ¼gbar ist, kann hÃ¤ufig gÃ¼nstiger geliefert werden als ein Modell, das Ã¼ber eine lÃ¤ngere Strecke transportiert werden muss. Deshalb sollte bei einer Anfrage immer der gewÃ¼nschte Lieferort angegeben werden.
            </p>
            <p>
              FÃ¼r ein realistisches Angebot sind folgende Informationen hilfreich: gewÃ¼nschter Zustand, Standard oder High Cube, geplanter Einsatzbereich, Lieferadresse, gewÃ¼nschter Lieferzeitraum und EntlademÃ¶glichkeit vor Ort. Mehr zu Preisen erfahren Sie auf unserer Seite <IL to="/container-kosten">Container Kosten</IL>.
            </p>
          </div>
        </section>

        <CtaBanner text="Unverbindliches Angebot fÃ¼r 40 FuÃŸ Container" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ High Cube â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ High Cube Container kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">40 FuÃŸ High Cube Container kaufen</strong> ist besonders sinnvoll, wenn zusÃ¤tzliche InnenhÃ¶he benÃ¶tigt wird. Der High Cube Container ist im Vergleich zum Standard Container hÃ¶her und bietet dadurch mehr Ladevolumen. Das ist besonders praktisch fÃ¼r sperrige Waren, Maschinen, Lagerregale, Verpackungsmaterial oder gewerbliche LagerlÃ¶sungen mit hohem Raumbedarf.
              </p>
              <p>
                Viele Kunden suchen gezielt nach <strong className="text-foreground">40 FuÃŸ High Cube Container gebraucht kaufen</strong> oder <strong className="text-foreground">40 FuÃŸ HC Container kaufen</strong>, weil diese Variante mehr nutzbare HÃ¶he bietet und fÃ¼r viele Lagerzwecke komfortabler ist.
              </p>
              <p>
                Wenn die zusÃ¤tzliche HÃ¶he nicht benÃ¶tigt wird, reicht oft ein Standard 40 FuÃŸ Container aus. Wenn jedoch jeder Kubikmeter zÃ¤hlt, ist der High Cube Container meist die bessere Wahl.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={IMG_40FT_HC} alt="40 FuÃŸ High Cube Container MaÃŸe" className="w-full h-56 object-cover" />
                <div className="p-4 bg-card">
                  <p className="font-heading font-bold text-sm text-foreground mb-1">40 FuÃŸ High Cube Container</p>
                  <p className="text-xs text-muted-foreground">ca. 12,19 Ã— 2,44 Ã— 2,90 m | ~76 mÂ³ Volumen</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 mt-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Package className="w-4 h-4" style={{ color: ORANGE }} />
              40 FuÃŸ High Cube Container â€“ besonders geeignet fÃ¼r:
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
          <SH>40 FuÃŸ Container Standard oder High Cube?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Die Entscheidung zwischen Standard und High Cube hÃ¤ngt vom geplanten Einsatz ab. Ein Standard 40 FuÃŸ Container bietet bereits sehr viel LagerflÃ¤che und ist fÃ¼r viele Anwendungen ausreichend. Er eignet sich fÃ¼r Maschinen, Werkzeuge, Baumaterialien, MÃ¶bel, Waren und allgemeine Lagerzwecke.
            </p>
            <p>
              Ein 40 FuÃŸ High Cube Container bietet zusÃ¤tzlich mehr InnenhÃ¶he. Das macht ihn ideal fÃ¼r sperrige GÃ¼ter oder wenn Lagerregale genutzt werden sollen. Auch fÃ¼r Umbauten, WerkstattlÃ¶sungen oder spezielle Projekte ist die High Cube Variante oft praktischer, weil sie mehr Bewegungsfreiheit und mehr Volumen bietet.
            </p>
            <p>
              Wenn Sie unsicher sind, welche Variante besser geeignet ist, hilft ein Blick auf die Seite <IL to="/container-masse">Container MaÃŸe</IL>. Dort kÃ¶nnen Sie Standard, High Cube, 20 FuÃŸ und 40 FuÃŸ Container direkt miteinander vergleichen.
            </p>
          </div>
        </section>

        {/* â”€â”€ MaÃŸe und technische Daten â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ Container MaÃŸe und technische Daten</SH>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Die genauen MaÃŸe kÃ¶nnen je nach Hersteller und AusfÃ¼hrung leicht variieren. FÃ¼r die Planung sind AuÃŸenmaÃŸe, InnenmaÃŸe, TÃ¼rÃ¶ffnung, Eigengewicht und Volumen besonders wichtig.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  <th className="px-5 py-4 text-left font-heading font-semibold text-white text-xs uppercase tracking-wide">Merkmal</th>
                  <th className="px-5 py-4 text-right font-heading font-semibold text-white text-xs uppercase tracking-wide">40 FuÃŸ Standard</th>
                  <th className="px-5 py-4 text-right font-heading font-semibold text-white text-xs uppercase tracking-wide">40 FuÃŸ High Cube</th>
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
            Diese Werte sind Richtwerte und kÃ¶nnen je nach Modell leicht abweichen. Eine ausfÃ¼hrliche Ãœbersicht zu <strong className="text-foreground">40 FuÃŸ Container MaÃŸe</strong>, 20 FuÃŸ Container MaÃŸe, 10 FuÃŸ Container MaÃŸe und High Cube Container MaÃŸe finden Sie auf unserer Seite <IL to="/container-masse">Container MaÃŸe</IL>.
          </p>
        </section>

        {/* â”€â”€ Lieferung â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ Container kaufen mit Lieferung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Viele Kunden suchen nach <strong className="text-foreground">40 FuÃŸ Container kaufen mit Lieferung</strong>, weil der Transport eines groÃŸen Containers sorgfÃ¤ltig geplant werden muss. Ein 40 FuÃŸ Container ist lang, schwer und benÃ¶tigt ausreichend Platz fÃ¼r Zufahrt, Rangieren und Entladung. Die Lieferung erfolgt in der Regel per LKW. Je nach Standort und Entladesituation kann ein Fahrzeug mit Kran notwendig sein.
            </p>
            <p>
              Vor der Lieferung sollte geprÃ¼ft werden, ob die Zufahrt breit genug ist und ob vor Ort ausreichend Platz zum Absetzen des Containers vorhanden ist. Auch der Untergrund muss tragfÃ¤hig, eben und stabil sein. Besonders bei einem 40 FuÃŸ Container ist ein geeigneter Aufstellplatz wichtig, da das Gewicht und die LÃ¤nge deutlich hÃ¶her sind als bei kleineren Modellen.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Truck className="w-4 h-4" style={{ color: ORANGE }} />
              FÃ¼r die Lieferung hilfreiche Angaben
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
          <SH>40 FuÃŸ Container kaufen Hamburg, NÃ¼rnberg und weitere Regionen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Viele KÃ¤ufer suchen regional, zum Beispiel nach <strong className="text-foreground">40 FuÃŸ Container kaufen Hamburg</strong> oder <strong className="text-foreground">40 FuÃŸ Container gebraucht kaufen NÃ¼rnberg</strong>. Der Standort spielt beim Containerkauf eine wichtige Rolle, weil VerfÃ¼gbarkeit und Transportkosten je nach Region unterschiedlich sein kÃ¶nnen.
            </p>
            <p>
              In groÃŸen Logistikregionen wie Hamburg sind Seecontainer oft besonders gefragt, weil dort viele Containerbewegungen stattfinden. Auch in StÃ¤dten wie NÃ¼rnberg, MÃ¼nchen, Berlin, Hannover oder im Ruhrgebiet werden 40 FuÃŸ Container hÃ¤ufig fÃ¼r Gewerbe, Bauprojekte, Lagerung und Industrie genutzt.
            </p>
            <p>
              Je nÃ¤her ein passender Container am Lieferort verfÃ¼gbar ist, desto effizienter kann die Lieferung geplant werden. Deshalb lohnt es sich, bei der Anfrage immer die gewÃ¼nschte Lieferadresse anzugeben. Mehr zum Transport erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Isoliert â”€â”€ */}
        <section className="mb-14">
          <SH>40 FuÃŸ Container isoliert kaufen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein <strong className="text-foreground">40 FuÃŸ Container isoliert kaufen</strong> ist dann sinnvoll, wenn der Inhalt besser vor Temperaturschwankungen, Kondenswasser oder Hitze geschÃ¼tzt werden soll. Isolierte Container werden hÃ¤ufig fÃ¼r empfindlichere Waren, WerkstattlÃ¶sungen, technische Lagerung oder spezielle Projekte genutzt.
            </p>
            <p>
              Ein isolierter 40 FuÃŸ Container ist jedoch nicht dasselbe wie ein KÃ¼hlcontainer. WÃ¤hrend ein isolierter Container den Innenraum besser gegen Ã¤uÃŸere Temperaturen abschirmt, sorgt ein <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainer</IL> aktiv fÃ¼r eine kontrollierte Temperatur. FÃ¼r Lebensmittel, Medikamente oder temperaturempfindliche Waren ist deshalb hÃ¤ufig ein KÃ¼hlcontainer die bessere LÃ¶sung.
            </p>
            <p>
              FÃ¼r einfache Lagerzwecke reicht oft ein normaler <IL to="/seecontainer-kaufen">Seecontainer</IL>. Wenn jedoch Feuchtigkeit, Temperaturschwankungen oder lÃ¤ngere Lagerzeiten eine Rolle spielen, kann eine isolierte Variante sinnvoll sein.
            </p>
          </div>
        </section>

        {/* â”€â”€ WofÃ¼r eignet sich? â”€â”€ */}
        <section className="mb-14">
          <SH>WofÃ¼r eignet sich ein 40 FuÃŸ Container?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Ein 40 FuÃŸ Container eignet sich besonders fÃ¼r groÃŸe Lager und Transportaufgaben. Er bietet ausreichend Platz fÃ¼r Maschinen, Baumaterialien, Werkzeuge, Paletten, MÃ¶bel, Ersatzteile, Handelswaren und saisonale Produkte. Durch seine robuste Bauweise kann er dauerhaft im AuÃŸenbereich eingesetzt werden.
            </p>
            <p>
              Wenn Sie hingegen eine mobile ArbeitsflÃ¤che suchen, kann ein <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL> besser geeignet sein. FÃ¼r Wohnzwecke empfiehlt sich ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL>. FÃ¼r KÃ¼hlware oder temperaturgefÃ¼hrte Lagerung ist ein <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainer</IL> die richtige LÃ¶sung.
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
              Bevor Sie einen 40 FuÃŸ Container kaufen, sollten Sie den Einsatzzweck genau festlegen. FÃ¼r reine Lagerung ist ein gebrauchter Standard Container oft ausreichend. FÃ¼r reprÃ¤sentative Standorte, langfristige Nutzung oder sichtbare Unternehmensbereiche kann ein neuer Container sinnvoll sein. Wenn zusÃ¤tzlicher Stauraum in der HÃ¶he benÃ¶tigt wird, ist ein High Cube Container empfehlenswert.
            </p>
            <p>
              Bei gebrauchten Containern sollten TÃ¼ren, Dichtungen, Boden, Dach und WÃ¤nde sorgfÃ¤ltig geprÃ¼ft werden. Der Container sollte sicher verschlieÃŸbar sein und innen trocken bleiben. Auch der Standort ist entscheidend: Der Untergrund sollte eben und tragfÃ¤hig sein. FÃ¼r langfristige Aufstellung kÃ¶nnen Punktfundamente, Betonplatten oder verdichteter Schotter sinnvoll sein. Bei Daueraufstellung kann eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein.
            </p>
          </div>
        </section>

        {/* â”€â”€ Vorteile â”€â”€ */}
        <section className="mb-14">
          <SH>Vorteile eines 40 FuÃŸ Containers</SH>
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
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt 40 FuÃŸ Container anfragen</h2>
            <p className="text-white/60 text-sm">Unverbindlich anfragen â€“ Angebot inkl. Lieferung erhalten.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">HÃ¤ufige Fragen zum 40 FuÃŸ Container</h2>
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

