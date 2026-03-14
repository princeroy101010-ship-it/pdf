import React from 'react';
import { Cookie, ShieldCheck, Settings, Info, MousePointer2 } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata = {
  title: "Cookie Policy – FreePDFConvert | How We Use Cookies",
  description:
    "Learn how FreePDFConvert uses cookies to improve your experience. We only use essential, preference and analytics cookies. No tracking without consent.",
  alternates: {
    canonical: "https://freepdfconvert.io/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy – FreePDFConvert",
    description:
      "Transparent information about how FreePDFConvert uses cookies to improve your experience.",
    url: "https://freepdfconvert.io/cookie-policy",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FreePDFConvert – Cookie Policy" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy – FreePDFConvert",
    description: "How FreePDFConvert uses cookies. Transparent, minimal, and privacy-first.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

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

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
      <Header />
      <header className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Cookie size={16} /> Data Tracking Info
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Cookie <span className="text-rose-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            Transparent information about how we use cookies to improve your FreePDFConvert experience.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="bg-rose-600 rounded-[2.5rem] p-10 mb-12 text-white shadow-xl shadow-rose-100 relative overflow-hidden">
          <Cookie className="absolute -right-8 -bottom-8 w-48 h-48 opacity-10 -rotate-12" />
          <h2 className="text-2xl font-black mb-4">What are Cookies?</h2>
          <p className="text-rose-50 text-lg font-medium leading-relaxed relative z-10">
            Cookies are small text files stored on your device. They help us remember your settings and ensure the website works smoothly.
          </p>
        </div>

        <CookieSection icon={ShieldCheck} title="How We Use Cookies">
          <p>At FreePDFConvert, we use cookies for very specific reasons:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function (e.g., handling file uploads).</li>
            <li><strong>Preference Cookies:</strong> To remember your choices like tool layouts.</li>
            <li><strong>Analytics:</strong> To understand how users interact with our site so we can make it faster.</li>
          </ul>
        </CookieSection>

        <CookieSection icon={Settings} title="Managing Your Cookies">
          <p>Most browsers allow you to control cookies through their settings. You can block or delete cookies, but keep in mind that some parts of FreePDFConvert might not work correctly if you disable essential cookies.</p>
          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-3 mt-4">
            <Info className="text-rose-600 shrink-0" size={20} />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-tight">
              Pro Tip: Use Incognito Mode if you want cookies to be deleted automatically after closing your browser.
            </p>
          </div>
        </CookieSection>

        <CookieSection icon={MousePointer2} title="Third-Party Cookies">
          <p>We use Google Analytics to track website performance. This service sets its own cookies to collect anonymous data about your visit. No personally identifiable information is collected.</p>
        </CookieSection>

        <div className="text-center py-12">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-4">
            By using FreePDFConvert, you consent to our use of cookies.
          </p>
          <div className="h-px w-24 bg-rose-200 mx-auto"></div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;