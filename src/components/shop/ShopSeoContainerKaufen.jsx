"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Package, Wrench, Building2, Thermometer } from "lucide-react";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* ── Image assets ── */
const IMG_20FT = "/images/gebrauchte-seecontainer.png";
const IMG_40FT = "/images/die-container-yard.jpeg";
const IMG_BUERO = "/images/mobiler-wohncontainer.jpg";
const IMG_KUEHL = "/images/shipping-container-logistics.jpeg";
const IMG_WOHN = "/images/mobiler-wohncontainer.jpg";

/* ── Container type cards ── */
const TYPE_CARDS = [
  {
    img: IMG_20FT,
    title: "Seecontainer",
    desc: "Robuste ISO-Container aus Cortenstahl – wind- und wasserdicht, in 10ft, 20ft und 40ft erhältlich.",
    href: "/seecontainer-kaufen",
    linkText: "Seecontainer kaufen",
    icon: Package,
  },
  {
    img: IMG_40FT,
    title: "40 Fuß Container",
    desc: "Maximaler Stauraum für große Lagerflächen, industrielle Projekte und gewerbliche Anwendungen.",
    href: "/40-fuss-container-kaufen",
    linkText: "40 Fuß Container kaufen",
    icon: Package,
  },
  {
    img: IMG_BUERO,
    title: "Bürocontainer",
    desc: "Schlüsselfertiges, mobiles Büro mit Isolierung, Elektrik und Fenstern – sofort einsatzbereit.",
    href: "/buerocontainer-kaufen",
    linkText: "Bürocontainer entdecken",
    icon: Building2,
  },
  {
    img: IMG_WOHN,
    title: "Wohncontainer",
    desc: "Voll ausgebauter Wohnraum als Tiny House, Gästeunterkunft oder dauerhafte Wohnlösung.",
    href: "/wohncontainer-kaufen",
    linkText: "Wohncontainer entdecken",
    icon: Building2,
  },
  {
    img: IMG_KUEHL,
    title: "Kühlcontainer",
    desc: "Integriertes Kühlaggregat für temperaturkontrollierte Lagerung von –25 °C bis +25 °C.",
    href: "/kuehlcontainer-kaufen",
    linkText: "Kühlcontainer entdecken",
    icon: Thermometer,
  },
];

/* ── Buying checklist ── */
const CHECKLIST = [
  "Containertyp und Einsatzzweck festlegen",
  "Passende Größe nach Platzbedarf wählen",
  "Zustand: Neu oder gebraucht entscheiden",
  "Zufahrt und Untergrund am Aufstellort prüfen",
  "Transportkosten und Entladung einplanen",
  "Genehmigungspflicht klären (bei Büro/Wohnen)",
];

/* ── Advantages ── */
const ADVANTAGES = [
  { title: "Schnell verfügbar", desc: "Container sind kurzfristig lieferbar – kein langer Planungsprozess wie bei festen Gebäuden." },
  { title: "Extrem robust", desc: "Cortenstahl und verschweißte Konstruktion bieten jahrzehntelangen Schutz vor Witterung." },
  { title: "Flexibel versetzbar", desc: "Container können jederzeit transportiert und an einem anderen Standort aufgestellt werden." },
  { title: "Wirtschaftlich", desc: "Im Vergleich zu dauerhafter Flächenmiete amortisiert sich der Kauf oft innerhalb weniger Jahre." },
  { title: "Erweiterbar", desc: "Bei wachsendem Bedarf können weitere Container ergänzt oder Spezialmodelle kombiniert werden." },
  { title: "Vielseitig nutzbar", desc: "Von Lagerung über Büro bis Wohnen – Container sind für unterschiedlichste Zwecke geeignet." },
];

/* ── FAQ ── */
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

/* ── Inline link helper ── */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

/* ── Section heading ── */
function SH({ tag, children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* ── FAQ Accordion ── */
function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="font-heading font-semibold text-sm text-foreground">{item.q}</span>
        <ChevronRight className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-90" : ""}`} />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">{item.a}</div>
      )}
    </div>
  );
}

export default function ShopSeoContainerKaufen() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="mt-16 border-t border-border pt-14">
      {/* Schema.org FAQ markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      })}} />

      {/* ── H2: Container kaufen leicht gemacht ── */}
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Ratgeber</span>
        <h1 className="font-heading font-bold text-2xl lg:text-3xl text-foreground tracking-tight mb-5">
          Container kaufen – neue und gebrauchte Container für jeden Bedarf
        </h1>
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
      </div>

      {/* ── Welche Container kann man kaufen? + Type cards ── */}
      <div className="mb-14">
        <SH>Welche Container kann man kaufen?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-8">
          <p>
            Wer einen Container kaufen möchte, sollte zuerst den passenden Containertyp auswählen. Nicht jeder Container eignet sich für denselben Zweck. Während ein Seecontainer ideal für Lagerung und Transport ist, bietet ein <IL to="/buerocontainer-kaufen">Bürocontainer</IL> eine schnelle Lösung für zusätzlichen Arbeitsraum. Ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL> eignet sich dagegen für temporäres oder dauerhaftes Wohnen, während ein <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> für temperaturempfindliche Waren genutzt wird.
          </p>
          <p>
            Für klassische Lager- und Transportzwecke ist ein <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL> meist die richtige Wahl. Diese Container sind besonders robust, wind- und wasserdicht und in verschiedenen Größen erhältlich. Besonders gefragt sind der <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL> Bereich für kompakte Lagerlösungen und der <IL to="/40-fuss-container-kaufen">40 Fuß Container kaufen</IL> Bereich für größere Lagerflächen.
          </p>
        </div>

        {/* Type cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TYPE_CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={card.href}
                className="group flex flex-col h-full rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all bg-card"
              >
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
      </div>

      {/* ── Neue oder gebrauchte Container? ── */}
      <div className="mb-14">
        <SH>Neue oder gebrauchte Container kaufen?</SH>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Neue */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
              <h3 className="font-heading font-bold text-sm text-foreground">Neue Container (One Trip)</h3>
            </div>
            <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Neue Container sind besonders interessant, wenn ein sehr guter optischer Zustand, lange Nutzungsdauer und möglichst geringe Gebrauchsspuren wichtig sind. Sie eignen sich gut für Unternehmen, Verkaufsflächen, repräsentative Standorte oder Projekte, bei denen der Container sichtbar aufgestellt wird.
              </p>
              <ul className="space-y-1.5">
                {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal für repräsentative Standorte"].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Gebrauchte */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
              <h3 className="font-heading font-bold text-sm text-foreground">Gebrauchte Container (Cargo-Worthy)</h3>
            </div>
            <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
              <p>
                Wer eine wirtschaftliche Lösung sucht, kann auch einen <strong className="text-foreground">Container gebraucht kaufen</strong>. Gebrauchte Container sind oft deutlich günstiger und für viele Anwendungen vollkommen ausreichend. Besonders als Lagercontainer, Materialcontainer oder Baustellencontainer sind gebrauchte Modelle sehr beliebt.
              </p>
              <ul className="space-y-1.5">
                {["Deutlich günstiger als Neuware", "Kurzfristig verfügbar", "Ideal für Lager, Baustelle & Gewerbe"].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Wenn Sie <strong className="text-foreground">gebrauchte Container kaufen</strong>, sollten diese weiterhin stabil, sicher, wind- und wasserdicht sein. Leichte Gebrauchsspuren, Kratzer oder kleinere Dellen sind bei gebrauchten Containern normal, beeinträchtigen die Funktion jedoch meist nicht.
        </p>
      </div>

      {/* ── Wofür eignet sich ein Container? ── */}
      <div className="mb-14">
        <SH>Wofür eignet sich ein Container?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
          <p>
            Container sind vielseitig einsetzbar und können je nach Modell für sehr unterschiedliche Zwecke genutzt werden. Besonders häufig werden sie als Lagerfläche für Werkzeuge, Maschinen, Baumaterialien, Möbel, Waren oder saisonale Ausrüstung verwendet. Unternehmen nutzen Container außerdem zur Erweiterung bestehender Lagerflächen oder als temporäre Lösung während Umbau- oder Bauphasen.
          </p>
          <p>
            Auf Baustellen dienen Container als Materiallager, Büroeinheit oder Aufenthaltsraum. In der Landwirtschaft werden sie häufig zur Lagerung von Geräten, Ersatzteilen oder Futtermitteln eingesetzt. Auch im privaten Bereich sind Container praktisch, zum Beispiel bei Umzügen, Renovierungen oder als zusätzlicher Stauraum auf dem Grundstück.
          </p>
          <p>
            Für Gewerbekunden bieten Container den Vorteil, dass sie schnell verfügbar, mobil und bei Bedarf erweiterbar sind. Wer später mehr Platz benötigt, kann weitere Container ergänzen oder bestehende Lösungen durch spezielle Modelle wie <IL to="/buerocontainer-kaufen">Bürocontainer</IL>, <IL to="/kuehlcontainer-kaufen">Kühlcontainer</IL> oder <IL to="/wohncontainer-kaufen">Wohncontainer</IL> erweitern.
          </p>
        </div>
      </div>

      {/* ── Welche Containergröße? + Size visual ── */}
      <div className="mb-14">
        <SH>Welche Containergröße ist die richtige?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
          <p>
            Die passende Größe hängt davon ab, wie viel Platz Sie benötigen und wo der Container aufgestellt werden soll. Kleine Container eignen sich gut für begrenzte Flächen oder private Nutzung. Größere Modelle bieten deutlich mehr Stauraum und sind besonders für Unternehmen, Baustellen und industrielle Anwendungen geeignet.
          </p>
          <p>
            Ein <IL to="/20-fuss-container-kaufen">20 Fuß Container</IL> ist eine beliebte Allround-Lösung, da er ausreichend Stauraum bietet und dennoch relativ einfach zu transportieren und aufzustellen ist. Ein <IL to="/40-fuss-container-kaufen">40 Fuß Container</IL> eignet sich dagegen für größere Warenmengen, umfangreiche Lagerflächen oder gewerbliche Projekte mit hohem Platzbedarf.
          </p>
          <p>
            Eine genaue Übersicht zu Außenmaßen, Innenmaßen, Türöffnungen, Gewicht und Ladevolumen finden Sie auf unserer Seite <IL to="/container-masse">Container Maße</IL>. Dort können Sie verschiedene Größen direkt vergleichen und besser einschätzen, welcher Container zu Ihrem Projekt passt.
          </p>
        </div>

        {/* Size comparison cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
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
            <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
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
      </div>

      {/* ── Container kaufen mit Lieferung ── */}
      <div className="mb-14">
        <SH>Container kaufen mit Lieferung</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
          <p>
            Ein wichtiger Punkt beim Containerkauf ist die Lieferung. Container sind groß, schwer und benötigen geeignete Transportfahrzeuge. Deshalb sollte bereits vor dem Kauf geprüft werden, ob der gewünschte Standort gut erreichbar ist und genügend Platz für die Entladung vorhanden ist.
          </p>
          <p>
            In vielen Fällen erfolgt die Lieferung per LKW mit Kran. Dadurch kann der Container direkt am gewünschten Ort abgesetzt werden, sofern die Zufahrt und der Untergrund geeignet sind. Für größere Container oder schwierige Standorte kann eine genaue Prüfung der Entlademöglichkeiten erforderlich sein.
          </p>
          <p>
            Wenn Sie einen Container kaufen, sollten Sie deshalb neben dem Kaufpreis auch die Transportkosten, den Lieferort und mögliche Zusatzkosten für Kranentladung oder besondere Aufstellbedingungen berücksichtigen. Mehr dazu erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
          </p>
        </div>
      </div>

      {/* ── Worauf achten? Checklist ── */}
      <div className="mb-14">
        <SH>Worauf sollte man beim Containerkauf achten?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
          <p>
            Vor dem Kauf sollten Sie sich genau überlegen, wie der Container genutzt werden soll. Für reine Lagerzwecke ist ein anderer Container geeignet als für Büro, Wohnen oder Kühlung. Auch der Zustand spielt eine wichtige Rolle. Bei gebrauchten Containern sollten Türen, Dichtungen, Boden, Dach und Roststellen sorgfältig geprüft werden.
          </p>
          <p>
            Ebenso wichtig sind Maße und Platzbedarf. Der Container muss nicht nur genug Innenraum bieten, sondern auch an den vorgesehenen Standort geliefert werden können. Achten Sie außerdem auf einen festen, ebenen und tragfähigen Untergrund. Je nach Nutzung kann auch eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein, insbesondere wenn der Container dauerhaft aufgestellt oder als Büro- oder Wohnraum genutzt wird.
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
                <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Vorteile beim Containerkauf ── */}
      <div className="mb-14">
        <SH>Vorteile beim Containerkauf</SH>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Ein Container bietet viele Vorteile gegenüber festen Gebäuden oder angemieteten Lagerflächen. Er ist schnell verfügbar, robust, flexibel einsetzbar und kann bei Bedarf versetzt oder erweitert werden.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADVANTAGES.map((adv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-4 rounded-xl border border-border bg-card hover:shadow-sm transition-all"
            >
              <h3 className="font-heading font-bold text-sm text-foreground mb-1">{adv.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between"
        style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}
      >
        <div>
          <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt den passenden Container finden</h2>
          <p className="text-white/60 text-sm">Unverbindlich anfragen – Angebot inkl. Lieferung erhalten.</p>
        </div>
        <Link
          to="/angebot"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ORANGE }}
        >
          Angebot anfordern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* ── FAQ ── */}
      <div className="mb-10">
        <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
        <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-5">Häufige Fragen zum Containerkauf</h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} item={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </div>

      {/* ── Ratgeber internal links ── */}
      <div className="mb-6">
        <h2 className="font-heading font-bold text-lg text-foreground mb-4">Weiterführende Ratgeber</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/container-masse", title: "Container Maße" },
            { href: "/container-gewicht", title: "Container Gewicht" },
            { href: "/container-kosten", title: "Container Kosten" },
            { href: "/container-lieferung", title: "Container Lieferung" },
            { href: "/container-fundament", title: "Container Fundament" },
            { href: "/container-genehmigung", title: "Container Genehmigung" },
          ].map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className="flex items-center justify-between gap-3 p-4 bg-card border border-border rounded-xl hover:border-orange-300 hover:shadow-sm transition-all group"
            >
              <p className="font-heading font-semibold text-sm text-foreground group-hover:text-orange-600 transition-colors">{link.title}</p>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-orange-500 shrink-0 transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}