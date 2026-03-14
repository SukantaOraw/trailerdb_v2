import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  reactCompiler: true,
  devIndicators: {
    // Standard property for Next.js 15
    position: "bottom-left",
  },
  // In many Next.js 15.x versions, this is now a top-level property
  // We use @ts-ignore if your specific @types/next version hasn't caught up
  // @ts-ignore
  allowedDevOrigins: ["192.168.0.100", "localhost"],
};

export default nextConfig;
