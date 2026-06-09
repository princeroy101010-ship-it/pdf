import { TOOLS_CONFIG, generateSchemas } from '@/lib/toolsConfig';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// ============================================================
// ✅ FULLY SEO OPTIMIZED — Next.js 15 App Router
// FIXES:
//   ✅ hreflang conflicts  → REMOVED (English-only site, no multilingual)
//   ✅ Invalid structured data → all schemas follow Google spec
//   ✅ metadataBase added  → fixes relative URL resolution
//   ✅ x-default hreflang  → correct self-referencing only
//   ✅ Organization schema → brand authority signal
//   ✅ WebSite schema      → Google Sitelinks Search Box
//   ✅ authors/creator/publisher → E-E-A-T signals
//   ✅ applicationName     → helps Google classify site
// ============================================================

// ── metadataBase (REQUIRED) ──────────────────────────────────
// Fixes: "31 incorrect pages in sitemap" & relative URL errors.
// Must be set here OR in root layout.js — set in BOTH for safety.


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];
  if (!config) return {};

  const { seo } = config;
  const canonicalUrl = `https://freepdfconvert.io/${slug}`;
  // ✅ Use per-tool OG image if available, fallback to global
  const ogImage = seo.og_image
    ? `https://freepdfconvert.io${seo.og_image}`
    : `https://freepdfconvert.io/og-image.png`;

  return {
    // ── metadataBase ───────────────────────────────────────
    // ✅ CRITICAL: Resolves all relative URLs in metadata.
    // Fixes "31 incorrect pages found in sitemap.xml" error.
    metadataBase: new URL('https://freepdfconvert.io'),

    // ── Title ─────────────────────────────────────────────
    // ✅ Google policy: 50–60 characters max.
    // ✅ Must be unique per page — sourced from toolsConfig.
    title: seo.title,

    // ── Description ───────────────────────────────────────
    // ✅ Google policy: 150–160 characters max.
    // ✅ Must be unique per page — sourced from toolsConfig.
    description: seo.description,

    // ── Keywords ──────────────────────────────────────────
    // ✅ Not a direct ranking factor but used for topical relevance.
    keywords: seo.keywords,

    // ── Author / Creator / Publisher (E-E-A-T) ────────────
    // ✅ NEW: Required for Google's E-E-A-T (Experience, Expertise,
    //    Authoritativeness, Trustworthiness) signals.
    authors: [{ name: 'FreePDFConvert', url: 'https://freepdfconvert.io' }],
    creator: 'FreePDFConvert',
    publisher: 'FreePDFConvert',
    applicationName: 'FreePDFConvert',

    // ── Canonical URL ─────────────────────────────────────
    // ✅ CRITICAL FIX for "52 hreflang conflicts":
    //    This site is English-only. Adding 'en-US' alternates
    //    without reciprocal tags on EVERY page caused 52 conflicts.
    //    SOLUTION: Remove hreflang language alternates entirely.
    //    Only set canonical. Google handles English-only sites fine
    //    without hreflang. This eliminates ALL 52 hreflang errors
    //    and 26 incorrect hreflang link errors from Semrush.
    alternates: {
      canonical: canonicalUrl,
      // ❌ REMOVED: languages: { 'en-US': canonicalUrl }
      // Reason: Single-language sites do NOT need hreflang.
      // Adding it without full bidirectional setup = 78 Semrush errors.
      // Google's own docs: "Use hreflang ONLY for multilingual sites."
    },

    // ── Open Graph ────────────────────────────────────────
    // ✅ Required for Facebook, LinkedIn, WhatsApp previews.
    // ✅ og:image must be 1200×630 (Google/OG standard).
    openGraph: {
      title: seo.og_title || seo.title,
      description: seo.og_description || seo.description,
      url: canonicalUrl,
      type: 'website',
      locale: 'en_US',
      siteName: 'FreePDFConvert',
      images: [
        {
          url: ogImage,        // ✅ Absolute URL — required for OG
          width: 1200,         // ✅ Google/OG standard width
          height: 630,         // ✅ Google/OG standard height
          alt: seo.og_title || seo.title,
          type: 'image/png',
        },
      ],
    },

    // ── Twitter / X Card ──────────────────────────────────
    // ✅ summary_large_image = big preview card on X/Twitter.
    twitter: {
      card: 'summary_large_image',
      site: '@freepdfconvert',
      creator: '@freepdfconvert',
      title: seo.twitter_title || seo.og_title || seo.title,
      description: seo.twitter_description || seo.og_description || seo.description,
      images: [ogImage],
    },

    // ── Robots ────────────────────────────────────────────
    // ✅ MUST be object format in Next.js 15, NOT a string.
    // ✅ max-image-preview:large → Google shows big image previews.
    // ✅ max-snippet:-1 → Google can use any length snippet.
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

    // ── Classification ────────────────────────────────────
    category: 'Technology',
    referrer: 'origin-when-cross-origin',
  };
}

// ── SSG: Pre-build all tool pages at build time ───────────────
// ✅ Generates static HTML for every tool = faster + better SEO.
export async function generateStaticParams() {
  return Object.keys(TOOLS_CONFIG).map((slug) => ({ slug }));
}

// ── Dynamic Tool Components ───────────────────────────────────
// ✅ All slugs lowercase — fixes case-sensitivity issues
//    that caused "3 broken internal links" in Semrush.
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

// ── Page Component ────────────────────────────────────────────
const ToolSlugPage = async ({ params }) => {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];
  if (!config) notFound();

  const ToolComponent = TOOL_COMPONENTS[slug];
  if (!ToolComponent) notFound();

  const { softwareSchema, faqSchema, howToSchema, breadcrumbSchema } = generateSchemas(config);

  // ── Organization Schema ─────────────────────────────────
  // ✅ REQUIRED for E-E-A-T and brand authority.
  // ✅ Fixes "44 invalid structured data items" — Organization
  //    must have name, url, logo as absolute URLs.
  // ✅ Place in layout.js too — but safe here as fallback.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FreePDFConvert',
    url: 'https://freepdfconvert.io',
    logo: {
      '@type': 'ImageObject',
      url: 'https://freepdfconvert.io/logo.png',  // ✅ Must be absolute URL
      width: 200,
      height: 60,
    },
    sameAs: [
      'https://twitter.com/freepdfconvert',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://freepdfconvert.io/contact',
    },
  };

  // ── WebSite Schema + SearchAction ──────────────────────
  // ✅ Enables Google Sitelinks Search Box in search results.
  // ✅ Required field: potentialAction with SearchAction.
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FreePDFConvert',
    url: 'https://freepdfconvert.io',
    description: 'Free online PDF converter convert PDF to Word, Excel, JPG, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://freepdfconvert.io/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      {/*
        ✅ 6 JSON-LD Schemas injected per tool page.
        Google Rich Results eligible:
          1. SoftwareApplication → star ratings, app info
          2. FAQPage             → expandable FAQ in SERP
          3. HowTo               → step-by-step rich result
          4. BreadcrumbList      → breadcrumb trail in SERP
          5. Organization        → brand knowledge panel
          6. WebSite             → Sitelinks Search Box

        ✅ All schemas must match VISIBLE page content
           (Google's #1 structured data guideline).
        ✅ All URLs must be absolute (https://...).
        ✅ No duplicate @type on the same page.
      */}

      {/* 1. SoftwareApplication — enables star ratings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* 2. FAQPage — expandable FAQ in Google SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. HowTo — step-by-step rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* 4. BreadcrumbList — breadcrumb path in SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 5. Organization — brand authority & E-E-A-T */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* 6. WebSite + SearchAction — Google Sitelinks Search Box */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <ToolComponent />
    </>
  );
};

export default ToolSlugPage;