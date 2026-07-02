"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/locale";

// Sets document.documentElement.lang after hydration so the HTML lang
// attribute matches the current locale. The SSR default is "de" (set in
// layout.jsx); this corrects it to "en" on /en/* pages client-side.
// Googlebot executes JS and will see the correct value; screen readers
// re-read lang dynamically after hydration as well.
export function LocaleHtmlLang() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = getLocaleFromPathname(pathname);
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
