'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, FileText } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pptx-to-text'];

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free PowerPoint to Text Converter Online",
  "url": "https://freepdfconvert.io/pptx-to-text",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Convert PowerPoint PPTX to plain text TXT free online. Extract all slide text from PPTX presentations instantly. No signup, no watermark, 100% secure.",
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
      "name": "How do I convert PowerPoint to text for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your PPTX file to FreePDFConvert's free PowerPoint to text converter, click Convert, and download your TXT file instantly. No signup or software installation required."
      }
    },
    {
      "@type": "Question",
      "name": "Is the PPTX to text converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert's PPTX to text tool is completely free with no hidden fees, no subscription, and no account needed."
      }
    },
    {
      "@type": "Question",
      "name": "Does it extract text from all slides?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The converter extracts all text from every slide in your PowerPoint presentation and saves it into a single plain text TXT file."
      }
    },
    {
      "@type": "Question",
      "name": "Will the text file have a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert never adds watermarks to any converted file. Your text output is always clean and ready to use."
      }
    },
    {
      "@type": "Question",
      "name": "What programs can open the TXT output?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The output is a standard .txt file that opens in any text editor including Notepad, TextEdit, VS Code, Microsoft Word, Google Docs, and any word processor."
      }
    },
    {
      "@type": "Question",
      "name": "Is my PPTX file safe when uploaded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All uploads use SSL encryption and files are automatically deleted after conversion. Your data is never stored or shared."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PowerPoint PPTX to Text Online Free",
  "description": "Extract all text from a PowerPoint presentation into a plain TXT file in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload PPTX File",
      "text": "Click 'Select PPTX File' or drag and drop your PowerPoint file into the upload area."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Convert to Text",
      "text": "The converter automatically extracts all text from every slide of your presentation into a clean plain text file."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download Text File",
      "text": "Click Download Text File to save your TXT. No signup required, no watermark added."
    }
  ]
};

// ─── Component ───────────────────────────────────────────────────────────────
const PptxToText = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => {

      const targetSlug = config?.slug || 'pptx-to-text';

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ── SEO HEAD ──────────────────────────────────────────────────── */}
          <Head>
            <title>Free PowerPoint to Text Converter – PPTX to TXT Online No Signup | FreePDFConvert</title>
            <meta name="description" content="Convert PowerPoint PPTX to plain text TXT free online. Extract all slide text from presentations instantly. No signup, no watermark, 100% secure." />
            <meta name="keywords" content="pptx to text, powerpoint to text, convert pptx to txt free, extract text from pptx, powerpoint to txt online, pptx text extractor, pptx to plain text, presentation to text free" />

            <link rel="canonical" href={`https://freepdfconvert.io/${targetSlug}`} />
            <link rel="alternate" hreflang="en" href={`https://freepdfconvert.io/${targetSlug}`} />

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Free PowerPoint to Text Converter – PPTX to TXT Online No Signup | FreePDFConvert" />
            <meta property="og:description" content="Convert PowerPoint PPTX to plain text TXT free. Extract all slide text instantly. No signup, no watermark." />
            <meta property="og:url" content={`https://freepdfconvert.io/${targetSlug}`} />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Free PowerPoint to Text Converter Online" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Free PowerPoint to Text Converter – FreePDFConvert" />
            <meta name="twitter:description" content="Convert PPTX to TXT text free. No signup, no watermark. Instant download." />
            <meta name="twitter:image" content="https://freepdfconvert.io/og-image.png" />

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
          </Head>

          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full">

            {/* ── IDLE STATE ──────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    Free <span className="text-rose-600">PowerPoint to Text</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Extract all slide text from your PowerPoint PPTX and save it as a plain TXT file instantly.
                    100% free, no signup, no watermark.
                  </p>
                </header>

                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 scale-[1.02] bg-rose-50' : 'border-gray-200 bg-white hover:border-rose-300'}`}
                  role="region"
                  aria-label="PowerPoint text dropzone extraction handler"
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full focus-within:outline-none">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg transform group-hover:shadow-2xl transition-all">
                        Select PPTX File
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop PPTX file here</p>
                    </div>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload PowerPoint PPTX file to extract text"
                    />
                  </label>
                </div>

                {/* Feature Cards */}
                <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <FileText className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">All Slides Extracted</h3>
                    <p className="text-gray-500 text-sm">Every word from every slide in your PowerPoint presentation is extracted and saved into a single clean TXT file.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                    <p className="text-gray-500 text-sm">Upload your PPTX and get a ready-to-use TXT file in seconds. Opens in Notepad, VS Code, Word, Google Docs, and more.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                    <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PPTX is automatically deleted after conversion and never stored or shared with anyone.</p>
                  </div>
                </section>

                {/* How It Works */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Convert PowerPoint to Text Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select PPTX File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pptx</code> file into the upload area above.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> The converter automatically scans every slide and extracts all text content into a clean <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.txt</code> plain text file.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Download Text File" to save your TXT. No account, no email, no watermark.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                  <h2 className="text-2xl font-black text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqSchema.mainEntity.map((faq) => (
                      <details key={faq.name} className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 group transition-colors hover:border-gray-200">
                        <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center focus:outline-none">
                          {faq.name}
                          <span className="text-rose-600 font-black text-lg group-open:rotate-180 transition-transform">▼</span>
                        </summary>
                        <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                          {faq.acceptedAnswer.text}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>

              </article>
            )}

            {/* ── PROCESSING STATE ────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg animate-in fade-in scale-in duration-300">
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
                <p className="text-gray-400 text-sm mb-8 truncate max-w-xs mx-auto">{fileQueue[0]?.name}</p>
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

            {/* ── COMPLETED STATE ─────────────────────────────────────────── */}
            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Extraction Complete!</h2>
                <p className="text-gray-400 mb-6 text-sm">All slide text has been extracted to a plain text file successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 transition-all flex items-center justify-center gap-4"
                    aria-label="Download extracted plain text TXT file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD TEXT FILE
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors focus:outline-none">
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

export default PptxToText;