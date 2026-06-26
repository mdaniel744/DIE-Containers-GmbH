"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Truck, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { icon: Award, value: "10+", label: "Jahre Erfahrung", desc: "Seit 2014 Ihr Partner im Containerhandel" },
  { icon: Truck, value: "72h", label: "Lieferung", desc: "Deutschlandweiter Versand mit eigenem Kran" },
  { icon: ShieldCheck, value: "500+", label: "Container auf Lager", desc: "Neu, gebraucht & generalüberholt" },
  { icon: Users, value: "100%", label: "Qualitätsgeprüft", desc: "Jeder Container vor Auslieferung geprüft" },
];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block font-mono text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border" style={{ color: "#F28C28", borderColor: "rgba(242,140,40,0.35)" }}>
              Über CSAV Container
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
              Hamburgs führender{" "}
              <span style={{ color: "#F28C28" }}>Containeranbieter</span>{" "}
              seit 2014
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">
              CSAV Container wurde 2014 gegründet und hat sich zu einem der führenden Anbieter von Seecontainern in Deutschland und Europa entwickelt. Mit über 10 Jahren Erfahrung bieten wir maßgeschneiderte Lösungen für Lagerung, Transport und individuelle Containerumbauten.
            </p>
            <p className="text-white/70 leading-relaxed mb-8">
              Von Standard-Lagercontainern bis hin zu Kühl- und Bürocontainern – unser Team berät Sie persönlich und liefert mit eigenem Kran zuverlässig innerhalb von 72 Stunden an Ihren Wunschort.
            </p>
            <Link to="/ueber-uns">
              <Button
                size="lg"
                className="font-heading font-semibold px-8"
                style={{ backgroundColor: "#F28C28", color: "#1a1a1a" }}
              >
                Mehr über uns
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "rgba(242,140,40,0.15)" }}>
                  <h.icon className="w-5 h-5" style={{ color: "#F28C28" }} />
                </div>
                <p className="font-heading font-bold text-2xl text-white">{h.value}</p>
                <p className="font-heading font-semibold text-sm text-white/80 mt-0.5">{h.label}</p>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}