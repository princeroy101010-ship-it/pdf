'use client';

// ============================================================
// ✅ SEO NOTE:
// Title, meta description, canonical, open graph, and robots 
// are handled asynchronously inside app/[slug]/page.jsx using 
// generateMetadata(). Do not declare <title> or <meta> here.
// ============================================================

import React from 'react';
import Script from 'next/script';
import { Download, CheckCircle2, Upload, Loader2, Plus, X, ImageIcon, Settings, Zap, ShieldCheck, Layers } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['image-to-pdf'];

const FAQ_ITEMS = [
  {
    q: "How do I convert an image to PDF for free?",
    a: "Upload your JPG or PNG image to FreePDFConvert's free Image to PDF tool. Click Convert and download your PDF instantly. No signup or software needed."
  },
  {
    q: "Can I combine multiple images into one PDF?",
    a: "Yes. FreePDFConvert lets you upload multiple JPG or PNG images and merge them into a single PDF file. Just select all images and click Convert to PDF."
  },
  {
    q: "What image formats are supported?",
    a: "FreePDFConvert supports JPG, JPEG, and PNG image formats for conversion to PDF."
  },
  {
    q: "Will my PDF have a watermark?",
    a: "No. FreePDFConvert never adds watermarks to converted PDF files. All output is clean and professional."
  },
  {
    q: "Is the image to PDF converter free?",
    a: "Yes. The tool is 100% free with no hidden fees, no signup required, and no file size tricks."
  },
  {
    q: "Are my images safe when uploaded?",
    a: "Yes. All files are transferred using SSL encryption and are automatically deleted from our servers after conversion. Your images are never shared or stored."
  }
];

// ─── SEO: JSON-LD Graph Schema ───────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://freepdfconvert.io/image-to-pdf",
      "url": "https://freepdfconvert.io/image-to-pdf",
      "name": "Free Image to PDF Converter – JPG & PNG to PDF Online",
      "description": "Convert JPG, PNG images to PDF free online. Combine multiple images into one PDF instantly. No signup, no watermark. Fast and secure image to PDF converter.",
      "isPartOf": { "@id": "https://freepdfconvert.io/#website" },
      "breadcrumb": { "@id": "https://freepdfconvert.io/image-to-pdf/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://freepdfconvert.io/image-to-pdf/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freepdfconvert.io/" },
        { "@type": "ListItem", "position": 2, "name": "Image to PDF Converter", "item": "https://freepdfconvert.io/image-to-pdf" }
      ]
    },
    {
      "@type": "WebApplication",
      "@id": "https://freepdfconvert.io/image-to-pdf/#software",
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
    },
    {
      "@type": "HowTo",
      "@id": "https://freepdfconvert.io/image-to-pdf/#howto",
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
    },
    {
      "@type": "FAQPage",
      "@id": "https://freepdfconvert.io/image-to-pdf/#faq",
      "mainEntity": FAQ_ITEMS.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    }
  ]
};

const ImageToPdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        removeFile, startProcessing, reset, handleDownload }) => {

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
          <Script
            id="image-to-pdf-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Header />

          <main 
            id="main-content"
            className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full"
            role="main"
            aria-label="Image to PDF workspace utilities"
          >

            {/* ── IDLE ─────────────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                    Free <span className="text-rose-600">Image to PDF</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Convert JPG and PNG images to PDF instantly. Combine multiple images into one PDF file.
                    100% free, no signup, no watermark.
                  </p>
                </header>

                {/* Image Queue */}
                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl mb-6 space-y-2 animate-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center px-4 mb-2">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-widest">
                        Images Selected ({fileQueue.length})
                      </span>
                      <button onClick={reset} className="text-xs font-bold text-rose-500 hover:underline">
                        Clear All
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {fileQueue.map((file, idx) => (
                        <div key={idx} className="relative group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview asset sequence ${idx + 1}`}
                            className="w-full h-32 object-cover select-none pointer-events-none"
                          />
                          <div className="p-2 bg-white">
                            <p className="text-xs font-bold text-slate-600 truncate">{file.name}</p>
                          </div>
                          <button
                            onClick={() => removeFile(idx)}
                            className="absolute top-2 right-2 bg-white/90 hover:bg-rose-500 hover:text-white text-slate-500 rounded-full p-1.5 transition-all shadow-sm"
                            aria-label={`Remove asset ${file.name}`}
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => startProcessing()}
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl shadow-rose-100 transition-all active:scale-95 flex items-center justify-center gap-3"
                      aria-label="Process and compile chosen queue to PDF"
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
                    ${dragActive ? 'border-rose-600 bg-rose-50 scale-[1.02]' : 'border-slate-200 bg-white hover:border-rose-400'}`}
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full select-none">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-black shadow-lg transition-colors">
                        {fileQueue.length > 0 ? 'Add More Images' : 'Select Images'}
                      </span>
                      <p className="text-slate-400 font-black text-xs uppercase tracking-widest block">
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
                  aria-label="Service performance parameters"
                  className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full"
                >
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-black text-slate-900 text-base mb-2">Instant Conversion</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Upload your JPG or PNG files and get a properly formatted PDF in seconds. No waiting, no queue.
                    </p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <Layers className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-black text-slate-900 text-base mb-2">Multiple Images → One PDF</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Select multiple JPG or PNG images at once and combine them all into a single PDF document automatically.
                    </p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-black text-slate-900 text-base mb-2">Secure & Watermark-Free</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      All files use SSL encryption during transfer and are deleted after conversion. Zero watermarks on output.
                    </p>
                  </div>
                </section>

                {/* How It Works — H2 for SEO */}
                <section aria-labelledby="steps-section-heading" className="w-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 id="steps-section-heading" className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-wide">
                    How to Convert Image to PDF Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-slate-500 text-sm font-medium leading-relaxed" role="list">
                    <li>
                      <strong className="text-slate-900">Step 1 — Choose Files:</strong> Click "Select Images" or drag and drop your JPG or PNG files into the upload area. You can select multiple images at once.
                    </li>
                    <li>
                      <strong className="text-slate-900">Step 2 — Verify Layout:</strong> Review your selected images in the preview grid. Remove any you don't need. Then click "Convert to PDF".
                    </li>
                    <li>
                      <strong className="text-slate-900">Step 3 — Instant Save:</strong> Click "Download PDF" to save your file instantly. No account, no email, no watermark.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section — H2 + Q&A for featured snippets */}
                <section aria-labelledby="faq-section-heading" className="w-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mb-16">
                  <h2 id="faq-section-heading" className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-wide">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {FAQ_ITEMS.map((item, idx) => (
                      <div key={idx} className="border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                        <h3 className="font-black text-slate-800 text-base mb-2">{item.q}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

              </article>
            )}

            {/* ── PROCESSING ───────────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div 
                className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border border-slate-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300"
                role="status"
                aria-live="polite"
              >
                <div className="relative mb-8 md:mb-12 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="text-rose-600 animate-bounce w-12 h-12" />
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-wide">
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-slate-400 font-black text-xs mb-8">
                  {fileQueue.length} image{fileQueue.length > 1 ? 's' : ''} → PDF
                </p>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`bg-rose-600 h-full transition-all duration-700 rounded-full ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
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
              <div className="text-center w-full max-w-2xl aria-live='assertive' animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                  Conversion Complete!
                </h2>
                <p className="text-slate-400 mb-6 text-sm font-semibold">Your images have been converted to PDF successfully.</p>
                <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-5 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 flex items-center justify-center gap-4"
                    aria-label="Download generated structural PDF tool compound document"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-slate-400 hover:text-rose-600 font-bold text-sm transition-colors duration-300"
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