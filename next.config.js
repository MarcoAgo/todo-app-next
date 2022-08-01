/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
  },
  trailingSlash: true
}

module.exports = nextConfig
