import type { NextConfig } from 'next';
import { createSecureHeaders } from 'next-secure-headers';

const config: NextConfig = {
  reactStrictMode: true,
  // biome-ignore lint/suspicious/useAwait: "headers is async"
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          // HSTS Preload: https://hstspreload.org/
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true, preload: true },
          ],
        }),
      },
    ];
  },
};

export default config;
