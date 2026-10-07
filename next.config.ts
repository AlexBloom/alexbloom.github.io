import type { NextConfig } from "next";

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

export default nextConfig;
