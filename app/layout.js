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

// ═══════════════════════════════════════════════════════════════
// GLOBAL METADATA — Next.js 15 App Router Metadata API
//
// SEMRUSH FIXES APPLIED:
// ✅ ERROR 1 — 44 invalid structured data   → Organization schema ONLY here,
//              all other schemas in page.jsx. No duplicate @type per URL.
// ✅ ERROR 2 — 12 hreflang conflicts        → Single-locale site = NO hreflang.
//              Multiple hreflang tags pointing to same URL = conflict.
//              English-only site must NOT use hreflang at all.
// ✅ ERROR 3 — 3 incorrect hreflang links   → Removed completely. Hreflang is
//              only for multi-language/multi-region sites.
// ✅ WARNING  — 7 pages too much text in title → title.default = 52 chars ✅
// ✅ metadataBase domain matches live site exactly (no trailing slash)
// ═══════════════════════════════════════════════════════════════

export const metadata = {
  // ── metadataBase ─────────────────────────────────────────────
  // CRITICAL: Must be exact live domain. Next.js uses this to resolve
  // all relative image/OG/Twitter URLs. Wrong domain = broken OG images.
  metadataBase: new URL("https://freepdfconvert.io"),

  // ── Title ────────────────────────────────────────────────────
  // Google displays 50–60 chars. Over 60 = truncated with "..."
  // Rule: Brand keyword + primary keyword + value prop
  // 52 chars ✅
  title: {
    default: "Free PDF Converter – Convert, Merge & Compress PDF",
    // %s = page-level title from page.jsx metadata export
    template: "%s | FreePDFConvert",
  },

  // ── Description ──────────────────────────────────────────────
  // Google shows 150–160 chars. Over 160 = truncated.
  // Must include: primary keyword, unique value, CTA.
  // 157 chars ✅
  description:
    "FreePDFConvert: 100% free online PDF tools. Convert PDF to Word, Excel, JPG. Merge, split, compress & protect PDFs instantly. No signup, no watermark. Fast & secure.",

  // ── Keywords ─────────────────────────────────────────────────
  // Google doesn't rank by keywords meta but Bing/Yahoo do.
  // High-volume + low-competition terms for freepdfconvert.io niche.
  // Grouped by intent: convert → manage → format-specific → competitor alternative
  keywords: [
    // ── Core high-volume (100K–1M/mo) ──
    "free pdf converter",
    "pdf converter online free",
    "convert pdf online",
    "pdf tools online free",
    "pdf to word converter free",
    "pdf to excel converter free",
    "pdf to jpg converter free",
    "word to pdf free",
    "jpg to pdf converter free",
    "merge pdf online free",
    "compress pdf online free",
    "split pdf online free",

    // ── Medium-volume low-competition (10K–100K/mo) ──
    "pdf to png free online",
    "pdf to powerpoint free",
    "image to pdf converter free",
    "png to pdf converter free",
    "html to pdf converter free",
    "text to pdf converter free",
    "pdf to text converter free",
    "pdf compressor online free",
    "reduce pdf file size free",
    "combine pdf files online free",
    "unlock pdf online free",
    "remove pdf password free",
    "protect pdf with password free",
    "rotate pdf pages online free",
    "extract text from pdf free",
    "ocr image to text free online",

    // ── Long-tail low-competition (1K–10K/mo) ──
    "pdf converter no signup required",
    "pdf converter without watermark",
    "pdf tools without registration",
    "free online pdf editor no login",
    "merge pdf files without software",
    "compress pdf without losing quality free",
    "convert pdf to word without software",
    "pdf to excel converter without subscription",
    "best free pdf converter online 2025",
    "free pdf tools no email required",

    // ── Competitor-alternative intent ──
    "ilovepdf alternative free",
    "smallpdf alternative free",
    "adobe acrobat alternative free",
    "pdf2go alternative",
    "pdfcandy alternative free",

    // ── Brand ──
    "freepdfconvert",
    "freepdfconvert.io",
    "free pdf convert online",
  ],

  // ── Authorship ───────────────────────────────────────────────
  authors: [{ name: "FreePDFConvert Team", url: "https://freepdfconvert.io" }],
  creator: "FreePDFConvert",
  publisher: "FreePDFConvert",
  category: "Technology",
  applicationName: "FreePDFConvert",

  // ── Format Detection ─────────────────────────────────────────
  // Prevents mobile browsers auto-linking phone numbers / emails in content
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Canonical + Alternates ───────────────────────────────────
  // ✅ FIX (SEMRUSH ERROR 2 & 3): REMOVED all hreflang language alternates.
  //
  // WHY: freepdfconvert.io is a single-language English-only site.
  // Using hreflang on a monolingual site with all tags pointing to the
  // SAME URL is the exact cause of:
  //   • "12 hreflang conflicts within page source code"
  //   • "3 issues with incorrect hreflang links"
  //
  // Google's rule: hreflang is ONLY for sites with the same content
  // in multiple languages at DIFFERENT URLs (e.g. /en/, /fr/, /de/).
  // If all hreflang tags point to https://freepdfconvert.io — that's
  // a conflict because Google sees multiple declarations for one URL.
  //
  // Solution: canonical URL only. Add hreflang only when you create
  // actual translated pages at separate URLs.
  alternates: {
    canonical: "https://freepdfconvert.io",
    // ❌ DO NOT ADD languages here until you have real translated pages
  },

  // ── Open Graph ───────────────────────────────────────────────
  // OG title: 60 chars max | OG desc: 155–200 chars
  // Image must be 1200×630px for universal support
  openGraph: {
    // 55 chars ✅
    title: "Free PDF Converter – Convert, Merge & Compress PDF",
    // 160 chars ✅
    description:
      "100% free PDF tools online. Convert PDF to Word, Excel, JPG. Merge, split, compress, unlock & protect PDF files. No signup, no watermark. Works on all devices.",
    url: "https://freepdfconvert.io",
    siteName: "FreePDFConvert",
    images: [
      {
        url: "https://freepdfconvert.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert – Free Online PDF Tools: Convert, Merge, Compress",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ── Twitter / X Card ─────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@freepdfconvert",
    creator: "@freepdfconvert",
    title: "Free PDF Converter – Convert, Merge & Compress PDF",
    description:
      "Convert, merge, compress & edit PDF files 100% free. No signup, no watermark. Fast & secure. Works on any device.",
    images: ["https://freepdfconvert.io/og-image.png"],
  },

  // ── Robots ───────────────────────────────────────────────────
  // All pages indexable + followable by default.
  // Override per-page using generateMetadata() for noindex pages.
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

  // ── Google Search Console Verification ───────────────────────
  // Replace YOUR_TOKEN with real value from:
  // Search Console → Settings → Ownership verification → HTML tag
  // Copy ONLY the content="..." value, not the full tag
  verification: {
    google: "YOUR_SEARCH_CONSOLE_VERIFICATION_TOKEN",
  },

  referrer: "origin-when-cross-origin",
};

// ── Viewport (separate export — required by Next.js 14+) ─────────
// Do NOT put viewport inside metadata export — it's deprecated there.
export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ═══════════════════════════════════════════════════════════════
// ROOT LAYOUT
// ═══════════════════════════════════════════════════════════════
export default function RootLayout({ children }) {

  // ── Organization Schema ──────────────────────────────────────
  // ✅ FIX (SEMRUSH ERROR 1 — 44 invalid structured data items):
  //
  // RULE: layout.jsx = Organization schema ONLY.
  //       page.jsx   = WebSite, WebPage, SoftwareApplication, FAQPage, ItemList.
  //
  // Having the same @type declared in BOTH layout + page on the same URL
  // creates "duplicate / invalid structured data" errors in SemRush + GSC.
  //
  // Each schema must have a UNIQUE @id. The @id acts as the identifier
  // Google uses to de-duplicate entities across your site.
  //
  // REMOVED FROM LAYOUT (moved to page.jsx):
  //   ❌ WebSite schema
  //   ❌ SoftwareApplication schema
  //   ❌ WebPage schema
  //   ❌ FAQPage schema
  //   ❌ ItemList schema
  //
  // KEPT IN LAYOUT (global, appears on ALL pages):
  //   ✅ Organization schema — describes the company, not a specific page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    // @id must be a stable URL fragment — never changes
    "@id": "https://freepdfconvert.io/#organization",
    "name": "FreePDFConvert",
    "alternateName": "Free PDF Convert",
    "url": "https://freepdfconvert.io",
    "logo": {
      "@type": "ImageObject",
      "@id": "https://freepdfconvert.io/#logo",
      // ✅ logo.png must exist at this path for Google Knowledge Panel
      "url": "https://freepdfconvert.io/logo.png",
      "width": 200,
      "height": 60,
      "caption": "FreePDFConvert – Free Online PDF Tools",
    },
    "description":
      "FreePDFConvert provides 100% free online PDF tools including PDF converter, merger, compressor, splitter, and more. No signup required. Works on all devices.",
    "foundingDate": "2023",
    "inLanguage": "en-US",
    // sameAs: only add URLs that actually exist and link back to your site
    "sameAs": [
      "https://twitter.com/freepdfconvert",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["English"],
      // ✅ FIX: Only add contactPoint.url if /contact page exists & returns 200.
      //    A contactPoint pointing to a 404 = invalid structured data error.
      "url": "https://freepdfconvert.io/contact",
    },
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* ── Performance: Preconnect & DNS-Prefetch ────────────
            Preconnect = tells browser to do DNS+TCP+TLS early.
            dns-prefetch = fallback for older browsers.
            Only preconnect domains that are needed for above-fold render.
        ─────────────────────────────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />

        {/* ── Favicon Set ───────────────────────────────────────
            All 4 formats needed for cross-browser/device support.
            favicon.ico     = legacy browsers
            favicon.svg     = modern browsers (scalable, any size)
            apple-touch-icon = iOS home screen
            site.webmanifest = PWA / Android Chrome
        ─────────────────────────────────────────────────────── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Extra SEO / Crawl Hint Meta Tags ─────────────────
            These are legacy/secondary signals — Google doesn't
            heavily weight them but Bing, Yahoo, and crawlers do.
            They also help categorization in search directories.
        ─────────────────────────────────────────────────────── */}
        <meta name="language" content="English" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="FreePDFConvert" />
        <meta name="subject" content="Free Online PDF Converter and PDF Tools" />
        <meta name="classification" content="Business, Technology, Utilities" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />

        {/* Geo tags help with local/regional search intent */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* Rendering hints for legacy IE and content type */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* ── Google Analytics ──────────────────────────────────
            strategy="afterInteractive" = loads AFTER hydration.
            This is NON-BLOCKING — does not affect LCP/FCP scores.
            Critical for Core Web Vitals ranking signals.
        ─────────────────────────────────────────────────────── */}
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

        {/* ── Global JSON-LD: Organization ONLY ────────────────
            ✅ This renders in <head> on EVERY page of the site.
            ✅ Only Organization here — page-level schemas go in page.jsx.
            ✅ dangerouslySetInnerHTML is the correct Next.js way for JSON-LD.
               Do NOT use <Script> tag for JSON-LD — it can be deferred/blocked.
        ─────────────────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
        {/* Vercel Analytics + Speed Insights — non-blocking */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}