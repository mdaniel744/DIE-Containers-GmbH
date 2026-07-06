"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Phone, CheckCircle, AlertTriangle, ArrowRight, Info } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* ── Delivery Steps ── */
const STEPS = [
{
  num: "01",
  title: "Angebotsanfrage",
  desc: "Unverbindlich anfragen – per Formular, Telefon oder E-Mail. Angabe von Containertyp, Lieferort und Wunschtermin.",
  icon: "📋"
},
{
  num: "02",
  title: "Angebot & Bestätigung",
  desc: "Sie erhalten ein verbindliches Angebot mit Endpreis inklusive Transport. Nach Auftragsbestätigung wird der Liefertermin koordiniert.",
  icon: "✅"
},
{
  num: "03",
  title: "Aufstellplatz vorbereiten",
  desc: "Untergrund vorbereiten und Zufahrt freihalten. Ausreichend Platz für LKW-Rangieren einplanen.",
  icon: "🏗️"
},
{
  num: "04",
  title: "Lieferung per LKW",
  desc: "Je nach Containertyp und Entfernung wird ein Kipper-Tieflader, Flachbett-Trailer oder LKW-Kran eingesetzt.",
  icon: "🚛"
},
{
  num: "05",
  title: "Abnahme & Übergabe",
  desc: "Gemeinsame Sichtprüfung vor Ort. Bei Mängeln sofortige Dokumentation. Container ist sofort einsatzbereit.",
  icon: "🔑"
}];


/* ── Truck Types ── */
const TRUCK_TYPES = [
{
  title: "Kipper-Tieflader (Tilt Trailer)",
  badge: "Häufigste Methode",
  badgeColor: ORANGE,
  desc: "Der Kipper-Tieflader ist die gängigste Methode für Containerlieferungen. Das Fahrzeug fährt rückwärts an die Abstellposition, neigt die Ladefläche hydraulisch und lässt den Container langsam auf den Boden gleiten – ganz ohne Kran oder Maschinen vor Ort.",
  pros: [
  "Kein Kran oder Gabelstapler vor Ort benötigt",
  "Kosteneffizient für Entfernungen bis ca. 350 km",
  "Schnell – Aufstellung in ca. 15–30 Minuten",
  "Ideal für 10ft und 20ft Standard-Container"],

  note: "Der Container muss leer sein. Beladene Container können mit diesem Verfahren nicht transportiert werden.",
  img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/84fbb9147_TipperlowloaderTiltTrailer.webp"
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
  img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/ddc627611_Containerdeliverytruckwithtrailer.jpg"
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
  img: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/8b24ed67b_Step-decklowloaderContainerdelivery.jpg"
}];


/* ── Site Requirements ── */
const REQUIREMENTS = [
{
  icon: "↔️",
  title: "Zufahrtsbreite",
  value: "min. 3,5 m",
  note: "Besser 4 m für komfortables Rangieren",
  ok: true
},
{
  icon: "↕️",
  title: "Durchfahrtshöhe",
  value: "min. 4,5 m",
  note: "Container auf LKW benötigt volle Höhe",
  ok: true
},
{
  icon: "📏",
  title: "Freie Geradeausfahrt",
  value: "min. 20 m (40ft: 35 m)",
  note: "Kipper-Tieflader braucht gerade Ablauffläche",
  ok: true
},
{
  icon: "🧱",
  title: "Untergrund",
  value: "Fest & Eben",
  note: "Beton, Schotter, Pflaster – kein aufgeweichter Boden",
  ok: true
},
{
  icon: "👤",
  title: "Ansprechpartner",
  value: "Vor Ort",
  note: "Für Abnahme und Einweisen des Fahrers anwesend sein",
  ok: true
},
{
  icon: "⚠️",
  title: "Besonderheiten melden",
  value: "Vorab",
  note: "Engstellen, Brücken, Stromleitungen, Höhenbeschränkungen",
  ok: false
}];


/* ── Cost Table Data ── */
const costRows = [
{ distance: "Bis 50 km", c20: "250–400 €", c40: "350–550 €" },
{ distance: "50–150 km", c20: "400–650 €", c40: "550–850 €" },
{ distance: "150–300 km", c20: "650–900 €", c40: "850–1.150 €" },
{ distance: "Über 300 km", c20: "Auf Anfrage", c40: "Auf Anfrage" }];


/* ── Delivery Diagram SVG ── */
function DeliveryDiagram() {
  return (
    <div className="bg-slate-50 rounded-2xl border border-border p-6 my-8">
      <p className="font-heading font-bold text-sm text-foreground mb-4 text-center">Kipper-Tieflader – Draufsicht & Platzbedarf</p>
      <svg viewBox="0 0 500 220" className="w-full max-w-xl mx-auto block" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <line x1="190" y1="142" x2="310" y2="100" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" strokeDasharray="5 3" />
        <path d="M300 96 L310 100 L305 110" stroke={ORANGE} strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Container being placed */}
        <rect x="270" y="115" width="100" height="50" rx="4" fill="#3a6aaa" stroke="#ddeeff" strokeWidth="1.5" />
        {[285, 300, 315, 330, 345, 360].map((x, i) =>
        <line key={i} x1={x} y1="115" x2={x} y2="165" stroke="#ddeeff" strokeWidth="0.8" strokeOpacity="0.4" />
        )}
        {[[270, 115], [370, 115], [270, 165], [370, 165]].map(([cx, cy], i) =>
        <rect key={i} x={cx - 4} y={cy - 4} width="8" height="8" rx="1" fill={ORANGE} stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
        )}
        <text x="320" y="144" textAnchor="middle" fontSize="9" fill="white" fontFamily="monospace">CONTAINER</text>

        {/* Ground target */}
        <rect x="270" y="168" width="100" height="6" rx="2" fill={ORANGE} opacity="0.3" strokeDasharray="4 2" stroke={ORANGE} strokeWidth="1" />

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

/* ── FAQs ── */
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
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">

      {/* ── Hero Banner ── */}
      <div
        className="relative overflow-hidden mb-12"
        style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0f2540 100%)` }}>
        
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
              <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}>
                  
                  Lieferangebot anfordern <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+491635393159"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-heading font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors">
                  
                  <Phone className="w-4 h-4" /> Direkt anrufen
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

        {/* ── 5-Step Process ── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Schritt für Schritt</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">So läuft Ihre Container-Lieferung ab</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {STEPS.map((step, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center p-5 rounded-2xl bg-card border border-border hover:border-orange-300 hover:shadow-md transition-all">
                
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-xs text-white mb-3 shrink-0 relative z-10"
                style={{ backgroundColor: NAVY }}>
                    {step.num}
                  </div>
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <p className="font-heading font-bold text-sm text-foreground mb-1.5">{step.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* ── Truck Types ── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Transportmethoden</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">Welches Fahrzeug wird eingesetzt?</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">Die Wahl des Fahrzeugs hängt vom Containertyp, der Entfernung und den Zugangsbedingungen am Zielort ab.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TRUCK_TYPES.map((truck, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col rounded-2xl bg-card border border-border hover:shadow-md transition-all overflow-hidden">
              
                <div className="h-44 overflow-hidden bg-slate-100">
                  <img src={truck.img} alt={truck.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-heading font-bold px-2.5 py-1 rounded-full text-white mb-3 self-start"
                style={{ backgroundColor: truck.badgeColor }}>
                  {truck.badge}
                </span>
                <h3 className="font-heading font-bold text-base text-foreground mb-2">{truck.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{truck.desc}</p>
                <ul className="space-y-1.5 mb-4">
                  {truck.pros.map((pro, j) =>
                  <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                      {pro}
                    </li>
                  )}
                </ul>
                <div className="mt-auto flex items-start gap-2 p-3 rounded-xl bg-amber-50 border border-amber-200 hidden">
                  <Info className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-amber-700">{truck.note}</p>
                </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── Delivery Diagram ── */}
        





        

        {/* ── Site Requirements ── */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Checkliste</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground">Was müssen Sie vorbereiten?</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">Bereiten Sie diese Punkte vor dem Liefertag vor, um einen reibungslosen Ablauf zu gewährleisten</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REQUIREMENTS.map((req, i) =>
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`p-5 rounded-2xl border ${req.ok ? "bg-card border-border" : "bg-amber-50 border-amber-200"}`}>
              
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{req.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-heading font-bold text-sm text-foreground">{req.title}</p>
                      {req.ok ?
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" /> :
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                    }
                    </div>
                    <p className="font-heading font-semibold text-lg leading-none mb-1" style={{ color: ORANGE }}>{req.value}</p>
                    <p className="text-xs text-muted-foreground">{req.note}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── Door Direction Info ── */}
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
              <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: ORANGE }} />
              <p className="text-xs text-muted-foreground">Teilen Sie uns Ihre gewünschte Türausrichtung bei der Anfrage mit, damit wir den Container entsprechend beladen können.</p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CtaBanner text="Kostenloses Lieferangebot anfordern" btnHref="/angebot" />

        {/* ── Cost Table ── */}
        <section className="mb-14">
          <div className="text-center mb-6">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>Preisübersicht</span>
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
            <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
            Erschwernistarife gelten bei: Nachtlieferung, enger Zufahrt (unter 3,5 m), Sondergenehmigungen für Schwertransporte.
          </p>
        </section>

        {/* ── Related Links ── */}
        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-foreground mb-4">Weiterführende Ratgeber</h2>
          <InternalLinkGrid links={relatedLinks} />
        </section>

        {/* ── FAQ ── */}
        <section className="mb-10">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Häufige Fragen zur Container-Lieferung</h2>
          <FaqAccordion items={faqs} />
        </section>

        <ContactBanner />
      </div>
    </div>);

}