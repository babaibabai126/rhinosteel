import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output is only useful for self-hosted Docker-style runs.
  // On Vercel, use the default output for best compatibility.
  ...(process.env.VERCEL
    ? {}
    : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
