"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Zap, ShieldCheck, Star } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Image assets â”€â”€ */
const IMG_HERO = "/images/refrigerated-container-10ft.webp";
const IMG_GEBRAUCHT = "/images/reefer-used-container.jpg";
const IMG_40FT = "/images/reefer-containers.jpg";
const IMG_SPLIT = "/images/reefer-split-unit.jpeg";
const IMG_COMPRESSOR = "/images/reefer-thermoking-compressor.jpg";

/* â”€â”€ Helpers â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* â”€â”€ New vs used â”€â”€ */
const NEW_REASONS = [
  "der Container langfristig genutzt wird",
  "moderne Technik gewÃ¼nscht ist",
  "Optik und Zustand wichtig sind",
  "hohe Betriebssicherheit PrioritÃ¤t hat",
];
const USED_REASONS = [
  "das Budget begrenzt ist",
  "der Container technisch geprÃ¼ft ist",
  "schnelle VerfÃ¼gbarkeit wichtig ist",
  "Gebrauchsspuren kein Problem sind",
];

/* â”€â”€ Price factors â”€â”€ */
const PRICE_FACTORS = [
  "10 FuÃŸ, 20 FuÃŸ oder 40 FuÃŸ GrÃ¶ÃŸe", "neu oder gebraucht", "Zustand des KÃ¼hlaggregats",
  "gewÃ¼nschter Temperaturbereich", "Baujahr und Hersteller", "Innenzustand und Hygiene",
  "Stromanschluss und Technik", "Transport und Kranentladung", "Kauf oder Miete",
];

/* â”€â”€ Miete occasions â”€â”€ */
const MIETE_OCCASIONS = [
  "Events und Veranstaltungen", "saisonalen Spitzen", "Erntezeiten",
  "kurzfristigen KÃ¼hlengpÃ¤ssen", "Umbau bestehender KÃ¼hlrÃ¤ume", "temporÃ¤ren Projekten",
];

/* â”€â”€ Gebraucht tips â”€â”€ */
const GEBRAUCHT_TIPS = [
  "KÃ¼hlaggregat auf Funktion prÃ¼fen",
  "Temperaturbereich mit Ihrer Ware abgleichen",
  "TÃ¼ren und Dichtungen kontrollieren",
  "Innenraum auf Hygiene und SchÃ¤den prÃ¼fen",
  "Stromanschluss vorab klÃ¤ren",
  "Rost, Boden und WandflÃ¤chen prÃ¼fen",
  "Transportkosten in den Gesamtpreis einrechnen",
];

/* â”€â”€ Steps â”€â”€ */
const STEPS = [
  { num: "01", title: "Ware & Temperatur", desc: "Festlegen, welche Waren gekÃ¼hlt werden und welche Temperatur erforderlich ist." },
  { num: "02", title: "GrÃ¶ÃŸe auswÃ¤hlen", desc: "10 FuÃŸ, 20 FuÃŸ oder 40 FuÃŸ je nach KÃ¼hlbedarf." },
  { num: "03", title: "Kauf oder Miete", desc: "Vergleichen Sie beide Optionen anhand der Nutzungsdauer." },
  { num: "04", title: "Stromanschluss", desc: "400 V Drehstrom am Standort vorab klÃ¤ren." },
  { num: "05", title: "Standort & Zufahrt", desc: "Rangierplatz, Untergrund und Luftzirkulation prÃ¼fen." },
  { num: "06", title: "Neu oder gebraucht", desc: "Je nach Budget und Anforderung entscheiden." },
  { num: "07", title: "Angebot anfragen", desc: "Unverbindliches Angebot inkl. Lieferung einholen." },
];

/* â”€â”€ 40ft ideal uses â”€â”€ */
const FT40_USES = [
  "groÃŸe Lebensmittelmengen", "Obst, GemÃ¼se, Fleisch, Fisch und GetrÃ¤nke",
  "GroÃŸhandel und Logistik", "Landwirtschaft und Erntezeiten",
  "Industrie und Produktion", "langfristige KÃ¼hlkapazitÃ¤t",
  "grÃ¶ÃŸere Catering- oder Eventprojekte",
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was ist ein KÃ¼hlcontainer?", a: "Ein KÃ¼hlcontainer ist ein Container mit aktiver KÃ¼hltechnik. Er wird genutzt, um Waren bei kontrollierter Temperatur zu lagern oder zu transportieren." },
  { q: "Kann man einen KÃ¼hlcontainer kaufen?", a: "Ja, KÃ¼hlcontainer kÃ¶nnen gekauft werden. Der Kauf lohnt sich besonders, wenn dauerhaft oder regelmÃ¤ÃŸig zusÃ¤tzliche KÃ¼hlflÃ¤che benÃ¶tigt wird." },
  { q: "Kann man einen KÃ¼hlcontainer mieten?", a: "Ja, KÃ¼hlcontainer kÃ¶nnen auch gemietet werden. Die Miete ist sinnvoll fÃ¼r Events, Erntezeiten, saisonale Spitzen oder kurzfristige LagerengpÃ¤sse." },
  { q: "Gibt es gebrauchte KÃ¼hlcontainer?", a: "Ja, gebrauchte KÃ¼hlcontainer sind erhÃ¤ltlich. Wichtig ist, dass KÃ¼hlaggregat, Temperaturregelung, TÃ¼ren, Dichtungen, Innenraum und Stromanschluss geprÃ¼ft werden." },
  { q: "Welche GrÃ¶ÃŸen gibt es bei KÃ¼hlcontainern?", a: "HÃ¤ufige GrÃ¶ÃŸen sind 10 FuÃŸ, 20 FuÃŸ und 40 FuÃŸ. Ein 10 FuÃŸ KÃ¼hlcontainer ist kompakt, ein 20 FuÃŸ KÃ¼hlcontainer ist eine gute Allround-LÃ¶sung und ein 40 FuÃŸ KÃ¼hlcontainer bietet maximale KÃ¼hlflÃ¤che." },
  { q: "Braucht ein KÃ¼hlcontainer Strom?", a: "Ja, ein KÃ¼hlcontainer benÃ¶tigt eine passende Stromversorgung (400 V Drehstrom). Der benÃ¶tigte Anschluss hÃ¤ngt vom Modell und der KÃ¼hltechnik ab und sollte vor der Lieferung geprÃ¼ft werden." },
  { q: "Was ist der Unterschied zwischen KÃ¼hlcontainer und isoliertem Container?", a: "Ein isolierter Container schÃ¼tzt nur passiv vor Temperaturschwankungen. Ein KÃ¼hlcontainer verfÃ¼gt Ã¼ber aktive KÃ¼hltechnik und kann die Temperatur im Innenraum gezielt regulieren." },
  { q: "Was beeinflusst den Preis eines KÃ¼hlcontainers?", a: "Der Preis hÃ¤ngt von GrÃ¶ÃŸe, Zustand, KÃ¼hltechnik, Temperaturbereich, neu oder gebraucht, Lieferung und Mietdauer ab. FÃ¼r ein genaues Angebot sollten Ware, Temperaturanforderung und Lieferort angegeben werden." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Ãœbersicht aller Containertypen" },
  { href: "/container-masse", title: "Container MaÃŸe", desc: "Alle Abmessungen im Ãœberblick" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Gesamtkosten kalkulieren" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliche Anforderungen" },
];

/* â”€â”€ Other types â”€â”€ */
const OTHER_TYPES = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/buerocontainer-kaufen", title: "BÃ¼rocontainer kaufen", desc: "Mobiler Arbeitsraum" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Flexible WohnlÃ¶sung" },
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container kaufen", desc: "Allround-Standard" },
  { href: "/40-fuss-container-kaufen", title: "40 FuÃŸ Container kaufen", desc: "Maximales Volumen" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "UngekÃ¼hlt lagern" },
];

export default function KuehlcontainerKaufen() {
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
          <img src={IMG_HERO} alt="WeiÃŸer KÃ¼hlcontainer mit KÃ¼hlaggregat im Depot" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.90) 0%, rgba(15,37,64,0.82) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">KÃ¼hlcontainer kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2026</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            KÃ¼hlcontainer kaufen
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            KÃ¼hlcontainer kaufen oder mieten â€“ neue und gebrauchte KÃ¼hlcontainer in 10 FuÃŸ, 20 FuÃŸ und 40 FuÃŸ fÃ¼r Lebensmittel, Gastronomie, Events, Pharma und Gewerbe.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/kategorien/kuehlcontainer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              KÃ¼hlcontainer ansehen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Intro â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlcontainer kaufen â€“ die wichtigsten Fakten</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein KÃ¼hlcontainer ist die ideale LÃ¶sung, wenn Waren zuverlÃ¤ssig bei kontrollierter Temperatur gelagert werden mÃ¼ssen. Anders als ein normaler Lagercontainer verfÃ¼gt ein KÃ¼hlcontainer Ã¼ber aktive KÃ¼hltechnik und eignet sich daher besonders fÃ¼r Lebensmittel, GetrÃ¤nke, Gastronomie, Catering, Landwirtschaft, Pharma, Events und Logistik.
            </p>
            <p>
              Wer einen <strong className="text-foreground">KÃ¼hlcontainer kaufen</strong> mÃ¶chte, erhÃ¤lt flexible KÃ¼hlflÃ¤che direkt am gewÃ¼nschten Standort. Der Container kann als dauerhafte Erweiterung bestehender KÃ¼hlrÃ¤ume genutzt werden oder kurzfristig zusÃ¤tzlichen Platz schaffen, wenn mehr KÃ¼hlkapazitÃ¤t benÃ¶tigt wird.
            </p>
            <p>
              Wenn Sie zunÃ¤chst verschiedene Containerarten vergleichen mÃ¶chten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen Ãœberblick Ã¼ber Seecontainer, BÃ¼rocontainer, Wohncontainer und KÃ¼hlcontainer.
            </p>
          </div>
        </section>

        {/* â”€â”€ Neu oder gebraucht â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlcontainer kaufen: neu oder gebraucht im Vergleich</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Ob ein neuer oder gebrauchter KÃ¼hlcontainer besser passt, hÃ¤ngt von Nutzung, Budget und technischen Anforderungen ab. Ein neuer KÃ¼hlcontainer ist sinnvoll, wenn eine mÃ¶glichst lange Nutzungsdauer, moderne KÃ¼hltechnik und ein sehr gepflegter Zustand wichtig sind.
            </p>
            <p>
              Ein gebrauchter KÃ¼hlcontainer ist hÃ¤ufig die wirtschaftlichere Wahl. Er eignet sich besonders fÃ¼r Betriebe, die zuverlÃ¤ssige KÃ¼hlflÃ¤che benÃ¶tigen, aber die Anschaffungskosten reduzieren mÃ¶chten. Wichtig ist jedoch, dass KÃ¼hlaggregat, Temperaturregelung, TÃ¼ren, Dichtungen und Innenraum sorgfÃ¤ltig geprÃ¼ft werden.
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
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
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

        {/* â”€â”€ Was kostet ein KÃ¼hlcontainer? â”€â”€ */}
        <section className="mb-14">
          <SH>Was kostet ein KÃ¼hlcontainer? Preise 2026</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Die Frage nach dem Preis lÃ¤sst sich nicht pauschal beantworten. Ein KÃ¼hlcontainer kostet je nach GrÃ¶ÃŸe, Zustand, Baujahr, KÃ¼hlaggregat, Temperaturbereich und Lieferung unterschiedlich viel. Ein gebrauchter KÃ¼hlcontainer ist in der Regel gÃ¼nstiger als ein neues Modell, wÃ¤hrend grÃ¶ÃŸere Container und moderne Technik den Preis erhÃ¶hen kÃ¶nnen.
            </p>
            <p>
              FÃ¼r ein genaues Angebot sollten Sie angeben, welche Waren gekÃ¼hlt werden sollen, welche Temperatur benÃ¶tigt wird und wohin der KÃ¼hlcontainer geliefert werden soll.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" style={{ color: ORANGE }} />
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

        <CtaBanner text="KÃ¼hlcontainer unverbindlich anfragen" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ KÃ¼hlcontainer mieten â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlcontainer mieten â€“ flexibel & ab sofort verfÃ¼gbar</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Einen <strong className="text-foreground">KÃ¼hlcontainer mieten</strong> lohnt sich besonders, wenn zusÃ¤tzliche KÃ¼hlflÃ¤che nur fÃ¼r kurze Zeit benÃ¶tigt wird. Das ist hÃ¤ufig bei Events, saisonalen Verkaufsaktionen, Erntezeiten, Messen, Umbauten oder kurzfristigen LagerengpÃ¤ssen der Fall.
              </p>
              <p>
                Die Miete bietet FlexibilitÃ¤t, ohne sofort eine grÃ¶ÃŸere Investition tÃ¤tigen zu mÃ¼ssen. Besonders fÃ¼r Gastronomie, Catering, Lebensmittelhandel und Landwirtschaft kann das praktisch sein, wenn nur vorÃ¼bergehend mehr KÃ¼hlkapazitÃ¤t benÃ¶tigt wird.
              </p>
              <p>
                Bei langfristiger oder regelmÃ¤ÃŸiger Nutzung ist der Kauf eines KÃ¼hlcontainers hÃ¤ufig wirtschaftlicher.
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-heading font-semibold text-xs text-foreground mb-3">KÃ¼hlcontainer mieten ist sinnvoll bei:</p>
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
                <img src={IMG_SPLIT} alt="KÃ¼hlaggregat Split-System fÃ¼r KÃ¼hlcontainer" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ GrÃ¶ÃŸen â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlcontainer 10 FuÃŸ, 20 FuÃŸ & 40 FuÃŸ: Welche GrÃ¶ÃŸe passt?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Die richtige GrÃ¶ÃŸe hÃ¤ngt davon ab, wie viel Ware gekÃ¼hlt werden soll und wie viel Platz am Standort vorhanden ist. Wenn Sie technische GrÃ¶ÃŸen besser vergleichen mÃ¶chten, finden Sie weitere Informationen auf unserer Seite <IL to="/container-masse">Container MaÃŸe</IL>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { size: "10 FuÃŸ", title: "10 FuÃŸ KÃ¼hlcontainer", desc: "Kompakt und ideal fÃ¼r kleine Betriebe, Gastronomie, HoflÃ¤den, GetrÃ¤nke, Events oder temporÃ¤re ZusatzkÃ¼hlung.", href: "/kategorien/kuehlcontainer" },
              { size: "20 FuÃŸ", title: "20 FuÃŸ KÃ¼hlcontainer", desc: "Gutes VerhÃ¤ltnis aus KÃ¼hlvolumen, Platzbedarf und Kosten. FÃ¼r Gewerbekunden, Lebensmittelbetriebe und saisonale Lagerung.", href: "/20-fuss-container-kaufen", badge: "Bestseller" },
              { size: "40 FuÃŸ", title: "40 FuÃŸ KÃ¼hlcontainer", desc: "Maximale KÃ¼hlflÃ¤che fÃ¼r GroÃŸhandel, Landwirtschaft, Logistik, Industrie und grÃ¶ÃŸere Warenmengen.", href: "/40-fuss-container-kaufen" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to={s.href} className="group flex flex-col h-full p-5 bg-card border border-border rounded-2xl hover:border-orange-300 hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs tracking-widest uppercase font-bold" style={{ color: ORANGE }}>{s.size}</span>
                    {s.badge && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full text-white" style={{ backgroundColor: ORANGE }}>{s.badge}</span>}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-foreground mb-2 group-hover:text-[#1B3A5C] transition-colors">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                    Jetzt ansehen <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Gebraucht: 7 Tipps â”€â”€ */}
        <section className="mb-14">
          <SH>7 Profi-Tipps: KÃ¼hlcontainer gebraucht kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_GEBRAUCHT} alt="Gebrauchte KÃ¼hlcontainer im Depot" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein gebrauchter KÃ¼hlcontainer kann eine sehr gute Investition sein, wenn Technik und Zustand stimmen. Da ein KÃ¼hlcontainer nicht nur aus Stahl, sondern auch aus aktiver KÃ¼hltechnik besteht, sollte die PrÃ¼fung sorgfÃ¤ltiger erfolgen als bei einem normalen Seecontainer.
              </p>
              <p>
                Ein gÃ¼nstiger gebrauchter KÃ¼hlcontainer lohnt sich nur, wenn er zuverlÃ¤ssig kÃ¼hlt und zur geplanten Nutzung passt.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: ORANGE }} />
              Darauf sollten Sie achten:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {GEBRAUCHT_TIPS.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="font-heading font-bold text-xs shrink-0 mt-0.5" style={{ color: ORANGE }}>{i + 1}.</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ KÃ¼hlaggregat â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlaggregat: Herz des KÃ¼hlcontainers</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Das KÃ¼hlaggregat ist die wichtigste Komponente eines KÃ¼hlcontainers. Bekannte Hersteller sind Carrier, Thermo King und Daikin. Das Aggregat sitzt an einer Stirnseite des Containers und benÃ¶tigt <strong className="text-foreground">400 V Drehstrom (3-phasig)</strong> fÃ¼r den Betrieb.
              </p>
              <p>
                Bei gebrauchten KÃ¼hlcontainern sollte das KÃ¼hlaggregat unbedingt auf Funktion geprÃ¼ft werden. Achten Sie auf Baujahr, KÃ¤ltemittelart (R-134a, R-452A oder R-404A), Datenlogger und Temperatursteuerung. Neuere Aggregate arbeiten effizienter und sind umweltfreundlicher.
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4" style={{ color: ORANGE }} />
                  <span className="font-heading font-semibold text-xs text-foreground">Stromanschluss:</span>
                </div>
                <p className="text-xs text-muted-foreground">400 V Drehstrom (3-phasig), 32 A abgesichert. Normaler Haushaltsstrom (230 V) ist nicht ausreichend. Stromanschluss vorab am Standort klÃ¤ren.</p>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_COMPRESSOR} alt="Thermo King KÃ¼hlaggregat Kompressor" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ 20 FuÃŸ â”€â”€ */}
        <section className="mb-14">
          <SH>20 FuÃŸ KÃ¼hlcontainer: Stark in Leistung, fair im Preis</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der <strong className="text-foreground">20 FuÃŸ KÃ¼hlcontainer</strong> ist eine der beliebtesten Varianten, weil er viel KÃ¼hlflÃ¤che bietet, ohne zu viel Stellplatz zu benÃ¶tigen. Er eignet sich fÃ¼r Lebensmittel, GetrÃ¤nke, Gastronomie, Catering, Landwirtschaft, HoflÃ¤den und mittelgroÃŸe Gewerbebetriebe.
            </p>
            <p>
              Im Vergleich zum 10 FuÃŸ KÃ¼hlcontainer bietet er deutlich mehr NutzflÃ¤che. Gleichzeitig ist er einfacher zu platzieren als ein 40 FuÃŸ KÃ¼hlcontainer. Dadurch ist er fÃ¼r viele Kunden die beste Allround-LÃ¶sung.
            </p>
            <p>
              Ein 20 FuÃŸ KÃ¼hlcontainer ist besonders sinnvoll, wenn regelmÃ¤ÃŸig KÃ¼hlflÃ¤che benÃ¶tigt wird, aber kein groÃŸer KÃ¼hlraum gebaut werden soll. Weitere Details finden Sie auf unserer Seite <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container kaufen</IL>.
            </p>
          </div>
        </section>

        {/* â”€â”€ Steps â”€â”€ */}
        <section className="mb-14">
          <SH>Der einfachste Weg zum eigenen KÃ¼hlcontainer</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Der einfachste Weg zum passenden KÃ¼hlcontainer beginnt mit einer klaren Bedarfsermittlung. Zuerst sollte festgelegt werden, welche Waren gekÃ¼hlt werden sollen und welche Temperatur erforderlich ist. Danach folgen GrÃ¶ÃŸe, Kauf oder Miete, Standort und Lieferung.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-orange-200 transition-all">
                <span className="font-heading font-bold text-lg mb-3 block" style={{ color: ORANGE }}>{step.num}</span>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Kaufen oder mieten? â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlcontainer kaufen oder mieten? So entscheiden Sie richtig</SH>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Kaufen ist besser, wenn:</h3>
              </div>
              <div className="p-5 space-y-2">
                {["der Container langfristig genutzt wird", "regelmÃ¤ÃŸig KÃ¼hlflÃ¤che benÃ¶tigt wird", "der Container Teil des Betriebs wird", "Mietkosten langfristig vermieden werden sollen"].map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Mieten ist besser, wenn:</h3>
              </div>
              <div className="p-5 space-y-2">
                {["der Bedarf nur kurzfristig besteht", "ein Event geplant ist", "saisonale Spitzen abgedeckt werden sollen", "Sie flexibel bleiben mÃ¶chten"].map((r, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-3xl">
            Als Faustregel gilt: FÃ¼r kurzfristige Nutzung ist Miete oft sinnvoll. FÃ¼r dauerhaften Bedarf ist Kaufen meist wirtschaftlicher.
          </p>
        </section>

        {/* â”€â”€ 40 FuÃŸ â”€â”€ */}
        <section className="mb-14">
          <SH>KÃ¼hlcontainer 40 FuÃŸ: Maximaler Stauraum, zuverlÃ¤ssige KÃ¼hlung</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_40FT} alt="KÃ¼hlcontainer mit Thermo-King-KÃ¼hlaggregat" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">40 FuÃŸ KÃ¼hlcontainer</strong> bietet besonders viel gekÃ¼hlten Stauraum und eignet sich fÃ¼r grÃ¶ÃŸere Warenmengen. Diese Variante wird hÃ¤ufig in Lebensmittelhandel, Landwirtschaft, GroÃŸhandel, Logistik, Industrie und bei groÃŸen Events eingesetzt.
              </p>
              <p>
                Wichtig ist, dass am Standort ausreichend Platz vorhanden ist. Ein 40 FuÃŸ KÃ¼hlcontainer benÃ¶tigt nicht nur StellflÃ¤che, sondern auch Platz fÃ¼r Lieferung, Rangieren, Stromanschluss und Luftzirkulation am KÃ¼hlaggregat.
              </p>
              <p>
                Wenn keine aktive KÃ¼hlung benÃ¶tigt wird, ist ein normaler <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container kaufen</IL> oft die gÃ¼nstigere Alternative.
              </p>
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <p className="font-heading font-semibold text-xs text-foreground mb-3">Ideal fÃ¼r:</p>
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
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt KÃ¼hlcontainer anfragen</h2>
            <p className="text-white/60 text-sm">Ware, Temperatur und Lieferort angeben â€“ wir erstellen Ihr Angebot.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">HÃ¤ufige Fragen zu KÃ¼hlcontainern</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Ratgeber links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Ratgeber: Alles rund um den KÃ¼hlcontainer</h2>
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

