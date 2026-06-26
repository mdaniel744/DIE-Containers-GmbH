"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { TYPE_IMAGES } from "@/lib/productData";

const types = [
  { type: "Standard", label: "Standardcontainer", desc: "Der meistgenutzte Container für Lagerung und Transport.", image: TYPE_IMAGES["Standard"], path: "/seecontainer-kaufen" },
  { type: "High Cube", label: "High Cube Container", desc: "30 cm mehr Höhe für sperrige Güter und Umbauten.", image: TYPE_IMAGES["High Cube"], path: "/shop?type=High+Cube" },
  { type: "Open Side", label: "Open Side Container", desc: "Seitliche Öffnung für maximale Flexibilität.", image: TYPE_IMAGES["Open Side"], path: "/shop?type=Open+Side" },
  { type: "Kühlcontainer", label: "Kühlcontainer", desc: "Temperaturgeführte Lagerung von -25°C bis +25°C.", image: TYPE_IMAGES["Kühlcontainer"], path: "/kuehlcontainer-kaufen" },
  { type: "Doppeltür", label: "Doppeltürcontainer", desc: "Türen an beiden Stirnseiten für Durchlade-Betrieb.", image: TYPE_IMAGES["Doppeltür"], path: "/shop?type=Doppelt%C3%BCr" },
  { type: "Bürocontainer", label: "Bürocontainer", desc: "Sofort bezugsfertiges Büro mit Elektrik und Isolierung.", image: TYPE_IMAGES["Bürocontainer"], path: "/buerocontainer-kaufen" },
];

export default function ContainerTypes() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Containertypen"
          title="Für jeden Einsatz der richtige Container"
          description="Entdecken Sie unsere Vielfalt an Containertypen – von Standard bis Spezial."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {types.map((item, i) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to={item.path}
                className="group flex items-center gap-4 bg-card p-4 rounded-xl border border-border hover:shadow-md hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-semibold text-sm group-hover:text-secondary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0 transition-transform group-hover:translate-x-1 group-hover:text-secondary" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}