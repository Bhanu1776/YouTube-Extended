/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

const nextConfig = withPWA({
  eslint: {
    dirs: ['app', 'utils'],
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_YOUTUBE_DATA_API_KEY: process.env.YOUTUBE_DATA_API_KEY,
  },
  images: {
    // domains: ['i.ytimg.com'], // Add i.ytimg.com to the list of allowed domains
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
      },
    ],
  },
});
module.exports = nextConfig;