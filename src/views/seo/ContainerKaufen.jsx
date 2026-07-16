"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Truck, Package, ShieldCheck, Wrench, Building2, Thermometer, Star, MapPin, TrendingUp } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Image assets â”€â”€ */
const IMG_20FT = "/images/gebrauchte-seecontainer.png";
const IMG_40FT = "/images/die-container-yard.jpeg";
const IMG_BUERO = "/images/mobiler-wohncontainer.jpg";
const IMG_KUEHL = "/images/shipping-container-logistics.jpeg";
const IMG_WOHN = "/images/mobiler-wohncontainer.jpg";

/* â”€â”€ Container type cards â”€â”€ */
const TYPE_CARDS = [
  { img: IMG_20FT, title: "Seecontainer", desc: "Robuste ISO-Container aus Cortenstahl – wind- und wasserdicht, in 10ft, 20ft und 40ft erhältlich.", href: "/seecontainer-kaufen", linkText: "Seecontainer kaufen", icon: Package },
  { img: IMG_40FT, title: "40 Fuß Container", desc: "Maximaler Stauraum für große Lagerflächen, industrielle Projekte und gewerbliche Anwendungen.", href: "/40-fuss-container-kaufen", linkText: "40 Fuß Container kaufen", icon: Package },
  { img: IMG_BUERO, title: "Bürocontainer", desc: "Schlüsselfertiges, mobiles Büro mit Isolierung, Elektrik und Fenstern – sofort einsatzbereit.", href: "/buerocontainer-kaufen", linkText: "Bürocontainer entdecken", icon: Building2 },
  { img: IMG_WOHN, title: "Wohncontainer", desc: "Voll ausgebauter Wohnraum als Tiny House, Gästeunterkunft oder dauerhafte Wohnlösung.", href: "/wohncontainer-kaufen", linkText: "Wohncontainer entdecken", icon: Building2 },
  { img: IMG_KUEHL, title: "Kühlcontainer", desc: "Integriertes Kühlaggregat für temperaturkontrollierte Lagerung von –25 °C bis +25 °C.", href: "/kuehlcontainer-kaufen", linkText: "Kühlcontainer entdecken", icon: Thermometer },
];

/* â”€â”€ Buying steps â”€â”€ */
const STEPS = [
  { num: "01", title: "Typ & Größe wählen", desc: "10ft, 20ft oder 40ft – Standard, High Cube oder Spezialtyp.", icon: Package },
  { num: "02", title: "Zustand festlegen", desc: "Neu (One Trip), leicht gebraucht oder generalüberholt – nach Budget & Einsatzzweck.", icon: Star },
  { num: "03", title: "Angebot anfordern", desc: "Unverbindlich anfragen – Sie erhalten ein verbindliches Angebot inkl. Lieferung.", icon: ShieldCheck },
  { num: "04", title: "Lieferung & Aufstellung", desc: "Deutschlandweite Lieferung per Spezialfahrzeug direkt an Ihren Standort.", icon: Truck },
];

/* â”€â”€ Checklist â”€â”€ */
const CHECKLIST = [
  "Containertyp und Einsatzzweck festlegen",
  "Passende Größe nach Platzbedarf wählen",
  "Zustand: Neu oder gebraucht entscheiden",
  "Zufahrt und Untergrund am Aufstellort prüfen",
  "Transportkosten und Entladung einplanen",
  "Genehmigungspflicht klären (bei Büro/Wohnen)",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { title: "Schnell verfügbar", desc: "Container sind kurzfristig lieferbar – kein langer Planungsprozess wie bei festen Gebäuden." },
  { title: "Extrem robust", desc: "Cortenstahl und verschweißte Konstruktion bieten jahrzehntelangen Schutz vor Witterung." },
  { title: "Flexibel versetzbar", desc: "Container können jederzeit transportiert und an einem anderen Standort aufgestellt werden." },
  { title: "Wirtschaftlich", desc: "Im Vergleich zu dauerhafter Flächenmiete amortisiert sich der Kauf oft innerhalb weniger Jahre." },
  { title: "Erweiterbar", desc: "Bei wachsendem Bedarf können weitere Container ergänzt oder Spezialmodelle kombiniert werden." },
  { title: "Vielseitig nutzbar", desc: "Von Lagerung über Büro bis Wohnen – Container sind für unterschiedlichste Zwecke geeignet." },
];

/* â”€â”€ Decision factors â”€â”€ */
const FACTORS = [
  { icon: Package, title: "Größe & Volumen", desc: "10ft für kleine Vorhaben, 20ft als Allrounder, 40ft für maximale Kapazität." },
  { icon: Star, title: "Zustand", desc: "One Trip (nahezu neu) kostet 20–30 % mehr als gebraucht, bietet aber keine Gebrauchsspuren." },
  { icon: Wrench, title: "Containertyp", desc: "Standard ist am günstigsten. High Cube, Open Side, Kühl- oder Bürocontainer kosten entsprechend mehr." },
  { icon: MapPin, title: "Standort & Lieferung", desc: "Transportkosten starten ab ca. 250 â‚¬ und steigen mit Entfernung und Zugangsbedingungen." },
  { icon: TrendingUp, title: "Marktlage", desc: "Containerpreise folgen globalen Handelsströmen – Verfügbarkeit schwankt saisonal." },
  { icon: ShieldCheck, title: "CSC-Zertifikat", desc: "Bestätigt internationale Zulassung und Tragfähigkeit – wichtig für Wiederverkauf und Export." },
];

/* â”€â”€ Ratgeber links â”€â”€ */
const RATGEBER_LINKS = [
  { href: "/container-masse", title: "Container Maße", desc: "Alle Außen- & Innenmaße im Überblick" },
  { href: "/container-gewicht", title: "Container Gewicht", desc: "Eigengewicht & Nutzlast" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Preise & Kostenfaktoren 2025" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Rechtliches & Vorschriften" },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein Container?", a: "Der Preis hängt von Größe, Zustand, Ausstattung und Lieferort ab. Gebrauchte Container sind in der Regel günstiger als neue Modelle. Auch Sonderausstattungen wie Isolierung, Fenster, Elektrik oder Kühltechnik beeinflussen den Preis. Zusätzlich sollten Transport und Entladung bei der Kalkulation berücksichtigt werden." },
  { q: "Kann man gebrauchte Container kaufen?", a: "Ja, gebrauchte Container sind eine beliebte und wirtschaftliche Lösung. Sie eignen sich besonders für Lagerung, Baustellen, Landwirtschaft und gewerbliche Nutzung. Wichtig ist, dass der Container trotz Gebrauchsspuren technisch intakt, stabil sowie wind- und wasserdicht ist." },
  { q: "Welcher Container ist der richtige für mich?", a: "Der passende Container hängt vom Einsatzbereich ab. Für Lagerung und Transport eignen sich Seecontainer. Für Arbeitsräume sind Bürocontainer sinnvoll. Für Unterkünfte kommen Wohncontainer infrage, während Kühlcontainer für temperaturempfindliche Waren genutzt werden." },
  { q: "Wird der Container direkt geliefert?", a: "Ja, Container können direkt zum gewünschten Standort geliefert werden. Die Lieferung erfolgt häufig per LKW mit Kran, sodass der Container vor Ort abgesetzt werden kann. Voraussetzung ist eine geeignete Zufahrt und ausreichend Platz für die Entladung." },
  { q: "Braucht man eine Genehmigung für einen Container?", a: "Das hängt von Standort, Nutzungsdauer und Verwendungszweck ab. Ein kurzfristig genutzter Lagercontainer ist oft unkomplizierter als ein dauerhaft aufgestellter Büro- oder Wohncontainer. Bei längerer Nutzung oder gewerblicher Aufstellung sollte die zuständige Behörde kontaktiert werden." },
  { q: "Welche Containergrößen gibt es?", a: "Häufige Größen sind 10 Fuß, 20 Fuß und 40 Fuß. Besonders beliebt sind 20 Fuß Container für flexible Lagerlösungen und 40 Fuß Container für größere Projekte." },
  { q: "Was ist besser: neuer oder gebrauchter Container?", a: "Ein neuer Container bietet den besten optischen Zustand und eine lange Nutzungsdauer. Ein gebrauchter Container ist günstiger und für viele praktische Anwendungen völlig ausreichend. Die beste Wahl hängt davon ab, ob Optik, Preis oder Funktion im Vordergrund stehen." },
  { q: "Kann ein Container später versetzt werden?", a: "Ja, Container können bei Bedarf transportiert und an einem anderen Standort wieder aufgestellt werden. Das macht sie besonders flexibel für Unternehmen, Baustellen oder wechselnde Projekte." },
];

/* â”€â”€ Helpers â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

export default function ContainerKaufen() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">

      {/* Schema.org markup */}
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
          <img
            src="/images/crane-is-hoisting-containers.avif"
            alt="Seecontainer Stapel im Hafen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.93) 0%, rgba(15,37,64,0.88) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Container kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Übersicht 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Container kaufen – neue und gebrauchte Container für jeden Bedarf
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Container kaufen in Deutschland – neue und gebrauchte Container für Lagerung, Transport, Büro, Wohnen und Kühlung. Große Auswahl, faire Preise und Lieferung direkt zum Standort.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
              style={{ backgroundColor: ORANGE }}
            >
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors"
            >
              Zum Container Katalog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Container kaufen leicht gemacht â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Container kaufen leicht gemacht</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Wenn Sie einen <strong className="text-foreground">Container kaufen</strong> möchten, stehen Ihnen heute viele verschiedene Möglichkeiten zur Verfügung. Container werden längst nicht mehr nur für den internationalen Warenverkehr genutzt. Sie dienen als Lagerraum, mobile Bürofläche, Wohnlösung, Kühlraum oder flexible Erweiterung für Gewerbe, Baustellen, Landwirtschaft und private Projekte.
            </p>
            <p>
              Ob neu oder gebraucht, kompakt oder groß, standardisiert oder individuell ausgestattet – der passende Container hängt immer davon ab, wofür er eingesetzt werden soll. Deshalb ist es wichtig, vor dem Kauf Größe, Zustand, Ausstattung, Lieferort und langfristige Nutzung genau zu berücksichtigen.
            </p>
            <p>
              Bei uns finden Sie verschiedene Containerlösungen für unterschiedliche Anforderungen. Von klassischen <IL to="/seecontainer-kaufen">Seecontainern</IL> über <IL to="/buerocontainer-kaufen">Bürocontainer</IL> bis hin zu <IL to="/wohncontainer-kaufen">Wohn-</IL> und <IL to="/kuehlcontainer-kaufen">Kühlcontainern</IL> bieten wir robuste, langlebige und flexibel einsetzbare Modelle für Kunden in ganz Deutschland.
            </p>
          </div>
        </section>

        {/* â”€â”€ Buying steps â”€â”€ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Schritt für Schritt</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground tracking-tight mb-3">So kaufen Sie Ihren Container</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${NAVY}15` }}>
                    <step.icon className="w-5 h-5" style={{ color: NAVY }} />
                  </div>
                  <span className="font-heading font-bold text-lg" style={{ color: ORANGE }}>{step.num}</span>
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <CtaBanner text="Kostenloses & unverbindliches Angebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ Welche Container kann man kaufen? â”€â”€ */}
        <section className="mb-16">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Welche Container kann man kaufen?</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-8">
            <p>
              Wer einen Container kaufen möchte, sollte zuerst den passenden Containertyp auswählen. Während ein Seecontainer ideal für Lagerung und Transport ist, bietet ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> eine schnelle Lösung für zusätzlichen Arbeitsraum. Ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL> eignet sich für temporäres oder dauerhaftes Wohnen, während ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> für temperaturempfindliche Waren genutzt wird.
            </p>
            <p>
              Für klassische Lager- und Transportzwecke ist ein <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL> meist die richtige Wahl. Besonders gefragt sind der <IL to="/20-fuss-container-kaufen">20 Fuß Container</IL> für kompakte Lagerlösungen und der <IL to="/40-fuss-container-kaufen">40 Fuß Container</IL> für größere Lagerflächen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TYPE_CARDS.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={card.href} className="group flex flex-col h-full rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all bg-card">
                  <div className="h-44 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <card.icon className="w-4 h-4 shrink-0" style={{ color: NAVY }} />
                      <h3 className="font-heading font-bold text-sm text-foreground group-hover:text-[#1B3A5C] transition-colors">{card.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{card.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                      {card.linkText} <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Neue oder gebrauchte Container? â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Neue oder gebrauchte Container kaufen?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Neue Container (One Trip)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Neue Container sind besonders interessant, wenn ein sehr guter optischer Zustand, lange Nutzungsdauer und möglichst geringe Gebrauchsspuren wichtig sind. Sie eignen sich gut für Unternehmen, Verkaufsflächen, repräsentative Standorte oder Projekte, bei denen der Container sichtbar aufgestellt wird.</p>
                <ul className="space-y-1.5">
                  {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal für repräsentative Standorte"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte Container (Cargo-Worthy)</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Wer eine wirtschaftliche Lösung sucht, kann auch einen <strong className="text-foreground">Container gebraucht kaufen</strong>. Gebrauchte Container sind oft deutlich günstiger und für viele Anwendungen vollkommen ausreichend. Besonders als Lagercontainer, Materialcontainer oder Baustellencontainer sind gebrauchte Modelle sehr beliebt.</p>
                <ul className="space-y-1.5">
                  {["Deutlich günstiger als Neuware", "Kurzfristig verfügbar", "Ideal für Lager, Baustelle & Gewerbe"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Wenn Sie <strong className="text-foreground">gebrauchte Container kaufen</strong>, sollten diese weiterhin stabil, sicher, wind- und wasserdicht sein. Leichte Gebrauchsspuren, Kratzer oder kleinere Dellen sind bei gebrauchten Containern normal, beeinträchtigen die Funktion jedoch meist nicht.
          </p>
        </section>

        {/* â”€â”€ Wofür eignet sich ein Container? â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Wofür eignet sich ein Container?</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>Container sind vielseitig einsetzbar und können je nach Modell für sehr unterschiedliche Zwecke genutzt werden. Besonders häufig werden sie als Lagerfläche für Werkzeuge, Maschinen, Baumaterialien, Möbel, Waren oder saisonale Ausrüstung verwendet. Unternehmen nutzen Container außerdem zur Erweiterung bestehender Lagerflächen oder als temporäre Lösung während Umbau- oder Bauphasen.</p>
            <p>Auf Baustellen dienen Container als Materiallager, Büroeinheit oder Aufenthaltsraum. In der Landwirtschaft werden sie häufig zur Lagerung von Geräten, Ersatzteilen oder Futtermitteln eingesetzt. Auch im privaten Bereich sind Container praktisch, zum Beispiel bei Umzügen, Renovierungen oder als zusätzlicher Stauraum auf dem Grundstück.</p>
            <p>Für Gewerbekunden bieten Container den Vorteil, dass sie schnell verfügbar, mobil und bei Bedarf erweiterbar sind. Wer später mehr Platz benötigt, kann weitere Container ergänzen oder bestehende Lösungen durch spezielle Modelle wie <IL to="/buerocontainer-kaufen">Bürocontainer</IL>, <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> oder <IL to="/wohncontainer-kaufen">Wohncontainer</IL> erweitern.</p>
          </div>
        </section>

        {/* â”€â”€ Welche Containergröße? â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Welche Containergröße ist die richtige?</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Die passende Größe hängt davon ab, wie viel Platz Sie benötigen und wo der Container aufgestellt werden soll. Ein <IL to="/20-fuss-container-kaufen">20 Fuß Container</IL> ist eine beliebte Allround-Lösung. Ein <IL to="/40-fuss-container-kaufen">40 Fuß Container</IL> eignet sich dagegen für größere Warenmengen und gewerbliche Projekte mit hohem Platzbedarf.</p>
            <p>Eine genaue Übersicht zu Außenmaßen, Innenmaßen, Türöffnungen, Gewicht und Ladevolumen finden Sie auf unserer Seite <IL to="/container-masse">Container Maße</IL>.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
                <img src={IMG_20FT} alt="20 Fuß Container kaufen" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">20 Fuß Container</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">Der Allrounder: ca. 6,06 m lang, 2,44 m breit, 2,59 m hoch. Ausreichend Platz für die meisten Lager- und Gewerbeanwendungen.</p>
                <Link to="/20-fuss-container-kaufen" className="inline-flex items-center gap-1 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                  20 Fuß Container kaufen <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
                <img src={IMG_40FT} alt="40 Fuß Container kaufen" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">40 Fuß Container</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">Maximales Volumen: ca. 12,19 m lang, 2,44 m breit, 2,59 m hoch. Für große Lagerflächen und industrielle Projekte.</p>
                <Link to="/40-fuss-container-kaufen" className="inline-flex items-center gap-1 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                  40 Fuß Container kaufen <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* â”€â”€ Container kaufen mit Lieferung â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Container kaufen mit Lieferung</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>Ein wichtiger Punkt beim Containerkauf ist die Lieferung. Container sind groß, schwer und benötigen geeignete Transportfahrzeuge. Deshalb sollte bereits vor dem Kauf geprüft werden, ob der gewünschte Standort gut erreichbar ist und genügend Platz für die Entladung vorhanden ist.</p>
            <p>In vielen Fällen erfolgt die Lieferung per LKW mit Kran. Dadurch kann der Container direkt am gewünschten Ort abgesetzt werden, sofern die Zufahrt und der Untergrund geeignet sind.</p>
            <p>Wenn Sie einen Container kaufen, sollten Sie deshalb neben dem Kaufpreis auch die Transportkosten, den Lieferort und mögliche Zusatzkosten berücksichtigen. Mehr dazu erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.</p>
          </div>
        </section>

        {/* â”€â”€ Worauf achten? â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Worauf sollte man beim Containerkauf achten?</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>Vor dem Kauf sollten Sie sich genau überlegen, wie der Container genutzt werden soll. Für reine Lagerzwecke ist ein anderer Container geeignet als für Büro, Wohnen oder Kühlung. Bei gebrauchten Containern sollten Türen, Dichtungen, Boden, Dach und Roststellen sorgfältig geprüft werden.</p>
            <p>Ebenso wichtig sind Maße und Platzbedarf. Achten Sie auf einen festen, ebenen und tragfähigen Untergrund. Je nach Nutzung kann auch eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein.</p>
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

        {/* â”€â”€ Decision factors â”€â”€ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Kaufentscheidung</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground tracking-tight mb-3">Worauf kommt es beim Containerkauf an?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACTORS.map((f, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-orange-200 transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${NAVY}15` }}>
                  <f.icon className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ Vorteile â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-5">Vorteile beim Containerkauf</h2>
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
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt den passenden Container finden</h2>
            <p className="text-white/60 text-sm">Unverbindlich anfragen – Angebot inkl. Lieferung erhalten.</p>
          </div>
          <Link to="/shop" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zum Containerkauf</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Ratgeber links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Ratgeber: Alles rund um den Containerkauf</h2>
          <InternalLinkGrid links={RATGEBER_LINKS} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}
