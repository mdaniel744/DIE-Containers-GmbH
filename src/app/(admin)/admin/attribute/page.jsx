import AdminAttributes from "@/views/admin/AdminAttributes";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Attribute | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminAttributes />;
}
