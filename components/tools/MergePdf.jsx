'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, X, FileText, Settings, Zap, ShieldCheck, Layers } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['merge-pdf'];

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free PDF Merger – Merge PDF Files Online",
  "url": "https://freepdfconvert.io/merge-pdf",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Merge multiple PDF files into one online free. Combine PDFs in any order instantly. No signup, no watermark, 100% secure.",
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
      "name": "How do I merge PDF files online for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your PDF files to FreePDFConvert's free PDF merger, arrange them in the order you want, click Merge All Files, and download your combined PDF instantly. No signup required."
      }
    },
    {
      "@type": "Question",
      "name": "How many PDF files can I merge at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can merge multiple PDF files at once using FreePDFConvert. Simply add all the PDFs you want to combine and click Merge."
      }
    },
    {
      "@type": "Question",
      "name": "Is the PDF merger free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert's PDF merger is completely free with no hidden fees, no subscription, and no account needed."
      }
    },
    {
      "@type": "Question",
      "name": "Will the merged PDF have a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert never adds watermarks to merged PDF files. Your combined PDF is always clean and professional."
      }
    },
    {
      "@type": "Question",
      "name": "Are my PDF files safe when uploaded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All uploads use SSL encryption and files are automatically deleted from our servers after merging. Your files are never stored or shared."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose the order of pages in the merged PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The PDFs are merged in the order you add them. You can remove and re-add files to adjust the sequence before merging."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Merge PDF Files Online Free",
  "description": "Combine multiple PDF files into one in 3 easy steps using FreePDFConvert.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload PDF Files",
      "text": "Click 'Select Files to Merge' or drag and drop your PDF files. Add as many PDFs as you need."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Merge PDFs",
      "text": "Review the file order in the queue. Remove any unwanted files, then click 'Merge All Files'."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download Merged PDF",
      "text": "Click Download Merged PDF to save your combined file. No signup required, no watermark added."
    }
  ]
};

// ─── Component ───────────────────────────────────────────────────────────────
const MergePdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        removeFile, startProcessing, reset, handleDownload }) => {

      const seo = config.seo;

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ── SEO HEAD ──────────────────────────────────────────────────── */}
          <Head>
            <title>Merge PDF Files Online Free – Combine PDFs Instantly | FreePDFConvert</title>
            <meta name="description" content="Merge multiple PDF files into one online free. Combine PDFs in any order instantly. No signup, no watermark, 100% secure. Fast and easy PDF merger." />
            <meta name="keywords" content="merge pdf, merge pdf files online free, combine pdf, pdf merger, join pdf files, merge multiple pdf, combine pdf files free, merge pdf no watermark, pdf combiner online" />

            <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
            <link rel="alternate" hreflang="en" href={`https://freepdfconvert.io/${config.slug}`} />

            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="Merge PDF Files Online Free – Combine PDFs Instantly | FreePDFConvert" />
            <meta property="og:description" content="Combine multiple PDF files into one free online. Fast, secure, watermark-free PDF merger. No account required." />
            <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Free PDF Merger – Combine PDF Files Online" />
            <meta property="og:locale" content="en_US" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Merge PDF Files Online Free – FreePDFConvert" />
            <meta name="twitter:description" content="Merge multiple PDFs into one free online. No signup, no watermark. Instant download." />
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
                    Merge <span className="text-rose-600">PDF Files</span> Online Free
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Combine multiple PDF files into one document instantly.
                    100% free, no signup, no watermark required.
                  </p>
                </header>

                {/* File Queue */}
                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl mb-6 space-y-2 animate-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center px-4 mb-2">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        Merge Queue ({fileQueue.length} files)
                      </span>
                      <button onClick={reset} className="text-xs font-bold text-rose-500 hover:underline">
                        Clear All
                      </button>
                    </div>
                    {fileQueue.map((file, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3 truncate">
                          <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
                            <FileText size={18} aria-hidden="true" />
                          </div>
                          <span className="font-bold text-gray-700 text-sm truncate">{file.name}</span>
                        </div>
                        <button
                          onClick={() => removeFile(idx)}
                          className="text-gray-300 hover:text-rose-600 transition-colors"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => startProcessing()}
                      className="w-full bg-gray-900 hover:bg-rose-600 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl transition-all mt-4 active:scale-95"
                      aria-label="Merge all selected PDF files"
                    >
                      MERGE ALL FILES
                    </button>
                  </div>
                )}

                {/* Drop Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl ${fileQueue.length > 0 ? 'min-h-[120px] md:min-h-[150px]' : 'min-h-[280px] md:min-h-[350px]'} rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 bg-rose-50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-rose-400'}`}
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg active:scale-95">
                        {fileQueue.length > 0 ? 'Add Another PDF' : 'Select Files to Merge'}
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">
                        PDF files only • Multiple allowed
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      multiple
                      aria-label="Select PDF files to merge"
                    />
                  </label>
                </div>

                {/* Feature Cards */}
                <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Merging</h3>
                    <p className="text-gray-500 text-sm">Upload your PDFs and get a combined file in seconds. No waiting, no queue — fast server-side processing.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Layers className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Merge in Any Order</h3>
                    <p className="text-gray-500 text-sm">Add PDFs one by one and control the page order. Remove files from the queue before merging if needed.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                    <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF files are automatically deleted after merging and never shared with anyone.</p>
                  </div>
                </section>

                {/* How It Works */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Merge PDF Files Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select Files to Merge" or drag and drop your PDF files into the upload area. You can add as many PDFs as needed.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> Review the file order in the merge queue. Remove any files you don't want, then click "Merge All Files".
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Download Merged PDF" to save your combined file. No account, no email, no watermark.
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
                      <h3 className="font-bold text-gray-800 mb-1">How do I merge PDF files online for free?</h3>
                      <p className="text-gray-500 text-sm">Upload your PDFs using the tool above, arrange them in the queue, and click Merge All Files. Your combined PDF will be ready to download in seconds with no signup required.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">How many PDF files can I merge at once?</h3>
                      <p className="text-gray-500 text-sm">You can add and merge multiple PDF files at once. Keep clicking "Add Another PDF" to add more files to the queue before merging.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Will the merged PDF have a watermark?</h3>
                      <p className="text-gray-500 text-sm">No. FreePDFConvert never adds watermarks to any output file. Your merged PDF will always be completely clean and professional.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Can I control the order of pages in the merged PDF?</h3>
                      <p className="text-gray-500 text-sm">Yes. PDFs are merged in the order you add them to the queue. Remove and re-add files to adjust the sequence before clicking Merge.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Are my PDF files safe when uploaded?</h3>
                      <p className="text-gray-500 text-sm">Yes. All file transfers use SSL encryption. Your PDFs are automatically deleted from our servers after merging and are never shared with any third party.</p>
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
                    {status === 'uploading'
                      ? <Upload className="text-rose-600 animate-bounce w-12 h-12" />
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Merging'}...
                </h2>
                <p className="text-gray-400 font-medium text-sm mb-8">
                  {fileQueue.length} file{fileQueue.length > 1 ? 's' : ''} in queue
                </p>
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
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
                  PDFs Merged!
                </h2>
                <p className="text-gray-400 mb-6 text-sm">
                  Your files have been combined into one PDF successfully.
                </p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4"
                    aria-label="Download merged PDF file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD MERGED PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                  >
                    Merge more files
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

export default MergePdf;