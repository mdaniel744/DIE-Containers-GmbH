"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description, align = "center", inverted = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 lg:mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className={`inline-block font-mono text-xs font-medium uppercase tracking-widest mb-3 ${inverted ? "text-white/80" : "text-secondary"}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight ${inverted ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-base max-w-2xl mx-auto leading-relaxed ${inverted ? "text-white/75" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
