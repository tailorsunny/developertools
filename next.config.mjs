/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: 'https://example.com', // Replace with your actual site URL
  },
  async rewrites() {
    return [
      {
        source: '/server-sitemap.xml',
        destination: '/server-sitemap.xml',
      },
    ]
  },
};

export default nextConfig;
