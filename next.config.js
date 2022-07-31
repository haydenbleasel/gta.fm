const { withPlugins } = require('next-compose-plugins');
const { createSecureHeaders } = require('next-secure-headers');
const withPWA = require('next-pwa');

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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders(),
      },
    ];
  },
};

const pwaConfig = {
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    dynamicStartUrl: false,
    mode: process.env.NODE_ENV,
  },
};

module.exports = withPlugins([[withPWA, pwaConfig]], nextConfig);
