/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['localhost']
    },
    i18n: {
        defaultLocale: 'default',
        locales: ['default', 'it', 'en'],
        localeDetection: true,
    },
    trailingSlash: true,
    
}

module.exports = nextConfig
