import { Suspense } from "react";
import ResetPassword from "@/views/ResetPassword";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Passwort zurücksetzen | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ResetPassword />
    </Suspense>
  );
}
