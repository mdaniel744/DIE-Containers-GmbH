import AdminCategories from "@/views/admin/AdminCategories";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Kategorien | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminCategories />;
}
