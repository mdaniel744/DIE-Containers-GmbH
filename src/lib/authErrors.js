/**
 * Maps raw error objects from the Base44 auth SDK to safe, user-friendly
 * messages. Never expose internal error details (stack traces, server names,
 * DB error strings) to the browser.
 */
export function friendlyAuthError(err, fallback = "An error occurred. Please try again.") {
  if (!err) return fallback;

  const status = err.status || err.statusCode || err.code;
  const msg = (err.message || "").toLowerCase();

  if (status === 401 || msg.includes("invalid") || msg.includes("incorrect") || msg.includes("wrong")) {
    return "Invalid email or password.";
  }
  if (status === 429 || msg.includes("rate") || msg.includes("too many")) {
    return "Too many attempts. Please wait a moment and try again.";
  }
  if (status === 409 || msg.includes("already") || msg.includes("exists")) {
    return "An account with this email already exists.";
  }
  if (status === 404 || msg.includes("not found")) {
    return "No account found with that email address.";
  }
  if (status === 400 || msg.includes("expired") || msg.includes("invalid token")) {
    return "This link has expired. Please request a new one.";
  }
  if (msg.includes("network") || msg.includes("fetch") || status >= 500) {
    return "A network error occurred. Please check your connection and try again.";
  }

  return fallback;
}
