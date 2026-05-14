import Footer from '@/components/footer';
import Header from '@/components/header';
import { MousePointer2, ChevronRight, Settings2, DownloadCloud, Plus } from 'lucide-react';
import Link from 'next/link';

// ─── 100% SEO OPTIMIZED METADATA ───
export const metadata = {
  // ✅ Title: primary keyword first, brand last, power words included
  title: "How FreePDFConvert Works – Convert PDF Free Online in 3 Easy Steps",

  // ✅ Description: 155 chars, includes primary keywords + CTA
  description:
    "Learn how to convert PDF files free online in 3 simple steps. Upload your file, choose settings, and download instantly. No signup required. Fast, free & secure.",

  // ✅ Keywords (used by some search engines & crawlers)
  keywords:
    "how to convert pdf free, free pdf converter online, pdf conversion steps, how freepdfconvert works, pdf to word free, pdf tools online, convert pdf instantly, free online pdf tool, pdf converter no signup, pdf convert in seconds",

  alternates: {
    canonical: "https://freepdfconvert.io/how-work",
  },

  // ✅ Open Graph — optimized for max click-through on social
  openGraph: {
    title: "How to Convert PDF Free Online – 3 Simple Steps | FreePDFConvert",
    description:
      "Upload, configure and download. Convert any PDF file free online in seconds with FreePDFConvert. No signup, no watermark, 100% free.",
    url: "https://freepdfconvert.io/how-work",
    type: "website",
    images: [{ url: "/og-how-it-works.png", width: 1200, height: 630, alt: "How to Convert PDF Free Online – FreePDFConvert" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "How to Convert PDF Free Online – 3 Simple Steps | FreePDFConvert",
    description: "Upload, configure, download. Free PDF conversion online in seconds. No signup needed. 100% free & secure.",
    images: ["/og-how-it-works.png"],
  },

  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// ─── JSON-LD Structured Data ───
const schemaHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF Files Free Online",
  "description": "Convert any PDF file free online in 3 simple steps using FreePDFConvert. No signup required.",
  "totalTime": "PT1M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "tool": [
    {
      "@type": "HowToTool",
      "name": "FreePDFConvert – Free Online PDF Converter",
      "url": "https://freepdfconvert.io"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload Your File",
      "text": "Select the PDF or document you want to convert from your device or drag and drop it.",
      "url": "https://freepdfconvert.io/how-work#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Configure Settings",
      "text": "Choose your conversion format or compression level for perfect results.",
      "url": "https://freepdfconvert.io/how-work#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download Your File",
      "text": "Your converted file is ready in seconds. Download it instantly — no watermark, no signup.",
      "url": "https://freepdfconvert.io/how-work#step-3"
    }
  ]
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is FreePDFConvert really free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert is 100% free to use with no hidden fees, no signup, and no watermarks on your converted files."
      }
    },
    {
      "@type": "Question",
      "name": "How long does PDF conversion take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most PDF conversions are completed within seconds. The process is fast and fully automated."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to create an account to convert PDF files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert requires no signup or account creation. Simply upload your file and convert instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Is my file secure when using FreePDFConvert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All uploaded files are processed securely and automatically deleted after conversion to protect your privacy."
      }
    },
    {
      "@type": "Question",
      "name": "What PDF tools does FreePDFConvert offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FreePDFConvert offers PDF to Word, PDF to Excel, PDF to JPG, JPG to PDF, PNG to PDF, PPTX to PDF, PDF compression, and many more free tools."
      }
    }
  ]
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://freepdfconvert.io"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "How It Works",
      "item": "https://freepdfconvert.io/how-work"
    }
  ]
};

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MousePointer2,
      id: "step-1",
      title: "Upload Your File",
      desc: "Select the PDF or document you want to convert from your device — or simply drag and drop it.",
    },
    {
      number: "02",
      icon: Settings2,
      id: "step-2",
      title: "Configure Settings",
      desc: "Choose your output format or compression level for perfect, high-quality results.",
    },
    {
      number: "03",
      icon: DownloadCloud,
      id: "step-3",
      title: "Download Instantly",
      desc: "Your converted file is ready in seconds. Download it free — no watermark, no signup.",
    },
  ];

  return (
    <>
      {/* ─── JSON-LD Structured Data ─── */}
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

      <Header />

      {/* ─── HERO SECTION ─── */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            {/* ✅ Breadcrumb visible for users */}
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-rose-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600 font-semibold">How It Works</span>
            </nav>

            {/* ✅ H1 — primary keyword: "convert pdf free online" */}
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How to Convert PDF{' '}
              <span className="text-rose-600">Free Online</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
              3 simple steps — no signup, no watermark, 100% free
            </p>
          </div>

          {/* ─── 3 STEPS (unchanged layout) ─── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} id={step.id} className="relative flex flex-col items-center text-center group">
                <div className="absolute -top-10 text-[120px] font-black text-gray-200/50 -z-0 group-hover:text-rose-100 transition-colors">
                  {step.number}
                </div>
                <div className="w-24 h-24 bg-rose-600 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-rose-200 rotate-3 group-hover:rotate-6 transition-transform z-10">
                  <step.icon size={40} strokeWidth={2.5} />
                </div>
                {/* ✅ H2 for each step — improves on-page structure */}
                <h2 className="text-2xl font-black text-gray-800 mb-4 z-10">{step.title}</h2>
                <p className="text-gray-500 font-medium leading-relaxed px-6 z-10">{step.desc}</p>
                {idx < 2 && (
                  <div className="hidden lg:block absolute top-12 -right-6 text-gray-300">
                    <ChevronRight size={48} strokeWidth={1} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ─── CTA BUTTON ─── */}
          <div className="mt-20 text-center">
            <Link href="/">
              <button className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-600 transition-all shadow-2xl active:scale-95 flex items-center gap-3 mx-auto">
                <Plus size={24} /> Get Started — It's Free
              </button>
            </Link>
          </div>

          {/* ─── SEO CONTENT: Features ─── */}
          <div className="mt-24 max-w-3xl mx-auto text-left space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Why Convert PDF Files with FreePDFConvert?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                {[
                  "✅ 100% free — no hidden charges",
                  "✅ No watermark on any converted file",
                  "✅ No account or signup required",
                  "✅ Fast conversion — done in seconds",
                  "✅ Works on iPhone, Android, PC & Mac",
                  "✅ Secure — files deleted after conversion",
                  "✅ Supports PDF, Word, Excel, JPG, PNG, PPTX",
                  "✅ High quality output every time",
                ].map((f) => (
                  <li key={f} className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">{f}</li>
                ))}
              </ul>
            </div>

            {/* ─── FAQ Section — targets featured snippets ─── */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {schemaFAQ.mainEntity.map((faq) => (
                  <details key={faq.name} className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 group">
                    <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                      {faq.name}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                      {faq.acceptedAnswer.text}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </>
  );
};

export default HowItWorks;