"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Mail,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Info,
  ClipboardList,
  FileCheck2,
  Construction,
  Truck,
  PackageCheck,
  MoveHorizontal,
  MoveVertical,
  Ruler,
  Layers3,
  UserRoundCheck,
  TriangleAlert,
} from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const BRAND_BLUE = "#46C54B";
const NAVY = "#176B20";

/* â”€â”€ Image assets â”€â”€ */
const IMG_TILT_TRAILER = "/images/container-delivery-tilt-trailer.webp";
const IMG_FLACHBETT_TRAILER = "/images/container-delivery-flachbett-trailer.jpg";
const IMG_STEP_DECK_TIEFLADER = "/images/container-delivery-step-deck-tieflader.jpg";

/* â”€â”€ Delivery Steps â”€â”€ */
const STEPS = [
{
  num: "01",
  title: "Angebotsanfrage",
  desc: "Teilen Sie uns mit, welchen Container Sie benötigen und wohin er geliefert werden soll. Je genauer die Angaben zur Zufahrt sind, desto zuverlässiger lässt sich die Anlieferung planen.",
  points: ["Containerart, Größe und Stückzahl", "Postleitzahl und gewünschter Aufstellort", "Fotos von Zufahrt und Rangierfläche, falls verfügbar"],
  icon: ClipboardList,
  image: "/images/delivery-steps/request-quote.png",
  imageAlt: "Beratung und Anfrage für ein Containerangebot",
  imageScale: 1.14
},
{
  num: "02",
  title: "Angebot & Bestätigung",
  desc: "Wir prüfen Verfügbarkeit, Transportweg und passende Entlademethode. Anschließend erhalten Sie ein nachvollziehbares Angebot für Container und Transport.",
  points: ["Prüfung von Depot und Verfügbarkeit", "Auswahl des geeigneten Transportfahrzeugs", "Abstimmung des voraussichtlichen Lieferzeitraums"],
  icon: FileCheck2,
  image: "/images/delivery-steps/approve-quote.png",
  imageAlt: "Angebot genehmigen und Containerbestellung bestätigen",
  imageScale: 1.02
},
{
  num: "03",
  title: "Aufstellplatz vorbereiten",
  desc: "Vor dem Liefertag müssen Zufahrt, Rangierfläche und Untergrund frei und belastbar sein. Hindernisse sollten vorab gemeldet werden.",
  points: ["Zufahrt mindestens 3,5 m breit und 4,5 m hoch", "Ebener, tragfähiger Untergrund am Aufstellort", "Ausreichend gerade Fläche zum Rangieren und Absetzen"],
  icon: Construction,
  image: "/images/delivery-steps/prepare-delivery-site.png",
  imageAlt: "Lieferort und Aufstellfläche für den Container vorbereiten",
  imageScale: 1.05
},
{
  num: "04",
  title: "Lieferung per LKW",
  desc: "Der Fahrer liefert den Container zum vereinbarten Termin. Je nach Container, Strecke und örtlicher Situation kommt das zuvor abgestimmte Fahrzeug zum Einsatz.",
  points: ["Ansprechpartner ist zum Termin erreichbar", "Zufahrt und Entladebereich bleiben vollständig frei", "Sicherheitsabstand während Rangieren und Entladen einhalten"],
  icon: Truck,
  image: "/images/delivery-steps/container-delivery-truck.png",
  imageAlt: "Containerlieferung per LKW von DIE Container GmbH",
  imageScale: 1.62
},
{
  num: "05",
  title: "Abnahme & Übergabe",
  desc: "Nach dem Absetzen prüfen Sie gemeinsam mit dem Fahrer die Position und den sichtbaren Zustand. Auffälligkeiten werden direkt dokumentiert.",
  points: ["Aufstellposition und Türausrichtung kontrollieren", "Äußeren Zustand gemeinsam prüfen", "Übergabe bestätigen und Container übernehmen"],
  icon: PackageCheck,
  image: "/images/delivery-steps/container-handover.png",
  imageAlt: "Übernahme und Übergabe des gelieferten Containers",
  imageScale: 1.08
}];


/* â”€â”€ Truck Types â”€â”€ */
const TRUCK_TYPES = [
{
  title: "Kipper-Tieflader (Tilt Trailer)",
  badge: "Häufigste Methode",
  badgeColor: NAVY,
  desc: "Der Kipper-Tieflader ist die gängigste Methode für Containerlieferungen. Das Fahrzeug fährt rückwärts an die Abstellposition, neigt die Ladefläche hydraulisch und lässt den Container langsam auf den Boden gleiten – ganz ohne Kran oder Maschinen vor Ort.",
  pros: [
  "Kein Kran oder Gabelstapler vor Ort benötigt",
  "Kosteneffizient für Entfernungen bis ca. 350 km",
  "Schnell – Aufstellung in ca. 15–30 Minuten",
  "Ideal für 10ft und 20ft Standard-Container"],

  note: "Der Container muss leer sein. Beladene Container können mit diesem Verfahren nicht transportiert werden.",
  img: IMG_TILT_TRAILER,
  alt: "Kipper-Tieflader Tilt Trailer mit Container"
},
{
  title: "Flachbett-Trailer",
  badge: "Für lange Strecken",
  badgeColor: NAVY,
  desc: "Für Lieferungen über längere Strecken oder in abgelegenere Regionen wird häufig ein Flachbett-Trailer eingesetzt. Diese Methode ist pro Kilometer wirtschaftlicher, erfordert jedoch Hebetechnik am Zielort.",
  pros: [
  "Wirtschaftlicher für Entfernungen über 350 km",
  "Stabiler Transport über lange Distanzen",
  "Geeignet für 20ft und 40ft Container"],

  note: "Zum Abladen wird ein Kran oder Gabelstapler mit ausreichender Tragkraft am Zielort benötigt.",
  img: IMG_FLACHBETT_TRAILER,
  alt: "Flachbett-Trailer mit Container und Kranentladung"
},
{
  title: "Step-Deck / Tieflader",
  badge: "Für High Cube Container",
  badgeColor: "#4a5568",
  desc: "High Cube Container (2,89 m Höhe) überschreiten auf einem Standardfahrzeug die gesetzlichen Straßenhöhen. Für deren Transport wird daher ein Step-Deck (abgesenkter Tieflader) verwendet.",
  pros: [
  "Pflichtfahrzeug für High Cube Container",
  "Respektiert gesetzliche Höhenbeschränkungen im Straßenverkehr",
  "Auch für lange Transportstrecken geeignet"],

  note: "Auch hier ist Hebetechnik am Zielort für das Abladen erforderlich.",
  img: IMG_STEP_DECK_TIEFLADER,
  alt: "Step-Deck Tieflader für Containertransport"
}];


/* â”€â”€ Site Requirements â”€â”€ */
const REQUIREMENTS = [
{
  icon: MoveHorizontal,
  title: "Zufahrtsbreite",
  value: "min. 3,5 m",
  note: "Besser 4 m für komfortables Rangieren",
  ok: true
},
{
  icon: MoveVertical,
  title: "Durchfahrtshöhe",
  value: "min. 4,5 m",
  note: "Container auf LKW benötigt volle Höhe",
  ok: true
},
{
  icon: Ruler,
  title: "Freie Geradeausfahrt",
  value: "min. 20 m (40ft: 35 m)",
  note: "Kipper-Tieflader braucht gerade Ablauffläche",
  ok: true
},
{
  icon: Layers3,
  title: "Untergrund",
  value: "Fest & Eben",
  note: "Beton, Schotter, Pflaster – kein aufgeweichter Boden",
  ok: true
},
{
  icon: UserRoundCheck,
  title: "Ansprechpartner",
  value: "Vor Ort",
  note: "Für Abnahme und Einweisen des Fahrers anwesend sein",
  ok: true
},
{
  icon: TriangleAlert,
  title: "Besonderheiten melden",
  value: "Vorab",
  note: "Engstellen, Brücken, Stromleitungen, Höhenbeschränkungen",
  ok: false
}];


/* â”€â”€ Cost Table Data â”€â”€ */
const costRows = [
{ distance: "Bis 50 km", c20: "250–400 €", c40: "350–550 €" },
{ distance: "50–150 km", c20: "400–650 €", c40: "550–850 €" },
{ distance: "150–300 km", c20: "650–900 €", c40: "850–1.150 €" },
{ distance: "Über 300 km", c20: "Auf Anfrage", c40: "Auf Anfrage" }];




/* â”€â”€ Delivery Diagram SVG â”€â”€ */
function DeliveryDiagram() {
  return (
    <div className="mb-8 rounded-2xl border border-[#46C54B]/25 bg-white p-4 shadow-sm sm:p-6">
      <div className="mb-5 text-center">
        <p className="font-heading text-lg font-bold text-foreground sm:text-xl">Platzbedarf für die Anlieferung</p>
        <p className="mt-1 text-sm text-muted-foreground">Beispielhafte Draufsicht bei der Entladung mit einem Kipper-Tieflader</p>
      </div>
      <svg viewBox="0 0 500 220" className="mx-auto block w-full max-w-3xl" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Draufsicht eines Kipper-Tiefladers mit benötigter Zufahrtsbreite und gerader Ablauffläche">
        {/* Road / ground */}
        <rect x="0" y="100" width="500" height="120" fill="#e8edf2" rx="4" />
        <text x="250" y="215" textAnchor="middle" fontSize="10" fill="#94a3b8">Zufahrtsbereich</text>

        {/* LKW body */}
        <rect x="30" y="115" width="160" height="55" rx="6" fill={NAVY} />
        <rect x="30" y="115" width="40" height="55" rx="4" fill="#243e5c" />
        {/* Cab window */}
        <rect x="34" y="120" width="30" height="20" rx="2" fill="#7dd3fc" opacity="0.8" />
        {/* Wheels */}
        <circle cx="60" cy="170" r="10" fill="#1e293b" /><circle cx="60" cy="170" r="5" fill="#475569" />
        <circle cx="150" cy="170" r="10" fill="#1e293b" /><circle cx="150" cy="170" r="5" fill="#475569" />
        <text x="110" y="148" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">TILT TRAILER</text>

        {/* Tilting bed arrow */}
        <line x1="190" y1="142" x2="310" y2="100" stroke={BRAND_BLUE} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 3" />
        <path d="M300 96 L310 100 L305 110" stroke={BRAND_BLUE} strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Container being placed */}
        <rect x="270" y="115" width="100" height="50" rx="4" fill="#3a6aaa" stroke="#ddeeff" strokeWidth="1.5" />
        {[285, 300, 315, 330, 345, 360].map((x, i) =>
        <line key={i} x1={x} y1="115" x2={x} y2="165" stroke="#ddeeff" strokeWidth="0.8" strokeOpacity="0.4" />
        )}
        {[[270, 115], [370, 115], [270, 165], [370, 165]].map(([cx, cy], i) =>
        <rect key={i} x={cx - 4} y={cy - 4} width="8" height="8" rx="1" fill={BRAND_BLUE} stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
        )}
        <text x="320" y="144" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">CONTAINER</text>

        {/* Ground target */}
        <rect x="270" y="168" width="100" height="6" rx="2" fill={BRAND_BLUE} opacity="0.3" strokeDasharray="4 2" stroke={BRAND_BLUE} strokeWidth="1" />

        {/* Width arrow */}
        <line x1="30" y1="90" x2="190" y2="90" stroke="#64748b" strokeWidth="1" />
        <path d="M34 86 L30 90 L34 94" stroke="#64748b" strokeWidth="1" fill="none" />
        <path d="M186 86 L190 90 L186 94" stroke="#64748b" strokeWidth="1" fill="none" />
        <text x="110" y="85" textAnchor="middle" fontSize="9" fill="#64748b">min. 3,5 m Breite</text>

        {/* Straight line clearance */}
        <line x1="190" y1="185" x2="380" y2="185" stroke="#64748b" strokeWidth="1" />
        <path d="M194 181 L190 185 L194 189" stroke="#64748b" strokeWidth="1" fill="none" />
        <path d="M376 181 L380 185 L376 189" stroke="#64748b" strokeWidth="1" fill="none" />
        <text x="285" y="200" textAnchor="middle" fontSize="9" fill="#64748b">min. 20 m gerade</text>
      </svg>
    </div>);

}

/* â”€â”€ FAQs â”€â”€ */
const faqs = [
{ q: "Wie wird ein Container geliefert?", a: "Seecontainer werden per LKW transportiert. Die häufigste Methode in Deutschland ist der Kipper-Tieflader: Das Fahrzeug fährt rückwärts an die gewünschte Position, neigt die Ladefläche hydraulisch und lässt den Container ohne Kran auf den Boden gleiten. Bei langen Strecken oder High Cube Containern werden Flachbett- oder Step-Deck-Trailer eingesetzt." },
{ q: "Benötige ich einen Kran für die Lieferung?", a: "Bei Lieferung per Kipper-Tieflader (Tilt Trailer) wird kein Kran benötigt. Der Container wird direkt vom Fahrzeug auf den Boden abgesetzt. Bei Flachbett- oder Step-Deck-Lieferungen muss am Zielort ein Kran oder ein geeigneter Gabelstapler vorhanden sein." },
{ q: "Was kostet die Container-Lieferung?", a: "Transportkosten starten bei ca. 250 € für kurze Distanzen und steigen mit der Entfernung. Hinzu kommen mögliche Erschwernistarife bei engen Zufahrten, Nachtlieferungen oder Sondergenehmigungen. Die genauen Kosten werden individuell kalkuliert und im Angebot ausgewiesen." },
{ q: "Was muss ich für die Anlieferung vorbereiten?", a: "Stellen Sie sicher, dass die Zufahrt mindestens 3,5 m breit und 4,5 m hoch ist. Für eine Kipper-Lieferung sind außerdem ca. 20 m (bei 40ft ca. 35 m) freie Geradeausfahrt nötig. Der Untergrund muss fest und eben sein – Schotter, Pflaster oder Beton sind ideal. Ein Ansprechpartner sollte vor Ort sein." },
{ q: "Was passiert wenn die Zufahrt zu eng ist?", a: "Bei engen Zufahrten oder besonderen Hindernissen (Brücken, Stromleitungen, Steigungen) prüfen wir alternative Fahrzeuge oder Lösungen. Bitte informieren Sie uns unbedingt vorab, damit wir die passende Logistik planen können." },
{ q: "Können beladene Container geliefert oder abgeholt werden?", a: "Nein – Kipper-Tieflader können ausschließlich leere Container transportieren. Soll ein beladener Container bewegt oder exportiert werden, ist Hebetechnik (Kran oder Schwerlast-Gabelstapler) am Standort erforderlich." },
{ q: "Liefern Sie deutschlandweit?", a: "Ja, wir liefern in alle deutschen Bundesländer. Für Lieferungen in grenznahe Gebiete (Österreich, Schweiz, Benelux) sprechen Sie uns bitte direkt an." }];


const relatedLinks = [
{ href: "/seecontainer-kaufen", title: "Seecontainer kaufen" },
{ href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen" },
{ href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen" },
{ href: "/lagercontainer-kaufen", title: "Lagercontainer kaufen" },
{ href: "/buerocontainer-kaufen", title: "Bürocontainer kaufen" },
{ href: "/container-fundament", title: "Container Fundament" },
{ href: "/container-kosten", title: "Container Kosten" },
{ href: "/container-masse", title: "Container Maße" }];


export default function ContainerLieferung() {
  const [activeStep, setActiveStep] = useState(0);
  const selectedStep = STEPS[activeStep];

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">

      {/* â”€â”€ Hero Banner â”€â”€ */}
      <div
        className="relative overflow-hidden mb-12"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0B3D13 100%)` }}>
        
        <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.1) 39px,rgba(255,255,255,0.1) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.1) 39px,rgba(255,255,255,0.1) 40px)"
        }} />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Container Lieferung</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
            <div className="flex-1">
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-white/70">
                Lieferservice
              </span>
              <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-4">
                Container Lieferung<br />deutschlandweit
              </h1>
              <p className="text-white/70 text-base leading-relaxed max-w-xl">
                Seecontainer werden per Spezialfahrzeug geliefert. Je nach Containertyp, Entfernung und Zugangssituation setzen wir unterschiedliche Transportmethoden ein. Wir liefern zuverlässig in alle Bundesländer.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link to="/angebot"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: BRAND_BLUE }}>
                  
                  Lieferangebot anfordern <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:contact@diecontainers.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors">
                  
                  <Mail className="w-4 h-4" /> E-Mail schreiben
                </a>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6 lg:shrink-0">
              {[
              { val: "3", label: "Fahrzeugtypen" },
              { val: "100%", label: "Deutschlandweit" },
              { val: "Leer", label: "Container beim Transport" }].
              map((stat, i) =>
              <div key={i} className="text-center p-4 rounded-xl bg-white/8 border border-white/10">
                  <div className="font-heading font-bold text-2xl text-white">{stat.val}</div>
                  <div className="text-xs text-white/50 mt-1">{stat.label}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ 5-Step Process â”€â”€ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Schritt für Schritt</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">So läuft Ihre Container-Lieferung ab</h2>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#46C54B]/25 bg-[#F3FBF4] p-3 sm:p-5">
            <div
              role="tablist"
              aria-label="Schritte der Container-Lieferung"
              className="flex gap-2 overflow-x-auto pb-2 lg:overflow-visible"
            >
              {STEPS.map((step, i) => {
                const StepIcon = step.icon;
                const isActive = activeStep === i;
                return (
                  <button
                    key={step.num}
                    id={`delivery-step-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`delivery-step-panel-${i}`}
                    onClick={() => setActiveStep(i)}
                    className={`flex min-w-[10.5rem] flex-1 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#46C54B] focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-[#176B20] bg-[#176B20] text-white shadow-sm"
                        : "border-[#46C54B]/20 bg-white text-foreground hover:border-[#46C54B]/60"
                    }`}
                  >
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/15" : "bg-[#46C54B]/15 text-[#176B20]"}`}>
                      <StepIcon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span className="block font-heading text-xs font-bold leading-4">{step.title}</span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={selectedStep.num}
              id={`delivery-step-panel-${activeStep}`}
              role="tabpanel"
              aria-labelledby={`delivery-step-tab-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-3 grid overflow-hidden rounded-[1.6rem] border border-[#46C54B]/20 bg-white shadow-sm lg:grid-cols-[1.08fr_0.92fr]"
            >
              <div className="relative min-h-72 bg-[#EAF4EB] p-3 sm:min-h-80 sm:p-4 lg:min-h-[27rem] lg:p-5">
                <img
                  src={selectedStep.image}
                  alt={selectedStep.imageAlt}
                  className="absolute inset-0 h-full w-full object-contain p-4 sm:p-5"
                  style={{ transform: `scale(${selectedStep.imageScale})` }}
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {selectedStep.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {selectedStep.desc}
                </p>
                <ul className="mt-6 space-y-3">
                  {selectedStep.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-5 text-foreground/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#46C54B]/15">
                        <CheckCircle className="h-3.5 w-3.5 text-[#23832B]" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  {activeStep < STEPS.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setActiveStep((current) => current + 1)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#176B20] px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#125A1A]"
                    >
                      Nächster Schritt <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to="/angebot"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#176B20] px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#125A1A]"
                    >
                      Angebot anfordern <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* â”€â”€ Truck Types â”€â”€ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Transportmethoden</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">Welches Fahrzeug wird eingesetzt?</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">Die Wahl des Fahrzeugs hängt vom Containertyp, der Entfernung und den Zugangsbedingungen am Zielort ab.</p>
          </div>
          <div className="space-y-8">
            {TRUCK_TYPES.map((truck, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-shadow hover:shadow-lg lg:grid-cols-[1.08fr_0.92fr]">
              
                <div className={`relative min-h-72 overflow-hidden bg-slate-100 sm:min-h-80 lg:min-h-[26rem] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={truck.img} alt={truck.alt} className="absolute inset-0 h-full w-full object-contain p-3 sm:p-4" loading="lazy" />
                </div>
                <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="mb-4 self-start rounded-full px-3 py-1.5 font-heading text-xs font-bold text-white"
                  style={{ backgroundColor: truck.badgeColor }}>
                    {truck.badge}
                  </span>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-foreground lg:text-3xl">{truck.title}</h3>
                  <p className="mb-6 mt-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">{truck.desc}</p>
                  <ul className="mb-6 space-y-3">
                    {truck.pros.map((pro, j) =>
                    <li key={j} className="flex items-start gap-3 text-sm leading-5 text-foreground/80">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#46C54B]/15">
                          <CheckCircle className="h-3.5 w-3.5 text-[#23832B]" />
                        </span>
                        {pro}
                      </li>
                    )}
                  </ul>
                  <div className="mt-auto flex items-start gap-3 rounded-2xl border border-[#46C54B]/25 bg-[#F3FBF4] p-4">
                    <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#23832B]" />
                    <p className="text-sm leading-5 text-[#164D1B]">{truck.note}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* â”€â”€ Delivery Diagram â”€â”€ */}
        





        

        {/* â”€â”€ Site Requirements â”€â”€ */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Checkliste</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">Was müssen Sie vorbereiten?</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto sm:text-base sm:leading-7">Prüfen Sie Zufahrt, Rangierfläche und Aufstellort rechtzeitig. Die Grafik und Checkliste zeigen die wichtigsten Voraussetzungen auf einen Blick.</p>
          </div>
          <div className="rounded-[2rem] border border-[#46C54B]/25 bg-[#F3FBF4] p-4 sm:p-6 lg:p-8">
            <DeliveryDiagram />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {REQUIREMENTS.map((req, i) => {
                const RequirementIcon = req.icon;
                return (
                  <motion.div
                    key={req.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className={`rounded-2xl border bg-white p-5 shadow-sm sm:p-6 ${req.ok ? "border-[#46C54B]/20" : "border-[#176B20]/45"}`}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#46C54B]/15 text-[#176B20]">
                        <RequirementIcon className="h-6 w-6" strokeWidth={1.8} />
                      </div>
                      {req.ok ? (
                        <CheckCircle className="h-5 w-5 text-[#23832B]" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-[#176B20]" />
                      )}
                    </div>
                    <p className="font-heading text-sm font-bold text-foreground">{req.title}</p>
                    <p className="mt-1 font-heading text-xl font-bold leading-tight text-[#23832B] sm:text-2xl">{req.value}</p>
                    <p className="mt-2 text-sm leading-5 text-muted-foreground">{req.note}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* â”€â”€ Door Direction Info â”€â”€ */}
        <section className="mb-14">
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-6 py-5 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}15, transparent)` }}>
              <h2 className="font-heading font-bold text-lg text-foreground">Türausrichtung beim Transport</h2>
              <p className="text-sm text-muted-foreground mt-1">Ein wichtiges Detail, das Sie vor der Lieferung festlegen sollten</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
              <div className="p-6">
                <div className="text-2xl mb-3">🔄</div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">Türen zeigen zur LKW-Kabine</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Der Container liegt mit den Türen vorne auf dem Kipper. Beim Absetzen landet die Türseite zuletzt auf dem Boden – die Türen öffnen in Richtung der Anfahrt.</p>
              </div>
              <div className="p-6">
                <div className="text-2xl mb-3">↩️</div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">Türen zeigen zur LKW-Rückseite</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Der Container liegt mit den Türen hinten auf dem Kipper. Beim Absetzen landet die Türseite zuerst auf dem Boden – die Türen öffnen vom LKW weg.</p>
              </div>
            </div>
            <div className="px-6 py-4 bg-muted/30 border-t border-border flex items-start gap-2">
              <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#278A2F" }} />
              <p className="text-xs text-muted-foreground">Teilen Sie uns Ihre gewünschte Türausrichtung bei der Anfrage mit, damit wir den Container entsprechend beladen können.</p>
            </div>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <CtaBanner text="Kostenloses Lieferangebot anfordern" btnHref="/angebot" />

        {/* â”€â”€ Cost Table â”€â”€ */}
        <section className="mb-14">
          <div className="text-center mb-6">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>Preisübersicht</span>
            <h2 className="font-heading font-bold text-2xl text-foreground">Transportkosten nach Entfernung</h2>
            <p className="text-muted-foreground text-sm mt-2">Richtwerte ab unserem Standort. Endpreise individuell auf Anfrage.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ backgroundColor: NAVY }}>
                  {["Entfernung", "20 Fuß Container", "40 Fuß Container"].map((h, i) =>
                  <th key={i} className="px-5 py-4 text-left font-heading font-semibold text-white text-xs uppercase tracking-wide">{h}</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {costRows.map((row, i) =>
                <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-5 py-4 font-heading font-semibold text-foreground text-sm">{row.distance}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.c20}</td>
                    <td className="px-5 py-4 text-muted-foreground">{row.c40}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 flex items-start gap-1.5">
            <AlertTriangle className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            Erschwernistarife gelten bei: Nachtlieferung, enger Zufahrt (unter 3,5 m), Sondergenehmigungen für Schwertransporte.
          </p>
        </section>

        {/* â”€â”€ Related Links â”€â”€ */}
        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-foreground mb-4">Weiterführende Ratgeber</h2>
          <InternalLinkGrid links={relatedLinks} />
        </section>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Häufige Fragen zur Container-Lieferung</h2>
          <FaqAccordion items={faqs} />
        </section>

        <ContactBanner />
      </div>
    </div>);

}

