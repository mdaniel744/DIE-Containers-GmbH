"use client";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useSection } from "@/lib/i18n";
import { getImageProps } from "next/image";

const HERO_ALT = "Shipping containers available from DIE Container GmbH";

function HeroPicture() {
  const { props: desktop } = getImageProps({
    src: "/images/neue-versand-container-kaufen-desktop.webp",
    alt: HERO_ALT,
    width: 1920,
    height: 700,
    sizes: "100vw",
    quality: 82,
    priority: true,
  });
  const { props: mobile } = getImageProps({
    src: "/images/neue-versand-container-kaufen-mobile.webp",
    alt: HERO_ALT,
    width: 900,
    height: 1200,
    sizes: "100vw",
    quality: 80,
    priority: true,
  });

  return (
    <picture>
      <source media="(max-width: 767px)" srcSet={mobile.srcSet} sizes={mobile.sizes} />
      <img {...desktop} className="h-full w-full object-cover" />
    </picture>
  );
}

export default function HeroSection() {
  const T = useSection("hero");

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <HeroPicture />
        <div className="absolute inset-0 bg-black/65 lg:hidden" />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.78) 30%, rgba(0,0,0,0.4) 48%, rgba(0,0,0,0.08) 66%, rgba(0,0,0,0) 78%)" }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36">
        <div className="max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="font-heading text-5xl font-bold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.6rem] xl:text-[6.4rem]">
            {T.title1}<span className="text-[#7CF081]">{T.titleColored}</span>{T.title2}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mt-7 max-w-2xl text-lg leading-relaxed text-white sm:text-2xl">
            {T.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to="/shop">
              <Button size="lg" className="h-14 w-full rounded-full bg-[#46C54B] px-9 font-heading text-base font-bold text-white shadow-[0_14px_34px_rgba(70,197,75,0.28)] hover:bg-[#3CAF41] sm:w-auto">
                {T.ctaExplore}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/angebot">
              <Button size="lg" variant="outline" className="h-14 w-full rounded-full border-white/40 bg-white/5 px-9 font-heading text-base font-bold text-white backdrop-blur-sm hover:bg-white hover:text-[#0B3511] sm:w-auto">
                <FileText className="w-4 h-4 mr-2" />
                {T.ctaQuote}
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

