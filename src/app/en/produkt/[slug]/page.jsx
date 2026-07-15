import { redirect } from "next/navigation";

export default async function EnProductPage({ params }) {
  const { slug } = await params;
  redirect(`/produkt/${slug}`);
}
