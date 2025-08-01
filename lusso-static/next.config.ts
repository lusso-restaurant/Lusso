import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/LussoV3",
  assetPrefix: "/LussoV3",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
