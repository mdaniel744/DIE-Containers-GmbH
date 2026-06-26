"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function QuoteStep3({ data, setData }) {
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl mb-1">Ihre Kontaktdaten</h2>
        <p className="text-sm text-muted-foreground">Damit wir Ihnen ein individuelles Angebot zusenden können.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Vorname *</Label>
          <Input
            value={data.first_name || ""}
            onChange={(e) => update("first_name", e.target.value)}
            placeholder="Max"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Nachname *</Label>
          <Input
            value={data.last_name || ""}
            onChange={(e) => update("last_name", e.target.value)}
            placeholder="Mustermann"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">E-Mail-Adresse *</Label>
          <Input
            type="email"
            value={data.email || ""}
            onChange={(e) => update("email", e.target.value)}
            placeholder="max@beispiel.de"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Telefonnummer *</Label>
          <Input
            type="tel"
            value={data.phone || ""}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+49 30 1234567"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label className="text-sm font-medium">
            Firma <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Input
            value={data.company || ""}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Musterfirma GmbH"
          />
        </div>

        <div className="space-y-2 sm:col-span-2">
          <Label className="text-sm font-medium">
            Nachricht <span className="text-muted-foreground font-normal">(optional)</span>
          </Label>
          <Textarea
            value={data.additional_notes || ""}
            onChange={(e) => update("additional_notes", e.target.value)}
            placeholder="Besondere Wünsche, Fragen oder Anmerkungen..."
            className="min-h-[100px]"
          />
        </div>
      </div>

      {/* Agreement */}
      <div className="space-y-3 pt-4 border-t border-border">
        <label className="flex items-start gap-3 cursor-pointer">
          <Checkbox
            checked={data.accepted_terms || false}
            onCheckedChange={(v) => update("accepted_terms", v)}
            className="mt-0.5 data-[state=checked]:bg-[#F28C28] data-[state=checked]:border-[#F28C28]"
          />
          <span className="text-sm text-muted-foreground">
            Ich akzeptiere die{" "}
            <a href="/agb" className="underline hover:text-foreground" target="_blank">AGB</a>{" "}
            und die{" "}
            <a href="/datenschutz" className="underline hover:text-foreground" target="_blank">Datenschutzerklärung</a>.
            Ich bestätige, dass es sich um eine unverbindliche Angebotsanfrage handelt. *
          </span>
        </label>
      </div>
    </div>
  );
}