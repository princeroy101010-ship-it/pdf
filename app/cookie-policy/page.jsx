import React from 'react';
import { Cookie, ShieldCheck, Settings, Info, MousePointer2 } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.freepdfconvert.io/cookie-policy#webpage",
      "url": "https://www.freepdfconvert.io/cookie-policy",
      "name": "Cookie Policy – FreePDFConvert | How We Use Cookies",
      "description": "Learn how FreePDFConvert uses cookies to improve your experience. We only use essential, preference, and analytics cookies. No tracking without consent.",
      "inLanguage": "en-US",
      "isPartOf": { "@id": "https://www.freepdfconvert.io/#website" },
      "breadcrumb": { "@id": "https://www.freepdfconvert.io/cookie-policy#breadcrumb" },
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
      "@id": "https://www.freepdfconvert.io/cookie-policy#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",          "item": "https://www.freepdfconvert.io/" },
        { "@type": "ListItem", "position": 2, "name": "Cookie Policy", "item": "https://www.freepdfconvert.io/cookie-policy" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does FreePDFConvert use cookies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. FreePDFConvert uses essential cookies required for the website to function, preference cookies to remember your settings, and anonymous analytics cookies to improve performance. We do not use tracking or advertising cookies."
          }
        },
        {
          "@type": "Question",
          "name": "How can I manage or disable cookies on FreePDFConvert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can manage cookies through your browser settings. Most browsers let you block or delete cookies. Note that disabling essential cookies may affect how some features of FreePDFConvert work."
          }
        },
        {
          "@type": "Question",
          "name": "Does FreePDFConvert use third-party cookies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use Google Analytics which sets its own cookies to collect anonymous visitor data. No personally identifiable information is collected through these cookies."
          }
        },
        {
          "@type": "Question",
          "name": "Does FreePDFConvert sell cookie data to advertisers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. FreePDFConvert never sells user data or cookie information to advertisers or any third parties. Our cookie usage is strictly for improving your experience on our free PDF tools."
          }
        }
      ]
    }
  ]
};

// ─── Next.js Metadata Export ──────────────────────────────────────────────────
export const metadata = {
  title: "Cookie Policy – FreePDFConvert | How We Use Cookies",
  description:
    "Learn how FreePDFConvert uses cookies to improve your experience. We only use essential, preference, and analytics cookies. No advertising tracking, no data selling. 100% transparent.",
  keywords:
    "freepdfconvert cookie policy, pdf tool cookies, how we use cookies, cookie consent pdf tool, essential cookies, analytics cookies, manage cookies, third party cookies, freepdfconvert privacy, pdf converter cookie policy",
  alternates: {
    canonical: "https://www.freepdfconvert.io/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy – FreePDFConvert | Transparent Cookie Usage",
    description:
      "Transparent information about how FreePDFConvert uses cookies. Essential and analytics only — no advertising tracking, no data selling.",
    url: "https://www.freepdfconvert.io/cookie-policy",
    type: "website",
    images: [
      {
        url: "https://www.freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert – Cookie Policy"
      }
    ],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy – FreePDFConvert",
    description: "How FreePDFConvert uses cookies. Transparent, minimal, and privacy-first.",
    images: ["https://www.freepdfconvert.io/og-image.png"],
  },
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "FreePDFConvert" }],
};

// ─── Cookie Section Component ─────────────────────────────────────────────────
const CookieSection = ({ icon: Icon, title, children }) => (
  <div className="mb-10 group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-rose-50 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-gray-800 tracking-tight">{title}</h2>
    </div>
    <div className="pl-0 md:pl-14 text-gray-500 font-medium leading-relaxed space-y-4 text-sm md:text-base">
      {children}
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      {/* ── HERO HEADER ─────────────────────────────────────────────────── */}
      <header className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Cookie size={16} /> Data Tracking Info
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Cookie <span className="text-rose-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Transparent information about how FreePDFConvert uses cookies to improve your experience
            while protecting your privacy. Last updated: May 2026.
          </p>
          {/* Trust Signals */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            <span>✓ No Advertising Cookies</span>
            <span>✓ No Data Selling</span>
            <span>✓ GDPR Friendly</span>
            <span>✓ Full Transparency</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">

        {/* ── WHAT ARE COOKIES ──────────────────────────────────────────── */}
        <div className="bg-rose-600 rounded-[2.5rem] p-10 mb-12 text-white shadow-xl shadow-rose-100 relative overflow-hidden">
          <Cookie className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 -rotate-12" />
          <h2 className="text-2xl font-black mb-4">What Are Cookies?</h2>
          <p className="text-rose-50 text-lg font-medium leading-relaxed relative z-10">
            Cookies are small text files stored on your device when you visit a website. They help us
            remember your settings, ensure our free PDF tools work smoothly, and understand how users
            interact with FreePDFConvert so we can keep improving.
          </p>
        </div>

        {/* ── COOKIE SECTIONS ───────────────────────────────────────────── */}
        <CookieSection icon={ShieldCheck} title="How FreePDFConvert Uses Cookies">
          <p>
            At FreePDFConvert, cookies are used only for specific, limited purposes. We do not use
            advertising cookies or sell any cookie data to third parties.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to function correctly —
              for example, handling file uploads for PDF to Word conversion, merge PDF, and compress PDF tools.
            </li>
            <li>
              <strong>Preference Cookies:</strong> Used to remember your choices such as tool layouts
              and display preferences, so your FreePDFConvert experience is consistent across visits.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how users interact with our free
              PDF tools so we can make them faster and easier to use. All data is anonymous.
            </li>
          </ul>
        </CookieSection>

        <CookieSection icon={Settings} title="Managing Your Cookies">
          <p>
            Most browsers let you control cookies through their settings. You can choose to block or
            delete cookies at any time. However, disabling essential cookies may prevent some features
            of FreePDFConvert — such as file uploads and conversions — from working correctly.
          </p>
          <p>
            To manage cookies in your browser, visit the settings or preferences section. Look for
            &quot;Privacy&quot;, &quot;Security&quot;, or &quot;Cookies&quot; in your browser menu.
          </p>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 mt-4">
            <Info className="text-rose-600 shrink-0" size={20} />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">
              Pro Tip: Use Incognito or Private Mode if you want all cookies deleted automatically
              when you close your browser tab.
            </p>
          </div>
        </CookieSection>

        <CookieSection icon={MousePointer2} title="Third-Party Cookies">
          <p>
            FreePDFConvert uses Google Analytics to measure website performance and understand visitor
            behavior. Google Analytics sets its own cookies that collect anonymous data about your
            visit, such as pages viewed and time spent on site.
          </p>
          <p>
            No personally identifiable information is collected through these cookies. You can opt out
            of Google Analytics tracking by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 font-bold underline"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </CookieSection>

        {/* ── FAQ SECTION ───────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            Cookie Policy – Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'Does FreePDFConvert use cookies?',
                a: 'Yes. We use essential cookies for the website to function, preference cookies to remember your settings, and anonymous analytics cookies. We do not use advertising or tracking cookies.',
              },
              {
                q: 'How can I manage or disable cookies on FreePDFConvert?',
                a: 'You can manage cookies through your browser settings. Most browsers let you block or delete cookies. Note that disabling essential cookies may affect how some features of our free PDF tools work.',
              },
              {
                q: 'Does FreePDFConvert use third-party cookies?',
                a: 'We use Google Analytics which sets its own cookies to collect anonymous visitor data. No personally identifiable information is ever collected through these cookies.',
              },
              {
                q: 'Does FreePDFConvert sell cookie data to advertisers?',
                a: 'No. FreePDFConvert never sells user data or cookie information to advertisers or any third parties. Our cookie usage is strictly to improve your experience on our free PDF tools.',
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

        {/* ── CONSENT FOOTER NOTE ───────────────────────────────────────── */}
        <div className="text-center py-12">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
            By using FreePDFConvert, you consent to our use of cookies as described in this policy.
          </p>
          <div className="h-px w-24 bg-rose-200 mx-auto mb-8" />
        </div>

        {/* ── INTERNAL LINKS ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-black text-gray-900 text-center mb-6">
            Explore Our Free PDF Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: '/pdf-to-word',    label: 'PDF to Word'    },
              { href: '/word-to-pdf',    label: 'Word to PDF'    },
              { href: '/merge-pdf',      label: 'Merge PDF'      },
              { href: '/compress-pdf',   label: 'Compress PDF'   },
              { href: '/pdf-to-excel',   label: 'PDF to Excel'   },
              { href: '/jpg-to-pdf',     label: 'JPG to PDF'     },
              { href: '/split-pdf',      label: 'Split PDF'      },
              { href: '/privacy-policy', label: 'Privacy Policy' },
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
};

export default CookiePolicy;