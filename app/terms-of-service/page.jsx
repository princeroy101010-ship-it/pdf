import React from 'react';
import { Scale, ShieldAlert, FileWarning, Ban, CheckCircle2, Files } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata = {
  title: "Terms of Service – FreePDFConvert | Legal Agreement",
  description:
    "Read FreePDFConvert's Terms of Service. Learn about usage rights, prohibited content, liability limitations and service modifications before using our free PDF tools.",
  alternates: {
    canonical: "https://freepdfconvert.io/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service – FreePDFConvert",
    description:
      "Usage rights, prohibited content and liability terms for FreePDFConvert free PDF tools. Please read before using our services.",
    url: "https://freepdfconvert.io/terms-of-service",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FreePDFConvert – Terms of Service" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service – FreePDFConvert",
    description: "Read our terms before using FreePDFConvert. Free PDF tools with clear, fair usage policies.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

const TermCard = ({ icon: Icon, title, children }) => (
  <div className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all mb-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-rose-50 p-3 rounded-xl text-rose-600">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-gray-800 tracking-tight">{title}</h2>
    </div>
    <div className="text-gray-500 font-medium leading-relaxed space-y-4 text-sm md:text-base">
      {children}
    </div>
  </div>
);

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />

      <header className="bg-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            <Scale size={16} /> Legal Agreement
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Terms of <span className="text-rose-600">Service</span>
          </h1>
          <p className="text-xl text-gray-400 font-medium">
            Please read these terms carefully before using FreePDFConvert tools.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="bg-gray-900 rounded-[2.5rem] p-10 mb-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Scale size={120} />
          </div>
          <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
            <CheckCircle2 className="text-rose-500" /> Acceptance of Terms
          </h2>
          <p className="text-gray-400 font-medium leading-relaxed">
            By accessing or using FreePDFConvert, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </div>

        <TermCard icon={ShieldAlert} title="1. Usage License">
          <p>We grant you a personal, non-exclusive, non-transferable license to use FreePDFConvert for your personal or business document processing needs.</p>
          <p><strong>You may:</strong> Convert, merge, compress, and edit your files using our provided interface.</p>
          <p><strong>You may not:</strong> Attempt to reverse engineer the software, use the service for illegal purposes, or use automated bots to scrape our platform.</p>
        </TermCard>

        <TermCard icon={Ban} title="2. Prohibited Content">
          <p>You are solely responsible for the content you upload. You agree not to use FreePDFConvert to process:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Content that violates intellectual property rights.</li>
            <li>Documents containing malware, viruses, or harmful code.</li>
            <li>Material that is illegal, threatening, or defamatory.</li>
          </ul>
        </TermCard>

        <TermCard icon={FileWarning} title="3. Limitation of Liability">
          <p>FreePDFConvert provides tools "as is" without any warranties. While we strive for 100% uptime and accuracy:</p>
          <p>We are not liable for any data loss, file corruption, or business interruption that may occur during the use of our services. Always keep a backup of your original files.</p>
        </TermCard>

        <TermCard icon={Files} title="4. Service Modifications">
          <p>We reserve the right to modify or discontinue any part of the service at any time without prior notice. We may also update these terms periodically to reflect changes in our service or applicable law.</p>
        </TermCard>

        <div className="text-center py-10 border-t border-gray-200">
          <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">
            Questions? Contact us at{' '}
            <a href="mailto:legal@freepdfconvert.io" className="text-rose-600 hover:underline">
              legal@freepdfconvert.io
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;