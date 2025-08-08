import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/Lusso' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Lusso/' : '',
};

export default nextConfig;
