import AdminLogin from "@/views/admin/AdminLogin";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Login | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminLogin />;
}
