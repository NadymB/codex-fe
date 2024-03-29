/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "codex-client-eight.vercel.app", "static.tradingcme.com"],
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'static.tradingcme.com',
          port: '',
          pathname: '/assets/images/**',
      },
  ],
  },
};

module.exports = nextConfig;
