"use client";
import React from "react";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useAttributeOptions } from "@/hooks/useAttributeOptions";
import { useSection } from "@/lib/i18n";

const COLOR_MAP = {
  Blau: "#2563eb",
  Anthrazit: "#374151",
  Grün: "#15803d",
  Weiß: "#e5e7eb",
};
const FALLBACK_COLOR = "#9ca3af";

export default function ShopFilters({ filters, setFilters, priceRange, setPriceRange }) {
  const { options: sizeOptions } = useAttributeOptions("Size");
  const { options: typeOptions } = useAttributeOptions("Container Type");
  const { options: colorOptions } = useAttributeOptions("Color");
  const T = useSection("filters");

  const filterGroups = [
    { key: "size", label: T.size, options: sizeOptions, type: "checkbox" },
    { key: "condition", label: T.condition, options: T.conditionOptions, type: "checkbox" },
    { key: "container_type", label: T.type, options: typeOptions, type: "checkbox" },
    { key: "color", label: T.color, options: colorOptions, type: "color" },
  ].filter((group) => group.options.length > 0);

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
        <h3 className="font-heading font-bold text-sm uppercase tracking-wider">{T.heading}</h3>
        {activeCount > 0 && (
          <button onClick={clearAll} className="text-xs text-secondary hover:underline flex items-center gap-1">
            <X className="w-3 h-3" /> {T.reset}
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
                const isChecked = (filters[group.key] || []).includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => toggleFilter(group.key, option.value)}
                    title={option.label}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      isChecked ? "border-[#F28C28] scale-110 shadow-md" : "border-border hover:border-[#F28C28]/50"
                    }`}
                    style={{ backgroundColor: COLOR_MAP[option.value] || FALLBACK_COLOR }}
                  />
                );
              })}
            </div>
          ) : (
            <div className="space-y-2.5">
              {group.options.map((option) => {
                const isChecked = (filters[group.key] || []).includes(option.value);
                return (
                  <label key={option.value} className="flex items-center gap-2.5 cursor-pointer group">
                    <Checkbox
                      checked={isChecked}
                      onCheckedChange={() => toggleFilter(group.key, option.value)}
                      className="data-[state=checked]:bg-[#1B3A5C] data-[state=checked]:border-[#1B3A5C]"
                    />
                    <span className={`text-sm transition-colors ${isChecked ? "text-foreground font-medium" : "text-muted-foreground group-hover:text-foreground"}`}>
                      {option.label}
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
          {T.priceRange}
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