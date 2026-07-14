"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";
import { supabase, STORE_ID } from "@/lib/supabaseClient";

const ICONS = [Phone, Mail, MapPin, Clock];

export default function Contact() {
  const T = useSection("contact");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const { error } = await supabase.from("inquiries").insert({
        store_id: STORE_ID,
        product_id: null,
        customer_name: name,
        customer_email: email,
        customer_phone: form.phone.trim() || null,
        message,
        details: {
          source: "kontakt-form",
          subject: form.subject.trim() || null,
        },
      });
      if (error) throw error;
      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      console.error("[kontakt] submit failed:", err);
      setSubmitError("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20 lg:pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <span className="font-mono text-xs text-secondary tracking-widest uppercase">{T.label}</span>
          <h1 className="font-heading font-bold text-3xl lg:text-4xl mt-3 tracking-tight">{T.title}</h1>
          <p className="text-muted-foreground mt-2 max-w-lg">{T.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-4">
            {T.infoItems.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-secondary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-card rounded-xl border border-border p-10 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Check className="w-7 h-7 text-emerald-500" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{T.sentTitle}</h3>
                <p className="text-sm text-muted-foreground">{T.sentText}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-xl border border-border p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label>{T.nameLabel} *</Label>
                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={T.namePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label>{T.emailLabel} *</Label>
                    <Input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder={T.emailPlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label>{T.phoneLabel}</Label>
                    <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder={T.phonePlaceholder} />
                  </div>
                  <div className="space-y-2">
                    <Label>{T.subjectLabel} *</Label>
                    <Input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder={T.subjectPlaceholder} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>{T.messageLabel} *</Label>
                  <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={T.messagePlaceholder} className="min-h-[140px]" />
                </div>
                <Button type="submit" disabled={submitting} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-semibold">
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Wird gesendet…
                    </span>
                  ) : (
                    <><Send className="w-4 h-4 mr-2" /> {T.submit}</>
                  )}
                </Button>
                {submitError && (
                  <div className="mt-3 p-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-sm text-rose-700 dark:text-rose-400">
                    {submitError}{" "}
                    <button type="button" className="underline font-medium hover:no-underline" onClick={() => setSubmitError(null)}>
                      Erneut versuchen
                    </button>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
