import AdminAttributes from "@/views/admin/AdminAttributes";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Attribute | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminAttributes />;
}
