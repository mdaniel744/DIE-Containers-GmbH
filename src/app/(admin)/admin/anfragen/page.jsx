import AdminQuotes from "@/views/admin/AdminQuotes";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Anfragen | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminQuotes />;
}
