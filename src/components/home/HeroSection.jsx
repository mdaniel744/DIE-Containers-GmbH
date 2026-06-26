"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/lib/productData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Seecontainer kaufen"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 blueprint-line opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            
            <span className="inline-block font-mono text-xs font-medium tracking-widest uppercase mb-6 border px-3 py-1.5 rounded-full" style={{ color: '#F28C28', borderColor: 'rgba(242,140,40,0.3)' }}>
              Nr. 1 in Deutschland
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-display text-white leading-[1.08] tracking-tight">
            
            Seecontainer{" "}
            <span style={{ color: '#F28C28' }}>kaufen</span>{" "}
            in Deutschland
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg">
            
            Neue und gebrauchte 10ft, 20ft und 40ft Container zu attraktiven Preisen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-col sm:flex-row gap-3">
            
            <Link to="/shop">
              <Button size="lg" className="font-heading font-semibold text-lg px-10 h-14 w-full sm:w-auto" style={{ backgroundColor: '#F28C28', color: '#1a1a1a' }}>
                Container entdecken
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/angebot">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-lg px-10 h-14 w-full sm:w-auto">
                <FileText className="w-4 h-4 mr-2" />
                Angebot anfordern
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            
            {[
            { value: "500+", label: "Container auf Lager" },
            { value: "48h", label: "Express-Lieferung" },
            { value: "100%", label: "Qualitätsgeprüft" }].
            map((stat) =>
            <div key={stat.label}>
                <p className="font-heading font-bold text-2xl hidden" style={{ color: '#F28C28' }}>{stat.value}</p>
                <p className="text-xs text-white/50 mt-1 hidden">{stat.label}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}