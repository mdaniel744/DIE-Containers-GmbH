import { Suspense } from "react";
import ProductDetail from "@/views/ProductDetail";
import { makeMetadata } from "../../../seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "container";
  const readable = slug.replace(/-/g, " ");

  return makeMetadata({
    title: `${readable} kaufen | CSAV Container`,
    description:
      "Produktdetails, technische Daten, Bilder und unverbindliche Angebotsanfrage für diesen Container.",
    path: `/produkt/${slug}`,
  });
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ProductDetail />
    </Suspense>
  );
}
