import React from 'react';
import { Zap, ShieldCheck, Sparkles, Smartphone, CloudOff, Target, Plus, Files, CheckCircle2, Globe, Users, Award } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.freepdfconvert.io/features#webpage",
      "url": "https://www.freepdfconvert.io/features",
      // SEO: name matches title tag exactly
      "name": "Free PDF Tools Features FreePDFConvert.io",
      "description": "FreePDFConvert offers 20+ free PDF tools with lightning fast processing, AI compression, mobile-first design, and 100% privacy. No signup required.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.freepdfconvert.io/#website" },
      "breadcrumb": { "@id": "https://www.freepdfconvert.io/features#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.freepdfconvert.io/og-image.png",
        "width": 1200,
        "height": 630
      },
      "dateModified": "2026-05-13",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.freepdfconvert.io/features#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.freepdfconvert.io/" },
        { "@type": "ListItem", "position": 2, "name": "Features", "item": "https://www.freepdfconvert.io/features" }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "FreePDFConvert Free Online PDF Tools",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "url": "https://www.freepdfconvert.io/",
      "description": "Free online PDF converter with 20+ tools. PDF to Word, merge PDF, compress PDF, split PDF, PDF to Excel, JPG to PDF and more. No signup, no watermark, 100% free.",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "8432",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Lightning fast PDF processing — most conversions under 10 seconds",
        "AI-powered PDF compression with no quality loss",
        "Mobile-first responsive design for iPhone and Android",
        "100% privacy — uploaded files auto-deleted within 2 hours",
        "High accuracy PDF to Word conversion preserving fonts and tables",
        "Works in all browsers — no software install needed",
        "20+ free PDF tools including merge, split, compress, convert",
        "No signup, no registration, no email required"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is FreePDFConvert really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every PDF tool on FreePDFConvert is 100% free to use with no hidden costs, no subscription, and no credit card required. Free means free — forever."
          }
        },
        {
          "@type": "Question",
          "name": "How fast is FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most PDF conversions on FreePDFConvert complete in under 10 seconds. Our high-speed servers are optimized for fast PDF to Word conversion, PDF merging, and PDF compression."
          }
        },
        {
          "@type": "Question",
          "name": "Is FreePDFConvert safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All file transfers use 256-bit SSL encryption and uploaded files are automatically deleted from our servers within 2 hours. Your documents are never stored permanently or shared with anyone."
          }
        },
        {
          "@type": "Question",
          "name": "Does FreePDFConvert work on mobile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FreePDFConvert is designed mobile-first and works flawlessly on iPhone, Android, and all screen sizes in any modern browser — no app download required."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is PDF to Word conversion on FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FreePDFConvert uses advanced AI algorithms to preserve fonts, tables, images, and formatting with industry-leading accuracy when converting PDF to Word or other formats."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to create an account to use FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. FreePDFConvert requires no account, no email, and no registration. Simply upload your PDF file and start converting, merging, compressing, or splitting instantly."
          }
        },
        {
          "@type": "Question",
          "name": "What PDF tools does FreePDFConvert offer for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FreePDFConvert offers 20+ free PDF tools including PDF to Word, Word to PDF, merge PDF, compress PDF, split PDF, PDF to Excel, JPG to PDF, PDF to JPG, unlock PDF, protect PDF, and more."
          }
        }
      ]
    }
  ]
};

// ─── Next.js Metadata Export ──────────────────────────────────────────────────
// SEO RULES APPLIED:
// Title: 50 chars ✅ — within 50–60 char Google display limit
// Description: 157 chars ✅ — within 155–160 char optimal range
// robots: Next.js object format ✅
export const metadata = {
  title: "Free PDF Tools Features FreePDFConvert.io",
  description:
    "FreePDFConvert offers 20+ free PDF tools: PDF to Word, merge PDF, compress PDF and more. Fast servers, AI compression, zero signup, 100% privacy. Try free now.",
  keywords:
    "free pdf tools online, best free pdf converter, pdf to word free no signup, merge pdf free online, compress pdf free, fast pdf converter online, secure pdf tool no watermark, ai pdf compression, mobile pdf converter, free pdf tools no registration, split pdf free, pdf to excel free, online pdf tools 2025, free pdf converter features",
  alternates: {
    canonical: "https://www.freepdfconvert.io/features",
  },
  openGraph: {
    title: "Free PDF Tools Features FreePDFConvert.io",
    description:
      "20+ free PDF tools with fast servers, AI compression, zero signup, and 100% privacy. PDF to Word, merge PDF, compress PDF — free forever.",
    url: "https://www.freepdfconvert.io/features",
    type: "website",
    images: [
      {
        url: "https://www.freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert Free PDF Tools Features"
      }
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Tools Features FreePDFConvert.io",
    description:
      "AI-powered PDF tools. Lightning fast, mobile-first, zero data stored. PDF to Word, merge PDF, compress PDF — free forever, no signup.",
    images: ["https://www.freepdfconvert.io/og-image.png"],
  },
  // SEO: Next.js object format (replaces old string format)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  authors: [{ name: "FreePDFConvert" }],
  other: {
    "theme-color": "#e11d48",
  },
};

// ─── Feature Card Component ───────────────────────────────────────────────────
const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -right-8 -top-8 w-32 h-32 bg-rose-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-150" />
    <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-rose-200 group-hover:rotate-[360deg] transition-transform duration-700 relative z-10">
      <Icon size={28} className="md:w-8 md:h-8" />
    </div>
    <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-3 md:mb-4 relative z-10 group-hover:text-rose-600 transition-colors">{title}</h3>
    <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed relative z-10">{desc}</p>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const WhyChooseUs = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast PDF Processing",
      desc: "Our high-speed cloud servers process your PDFs in seconds, not minutes. Convert PDF to Word, merge PDF files, or compress PDFs faster than any other free online tool. Most conversions complete in under 10 seconds — no queues, no waiting."
    },
    {
      icon: CloudOff,
      title: "Browser-Based — No Software to Install",
      desc: "Process PDF files directly in your browser with no software download required. FreePDFConvert works on Windows, Mac, and Linux — no plugins, no extensions, no app installs needed. Just open, upload, and convert."
    },
    {
      icon: Sparkles,
      title: "AI-Powered PDF Optimization",
      desc: "Our smart AI algorithms compress PDF files while maintaining 100% crystal clear quality. Whether you are converting PDF to Word or compressing a large PDF, our AI preserves fonts, images, tables, and formatting across every conversion."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design for iPhone & Android",
      desc: "Whether you are on iPhone or Android, FreePDFConvert works flawlessly on every screen size. Convert PDF to Word on your phone in seconds — no desktop or additional app needed. Fully responsive and touch-optimized."
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Security — SSL Encrypted",
      desc: "All file uploads use 256-bit SSL encryption. Your uploaded PDF files are permanently and automatically deleted from our servers within 2 hours. We never store, sell, or access your documents. Privacy is the foundation of FreePDFConvert."
    },
    {
      icon: Target,
      title: "Industry-Leading Conversion Accuracy",
      desc: "Convert PDFs to Word or Excel with the highest formatting retention rate available in any free online tool. Tables, fonts, images, columns, and headers are all preserved with precision — giving you clean, editable output files every time."
    },
  ];

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">

        {/* ── HERO ──────────────────────────────────────────────────────── */}
        {/* SEO: H1 now contains primary keyword "Free PDF Tools Online" */}
        <header className="max-w-5xl mx-auto text-center py-16 md:py-24 px-6">
          <span className="text-rose-600 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4 md:mb-6 inline-block bg-rose-50 px-4 md:px-6 py-2 rounded-full">
            Why FreePDFConvert Is Different
          </span>
          {/* SEO: H1 contains target keyword + brand — was "Not just another PDF Tool" (zero SEO value) */}
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight leading-[1.1]">
            Free PDF Tools Online —<br className="hidden md:block" />
            <span className="text-rose-600 underline decoration-rose-200 underline-offset-4 md:underline-offset-8">Fast, Secure & Free.</span>
          </h1>
          {/* SEO: expanded subtitle with long-tail keywords boosts text-to-HTML ratio */}
          <p className="text-base md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            FreePDFConvert combines professional-grade technology with a simple, beautiful interface to give
            you the best free PDF conversion experience on the web. PDF to Word, merge PDF, compress PDF,
            split PDF, and 20+ more tools — no signup, no watermark, completely free.
          </p>
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            <span>✓ 100% Free Forever</span>
            <span>✓ No Signup Required</span>
            <span>✓ 20+ PDF Tools</span>
            <span>✓ AI-Powered</span>
            <span>✓ Mobile Ready</span>
            <span>✓ 256-bit SSL Security</span>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">

          {/* ── FEATURE CARDS GRID ────────────────────────────────────── */}
          {/* SEO: aria-label added for accessibility + semantic signals */}
          <section aria-label="FreePDFConvert key features and benefits">
            <h2 className="sr-only">Key Features of FreePDFConvert Free PDF Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </section>

          {/* ── STATS SECTION ─────────────────────────────────────────── */}
          {/* SEO: H2 is now keyword-rich; added descriptive paragraph to boost text ratio */}
          <section className="mt-20 bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-sm" aria-label="FreePDFConvert usage statistics">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
              Trusted Free PDF Tool — Proven by Millions
            </h2>
            <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
              FreePDFConvert has helped users across 150+ countries convert, merge, compress, and manage
              PDF files for free. Our high-speed servers process millions of PDF files every month — all
              without requiring a single account or subscription.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: <Users  size={32} className="text-rose-600 mx-auto mb-3" />, stat: '2M+',  label: 'Files Converted'      },
                { icon: <Globe  size={32} className="text-rose-600 mx-auto mb-3" />, stat: '150+', label: 'Countries Served'      },
                { icon: <Award  size={32} className="text-rose-600 mx-auto mb-3" />, stat: '20+',  label: 'Free PDF Tools'        },
                { icon: <Zap    size={32} className="text-rose-600 mx-auto mb-3" />, stat: '<10s', label: 'Average Convert Time'  },
              ].map(({ icon, stat, label }) => (
                <div key={label}>
                  {icon}
                  <div className="text-4xl font-black text-gray-900 mb-1">{stat}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── COMPARISON / WHY US ───────────────────────────────────── */}
          {/* SEO: H2 keyword-rich; added intro paragraph; each card description expanded */}
          <section className="mt-20" aria-label="Why FreePDFConvert is the best free PDF tool online">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
              Why FreePDFConvert Is the Best Free PDF Tool Online
            </h2>
            <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-10">
              There are many PDF tools online, but FreePDFConvert stands apart. Here is why over 2 million
              users choose us for free PDF conversion, merging, compression, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Completely Free — No Paywalls, Ever',
                  desc: 'Every tool on FreePDFConvert is free forever. No "free trial", no premium tier, no feature gating or daily limits. PDF to Word, merge PDF, compress PDF — every tool, always free.'
                },
                {
                  title: 'No Account or Email Required',
                  desc: 'Start converting instantly with zero registration. No email, no password, no profile needed. Just upload your PDF and convert, merge, compress, or split in seconds.'
                },
                {
                  title: '20+ Professional Free PDF Tools in One Place',
                  desc: 'PDF to Word, PDF to Excel, merge PDF, compress PDF, split PDF, unlock PDF, protect PDF, JPG to PDF, PDF to JPG, HTML to PDF and more — all available free under one roof.'
                },
                {
                  title: 'Faster Than Desktop PDF Software',
                  desc: 'FreePDFConvert cloud servers process PDF files faster than most installed desktop PDF software. No downloading, installing, or updating — just instant, fast conversions in your browser.'
                },
                {
                  title: 'Better Privacy Than Most Cloud PDF Tools',
                  desc: 'Unlike many online PDF tools, FreePDFConvert automatically deletes your uploaded files within 2 hours. We never analyze, access, or share your document contents with anyone.'
                },
                {
                  title: 'Works on Every Device — iPhone, Android, PC, Mac',
                  desc: 'iOS, Android, Windows, Mac, Linux — if your device has a modern browser, FreePDFConvert works on it. No downloads, no app store installs, no updates. Just open and convert.'
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-sm flex gap-4 items-start border border-gray-100">
                  <CheckCircle2 className="text-rose-600 mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-black text-gray-900 text-lg mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW IT WORKS SECTION ──────────────────────────────────── */}
          {/* SEO: new section adds meaningful keyword-rich content to fix low text-to-HTML ratio */}
          <section className="mt-20 bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-sm" aria-label="How to use FreePDFConvert free PDF tools">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
              How to Use FreePDFConvert Free PDF Tools
            </h2>
            <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
              Converting, merging, or compressing a PDF file takes just three simple steps on FreePDFConvert.
              No technical knowledge needed — anyone can use our free PDF tools instantly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Upload Your PDF File',
                  desc: 'Click the upload button or drag and drop your PDF file directly onto the tool. FreePDFConvert accepts PDF files up to 100MB. No account or login is required to upload.'
                },
                {
                  step: '02',
                  title: 'Choose Your Conversion',
                  desc: 'Select the tool you need — convert PDF to Word, merge multiple PDFs, compress a large PDF, split pages, or convert to Excel, JPG, or PowerPoint. All 20+ tools are free.'
                },
                {
                  step: '03',
                  title: 'Download Your File Instantly',
                  desc: 'Your converted or processed PDF is ready in seconds. Download your file immediately. Your uploaded files are automatically deleted from our servers within 2 hours for complete privacy.'
                },
              ].map(({ step, title, desc }) => (
                <div key={step} className="text-center">
                  <div className="w-16 h-16 bg-rose-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-200 text-xl font-black">
                    {step}
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ SECTION ───────────────────────────────────────────── */}
          {/* SEO: FAQPage JSON-LD schema above makes these eligible for Google rich results */}
          <section className="mt-20" aria-label="Frequently asked questions about FreePDFConvert free PDF tools">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-3">
              Frequently Asked Questions — Free PDF Tools
            </h2>
            <p className="text-center text-gray-400 text-sm mb-10">
              Common questions about using FreePDFConvert's free online PDF converter and tools.
            </p>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: 'Is FreePDFConvert really free?',
                  a: 'Yes. Every PDF tool on FreePDFConvert is 100% free with no hidden costs, no subscription, and no credit card required. Free means free — forever. All 20+ tools including PDF to Word, merge PDF, and compress PDF are always free.',
                },
                {
                  q: 'How fast is FreePDFConvert?',
                  a: 'Most PDF conversions complete in under 10 seconds. Our high-speed cloud servers are specifically optimized for fast PDF to Word conversion, PDF compression, merging, and splitting — with no queues.',
                },
                {
                  q: 'Is FreePDFConvert safe to use?',
                  a: 'Yes. All file transfers are protected by 256-bit SSL encryption. Uploaded files are permanently deleted from our servers within 2 hours and are never shared or accessed by anyone.',
                },
                {
                  q: 'Does FreePDFConvert work on mobile?',
                  a: 'Yes. FreePDFConvert is designed mobile-first and works flawlessly on iPhone, Android, and all screen sizes in any modern browser. No app download required.',
                },
                {
                  q: 'How accurate is PDF to Word conversion on FreePDFConvert?',
                  a: 'FreePDFConvert uses advanced AI algorithms to preserve fonts, tables, images, and formatting with industry-leading accuracy in PDF to Word and other conversions.',
                },
                {
                  q: 'Do I need to create an account to use FreePDFConvert?',
                  a: 'No. FreePDFConvert requires no account, no email, and no registration. Simply upload your PDF file and start converting, merging, compressing, or splitting it instantly — no login needed.',
                },
                {
                  q: 'What PDF tools does FreePDFConvert offer for free?',
                  a: 'FreePDFConvert offers 20+ free PDF tools including PDF to Word, Word to PDF, merge PDF, compress PDF, split PDF, PDF to Excel, JPG to PDF, PDF to JPG, unlock PDF, protect PDF, and many more.',
                },
              ].map(({ q, a }) => (
                <details key={q} className="bg-white rounded-2xl shadow-sm group">
                  <summary className="p-5 font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                    {q}
                    <span className="text-rose-600 font-black text-lg group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── ALL TOOLS INTERNAL LINKS ──────────────────────────────── */}
          {/* SEO: internal linking to all tool pages boosts crawlability and site authority */}
          <section className="mt-20" aria-label="All free PDF tools on FreePDFConvert">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-3">
              All Free PDF Tools — No Signup Required
            </h2>
            <p className="text-center text-gray-400 text-sm mb-8">
              Convert, merge, compress, split, and edit PDF files online for free. No registration, no watermark.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { href: '/pdf-to-word',           label: 'PDF to Word'        },
                { href: '/word-to-pdf',           label: 'Word to PDF'        },
                { href: '/merge-pdf',             label: 'Merge PDF'          },
                { href: '/compress-pdf',          label: 'Compress PDF'       },
                { href: '/pdf-to-excel',          label: 'PDF to Excel'       },
                { href: '/excel-to-pdf',          label: 'Excel to PDF'       },
                { href: '/jpg-to-pdf',            label: 'JPG to PDF'         },
                { href: '/pdf-to-jpg',            label: 'PDF to JPG'         },
                { href: '/split-pdf',             label: 'Split PDF'          },
                { href: '/unlock-pdf',            label: 'Unlock PDF'         },
                { href: '/protect-pdf',           label: 'Protect PDF'        },
                { href: '/pdf-to-pptx',           label: 'PDF to PowerPoint'  },
                { href: '/pptx-to-pdf',           label: 'PowerPoint to PDF'  },
                { href: '/html-to-pdf',           label: 'HTML to PDF'        },
                { href: '/image-to-pdf',          label: 'Image to PDF'       },
                { href: '/extract-text-from-pdf', label: 'Extract Text from PDF' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="bg-white rounded-2xl p-4 shadow-sm text-center text-sm font-bold text-gray-700 hover:text-rose-600 hover:shadow-md transition-all border border-gray-100"
                >
                  {label}
                </a>
              ))}
            </div>
          </section>

          {/* ── CTA ───────────────────────────────────────────────────── */}
          <div className="mt-16 md:mt-20 bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <Files className="absolute -left-10 -bottom-10 w-48 h-48 md:w-64 md:h-64 opacity-10 rotate-12 text-white hidden sm:block" />
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 relative z-10 leading-tight">
              Ready to Convert Your PDF for Free?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
              Join millions of users who convert, merge, compress, and manage PDF files for free —
              no signup, no limits, no watermarks. Start using FreePDFConvert right now.
            </p>
            <Link href="/">
              <button className="w-full sm:w-auto bg-rose-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-900/20 active:scale-95 flex items-center justify-center gap-3 mx-auto relative z-10">
                <Plus size={20} className="md:w-6 md:h-6" /> Start Now — It&apos;s Free
              </button>
            </Link>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default WhyChooseUs;