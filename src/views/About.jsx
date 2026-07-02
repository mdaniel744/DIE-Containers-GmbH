"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Truck, Shield } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { DELIVERY_IMAGE } from "@/lib/productData";
import ContactBanner from "@/components/shared/ContactBanner";
import { useSection } from "@/lib/i18n";

const VALUE_ICONS = [Shield, Users, Truck, Award];

export default function About() {
  const T = useSection("about");

  return (
    <div className="pt-20 lg:pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 blueprint-line opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-mono text-xs text-secondary tracking-widest uppercase">{T.label}</span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 tracking-tight">
                {T.title}<span className="text-secondary">{T.titleColored}</span>{T.title2}
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">{T.body}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-xl overflow-hidden">
              <img src={DELIVERY_IMAGE} alt={T.imgAlt} className="w-full h-72 lg:h-96 object-cover rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {T.stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="font-heading font-bold text-3xl lg:text-4xl text-secondary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={T.trustLabel} title={T.trustTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {T.trustItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-7 flex gap-5">
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactBanner />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={T.valuesLabel} title={T.valuesTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {T.values.map((v, i) => {
              const Icon = VALUE_ICONS[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
