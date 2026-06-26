"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Allgemein",
    items: [
      { q: "Was kostet ein Seecontainer?", a: "Die Preise variieren je nach Größe, Zustand und Typ. Ein gebrauchter 20 Fuß Standardcontainer ist ab ca. 1.990 € erhältlich, neue Container starten bei ca. 2.490 €. Hinzu kommen individuelle Transportkosten." },
      { q: "Kann ich einen gebrauchten Container kaufen?", a: "Ja! Alle Gebrauchtcontainer werden vor dem Verkauf auf Wasser- und Winddichtheit überprüft und befinden sich in einem guten, funktionalen Zustand." },
      { q: "Bieten Sie auch Miet-Container an?", a: "Aktuell konzentrieren wir uns auf den Verkauf. Für Mietanfragen wenden Sie sich bitte direkt an uns." },
    ],
  },
  {
    title: "Lieferung",
    items: [
      { q: "Wie erfolgt die Lieferung?", a: "Wir liefern per Kranwagen direkt an Ihren Wunschort. Die Lieferung wird individuell geplant und berücksichtigt Zufahrtswege und Abstellfläche." },
      { q: "Wie lange dauert die Lieferung?", a: "In der Regel 3-7 Werktage nach Auftragsbestätigung. Express-Lieferungen innerhalb von 48 Stunden sind möglich." },
      { q: "Was kostet die Lieferung?", a: "Die Transportkosten richten sich nach Entfernung und Container-Größe. Sie erhalten die genauen Kosten in Ihrem individuellen Angebot." },
    ],
  },
  {
    title: "Bestellung",
    items: [
      { q: "Wie bestelle ich einen Container?", a: "Wählen Sie Ihren gewünschten Container aus, fordern Sie ein unverbindliches Angebot an und bestätigen Sie das Angebot per E-Mail oder Telefon." },
      { q: "Kann ich online bezahlen?", a: "Nein, eine Online-Zahlung ist nicht möglich. Nach Auftragsbestätigung erhalten Sie eine Rechnung mit unseren Bankdaten." },
      { q: "Ist die Angebotsanfrage verbindlich?", a: "Nein, alle Anfragen über unsere Website sind unverbindlich und kostenlos." },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">FAQ</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mt-3 tracking-tight">
            Häufig gestellte Fragen
          </h1>
          <p className="text-muted-foreground mt-2">Antworten auf die wichtigsten Fragen rund um den Containerkauf.</p>
        </motion.div>

        {faqCategories.map((cat, ci) => (
          <div key={cat.title} className="mb-10">
            <h2 className="font-heading font-semibold text-lg mb-4">{cat.title}</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {cat.items.map((faq, fi) => (
                <AccordionItem
                  key={fi}
                  value={`${ci}-${fi}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
                >
                  <AccordionTrigger className="text-sm font-heading font-semibold text-left hover:no-underline hover:text-secondary py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
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