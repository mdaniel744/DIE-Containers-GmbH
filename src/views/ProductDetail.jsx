"use client";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { useTranslatedProduct } from "@/hooks/useTranslatedProduct";
import ProductGallery from "@/components/product/ProductGallery";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RichTextContent from "@/components/shared/RichTextContent";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCart, Minus, Plus, ArrowLeft, Truck, ShieldCheck,
  Ruler, Weight, Package, Layers, DoorOpen, Award,
  CheckCircle2, Box, Maximize2, Zap, Thermometer, Wind,
  Lock, BarChart3, Clock, MapPin, Mail, Star,
  Wrench, Shield, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import ContactBanner from "@/components/shared/ContactBanner";
import { useSection } from "@/lib/i18n";
import { getContainerHeightVariant, normalizeQuoteContainerSize } from "@/lib/quoteContainer";
import { useLocale } from "@/hooks/useLocale";
import { useAttributeValueTranslations } from "@/hooks/useAttributeValueTranslations";
import { useCart } from "@/lib/CartContext";

const BRAND_BLUE = "#46C54B";
const DEFAULT_PRODUCT_DESCRIPTION = (title) =>
  `${title} – wind- und wasserdichter ISO-Norm-Stahlcontainer aus wetterfestem Corten-Stahl. Sofort einsatzbereit, stapelbar und individuell umbaubar.`;

// Maps raw DB condition codes to locale-correct display labels.
const CONDITION_DISPLAY = {
  de: { new: "Neu", used: "Gebraucht", refurbished: "Generalüberholt" },
  en: { new: "New", used: "Used", refurbished: "Fully refurbished" },
};

function AttributeItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5 bg-muted/50 rounded-lg p-3">
      <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "rgba(30,95,174,0.12)" }}>
        <Icon className="w-3.5 h-3.5" style={{ color: "#278A2F" }} />
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
  const { product, loading } = useTranslatedProduct(slug);
  const [quantity, setQuantity] = useState(1);
  const T = useSection("product");
  const Tpd = useSection("productDetail");
  const locale = useLocale();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleInquiry = () => {
    const params = new URLSearchParams({
      product: product.id,
      qty: String(quantity),
    });

    if (product.size) params.set("size", normalizeQuoteContainerSize(product.size) || product.size);
    params.set("height", getContainerHeightVariant(product));

    navigate(`/angebot?${params.toString()}`);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate("/warenkorb?added=1");
  };

  // Locale-aware condition label using the raw condition_code from DB
  const conditionDisplay = product
    ? (CONDITION_DISPLAY[locale]?.[product.condition_code] || product.condition)
    : "";

  // Translates raw attribute values (e.g. "Kühlcontainer" → "Refrigerated container")
  const translateAttrValue = useAttributeValueTranslations();

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
        <h1 className="font-heading font-bold text-2xl mb-4">{T.notFound}</h1>
        <Link to="/shop">
          <Button variant="outline"><ArrowLeft className="w-4 h-4 mr-2" /> {T.backToShop}</Button>
        </Link>
      </div>
    );
  }

  const images = [product.image_url, ...(product.gallery_urls || [])];

  const typeSpecific = Tpd.typeSpecific?.[product.container_type] || "";

  const seoDescription = [
    product.description,
    Tpd.seoPara2(product.title, product.floor),
    typeSpecific,
    Tpd.seoPara3(product.size, product.container_type),
    Tpd.seoPara4(product.csc_certified),
    Tpd.seoPara5,
  ].filter(Boolean);

  const metaDescription = product.short_description ||
    Tpd.metaFallback(product.title, product.price_from?.toLocaleString("de-DE"));

  return (
    <>
      <Helmet>
        <title>{product.title} {Tpd.titleAction} – {product.price_from?.toLocaleString("de-DE")} € | DIE Container GmbH</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
    <div className="dc-page pb-28 lg:pb-20">
      <div className="dc-page-shell">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProductGallery images={images} title={product.title} imageAlts={product.image_alts || []} />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 rounded-[1.75rem] border border-border bg-white p-6 shadow-sm sm:p-8"
          >
            {/* Badges + title */}
            <div>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                {product.badge && (
                  <Badge className="text-xs" style={{ backgroundColor: "rgba(70,197,75,0.15)", color: "#278A2F", borderColor: "rgba(70,197,75,0.3)" }}>
                    {product.badge}
                  </Badge>
                )}
                {product.is_available && (
                  <Badge className="bg-emerald-500/10 text-emerald-700 border-emerald-500/20 text-xs">
                    ✓ {T.inStock}
                  </Badge>
                )}
              </div>
              <h1 className="font-heading text-3xl font-bold tracking-[-0.035em] sm:text-4xl">{product.title}</h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground">{product.short_description}</p>
            </div>

            {/* Price */}
            <div className="rounded-[1.25rem] bg-[#F0F7F1] p-5">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold text-[#123E19]">
                  {product.price_from?.toLocaleString("de-DE")} €
                </span>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-xs text-muted-foreground font-medium mb-2 block">{T.quantityLabel}</label>
              <div className="inline-flex items-center rounded-full border border-border bg-white">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2.5 hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 font-heading font-semibold text-sm">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="p-2.5 hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={handleInquiry}
              size="lg"
              className="h-14 w-full rounded-full font-heading text-base font-bold shadow-lg transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND_BLUE, color: "#0D2A12" }}
            >
              <ChevronRight className="w-5 h-5 mr-2" />
              Unverbindliches Angebot anfordern
            </Button>
            <Button
              onClick={handleAddToCart}
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-[#176B20] font-heading text-base font-bold text-[#176B20] hover:bg-[#176B20] hover:text-white"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              {T.cart}
            </Button>

            {/* Dimensions quick-view */}
            <div>
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">{T.externalDimensions}</p>
              <div className="grid grid-cols-3 gap-2">
                <DimensionBadge label={T.dimLength} value={product.outer_length} />
                <DimensionBadge label={T.dimWidth} value={product.outer_width} />
                <DimensionBadge label={T.dimHeight} value={product.outer_height} />
              </div>
            </div>

            {/* Key attributes with icons — 2-column grid */}
            <div className="grid grid-cols-2 gap-2">
              <AttributeItem icon={Box} label={T.attrCondition} value={conditionDisplay} />
              <AttributeItem icon={Layers} label={T.attrType} value={translateAttrValue(product.container_type)} />
              <AttributeItem icon={Maximize2} label={T.attrSize} value={product.size} />
              <AttributeItem icon={Weight} label={T.attrWeight} value={product.weight} />
              <AttributeItem icon={Package} label={T.attrPayload} value={product.payload} />
              <AttributeItem icon={Ruler} label={T.attrMaterial} value={translateAttrValue(product.material)} />
              <div className="col-span-2">
                <AttributeItem icon={DoorOpen} label={T.attrDoors} value={product.doors} />
              </div>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {product.csc_certified && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {T.cscLabel}
                </div>
              )}
              {product.weather_resistant && (
                <div className="flex items-center gap-1.5 rounded-full border border-[#B9DFBC] bg-[#E9F6EA] px-3 py-1.5 text-xs text-[#176B20]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {T.weatherLabel}
                </div>
              )}
              <div className="flex items-center gap-1.5 rounded-full border border-[#B9DFBC] bg-[#E9F6EA] px-3 py-1.5 text-xs text-[#176B20]">
                <Award className="w-3.5 h-3.5" />
                {T.isoLabel}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4" /> {T.deliveryBadge}</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4" /> {T.qualityLabel}</span>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="dc-panel mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent p-0 h-auto gap-0 flex-wrap">
              {[
                { value: "description", label: T.tabDescription },
                { value: "specs", label: T.tabSpecs },
                { value: "features", label: T.tabFeatures },
                { value: "delivery", label: T.tabDelivery },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#46C54B] data-[state=active]:text-foreground data-[state=active]:shadow-none px-5 py-3.5 font-heading text-sm font-medium text-muted-foreground transition-colors"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* DESCRIPTION TAB */}
            <TabsContent value="description" className="mt-10">
              <div className="max-w-4xl">
                <RichTextContent
                  content={product.description || DEFAULT_PRODUCT_DESCRIPTION(product.title)}
                  className="mb-8"
                />

                {/* Visual dimension strip — inspired by mtcontainer.com */}
                {(product.outer_length || product.outer_height || product.outer_width) && (
                  <div className="rounded-2xl mb-8 overflow-hidden" style={{ background: "linear-gradient(135deg,#176B20,#0B3D13)" }}>
                    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
                      {[
                        { icon: Ruler, label: T.dimLength, value: product.outer_length },
                        { icon: Maximize2, label: T.dimWidth, value: product.outer_width },
                        { icon: BarChart3, label: T.dimHeight, value: product.outer_height },
                        { icon: Package, label: T.dimPayload, value: product.payload },
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
                    { label: T.attrCondition, value: conditionDisplay },
                    { label: T.attrType, value: translateAttrValue(product.container_type) },
                    { label: T.attrSize, value: product.size },
                    { label: T.attrMaterial, value: translateAttrValue(product.material) },
                    { label: T.attrFloor, value: product.floor },
                    { label: T.attrDoors, value: product.doors },
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
                      <CheckCircle2 className="w-3.5 h-3.5" /> {T.cscLabel}
                    </span>
                  )}
                  {product.weather_resistant && (
                    <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-3 py-1.5 text-xs font-medium">
                      <Wind className="w-3.5 h-3.5" /> {T.weatherLabel}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-full px-3 py-1.5 text-xs font-medium">
                    <Award className="w-3.5 h-3.5" /> {T.isoLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-200 text-purple-700 rounded-full px-3 py-1.5 text-xs font-medium">
                    <Star className="w-3.5 h-3.5" /> {T.qualityLabel}
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
                    { icon: Mail, label: "Beratung per E-Mail" },
                  ].map(({ icon: Ic, label }, i) => (
                    <div key={i} className="flex flex-col items-center gap-2.5 p-5 bg-card border border-border rounded-xl text-center hover:border-blue-200 transition-colors">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(30,95,174,0.12)" }}>
                        <Ic className="w-5 h-5" style={{ color: "#278A2F" }} />
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
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: "#278A2F" }} />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* DELIVERY TAB */}
            <TabsContent value="delivery" className="mt-10">
              <div className="max-w-4xl">
                <div className="mb-8 max-w-3xl">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#278A2F]">
                    Versand & Lieferung
                  </p>
                  <h2 className="mt-2 font-heading text-2xl font-bold tracking-[-0.025em] text-foreground sm:text-3xl">
                    Ihre Containerlieferung auf einen Blick
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    Wir liefern ausschließlich innerhalb Deutschlands. Lieferzeit, Transportweg und Kosten werden passend zu Container, Lieferadresse und Entladesituation geplant.
                  </p>
                </div>

                {/* Key delivery facts */}
                <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    { icon: Clock, label: "Lieferzeit", value: "3–9 Werktage", sub: "nach Auftragsannahme" },
                    { icon: MapPin, label: "Liefergebiet", value: "Deutschland", sub: "keine Inselzustellung" },
                    { icon: Truck, label: "Transportkosten", value: "Individuell", sub: "im Angebot ausgewiesen" },
                  ].map(({ icon: Ic, label, value, sub }, i) => (
                    <div key={i} className="flex min-h-36 flex-col justify-between rounded-2xl border border-[#CDEBCD] bg-[#F4FBF4] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#278A2F] shadow-sm">
                        <Ic className="h-5 w-5" />
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</p>
                        <p className="mt-1 font-heading text-lg font-bold text-foreground">{value}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="border-b border-border bg-muted/30 px-5 py-4 sm:px-6">
                    <h3 className="font-heading text-base font-bold text-foreground sm:text-lg">So wird Ihre Lieferung geplant</h3>
                  </div>
                  {[
                    { n: "01", title: "Lieferadresse prüfen", desc: "Wir prüfen Adresse, Zufahrt und die Anforderungen am vorgesehenen Lieferort." },
                    { n: "02", title: "Transportlösung auswählen", desc: "Wir ermitteln eine geeignete und wirtschaftliche Route sowie die erforderliche Technik." },
                    { n: "03", title: "Termin abstimmen", desc: "Der Liefertermin wird vor der Anfahrt verbindlich mit Ihnen koordiniert." },
                    { n: "04", title: "Container anliefern", desc: "Der Container wird an die vereinbarte Lieferadresse bis zur Bordsteinkante transportiert." },
                  ].map(({ n, title, desc }, i, arr) => (
                    <div key={i} className={`flex items-start gap-4 px-5 py-4 sm:px-6 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#46C54B] font-mono text-[11px] font-bold text-white">{n}</span>
                      <div>
                        <p className="font-heading font-semibold text-sm text-foreground">{title}</p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center rounded-2xl bg-[#176B20] p-5 text-white sm:p-6">
                  <div>
                    <h3 className="font-heading text-base font-bold sm:text-lg">Wichtig für die Anlieferung</h3>
                    <p className="mt-2 max-w-2xl text-xs leading-6 text-white/80 sm:text-sm">
                      Bitte geben Sie eine vollständige Lieferadresse an und informieren Sie uns frühzeitig über Zufahrtsbeschränkungen, Bodenverhältnisse oder andere Besonderheiten am Standort.
                    </p>
                  </div>
                  <Link
                    to="/versand"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-heading text-sm font-bold text-[#176B20] transition-transform hover:-translate-y-0.5"
                  >
                    Alle Lieferdetails
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <ContactBanner />
      </div>

      {/* Mobile fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-xl border-t border-border lg:hidden z-40 space-y-2">
        <Button
          onClick={handleInquiry}
          className="w-full font-heading font-semibold h-12 text-white"
          style={{ backgroundColor: BRAND_BLUE, color: "#0D2A12" }}
        >
          <ChevronRight className="w-4 h-4 mr-2" />
          Angebot anfordern – {product.price_from?.toLocaleString("de-DE")} €
        </Button>
        <Button
          onClick={handleAddToCart}
          variant="outline"
          className="w-full font-heading font-semibold h-11 border-[#176B20] text-[#176B20] hover:bg-[#176B20] hover:text-white"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {T.cart}
        </Button>
      </div>
    </div>
    </>
  );
}
