"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/shared/SectionHeading";
import { Search, MapPin, FileText, Mail, Truck, Phone, AtSign, Clock, ArrowRight } from "lucide-react";

const ORANGE = "#F28C28";

const steps = [
{ icon: Search, label: "Container auswählen", desc: "Finden Sie den passenden Container in unserem Shop." },
{ icon: MapPin, label: "Lieferadresse eingeben", desc: "Geben Sie Ihren Wunschort für die Lieferung an." },
{ icon: FileText, label: "Angebot anfordern", desc: "Fordern Sie ein unverbindliches Angebot an." },
{ icon: Mail, label: "Angebot erhalten", desc: "Erhalten Sie Ihr individuelles Angebot per E-Mail." },
{ icon: Truck, label: "Lieferung vereinbaren", desc: "Vereinbaren Sie den Liefertermin nach Auftragsbestätigung." }];


export default function DeliveryProcess() {
  return (
    <>
    <section className="py-20 lg:py-28 bg-muted/50 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
            label="So funktioniert's"
            title="In 5 Schritten zum Container"
            description="Einfach, transparent und schnell – Ihr Weg zum eigenen Container." />
          

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) =>
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative">
              
              <div className="bg-card rounded-xl border border-border p-6 text-center h-full hover:shadow-md transition-shadow">
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-sm text-secondary">{i + 1}</span>
                </div>
                <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center text-muted-foreground">
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-2">{step.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
            )}
        </div>
      </div>
    </section>

    {/* Contact Info Banner */}
    <div style={{ background: "linear-gradient(135deg,#1B3A5C,#0f2540)" }} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left: headline */}
          <div className="text-center lg:text-left">
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: ORANGE }}>Direktkontakt</p>
            <h2 className="font-heading font-bold text-white text-2xl lg:text-3xl leading-tight">
              Fragen? Wir sind persönlich für Sie da.
            </h2>
          </div>

          {/* Center: contact details */}
          <div className="flex flex-col sm:flex-row gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,140,40,0.2)" }}>
                <Phone className="w-4 h-4" style={{ color: ORANGE }} />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Telefon</p>
                <a href="tel:+4940000000" className="font-heading font-semibold text-white hover:opacity-80 transition-opacity">+49 151 243 71427 </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,140,40,0.2)" }}>
                <AtSign className="w-4 h-4" style={{ color: ORANGE }} />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">E-Mail</p>
                <a href="mailto:info@csav-container.de" className="font-heading font-semibold text-white hover:opacity-80 transition-opacity break-all">verkauf@csavcontainers.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(242,140,40,0.2)" }}>
                <Clock className="w-4 h-4" style={{ color: ORANGE }} />
              </div>
              <div>
                <p className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">Erreichbar</p>
                <p className="font-heading font-semibold text-white">Mo–Fr 8–18 Uhr</p>
              </div>
            </div>
          </div>

          {/* Right: CTA */}
          <div className="shrink-0">
            <Link
                to="/angebot"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-heading font-bold text-sm text-[#1a1a1a] hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: ORANGE }}>
                
              <Truck className="w-4 h-4" />
              Container anfragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>);

}