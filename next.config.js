/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
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
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      child_process: false,
    };
    
    config.externals = [...(config.externals || []), { canvas: 'canvas' }];
    
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
    });

    // Add support for WebGL and other browser APIs
    config.resolve.fallback = {
      ...config.resolve.fallback,
      gl: false,
      crypto: false,
      stream: false,
      path: false,
      zlib: false,
    };

    // Fix for framer-motion webpack internal URL issue
    config.resolve.alias = {
      ...config.resolve.alias,
      'framer-motion': require.resolve('framer-motion'),
    };

    return config;
  },
  // Add transpilePackages for client components
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime', 'framer-motion'],
}

module.exports = nextConfig; 