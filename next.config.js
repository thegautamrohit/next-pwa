/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    swSrc: "service-worker.js",
    register: true,
    skipWaiting: true,
  },
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
