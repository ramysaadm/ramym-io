export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: 'https://ramym.io/sitemap.xml',
    host: 'https://ramym.io',
  };
}
