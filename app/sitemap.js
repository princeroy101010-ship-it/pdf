// ============================================================
// ✅ SITEMAP — app/sitemap.js
// Next.js 14 App Router dynamic sitemap
// Automatically generates sitemap.xml at /sitemap.xml
// Submit this URL to Google Search Console:
// https://freepdfconvert.io/sitemap.xml
// ============================================================

export default function sitemap() {
  const BASE_URL = "https://freepdfconvert.io";

  // ✅ All tool slugs — add new tools here anytime
  const tools = [
    "pdf-to-word",
    "word-to-pdf",
    "pdf-to-excel",
    "excel-to-pdf",
    "pdf-to-jpg",
    "jpg-to-pdf",
    "pdf-to-png",
    "png-to-pdf",
    "merge-pdf",
    "compress-pdf",
    "pdf-to-pptx",
    "pptx-to-pdf",
    "protect-pdf",
    "unlock-pdf",
    "html-to-pdf",
    "pdf-to-html",
    "txt-to-pdf",
    "pdf-to-txt",
    "txt-to-word",
    "word-to-txt",
    "pptx-to-txt",
    "txt-to-pptx",
  ];

  // ✅ Homepage entry
  const homepage = {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  // ✅ Tool pages — high priority, they rank individually
  const toolPages = tools.map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [homepage, ...toolPages];
}