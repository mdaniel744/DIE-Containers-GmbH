"use client";
import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ShopBySize from "@/components/home/ShopBySize";
import ContainerTypes from "@/components/home/ContainerTypes";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import DeliveryProcess from "@/components/home/DeliveryProcess";
import FAQSection from "@/components/home/FAQSection";
import AboutSection from "@/components/home/AboutSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ShopBySize />
      <ContainerTypes />
      <FeaturedProducts />
      <WhyChooseUs />
      <AboutSection />
      <DeliveryProcess />
      <FAQSection />

      {/* CTA */}
      <section className="bg-[#DDF4DF] py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-[#123E19] sm:text-5xl lg:text-6xl">
              Bereit für Ihren Container?
            </h2>
            <p className="mx-auto mb-9 mt-5 max-w-lg text-lg text-muted-foreground">
              Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/angebot">
                <Button size="lg" className="h-14 rounded-full bg-[#46C54B] px-8 font-heading font-bold text-white hover:bg-[#3CAF41]">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="h-14 rounded-full border-[#176B20]/30 bg-white px-8 font-heading font-bold text-[#176B20] hover:bg-white/70 hover:text-[#123E19]">
                  Shop durchstöbern
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
