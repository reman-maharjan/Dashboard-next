/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Try adding these if using experimental features
    serverComponentsExternalPackages: [],
  },
  // Ensure output is set correctly if doing static export
  // output: 'standalone', // or 'export' for static export
}

module.exports = nextConfig