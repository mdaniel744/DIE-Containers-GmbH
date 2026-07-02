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
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading label={T.label} title={T.title} description={T.description} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {T.features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-center p-6 rounded-xl border border-primary-foreground/10 hover:border-secondary/40 transition-colors"
            >
              {(() => { const Icon = ICONS[i]; return (
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
              ); })()}
              <h3 className="font-heading font-semibold text-sm mb-2">{f.title}</h3>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
