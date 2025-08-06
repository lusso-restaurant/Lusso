import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/LussoV3' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/LussoV3/' : '',
};

export default nextConfig;
