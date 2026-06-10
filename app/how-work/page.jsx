import Footer from '@/components/footer';
import Header from '@/components/header';
import { MousePointer2, ChevronRight, Settings2, DownloadCloud, Plus, ShieldCheck, Zap, Globe, Star } from 'lucide-react';
import Link from 'next/link';

// ─── SEO METADATA (Next.js App Router Format) ──────────────────────────────────
export const metadata = {
  title: "Convert PDF Free Online How FreePDFConvert Works",
  description:
    "Free PDF converter online upload, choose format, download in seconds. No signup, no watermark, 100% free. Works on all devices.",
  keywords:
    "how to convert pdf free, free pdf converter online, convert pdf online free, pdf to word free online, compress pdf free, pdf conversion steps, free online pdf tool, pdf converter no signup, convert pdf instantly, pdf tools no watermark, free pdf convert, how freepdfconvert works, online pdf converter fast, pdf to jpg free, pdf merge free online",
  alternates: {
    canonical: "https://freepdfconvert.io/how-work",
  },
  openGraph: {
    title: "Convert PDF Free Online How FreePDFConvert Works",
    description:
      "Upload, configure and download. Convert any PDF file free online in seconds. No signup, no watermark, 100% free.",
    url: "https://freepdfconvert.io/how-work",
    type: "website",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "How to Convert PDF Free Online FreePDFConvert",
      },
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PDF Free Online How FreePDFConvert Works",
    description:
      "Upload, configure, download. Free PDF conversion in seconds. No signup, no watermark, 100% free & secure.",
    images: ["https://freepdfconvert.io/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ─── JSON-LD SCHEMAS ─────────────────────────────────────────────────────────
const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Convert PDF Files Free Online",
  description:
    "Convert any PDF file free online in 3 simple steps using FreePDFConvert. No signup or account required.",
  totalTime: "PT1M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "0",
  },
  tool: [
    {
      "@type": "HowToTool",
      name: "FreePDFConvert Free Online PDF Converter",
      url: "https://freepdfconvert.io",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Upload Your PDF or Document",
      text: "Click the upload button or drag and drop your PDF or document file onto the page. FreePDFConvert supports PDF, Word, Excel, JPG, PNG, and PPTX formats.",
      url: "https://freepdfconvert.io/how-work#step-1",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Choose Your Conversion Settings",
      text: "Select your desired output format — such as Word, Excel, JPG — or choose a compression level to reduce file size. No technical knowledge needed.",
      url: "https://freepdfconvert.io/how-work#step-2",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download Your Converted File Instantly",
      text: "Your file is processed and ready to download in seconds. No watermark, no signup, and your file is automatically deleted after conversion for your privacy.",
      url: "https://freepdfconvert.io/how-work#step-3",
    },
  ],
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is FreePDFConvert really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FreePDFConvert is 100% free to use with no hidden fees, no subscription, no signup, and no watermarks on any converted files.",
      },
    },
    {
      "@type": "Question",
      name: "How long does PDF conversion take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most PDF conversions complete within a few seconds. The entire process is automated and optimized for speed, so you can convert and download your file almost instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to create an account to convert PDF files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No account is needed. FreePDFConvert requires no signup, no registration, and no email address. Simply upload your file and convert it instantly for free.",
      },
    },
    {
      "@type": "Question",
      name: "Is my file secure when using FreePDFConvert?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All uploaded files are processed on secure servers and automatically deleted after conversion. Your documents are never shared, stored permanently, or accessed by third parties.",
      },
    },
    {
      "@type": "Question",
      name: "What PDF tools does FreePDFConvert offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FreePDFConvert offers a complete set of free PDF tools including: PDF to Word, PDF to Excel, PDF to JPG, JPG to PDF, PNG to PDF, PPTX to PDF, PDF compression, PDF merge, and many more — all 100% free.",
      },
    },
    {
      "@type": "Question",
      name: "Can I convert PDF files on my phone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FreePDFConvert works on all devices including iPhone, Android smartphones, tablets, and desktop computers. No app download needed — it works directly in your browser.",
      },
    },
  ],
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://freepdfconvert.io",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "How It Works",
      item: "https://freepdfconvert.io/how-work",
    },
  ],
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Convert PDF Free Online How FreePDFConvert Works",
  url: "https://freepdfconvert.io/how-work",
  description:
    "Free PDF converter online upload, choose format, download in seconds. No signup, no watermark, 100% free. Works on all devices.",
  inLanguage: "en-US",
  isPartOf: {
    "@type": "WebSite",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
  },
  publisher: {
    "@type": "Organization",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
    logo: {
      "@type": "ImageObject",
      url: "https://freepdfconvert.io/logo.png",
    },
  },
  dateModified: "2026-06-09",
};

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MousePointer2,
      id: "step-1",
      title: "Upload Your File",
      desc: "Select your PDF or document from your device — or simply drag and drop it onto the page. Supports PDF, Word, Excel, JPG, PNG, and PPTX files.",
    },
    {
      number: "02",
      icon: Settings2,
      id: "step-2",
      title: "Configure Settings",
      desc: "Choose your output format — convert to Word, Excel, JPG — or select a compression level to reduce PDF file size. Fast and easy to use.",
    },
    {
      number: "03",
      icon: DownloadCloud,
      id: "step-3",
      title: "Download Instantly",
      desc: "Your converted file is ready in seconds. Download it free — no watermark, no signup required. Your file is deleted automatically after download.",
    },
  ];

  const features = [
    { icon: ShieldCheck, title: "100% Secure", desc: "All files are encrypted during transfer and automatically deleted from our servers after conversion. Your privacy is fully protected." },
    { icon: Zap, title: "Lightning Fast", desc: "Our servers process your PDF conversion in seconds. No waiting, no queue. Get your converted file almost instantly." },
    { icon: Globe, title: "Works Everywhere", desc: "Use FreePDFConvert on any device — iPhone, Android, Windows PC, Mac, or tablet. No app download or installation required." },
    { icon: Star, title: "No Watermarks Ever", desc: "Every file you convert or compress is completely watermark-free. What you download is a clean, professional-quality output." },
  ];

  const tools = [
    { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDF to editable Word document (.docx) free online." },
    { name: "PDF to Excel", href: "/pdf-to-excel", desc: "Extract tables from PDF into an Excel spreadsheet (.xlsx) instantly." },
    { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert each PDF page to a high-quality JPG image for free." },
    { name: "JPG to PDF", href: "/jpg-to-pdf", desc: "Combine JPG images into a single PDF file online, no signup needed." },
    { name: "PNG to PDF", href: "/png-to-pdf", desc: "Convert PNG images to PDF format quickly and completely free." },
    { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size without losing quality — free PDF compressor." },
    { name: "PPTX to PDF", href: "/pptx-to-pdf", desc: "Convert PowerPoint presentations to PDF format instantly online." },
    { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDF files into one document free online." },
  ];

  return (
    <>
      {/* ─── JSON-LD Structured Data Injection ─────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaHowTo) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />

      <Header />

      {/* ─── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Breadcrumb Links */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-10 text-center">
            <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 font-semibold">How It Works</span>
          </nav>

          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How to{' '}
              <span className="text-rose-600">Convert PDF Free Online</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              FreePDFConvert is a free online PDF converter that lets you convert, compress,
              and manage PDF files in seconds — with no signup, no watermark, and no hidden fees.
            </p>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              3 simple steps — no signup, no watermark, 100% free
            </p>
          </div>

          {/* ─── 3 STEPS CARDS ─────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                id={step.id}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="absolute -top-10 text-[120px] font-black text-gray-200/50 -z-0 group-hover:text-rose-100 transition-colors select-none">
                  {step.number}
                </div>
                <div className="w-24 h-24 bg-rose-600 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-rose-200 rotate-3 group-hover:rotate-6 transition-transform z-10">
                  <step.icon size={40} strokeWidth={2.5} />
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-4 z-10">
                  {step.title}
                </h2>
                <p className="text-gray-500 font-medium leading-relaxed px-6 z-10">
                  {step.desc}
                </p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-12 -right-6 text-gray-300">
                    <ChevronRight size={48} strokeWidth={1} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Call To Action Button */}
          <div className="mt-20 text-center">
            <Link href="/">
              <button className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-600 transition-all shadow-2xl active:scale-95 flex items-center gap-3 mx-auto">
                <Plus size={24} /> Get Started — It's Free
              </button>
            </Link>
          </div>

          {/* ─── SEO TEXT SECTIONS ─────────────────────────────────────────── */}
          <div className="mt-24 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              What Is FreePDFConvert?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              FreePDFConvert is a free online PDF converter tool that allows you to convert
              PDF files to Word, Excel, JPG, and many other formats — completely free, with no
              account required. Whether you need to convert a PDF to an editable Word document,
              compress a large PDF to reduce its file size, or merge multiple PDFs into one,
              FreePDFConvert has the right tool for you.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Unlike many other PDF converters, FreePDFConvert is 100% free with no hidden
              subscription fees, no daily limits that force upgrades, and absolutely no
              watermarks on your converted files. The tool works directly in your browser on
              any device — iPhone, Android, Windows, or Mac — so there's nothing to install
              or download.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Privacy is a top priority. Every file you upload is processed on secure servers
              and automatically deleted after your conversion is complete. Your documents are
              never stored permanently or shared with third parties.
            </p>
          </div>

          {/* Core App Features Grid */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Why Use FreePDFConvert?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <f.icon size={22} className="text-rose-600" strokeWidth={2} />
                    <h3 className="font-bold text-gray-800">{f.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tools Directory Module */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Free PDF Tools Available on FreePDFConvert
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              All tools are completely free — no signup, no limits, no watermarks.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="bg-white rounded-xl px-4 py-4 shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-gray-800 group-hover:text-rose-600 transition-colors text-sm mb-1">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* In-depth Step Guides */}
          <div className="mt-16 max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Step-by-Step Guide: How to Convert a PDF File Free Online
            </h2>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Step 1 — Upload Your PDF or Document
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                To get started, visit the tool page for the conversion you need — for example,
                the PDF to Word converter. Click the upload button to select a file from your
                device, or simply drag and drop your file onto the upload area. FreePDFConvert
                accepts PDF files, Word documents (.docx), Excel spreadsheets (.xlsx), JPG
                images, PNG images, and PowerPoint files (.pptx). There is no file size
                restriction that requires a paid plan — the tool is genuinely free to use.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Step 2 — Choose Your Conversion Format or Settings
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Once your file is uploaded, select the output format or settings you need.
                For example, if you are using the PDF compressor, you can choose between
                different compression levels — maximum compression for the smallest file size,
                or balanced compression to preserve quality. For format conversions such as
                PDF to Word or PDF to Excel, the output format is automatically selected
                and the conversion begins immediately. No complex configuration is required —
                the process is designed to be simple and fast for all users.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                Step 3 — Download Your Converted File
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your converted or compressed file will be ready in seconds. Once the process
                is complete, a download button will appear on the page. Click it to save your
                file directly to your device. The downloaded file is completely free of
                watermarks and is full quality. After you download your file, it is
                automatically and permanently deleted from FreePDFConvert's servers to
                protect your privacy and security.
              </p>
            </div>
          </div>

          {/* Interactive Semantic Accordion Accord FAQs */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {schemaFAQ.mainEntity.map((faq) => (
                <details
                  key={faq.name}
                  className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 group"
                >
                  <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center gap-4 select-none">
                    {faq.name}
                    <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 text-xs">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                    {faq.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Footer Callout Banner */}
          <div className="mt-16 max-w-3xl mx-auto bg-rose-600 rounded-3xl p-10 text-center text-white">
            <h2 className="text-2xl font-black mb-3">
              Ready to Convert Your PDF for Free?
            </h2>
            <p className="text-rose-100 mb-6 text-sm leading-relaxed">
              Join thousands of users who convert PDF files free online every day with
              FreePDFConvert. No signup needed — just upload and convert in seconds.
            </p>
            <Link href="/">
              <button className="bg-white text-rose-600 px-10 py-4 rounded-2xl font-black text-lg hover:bg-rose-50 transition-all shadow-xl active:scale-95 inline-flex items-center gap-2">
                <Plus size={22} /> Start Converting — It's Free
              </button>
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default HowItWorks;