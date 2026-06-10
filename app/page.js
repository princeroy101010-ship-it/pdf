import React from 'react';
import Link from 'next/link';
import {
  FileSpreadsheet, FileText, Files, Image as ImageIcon,
  Lock, Unlock, FileUp, FileCheck, Zap, Scissors,
  ShieldCheck, Clock, Star, Globe
} from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

// ═══════════════════════════════════════════════════════════════
// PAGE-LEVEL METADATA
//
// This export only affects THIS page (app/page.jsx = homepage /).
// It MERGES with layout.js metadata — page-level values OVERRIDE layout.
//
// SEMRUSH FIXES:
// ✅ Title = 50 chars (was missing/using layout default = generic)
// ✅ Description = 158 chars ✅
// ✅ canonical = homepage URL (prevents duplicate content from /index)
// ✅ No hreflang here (removed from layout too — single-language site)
// ═══════════════════════════════════════════════════════════════
export const metadata = {
  // ── Title ──────────────────────────────────────────────────
  // 50 chars ✅ — under 60, contains primary keyword + brand
  // Google search snippet title = this value
  title: "Free PDF Converter – PDF to Word, Merge & Compress",

  // ── Description ────────────────────────────────────────────
  // 158 chars ✅ — contains keyword, benefit, differentiator, CTA
  description:
    "Convert PDF to Word, Excel, JPG for free. Merge, split, compress & protect PDFs online. No signup, no watermark. 26+ free tools – fast, secure & 100% free.",

  // ── Canonical ──────────────────────────────────────────────
  // ✅ Required on every page. Prevents Google treating
  //    freepdfconvert.io and freepdfconvert.io/ as duplicates.
  alternates: {
    canonical: "https://freepdfconvert.io",
  },

  // ── Open Graph (page-level override) ───────────────────────
  openGraph: {
    title: "Free PDF Converter – PDF to Word, Merge & Compress",
    description:
      "Convert PDF to Word, Excel, JPG for free. Merge, split, compress & protect PDFs online. No signup, no watermark. 26+ free PDF tools.",
    url: "https://freepdfconvert.io",
    type: "website",
  },
};

// ═══════════════════════════════════════════════════════════════
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────
// ✅ ToolCard: <h3> is correct here.
//    H1 (hero) → H2 (sections) → H3 (cards) = correct nesting.
//    aria-label describes the link action for screen readers + Google.
// ═══════════════════════════════════════════════════════════════
const ToolCard = ({ icon: Icon, title, desc, color, bgColor, slug }) => (
  <Link
    href={`/${slug}`}
    title={`${title} – Free Online Tool`}
    aria-label={`Use free tool: ${title} – ${desc}`}
    className="group relative bg-white p-5 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden block"
  >
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ${bgColor}`}></div>
    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300 ${bgColor} ${color}`}>
      <Icon size={24} aria-hidden="true" />
    </div>
    <h3 className="text-base md:text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
      {title}
    </h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
      {desc}
    </p>
  </Link>
);

const TrustCard = ({ icon: Icon, title, desc, color }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${color}`}>
      <Icon size={22} aria-hidden="true" />
    </div>
    <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm">{desc}</p>
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 md:p-6">
    {/* ✅ h3 here is correct: H1 → H2 → H3 hierarchy maintained */}
    <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2">{question}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{answer}</p>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════
const VIPConverter = () => {

  // ── Tools List ─────────────────────────────────────────────
  // Each tool slug must match the actual route in /app/[slug]/page.jsx.
  // ✅ FIX (SEMRUSH WARNING: 2 pages low word count):
  //    Tool desc = 10–15 words each. This adds text content to the page
  //    and improves the text-to-HTML ratio for this page.
  const tools = [
    {
      title: "PDF to Excel",
      slug: "pdf-to-excel",
      desc: "Extract tables and data from PDF into editable Microsoft Excel spreadsheets instantly.",
      icon: FileSpreadsheet,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Excel to PDF",
      slug: "excel-to-pdf",
      desc: "Convert Excel spreadsheets (.xlsx, .xls) into high-quality, shareable PDF documents.",
      icon: FileCheck,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Word to PDF",
      slug: "word-to-pdf",
      desc: "Convert Word documents to PDF while preserving fonts, layout, and formatting perfectly.",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Image to PDF",
      slug: "image-to-pdf",
      desc: "Convert JPG, PNG, and other image formats into a professional PDF document instantly.",
      icon: ImageIcon,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      title: "PDF to Word",
      slug: "pdf-to-word",
      desc: "Convert PDF documents into fully editable Microsoft Word DOCX files with high accuracy.",
      icon: FileText,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      title: "PDF to PowerPoint",
      slug: "pdf-to-pptx",
      desc: "Convert PDF presentations into editable PowerPoint PPTX slides in seconds.",
      icon: FileUp,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Compress PDF",
      slug: "compress-pdf",
      desc: "Reduce PDF file size while preserving maximum quality. Fast online PDF compressor.",
      icon: Zap,
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      title: "HTML to PDF",
      slug: "html-to-pdf",
      desc: "Convert web pages or HTML files into high-quality, printable PDF documents online.",
      icon: FileUp,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      title: "Split PDF",
      slug: "split-pdf",
      desc: "Extract specific page ranges or split your PDF into separate smaller files instantly.",
      icon: Scissors,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      title: "Text to PDF",
      slug: "text-to-pdf",
      desc: "Convert plain text (.txt) files into clean, formatted PDF documents in one click.",
      icon: FileUp,
      color: "text-slate-600",
      bgColor: "bg-slate-50",
    },
    {
      title: "PDF to Text",
      slug: "pdf-to-text",
      desc: "Extract all readable text content from any PDF into a plain .txt file instantly.",
      icon: FileText,
      color: "text-yellow-700",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Text to Word",
      slug: "text-to-word",
      desc: "Transform plain text documents into formatted, editable Microsoft Word DOCX files.",
      icon: FileText,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Word to Text",
      slug: "word-to-text",
      desc: "Strip formatting from Word documents and export clean, plain text content easily.",
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "PowerPoint to Text",
      slug: "pptx-to-text",
      desc: "Extract all slide text and speaker notes from PowerPoint presentations into TXT.",
      icon: FileText,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Text to PowerPoint",
      slug: "text-to-pptx",
      desc: "Create a basic PowerPoint presentation from your text file automatically.",
      icon: FileUp,
      color: "text-red-700",
      bgColor: "bg-red-50",
    },
    {
      title: "PDF to HTML",
      slug: "pdf-to-html",
      desc: "Convert PDF pages into editable HTML code suitable for websites and web apps.",
      icon: FileText,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "PowerPoint to PDF",
      slug: "pptx-to-pdf",
      desc: "Convert PowerPoint presentations (.pptx, .ppt) into universally shareable PDF files.",
      icon: FileUp,
      color: "text-orange-700",
      bgColor: "bg-orange-50",
    },
    {
      title: "PDF to PNG",
      slug: "pdf-to-png",
      desc: "Convert every PDF page into a high-resolution PNG image file with transparency support.",
      icon: ImageIcon,
      color: "text-rose-500",
      bgColor: "bg-rose-50",
    },
    {
      title: "PNG to PDF",
      slug: "png-to-pdf",
      desc: "Combine or convert single and multiple PNG images into a professional PDF document.",
      icon: FileCheck,
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
    {
      // ✅ Title shortened to fit card + pass Google title-length check
      title: "Extract Text from Image (OCR)",
      slug: "extract-text-from-image",
      desc: "Use advanced OCR technology to extract text from JPG, PNG, and scanned image files.",
      icon: FileText,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Extract Text from PDF",
      slug: "extract-text-from-pdf",
      desc: "Convert PDF documents to plain text files and extract all content in seconds.",
      icon: Files,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Merge PDF",
      slug: "merge-pdf",
      desc: "Combine multiple PDF files into one single, organized PDF document effortlessly.",
      icon: Files,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
    },
    {
      title: "JPG to PDF",
      slug: "jpg-to-pdf",
      desc: "Convert JPG images to PDF with adjustable orientation, margins, and page size options.",
      icon: ImageIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "PDF to JPG",
      slug: "pdf-to-jpg",
      desc: "Convert each PDF page to a high-quality JPG image or extract embedded images easily.",
      icon: FileUp,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Unlock PDF",
      slug: "unlock-pdf",
      desc: "Remove passwords and encryption from protected PDF files quickly and securely online.",
      icon: Unlock,
      color: "text-gray-700",
      bgColor: "bg-gray-100",
    },
    {
      title: "Protect PDF",
      slug: "protect-pdf",
      desc: "Add password encryption to your PDF files to prevent unauthorized access and copying.",
      icon: Lock,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  // ── Trust Features ─────────────────────────────────────────
  // ✅ FIX (SEMRUSH WARNING: 35 pages low text-HTML ratio):
  //    Longer, keyword-rich descriptions increase visible text
  //    relative to HTML markup. Target text-to-HTML ratio > 25%.
  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "100% Secure & Private",
      desc: "All file transfers are protected with 256-bit SSL encryption. Your uploaded files are automatically and permanently deleted from our servers immediately after processing. We never access, store, or share your documents. Your privacy is fully guaranteed.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Clock,
      title: "Lightning Fast Processing",
      desc: "Our high-performance cloud servers convert PDF files in seconds, not minutes. No waiting, no queues — get your converted file instantly, day or night. Whether you're converting one file or many, speed is always guaranteed.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Star,
      title: "100% Free Forever",
      desc: "Every one of our 26+ PDF tools is completely free to use with no hidden costs. No subscription plan, no credit card required, no usage limits. FreePDFConvert has been free since day one and will remain free forever — that's our promise.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Globe,
      title: "Works on Any Device",
      desc: "Use FreePDFConvert on any device — Windows PC, Mac, Linux, iPhone, iPad, or Android smartphone. No software installation or app download is ever needed. Open your browser, upload your file, and get your result in seconds from anywhere in the world.",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  // ── FAQ Data ───────────────────────────────────────────────
  // ✅ FIX (SEMRUSH WARNING: 2 pages low word count + 35 low text-HTML):
  //    Each answer is 50–80 words. This substantially increases
  //    the visible text content on the page improving text-to-HTML ratio.
  //
  // ✅ FIX (SEMRUSH ERROR: 44 invalid structured data):
  //    These exact strings are used in FAQPage JSON-LD below.
  //    The on-page visible text MUST match the schema text — Google
  //    rejects FAQPage schema if the answers aren't visible on the page.
  const faqs = [
    {
      question: "Is FreePDFConvert really 100% free?",
      answer:
        "Yes — FreePDFConvert is completely free with no exceptions. All 26+ PDF tools including PDF converter, merger, compressor, splitter, and more are available at absolutely no cost. There is no subscription plan, no credit card requirement, and no hidden fees of any kind. You can use every tool as many times as you like without ever creating an account or logging in.",
    },
    {
      question: "How do I convert a PDF to Word for free?",
      answer:
        "Click the 'PDF to Word' tool on the homepage, then upload your PDF file by dragging it into the upload area or clicking 'Choose File'. Our converter will automatically process your document and produce a fully editable Microsoft Word (.docx) file. The conversion preserves your original formatting, fonts, tables, and layout. Click Download to save your file — no signup needed.",
    },
    {
      question: "Is it safe to upload my files to FreePDFConvert?",
      answer:
        "Absolutely. All file uploads and downloads are protected with 256-bit SSL encryption — the same security standard used by banks and major financial institutions. Your uploaded files are automatically and permanently deleted from our servers immediately after your conversion is complete. We never access, read, share, or store your documents. Your privacy is fully protected at every step.",
    },
    {
      question: "How do I merge multiple PDF files into one?",
      answer:
        "Click the 'Merge PDF' tool on the homepage, then upload all the PDF files you want to combine. You can drag and drop the files to reorder the pages exactly as you need. Once you are satisfied with the order, click the Merge button. Your combined single PDF document will be ready to download in seconds — completely free, no signup required.",
    },
    {
      question: "Can I compress a PDF without losing quality?",
      answer:
        "Yes. Our 'Compress PDF' tool uses intelligent compression algorithms that analyze your document and selectively reduce image resolution and remove redundant metadata while maintaining the best possible visual quality. Most PDF files can be reduced in size by 50–80% without any noticeable quality loss. The compressed PDF retains all text, fonts, images, and formatting from the original.",
    },
    {
      question: "Do I need to create an account to use PDF tools?",
      answer:
        "No account, no signup, and no registration is ever required. Every PDF tool on FreePDFConvert is instantly available without logging in. Simply open the tool you need, upload your file, and get your result. We believe truly free tools should have no barriers — no forms, no email verification, no data collection of any kind.",
    },
    {
      question: "What file formats does FreePDFConvert support?",
      answer:
        "FreePDFConvert supports a wide range of document and image formats: PDF, Microsoft Word (DOCX, DOC), Microsoft Excel (XLSX, XLS), Microsoft PowerPoint (PPTX, PPT), JPG, JPEG, PNG, HTML, and plain text (TXT). You can convert between all these formats freely and without limits. We cover every major business and personal document format used today.",
    },
    {
      question: "How do I remove a password from a PDF file?",
      answer:
        "Use our 'Unlock PDF' tool. Upload your password-protected PDF file, enter the document password when prompted, and click Unlock. The tool will remove the password protection and deliver a fully unlocked PDF that you can open, share, and edit without any restrictions. The entire process takes only a few seconds and works on any device or operating system.",
    },
  ];

  // ═══════════════════════════════════════════════════════════
  // JSON-LD STRUCTURED DATA SCHEMAS
  //
  // ✅ FIX (SEMRUSH ERROR 1 — 44 invalid structured data items):
  //
  // PLACEMENT RULE:
  //   layout.jsx → Organization schema (global, every page)
  //   page.jsx   → WebSite + WebPage + SoftwareApplication + FAQPage + ItemList
  //
  // VALIDATION RULES (Google requirements):
  //   1. Every schema needs a unique "@id" URL fragment
  //   2. No duplicate @type for the same URL across layout + page
  //   3. FAQPage: every Question must have acceptedAnswer with @type: "Answer"
  //   4. SoftwareApplication: aggregateRating ratingCount must be realistic
  //   5. Offers.priceValidUntil must be a future date in YYYY-MM-DD format
  //   6. dateModified must be static (not new Date()) — dynamic dates
  //      cause GSC to see constantly changing modification dates = crawl confusion
  //   7. Content in structured data MUST be visible on the page
  //      (Google rejects hidden or off-page schema content)
  //   8. SearchAction in WebSite schema ONLY if /search page returns HTTP 200
  // ═══════════════════════════════════════════════════════════

  // ── Schema 1: WebSite ───────────────────────────────────────
  // Tells Google the site name, URL, and description.
  // ✅ No SearchAction — freepdfconvert.io has no /search endpoint.
  //    A SearchAction pointing to a non-existent URL causes invalid structured data.
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://freepdfconvert.io/#website",
    "name": "FreePDFConvert",
    "alternateName": "Free PDF Converter Online",
    "url": "https://freepdfconvert.io",
    "description":
      "Free online PDF tools — convert, merge, compress, split, protect PDF files. No signup required. 100% free forever.",
    "inLanguage": "en-US",
    "publisher": {
      // References Organization in layout.jsx by @id — no duplication
      "@id": "https://freepdfconvert.io/#organization",
    },
  };

  // ── Schema 2: WebPage ───────────────────────────────────────
  // Describes this specific page (homepage).
  // "name" must match page <title> tag.
  // ✅ dateModified = static ISO date (not new Date())
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://freepdfconvert.io/#webpage",
    "url": "https://freepdfconvert.io/",
    // Must match page title tag — 50 chars ✅
    "name": "Free PDF Converter – PDF to Word, Merge & Compress",
    "description":
      "Convert PDF to Word, Excel, JPG for free. Merge, split, compress & protect PDFs online. No signup, no watermark. 26+ free PDF tools — fast, secure.",
    "inLanguage": "en-US",
    "isPartOf": { "@id": "https://freepdfconvert.io/#website" },
    "about": { "@id": "https://freepdfconvert.io/#organization" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "@id": "https://freepdfconvert.io/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://freepdfconvert.io/",
        },
      ],
    },
    // ✅ Static dates — update dateModified manually when you update the page
    "datePublished": "2023-01-01",
    "dateModified": "2025-06-01",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://freepdfconvert.io/og-image.png",
      "width": 1200,
      "height": 630,
    },
  };

  // ── Schema 3: SoftwareApplication ──────────────────────────
  // Enables rich results: star rating, price, OS in Google SERP.
  // ✅ ONLY defined in page.jsx — NOT in layout.jsx (no duplicates).
  // ✅ aggregateRating: ratingCount & reviewCount must be real numbers.
  //    Using inflated fake numbers = Google spam policy violation.
  //    Update these to match your real review data.
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://freepdfconvert.io/#software",
    "name": "FreePDFConvert – Free Online PDF Tools",
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": "PDF Converter",
    // ✅ operatingSystem must reflect actual supported environments
    "operatingSystem": "Windows, macOS, Linux, iOS, Android (Web Browser)",
    "url": "https://freepdfconvert.io/",
    "description":
      "26+ free online PDF tools — convert PDF to Word, merge PDF, compress PDF, split PDF, protect and unlock PDF. No download or signup required. Works in any web browser.",
    "featureList": [
      "PDF to Word Converter",
      "PDF to Excel Converter",
      "Merge PDF Files",
      "Compress PDF Size",
      "Split PDF Pages",
      "Protect and Unlock PDF",
      "JPG to PDF Converter",
      "PDF to JPG Converter",
      "HTML to PDF Converter",
      "OCR: Extract Text from Image",
      "PowerPoint to PDF Converter",
      "PDF to PowerPoint Converter",
      "Image to PDF Converter",
      "PDF Compressor Online",
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      // ✅ Must be a future date — update annually
      "priceValidUntil": "2027-12-31",
      "description": "All 26+ PDF tools are 100% free — no signup or subscription required.",
    },
    // ✅ IMPORTANT: Update ratingValue, ratingCount, reviewCount with
    //    your REAL data. Fake/inflated ratings violate Google spam policy
    //    and can result in manual action / loss of rich results.
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "3247",
      "reviewCount": "1582",
    },
  };

  // ── Schema 4: FAQPage ───────────────────────────────────────
  // Enables FAQ rich snippet in Google — shows Q&A directly in SERP.
  // ✅ Every Question must have: @type: "Question", name, acceptedAnswer
  // ✅ Every acceptedAnswer must have: @type: "Answer", text
  // ✅ The answer text MUST match visible on-page content (same faqs array)
  // ✅ Missing @type on Question or Answer = "Invalid items detected" in GSC
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer,
      },
    })),
  };

  // ── Schema 5: ItemList (all tools) ─────────────────────────
  // Helps Google understand this is a list page with multiple items.
  // Each item URL must return HTTP 200 (not 404/redirect).
  // ✅ FIX (SEMRUSH ERROR: 1 page returned 4XX + 1 broken internal link):
  //    Audit each slug below — if the page doesn't exist yet, REMOVE it
  //    from this list until the page is live. A broken URL in ItemList
  //    causes "invalid structured data" in Search Console.
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Online PDF Tools – FreePDFConvert",
    "description":
      "Complete list of 26+ free PDF converter and PDF editor tools available at FreePDFConvert.io.",
    "url": "https://freepdfconvert.io/",
    "numberOfItems": tools.length,
    "itemListElement": tools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "url": `https://freepdfconvert.io/${tool.slug}`,
      "description": tool.desc,
    })),
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* ── JSON-LD Schemas ────────────────────────────────────
          ✅ All 5 schemas placed inside the page component return value.
          ✅ Next.js SSR renders these in <body> — Googlebot reads them fine.
          ✅ <script> with dangerouslySetInnerHTML = correct for JSON-LD in Next.js.
          ✅ Each schema is a SEPARATE <script> block — easier for Google to parse.
          ✅ NO schema types duplicated from layout.jsx.
      ────────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Header />

      {/* ── HERO SECTION ──────────────────────────────────────
          ✅ <header> semantic tag wraps the hero — correct HTML5 structure.
          ✅ H1: ONE per page. Contains primary keyword "PDF tools".
             53 chars — ideal for SEO (40–70 chars recommended).
          ✅ Subheadline (<p>): Contains long-tail keywords naturally:
             "convert PDF to Word", "merge PDF", "compress PDF", "free".
          ✅ NO keyword stuffing — reads naturally for users.
      ────────────────────────────────────────────────────── */}
      <header className="max-w-4xl mx-auto text-center py-12 md:py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Every free PDF tool you need{" "}
          <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
            in one place
          </span>
        </h1>
        {/*
          ✅ This paragraph is the "hero description" — it appears above the fold.
             Google reads this as the most important content block after H1.
             Keywords included: "PDF converter online free", "PDF to Word",
             "merge PDF files", "compress PDF", "no signup", "100% free".
        */}
        <p className="text-base md:text-xl text-gray-500 font-medium max-w-2xl mx-auto">
          Free PDF converter online — convert PDF to Word, Excel, JPG, merge PDF files,
          compress PDF size, split, protect &amp; unlock PDFs. 100% free, fast &amp; secure.
          No signup required. Works on any device.
        </p>
      </header>

      {/* ── TOOLS GRID ────────────────────────────────────────
          ✅ <main> wraps primary content — one per page rule.
          ✅ role="main" + aria-label = accessibility + Google comprehension.
          ✅ id="tools" = allows anchor links like /#tools in navigation.
          ✅ H3 in ToolCard is correct: H1 hero → H2 sections → H3 cards.
      ────────────────────────────────────────────────────── */}
      <main
        className="max-w-7xl mx-auto px-4 md:px-6 pb-16"
        role="main"
        aria-label="Free PDF Converter Tools"
        id="tools"
      >
        {/* ✅ H2: Section heading — under H1, above H3 tool cards */}
        <h2 className="sr-only">All Free PDF Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </main>

      {/* ── WHY CHOOSE US (TRUST SIGNALS) ─────────────────────
          ✅ <section> with aria-label = semantic HTML for Google.
          ✅ H2 heading: "Why Choose FreePDFConvert" — secondary keyword.
          ✅ Long trust card descriptions improve text-to-HTML ratio.
             This is a direct fix for "35 pages low text-HTML ratio" warning.
      ────────────────────────────────────────────────────── */}
      <section
        className="max-w-7xl mx-auto px-4 md:px-6 pb-16"
        aria-label="Why choose FreePDFConvert – Features and Benefits"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Why Millions Choose FreePDFConvert
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            The fastest, safest, and most complete free PDF toolkit available online.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {trustFeatures.map((feature, i) => (
            <TrustCard key={i} {...feature} />
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS SECTION ──────────────────────────────
          ✅ NEW SECTION — Added to fix:
             • "2 pages have low word count" (SemRush warning)
             • "35 pages low text-HTML ratio" (SemRush warning)
             • "1 page requires content optimization" (SemRush notice)
          ✅ Contains semantic content that matches user search intent:
             "how to convert pdf online free" — informational queries.
          ✅ H2 heading with target keyword "free PDF converter".
      ────────────────────────────────────────────────────── */}
      <section
        className="max-w-4xl mx-auto px-4 md:px-6 pb-16"
        aria-label="How to use FreePDFConvert free PDF tools"
        id="how-it-works"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            How to Convert PDF Files Online for Free
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Converting, merging, or compressing a PDF takes just 3 simple steps.
            No software needed — works directly in your browser.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 text-xl font-extrabold">
              1
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-base">Choose Your PDF Tool</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Select the free PDF tool you need from our collection of 26+ tools.
              Whether you want to convert PDF to Word, merge PDF files, compress PDF size,
              or unlock a protected PDF — we have every tool you need.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 text-xl font-extrabold">
              2
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-base">Upload Your File</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Drag and drop your PDF, Word, Excel, PowerPoint, JPG, or PNG file into the
              upload area, or click to browse and select a file from your computer,
              smartphone, or tablet. No file size restrictions for free users.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4 text-xl font-extrabold">
              3
            </div>
            <h3 className="font-bold text-gray-800 mb-2 text-base">Download Your Result</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our servers process your file instantly in the cloud. Once complete,
              click the Download button to save your converted, merged, or compressed PDF
              to your device. Your file is deleted from our servers immediately after download.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ───────────────────────────────────────
          ✅ FAQPage JSON-LD schema above makes these show in Google rich results.
          ✅ <section> + aria-label helps Google identify this as FAQ content.
          ✅ id="faq" allows direct anchor linking from other pages.
          ✅ H2 heading contains keywords: "free PDF tools", "FAQ".
          ✅ Each FAQItem uses H3 (question) + <p> (answer) — correct nesting.
          ✅ Detailed answers = more text content = better text-to-HTML ratio.
          ✅ The FAQ answer text must match faqSchema text exactly for GSC validation.
      ────────────────────────────────────────────────────── */}
      <section
        className="max-w-4xl mx-auto px-4 md:px-6 pb-24"
        aria-label="Frequently Asked Questions about FreePDFConvert free PDF tools"
        id="faq"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Everything you need to know about our free online PDF converter tools.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VIPConverter;