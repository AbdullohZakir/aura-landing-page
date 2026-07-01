import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",
  // Pin the workspace root so Turbopack doesn't get confused by lockfiles
  // in parent folders (e.g. the OneDrive Desktop).
  turbopack: {
    root: path.resolve(),
  },
};

export default withNextIntl(nextConfig);
