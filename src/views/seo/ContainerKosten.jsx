"use client";
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, TrendingUp, Package, MapPin, Truck, Star, Wrench, AlertTriangle } from "lucide-react";
import { FaqAccordion, CtaBanner, InternalLinkGrid } from "@/components/seo/SeoPageLayout";
import ContactBanner from "@/components/shared/ContactBanner";
import { useProducts } from "@/hooks/useProducts";
import MediaImage from "@/components/shared/MediaImage";

const BRAND_BLUE = "#46C54B";
const NAVY = "#176B20";

const PRICE_ROWS = [
  {
    sizeKey: "10ft",
    size: "10 Fuß Container",
    length: "3,0 m",
    img: "/images/container-category-10ft.webp",
    href: "/10-fuss-container-kaufen",
  },
  {
    sizeKey: "20ft",
    size: "20 Fuß Container",
    length: "6,06 m",
    img: "/images/container-category-20ft.webp",
    href: "/20-fuss-container-kaufen",
  },
  {
    sizeKey: "40ft",
    size: "40 Fuß Container",
    length: "12,19 m",
    img: "/images/container-category-40ft.webp",
    href: "/40-fuss-container-kaufen",
  },
];

const CONDITION_META = [
  { key: "Neu", label: "Neu / One Trip", desc: "Neue oder nahezu neue Einheit" },
  { key: "Generalüberholt", label: "Generalüberholt", desc: "Geprüft und fachgerecht aufbereitet" },
  { key: "Gebraucht", label: "Gebraucht", desc: "Gebrauchte, funktionsfähige Einheit" },
];

const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

function normalizeSize(value = "") {
  const match = String(value).match(/(10|20|40)/);
  return match ? `${match[1]}ft` : String(value).trim().toLowerCase();
}

function normalizeCondition(value = "") {
  const normalized = String(value).trim().toLowerCase();
  if (normalized === "new" || normalized === "neu") return "Neu";
  if (normalized === "used" || normalized === "gebraucht") return "Gebraucht";
  if (normalized === "refurbished" || normalized === "generalüberholt") return "Generalüberholt";
  return value;
}

function isStandardShippingContainer(product) {
  return ["standard", "high cube"].includes(String(product.container_type || "").trim().toLowerCase());
}

function formatPriceRange(products) {
  const prices = products
    .map((product) => Number(product.price_from))
    .filter((price) => Number.isFinite(price) && price > 0)
    .sort((a, b) => a - b);

  if (!prices.length) return null;
  if (prices[0] === prices[prices.length - 1]) return euro.format(prices[0]);
  return `${euro.format(prices[0])} – ${euro.format(prices[prices.length - 1])}`;
}

const FACTORS = [
  { icon: Package, title: "Containergröße", desc: "10ft, 20ft und 40ft unterscheiden sich erheblich im Preis. Größere Container kosten mehr, bieten aber auch mehr Volumen pro Euro." },
  { icon: Star, title: "Zustand (Neu / Gebraucht)", desc: "One Trip Container (nahezu neu) kosten in der Regel mehr als gebrauchte oder generalüberholte Container." },
  { icon: Wrench, title: "Container-Typ", desc: "Standard-Container sind am günstigsten. Spezialtypen wie High Cube, Kühlcontainer oder Bürocontainer kosten entsprechend mehr." },
  { icon: MapPin, title: "Standort & Verfügbarkeit", desc: "Containerverfügbarkeit variiert regional. Knappe Bestände in Ihrem Bundesland bedeuten höhere Preise als in Hafenstädten." },
  { icon: Truck, title: "Transportkosten", desc: "Die Lieferkosten werden passend zu Entfernung, Containeranzahl, Fahrzeug und Entladeart individuell kalkuliert." },
  { icon: TrendingUp, title: "Marktlage & Saisonalität", desc: "Containerpreise folgen globalen Handelsströmen. Engpässe in der Schifffahrt können die Preise kurzfristig erhöhen." },
];

const FAQS = [
  { q: "Was kostet ein 20 Fuß Container?", a: "Der Preis richtet sich nach Zustand, Bauhöhe, Ausführung und aktueller Verfügbarkeit. Die Preisübersicht auf dieser Seite verwendet dieselben aktuellen Produktpreise wie der Shop. Transport und Entladung werden separat kalkuliert." },
  { q: "Wie viel kostet ein gebrauchter Seecontainer?", a: "Der Preis eines gebrauchten Seecontainers hängt von Größe, Zustand, Alter und regionaler Verfügbarkeit ab. Verbindlich ist der Preis des aktuell gelisteten Shopprodukts beziehungsweise Ihr individuelles Angebot." },
  { q: "Warum ändern sich Containerpreise regelmäßig?", a: "Containerpreise sind stark von globalen Handelsströmen abhängig. Nach COVID-19 stiegen die Preise dramatisch, normalisierten sich aber wieder. Auch saisonale Nachfrage, Wechselkurse und Treibstoffpreise beeinflussen die Kosten." },
  { q: "Sind Transportkosten im Preis enthalten?", a: "Nein. Container-Kaufpreis und Lieferkosten werden separat ausgewiesen. Die Transportkosten richten sich unter anderem nach Lieferort, Anzahl, Fahrzeug, Entladeart und Zugangssituation." },
  { q: "Kann ich einen Container finanzieren?", a: "Ja, für gewerbliche Kunden sind in der Regel Finanzierungsoptionen verfügbar. Sprechen Sie uns direkt an – wir beraten Sie zu individuellen Zahlungslösungen und Ratenzahlungsoptionen." },
];

const RELATED = [
  { href: "/20-fuss-container-kaufen", title: "20 Fuß Container kaufen", desc: "Alles über den meistgekauften Seecontainer", img: "/images/gebrauchte-seecontainer.webp" },
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
  const { products, loading } = useProducts();

  const pricingGrid = useMemo(() => PRICE_ROWS.map((row) => {
    const sizeProducts = products.filter((product) => (
      product.is_available !== false
      && normalizeSize(product.size) === row.sizeKey
      && isStandardShippingContainer(product)
    ));

    const cols = CONDITION_META.map((condition) => {
      const matchingProducts = sizeProducts.filter(
        (product) => normalizeCondition(product.condition) === condition.key
      );
      const types = [...new Set(matchingProducts.map((product) => product.container_type).filter(Boolean))];

      return {
        ...condition,
        products: matchingProducts,
        price: formatPriceRange(matchingProducts),
        typeSummary: types.join(" & "),
      };
    });

    return { ...row, cols };
  }), [products]);

  const exampleProduct = useMemo(() => products
    .filter((product) => (
      product.is_available !== false
      && normalizeSize(product.size) === "20ft"
      && isStandardShippingContainer(product)
      && Number.isFinite(Number(product.price_from))
    ))
    .sort((a, b) => Number(a.price_from) - Number(b.price_from))[0], [products]);

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">

      {/* Hero */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute inset-0">
          <MediaImage
            src="/images/crane-is-hoisting-containers.avif"
            alt="Gestapelte Seecontainer im Hafen"
            className="h-full w-full object-cover"
            width={1600}
            height={900}
            sizes="100vw"
            quality={82}
            priority
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
          <span className="font-mono text-xs tracking-widest uppercase mb-4 block text-white/80">Aktuelle Shoppreise</span>
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-white tracking-tight mb-5 max-w-3xl leading-tight">
            Seecontainer Preise in Deutschland – Aktuelle Kosten für neue und gebrauchte Container
          </h1>
          <p className="text-white/75 text-base leading-relaxed max-w-2xl mb-8">
            Containerpreise variieren je nach Größe, Zustand, Ausführung und Verfügbarkeit. Diese Übersicht übernimmt die aktuellen Nettopreise der verfügbaren Standard- und High-Cube-Produkte direkt aus dem Shop; Transport und Entladung werden individuell kalkuliert.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/angebot"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-semibold text-sm text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: BRAND_BLUE, color: "#0D2A12" }}
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

        {/* Pricing Grid Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "#278A2F" }}>Marktpreisübersicht</span>
            <h2 className="font-heading font-bold text-2xl lg:text-4xl text-foreground tracking-tight mb-3">Container Preise nach Größe & Zustand</h2>
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">Die Werte werden direkt aus den aktuell verfügbaren Standard- und High-Cube-Produkten im Shop übernommen. Alle Preise netto, exklusive Transport.</p>
          </div>

          <div className="space-y-6">
            {pricingGrid.map((row, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ri * 0.1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Row header */}
                <div className="grid md:grid-cols-[minmax(230px,300px)_1fr] items-center border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                  <div className="h-44 md:h-52 overflow-hidden bg-white flex items-center justify-center px-2 py-1 md:px-4">
                    <MediaImage src={row.img} alt={row.size} className="h-full w-full scale-110 object-contain md:scale-125" width={512} height={512} sizes="(max-width: 768px) 42vw, 220px" quality={85} />
                  </div>
                  <div className="px-6 py-6 md:px-8">
                    <Link to={row.href} className="font-heading font-bold text-xl md:text-2xl text-foreground hover:underline">{row.size}</Link>
                    <p className="text-sm text-muted-foreground mt-1">Außenlänge: {row.length}</p>
                    <Link to={`/shop?size=${row.sizeKey}`} className="inline-flex items-center gap-1.5 text-sm font-semibold mt-4" style={{ color: NAVY }}>
                      Alle {row.size.replace(" Container", "")} Angebote ansehen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                {/* Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  {row.cols.map((col, ci) => (
                    <Link
                      key={ci}
                      to={col.price ? `/shop?size=${row.sizeKey}&condition=${encodeURIComponent(col.key)}` : `/shop?size=${row.sizeKey}`}
                      className="p-5 md:p-6 relative min-h-40 transition-colors hover:bg-[#F2FBF3]"
                    >
                      {col.price && (
                        <span
                          className="absolute top-3 right-3 text-[9px] font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: ci === 0 ? NAVY : BRAND_BLUE, color: ci === 0 ? "white" : "#0D2A12" }}
                        >
                          Im Shop
                        </span>
                      )}
                      <p className="font-heading font-semibold text-xs text-muted-foreground uppercase tracking-wide mb-2">{col.label}</p>
                      <p className="font-heading font-bold text-xl text-foreground mb-1" style={{ color: col.price ? NAVY : undefined }}>
                        {loading ? "Preise werden geladen …" : col.price || "Aktuell nicht gelistet"}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {col.price ? `${col.typeSummary} · ${col.products.length} ${col.products.length === 1 ? "Angebot" : "Angebote"}` : col.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-5 flex items-start gap-2 p-4 rounded-xl bg-[#F2FBF3] border border-[#B9DFBC]">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: NAVY }} />
            <p className="text-xs italic leading-relaxed" style={{ color: NAVY }}>
              <strong>Preishinweis:</strong> Gezeigt werden die derzeit im Shop gelisteten Nettopreise. Verfügbarkeit und Preise können sich ändern. Transport, Entladung und 19 % MwSt. werden separat ausgewiesen.
            </p>
          </div>
        </section>

        {/* CTA */}
        <CtaBanner text="Jetzt Preis anfragen – kostenlos & unverbindlich" btnHref="/angebot" />

        {/* Price Factors */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="font-mono text-xs tracking-widest uppercase mb-3 block" style={{ color: "#278A2F" }}>Einflussfaktoren</span>
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
                className="p-5 bg-card border border-border rounded-2xl hover:shadow-md hover:border-blue-200 transition-all"
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

        {/* SEO Content */}
        <section className="mb-16 prose-section">
          <div className="space-y-10 text-sm text-muted-foreground leading-relaxed">

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Was kostet ein Seecontainer?</h2>
              <p>
                Die Frage „Was kostet ein Seecontainer?“ lässt sich nicht pauschal beantworten. Diese Seite gibt Ihnen deshalb einen transparenten Überblick auf Basis der aktuell im Shop gelisteten Produkte. Der <strong className="text-foreground">Seecontainer Preis</strong> hängt von mehreren Faktoren ab: Größe, Zustand, Containertyp und Transportentfernung spielen eine entscheidende Rolle.
              </p>
              <p className="mt-3">
                Im Shop unterscheiden wir zwischen neuen beziehungsweise One-Trip-Containern, generalüberholten Einheiten und gebrauchten Seecontainern. In der Preisübersicht oben werden nur Zustände und Preise angezeigt, für die derzeit ein passendes Standard- oder High-Cube-Produkt verfügbar ist.
              </p>
              <p className="mt-3">
                Beim <Link to="/20-fuss-container-kaufen" className="font-semibold underline" style={{ color: "#278A2F" }}>20 Fuß Container</Link> können Sie den aktuell verfügbaren Preis direkt mit den Angeboten im Shop vergleichen. Dadurch bleibt der <strong className="text-foreground">20 Fuß Container Preis</strong> auf dieser Seite konsistent mit dem tatsächlichen Sortiment.
              </p>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl lg:text-2xl text-foreground mb-4">Preisunterschied zwischen neuen und gebrauchten Containern</h2>
              <p>
                Beim Kauf eines Seecontainers stehen Sie vor der grundlegenden Entscheidung: neu oder gebraucht? <strong className="text-foreground">Neue Seecontainer kaufen</strong> bedeutet in der Regel: geringe Gebrauchsspuren, ein gepflegter Zustand und eine lange verbleibende Nutzungsdauer. Der Preisunterschied zu gebrauchten Modellen hängt von Größe, Ausführung und Verfügbarkeit ab.
              </p>
              <p className="mt-3">
                <strong className="text-foreground">Gebrauchte Seecontainer kaufen</strong> hingegen lohnt sich für die meisten Anwendungsfälle – vor allem wenn der Container als Lager, Werkstatt oder Baubüro genutzt wird. Gebrauchte Container haben zwar äußerliche Spuren, sind aber strukturell einwandfrei und wasserdicht. Die Lebensdauer eines Seecontainers beträgt auch gebraucht noch 10–25 Jahre.
              </p>
              <p className="mt-3">
                Für hochwertige Nutzungen (z.B. Wohnraum, Showroom, Gastronomie) empfehlen wir One Trip oder sorgfältig generalüberholte Container – hier kann sich der bessere Ausgangszustand langfristig auszahlen.
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
                Beim Kauf eines Seecontainers werden Kaufpreis und <Link to="/container-lieferung" className="font-semibold underline" style={{ color: "#278A2F" }}>Transportkosten</Link> separat ausgewiesen. Die Lieferkosten werden individuell anhand von Lieferort, Anzahl der Container, Fahrzeug, gewünschter Entladeart und Zugänglichkeit des Standorts berechnet.
              </p>
              <div className="overflow-x-auto rounded-xl border border-border my-4">
                <table className="w-full text-xs">
                  <thead>
                    <tr style={{ backgroundColor: NAVY }}>
                      {["Kostenfaktor", "Was wird berücksichtigt?", "Preisangabe"].map((h, i) => (
                        <th key={i} className="px-4 py-3 text-left font-heading font-semibold text-white uppercase tracking-wide">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Lieferstrecke", "Entfernung zwischen Depot und Aufstellort", "Individuell"],
                      ["Fahrzeug", "Standard-Lkw, Kippauflieger oder Kranfahrzeug", "Individuell"],
                      ["Entladung", "Selbstentladung oder Abladen mit Kran", "Individuell"],
                      ["Bestellmenge", "Anzahl und Größe der bestellten Container", "Individuell"],
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
                Wichtig: Die <Link to="/container-lieferung" className="font-semibold underline" style={{ color: "#278A2F" }}>Container Lieferung</Link> erfordert einen geeigneten Stellplatz. Für einen Kipper-Tieflader benötigen Sie mindestens 3,5 m Zufahrtsbreite und 20 m gerade Ablauffläche. Engstellen oder Sondergenehmigungen erhöhen die Kosten.
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
                Benötigen Sie hingegen Repräsentativität (z.B. für ein Showroom-Konzept oder Wohnnutzung), empfehlen wir die Investition in einen One Trip Container. Informieren Sie sich auch über unser Sortiment an <Link to="/kategorien/10ft" className="font-semibold underline" style={{ color: "#278A2F" }}>10 Fuß Containern</Link>, <Link to="/20-fuss-container-kaufen" className="font-semibold underline" style={{ color: "#278A2F" }}>20 Fuß Containern</Link> und <Link to="/40-fuss-container-kaufen" className="font-semibold underline" style={{ color: "#278A2F" }}>40 Fuß Containern</Link> sowie Spezialtypen wie <Link to="/open-side-container-kaufen" className="font-semibold underline" style={{ color: "#278A2F" }}>Open Side Container</Link> oder <Link to="/double-door-container-kaufen" className="font-semibold underline" style={{ color: "#278A2F" }}>Double Door Container</Link>.
              </p>
              <p className="mt-3">
                Planen Sie zusätzlich die Vorbereitung eines geeigneten <Link to="/container-fundament" className="font-semibold underline" style={{ color: "#278A2F" }}>Container Fundaments</Link> ein. Der Aufwand hängt von Untergrund, Größe, Nutzung und örtlichen Gegebenheiten ab. Informationen zu den genauen <Link to="/container-masse" className="font-semibold underline" style={{ color: "#278A2F" }}>Container Maßen</Link> helfen Ihnen dabei, den Aufstellplatz passend vorzubereiten.
              </p>
            </div>

            {/* Transparent total-cost example */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div className="px-6 py-4 border-b border-border" style={{ background: `linear-gradient(90deg, ${NAVY}12, transparent)` }}>
                <h3 className="font-heading font-bold text-base text-foreground">So setzt sich der Gesamtpreis zusammen</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Beispiel mit dem aktuell günstigsten verfügbaren 20 Fuß Standard- oder High-Cube-Container</p>
              </div>
              <div className="divide-y divide-border">
                {[
                  {
                    label: exampleProduct?.title || "Container-Kaufpreis (netto)",
                    value: exampleProduct ? euro.format(Number(exampleProduct.price_from)) : "Aktuell nicht gelistet",
                  },
                  {
                    label: "19 % MwSt. auf den Warenwert",
                    value: exampleProduct ? euro.format(Number(exampleProduct.price_from) * 0.19) : "Nach Produktauswahl",
                  },
                  { label: "Transport und Entladung", value: "Individuell kalkuliert" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-3.5 text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-heading font-semibold text-foreground">{item.value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between px-6 py-4" style={{ background: `${NAVY}10` }}>
                  <span className="font-heading font-bold text-sm text-foreground">Gesamtpreis inklusive Lieferung</span>
                  <span className="font-heading font-bold text-base text-right" style={{ color: NAVY }}>Im individuellen Angebot</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Internal Links */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-5">Weiterführende Ratgeber</h2>
          <InternalLinkGrid links={internalLinks} />
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="font-mono text-xs tracking-widest uppercase mb-2 block" style={{ color: "#278A2F" }}>FAQ</span>
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

        {/* Related Articles */}
        <section className="mb-14">
          <h2 className="font-heading font-bold text-xl text-foreground mb-6">Verwandte Artikel</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {RELATED.map((art, i) => (
              <Link
                key={i}
                to={art.href}
                className="group flex flex-col rounded-2xl border border-border overflow-hidden hover:shadow-md hover:border-blue-200 transition-all bg-card"
              >
                <div className="h-36 overflow-hidden bg-[#F2FBF3] flex items-center justify-center p-4">
                  <MediaImage src={art.img} alt={art.title} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" width={1200} height={800} sizes="(max-width: 768px) 100vw, 33vw" quality={80} />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <p className="font-heading font-bold text-sm text-foreground group-hover:text-[#176B20] transition-colors mb-1">{art.title}</p>
                  <p className="text-xs text-muted-foreground flex-1">{art.desc}</p>
                  <div className="flex items-center gap-1 mt-3" style={{ color: "#278A2F" }}>
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

