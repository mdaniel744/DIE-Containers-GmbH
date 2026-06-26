"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Was kostet ein Seecontainer?",
    a: "Die Preise variieren je nach Größe, Zustand und Typ. Ein gebrauchter 20 Fuß Standardcontainer ist ab ca. 1.990 € erhältlich, neue Container starten bei ca. 2.490 €. Hinzu kommen individuelle Transportkosten, die von der Lieferentfernung abhängen. Fordern Sie ein unverbindliches Angebot an für Ihren genauen Preis inklusive Lieferung."
  },
  {
    q: "Wie erfolgt die Lieferung?",
    a: "Wir liefern Ihren Container deutschlandweit per Kranwagen direkt an Ihren Wunschort. Alternativ können Sie den Container bei einem unserer Standorte abholen. Die Lieferung wird individuell geplant und berücksichtigt Zufahrtswege, Abstellfläche und Entlademöglichkeiten."
  },
  {
    q: "Kann ich einen gebrauchten Container kaufen?",
    a: "Ja! Wir bieten eine große Auswahl an geprüften gebrauchten Containern. Alle Gebrauchtcontainer werden vor dem Verkauf auf Wasser- und Winddichtheit überprüft und befinden sich in einem guten, funktionalen Zustand. Generalüberholte Container werden zusätzlich aufbereitet und neu lackiert."
  },
  {
    q: "Wie lange dauert die Lieferung?",
    a: "Die Lieferzeit hängt von Verfügbarkeit und Standort ab. In der Regel beträgt die Lieferzeit 3-7 Werktage nach Auftragsbestätigung. Bei Lagerbeständen in Ihrer Nähe sind auch Express-Lieferungen innerhalb von 48 Stunden möglich."
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="FAQ"
          title="Häufig gestellte Fragen"
          description="Antworten auf die wichtigsten Fragen rund um den Containerkauf."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm transition-shadow"
              >
                <AccordionTrigger className="text-sm font-heading font-semibold text-left hover:no-underline hover:text-secondary transition-colors py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
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