"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";

const ORANGE = "#F28C28";

const IMG = {
  seecontainer: "/images/gebrauchte-seecontainer.png",
  kuehlcontainer: "/images/shipping-container-logistics.jpeg",
  modifiziert: "/images/neue-versand-container-kaufen.jpg",
  garage: "/images/neue-versand-container-kaufen.jpg",
  buero: "/images/mobiler-wohncontainer.jpg",
  wohn: "/images/mobiler-wohncontainer.jpg",
  doppeltuer: "/images/gebrauchte-seecontainer.png",
  openside: "/images/die-container-yard.jpeg",
};

// Map category value → image (value never changes, only label/desc translate)
const CATEGORY_IMAGES = {
  "Seecontainer": IMG.seecontainer,
  "Kühlcontainer": IMG.kuehlcontainer,
  "Modifizierter Container": IMG.modifiziert,
  "Container Garage": IMG.garage,
  "Bürocontainer": IMG.buero,
  "Wohncontainer": IMG.wohn,
  "Doppeltür": IMG.doppeltuer,
  "Open Side": IMG.openside,
};

function CategoryCard({ item, active, onClick, compact }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`flex flex-col items-center ${compact ? "p-2.5" : "p-3"} rounded-xl border-2 text-center transition-all ${
        active ? "border-[#F28C28] bg-[#F28C28]/5" : "border-border hover:border-[#F28C28]/40 bg-card"
      }`}
    >
      <div className={`w-full ${compact ? "h-16" : "h-24"} mb-2 rounded-lg overflow-hidden bg-white border border-border flex items-center justify-center`}>
        {item.img ? (
          <img src={item.img} alt={item.label} className="w-full h-full object-contain" loading="lazy" />
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-1">
            <div className="w-8 h-8 rounded border-2 border-dashed border-muted-foreground/30" />
            <span className="text-[9px] text-muted-foreground/50 font-mono">Open Top</span>
          </div>
        )}
      </div>
      <p className={`font-heading font-semibold ${compact ? "text-[11px]" : "text-sm"} leading-tight ${active ? "text-foreground" : "text-foreground/80"}`}>
        {item.label}
      </p>
    </motion.button>
  );
}

export default function QuoteStep1({ data, setData }) {
  const T = useSection("quote");
  const update = (key, value) => setData((prev) => ({ ...prev, [key]: value }));
  const selectedMain = data.main_category || "";

  const handleMainSelect = (value) => {
    update("main_category", value);
    if (value !== "Modifizierter Container") {
      update("container_type", value);
      update("modified_subtype", "");
    } else {
      update("container_type", "");
      update("modified_subtype", "");
    }
  };

  // Attach images (which never change) to the translated category items
  const mainCategories = T.categories.map((c) => ({ ...c, img: CATEGORY_IMAGES[c.value] || null }));
  const subTypes = T.subtypes.map((c) => ({ ...c, img: CATEGORY_IMAGES[c.value] || null }));

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl mb-1">{T.step1Title}</h2>
        <p className="text-sm text-muted-foreground">{T.step1Sub}</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {mainCategories.map((item) => (
          <CategoryCard
            key={item.value}
            item={item}
            active={selectedMain === item.value}
            onClick={() => handleMainSelect(item.value)}
          />
        ))}
      </div>

      {selectedMain === "Modifizierter Container" && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          <p className="text-sm font-medium text-foreground">{T.step1SubtypePrompt}</p>
          <div className="grid grid-cols-3 gap-3">
            {subTypes.map((item) => (
              <CategoryCard
                key={item.value}
                item={item}
                compact
                active={data.modified_subtype === item.value}
                onClick={() => { update("modified_subtype", item.value); update("container_type", item.value); }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
