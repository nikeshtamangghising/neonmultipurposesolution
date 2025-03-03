/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint during build
  },
  images: {
    domains: ['your-domain.com'], // Add your image domains here
  },
}

module.exports = nextConfig; 