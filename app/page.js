import React from 'react';
import Link from 'next/link';
import {
  FileSpreadsheet, FileText, Files, Image as ImageIcon,
  Lock, Unlock, FileUp, FileCheck, Zap, Scissors,
  ShieldCheck, Clock, Star, Globe
} from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

// ── SEO METADATA (Next.js App Router) ─────────────────────────
export const metadata = {
  // ✅ SEO-1: Power Title — Primary keyword first, brand last
  title: "Free PDF Converter Online – PDF to Word, Merge, Compress | FreePDFConvert",

  // ✅ SEO-2: Meta Description — 155 chars, CTA included
  description:
    "Free online PDF tools — Convert PDF to Word, Excel, JPG. Merge PDF, Compress PDF, Protect & Unlock PDF. 100% free, fast & secure. No signup required. Try now!",

  // ✅ SEO-3: Expanded Keyword List — Long-tail + short-tail
  keywords: [
    "free pdf converter",
    "pdf to word",
    "merge pdf",
    "compress pdf",
    "pdf to excel",
    "jpg to pdf",
    "pdf tools online free",
    "pdf to jpg",
    "word to pdf",
    "unlock pdf",
    "protect pdf",
    "split pdf",
    "pdf to png",
    "png to pdf",
    "image to pdf",
    "html to pdf",
    "pdf to powerpoint",
    "powerpoint to pdf",
    "pdf to text",
    "text to pdf",
    "excel to pdf",
    "extract text from pdf",
    "ocr pdf",
    "online pdf editor free",
    "convert pdf online",
    "free pdf tools",
    "pdf converter no signup",
    "reduce pdf size",
    "pdf compressor online",
    "pdf merger online free",
  ],

  // ✅ SEO-4: Canonical URL — Prevent duplicate content
  alternates: {
    canonical: "https://freepdfconvert.io/",
  },

  // ✅ SEO-5: App & Author meta
  applicationName: "FreePDFConvert",
  authors: [{ name: "FreePDFConvert", url: "https://freepdfconvert.io" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",

  // ✅ SEO-6: OpenGraph — Rich social previews
  openGraph: {
    title: "Free PDF Converter Online – PDF to Word, Merge, Compress | FreePDFConvert",
    description:
      "All-in-one free PDF converter. PDF to Word, merge, compress, protect and more. No signup required. 26+ free PDF tools.",
    url: "https://freepdfconvert.io/",
    type: "website",
    locale: "en_US",
    siteName: "FreePDFConvert",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert – 26+ Free Online PDF Tools | Convert, Merge, Compress PDF",
        type: "image/png",
      },
    ],
  },

  // ✅ SEO-7: Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Converter Online – Convert, Merge & Compress PDF",
    description:
      "26+ PDF tools free online. PDF to Word, merge, compress, protect and more. No signup. 100% free.",
    images: ["https://freepdfconvert.io/og-image.png"],
    creator: "@freepdfconvert",
    site: "@freepdfconvert",
  },

  // ✅ SEO-8: Robots — Full crawl access
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ SEO-9: Verification — Add your actual codes here
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",   // 🔴 Replace with real code from Google Search Console
  //   yandex: "YOUR_YANDEX_CODE",
  //   bing: "YOUR_BING_WEBMASTER_CODE",
  // },
};

// ── ToolCard ─────────────────────────────────────────────────
const ToolCard = ({ icon: Icon, title, desc, color, bgColor, slug }) => (
  <Link
    href={`/${slug}`}
    title={`${title} – Free Online Tool | FreePDFConvert`}
    aria-label={`Use free tool: ${title} – ${desc}`}
    className="group relative bg-white p-5 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden block"
  >
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ${bgColor}`}></div>
    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300 ${bgColor} ${color}`}>
      <Icon size={24} aria-hidden="true" />
    </div>
    <h2 className="text-base md:text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
      {title}
    </h2>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
      {desc}
    </p>
  </Link>
);

// ── TrustCard ─────────────────────────────────────────────────
const TrustCard = ({ icon: Icon, title, desc, color }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${color}`}>
      <Icon size={22} aria-hidden="true" />
    </div>
    <h3 className="font-bold text-gray-800 mb-1 text-sm md:text-base">{title}</h3>
    <p className="text-gray-500 text-xs md:text-sm">{desc}</p>
  </div>
);

// ── FAQ Item ──────────────────────────────────────────────────
const FAQItem = ({ question, answer }) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 md:p-6">
    <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2">{question}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{answer}</p>
  </div>
);

// ── Homepage ─────────────────────────────────────────────────
const VIPConverter = () => {
  const tools = [
    { title: "PDF to Excel",              slug: "pdf-to-excel",            desc: "Extract tables from PDF to Microsoft Excel spreadsheets easily.",                         icon: FileSpreadsheet, color: "text-green-600",   bgColor: "bg-green-50"   },
    { title: "Excel to PDF",              slug: "excel-to-pdf",            desc: "Convert your Excel sheets into high-quality PDF documents.",                              icon: FileCheck,       color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Word to PDF",               slug: "word-to-pdf",             desc: "The best way to convert Word to PDF while keeping formatting.",                           icon: FileText,        color: "text-blue-600",   bgColor: "bg-blue-50"    },
    { title: "Image to PDF",              slug: "image-to-pdf",            desc: "Convert JPG, PNG, and other images into a professional PDF document instantly.",          icon: ImageIcon,       color: "text-rose-600",   bgColor: "bg-rose-50"    },
    { title: "PDF to Word",               slug: "pdf-to-word",             desc: "Convert PDF documents to editable Microsoft Word files.",                                 icon: FileText,        color: "text-blue-700",   bgColor: "bg-blue-50"    },
    { title: "PDF to PowerPoint",         slug: "pdf-to-pptx",             desc: "Convert your PDF presentations to editable PowerPoint PPTX slides.",                     icon: FileUp,          color: "text-orange-600", bgColor: "bg-orange-50"  },
    { title: "Compress PDF",              slug: "compress-pdf",            desc: "Reduce the file size of your PDF while optimizing for maximal quality.",                  icon: Zap,             color: "text-blue-700",   bgColor: "bg-blue-50"    },
    { title: "HTML to PDF",               slug: "html-to-pdf",             desc: "Convert web pages or HTML files into high-quality PDF documents.",                        icon: FileUp,          color: "text-cyan-600",   bgColor: "bg-cyan-50"    },
    { title: "Split PDF",                 slug: "split-pdf",               desc: "Extract specific page ranges and split your PDF into separate files instantly.",          icon: Scissors,        color: "text-red-600",    bgColor: "bg-red-50"     },
    { title: "Text to PDF",               slug: "text-to-pdf",             desc: "Convert plain text files into professional PDF documents instantly.",                     icon: FileUp,          color: "text-slate-600",  bgColor: "bg-slate-50"   },
    { title: "PDF to Text",               slug: "pdf-to-text",             desc: "Extract all text content from your PDF into a simple Text file.",                        icon: FileText,        color: "text-yellow-700", bgColor: "bg-yellow-50"  },
    { title: "Text to Word",              slug: "text-to-word",            desc: "Transform your plain text documents into editable Word files.",                           icon: FileText,        color: "text-indigo-600", bgColor: "bg-indigo-50"  },
    { title: "Word to Text",              slug: "word-to-text",            desc: "Convert Microsoft Word documents back to simple, clean text.",                           icon: FileText,        color: "text-blue-500",   bgColor: "bg-blue-50"    },
    { title: "PowerPoint to Text",        slug: "pptx-to-text",            desc: "Extract speaker notes and slide text into a clean text document.",                       icon: FileText,        color: "text-orange-600", bgColor: "bg-orange-50"  },
    { title: "Text to PowerPoint",        slug: "text-to-pptx",            desc: "Create a basic PowerPoint presentation directly from your text files.",                  icon: FileUp,          color: "text-red-700",    bgColor: "bg-red-50"     },
    { title: "PDF to HTML",               slug: "pdf-to-html",             desc: "Transform your PDF content into editable HTML code for websites.",                       icon: FileText,        color: "text-purple-600", bgColor: "bg-purple-50"  },
    { title: "PowerPoint to PDF",         slug: "pptx-to-pdf",             desc: "Turn your PowerPoint presentations into PDF documents.",                                 icon: FileUp,          color: "text-orange-700", bgColor: "bg-orange-50"  },
    { title: "PDF to PNG",                slug: "pdf-to-png",              desc: "Convert each PDF page into a high-quality PNG image file.",                              icon: ImageIcon,       color: "text-rose-500",   bgColor: "bg-rose-50"    },
    { title: "PNG to PDF",                slug: "png-to-pdf",              desc: "Combine or convert PNG images into a professional PDF document.",                        icon: FileCheck,       color: "text-teal-600",   bgColor: "bg-teal-50"    },
    { title: "Extract Text From Image Online Free (100% Accurate OCR)",   slug: "extract-text-from-image", desc: "Extract text from images (JPG, PNG) using advanced OCR technology.",                   icon: FileText,        color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Extract Text From PDF",     slug: "extract-text-from-pdf",   desc: "Convert PDF documents to plain text files and extract content instantly.",               icon: Files,           color: "text-orange-600", bgColor: "bg-orange-50"  },
    { title: "Merge PDF",                 slug: "merge-pdf",               desc: "Combine multiple PDF files into one single organized document.",                         icon: Files,           color: "text-rose-600",   bgColor: "bg-rose-50"    },
    { title: "JPG to PDF",                slug: "jpg-to-pdf",              desc: "Convert images to PDF with adjustable orientation and margins.",                         icon: ImageIcon,       color: "text-amber-600",  bgColor: "bg-amber-50"   },
    { title: "PDF to JPG",                slug: "pdf-to-jpg",              desc: "Extract images inside a PDF or convert pages to JPG images.",                           icon: FileUp,          color: "text-pink-600",   bgColor: "bg-pink-50"    },
    { title: "Unlock PDF",                slug: "unlock-pdf",              desc: "Remove passwords and security from protected PDF files.",                                icon: Unlock,          color: "text-gray-700",   bgColor: "bg-gray-100"   },
    { title: "Protect PDF",               slug: "protect-pdf",             desc: "Encrypt your PDF with a password to prevent unauthorized access.",                       icon: Lock,            color: "text-indigo-600", bgColor: "bg-indigo-50"  },
  ];

  // ── Trust Signals ───────────────────────────────────────────
  const trustFeatures = [
    { icon: ShieldCheck, title: "100% Secure & Private",   desc: "Your files are encrypted and deleted automatically after processing. We never store your data.", color: "bg-green-50 text-green-600"  },
    { icon: Clock,       title: "Lightning Fast",           desc: "Our servers process your PDF files in seconds using advanced cloud technology.",                  color: "bg-blue-50 text-blue-600"    },
    { icon: Star,        title: "100% Free Forever",        desc: "All 26+ PDF tools are completely free. No subscription, no hidden fees, no credit card needed.",   color: "bg-amber-50 text-amber-600"  },
    { icon: Globe,       title: "Works on Any Device",      desc: "Use our PDF tools on Windows, Mac, Linux, iOS, or Android — no software installation needed.",    color: "bg-purple-50 text-purple-600" },
  ];

  // ── FAQ Data ───────────────────────────────────────────────
  const faqs = [
    {
      question: "Is FreePDFConvert really free?",
      answer: "Yes! FreePDFConvert is 100% free to use. All 26+ PDF tools are available at no cost. No subscription, no credit card, and no hidden fees are required.",
    },
    {
      question: "How do I convert a PDF to Word?",
      answer: "Simply click on the 'PDF to Word' tool, upload your PDF file, and click Convert. Your editable Word document will be ready to download in seconds — no signup needed.",
    },
    {
      question: "Is it safe to upload my files?",
      answer: "Absolutely. All file transfers are encrypted with SSL. Your uploaded files are automatically deleted from our servers after processing. We never share or store your data.",
    },
    {
      question: "How do I merge multiple PDF files into one?",
      answer: "Click the 'Merge PDF' tool, upload all your PDF files, arrange them in the desired order, and click Merge. Your combined PDF will be ready to download instantly.",
    },
    {
      question: "Can I compress a PDF without losing quality?",
      answer: "Yes. Our 'Compress PDF' tool uses smart compression algorithms to reduce file size while maintaining the best possible document quality.",
    },
    {
      question: "Do I need to create an account to use these tools?",
      answer: "No account or signup is required. All PDF tools on FreePDFConvert are available immediately — just open the tool and start converting.",
    },
    {
      question: "What file formats does FreePDFConvert support?",
      answer: "FreePDFConvert supports PDF, Word (DOCX), Excel (XLSX), PowerPoint (PPTX), JPG, PNG, HTML, and plain text files. We cover all major document and image formats.",
    },
    {
      question: "How do I remove a password from a PDF?",
      answer: "Use our 'Unlock PDF' tool. Upload your password-protected PDF, enter the password, and download the unlocked version — fast and easy.",
    },
  ];

  // ── Schema 1: ItemList ─────────────────────────────────────
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Online PDF Tools – FreePDFConvert",
    description: "Complete list of 26+ free PDF converter and editor tools available at FreePDFConvert.io — convert, merge, compress, split, protect and more.",
    url: "https://freepdfconvert.io/",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `https://freepdfconvert.io/${tool.slug}`,
      description: tool.desc,
    })),
  };

  // ── Schema 2: WebSite ──────────────────────────────────────
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreePDFConvert",
    alternateName: "Free PDF Converter Online",
    url: "https://freepdfconvert.io",
    description: "Free online PDF tools — convert, merge, compress, protect PDF files. No signup required. 100% free forever.",
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://freepdfconvert.io/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ── Schema 3: Organization ─────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FreePDFConvert",
    alternateName: "Free PDF Convert",
    url: "https://freepdfconvert.io",
    logo: {
      "@type": "ImageObject",
      url: "https://freepdfconvert.io/logo.png",
      width: 200,
      height: 60,
    },
    description: "FreePDFConvert provides 26+ free online PDF tools including PDF converter, merger, compressor, and more.",
    sameAs: [
      "https://twitter.com/freepdfconvert",
      "https://www.facebook.com/freepdfconvert",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  };

  // ── Schema 4: WebPage ──────────────────────────────────────
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://freepdfconvert.io/#webpage",
    url: "https://freepdfconvert.io/",
    name: "Free PDF Converter Online – PDF to Word, Merge, Compress | FreePDFConvert",
    description: "Free online PDF tools — Convert PDF to Word, Excel, JPG. Merge PDF, Compress PDF, Protect & Unlock PDF. 100% free, fast & secure.",
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", url: "https://freepdfconvert.io" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://freepdfconvert.io/" }],
    },
    dateModified: new Date().toISOString().split("T")[0],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://freepdfconvert.io/og-image.png",
      width: 1200,
      height: 630,
    },
  };

  // ── Schema 5: SoftwareApplication ─────────────────────────
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FreePDFConvert – Free Online PDF Tools",
    applicationCategory: "UtilitiesApplication",
    applicationSubCategory: "PDF Converter",
    operatingSystem: "All – Web Browser (Windows, Mac, Linux, iOS, Android)",
    url: "https://freepdfconvert.io/",
    description: "26+ free online PDF tools — convert PDF to Word, merge, compress, split, protect and more. No download or signup required.",
    featureList: [
      "PDF to Word Converter",
      "PDF to Excel Converter",
      "Merge PDF Files",
      "Compress PDF Size",
      "Split PDF Pages",
      "Protect & Unlock PDF",
      "JPG to PDF Converter",
      "PDF to JPG Converter",
      "HTML to PDF Converter",
      "OCR – Extract Text from Image",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      description: "All tools are 100% free — no signup or subscription needed.",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "3247",
      reviewCount: "1582",
    },
  };

  // ── Schema 6: FAQPage ──────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* ✅ Schema 1 — ItemList */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      {/* ✅ Schema 2 — WebSite */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />
      {/* ✅ Schema 3 — Organization */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {/* ✅ Schema 4 — WebPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {/* ✅ Schema 5 — SoftwareApplication */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      {/* ✅ Schema 6 — FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Header />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <header className="max-w-4xl mx-auto text-center py-12 md:py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Every tool you need to{" "}
          <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
            work with PDFs
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-500 font-medium">
          Free PDF converter online — convert PDF to Word, Excel, JPG, merge PDF files,
          compress PDF size and more. 100% free, fast &amp; secure. No signup required.
        </p>
      </header>

      {/* ── Tools Grid ────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-16" role="main" aria-label="Free PDF Tools">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </main>

      {/* ── Trust Signals ─────────────────────────────────────── */}
      <section
        className="max-w-7xl mx-auto px-4 md:px-6 pb-16"
        aria-label="Why choose FreePDFConvert"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Why Millions Choose FreePDFConvert
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            The fastest, safest, and most complete free PDF toolkit online.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {trustFeatures.map((feature, i) => (
            <TrustCard key={i} {...feature} />
          ))}
        </div>
      </section>

      {/* ── FAQ Section ───────────────────────────────────────── */}
      <section
        className="max-w-4xl mx-auto px-4 md:px-6 pb-24"
        aria-label="Frequently Asked Questions about FreePDFConvert"
      >
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base">
            Everything you need to know about our free PDF tools.
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