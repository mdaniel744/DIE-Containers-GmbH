import AdminDashboard from "@/views/admin/AdminDashboard";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminDashboard />;
}
