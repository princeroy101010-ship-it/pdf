import React from 'react'
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Play, ShieldCheck, Zap, CheckCircle2, Globe, Users, Award } from 'lucide-react';

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.freepdfconvert.io/about-us#webpage",
      "url": "https://www.freepdfconvert.io/about-us",
      "name": "About Us – FreePDFConvert | Free Online PDF Tools",
      "description": "Learn about FreePDFConvert — our mission to provide free, secure, professional-grade PDF tools to everyone. No signup, no cost, no compromise.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.freepdfconvert.io/#website" },
      "breadcrumb": { "@id": "https://www.freepdfconvert.io/about-us#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.freepdfconvert.io/og-image.png",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.freepdfconvert.io/about-us#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",     "item": "https://www.freepdfconvert.io/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.freepdfconvert.io/about-us" }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.freepdfconvert.io/#organization",
      "name": "FreePDFConvert",
      "url": "https://www.freepdfconvert.io/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.freepdfconvert.io/og-image.png",
        "width": 1200,
        "height": 630
      },
      "foundingDate": "2026",
      "description": "FreePDFConvert provides free, secure, professional-grade online PDF tools — PDF to Word, merge PDF, compress PDF, and 20+ more tools — with no signup required.",
      "areaServed": "Worldwide",
      "knowsAbout": [
        "PDF Conversion",
        "Document Processing",
        "File Format Conversion",
        "PDF Compression",
        "PDF Merging",
        "Online Document Tools"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": "English"
      },
      "sameAs": []
    },
    {
      "@type": "WebSite",
      "@id": "https://www.freepdfconvert.io/#website",
      "url": "https://www.freepdfconvert.io/",
      "name": "FreePDFConvert – Free Online PDF Tools",
      "description": "All-in-one free PDF converter. PDF to Word, merge PDF, compress PDF, split PDF and 20+ more tools. No signup required.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.freepdfconvert.io/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

// ─── Next.js Metadata Export ──────────────────────────────────────────────────
export const metadata = {
  title: "About Us – FreePDFConvert | Free Online PDF Tools for Everyone",
  description:
    "Learn about FreePDFConvert — our mission to provide free, secure, professional-grade PDF tools to everyone. Convert PDF to Word, merge PDF, compress PDF and more. No signup, no cost.",
  keywords:
    "about freepdfconvert, free pdf tools, pdf converter online free, pdf to word free, merge pdf free, compress pdf free, online pdf tools, free document converter, about us pdf tool, freepdfconvert mission",
  alternates: {
    canonical: "https://www.freepdfconvert.io/about-us",
  },
  openGraph: {
    title: "About FreePDFConvert – Free PDF Tools for Everyone",
    description:
      "Founded in 2026, FreePDFConvert provides free professional PDF tools with bank-grade security. PDF to Word, merge PDF, compress PDF and 20+ tools. No signup required.",
    url: "https://www.freepdfconvert.io/about-us",
    type: "website",
    images: [
      {
        url: "https://www.freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "About FreePDFConvert – Free Online PDF Tools"
      }
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FreePDFConvert – Free PDF Tools for Everyone",
    description:
      "Free, secure, professional PDF tools for everyone. PDF to Word, merge PDF, compress PDF and 20+ tools. No signup required.",
    images: ["https://www.freepdfconvert.io/og-image.png"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "FreePDFConvert" }],
  other: {
    "application/ld+json": JSON.stringify(jsonLd),
  },
};

// ─── Component ────────────────────────────────────────────────────────────────
const AboutUs = () => (
  <>
    {/* JSON-LD inline for maximum compatibility */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    <Header />

    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* ── HERO SECTION ────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-black tracking-widest uppercase text-sm">Our Mission</span>
          <h1 className="text-5xl font-black text-gray-900 mt-4 mb-8">
            We make PDF management <br />
            <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">effortless.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-medium">
            FreePDFConvert was born in 2026 with a simple goal: To provide professional-grade document tools
            to everyone, for free, without compromising security.
          </p>

          {/* Trust Signals — keyword-rich, crawlable */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm font-semibold text-gray-400 uppercase tracking-widest">
            <span>✓ 100% Free</span>
            <span>✓ No Signup Required</span>
            <span>✓ 20+ PDF Tools</span>
            <span>✓ Bank-Grade Security</span>
            <span>✓ Used by Millions</span>
          </div>
        </div>

        {/* ── VIDEO + PILLARS ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-100/50 rounded-[3.5rem] blur-2xl group-hover:bg-rose-200/50 transition-all duration-500" />
            <div className="relative bg-gray-900 rounded-[3rem] aspect-video overflow-hidden shadow-2xl border-8 border-white">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-80">
                <source src="/about-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-5 rounded-full text-white border border-white/30">
                  <Play fill="currentColor" size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <ShieldCheck size={28} strokeWidth={2.5} />
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">Security First</h2>
              </div>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Every file processed on our platform is encrypted with SSL and automatically deleted within
                2 hours. Your privacy is not just a feature — it is our foundation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <Zap size={28} strokeWidth={2.5} />
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">Speed & Quality</h2>
              </div>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                We use high-end server architecture to ensure your documents are processed in seconds
                with pixel-perfect accuracy and formatting preservation.
              </p>
            </div>
          </div>
        </div>

        {/* ── STATS SECTION ───────────────────────────────────────────── */}
        <section className="bg-rose-50 rounded-[3rem] p-10 md:p-16 mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-12">
            FreePDFConvert by the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users size={32} className="text-rose-600 mx-auto mb-3" />, stat: '2M+',  label: 'Files Converted'       },
              { icon: <Globe size={32} className="text-rose-600 mx-auto mb-3" />, stat: '150+', label: 'Countries Served'       },
              { icon: <Award size={32} className="text-rose-600 mx-auto mb-3" />, stat: '20+',  label: 'Free PDF Tools'        },
              { icon: <Zap   size={32} className="text-rose-600 mx-auto mb-3" />, stat: '<10s', label: 'Average Convert Time'  },
            ].map(({ icon, stat, label }) => (
              <div key={label}>
                {icon}
                <div className="text-4xl font-black text-gray-900 mb-1">{stat}</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY FREEPDFCONVERT ──────────────────────────────────────── */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
            Why Millions Choose FreePDFConvert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Completely Free – No Hidden Costs',    desc: 'Every single tool on FreePDFConvert is 100% free to use. No subscription, no credit card, no premium tier. Free means free.' },
              { title: 'No Account or Signup Required',        desc: 'Start converting PDFs immediately. We never ask for your email address, name, or any personal information.' },
              { title: '20+ Professional PDF Tools',           desc: 'PDF to Word, merge PDF, compress PDF, split PDF, PDF to Excel, JPG to PDF, protect PDF, unlock PDF — all in one place.' },
              { title: 'Enterprise-Grade Security',            desc: 'All file transfers are protected by 256-bit SSL encryption. Files are permanently deleted from our servers after 2 hours.' },
              { title: 'Works on Any Device',                  desc: 'Our tools work seamlessly on desktop, tablet, and mobile — on Windows, Mac, iOS, and Android. No app download needed.' },
              { title: 'Accurate Format Preservation',         desc: 'Our conversion engine preserves fonts, tables, images, and layout with industry-leading accuracy across all formats.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-4 items-start bg-gray-50 rounded-2xl p-6">
                <CheckCircle2 className="text-rose-600 mt-1 shrink-0" size={22} />
                <div>
                  <h3 className="font-black text-gray-900 text-lg mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ALL TOOLS INTERNAL LINKING ──────────────────────────────── */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
            Our Free PDF Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/pdf-to-word',              label: 'PDF to Word'              },
              { href: '/word-to-pdf',              label: 'Word to PDF'              },
              { href: '/merge-pdf',                label: 'Merge PDF'                },
              { href: '/compress-pdf',             label: 'Compress PDF'             },
              { href: '/pdf-to-excel',             label: 'PDF to Excel'             },
              { href: '/excel-to-pdf',             label: 'Excel to PDF'             },
              { href: '/jpg-to-pdf',               label: 'JPG to PDF'               },
              { href: '/pdf-to-jpg',               label: 'PDF to JPG'               },
              { href: '/split-pdf',                label: 'Split PDF'                },
              { href: '/unlock-pdf',               label: 'Unlock PDF'               },
              { href: '/protect-pdf',              label: 'Protect PDF'              },
              { href: '/pdf-to-pptx',              label: 'PDF to PowerPoint'        },
              { href: '/pptx-to-pdf',              label: 'PowerPoint to PDF'        },
              { href: '/html-to-pdf',              label: 'HTML to PDF'              },
              { href: '/image-to-pdf',             label: 'Image to PDF'             },
              { href: '/extract-text-from-pdf',    label: 'Extract Text from PDF'    },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="bg-gray-50 hover:bg-rose-50 border border-gray-100 hover:border-rose-200 rounded-2xl p-4 text-center text-sm font-bold text-gray-700 hover:text-rose-600 transition-all"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="text-center bg-gray-900 rounded-[3rem] p-12 md:p-20">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Start Converting PDFs for Free
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            No signup. No cost. No limits. Join millions of users who trust FreePDFConvert for all their document needs.
          </p>
          <a
            href="/"
            className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-black text-lg px-10 py-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all"
          >
            Try Free PDF Tools →
          </a>
        </section>

      </div>
      <Footer />
    </div>
  </>
);

export default AboutUs;