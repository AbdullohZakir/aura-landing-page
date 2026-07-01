import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// In Next.js 16 the `middleware` convention was renamed to `proxy`.
// next-intl's request handler works unchanged as the default export.
export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next internals, and files with an extension.
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
