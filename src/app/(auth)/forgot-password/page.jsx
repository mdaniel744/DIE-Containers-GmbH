import ForgotPassword from "@/views/ForgotPassword";

export const metadata = {
  title: "Passwort vergessen | DIE Container GmbH",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <ForgotPassword />;
}
