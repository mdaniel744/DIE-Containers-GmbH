"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
} from "next/navigation";
import { getLocaleFromPathname, localePath, isLocalizablePath, DEFAULT_LOCALE } from "@/lib/locale";

// Resolve an internal href to be locale-aware.
// Only paths that have a real /en/ route get the locale prefix — everything
// else (German-only SEO landing pages, legal pages, etc.) stays un-prefixed
// so the user lands on the German version rather than hitting a 404.
function resolveHref(rawHref, locale) {
  if (
    locale === DEFAULT_LOCALE ||
    !rawHref ||
    typeof rawHref !== "string" ||
    !rawHref.startsWith("/") ||
    rawHref.startsWith(`/${locale}`) ||
    !isLocalizablePath(rawHref)
  ) {
    return rawHref;
  }
  return localePath(rawHref, locale);
}

const readBrowserLocation = () => {
  if (typeof window === "undefined") {
    return { search: "", hash: "" };
  }

  return {
    search: window.location.search,
    hash: window.location.hash,
  };
};

export function Link({ to, href, replace, children, ...props }) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const rawHref = href || to || "#";
  const resolvedHref = resolveHref(rawHref, locale);

  return (
    <NextLink href={resolvedHref} replace={replace} {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  const pathname = usePathname() || "/";
  const [browserLocation, setBrowserLocation] = useState(readBrowserLocation);

  useEffect(() => {
    const updateLocation = () => setBrowserLocation(readBrowserLocation());

    updateLocation();
    window.addEventListener("popstate", updateLocation);
    window.addEventListener("hashchange", updateLocation);

    return () => {
      window.removeEventListener("popstate", updateLocation);
      window.removeEventListener("hashchange", updateLocation);
    };
  }, [pathname]);

  return useMemo(
    () => ({
      pathname,
      search: browserLocation.search,
      hash: browserLocation.hash,
      state: null,
      key: pathname,
    }),
    [browserLocation.hash, browserLocation.search, pathname]
  );
}

export function useNavigate() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return (to, options = {}) => {
    if (typeof to === "number") {
      window.history.go(to);
      return;
    }

    const resolved = resolveHref(to, locale);
    if (options.replace) router.replace(resolved);
    else router.push(resolved);
  };
}

export function useParams() {
  return useNextParams();
}

export function useSearchParams() {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [params, setParams] = useState(() => new URLSearchParams());

  useEffect(() => {
    const updateParams = () => setParams(new URLSearchParams(window.location.search));

    updateParams();
    window.addEventListener("popstate", updateParams);

    return () => window.removeEventListener("popstate", updateParams);
  }, [pathname]);

  const setSearchParams = useCallback((nextParams) => {
    const query =
      nextParams instanceof URLSearchParams
        ? nextParams.toString()
        : new URLSearchParams(nextParams).toString();

    setParams(new URLSearchParams(query));
    router.push(query ? `${pathname}?${query}` : pathname);
  }, [pathname, router]);

  return [params, setSearchParams];
}

export function useNavigationType() {
  return "PUSH";
}

export function Navigate({ to, replace = false }) {
  const router = useRouter();

  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [replace, router, to]);

  return null;
}

export function BrowserRouter({ children }) {
  return <>{children}</>;
}

export function Routes({ children }) {
  return <>{children}</>;
}

export function Route() {
  return null;
}

export function Outlet() {
  return null;
}
