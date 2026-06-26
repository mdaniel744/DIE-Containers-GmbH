"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Phone, label: "Telefon", value: "+49 151 243 71427", href: "tel:+491512437142" },
  { icon: Mail, label: "E-Mail", value: "verkauf@csavcontainers.com", href: "mailto:verkauf@csavcontainers.com" },
  { icon: MapPin, label: "Adresse", value: "Ballindamm 27, 20095 Hamburg" },
  { icon: Clock, label: "Öffnungszeiten", value: "Büro: Mo–Fr 8:00–17:30 | Lager: Mo–Fr 7:30–16:30" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">Kontakt</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mt-3 tracking-tight">
            Sprechen Sie mit uns
          </h1>
          <p className="text-muted-foreground mt-2 max-w-lg">
            Haben Sie Fragen oder benötigen eine Beratung? Unser Team steht Ihnen gerne zur Verfügung.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium hover:text-secondary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-xl border border-border p-10 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Nachricht gesendet!</h3>
                <p className="text-sm text-muted-foreground">
                  Vielen Dank. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>E-Mail *</Label>
                    <Input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="max@beispiel.de"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Telefon</Label>
                    <Input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+49 30 1234567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Betreff *</Label>
                    <Input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Allgemeine Anfrage"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Nachricht *</Label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Ihre Nachricht..."
                    className="min-h-[140px]"
                  />
                </div>
                <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold">
                  <Send className="w-4 h-4 mr-2" /> Nachricht senden
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}