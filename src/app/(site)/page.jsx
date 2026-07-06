import Home from "@/views/Home";
import { makeMetadata } from "../seo";

export const metadata = makeMetadata({
  title: "DIE Container GmbH – Neue & gebrauchte Container kaufen",
  description:
    "Kaufen Sie neue und gebrauchte Container bei DIE Container GmbH. Wir bieten zuverlässige Containerlösungen für Unternehmen und Privatkunden in Deutschland und Europa.",
  path: "/",
  enPath: "/en",
});

export default function Page() {
  return <Home />;
}
