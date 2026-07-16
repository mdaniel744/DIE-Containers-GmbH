"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_IMAGE } from "@/lib/productData";
import { useSection } from "@/lib/i18n";

export default function HeroSection() {
  const T = useSection("hero");

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMAGE} alt="Seecontainer kaufen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 blueprint-line opacity-[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-display text-white leading-[1.08] tracking-tight">
            {T.title1}<span style={{ color: '#F28C28' }}>{T.titleColored}</span>{T.title2}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mt-6 text-lg sm:text-xl text-white/75 leading-relaxed max-w-lg">
            {T.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link to="/shop">
              <Button size="lg" className="font-heading font-semibold text-lg px-10 h-14 w-full sm:w-auto" style={{ backgroundColor: '#F28C28', color: '#1a1a1a' }}>
                {T.ctaExplore}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/angebot">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-lg px-10 h-14 w-full sm:w-auto">
                <FileText className="w-4 h-4 mr-2" />
                {T.ctaQuote}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

