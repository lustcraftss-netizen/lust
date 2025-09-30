/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable turbopack to avoid Rust panic
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
