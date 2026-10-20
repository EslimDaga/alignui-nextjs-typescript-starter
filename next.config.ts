import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  outputFileTracingIncludes: {
    '/mcp': [
      './registry.json',
      './public/r/**/*.json',
      './registry/default/styles/alignui.css',
    ],
  },
};

export default nextConfig;
