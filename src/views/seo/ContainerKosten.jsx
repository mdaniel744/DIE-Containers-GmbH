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
    size: "10 FuÃŸ Container",
    length: "3,0 m",
    img: "/images/container-category-10ft.png",
    href: "/10-fuss-container-kaufen",
    cols: [
      { label: "One Trip (Neu)", price: "2.500 â€“ 3.200 â‚¬", desc: "Erstmalig verwendet, wie neu", badge: "Beste QualitÃ¤t" },
      { label: "Multi Trip (Leicht gebraucht)", price: "2.000 â€“ 2.600 â‚¬", desc: "Wenige EinsÃ¤tze, guter Zustand", badge: null },
      { label: "Gebraucht", price: "1.500 â€“ 2.100 â‚¬", desc: "Mehrfach eingesetzt, voll funktionsfÃ¤hig", badge: "GÃ¼nstigste Option" },
    ],
  },
  {
    size: "20 FuÃŸ Container",
    length: "6,06 m",
    img: "/images/container-category-20ft.png",
    href: "/20-fuss-container-kaufen",
    cols: [
      { label: "One Trip (Neu)", price: "3.200 â€“ 4.200 â‚¬", desc: "Direktlieferung aus Produktion", badge: "Bestseller" },
      { label: "Multi Trip (Leicht gebraucht)", price: "2.400 â€“ 3.200 â‚¬", desc: "1â€“3 Seereisen, guter Zustand", badge: null },
      { label: "Gebraucht", price: "1.990 â€“ 2.900 â‚¬", desc: "Meistgekauft, geprÃ¼fte QualitÃ¤t", badge: "Beliebt" },
    ],
  },
  {
    size: "40 FuÃŸ Container",
    length: "12,19 m",
    img: "/images/container-category-40ft.png",
    href: "/40-fuss-container-kaufen",
    cols: [
      { label: "One Trip (Neu)", price: "5.200 â€“ 6.800 â‚¬", desc: "Fabrikneu, max. Nutzlast", badge: null },
      { label: "Multi Trip (Leicht gebraucht)", price: "3.800 â€“ 5.000 â‚¬", desc: "Sehr guter Zustand", badge: null },
      { label: "Gebraucht", price: "2.990 â€“ 4.200 â‚¬", desc: "BewÃ¤hrt & wetterfest", badge: "GÃ¼nstigste Option" },
    ],
  },
];

/* â”€â”€ Price Factors â”€â”€ */
const FACTORS = [
  { icon: Package, title: "ContainergrÃ¶ÃŸe", desc: "10ft, 20ft und 40ft unterscheiden sich erheblich im Preis. GrÃ¶ÃŸere Container kosten mehr, bieten aber auch mehr Volumen pro Euro." },
  { icon: Star, title: "Zustand (Neu / Gebraucht)", desc: "One Trip Container (nahezu neu) kosten mehr als gebrauchte Container. Der Preisunterschied betrÃ¤gt typisch 30â€“50 %." },
  { icon: Wrench, title: "Container-Typ", desc: "Standard-Container sind am gÃ¼nstigsten. Spezialtypen wie High Cube, KÃ¼hlcontainer oder BÃ¼rocontainer kosten entsprechend mehr." },
  { icon: MapPin, title: "Standort & VerfÃ¼gbarkeit", desc: "ContainerverfÃ¼gbarkeit variiert regional. Knappe BestÃ¤nde in Ihrem Bundesland bedeuten hÃ¶here Preise als in HafenstÃ¤dten." },
  { icon: Truck, title: "Transportkosten", desc: "Lieferkosten starten ab ca. 250 â‚¬ und steigen mit der Entfernung. Engstellen oder besondere Zufahrten erhÃ¶hen den Preis." },
  { icon: TrendingUp, title: "Marktlage & SaisonalitÃ¤t", desc: "Containerpreise folgen globalen HandelsstrÃ¶men. EngpÃ¤sse in der Schifffahrt kÃ¶nnen die Preise kurzfristig erhÃ¶hen." },
];

/* â”€â”€ FAQ â”€â”€ */
const FAQS = [
  { q: "Was kostet ein 20 FuÃŸ Container?", a: "Ein gebrauchter 20 FuÃŸ Seecontainer kostet ab ca. 1.990 â‚¬. Ein One Trip Container (nahezu neu) beginnt bei ca. 3.200 â‚¬. Hinzu kommen Transportkosten von ca. 300â€“600 â‚¬ je nach Entfernung. Der Gesamtpreis liegt somit meist zwischen 2.300 â‚¬ und 4.800 â‚¬." },
  { q: "Wie viel kostet ein gebrauchter Seecontainer?", a: "Gebrauchte Seecontainer beginnen bei 1.500 â‚¬ fÃ¼r 10ft-Modelle, ca. 1.990 â‚¬ fÃ¼r 20ft und ab 2.990 â‚¬ fÃ¼r 40ft Container. Entscheidend fÃ¼r den Preis sind Zustand, Alter und regionale VerfÃ¼gbarkeit." },
  { q: "Warum Ã¤ndern sich Containerpreise regelmÃ¤ÃŸig?", a: "Containerpreise sind stark von globalen HandelsstrÃ¶men abhÃ¤ngig. Nach COVID-19 stiegen die Preise dramatisch, normalisierten sich aber wieder. Auch saisonale Nachfrage, Wechselkurse und Treibstoffpreise beeinflussen die Kosten." },
  { q: "Sind Transportkosten im Preis enthalten?", a: "Nein, in der Regel werden Container-Kaufpreis und Lieferkosten separat ausgewiesen. Die Transportkosten richten sich nach Entfernung und Zugangssituation und starten ab ca. 250 â‚¬ fÃ¼r kurze Strecken." },
  { q: "Kann ich einen Container finanzieren?", a: "Ja, fÃ¼r gewerbliche Kunden sind in der Regel Finanzierungsoptionen verfÃ¼gbar. Sprechen Sie uns direkt an â€“ wir beraten Sie zu individuellen ZahlungslÃ¶sungen und Ratenzahlungsoptionen." },
];

/* â”€â”€ Related Articles â”€â”€ */
const RELATED = [
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container kaufen", desc: "Alles Ã¼ber den meistgekauften Seecontainer", img: "/images/gebrauchte-seecontainer.png" },
  { href: "/container-lieferung", title: "Container Lieferung", desc: "Transportkosten & Logistik in Deutschland", img: "/images/wohncontainer-transport.jpg" },
  { href: "/container-fundament", title: "Container Fundament", desc: "Kosten & Arten fÃ¼r das perfekte Fundament", img: "/images/die-container-yard.jpeg" },
];

const internalLinks = [
  { href: "/10-fuss-container-kaufen", title: "10 FuÃŸ Container kaufen" },
  { href: "/20-fuss-container-kaufen", title: "20 FuÃŸ Container kaufen" },
  { href: "/40-fuss-container-kaufen", title: "40 FuÃŸ Container kaufen" },
  { href: "/open-side-container-kaufen", title: "Open Side Container kaufen" },
  { href: "/double-door-container-kaufen", title: "Double Door Container kaufen" },
  { href: "/container-lieferung", title: "Container Lieferung" },
  { href: "/container-fundament", title: "Container Fundament" },
  { href: "/container-masse", title: "Container MaÃŸe" },
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
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block" style={{ color: ORANGE }}>PreisÃ¼bersicht 2025</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Seecontainer Preise in Deutschland â€“ Aktuelle Kosten fÃ¼r neue und gebrauchte Container
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Containerpreise variieren je nach GrÃ¶ÃŸe, Zustand, regionaler VerfÃ¼gbarkeit und Transportkosten. Diese PreisÃ¼bersicht gibt Ihnen einen realistischen Ãœberblick Ã¼ber aktuelle Marktpreise fÃ¼r Seecontainer in Deutschland â€“ damit Sie sicher kalkulieren und vergleichen kÃ¶nnen.
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
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: ORANGE }}>MarktpreisÃ¼bersicht</span>
            <h2 className="font-heading font-bold text-2xl lg:text-4xl text-foreground tracking-tight mb-3">Container Preise nach GrÃ¶ÃŸe & Zustand</h2>
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
                    <p className="text-xs text-muted-foreground">AuÃŸenlÃ¤nge: {row.length}</p>
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
              <strong>Preishinweis:</strong> Die angegebenen Preise dienen nur zur Orientierung. Die endgÃ¼ltigen Kosten hÃ¤ngen von VerfÃ¼gbarkeit, Lieferort und aktuellen Marktbedingungen ab. Fordern Sie ein individuelles Angebot fÃ¼r verbindliche Preise an.
            </p>
          </div>
        </section>

        {/* â”€â”€ CTA â”€â”€ */}
        <CtaBanner text="Jetzt Preis anfragen â€“ kostenlos & unverbindlich" btnHref="/angebot" />

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
                Die Frage â€žWas kostet ein Seecontainer?" lÃ¤sst sich nicht pauschal beantworten â€“ aber dieser Ratgeber gibt Ihnen einen konkreten Ãœberblick Ã¼ber die aktuellen Marktpreise in Deutschland. Der <strong className="text-foreground">Seecontainer Preis</strong> hÃ¤ngt von mehreren Faktoren ab: GrÃ¶ÃŸe, Zustand, Containertyp und Transportentfernung spielen alle eine entscheidende Rolle.
              </p>
              <p className="mt-3">
                GrundsÃ¤tzlich unterscheidet man zwischen drei Zustandsklassen: <em>One Trip Container</em> (nahezu neu, einmalig verwendet), <em>Multi Trip Container</em> (leicht gebraucht, wenige EinsÃ¤tze) und <em>gebrauchten Seecontainern</em> (mehrfach eingesetzt, voll funktionsfÃ¤hig). Die <strong className="text-foreground">Seecontainer Kosten</strong> variieren zwischen diesen Klassen um 30â€“50 %.
              </p>
              <p className="mt-3">
                Als Richtwert: Ein gebrauchter <Link to="/20-fuss-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>20 FuÃŸ Container</Link> kostet ab ca. 1.990 â‚¬, ein neuer One Trip Container ab ca. 3.200 â‚¬. Der <strong className="text-foreground">20 FuÃŸ Container Preis</strong> macht ihn zum beliebtesten Modell â€“ er bietet das beste Preis-LeistungsverhÃ¤ltnis fÃ¼r Lager, Baustellen und gewerbliche Anwendungen.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Preisunterschied zwischen neuen und gebrauchten Containern</h2>
              <p>
                Beim Kauf eines Seecontainers stehen Sie vor der grundlegenden Entscheidung: neu oder gebraucht? <strong className="text-foreground">Neue Seecontainer kaufen</strong> bedeutet: keine Roststellen, keine Beulen, maximale Nutzlast und typischerweise eine Herstellergarantie. Der Aufpreis gegenÃ¼ber gebrauchten Modellen betrÃ¤gt je nach GrÃ¶ÃŸe 500 bis 2.500 â‚¬.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Gebrauchte Seecontainer kaufen</strong> hingegen lohnt sich fÃ¼r die meisten AnwendungsfÃ¤lle â€“ vor allem wenn der Container als Lager, Werkstatt oder BaubÃ¼ro genutzt wird. Gebrauchte Container haben zwar Ã¤uÃŸerliche Spuren, sind aber strukturell einwandfrei und wasserdicht. Die Lebensdauer eines Seecontainers betrÃ¤gt auch gebraucht noch 10â€“25 Jahre.
              </p>
              <p className="mt-3">
                FÃ¼r hochwertige Nutzungen (z.B. Wohnraum, Showroom, Gastronomie) empfehlen wir One Trip oder Multi Trip Container â€“ hier zahlt sich der Aufpreis langfristig aus.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Warum schwanken Containerpreise?</h2>
              <p>
                Containerpreise sind Teil eines globalen Marktes und daher Schwankungen ausgesetzt. WÃ¤hrend der COVID-19-Pandemie stiegen die Preise fÃ¼r Seecontainer um bis zu 400 % â€“ ein Extrembeispiel fÃ¼r die VolatilitÃ¤t des Marktes. Heute haben sich die Preise weitgehend normalisiert, liegen aber immer noch Ã¼ber dem Vor-Pandemisniveau.
              </p>
              <p className="mt-3">
                Zu den wichtigsten Preistreibern gehÃ¶ren:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li><strong className="text-foreground">Globale Handelsungleichgewichte:</strong> LÃ¤nder, die mehr importieren als exportieren, akkumulieren Container â€“ was das lokale Angebot beeinflusst.</li>
                <li><strong className="text-foreground">Rohstoffpreise:</strong> Cortenstahl ist der Hauptrohstoff. Steigende Stahlpreise erhÃ¶hen die Herstellungskosten neuer Container direkt.</li>
                <li><strong className="text-foreground">Frachtraten:</strong> Hohe Nachfrage im globalen Seehandel treibt die Containerpreise.</li>
                <li><strong className="text-foreground">SaisonalitÃ¤t:</strong> Im FrÃ¼hjahr/Sommer ist die Nachfrage hÃ¶her â€“ Bauprojekte starten, was die Preise leicht anhebt.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Transport- und Lieferkosten in Deutschland</h2>
              <p>
                Beim Kauf eines Seecontainers werden Kaufpreis und <Link to="/container-lieferung" className="font-semibold underline" style={{ color: ORANGE }}>Transportkosten</Link> meist separat ausgewiesen. Die Lieferkosten richten sich nach der Entfernung vom Depot zum Aufstellort und starten ab ca. 250 â‚¬ fÃ¼r kurze Strecken bis 50 km.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border my-4">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }}>
                      {["Entfernung", "20 FuÃŸ Container", "40 FuÃŸ Container"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-heading font-semibold text-white uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Bis 50 km", "250â€“400 â‚¬", "350â€“550 â‚¬"],
                      ["50â€“150 km", "400â€“650 â‚¬", "550â€“850 â‚¬"],
                      ["150â€“300 km", "650â€“900 â‚¬", "850â€“1.150 â‚¬"],
                      ["Ãœber 300 km", "Auf Anfrage", "Auf Anfrage"],
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
                Wichtig: Die <Link to="/container-lieferung" className="font-semibold underline" style={{ color: ORANGE }}>Container Lieferung</Link> erfordert einen geeigneten Stellplatz. FÃ¼r einen Kipper-Tieflader benÃ¶tigen Sie mindestens 3,5 m Zufahrtsbreite und 20 m gerade AblaufflÃ¤che. Engstellen oder Sondergenehmigungen erhÃ¶hen die Kosten.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Lohnt sich ein gebrauchter Seecontainer?</h2>
              <p>
                FÃ¼r die meisten AnwendungsfÃ¤lle â€“ Lager, Werkstatt, BaubÃ¼ro â€“ ist ein gebrauchter Seecontainer die wirtschaftlichste Wahl. Die <strong className="text-foreground">Seecontainer Kosten</strong> fÃ¼r gebrauchte Modelle sind 30â€“50 % niedriger als fÃ¼r neue, wÃ¤hrend FunktionalitÃ¤t und Lebensdauer kaum eingeschrÃ¤nkt sind.
              </p>
              <p className="mt-3">
                Ein gebrauchter Container ist wasserdicht, sturmsicher und langlebig. Die Ã¤uÃŸerlichen Gebrauchsspuren (Kratzer, kleine Dellen) beeinflussen weder die strukturelle IntegritÃ¤t noch den Nutzwert. Mit regelmÃ¤ÃŸiger Wartung â€“ TÃ¼rdichtungen kontrollieren, Dach auf Roststellen prÃ¼fen â€“ hÃ¤lt ein gebrauchter Container problemlos 15â€“20 Jahre.
              </p>
              <p className="mt-3">
                BenÃ¶tigen Sie hingegen ReprÃ¤sentativitÃ¤t (z.B. fÃ¼r ein Showroom-Konzept oder Wohnnutzung), empfehlen wir die Investition in einen One Trip Container. Informieren Sie sich auch Ã¼ber unser Sortiment an <Link to="/kategorien/10ft" className="font-semibold underline" style={{ color: ORANGE }}>10 FuÃŸ Containern</Link>, <Link to="/20-fuss-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>20 FuÃŸ Containern</Link> und <Link to="/40-fuss-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>40 FuÃŸ Containern</Link> sowie Spezialtypen wie <Link to="/open-side-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>Open Side Container</Link> oder <Link to="/double-door-container-kaufen" className="font-semibold underline" style={{ color: ORANGE }}>Double Door Container</Link>.
              </p>
              <p className="mt-3">
                Vergessen Sie auch nicht, die Kosten fÃ¼r ein <Link to="/container-fundament" className="font-semibold underline" style={{ color: ORANGE }}>Container Fundament</Link> einzuplanen â€“ vier Betonsteine als Unterlage kosten bereits ab 50 â‚¬, ein vollwertiges Streifenfundament ca. 1.500â€“5.000 â‚¬. Informationen zu den genauen <Link to="/container-masse" className="font-semibold underline" style={{ color: ORANGE }}>Container MaÃŸen</Link> helfen Ihnen dabei, den Aufstellplatz optimal vorzubereiten.
              </p>
            </div>

            {/* Total Cost Example */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-base text-foreground">Beispielrechnung: Gesamtkosten fÃ¼r einen 20 FuÃŸ Container</h3>
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
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">WeiterfÃ¼hrende Ratgeber</h2>
          <InternalLinkGrid links={internalLinks} />
        </section>

        {/* â”€â”€ FAQ â”€â”€ */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: ORANGE }}>FAQ</span>
            <h2 className="font-heading font-bold text-2xl text-foreground">HÃ¤ufige Fragen zu Seecontainer Preisen</h2>
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

