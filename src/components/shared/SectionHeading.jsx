"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({
  label = null,
  title,
  description,
  align = "center",
  inverted = false,
  display = false,
}) {
  const alignment = align === "center" ? "text-center" : "text-left";
  const headingWidth = align === "center" ? "mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 lg:mb-16 ${alignment}`}
    >
      {label && (
        <span className={`inline-block font-mono text-xs font-medium uppercase tracking-widest mb-3 ${inverted ? "text-white/80" : "text-secondary"}`}>
          {label}
        </span>
      )}
      <h2 className={`font-heading font-bold tracking-[-0.035em] leading-[1.02] ${headingWidth} ${display ? "max-w-4xl text-4xl sm:text-5xl lg:text-6xl" : "text-2xl sm:text-3xl lg:text-4xl"} ${inverted ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl leading-relaxed ${align === "center" ? "mx-auto" : ""} ${display ? "text-base sm:text-lg" : "text-base"} ${inverted ? "text-white/75" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
