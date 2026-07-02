"use client";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/lib/locale";

/**
 * Returns the current locale string based on the URL pathname.
 * "de" for all German pages (no prefix), "en" for /en/* pages.
 * Used by components that need to know which language they're rendering in.
 */
export function useLocale() {
  const pathname = usePathname();
  return getLocaleFromPathname(pathname);
}
