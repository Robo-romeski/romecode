import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance & Build Optimizations */
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  
  /* Image Optimization */
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['romecode.com', 'www.romecode.com'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /* Security Headers */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },

  /* Redirects for migration */
  async redirects() {
    return [
      // Add redirects here when migrating from old URLs
    ];
  },

  /* Rewrites for API routes */
  async rewrites() {
    return [
      // Add rewrites here if needed
    ];
  },

  /* TypeScript Configuration */
  typescript: {
    ignoreBuildErrors: false,
  },

  /* ESLint Configuration */
  eslint: {
    ignoreDuringBuilds: false,
  },

  /* PWA Support (will be configured with next-pwa later) */
  // pwa: {
  //   dest: 'public',
  //   disable: process.env.NODE_ENV === 'development',
  // },
};

export default nextConfig; 