import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // TODO: add proper domain names for hostname during production
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hygglo.imgix.net",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
};

export default nextConfig;
