import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- ADVANCED SEO METADATA ---
export const metadata = {
  metadataBase: new URL('https://yourwebsite.com'), // Apni domain yahan likho
  title: {
    default: "Best Free PDF Tools - Merge, Convert & Compress PDF Online",
    template: "%s | YourBrandName",
  },
  description: "Free online PDF tools for PDF lovers. Merge, split, compress, convert, rotate, and unlock PDFs in seconds. 100% Secure & Fast.",
  keywords: [
    "merge pdf", "pdf converter", "compress pdf size", "pdf to word", 
    "split pdf online", "edit pdf free", "i love pdf alternative"
  ],
  authors: [{ name: "Your Brand Name" }],
  creator: "Your Brand Name",
  publisher: "Your Brand Name",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "All-in-One PDF Power Tools | Free & Fast",
    description: "The easiest way to manage your PDF files. Fast, secure, and works in your browser.",
    url: 'https://yourwebsite.com',
    siteName: 'YourBrandName',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free PDF Tools Online',
    description: 'Merge, Convert, and Compress PDFs easily.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
};

export default function RootLayout({ children }) {
  // --- GOOGLE RICH SNIPPET (Schema.org) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "YourBrandName PDF Tools",
    "description": "Premium PDF tools for merging, converting and compressing files.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1540"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}