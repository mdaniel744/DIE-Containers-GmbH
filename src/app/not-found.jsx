import PageNotFound from "@/lib/PageNotFound";

export const metadata = {
  title: "404 - Seite nicht gefunden | CSAV Container",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <PageNotFound />;
}
