"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import NextLink from "next/link";
import {
  useParams as useNextParams,
  usePathname,
  useRouter,
} from "next/navigation";

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
  return (
    <NextLink href={href || to || "#"} replace={replace} {...props}>
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

  return (to, options = {}) => {
    if (typeof to === "number") {
      window.history.go(to);
      return;
    }

    if (options.replace) router.replace(to);
    else router.push(to);
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
