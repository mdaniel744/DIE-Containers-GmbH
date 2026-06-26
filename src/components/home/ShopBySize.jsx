"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";

const sizes = [
{
  size: "10ft",
  label: "10 Fuß Container",
  description: "Kompakt & vielseitig – ideal für Garten, Baustelle und kleine Lagerflächen.",
  image: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/3b5b9ecc9_Neuer10FuHighCubeVersandcontainer.jpg",
  path: "/kategorien/10ft"
},
{
  size: "20ft",
  label: "20 Fuß Container",
  description: "Der Klassiker – perfekt als Lager, Werkstatt oder für den Transport.",
  image: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/4f2bd8d74_20FuSchiffscontainer.jpg",
  path: "/kategorien/20ft"
},
{
  size: "40ft",
  label: "40 Fuß Container",
  description: "Maximaler Stauraum – für große Projekte und professionelle Nutzung.",
  image: "https://media.base44.com/images/public/6a32167d7cec7a3300a2d0b9/9750089f7_40Fuhighcubecontainerkaufen.jpg",
  path: "/kategorien/40ft"
}];


export default function ShopBySize() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Containergrößen"
          title="Container nach Größe"
          description="Finden Sie den passenden Container für Ihr Projekt – von kompakt bis XXL." />
        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {sizes.map((item, i) =>
          <motion.div
            key={item.size}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}>
            
              <Link
              to={item.path}
              className="group block relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-500">
              
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-secondary transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-secondary">
                    Jetzt ansehen
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}