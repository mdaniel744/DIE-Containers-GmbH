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
  { icon: ShieldCheck, text: "Gute Wand-, Boden- und Dachdämmung" },
  { icon: Wrench, text: "Heizung für ganzjährige Nutzung" },
  { icon: ShieldCheck, text: "Dichte Fenster und Türen" },
  { icon: Snowflake, text: "Frostschutz für Wasserleitungen" },
  { icon: Plug, text: "Geeignete Strom-, Wasser- und Abwasseranschlüsse" },
];

/* â”€â”€ Price factors â”€â”€ */
const PRICE_FACTORS = [
  "Neu oder gebraucht", "Größe und Grundriss", "Mit oder ohne Küche und Bad",
  "Winterfest oder einfache Ausführung", "Schlüsselfertig oder individuell ausbaubar",
  "Transport, Kranentladung und Montage", "Anschlüsse für Strom, Wasser und Abwasser",
];

/* â”€â”€ Kitchen & bath equipment â”€â”€ */
const KITCHEN_BATH = [
  "Badezimmer mit Dusche, WC und Waschbecken", "Küchenzeile", "Warmwasserbereitung",
  "Elektroinstallation", "Beleuchtung", "Heizung", "Fenster", "Bodenbelag", "Innenverkleidung",
];

/* â”€â”€ Gebraucht checklist â”€â”€ */
const GEBRAUCHT_CHECK = [
  "Ist der Container trocken und dicht?", "Sind Fenster und Türen funktionsfähig?",
  "Ist die Elektrik sicher nutzbar?", "Funktionieren Bad, Küche und Wasseranschlüsse?",
  "Ist die Dämmung ausreichend?", "Gibt es Rost, Schimmel oder Feuchtigkeitsschäden?",
  "Sind Transport und Aufstellung wirtschaftlich sinnvoll?",
];

/* â”€â”€ Steps â”€â”€ */
const STEPS = [
  { num: "01", title: "Nutzung festlegen", desc: "Vorübergehend, dauerhaft, als Unterkunft, Gästehaus oder Mitarbeiterwohnung." },
  { num: "02", title: "Größe & Grundriss", desc: "Passende Containergröße und Raumaufteilung wählen." },
  { num: "03", title: "Ausstattung", desc: "Dämmung, Heizung, Küche, Bad und Elektrik bestimmen." },
  { num: "04", title: "Lieferort prüfen", desc: "Zufahrt, Untergrund und Aufstellfläche kontrollieren." },
  { num: "05", title: "Genehmigung klären", desc: "Baubehörde kontaktieren bei dauerhafter Nutzung." },
  { num: "06", title: "Angebot anfragen", desc: "Unverbindliches Angebot mit Ausstattung einholen." },
  { num: "07", title: "Lieferung planen", desc: "Transport, Kran und Anschluss rechtzeitig organisieren." },
];

/* â”€â”€ Mistakes to avoid â”€â”€ */
const MISTAKES = [
  "Nur nach dem günstigsten Preis entscheiden",
  "Winterfestigkeit nicht prüfen",
  "Transport und Kranentladung vergessen",
  "Genehmigung zu spät klären",
  "Anschlüsse für Strom, Wasser und Abwasser unterschätzen",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { icon: Truck, title: "Schnelle Verfügbarkeit", desc: "Schneller planbar und einsatzbereit als klassische Bauprojekte." },
  { icon: Building2, title: "Modular erweiterbar", desc: "Einzelmodule oder kombinierte Wohnanlagen – flexibel anpassbar." },
  { icon: Star, title: "Wirtschaftlich", desc: "Planbare Alternative zum klassischen Bau mit guter Kostenkontrolle." },
  { icon: Home, title: "Mobil & wiederverwendbar", desc: "Bei Bedarf transportierbar und an anderem Standort erneut nutzbar." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein Wohncontainer?", a: "Ein Wohncontainer kostet je nach Größe, Zustand und Ausstattung unterschiedlich viel. Einfache gebrauchte Modelle sind günstiger, während winterfeste und schlüsselfertige Wohncontainer mit Küche und Bad deutlich mehr kosten können. Transport, Kran, Fundament und Anschlüsse sollten zusätzlich eingeplant werden." },
  { q: "Kann man einen Wohncontainer gebraucht kaufen?", a: "Ja, gebrauchte Wohncontainer sind eine beliebte Lösung für Kunden, die Kosten sparen möchten. Wichtig ist, dass der Container trocken, stabil und technisch funktionsfähig ist. Besonders Dämmung, Elektrik, Fenster, Türen, Bad und Küche sollten geprüft werden." },
  { q: "Gibt es Wohncontainer mit Küche und Bad?", a: "Ja, Wohncontainer können mit Küche und Bad ausgestattet sein. Diese Variante eignet sich besonders für längere Nutzung, Mitarbeiterunterkünfte, Ferienunterkünfte oder eigenständige Wohneinheiten." },
  { q: "Ist ein Wohncontainer winterfest?", a: "Ein Wohncontainer ist winterfest, wenn er gut gedämmt ist und über geeignete Heizung, dichte Fenster und geschützte Leitungen verfügt. Nicht jeder gebrauchte Wohncontainer ist automatisch winterfest." },
  { q: "Was bedeutet schlüsselfertiger Wohncontainer?", a: "Ein schlüsselfertiger Wohncontainer ist bereits weitgehend ausgestattet und kann nach Lieferung, Aufstellung und Anschluss direkt genutzt werden. Je nach Modell sind Küche, Bad, Heizung, Elektroinstallation und Innenausbau enthalten." },
  { q: "Braucht man eine Genehmigung für einen Wohncontainer?", a: "Das hängt vom Standort, der Nutzungsdauer und der Nutzung ab. Bei dauerhafter Wohnnutzung oder fester Aufstellung sollte immer die zuständige Baubehörde kontaktiert werden." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/container-masse", title: "Container Maße", desc: "Grundmaße & Innenfläche" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Baugenehmigung klären" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Gesamtkosten berechnen" },
];

/* â”€â”€ Other container types â”€â”€ */
const OTHER_TYPES = [
  { href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen", desc: "Arbeitsraum statt Wohnraum" },
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Speziallösung für Kühlung" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Basis für Wohnmodule" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Mehr Platz für Wohnen" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Lagerfläche auf dem Grundstück" },
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
            Wohncontainer kaufen in Deutschland – winterfeste Wohncontainer, gebrauchte Modelle, schlüsselfertige Lösungen sowie Container mit Küche und Bad. Jetzt passende Wohnlösung finden.
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
          <SH>Wohncontainer als flexible Wohnlösung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein Wohncontainer ist eine flexible Lösung, wenn schnell zusätzlicher Wohnraum benötigt wird. Ob als Mitarbeiterunterkunft, Übergangslösung, Ferienunterkunft, Gästehaus oder temporärer Wohnraum während Bau- oder Sanierungsarbeiten – Wohncontainer lassen sich vielseitig einsetzen und individuell ausstatten.
            </p>
            <p>
              Wer einen <strong className="text-foreground">Wohncontainer kaufen</strong> möchte, sollte nicht nur auf den Preis achten. Wichtige Punkte sind Dämmung, Heizung, Küche, Bad, Anschlüsse, Transport, Genehmigung und der Zustand des Containers. Je besser diese Faktoren vor dem Kauf geprüft werden, desto sicherer ist die Entscheidung.
            </p>
            <p>
              Wenn Sie verschiedene Containerarten vergleichen möchten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen Überblick über Wohncontainer, Bürocontainer, Seecontainer und Kühlcontainer.
            </p>
          </div>
        </section>

        {/* â”€â”€ Product showcase â”€â”€ */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={IMG_PRODUCT_1} alt="Moderner Wohncontainer mit großer Glasfront" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">Moderne Wohncontainer</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Zeitgemäßes Design mit Glasfront, Holzverkleidung und durchdachtem Grundriss für komfortables Wohnen.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={IMG_PRODUCT_2} alt="Zweigeschossiger 20 Fuß Wohncontainer mit Außentreppe" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">Mobile Wohneinheiten</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Flexible, transportable Wohnlösungen für temporäre oder dauerhafte Nutzung an jedem Standort.</p>
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
                <img src={IMG_WINTERFEST} alt="Zweigeschossige Wohncontaineranlage mit Außentreppe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">Wohncontainer winterfest</strong> ist sinnvoll, wenn der Container ganzjährig genutzt werden soll. Achten Sie besonders auf eine gute Dämmung von Wänden, Boden und Dach. Ohne ausreichende Isolierung entstehen schnell Wärmeverluste, Kondenswasser und hohe Heizkosten.
              </p>
              <p>
                Wichtig sind außerdem dichte Fenster und Türen, eine passende Heizung sowie frostgeschützte Wasser- und Abwasserleitungen. Gerade bei gebrauchten Wohncontainern sollte geprüft werden, ob sie wirklich winterfest sind oder nur für einfache saisonale Nutzung geeignet sind.
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
              Die Frage <strong className="text-foreground">was kostet ein Wohncontainer</strong> lässt sich nicht pauschal beantworten. Die Preise hängen stark von Größe, Zustand, Ausstattung, Dämmung, Küche, Bad, Lieferung und Montage ab.
            </p>
            <p>
              Einfache gebrauchte Wohncontainer sind in der Regel günstiger als neue oder schlüsselfertige Modelle. Ein Wohncontainer mit Küche, Bad, Heizung und winterfester Ausstattung kostet deutlich mehr als eine einfache Unterkunft ohne Sanitärbereich.
            </p>
            <p>
              Für ein genaues Angebot sollten Sie immer den gewünschten Einsatzort, die geplante Nutzung und die benötigte Ausstattung angeben.
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

        {/* â”€â”€ Wohncontainer mit Bad & Küche â”€â”€ */}
        <section className="mb-14">
          <SH>Wohncontainer mit Bad & Küche: Alles im Blick</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">Wohncontainer mit Küche und Bad</strong> ist besonders praktisch, wenn eine eigenständige Wohneinheit benötigt wird. Diese Variante eignet sich für Mitarbeiterunterkünfte, Ferienlösungen, Übergangswohnungen oder längere private Nutzung.
              </p>
              <p>
                Zur typischen Ausstattung gehören Badezimmer mit Dusche, WC und Waschbecken, eine Küchenzeile, Warmwasser, Elektroinstallation, Beleuchtung, Heizung, Fenster, Bodenbelag und Innenverkleidung.
              </p>
              <p>
                Ein Wohncontainer mit Küche und Bad bietet deutlich mehr Komfort als eine einfache Unterkunft. Gleichzeitig sollten Anschlüsse, Entwässerung, Stromversorgung und Frostschutz sorgfältig geplant werden.
              </p>
            </div>
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 bg-gradient-to-br from-slate-100 to-white flex items-center justify-center">
                <img src={IMG_INTERIOR} alt="3D-Grundriss eines 40 Fuß Wohncontainers mit Küche, Bad und Terrasse" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4" style={{ color: ORANGE }} />
              Typische Ausstattung mit Küche und Bad:
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

        {/* â”€â”€ Schlüsselfertig â”€â”€ */}
        <section className="mb-14">
          <SH>Einzugsbereit: Schlüsselfertige Wohncontainer</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_SCHLUESSEL} alt="Schlüsselfertiger zweistöckiger Wohncontainer mit Treppe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein schlüsselfertiger Wohncontainer ist so vorbereitet, dass er nach Lieferung, Aufstellung und Anschluss direkt genutzt werden kann. Das ist ideal für Kunden, die eine schnelle und komplette Lösung suchen, ohne den Innenausbau selbst organisieren zu müssen.
              </p>
              <p>
                Schlüsselfertige Wohncontainer können je nach Ausführung Küche, Bad, Heizung, Dämmung, Elektroinstallation, Bodenbelag und Innenausbau enthalten. Dadurch sind sie besonders interessant für Mitarbeiterunterkünfte, Gästehäuser, Ferienprojekte oder temporären Wohnraum.
              </p>
              <p>
                Wer nach <strong className="text-foreground">Wohncontainer schlüsselfertig Preis</strong> sucht, sollte immer prüfen, was im Preis enthalten ist. Transport, Kran, Fundament, Anschlüsse und Genehmigung sind nicht immer automatisch eingeschlossen.
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
                <img src={IMG_GEBRAUCHT} alt="Gebrauchte rote Wohncontaineranlage mit Außentreppe" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein <strong className="text-foreground">Wohncontainer gebraucht</strong> kann eine gute Wahl sein, wenn Sie Kosten sparen möchten. Wichtig ist aber, den Zustand sorgfältig zu prüfen. Ein günstiger Preis lohnt sich nur, wenn der Container trocken, stabil und technisch nutzbar ist.
              </p>
              <p>
                Achten Sie vor allem auf Feuchtigkeit, beschädigte Böden, undichte Fenster, defekte Elektrik und alte Sanitärinstallationen. Auch Dämmung und Heizung sind entscheidend, wenn der Container länger oder im Winter genutzt werden soll.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" style={{ color: ORANGE }} />
              Checkliste für gebrauchte Wohncontainer:
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
              Der einfachste Weg zum passenden Wohncontainer beginnt mit einer klaren Planung. Überlegen Sie zuerst, wie der Container genutzt werden soll: nur vorübergehend, dauerhaft, als Unterkunft, Gästehaus oder Mitarbeiterwohnung.
            </p>
            <p>
              Danach sollten Größe, Ausstattung und Standort geklärt werden. Besonders wichtig sind Zufahrt, Untergrund, Stromanschluss, Wasseranschluss, Abwasser und mögliche Genehmigungen. Für die technische Planung hilft auch ein Blick auf unsere Seite <IL to="/container-masse">Container Maße</IL>.
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
              Beim Kauf eines Wohncontainers passieren häufig Fehler, die später teuer werden können. Viele Käufer achten nur auf den Anschaffungspreis und vergessen Transport, Fundament, Anschlüsse oder Genehmigung.
            </p>
            <p>
              Auch ein zu günstiger gebrauchter Wohncontainer kann problematisch sein, wenn nachträglich Dämmung, Elektrik, Bad oder Heizung erneuert werden müssen.
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

        {/* â”€â”€ Preise, Pläne & Profi-Tipps â”€â”€ */}
        <section className="mb-14">
          <SH>Wohncontainer kaufen: Preise, Pläne & Profi-Tipps</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein guter Wohncontainer passt nicht nur zum Budget, sondern auch zur geplanten Nutzung. Für kurze Einsätze reicht oft eine einfache Lösung. Für längeres Wohnen sind Dämmung, Heizung, Bad, Küche und ein durchdachter Grundriss deutlich wichtiger.
            </p>
            <p>
              Wenn der Container dauerhaft genutzt werden soll, sollten auch Genehmigung, Brandschutz, Wärmeschutz und Anschlüsse frühzeitig geprüft werden. Bei größeren Projekten können mehrere Wohncontainer miteinander kombiniert werden, um mehr Wohnfläche, separate Räume oder zusätzliche Sanitärbereiche zu schaffen.
            </p>
            <p>
              Für reine Arbeitsräume ist ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> meist besser geeignet. Für Lagerzwecke sind <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>, <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL> oder <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL> die passendere Wahl.
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
                Wohncontainer werden in der Regel per LKW geliefert und je nach Standort mit Kran abgesetzt. Vor der Lieferung müssen Zufahrt, Rangierfläche, Untergrund und mögliche Hindernisse geprüft werden. Der Aufstellort sollte eben, tragfähig und gut vorbereitet sein.
              </p>
              <p>
                Für die Aufstellung können je nach Nutzung Punktfundamente, Streifenfundamente, Betonplatten oder ein vorbereiteter Schotteruntergrund sinnvoll sein. Bei Wohncontainern sind außerdem Anschlüsse für Strom, Wasser und Abwasser zu berücksichtigen. Mehr dazu auf der Seite <IL to="/container-lieferung">Container Lieferung</IL>.
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
              Der perfekte Wohncontainer hängt von Ihrem Bedarf ab. Für eine einfache Übergangslösung reicht oft ein gebrauchter Wohncontainer. Für ganzjährige Nutzung sollten Sie auf winterfeste Ausstattung achten. Wenn der Container sofort nutzbar sein soll, ist eine schlüsselfertige Lösung mit Küche und Bad besonders komfortabel.
            </p>
            <p>
              Am besten starten Sie mit drei Fragen: Wie lange soll der Wohncontainer genutzt werden? Welche Ausstattung ist notwendig? Wo soll er aufgestellt werden?
            </p>
            <p>
              Wenn diese Punkte klar sind, lässt sich schnell einschätzen, ob ein neuer, gebrauchter, winterfester oder schlüsselfertiger Wohncontainer die richtige Wahl ist.
            </p>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <div className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
          <div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt Wohncontainer anfragen</h2>
            <p className="text-white/60 text-sm">Teilen Sie uns Nutzung, Ausstattung und Lieferort mit – Sie erhalten ein passendes Angebot.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zu Wohncontainern</h2>
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

