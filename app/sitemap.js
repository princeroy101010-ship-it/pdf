// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://freepdfconvert.io";
  
  // ── All High-Traffic Tools ────────────────────────────────
  const tools = [
    "pdf-to-word", "word-to-pdf", "pdf-to-excel", "excel-to-pdf",
    "image-to-pdf", "pdf-to-jpg", "jpg-to-pdf", "merge-pdf",
    "compress-pdf", "pdf-to-pptx", "pptx-to-pdf", "pdf-to-png",
    "png-to-pdf", "protect-pdf", "unlock-pdf", "html-to-pdf",
    "Text-to-pdf", "pdf-to-Text", "Text-to-word", "word-to-Text",
    "pptx-to-Text", "Text-to-pptx", "pdf-to-html", "split-pdf",
    "extract-text-from-pdf", "extract-text-from-image",
  ];

  // Tool pages logic - SEO focus on high competition keywords
  const toolPages = tools.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily", // Taake Google daily update check kare
    priority: 0.9,            // Standard pages se zyada priority
  }));

  // Static pages - Support and Trust pages
  const staticPages = [
    { url: `${baseUrl}/how-work`,        priority: 0.8, changeFrequency: "weekly"  },
    { url: `${baseUrl}/features`,        priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/security`,        priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/about-us`,        priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact-us`,      priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy-policy`,  priority: 0.3, changeFrequency: "yearly"  },
    { url: `${baseUrl}/terms-of-service`, priority: 0.3, changeFrequency: "yearly"  },
    { url: `${baseUrl}/cookie-policy`,   priority: 0.3, changeFrequency: "yearly"  },
  ].map((page) => ({ ...page, lastModified: new Date().toISOString() }));

  return [
    // Homepage - The King Page
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "always",
      priority: 1.0,
    },
    ...toolPages,
    ...staticPages,
  ];
}