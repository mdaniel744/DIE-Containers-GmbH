import { redirect } from "next/navigation";

export default async function EnSlugPage({ params }) {
  const { slug } = await params;
  const path = Array.isArray(slug) ? slug.join("/") : slug;
  redirect(`/${path}`);
}
