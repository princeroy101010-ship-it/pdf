import React from 'react';
import { ShieldCheck, Lock, EyeOff, Trash2 } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata = {
  title: "Security – FreePDFConvert | Bank-Level File Protection",
  description:
    "FreePDFConvert uses AES-256 encryption, SSL transfer and automatic file deletion in 2 hours. Your documents are 100% private and secure. No human access ever.",
  alternates: {
    canonical: "https://freepdfconvert.io/security",
  },
  openGraph: {
    title: "Security at FreePDFConvert – Your Files Are Safe",
    description:
      "AES-256 encryption, SSL transfers, auto-deletion in 2 hours. Bank-level security for all your PDF files.",
    url: "https://freepdfconvert.io/security",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FreePDFConvert – Security" }],
    locale: "en_US",
    siteName: "FreePDFConvert",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreePDFConvert Security – AES-256 & Auto-Deletion",
    description: "Your files are encrypted, never read by humans, and deleted in 2 hours. Guaranteed.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
};

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      desc: "All files are transferred via a secure SSL connection and encrypted with AES-256 bits.",
    },
    {
      icon: Trash2,
      title: "Auto-Deletion",
      desc: "Documents are permanently deleted from our servers after 2 hours. We don't keep backups.",
    },
    {
      icon: EyeOff,
      title: "No Manual Access",
      desc: "Our system is fully automated. No human being will ever see or access your private files.",
    },
    {
      icon: ShieldCheck,
      title: "100% Secure",
      desc: "We follow strict data protection regulations to ensure your information is handled legally.",
    },
  ];

  return (
    <>
      <Header />
      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-emerald-50 text-emerald-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">
              Privacy First
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Your documents are <span className="text-rose-600">Safe with us</span>
            </h1>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto">
              We use bank-level security to ensure your data remains private and protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] border border-gray-100 bg-[#f8f9fa] hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-rose-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h2>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SecuritySection;