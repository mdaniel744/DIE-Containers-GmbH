"use client";
import React from "react";
import { Calculator, Info, Truck } from "lucide-react";
import { useLocale } from "@/hooks/useLocale";
import { useSection } from "@/lib/i18n";

function CurrencyValue({ value, muted = false, accent = false }) {
  const locale = useLocale();
  const formatted = new Intl.NumberFormat(locale === "en" ? "en-IE" : "de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <span
      className={
        accent
          ? "font-heading text-xl font-bold text-[#278A2F]"
          : muted
            ? "text-muted-foreground"
            : "font-medium text-foreground"
      }
    >
      {formatted}
    </span>
  );
}

export default function QuoteCostSummary({
  product,
  pricing,
  configurationComplete,
  unloadingMethod,
}) {
  const T = useSection("quote");

  if (!product || !pricing) {
    if (!configurationComplete) return null;

    return (
      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 text-blue-950">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#278A2F]" />
          <div>
            <h3 className="font-heading font-bold">{T.individualPriceTitle}</h3>
            <p className="mt-1 text-sm text-blue-900/75">{T.individualPriceText}</p>
          </div>
        </div>
      </div>
    );
  }

  const shippingLabel = pricing.shippingFee === 0
    ? T.selfPickupLabel
    : unloadingMethod === "delivery_with_unload"
      ? T.craneDeliveryLabel
      : T.shippingLabel;
  const shippingValue = !unloadingMethod
    ? T.shippingPendingLabel
    : unloadingMethod === "delivery_with_unload"
      ? T.craneShippingIndividualLabel
      : pricing.shippingFee === 0
        ? null
        : T.shippingIndividualLabel;
  const hasFinalTotal = pricing.total !== null;

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-[#46C54B]/25 bg-card">
      <div className="flex items-center gap-3 border-b border-[#46C54B]/15 bg-[#46C54B]/5 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#46C54B]/10">
          <Calculator className="h-5 w-5 text-[#278A2F]" />
        </div>
        <div>
          <h3 className="font-heading font-bold text-foreground">{T.costSummaryTitle}</h3>
          <p className="text-xs text-muted-foreground">{product.title}</p>
        </div>
      </div>

      <div className="space-y-3 px-5 py-5 text-sm">
        <div className="flex items-start justify-between gap-4">
          <span className="text-muted-foreground">
            {pricing.quantity} × {T.unitPriceLabel}
          </span>
          <CurrencyValue value={pricing.netSubtotal} />
        </div>
        <div className="flex items-start justify-between gap-4">
          <span className="text-muted-foreground">{T.vatLabel}</span>
          <CurrencyValue value={pricing.vatAmount} />
        </div>
        <div className="flex items-start justify-between gap-4 border-b border-border pb-3">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <Truck className="h-4 w-4" />
            {shippingLabel}
          </span>
          {shippingValue ? (
            <span className="text-right text-xs font-medium text-[#278A2F]">
              {shippingValue}
            </span>
          ) : (
            <CurrencyValue value={pricing.shippingFee} />
          )}
        </div>
        <div className="flex items-center justify-between gap-4 pt-1">
          <span className="font-heading font-bold text-base text-foreground">
            {hasFinalTotal ? T.totalCostLabel : T.productGrossTotalLabel}
          </span>
          <CurrencyValue
            value={hasFinalTotal ? pricing.total : pricing.grossSubtotal}
            accent
          />
        </div>
        <p className="pt-1 text-xs leading-relaxed text-muted-foreground">{T.costSummaryNote}</p>
      </div>
    </section>
  );
}
