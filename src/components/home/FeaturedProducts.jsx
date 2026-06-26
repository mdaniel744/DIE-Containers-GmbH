"use client";
import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import ProductCard from "@/components/shared/ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function FeaturedProducts() {
  const { products, loading } = useProducts();
  const featured = products.filter((p) => p.is_featured).slice(0, 8);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Beliebte Produkte"
          title="Unsere meistgefragten Container"
          description="Entdecken Sie die beliebtesten Container unserer Kunden – von Standard bis Spezial."
        />

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-8 h-8 border-4 border-border border-t-foreground rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}