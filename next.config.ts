// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",  // ya "http"
        hostname: "example.com",
        pathname: "/**",    // sabhi paths allow karne ke liye
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
