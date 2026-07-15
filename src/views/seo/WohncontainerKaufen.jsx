"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, X, Home, Truck, ShieldCheck, Wrench, Snowflake, Building2, Star, AlertTriangle, Plug } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Image assets â”€â”€ */
const IMG_HERO = "/images/wohncontainer-modern-mobil.jpg";
const IMG_PRODUCT_1 = "/images/wohncontainer-modern-front.webp";
const IMG_PRODUCT_2 = "/images/wohncontainer-20ft-zweigeschossig.webp";
const IMG_WINTERFEST = "/images/wohncontainer-zweigeschossige-anlage.jpg";
const IMG_INTERIOR = "/images/wohncontainer-40ft-grundriss.webp";
const IMG_SCHLUESSEL = "/images/wohncontainer-20ft-zweigeschossig.webp";
const IMG_GEBRAUCHT = "/images/wohncontainer-zweigeschossige-anlage.jpg";
const IMG_TRANSPORT = "/images/wohncontainer-transport-kran.jpg";

/* â”€â”€ Helpers â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* â”€â”€ Winterfest checklist â”€â”€ */
const WINTERFEST_CHECK = [
  { icon: ShieldCheck, text: "Gute Wand-, Boden- und DachdÃ¤mmung" },
  { icon: Wrench, text: "Heizung fÃ¼r ganzjÃ¤hrige Nutzung" },
  { icon: ShieldCheck, text: "Dichte Fenster und TÃ¼ren" },
  { icon: Snowflake, text: "Frostschutz fÃ¼r Wasserleitungen" },
  { icon: Plug, text: "Geeignete Strom-, Wasser- und AbwasseranschlÃ¼sse" },
];

/* â”€â”€ Price factors â”€â”€ */
const PRICE_FACTORS = [
  "Neu oder gebraucht", "GrÃ¶ÃŸe und Grundriss", "Mit oder ohne KÃ¼che und Bad",
  "Winterfest oder einfache AusfÃ¼hrung", "SchlÃ¼sselfertig oder individuell ausbaubar",
  "Transport, Kranentladung und Montage", "AnschlÃ¼sse fÃ¼r Strom, Wasser und Abwasser",
];

/* â”€â”€ Kitchen & bath equipment â”€â”€ */
const KITCHEN_BATH = [
  "Badezimmer mit Dusche, WC und Waschbecken", "KÃ¼chenzeile", "Warmwasserbereitung",
  "Elektroinstallation", "Beleuchtung", "Heizung", "Fenster", "Bodenbelag", "Innenverkleidung",
];

/* â”€â”€ Gebraucht checklist â”€â”€ */
const GEBRAUCHT_CHECK = [
  "Ist der Container trocken und dicht?", "Sind Fenster und TÃ¼ren funktionsfÃ¤hig?",
  "Ist die Elektrik sicher nutzbar?", "Funktionieren Bad, KÃ¼che und WasseranschlÃ¼sse?",
  "Ist die DÃ¤mmung ausreichend?", "Gibt es Rost, Schimmel oder FeuchtigkeitsschÃ¤den?",
  "Sind Transport und Aufstellung wirtschaftlich sinnvoll?",
];

/* â”€â”€ Steps â”€â”€ */
const STEPS = [
  { num: "01", title: "Nutzung festlegen", desc: "VorÃ¼bergehend, dauerhaft, als Unterkunft, GÃ¤stehaus oder Mitarbeiterwohnung." },
  { num: "02", title: "GrÃ¶ÃŸe & Grundriss", desc: "Passende ContainergrÃ¶ÃŸe und Raumaufteilung wÃ¤hlen." },
  { num: "03", title: "Ausstattung", desc: "DÃ¤mmung, Heizung, KÃ¼che, Bad und Elektrik bestimmen." },
  { num: "04", title: "Lieferort prÃ¼fen", desc: "Zufahrt, Untergrund und AufstellflÃ¤che kontrollieren." },
  { num: "05", title: "Genehmigung klÃ¤ren", desc: "BaubehÃ¶rde kontaktieren bei dauerhafter Nutzung." },
  { num: "06", title: "Angebot anfragen", desc: "Unverbindliches Angebot mit Ausstattung einholen." },
  { num: "07", title: "Lieferung planen", desc: "Transport, Kran und Anschluss rechtzeitig organisieren." },
];

/* â”€â”€ Mistakes to avoid â”€â”€ */
const MISTAKES = [
  "Nur nach dem gÃ¼nstigsten Preis entscheiden",
  "Winterfestigkeit nicht prÃ¼fen",
  "Transport und Kranentladung vergessen",
  "Genehmigung zu spÃ¤t klÃ¤ren",
  "AnschlÃ¼sse fÃ¼r Strom, Wasser und Abwasser unterschÃ¤tzen",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { icon: Truck, title: "Schnelle VerfÃ¼gbarkeit", desc: "Schneller planbar und einsatzbereit als klassische Bauprojekte." },
  { icon: Building2, title: "Modular erweiterbar", desc: "Einzelmodule oder kombinierte Wohnanlagen â€“ flexibel anpassbar." },
  { icon: Star, title: "Wirtschaftlich", desc: "Planbare Alternative zum klassischen Bau mit guter Kostenkontrolle." },
  { icon: Home, title: "Mobil & wiederverwendbar", desc: "Bei Bedarf transportierbar und an anderem Standort erneut nutzbar." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein Wohncontainer?", a: "Ein Wohncontainer kostet je nach GrÃ¶ÃŸe, Zustand und Ausstattung unterschiedlich viel. Einfache gebrauchte Modelle sind gÃ¼nstiger, wÃ¤hrend winterfeste und schlÃ¼sselfertige Wohncontainer mit KÃ¼che und Bad deutlich mehr kosten kÃ¶nnen. Transport, Kran, Fundament und AnschlÃ¼sse sollten zusÃ¤tzlich eingeplant werden." },
  { q: "Kann man einen Wohncontainer gebraucht kaufen?", a: "Ja, gebrauchte Wohncontainer sind eine beliebte LÃ¶sung fÃ¼r Kunden, die Kosten sparen mÃ¶chten. Wichtig ist, dass der Container trocken, stabil und technisch funktionsfÃ¤hig ist. Besonders DÃ¤mmung, Elektrik, Fenster, TÃ¼ren, Bad und KÃ¼che sollten geprÃ¼ft werden." },
  { q: "Gibt es Wohncontainer mit KÃ¼che und Bad?", a: "Ja, Wohncontainer kÃ¶nnen mit KÃ¼che und Bad ausgestattet sein. Diese Variante eignet sich besonders fÃ¼r lÃ¤ngere Nutzung, MitarbeiterunterkÃ¼nfte, FerienunterkÃ¼nfte oder eigenstÃ¤ndige Wohneinheiten." },
  { q: "Ist ein Wohncontainer winterfest?", a: "Ein Wohncontainer ist winterfest, wenn er gut gedÃ¤mmt ist und Ã¼ber geeignete Heizung, dichte Fenster und geschÃ¼tzte Leitungen verfÃ¼gt. Nicht jeder gebrauchte Wohncontainer ist automatisch winterfest." },
  { q: "Was bedeutet schlÃ¼sselfertiger Wohncontainer?", a: "Ein schlÃ¼sselfertiger Wohncontainer ist bereits weitgehend ausgestattet und kann nach Lieferung, Aufstellung und Anschluss direkt genutzt werden. Je nach Modell sind KÃ¼che, Bad, Heizung, Elektroinstallation und Innenausbau enthalten." },
  { q: "Braucht man eine Genehmigung fÃ¼r einen Wohncontainer?", a: "Das hÃ¤ngt vom Standort, der Nutzungsdauer und der Nutzung ab. Bei dauerhafter Wohnnutzung oder fester Aufstellung sollte immer die zustÃ¤ndige BaubehÃ¶rde kontaktiert werden." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Ãœbersicht aller Containertypen" },
  { href: "/container-masse", title: "Container MaÃŸe", desc: "GrundmaÃŸe & InnenflÃ¤che" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Baugenehmigung klÃ¤ren" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Gesamtkosten berechnen" },
];

/* â”€â”€ Other container types â”€â”€ */
const OTHER_TYPES = [
  { href: "/buerocontainer-kaufen", title: "BÃ¼rocontainer kaufen", desc: "Arbeitsraum statt Wohnraum" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/kuehlcontainer-kaufen", title: "KÃ¼hlcontainer kaufen", desc: "SpeziallÃ¶sung fÃ¼r KÃ¼hlung" },
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container kaufen", desc: "Basis fÃ¼r Wohnmodule" },
  { href: "/40-fuss-container-kaufen", title: "40 FuÃŸ Container kaufen", desc: "Mehr Platz fÃ¼r Wohnen" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "LagerflÃ¤che auf dem GrundstÃ¼ck" },
];

export default function WohncontainerKaufen() {
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
          <img src={IMG_HERO} alt="Moderner mobiler Wohncontainer mit Glasfront und Holzverkleidung" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.88) 0%, rgba(15,37,64,0.78) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Wohncontainer kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2026</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Wohncontainer kaufen
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Wohncontainer kaufen in Deutschland â€“ winterfeste Wohncontainer, gebrauchte Modelle, schlÃ¼sselfertige LÃ¶sungen sowie Container mit KÃ¼che und Bad. Jetzt passende WohnlÃ¶sung finden.
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
          <SH>Wohncontainer als flexible WohnlÃ¶sung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein Wohncontainer ist eine flexible LÃ¶sung, wenn schnell zusÃ¤tzlicher Wohnraum benÃ¶tigt wird. Ob als Mitarbeiterunterkunft, ÃœbergangslÃ¶sung, Ferienunterkunft, GÃ¤stehaus oder temporÃ¤rer Wohnraum wÃ¤hrend Bau- oder Sanierungsarbeiten â€“ Wohncontainer lassen sich vielseitig einsetzen und individuell ausstatten.
            </p>
            <p>
              Wer einen <strong className="text-foreground">Wohncontainer kaufen</strong> mÃ¶chte, sollte nicht nur auf den Preis achten. Wichtige Punkte sind DÃ¤mmung, Heizung, KÃ¼che, Bad, AnschlÃ¼sse, Transport, Genehmigung und der Zustand des Containers. Je besser diese Faktoren vor dem Kauf geprÃ¼ft werden, desto sicherer ist die Entscheidung.
            </p>
            <p>
              Wenn Sie verschiedene Containerarten vergleichen mÃ¶chten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen Ãœberblick Ã¼ber Wohncontainer, BÃ¼rocontainer, Seecontainer und KÃ¼hlcontainer.
            </p>
          </div>
        </section>

        {/* â”€â”€ Product showcase â”€â”€ */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={IMG_PRODUCT_1} alt="Moderner Wohncontainer mit groÃŸer Glasfront" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">Moderne Wohncontainer</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">ZeitgemÃ¤ÃŸes Design mit Glasfront, Holzverkleidung und durchdachtem Grundriss fÃ¼r komfortables Wohnen.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={IMG_PRODUCT_2} alt="Zweigeschossiger 20 FuÃŸ Wohncontainer mit AuÃŸentreppe" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">Mobile Wohneinheiten</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Flexible, transportable WohnlÃ¶sungen fÃ¼r temporÃ¤re oder dauerhafte Nutzung an jedem Standort.</p>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ 5 Profi-Tipps: Winterfest â”€â”€ */}
        <section className="mb-14">
          <SH>5 Profi-Tipps: Winterfeste Wohncontainer kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_WINTERFEST} alt="Zweigeschossige Wohncontaineranlage mit AuÃŸentreppe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">Wohncontainer winterfest</strong> ist sinnvoll, wenn der Container ganzjÃ¤hrig genutzt werden soll. Achten Sie besonders auf eine gute DÃ¤mmung von WÃ¤nden, Boden und Dach. Ohne ausreichende Isolierung entstehen schnell WÃ¤rmeverluste, Kondenswasser und hohe Heizkosten.
              </p>
              <p>
                Wichtig sind auÃŸerdem dichte Fenster und TÃ¼ren, eine passende Heizung sowie frostgeschÃ¼tzte Wasser- und Abwasserleitungen. Gerade bei gebrauchten Wohncontainern sollte geprÃ¼ft werden, ob sie wirklich winterfest sind oder nur fÃ¼r einfache saisonale Nutzung geeignet sind.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Snowflake className="w-4 h-4" style={{ color: ORANGE }} />
              Worauf Sie achten sollten:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {WINTERFEST_CHECK.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Was kostet ein Wohncontainer? â”€â”€ */}
        <section className="mb-14">
          <SH>Was kostet ein Wohncontainer? Preise 2026</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Die Frage <strong className="text-foreground">was kostet ein Wohncontainer</strong> lÃ¤sst sich nicht pauschal beantworten. Die Preise hÃ¤ngen stark von GrÃ¶ÃŸe, Zustand, Ausstattung, DÃ¤mmung, KÃ¼che, Bad, Lieferung und Montage ab.
            </p>
            <p>
              Einfache gebrauchte Wohncontainer sind in der Regel gÃ¼nstiger als neue oder schlÃ¼sselfertige Modelle. Ein Wohncontainer mit KÃ¼che, Bad, Heizung und winterfester Ausstattung kostet deutlich mehr als eine einfache Unterkunft ohne SanitÃ¤rbereich.
            </p>
            <p>
              FÃ¼r ein genaues Angebot sollten Sie immer den gewÃ¼nschten Einsatzort, die geplante Nutzung und die benÃ¶tigte Ausstattung angeben.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Star className="w-4 h-4" style={{ color: ORANGE }} />
              Typische Preisfaktoren:
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

        <CtaBanner text="Wohncontainer unverbindlich anfragen" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ Wohncontainer mit Bad & KÃ¼che â”€â”€ */}
        <section className="mb-14">
          <SH>Wohncontainer mit Bad & KÃ¼che: Alles im Blick</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">Wohncontainer mit KÃ¼che und Bad</strong> ist besonders praktisch, wenn eine eigenstÃ¤ndige Wohneinheit benÃ¶tigt wird. Diese Variante eignet sich fÃ¼r MitarbeiterunterkÃ¼nfte, FerienlÃ¶sungen, Ãœbergangswohnungen oder lÃ¤ngere private Nutzung.
              </p>
              <p>
                Zur typischen Ausstattung gehÃ¶ren Badezimmer mit Dusche, WC und Waschbecken, eine KÃ¼chenzeile, Warmwasser, Elektroinstallation, Beleuchtung, Heizung, Fenster, Bodenbelag und Innenverkleidung.
              </p>
              <p>
                Ein Wohncontainer mit KÃ¼che und Bad bietet deutlich mehr Komfort als eine einfache Unterkunft. Gleichzeitig sollten AnschlÃ¼sse, EntwÃ¤sserung, Stromversorgung und Frostschutz sorgfÃ¤ltig geplant werden.
              </p>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                <img src={IMG_INTERIOR} alt="3D-Grundriss eines 40 FuÃŸ Wohncontainers mit KÃ¼che, Bad und Terrasse" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4" style={{ color: ORANGE }} />
              Typische Ausstattung mit KÃ¼che und Bad:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {KITCHEN_BATH.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ SchlÃ¼sselfertig â”€â”€ */}
        <section className="mb-14">
          <SH>Einzugsbereit: SchlÃ¼sselfertige Wohncontainer</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_SCHLUESSEL} alt="SchlÃ¼sselfertiger zweistÃ¶ckiger Wohncontainer mit Treppe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein schlÃ¼sselfertiger Wohncontainer ist so vorbereitet, dass er nach Lieferung, Aufstellung und Anschluss direkt genutzt werden kann. Das ist ideal fÃ¼r Kunden, die eine schnelle und komplette LÃ¶sung suchen, ohne den Innenausbau selbst organisieren zu mÃ¼ssen.
              </p>
              <p>
                SchlÃ¼sselfertige Wohncontainer kÃ¶nnen je nach AusfÃ¼hrung KÃ¼che, Bad, Heizung, DÃ¤mmung, Elektroinstallation, Bodenbelag und Innenausbau enthalten. Dadurch sind sie besonders interessant fÃ¼r MitarbeiterunterkÃ¼nfte, GÃ¤stehÃ¤user, Ferienprojekte oder temporÃ¤ren Wohnraum.
              </p>
              <p>
                Wer nach <strong className="text-foreground">Wohncontainer schlÃ¼sselfertig Preis</strong> sucht, sollte immer prÃ¼fen, was im Preis enthalten ist. Transport, Kran, Fundament, AnschlÃ¼sse und Genehmigung sind nicht immer automatisch eingeschlossen.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€ 7 Tipps: Gebraucht kaufen â”€â”€ */}
        <section className="mb-14">
          <SH>7 clevere Tipps: Wohncontainer gebraucht kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_GEBRAUCHT} alt="Gebrauchte rote Wohncontaineranlage mit AuÃŸentreppe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">Wohncontainer gebraucht</strong> kann eine gute Wahl sein, wenn Sie Kosten sparen mÃ¶chten. Wichtig ist aber, den Zustand sorgfÃ¤ltig zu prÃ¼fen. Ein gÃ¼nstiger Preis lohnt sich nur, wenn der Container trocken, stabil und technisch nutzbar ist.
              </p>
              <p>
                Achten Sie vor allem auf Feuchtigkeit, beschÃ¤digte BÃ¶den, undichte Fenster, defekte Elektrik und alte SanitÃ¤rinstallationen. Auch DÃ¤mmung und Heizung sind entscheidend, wenn der Container lÃ¤nger oder im Winter genutzt werden soll.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: ORANGE }} />
              Checkliste fÃ¼r gebrauchte Wohncontainer:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {GEBRAUCHT_CHECK.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Der einfachste Weg â”€â”€ */}
        <section className="mb-14">
          <SH>Der einfachste Weg zum eigenen Wohncontainer</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Der einfachste Weg zum passenden Wohncontainer beginnt mit einer klaren Planung. Ãœberlegen Sie zuerst, wie der Container genutzt werden soll: nur vorÃ¼bergehend, dauerhaft, als Unterkunft, GÃ¤stehaus oder Mitarbeiterwohnung.
            </p>
            <p>
              Danach sollten GrÃ¶ÃŸe, Ausstattung und Standort geklÃ¤rt werden. Besonders wichtig sind Zufahrt, Untergrund, Stromanschluss, Wasseranschluss, Abwasser und mÃ¶gliche Genehmigungen. FÃ¼r die technische Planung hilft auch ein Blick auf unsere Seite <IL to="/container-masse">Container MaÃŸe</IL>.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-orange-200 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-heading font-bold text-lg" style={{ color: ORANGE }}>{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ 5 fatale Fehler â”€â”€ */}
        <section className="mb-14">
          <SH>Wohncontainer kaufen: 5 fatale Fehler vermeiden</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Beim Kauf eines Wohncontainers passieren hÃ¤ufig Fehler, die spÃ¤ter teuer werden kÃ¶nnen. Viele KÃ¤ufer achten nur auf den Anschaffungspreis und vergessen Transport, Fundament, AnschlÃ¼sse oder Genehmigung.
            </p>
            <p>
              Auch ein zu gÃ¼nstiger gebrauchter Wohncontainer kann problematisch sein, wenn nachtrÃ¤glich DÃ¤mmung, Elektrik, Bad oder Heizung erneuert werden mÃ¼ssen.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" style={{ color: ORANGE }} />
              Diese Fehler sollten Sie vermeiden:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {MISTAKES.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* â”€â”€ Preise, PlÃ¤ne & Profi-Tipps â”€â”€ */}
        <section className="mb-14">
          <SH>Wohncontainer kaufen: Preise, PlÃ¤ne & Profi-Tipps</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein guter Wohncontainer passt nicht nur zum Budget, sondern auch zur geplanten Nutzung. FÃ¼r kurze EinsÃ¤tze reicht oft eine einfache LÃ¶sung. FÃ¼r lÃ¤ngeres Wohnen sind DÃ¤mmung, Heizung, Bad, KÃ¼che und ein durchdachter Grundriss deutlich wichtiger.
            </p>
            <p>
              Wenn der Container dauerhaft genutzt werden soll, sollten auch Genehmigung, Brandschutz, WÃ¤rmeschutz und AnschlÃ¼sse frÃ¼hzeitig geprÃ¼ft werden. Bei grÃ¶ÃŸeren Projekten kÃ¶nnen mehrere Wohncontainer miteinander kombiniert werden, um mehr WohnflÃ¤che, separate RÃ¤ume oder zusÃ¤tzliche SanitÃ¤rbereiche zu schaffen.
            </p>
            <p>
              FÃ¼r reine ArbeitsrÃ¤ume ist ein <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL> meist besser geeignet. FÃ¼r Lagerzwecke sind <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>, <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container kaufen</IL> oder <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container kaufen</IL> die passendere Wahl.
            </p>
          </div>
        </section>

        {/* â”€â”€ Lieferung â”€â”€ */}
        <section className="mb-14">
          <SH>Lieferung und Transport von Wohncontainern</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_TRANSPORT} alt="Wohncontainer wird per LKW-Kran geliefert und aufgestellt" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Wohncontainer werden in der Regel per LKW geliefert und je nach Standort mit Kran abgesetzt. Vor der Lieferung mÃ¼ssen Zufahrt, RangierflÃ¤che, Untergrund und mÃ¶gliche Hindernisse geprÃ¼ft werden. Der Aufstellort sollte eben, tragfÃ¤hig und gut vorbereitet sein.
              </p>
              <p>
                FÃ¼r die Aufstellung kÃ¶nnen je nach Nutzung Punktfundamente, Streifenfundamente, Betonplatten oder ein vorbereiteter Schotteruntergrund sinnvoll sein. Bei Wohncontainern sind auÃŸerdem AnschlÃ¼sse fÃ¼r Strom, Wasser und Abwasser zu berÃ¼cksichtigen. Mehr dazu auf der Seite <IL to="/container-lieferung">Container Lieferung</IL>.
              </p>
            </div>
          </div>
        </section>

        {/* â”€â”€ Vorteile â”€â”€ */}
        <section className="mb-14">
          <SH>Vorteile eines Wohncontainers</SH>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ADVANTAGES.map((adv, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-orange-200 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${NAVY}15` }}>
                  <adv.icon className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">{adv.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ So finden Sie den perfekten Wohncontainer â”€â”€ */}
        <section className="mb-14">
          <SH>So finden Sie den perfekten Wohncontainer</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Der perfekte Wohncontainer hÃ¤ngt von Ihrem Bedarf ab. FÃ¼r eine einfache ÃœbergangslÃ¶sung reicht oft ein gebrauchter Wohncontainer. FÃ¼r ganzjÃ¤hrige Nutzung sollten Sie auf winterfeste Ausstattung achten. Wenn der Container sofort nutzbar sein soll, ist eine schlÃ¼sselfertige LÃ¶sung mit KÃ¼che und Bad besonders komfortabel.
            </p>
            <p>
              Am besten starten Sie mit drei Fragen: Wie lange soll der Wohncontainer genutzt werden? Welche Ausstattung ist notwendig? Wo soll er aufgestellt werden?
            </p>
            <p>
              Wenn diese Punkte klar sind, lÃ¤sst sich schnell einschÃ¤tzen, ob ein neuer, gebrauchter, winterfester oder schlÃ¼sselfertiger Wohncontainer die richtige Wahl ist.
            </p>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <div className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
          <div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt Wohncontainer anfragen</h2>
            <p className="text-white/60 text-sm">Teilen Sie uns Nutzung, Ausstattung und Lieferort mit â€“ Sie erhalten ein passendes Angebot.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">HÃ¤ufige Fragen zu Wohncontainern</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Ratgeber links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Ratgeber: Alles rund um den Wohncontainer</h2>
          <InternalLinkGrid links={RATGEBER} />
        </section>

        {/* â”€â”€ Other container types â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weitere Container-Typen</h2>
          <InternalLinkGrid links={OTHER_TYPES} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}

