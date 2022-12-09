/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.prismic.io',
      'saginaw-stem.cdn.prismic.io',
      'cdn.sanity.io',
    ],
  },
};

module.exports = nextConfig;
