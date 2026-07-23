"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Truck, Shield, Wrench, Headphones, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { DELIVERY_IMAGE } from "@/lib/productData";
import ContactBanner from "@/components/shared/ContactBanner";
import { useSection } from "@/lib/i18n";

const VALUE_ICONS = [Users, Shield, Truck, Wrench, Headphones];
const LOCATION_ICONS = [MapPin, Phone, Mail];

export default function About() {
  const T = useSection("about");

  return (
    <div className="pt-20 lg:pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 blueprint-line opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <span className="font-mono text-xs text-white/80 tracking-widest uppercase">{T.label}</span>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl mt-4 mb-6 tracking-tight">
                {T.title}<span className="text-white">{T.titleColored}</span>{T.title2}
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">{T.body}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-xl overflow-hidden">
              <img src={DELIVERY_IMAGE} alt={T.imgAlt} className="w-full h-72 lg:h-96 object-cover rounded-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {T.stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <p className="font-heading font-bold text-3xl lg:text-4xl text-secondary">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business credentials */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-secondary shrink-0" /><span>Eingetragen: DIE Container GmbH</span></span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /><span>Handelsregister: HRB 256757</span></span>
            <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-secondary shrink-0" /><span>USt-IdNr.: DE 330443785</span></span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-secondary shrink-0" /><span>Putzbrunn, Bayern, Deutschland</span></span>
          </div>
        </div>
      </section>

      {/* Why Trust */}
      <section className="py-20 lg:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={T.trustLabel} title={T.trustTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
            {T.trustItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-7 flex gap-5">
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary flex items-center justify-center font-heading font-bold text-secondary-foreground text-lg">
                  {i + 1}
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

      {/* Values */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading label={T.valuesLabel} title={T.valuesTitle} />
          {T.valuesIntro && (
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center -mt-2 mb-10">
              {T.valuesIntro}
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {T.values.map((v, i) => {
              const Icon = VALUE_ICONS[i % VALUE_ICONS.length];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl border border-border p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      {T.whyItems?.length > 0 && (
        <section className="py-20 lg:py-28 bg-muted/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading label={T.whyLabel} title={T.whyTitle} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {T.whyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-card rounded-xl border border-border p-6"
                >
                  <CheckCircle className="w-5 h-5 text-secondary mb-4" />
                  <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location */}
      {T.locationTitle && (
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="font-mono text-xs text-secondary tracking-widest uppercase">{T.locationLabel}</span>
                <h2 className="font-heading font-bold text-2xl lg:text-3xl tracking-tight mt-3 mb-4">{T.locationTitle}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{T.locationBody}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl border border-border p-6 lg:p-8"
              >
                <div className="space-y-5">
                  {T.locationDetails?.map((item, i) => {
                    const Icon = LOCATION_ICONS[i % LOCATION_ICONS.length];
                    const content = (
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-sm text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground mt-1">{item.value}</p>
                        </div>
                      </div>
                    );
                    return item.href ? (
                      <a key={i} href={item.href} className="block hover:opacity-80 transition-opacity">
                        {content}
                      </a>
                    ) : (
                      <div key={i}>{content}</div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Banner */}
      <section className="py-4 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactBanner />
        </div>
      </section>
    </div>
  );
}
