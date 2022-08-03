/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost']
  },
  i18n: {
    locales: ['default', 'it', 'en'],
    defaultLocale: 'default',
  },
  trailingSlash: true
}

module.exports = nextConfig
