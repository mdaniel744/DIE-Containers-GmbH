import AdminDashboard from "@/views/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminDashboard />;
}
