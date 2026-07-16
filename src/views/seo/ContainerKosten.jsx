"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, TrendingUp, Package, MapPin, Truck, Star, Wrench, AlertTriangle } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";
const NAVY = "#1B3A5C";

/* â”€â”€ Pricing Grid Data â”€â”€ */
const PRICING_GRID = [
  {
    size: "10 Fuß Container",
    length: "3,0 m",
    img: "/images/container-category-10ft.png",
    href: "/10-fuss-container-kaufen",
    cols: [
      { label: "One Trip (Neu)", price: "2.500 – 3.200 â‚¬", desc: "Erstmalig verwendet, wie neu", badge: "Beste Qualität" },
      { label: "Multi Trip (Leicht gebraucht)", price: "2.000 – 2.600 â‚¬", desc: "Wenige Einsätze, guter Zustand", badge: null },
      { label: "Gebraucht", price: "1.500 – 2.100 â‚¬", desc: "Mehrfach eingesetzt, voll funktionsfähig", badge: "Günstigste Option" },
    ],
  },
  {
    size: "20 Fuß Container",
    length: "6,06 m",
    img: "/images/container-category-20ft.png",
    href: "/20-fuss-container-kaufen",
    cols: [
      { label: "One Trip (Neu)", price: "3.200 – 4.200 â‚¬", desc: "Direktlieferung aus Produktion", badge: "Bestseller" },
      { label: "Multi Trip (Leicht gebraucht)", price: "2.400 – 3.200 â‚¬", desc: "1–3 Seereisen, guter Zustand", badge: null },
      { label: "Gebraucht", price: "1.990 – 2.900 â‚¬", desc: "Meistgekauft, geprüfte Qualität", badge: "Beliebt" },
    ],
  },
  {
    size: "40 Fuß Container",
    length: "12,19 m",
    img: "/images/container-category-40ft.png",
    href: "/40-fuss-container-kaufen",
    cols: [
      { label: "One Trip (Neu)", price: "5.200 – 6.800 â‚¬", desc: "Fabrikneu, max. Nutzlast", badge: null },
      { label: "Multi Trip (Leicht gebraucht)", price: "3.800 – 5.000 â‚¬", desc: "Sehr guter Zustand", badge: null },
      { label: "Gebraucht", price: "2.990 – 4.200 â‚¬", desc: "Bewährt & wetterfest", badge: "Günstigste Option" },
    ],
  },
];

/* â”€â”€ Price Factors â”€â”€ */
const FACTORS = [
  { icon: Package, title: "Containergröße", desc: "10ft, 20ft und 40ft unterscheiden sich erheblich im Preis. Größere Container kosten mehr, bieten aber auch mehr Volumen pro Euro." },
  { icon: Star, title: "Zustand (Neu / Gebraucht)", desc: "One Trip Container (nahezu neu) kosten mehr als gebrauchte Container. Der Preisunterschied beträgt typisch 30–50 %." },
  { icon: Wrench, title: "Container-Typ", desc: "Standard-Container sind am günstigsten. Spezialtypen wie High Cube, Kühlcontainer oder Bürocontainer kosten entsprechend mehr." },
  { icon: MapPin, title: "Standort & Verfügbarkeit", desc: "Containerverfügbarkeit variiert regional. Knappe Bestände in Ihrem Bundesland bedeuten höhere Preise als in Hafenstädten." },
  { icon: Truck, title: "Transportkosten", desc: "Lieferkosten starten ab ca. 250 â‚¬ und steigen mit der Entfernung. Engstellen oder besondere Zufahrten erhöhen den Preis." },
  { icon: TrendingUp, title: "Marktlage & Saisonalität", desc: "Containerpreise folgen globalen Handelsströmen. Engpässe in der Schifffahrt können die Preise kurzfristig erhöhen." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein 20 Fuß Container?", a: "Ein gebrauchter 20 Fuß Seecontainer kostet ab ca. 1.990 â‚¬. Ein One Trip Container (nahezu neu) beginnt bei ca. 3.200 â‚¬. Hinzu kommen Transportkosten von ca. 300–600 â‚¬ je nach Entfernung. Der Gesamtpreis liegt somit meist zwischen 2.300 â‚¬ und 4.800 â‚¬." },
  { q: "Wie viel kostet ein gebrauchter Seecontainer?", a: "Gebrauchte Seecontainer beginnen bei 1.500 â‚¬ für 10ft-Modelle, ca. 1.990 â‚¬ für 20ft und ab 2.990 â‚¬ für 40ft Container. Entscheidend für den Preis sind Zustand, Alter und regionale Verfügbarkeit." },
  { q: "Warum ändern sich Containerpreise regelmäßig?", a: "Containerpreise sind stark von globalen Handelsströmen abhängig. Nach COVID-19 stiegen die Preise dramatisch, normalisierten sich aber wieder. Auch saisonale Nachfrage, Wechselkurse und Treibstoffpreise beeinflussen die Kosten." },
  { q: "Sind Transportkosten im Preis enthalten?", a: "Nein, in der Regel werden Container-Kaufpreis und Lieferkosten separat ausgewiesen. Die Transportkosten richten sich nach Entfernung und Zugangssituation und starten ab ca. 250 â‚¬ für kurze Strecken." },
  { q: "Kann ich einen Container finanzieren?", a: "Ja, für gewerbliche Kunden sind in der Regel Finanzierungsoptionen verfügbar. Sprechen Sie uns direkt an – wir beraten Sie zu individuellen Zahlungslösungen und Ratenzahlungsoptionen." },
];

/* â”€â”€ Related Articles â”€â”€ */
const RELATED = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Alles über den meistgekauften Seecontainer", img: "/images/gebrauchte-seecontainer.png" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transportkosten & Logistik in Deutschland", img: "/images/wohncontainer-transport.jpg" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Kosten & Arten für das perfekte Fundament", img: "/images/die-container-yard.jpeg" },
];

const internalLinks = [
  { href: "/10-fuss-container-kaufen", title: "10 Fuß Container kaufen" },
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen" },
  { href: "/40-fuss-container-kaufen", title: "40 Fuß Container kaufen" },
  { href: "/open-side-container-kaufen", title: "Open Side Container kaufen" },
  { href: "/double-door-container-kaufen", title: "Double Door Container kaufen" },
  { href: "/container-lieferung", title: "Container Lieferung" },
  { href: "/container-fundament", title: "Container Fundament" },
  { href: "/container-masse", title: "Container Maße" },
];

export default function ContainerKosten() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">

      {/* â”€â”€ Hero â”€â”€ */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/crane-is-hoisting-containers.avif"
            alt="Gestapelte Seecontainer im Hafen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(27,58,92,0.92) 0%, rgba(15,37,64,0.85) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Startseite</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/seecontainer-kaufen" className="hover:text-white transition-colors">Ratgeber</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/70">Container Kosten</span>
          </nav>
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>Preisübersicht 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Seecontainer Preise in Deutschland – Aktuelle Kosten für neue und gebrauchte Container
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Containerpreise variieren je nach Größe, Zustand, regionaler Verfügbarkeit und Transportkosten. Diese Preisübersicht gibt Ihnen einen realistischen Überblick über aktuelle Marktpreise für Seecontainer in Deutschland – damit Sie sicher kalkulieren und vergleichen können.
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
              Container kaufen
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* â”€â”€ Pricing Grid Section â”€â”€ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Marktpreisübersicht</span>
            <h2 className="font-heading font-bold text-2xl lg:text-4xl text-foreground tracking-tight mb-3">Container Preise nach Größe & Zustand</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Vergleichen Sie aktuelle Seecontainer-Kaufpreise ab Lager Deutschland. Alle Preise netto, exklusive Transport.</p>
          </div>

          <div className="space-y-6">
            {PRICING_GRID.map((row, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ri * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Row header */}
                <div className="flex items-center gap-4 px-5 py-4 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                  <div className="w-20 h-14 rounded-lg overflow-hidden bg-[#fdf8f0] shrink-0 flex items-center justify-center p-1">
                    <img src={row.img} alt={row.size} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <Link to={row.href} className="font-heading font-bold text-base text-foreground hover:underline">{row.size}</Link>
                    <p className="text-xs text-muted-foreground">Außenlänge: {row.length}</p>
                  </div>
                </div>
                {/* Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  {row.cols.map((col, ci) => (
                    <div key={ci} className="p-5 relative">
                      {col.badge && (
                        <span
                          className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: ci === 0 ? NAVY : ORANGE }}
                        >
                          {col.badge}
                        </span>
                      )}
                      <p className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-2">{col.label}</p>
                      <p className="font-heading font-bold text-xl text-foreground mb-1" style={{ color: NAVY }}>{col.price}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{col.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-5 flex items-start gap-2 p-4 rounded-xl bg-amber-50 border border-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 italic leading-relaxed">
              <strong>Preishinweis:</strong> Die angegebenen Preise dienen nur zur Orientierung. Die endgültigen Kosten hängen von Verfügbarkeit, Lieferort und aktuellen Marktbedingungen ab. Fordern Sie ein individuelles Angebot für verbindliche Preise an.
            </p>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <CtaBanner text="Jetzt Preis anfragen – kostenlos & unverbindlich" btnHref="/angebot" />

        {/* â”€â”€ Price Factors â”€â”€ */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>Einflussfaktoren</span>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-foreground tracking-tight mb-3">Was beeinflusst den Seecontainer Preis?</h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">Verstehen Sie die wichtigsten Faktoren, die den Endpreis Ihres Containers bestimmen.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FACTORS.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-orange-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${NAVY}15` }}>
                  <f.icon className="w-5 h-5" style={{ color: NAVY }} />
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground mb-2">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* â”€â”€ SEO Content â”€â”€ */}
        <section className="mb-16 prose-section">
          <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Was kostet ein Seecontainer?</h2>
              <p>
                Die Frage â€žWas kostet ein Seecontainer?" lässt sich nicht pauschal beantworten – aber dieser Ratgeber gibt Ihnen einen konkreten Überblick über die aktuellen Marktpreise in Deutschland. Der <strong className="text-foreground">Seecontainer Preis</strong> hängt von mehreren Faktoren ab: Größe, Zustand, Containertyp und Transportentfernung spielen alle eine entscheidende Rolle.
              </p>
              <p className="mt-3">
                Grundsätzlich unterscheidet man zwischen drei Zustandsklassen: <em>One Trip Container</em> (nahezu neu, einmalig verwendet), <em>Multi Trip Container</em> (leicht gebraucht, wenige Einsätze) und <em>gebrauchten Seecontainern</em> (mehrfach eingesetzt, voll funktionsfähig). Die <strong className="text-foreground">Seecontainer Kosten</strong> variieren zwischen diesen Klassen um 30–50 %.
              </p>
              <p className="mt-3">
                Als Richtwert: Ein gebrauchter <Link to="/20-fuss-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>20 Fuß Container</Link> kostet ab ca. 1.990 â‚¬, ein neuer One Trip Container ab ca. 3.200 â‚¬. Der <strong className="text-foreground">20 Fuß Container Preis</strong> macht ihn zum beliebtesten Modell – er bietet das beste Preis-Leistungsverhältnis für Lager, Baustellen und gewerbliche Anwendungen.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Preisunterschied zwischen neuen und gebrauchten Containern</h2>
              <p>
                Beim Kauf eines Seecontainers stehen Sie vor der grundlegenden Entscheidung: neu oder gebraucht? <strong className="text-foreground">Neue Seecontainer kaufen</strong> bedeutet: keine Roststellen, keine Beulen, maximale Nutzlast und typischerweise eine Herstellergarantie. Der Aufpreis gegenüber gebrauchten Modellen beträgt je nach Größe 500 bis 2.500 â‚¬.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Gebrauchte Seecontainer kaufen</strong> hingegen lohnt sich für die meisten Anwendungsfälle – vor allem wenn der Container als Lager, Werkstatt oder Baubüro genutzt wird. Gebrauchte Container haben zwar äußerliche Spuren, sind aber strukturell einwandfrei und wasserdicht. Die Lebensdauer eines Seecontainers beträgt auch gebraucht noch 10–25 Jahre.
              </p>
              <p className="mt-3">
                Für hochwertige Nutzungen (z.B. Wohnraum, Showroom, Gastronomie) empfehlen wir One Trip oder Multi Trip Container – hier zahlt sich der Aufpreis langfristig aus.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Warum schwanken Containerpreise?</h2>
              <p>
                Containerpreise sind Teil eines globalen Marktes und daher Schwankungen ausgesetzt. Während der COVID-19-Pandemie stiegen die Preise für Seecontainer um bis zu 400 % – ein Extrembeispiel für die Volatilität des Marktes. Heute haben sich die Preise weitgehend normalisiert, liegen aber immer noch über dem Vor-Pandemisniveau.
              </p>
              <p className="mt-3">
                Zu den wichtigsten Preistreibern gehören:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li><strong className="text-foreground">Globale Handelsungleichgewichte:</strong> Länder, die mehr importieren als exportieren, akkumulieren Container – was das lokale Angebot beeinflusst.</li>
                <li><strong className="text-foreground">Rohstoffpreise:</strong> Cortenstahl ist der Hauptrohstoff. Steigende Stahlpreise erhöhen die Herstellungskosten neuer Container direkt.</li>
                <li><strong className="text-foreground">Frachtraten:</strong> Hohe Nachfrage im globalen Seehandel treibt die Containerpreise.</li>
                <li><strong className="text-foreground">Saisonalität:</strong> Im Frühjahr/Sommer ist die Nachfrage höher – Bauprojekte starten, was die Preise leicht anhebt.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Transport- und Lieferkosten in Deutschland</h2>
              <p>
                Beim Kauf eines Seecontainers werden Kaufpreis und <Link to="/container-lieferung" className="font-semibold underline" style={{ color: ORANGE }}>Transportkosten</Link> meist separat ausgewiesen. Die Lieferkosten richten sich nach der Entfernung vom Depot zum Aufstellort und starten ab ca. 250 â‚¬ für kurze Strecken bis 50 km.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border my-4">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }}>
                      {["Entfernung", "20 Fuß Container", "40 Fuß Container"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-heading font-semibold text-white uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Bis 50 km", "250–400 â‚¬", "350–550 â‚¬"],
                      ["50–150 km", "400–650 â‚¬", "550–850 â‚¬"],
                      ["150–300 km", "650–900 â‚¬", "850–1.150 â‚¬"],
                      ["Über 300 km", "Auf Anfrage", "Auf Anfrage"],
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-4 py-3 text-muted-foreground">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Wichtig: Die <Link to="/container-lieferung" className="font-semibold underline" style={{ color: ORANGE }}>Container Lieferung</Link> erfordert einen geeigneten Stellplatz. Für einen Kipper-Tieflader benötigen Sie mindestens 3,5 m Zufahrtsbreite und 20 m gerade Ablauffläche. Engstellen oder Sondergenehmigungen erhöhen die Kosten.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Lohnt sich ein gebrauchter Seecontainer?</h2>
              <p>
                Für die meisten Anwendungsfälle – Lager, Werkstatt, Baubüro – ist ein gebrauchter Seecontainer die wirtschaftlichste Wahl. Die <strong className="text-foreground">Seecontainer Kosten</strong> für gebrauchte Modelle sind 30–50 % niedriger als für neue, während Funktionalität und Lebensdauer kaum eingeschränkt sind.
              </p>
              <p className="mt-3">
                Ein gebrauchter Container ist wasserdicht, sturmsicher und langlebig. Die äußerlichen Gebrauchsspuren (Kratzer, kleine Dellen) beeinflussen weder die strukturelle Integrität noch den Nutzwert. Mit regelmäßiger Wartung – Türdichtungen kontrollieren, Dach auf Roststellen prüfen – hält ein gebrauchter Container problemlos 15–20 Jahre.
              </p>
              <p className="mt-3">
                Benötigen Sie hingegen Repräsentativität (z.B. für ein Showroom-Konzept oder Wohnnutzung), empfehlen wir die Investition in einen One Trip Container. Informieren Sie sich auch über unser Sortiment an <Link to="/kategorien/10ft" className="font-semibold underline" style={{ color: ORANGE }}>10 Fuß Containern</Link>, <Link to="/20-fuss-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>20 Fuß Containern</Link> und <Link to="/40-fuss-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>40 Fuß Containern</Link> sowie Spezialtypen wie <Link to="/open-side-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>Open Side Container</Link> oder <Link to="/double-door-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>Double Door Container</Link>.
              </p>
              <p className="mt-3">
                Vergessen Sie auch nicht, die Kosten für ein <Link to="/container-fundament" className="font-semibold underline" style={{ color: ORANGE }}>Container Fundament</Link> einzuplanen – vier Betonsteine als Unterlage kosten bereits ab 50 â‚¬, ein vollwertiges Streifenfundament ca. 1.500–5.000 â‚¬. Informationen zu den genauen <Link to="/container-masse" className="font-semibold underline" style={{ color: ORANGE }}>Container Maßen</Link> helfen Ihnen dabei, den Aufstellplatz optimal vorzubereiten.
              </p>
            </div>

            {/* Total Cost Example */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-base text-foreground">Beispielrechnung: Gesamtkosten für einen 20 Fuß Container</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Standort: 100 km Entfernung, einfache Zufahrt</p>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Container Kaufpreis (20ft, gebraucht)", value: "1.990 â‚¬" },
                  { label: "Transport (ca. 100 km)", value: "ca. 450 â‚¬" },
                  { label: "Fundament (4 Betonsteine)", value: "ca. 50 â‚¬" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-3.5 text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-heading font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4" style={{ background: `${NAVY}10` }}>
                  <span className="font-heading font-bold text-sm text-foreground">Gesamtkosten (ca.)</span>
                  <span className="font-heading font-bold text-lg" style={{ color: NAVY }}>ca. 2.490 â‚¬</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* â”€â”€ Internal Links â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weiterführende Ratgeber</h2>
          <InternalLinkGrid links={internalLinks} />
        </section>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
            <h2 className="font-heading font-bold text-2xl text-foreground">Häufige Fragen zu Seecontainer Preisen</h2>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })}} />
          <FaqAccordion items={FAQS} />
        </section>

        {/* â”€â”€ Related Articles â”€â”€ */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-6">Verwandte Artikel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {RELATED.map((art, i) => (
              <Link
                key={i}
                to={art.href}
                className="group flex flex-col rounded-2xl border border-border overflow-hidden hover:shadow-md hover:border-orange-200 transition-all bg-card"
              >
                <div className="h-36 overflow-hidden bg-[#fdf8f0] flex items-center justify-center p-4">
                  <img src={art.img} alt={art.title} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="font-heading font-bold text-sm text-foreground group-hover:text-[#1B3A5C] transition-colors mb-1">{art.title}</p>
                  <p className="text-xs text-muted-foreground flex-1">{art.desc}</p>
                  <div className="flex items-center gap-1 mt-3" style={{ color: ORANGE }}>
                    <span className="text-xs font-semibold font-heading">Mehr lesen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContactBanner />
      </div>
    </div>
  );
}

