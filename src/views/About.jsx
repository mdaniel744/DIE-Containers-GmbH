"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Truck, Shield } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { DELIVERY_IMAGE } from "@/lib/productData";
import ContactBanner from "@/components/shared/ContactBanner";

const stats = [
  { value: "2014", label: "Gegründet" },
  { value: "10+", label: "Jahre Erfahrung" },
  { value: "500+", label: "Container auf Lager" },
  { value: "72h", label: "Lieferzeit deutschlandweit" },
];

const values = [
  { icon: Shield, title: "Qualität", desc: "Jeder Container wird vor dem Verkauf sorgfältig geprüft und getestet." },
  { icon: Users, title: "Kundenservice", desc: "Persönliche Beratung von erfahrenen Container-Experten – von Lager bis Sonderprojekt." },
  { icon: Truck, title: "72h Lieferung", desc: "Mit eigenem Kran liefern wir innerhalb von 72 Stunden deutschlandweit." },
  { icon: Award, title: "Seit 2014", desc: "Über 10 Jahre Expertise im Containerhandel – neu, gebraucht und maßgeschneidert." },
];

export default function About() {
  return (
    <div className="pt-20 lg:pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 blueprint-line opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-xs text-secondary tracking-widest uppercase">Über uns</span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 tracking-tight">
                CSAV Container – Ihr Partner für <span className="text-secondary">Seecontainer</span> seit 2014
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                CSAV Container wurde 2014 gegründet und hat sich auf den Verkauf neuer und gebrauchter Seecontainer in Deutschland und Europa spezialisiert. Von unserem Hauptsitz bieten wir maßgeschneiderte Lösungen – von Lagercontainern bis hin zu individuellen Modulen – und liefern mit eigenem Kran innerhalb von 72 Stunden deutschlandweit.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-xl overflow-hidden"
            >
              <img src={DELIVERY_IMAGE} alt="Container Lieferung" className="w-full h-72 lg:h-96 object-cover rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading font-bold text-3xl lg:text-4xl text-secondary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Vertrauen" title="Warum CSAV Container?" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {[
              {
                number: "1",
                title: "Große Auswahl",
                desc: "Von 10-Fuß bis 40-Fuß-Containern bieten wir eine Vielzahl von Größen, um Ihre Lager-, Transport- und weitere Anforderungen zu erfüllen.",
              },
              {
                number: "2",
                title: "Erfahrung",
                desc: "Mit über 10 Jahren Erfahrung im Containerhandel bieten wir ein breites Spektrum an Containerlösungen – von Lager- und Transportcontainern bis hin zu maßgeschneiderten Konzepten für Umbauten und Sonderprojekte. Unsere Leistungen sind auf Ihre Anforderungen zugeschnitten: flexibel, skalierbar und praxisnah.",
              },
              {
                number: "3",
                title: "Unser Team",
                desc: "Hinter CSAV Container steht ein engagiertes Team aus erfahrenen Fachleuten. Wir arbeiten strukturiert und lösungsorientiert und sind stets bestrebt, für jede Anforderung die bestmögliche Lösung zu finden. Regelmäßige Schulungen stellen sicher, dass unsere Prozesse und unser Fachwissen stets aktuell bleiben.",
              },
              {
                number: "4",
                title: "Unsere Werte",
                desc: "Integrität, Qualität und ein Innovationsgeist prägen unser tägliches Handeln. Wir arbeiten verantwortungsbewusst und transparent, mit Fokus auf nachhaltige Lösungen. Respekt im Umgang miteinander – intern wie auch gegenüber Kunden und Partnern – ist für uns eine Selbstverständlichkeit.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-7 flex gap-5"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactBanner />
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Unsere Werte" title="Wofür wir stehen" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <v.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}