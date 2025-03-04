/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: '.next',
  generateBuildId: async () => {
    return 'build'
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'prod.spline.design',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      gl: false,
      crypto: false,
      stream: false,
      path: false,
      zlib: false,
    };
    
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });

    return config;
  },
  // Add transpilePackages for client components
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime', 'framer-motion'],
}

module.exports = nextConfig; 