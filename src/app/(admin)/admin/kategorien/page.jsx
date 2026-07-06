import AdminCategories from "@/views/admin/AdminCategories";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Kategorien | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminCategories />;
}
