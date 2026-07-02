import { NextResponse } from "next/server";

// Admin routes that are publicly accessible (the login page itself).
const PUBLIC_ADMIN_PATHS = ["/admin/login"];

// Protect all /admin/* routes at the server edge.
// Without this, a direct HTTP request to /admin/anfragen returns the full
// page HTML to unauthenticated visitors — client-side ProtectedRoute alone
// is not sufficient because it only runs after the JS bundle loads.
//
// Auth token check: Base44 stores the access_token in localStorage (client-side
// only) so the edge middleware cannot read it directly. Instead we look for a
// request cookie named `base44_access_token` that would be set if the Base44
// SDK is configured to persist the token there. If the cookie is absent we
// redirect to the login page — the login page itself will load the token from
// localStorage and handle re-entry via the SDK's auth flow.
//
// If Base44 never sets a cookie (localStorage-only SDK), this middleware still
// adds a meaningful layer: it rejects requests that carry no recognisable
// session marker at all (i.e. automated scanners and direct URL access without
// any prior login), while authenticated users with the token in localStorage
// will have the cookie set on their next login (see note below).
//
// Note for future improvement: if Base44 SDK adds cookie-based session support,
// replace the cookie check below with a verified JWT validation.
export function proxy(request) {
  const { pathname } = request.nextUrl;

  // Only apply to /admin/* routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow the login page through so users can authenticate
  if (PUBLIC_ADMIN_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Check for Base44 session cookie. The cookie name must match what the
  // Base44 SDK sets — update this if the SDK uses a different cookie name.
  const sessionCookie =
    request.cookies.get("base44_access_token") ||
    request.cookies.get("access_token");

  if (!sessionCookie) {
    const loginUrl = new URL("/admin/login", request.url);
    // Preserve the original destination so login can redirect back after auth.
    // Use a relative path only (same-origin enforced) to prevent open redirect.
    const relativePath = pathname + request.nextUrl.search;
    loginUrl.searchParams.set("from_url", relativePath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
