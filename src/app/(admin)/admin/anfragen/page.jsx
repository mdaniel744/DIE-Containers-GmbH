import AdminQuotes from "@/views/admin/AdminQuotes";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Anfragen | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <AdminQuotes />;
}
