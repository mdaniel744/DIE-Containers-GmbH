"use client";
import React from "react";
import { Truck, Eye, Package, HeadphonesIcon, Route } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { useSection } from "@/lib/i18n";

const ICONS = [Truck, Eye, Package, HeadphonesIcon, Route];

export default function WhyChooseUs() {
  const T = useSection("whyChooseUs");

  return (
    <section className="relative overflow-hidden bg-[#46C54B] py-20 text-white lg:py-32">
      <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full border border-white/20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={T.title} description={T.description} align="left" display inverted />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {T.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_45px_rgba(18,62,25,0.12)] transition-all hover:-translate-y-1 hover:bg-white"
            >
              {(() => { const Icon = ICONS[i]; return (
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-white">
                  <Icon className="h-6 w-6 text-[#176B20]" />
                </div>
              ); })()}
              <h3 className="font-heading text-lg font-bold leading-tight text-[#123E19]">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
