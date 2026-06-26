"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, CheckCircle, Building2, Truck, ShieldCheck, Wrench, Lightbulb, Snowflake, Plug, DoorOpen, LayoutGrid, Users, Ruler, Star } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* ── Image assets ── */
const IMG_HERO = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/b0f963747_20FuBrocontainerRAL7016.jpg";
const IMG_INTERIOR = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/d051326b1_Brocontainerkaufen.jpg";
const IMG_PRODUCT = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/ecc128564_BrocontainerKaufen.png";
const IMG_USED = "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/e07d47fbb_GebrauchteBrocontainer.jpg";

/* ── Helpers ── */
function IL({ to, children }) {
  return <Link to={to} className="font-semibold underline decoration-1 underline-offset-2 hover:opacity-80 transition-opacity" style={{ color: ORANGE }}>{children}</Link>;
}

function SH({ children }) {
  return <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tight mb-4">{children}</h2>;
}

/* ── Use cases for 20ft ── */
const USE_CASES = [
  "Baustellenbüros", "Projektbüros", "Empfangsbereiche", "Besprechungsräume",
  "Pausenräume", "mobile Verwaltungsräume", "temporäre Büroerweiterungen", "Arbeitsräume auf Firmengeländen",
];

/* ── Equipment list ── */
const EQUIPMENT = [
  { icon: ShieldCheck, label: "Wärmedämmung" },
  { icon: Plug, label: "Elektroinstallation" },
  { icon: Lightbulb, label: "LED Beleuchtung" },
  { icon: Plug, label: "Steckdosen" },
  { icon: Wrench, label: "Heizung" },
  { icon: Snowflake, label: "Klimaanlage" },
  { icon: DoorOpen, label: "Fenster mit Rollläden" },
  { icon: ShieldCheck, label: "Sicherheitsverglasung" },
  { icon: LayoutGrid, label: "Bodenbelag" },
  { icon: Building2, label: "Innenwände" },
  { icon: Wrench, label: "Küchenzeile" },
  { icon: Wrench, label: "Sanitärbereich" },
  { icon: Plug, label: "Netzwerkanschlüsse" },
  { icon: Users, label: "Möblierung" },
];

/* ── Delivery checklist ── */
const DELIVERY_CHECKLIST = [
  "genaue Lieferadresse", "gewünschte Containergröße", "Zufahrtsbreite",
  "Platz zum Rangieren", "Untergrund am Aufstellort", "gewünschte Position des Containers",
  "mögliche Hindernisse", "gewünschter Lieferzeitraum",
];

/* ── Advantages ── */
const ADVANTAGES = [
  { icon: Truck, title: "Schnell verfügbar", desc: "Deutlich schneller einsatzbereit als ein festes Gebäude – lieferbar innerhalb kurzer Zeit." },
  { icon: Building2, title: "Flexibel nutzbar", desc: "Bei Bedarf versetzbar, erweiterbar oder mit weiteren Containern kombinierbar." },
  { icon: Star, title: "Wirtschaftlich", desc: "Im Vergleich zu Neubau oder Gebäudeerweiterung deutlich günstiger und planbarer." },
  { icon: Wrench, title: "Individuell ausstattbar", desc: "Vom einfachen Baustellenbüro bis zum komfortablen Arbeitsraum mit Sanitär und Küche." },
];

/* ── FAQ ── */
const FAQS = [
  { q: "Was kostet ein Bürocontainer?", a: "Der Preis eines Bürocontainers hängt von Größe, Zustand, Ausstattung und Lieferung ab. Ein gebrauchter Bürocontainer ist meist günstiger als ein neues Modell. Zusätzliche Ausstattung wie Dämmung, Klimaanlage, Sanitär, Küche, Möblierung oder spezielle Elektroinstallation erhöht den Preis." },
  { q: "Kann man einen Bürocontainer gebraucht kaufen?", a: "Ja, gebrauchte Bürocontainer sind eine beliebte Lösung für Baustellen, Unternehmen und temporäre Projekte. Wichtig ist, dass der Container trocken, stabil, sicher verschließbar und technisch funktionsfähig ist. Elektrik, Fenster, Türen, Boden und Dämmung sollten vor dem Kauf geprüft werden." },
  { q: "Was kostet es, einen Bürocontainer zu mieten?", a: "Die Bürocontainer mieten Kosten hängen von Größe, Ausstattung, Mietdauer, Lieferort und Zusatzleistungen ab. Für kurze Projekte kann die Miete sinnvoll sein. Bei langfristiger Nutzung ist der Kauf häufig wirtschaftlicher." },
  { q: "Was ist besser: Bürocontainer kaufen oder mieten?", a: "Kaufen lohnt sich bei langfristiger oder wiederholter Nutzung. Mieten ist sinnvoll, wenn der Container nur für einen begrenzten Zeitraum benötigt wird. Bei Bauprojekten, Events oder Übergangslösungen ist Miete oft flexibel. Für dauerhafte Büroflächen ist der Kauf meist die bessere Wahl." },
  { q: "Wie groß ist ein 20 Fuß Bürocontainer?", a: "Ein 20 Fuß Bürocontainer basiert häufig auf ähnlichen Grundmaßen wie ein 20 Fuß Container. Die nutzbare Innenfläche kann jedoch durch Dämmung, Wandaufbau und Ausstattung etwas geringer ausfallen. Er bietet in der Regel genug Platz für mehrere Arbeitsplätze oder einen kleinen Besprechungsraum." },
  { q: "Braucht man für einen Bürocontainer eine Baugenehmigung?", a: "Ob eine Bürocontainer Baugenehmigung erforderlich ist, hängt von Standort, Nutzungsdauer, Bundesland und Nutzung ab. Bei dauerhafter Aufstellung oder regelmäßiger Nutzung als Arbeitsraum sollte die zuständige Baubehörde kontaktiert werden." },
  { q: "Kann ein Bürocontainer winterfest sein?", a: "Ja, Bürocontainer können winterfest ausgestattet werden. Dafür sind gute Dämmung, Heizung, dichte Fenster und Türen sowie eine passende Elektroinstallation wichtig. Für ganzjährige Nutzung sollte auf eine hochwertige Ausstattung geachtet werden." },
  { q: "Wird ein Bürocontainer geliefert und aufgestellt?", a: "Ja, Bürocontainer können direkt zum gewünschten Standort geliefert werden. Je nach Situation erfolgt die Entladung per LKW mit Kran. Wichtig sind eine geeignete Zufahrt, ausreichend Platz und ein tragfähiger Untergrund." },
  { q: "Eignet sich ein Bürocontainer auch als Pausenraum?", a: "Ja, Bürocontainer können auch als Pausenraum, Aufenthaltsraum oder Sozialraum genutzt werden. Je nach Ausstattung können Sitzgelegenheiten, Heizung, Klimaanlage, Küchenzeile oder Sanitärbereiche integriert werden." },
  { q: "Sind gebrauchte Bürocontainer zu verschenken realistisch?", a: "Gebrauchte Bürocontainer zu verschenken sind selten wirklich kostenlos. Häufig entstehen trotzdem Kosten für Transport, Reparatur, Reinigung oder Entsorgung. Ein geprüfter gebrauchter Bürocontainer ist meist die sicherere Wahl." },
];

/* ── Ratgeber links ── */
const RATGEBER = [
  { href: "/container-kaufen", title: "Container kaufen", desc: "Übersicht aller Containertypen" },
  { href: "/container-masse", title: "Container Maße", desc: "Abmessungen & Innenfläche" },
  { href: "/container-genehmigung", title: "Container Genehmigung", desc: "Baugenehmigung klären" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Untergrund & Aufstellung" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Ablauf & Transportkosten" },
  { href: "/container-kosten", title: "Container Kosten", desc: "Gesamtkosten berechnen" },
];

/* ── Other container types ── */
const OTHER_TYPES = [
  { href: "/seecontainer-kaufen", title: "Seecontainer kaufen", desc: "Klassische ISO Container" },
  { href: "/wohncontainer-kaufen", title: "Wohncontainer kaufen", desc: "Wohnraum statt Arbeitsraum" },
  { href: "/kuehlcontainer-kaufen", title: "Kühlcontainer kaufen", desc: "Speziallösung für Kühlung" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Basis für Bürocontainer" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen", desc: "Großraumbüro im Container" },
  { href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen", desc: "Lager direkt neben dem Büro" },
];

export default function BuerocontainerKaufen() {
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

      {/* ── Hero ── */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img src={IMG_HERO} alt="20 Fuß Bürocontainer RAL 7016 wird per Kran geliefert" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.85) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/container-kaufen" className="hover:text-white transition-colors">Container kaufen</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Bürocontainer kaufen</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Ratgeber 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Bürocontainer kaufen – flexible Arbeitsräume für Baustelle, Gewerbe und Projekte
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Bürocontainer kaufen – neue und gebrauchte Bürocontainer für Baustellen, Gewerbe und temporäre Arbeitsräume. 20 Fuß Bürocontainer, Lieferung und Beratung.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/angebot" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
              Kostenloses Angebot anfordern <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/kategorien/buerocontainer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
              Bürocontainer Katalog
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Intro ── */}
        <section className="mb-14">
          <SH>Bürocontainer als schnelle Lösung für zusätzlichen Arbeitsraum</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein Bürocontainer ist eine praktische Lösung, wenn kurzfristig zusätzlicher Arbeitsraum benötigt wird. Ob auf Baustellen, Firmengeländen, Industrieflächen, bei Sanierungen oder temporären Projekten – Bürocontainer lassen sich schnell liefern, flexibel aufstellen und direkt nutzen. Sie schaffen funktionale Büroflächen, ohne dass sofort ein festes Gebäude errichtet werden muss.
            </p>
            <p>
              Wer einen <strong className="text-foreground">Bürocontainer kaufen</strong> möchte, entscheidet sich für eine langlebige und vielseitig nutzbare Raumlösung. Je nach Ausführung kann ein Bürocontainer als Einzelbüro, Baustellenbüro, Besprechungsraum, Empfangsbereich, Pausenraum oder temporäre Erweiterung bestehender Büroflächen genutzt werden. Besonders gefragt sind 20 Fuß Bürocontainer, da sie ausreichend Platz für Arbeitsplätze bieten und dennoch kompakt genug für viele Standorte bleiben.
            </p>
            <p>
              Im Vergleich zu klassischen Bauprojekten sind Bürocontainer deutlich schneller einsatzbereit. Sie können bei Bedarf versetzt, erweitert oder mit weiteren Containern kombiniert werden. Dadurch eignen sie sich sowohl für dauerhafte Nutzung als auch für zeitlich begrenzte Projekte.
            </p>
          </div>
        </section>

        {/* ── Product showcase ── */}
        <section className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center p-6">
                <img src={IMG_PRODUCT} alt="Bürocontainer in Dunkelblau – Außenansicht" className="w-full h-full object-contain" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">Neue Bürocontainer</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Moderne Ausstattung, individuelle Konfiguration und langfristige Nutzung für repräsentative Standorte.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src={IMG_INTERIOR} alt="Bürocontainer Innenraum mit Fenster, Tür und Elektrik" className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-sm text-foreground mb-1.5">Voll ausgebauter Innenraum</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">Innenverkleidung, Bodenbelag, Fenster, Elektrik und Beleuchtung – direkt einsatzbereit als Arbeitsplatz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Kaufen oder mieten? ── */}
        <section className="mb-14">
          <SH>Bürocontainer kaufen oder mieten – was ist sinnvoller?</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Viele Interessenten fragen sich, ob sie einen Bürocontainer kaufen oder einen Bürocontainer mieten sollten. Die richtige Entscheidung hängt vor allem von der geplanten Nutzungsdauer, dem Budget und dem Einsatzzweck ab.
            </p>
            <p>
              Ein Kauf lohnt sich besonders, wenn der Bürocontainer langfristig genutzt werden soll. Unternehmen, Handwerksbetriebe, Bauunternehmen und Industriekunden entscheiden sich häufig für den Kauf, weil der Container dauerhaft verfügbar bleibt und bei Bedarf an einem anderen Standort weiterverwendet werden kann. Wer regelmäßig zusätzliche Arbeitsräume benötigt, profitiert langfristig meist stärker vom Kauf.
            </p>
            <p>
              Die Miete ist sinnvoll, wenn der Bürocontainer nur für einen bestimmten Zeitraum benötigt wird. Das ist häufig bei Baustellen, Events, Umbauten, Sanierungen oder kurzfristigen Projektflächen der Fall. Wer nach Bürocontainer mieten Kosten sucht, möchte meist wissen, ob die monatliche Miete günstiger ist als der direkte Kauf. Bei kurzer Nutzungsdauer kann Mieten wirtschaftlich sein. Bei längerer Nutzung können sich die Mietkosten jedoch summieren, sodass Kaufen oft die bessere Lösung ist.
            </p>
            <p>
              Wenn Sie neben Bürocontainern auch andere Containerarten vergleichen möchten, finden Sie auf unserer Seite <IL to="/container-kaufen">Container kaufen</IL> einen guten Überblick über Lagercontainer, Seecontainer, Wohncontainer und Kühlcontainer.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Bürocontainer kaufen</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Lohnt sich bei langfristiger oder wiederholter Nutzung. Der Container bleibt dauerhaft verfügbar und kann an jedem Standort weiterverwendet werden.</p>
                <ul className="space-y-1.5">
                  {["Dauerhaft verfügbar", "Bei Bedarf versetzbar", "Langfristig wirtschaftlich"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border" style={{ background: `linear-gradient(90deg, ${ORANGE}15, transparent)` }}>
                <h3 className="font-heading font-bold text-sm text-foreground">Bürocontainer mieten</h3>
              </div>
              <div className="p-5 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p>Sinnvoll bei zeitlich begrenzten Projekten, Baustellen, Events oder Übergangslösungen. Flexibel nutzbar, ohne langfristige Bindung.</p>
                <ul className="space-y-1.5">
                  {["Kurzfristig verfügbar", "Keine hohe Einmalinvestition", "Flexibel kündbar"].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs"><CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Neue Bürocontainer ── */}
        <section className="mb-14">
          <SH>Neue Bürocontainer kaufen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Neue Bürocontainer sind ideal, wenn ein gepflegter Zustand, moderne Ausstattung und langfristige Nutzung wichtig sind. Sie eignen sich besonders für Unternehmen, die den Container sichtbar auf dem Firmengelände, im Kundenbereich oder als repräsentativen Arbeitsraum einsetzen möchten.
            </p>
            <p>
              Ein neuer Bürocontainer kann je nach Bedarf ausgestattet werden. Möglich sind Dämmung, Elektroinstallation, Beleuchtung, Heizung, Klimaanlage, Fenster, Türen, Bodenbelag, Innenverkleidung und bei Bedarf auch Sanitär- oder Küchenbereiche. Dadurch entsteht ein vollwertiger Arbeitsplatz, der sich an die Anforderungen des Unternehmens anpassen lässt.
            </p>
            <p>
              Neue Bürocontainer sind besonders sinnvoll, wenn Wert auf Optik, Komfort und eine möglichst lange Nutzungsdauer gelegt wird. Sie sind außerdem eine gute Wahl, wenn mehrere Container zu einer größeren Büroanlage kombiniert werden sollen.
            </p>
          </div>
        </section>

        {/* ── Gebrauchte Bürocontainer ── */}
        <section className="mb-14">
          <SH>Bürocontainer gebraucht kaufen</SH>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="h-full min-h-64 overflow-hidden">
                <img src={IMG_USED} alt="Gebrauchter weißer Bürocontainer im Freigelände" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-3 text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                Ein Bürocontainer gebraucht ist eine wirtschaftliche Alternative zu einem neuen Modell. Wer einen <strong className="text-foreground">Bürocontainer gebraucht kaufen</strong> möchte, sucht meist eine sofort nutzbare Lösung zu einem günstigeren Preis. Gebrauchte Bürocontainer eignen sich besonders für Baustellen, Handwerksbetriebe, temporäre Projektbüros oder einfache Aufenthaltsräume.
              </p>
              <p>
                Beim Kauf eines gebrauchten Bürocontainers sollte jedoch nicht nur der Preis entscheidend sein. Wichtig sind der Zustand von Dach, Boden, Wänden, Fenstern, Türen, Elektrik und Dämmung. Der Container sollte trocken, stabil, sicher verschließbar und für die geplante Nutzung geeignet sein. Leichte Gebrauchsspuren sind bei gebrauchten Bürocontainern normal, starke Feuchtigkeitsschäden, defekte Elektrik oder beschädigte Böden sollten jedoch vermieden werden.
              </p>
              <p>
                Viele Nutzer suchen auch nach gebrauchte Bürocontainer zu verschenken. In der Praxis ist das jedoch selten eine wirklich günstige Lösung. Kostenlose oder sehr günstige Bürocontainer haben häufig Reparaturbedarf, veraltete Ausstattung oder hohe Transportkosten. Ein geprüfter gebrauchter Bürocontainer ist meist die sicherere und langfristig wirtschaftlichere Wahl.
              </p>
            </div>
          </div>
        </section>

        <CtaBanner text="Bürocontainer unverbindlich anfragen" btnLabel="Angebot anfordern" btnHref="/angebot" />

        {/* ── 20 Fuß Bürocontainer ── */}
        <section className="mb-14">
          <SH>20 Fuß Bürocontainer</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Der 20 Fuß Bürocontainer gehört zu den beliebtesten Varianten, weil er eine gute Balance aus Größe, Nutzfläche und Transportfähigkeit bietet. Er bietet genügend Raum für Schreibtische, Stühle, Regale, Computertechnik und mehrere Arbeitsplätze, benötigt aber weniger Stellfläche als größere Containeranlagen.
            </p>
            <p>
              Die genaue nutzbare Innenfläche hängt von Dämmung, Wandaufbau und Ausstattung ab. Wenn Sie Containergrößen vergleichen möchten, finden Sie weitere technische Informationen auf unserer Seite <IL to="/container-masse">Container Maße</IL>. Für reine Lagerzwecke kann alternativ ein <IL to="/20-fuss-container-kaufen">20 Fuß Container kaufen</IL> sinnvoll sein.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-heading font-bold text-sm text-foreground mb-4 flex items-center gap-2">
              <Ruler className="w-4 h-4" style={{ color: ORANGE }} />
              Ein 20 Fuß Bürocontainer eignet sich besonders für:
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

        {/* ── Ausstattung ── */}
        <section className="mb-14">
          <SH>Ausstattung und Komfort</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Ein Bürocontainer kann einfach oder komfortabel ausgestattet werden. Die Grundausstattung umfasst häufig Fenster, Eingangstür, Innenverkleidung, Beleuchtung, Steckdosen und eine Heizmöglichkeit. Für längere Nutzung oder ganzjährigen Einsatz sind zusätzliche Ausstattungen empfehlenswert.
            </p>
            <p>
              Die passende Ausstattung hängt davon ab, wie der Bürocontainer genutzt werden soll. Ein einfacher Baustellencontainer benötigt oft weniger Komfort als ein dauerhaft genutztes Büro auf einem Firmengelände. Wer den Container ganzjährig nutzt, sollte besonders auf Dämmung, Heizung, Belüftung und Stromanschlüsse achten.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {EQUIPMENT.map((eq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                className="flex items-center gap-2.5 p-3 rounded-xl border border-border bg-card hover:shadow-sm transition-all">
                <eq.icon className="w-4 h-4 shrink-0" style={{ color: NAVY }} />
                <span className="text-xs font-heading font-semibold text-foreground">{eq.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Baustellen ── */}
        <section className="mb-14">
          <SH>Bürocontainer für Baustellen</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Auf Baustellen sind Bürocontainer besonders beliebt, weil sie schnell verfügbar und flexibel einsetzbar sind. Sie dienen als Bauleitungsbüro, Besprechungsraum, Aufenthaltsraum oder Dokumentationsstelle. Baupläne, Unterlagen, technische Geräte und persönliche Gegenstände können geschützt untergebracht werden.
            </p>
            <p>
              Ein Vorteil auf Baustellen ist die Mobilität. Nach Abschluss eines Projekts kann der Container abtransportiert und auf einer neuen Baustelle wieder eingesetzt werden. Für größere Baustellen lassen sich mehrere Bürocontainer kombinieren. So entstehen größere Containeranlagen mit mehreren Arbeitsplätzen, Besprechungsräumen, Pausenbereichen oder Sanitärmodulen.
            </p>
            <p>
              Wenn zusätzlich Material, Maschinen oder Werkzeuge gelagert werden müssen, kann ein klassischer Seecontainer die bessere Ergänzung sein. Weitere Informationen finden Sie auf der Seite <IL to="/seecontainer-kaufen">Seecontainer kaufen</IL>.
            </p>
          </div>
        </section>

        {/* ── Unternehmen & Gewerbe ── */}
        <section className="mb-14">
          <SH>Bürocontainer für Unternehmen und Gewerbe</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Auch außerhalb von Baustellen sind Bürocontainer eine praktische Lösung. Unternehmen nutzen sie als zusätzliche Bürofläche, Empfangsraum, Schulungsraum, Pförtnercontainer oder temporäre Erweiterung während Umbauten. Besonders bei wachsendem Personalbestand oder begrenzter Bürofläche kann ein Bürocontainer schnell Entlastung schaffen.
            </p>
            <p>
              Für Gewerbekunden ist vor allem die Planbarkeit interessant. Ein Bürocontainer kann deutlich schneller bereitgestellt werden als ein Neubau oder eine umfassende Gebäudeerweiterung. Gleichzeitig bleibt die Lösung flexibel. Wenn sich der Bedarf ändert, kann der Container versetzt, erweitert oder anders genutzt werden.
            </p>
            <p>
              Für Unternehmen mit wechselnden Standorten, saisonalen Projekten oder temporärem Personal ist diese Flexibilität ein entscheidender Vorteil.
            </p>
          </div>
        </section>

        {/* ── Baugenehmigung ── */}
        <section className="mb-14">
          <SH>Bürocontainer Baugenehmigung</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Das Thema <strong className="text-foreground">Bürocontainer Baugenehmigung</strong> sollte frühzeitig geprüft werden. Ob eine Genehmigung erforderlich ist, hängt vom Bundesland, der Gemeinde, dem Standort, der Nutzungsdauer und dem geplanten Zweck ab. Ein kurzfristig genutzter Baustellencontainer wird häufig anders bewertet als ein dauerhaft aufgestellter Bürocontainer auf einem Firmengelände.
            </p>
            <p>
              Sobald ein Bürocontainer regelmäßig als Arbeitsraum genutzt, langfristig aufgestellt oder mit festen Anschlüssen versehen wird, kann eine Genehmigung erforderlich sein. Auch Themen wie Brandschutz, Fluchtwege, Statik, Abstandsflächen, Fundament und Stromanschluss können relevant sein.
            </p>
            <p>
              Deshalb ist es sinnvoll, vor dem Kauf oder der Aufstellung die zuständige Baubehörde zu kontaktieren. So lässt sich vermeiden, dass der Container später umgesetzt, nachgerüstet oder entfernt werden muss. Mehr dazu auf unserer Seite <IL to="/container-genehmigung">Container Genehmigung</IL>.
            </p>
          </div>
        </section>

        {/* ── Fundament & Aufstellung ── */}
        <section className="mb-14">
          <SH>Fundament und Aufstellung eines Bürocontainers</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl">
            <p>
              Ein Bürocontainer benötigt einen stabilen, ebenen und tragfähigen Untergrund. Für kurzfristige Nutzung kann ein gut verdichteter Schotteruntergrund ausreichend sein. Bei langfristiger Aufstellung oder mehreren Containern sind Punktfundamente, Streifenfundamente oder Betonplatten oft sinnvoller.
            </p>
            <p>
              Wichtig ist, dass der Container waagerecht steht und nicht absackt. Auch die Entwässerung sollte berücksichtigt werden, damit sich kein Wasser unter oder am Container sammelt. Bei größeren Büroanlagen sollte die Aufstellung professionell geplant werden.
            </p>
            <p>
              Vor der Lieferung sollten Zufahrt, Rangierfläche und mögliche Hindernisse geprüft werden. Dazu gehören enge Einfahrten, Bäume, Zäune, Kabel, Dachüberstände oder weicher Boden. So kann besser entschieden werden, ob ein LKW mit Kran benötigt wird. Weitere Details auf der Seite <IL to="/container-fundament">Container Fundament</IL>.
            </p>
          </div>
        </section>

        {/* ── Lieferung ── */}
        <section className="mb-14">
          <SH>Lieferung von Bürocontainern</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Bürocontainer werden in der Regel per LKW geliefert. Je nach Standort und Entladesituation kann ein Kranfahrzeug erforderlich sein, damit der Container direkt am gewünschten Platz abgesetzt werden kann. Besonders bei engen Grundstücken oder schwer zugänglichen Standorten sollte die Lieferung vorher genau abgestimmt werden.
            </p>
            <p>
              Für eine reibungslose Lieferung sind folgende Angaben hilfreich. Je besser diese Punkte vorab geklärt sind, desto einfacher lässt sich die Lieferung planen. Mehr dazu auf der Seite <IL to="/container-lieferung">Container Lieferung</IL>.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {DELIVERY_CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" /><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Vorteile ── */}
        <section className="mb-14">
          <SH>Vorteile eines Bürocontainers</SH>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4 max-w-3xl mb-6">
            <p>
              Ein Bürocontainer ist schnell verfügbar, flexibel nutzbar und wirtschaftlich interessant. Im Vergleich zu einem festen Gebäude ist er deutlich schneller einsatzbereit und kann bei Bedarf später versetzt oder erweitert werden.
            </p>
            <p>
              Besonders für Unternehmen, Baustellen und temporäre Projekte bietet ein Bürocontainer viele Vorteile. Er schafft zusätzlichen Arbeitsraum genau dort, wo er benötigt wird. Gleichzeitig bleibt die Lösung skalierbar. Einzelne Container können später ergänzt oder zu größeren Anlagen kombiniert werden.
            </p>
          </div>
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

        {/* ── CTA ── */}
        <div className="rounded-2xl p-6 sm:p-8 mb-14 flex flex-col sm:flex-row items-center gap-5 justify-between" style={{ background: `linear-gradient(135deg, ${NAVY}, #0f2540)` }}>
          <div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl mb-1">Jetzt Bürocontainer anfragen</h2>
            <p className="text-white/60 text-sm">Teilen Sie uns Nutzung, Größe und Lieferort mit – Sie erhalten ein passendes Angebot.</p>
          </div>
          <Link to="/angebot" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity" style={{ backgroundColor: ORANGE }}>
            Angebot anfordern <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
          <h2 className="font-heading font-bold text-2xl text-foreground mb-5">Häufige Fragen zu Bürocontainern</h2>
          <FaqAccordion items={FAQS} />
        </section>

        {/* ── Ratgeber links ── */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Ratgeber: Alles rund um den Bürocontainer</h2>
          <InternalLinkGrid links={RATGEBER} />
        </section>

        {/* ── Other container types ── */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weitere Container-Typen</h2>
          <InternalLinkGrid links={OTHER_TYPES} />
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}