'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, ShieldCheck, Eye, EyeOff, Lock, X, Settings, Zap, KeyRound } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['protect-pdf'];

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free PDF Password Protector Online",
  "url": "https://freepdfconvert.io/protect-pdf",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Protect PDF with password free online. Add password encryption to any PDF instantly. No signup, no watermark, 100% secure.",
  "isAccessibleForFree": true,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I protect a PDF with a password for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your PDF to FreePDFConvert's free PDF protector, enter your desired password, and click Protect PDF Now. Download your encrypted PDF instantly. No signup required."
      }
    },
    {
      "@type": "Question",
      "name": "Is the PDF password protection tool free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert's protect PDF tool is completely free with no hidden fees, no subscription, and no account needed."
      }
    },
    {
      "@type": "Question",
      "name": "What type of encryption is used to protect the PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FreePDFConvert uses strong AES encryption to password-protect your PDF, making it unreadable without the correct password."
      }
    },
    {
      "@type": "Question",
      "name": "Can anyone open my protected PDF without the password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Once your PDF is password-protected, it cannot be opened or read by anyone who does not have the correct password."
      }
    },
    {
      "@type": "Question",
      "name": "Is my PDF file safe when uploaded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All uploads use SSL encryption and files are automatically deleted after processing. Your PDF and password are never stored or shared."
      }
    },
    {
      "@type": "Question",
      "name": "Will the protected PDF work in Adobe Reader and other viewers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The password-protected PDF is fully compatible with Adobe Acrobat Reader, Foxit PDF Reader, Chrome's built-in PDF viewer, and all standard PDF applications."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Password Protect a PDF Online Free",
  "description": "Add password protection to any PDF in 3 simple steps using FreePDFConvert.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload PDF File",
      "text": "Click 'Select PDF to Protect' or drag and drop your PDF into the upload area."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Enter Password",
      "text": "Type your chosen password into the password field. Use a strong combination of letters, numbers, and symbols."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download Protected PDF",
      "text": "Click 'Protect PDF Now' and download your encrypted PDF instantly. No signup required."
    }
  ]
};

// ─── Component ───────────────────────────────────────────────────────────────
const ProtectPdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles, password, showPassword,
        setPassword, setShowPassword,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        startProcessing, reset, handleDownload }) => {

      const seo = config.seo;

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ── SEO HEAD ──────────────────────────────────────────────────── */}
          <Head>
            <title>Protect PDF with Password Free Online – PDF Encryption No Signup | FreePDFConvert</title>
            <meta name="description" content="Protect PDF with password free online. Add strong AES encryption to any PDF instantly. No signup, no watermark, 100% secure. Best free PDF password protector." />
            <meta name="keywords" content="protect pdf, protect pdf with password, pdf password protection, encrypt pdf online free, password protect pdf, lock pdf online, add password to pdf, secure pdf online free" />

            <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
            <link rel="alternate" hreflang="en" href={`https://freepdfconvert.io/${config.slug}`} />

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Protect PDF with Password Free Online – PDF Encryption No Signup | FreePDFConvert" />
            <meta property="og:description" content="Add password protection to any PDF free online. Strong AES encryption. No signup, no watermark." />
            <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Protect PDF with Password Online Free" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Protect PDF with Password Free Online – FreePDFConvert" />
            <meta name="twitter:description" content="Add password encryption to any PDF free. No signup, no watermark. Instant download." />
            <meta name="twitter:image" content="https://freepdfconvert.io/og-image.png" />

            <script type="application/ld+json">{JSON.stringify(toolSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
          </Head>

          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full">

            {/* ── IDLE ─────────────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    Protect <span className="text-rose-600">PDF with Password</span> Free Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Add strong password encryption to any PDF instantly.
                    100% free, no signup, no watermark required.
                  </p>
                </header>

                {/* Password UI — shown after file selected */}
                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl animate-in slide-in-from-top-4 space-y-4 mb-8">
                    <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3 truncate">
                        <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
                          <Lock size={18} aria-hidden="true" />
                        </div>
                        <span className="font-bold text-gray-700 text-sm truncate">{fileQueue[0].name}</span>
                      </div>
                      <button
                        onClick={reset}
                        className="text-gray-300 hover:text-rose-600 transition-colors"
                        aria-label="Remove selected file"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="p-5 md:p-8 bg-white rounded-[2.5rem] border-2 border-rose-100 shadow-2xl space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">Set PDF Password</h3>
                        <p className="text-sm text-gray-400 font-medium">Encrypt your document with a strong password</p>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter secret password..."
                          className="w-full px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-rose-500 focus:bg-white transition-all outline-none font-bold text-base text-gray-700 placeholder:text-gray-300"
                          aria-label="Enter password to protect PDF"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-600"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                      </div>
                      <button
                        onClick={() => startProcessing()}
                        disabled={!password}
                        className="w-full bg-rose-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl shadow-rose-100 hover:bg-rose-700 transition-all active:scale-95 flex items-center justify-center gap-3"
                        aria-label="Encrypt and protect PDF with password"
                      >
                        <ShieldCheck size={24} aria-hidden="true" /> PROTECT PDF NOW
                      </button>
                    </div>
                  </div>
                )}

                {/* Upload Zone */}
                {fileQueue.length === 0 && (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                      ${dragActive ? 'border-rose-600 bg-rose-50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-rose-400'}`}
                  >
                    <label className="group cursor-pointer flex flex-col items-center w-full">
                      <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                        <Plus size={32} strokeWidth={3} />
                      </div>
                      <div className="text-center space-y-4">
                        <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg active:scale-95">
                          Select PDF to Protect
                        </span>
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">or drop PDF file here</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept={acceptedFiles}
                        aria-label="Upload PDF file to protect with password"
                      />
                    </label>
                  </div>
                )}

                {/* Feature Cards */}
                <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <KeyRound className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Strong AES Encryption</h3>
                    <p className="text-gray-500 text-sm">Your PDF is protected with strong AES encryption. Without the correct password, the document cannot be opened or read by anyone.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Protection</h3>
                    <p className="text-gray-500 text-sm">Upload your PDF, enter a password, and download your encrypted file in seconds. Works with any PDF regardless of size.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Fully Private</h3>
                    <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF and your password are never stored on our servers or shared with any third party.</p>
                  </div>
                </section>

                {/* How It Works */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Password Protect a PDF Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF to Protect" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> file into the upload area above.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> Enter your chosen password in the password field. Use a strong mix of letters, numbers, and symbols for maximum security.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Protect PDF Now" and download your encrypted PDF. No account, no email, no watermark.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                  <h2 className="text-2xl font-black text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">How do I protect a PDF with a password for free?</h3>
                      <p className="text-gray-500 text-sm">Upload your PDF above, enter your password, and click Protect PDF Now. Your encrypted PDF will be ready to download in seconds with no signup required.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">What type of encryption is used?</h3>
                      <p className="text-gray-500 text-sm">FreePDFConvert uses strong AES encryption to lock your PDF. This is the same encryption standard used by banks and governments to protect sensitive data.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Can someone open the PDF without the password?</h3>
                      <p className="text-gray-500 text-sm">No. Once your PDF is password-protected, it cannot be opened or read by anyone who does not have the exact password you set.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Is the protected PDF compatible with Adobe Reader?</h3>
                      <p className="text-gray-500 text-sm">Yes. The protected PDF works with Adobe Acrobat Reader, Foxit PDF, Chrome's built-in viewer, and all standard PDF applications. Users will be prompted to enter the password when opening.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Is my PDF and password safe?</h3>
                      <p className="text-gray-500 text-sm">Yes. All transfers use SSL encryption. Your PDF file and the password you enter are never stored on our servers and are never shared with any third party.</p>
                    </div>
                  </div>
                </section>

              </article>
            )}

            {/* ── PROCESSING ───────────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300">
                <div className="relative mb-8 md:mb-12 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    <ShieldCheck className="text-rose-600 w-12 h-12 animate-pulse" />
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">Encrypting...</h2>
                <p className="text-gray-400 font-medium text-sm mb-8 truncate px-4">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
                    role="progressbar"
                    aria-valuenow={status === 'processing' ? 92 : 45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            )}

            {/* ── COMPLETED ────────────────────────────────────────────────── */}
            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">PDF Protected!</h2>
                <p className="text-gray-400 mb-6 text-sm">Your PDF has been encrypted and password-protected successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4"
                    aria-label="Download password-protected PDF file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD PROTECTED PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                  >
                    Protect another file
                  </button>
                </div>
              </div>
            )}

          </main>

          <div className="mt-10 md:mt-20">
            <Footer />
          </div>
        </div>
      );
    }}
  </BaseToolLogic>
);

export default ProtectPdf;