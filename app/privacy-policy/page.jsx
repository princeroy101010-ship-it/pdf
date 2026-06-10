import React from 'react';
import { ShieldCheck, Lock, Trash2, EyeOff, Files, Globe, Cookie } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

// ─── SEO METADATA (Next.js App Router Format) ──────────────────────────────────
export const metadata = {
  title: "Privacy Policy | FreePDFConvert Safe & Secure PDF Tool",
  description:
    "Your files are SSL encrypted and auto-deleted within 2 hours. FreePDFConvert never stores, reads, or sells your data. 100% private.",
  keywords:
    "freepdfconvert privacy policy, pdf converter privacy, secure pdf converter online, ssl encrypted pdf converter, no data storage pdf tool, safe pdf converter, pdf tool gdpr compliant, file privacy pdf, secure file conversion free, pdf converter no data sharing, private pdf tool, pdf files deleted after conversion",
  alternates: {
    canonical: "https://freepdfconvert.io/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | FreePDFConvert Safe & Secure PDF Tool",
    description:
      "We never store or share your files. SSL encryption, automatic deletion in 2 hours, zero human access. The most private free PDF converter online.",
    url: "https://freepdfconvert.io/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert Privacy Policy Safe & Secure PDF Converter",
      },
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | FreePDFConvert Safe & Secure PDF Tool",
    description:
      "Files SSL encrypted, never stored, deleted in 2 hours. No data selling. The most private free PDF tool online.",
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
const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | FreePDFConvert Safe & Secure PDF Tool",
  url: "https://freepdfconvert.io/privacy-policy",
  description:
    "FreePDFConvert never stores, reads, or sells your files. All uploads are SSL encrypted and automatically deleted within 2 hours.",
  inLanguage: "en-US",
  dateModified: "2026-06-10",
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
};

const schemaWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "FreePDFConvert",
  url: "https://freepdfconvert.io",
  description:
    "Free online PDF converter — convert, compress, merge and manage PDF files instantly. No signup, no watermark, 100% free.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://freepdfconvert.io/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does FreePDFConvert store my uploaded files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. FreePDFConvert does not permanently store your files. All uploaded files are automatically deleted from our servers within 2 hours of conversion. No backups are kept.",
      },
    },
    {
      "@type": "Question",
      name: "Is FreePDFConvert safe to use for sensitive documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All file transfers are protected by SSL/TLS encryption. No person at FreePDFConvert can view or access your documents. Files are processed in a fully automated, secure, isolated environment.",
      },
    },
    {
      "@type": "Question",
      name: "Does FreePDFConvert sell my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. FreePDFConvert never sells, trades, or shares your personal information or documents with any third party. We are a PDF tools service — not a data platform.",
      },
    },
    {
      "@type": "Question",
      name: "How long does FreePDFConvert keep my files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Files are kept for a maximum of 2 hours to allow you time to download your converted file, then permanently and automatically deleted with no backups retained.",
      },
    },
    {
      "@type": "Question",
      name: "Is FreePDFConvert GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FreePDFConvert follows data minimization principles aligned with GDPR. We collect no personal data, store no files permanently, and share nothing with third parties.",
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
      name: "Privacy Policy",
      item: "https://freepdfconvert.io/privacy-policy",
    },
  ],
};

// ─── REUSABLE POLICY SECTION COMPONENT ──────────────────────────────────────
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

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">

      {/* Structured Injection Block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebSite) }}
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

      {/* ─── HERO HEADER SECTION ─────────────────────────────────────────── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 font-semibold">Privacy Policy</span>
          </nav>

          <span className="text-rose-600 font-black tracking-widest uppercase text-sm mb-4 block">
            Last Updated: June 2026
          </span>

          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">
            Privacy <span className="text-rose-600">Policy</span>
          </h1>

          <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto mb-4">
            Your files are SSL encrypted, never stored permanently, and automatically deleted
            within 2 hours. FreePDFConvert is a zero-data-sharing, 100% private free PDF converter.
          </p>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            This privacy policy explains how FreePDFConvert handles your files and personal
            information when you use our free online PDF tools. We are committed to protecting
            your privacy at every step.
          </p>
        </div>
      </section>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">

        {/* Brand Core Privacy Banner */}
        <div className="bg-rose-600 rounded-[2.5rem] p-10 mb-16 text-white shadow-xl shadow-rose-100 relative overflow-hidden">
          <Files className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12 pointer-events-none select-none" />
          <h2 className="text-3xl font-black mb-4 relative z-10">Our Privacy Promise</h2>
          <p className="text-rose-100 text-lg font-medium relative z-10 leading-relaxed">
            FreePDFConvert does not store your files. We do not read your content. We do not
            sell your data. All processing is fully automated and files are permanently deleted
            within 2 hours. No exceptions.
          </p>
        </div>

        {/* SEO Editorial Intro */}
        <div className="mb-14 text-gray-600 leading-relaxed space-y-4">
          <p>
            At FreePDFConvert, we take your privacy seriously. When you use our free online
            PDF converter tools — including PDF to Word, PDF to Excel, PDF compression, and
            all other tools — your uploaded files are handled with the highest standards of
            security and confidentiality.
          </p>
          <p>
            This page describes our complete privacy policy, including how your files are
            processed, how long they are stored, and what data (if any) we collect about you.
            By using FreePDFConvert, you agree to the practices described in this policy.
          </p>
        </div>

        {/* ─── POLICY CHAPTER BLOCKS ───────────────────────────────────────── */}
        <PolicySection icon={Lock} title="SSL Encryption Your Files Are Fully Secure">
          <p>
            Every file you upload to FreePDFConvert is transmitted using{' '}
            <strong>SSL/TLS (Secure Sockets Layer / Transport Layer Security)</strong>{' '}
            encryption. This is the same encryption standard used by banks and major financial
            institutions. It ensures that no third party can intercept or read your data while
            it travels from your device to our servers.
          </p>
          <p>
            Once your file arrives on our servers, it is processed in a secure, isolated
            environment. Even our own developers cannot manually access or view the contents
            of your uploaded files. The entire conversion process is automated with no human
            involvement.
          </p>
          <p>
            You can verify that your connection to FreePDFConvert is encrypted by checking
            for the padlock icon in your browser address bar before uploading any file.
          </p>
        </PolicySection>

        <PolicySection icon={Trash2} title="Automatic File Deletion Within 2 Hours">
          <p>
            We operate on a strict <strong>Data Minimization</strong> principle. Your uploaded
            files are stored temporarily on our secure servers only for the time needed to
            complete the conversion and allow you to download your result. Files are kept for
            a maximum of <strong>2 hours</strong>, then permanently and automatically deleted.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Files are automatically and permanently purged by our system after 2 hours.</li>
            <li>Once deleted, files cannot be recovered by anyone — including our team.</li>
            <li>We do not keep any hidden backups or archives of your documents.</li>
            <li>Deletion happens whether or not you download your converted file.</li>
          </ul>
          <p>
            This automatic deletion policy applies to all file types — PDFs, Word documents,
            Excel spreadsheets, JPG images, PNG files, and PowerPoint presentations.
          </p>
        </PolicySection>

        <PolicySection icon={EyeOff} title="Zero Content Inspection No Human Access">
          <p>
            Our PDF conversion tools are 100% automated. No person at FreePDFConvert ever
            reads, views, analyzes, or inspects the content of the documents you upload or
            convert. Whether your file contains a bank statement, a legal contract, a medical
            record, a personal letter, or any other sensitive content — your document remains
            completely private.
          </p>
          <p>
            Access to our server infrastructure is restricted and logged. File processing
            happening in an isolated pipeline ensures your documents are protected at every 
            stage of the conversion layout.
          </p>
        </PolicySection>

        <PolicySection icon={ShieldCheck} title="No Third-Party Data Sharing">
          <p>
            FreePDFConvert will <strong>never</strong> sell, trade, rent, or share your
            personal information or uploaded documents with any third parties, advertisers,
            data brokers, or analytics companies. We are a free PDF tools service built to
            help people work with documents — not a platform for collecting or monetizing
            user data.
          </p>
          <p>
            We do not use your files to train machine learning models. We do not analyze
            file metadata for advertising purposes. We do not integrate with any third-party
            data platforms that could access your content.
          </p>
        </PolicySection>

        <PolicySection icon={Globe} title="GDPR Compliance & International Privacy Standards">
          <p>
            FreePDFConvert is designed to comply with the{' '}
            <strong>General Data Protection Regulation (GDPR)</strong> and other international
            privacy frameworks. Our approach to data handling follows the core GDPR principles:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Data Minimization:</strong> We only process the data necessary for conversion.</li>
            <li><strong>Purpose Limitation:</strong> Files are used only for the conversion you requested.</li>
            <li><strong>Storage Limitation:</strong> Files are deleted automatically within 2 hours.</li>
            <li><strong>Security:</strong> All transfers are SSL encrypted and server access is restricted.</li>
          </ul>
          <p>
            Users in the European Union, United Kingdom, and other regions with strong
            privacy laws can use FreePDFConvert with confidence that their data is handled
            in full compliance with applicable regulations.
          </p>
        </PolicySection>

        <PolicySection icon={Cookie} title="Cookies & Analytics">
          <p>
            FreePDFConvert may use minimal, anonymous analytics to understand how users
            interact with our site — for example, which tools are used most frequently.
            This data is aggregated and never linked to individual users or uploaded files.
          </p>
          <p>
            We may use session cookies to maintain basic site functionality. We do not use
            tracking cookies for advertising purposes or share cookie data with any
            advertising networks. You can disable cookies in your browser settings at any
            time without affecting your ability to use our PDF conversion tools.
          </p>
        </PolicySection>

        {/* ─── DATA ACCORDION / FAQ MODULE ─────────────────────────────────── */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Privacy Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Common questions about how FreePDFConvert handles your files and data.
          </p>
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

        {/* ─── ACTION ESCALATION CTA ───────────────────────────────────────── */}
        <div className="mt-20 p-8 bg-white border border-gray-100 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Have questions about your privacy?
          </h3>
          <p className="text-gray-400 font-medium mb-2">
            Contact our security team anytime. We respond to all privacy-related
            inquiries within 24 hours.
          </p>
          <p className="text-gray-400 text-sm mb-6">
            If you believe your data has been mishandled or wish to request deletion
            of any information related to your use of FreePDFConvert, please reach out.
          </p>
          <Link href="/contact-us">
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