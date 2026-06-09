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

// ─────────────────────────────────────────────────────────────
// GLOBAL METADATA  (Next.js 14+ Metadata API)
// Title: 50-60 chars  |  Description: 150-160 chars
// ─────────────────────────────────────────────────────────────
export const metadata = {
  // ✅ FIX: metadataBase must match the exact live domain (no trailing slash)
  metadataBase: new URL("https://freepdfconvert.io"),

  title: {
    // 55 chars ✅
    default: "FreePDFConvert Free PDF Tools: Convert, Merge & More",
    template: "%s | FreePDFConvert",
  },

  // 155 chars ✅
  description:
    "FreePDFConvert: 100% free online PDF tools. Convert PDF to Word, Excel, JPG. Merge, split, compress & protect PDFs. No signup, no watermark. Fast & secure.",

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
    "compress pdf online free",
    "reduce pdf size free",
    "pdf compressor free",
    "unlock pdf online free",
    "remove pdf password free",
    "protect pdf with password free",
    "rotate pdf online free",
    "reorder pdf pages free",
    "pdf converter no signup",
    "pdf tools without registration",
    "pdf converter no watermark",
    "ilovepdf alternative free",
    "smallpdf alternative free",
    "adobe pdf alternative free",
    "best free pdf converter",
    "freepdfconvert",
    "freepdfconvert.io",
  ],

  authors: [{ name: "FreePDFConvert Team", url: "https://freepdfconvert.io" }],
  creator: "FreePDFConvert",
  publisher: "FreePDFConvert",
  category: "Technology",
  applicationName: "FreePDFConvert",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ─────────────────────────────────────────────────────────
  // ✅ FIX: Hreflang — added x-default to fix 52 hreflang
  //    conflicts + 26 incorrect hreflang links (Semrush errors)
  //    x-default is REQUIRED by Google when using hreflang
  // ─────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://freepdfconvert.io",
    languages: {
      "x-default": "https://freepdfconvert.io",
      "en":        "https://freepdfconvert.io",
      "en-US":     "https://freepdfconvert.io",
      "en-GB":     "https://freepdfconvert.io",
      "en-AU":     "https://freepdfconvert.io",
      "en-CA":     "https://freepdfconvert.io",
      "en-IN":     "https://freepdfconvert.io",
    },
  },

  openGraph: {
    // 60 chars ✅
    title: "FreePDFConvert Free PDF Converter, Merger & Compressor",
    // 155 chars ✅
    description:
      "100% free PDF tools online. Convert, merge, split, compress, unlock & protect PDF files. No signup or watermark required. Works on any device.",
    url: "https://freepdfconvert.io",
    siteName: "FreePDFConvert",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert Free PDF Tools Online | Convert, Merge, Compress PDF",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@freepdfconvert",
    creator: "@freepdfconvert",
    // 53 chars ✅
    title: "FreePDFConvert Free PDF Tools Online",
    // 78 chars ✅
    description:
      "Convert, merge, compress & edit PDF files 100% free. No signup, no watermark. Fast & secure.",
    images: ["https://freepdfconvert.io/og-image.png"],
  },

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

  // ✅ Replace YOUR_SEARCH_CONSOLE_VERIFICATION_TOKEN with your real token
  //    from Google Search Console → Settings → Ownership verification → HTML tag
  verification: {
    google: "YOUR_SEARCH_CONSOLE_VERIFICATION_TOKEN",
  },

  referrer: "origin-when-cross-origin",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  // ─────────────────────────────────────────────────────────
  // GLOBAL JSON-LD SCHEMAS (layout level)
  //
  // ✅ RULES to avoid Semrush "44 invalid structured data" error:
  //    • layout.jsx  → Organization ONLY
  //    • page.jsx    → WebSite, WebPage, SoftwareApplication, FAQPage, ItemList
  //    • NO duplicate @type on the same URL
  //    • Every @id must be unique across all schemas
  // ─────────────────────────────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://freepdfconvert.io/#organization",
    "name": "FreePDFConvert",
    "alternateName": "Free PDF Convert",
    "url": "https://freepdfconvert.io",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://freepdfconvert.io/#logo",
      "url": "https://freepdfconvert.io/logo.png",
      "width": 200,
      "height": 60,
      "caption": "FreePDFConvert Logo",
    },
    "description":
      "FreePDFConvert provides 100% free online PDF tools including PDF converter, merger, compressor, splitter, and more. No signup required.",
    "foundingDate": "2023",
    "inLanguage": "en-US",
    "sameAs": [
      "https://twitter.com/freepdfconvert",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English"],
      "url": "https://freepdfconvert.io/contact",
    },
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ── Performance: Preconnect & DNS-Prefetch ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />

        {/* ── Favicon Set ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Extra SEO Meta Tags ── */}
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="FreePDFConvert" />
        <meta name="subject" content="Free Online PDF Tools" />
        <meta name="classification" content="Business, Technology, Utilities" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />

        {/* ── Geo Tags ── */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* ── Google Analytics (afterInteractive = non-blocking) ── */}
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

        {/* ── Global JSON-LD: Organization only ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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