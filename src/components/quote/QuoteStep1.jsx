"use client";
import React from "react";
import { motion } from "framer-motion";

const ORANGE = "#F28C28";

/* ── Product images (isolated on black background) ── */
const IMG = {
  seecontainer: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/03a8322fe_Seecontainer.png",
  kuehlcontainer: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/77201763e_Khlcontainer.png",
  modifiziert: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/e1abfe374_ModifizierterContainer.png",
  garage: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/73ae67395_ContainerGarage.png",
  buero: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/512bfca60_Brocontainer.png",
  wohn: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/44c7a2f5e_Wohncontainer.png",
  doppeltuer: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/6770529bd_ContainermitDoppeltr.png",
  openside: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/f726750d8_OpenSideContainer.png",
};

const MAIN_CATEGORIES = [
  { value: "Seecontainer", label: "Seecontainer", desc: "Standard ISO – 10ft, 20ft, 40ft", img: IMG.seecontainer },
  { value: "Kühlcontainer", label: "Kühlcontainer", desc: "Reefer mit Kühlaggregat", img: IMG.kuehlcontainer },
  { value: "Modifizierter Container", label: "Modifizierter Container", desc: "Doppeltür, Open Side & Open Top", img: IMG.modifiziert },
  { value: "Container Garage", label: "Container Garage", desc: "Sichere Fahrzeug- & Lagergarage", img: IMG.garage },
  { value: "Bürocontainer", label: "Bürocontainer", desc: "Mobiler Arbeits- & Büroraum", img: IMG.buero },
  { value: "Wohncontainer", label: "Wohncontainer", desc: "Flexible Wohnlösung", img: IMG.wohn },
];

const MODIFIED_SUBTYPES = [
  { value: "Doppeltür", label: "Doppeltür", desc: "Türen an beiden Stirnseiten", img: IMG.doppeltuer },
  { value: "Open Side", label: "Open Side", desc: "Öffenbare Seitenwand", img: IMG.openside },
  { value: "Open Top", label: "Open Top", desc: "Offenes Dach für Übermaßgut", img: null },
];

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
      <p className={`font-heading font-semibold ${compact ? "text-[11px]" : "text-sm"} leading-tight ${active ? "text-foreground" : "text-foreground/80"}`}>{item.label}</p>
    </motion.button>
  );
}

export default function QuoteStep1({ data, setData }) {
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

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading font-bold text-xl mb-1">Welchen Container benötigen Sie?</h2>
        <p className="text-sm text-muted-foreground">Wählen Sie die gewünschte Containerkategorie.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {MAIN_CATEGORIES.map((item) => (
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
          <p className="text-sm font-medium text-foreground">Welcher Typ interessiert Sie?</p>
          <div className="grid grid-cols-3 gap-3">
            {MODIFIED_SUBTYPES.map((item) => (
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