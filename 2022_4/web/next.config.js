/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["github.com", "img.youtube.com", "yt3.ggpht.com"],
  },
};

module.exports = nextConfig;
