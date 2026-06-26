"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "@/hooks/useProducts";
import ProductGallery from "@/components/product/ProductGallery";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  FileText, Minus, Plus, ArrowLeft, Truck, ShieldCheck,
  Ruler, Weight, Package, Layers, DoorOpen, Award,
  CheckCircle2, Box, Maximize2, Zap, Thermometer, Wind,
  Lock, BarChart3, Clock, MapPin, PhoneCall, Star,
  Wrench, Shield, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import ContactBanner from "@/components/shared/ContactBanner";

const ORANGE = "#F28C28";

function AttributeItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5 bg-muted/50 rounded-lg p-3">
      <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(242,140,40,0.12)" }}>
        <Icon className="w-3.5 h-3.5" style={{ color: ORANGE }} />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{label}</p>
        <p className="font-heading font-semibold text-sm text-foreground leading-tight mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function DimensionBadge({ label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-primary/5 border border-primary/10 rounded-xl p-4 text-center">
      <p className="font-heading font-bold text-lg text-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

export default function ProductDetail() {
  const { slug } = useParams();
  const { product, loading } = useProduct(slug);
  const [quantity, setQuantity] = useState(1);

  if (loading) {
    return (
      <div className="pt-32 pb-20 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-border border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-heading font-bold text-2xl mb-4">Produkt nicht gefunden</h1>
        <Link to="/shop">
          <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> Zurück zum Shop</Button>
        </Link>
      </div>
    );
  }

  const images = [product.image_url, ...(product.gallery_urls || [])];

  const typeSpecific = {
    Kühlcontainer: "Das integrierte Kühlaggregat ermöglicht präzise Temperaturregulierung von -25 °C bis +25 °C. Ideal für lebensmittelverarbeitende Betriebe, Pharmaunternehmen sowie die Lagerung temperaturempfindlicher Güter. Die innere Edelstahlverkleidung ist leicht zu reinigen und erfüllt alle Hygieneanforderungen.",
    Bürocontainer: "Die Innenausstattung umfasst eine vollständige Elektroinstallation mit Sicherungskasten, LED-Beleuchtung und Steckdosen sowie Doppelglasscheiben mit integriertem Sonnenschutz. Der PVC-Boden auf Vollwärmeisolierung sorgt ganzjährig für angenehme Arbeitstemperaturen – kein zusätzliches Heizsystem erforderlich.",
    "Open Side": "Die vollständig öffenbare Seitenwand mit CSC-zertifizierten Türflügeln ermöglicht das Be- und Entladen per Gabelstapler oder Förderband – ohne Wendemanöver, direkt von der Seite. Besonders gefragt im Einzelhandel, auf Messen und in der Logistik.",
  }[product.container_type] || "";

  const seoDescription = [
    product.description,

    `Der ${product.title} von CSAV Container ist aus hochwertigem Corten-Stahl (wetterfester Baustahl nach EN 10025-5) gefertigt. Die natürliche Oxidationsschutzschicht des Corten-Stahls macht aufwendige Oberflächenbehandlungen überflüssig und sorgt für eine außergewöhnlich lange Lebensdauer – auch unter extremen Witterungsbedingungen. Alle Schweißnähte sind nach ISO 3834 wasserdicht ausgeführt; der ${product.floor} garantiert maximale Belastbarkeit und Widerstandsfähigkeit gegen mechanischen Abrieb.`,

    typeSpecific,

    `Einsatzbereiche: Der ${product.size} ${product.container_type}-Container eignet sich hervorragend als Lager-, Werkzeug- und Materialcontainer auf Baustellen, als Außenlager für Industrie und Handel, als sicherer Archiv- und Aktenschrank oder als Basis für individuelle Containerumbauten (Wohncontainer, Pop-up-Stores, Sanitärcontainer). Dank seiner standardisierten ISO-Außenmaße ist er stapelbar und problemlos mit Kran, Reach-Stacker oder Gabelstapler handhabbar.`,

    `Qualitätssicherung & Zertifizierung: Vor der Auslieferung durchläuft jeder Container eine mehrstufige Qualitätsprüfung durch unser zertifiziertes Serviceteam: Sichtprüfung aller Strukturbauteile, Wassereinbringtest auf Dichheit, Messung der Bodentraglast sowie Funktionsprüfung aller Türverriegelungen. ${product.csc_certified ? "Das beigelegte CSC-Zertifikat (Convention for Safe Containers) bestätigt die Verwendbarkeit im internationalen Seefrachtverkehr." : ""} Auf Wunsch kann ein TÜV-Gutachten als Zusatzleistung beauftragt werden.`,

    `Lieferung & Service: CSAV Container liefert deutschlandweit mit eigenem Kranfahrzeug innerhalb von 72 Stunden direkt an Ihren Wunschort – inklusive fachmännischer Abladeberatung. Unser Team berät Sie kostenlos zu Untergrundbeschaffenheit, Aufstellgenehmigungen und individuellen Umbauwünschen. Fordern Sie jetzt Ihr unverbindliches Angebot an.`,
  ].filter(Boolean);

  const metaDescription = product.short_description || `${product.title} kaufen – wind- und wasserdichter ISO-Stahlcontainer von CSAV Container. Ab ${product.price_from?.toLocaleString("de-DE")} €, deutschlandweite Lieferung.`;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": metaDescription,
    "image": product.image_url,
    "brand": { "@type": "Brand", "name": "CSAV Container" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "EUR",
      "price": product.price_from,
      "availability": product.is_available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      "seller": { "@type": "Organization", "name": "CSAV Container" }
    }
  };

  return (
    <>
      <Helmet>
        <title>{product.title} kaufen – Ab {product.price_from?.toLocaleString("de-DE")} € | CSAV Container</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://csavcontainer.de/produkt/${product.slug || product.id}`} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>
    <div className="pt-20 lg:pt-24 pb-28 lg:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductGallery images={images} title={product.title} />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            {/* Badges + title */}
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {product.badge && (
                  <Badge className="text-xs" style={{ backgroundColor: "rgba(242,140,40,0.15)", color: ORANGE, borderColor: "rgba(242,140,40,0.3)" }}>
                    {product.badge}
                  </Badge>
                )}
                {product.is_available && (
                  <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20 text-xs">
                    ✓ Auf Lager
                  </Badge>
                )}
              </div>
              <h1 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">{product.title}</h1>
              <p className="text-muted-foreground mt-2 leading-relaxed">{product.short_description}</p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-border py-4">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-3xl text-foreground">
                  Ab {product.price_from?.toLocaleString("de-DE")} €
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">zzgl. Transportkosten · Preise netto · inkl. Beratung</p>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-xs text-muted-foreground font-medium mb-2 block">Anzahl Container</label>
              <div className="inline-flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2.5 hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 font-heading font-semibold text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2.5 hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA — big quote button only */}
            <Link to={`/angebot?product=${product.id}&qty=${quantity}`} className="block">
              <Button
                size="lg"
                className="w-full font-heading font-bold text-base h-14 text-[#1a1a1a] shadow-lg hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                <FileText className="w-5 h-5 mr-2" />
                {quantity > 1 ? `${quantity} × Container – Angebot anfordern` : "Unverbindliches Angebot anfordern"}
              </Button>
            </Link>

            {/* Dimensions quick-view */}
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">Außenmaße</p>
              <div className="grid grid-cols-3 gap-2">
                <DimensionBadge label="Länge" value={product.outer_length} />
                <DimensionBadge label="Breite" value={product.outer_width} />
                <DimensionBadge label="Höhe" value={product.outer_height} />
              </div>
            </div>

            {/* Key attributes with icons — 2-column grid */}
            <div className="grid grid-cols-2 gap-2">
              <AttributeItem icon={Box} label="Zustand" value={product.condition} />
              <AttributeItem icon={Layers} label="Typ" value={product.container_type} />
              <AttributeItem icon={Maximize2} label="Größe" value={product.size} />
              <AttributeItem icon={Weight} label="Eigengewicht" value={product.weight} />
              <AttributeItem icon={Package} label="Nutzlast" value={product.payload} />
              <AttributeItem icon={Ruler} label="Material" value={product.material} />
              <div className="col-span-2">
                <AttributeItem icon={DoorOpen} label="Türen" value={product.doors} />
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {product.csc_certified && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  CSC-Zertifiziert
                </div>
              )}
              {product.weather_resistant && (
                <div className="flex items-center gap-1.5 text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Wasser- & Winddicht
                </div>
              )}
              <div className="flex items-center gap-1.5 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1.5">
                <Award className="w-3.5 h-3.5" />
                ISO-Norm konform
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" /> Deutschlandweite Lieferung</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> Qualitätsgeprüft</span>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto gap-0 flex-wrap">
              {[
                { value: "description", label: "Beschreibung" },
                { value: "specs", label: "Technische Daten" },
                { value: "features", label: "Merkmale" },
                { value: "delivery", label: "Versand & Lieferung" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#F28C28] data-[state=active]:text-foreground data-[state=active]:shadow-none px-5 py-3.5 font-heading text-sm font-medium text-muted-foreground transition-colors"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* DESCRIPTION TAB */}
            <TabsContent value="description" className="mt-10">
              <div className="max-w-4xl">
                {/* Short punchy intro */}
                <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                  {product.description || `${product.title} – wind- und wasserdichter ISO-Norm-Stahlcontainer aus wetterfestem Corten-Stahl. Sofort einsatzbereit, stapelbar und individuell umbaubar.`}
                </p>

                {/* Visual dimension strip — inspired by mtcontainer.com */}
                {(product.outer_length || product.outer_height || product.outer_width) && (
                  <div className="rounded-2xl mb-8 overflow-hidden" style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
                      {[
                        { icon: Ruler, label: "Länge", value: product.outer_length },
                        { icon: Maximize2, label: "Breite", value: product.outer_width },
                        { icon: BarChart3, label: "Höhe", value: product.outer_height },
                        { icon: Package, label: "Nutzlast", value: product.payload },
                      ].filter(d => d.value).map(({ icon: Ic, label, value }, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 py-6 px-4 text-center">
                          <Ic className="w-7 h-7 text-white/60" />
                          <span className="font-heading font-bold text-white text-lg leading-none">{value}</span>
                          <span className="text-[11px] text-white/50 uppercase tracking-wider">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key facts grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { label: "Zustand", value: product.condition },
                    { label: "Containertyp", value: product.container_type },
                    { label: "Größe", value: product.size },
                    { label: "Material", value: product.material },
                    { label: "Boden", value: product.floor },
                    { label: "Türen", value: product.doors },
                  ].filter(f => f.value).map((f, i) => (
                    <div key={i} className="bg-muted/40 border border-border rounded-xl px-4 py-3">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{f.label}</p>
                      <p className="font-heading font-semibold text-sm text-foreground">{f.value}</p>
                    </div>
                  ))}
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {product.csc_certified && (
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" /> CSC-Zertifiziert
                    </span>
                  )}
                  {product.weather_resistant && (
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-3 py-1.5 text-xs font-medium">
                      <Wind className="w-3.5 h-3.5" /> Wasser- & Winddicht
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-full px-3 py-1.5 text-xs font-medium">
                    <Award className="w-3.5 h-3.5" /> ISO-Norm konform
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-200 text-purple-700 rounded-full px-3 py-1.5 text-xs font-medium">
                    <Star className="w-3.5 h-3.5" /> Qualitätsgeprüft
                  </span>
                </div>
              </div>
            </TabsContent>

            {/* SPECS TAB */}
            <TabsContent value="specs" className="mt-10">
              <div className="max-w-3xl space-y-8">
                {/* Measurements */}
                <div>
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3">Maße</h3>
                  <div className="rounded-xl border border-border overflow-hidden">
                    {[
                      { label: "Außenlänge", value: product.outer_length },
                      { label: "Außenbreite", value: product.outer_width },
                      { label: "Außenhöhe", value: product.outer_height },
                    ].filter(r => r.value).map((row, i, arr) => (
                      <div key={i} className={`flex items-center justify-between px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
                        <span className="text-sm text-muted-foreground">{row.label}</span>
                        <span className="font-heading font-semibold text-sm text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Weight & Capacity */}
                <div>
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3">Gewicht & Kapazität</h3>
                  <div className="rounded-xl border border-border overflow-hidden">
                    {[
                      { label: "Eigengewicht", value: product.weight },
                      { label: "Nutzlast", value: product.payload },
                    ].filter(r => r.value).map((row, i, arr) => (
                      <div key={i} className={`flex items-center justify-between px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
                        <span className="text-sm text-muted-foreground">{row.label}</span>
                        <span className="font-heading font-semibold text-sm text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Construction */}
                <div>
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-muted-foreground mb-3">Konstruktion</h3>
                  <div className="rounded-xl border border-border overflow-hidden">
                    {[
                      { label: "Material", value: product.material },
                      { label: "Boden", value: product.floor },
                      { label: "Türen", value: product.doors },
                      { label: "Containertyp", value: product.container_type },
                      { label: "Größe", value: product.size },
                      { label: "Zustand", value: product.condition },
                    ].filter(r => r.value).map((row, i, arr) => (
                      <div key={i} className={`flex items-center justify-between px-5 py-3.5 ${i < arr.length - 1 ? "border-b border-border" : ""} ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}>
                        <span className="text-sm text-muted-foreground">{row.label}</span>
                        <span className="font-heading font-semibold text-sm text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">* Außenmaße. Innenmaße variieren je nach Wandstärke und Innenverkleidung.</p>
              </div>
            </TabsContent>

            {/* FEATURES TAB */}
            <TabsContent value="features" className="mt-10">
              <div className="max-w-3xl">
                {/* Icon feature tiles — compact, no long text */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: Wind, label: "Wind- & Wasserdicht" },
                    { icon: Shield, label: "Corten-Stahl (EN 10025-5)" },
                    { icon: Lock, label: "Hochsicherheits-Schloss" },
                    { icon: BarChart3, label: "Stapelbar bis 8×" },
                    { icon: Zap, label: "Sofort einsatzbereit" },
                    { icon: Wrench, label: "Umbaubar & lackierbar" },
                    { icon: Thermometer, label: "Extrem witterungsbeständig" },
                    { icon: CheckCircle2, label: "Vor Auslieferung geprüft" },
                    { icon: PhoneCall, label: "Kostenlose Beratung" },
                  ].map(({ icon: Ic, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-2.5 p-5 bg-card border border-border rounded-xl text-center hover:border-orange-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(242,140,40,0.12)" }}>
                        <Ic className="w-5 h-5" style={{ color: ORANGE }} />
                      </div>
                      <p className="font-heading font-semibold text-xs text-foreground leading-snug">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Optional customisations */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-muted/40 px-5 py-3 border-b border-border">
                    <p className="font-heading font-semibold text-sm text-foreground">Optionale Erweiterungen auf Anfrage</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                    {[
                      "Fenster- & Türeinbau",
                      "Elektroinstallation",
                      "Wärmedämmung",
                      "Auffahrrampe",
                      "PVC-Lamellenvorhang",
                      "Innen- & Außenlackierung",
                      "Containerabstützungen",
                      "Lüftungssystem",
                    ].map((item, i, arr) => (
                      <div key={i} className={`flex items-center gap-2.5 px-5 py-3 text-sm text-muted-foreground ${i < arr.length - 1 ? "border-b border-border sm:border-b-0 sm:[&:nth-child(odd)]:border-b sm:[&:nth-child(even)]:border-b" : ""} ${i % 2 === 0 ? "bg-card" : "bg-muted/10"} border-b border-border last:border-b-0`}>
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: ORANGE }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* DELIVERY TAB */}
            <TabsContent value="delivery" className="mt-10">
              <div className="max-w-3xl">
                {/* Key delivery stats */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: Clock, label: "Lieferzeit", value: "3–7 Werktage", sub: "Express ab 72 h" },
                    { icon: MapPin, label: "Liefergebiet", value: "Deutschland", sub: "Österreich auf Anfrage" },
                    { icon: ShieldCheck, label: "Transport", value: "Vollversichert", sub: "Kranwagen-Lieferung" },
                  ].map(({ icon: Ic, label, value, sub }, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 p-4 border border-border rounded-xl bg-card text-center">
                      <Ic className="w-5 h-5 mb-1" style={{ color: ORANGE }} />
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
                      <p className="font-heading font-bold text-sm text-foreground">{value}</p>
                      <p className="text-[10px] text-muted-foreground">{sub}</p>
                    </div>
                  ))}
                </div>

                {/* Steps – compact list */}
                <div className="rounded-xl border border-border overflow-hidden mb-6">
                  {[
                    { n: "01", title: "Angebot anfordern", desc: "Kostenlos & unverbindlich – Angebot inkl. Transportkosten innerhalb 24 h." },
                    { n: "02", title: "Terminvereinbarung", desc: "Unser Team klärt Zufahrt, Untergrund und Wunschtermin mit Ihnen." },
                    { n: "03", title: "Lieferung per Kranwagen", desc: "Direktlieferung an Ihren Aufstellort, fachmännisch abgesetzt." },
                    { n: "04", title: "Abnahme vor Ort", desc: "Gemeinsame Prüfung bei Übergabe – kein Aufwand für Sie." },
                  ].map(({ n, title, desc }, i, arr) => (
                    <div key={i} className={`flex items-start gap-4 px-5 py-4 bg-card ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="font-mono text-xs font-bold shrink-0 mt-0.5" style={{ color: ORANGE }}>{n}</span>
                      <div>
                        <p className="font-heading font-semibold text-sm text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ground note */}
                <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800">
                  <Award className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
                  <p><strong>Untergrund:</strong> Ebener, fester Untergrund (Pflaster, Asphalt oder Schotter) erforderlich. Sondersituationen auf Anfrage.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <ContactBanner />
      </div>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-t border-border lg:hidden z-40">
        <Link to={`/angebot?product=${product.id}&qty=${quantity}`}>
          <Button
            className="w-full font-heading font-semibold h-12 text-[#1a1a1a]"
            style={{ backgroundColor: ORANGE }}
          >
            <FileText className="w-4 h-4 mr-2" />
            Angebot anfordern – Ab {product.price_from?.toLocaleString("de-DE")} €
          </Button>
        </Link>
      </div>
    </div>
    </>
  );
}