"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSection } from "@/lib/i18n";

export default function FAQSection() {
  const T = useSection("faqSection");

  return (
    <section className="bg-[#F3F7F2] py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <SectionHeading title={T.title} description={T.description} align="left" display />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:pt-2">
          <Accordion type="single" collapsible className="space-y-3">
            {T.items.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-[1.25rem] border border-[#DDE8DC] bg-white px-6 data-[state=open]:shadow-[0_14px_35px_rgba(20,72,29,0.08)] transition-shadow">
                <AccordionTrigger className="py-6 text-left font-heading text-base font-bold text-[#123E19] transition-colors hover:text-[#2B9D36] hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-[#5F7865]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
