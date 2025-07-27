import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ❗ This allows production builds to complete even with type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
