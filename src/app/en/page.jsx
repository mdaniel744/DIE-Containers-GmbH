import Home from "@/views/Home";
import { makeMetadata } from "../seo";

export const metadata = makeMetadata({
  title: "Buy Shipping Containers in Germany | DIE Container GmbH",
  description:
    "Buy new and used 10ft, 20ft and 40ft shipping containers. DIE Container GmbH delivers across Germany and offers free consultation.",
  path: "/en",
  locale: "en",
});

export default function EnHomePage() {
  return <Home />;
}
