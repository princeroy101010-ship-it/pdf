import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ============================================================
// ✅ 100% SEO OPTIMIZED METADATA — freepdfconvert.io
// ============================================================
export const metadata = {
  metadataBase: new URL("https://freepdfconvert.io"),

  // ── TITLE ──────────────────────────────────────────────────
  title: {
    default:
      "FreePDFConvert – Free PDF Converter, Merger, Compressor & Editor Online",
    template: "%s | FreePDFConvert",   // ✅ FIXED: was "%s" — now every page gets brand suffix
  },

  // ── META DESCRIPTION ───────────────────────────────────────
  description:
    "FreePDFConvert: 100% free online PDF tools. Convert PDF to Word, Excel, JPG & more. Merge, split, compress, rotate, unlock & protect PDF files. No signup, no watermark. Fast & secure.",

  // ── KEYWORDS ───────────────────────────────────────────────
  keywords: [
    "free pdf converter",
    "pdf converter online free",
    "convert pdf online",
    "pdf tools online free",
    "online pdf editor free",
    "pdf to word converter free",
    "pdf to excel converter free",
    "pdf to jpg converter free",
    "pdf to png free",
    "pdf to powerpoint free",
    "word to pdf converter free",
    "excel to pdf free",
    "jpg to pdf converter free",
    "image to pdf free",
    "png to pdf free",
    "merge pdf online free",
    "merge pdf files free",
    "combine pdf files free",
    "split pdf online free",
    "split pdf pages free",
    "compress pdf online free",
    "reduce pdf size free",
    "shrink pdf file free",
    "pdf compressor free",
    "unlock pdf online free",
    "remove pdf password free",
    "protect pdf with password free",
    "add password to pdf free",
    "rotate pdf online free",
    "pdf page rotator free",
    "reorder pdf pages free",
    "delete pages from pdf free",
    "add page numbers to pdf free",
    "watermark pdf free",
    "sign pdf online free",
    "esign pdf free",
    "annotate pdf free",
    "pdf converter no signup",
    "pdf tools without registration",
    "pdf converter no watermark",
    "pdf tools without installation",
    "ilovepdf alternative free",
    "smallpdf alternative free",
    "adobe pdf alternative free",
    "best free pdf converter",
    "freepdfconvert",
    "freepdfconvert.io",
  ],

  // ── AUTHOR & CREATOR ───────────────────────────────────────
  authors: [{ name: "FreePDFConvert Team", url: "https://freepdfconvert.io" }],
  creator: "FreePDFConvert",
  publisher: "FreePDFConvert",

  // ── CATEGORY ───────────────────────────────────────────────
  category: "Technology",
  applicationName: "FreePDFConvert",

  // ── FORMAT DETECTION ───────────────────────────────────────
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── CANONICAL ──────────────────────────────────────────────
  alternates: {
    canonical: "https://freepdfconvert.io",
    languages: {
      "en-US": "https://freepdfconvert.io",
    },
  },

  // ── OPEN GRAPH ─────────────────────────────────────────────
  openGraph: {
    title:
      "FreePDFConvert – Free PDF Converter, Merger & Compressor Online",
    description:
      "100% free PDF tools online. Convert, merge, split, compress, unlock & protect PDF files. No signup or watermark required. Works on any device.",
    url: "https://freepdfconvert.io",
    siteName: "FreePDFConvert",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert – Free PDF Tools Online | Convert, Merge, Compress PDF",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── TWITTER CARD ───────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@freepdfconvert",
    creator: "@freepdfconvert",
    title: "FreePDFConvert – Free PDF Tools Online",
    description:
      "Convert, merge, compress & edit PDF files 100% free. No signup, no watermark. Fast & secure.",
    images: ["https://freepdfconvert.io/og-image.png"],
  },

  // ── ROBOTS ─────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── GOOGLE VERIFICATION ────────────────────────────────────
  verification: {
    google: "G-X7HW9F8FV6",
  },

  referrer: "origin-when-cross-origin",
};

// ── VIEWPORT ───────────────────────────────────────────────
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ============================================================
// ✅ COMBINED JSON-LD SCHEMAS
// ============================================================
export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      // ── 1. WebSite + SearchAction ───────────────────────────
      {
        "@type": "WebSite",
        "@id": "https://freepdfconvert.io/#website",
        "url": "https://freepdfconvert.io",
        "name": "FreePDFConvert",
        "description":
          "100% free online PDF tools – Convert, Merge, Compress, Split, Unlock & Protect PDF files. No signup required.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate":
              "https://freepdfconvert.io/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
        "inLanguage": "en-US",
      },

      // ── 2. SoftwareApplication ─────────────────────────────
      {
        "@type": "SoftwareApplication",
        "@id": "https://freepdfconvert.io/#app",
        "name": "FreePDFConvert",
        "url": "https://freepdfconvert.io",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "PDF Tools",
        "operatingSystem": "Windows, macOS, Linux, Android, iOS",
        "browserRequirements": "Requires JavaScript enabled",
        "softwareVersion": "2.0",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31",   // ✅ FIXED: was 2025-12-31 (expired)
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "2341",
          "reviewCount": "2341",
        },
        "featureList": [
          "PDF to Word Converter",
          "PDF to Excel Converter",
          "PDF to JPG Converter",
          "Merge PDF Files",
          "Split PDF Files",
          "Compress PDF",
          "Unlock PDF",
          "Protect PDF",
          "Rotate PDF",
          "Sign PDF Online",
          "Word to PDF",
          "Excel to PDF",
          "JPG to PDF",
        ],
        "screenshot": "https://freepdfconvert.io/og-image.png",
      },

      // ── 3. WebApplication ──────────────────────────────────
      {
        "@type": "WebApplication",
        "@id": "https://freepdfconvert.io/#webapp",
        "name": "FreePDFConvert – Free PDF Tools Online",
        "url": "https://freepdfconvert.io",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "isAccessibleForFree": true,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
        },
      },

      // ── 4. Organization ────────────────────────────────────
      {
        "@type": "Organization",
        "@id": "https://freepdfconvert.io/#organization",
        "name": "FreePDFConvert",
        "url": "https://freepdfconvert.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://freepdfconvert.io/logo.png",
          "width": 200,
          "height": 60,
          "caption": "FreePDFConvert Logo",
        },
        "description":
          "FreePDFConvert provides 100% free online PDF tools including PDF converter, merger, compressor, splitter and more.",
        "foundingDate": "2023",
        "sameAs": [
          "https://twitter.com/freepdfconvert",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "availableLanguage": ["English"],
        },
      },

      // ── 5. FAQPage ─────────────────────────────────────────
      {
        "@type": "FAQPage",
        "@id": "https://freepdfconvert.io/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is FreePDFConvert completely free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, FreePDFConvert is 100% free. All PDF tools including converter, merger, compressor, and splitter are available at no cost with no hidden fees.",
            },
          },
          {
            "@type": "Question",
            "name": "Do I need to create an account to use FreePDFConvert?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "No signup or registration is required. You can use all PDF tools on FreePDFConvert instantly without creating an account.",
            },
          },
          {
            "@type": "Question",
            "name": "Is my PDF file safe on FreePDFConvert?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, your files are completely secure. All uploaded files are automatically deleted after processing. FreePDFConvert uses SSL encryption to protect your data.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I convert PDF to Word for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Simply go to freepdfconvert.io, select the PDF to Word tool, upload your PDF file, and click Convert. Your Word document will be ready to download in seconds.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I compress a PDF without losing quality?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, FreePDFConvert's PDF compressor reduces file size while maintaining the best possible quality. You can compress PDF files up to 90% of their original size.",
            },
          },
          {
            "@type": "Question",
            "name": "Does FreePDFConvert add a watermark to my PDF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "No, FreePDFConvert never adds watermarks to your converted or processed PDF files. All outputs are clean and watermark-free.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the best free alternative to iLovePDF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "FreePDFConvert is one of the best free alternatives to iLovePDF and SmallPDF. It offers all the same features completely free with no file size limits for most tools.",
            },
          },
          {
            "@type": "Question",
            "name": "Can I merge PDF files online for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, FreePDFConvert lets you merge multiple PDF files into one online for free. Just upload your PDFs, arrange them in the desired order, and click Merge.",
            },
          },
        ],
      },

      // ── 6. BreadcrumbList ──────────────────────────────────
      {
        "@type": "BreadcrumbList",
        "@id": "https://freepdfconvert.io/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://freepdfconvert.io",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ── Performance: Preconnect & DNS-Prefetch ────────────
            Faster load = better Core Web Vitals = better ranking  */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ✅ NEW: Preconnect to Vercel analytics for faster reporting */}
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />

        {/* ── Favicon Set ───────────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Extra SEO Meta Tags ───────────────────────────────── */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="FreePDFConvert" />
        <meta name="subject" content="Free Online PDF Tools" />
        <meta name="classification" content="Business, Technology, Utilities" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />

        {/* ── Geo Tags ──────────────────────────────────────────── */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* ✅ NEW: X-UA-Compatible for legacy browser safety */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* ✅ NEW: Content-Type explicit declaration */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* ── Google Analytics (afterInteractive = no CWV penalty) ─ */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X7HW9F8FV6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X7HW9F8FV6', {
              page_path: window.location.pathname,
              send_page_view: true,
              anonymize_ip: true,
            });
          `}
        </Script>

        {/* ── Combined JSON-LD Schemas ──────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}