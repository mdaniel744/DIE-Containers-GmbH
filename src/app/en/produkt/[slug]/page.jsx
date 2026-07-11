import { Suspense } from "react";
import { cache } from "react";
import ProductDetail from "@/views/ProductDetail";
import { makeMetadata, siteUrl } from "../../../seo";
import { supabaseServer, STORE_ID } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

const CONDITION_SCHEMA = {
  new: "https://schema.org/NewCondition",
  used: "https://schema.org/UsedCondition",
  refurbished: "https://schema.org/RefurbishedCondition",
};

const fetchProduct = cache(async (slug) => {
  if (!supabaseServer) return null;
  try {
    const { data } = await supabaseServer
      .from("products")
      .select("id, name, slug, short_description, description, price, images, condition, status")
      .eq("store_id", STORE_ID)
      .eq("slug", slug)
      .limit(1)
      .single();
    return data || null;
  } catch {
    return null;
  }
});

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  if (product) {
    return makeMetadata({
      title: `${product.name} — Buy for ${product.price?.toLocaleString("en-DE")} € | DIE Container GmbH`,
      description:
        product.short_description ||
        product.description ||
        `${product.name} – Buy shipping containers at DIE Container GmbH. Request a free quote today.`,
      path: `/en/produkt/${slug}`,
      locale: "en",
      enPath: `/en/produkt/${slug}`,
    });
  }

  const readable = slug.replace(/-/g, " ");
  return makeMetadata({
    title: `${readable} — Buy | DIE Container GmbH`,
    description:
      "Product details, technical specs, images and request a no-obligation quote for this container.",
    path: `/en/produkt/${slug}`,
    locale: "en",
    enPath: `/en/produkt/${slug}`,
  });
}

export default async function EnProductPage({ params }) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  let jsonLd = null;
  if (product) {
    const images = Array.isArray(product.images) ? product.images : [];
    jsonLd = {
      "@context": "https://schema.org/",
      "@type": "Product",
      name: product.name,
      description: product.short_description || product.description || "",
      ...(images[0] ? { image: images[0] } : {}),
      brand: { "@type": "Brand", name: "DIE Container GmbH" },
      identifier_exists: "false",
      offers: {
        "@type": "Offer",
        url: `${siteUrl}/en/produkt/${slug}`,
        priceCurrency: "EUR",
        price: product.price || 0,
        availability:
          product.status === "active"
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
        itemCondition:
          CONDITION_SCHEMA[product.condition] || "https://schema.org/UsedCondition",
        seller: { "@type": "Organization", name: "DIE Container GmbH" },
      },
    };
  }

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Suspense fallback={null}>
        <ProductDetail />
      </Suspense>
    </>
  );
}
