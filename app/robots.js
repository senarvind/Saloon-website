export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/public/',
      },
    ],
    sitemap: 'https://saloon-website-fawn.vercel.app/sitemap.xml',
  }
}

