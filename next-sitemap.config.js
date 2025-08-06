/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hub9jalogistics.markethub9ja.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin', '/dashboard'], // If any
};
