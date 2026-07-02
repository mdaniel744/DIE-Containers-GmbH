import path from "node:path";
import { fileURLToPath } from "node:url";
import withPWAInit from "@ducanh2912/next-pwa";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Fail fast in production if required env vars are absent.
// Silent fallback to mock data in production would serve stale/empty content
// with no error — this makes misconfigurations immediately obvious at build time.
if (process.env.NODE_ENV === "production") {
  const required = [
    "NEXT_PUBLIC_SUPABASE_URL",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY",
    "NEXT_PUBLIC_STORE_ID",
  ];
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(
        `Missing required environment variable: ${key}. ` +
        `Set it in .env.local or your deployment environment before building.`
      );
    }
  }
}
const appBaseUrl =
  process.env.NEXT_PUBLIC_BASE44_APP_BASE_URL ||
  process.env.VITE_BASE44_APP_BASE_URL ||
  "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE44_APP_ID:
      process.env.NEXT_PUBLIC_BASE44_APP_ID || process.env.VITE_BASE44_APP_ID || "",
    NEXT_PUBLIC_BASE44_APP_BASE_URL: appBaseUrl,
    NEXT_PUBLIC_BASE44_FUNCTIONS_VERSION:
      process.env.NEXT_PUBLIC_BASE44_FUNCTIONS_VERSION ||
      process.env.VITE_BASE44_FUNCTIONS_VERSION ||
      "",
    NEXT_PUBLIC_SITE_URL:
      process.env.NEXT_PUBLIC_SITE_URL || "https://csavcontainer.de",
  },
  async rewrites() {
    if (!appBaseUrl) return [];

    return [
      {
        source: "/api/:path*",
        destination: `${appBaseUrl.replace(/\/$/, "")}/api/:path*`,
      },
    ];
  },
  webpack(config) {
    config.resolve.alias["react-router-dom"] = path.resolve(
      __dirname,
      "src/lib/next-router-compat.jsx"
    );
    return config;
  },
};

// PWA configuration — caches the app shell and assets aggressively so the
// site loads fast (or at all) on slow/intermittent connections, and Chrome
// shows an "Install" prompt so users can add it to their home screen.
const withPWA = withPWAInit({
  dest: "public",           // service worker output: public/sw.js
  cacheOnFrontEndNav: true, // cache page navigations in the browser
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,     // reload stale page when connection returns
  disable: process.env.NODE_ENV === "development", // no SW in dev (avoids stale cache confusion)
  workboxOptions: {
    // Network-first for HTML pages: show fresh content when online,
    // fall back to cache when offline. Ideal for product/shop pages.
    runtimeCaching: [
      {
        // Supabase API — stale-while-revalidate: show cached product/category
        // data instantly, refresh in the background. Perfect for slow connections.
        urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
        handler: "StaleWhileRevalidate",
        options: {
          cacheName: "supabase-api-cache",
          expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 }, // 24h
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        // Next.js static chunks (JS, CSS) — cache-first, long TTL.
        // These have content hashes in filenames so stale-serving is safe.
        urlPattern: /\/_next\/static\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "next-static-cache",
          expiration: { maxEntries: 128, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        // Product and category images — cache-first, 30-day TTL.
        urlPattern: /\.(png|jpg|jpeg|svg|gif|webp|avif|ico)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "image-cache",
          expiration: { maxEntries: 128, maxAgeSeconds: 60 * 60 * 24 * 30 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        // All other fetches (pages, fonts, CDN assets) — network-first
        // with a 10-second timeout before falling back to cache.
        urlPattern: /.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "general-cache",
          networkTimeoutSeconds: 10,
          expiration: { maxEntries: 64, maxAgeSeconds: 60 * 60 * 24 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
});

export default withPWA(nextConfig);
