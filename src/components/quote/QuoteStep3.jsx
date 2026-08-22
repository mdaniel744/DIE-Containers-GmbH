"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useSection } from "@/lib/i18n";
import { MapPin } from "lucide-react";

export default function QuoteStep3({ data, setData }) {
  const T = useSection("quote");
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));
  const requiresDeliveryAddress = ["delivery_no_unload", "delivery_with_unload"].includes(data.unloading_method);
  const updatePostalCode = (value) => update("delivery_postal_code", value.replace(/\D/g, "").slice(0, 5));
  const postalCodeInvalid = Boolean(data.delivery_postal_code) && !/^\d{5}$/.test(data.delivery_postal_code);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl mb-1">{T.step3Title}</h2>
        <p className="text-sm text-muted-foreground">{T.step3Sub}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="quote-name" className="text-sm font-medium">{T.nameLabel2} *</Label>
          <Input
            id="quote-name"
            value={data.first_name || ""}
            onChange={(e) => update("first_name", e.target.value)}
            autoComplete="name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quote-email" className="text-sm font-medium">{T.emailLabel2} *</Label>
          <Input id="quote-email" type="email" value={data.email || ""} onChange={(e) => update("email", e.target.value)} autoComplete="email" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="quote-phone" className="text-sm font-medium">{T.phoneLabel2} *</Label>
          <Input id="quote-phone" type="tel" value={data.phone || ""} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" required />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="quote-company" className="text-sm font-medium">{T.companyLabel}</Label>
          <Input id="quote-company" value={data.company || ""} onChange={(e) => update("company", e.target.value)} autoComplete="organization" />
        </div>

      </div>

      {requiresDeliveryAddress && (
        <fieldset className="rounded-[1.25rem] border border-[#BFE0C2] bg-[#F2FBF3] p-5 sm:p-6">
          <legend className="px-2 font-heading text-base font-bold text-foreground">
            {T.deliveryAddressTitle} *
          </legend>
          <div className="mb-5 flex items-start gap-3 text-sm leading-6 text-muted-foreground">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#278A2F]" aria-hidden="true" />
            <p>{T.deliveryAddressHint}</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-6">
            <div className="space-y-2 sm:col-span-4">
              <Label htmlFor="delivery-street" className="text-sm font-medium">{T.streetLabel} *</Label>
              <Input
                id="delivery-street"
                value={data.delivery_street || ""}
                onChange={(e) => update("delivery_street", e.target.value)}
                autoComplete="address-line1"
                required
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="delivery-house-number" className="text-sm font-medium">{T.houseNumberLabel} *</Label>
              <Input
                id="delivery-house-number"
                value={data.delivery_house_number || ""}
                onChange={(e) => update("delivery_house_number", e.target.value)}
                maxLength={20}
                required
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="delivery-postal-code" className="text-sm font-medium">{T.postalCodeLabel} *</Label>
              <Input
                id="delivery-postal-code"
                value={data.delivery_postal_code || ""}
                onChange={(e) => updatePostalCode(e.target.value)}
                inputMode="numeric"
                pattern="[0-9]{5}"
                maxLength={5}
                autoComplete="postal-code"
                aria-invalid={postalCodeInvalid}
                required
              />
              {postalCodeInvalid && <p className="text-xs font-medium text-rose-600" role="alert">{T.postalCodeError}</p>}
            </div>

            <div className="space-y-2 sm:col-span-4">
              <Label htmlFor="delivery-city" className="text-sm font-medium">{T.cityLabel} *</Label>
              <Input
                id="delivery-city"
                value={data.delivery_city || ""}
                onChange={(e) => update("delivery_city", e.target.value)}
                autoComplete="address-level2"
                required
              />
            </div>

            <div className="space-y-2 sm:col-span-6">
              <Label htmlFor="delivery-country" className="text-sm font-medium">{T.countryLabel}</Label>
              <Input id="delivery-country" value={T.germanyLabel} autoComplete="country-name" readOnly className="bg-white/70" />
            </div>
          </div>
        </fieldset>
      )}

      <div className="space-y-2">
        <Label htmlFor="quote-message" className="text-sm font-medium">{T.messageLabel2}</Label>
        <Textarea
          id="quote-message"
          value={data.additional_notes || ""}
          onChange={(e) => update("additional_notes", e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      <div className="space-y-3 pt-4 border-t border-border">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={data.accepted_terms || false}
            onCheckedChange={(v) => update("accepted_terms", v)}
            className="mt-0.5 data-[state=checked]:bg-[#46C54B] data-[state=checked]:border-[#46C54B]"
          />
          <span className="text-sm text-muted-foreground">
            {T.termsText}{" "}
            <a href="/agb" className="underline hover:text-foreground" target="_blank">{T.termsAgb}</a>{" "}
            {T.termsAnd}{" "}
            <a href="/datenschutz" className="underline hover:text-foreground" target="_blank">{T.termsPrivacy}</a>.{" "}
            {T.termsConfirm} *
          </span>
        </label>
      </div>
    </div>
  );
}
