import AdminProducts from "@/views/admin/AdminProducts";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Produkte | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminProducts />;
}
