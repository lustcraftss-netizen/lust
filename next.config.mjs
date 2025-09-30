/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // disable turbopack
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
