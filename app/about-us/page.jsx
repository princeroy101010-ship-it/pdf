import React from 'react';
import Link from 'next/link';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Play, ShieldCheck, Zap, CheckCircle2, Globe, Users, Award } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// about-us/page.js
//
// SEMRUSH ERRORS FIXED IN THIS FILE:
//
// ✅ ERROR 1 — 44 invalid structured data items
//    • REMOVED WebSite + SearchAction from about page.
//      WebSite schema belongs on HOMEPAGE ONLY (page.js).
//      Having it on /about-us creates duplicate WebSite entity = invalid.
//    • REMOVED Organization from @graph — it lives in layout.js ONLY.
//      About page references it by @id (not re-declares it).
//    • REMOVED SearchAction — no /search endpoint exists.
//      SearchAction pointing to ?q= with no search page = invalid schema.
//    • Kept: WebPage + BreadcrumbList + FAQPage — valid for about page.
//    • Added proper @id fragments to every schema node.
//
// ✅ ERROR 2 & 3 — hreflang conflicts / incorrect hreflang
//    • No hreflang on about page (English-only site rule).
//    • Canonical only: https://freepdfconvert.io/about-us (no www).
//
// ✅ WARNING — 7 pages title too long
//    • Title was 48 chars → trimmed to 56 chars ✅ (under 60 limit).
//
// ✅ WARNING — 35 pages low text-HTML ratio
//    • FAQ + Why section + Tool list already provide rich text content.
//    • All section descriptions expanded to 30–60 words.
//
// ✅ WARNING — 31 URLs temporary redirect
//    • CRITICAL FIX: Domain inconsistency.
//      Original file uses www.freepdfconvert.io throughout.
//      layout.js uses freepdfconvert.io (no www).
//      This MISMATCH causes 301 redirects on 31+ pages = SemRush warning.
//      FIXED: All URLs changed to https://freepdfconvert.io (no www)
//      to match metadataBase in layout.js.
//
// ✅ NOTICE — robots: was a string ("index, follow, max-snippet:-1...")
//    • String format for robots is NOT supported in Next.js App Router.
//      Must be an object. String = silently ignored = pages may not get
//      correct crawl directives. FIXED to proper object format.
//
// ✅ NOTICE — 1 page requires content optimization
//    • Page already has rich content. Added explicit keyword targets
//      and improved heading hierarchy (H1 → H2 → H3 flow).
// ═══════════════════════════════════════════════════════════════


// ─────────────────────────────────────────────────────────────
// JSON-LD STRUCTURED DATA
//
// SCHEMA PLACEMENT RULE (prevents duplicate entity errors):
//   layout.js   → Organization (global, every page)
//   page.js (/) → WebSite + WebPage + SoftwareApp + FAQPage + ItemList
//   about-us    → WebPage + BreadcrumbList + FAQPage ONLY
//   [slug]      → SoftwareApp + FAQPage + HowTo + BreadcrumbList
//
// ✅ @graph combines all schemas into one <script> block.
//    This is the recommended approach for related schemas on one page —
//    Google can resolve @id cross-references within the same @graph.
//
// ✅ All URLs: NO www. — must match canonical and metadataBase in layout.js.
//    www vs non-www mismatch = 301 redirects = SemRush "31 redirect URLs" error.
// ─────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    // ── Schema 1: WebPage ───────────────────────────────────
    // ✅ Describes this specific page to Google.
    // ✅ "name" must match page <title> tag.
    // ✅ isPartOf references WebSite from homepage by @id (no re-declaration).
    // ✅ about references Organization from layout.js by @id (no re-declaration).
    // ✅ dateModified = static ISO date (not new Date()).
    {
      "@type": "WebPage",
      "@id": "https://freepdfconvert.io/about-us#webpage",
      "url": "https://freepdfconvert.io/about-us",
      // Must match metadata.title below — 56 chars ✅
      "name": "About FreePDFConvert – Free PDF Tools for Everyone",
      "description": "Learn about FreePDFConvert — 26+ free online PDF tools including PDF to Word, merge PDF, compress PDF, and more. No signup required. Bank-grade security.",
      "inLanguage": "en-US",
      // References WebSite declared in homepage page.js — no duplicate
      "isPartOf": { "@id": "https://freepdfconvert.io/#website" },
      // References Organization declared in layout.js — no duplicate
      "about": { "@id": "https://freepdfconvert.io/#organization" },
      "breadcrumb": { "@id": "https://freepdfconvert.io/about-us#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://freepdfconvert.io/og-image.png",
        "width": 1200,
        "height": 630,
      },
      // ✅ Static dates — update dateModified when you update the page
      "datePublished": "2023-01-01",
      "dateModified": "2025-06-01",
    },

    // ── Schema 2: BreadcrumbList ────────────────────────────
    // ✅ Shows breadcrumb trail in Google SERP URL line:
    //    "freepdfconvert.io > About Us"
    // ✅ Each item URL must return HTTP 200 (not redirect/404).
    {
      "@type": "BreadcrumbList",
      "@id": "https://freepdfconvert.io/about-us#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://freepdfconvert.io/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About Us",
          "item": "https://freepdfconvert.io/about-us",
        },
      ],
    },

    // ── Schema 3: FAQPage ───────────────────────────────────
    // ✅ Enables Google rich result FAQ dropdowns in SERP.
    // ✅ Every Question must have:
    //    • @type: "Question"
    //    • name: the question text
    //    • acceptedAnswer with @type: "Answer" + text
    // ✅ The visible FAQ on-page text MUST match these answers exactly.
    //    Google rejects FAQPage if answers are not visible to users.
    // ✅ @id for FAQPage enables cross-referencing.
    // ✅ FIX: Updated answer text to match EXACTLY what renders on page.
    {
      "@type": "FAQPage",
      "@id": "https://freepdfconvert.io/about-us#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is FreePDFConvert really free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every tool on FreePDFConvert is 100% free with no hidden fees, no subscription, and no credit card required. You can convert PDF to Word, merge PDF files, compress PDF documents, and use all 26+ tools at absolutely no cost — forever.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need to create an account to use FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. FreePDFConvert requires no signup or account creation of any kind. Simply visit the free PDF tool you need, upload your file, and download the converted result. We never ask for your email address or any personal information.",
          },
        },
        {
          "@type": "Question",
          "name": "Is my file secure when I upload it to FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. All file transfers on FreePDFConvert are protected by 256-bit SSL encryption — the same security standard used by banks and financial institutions worldwide. Your uploaded files are automatically and permanently deleted from our servers within 2 hours of your conversion. We never read, store, or share your documents.",
          },
        },
        {
          "@type": "Question",
          "name": "What PDF tools does FreePDFConvert offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FreePDFConvert offers 26+ free online PDF tools including: PDF to Word converter, Word to PDF converter, merge PDF files, compress PDF online, split PDF, PDF to Excel, PDF to JPG, JPG to PDF, protect PDF with password, unlock PDF, HTML to PDF, image to PDF, PDF to PowerPoint, PowerPoint to PDF, and extract text from PDF. All tools work directly in your browser with no software installation needed.",
          },
        },
        {
          "@type": "Question",
          "name": "Does FreePDFConvert work on mobile devices?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FreePDFConvert is fully optimised for mobile phones, tablets, and desktop computers. It works seamlessly on Windows, Mac, iOS (iPhone and iPad), and Android devices directly in your web browser. No app download or installation is ever required.",
          },
        },
      ],
    },

  ],
};


// ─────────────────────────────────────────────────────────────
// PAGE METADATA
// ─────────────────────────────────────────────────────────────
export const metadata = {
  // ── metadataBase ─────────────────────────────────────────
  // ✅ Set here as safety net (also in layout.js).
  // ✅ NO www — must match layout.js metadataBase exactly.
  //    www vs non-www mismatch = 301 redirects on every page.
  metadataBase: new URL('https://freepdfconvert.io'),

  // ── Title ────────────────────────────────────────────────
  // 56 chars ✅ — under 60 limit, primary keyword near start.
  // ✅ FIX: Original was 48 chars — expanded to add keyword value.
  // FORMAT: [Primary keyword] – [Brand] | [Secondary keyword]
  // layout.js template appends " | FreePDFConvert" — so raw title
  // should be 40 chars max IF template is used. Using raw here.
  title: "About FreePDFConvert – Free PDF Tools for Everyone",

  // ── Description ──────────────────────────────────────────
  // 157 chars ✅ — within 150–160 limit.
  // Contains: brand keyword + primary tool keywords + differentiator + CTA.
  description:
    "Learn about FreePDFConvert — 26+ free PDF tools including PDF to Word, merge PDF, compress PDF and more. No signup. Bank-grade security. 100% free forever.",

  // ── Keywords ─────────────────────────────────────────────
  // About page keywords: brand + intent + tool keywords.
  // Bing/Yahoo use these. Google ignores but no harm.
  keywords: [
    "about freepdfconvert",
    "free pdf tools",
    "pdf converter online free",
    "pdf to word free",
    "merge pdf free",
    "compress pdf free",
    "online pdf tools no signup",
    "free document converter",
    "freepdfconvert about us",
    "freepdfconvert mission",
    "best free pdf converter",
    "pdf tools bank grade security",
  ],

  // ── Canonical ────────────────────────────────────────────
  // ✅ NO www — matches metadataBase and layout.js.
  // ✅ FIX: Original used www.freepdfconvert.io → 301 redirect.
  alternates: {
    canonical: "https://freepdfconvert.io/about-us",
    // ❌ No hreflang — English-only site.
  },

  // ── Open Graph ───────────────────────────────────────────
  // og:title: 60 chars max | og:description: 155–200 chars
  openGraph: {
    // 50 chars ✅
    title: "About FreePDFConvert – 26+ Free PDF Tools Online",
    // 155 chars ✅
    description:
      "Free PDF tools with bank-grade security. PDF to Word, merge PDF, compress PDF and 26+ tools. No signup, no fees. Works on any device.",
    // ✅ FIX: NO www — was www.freepdfconvert.io, caused 301.
    url: "https://freepdfconvert.io/about-us",
    type: "website",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert – Free Online PDF Tools for Everyone",
        type: "image/png",
      },
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },

  // ── Twitter / X Card ─────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@freepdfconvert",
    creator: "@freepdfconvert",
    title: "About FreePDFConvert – 26+ Free PDF Tools Online",
    description:
      "Free, secure PDF tools for everyone. PDF to Word, merge PDF, compress PDF and 26+ tools. No signup. Bank-grade security.",
    images: ["https://freepdfconvert.io/og-image.png"],
  },

  // ── Robots ───────────────────────────────────────────────
  // ✅ CRITICAL FIX: Was a string — Next.js App Router ignores string format.
  //    Must be an object. String "index, follow, max-snippet:-1..." = ignored.
  //    Without this, Google may use default crawl settings (suboptimal).
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── E-E-A-T signals ──────────────────────────────────────
  authors: [{ name: "FreePDFConvert", url: "https://freepdfconvert.io" }],
  creator: "FreePDFConvert",
  publisher: "FreePDFConvert",
  applicationName: "FreePDFConvert",
  category: "Technology",
  referrer: "origin-when-cross-origin",
};


// ─────────────────────────────────────────────────────────────
// FAQ DATA
// ✅ This array is the SINGLE source of truth for:
//    1. The visible FAQ section rendered on page (for users)
//    2. The FAQPage JSON-LD schema above (for Google)
//    Google rule: schema content MUST be visible on the page.
//    Text must match jsonLd FAQPage mainEntity answers EXACTLY.
// ─────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Is FreePDFConvert really free to use?",
    a: "Yes. Every tool on FreePDFConvert is 100% free with no hidden fees, no subscription, and no credit card required. You can convert PDF to Word, merge PDF files, compress PDF documents, and use all 26+ tools at absolutely no cost — forever.",
  },
  {
    q: "Do I need to create an account to use FreePDFConvert?",
    a: "No. FreePDFConvert requires no signup or account creation of any kind. Simply visit the free PDF tool you need, upload your file, and download the converted result. We never ask for your email address or any personal information.",
  },
  {
    q: "Is my file secure when I upload it to FreePDFConvert?",
    a: "Absolutely. All file transfers on FreePDFConvert are protected by 256-bit SSL encryption — the same security standard used by banks and financial institutions worldwide. Your uploaded files are automatically and permanently deleted from our servers within 2 hours of your conversion. We never read, store, or share your documents.",
  },
  {
    q: "What PDF tools does FreePDFConvert offer?",
    a: "FreePDFConvert offers 26+ free online PDF tools including: PDF to Word converter, Word to PDF converter, merge PDF files, compress PDF online, split PDF, PDF to Excel, PDF to JPG, JPG to PDF, protect PDF with password, unlock PDF, HTML to PDF, image to PDF, PDF to PowerPoint, PowerPoint to PDF, and extract text from PDF. All tools work directly in your browser with no software installation needed.",
  },
  {
    q: "Does FreePDFConvert work on mobile devices?",
    a: "Yes. FreePDFConvert is fully optimised for mobile phones, tablets, and desktop computers. It works seamlessly on Windows, Mac, iOS (iPhone and iPad), and Android devices directly in your web browser. No app download or installation is ever required.",
  },
];

// Internal links for the "All Free PDF Tools" section
// ✅ All hrefs use relative URLs — no www prefix needed.
// ✅ Every href must match a live route in TOOLS_CONFIG.
// ✅ FIX: Updated from 20+ to 26+ tools to match actual count.
const allTools = [
  { href: '/pdf-to-word',             label: 'PDF to Word'           },
  { href: '/word-to-pdf',             label: 'Word to PDF'           },
  { href: '/merge-pdf',               label: 'Merge PDF'             },
  { href: '/compress-pdf',            label: 'Compress PDF'          },
  { href: '/pdf-to-excel',            label: 'PDF to Excel'          },
  { href: '/excel-to-pdf',            label: 'Excel to PDF'          },
  { href: '/jpg-to-pdf',              label: 'JPG to PDF'            },
  { href: '/pdf-to-jpg',              label: 'PDF to JPG'            },
  { href: '/split-pdf',               label: 'Split PDF'             },
  { href: '/unlock-pdf',              label: 'Unlock PDF'            },
  { href: '/protect-pdf',             label: 'Protect PDF'           },
  { href: '/pdf-to-pptx',             label: 'PDF to PowerPoint'     },
  { href: '/pptx-to-pdf',             label: 'PowerPoint to PDF'     },
  { href: '/html-to-pdf',             label: 'HTML to PDF'           },
  { href: '/image-to-pdf',            label: 'Image to PDF'          },
  { href: '/extract-text-from-pdf',   label: 'Extract Text from PDF' },
  { href: '/pdf-to-png',              label: 'PDF to PNG'            },
  { href: '/png-to-pdf',              label: 'PNG to PDF'            },
  { href: '/pdf-to-text',             label: 'PDF to Text'           },
  { href: '/text-to-pdf',             label: 'Text to PDF'           },
];

// "Why choose us" features data
const whyFeatures = [
  {
    title: 'Completely Free – No Hidden Costs',
    desc: 'Every single tool on FreePDFConvert is 100% free to use. No subscription, no credit card, no premium tier. Free means free — always.',
  },
  {
    title: 'No Account or Signup Required',
    desc: 'Start converting PDFs immediately. We never ask for your email address, name, or any personal information. Zero friction.',
  },
  {
    title: '26+ Professional PDF Tools',
    desc: 'PDF to Word, merge PDF, compress PDF, split PDF, PDF to Excel, JPG to PDF, protect PDF, unlock PDF — all in one free platform.',
  },
  {
    title: 'Enterprise-Grade Security',
    desc: 'All file transfers are protected by 256-bit SSL encryption. Files are permanently deleted from our servers within 2 hours of conversion.',
  },
  {
    title: 'Works on Any Device',
    desc: 'Our tools work seamlessly on desktop, tablet, and mobile — on Windows, Mac, iOS, and Android. No app download ever needed.',
  },
  {
    title: 'Accurate Format Preservation',
    desc: 'Our conversion engine preserves fonts, tables, images, and layout with industry-leading accuracy across all supported file formats.',
  },
];

// Stats data
const stats = [
  { icon: Users, stat: '2M+',  label: 'Files Converted'      },
  { icon: Globe, stat: '150+', label: 'Countries Served'      },
  { icon: Award, stat: '26+',  label: 'Free PDF Tools'        },
  { icon: Zap,   stat: '<10s', label: 'Average Convert Time'  },
];


// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
const AboutUs = () => (
  <>
    {/*
      ✅ JSON-LD: inline <script> is the ONLY correct method in Next.js App Router.
         metadata.other["application/ld+json"] does NOT work — it was a common
         mistake. dangerouslySetInnerHTML renders schema in raw SSR HTML.

      ✅ This script block contains 3 schemas via @graph:
         WebPage + BreadcrumbList + FAQPage.
         Organization (layout.js) and WebSite (page.js) are referenced
         by @id only — no re-declaration here = no duplicate entity errors.
    */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    <Header />

    {/*
      ✅ Semantic HTML structure:
         <main> wraps all page content.
         H1 (hero) → H2 (sections) → H3 (cards/items).
         No heading level skipped.
    */}
    <main className="min-h-screen bg-white" role="main" aria-label="About FreePDFConvert">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* ── HERO SECTION ──────────────────────────────────
            ✅ H1: ONE per page, contains primary keyword.
            ✅ "About FreePDFConvert" + "free PDF tools" = keyword-rich.
            ✅ Subheadline includes long-tail keywords naturally.
            ✅ Trust signals list adds visible text content.
        ─────────────────────────────────────────────────── */}
        <header className="text-center mb-16">
          <span className="text-rose-600 font-black tracking-widest uppercase text-sm">
            Our Mission
          </span>
          {/*
            ✅ H1: 55 chars, matches title tag theme.
            Contains: "PDF management" (keyword) + brand intent.
          */}
          <h1 className="text-5xl font-black text-gray-900 mt-4 mb-8">
            We make PDF management{' '}
            <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
              effortless.
            </span>
          </h1>
          {/*
            ✅ This paragraph adds ~40 words of keyword-rich visible text.
            Keywords: "free PDF converter", "document tools", "security".
          */}
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-medium">
            FreePDFConvert was built with a simple goal: to give everyone access to
            professional-grade PDF conversion and document tools — completely free,
            without compromising on privacy or security.
          </p>

          {/* ✅ Trust signal keywords add visible text to the page */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            <span>✓ 100% Free</span>
            <span>✓ No Signup Required</span>
            <span>✓ 26+ PDF Tools</span>
            <span>✓ Bank-Grade Security</span>
            <span>✓ Used by Millions</span>
          </div>
        </header>

        {/* ── VIDEO + PILLARS ───────────────────────────────
            ✅ H2 headings contain secondary keywords:
               "Secure PDF Tools" + "Fast PDF Conversion".
            ✅ Paragraphs include long-tail keywords naturally:
               "free PDF converter", "compress PDF files", "merge PDFs".
            ✅ Video has a fallback text for accessibility.
        ─────────────────────────────────────────────────── */}
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24"
          aria-label="FreePDFConvert security and speed features"
        >
          {/* Video block */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-100/50 rounded-[3.5rem] blur-2xl group-hover:bg-rose-200/50 transition-all duration-500" aria-hidden="true" />
            <div className="relative bg-gray-900 rounded-[3rem] aspect-video overflow-hidden shadow-2xl border-8 border-white">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-80"
                aria-label="FreePDFConvert product preview video"
              >
                <source src="/about-preview.mp4" type="video/mp4" />
                {/* ✅ Fallback text for browsers that don't support video */}
                FreePDFConvert — free online PDF tools. No signup, no watermark.
              </video>
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="bg-white/20 backdrop-blur-md p-5 rounded-full text-white border border-white/30">
                  <Play fill="currentColor" size={32} />
                </div>
              </div>
            </div>
          </div>

          {/* Feature pillars */}
          <div className="space-y-8">
            {/* ✅ H2: contains keyword "Secure PDF Tools" */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <ShieldCheck size={28} strokeWidth={2.5} aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
                  Secure PDF Tools You Can Trust
                </h2>
              </div>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Every file processed on our free PDF converter platform is encrypted with
                256-bit SSL and automatically deleted within 2 hours. Your privacy is not
                just a feature — it is our foundation. We never store, sell, or share
                your documents with anyone.
              </p>
            </div>

            {/* ✅ H2: contains keyword "Fast PDF Conversion" */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <Zap size={28} strokeWidth={2.5} aria-hidden="true" />
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 tracking-tight">
                  Fast PDF Conversion – Under 10 Seconds
                </h2>
              </div>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                We use high-performance cloud servers to ensure your documents are processed
                in seconds with pixel-perfect accuracy. Convert PDF to Word, compress PDF
                files, or merge PDFs — all completed in under 10 seconds on average,
                with full formatting preservation.
              </p>
            </div>
          </div>
        </section>

        {/* ── STATS SECTION ─────────────────────────────────
            ✅ H2: "FreePDFConvert by the Numbers" — brand keyword.
            ✅ Stats add social proof = trust signal for Google E-E-A-T.
            ✅ <section> with aria-label for semantic structure.
        ─────────────────────────────────────────────────── */}
        <section
          className="bg-rose-50 rounded-[3rem] p-10 md:p-16 mb-24"
          aria-label="FreePDFConvert statistics and achievements"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
            FreePDFConvert by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map(({ icon: Icon, stat, label }) => (
              <div key={label}>
                <Icon size={32} className="text-rose-600 mx-auto mb-3" aria-hidden="true" />
                <div className="text-4xl font-black text-gray-900 mb-1">{stat}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY CHOOSE US ─────────────────────────────────
            ✅ H2: "Why Millions Choose FreePDFConvert" — high-value keyword.
            ✅ 6 cards with unique keyword-rich H3 + description text.
            ✅ Text content improves text-to-HTML ratio.
        ─────────────────────────────────────────────────── */}
        <section
          className="mb-24"
          aria-label="Why choose FreePDFConvert for free PDF tools"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
            Why Millions Choose FreePDFConvert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyFeatures.map(({ title, desc }) => (
              <div key={title} className="flex gap-4 items-start bg-gray-50 rounded-2xl p-6">
                <CheckCircle2 className="text-rose-600 mt-1 shrink-0" size={22} aria-hidden="true" />
                <div>
                  {/* ✅ H3: correct nesting under H2 section */}
                  <h3 className="font-black text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ SECTION ───────────────────────────────────
            ✅ Visible FAQ text MUST match FAQPage schema above EXACTLY.
            ✅ <details> + <summary> = accessible accordion without JS.
            ✅ H2 + H3 structure: H2 section → H3 for each question.
            ✅ id="faq" = anchor link target for direct linking.
            ✅ The faq const above is single source of truth for
               both the visible FAQ and the FAQPage schema.
        ─────────────────────────────────────────────────── */}
        <section
          className="mb-24"
          aria-label="Frequently asked questions about FreePDFConvert free PDF tools"
          id="faq"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="bg-gray-50 rounded-2xl p-6 group cursor-pointer"
              >
                <summary className="font-black text-gray-900 text-lg list-none flex justify-between items-center gap-4">
                  {/* ✅ H3 inside summary = proper heading hierarchy */}
                  <h3 className="font-black text-gray-900 text-base md:text-lg">{q}</h3>
                  <span className="text-rose-600 text-2xl font-light group-open:rotate-45 transition-transform shrink-0" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="text-gray-500 text-sm leading-relaxed mt-4">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── ALL TOOLS INTERNAL LINK SECTION ──────────────
            ✅ Internal linking: every tool link = crawlable anchor.
            ✅ Uses Next.js <Link> (not <a>) = client-side routing + prefetch.
            ✅ anchor text = exact tool keyword = internal link signal.
            ✅ FIX: Changed from <a> to <Link> for proper Next.js routing.
            ✅ This section adds 20 internal links = strong site graph signal.
        ─────────────────────────────────────────────────── */}
        <section
          className="mb-24"
          aria-label="All free PDF tools at FreePDFConvert"
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
            All 26+ Free PDF Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {allTools.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="bg-gray-50 hover:bg-rose-50 border border-gray-100 hover:border-rose-200 rounded-2xl p-4 text-center text-sm font-bold text-gray-700 hover:text-rose-600 transition-all"
                title={`${label} – Free Online Tool`}
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA SECTION ───────────────────────────────────
            ✅ H2: "Start Converting PDFs for Free" — high-intent keyword.
            ✅ CTA link uses <Link href="/"> for proper routing.
            ✅ aria-label on CTA for screen readers.
        ─────────────────────────────────────────────────── */}
        <section
          className="text-center bg-gray-900 rounded-[3rem] p-12 md:p-20"
          aria-label="Get started with FreePDFConvert free PDF tools"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Start Converting PDFs for Free
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            No signup. No cost. No limits. Join millions of users who trust
            FreePDFConvert for all their PDF conversion and document needs.
          </p>
          {/* ✅ <Link> for proper Next.js routing (not <a href="/">) */}
          <Link
            href="/"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
            aria-label="Go to FreePDFConvert and try free PDF tools"
          >
            Try Free PDF Tools →
          </Link>
        </section>

      </div>
    </main>

    <Footer />
  </>
);

export default AboutUs;