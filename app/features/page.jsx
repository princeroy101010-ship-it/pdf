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
      "name": "Why Choose FreePDFConvert – Fast, Secure & Free PDF Tools",
      "description": "Discover what makes FreePDFConvert different. Lightning fast processing, AI optimization, mobile-first design, and 100% privacy. Free PDF tools with no signup required.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.freepdfconvert.io/#website" },
      "breadcrumb": { "@id": "https://www.freepdfconvert.io/features#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.freepdfconvert.io/og-image.png",
        "width": 1200,
        "height": 630
      },
      "dateModified": "2026-05-13"
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
      "name": "FreePDFConvert – Free Online PDF Tools",
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
        "Lightning fast PDF processing",
        "AI-powered PDF compression",
        "Mobile-first responsive design",
        "100% privacy — files deleted after 2 hours",
        "High accuracy PDF to Word conversion",
        "Works in all browsers — no install needed",
        "20+ free PDF tools",
        "No signup or registration required"
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
            "text": "Yes. Every PDF tool on FreePDFConvert is 100% free to use with no hidden costs, no subscription, and no credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "How fast is FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most PDF conversions on FreePDFConvert complete in under 10 seconds. Our high-speed servers are optimized for fast PDF processing."
          }
        },
        {
          "@type": "Question",
          "name": "Is FreePDFConvert safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All file transfers use SSL encryption and uploaded files are automatically deleted from our servers within 2 hours. Your documents are never stored permanently or shared."
          }
        },
        {
          "@type": "Question",
          "name": "Does FreePDFConvert work on mobile?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FreePDFConvert is designed mobile-first and works flawlessly on iPhone, Android, and all screen sizes in any browser."
          }
        },
        {
          "@type": "Question",
          "name": "How accurate is PDF to Word conversion on FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FreePDFConvert uses advanced algorithms to preserve fonts, tables, images, and formatting with industry-leading accuracy when converting PDF to Word or other formats."
          }
        }
      ]
    }
  ]
};

// ─── Next.js Metadata Export ──────────────────────────────────────────────────
export const metadata = {
  title: "Why Choose FreePDFConvert – Fast, Secure & Free PDF Tools Online",
  description:
    "Discover what makes FreePDFConvert the best free PDF tool online. Lightning fast processing, AI compression, mobile-first design, 100% privacy, no signup. PDF to Word, merge PDF, compress PDF and 20+ tools.",
  keywords:
    "best free pdf tool, why freepdfconvert, free pdf converter features, fast pdf converter, secure pdf tool online, pdf to word free, merge pdf free, compress pdf free, ai pdf compression, mobile pdf converter, freepdfconvert features, free pdf tools no signup",
  alternates: {
    canonical: "https://www.freepdfconvert.io/features",
  },
  openGraph: {
    title: "Why Choose FreePDFConvert – The Best Free PDF Tool Online",
    description:
      "Fast servers, AI compression, mobile-first design and zero data storage. 20+ free PDF tools with no signup. See why millions choose FreePDFConvert.",
    url: "https://www.freepdfconvert.io/features",
    type: "website",
    images: [
      {
        url: "https://www.freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert Features – Fast, Secure & Free PDF Tools"
      }
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why FreePDFConvert? Fast, Secure & Free PDF Tools",
    description:
      "AI-powered PDF tools. Lightning fast, mobile-first, zero data stored. PDF to Word, merge PDF, compress PDF — free forever, no signup.",
    images: ["https://www.freepdfconvert.io/og-image.png"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "FreePDFConvert" }],
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
      title: "Lightning Fast Processing",
      desc: "Our high-speed servers process your PDFs in seconds, not minutes. Convert PDF to Word, merge PDF files, or compress PDFs faster than any other free tool online."
    },
    {
      icon: CloudOff,
      title: "Browser-Based — No Install",
      desc: "Process files directly in your browser with no software download required. Works on Windows, Mac, Linux — no plugins, no extensions, no app installs."
    },
    {
      icon: Sparkles,
      title: "AI-Powered PDF Optimization",
      desc: "Smart algorithms compress PDF files while maintaining 100% crystal clear quality. Our AI preserves fonts, images, and formatting across all conversions."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      desc: "Whether you're on iPhone or Android, FreePDFConvert works flawlessly on every screen size. Convert PDF to Word on your phone in seconds — no desktop needed."
    },
    {
      icon: ShieldCheck,
      title: "Privacy & Security First",
      desc: "All uploads are SSL encrypted and files are permanently deleted within 2 hours. We never store, sell, or access your documents. Your privacy is our foundation."
    },
    {
      icon: Target,
      title: "Industry-Leading Accuracy",
      desc: "Convert PDFs to Word or Excel with the highest formatting retention rate in the industry. Tables, fonts, images, and columns are preserved with precision."
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
        <header className="max-w-5xl mx-auto text-center py-16 md:py-24 px-6">
          <span className="text-rose-600 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4 md:mb-6 inline-block bg-rose-50 px-4 md:px-6 py-2 rounded-full">
            The FreePDFConvert Difference
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight leading-[1.1]">
            Not just another <br className="hidden md:block" />
            <span className="text-rose-600 underline decoration-rose-200 underline-offset-4 md:underline-offset-8">PDF Tool.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We combined professional-grade technology with a beautiful, simple interface to give you the
            best free PDF conversion experience on the web — PDF to Word, merge PDF, compress PDF,
            and 20+ more tools with zero signup.
          </p>
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            <span>✓ 100% Free</span>
            <span>✓ No Signup</span>
            <span>✓ 20+ PDF Tools</span>
            <span>✓ AI-Powered</span>
            <span>✓ Mobile Ready</span>
            <span>✓ Bank-Grade Security</span>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">

          {/* ── FEATURE CARDS GRID ────────────────────────────────────── */}
          <section aria-label="FreePDFConvert key features">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((f, i) => (
                <FeatureCard key={i} {...f} />
              ))}
            </div>
          </section>

          {/* ── STATS SECTION ─────────────────────────────────────────── */}
          <section className="mt-20 bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-100 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
              FreePDFConvert by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: <Users  size={32} className="text-rose-600 mx-auto mb-3" />, stat: '2M+',  label: 'Files Converted'      },
                { icon: <Globe  size={32} className="text-rose-600 mx-auto mb-3" />, stat: '150+', label: 'Countries Served'      },
                { icon: <Award  size={32} className="text-rose-600 mx-auto mb-3" />, stat: '20+',  label: 'Free PDF Tools'       },
                { icon: <Zap    size={32} className="text-rose-600 mx-auto mb-3" />, stat: '<10s', label: 'Average Convert Time' },
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
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
              Why FreePDFConvert Beats the Competition
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Completely Free — No Paywalls',        desc: 'Every tool is free forever. No "free trial", no premium tier, no feature gating. PDF to Word, merge PDF, compress PDF — all free.' },
                { title: 'No Account Required',                  desc: 'Start converting instantly. No email, no password, no registration. Just upload and convert.' },
                { title: '20+ Professional Tools in One Place',  desc: 'PDF to Word, PDF to Excel, merge PDF, compress PDF, split PDF, unlock PDF, protect PDF and more — all under one roof.' },
                { title: 'Faster Than Desktop Software',         desc: 'Our cloud servers process files faster than most installed PDF software. No waiting, no queues.' },
                { title: 'Better Privacy Than Cloud Competitors', desc: 'Unlike many cloud tools, we auto-delete your files within 2 hours and never analyze your document content.' },
                { title: 'Works on Every Device Instantly',      desc: 'iOS, Android, Windows, Mac, Linux — if it has a browser, FreePDFConvert works. No downloads, no updates.' },
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

          {/* ── FAQ SECTION ───────────────────────────────────────────── */}
          <section className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  q: 'Is FreePDFConvert really free?',
                  a: 'Yes. Every PDF tool on FreePDFConvert is 100% free with no hidden costs, no subscription, and no credit card required. Free means free — forever.',
                },
                {
                  q: 'How fast is FreePDFConvert?',
                  a: 'Most PDF conversions complete in under 10 seconds. Our high-speed servers are specifically optimized for fast PDF to Word conversion, PDF compression, and merging.',
                },
                {
                  q: 'Is FreePDFConvert safe to use?',
                  a: 'Yes. All file transfers are protected by 256-bit SSL encryption. Uploaded files are permanently deleted from our servers within 2 hours and are never shared with anyone.',
                },
                {
                  q: 'Does FreePDFConvert work on mobile?',
                  a: 'Yes. FreePDFConvert is designed mobile-first and works flawlessly on iPhone, Android, and all screen sizes in any modern browser.',
                },
                {
                  q: 'How accurate is PDF to Word conversion on FreePDFConvert?',
                  a: 'FreePDFConvert uses advanced AI algorithms to preserve fonts, tables, images, and formatting with industry-leading accuracy in PDF to Word and other conversions.',
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
          <section className="mt-20">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
              All Free PDF Tools
            </h2>
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
                { href: '/extract-text-from-pdf', label: 'Extract Text – PDF' },
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
              Ready to experience the speed?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
              Join millions of users who convert, merge, compress, and manage PDFs for free — no signup, no limits.
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