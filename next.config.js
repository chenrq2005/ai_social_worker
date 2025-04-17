/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Fast Refresh
  reactStrictMode: false, // Set to false for development to improve reload times
  
  // Optimize compilation with SWC
  swcMinify: true,
  
  // Reduce build output size
  compress: true,
  
  // Only analyze builds when explicitly needed
  analyticsId: process.env.ANALYZE === 'true' ? 'development' : undefined,
  
  // Disable type checking during development for faster builds
  typescript: {
    // Still catch errors but don't block compilation
    ignoreBuildErrors: process.env.NODE_ENV === 'development',
  },
  
  // Optimize image processing
  images: {
    disableStaticImages: false,
  },
  
  // Disable unnecessary features during development
  experimental: {
    // Enable this only in production, can slow down dev builds
    optimizeCss: process.env.NODE_ENV === 'production',
    // Disable server components during development for faster refreshes
    serverComponents: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig
