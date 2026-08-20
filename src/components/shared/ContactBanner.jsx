"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";

export default function ContactBanner() {
  const T = useSection("contactBanner");

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="my-14 overflow-hidden rounded-[2rem] bg-[#46C54B] text-white shadow-[0_24px_70px_-36px_rgba(34,126,42,0.45)]"
    >
      <div className="flex flex-col items-start justify-between gap-7 px-7 py-10 sm:flex-row sm:items-center sm:px-10 lg:px-12 lg:py-12">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-white/80">
            {T.label}
          </p>
          <h3 className="mb-2 max-w-2xl font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">{T.title}</h3>
          <p className="max-w-2xl text-base leading-7 text-white/85">{T.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href="tel:+4989277808979" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-heading text-sm font-bold text-[#176B20] transition-colors hover:bg-white/90">
            <Phone className="w-4 h-4" />
            {T.ctaPhone}
          </a>
          <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full border border-white/55 px-6 py-3 font-heading text-sm font-bold text-white transition-colors hover:bg-white/15">
            <Mail className="w-4 h-4" />
            {T.ctaContact}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
