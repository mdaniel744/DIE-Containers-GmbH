import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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

export default nextConfig;
