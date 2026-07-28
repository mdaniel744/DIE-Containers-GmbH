export const COOKIE_CONSENT_STORAGE_KEY = "die-containers-cookie-consent";
export const COOKIE_CONSENT_EVENT = "die-containers-cookie-consent-change";
export const OPEN_COOKIE_SETTINGS_EVENT = "die-containers-open-cookie-settings";

export const COOKIE_CONSENT = Object.freeze({
  ALL: "accepted",
  ESSENTIAL: "essential",
});

export function getStoredCookieConsent() {
  if (typeof window === "undefined") return null;

  const value = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  return Object.values(COOKIE_CONSENT).includes(value) ? value : null;
}

export function setStoredCookieConsent(value) {
  if (typeof window === "undefined") return;
  if (!Object.values(COOKIE_CONSENT).includes(value)) return;

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, value);
  window.dispatchEvent(
    new CustomEvent(COOKIE_CONSENT_EVENT, { detail: value })
  );
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}
