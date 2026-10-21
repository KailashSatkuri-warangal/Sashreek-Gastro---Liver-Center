/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  cleanDistDir: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'content.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'content2.jdmagicbox.com',
      },
      {
        protocol: 'https',
        hostname: 'akam.cdn.jdmagicbox.com',
      }
    ],
  },
  webpack: (config, { dev, isServer }) => {
    // Ignore legacy directory from webpack file watchers to prevent chunk memory leaks & build lag
    config.watchOptions = {
      ignored: ['**/cygnusgastro.com/**', '**/node_modules/**'],
    };
    return config;
  },
};

export default nextConfig;
