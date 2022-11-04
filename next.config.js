/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://img.cdn.zostel.com/'],
  },
}

module.exports = nextConfig
