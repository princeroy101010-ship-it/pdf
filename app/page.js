
import React from 'react';
import Link from 'next/link';
import {
  FileSpreadsheet, FileText, Files, Image as ImageIcon,
  Lock, Unlock, FileUp, FileCheck, Zap, Scissors
} from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata = {
  title: "Free PDF Converter Online – Convert PDF to Word, Merge & Compress",
  description:
    "Free online PDF tools. Convert PDF to Word, Excel, JPG. Merge PDF files, compress PDF size, protect & unlock PDF. Fast, secure & 100% free – no install needed.",
  keywords:
    "free pdf converter, pdf to word, merge pdf, compress pdf, pdf to excel, jpg to pdf, pdf tools online free, pdf to jpg, word to pdf, unlock pdf",

  openGraph: {
    title: "Free PDF Converter Online – Convert PDF to Word, Merge & Compress",
    description:
      "All-in-one free PDF converter. PDF to Word, merge, compress, protect and more. No signup required.",
    url: "https://freepdfconvert.io/",
    type: "website",
    locale: "en_US",
    siteName: "FreePDFConvert",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FreePDFConvert – Free Online PDF Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Converter Online – Convert, Merge & Compress PDF",
    description:
      "All PDF tools free online. PDF to Word, merge, compress, protect and more. No signup.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

// ── ToolCard ─────────────────────────────────────────────────
const ToolCard = ({ icon: Icon, title, desc, color, bgColor, slug }) => (
  <Link
    href={`/${slug}`}
    title={title}
    aria-label={`Use tool: ${title}`}
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

// ── Homepage ─────────────────────────────────────────────────
const VIPConverter = () => {
  const tools = [
    { title: "PDF to Excel",          slug: "pdf-to-excel",            desc: "Extract tables from PDF to Microsoft Excel spreadsheets easily.",                         icon: FileSpreadsheet, color: "text-green-600",   bgColor: "bg-green-50"   },
    { title: "Excel to PDF",          slug: "excel-to-pdf",            desc: "Convert your Excel sheets into high-quality PDF documents.",                              icon: FileCheck,       color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Word to PDF",           slug: "word-to-pdf",             desc: "The best way to convert Word to PDF while keeping formatting.",                           icon: FileText,        color: "text-blue-600",   bgColor: "bg-blue-50"    },
    { title: "Image to PDF",          slug: "image-to-pdf",            desc: "Convert JPG, PNG, and other images into a professional PDF document instantly.",          icon: ImageIcon,       color: "text-rose-600",   bgColor: "bg-rose-50"    },
    { title: "PDF to Word",           slug: "pdf-to-word",             desc: "Convert PDF documents to editable Microsoft Word files.",                                 icon: FileText,        color: "text-blue-700",   bgColor: "bg-blue-50"    },
    { title: "PDF to PowerPoint",     slug: "pdf-to-pptx",             desc: "Convert your PDF presentations to editable PowerPoint PPTX slides.",                     icon: FileUp,          color: "text-orange-600", bgColor: "bg-orange-50"  },
    { title: "Compress PDF",          slug: "compress-pdf",            desc: "Reduce the file size of your PDF while optimizing for maximal quality.",                  icon: Zap,             color: "text-blue-700",   bgColor: "bg-blue-50"    },
    { title: "HTML to PDF",           slug: "html-to-pdf",             desc: "Convert web pages or HTML files into high-quality PDF documents.",                        icon: FileUp,          color: "text-cyan-600",   bgColor: "bg-cyan-50"    },
    { title: "Split PDF",             slug: "split-pdf",               desc: "Extract specific page ranges and split your PDF into separate files instantly.",          icon: Scissors,        color: "text-red-600",    bgColor: "bg-red-50"     },
    { title: "Text to PDF",           slug: "Text-to-pdf",             desc: "Convert plain text files into professional PDF documents instantly.",                     icon: FileUp,          color: "text-slate-600",  bgColor: "bg-slate-50"   },
    { title: "PDF to Text",           slug: "pdf-to-Text",             desc: "Extract all text content from your PDF into a simple Text file.",                        icon: FileText,        color: "text-yellow-700", bgColor: "bg-yellow-50"  },
    { title: "Text to Word",          slug: "Text-to-word",            desc: "Transform your plain text documents into editable Word files.",                           icon: FileText,        color: "text-indigo-600", bgColor: "bg-indigo-50"  },
    { title: "Word to Text",          slug: "word-to-Text",            desc: "Convert Microsoft Word documents back to simple, clean text.",                           icon: FileText,        color: "text-blue-500",   bgColor: "bg-blue-50"    },
    { title: "PowerPoint to Text",    slug: "pptx-to-Text",            desc: "Extract speaker notes and slide text into a clean text document.",                       icon: FileText,        color: "text-orange-600", bgColor: "bg-orange-50"  },
    { title: "Text to PowerPoint",    slug: "Text-to-pptx",            desc: "Create a basic PowerPoint presentation directly from your text files.",                  icon: FileUp,          color: "text-red-700",    bgColor: "bg-red-50"     },
    { title: "PDF to HTML",           slug: "pdf-to-html",             desc: "Transform your PDF content into editable HTML code for websites.",                       icon: FileText,        color: "text-purple-600", bgColor: "bg-purple-50"  },
    { title: "PowerPoint to PDF",     slug: "pptx-to-pdf",             desc: "Turn your PowerPoint presentations into PDF documents.",                                 icon: FileUp,          color: "text-orange-700", bgColor: "bg-orange-50"  },
    { title: "PDF to PNG",            slug: "pdf-to-png",              desc: "Convert each PDF page into a high-quality PNG image file.",                              icon: ImageIcon,       color: "text-rose-500",   bgColor: "bg-rose-50"    },
    { title: "PNG to PDF",            slug: "png-to-pdf",              desc: "Combine or convert PNG images into a professional PDF document.",                        icon: FileCheck,       color: "text-teal-600",   bgColor: "bg-teal-50"    },
    { title: "Extract Text From Image", slug: "extract-text-from-image", desc: "Extract text from images (JPG, PNG) using advanced OCR technology.",                  icon: FileText,        color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Extract Text From PDF", slug: "extract-text-from-pdf",   desc: "Convert PDF documents to plain text files and extract content instantly.",               icon: Files,           color: "text-orange-600", bgColor: "bg-orange-50"  },
    { title: "Merge PDF",             slug: "merge-pdf",               desc: "Combine multiple PDF files into one single organized document.",                         icon: Files,           color: "text-rose-600",   bgColor: "bg-rose-50"    },
    { title: "JPG to PDF",            slug: "jpg-to-pdf",              desc: "Convert images to PDF with adjustable orientation and margins.",                         icon: ImageIcon,       color: "text-amber-600",  bgColor: "bg-amber-50"   },
    { title: "PDF to JPG",            slug: "pdf-to-jpg",              desc: "Extract images inside a PDF or convert pages to JPG images.",                           icon: FileUp,          color: "text-pink-600",   bgColor: "bg-pink-50"    },
    { title: "Unlock PDF",            slug: "unlock-pdf",              desc: "Remove passwords and security from protected PDF files.",                                icon: Unlock,          color: "text-gray-700",   bgColor: "bg-gray-100"   },
    { title: "Protect PDF",           slug: "protect-pdf",             desc: "Encrypt your PDF with a password to prevent unauthorized access.",                       icon: Lock,            color: "text-indigo-600", bgColor: "bg-indigo-50"  },
  ];

  // ── Schema 1: ItemList ──────────────────────────────────────
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Free Online PDF Tools",
    description: "Complete list of free PDF converter and editor tools available at FreePDFConvert.io",
    numberOfItems: tools.length,
    itemListElement: tools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title,
      url: `https://freepdfconvert.io/${tool.slug}`,
      description: tool.desc,
    })),
  };

  // ── Schema 2: WebSite ───────────────────────────────────────
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
    description: "Free online PDF tools — convert, merge, compress, protect PDF files. No signup required.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://freepdfconvert.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // ── Schema 3: Organization ──────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
    logo: {
      "@type": "ImageObject",
      url: "https://freepdfconvert.io/logo.png",
      width: 200,
      height: 60,
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: "English",
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">

      {/* ✅ Schema 1 — ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* ✅ Schema 2 — WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />

      {/* ✅ Schema 3 — Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <Header />

      {/* Hero */}
      <header className="max-w-4xl mx-auto text-center py-12 md:py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-6 tracking-tight">
          Every tool you need to{" "}
          <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">
            work with PDFs
          </span>
        </h1>
        <p className="text-base md:text-xl text-gray-500 font-medium">
          Free PDF converter online — convert PDF to Word, Excel, JPG, merge PDF files,
          compress PDF size and more. 100% free, fast & secure. No signup required.
        </p>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-24" role="main">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VIPConverter;