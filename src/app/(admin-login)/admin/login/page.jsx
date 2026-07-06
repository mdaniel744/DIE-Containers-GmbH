import AdminLogin from "@/views/admin/AdminLogin";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Login | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminLogin />;
}
