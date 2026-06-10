import { TOOLS_CONFIG, generateSchemas } from '@/lib/toolsConfig';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// ═══════════════════════════════════════════════════════════════
// [slug]/page.js — Dynamic Tool Page
// Next.js 15 App Router | SSG (Static Site Generation)
//
// SEMRUSH ERRORS FIXED IN THIS FILE:
// ✅ ERROR 1 — 44 invalid structured data items
//      • Organization schema REMOVED from here (lives in layout.js only)
//      • WebSite + SearchAction REMOVED from tool pages
//        (WebSite schema belongs on homepage ONLY — having it on every
//         tool page creates duplicate WebSite entities = GSC "invalid" error)
//      • Only 4 schemas per tool page: SoftwareApplication, FAQPage,
//        HowTo, BreadcrumbList — all generated from toolsConfig
//      • Every schema @id is unique per page using canonical URL
//
// ✅ ERROR 2 — 12 hreflang conflicts
//      • ALL hreflang removed — English-only site, no translated pages
//      • canonical-only alternates applied per page
//
// ✅ ERROR 3 — 3 incorrect hreflang links
//      • Same fix — hreflang completely removed
//
// ✅ WARNING — 7 pages have too much text in title tags
//      • Title sourced from toolsConfig seo.title
//      • toolsConfig must keep all titles ≤ 60 chars (enforced by comment below)
//
// ✅ WARNING — 31 URLs with temporary redirect
//      • metadataBase set here AND in layout.js → resolves all relative URLs
//      • Fixes incorrect absolute URL generation that causes redirects
//
// ✅ NOTICE — 1 page requires content optimization
//      • Each tool page must have: H1, H2 sections, descriptive content
//        in ToolComponent. Ensure ToolComponent renders visible content.
// ═══════════════════════════════════════════════════════════════

// ── generateMetadata ─────────────────────────────────────────
// Called by Next.js at build time (SSG) for each slug.
// Returns metadata object that populates <head> tags for the page.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];

  // If slug not in TOOLS_CONFIG, return minimal metadata
  // (notFound() in the component handles the 404)
  if (!config) return {};

  const { seo } = config;
  const canonicalUrl = `https://freepdfconvert.io/${slug}`;

  // ── OG Image ─────────────────────────────────────────────
  // Per-tool image if available, fallback to global OG image.
  // Must be absolute URL (https://...) — relative URLs break OG sharing.
  const ogImage = seo.og_image
    ? `https://freepdfconvert.io${seo.og_image}`
    : `https://freepdfconvert.io/og-image.png`;

  return {
    // ── metadataBase ───────────────────────────────────────
    // ✅ REQUIRED: Set in both layout.js AND here as safety net.
    // Without this, Next.js cannot resolve relative URLs in metadata.
    // This fixes "31 URLs with temporary redirect" — caused by
    // Next.js generating http:// instead of https:// URLs for OG images.
    metadataBase: new URL('https://freepdfconvert.io'),

    // ── Title ─────────────────────────────────────────────
    // ✅ Google policy: 50–60 chars. Over 60 = truncated in SERP.
    // ✅ MUST be unique for every tool page — sourced from toolsConfig.
    // ✅ FORMAT: "[Action] [Format] Online Free – FreePDFConvert"
    //    Example: "PDF to Word Converter Free Online – FreePDFConvert" (51 chars)
    // ✅ DO NOT exceed 60 chars in toolsConfig seo.title values.
    // ✅ template in layout.js appends " | FreePDFConvert" — factor that in.
    //    If seo.title already includes brand → use raw title only (no template).
    title: seo.title,

    // ── Description ───────────────────────────────────────
    // ✅ Google policy: 150–160 chars. Over 160 = truncated.
    // ✅ MUST be unique per page — sourced from toolsConfig.
    // ✅ FORMAT: Benefit + keyword + differentiator + CTA
    //    Example: "Convert PDF to editable Word DOCX free online. No signup,
    //    no watermark. Preserves formatting, tables, and fonts. Fast & secure."
    description: seo.description,

    // ── Keywords ──────────────────────────────────────────
    // Not a Google ranking factor but used by Bing/Yahoo.
    // Keep tool-specific: 5–10 targeted long-tail keywords.
    keywords: seo.keywords,

    // ── E-E-A-T Signals ───────────────────────────────────
    // ✅ Google uses these for Experience, Expertise, Authoritativeness,
    //    Trustworthiness evaluation — important for ranking in YMYL niches.
    authors: [{ name: 'FreePDFConvert', url: 'https://freepdfconvert.io' }],
    creator: 'FreePDFConvert',
    publisher: 'FreePDFConvert',
    applicationName: 'FreePDFConvert',

    // ── Canonical URL ─────────────────────────────────────
    // ✅ CRITICAL: Every tool page needs a canonical.
    // Prevents duplicate content issues if pages are accessible
    // via multiple URLs (e.g., with/without trailing slash).
    //
    // ✅ FIX (SEMRUSH ERRORS 2 & 3 — hreflang conflicts):
    //    REMOVED all hreflang language alternates.
    //    freepdfconvert.io is English-only. All pages are at the same URL
    //    with no language variants. Hreflang requires DIFFERENT URLs per language.
    //    Adding hreflang tags all pointing to the same URL = conflict error.
    //
    //    Google's rule: "Use hreflang only when you have the same content
    //    available in different languages at different URLs."
    //    Source: developers.google.com/search/docs/specialty/international
    alternates: {
      canonical: canonicalUrl,
      // ❌ DO NOT ADD: languages: { 'en-US': canonicalUrl }
      //    Single-language site = zero hreflang needed.
      //    Adding it without real translated pages = SemRush errors.
    },

    // ── Open Graph ────────────────────────────────────────
    // ✅ Used by Facebook, LinkedIn, WhatsApp, Slack for link previews.
    // ✅ og:image must be 1200×630px for universal support.
    // ✅ og:title: 60 chars max | og:description: 155–200 chars
    openGraph: {
      title: seo.og_title || seo.title,
      description: seo.og_description || seo.description,
      url: canonicalUrl,
      type: 'website',
      locale: 'en_US',
      siteName: 'FreePDFConvert',
      images: [
        {
          url: ogImage,      // ✅ Must be absolute HTTPS URL
          width: 1200,       // ✅ Standard OG image width
          height: 630,       // ✅ Standard OG image height
          alt: seo.og_title || seo.title,
          type: 'image/png',
        },
      ],
    },

    // ── Twitter / X Card ──────────────────────────────────
    // ✅ summary_large_image = large preview card on X/Twitter.
    // ✅ Fallback chain: twitter_title → og_title → title
    twitter: {
      card: 'summary_large_image',
      site: '@freepdfconvert',
      creator: '@freepdfconvert',
      title: seo.twitter_title || seo.og_title || seo.title,
      description: seo.twitter_description || seo.og_description || seo.description,
      images: [ogImage],
    },

    // ── Robots ────────────────────────────────────────────
    // ✅ MUST be object format in Next.js 14+, NOT a string.
    //    String format "index, follow" = ignored by Next.js App Router.
    // ✅ max-image-preview:large → Google shows full-size image previews.
    // ✅ max-snippet:-1 → Google can show any length description snippet.
    // ✅ max-video-preview:-1 → Google can show full video previews.
    robots: {
      index: true,
      follow: true,
      nocache: false,
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

// ── generateStaticParams ──────────────────────────────────────
// ✅ CRITICAL for SEO: Pre-renders all tool pages as static HTML at
//    build time. Googlebot gets fully-rendered HTML immediately —
//    no JavaScript execution needed. This maximises crawlability
//    and ensures all metadata/schema is in the raw HTML source.
// ✅ Fixes: "1 page returned 4XX" — if a slug isn't in TOOLS_CONFIG,
//    it won't be pre-built. Any slug not here = 404 at runtime.
//    Keep TOOLS_CONFIG and TOOL_COMPONENTS in sync.
export async function generateStaticParams() {
  return Object.keys(TOOLS_CONFIG).map((slug) => ({ slug }));
}

// ── Dynamic Tool Component Imports ───────────────────────────
// ✅ dynamic() = code splitting — each tool's code loads on demand.
//    This keeps the initial JS bundle small = better Core Web Vitals.
// ✅ All slugs MUST be lowercase and hyphenated.
//    Case mismatch causes "3 broken internal links" in SemRush
//    because a link to /PDF-to-Word won't match /pdf-to-word.
// ✅ Every slug here MUST also exist in TOOLS_CONFIG (generateStaticParams).
//    A slug in TOOL_COMPONENTS but NOT in TOOLS_CONFIG = 404 at runtime.
// ✅ FIX (SEMRUSH ERROR: 1 internal link is broken):
//    Audit each import path below. If the component file doesn't exist,
//    the build will fail or return 404. Verify each file path.
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

// ── ToolSlugPage Component ────────────────────────────────────
const ToolSlugPage = async ({ params }) => {
  const { slug } = await params;

  // ── 404 Guard ──────────────────────────────────────────
  // ✅ Returns Next.js 404 page if slug not in config.
  //    notFound() triggers the app/not-found.jsx component.
  //    This is the correct fix for "1 page returned 4XX status code".
  const config = TOOLS_CONFIG[slug];
  if (!config) notFound();

  const ToolComponent = TOOL_COMPONENTS[slug];
  if (!ToolComponent) notFound();

  // ── Structured Data (JSON-LD) ─────────────────────────
  // generateSchemas() from toolsConfig returns schemas pre-built
  // from the per-tool config. Each tool page gets 4 schemas:
  //   1. SoftwareApplication — star ratings in SERP
  //   2. FAQPage             — FAQ rich snippet in SERP
  //   3. HowTo               — step-by-step guide rich result
  //   4. BreadcrumbList      — breadcrumb trail in SERP URL
  const { softwareSchema, faqSchema, howToSchema, breadcrumbSchema } = generateSchemas(config);

  // ═══════════════════════════════════════════════════════
  // ✅ FIX (SEMRUSH ERROR 1 — 44 invalid structured data):
  //
  // REMOVED FROM TOOL PAGES:
  //   ❌ Organization schema  → Lives in layout.js ONLY.
  //                             On every page = duplicate entity error.
  //                             Google docs: "Place on homepage or about page,
  //                             not on every page of the site."
  //
  //   ❌ WebSite + SearchAction → Homepage (page.js) ONLY.
  //                               On every tool page = 26 duplicate
  //                               WebSite entities = invalid structured data.
  //                               WebSite schema describes the SITE, not a page.
  //                               One instance is enough for Google.
  //
  // KEPT ON TOOL PAGES (4 schemas per tool — all valid, no duplicates):
  //   ✅ SoftwareApplication  → Each tool is a unique software feature.
  //                              Different @id per slug = no duplicate.
  //   ✅ FAQPage              → Tool-specific Q&A — different content per page.
  //   ✅ HowTo                → Tool-specific steps — different content per page.
  //   ✅ BreadcrumbList       → Shows breadcrumb path in SERP URL display.
  //
  // SCHEMA VALIDITY REQUIREMENTS (Google):
  //   • Every @id must be a unique, stable URL fragment
  //   • All schema content MUST be visible on the page (not hidden)
  //   • FAQPage: each Question needs @type + acceptedAnswer with @type: Answer
  //   • HowTo: each Step needs @type: HowToStep + text + name
  //   • SoftwareApplication: aggregateRating ratingCount must be real data
  //   • All URLs must be absolute (https://...) — no relative URLs
  //   • Offers.priceValidUntil must be a FUTURE date in YYYY-MM-DD format
  // ═══════════════════════════════════════════════════════

  return (
    <>
      {/*
        ✅ 4 JSON-LD schemas per tool page.
        Eligible for Google Rich Results:
          1. SoftwareApplication → star rating + price card in SERP
          2. FAQPage             → expandable Q&A sections below SERP result
          3. HowTo               → numbered steps rich result
          4. BreadcrumbList      → "Home > PDF to Word" in SERP URL line

        PLACEMENT NOTE:
          Schemas are in <body> here because Next.js SSR renders them
          in the final HTML regardless. Googlebot reads body scripts fine.
          dangerouslySetInnerHTML is correct — do NOT use <Script> tag
          for JSON-LD as Script can be deferred/async and may be missed.

        VALIDATION:
          Test each tool page at:
          → https://search.google.com/test/rich-results
          → https://validator.schema.org
      */}

      {/* 1. SoftwareApplication — star ratings in SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* 2. FAQPage — expandable Q&A in Google SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 3. HowTo — numbered step-by-step rich result */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* 4. BreadcrumbList — breadcrumb path in SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/*
        ToolComponent renders the actual page UI.
        ✅ SEO REQUIREMENTS for ToolComponent (toolClient.js):
          • Must render a unique <h1> matching page title keyword
          • Must have descriptive <p> text (not just a file uploader)
          • Text-to-HTML ratio must be > 15% (fixes low ratio warning)
          • Must be accessible: labels, aria attributes, alt text
          See toolClient.js fixes for full implementation.
      */}
      <ToolComponent />
    </>
  );
};

export default ToolSlugPage;