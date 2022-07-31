/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
    newNextLinkBehavior: true,
  },
};

module.exports = nextConfig;
