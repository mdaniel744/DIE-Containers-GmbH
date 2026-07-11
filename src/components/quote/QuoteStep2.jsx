"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Truck, PackageCheck, Warehouse, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSection } from "@/lib/i18n";
import { useAttributeOptions } from "@/hooks/useAttributeOptions";

const ORANGE = "#F28C28";

const TRANSPORT_ICONS = {
  delivery_no_unload: Truck,
  delivery_with_unload: PackageCheck,
  self_pickup: Warehouse,
};

export default function QuoteStep2({ data, setData }) {
  const T = useSection("quote");
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));

  const { options: sizeOptions } = useAttributeOptions("Size");
  const { options: colorOptions } = useAttributeOptions("Color");

  // Fall back to i18n values in local dev or when Supabase has no data yet
  const sizes = sizeOptions.length > 0 ? sizeOptions : T.sizes;
  const colors = colorOptions.length > 0
    ? colorOptions
    : T.colors.map((c) => ({ value: c, label: c }));
  const updateQuantity = (value) => {
    if (value === "" || /^[1-9]\d*$/.test(value)) update("quantity", value);
  };
  const [showDateInfo, setShowDateInfo] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading font-bold text-xl mb-1">{T.step2Title}</h2>
        <p className="text-sm text-muted-foreground">{T.step2Sub}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-sm font-medium">{T.sizeLabel} *</Label>
          <Select value={data.container_size || ""} onValueChange={(v) => update("container_size", v)}>
            <SelectTrigger><SelectValue placeholder={T.sizePlaceholder} /></SelectTrigger>
            <SelectContent>
              {sizes.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">{T.conditionLabel} *</Label>
          <Select value={data.condition || ""} onValueChange={(v) => update("condition", v)}>
            <SelectTrigger><SelectValue placeholder={T.conditionPlaceholder} /></SelectTrigger>
            <SelectContent>
              {T.conditions.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">{T.colorLabel}</Label>
          <Select value={data.color || ""} onValueChange={(v) => update("color", v)}>
            <SelectTrigger><SelectValue placeholder={T.colorPlaceholder} /></SelectTrigger>
            <SelectContent>
              {colors.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">{T.quantityLabel2} *</Label>
          <Input
            type="text"
            inputMode="numeric"
            pattern="[1-9][0-9]*"
            min="1"
            value={data.quantity ?? ""}
            onChange={(e) => updateQuantity(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-3">
        <Label className="text-sm font-medium">{T.transportLabel} *</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {T.transportOptions.map(({ value, label, desc }) => {
            const Icon = TRANSPORT_ICONS[value];
            const active = data.unloading_method === value;
            return (
              <button
                key={value}
                onClick={() => update("unloading_method", value)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 text-center transition-all ${
                  active ? "border-[#F28C28] bg-[#F28C28]/5" : "border-border hover:border-[#F28C28]/40 bg-card"
                }`}
              >
                <Icon className="w-6 h-6 mb-2" style={{ color: active ? ORANGE : "#888" }} />
                <p className={`font-heading font-semibold text-sm ${active ? "text-foreground" : "text-foreground/70"}`}>{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {data.unloading_method !== "self_pickup" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium">{T.deliveryDateLabel}</Label>
            <button type="button" onClick={() => setShowDateInfo(!showDateInfo)} className="text-muted-foreground hover:text-foreground transition-colors">
              <Info className="w-4 h-4" />
            </button>
          </div>
          <AnimatePresence>
            {showDateInfo && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
                <p>{T.deliveryNote}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <Input
            type="date"
            value={data.desired_delivery_date || ""}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => update("desired_delivery_date", e.target.value)}
          />
        </motion.div>
      )}
    </div>
  );
}
