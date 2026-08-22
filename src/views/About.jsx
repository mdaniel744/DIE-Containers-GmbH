"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Mail,
  MapPin,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import ContactBanner from "@/components/shared/ContactBanner";
import MediaImage from "@/components/shared/MediaImage";

const LOGISTICS_IMAGE = "/images/about/container-terminal-logistics.webp";
const HERO_BACKGROUND = "/images/about/about-hero-container-depot.webp";
const VALUES_BACKGROUND = "/images/about/about-values-container-depot.webp";

const TEAM_PRINCIPLES = [
  {
    icon: Workflow,
    title: "Strukturiert",
    description: "Transparente Abläufe von der ersten Anfrage bis zur Lieferung.",
  },
  {
    icon: Lightbulb,
    title: "Lösungsorientiert",
    description: "Eine passende und wirtschaftliche Lösung für den Kauf gängiger Standard- und Seecontainer.",
  },
  {
    icon: GraduationCap,
    title: "Technisch auf dem neuesten Stand",
    description: "Regelmäßige Schulungen zu aktuellen Prozessen, Produkten und zur Kundenberatung.",
  },
];

const VALUES = [
  {
    icon: Scale,
    title: "Integrität",
    description:
      "Unser Kundenservice beantwortet Ihre Fragen vor dem Kauf transparent, damit Sie eine fundierte Entscheidung treffen können.",
  },
  {
    icon: ShieldCheck,
    title: "Qualität",
    description:
      "Wir achten sorgfältig auf die Auswahl und den dokumentierten Zustand der Container, bevor sie an unsere Kunden ausgeliefert werden.",
  },
  {
    icon: Lightbulb,
    title: "Weiterentwicklung",
    description:
      "Wir entwickeln unseren Service kontinuierlich weiter, damit Containerzustand, Beratung und Abwicklung noch besser zu Ihren Anforderungen passen.",
  },
];

const FACTS = [
  { value: "Seit 2020", label: "im Containerhandel" },
  { value: "Deutschlandweit", label: "Beratung und Lieferung" },
  { value: "Handel · Miete · Transport", label: "aus einer Hand koordiniert" },
];

export default function About() {
  return (
    <div className="overflow-hidden pb-20 pt-20 lg:pt-24">
      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-black py-16 text-white sm:min-h-[680px] sm:py-20 lg:min-h-[720px] lg:py-28">
        <MediaImage
          src={HERO_BACKGROUND}
          alt="Containerdepot mit Lkw und Seecontainern"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={2400}
          height={703}
          sizes="100vw"
          quality={82}
          priority
        />
        <div className="absolute inset-0 bg-black/70 lg:hidden" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 34%, rgba(0,0,0,0.48) 54%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.08) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.22em] text-white/80">
              DIE Container GmbH
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl lg:text-7xl">
              Über uns.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
              Seit Oktober 2020 unterstützen wir Unternehmen und Privatkunden in ganz Deutschland mit fairen, zuverlässigen und praktischen Containerlösungen.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-heading text-sm font-bold text-[#176B20] transition-transform hover:-translate-y-0.5"
              >
                Container ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center rounded-full border border-white/55 px-7 py-3.5 font-heading text-sm font-bold text-white transition-colors hover:bg-white/15"
              >
                Persönlich beraten lassen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {FACTS.map((fact, index) => (
            <motion.div
              key={fact.value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[1.5rem] border border-[#CDEBCD] bg-[#F4FBF4] p-6"
            >
              <p className="font-heading text-xl font-bold text-[#176B20] lg:text-2xl">{fact.value}</p>
              <p className="mt-1 text-sm leading-6 text-[#34533A]">{fact.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[2rem] bg-[#DDF4DF] p-3"
          >
            <MediaImage
              src={LOGISTICS_IMAGE}
              alt="Containerterminal mit Transport- und Umschlagtechnik"
              className="h-[340px] w-full rounded-[1.4rem] object-cover sm:h-[440px] lg:h-[520px]"
              width={1080}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={82}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#23832B]">
              Unser Unternehmen
            </p>
            <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0D2A12] sm:text-5xl lg:text-6xl">
              Fairer Containerhandel seit Oktober 2020.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[#34533A] sm:text-lg">
              <p>
                Seit Oktober 2020 steht die DIE Container GmbH für einen fairen und zuverlässigen Containerhandel in Deutschland. Aus dem ursprünglichen Angebot an Lagerlösungen hat sich ein vielseitiges Unternehmen für den Verkauf, die Vermietung und den Transport von Containern entwickelt.
              </p>
              <p>
                Heute begleiten wir unsere Kunden von der Auswahl des richtigen Containers bis zur pünktlichen Lieferung. Für Verladung und Transport koordinieren wir die entsprechende Technik, damit Seecontainer fachgerecht abgeholt, sicher transportiert und am gewünschten Ort bereitgestellt werden.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#DDF4DF] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#23832B]">
                Unser Team
              </p>
              <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#0D2A12] sm:text-5xl lg:text-6xl">
                Erfahrenes Team.
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="space-y-4 text-base leading-8 text-[#34533A] sm:text-lg"
            >
              <p>
                Hinter der DIE Container GmbH steht ein engagiertes Team mit Erfahrung in den Bereichen Containerhandel, Logistik und Kundenberatung. Wir arbeiten strukturiert und lösungsorientiert. Dabei verfolgen wir das Ziel, für Kunden, die Seecontainer kaufen möchten, eine passende und wirtschaftliche Lösung zu finden.
              </p>
              <p>
                Regelmäßige Schulungen und die kontinuierliche Weiterentwicklung unserer Abläufe halten unser Team und unser Fachwissen auf dem neuesten Stand.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TEAM_PRINCIPLES.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.75rem] bg-white p-7 shadow-[0_18px_45px_-34px_rgba(13,42,18,0.45)]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#46C54B] text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0D2A12]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#34533A]">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-20 text-white lg:py-28">
        <MediaImage
          src={VALUES_BACKGROUND}
          alt="Seecontainer und Transportfahrzeuge in einem Containerdepot"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={2400}
          height={703}
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              Unsere Werte
            </p>
            <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Unsere Unternehmenswerte.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
              Integrität, Qualität und Offenheit für neue Lösungen prägen unsere tägliche Arbeit. Wir handeln verantwortungsbewusst, transparent und mit Blick auf langlebige, ressourcenschonende Containerlösungen.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[1.75rem] border border-white/40 bg-white/95 p-7 shadow-[0_24px_55px_-32px_rgba(0,0,0,0.85)] backdrop-blur-sm lg:p-8"
                >
                  <Icon className="h-7 w-7 text-[#23832B]" />
                  <h3 className="mt-6 font-heading text-2xl font-bold text-[#0D2A12]">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#34533A]">{value.description}</p>
                </motion.article>
              );
            })}
          </div>

          <p className="mx-auto mt-9 max-w-3xl text-center text-base leading-7 text-white/90">
            Ein respektvoller Umgang ist für uns selbstverständlich – im Team ebenso wie in der Zusammenarbeit mit Kunden, Lieferanten und Partnern.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#23832B]">
              Unser Standort
            </p>
            <h2 className="font-heading text-4xl font-bold leading-[1.04] tracking-[-0.04em] text-[#0D2A12] sm:text-5xl">
              Unser Hauptsitz befindet sich in Putzbrunn.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#34533A]">
              Von unserem Standort in der Nähe von München aus koordinieren wir die Beratung, den Containerhandel und die Lieferungen für Kunden in ganz Deutschland.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#CDEBCD] bg-[#F4FBF4] p-7 sm:p-9">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4 sm:col-span-2">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#23832B]" />
                <div>
                  <p className="font-heading font-bold text-[#0D2A12]">DIE Container GmbH</p>
                  <p className="mt-1 text-sm leading-6 text-[#34533A]">
                    Hermann-Oberth-Str. 23<br />85640 Putzbrunn, Deutschland
                  </p>
                </div>
              </div>
              <a href="mailto:contact@diecontainers.com" className="flex gap-4 rounded-2xl bg-white p-4 transition-transform hover:-translate-y-0.5">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#23832B]" />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#34533A]">E-Mail</p>
                  <p className="mt-1 break-all font-heading font-bold text-[#0D2A12]">contact@diecontainers.com</p>
                </div>
              </a>
            </div>
            <div className="mt-6 flex items-start gap-3 border-t border-[#CDEBCD] pt-6 text-sm leading-6 text-[#34533A]">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#23832B]" />
              <span>Handelsregister HRB 256757 · USt-IdNr. DE 330443785</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ContactBanner />
        </div>
      </section>
    </div>
  );
}
