// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://freepdfconvert.io";

  const tools = [
    "pdf-to-word", "word-to-pdf", "pdf-to-excel", "excel-to-pdf",
    "image-to-pdf", "pdf-to-jpg", "jpg-to-pdf", "merge-pdf",
    "compress-pdf", "pdf-to-pptx", "pptx-to-pdf", "pdf-to-png",
    "png-to-pdf", "protect-pdf", "unlock-pdf", "html-to-pdf",
    "Text-to-pdf", "pdf-to-Text", "Text-to-word", "word-to-Text",
    "pptx-to-Text", "Text-to-pptx", "pdf-to-html", "split-pdf",
    "extract-text-from-pdf", "extract-text-from-image",
  ];

  // ── Tool pages ─────────────────────────────────────────────
  const toolPages = tools.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // ── Static pages — jo tumhare paas hain woh rakho ──────────
  const staticPages = [
    { url: `${baseUrl}/about-us`,       priority: 0.5, changeFrequency: "yearly"  },
    { url: `${baseUrl}/contact-us`,     priority: 0.5, changeFrequency: "yearly"  },
    { url: `${baseUrl}/privacy-policy`,     priority: 0.4, changeFrequency: "yearly"  },
    { url: `${baseUrl}/terms-of-service`,       priority: 0.4, changeFrequency: "yearly"  },
    { url: `${baseUrl}/how-work`,        priority: 0.6, changeFrequency: "yearly"  },
    { url: `${baseUrl}/cookie-policy`,        priority: 0.6, changeFrequency: "yearly"  },
    { url: `${baseUrl}/features`,        priority: 0.6, changeFrequency: "yearly"  },
    { url: `${baseUrl}/security`,        priority: 0.6, changeFrequency: "yearly"  },
  ].map((page) => ({ ...page, lastModified: new Date() }));

  return [
    // Homepage — highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Tool pages
    ...toolPages,
    // Static pages
    ...staticPages,
  ];
}