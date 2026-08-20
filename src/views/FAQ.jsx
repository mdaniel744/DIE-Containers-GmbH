"use client";
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSection } from "@/lib/i18n";

export default function FAQ() {
  const T = useSection("faqPage");

  return (
    <div className="dc-page">
      <div className="dc-reading-shell">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="dc-page-hero">
          <span className="dc-kicker">{T.label}</span>
          <h1 className="dc-page-title">{T.title}</h1>
          <p className="dc-page-intro">{T.description}</p>
        </motion.div>

        {T.categories.map((cat, ci) => (
          <div key={ci} className="mb-10">
            <h2 className="mb-5 font-heading text-2xl font-bold tracking-tight">{cat.title}</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {cat.items.map((faq, fi) => (
                <AccordionItem key={fi} value={`faq-${ci}-${fi}`} className="rounded-[1.25rem] border border-border bg-card px-6 transition-shadow data-[state=open]:shadow-sm">
                  <AccordionTrigger className="py-5 text-left font-heading text-base font-semibold transition-colors hover:text-[#176B20] hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base leading-7 text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
}
