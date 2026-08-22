"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import { Search, MapPin, FileText, Mail, Truck, AtSign, Clock, ArrowRight } from "lucide-react";
import { useSection } from "@/lib/i18n";

const STEP_ICONS = [Search, MapPin, FileText, Mail, Truck];

export default function DeliveryProcess() {
  const T = useSection("delivery");

  return (
    <>
      <section className="bg-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title={T.title} description={T.description} align="left" display />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {T.steps.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }} className="relative">
                  <div className="h-full rounded-[1.5rem] border border-[#DDE8DC] bg-[#F7FAF6] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(20,72,29,0.09)]">
                    <div className="mb-7 flex items-start justify-between">
                      <span className="font-heading text-4xl font-bold tracking-[-0.05em] text-[#46C54B]">0{i + 1}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#176B20] shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="font-heading text-base font-bold leading-tight text-[#123E19]">{step.label}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5F7865]">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="bg-[#46C54B] py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-2xl font-bold leading-tight text-white lg:text-3xl">{T.contactTitle}</h2>
            </div>

            <div className="flex flex-col gap-6 text-sm text-white/85 sm:flex-row">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <AtSign className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] uppercase tracking-wider text-white/65">{T.emailLabel}</p>
                  <a href="mailto:contact@diecontainers.com" className="break-all font-heading font-semibold text-white transition-opacity hover:opacity-80">contact@diecontainers.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/20">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="mb-0.5 text-[10px] uppercase tracking-wider text-white/65">{T.hoursLabel}</p>
                  <p className="font-heading font-semibold text-white">{T.hours}</p>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <Link to="/shop" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-secondary font-heading font-bold text-sm hover:bg-white/90 transition-colors shadow-lg">
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

