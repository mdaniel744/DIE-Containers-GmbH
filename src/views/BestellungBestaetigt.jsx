"use client";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const fmt = (n) =>
  Number(n).toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function Step({ label, active }) {
  return (
    <span className={active ? "font-heading font-bold underline underline-offset-4" : "text-muted-foreground font-medium"}>
      {label}
    </span>
  );
}

export default function BestellungBestaetigt() {
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order") || "—";
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("last-order");
      if (stored) setOrder(JSON.parse(stored));
    } catch {}
  }, []);

  const subtotal = order?.subtotal ?? 0;
  const vat = order?.vat ?? 0;
  const deliveryFee = order?.deliveryFee ?? 420;
  const total = order?.total ?? subtotal + vat + deliveryFee;
  const paymentMethod = order?.paymentMethod ?? "SEPA-Banküberweisung";

  return (
    <div className="min-h-screen bg-background">
      {/* Progress breadcrumb */}
      <div className="bg-[#1B3A5C] text-white py-4">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center gap-3 text-sm tracking-widest uppercase">
          <Step label="Warenkorb" active={false} />
          <ArrowRight className="w-4 h-4 text-white/40" />
          <Step label="Kasse" active={false} />
          <ArrowRight className="w-4 h-4 text-white/40" />
          <Step label="Bestellung Abgeschlossen" active={true} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">

        {/* Success box */}
        <div className="border-2 border-dashed border-emerald-500 rounded-xl px-8 py-6 text-center">
          <div className="flex items-center justify-center gap-2 text-emerald-600">
            <CheckCircle className="w-5 h-5" />
            <p className="font-heading font-semibold text-lg">Vielen Dank. Ihre Bestellung ist eingegangen.</p>
          </div>
        </div>

        {/* Order meta row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border border border-border rounded-xl overflow-hidden text-center">
          {[
            { label: "Bestellnummer", value: orderNumber },
            { label: "Datum", value: order?.date ?? new Date().toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" }) },
            { label: "Gesamt", value: `${fmt(total)} €` },
            { label: "Zahlungsart", value: paymentMethod },
          ].map(({ label, value }) => (
            <div key={label} className="px-4 py-5">
              <p className="text-xs text-muted-foreground mb-1">{label}</p>
              <p className="font-heading font-semibold text-sm">{value}</p>
            </div>
          ))}
        </div>

        {/* Next steps */}
        <div className="border border-border rounded-xl px-6 py-5 bg-muted/30 space-y-2">
          <p className="font-heading font-semibold text-sm">Wie geht es weiter?</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir haben Ihre Bestellung <strong>{orderNumber}</strong> erhalten und melden uns in Kürze per E-Mail mit der Auftragsbestätigung und allen weiteren Details zur Zahlung und Lieferung.
          </p>
          <p className="text-sm text-muted-foreground">
            Bei Fragen erreichen Sie uns jederzeit über die <a href="/kontakt" className="underline hover:text-foreground transition-colors">Kontaktseite</a>.
          </p>
        </div>

        {/* Order details */}
        {order && (
          <div className="border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-3 bg-muted border-b border-border">
              <p className="font-heading font-bold text-sm uppercase tracking-wider">Bestelldetails</p>
            </div>

            <div className="px-5 py-4 space-y-0">
              {/* Products */}
              <div className="flex justify-between text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground pb-3 border-b border-border">
                <span>Produkt</span>
                <span>Gesamtsumme</span>
              </div>
              {order.items?.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-border text-sm">
                  <span>{item.title} <span className="text-muted-foreground">× {item.quantity}</span></span>
                  <span className="font-medium" style={{ color: "#1B3A5C" }}>
                    {fmt((item.price || 0) * item.quantity)} €
                  </span>
                </div>
              ))}

              {/* Totals */}
              {[
                { label: "Warenwert (netto)", value: `${fmt(subtotal)} €`, colored: true },
                { label: "19 % MwSt.", value: `${fmt(vat)} €` },
                { label: "Lieferpauschale", value: `${fmt(deliveryFee)} €` },
                { label: "Zahlungsart", value: paymentMethod },
                { label: "Gesamt", value: `${fmt(total)} €`, colored: true, bold: true },
                ...(order.notes ? [{ label: "Anmerkung", value: order.notes }] : []),
              ].map(({ label, value, colored, bold }) => (
                <div key={label} className="flex justify-between items-start py-3 border-b border-border text-sm last:border-0">
                  <span className={bold ? "font-bold" : "font-medium"}>{label}</span>
                  <span className={`text-right max-w-[60%] ${colored ? "font-semibold" : "text-muted-foreground"}`}
                    style={colored ? { color: "#1B3A5C" } : {}}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Addresses */}
        {order && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Rechnungsadresse", addr: order.billing },
              { title: "Lieferadresse", addr: order.delivery ?? order.billing },
            ].map(({ title, addr }) => (
              <div key={title} className="border border-border rounded-xl p-5">
                <p className="font-heading font-bold text-sm mb-3">{title}</p>
                {addr && (
                  <address className="not-italic text-sm text-muted-foreground space-y-0.5">
                    <p>{addr.vorname} {addr.nachname}</p>
                    {addr.firma && <p>{addr.firma}</p>}
                    <p>{addr.strasse}</p>
                    <p>{addr.plz} {addr.ort}</p>
                    {addr.telefon && <p>{addr.telefon}</p>}
                    {addr.email && <p>{addr.email}</p>}
                  </address>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="flex justify-center pt-2">
          <Link to="/shop">
            <Button style={{ backgroundColor: "#F28C28", color: "#1a1a1a" }} className="font-heading font-semibold px-8 h-11">
              Weiter einkaufen <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
