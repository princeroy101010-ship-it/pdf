import React from 'react';
import { ShieldCheck, Lock, EyeOff, Trash2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

// ─── 100% SEO OPTIMIZED METADATA ───
export const metadata = {
  title: "Security – FreePDFConvert | AES-256 Encrypted & 100% Private PDF Converter",
  description:
    "FreePDFConvert uses AES-256 encryption, SSL file transfer, and automatic deletion in 2 hours. No human access ever. Bank-level security for all your PDF files. 100% free & private.",
  keywords:
    "secure pdf converter, encrypted pdf converter, aes-256 pdf tool, safe pdf converter online, pdf converter no data storage, ssl encrypted pdf upload, private pdf converter, pdf tool gdpr, secure file conversion online, pdf converter auto delete files, no human access pdf tool, bank level pdf security",
  alternates: {
    canonical: "https://freepdfconvert.io/security",
  },
  openGraph: {
    title: "Security – FreePDFConvert | AES-256 Encrypted & 100% Private PDF Converter",
    description:
      "AES-256 encryption, SSL transfers, auto-deletion in 2 hours, zero human access. The most secure free PDF converter online.",
    url: "https://freepdfconvert.io/security",
    type: "website",
    images: [{ url: "/og-security.png", width: 1200, height: 630, alt: "FreePDFConvert Security – AES-256 Encrypted PDF Converter" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security – FreePDFConvert | AES-256 Encrypted & 100% Private",
    description: "AES-256 encryption, SSL transfer, auto-delete in 2 hours. No human access. The safest free PDF tool online.",
    images: ["/og-security.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

// ─── JSON-LD: WebPage Schema ───
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Security – FreePDFConvert",
  "url": "https://freepdfconvert.io/security",
  "description": "FreePDFConvert uses AES-256 encryption, SSL transfer, and automatic file deletion in 2 hours. No human access. Bank-level security.",
  "inLanguage": "en-US",
  "isPartOf": {
    "@type": "WebSite",
    "name": "FreePDFConvert",
    "url": "https://freepdfconvert.io"
  },
  "publisher": {
    "@type": "Organization",
    "name": "FreePDFConvert",
    "url": "https://freepdfconvert.io",
    "logo": { "@type": "ImageObject", "url": "https://freepdfconvert.io/logo.png" }
  },
  "dateModified": "2026-02-01"
};

// ─── JSON-LD: FAQPage Schema ───
const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is FreePDFConvert secure to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert uses AES-256 encryption and SSL/TLS transfer to protect all files. No human can access your documents, and files are automatically deleted within 2 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What encryption does FreePDFConvert use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FreePDFConvert uses AES-256 bit encryption — the same standard used by banks and governments — to protect your files during processing and transfer."
      }
    },
    {
      "@type": "Question",
      "name": "How long are my files stored on FreePDFConvert servers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Files are automatically and permanently deleted from our servers within 2 hours of conversion. No backups are kept."
      }
    },
    {
      "@type": "Question",
      "name": "Can FreePDFConvert employees see my files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The entire conversion process is fully automated. No human being at FreePDFConvert can view, read, or access your uploaded documents at any time."
      }
    },
    {
      "@type": "Question",
      "name": "Is FreePDFConvert GDPR compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert follows strict data protection and data minimization principles, fully aligned with GDPR regulations. We collect no personal data and store no files permanently."
      }
    }
  ]
};

// ─── JSON-LD: BreadcrumbList ───
const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freepdfconvert.io" },
    { "@type": "ListItem", "position": 2, "name": "Security", "item": "https://freepdfconvert.io/security" }
  ]
};

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "AES-256 End-to-End Encryption",
      desc: "All files are transferred via a secure SSL connection and encrypted with AES-256 bits — the same standard used by banks and governments worldwide.",
    },
    {
      icon: Trash2,
      title: "Auto-Deletion in 2 Hours",
      desc: "Documents are permanently and automatically deleted from our servers after 2 hours. No backups, no traces — your file is gone forever.",
    },
    {
      icon: EyeOff,
      title: "Zero Human Access",
      desc: "Our system is 100% automated. No human being at FreePDFConvert will ever see, read, or access your private files at any time.",
    },
    {
      icon: ShieldCheck,
      title: "GDPR Compliant & 100% Secure",
      desc: "We follow strict data protection and GDPR regulations to ensure your information is handled legally, privately, and securely at all times.",
    },
  ];

  return (
    <>
      {/* ─── JSON-LD Structured Data ─── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <Header />

      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">

          {/* ─── HERO ─── */}
          <div className="text-center mb-16">
            {/* ✅ Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-rose-600">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600 font-semibold">Security</span>
            </nav>

            <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
              Privacy First
            </span>

            {/* ✅ H1 — primary keyword */}
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Your Files Are{' '}
              <span className="text-rose-600">100% Secure</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              AES-256 encryption, SSL transfer, zero human access, and automatic deletion in 2 hours.
              Bank-level security for every PDF conversion — completely free.
            </p>
          </div>

          {/* ─── SECURITY FEATURE CARDS (unchanged layout) ─── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] border border-gray-100 bg-[#f8f9fa] hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                {/* ✅ H2 per card */}
                <h2 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* ─── SEO CONTENT SECTION ─── */}
          <div className="mt-24 max-w-3xl mx-auto space-y-10">

            {/* ✅ H2 — topical authority */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                Why FreePDFConvert Is the Most Secure Free PDF Converter
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                {[
                  "✅ AES-256 bit encryption on all files",
                  "✅ SSL/TLS secure file transfer",
                  "✅ Auto-deleted within 2 hours",
                  "✅ Zero human access to your documents",
                  "✅ No permanent file storage or backups",
                  "✅ GDPR compliant data practices",
                  "✅ No personal data collected",
                  "✅ 100% automated — no human in the loop",
                ].map((f) => (
                  <li key={f} className="bg-[#f8f9fa] rounded-xl px-4 py-3 border border-gray-100">{f}</li>
                ))}
              </ul>
            </div>

            {/* ✅ FAQ — Featured Snippets + AI Overviews */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Security – Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {schemaFAQ.mainEntity.map((faq) => (
                  <details key={faq.name} className="bg-[#f8f9fa] rounded-2xl px-5 py-4 border border-gray-100 group">
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
          {/* ─── END SEO CONTENT ─── */}

        </div>
      </section>
      <Footer />
    </>
  );
};

export default SecuritySection;