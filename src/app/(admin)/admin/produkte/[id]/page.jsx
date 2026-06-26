import AdminProductEdit from "@/views/admin/AdminProductEdit";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Produkt bearbeiten | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminProductEdit />;
}
