/** @type {import('next').NextConfig} */
const dotenv = require('dotenv');

dotenv.config()

const nextConfig = {
  reactStrictMode: true,
  basePath: '/keywords_generator',
  assetPrefix:'/keywords_generator/',
  images: {
    domains: ['smartutilitybox.com'], 
    unoptimized: true
  },
  output: "export",
  trailingSlash: true,
}

module.exports = nextConfig
