import Home from "@/views/Home";
import { makeMetadata } from "../seo";

export const metadata = makeMetadata({
  title: "Container Deutschland - Seecontainer kaufen | CSAV Container",
  description:
    "Neue und gebrauchte 10ft, 20ft und 40ft Seecontainer kaufen. CSAV Container liefert deutschlandweit und berät kostenlos.",
  path: "/",
  enPath: "/en",
});

export default function Page() {
  return <Home />;
}
