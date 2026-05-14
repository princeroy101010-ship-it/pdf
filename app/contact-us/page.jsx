import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, Twitter, Send, ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2 } from 'lucide-react';

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.freepdfconvert.io/contact-us#webpage",
      "url": "https://www.freepdfconvert.io/contact-us",
      "name": "Contact Us – FreePDFConvert | PDF Tool Support & Help",
      "description": "Contact FreePDFConvert for support, feedback, or feature requests. Reach us via email, Telegram, or Twitter. Fast response guaranteed.",
      "inLanguage": "en-US",
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
        { "@type": "ListItem", "position": 1, "name": "Home",       "item": "https://www.freepdfconvert.io/" },
        { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://www.freepdfconvert.io/contact-us" }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.freepdfconvert.io/#organization",
      "name": "FreePDFConvert",
      "url": "https://www.freepdfconvert.io/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.freepdfconvert.io/og-image.png"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "support@freepdfconvert.io",
          "contactType": "customer support",
          "availableLanguage": ["English"],
          "areaServed": "Worldwide"
        }
      ],
      "sameAs": [
        "https://twitter.com/crpto23664246",
        "https://t.me/@cryptonewstrendhub"
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
            "text": "You can contact FreePDFConvert support via email at support@freepdfconvert.io, through Telegram at @FreePDFConvert, or on Twitter/X. We respond to all queries as fast as possible."
          }
        },
        {
          "@type": "Question",
          "name": "How long does FreePDFConvert support take to respond?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We aim to respond to all support emails and messages within 24 hours. Telegram messages are often answered even faster."
          }
        },
        {
          "@type": "Question",
          "name": "Can I request a new feature for FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We welcome feature suggestions. Send your idea via email to support@freepdfconvert.io or message us on Telegram."
          }
        },
        {
          "@type": "Question",
          "name": "What issues can FreePDFConvert support help with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our support team can help with conversion errors, file download issues, formatting problems, feature requests, and general questions about any of our free PDF tools."
          }
        }
      ]
    }
  ]
};

// ─── Next.js Metadata Export ──────────────────────────────────────────────────
export const metadata = {
  title: "Contact Us – FreePDFConvert | PDF Tool Support & Help",
  description:
    "Contact FreePDFConvert for support, feedback, or feature requests. Reach us via email, Telegram, or Twitter. Fast response guaranteed. Free PDF tool support.",
  keywords:
    "contact freepdfconvert, pdf tool support, freepdfconvert help, pdf converter support, contact pdf tool, freepdfconvert email, pdf support online, free pdf tool help, freepdfconvert feedback, pdf converter help",
  alternates: {
    canonical: "https://www.freepdfconvert.io/contact-us",
  },
  openGraph: {
    title: "Contact FreePDFConvert – PDF Tool Support & Help",
    description:
      "Need help with a PDF tool? Contact our support team via email, Telegram, or Twitter. Fast response for all PDF conversion issues.",
    url: "https://www.freepdfconvert.io/contact-us",
    type: "website",
    images: [
      {
        url: "https://www.freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact FreePDFConvert – PDF Tool Support"
      }
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FreePDFConvert – We Are Here to Help",
    description:
      "Reach out via email, Telegram, or Twitter. Fast support for all PDF tool issues. Free PDF converter help.",
    images: ["https://www.freepdfconvert.io/og-image.png"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "FreePDFConvert" }],
};

// ─── Contact Card Component ───────────────────────────────────────────────────
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

// ─── Main Component ───────────────────────────────────────────────────────────
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
      <div className="text-center mb-20">
        <span className="bg-rose-50 text-rose-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">
          Support Hub
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
          Let&apos;s{' '}
          <span className="text-rose-600 underline decoration-rose-100 underline-offset-8">
            Connect.
          </span>
        </h1>
        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Need help with a PDF conversion? Have a feature suggestion or bug report?
          Reach out to the FreePDFConvert support team directly on your preferred platform.
        </p>
        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          <span>✓ Fast Response</span>
          <span>✓ Friendly Support</span>
          <span>✓ Feature Requests Welcome</span>
          <span>✓ Free PDF Tool Help</span>
        </div>
      </div>

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
          link="https://t.me/@cryptonewstrendhub"
          color="bg-sky-50 text-sky-600"
        />
        <ContactCard
          label="Community"
          icon={Twitter}
          title="X / Twitter"
          value="Latest Updates"
          link="https://twitter.com/crpto23664246"
          color="bg-gray-900 text-white"
        />
      </div>

      {/* ── COMMUNITY / CTA BOX ───────────────────────────────────────── */}
      <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Join our{' '}
              <span className="text-rose-600">Community</span>{' '}
              for instant updates!
            </h2>
            <p className="text-gray-500 font-medium mb-6 leading-relaxed">
              Get notified about new free PDF tools, feature releases, and tips for faster document
              conversion — straight to your Telegram or Twitter feed.
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
              href="https://t.me/your_telegram_link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join FreePDFConvert on Telegram"
              className="flex-1 bg-[#229ED9] text-white p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-sky-100"
            >
              <Send size={32} strokeWidth={2.5} />
              <span className="font-black text-lg tracking-tight">TELEGRAM</span>
            </a>
            <a
              href="https://twitter.com/freepdfconvert"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow FreePDFConvert on Twitter"
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
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-10">
          Frequently Asked Questions – Support
        </h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              q: 'How can I contact FreePDFConvert support?',
              a: 'You can reach us via email at support@freepdfconvert.io, through Telegram @FreePDFConvert, or on Twitter/X. We respond to all queries as quickly as possible.',
            },
            {
              q: 'How long does FreePDFConvert take to respond?',
              a: 'We aim to respond to all support emails and messages within 24 hours. Telegram messages are often answered even faster.',
            },
            {
              q: 'What issues can your support team help with?',
              a: 'We can help with conversion errors, download issues, formatting problems, feature requests, and any general questions about our free PDF tools — PDF to Word, merge PDF, compress PDF, and more.',
            },
            {
              q: 'Can I request a new feature or PDF tool?',
              a: 'Yes, absolutely. We love user feedback. Send your feature idea to support@freepdfconvert.io or message us on Telegram and we will consider it for our next update.',
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
      <section>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8">
          Explore Our Free PDF Tools
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { href: '/pdf-to-word',   label: 'PDF to Word'   },
            { href: '/word-to-pdf',   label: 'Word to PDF'   },
            { href: '/merge-pdf',     label: 'Merge PDF'     },
            { href: '/compress-pdf',  label: 'Compress PDF'  },
            { href: '/pdf-to-excel',  label: 'PDF to Excel'  },
            { href: '/jpg-to-pdf',    label: 'JPG to PDF'    },
            { href: '/split-pdf',     label: 'Split PDF'     },
            { href: '/unlock-pdf',    label: 'Unlock PDF'    },
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

    </main>

    <Footer />
  </div>
);

export default ContactUs;