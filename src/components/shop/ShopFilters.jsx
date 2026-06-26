"use client";
import React from "react";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

const filterGroups = [
  {
    key: "size",
    label: "Containergröße",
    options: ["10ft", "20ft", "40ft"],
    type: "checkbox",
  },
  {
    key: "condition",
    label: "Zustand",
    options: ["Neu", "Gebraucht", "Generalüberholt"],
    type: "checkbox",
  },
  {
    key: "container_type",
    label: "Containertyp",
    options: ["Standard", "High Cube", "Open Side", "Doppeltür", "Kühlcontainer", "Bürocontainer"],
    type: "checkbox",
  },
  {
    key: "color",
    label: "Farbe",
    options: ["Blau", "Anthrazit", "Grün", "Weiß"],
    type: "color",
  },
];

const COLOR_MAP = {
  Blau: "#2563eb",
  Anthrazit: "#374151",
  Grün: "#15803d",
  Weiß: "#e5e7eb",
};

export default function ShopFilters({ filters, setFilters, priceRange, setPriceRange }) {
  const toggleFilter = (key, value) => {
    setFilters((prev) => {
      const current = prev[key] || [];
      return {
        ...prev,
        [key]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });
  };

  const activeCount = Object.values(filters).flat().length + (priceRange[1] < 50000 ? 1 : 0);

  const clearAll = () => {
    setFilters({});
    setPriceRange([0, 50000]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-sm uppercase tracking-wider">Filter</h3>
        {activeCount > 0 && (
          <button onClick={clearAll} className="text-xs text-secondary hover:underline flex items-center gap-1">
            <X className="w-3 h-3" /> Zurücksetzen
          </button>
        )}
      </div>

      {filterGroups.map((group) => (
        <div key={group.key} className="border-t border-border pt-5">
          <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-3">
            {group.label}
          </h4>
          {group.type === "color" ? (
            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => {
                const isChecked = (filters[group.key] || []).includes(option);
                return (
                  <button
                    key={option}
                    onClick={() => toggleFilter(group.key, option)}
                    title={option}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      isChecked ? "border-[#F28C28] scale-110 shadow-md" : "border-border hover:border-[#F28C28]/50"
                    }`}
                    style={{ backgroundColor: COLOR_MAP[option] }}
                  />
                );
              })}
            </div>
          ) : (
            <div className="space-y-2.5">
              {group.options.map((option) => {
                const isChecked = (filters[group.key] || []).includes(option);
                return (
                  <label key={option} className="flex items-center gap-2.5 cursor-pointer group">
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleFilter(group.key, option)}
                      className="data-[state=checked]:bg-[#1B3A5C] data-[state=checked]:border-[#1B3A5C]"
                    />
                    <span className={`text-sm transition-colors ${isChecked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {option}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      ))}

      {/* Price range */}
      <div className="border-t border-border pt-5">
        <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">
          Preisbereich
        </h4>
        <Slider
          min={0}
          max={50000}
          step={500}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-3"
        />
        <div className="flex justify-between text-xs text-muted-foreground font-mono">
          <span>{priceRange[0].toLocaleString("de-DE")} €</span>
          <span>{priceRange[1].toLocaleString("de-DE")} €</span>
        </div>
      </div>
    </div>
  );
}