import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    unoptimized: true, // ✅ No domain restriction, but no optimization either
  },
  /* config options here */
  typescript: {
    // ❗ This allows production builds to complete even with type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ❗ This allows production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
