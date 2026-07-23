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
      className="my-12 rounded-2xl overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1B3A5C 0%, #0f2540 100%)" }}
    >
      <div className="px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-xs font-mono tracking-widest uppercase mb-2 text-white/80">
            {T.label}
          </p>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">{T.title}</h3>
          <p className="text-white/60 text-sm">{T.description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a href="tel:+491635393159" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-secondary font-heading font-semibold text-sm transition-colors hover:bg-white/90">
            <Phone className="w-4 h-4" />
            {T.ctaPhone}
          </a>
          <Link to="/kontakt" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors">
            <Mail className="w-4 h-4" />
            {T.ctaContact}
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
