"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Truck, PackageCheck, Warehouse, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ORANGE = "#F28C28";

const TRANSPORT_OPTIONS = [
  {
    value: "delivery_no_unload",
    label: "Lieferung ohne Entladung",
    desc: "Container wird angeliefert, Entladung durch Sie",
    icon: Truck,
  },
  {
    value: "delivery_with_unload",
    label: "Lieferung mit Entladung",
    desc: "Wir liefern und setzen den Container am Wunschort ab",
    icon: PackageCheck,
  },
  {
    value: "self_pickup",
    label: "Selbstabholung im Depot",
    desc: "Sie holen den Container direkt bei uns ab",
    icon: Warehouse,
  },
];

const SIZES = [
  { value: "10ft", label: "10 Fuß (Standard)" },
  { value: "20ft", label: "20 Fuß (Standard)" },
  { value: "20ft HC", label: "20 Fuß (High Cube)" },
  { value: "40ft", label: "40 Fuß (Standard)" },
  { value: "40ft HC", label: "40 Fuß (High Cube)" },
];

const COLORS = ["Blau", "Anthrazit", "Grün", "Weiß", "RAL nach Wunsch"];
const CONDITIONS = ["Neu", "Gebraucht", "Generalüberholt"];

export default function QuoteStep2({ data, setData }) {
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));
  const [showDateInfo, setShowDateInfo] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading font-bold text-xl mb-1">Container-Details & Transport</h2>
        <p className="text-sm text-muted-foreground">Konfigurieren Sie Ihren Container und wählen Sie Ihre Transportoption.</p>
      </div>

      {/* Size, Condition, Color, Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Größe *</Label>
          <Select value={data.container_size || ""} onValueChange={(v) => update("container_size", v)}>
            <SelectTrigger><SelectValue placeholder="Größe wählen" /></SelectTrigger>
            <SelectContent>
              {SIZES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Zustand *</Label>
          <Select value={data.condition || ""} onValueChange={(v) => update("condition", v)}>
            <SelectTrigger><SelectValue placeholder="Zustand wählen" /></SelectTrigger>
            <SelectContent>
              {CONDITIONS.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Farbe</Label>
          <Select value={data.color || ""} onValueChange={(v) => update("color", v)}>
            <SelectTrigger><SelectValue placeholder="Farbe wählen (optional)" /></SelectTrigger>
            <SelectContent>
              {COLORS.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Anzahl Container *</Label>
          <Input
            type="number"
            min="1"
            value={data.quantity || 1}
            onChange={(e) => update("quantity", parseInt(e.target.value) || 1)}
          />
        </div>
      </div>

      {/* Transport Options */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Transportoption *</Label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TRANSPORT_OPTIONS.map(({ value, label, desc, icon: Icon }) => {
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

      {/* Desired Delivery Date */}
      {data.unloading_method !== "self_pickup" && (
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
          <div className="flex items-center gap-2">
            <Label className="text-sm font-medium">Gewünschtes Lieferdatum</Label>
            <button
              type="button"
              onClick={() => setShowDateInfo(!showDateInfo)}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Info className="w-4 h-4" />
            </button>
          </div>

          <AnimatePresence>
            {showDateInfo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800"
              >
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
                <p>
                  <strong>Hinweis:</strong> Das Lieferdatum ist unverbindlich. Wir bemühen uns, Ihren Wunschtermin einzuhalten – eine Lieferung innerhalb von 14 Werktagen ist unser Ziel. Die genaue Terminbestätigung erfolgt nach Auftragserteilung.
                </p>
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