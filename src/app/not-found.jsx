import PageNotFound from "@/lib/PageNotFound";

export const metadata = {
  title: "404 - Seite nicht gefunden | DIE Container GmbH",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <PageNotFound />;
}
