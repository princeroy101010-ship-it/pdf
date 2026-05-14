import { TOOLS_CONFIG, generateSchemas } from '@/lib/toolsConfig';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// ============================================================
// ✅ 100% SEO OPTIMIZED — generateMetadata for every tool page
// ============================================================
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];
  if (!config) return {};

  const { seo } = config;
  const canonicalUrl = `https://freepdfconvert.io/${slug}`;
  const ogImage = `https://freepdfconvert.io/og-image.png`; // ✅ Always absolute URL

  return {
    // ── Title ──────────────────────────────────────────────
    title: seo.title,

    // ── Description ────────────────────────────────────────
    description: seo.description,

    // ── Keywords ───────────────────────────────────────────
    keywords: seo.keywords,

    // ── Canonical + hreflang ───────────────────────────────
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
      },
    },

    // ── Open Graph ─────────────────────────────────────────
    openGraph: {
      title: seo.og_title || seo.title,
      description: seo.og_description || seo.description,
      url: canonicalUrl,
      type: 'website',
      locale: 'en_US',
      siteName: 'FreePDFConvert',
      images: [
        {
          url: ogImage,            // ✅ Absolute URL (required for OG)
          width: 1200,
          height: 630,
          alt: seo.og_title || seo.title,
          type: 'image/png',
        },
      ],
    },

    // ── Twitter Card ───────────────────────────────────────
    twitter: {
      card: 'summary_large_image',
      site: '@freepdfconvert',          // ✅ Was missing before
      creator: '@freepdfconvert',       // ✅ Was missing before
      title: seo.twitter_title || seo.og_title || seo.title,
      description: seo.twitter_description || seo.og_description || seo.description,
      images: [ogImage],
    },

    // ── Robots ─────────────────────────────────────────────
    // ✅ FIXED: Must be object, not string "index, follow"
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },

    // ── Extra SEO signals ──────────────────────────────────
    category: 'Technology',
    referrer: 'origin-when-cross-origin',
  };
}

// ── SSG: Pre-build all tool pages at build time ──────────────
export async function generateStaticParams() {
  return Object.keys(TOOLS_CONFIG).map((slug) => ({ slug }));
}

// ── Dynamic Tool Components ──────────────────────────────────
const TOOL_COMPONENTS = {
  'pdf-to-word':              dynamic(() => import('@/components/tools/PdfToWord')),
  'word-to-pdf':              dynamic(() => import('@/components/tools/WordToPdf')),
  'pdf-to-excel':             dynamic(() => import('@/components/tools/PdfToExcel')),
  'excel-to-pdf':             dynamic(() => import('@/components/tools/ExcelToPdf')),
  'image-to-pdf':             dynamic(() => import('@/components/tools/ImageToPdf')),
  'pdf-to-jpg':               dynamic(() => import('@/components/tools/PdfToJpg')),
  'jpg-to-pdf':               dynamic(() => import('@/components/tools/JpgToPdf')),
  'merge-pdf':                dynamic(() => import('@/components/tools/MergePdf')),
  'compress-pdf':             dynamic(() => import('@/components/tools/CompressPdf')),
  'pdf-to-pptx':              dynamic(() => import('@/components/tools/PdfToPptx')),
  'pptx-to-pdf':              dynamic(() => import('@/components/tools/PptxToPdf')),
  'pdf-to-png':               dynamic(() => import('@/components/tools/PdfToPng')),
  'png-to-pdf':               dynamic(() => import('@/components/tools/PngToPdf')),
  'protect-pdf':              dynamic(() => import('@/components/tools/ProtectPdf')),
  'unlock-pdf':               dynamic(() => import('@/components/tools/UnlockPdf')),
  'html-to-pdf':              dynamic(() => import('@/components/tools/HtmlToPdf')),
  'text-to-pdf':              dynamic(() => import('@/components/tools/TextToPdf')),
  'pdf-to-text':              dynamic(() => import('@/components/tools/PdfToText')),
  'text-to-word':             dynamic(() => import('@/components/tools/TextToWord')),
  'word-to-text':             dynamic(() => import('@/components/tools/WordToText')),
  'pptx-to-text':             dynamic(() => import('@/components/tools/PptxToText')),
  'text-to-pptx':             dynamic(() => import('@/components/tools/TextToPptx')),
  'pdf-to-html':              dynamic(() => import('@/components/tools/PdfToHtml')),
  'split-pdf':                dynamic(() => import('@/components/tools/split-pdf')),
  'extract-text-from-pdf':    dynamic(() => import('@/components/tools/extract-text-from-pdf')),
  'extract-text-from-image':  dynamic(() => import('@/components/tools/extract-text-from-image')),
};

// ── Page Component ───────────────────────────────────────────
const ToolSlugPage = async ({ params }) => {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];
  if (!config) notFound();

  const ToolComponent = TOOL_COMPONENTS[slug];
  if (!ToolComponent) notFound();

  const { softwareSchema, faqSchema, howToSchema, breadcrumbSchema } = generateSchemas(config);

  return (
    <>
      {/* ✅ 4 JSON-LD Schemas auto-injected for every tool page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ToolComponent />
    </>
  );
};

export default ToolSlugPage;




// import { TOOLS_CONFIG, generateSchemas } from '@/lib/toolsConfig';
// import { notFound } from 'next/navigation';
// import dynamic from 'next/dynamic';

// // ============================================================
// // ✅ 100% SEO OPTIMIZED — generateMetadata for every tool page
// // ============================================================
// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const config = TOOLS_CONFIG[slug];
//   if (!config) return {};

//   const { seo } = config;
//   const canonicalUrl = `https://freepdfconvert.io/${slug}`;

//   // ✅ Per-tool OG image (falls back to global if not set)
//   const ogImage = seo.og_image
//     ? `https://freepdfconvert.io${seo.og_image}`
//     : `https://freepdfconvert.io/og-${slug}.png`;

//   return {
//     // ── Title ──────────────────────────────────────────────
//     title: seo.title,

//     // ── Description ────────────────────────────────────────
//     description: seo.description,

//     // ── Keywords ───────────────────────────────────────────
//     keywords: seo.keywords,

//     // ── Author & Publisher ─────────────────────────────────
//     // ✅ NEW: Tells Google who owns this content
//     authors: [{ name: 'FreePDFConvert', url: 'https://freepdfconvert.io' }],
//     creator: 'FreePDFConvert',
//     publisher: 'FreePDFConvert',

//     // ── Canonical + hreflang ───────────────────────────────
//     alternates: {
//       canonical: canonicalUrl,
//       languages: {
//         'en-US': canonicalUrl,
//       },
//     },

//     // ── Open Graph ─────────────────────────────────────────
//     openGraph: {
//       title: seo.og_title || seo.title,
//       description: seo.og_description || seo.description,
//       url: canonicalUrl,
//       type: 'website',
//       locale: 'en_US',
//       siteName: 'FreePDFConvert',
//       images: [
//         {
//           url: ogImage,
//           width: 1200,
//           height: 630,
//           alt: seo.og_title || seo.title,
//           type: 'image/png',
//         },
//       ],
//     },

//     // ── Twitter Card ───────────────────────────────────────
//     twitter: {
//       card: 'summary_large_image',
//       site: '@freepdfconvert',
//       creator: '@freepdfconvert',
//       title: seo.twitter_title || seo.og_title || seo.title,
//       description: seo.twitter_description || seo.og_description || seo.description,
//       images: [ogImage],
//     },

//     // ── Robots ─────────────────────────────────────────────
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         'max-image-preview': 'large',
//         'max-snippet': -1,
//         'max-video-preview': -1,
//       },
//     },

//     // ── Extra SEO signals ──────────────────────────────────
//     // ✅ NEW: category + applicationName help Google classify the page
//     category: 'Technology',
//     applicationName: 'FreePDFConvert',
//     referrer: 'origin-when-cross-origin',

//     // ✅ NEW: metadataBase ensures all relative URLs resolve correctly
//     metadataBase: new URL('https://freepdfconvert.io'),
//   };
// }

// // ── SSG: Pre-build all tool pages at build time ──────────────
// export async function generateStaticParams() {
//   return Object.keys(TOOLS_CONFIG).map((slug) => ({ slug }));
// }

// // ── Dynamic Tool Components ──────────────────────────────────
// const TOOL_COMPONENTS = {
//   'pdf-to-word':              dynamic(() => import('@/components/tools/PdfToWord')),
//   'word-to-pdf':              dynamic(() => import('@/components/tools/WordToPdf')),
//   'pdf-to-excel':             dynamic(() => import('@/components/tools/PdfToExcel')),
//   'excel-to-pdf':             dynamic(() => import('@/components/tools/ExcelToPdf')),
//   'image-to-pdf':             dynamic(() => import('@/components/tools/ImageToPdf')),
//   'pdf-to-jpg':               dynamic(() => import('@/components/tools/PdfToJpg')),
//   'jpg-to-pdf':               dynamic(() => import('@/components/tools/JpgToPdf')),
//   'merge-pdf':                dynamic(() => import('@/components/tools/MergePdf')),
//   'compress-pdf':             dynamic(() => import('@/components/tools/CompressPdf')),
//   'pdf-to-pptx':              dynamic(() => import('@/components/tools/PdfToPptx')),
//   'pptx-to-pdf':              dynamic(() => import('@/components/tools/PptxToPdf')),
//   'pdf-to-png':               dynamic(() => import('@/components/tools/PdfToPng')),
//   'png-to-pdf':               dynamic(() => import('@/components/tools/PngToPdf')),
//   'protect-pdf':              dynamic(() => import('@/components/tools/ProtectPdf')),
//   'unlock-pdf':               dynamic(() => import('@/components/tools/UnlockPdf')),
//   'html-to-pdf':              dynamic(() => import('@/components/tools/HtmlToPdf')),
//   'text-to-pdf':              dynamic(() => import('@/components/tools/TextToPdf')),
//   'pdf-to-Text':              dynamic(() => import('@/components/tools/PdfToText')),
//   'Text-to-word':             dynamic(() => import('@/components/tools/TextToWord')),
//   'word-to-Text':             dynamic(() => import('@/components/tools/WordToText')),
//   'pptx-to-Text':             dynamic(() => import('@/components/tools/PptxToText')),
//   'Text-to-pptx':             dynamic(() => import('@/components/tools/TextToPptx')),
//   'pdf-to-html':              dynamic(() => import('@/components/tools/PdfToHtml')),
//   'split-pdf':                dynamic(() => import('@/components/tools/split-pdf')),
//   'extract-text-from-pdf':    dynamic(() => import('@/components/tools/extract-text-from-pdf')),
//   'extract-text-from-image':  dynamic(() => import('@/components/tools/extract-text-from-image')),
// };

// // ── Page Component ───────────────────────────────────────────
// const ToolSlugPage = async ({ params }) => {
//   const { slug } = await params;
//   const config = TOOLS_CONFIG[slug];
//   if (!config) notFound();

//   const ToolComponent = TOOL_COMPONENTS[slug];
//   if (!ToolComponent) notFound();

//   const { softwareSchema, faqSchema, howToSchema, breadcrumbSchema } = generateSchemas(config);

//   // ✅ NEW: Organization schema — tells Google who runs this site
//   // Add this once in your root layout ideally, but safe here too
//   const organizationSchema = {
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": "FreePDFConvert",
//     "url": "https://freepdfconvert.io",
//     "logo": "https://freepdfconvert.io/logo.png",
//     "sameAs": [
//       "https://twitter.com/freepdfconvert"
//     ]
//   };

//   // ✅ NEW: WebSite schema with SearchAction — enables Google Sitelinks Search Box
//   const websiteSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "name": "FreePDFConvert",
//     "url": "https://freepdfconvert.io",
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": {
//         "@type": "EntryPoint",
//         "urlTemplate": "https://freepdfconvert.io/?q={search_term_string}"
//       },
//       "query-input": "required name=search_term_string"
//     }
//   };

//   return (
//     <>
//       {/* ✅ 6 JSON-LD Schemas — maximum Google rich result coverage */}

//       {/* 1. SoftwareApplication — enables star ratings & rich results */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
//       />

//       {/* 2. FAQPage — Google Featured Snippets & AI Overviews */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />

//       {/* 3. HowTo — step-by-step rich results in Google Search */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
//       />

//       {/* 4. BreadcrumbList — shows path in Google search results */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />

//       {/* 5. Organization — brand authority signal for Google */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//       />

//       {/* 6. WebSite + SearchAction — Google Sitelinks Search Box */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
//       />

//       <ToolComponent />
//     </>
//   );
// };

// export default ToolSlugPage;