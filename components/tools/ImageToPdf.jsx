'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, X, ImageIcon, Settings, Zap, ShieldCheck, Layers } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['image-to-pdf'];

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Image to PDF Converter Online",
  "url": "https://freepdfconvert.io/image-to-pdf",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Convert JPG, PNG and other images to PDF free online. Combine multiple images into one PDF. No signup, no watermark.",
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
      "name": "How do I convert an image to PDF for free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your JPG or PNG image to FreePDFConvert's free Image to PDF tool. Click Convert and download your PDF instantly. No signup or software needed."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine multiple images into one PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert lets you upload multiple JPG or PNG images and merge them into a single PDF file. Just select all images and click Convert to PDF."
      }
    },
    {
      "@type": "Question",
      "name": "What image formats are supported?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FreePDFConvert supports JPG, JPEG, and PNG image formats for conversion to PDF."
      }
    },
    {
      "@type": "Question",
      "name": "Will my PDF have a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FreePDFConvert never adds watermarks to converted PDF files. All output is clean and professional."
      }
    },
    {
      "@type": "Question",
      "name": "Is the image to PDF converter free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The tool is 100% free with no hidden fees, no signup required, and no file size tricks."
      }
    },
    {
      "@type": "Question",
      "name": "Are my images safe when uploaded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All files are transferred using SSL encryption and are automatically deleted from our servers after conversion. Your images are never shared or stored."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Image to PDF Online Free",
  "description": "Convert JPG or PNG images to PDF in 3 easy steps using FreePDFConvert.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Upload Images",
      "text": "Click 'Select Images' or drag and drop your JPG or PNG files. You can select multiple images at once."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Convert to PDF",
      "text": "Click 'Convert to PDF'. The tool combines all selected images into a single PDF document."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Download PDF",
      "text": "Click Download PDF to save your file. No signup required, no watermark added."
    }
  ]
};

// ─── Component ───────────────────────────────────────────────────────────────
const ImageToPdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        removeFile, startProcessing, reset, handleDownload }) => {

      const seo = config.seo;

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ── SEO HEAD ──────────────────────────────────────────────────── */}
          <Head>
            {/* Primary SEO */}
            <title>Free Image to PDF Converter – JPG & PNG to PDF Online | FreePDFConvert</title>
            <meta name="description" content="Convert JPG, PNG images to PDF free online. Combine multiple images into one PDF instantly. No signup, no watermark. Fast and secure image to PDF converter." />
            <meta name="keywords" content="image to pdf, jpg to pdf, png to pdf, convert image to pdf free, jpg to pdf online, multiple images to pdf, image to pdf converter, jpg png to pdf no watermark" />

            {/* Canonical & hreflang */}
            <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
            <link rel="alternate" hreflang="en" href={`https://freepdfconvert.io/${config.slug}`} />

            {/* Robots */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Free Image to PDF Converter – JPG & PNG to PDF Online | FreePDFConvert" />
            <meta property="og:description" content="Convert JPG or PNG images to PDF free. Combine multiple images into one PDF. No signup, no watermark." />
            <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Free Image to PDF Converter – JPG PNG to PDF" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Free Image to PDF Converter – JPG & PNG to PDF Online" />
            <meta name="twitter:description" content="Convert JPG, PNG to PDF free online. Multiple images into one PDF. No signup." />
            <meta name="twitter:image" content="https://freepdfconvert.io/og-image.png" />

            {/* JSON-LD Structured Data */}
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
                    Free <span className="text-rose-600">Image to PDF</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Convert JPG and PNG images to PDF instantly. Combine multiple images into one PDF file.
                    100% free, no signup, no watermark.
                  </p>
                </header>

                {/* Image Queue */}
                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl mb-6 space-y-2 animate-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center px-4 mb-2">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">
                        Images Selected ({fileQueue.length})
                      </span>
                      <button onClick={reset} className="text-xs font-bold text-rose-500 hover:underline">
                        Clear All
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {fileQueue.map((file, idx) => (
                        <div key={idx} className="relative group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview of ${file.name}`}
                            className="w-full h-32 object-cover"
                          />
                          <div className="p-2">
                            <p className="text-xs font-bold text-gray-600 truncate">{file.name}</p>
                          </div>
                          <button
                            onClick={() => removeFile(idx)}
                            className="absolute top-2 right-2 bg-white/90 hover:bg-rose-500 hover:text-white text-gray-500 rounded-full p-1 transition-all shadow-sm"
                            aria-label={`Remove ${file.name}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => startProcessing()}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl shadow-rose-100 transition-all active:scale-95 flex items-center justify-center gap-3"
                      aria-label="Convert selected images to PDF"
                    >
                      <ImageIcon size={22} aria-hidden="true" /> CONVERT TO PDF
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
                        {fileQueue.length > 0 ? 'Add More Images' : 'Select Images'}
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">
                        JPG, PNG supported • Multiple images allowed
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      multiple
                      aria-label="Select JPG or PNG images to convert to PDF"
                    />
                  </label>
                </div>

                {/* Feature Cards */}
                <section
                  aria-label="Tool features"
                  className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full"
                >
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                    <p className="text-gray-500 text-sm">
                      Upload your JPG or PNG files and get a properly formatted PDF in seconds. No waiting, no queue.
                    </p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Layers className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Multiple Images → One PDF</h3>
                    <p className="text-gray-500 text-sm">
                      Select multiple JPG or PNG images at once and combine them all into a single PDF document automatically.
                    </p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Secure & Watermark-Free</h3>
                    <p className="text-gray-500 text-sm">
                      All files use SSL encryption during transfer and are deleted after conversion. Zero watermarks on output.
                    </p>
                  </div>
                </section>

                {/* How It Works — H2 for SEO */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Convert Image to PDF Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select Images" or drag and drop your JPG or PNG files into the upload area. You can select multiple images at once.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> Review your selected images in the preview grid. Remove any you don't need. Then click "Convert to PDF".
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Download PDF" to save your file instantly. No account, no email, no watermark.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section — H2 + Q&A for featured snippets */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                  <h2 className="text-2xl font-black text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">How do I convert a JPG image to PDF for free?</h3>
                      <p className="text-gray-500 text-sm">Click "Select Images" above, choose your JPG file, and click Convert to PDF. Your PDF will be ready to download in seconds with no signup required.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Can I combine multiple images into one PDF?</h3>
                      <p className="text-gray-500 text-sm">Yes. Select multiple JPG or PNG images at once — the tool automatically merges them into a single PDF in the order you selected them.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">What image formats are supported?</h3>
                      <p className="text-gray-500 text-sm">Currently JPG, JPEG, and PNG formats are supported. These cover the most common image types used for document scanning and photography.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Will the converted PDF have a watermark?</h3>
                      <p className="text-gray-500 text-sm">No. FreePDFConvert never adds watermarks to any output file. Your PDF is always clean and professional.</p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Are my images safe when I upload them?</h3>
                      <p className="text-gray-500 text-sm">Yes. All transfers use SSL encryption and your images are automatically deleted from our servers after conversion. We never store or share your files.</p>
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
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-gray-400 font-medium text-sm mb-8">
                  {fileQueue.length} image{fileQueue.length > 1 ? 's' : ''} → PDF
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
                  Conversion Complete!
                </h2>
                <p className="text-gray-400 mb-6 text-sm">Your images have been converted to PDF successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4"
                    aria-label="Download converted PDF file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                  >
                    Convert more images
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

export default ImageToPdf;