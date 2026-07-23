"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Award, Truck, Users, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSection } from "@/lib/i18n";

const ICONS = [Award, Truck, ShieldCheck, Users];

export default function AboutSection() {
  const T = useSection("aboutSection");

  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-block font-mono text-xs font-medium tracking-widest uppercase mb-4 px-3 py-1.5 rounded-full border border-white/40 text-white">
              {T.label}
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white leading-tight mb-5">
              {T.title1}<span className="text-white">{T.titleColored}</span>{T.title2}
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">{T.body1}</p>
            <p className="text-white/70 leading-relaxed mb-8">{T.body2}</p>
            <Link to="/ueber-uns">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-heading font-semibold px-8">
                {T.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="grid grid-cols-2 gap-4">
            {T.highlights.map((h, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-heading font-bold text-2xl text-white">{h.value}</p>
                  <p className="font-heading font-semibold text-sm text-white/80 mt-0.5">{h.label}</p>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">{h.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
