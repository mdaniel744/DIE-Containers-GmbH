"use client";
import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSection } from "@/lib/i18n";

export default function FAQ() {
  const T = useSection("faqPage");

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">{T.label}</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mt-3 tracking-tight">{T.title}</h1>
          <p className="text-muted-foreground mt-2">{T.description}</p>
        </motion.div>

        {T.categories.map((cat, ci) => (
          <div key={ci} className="mb-10">
            <h2 className="font-heading font-semibold text-lg mb-4">{cat.title}</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {cat.items.map((faq, fi) => (
                <AccordionItem key={fi} value={`faq-${ci}-${fi}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm transition-shadow">
                  <AccordionTrigger className="text-sm font-heading font-semibold text-left hover:no-underline hover:text-secondary transition-colors py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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
