import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ============================================================
// ✅ GLOBAL SEO METADATA — freepdfconvert.io
// ============================================================
export const metadata = {
  metadataBase: new URL('https://freepdfconvert.io'),

  title: {
    default: "Free PDF Converter Online – Convert, Merge & Compress PDF",
    template: "%s | FreePDFConvert",
  },

  description:
    "Free online PDF converter. Convert PDF to Word, Excel, JPG & more. Merge PDF files, compress PDF size, protect & unlock PDF. Fast, secure & 100% free – no installation needed.",

  keywords: [
    "free pdf converter",
    "pdf converter online free",
    "convert pdf to word",
    "convert pdf free",
    "pdf to word",
    "merge pdf",
    "compress pdf",
    "pdf to jpg",
    "pdf to excel",
    "word to pdf",
    "jpg to pdf",
    "split pdf",
    "unlock pdf",
    "protect pdf",
    "online pdf tools",
    "ilovepdf alternative",
    "smallpdf alternative",
    "pdf converter no sign up",
  ],

  authors: [{ name: "FreePDFConvert", url: "https://freepdfconvert.io" }],
  creator: "FreePDFConvert",
  publisher: "FreePDFConvert",

  alternates: {
    canonical: "https://freepdfconvert.io/",
  },

  openGraph: {
    title: "Free PDF Converter Online – Convert, Merge & Compress PDF",
    description:
      "The easiest way to work with PDF files. Convert PDF to Word, Excel, JPG. Merge, compress & protect PDFs. 100% free & secure – no signup required.",
    url: "https://freepdfconvert.io",
    siteName: "FreePDFConvert",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreePDFConvert – Free Online PDF Converter Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free PDF Converter Online – Convert, Merge & Compress PDF",
    description:
      "Convert PDF to Word, merge PDFs, compress & protect. Free online PDF tools – no signup needed.",
    images: ["/og-image.png"],
    creator: "@freepdfconvert",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ✅ Google Search Console verification — apna code yahan add karo
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_CODE",
  //   bing: "YOUR_BING_VERIFICATION_CODE",
  // },
};

export default function RootLayout({ children }) {

  // ── Schema 1: WebApplication ──────────────────────────────
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
    description:
      "Free online PDF converter. Convert, merge, compress, protect and edit PDF files. No installation required.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Android, iOS, Linux",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "2341",
      bestRating: "5",
      worstRating: "1",
    },
    featureList: [
      "PDF to Word Converter",
      "PDF to Excel Converter",
      "PDF to JPG Converter",
      "Merge PDF Files",
      "Compress PDF",
      "PDF to PowerPoint",
      "Word to PDF",
      "Protect PDF",
      "Unlock PDF",
      "Split PDF",
      "HTML to PDF",
      "Image to PDF",
    ],
  };

  // ── Schema 2: Organization ────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
    logo: {
      "@type": "ImageObject",
      url: "https://freepdfconvert.io/logo.png",
      width: 200,
      height: 60,
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: "English",
    },
  };

  // ── Schema 3: WebSite + SearchBox ────────────────────────
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FreePDFConvert",
    url: "https://freepdfconvert.io",
    description: "Free online PDF tools – convert, merge, compress & protect PDF files.",
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://freepdfconvert.io/{search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // ── Schema 4: FAQPage (Global — Voice Search) ─────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is FreePDFConvert free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, FreePDFConvert is 100% free. All PDF tools including PDF to Word, merge PDF, compress PDF, and more are completely free with no signup required.",
        },
      },
      {
        "@type": "Question",
        name: "How do I convert PDF to Word for free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Go to freepdfconvert.io/pdf-to-word, upload your PDF file, and click Convert. Your Word document will be ready to download in seconds.",
        },
      },
      {
        "@type": "Question",
        name: "How do I merge multiple PDF files into one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit freepdfconvert.io/merge-pdf, select or drag your PDF files, arrange them in order, and click Merge. Download your combined PDF instantly.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data safe when using FreePDFConvert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All uploaded files are encrypted via SSL and automatically deleted after processing. We never store or share your documents.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to create an account to use FreePDFConvert?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you do not need to create an account or sign up. All PDF tools are available instantly without any registration.",
        },
      },
      {
        "@type": "Question",
        name: "What file formats does FreePDFConvert support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FreePDFConvert supports PDF, Word (DOC, DOCX), Excel (XLS, XLSX), PowerPoint (PPT, PPTX), JPG, PNG, HTML and TXT file formats.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X7HW9F8FV6"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X7HW9F8FV6');
          `}
        </Script>
        {/* ✅ Schema 1 — WebApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        {/* ✅ Schema 2 — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* ✅ Schema 3 — WebSite + SearchBox */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* ✅ Schema 4 — FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}