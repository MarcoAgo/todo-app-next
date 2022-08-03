/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        defaultLocale: 'default',
        locales: ['default', 'it', 'en'],
        localeDetection: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
