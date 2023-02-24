/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['s3.amazonaws.com'],
  },
}
module.exports = nextConfig