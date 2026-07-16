"use client";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { X, Minus, Plus, ShoppingCart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/CartContext";

const VAT_RATE = 0.19;
const DELIVERY_FEE = 420;

export default function Warenkorb() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const justAdded = searchParams.get("added") === "1";

  const netSubtotal = cart.reduce((sum, item) => sum + (item.product.price_from || 0) * item.quantity, 0);
  const vat = netSubtotal * VAT_RATE;
  const total = netSubtotal + vat + DELIVERY_FEE;

  const fmt = (n) => n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 px-4">
        <ShoppingCart className="w-16 h-16 text-muted-foreground opacity-40" />
        <div className="text-center">
          <h2 className="font-heading font-bold text-2xl mb-2">Ihr Warenkorb ist leer</h2>
          <p className="text-muted-foreground">Entdecken Sie unsere Container und fügen Sie sie hinzu.</p>
        </div>
        <Link to="/shop">
          <Button style={{ backgroundColor: "#F28C28", color: "#1a1a1a" }} className="font-heading font-semibold px-8 h-11">
            Container entdecken <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {justAdded && (
        <div className="bg-emerald-600 text-white px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>Produkt wurde Ihrem Warenkorb hinzugefügt.</span>
            </div>
            <Link to="/shop" className="text-sm font-semibold underline underline-offset-2 whitespace-nowrap hover:text-emerald-100 transition-colors">
              Einkauf Fortsetzen
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-heading font-bold text-3xl mb-8">Warenkorb</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Product table */}
          <div className="lg:col-span-2">
            <div className="border border-border rounded-xl overflow-hidden">
              {/* Header */}
              <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-5 py-3 bg-muted text-xs font-heading font-bold uppercase tracking-wider text-muted-foreground">
                <span>Produkt</span>
                <span className="text-right">Preis</span>
                <span className="text-center">Anzahl</span>
                <span className="text-right">Zwischensumme</span>
                <span />
              </div>

              {/* Items */}
              {cart.map((item) => {
                const lineTotal = (item.product.price_from || 0) * item.quantity;
                return (
                  <div key={item.product.id} className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 items-center px-5 py-4 border-t border-border">
                    {/* Product */}
                    <div className="flex items-center gap-3">
                      <img
                        src={item.product.image_url}
                        alt={item.product.title}
                        className="w-16 h-12 object-cover rounded-lg flex-shrink-0"
                      />
                      <Link to={`/produkt/${item.product.slug || item.product.id}`} className="font-heading font-semibold text-sm hover:text-[#F28C28] transition-colors line-clamp-2">
                        {item.product.title}
                      </Link>
                    </div>

                    {/* Price */}
                    <div className="text-sm font-medium text-right">
                      {fmt(item.product.price_from || 0)} €
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors text-sm font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 rounded border border-border flex items-center justify-center hover:bg-muted transition-colors text-sm font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Line total */}
                    <div className="text-sm font-bold text-right" style={{ color: "#1B3A5C" }}>
                      {fmt(lineTotal)} €
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1 rounded hover:bg-muted transition-colors text-muted-foreground hover:text-destructive"
                      aria-label="Entfernen"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 flex justify-start">
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2">
                ← Einkauf fortsetzen
              </Link>
            </div>
          </div>

          {/* Order summary sidebar */}
          <div className="border border-border rounded-xl p-6 bg-card">
            <h2 className="font-heading font-bold text-lg mb-5 uppercase tracking-wide">Warenkorb-Summe</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Warenwert (netto)</span>
                <span>{fmt(netSubtotal)} €</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">19% MwSt. auf Warenwert</span>
                <span>{fmt(vat)} €</span>
              </div>
                <div className="flex justify-between items-center py-1.5 pb-3 border-b border-border">
                  <span className="text-muted-foreground">Lieferpauschale</span>
                  <span>{fmt(DELIVERY_FEE)} €</span>
              </div>
              <div className="flex justify-between items-start pt-2">
                <span className="font-heading font-bold text-base">Gesamtsumme</span>
                <div className="text-right">
                  <div className="font-heading font-bold text-xl" style={{ color: "#1B3A5C" }}>
                    {fmt(total)} €
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => navigate("/kasse")}
              className="w-full mt-6 h-12 font-heading font-bold text-base"
              style={{ backgroundColor: "#F28C28", color: "#1a1a1a" }}
            >
              Weiter Zur Kasse <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
