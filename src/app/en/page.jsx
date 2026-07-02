import Home from "@/views/Home";
import { makeMetadata, siteUrl } from "../seo";

export const metadata = makeMetadata({
  title: "Buy Shipping Containers in Germany | CSAV Container",
  description:
    "Buy new and used 10ft, 20ft and 40ft shipping containers. CSAV Container delivers across Germany and offers free consultation.",
  path: "/en",
  locale: "en",
});

export default function EnHomePage() {
  return <Home />;
}
