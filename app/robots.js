export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
    sitemap: 'https://saloon-website-fawn.vercel.app/sitemap.xml',
  }
}

