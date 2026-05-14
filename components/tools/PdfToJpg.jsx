'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, ImageIcon } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pdf-to-jpg'];

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free PDF to JPG Converter Online",
  "url": "https://freepdfconvert.io/pdf-to-jpg",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Convert PDF to JPG free online. Extract high-quality images from PDF pages instantly. No signup, no watermark, 100% secure.",
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
      "name": "How do I convert PDF to JPG for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your PDF file to FreePDFConvert's free PDF to JPG converter, click Convert, and download your JPG images instantly. No signup or software installation required."
      }
    },
    {
      "@type": "Question",
      "name": "Is the PDF to JPG converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert's PDF to JPG tool is completely free with no hidden fees, no subscription, and no account needed."
      }
    },
    {
      "@type": "Question",
      "name": "Will the converted JPG have a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert never adds watermarks to converted JPG images. All output files are clean and watermark-free."
      }
    },
    {
      "@type": "Question",
      "name": "Does it convert every page of the PDF to JPG?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each page of your PDF is converted into a separate high-quality JPG image file."
      }
    },
    {
      "@type": "Question",
      "name": "Is my PDF file safe when uploaded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All uploads use SSL encryption and files are automatically deleted after conversion. Your data is never stored or shared."
      }
    },
    {
      "@type": "Question",
      "name": "What is the output image quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The converter produces high-resolution JPG images from your PDF pages, preserving text sharpness and visual quality suitable for sharing or printing."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to JPG Online Free",
  "description": "Convert PDF pages to JPG images in 3 simple steps using FreePDFConvert.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload PDF File",
      "text": "Click 'Select PDF File' or drag and drop your PDF into the upload area."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Convert to JPG",
      "text": "The converter automatically renders each PDF page into a high-quality JPG image."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download JPG",
      "text": "Click Download JPG to save your images. No signup required, no watermark added."
    }
  ]
};

// ─── Component ───────────────────────────────────────────────────────────────
const PdfToJpg = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => {

      const seo = config.seo;

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ── SEO HEAD ──────────────────────────────────────────────────── */}
          <Head>
            <title>Free PDF to JPG Converter Online – PDF to Image No Signup | FreePDFConvert</title>
            <meta name="description" content="Convert PDF to JPG free online. Extract high-quality images from every PDF page instantly. No signup, no watermark, 100% secure. Best free PDF to JPG converter." />
            <meta name="keywords" content="pdf to jpg, pdf to jpg converter, convert pdf to jpg free, pdf to image online, pdf to jpeg free, pdf to jpg no watermark, pdf to jpg no signup, pdf pages to images" />

            <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
            <link rel="alternate" hreflang="en" href={`https://freepdfconvert.io/${config.slug}`} />

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Free PDF to JPG Converter Online – PDF to Image No Signup | FreePDFConvert" />
            <meta property="og:description" content="Convert PDF pages to high-quality JPG images free online. No signup, no watermark. Instant download." />
            <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Free PDF to JPG Converter Online" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Free PDF to JPG Converter Online – FreePDFConvert" />
            <meta name="twitter:description" content="Convert PDF to JPG images free. No signup, no watermark. Instant download." />
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
                    Free <span className="text-rose-600">PDF to JPG</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Convert every PDF page into a high-quality JPG image instantly.
                    100% free, no signup, no watermark required.
                  </p>
                </header>

                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 scale-[1.02] bg-rose-50' : 'border-gray-200 bg-white hover:border-rose-300'}`}
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg">
                        Select PDF File
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop PDF file here</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload PDF file to convert to JPG"
                    />
                  </label>
                </div>

                {/* Feature Cards */}
                <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ImageIcon className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">High-Quality Images</h3>
                    <p className="text-gray-500 text-sm">Each PDF page is rendered into a sharp, high-resolution JPG image — perfect for sharing, embedding, or printing.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                    <p className="text-gray-500 text-sm">Upload your PDF and get JPG images in seconds. No waiting, no queue, no software to install on your device.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                    <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF is automatically deleted after conversion and never stored or shared with anyone.</p>
                  </div>
                </section>

                {/* How It Works */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Convert PDF to JPG Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> into the upload area above.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> The converter automatically renders each page of your PDF into a high-quality <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.jpg</code> image file.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Download JPG" to save your images. No account, no email, no watermark.
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
                      <h3 className="font-bold text-gray-800 mb-1">How do I convert PDF to JPG for free?</h3>
                      <p className="text-gray-500 text-sm">Upload your PDF using the tool above and click Convert. Your JPG images will be ready to download in seconds with no signup required.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Does it convert every page to a separate JPG?</h3>
                      <p className="text-gray-500 text-sm">Yes. Each page of your PDF is converted into its own high-quality JPG image file so you can use them individually.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Will the JPG images have a watermark?</h3>
                      <p className="text-gray-500 text-sm">No. FreePDFConvert never adds watermarks to converted images. Every JPG output is always completely clean.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">What is the quality of the output JPG?</h3>
                      <p className="text-gray-500 text-sm">The converter produces high-resolution JPG images that preserve the sharpness of text and graphics from the original PDF — suitable for sharing, printing, or embedding.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Is my PDF safe when I upload it?</h3>
                      <p className="text-gray-500 text-sm">Yes. All transfers use SSL encryption. Your PDF is automatically deleted from our servers after conversion and is never shared with any third party.</p>
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
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
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
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Conversion Complete!</h2>
                <p className="text-gray-400 mb-6 text-sm">Your PDF has been converted to JPG images successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-all"
                    aria-label="Download converted JPG images"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD JPG
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm">
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

export default PdfToJpg;