/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://example.com',
    generateRobotsTxt: true,
    exclude: ['/server-sitemap.xml'], // Exclude server-side sitemap from indexing
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://example.com/server-sitemap.xml', // Add your server-side sitemap here
      ],
    },
  }