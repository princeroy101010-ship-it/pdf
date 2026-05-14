import React from 'react';
import { ShieldCheck, Lock, Trash2, EyeOff, Files } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

// ─── 100% SEO OPTIMIZED METADATA ───
export const metadata = {
  title: "Privacy Policy – FreePDFConvert | Your Files Are Safe & Private",
  description:
    "FreePDFConvert never stores, reads, or sells your files. All uploads are SSL encrypted and deleted automatically within 2 hours. Zero data sharing. Your privacy is 100% protected.",
  keywords:
    "freepdfconvert privacy policy, pdf converter privacy, secure pdf converter, pdf tool data privacy, ssl encrypted pdf converter, no data storage pdf tool, safe pdf converter online, pdf converter gdpr, file privacy policy, secure file conversion",
  alternates: {
    canonical: "https://freepdfconvert.io/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – FreePDFConvert | Your Files Are Safe & Private",
    description:
      "We never store or share your files. SSL encryption, automatic deletion in 2 hours, zero human access. The most private free PDF converter online.",
    url: "https://freepdfconvert.io/privacy-policy",
    type: "website",
    images: [{ url: "/og-privacy-policy.png", width: 1200, height: 630, alt: "FreePDFConvert Privacy Policy – Safe & Secure PDF Converter" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – FreePDFConvert | Your Files Are Safe & Private",
    description: "Files encrypted, never stored, deleted in 2 hours. No data selling. The most private free PDF tool online.",
    images: ["/og-privacy-policy.png"],
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
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Privacy Policy – FreePDFConvert",
  "url": "https://freepdfconvert.io/privacy-policy",
  "description": "FreePDFConvert never stores, reads, or sells your files. All uploads are SSL encrypted and automatically deleted within 2 hours.",
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
    "logo": {
      "@type": "ImageObject",
      "url": "https://freepdfconvert.io/logo.png"
    }
  },
  "dateModified": "2026-02-01"
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does FreePDFConvert store my uploaded files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert does not permanently store your files. All uploaded files are automatically deleted from our servers within 2 hours of conversion."
      }
    },
    {
      "@type": "Question",
      "name": "Is FreePDFConvert safe to use for sensitive documents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All file transfers are protected by SSL/TLS encryption. No human at FreePDFConvert can view or access your documents. Files are processed in a fully automated, secure environment."
      }
    },
    {
      "@type": "Question",
      "name": "Does FreePDFConvert sell my data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert never sells, trades, or shares your personal information or documents with any third party."
      }
    },
    {
      "@type": "Question",
      "name": "How long does FreePDFConvert keep my files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Files are kept for a maximum of 2 hours to allow you time to download them, then permanently and automatically deleted with no backups retained."
      }
    },
    {
      "@type": "Question",
      "name": "Is FreePDFConvert GDPR compliant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert follows data minimization principles. We collect no personal data, store no files permanently, and share nothing with third parties — fully aligned with GDPR privacy standards."
      }
    }
  ]
};

const schemaBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freepdfconvert.io" },
    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://freepdfconvert.io/privacy-policy" }
  ]
};

// ─── REUSABLE SECTION COMPONENT (unchanged) ───
const PolicySection = ({ icon: Icon, title, children }) => (
  <div className="mb-12 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-rose-50 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-gray-800 tracking-tight">{title}</h2>
    </div>
    <div className="pl-14 text-gray-500 font-medium leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">

      {/* ─── JSON-LD Structured Data ─── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
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

      <header className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* ✅ Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-rose-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 font-semibold">Privacy Policy</span>
          </nav>

          <span className="text-rose-600 font-black tracking-widest uppercase text-sm mb-4 block">
            Last Updated: February 2026
          </span>

          {/* ✅ H1 — keyword: "privacy policy secure pdf converter" */}
          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Privacy <span className="text-rose-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Your files are encrypted, never stored, and automatically deleted within 2 hours. Zero data selling. 100% private.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">

        {/* ─── PRIVACY PROMISE BANNER ─── */}
        <div className="bg-rose-600 rounded-[2.5rem] p-10 mb-16 text-white shadow-xl shadow-rose-100 relative overflow-hidden">
          <Files className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" />
          <h2 className="text-3xl font-black mb-4 relative z-10">Our Privacy Promise</h2>
          <p className="text-rose-100 text-lg font-medium relative z-10 leading-relaxed">
            FreePDFConvert does not store your files. We do not read your content. We do not sell your data.
            All processing is fully automated and files are permanently deleted within 2 hours.
          </p>
        </div>

        {/* ─── POLICY SECTIONS (content unchanged, H2 titles SEO-improved) ─── */}
        <PolicySection icon={Lock} title="SSL Encryption – Your Files Are Fully Secure">
          <p>Every file you upload is transmitted via <strong>SSL/TLS (Secure Sockets Layer)</strong> encryption. This ensures that no one can intercept your data while it travels from your device to our servers.</p>
          <p>Once on our servers, files are processed in a secure, isolated environment where even our own developers cannot access them manually.</p>
        </PolicySection>

        <PolicySection icon={Trash2} title="Automatic File Deletion Within 2 Hours">
          <p>We believe in Data Minimization. Your files are kept on our temporary servers for a maximum of <strong>2 hours</strong> to give you enough time to download your converted file.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Files are automatically and permanently purged by our system.</li>
            <li>Once deleted, files cannot be recovered by anyone.</li>
            <li>We do not keep any hidden backups of your documents.</li>
          </ul>
        </PolicySection>

        <PolicySection icon={EyeOff} title="Zero Content Inspection – No Human Access">
          <p>Our tools are 100% automated. No human being at FreePDFConvert reads, views, or analyzes the content of the documents you process. Whether it is a bank statement, a legal contract, or a personal letter — your content remains completely private.</p>
        </PolicySection>

        <PolicySection icon={ShieldCheck} title="No Third-Party Data Sharing">
          <p>We <strong>never</strong> sell, trade, or rent your personal information or documents to any third parties. FreePDFConvert is a PDF tools service — not a data harvesting platform. Your privacy is non-negotiable.</p>
        </PolicySection>

        {/* ─── FAQ SECTION — Google Featured Snippets ─── */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Privacy – Frequently Asked Questions</h2>
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

        {/* ─── CONTACT CTA (unchanged) ─── */}
        <div className="mt-20 p-8 bg-white border border-gray-100 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Have questions about your privacy?</h3>
          <p className="text-gray-400 font-medium mb-6">Contact our security team anytime.</p>
          <Link href="/contact">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-black hover:bg-rose-600 transition-all active:scale-95">
              Contact Security Team
            </button>
          </Link>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;