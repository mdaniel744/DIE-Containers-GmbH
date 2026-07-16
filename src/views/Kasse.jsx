"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";
import { supabase, STORE_ID } from "@/lib/supabaseClient";

const VAT_RATE = 0.19;
const DELIVERY_FEE = 420;

function generateOrderNumber() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `DC-${date}-${rand}`;
}

const EMPTY_ADDRESS = { vorname: "", nachname: "", firma: "", strasse: "", plz: "", ort: "", telefon: "" };

function AddressBlock({ values, onChange, prefix, showPhone = false }) {
  const field = (name, label, required = true, placeholder = "") => (
    <div className="flex flex-col gap-1">
      <Label htmlFor={`${prefix}-${name}`} className="text-sm font-medium">
        {label} {required && <span className="text-destructive">*</span>}
        {!required && <span className="text-muted-foreground font-normal text-xs ml-1">(optional)</span>}
      </Label>
      <Input
        id={`${prefix}-${name}`}
        value={values[name]}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        required={required}
        className="h-11"
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        {field("vorname", "Vorname")}
        {field("nachname", "Nachname")}
      </div>
      {field("firma", "Firmenname", false)}
      {field("strasse", "Straße und Hausnummer", true, "Straßenname und Hausnummer")}
      <div className="grid grid-cols-2 gap-4">
        {field("plz", "Postleitzahl")}
        {field("ort", "Ort / Stadt")}
      </div>
      {showPhone && field("telefon", "Telefon")}
    </div>
  );
}

export default function Kasse() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const [billing, setBilling] = useState({ ...EMPTY_ADDRESS, email: "" });
  const [deliverySameAsBilling, setDeliverySameAsBilling] = useState(true);
  const [delivery, setDelivery] = useState({ ...EMPTY_ADDRESS });
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const netSubtotal = cart.reduce((sum, item) => sum + (item.product.price_from || 0) * item.quantity, 0);
  const vat = netSubtotal * VAT_RATE;
  const total = netSubtotal + vat + DELIVERY_FEE;
  const fmt = (n) => n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const updateBilling = (name, value) => setBilling((p) => ({ ...p, [name]: value }));
  const updateDelivery = (name, value) => setDelivery((p) => ({ ...p, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setSubmitting(true);
    setError(null);

    const orderNumber = generateOrderNumber();
    const deliveryAddress = deliverySameAsBilling ? null : delivery;

    try {
      const { error: dbError } = await supabase.from("inquiries").insert({
        store_id: STORE_ID,
        product_id: cart[0]?.product?.id || null,
        customer_name: `${billing.vorname} ${billing.nachname}`.trim(),
        customer_email: billing.email,
        customer_phone: billing.telefon || null,
        message: `Bestellung ${orderNumber}: ${cart.map((i) => `${i.product.title} ×${i.quantity}`).join(", ")}`,
        details: {
          source: "checkout",
          order_number: orderNumber,
          items: cart.map((i) => ({
            id: i.product.id,
            title: i.product.title,
            price: i.product.price_from,
            quantity: i.quantity,
            line_total: (i.product.price_from || 0) * i.quantity,
          })),
          subtotal: netSubtotal,
          vat,
          delivery_fee: DELIVERY_FEE,
          total,
          payment_method: "sepa_bank_transfer",
          billing: {
            firma: billing.firma || null,
            strasse: billing.strasse,
            plz: billing.plz,
            ort: billing.ort,
          },
          delivery_address: deliveryAddress,
          notes: notes || null,
        },
      });

      if (dbError) throw dbError;

      sessionStorage.setItem("last-order", JSON.stringify({
        orderNumber,
        date: new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" }),
        subtotal: netSubtotal,
        vat,
        deliveryFee: DELIVERY_FEE,
        total,
        paymentMethod: "SEPA-Banküberweisung",
        items: cart.map((i) => ({ title: i.product.title, price: i.product.price_from, quantity: i.quantity })),
        billing: { ...billing },
        delivery: deliverySameAsBilling ? null : { ...delivery },
        notes: notes || null,
      }));

      clearCart();
      navigate(`/bestellung-bestaetigt?order=${orderNumber}`);
    } catch (err) {
      console.error("[kasse] order submit failed:", err);
      setError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.");
    } finally {
      setSubmitting(false);
    }
  };

  if (cart.length === 0) {
    navigate("/warenkorb");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-heading font-bold text-3xl mb-8">Kasse</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

            {/* ─── Left: billing form ─── */}
            <div className="lg:col-span-3 space-y-8">

              {/* Billing */}
              <div>
                <h2 className="font-heading font-bold text-lg uppercase tracking-wide mb-5">Rechnungsdaten</h2>
                <div className="space-y-4">
                  <AddressBlock values={billing} onChange={updateBilling} prefix="bill" showPhone={true} />
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="bill-email" className="text-sm font-medium">
                      E-Mail-Adresse <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="bill-email"
                      type="email"
                      value={billing.email}
                      onChange={(e) => updateBilling("email", e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery address toggle */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={deliverySameAsBilling}
                    onChange={(e) => setDeliverySameAsBilling(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#F28C28]"
                  />
                  <span className="text-sm font-medium">Lieferadresse entspricht der Rechnungsadresse</span>
                </label>

                {!deliverySameAsBilling && (
                  <div className="mt-5 pl-4 border-l-2 border-[#F28C28]/40 space-y-4">
                    <h3 className="font-heading font-semibold text-base">Lieferadresse</h3>
                    <AddressBlock values={delivery} onChange={updateDelivery} prefix="del" showPhone={true} />
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl p-5 bg-muted/30">
                <h2 className="font-heading font-bold text-lg uppercase tracking-wide mb-3">Zahlungsart</h2>
                <label className="flex items-start gap-3 cursor-default">
                  <input type="radio" checked readOnly aria-label="SEPA-Banküberweisung" className="mt-1 accent-[#F28C28]" />
                  <span>
                    <span className="block font-heading font-semibold text-sm">SEPA-Banküberweisung</span>
                    <span className="block mt-1 text-sm text-muted-foreground leading-relaxed">Nach Ihrer Bestellung erhalten Sie die Auftragsbestätigung mit Bankverbindung und Verwendungszweck für die SEPA-Überweisung.</span>
                  </span>
                </label>
              </div>

              {/* Notes */}
              <div className="flex flex-col gap-1">
                <Label htmlFor="notes" className="text-sm font-medium">
                  Anmerkungen zur Bestellung <span className="text-muted-foreground font-normal text-xs">(optional)</span>
                </Label>
                <Textarea
                  id="notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Anmerkungen zu Ihrer Bestellung, z.B. besondere Hinweise für die Lieferung."
                  rows={4}
                />
              </div>
            </div>

            {/* ─── Right: order summary ─── */}
            <div className="lg:col-span-2 border border-border rounded-xl overflow-hidden bg-card sticky top-24">

              {/* Summary header */}
              <div className="px-6 py-4 border-b border-border">
                <h2 className="font-heading font-bold text-base uppercase tracking-wide">Deine Bestellung</h2>
              </div>

              {/* Products */}
              <div className="px-6 py-4 border-b border-border space-y-3">
                <div className="flex justify-between text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground pb-2 border-b border-border">
                  <span>Produkt</span>
                  <span>Zwischensumme</span>
                </div>
                {cart.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-start gap-3">
                    <span className="text-sm text-muted-foreground">
                      {item.product.title} <span className="font-semibold text-foreground">× {item.quantity}</span>
                    </span>
                    <span className="text-sm font-medium whitespace-nowrap">
                      {fmt((item.product.price_from || 0) * item.quantity)} €
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="px-6 py-4 border-b border-border space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Warenwert (netto)</span>
                  <span>{fmt(netSubtotal)} €</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">19% MwSt. auf Warenwert</span>
                  <span>{fmt(vat)} €</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <span className="text-muted-foreground">Lieferpauschale</span>
                  <span>{fmt(DELIVERY_FEE)} €</span>
                </div>
                <div className="flex justify-between items-start pt-1">
                  <span className="font-heading font-bold">Gesamtsumme</span>
                  <div className="text-right">
                    <div className="font-heading font-bold text-lg" style={{ color: "#1B3A5C" }}>{fmt(total)} €</div>
                  </div>
                </div>
              </div>

              {/* Payment note */}
              <div className="px-6 py-4 border-b border-border bg-muted/40 space-y-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Die 19&nbsp;% Mehrwertsteuer wird auf den Netto-Warenwert berechnet. Die Lieferpauschale beträgt einmalig {fmt(DELIVERY_FEE)}&nbsp;€.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">SEPA-Banküberweisung:</strong> Nach Eingang Ihrer Bestellung erhalten Sie per E-Mail eine Auftragsbestätigung mit unseren Bankdaten (IBAN/BIC) und Ihrem Verwendungszweck.
                </p>
              </div>

              {/* Privacy note + submit */}
              <div className="px-6 py-5 space-y-4">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Ihre personenbezogenen Daten werden zur Bearbeitung Ihrer Bestellung und gemäß unserer{" "}
                  <a href="/datenschutz" className="underline hover:text-foreground transition-colors">Datenschutzerklärung</a> verwendet.
                </p>

                {error && (
                  <p className="text-sm text-destructive bg-destructive/10 rounded-lg px-3 py-2">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 font-heading font-bold text-base"
                  style={{ backgroundColor: "#F28C28", color: "#1a1a1a" }}
                >
                  {submitting ? "Wird verarbeitet…" : "Zahlungspflichtig Bestellen →"}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
