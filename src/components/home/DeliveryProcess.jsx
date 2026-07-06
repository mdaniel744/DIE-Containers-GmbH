"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import { Search, MapPin, FileText, Mail, Truck, Phone, AtSign, Clock, ArrowRight } from "lucide-react";
import { useSection } from "@/lib/i18n";

const ORANGE = "#F28C28";
const STEP_ICONS = [Search, MapPin, FileText, Mail, Truck];

export default function DeliveryProcess() {
  const T = useSection("delivery");

  return (
    <>
      <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={T.label} title={T.title} description={T.description} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {T.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative">
                  <div className="bg-card rounded-xl border border-border p-6 text-center h-full hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-sm text-secondary">{i + 1}</span>
                    </div>
                    <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-muted-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-sm mb-2">{step.label}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: ORANGE }}>{T.contactLabel}</p>
              <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight">{T.contactTitle}</h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,140,40,0.2)" }}>
                  <Phone className="w-4 h-4" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">{T.phoneLabel}</p>
                  <a href="tel:+491635393159" className="font-heading font-semibold text-white hover:opacity-80 transition-opacity">0049 163 5393 159</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,140,40,0.2)" }}>
                  <AtSign className="w-4 h-4" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">{T.emailLabel}</p>
                  <a href="mailto:contact@diecontainers.com" className="font-heading font-semibold text-white hover:opacity-80 transition-opacity break-all">contact@diecontainers.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,140,40,0.2)" }}>
                  <Clock className="w-4 h-4" style={{ color: ORANGE }} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">{T.hoursLabel}</p>
                  <p className="font-heading font-semibold text-white">{T.hours}</p>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <Link to="/angebot" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity shadow-lg" style={{ backgroundColor: ORANGE }}>
                <Truck className="w-4 h-4" />
                {T.contactCta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
