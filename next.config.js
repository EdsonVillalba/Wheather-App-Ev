/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    
}

module.exports = nextConfig


const isProd = process.env.NODE_ENV === 'production'
 
module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
}