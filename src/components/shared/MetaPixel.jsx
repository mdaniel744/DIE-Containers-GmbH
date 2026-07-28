"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  COOKIE_CONSENT,
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  getStoredCookieConsent,
} from "@/lib/cookieConsent";
import {
  revokeMetaPixelConsent,
  trackMetaPageView,
} from "@/lib/metaPixel";

export default function MetaPixel() {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const [consent, setConsent] = useState(null);
  const lastTrackedPage = useRef("");
  const queryString = searchParams.toString();
  const pageKey = useMemo(
    () => (queryString ? `${pathname}?${queryString}` : pathname),
    [pathname, queryString]
  );

  useEffect(() => {
    const handleConsentChange = (event) => {
      setConsent(event.detail || getStoredCookieConsent());
    };
    const handleStorage = (event) => {
      if (event.key === COOKIE_CONSENT_STORAGE_KEY) {
        setConsent(getStoredCookieConsent());
      }
    };

    setConsent(getStoredCookieConsent());
    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  useEffect(() => {
    if (consent !== COOKIE_CONSENT.ALL) {
      lastTrackedPage.current = "";
      revokeMetaPixelConsent();
      return;
    }
    if (lastTrackedPage.current === pageKey) return;

    if (trackMetaPageView()) {
      lastTrackedPage.current = pageKey;
    }
  }, [consent, pageKey]);

  return null;
}
