import { Suspense } from "react";
import ProductDetail from "@/views/ProductDetail";
import { makeMetadata } from "../../../seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || "container";
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

export default function EnProductPage() {
  return (
    <Suspense fallback={null}>
      <ProductDetail />
    </Suspense>
  );
}
