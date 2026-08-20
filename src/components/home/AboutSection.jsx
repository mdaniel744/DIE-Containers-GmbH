"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, CalendarDays, Truck, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSection } from "@/lib/i18n";

const ICONS = [ShoppingCart, CalendarDays, Truck, Package];

export default function AboutSection() {
  const T = useSection("aboutSection");

  return (
    <section className="overflow-hidden bg-[#F3F7F2] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="mb-7 font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#123E19] sm:text-5xl lg:text-6xl">
              {T.title1}<span className="text-[#2B9D36]">{T.titleColored}</span>{T.title2}
            </h2>
            <p className="mb-5 max-w-xl text-base leading-relaxed text-[#31563A] sm:text-lg">{T.body1}</p>
            <p className="mb-9 max-w-xl text-base leading-relaxed text-[#31563A] sm:text-lg">{T.body2}</p>
            <Link to="/ueber-uns">
              <Button size="lg" className="h-13 rounded-full bg-[#123E19] px-8 font-heading font-bold text-white hover:bg-[#0B3511]">
                {T.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="grid grid-cols-2 gap-4">
            {T.highlights.map((h, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1 }} className="rounded-[1.5rem] border border-[#D9E9D8] bg-white p-5 shadow-[0_16px_40px_rgba(20,72,29,0.07)] transition-transform hover:-translate-y-1 sm:p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#E5F7E6]">
                    <Icon className="h-5 w-5 text-[#21882B]" />
                  </div>
                  <p className="font-heading text-2xl font-bold tracking-tight text-[#123E19]">{h.value}</p>
                  <p className="mt-1 font-heading text-sm font-semibold text-[#31563A]">{h.label}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#5F7865]">{h.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
