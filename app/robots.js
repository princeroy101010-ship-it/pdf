// ============================================================
// ✅ ROBOTS — app/robots.js
// Next.js 14+ App Router — automatically generates /robots.txt
// No manual robots.txt needed in /public
// ============================================================

export default function robots() {
  return {
    rules: [
      {
        // ✅ Sab crawlers ko allow karo
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",        // API routes crawl na ho
          "/_next/",      // Next.js internal files
          "/private/",    // Koi private pages hain to
        ],
      },
      {
        // ✅ Google Bot — full access
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // ✅ Bing Bot — full access
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: "https://freepdfconvert.io/sitemap.xml",
    host: "https://freepdfconvert.io",
  };
}