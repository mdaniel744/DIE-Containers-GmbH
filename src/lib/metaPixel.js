import {
  COOKIE_CONSENT,
  getStoredCookieConsent,
} from "./cookieConsent.js";

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "1324522606105588";

const META_PIXEL_SCRIPT_ID = "die-containers-meta-pixel";
const META_PIXEL_SCRIPT_URL =
  "https://connect.facebook.net/en_US/fbevents.js";

/**
 * @typedef {((...args: any[]) => void) & {
 *   callMethod?: (...args: any[]) => void,
 *   queue: any[][],
 *   push: (...args: any[]) => void,
 *   loaded: boolean,
 *   version: string
 * }} MetaPixelFunction
 */

/**
 * @returns {Window & {
 *   fbq?: MetaPixelFunction,
 *   _fbq?: MetaPixelFunction,
 *   __dieContainersMetaPixels?: Set<string>
 * }}
 */
function getBrowserWindow() {
  return /** @type {any} */ (window);
}

function isValidPixelId(pixelId) {
  return /^\d{5,30}$/.test(String(pixelId || ""));
}

/**
 * Install Meta's queue function without loading the external script yet.
 * @returns {MetaPixelFunction}
 */
function installMetaQueue() {
  const browserWindow = getBrowserWindow();
  if (browserWindow.fbq) return browserWindow.fbq;

  /** @type {MetaPixelFunction} */
  const fbq = /** @type {any} */ (function (...args) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  });

  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  browserWindow.fbq = fbq;
  browserWindow._fbq = fbq;
  return fbq;
}

function loadMetaScript() {
  if (document.getElementById(META_PIXEL_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = META_PIXEL_SCRIPT_ID;
  script.async = true;
  script.src = META_PIXEL_SCRIPT_URL;
  script.dataset.pixelId = META_PIXEL_ID;

  const firstScript = document.getElementsByTagName("script")[0];
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(script, firstScript);
  } else {
    document.head.appendChild(script);
  }
}

export function initializeMetaPixel(pixelId = META_PIXEL_ID) {
  if (typeof window === "undefined" || !isValidPixelId(pixelId)) return false;
  if (getStoredCookieConsent() !== COOKIE_CONSENT.ALL) return false;

  const browserWindow = getBrowserWindow();
  const fbq = installMetaQueue();
  loadMetaScript();

  browserWindow.__dieContainersMetaPixels ||= new Set();
  if (!browserWindow.__dieContainersMetaPixels.has(pixelId)) {
    fbq("init", pixelId);
    browserWindow.__dieContainersMetaPixels.add(pixelId);
  }
  fbq("consent", "grant");
  return true;
}

export function trackMetaPageView() {
  if (!initializeMetaPixel()) return false;
  getBrowserWindow().fbq?.("track", "PageView");
  return true;
}

export function revokeMetaPixelConsent() {
  if (typeof window === "undefined") return;
  getBrowserWindow().fbq?.("consent", "revoke");
}

export function trackMetaEvent(eventName, parameters = {}) {
  if (!initializeMetaPixel() || !eventName) return false;
  getBrowserWindow().fbq?.("track", eventName, parameters);
  return true;
}
