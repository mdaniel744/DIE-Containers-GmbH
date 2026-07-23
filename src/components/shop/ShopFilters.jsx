"use client";
import React, { useMemo } from "react";
import { X } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useAttributeOptions } from "@/hooks/useAttributeOptions";
import { useSection } from "@/lib/i18n";

const COLOR_MAP = {
  "RAL 3020": "#CC0000",
  "RAL 5010": "#1A4472",
  "RAL 5013": "#1D2A57",
  "RAL 6005": "#2F4538",
  "RAL 6007": "#28392B",
  "RAL 7016": "#293133",
  "RAL 7035": "#D4D8D8",
  "RAL 7042": "#8F9695",
};
const FALLBACK_COLOR = "#9ca3af";

const TYPE_ORDER = ["Standard", "High Cube", "Open Side", "Doppeltür", "Kühlcontainer", "Bürocontainer", "Wohncontainer"];
const SIZE_ORDER = ["10ft", "20ft", "40ft"];

function mergeOptions(attributeOptions, productOptions, order = []) {
  const uniqueOptions = new Map();

  [...attributeOptions, ...productOptions].forEach((option) => {
    const value = String(option?.value ?? "").trim();
    if (!value) return;

    const key = value.toLocaleLowerCase("de-DE");
    if (!uniqueOptions.has(key)) {
      uniqueOptions.set(key, { value, label: option.label || value });
    }
  });

  return [...uniqueOptions.values()].sort((a, b) => {
    const aIndex = order.indexOf(a.value);
    const bIndex = order.indexOf(b.value);
    const normalizedAIndex = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
    const normalizedBIndex = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;

    if (normalizedAIndex !== normalizedBIndex) return normalizedAIndex - normalizedBIndex;
    return a.label.localeCompare(b.label, "de");
  });
}

export default function ShopFilters({ filters, setFilters, priceRange, setPriceRange, availableProducts = [] }) {
  const { options: sizeOptions } = useAttributeOptions("Size");
  const { options: typeOptions } = useAttributeOptions("Container Type");
  const { options: colorOptions } = useAttributeOptions("Color");
  const T = useSection("filters");

  // The Base44 attribute catalogue is optional. Derive missing options from the
  // products themselves so the shop sidebar always remains usable.
  const productOptions = useMemo(() => {
    const buildOptions = (key) => {
      const options = new Map();

      availableProducts.forEach((product) => {
        const values = Array.isArray(product[key]) ? product[key] : [product[key]];
        values.forEach((rawValue) => {
          const value = String(rawValue ?? "").trim();
          if (!value) return;
          const normalizedValue = value.toLocaleLowerCase("de-DE");
          if (!options.has(normalizedValue)) options.set(normalizedValue, { value, label: value });
        });
      });

      return [...options.values()];
    };

    return {
      size: buildOptions("size"),
      containerType: buildOptions("container_type"),
      color: buildOptions("color"),
    };
  }, [availableProducts]);

  const resolvedSizeOptions = mergeOptions(sizeOptions, productOptions.size, SIZE_ORDER);
  const resolvedTypeOptions = mergeOptions(typeOptions, productOptions.containerType, TYPE_ORDER);
  const resolvedColorOptions = mergeOptions(colorOptions, productOptions.color);

  const filterGroups = [
    { key: "size", label: T.size, options: resolvedSizeOptions, type: "checkbox" },
    { key: "condition", label: T.condition, options: T.conditionOptions, type: "checkbox" },
    { key: "container_type", label: T.type, options: resolvedTypeOptions, type: "checkbox" },
    { key: "color", label: T.color, options: resolvedColorOptions, type: "color" },
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
                    onClick={() => setFilters((prev) => {
                      const current = prev[group.key] || [];
                      return {
                        ...prev,
                        [group.key]: current.length === 1 && current[0] === option.value ? [] : [option.value],
                      };
                    })}
                    title={option.label}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      isChecked ? "border-[#1E5FAE] scale-110 shadow-md" : "border-border hover:border-[#1E5FAE]/50"
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
