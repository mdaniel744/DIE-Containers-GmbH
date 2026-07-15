"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Package, Wrench, Building2, Thermometer } from "lucide-react";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Image assets â”€â”€ */
const IMG_20FT = "/images/seecontainer-20ft-grau.jpg";
const IMG_40FT = "/images/seecontainer-40ft-crane.jpg";
const IMG_BUERO = "/images/buerocontainer-20ft-ral7016-hero.jpg";
const IMG_KUEHL = "/images/refrigerated-container-10ft.webp";
const IMG_WOHN = "/images/wohncontainer-modern-front.webp";

/* â”€â”€ Container type cards â”€â”€ */
const TYPE_CARDS = [
  {
    img: IMG_20FT,
    title: "Seecontainer",
    desc: "Robuste ISO-Container aus Cortenstahl â€“ wind- und wasserdicht, in 10ft, 20ft und 40ft erhÃ¤ltlich.",
    href: "/seecontainer-kaufen",
    linkText: "Seecontainer kaufen",
    icon: Package,
  },
  {
    img: IMG_40FT,
    title: "40 FuÃŸ Container",
    desc: "Maximaler Stauraum fÃ¼r groÃŸe LagerflÃ¤chen, industrielle Projekte und gewerbliche Anwendungen.",
    href: "/40-fuss-container-kaufen",
    linkText: "40 FuÃŸ Container kaufen",
    icon: Package,
  },
  {
    img: IMG_BUERO,
    title: "BÃ¼rocontainer",
    desc: "SchlÃ¼sselfertiges, mobiles BÃ¼ro mit Isolierung, Elektrik und Fenstern â€“ sofort einsatzbereit.",
    href: "/buerocontainer-kaufen",
    linkText: "BÃ¼rocontainer entdecken",
    icon: Building2,
  },
  {
    img: IMG_WOHN,
    title: "Wohncontainer",
    desc: "Voll ausgebauter Wohnraum als Tiny House, GÃ¤steunterkunft oder dauerhafte WohnlÃ¶sung.",
    href: "/wohncontainer-kaufen",
    linkText: "Wohncontainer entdecken",
    icon: Building2,
  },
  {
    img: IMG_KUEHL,
    title: "KÃ¼hlcontainer",
    desc: "Integriertes KÃ¼hlaggregat fÃ¼r temperaturkontrollierte Lagerung von â€“25 Â°C bis +25 Â°C.",
    href: "/kuehlcontainer-kaufen",
    linkText: "KÃ¼hlcontainer entdecken",
    icon: Thermometer,
  },
];

/* â”€â”€ Buying checklist â”€â”€ */
const CHECKLIST = [
  "Containertyp und Einsatzzweck festlegen",
  "Passende GrÃ¶ÃŸe nach Platzbedarf wÃ¤hlen",
  "Zustand: Neu oder gebraucht entscheiden",
  "Zufahrt und Untergrund am Aufstellort prÃ¼fen",
  "Transportkosten und Entladung einplanen",
  "Genehmigungspflicht klÃ¤ren (bei BÃ¼ro/Wohnen)",
];

/* â”€â”€ Advantages â”€â”€ */
const ADVANTAGES = [
  { title: "Schnell verfÃ¼gbar", desc: "Container sind kurzfristig lieferbar â€“ kein langer Planungsprozess wie bei festen GebÃ¤uden." },
  { title: "Extrem robust", desc: "Cortenstahl und verschweiÃŸte Konstruktion bieten jahrzehntelangen Schutz vor Witterung." },
  { title: "Flexibel versetzbar", desc: "Container kÃ¶nnen jederzeit transportiert und an einem anderen Standort aufgestellt werden." },
  { title: "Wirtschaftlich", desc: "Im Vergleich zu dauerhafter FlÃ¤chenmiete amortisiert sich der Kauf oft innerhalb weniger Jahre." },
  { title: "Erweiterbar", desc: "Bei wachsendem Bedarf kÃ¶nnen weitere Container ergÃ¤nzt oder Spezialmodelle kombiniert werden." },
  { title: "Vielseitig nutzbar", desc: "Von Lagerung Ã¼ber BÃ¼ro bis Wohnen â€“ Container sind fÃ¼r unterschiedlichste Zwecke geeignet." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein Container?", a: "Der Preis hÃ¤ngt von GrÃ¶ÃŸe, Zustand, Ausstattung und Lieferort ab. Gebrauchte Container sind in der Regel gÃ¼nstiger als neue Modelle. Auch Sonderausstattungen wie Isolierung, Fenster, Elektrik oder KÃ¼hltechnik beeinflussen den Preis. ZusÃ¤tzlich sollten Transport und Entladung bei der Kalkulation berÃ¼cksichtigt werden." },
  { q: "Kann man gebrauchte Container kaufen?", a: "Ja, gebrauchte Container sind eine beliebte und wirtschaftliche LÃ¶sung. Sie eignen sich besonders fÃ¼r Lagerung, Baustellen, Landwirtschaft und gewerbliche Nutzung. Wichtig ist, dass der Container trotz Gebrauchsspuren technisch intakt, stabil sowie wind- und wasserdicht ist." },
  { q: "Welcher Container ist der richtige fÃ¼r mich?", a: "Der passende Container hÃ¤ngt vom Einsatzbereich ab. FÃ¼r Lagerung und Transport eignen sich Seecontainer. FÃ¼r ArbeitsrÃ¤ume sind BÃ¼rocontainer sinnvoll. FÃ¼r UnterkÃ¼nfte kommen Wohncontainer infrage, wÃ¤hrend KÃ¼hlcontainer fÃ¼r temperaturempfindliche Waren genutzt werden." },
  { q: "Wird der Container direkt geliefert?", a: "Ja, Container kÃ¶nnen direkt zum gewÃ¼nschten Standort geliefert werden. Die Lieferung erfolgt hÃ¤ufig per LKW mit Kran, sodass der Container vor Ort abgesetzt werden kann. Voraussetzung ist eine geeignete Zufahrt und ausreichend Platz fÃ¼r die Entladung." },
  { q: "Braucht man eine Genehmigung fÃ¼r einen Container?", a: "Das hÃ¤ngt von Standort, Nutzungsdauer und Verwendungszweck ab. Ein kurzfristig genutzter Lagercontainer ist oft unkomplizierter als ein dauerhaft aufgestellter BÃ¼ro- oder Wohncontainer. Bei lÃ¤ngerer Nutzung oder gewerblicher Aufstellung sollte die zustÃ¤ndige BehÃ¶rde kontaktiert werden." },
  { q: "Welche ContainergrÃ¶ÃŸen gibt es?", a: "HÃ¤ufige GrÃ¶ÃŸen sind 10 FuÃŸ, 20 FuÃŸ und 40 FuÃŸ. Besonders beliebt sind 20 FuÃŸ Container fÃ¼r flexible LagerlÃ¶sungen und 40 FuÃŸ Container fÃ¼r grÃ¶ÃŸere Projekte." },
  { q: "Was ist besser: neuer oder gebrauchter Container?", a: "Ein neuer Container bietet den besten optischen Zustand und eine lange Nutzungsdauer. Ein gebrauchter Container ist gÃ¼nstiger und fÃ¼r viele praktische Anwendungen vÃ¶llig ausreichend. Die beste Wahl hÃ¤ngt davon ab, ob Optik, Preis oder Funktion im Vordergrund stehen." },
  { q: "Kann ein Container spÃ¤ter versetzt werden?", a: "Ja, Container kÃ¶nnen bei Bedarf transportiert und an einem anderen Standort wieder aufgestellt werden. Das macht sie besonders flexibel fÃ¼r Unternehmen, Baustellen oder wechselnde Projekte." },
];

/* â”€â”€ Inline link helper â”€â”€ */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

/* â”€â”€ Section heading â”€â”€ */
function SH({ tag, children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* â”€â”€ FAQ Accordion â”€â”€ */
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

      {/* â”€â”€ H2: Container kaufen leicht gemacht â”€â”€ */}
      <div className="mb-12">
        <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Ratgeber</span>
        <h1 className="font-heading font-bold text-2xl lg:text-3xl text-foreground tracking-tight mb-5">
          Container kaufen â€“ neue und gebrauchte Container fÃ¼r jeden Bedarf
        </h1>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
          <p>
            Wenn Sie einen <strong className="text-foreground">Container kaufen</strong> mÃ¶chten, stehen Ihnen heute viele verschiedene MÃ¶glichkeiten zur VerfÃ¼gung. Container werden lÃ¤ngst nicht mehr nur fÃ¼r den internationalen Warenverkehr genutzt. Sie dienen als Lagerraum, mobile BÃ¼roflÃ¤che, WohnlÃ¶sung, KÃ¼hlraum oder flexible Erweiterung fÃ¼r Gewerbe, Baustellen, Landwirtschaft und private Projekte.
          </p>
          <p>
            Ob neu oder gebraucht, kompakt oder groÃŸ, standardisiert oder individuell ausgestattet â€“ der passende Container hÃ¤ngt immer davon ab, wofÃ¼r er eingesetzt werden soll. Deshalb ist es wichtig, vor dem Kauf GrÃ¶ÃŸe, Zustand, Ausstattung, Lieferort und langfristige Nutzung genau zu berÃ¼cksichtigen.
          </p>
          <p>
            Bei uns finden Sie verschiedene ContainerlÃ¶sungen fÃ¼r unterschiedliche Anforderungen. Von klassischen <IL to="/seecontainer-kaufen">Seecontainern</IL> Ã¼ber <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL> bis hin zu <IL to="/wohncontainer-kaufen">Wohn-</IL> und <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainern</IL> bieten wir robuste, langlebige und flexibel einsetzbare Modelle fÃ¼r Kunden in ganz Deutschland.
          </p>
        </div>
      </div>

      {/* â”€â”€ Welche Container kann man kaufen? + Type cards â”€â”€ */}
      <div className="mb-14">
        <SH>Welche Container kann man kaufen?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-8">
          <p>
            Wer einen Container kaufen mÃ¶chte, sollte zuerst den passenden Containertyp auswÃ¤hlen. Nicht jeder Container eignet sich fÃ¼r denselben Zweck. WÃ¤hrend ein Seecontainer ideal fÃ¼r Lagerung und Transport ist, bietet ein <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL> eine schnelle LÃ¶sung fÃ¼r zusÃ¤tzlichen Arbeitsraum. Ein <IL to="/wohncontainer-kaufen">Wohncontainer</IL> eignet sich dagegen fÃ¼r temporÃ¤res oder dauerhaftes Wohnen, wÃ¤hrend ein <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainer</IL> fÃ¼r temperaturempfindliche Waren genutzt wird.
          </p>
          <p>
            FÃ¼r klassische Lager- und Transportzwecke ist ein <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL> meist die richtige Wahl. Diese Container sind besonders robust, wind- und wasserdicht und in verschiedenen GrÃ¶ÃŸen erhÃ¤ltlich. Besonders gefragt sind der <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container kaufen</IL> Bereich fÃ¼r kompakte LagerlÃ¶sungen und der <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container kaufen</IL> Bereich fÃ¼r grÃ¶ÃŸere LagerflÃ¤chen.
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

      {/* â”€â”€ Neue oder gebrauchte Container? â”€â”€ */}
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
                Neue Container sind besonders interessant, wenn ein sehr guter optischer Zustand, lange Nutzungsdauer und mÃ¶glichst geringe Gebrauchsspuren wichtig sind. Sie eignen sich gut fÃ¼r Unternehmen, VerkaufsflÃ¤chen, reprÃ¤sentative Standorte oder Projekte, bei denen der Container sichtbar aufgestellt wird.
              </p>
              <ul className="space-y-1.5">
                {["Nahezu makellose Optik", "Maximale Nutzungsdauer (25+ Jahre)", "Ideal fÃ¼r reprÃ¤sentative Standorte"].map((p, i) => (
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
                Wer eine wirtschaftliche LÃ¶sung sucht, kann auch einen <strong className="text-foreground">Container gebraucht kaufen</strong>. Gebrauchte Container sind oft deutlich gÃ¼nstiger und fÃ¼r viele Anwendungen vollkommen ausreichend. Besonders als Lagercontainer, Materialcontainer oder Baustellencontainer sind gebrauchte Modelle sehr beliebt.
              </p>
              <ul className="space-y-1.5">
                {["Deutlich gÃ¼nstiger als Neuware", "Kurzfristig verfÃ¼gbar", "Ideal fÃ¼r Lager, Baustelle & Gewerbe"].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Wenn Sie <strong className="text-foreground">gebrauchte Container kaufen</strong>, sollten diese weiterhin stabil, sicher, wind- und wasserdicht sein. Leichte Gebrauchsspuren, Kratzer oder kleinere Dellen sind bei gebrauchten Containern normal, beeintrÃ¤chtigen die Funktion jedoch meist nicht.
        </p>
      </div>

      {/* â”€â”€ WofÃ¼r eignet sich ein Container? â”€â”€ */}
      <div className="mb-14">
        <SH>WofÃ¼r eignet sich ein Container?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
          <p>
            Container sind vielseitig einsetzbar und kÃ¶nnen je nach Modell fÃ¼r sehr unterschiedliche Zwecke genutzt werden. Besonders hÃ¤ufig werden sie als LagerflÃ¤che fÃ¼r Werkzeuge, Maschinen, Baumaterialien, MÃ¶bel, Waren oder saisonale AusrÃ¼stung verwendet. Unternehmen nutzen Container auÃŸerdem zur Erweiterung bestehender LagerflÃ¤chen oder als temporÃ¤re LÃ¶sung wÃ¤hrend Umbau- oder Bauphasen.
          </p>
          <p>
            Auf Baustellen dienen Container als Materiallager, BÃ¼roeinheit oder Aufenthaltsraum. In der Landwirtschaft werden sie hÃ¤ufig zur Lagerung von GerÃ¤ten, Ersatzteilen oder Futtermitteln eingesetzt. Auch im privaten Bereich sind Container praktisch, zum Beispiel bei UmzÃ¼gen, Renovierungen oder als zusÃ¤tzlicher Stauraum auf dem GrundstÃ¼ck.
          </p>
          <p>
            FÃ¼r Gewerbekunden bieten Container den Vorteil, dass sie schnell verfÃ¼gbar, mobil und bei Bedarf erweiterbar sind. Wer spÃ¤ter mehr Platz benÃ¶tigt, kann weitere Container ergÃ¤nzen oder bestehende LÃ¶sungen durch spezielle Modelle wie <IL to="/buerocontainer-kaufen">BÃ¼rocontainer</IL>, <IL to="/kuehlcontainer-kaufen">KÃ¼hlcontainer</IL> oder <IL to="/wohncontainer-kaufen">Wohncontainer</IL> erweitern.
          </p>
        </div>
      </div>

      {/* â”€â”€ Welche ContainergrÃ¶ÃŸe? + Size visual â”€â”€ */}
      <div className="mb-14">
        <SH>Welche ContainergrÃ¶ÃŸe ist die richtige?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
          <p>
            Die passende GrÃ¶ÃŸe hÃ¤ngt davon ab, wie viel Platz Sie benÃ¶tigen und wo der Container aufgestellt werden soll. Kleine Container eignen sich gut fÃ¼r begrenzte FlÃ¤chen oder private Nutzung. GrÃ¶ÃŸere Modelle bieten deutlich mehr Stauraum und sind besonders fÃ¼r Unternehmen, Baustellen und industrielle Anwendungen geeignet.
          </p>
          <p>
            Ein <IL to="/20-fuss-container-kaufen">20 FuÃŸ Container</IL> ist eine beliebte Allround-LÃ¶sung, da er ausreichend Stauraum bietet und dennoch relativ einfach zu transportieren und aufzustellen ist. Ein <IL to="/40-fuss-container-kaufen">40 FuÃŸ Container</IL> eignet sich dagegen fÃ¼r grÃ¶ÃŸere Warenmengen, umfangreiche LagerflÃ¤chen oder gewerbliche Projekte mit hohem Platzbedarf.
          </p>
          <p>
            Eine genaue Ãœbersicht zu AuÃŸenmaÃŸen, InnenmaÃŸen, TÃ¼rÃ¶ffnungen, Gewicht und Ladevolumen finden Sie auf unserer Seite <IL to="/container-masse">Container MaÃŸe</IL>. Dort kÃ¶nnen Sie verschiedene GrÃ¶ÃŸen direkt vergleichen und besser einschÃ¤tzen, welcher Container zu Ihrem Projekt passt.
          </p>
        </div>

        {/* Size comparison cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
              <img src={IMG_20FT} alt="20 FuÃŸ Container kaufen" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-sm text-foreground mb-2">20 FuÃŸ Container</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Der Allrounder: ca. 6,06 m lang, 2,44 m breit, 2,59 m hoch. Ausreichend Platz fÃ¼r die meisten Lager- und Gewerbeanwendungen.</p>
              <Link to="/20-fuss-container-kaufen" className="inline-flex items-center gap-1 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                20 FuÃŸ Container kaufen <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="h-40 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
              <img src={IMG_40FT} alt="40 FuÃŸ Container kaufen" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="font-heading font-bold text-sm text-foreground mb-2">40 FuÃŸ Container</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">Maximales Volumen: ca. 12,19 m lang, 2,44 m breit, 2,59 m hoch. FÃ¼r groÃŸe LagerflÃ¤chen und industrielle Projekte.</p>
              <Link to="/40-fuss-container-kaufen" className="inline-flex items-center gap-1 text-xs font-semibold font-heading" style={{ color: ORANGE }}>
                40 FuÃŸ Container kaufen <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* â”€â”€ Container kaufen mit Lieferung â”€â”€ */}
      <div className="mb-14">
        <SH>Container kaufen mit Lieferung</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
          <p>
            Ein wichtiger Punkt beim Containerkauf ist die Lieferung. Container sind groÃŸ, schwer und benÃ¶tigen geeignete Transportfahrzeuge. Deshalb sollte bereits vor dem Kauf geprÃ¼ft werden, ob der gewÃ¼nschte Standort gut erreichbar ist und genÃ¼gend Platz fÃ¼r die Entladung vorhanden ist.
          </p>
          <p>
            In vielen FÃ¤llen erfolgt die Lieferung per LKW mit Kran. Dadurch kann der Container direkt am gewÃ¼nschten Ort abgesetzt werden, sofern die Zufahrt und der Untergrund geeignet sind. FÃ¼r grÃ¶ÃŸere Container oder schwierige Standorte kann eine genaue PrÃ¼fung der EntlademÃ¶glichkeiten erforderlich sein.
          </p>
          <p>
            Wenn Sie einen Container kaufen, sollten Sie deshalb neben dem Kaufpreis auch die Transportkosten, den Lieferort und mÃ¶gliche Zusatzkosten fÃ¼r Kranentladung oder besondere Aufstellbedingungen berÃ¼cksichtigen. Mehr dazu erfahren Sie auf unserer Seite <IL to="/container-lieferung">Container Lieferung</IL>.
          </p>
        </div>
      </div>

      {/* â”€â”€ Worauf achten? Checklist â”€â”€ */}
      <div className="mb-14">
        <SH>Worauf sollte man beim Containerkauf achten?</SH>
        <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
          <p>
            Vor dem Kauf sollten Sie sich genau Ã¼berlegen, wie der Container genutzt werden soll. FÃ¼r reine Lagerzwecke ist ein anderer Container geeignet als fÃ¼r BÃ¼ro, Wohnen oder KÃ¼hlung. Auch der Zustand spielt eine wichtige Rolle. Bei gebrauchten Containern sollten TÃ¼ren, Dichtungen, Boden, Dach und Roststellen sorgfÃ¤ltig geprÃ¼ft werden.
          </p>
          <p>
            Ebenso wichtig sind MaÃŸe und Platzbedarf. Der Container muss nicht nur genug Innenraum bieten, sondern auch an den vorgesehenen Standort geliefert werden kÃ¶nnen. Achten Sie auÃŸerdem auf einen festen, ebenen und tragfÃ¤higen Untergrund. Je nach Nutzung kann auch eine <IL to="/container-genehmigung">Genehmigung</IL> erforderlich sein, insbesondere wenn der Container dauerhaft aufgestellt oder als BÃ¼ro- oder Wohnraum genutzt wird.
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

      {/* â”€â”€ Vorteile beim Containerkauf â”€â”€ */}
      <div className="mb-14">
        <SH>Vorteile beim Containerkauf</SH>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Ein Container bietet viele Vorteile gegenÃ¼ber festen GebÃ¤uden oder angemieteten LagerflÃ¤chen. Er ist schnell verfÃ¼gbar, robust, flexibel einsetzbar und kann bei Bedarf versetzt oder erweitert werden.
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

      {/* â”€â”€ CTA â”€â”€ */}
      <div
        className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between"
        style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}
      >
        <div>
          <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt den passenden Container finden</h2>
          <p className="text-white/60 text-sm">Unverbindlich anfragen â€“ Angebot inkl. Lieferung erhalten.</p>
        </div>
        <Link
          to="/shop"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
          style={{ backgroundColor: ORANGE }}
        >
          Angebot anfordern <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* â”€â”€ FAQ â”€â”€ */}
      <div className="mb-10">
        <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
        <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-5">HÃ¤ufige Fragen zum Containerkauf</h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} item={faq} isOpen={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? null : i)} />
          ))}
        </div>
      </div>

      {/* â”€â”€ Ratgeber internal links â”€â”€ */}
      <div className="mb-6">
        <h2 className="font-heading font-bold text-lg text-foreground mb-4">WeiterfÃ¼hrende Ratgeber</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/container-masse", title: "Container MaÃŸe" },
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

