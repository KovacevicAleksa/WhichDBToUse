import type { NextConfig } from "next";

const nextConfig = {
  basePath: '/WhichDBToUse',
  assetPrefix: '/WhichDBToUse/',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
