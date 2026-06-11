import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Twitter, Send, ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2 } from 'lucide-react';
import {ContactUsdata} from '@/components/seo';
// ─── JSON-LD STRUCTURED DATA ──────────────────────────────────────────────────
// ✅ FIXED: Removed duplicate global WebSite and Organization definitions.
// Isolates page-level schemas to maintain a crisp 1:1 entity mapping context.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.freepdfconvert.io/contact-us#webpage",
      "url": "https://www.freepdfconvert.io/contact-us",
      "name": "Contact FreePDFConvert – Support & Customer Help",
      "description": "Get in touch with the FreePDFConvert support team for PDF tool inquiries, error handling, performance issues, and feature requests. 24-hour response guaranteed.",
      "isPartOf": { "@id": "https://www.freepdfconvert.io/#website" },
      "breadcrumb": { "@id": "https://www.freepdfconvert.io/contact-us#breadcrumb" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.freepdfconvert.io/og-image.png",
        "width": 1200,
        "height": 630
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.freepdfconvert.io/contact-us#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.freepdfconvert.io/" },
        { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.freepdfconvert.io/contact-us" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How can I contact FreePDFConvert support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact FreePDFConvert support via email at support@freepdfconvert.io, through Telegram at @FreePDFConvert, or via our Twitter account. We respond to technical inquiries as quickly as possible."
          }
        },
        {
          "@type": "Question",
          "name": "How long does FreePDFConvert support take to respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We process and answer support requests within 24 hours. General queries made through our Telegram channel are often addressed within a few hours."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request a new feature for FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, feature suggestions are highly welcome. Reach out via email at support@freepdfconvert.io or join our channels to detail your suggestions for upcoming software updates."
          }
        },
        {
          "@type": "Question",
          "name": "What issues can FreePDFConvert support help with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our help desk troubleshoots configuration problems, input formatting bugs, down times, size optimization flags, and utility operation issues across all converters."
          }
        },
        {
          "@type": "Question",
          "name": "Is FreePDFConvert free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, FreePDFConvert is completely free. All file conversions, modifications, data optimization systems, compressions, and encryption applications operate without costs or credentials."
          }
        }
      ]
    }
  ]
};

// ─── NEXT.JS METADATA EXPORT ──────────────────────────────────────────────────
export const metadata = {
  title: "Contact FreePDFConvert Support & Customer Help",
  description:
    "Need technical help with file tools? Contact the FreePDFConvert help center via email or chat. Complete support for our document converters with quick response times.",
  keywords:
    "contact freepdfconvert, pdf tool support, free pdf converter help, pdf conversion error fix, freepdfconvert email support, online pdf tool help, pdf support 24 hours, contact pdf converter online, freepdfconvert feedback, report pdf bug, free pdf tool customer service, pdf to word help, compress pdf support",
  alternates: {
    canonical: "https://www.freepdfconvert.io/contact-us",
  },
  openGraph: {
    title: "Contact FreePDFConvert – Support & Customer Help",
    description:
      "Get rapid technical help for your conversion setups. Drop a note to our support channels directly. Free support services on any device.",
    url: "https://www.freepdfconvert.io/contact-us",
    type: "website",
    images: [
      {
        url: "https://www.freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact FreePDFConvert Customer Support Desk"
      }
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FreePDFConvert – Support & Customer Help",
    description:
      "Reach out directly for any operational errors, data feedback, or feature proposals. Our support handles respond promptly.",
    images: ["https://www.freepdfconvert.io/og-image.png"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "FreePDFConvert" }],
};

// ─── CONTACT CARD COMPONENT ───────────────────────────────────────────────────
const ContactCard = ({ icon: Icon, title, value, label, link, color }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
    aria-label={`Contact FreePDFConvert via ${title}`}
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${color}`}>
      <Icon size={28} />
    </div>
    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{label}</p>
    <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">{title}</h3>
    <p className="text-gray-500 font-medium mb-6">{value}</p>
    <div className="flex items-center gap-2 text-rose-600 font-black text-sm uppercase tracking-wider">
      Contact Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
    </div>
  </a>
);

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
const ContactUs = () => (
  <div className="min-h-screen bg-[#F8FAFC] flex flex-col">

    {/* JSON-LD Structured Data */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    <Header />

    <main className="flex-1 max-w-7xl mx-auto px-6 py-20 w-full">

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <div className="text-center mb-16">
        <span className="bg-rose-50 text-rose-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">
          Support Hub
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
          Contact{' '}
          <span className="text-rose-600 underline decoration-rose-100 underline-offset-8">
            FreePDFConvert
          </span>{' '}
          Support
        </h1>
        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Need help with a PDF conversion? Have a feature suggestion or bug report?
          Reach out to the FreePDFConvert support team directly on your preferred platform.
          We respond within 24 hours — always free, no registration required.
        </p>
        
        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <span>✓ 24-Hour Response</span>
          <span>✓ Friendly Support</span>
          <span>✓ Feature Requests Welcome</span>
          <span>✓ 100% Free PDF Tool Help</span>
        </div>
      </div>

      {/* ── SEO TEXT BLOCK ────────────────────────────────────────────── */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
          Get Free PDF Conversion Support — Fast &amp; Easy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">Why Contact Us?</h3>
            <p className="mb-4">
              FreePDFConvert offers completely free online PDF tools — including PDF to Word,
              Word to PDF, compress PDF, merge PDF, split PDF, JPG to PDF, PDF to Excel, and
              many more. If any tool is not working as expected, our support team is ready to
              help you resolve the issue quickly.
            </p>
            <p>
              Whether you are experiencing a PDF conversion error, a file download problem,
              an output formatting issue, or simply have a question about one of our tools,
              we are here to assist you at no charge.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3">What We Can Help With</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
                <span>PDF to Word conversion errors or formatting issues</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
                <span>Compress PDF — file size not reducing as expected</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
                <span>Merge PDF or split PDF page order problems</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
                <span>File upload or download failures on any tool</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
                <span>Feature requests for new free PDF tools</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={18} className="text-rose-500 mt-0.5 shrink-0" />
                <span>General questions about PDF conversion online</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <ContactCard
          label="Email Support"
          icon={Mail}
          title="Official Email"
          value="support@freepdfconvert.io"
          link="mailto:support@freepdfconvert.io"
          color="bg-rose-50 text-rose-600"
        />
        <ContactCard
          label="Telegram"
          icon={Send}
          title="Direct Message"
          value="@FreePDFConvert"
          link="https://t.me/freepdfconvert"
          color="bg-sky-50 text-sky-600"
        />
        <ContactCard
          label="Community"
          icon={Twitter}
          title="X / Twitter"
          value="Latest Updates"
          link="https://twitter.com/freepdfconvert"
          color="bg-gray-900 text-white"
        />
      </div>

      {/* ── RESPONSE TIME INFO ────────────────────────────────────────── */}
      <section className="mb-20 max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
          Our Support Response Times
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-rose-50">
            <p className="text-4xl font-black text-rose-600 mb-2">&lt; 24h</p>
            <p className="font-bold text-gray-800 mb-1">Email Support</p>
            <p className="text-sm text-gray-500">Send your query to support@freepdfconvert.io and get a detailed reply within 24 hours on any business day.</p>
          </div>
          <div className="p-6 rounded-2xl bg-sky-50">
            <p className="text-4xl font-black text-sky-600 mb-2">&lt; 6h</p>
            <p className="font-bold text-gray-800 mb-1">Telegram</p>
            <p className="text-sm text-gray-500">Telegram messages receive the fastest replies. Ideal for quick questions about PDF conversion issues.</p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <p className="text-4xl font-black text-gray-800 mb-2">Live</p>
            <p className="font-bold text-gray-800 mb-1">Twitter / X</p>
            <p className="text-sm text-gray-500">Follow us on Twitter for real-time updates, new tool announcements, and community discussions about PDF tools.</p>
          </div>
        </div>
      </section>

      {/* ── COMMUNITY / CTA BOX ───────────────────────────────────────── */}
      <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Join our{' '}
              <span className="text-rose-600">Community</span>{' '}
              for instant updates!
            </h2>
            <p className="text-gray-500 font-medium mb-4 leading-relaxed">
              Get notified about new free PDF tools, feature releases, and tips for faster document
              conversion — straight to your Telegram or Twitter feed.
            </p>
            <p className="text-gray-500 font-medium mb-6 leading-relaxed">
              Our community members are the first to know about new tools like PDF to PowerPoint,
              OCR PDF, rotate PDF, and other upcoming features we are building for you.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl text-sm font-bold">
                <ShieldCheck size={18} /> Secure Support
              </div>
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl text-sm font-bold">
                <Zap size={18} /> Fast Response
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://t.me/freepdfconvert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join FreePDFConvert on Telegram for PDF tool updates"
              className="flex-1 bg-[#229ED9] text-white p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-sky-100"
            >
              <Send size={32} strokeWidth={2.5} />
              <span className="font-black text-lg tracking-tight">TELEGRAM</span>
            </a>
            <a
              href="https://twitter.com/freepdfconvert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow FreePDFConvert on Twitter for PDF updates"
              className="flex-1 bg-gray-900 text-white p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-gray-200"
            >
              <Twitter size={32} strokeWidth={2.5} />
              <span className="font-black text-lg tracking-tight">TWITTER</span>
            </a>
          </div>
        </div>
        <Globe className="absolute -right-20 -bottom-20 w-80 h-80 text-rose-50/50 -z-0" />
      </div>

      {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
      <section className="mb-20" aria-label="Frequently Asked Questions about FreePDFConvert Support">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-xl mx-auto">
          Common questions about contacting FreePDFConvert and getting help with our free PDF tools.
        </p>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: 'How can I contact FreePDFConvert support?',
              a: 'You can reach us via email at support@freepdfconvert.io, through Telegram @FreePDFConvert, or on Twitter/X. We respond to all queries as quickly as possible. Email is best for detailed issues like formatting errors, while Telegram is ideal for quick questions.',
            },
            {
              q: 'How long does FreePDFConvert take to respond?',
              a: 'We aim to respond to all support emails within 24 hours on business days. Telegram messages are typically answered within a few hours. We take every query seriously and aim to resolve your PDF tool issue completely.',
            },
            {
              q: 'What issues can your support team help with?',
              a: 'We can help with PDF conversion errors, download issues, formatting problems, feature requests, and any general questions about our free PDF tools — PDF to Word, merge PDF, compress PDF, split PDF, JPG to PDF, PDF to Excel, unlock PDF, and more.',
            },
            {
              q: 'Can I request a new feature or PDF tool?',
              a: 'Yes, absolutely. We love user feedback. Send your feature idea to support@freepdfconvert.io or message us on Telegram and we will consider it for our next update. Many of our current tools were added based on user requests.',
            },
            {
              q: 'Is FreePDFConvert free to use?',
              a: 'Yes, FreePDFConvert is 100% free. All tools — PDF to Word, Word to PDF, compress PDF, merge PDF, split PDF, JPG to PDF, and more — are available at no cost with no registration or account required. You can convert, compress, and edit PDFs directly in your browser.',
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

      {/* ── INTERNAL LINKS ────────────────────────────────────────────── */}
      <section aria-label="Free PDF Tools by FreePDFConvert">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-4">
          Explore Our Free PDF Tools
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">
          All tools are free, instant, and require no registration. Convert, compress, merge, and edit PDFs directly in your browser.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: '/pdf-to-word', label: 'PDF to Word', desc: 'Convert PDF to editable Word doc' },
            { href: '/word-to-pdf', label: 'Word to PDF', desc: 'Turn Word files into PDF instantly' },
            { href: '/merge-pdf', label: 'Merge PDF', desc: 'Combine multiple PDFs into one' },
            { href: '/compress-pdf', label: 'Compress PDF', desc: 'Reduce PDF file size for free' },
            { href: '/pdf-to-excel', label: 'PDF to Excel', desc: 'Extract tables from PDF to Excel' },
            { href: '/jpg-to-pdf', label: 'JPG to PDF', desc: 'Convert images to PDF online' },
            { href: '/split-pdf', label: 'Split PDF', desc: 'Split PDF into separate pages' },
            { href: '/unlock-pdf', label: 'Unlock PDF', desc: 'Remove password from PDF files' },
          ].map(({ href, label, desc }) => (
            <a
              key={href}
              href={href}
              title={desc}
              className="bg-white rounded-2xl p-4 shadow-sm text-center text-sm font-bold text-gray-700 hover:text-rose-600 hover:shadow-md transition-all border border-gray-100"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
<ContactUsdata/>
    </main>

    <Footer />
  </div>
);

export default ContactUs;