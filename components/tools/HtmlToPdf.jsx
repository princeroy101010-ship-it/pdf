'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, FileText } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['html-to-pdf'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select HTML File';
const DL_TEXT = 'DOWNLOAD PDF';

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free HTML to PDF Converter Online",
  "url": "https://freepdfconvert.io/html-to-pdf",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Convert HTML files to PDF online free. No signup required. Fast, secure, and 100% free HTML to PDF converter with no watermark.",
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
      "name": "How do I convert HTML to PDF for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your HTML file to FreePDFConvert's free HTML to PDF converter. Click convert and download your PDF instantly. No signup or software installation required."
      }
    },
    {
      "@type": "Question",
      "name": "Is the HTML to PDF converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FreePDFConvert's HTML to PDF tool is 100% free with no hidden fees, no watermarks, and no account needed."
      }
    },
    {
      "@type": "Question",
      "name": "Does the converted PDF have a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert never adds watermarks to your converted PDF files. All outputs are clean and professional."
      }
    },
    {
      "@type": "Question",
      "name": "Is my HTML file safe to upload?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your file is processed securely with SSL encryption and automatically deleted after conversion. We never store or share your files."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert an HTML webpage to PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Simply save your webpage as an .html file and upload it to FreePDFConvert. The tool will convert it to a properly formatted PDF document."
      }
    }
  ]
};

const HowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert HTML to PDF Online Free",
  "description": "Convert any HTML file to PDF in 3 simple steps using FreePDFConvert.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload HTML File",
      "text": "Click 'Select HTML File' or drag and drop your .html file into the upload area."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Convert to PDF",
      "text": "The converter automatically processes your HTML file and converts it to PDF format."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download PDF",
      "text": "Click the Download PDF button to save your converted file. No signup required."
    }
  ]
};

// ─── Component ───────────────────────────────────────────────────────────────
const HtmlToPdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => {

      const seo = config.seo;

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ── SEO HEAD ──────────────────────────────────────────────────── */}
          <Head>
            {/* Primary SEO */}
            <title>Free HTML to PDF Converter Online – No Signup, No Watermark | FreePDFConvert</title>
            <meta name="description" content="Convert HTML to PDF free online in seconds. Upload your .html file and download a clean PDF instantly. No signup, no watermark, no software needed." />
            <meta name="keywords" content="html to pdf converter, html to pdf online free, convert html to pdf, html file to pdf, webpage to pdf converter, free html pdf converter, html to pdf no watermark" />

            {/* Canonical & hreflang */}
            <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
            <link rel="alternate" hreflang="en" href={`https://freepdfconvert.io/${config.slug}`} />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Free HTML to PDF Converter – No Signup, No Watermark | FreePDFConvert" />
            <meta property="og:description" content="Convert any HTML file to PDF free online. Fast, secure, and watermark-free. No account required." />
            <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Free HTML to PDF Converter Online" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Free HTML to PDF Converter Online – FreePDFConvert" />
            <meta name="twitter:description" content="Convert HTML to PDF free. No signup, no watermark. Instant download." />
            <meta name="twitter:image" content="https://freepdfconvert.io/og-image.png" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">{JSON.stringify(toolSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(HowToSchema)}</script>
          </Head>

          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full">

            {/* ── IDLE: Upload ─────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    Free <span className="text-rose-600">HTML to PDF</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Convert any HTML file to a clean, formatted PDF instantly.
                    100% free, no signup, no watermark required.
                  </p>
                </header>

                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? `border-rose-600 scale-[1.02] bg-rose-50` : 'border-gray-200 bg-white hover:border-rose-300'}`}
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg">
                        {BTN_TEXT}
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop .html file here</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload HTML file to convert to PDF"
                    />
                  </label>
                </div>

                {/* Feature Cards */}
                <section
                  aria-label="Tool features"
                  className="grid md:grid-cols-3 gap-6 mt-16 mb-4 w-full"
                >
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                    <p className="text-gray-500 text-sm">Upload your HTML file and get a perfectly formatted PDF in seconds. No waiting, no queue.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                    <p className="text-gray-500 text-sm">Your HTML files are encrypted during transfer and automatically deleted after conversion. We never store your data.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <FileText className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">No Watermark</h3>
                    <p className="text-gray-500 text-sm">Every converted PDF is completely clean. No FreePDFConvert branding, no watermarks — ever.</p>
                  </div>
                </section>

                {/* How It Works — H2 for SEO */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-6 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Convert HTML to PDF Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select HTML File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.html</code> file into the upload area above.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> The converter automatically processes your file, preserving your layout, styles, and links in the PDF output.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Download PDF" to save your file. No account, no email, no watermark required.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section — H2 + structured Q&A for featured snippets */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-0 mb-16">
                  <h2 className="text-2xl font-black text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">How do I convert HTML to PDF for free?</h3>
                      <p className="text-gray-500 text-sm">Upload your .html file using the tool above. The converter processes it instantly and gives you a download link for your PDF. No signup or software installation needed.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Is this HTML to PDF converter completely free?</h3>
                      <p className="text-gray-500 text-sm">Yes. FreePDFConvert's HTML to PDF tool is 100% free with no hidden charges, no subscription, and no file size tricks.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Will my converted PDF have a watermark?</h3>
                      <p className="text-gray-500 text-sm">No. We never add watermarks to any converted file. Your PDF will be completely clean and ready to use professionally.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Is my file safe when I upload it?</h3>
                      <p className="text-gray-500 text-sm">Yes. All file transfers use SSL encryption. Your HTML file is automatically deleted from our servers after conversion and is never shared with third parties.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Can I convert a saved webpage to PDF?</h3>
                      <p className="text-gray-500 text-sm">Yes. Save any webpage as an .html file from your browser (File → Save As), then upload it here. The tool will convert it to a properly formatted PDF.</p>
                    </div>
                  </div>
                </section>

              </article>
            )}

            {/* ── PROCESSING ───────────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg">
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="text-rose-600 animate-bounce w-12 h-12" />
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />
                    }
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-gray-400 text-sm mb-8 truncate">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div
                    className={`bg-rose-600 h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
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
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                  Conversion Complete!
                </h2>
                <p className="text-gray-400 mb-6 text-sm">Your HTML file has been converted to PDF successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-4"
                    aria-label="Download converted PDF file"
                  >
                    <Download size={28} /> {DL_TEXT}
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm"
                  >
                    Convert another file
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

export default HtmlToPdf;