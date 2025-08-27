/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
})

const nextConfig = {
  // Configuración para pdf.js worker
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        canvas: false,
      };
    }
    
    // Configuración para pdf.js
    config.resolve.alias = {
      ...config.resolve.alias,
      'canvas': false,
    };
    
    // Configuración para worker de pdf.js
    config.module.rules.push({
      test: /pdf\.worker\.js$/,
      type: 'asset/resource',
    });
    
    // Configuración para evitar problemas con workers
    config.resolve.fallback = {
      ...config.resolve.fallback,
      worker_threads: false,
    };
    
    return config;
  },
  // Configuración para headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
}

module.exports = withPWA(nextConfig)