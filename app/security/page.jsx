import React from 'react';
import { ShieldCheck, Lock, EyeOff, Trash2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';

// ─── SEO METADATA (Next.js App Router Format) ──────────────────────────────────
export const metadata = {
  title: "Secure PDF Converter AES-256 Encrypted",
  description:
    "FreePDFConvert uses AES-256 encryption & SSL transfer. Files auto-deleted in 2 hours. Zero human access. 100% private, free PDF converter online.",
  keywords:
    "secure pdf converter, encrypted pdf converter, aes-256 pdf tool, safe pdf converter online, pdf converter no data storage, ssl encrypted pdf upload, private pdf converter, pdf tool gdpr compliant, secure file conversion online, pdf auto delete files, no human access pdf tool, bank level pdf security, free secure pdf tool, pdf privacy protection",
  alternates: {
    canonical: "https://freepdfconvert.io/security",
    languages: {
      "en-US": "https://freepdfconvert.io/security",
    },
  },
  openGraph: {
    title: "Secure PDF Converter AES-256 Encrypted & 100% Private | FreePDFConvert",
    description:
      "AES-256 encryption, SSL transfers, auto-deletion in 2 hours, zero human access. The most secure free PDF converter online.",
    url: "https://freepdfconvert.io/security",
    type: "website",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert Security AES-256 Encrypted PDF Converter",
      },
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure PDF Converter AES-256 Encrypted | FreePDFConvert",
    description:
      "AES-256 encryption, SSL transfer, auto-delete in 2 hours. No human access. The safest free PDF converter online.",
    images: ["https://freepdfconvert.io/og-image.png"],
    site: "@freepdfconvert",
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
  name: "Secure PDF Converter AES-256 Encrypted | FreePDFConvert",
  url: "https://freepdfconvert.io/security",
  description:
    "FreePDFConvert uses AES-256 encryption, SSL transfer, and automatic file deletion in 2 hours. No human access. Bank-level security for every PDF conversion.",
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
  datePublished: "2025-01-01",
  dateModified: "2026-06-10",
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is FreePDFConvert safe and secure to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FreePDFConvert is completely safe. It uses AES-256 encryption and SSL/TLS transfer to protect all files. No human can access your documents, and files are automatically deleted within 2 hours of conversion.",
      },
    },
    {
      "@type": "Question",
      name: "What encryption does FreePDFConvert use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "FreePDFConvert uses AES-256 bit encryption — the same standard used by banks and governments worldwide — to protect your files during processing and transfer.",
      },
    },
    {
      "@type": "Question",
      name: "How long are my files stored on FreePDFConvert servers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your files are automatically and permanently deleted from our servers within 2 hours of conversion. No backups are kept, no traces remain.",
      },
    },
    {
      "@type": "Question",
      name: "Can FreePDFConvert employees see my uploaded files?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The entire conversion process is fully automated. No human being at FreePDFConvert can view, read, or access your uploaded documents at any time.",
      },
    },
    {
      "@type": "Question",
      name: "Is FreePDFConvert GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. FreePDFConvert follows strict data protection and data minimization principles, fully aligned with GDPR regulations. We collect no personal data and store no files permanently.",
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
      name: "Security",
      item: "https://freepdfconvert.io/security",
    },
  ],
};

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────
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
      {/* Structural Data Injection */}
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

      <main>
        <section className="py-24 bg-white min-h-screen">
          <div className="max-w-7xl mx-auto px-6">

            {/* Hero Framework */}
            <div className="text-center mb-16">
              <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
                <Link href="/" className="hover:text-rose-600">Home</Link>
                <span className="mx-2" aria-hidden="true">/</span>
                <span className="text-gray-600 font-semibold">Security</span>
              </nav>

              <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
                Privacy First
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Your Files Are{' '}
                <span className="text-rose-600">100% Secure</span>
              </h1>

              <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
                FreePDFConvert is the most secure free PDF converter online. AES-256 encryption,
                SSL transfer, zero human access, and automatic deletion in 2 hours.
                Bank-level security for every PDF conversion — completely free.
              </p>
            </div>

            {/* Main Visual Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {securityFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-[2rem] border border-gray-100 bg-[#f8f9fa] hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Editorial Layer */}
            <div className="mt-24 max-w-3xl mx-auto space-y-14">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Why FreePDFConvert Is the Most Secure Free PDF Converter
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  When you convert, compress, or merge a PDF online, your documents may contain
                  sensitive personal or business information. Choosing a secure PDF converter is
                  not optional — it is critical. FreePDFConvert was built with a
                  security-first architecture that protects your data at every stage of the
                  conversion process.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Unlike many free PDF tools that store your files indefinitely or share data
                  with third parties, FreePDFConvert automatically deletes every uploaded file
                  within 2 hours. No human employee can access your documents. Your files are
                  processed in an isolated, encrypted environment and immediately discarded
                  after conversion is complete.
                </p>

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
                    <li
                      key={f}
                      className="bg-[#f8f9fa] rounded-xl px-4 py-3 border border-gray-100 font-medium"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  How FreePDFConvert Protects Your Files
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Every file you upload to FreePDFConvert is immediately encrypted using
                  AES-256, the Advanced Encryption Standard with a 256-bit key length. This
                  is the same encryption used by financial institutions, government agencies,
                  and military organizations to protect classified information.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  During file transfer, all data is transmitted over an SSL/TLS secured
                  connection, meaning your file cannot be intercepted or tampered with in
                  transit. Once your conversion is complete, you download your converted file
                  — and our servers begin a countdown. Within 2 hours, all copies of your
                  original and converted files are permanently and irreversibly deleted.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The entire process is fully automated. No human being reviews, views, or
                  interacts with your files at any point. This zero-access policy is one of
                  the strictest privacy standards available in any free online PDF tool today.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Who Should Use a Secure PDF Converter?
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  A secure PDF converter is essential for anyone who handles sensitive,
                  confidential, or legally protected documents online. This includes lawyers
                  converting legal briefs, HR professionals handling employment contracts,
                  healthcare workers managing medical records, accountants processing
                  financial statements, and students submitting confidential assignments.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  FreePDFConvert is trusted by users worldwide who need a private, encrypted
                  PDF tool without paying for expensive enterprise software. Whether you need
                  to{' '}
                  <Link href="/compress-pdf" className="text-rose-600 hover:underline">
                    compress a PDF
                  </Link>
                  ,{' '}
                  <Link href="/pdf-to-word" className="text-rose-600 hover:underline">
                    convert PDF to Word
                  </Link>
                  , or{' '}
                  <Link href="/merge-pdf" className="text-rose-600 hover:underline">
                    merge PDF files
                  </Link>
                  , every tool on our platform applies the same bank-level security standards.
                </p>
              </div>

              {/* Accordions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Security Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {schemaFAQ.mainEntity.map((faq) => (
                    <details
                      key={faq.name}
                      className="bg-[#f8f9fa] rounded-2xl px-5 py-4 border border-gray-100 group"
                    >
                      <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center select-none">
                        {faq.name}
                        <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs" aria-hidden="true">
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

              {/* Navigation Action Group */}
              <div className="bg-rose-50 rounded-3xl p-8 border border-rose-100 text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                  Ready to Convert Your PDF Securely?
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Use any of our free, encrypted PDF tools. No sign-up. No storage. No risk.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href="/pdf-to-word"
                    className="bg-rose-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-rose-700 transition-colors"
                  >
                    PDF to Word
                  </Link>
                  <Link
                    href="/compress-pdf"
                    className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Compress PDF
                  </Link>
                  <Link
                    href="/merge-pdf"
                    className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Merge PDF
                  </Link>
                  <Link
                    href="/"
                    className="bg-white text-gray-700 border border-gray-200 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
                  >
                    All PDF Tools
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SecuritySection;