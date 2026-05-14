import React from 'react';
import { Scale, ShieldAlert, FileWarning, Ban, CheckCircle2, Files } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

// ─── 100% SEO OPTIMIZED METADATA ───
export const metadata = {
  title: "Terms of Service – FreePDFConvert | Free PDF Tools Legal Agreement",
  description:
    "Read FreePDFConvert's Terms of Service. Learn about usage rights, prohibited content, liability limitations and service modifications for our free online PDF converter tools.",
  keywords:
    "freepdfconvert terms of service, pdf converter terms, free pdf tool legal agreement, pdf converter usage rights, freepdfconvert legal, pdf tool terms and conditions, online pdf converter policy, pdf converter acceptable use, freepdfconvert disclaimer",
  alternates: {
    canonical: "https://freepdfconvert.io/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service – FreePDFConvert | Free PDF Tools Legal Agreement",
    description:
      "Usage rights, prohibited content, and liability terms for FreePDFConvert free PDF tools. Clear, fair, and easy to understand.",
    url: "https://freepdfconvert.io/terms-of-service",
    type: "website",
    images: [{ url: "/og-terms-of-service.png", width: 1200, height: 630, alt: "FreePDFConvert – Terms of Service" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service – FreePDFConvert | Free PDF Tools Legal Agreement",
    description: "Read our terms before using FreePDFConvert. Free PDF tools with clear, fair usage policies. No hidden clauses.",
    images: ["/og-terms-of-service.png"],
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
  "name": "Terms of Service – FreePDFConvert",
  "url": "https://freepdfconvert.io/terms-of-service",
  "description": "Terms of Service for FreePDFConvert — usage rights, prohibited content, liability limitations, and service modification policies for our free online PDF tools.",
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
      "name": "Is FreePDFConvert free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert is 100% free to use for personal and business document processing. No signup, no subscription, and no hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "What files am I allowed to convert on FreePDFConvert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You may convert any files you own or have rights to process. You may not upload content that violates intellectual property rights, contains malware, or is illegal or defamatory."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use FreePDFConvert for commercial or business use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert grants a personal and business-use license to process documents using our provided interface, free of charge."
      }
    },
    {
      "@type": "Question",
      "name": "Is FreePDFConvert liable for file loss or corruption?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FreePDFConvert provides its tools 'as is' and is not liable for any data loss or file corruption. We recommend always keeping a backup of your original files before conversion."
      }
    },
    {
      "@type": "Question",
      "name": "Can FreePDFConvert change its terms or service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert reserves the right to modify or discontinue any part of the service at any time. Terms may be updated periodically to reflect changes in service or applicable law."
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
    { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://freepdfconvert.io/terms-of-service" }
  ]
};

// ─── REUSABLE CARD (unchanged) ───
const TermCard = ({ icon: Icon, title, children }) => (
  <div className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all mb-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-rose-50 p-3 rounded-xl text-rose-600">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-gray-800 tracking-tight">{title}</h2>
    </div>
    <div className="text-gray-500 font-medium leading-relaxed space-y-4 text-sm md:text-base">
      {children}
    </div>
  </div>
);

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">

      {/* ─── JSON-LD Structured Data ─── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }} />

      <Header />

      <header className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* ✅ Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-rose-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-600 font-semibold">Terms of Service</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Scale size={16} /> Legal Agreement — Last Updated February 2026
          </div>

          {/* ✅ H1 */}
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Terms of <span className="text-rose-600">Service</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Please read these terms carefully before using FreePDFConvert free online PDF tools.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">

        {/* ─── ACCEPTANCE BANNER ─── */}
        <div className="bg-gray-900 rounded-[2.5rem] p-10 mb-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Scale size={120} />
          </div>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
            <CheckCircle2 className="text-rose-500" /> Acceptance of Terms
          </h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            By accessing or using FreePDFConvert, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </div>

        {/* ─── TERM CARDS (H2 titles SEO-improved) ─── */}
        <TermCard icon={ShieldAlert} title="1. Usage License">
          <p>We grant you a personal, non-exclusive, non-transferable license to use FreePDFConvert for your personal or business document processing needs — completely free of charge.</p>
          <p><strong>You may:</strong> Convert, merge, compress, and edit your files using our provided interface.</p>
          <p><strong>You may not:</strong> Attempt to reverse engineer the software, use the service for illegal purposes, or use automated bots to scrape our platform.</p>
        </TermCard>

        <TermCard icon={Ban} title="2. Prohibited Content">
          <p>You are solely responsible for the content you upload. You agree not to use FreePDFConvert to process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Content that violates intellectual property or copyright rights.</li>
            <li>Documents containing malware, viruses, or harmful code.</li>
            <li>Material that is illegal, threatening, or defamatory.</li>
          </ul>
        </TermCard>

        <TermCard icon={FileWarning} title="3. Limitation of Liability">
          <p>FreePDFConvert provides tools "as is" without any warranties. While we strive for 100% uptime and accuracy:</p>
          <p>We are not liable for any data loss, file corruption, or business interruption that may occur during the use of our services. Always keep a backup of your original files before conversion.</p>
        </TermCard>

        <TermCard icon={Files} title="4. Service Modifications">
          <p>We reserve the right to modify or discontinue any part of the service at any time without prior notice. We may also update these terms periodically to reflect changes in our service or applicable law. Continued use of the service after changes constitutes acceptance of the updated terms.</p>
        </TermCard>

        {/* ─── FAQ SECTION ─── */}
        <div className="mt-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Terms of Service – Frequently Asked Questions
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

        {/* ─── CONTACT ─── */}
        <div className="text-center py-10 border-t border-gray-200">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            Questions? Contact us at{' '}
            <a href="mailto:legal@freepdfconvert.io" className="text-rose-600 hover:underline">
              legal@freepdfconvert.io
            </a>
          </p>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;