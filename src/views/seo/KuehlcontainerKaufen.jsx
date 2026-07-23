"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Zap, ShieldCheck, Star } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";
import ProductListingSection from "@/components/shop/ProductListingSection";

const BRAND_BLUE = "#1E5FAE";
const NAVY = "#1B3A5C";

/* â”€â”€ Image assets â”€â”€ */
const IMG_HERO = "/images/refrigerated-container-10ft.webp";
const IMG_GEBRAUCHT = "/images/reefer-used-container.jpg";
const IMG_40FT = "/images/reefer-containers.jpg";
const IMG_SPLIT = "/images/reefer-split-unit.jpeg";
const IMG_COMPRESSOR = "/images/reefer-thermoking-compressor.jpg";

/* â”€â”€ Helpers â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: BRAND_BLUE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* â”€â”€ New vs used â”€â”€ */
const NEW_REASONS = [
  "der Container langfristig genutzt wird",
  "moderne Technik gewünscht ist",
  "Optik und Zustand wichtig sind",
  "hohe Betriebssicherheit Priorität hat",
];
const USED_REASONS = [
  "das Budget begrenzt ist",
  "der Container technisch geprüft ist",
  "schnelle Verfügbarkeit wichtig ist",
  "Gebrauchsspuren kein Problem sind",
];

/* â”€â”€ Price factors â”€â”€ */
const PRICE_FACTORS = [
  "10 Fuß, 20 Fuß oder 40 Fuß Größe", "neu oder gebraucht", "Zustand des Kühlaggregats",
  "gewünschter Temperaturbereich", "Baujahr und Hersteller", "Innenzustand und Hygiene",
  "Stromanschluss und Technik", "Transport und Kranentladung", "Kauf oder Miete",
];

/* â”€â”€ Miete occasions â”€â”€ */
const MIETE_OCCASIONS = [
  "Events und Veranstaltungen", "saisonalen Spitzen", "Erntezeiten",
  "kurzfristigen Kühlengpässen", "Umbau bestehender Kühlräume", "temporären Projekten",
];

/* â”€â”€ Gebraucht tips â”€â”€ */
const GEBRAUCHT_TIPS = [
  "Kühlaggregat auf Funktion prüfen",
  "Temperaturbereich mit Ihrer Ware abgleichen",
  "Türen und Dichtungen kontrollieren",
  "Innenraum auf Hygiene und Schäden prüfen",
  "Stromanschluss vorab klären",
  "Rost, Boden und Wandflächen prüfen",
  "Transportkosten in den Gesamtpreis einrechnen",
];

/* â”€â”€ Steps â”€â”€ */
const STEPS = [
  { num: "01", title: "Ware & Temperatur", desc: "Festlegen, welche Waren gekühlt werden und welche Temperatur erforderlich ist." },
  { num: "02", title: "Größe auswählen", desc: "10 Fuß, 20 Fuß oder 40 Fuß je nach Kühlbedarf." },
  { num: "03", title: "Kauf oder Miete", desc: "Vergleichen Sie beide Optionen anhand der Nutzungsdauer." },
  { num: "04", title: "Stromanschluss", desc: "400 V Drehstrom am Standort vorab klären." },
  { num: "05", title: "Standort & Zufahrt", desc: "Rangierplatz, Untergrund und Luftzirkulation prüfen." },
  { num: "06", title: "Neu oder gebraucht", desc: "Je nach Budget und Anforderung entscheiden." },
  { num: "07", title: "Angebot anfragen", desc: "Unverbindliches Angebot inkl. Lieferung einholen." },
];

/* â”€â”€ 40ft ideal uses â”€â”€ */
const FT40_USES = [
  "große Lebensmittelmengen", "Obst, Gemüse, Fleisch, Fisch und Getränke",
  "Großhandel und Logistik", "Landwirtschaft und Erntezeiten",
  "Industrie und Produktion", "langfristige Kühlkapazität",
  "größere Catering- oder Eventprojekte",
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was ist ein Kühlcontainer?", a: "Ein Kühlcontainer ist ein Container mit aktiver Kühltechnik. Er wird genutzt, um Waren bei kontrollierter Temperatur zu lagern oder zu transportieren." },
  { q: "Kann man einen Kühlcontainer kaufen?", a: "Ja, Kühlcontainer können gekauft werden. Der Kauf lohnt sich besonders, wenn dauerhaft oder regelmäßig zusätzliche Kühlfläche benötigt wird." },
  { q: "Kann man einen Kühlcontainer mieten?", a: "Ja, Kühlcontainer können auch gemietet werden. Die Miete ist sinnvoll für Events, Erntezeiten, saisonale Spitzen oder kurzfristige Lagerengpässe." },
  { q: "Gibt es gebrauchte Kühlcontainer?", a: "Ja, gebrauchte Kühlcontainer sind erhältlich. Wichtig ist, dass Kühlaggregat, Temperaturregelung, Türen, Dichtungen, Innenraum und Stromanschluss geprüft werden." },
  { q: "Welche Größen gibt es bei Kühlcontainern?", a: "Häufige Größen sind 10 Fuß, 20 Fuß und 40 Fuß. Ein 10 Fuß Kühlcontainer ist kompakt, ein 20 Fuß Kühlcontainer ist eine gute Allround-Lösung und ein 40 Fuß Kühlcontainer bietet maximale Kühlfläche." },
  { q: "Braucht ein Kühlcontainer Strom?", a: "Ja, ein Kühlcontainer benötigt eine passende Stromversorgung (400 V Drehstrom). Der benötigte Anschluss hängt vom Modell und der Kühltechnik ab und sollte vor der Lieferung geprüft werden." },
  { q: "Was ist der Unterschied zwischen Kühlcontainer und isoliertem Container?", a: "Ein isolierter Container schützt nur passiv vor Temperaturschwankungen. Ein Kühlcontainer verfügt über aktive Kühltechnik und kann die Temperatur im Innenraum gezielt regulieren." },
  { q: "Was beeinflusst den Preis eines Kühlcontainers?", a: "Der Preis hängt von Größe, Zustand, Kühltechnik, Temperaturbereich, neu oder gebraucht, Lieferung und Mietdauer ab. Für ein genaues Angebot sollten Ware, Temperaturanforderung und Lieferort angegeben werden." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/container-masse", title: "Container Maße", desc: "Alle Abmessungen im Überblick" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Gesamtkosten kalkulieren" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliche Anforderungen" },
];

/* â”€â”€ Other types â”€â”€ */
const OTHER_TYPES = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Mobiler Arbeitsraum" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Flexible Wohnlösung" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Allround-Standard" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Maximales Volumen" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Ungekühlt lagern" },
];

export default function KuehlcontainerKaufen({ embedded = false, showProducts = true }) {
  return (
    <div className={embedded ? "" : "pt-20 lg:pt-24 pb-20 bg-background min-h-screen"}>

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

      {!embedded && <>
      {/* â”€â”€ Hero â”€â”€ */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="Weißer Kühlcontainer mit Kühlaggregat im Depot" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.90) 0%, rgba(15,37,64,0.82) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Kühlcontainer kaufen</span>
          </nav>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Kühlcontainer kaufen
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Kühlcontainer kaufen oder mieten – neue und gebrauchte Kühlcontainer in 10 Fuß, 20 Fuß und 40 Fuß für Lebensmittel, Gastronomie, Events, Pharma und Gewerbe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: BRAND_BLUE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/shop?type=K%C3%BChlcontainer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              Kühlcontainer ansehen
            </Link>
          </div>
        </div>
      </div>

      </>}

      {showProducts && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductListingSection
          id="verfuegbare-kuehlcontainer"
          className="mb-16 scroll-mt-28"
          title="Verfügbare Kühlcontainer"
          description="Temperaturgeführte Container für Lebensmittel, Gewerbe, Events und sensible Waren."
          filterValue="Kühlcontainer"
        />
      </div>}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Intro â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlcontainer kaufen – die wichtigsten Fakten</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein Kühlcontainer ist die ideale Lösung, wenn Waren zuverlässig bei kontrollierter Temperatur gelagert werden müssen. Anders als ein normaler Lagercontainer verfügt ein Kühlcontainer über aktive Kühltechnik und eignet sich daher besonders für Lebensmittel, Getränke, Gastronomie, Catering, Landwirtschaft, Pharma, Events und Logistik.
            </p>
            <p>
              Wer einen <strong className="text-foreground">Kühlcontainer kaufen</strong> möchte, erhält flexible Kühlfläche direkt am gewünschten Standort. Der Container kann als dauerhafte Erweiterung bestehender Kühlräume genutzt werden oder kurzfristig zusätzlichen Platz schaffen, wenn mehr Kühlkapazität benötigt wird.
            </p>
            <p>
              Wenn Sie zunächst verschiedene Containerarten vergleichen möchten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen Überblick über Seecontainer, Bürocontainer, Wohncontainer und Kühlcontainer.
            </p>
          </div>
        </section>

        {/* â”€â”€ Neu oder gebraucht â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlcontainer kaufen: neu oder gebraucht im Vergleich</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Ob ein neuer oder gebrauchter Kühlcontainer besser passt, hängt von Nutzung, Budget und technischen Anforderungen ab. Ein neuer Kühlcontainer ist sinnvoll, wenn eine möglichst lange Nutzungsdauer, moderne Kühltechnik und ein sehr gepflegter Zustand wichtig sind.
            </p>
            <p>
              Ein gebrauchter Kühlcontainer ist häufig die wirtschaftlichere Wahl. Er eignet sich besonders für Betriebe, die zuverlässige Kühlfläche benötigen, aber die Anschaffungskosten reduzieren möchten. Wichtig ist jedoch, dass Kühlaggregat, Temperaturregelung, Türen, Dichtungen und Innenraum sorgfältig geprüft werden.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neu kaufen lohnt sich, wenn:</h3>
              </div>
              <div className="p-5 space-y-2">
                {NEW_REASONS.map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebraucht kaufen lohnt sich, wenn:</h3>
              </div>
              <div className="p-5 space-y-2">
                {USED_REASONS.map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Was kostet ein Kühlcontainer? â”€â”€ */}
        <section className="mb-14">
          <SH>Was kostet ein Kühlcontainer? Preise 2026</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Die Frage nach dem Preis lässt sich nicht pauschal beantworten. Ein Kühlcontainer kostet je nach Größe, Zustand, Baujahr, Kühlaggregat, Temperaturbereich und Lieferung unterschiedlich viel. Ein gebrauchter Kühlcontainer ist in der Regel günstiger als ein neues Modell, während größere Container und moderne Technik den Preis erhöhen können.
            </p>
            <p>
              Für ein genaues Angebot sollten Sie angeben, welche Waren gekühlt werden sollen, welche Temperatur benötigt wird und wohin der Kühlcontainer geliefert werden soll.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" style={{ color: BRAND_BLUE }} />
              Wichtige Preisfaktoren:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {PRICE_FACTORS.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner text="Kühlcontainer unverbindlich anfragen" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ Kühlcontainer mieten â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlcontainer mieten – flexibel & ab sofort verfügbar</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Einen <strong className="text-foreground">Kühlcontainer mieten</strong> lohnt sich besonders, wenn zusätzliche Kühlfläche nur für kurze Zeit benötigt wird. Das ist häufig bei Events, saisonalen Verkaufsaktionen, Erntezeiten, Messen, Umbauten oder kurzfristigen Lagerengpässen der Fall.
              </p>
              <p>
                Die Miete bietet Flexibilität, ohne sofort eine größere Investition tätigen zu müssen. Besonders für Gastronomie, Catering, Lebensmittelhandel und Landwirtschaft kann das praktisch sein, wenn nur vorübergehend mehr Kühlkapazität benötigt wird.
              </p>
              <p>
                Bei langfristiger oder regelmäßiger Nutzung ist der Kauf eines Kühlcontainers häufig wirtschaftlicher.
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-heading font-semibold text-xs text-foreground mb-3">Kühlcontainer mieten ist sinnvoll bei:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {MIETE_OCCASIONS.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_SPLIT} alt="Kühlaggregat Split-System für Kühlcontainer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Größen â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlcontainer 10 Fuß, 20 Fuß & 40 Fuß: Welche Größe passt?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Die richtige Größe hängt davon ab, wie viel Ware gekühlt werden soll und wie viel Platz am Standort vorhanden ist. Wenn Sie technische Größen besser vergleichen möchten, finden Sie weitere Informationen auf unserer Seite <IL to="/container-masse">Container Maße</IL>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { size: "10 Fuß", title: "10 Fuß Kühlcontainer", desc: "Kompakt und ideal für kleine Betriebe, Gastronomie, Hofläden, Getränke, Events oder temporäre Zusatzkühlung.", href: "/kategorien/kuehlcontainer" },
              { size: "20 Fuß", title: "20 Fuß Kühlcontainer", desc: "Gutes Verhältnis aus Kühlvolumen, Platzbedarf und Kosten. Für Gewerbekunden, Lebensmittelbetriebe und saisonale Lagerung.", href: "/20-fuss-container-kaufen", badge: "Bestseller" },
              { size: "40 Fuß", title: "40 Fuß Kühlcontainer", desc: "Maximale Kühlfläche für Großhandel, Landwirtschaft, Logistik, Industrie und größere Warenmengen.", href: "/40-fuss-container-kaufen" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={s.href} className="group flex flex-col h-full p-5 bg-card border border-border rounded-2xl hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: BRAND_BLUE }}>{s.size}</span>
                    {s.badge && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: BRAND_BLUE }}>{s.badge}</span>}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-2 group-hover:text-[#1B3A5C] transition-colors">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold font-heading" style={{ color: BRAND_BLUE }}>
                    Jetzt ansehen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Gebraucht: 7 Tipps â”€â”€ */}
        <section className="mb-14">
          <SH>7 Profi-Tipps: Kühlcontainer gebraucht kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_GEBRAUCHT} alt="Gebrauchte Kühlcontainer im Depot" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein gebrauchter Kühlcontainer kann eine sehr gute Investition sein, wenn Technik und Zustand stimmen. Da ein Kühlcontainer nicht nur aus Stahl, sondern auch aus aktiver Kühltechnik besteht, sollte die Prüfung sorgfältiger erfolgen als bei einem normalen Seecontainer.
              </p>
              <p>
                Ein günstiger gebrauchter Kühlcontainer lohnt sich nur, wenn er zuverlässig kühlt und zur geplanten Nutzung passt.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: BRAND_BLUE }} />
              Darauf sollten Sie achten:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {GEBRAUCHT_TIPS.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="font-heading font-bold text-xs shrink-0 mt-0.5" style={{ color: BRAND_BLUE }}>{i + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Kühlaggregat â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlaggregat: Herz des Kühlcontainers</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Das Kühlaggregat ist die wichtigste Komponente eines Kühlcontainers. Bekannte Hersteller sind Carrier, Thermo King und Daikin. Das Aggregat sitzt an einer Stirnseite des Containers und benötigt <strong className="text-foreground">400 V Drehstrom (3-phasig)</strong> für den Betrieb.
              </p>
              <p>
                Bei gebrauchten Kühlcontainern sollte das Kühlaggregat unbedingt auf Funktion geprüft werden. Achten Sie auf Baujahr, Kältemittelart (R-134a, R-452A oder R-404A), Datenlogger und Temperatursteuerung. Neuere Aggregate arbeiten effizienter und sind umweltfreundlicher.
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                  <span className="font-heading font-semibold text-xs text-foreground">Stromanschluss:</span>
                </div>
                <p className="text-xs text-muted-foreground">400 V Drehstrom (3-phasig), 32 A abgesichert. Normaler Haushaltsstrom (230 V) ist nicht ausreichend. Stromanschluss vorab am Standort klären.</p>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_COMPRESSOR} alt="Thermo King Kühlaggregat Kompressor" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ 20 Fuß â”€â”€ */}
        <section className="mb-14">
          <SH>20 Fuß Kühlcontainer: Stark in Leistung, fair im Preis</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der <strong className="text-foreground">20 Fuß Kühlcontainer</strong> ist eine der beliebtesten Varianten, weil er viel Kühlfläche bietet, ohne zu viel Stellplatz zu benötigen. Er eignet sich für Lebensmittel, Getränke, Gastronomie, Catering, Landwirtschaft, Hofläden und mittelgroße Gewerbebetriebe.
            </p>
            <p>
              Im Vergleich zum 10 Fuß Kühlcontainer bietet er deutlich mehr Nutzfläche. Gleichzeitig ist er einfacher zu platzieren als ein 40 Fuß Kühlcontainer. Dadurch ist er für viele Kunden die beste Allround-Lösung.
            </p>
            <p>
              Ein 20 Fuß Kühlcontainer ist besonders sinnvoll, wenn regelmäßig Kühlfläche benötigt wird, aber kein großer Kühlraum gebaut werden soll. Weitere Details finden Sie auf unserer Seite <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Steps â”€â”€ */}
        <section className="mb-14">
          <SH>Der einfachste Weg zum eigenen Kühlcontainer</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Der einfachste Weg zum passenden Kühlcontainer beginnt mit einer klaren Bedarfsermittlung. Zuerst sollte festgelegt werden, welche Waren gekühlt werden sollen und welche Temperatur erforderlich ist. Danach folgen Größe, Kauf oder Miete, Standort und Lieferung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-blue-200 transition-all">
                <span className="font-heading font-bold text-lg mb-3 block" style={{ color: BRAND_BLUE }}>{step.num}</span>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Kaufen oder mieten? â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlcontainer kaufen oder mieten? So entscheiden Sie richtig</SH>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Kaufen ist besser, wenn:</h3>
              </div>
              <div className="p-5 space-y-2">
                {["der Container langfristig genutzt wird", "regelmäßig Kühlfläche benötigt wird", "der Container Teil des Betriebs wird", "Mietkosten langfristig vermieden werden sollen"].map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Mieten ist besser, wenn:</h3>
              </div>
              <div className="p-5 space-y-2">
                {["der Bedarf nur kurzfristig besteht", "ein Event geplant ist", "saisonale Spitzen abgedeckt werden sollen", "Sie flexibel bleiben möchten"].map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Als Faustregel gilt: Für kurzfristige Nutzung ist Miete oft sinnvoll. Für dauerhaften Bedarf ist Kaufen meist wirtschaftlicher.
          </p>
        </section>

        {/* â”€â”€ 40 Fuß â”€â”€ */}
        <section className="mb-14">
          <SH>Kühlcontainer 40 Fuß: Maximaler Stauraum, zuverlässige Kühlung</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_40FT} alt="Kühlcontainer mit Thermo-King-Kühlaggregat" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">40 Fuß Kühlcontainer</strong> bietet besonders viel gekühlten Stauraum und eignet sich für größere Warenmengen. Diese Variante wird häufig in Lebensmittelhandel, Landwirtschaft, Großhandel, Logistik, Industrie und bei großen Events eingesetzt.
              </p>
              <p>
                Wichtig ist, dass am Standort ausreichend Platz vorhanden ist. Ein 40 Fuß Kühlcontainer benötigt nicht nur Stellfläche, sondern auch Platz für Lieferung, Rangieren, Stromanschluss und Luftzirkulation am Kühlaggregat.
              </p>
              <p>
                Wenn keine aktive Kühlung benötigt wird, ist ein normaler <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL> oft die günstigere Alternative.
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-heading font-semibold text-xs text-foreground mb-3">Ideal für:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {FT40_USES.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <div className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
          <div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt Kühlcontainer anfragen</h2>
            <p className="text-white/60 text-sm">Ware, Temperatur und Lieferort angeben – wir erstellen Ihr Angebot.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: BRAND_BLUE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: BRAND_BLUE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zu Kühlcontainern</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Ratgeber links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Ratgeber: Alles rund um den Kühlcontainer</h2>
          <InternalLinkGrid links={RATGEBER} />
        </section>

        {/* â”€â”€ Other types â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weitere Container-Typen</h2>
          <InternalLinkGrid links={OTHER_TYPES} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}

