"use client";
import React from "react";
import { Truck, Eye, Package, HeadphonesIcon, Route } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const features = [
  { icon: Truck, title: "Deutschlandweite Lieferung", desc: "Wir liefern Ihren Container direkt an Ihren Wunschort in ganz Deutschland." },
  { icon: Eye, title: "Transparente Preise", desc: "Keine versteckten Kosten – alle Preise klar und nachvollziehbar." },
  { icon: Package, title: "Neue & gebrauchte Container", desc: "Große Auswahl an neuen und geprüften gebrauchten Containern." },
  { icon: HeadphonesIcon, title: "Persönliche Beratung", desc: "Unsere Experten beraten Sie individuell bei der Auswahl." },
  { icon: Route, title: "Individuelle Transportplanung", desc: "Maßgeschneiderte Logistiklösungen für jede Situation." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Vorteile"
          title="Warum Container Deutschland?"
          description="Seit Jahren Ihr zuverlässiger Partner für Seecontainer in Deutschland."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-6 rounded-xl border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/15 flex items-center justify-center">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}