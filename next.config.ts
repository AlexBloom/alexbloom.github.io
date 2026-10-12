import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  // Required for geist font package (next/font/local from node_modules)
  transpilePackages: ["geist"],
  // Emit a fully static site into `out/` — compatible with GitHub Pages
  output: "export",

  // GitHub Pages serves from the root when a custom domain is set (CNAME)
  // No basePath or assetPrefix needed for alexbloom.design
  trailingSlash: true,

  // next/image optimisation requires a server; disable for static export
  images: {
    unoptimized: true,
  },
};

export default function config(phase: string): NextConfig {
  return {
    ...nextConfig,
    // Builds must not overwrite the cache used by a running local preview.
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next-build",
  };
}
