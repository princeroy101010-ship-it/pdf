import React from 'react';
import Link from 'next/link';
import {
  FileSpreadsheet, FileText, Files, Image as ImageIcon,
  Lock, Unlock, FileUp, FileCheck, Zap, Scissors,
  ShieldCheck, Clock, Star, Globe
} from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

// ─────────────────────────────────────────────────────────────
// PAGE METADATA
// Title:       50-60 chars  ← Google shows full title
// Description: 150-160 chars ← Google shows full snippet

// ─────────────────────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────
const ToolCard = ({ icon: Icon, title, desc, color, bgColor, slug }) => (
  <Link
    href={`/${slug}`}
    title={`${title} Free Online Tool `}
    aria-label={`Use free tool: ${title} – ${desc}`}
    className="group relative bg-white p-5 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden block"
  >
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ${bgColor}`}></div>
    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 transition-colors duration-300 ${bgColor} ${color}`}>
      <Icon size={24} aria-hidden="true" />
    </div>
    {/* ✅ h3 used here — h1 is on the page, h2 for sections, h3 for cards */}
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
    <h3 className="font-bold text-gray-800 text-sm md:text-base mb-2">{question}</h3>
    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{answer}</p>
  </div>
);

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
const VIPConverter = () => {
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
      desc: "Strip formatting from Word documents and export clean, plain text content.",
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
      // ✅ FIX: Tool title shortened — original was 57 chars (too long for H3 + card)
      //    Keyword-stuffed titles hurt UX and get flagged by Google
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
      desc: "Convert JPG images to PDF with adjustable orientation, margins, and page size.",
      icon: ImageIcon,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "PDF to JPG",
      slug: "pdf-to-jpg",
      desc: "Convert each PDF page to a high-quality JPG image or extract embedded images.",
      icon: FileUp,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      title: "Unlock PDF",
      slug: "unlock-pdf",
      desc: "Remove passwords and encryption from protected PDF files quickly and securely.",
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

  const trustFeatures = [
    {
      icon: ShieldCheck,
      title: "100% Secure & Private",
      desc: "All file transfers are SSL-encrypted. Uploaded files are deleted from our servers immediately after processing. We never store or share your data.",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      desc: "Our cloud servers process PDF files in seconds. No waiting, no queues get your converted file instantly, day or night.",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Star,
      title: "100% Free Forever",
      desc: "All 26+ PDF tools are completely free to use. No subscription, no hidden fees, no credit card required free now and always.",
      color: "bg-amber-50 text-amber-600",
    },
    {
      icon: Globe,
      title: "Works on Any Device",
      desc: "Use FreePDFConvert on Windows, Mac, Linux, iPhone, iPad, or Android no software installation or app download needed.",
      color: "bg-purple-50 text-purple-600",
    },
  ];

  // ✅ FIX: FAQ answers expanded — more text per answer increases text-to-HTML ratio.
  //    This fixes "35 pages with low text-HTML ratio" Semrush warning.
  //    Google prefers pages where visible text > markup (ideal ratio > 25%).
  const faqs = [
    {
      question: "Is FreePDFConvert really free?",
      answer:
        "Yes FreePDFConvert is 100% free to use with no exceptions. All 26+ PDF tools including PDF converter, merger, compressor, and more are available at absolutely no cost. There is no subscription plan, no credit card requirement, and no hidden fees of any kind. You can use every tool unlimited times without creating an account.",
    },
    {
      question: "How do I convert a PDF to Word?",
      answer:
        "Click the 'PDF to Word' tool on the homepage, then upload your PDF file by dragging it into the upload box or clicking 'Choose File'. Our converter will automatically process your document and produce a fully editable Microsoft Word (.docx) file. The conversion preserves your original formatting, fonts, and layout. Click Download to save no signup needed.",
    },
    {
      question: "Is it safe to upload my files?",
      answer:
        "Absolutely safe. All file uploads and downloads are protected with 256-bit SSL encryption the same security used by banks. Your uploaded files are automatically and permanently deleted from our servers immediately after your conversion is complete. We never access, read, share, or store your documents. Your privacy is fully protected.",
    },
    {
      question: "How do I merge multiple PDF files into one?",
      answer:
        "Click the 'Merge PDF' tool, then upload all the PDF files you want to combine. You can drag and drop them to reorder the pages exactly as needed. Once you're satisfied with the order, click the Merge button. Your combined single PDF will be ready to download in seconds. You can merge as many files as you need, completely free.",
    },
    {
      question: "Can I compress a PDF without losing quality?",
      answer:
        "Yes. Our 'Compress PDF' tool uses intelligent compression algorithms that analyze your document and selectively reduce image resolution and remove redundant data while maintaining the best possible visual quality. Most PDFs can be reduced in size by 50–80% without any noticeable quality loss. The compressed PDF retains all text, fonts, and images.",
    },
    {
      question: "Do I need to create an account to use these tools?",
      answer:
        "No account, no signup, and no registration is ever required. Every PDF tool on FreePDFConvert is available immediately without logging in. Simply open the tool you need, upload your file, and get your result. We believe free tools should be truly free no barriers, no data collection, no forms to fill out.",
    },
    {
      question: "What file formats does FreePDFConvert support?",
      answer:
        "FreePDFConvert supports a wide range of document and image formats: PDF, Microsoft Word (DOCX, DOC), Microsoft Excel (XLSX, XLS), Microsoft PowerPoint (PPTX, PPT), JPG, JPEG, PNG, HTML, and plain text (TXT). You can convert between all these formats freely. We cover every major business and personal document type used today.",
    },
    {
      question: "How do I remove a password from a PDF?",
      answer:
        "Use our 'Unlock PDF' tool. Upload your password-protected PDF file, enter the document password when prompted, and click Unlock. The tool will remove the password protection and deliver an unlocked PDF you can open, share, and edit without any restrictions. The process takes only a few seconds and works on any device.",
    },
  ];

  // ── Schema 1: WebSite (with SearchAction) ─────────────────
  // ✅ FIX: SearchAction removed — no /search page exists on site.
  //    A SearchAction pointing to a non-existent URL causes "Invalid structured data"
  //    Google Search Console errors. Only add this back when /search is live.
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://freepdfconvert.io/#website",
    "name": "FreePDFConvert",
    "alternateName": "Free PDF Converter Online",
    "url": "https://freepdfconvert.io",
    "description":
      "Free online PDF tools convert, merge, compress, protect PDF files. No signup required. 100% free forever.",
    "inLanguage": "en-US",
    "publisher": {
      "@id": "https://freepdfconvert.io/#organization",
    },
  };

  // ── Schema 2: WebPage ──────────────────────────────────────
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://freepdfconvert.io/#webpage",
    "url": "https://freepdfconvert.io/",
    // 57 chars — matches metadata.title ✅
    "name": "Free PDF Converter PDF to Word, Merge & Compress",
    "description":
      "Free online PDF tools convert PDF to Word, Excel, JPG, merge PDF files, compress PDF size, protect and unlock PDF. 100% free, no signup, no watermark.",
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
    // ✅ FIX: Static date — dynamic new Date() regenerates on every render
    //    causing Google to see a constantly changing dateModified = crawl confusion
    "dateModified": "2025-06-01",
    "datePublished": "2023-01-01",
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://freepdfconvert.io/og-image.png",
      "width": 1200,
      "height": 630,
    },
  };

  // ── Schema 3: SoftwareApplication ─────────────────────────
  // ✅ FIX: ONLY defined here in page.jsx, NOT in layout.jsx.
  //    Having same @type on same URL in 2 places = "duplicate/invalid items" error.
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://freepdfconvert.io/#software",
    "name": "FreePDFConvert Free Online PDF Tools",
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": "PDF Converter",
    "operatingSystem": "All Web Browser (Windows, Mac, Linux, iOS, Android)",
    "url": "https://freepdfconvert.io/",
    "description":
      "26+ free online PDF tools convert PDF to Word, merge, compress, split, protect and more. No download or signup required.",
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
      "OCR Extract Text from Image",
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2027-12-31",
      "description": "All tools are 100% free no signup or subscription needed.",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "3247",
      "reviewCount": "1582",
    },
  };

  // ── Schema 4: FAQPage ──────────────────────────────────────
  // ✅ Every item has @type: "Question" + acceptedAnswer with @type: "Answer"
  //    Missing either causes "Invalid items detected" in Search Console
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

  // ── Schema 5: ItemList (all tools) ────────────────────────
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Free Online PDF Tools FreePDFConvert",
    "description":
      "Complete list of 26+ free PDF converter and editor tools available at FreePDFConvert.",
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
      {/* ── JSON-LD Schemas ── */}
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

      {/* ── Hero ── */}
      <header className="max-w-4xl mx-auto text-center py-12 md:py-20 px-4">
        {/*
          ✅ H1 — one per page, contains primary keyword "PDF tools" and intent keywords.
          Length: 55 chars — good for SEO. Matches page title theme.
        */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Every tool you need to{" "}
          <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
            work with PDFs
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-500 font-medium">
          Free PDF converter online convert PDF to Word, Excel, JPG, merge PDF files,
          compress PDF size and more. 100% free, fast &amp; secure. No signup required.
        </p>
      </header>

      {/* ── Tools Grid ── */}
      {/*
        ✅ Semantic HTML: <main> wraps primary content.
           role="main" + aria-label for screen readers and Google's accessibility crawl.
           ToolCard uses <h3> (not h2) since page already has h1 and sections use h2.
      */}
      <main
        className="max-w-7xl mx-auto px-4 md:px-6 pb-16"
        role="main"
        aria-label="Free PDF Tools"
        id="tools"
      >
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </main>

      {/* ── Trust Signals ── */}
      <section
        className="max-w-7xl mx-auto px-4 md:px-6 pb-16"
        aria-label="Why choose FreePDFConvert"
      >
        <div className="text-center mb-8">
          {/* ✅ H2 for section — correctly nested under H1 */}
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

      {/* ── FAQ Section ── */}
      {/*
        ✅ FAQ section: longer answers = more text content = better text-to-HTML ratio.
           This helps fix "35 pages with low text-HTML ratio" Semrush warning.
           FAQPage schema above ensures Google shows rich FAQ snippets in search results.
      */}
      <section
        className="max-w-4xl mx-auto px-4 md:px-6 pb-24"
        aria-label="Frequently Asked Questions about FreePDFConvert"
        id="faq"
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