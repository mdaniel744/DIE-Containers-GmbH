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
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-secondary-foreground mb-4">
              Bereit für Ihren Container?
            </h2>
            <p className="text-lg text-secondary-foreground/70 mb-8 max-w-lg mx-auto">
              Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/angebot">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-heading font-semibold px-8 h-13">
                  Kostenloses Angebot anfordern
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/shop">
                <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10 font-heading font-semibold px-8 h-13">
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
