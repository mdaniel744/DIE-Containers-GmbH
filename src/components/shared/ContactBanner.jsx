"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactBanner() {
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
          <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "#F28C28" }}>
            Haben Sie Fragen?
          </p>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
            Wir beraten Sie persönlich & kostenlos
          </h3>
          <p className="text-white/60 text-sm">
            Unser Team hilft Ihnen, den richtigen Container für Ihre Anforderungen zu finden.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="tel:+4915124371427"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm text-[#1a1a1a] transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#F28C28" }}
          >
            <Phone className="w-4 h-4" />
            +49 151 243 71427
          </a>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-heading font-semibold text-sm text-white border border-white/20 hover:bg-white/10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Kontakt aufnehmen
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}