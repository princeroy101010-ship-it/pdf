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

export const metadata = {
  metadataBase: new URL("https://freepdfconvert.io"),

  title: {
    default: "FreePDFConvert – Free PDF Converter, Merger, Compressor & Editor Online",
    template: "%s | FreePDFConvert",
  },

  description:
    "FreePDFConvert: 100% free online PDF tools. Convert PDF to Word, Excel, JPG & more. Merge, split, compress, rotate, unlock & protect PDF files. No signup, no watermark. Fast & secure.",

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

  alternates: {
    canonical: "https://freepdfconvert.io",
    languages: {
      "en-US": "https://freepdfconvert.io",
    },
  },

  openGraph: {
    title: "FreePDFConvert – Free PDF Converter, Merger & Compressor Online",
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

  twitter: {
    card: "summary_large_image",
    site: "@freepdfconvert",
    creator: "@freepdfconvert",
    title: "FreePDFConvert – Free PDF Tools Online",
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

  verification: {
    google: "YOUR_SEARCH_CONSOLE_VERIFICATION_TOKEN", // 🔴 Replace with real token
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
  // ✅ layout.js mein sirf Organization schema rakha hai.
  //    SoftwareApplication → page.jsx mein hai (duplicate avoid karne ke liye).
  //    WebSite → page.jsx mein hai (canonical @id "#website" wahan define hota hai).
  //    Yeh fixes "Invalid items detected" Google Search Console error solve karta hai.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // ── 1. Organization ────────────────────────────────────
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

      // ── 2. WebApplication ──────────────────────────────────
      // ✅ WebApplication yahan rakha — SoftwareApplication SIRF page.jsx mein.
      //    Dono same page par hone se Google "duplicate/unnamed item" flag karta tha.
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

      // ── 3. BreadcrumbList ──────────────────────────────────
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
        {/* Performance: Preconnect & DNS-Prefetch */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://vitals.vercel-insights.com" />

        {/* Favicon Set */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Extra SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="copyright" content="FreePDFConvert" />
        <meta name="subject" content="Free Online PDF Tools" />
        <meta name="classification" content="Business, Technology, Utilities" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="target" content="all" />

        {/* Geo Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Google Analytics */}
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

        {/* Global JSON-LD: Organization + WebApplication only */}
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