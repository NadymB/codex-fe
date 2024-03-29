/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "codex-client-eight.vercel.app", "static.tradingcme.com", "tradingcme.com"],
  },
};

module.exports = nextConfig;
