import ForgotPassword from "@/views/ForgotPassword";

export const metadata = {
  title: "Passwort vergessen | CSAV Container",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPassword />;
}
