'use client';

// ============================================================================
// ⚠️ SEO PRODUCTION NOTICE:
// Legacy HTML meta tags (<title>, <meta>, <link>) have been stripped down.
// In order to secure 100% indexed accuracy in Next.js, inject them via a static 
// or dynamic layout configuration file downstream using generateMetadata().
// ============================================================================

import React from 'react';
import Script from 'next/script';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, ImageIcon } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pdf-to-png'];

// ─── Single Source Of Truth (SSOT) For Content Markup & Schemas ──────────────
const FAQ_ITEMS = [
  {
    q: 'How do I convert PDF to PNG for free?',
    a: "Upload your PDF file to FreePDFConvert's free PDF to PNG converter, click Convert, and download your PNG images instantly. No signup or software installation required."
  },
  {
    q: 'Is the PDF to PNG converter free?',
    a: "Yes. FreePDFConvert's PDF to PNG tool is completely free with no hidden fees, no subscription, and no account needed."
  },
  {
    q: 'Will the converted PNG have a watermark?',
    a: 'No. FreePDFConvert never adds watermarks to converted PNG images. All output files are completely clean.'
  },
  {
    q: 'Why use PNG instead of JPG for PDF conversion?',
    a: 'PNG supports lossless compression and transparency, making it ideal when you need pixel-perfect quality or images with transparent backgrounds from your PDF pages.'
  },
  {
    q: 'Does it convert every page of the PDF to PNG?',
    a: 'Yes. Each page of your PDF is converted into a separate high-quality PNG image file.'
  },
  {
    q: 'Is my PDF file safe when uploaded?',
    a: 'Yes. All uploads use SSL encryption and files are automatically deleted after conversion. Your data is never stored or shared.'
  }
];

// ─── Consolidated Structured Data Pipeline ──────────────────────────────────
const unifiedGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://freepdfconvert.io/pdf-to-png',
      url: 'https://freepdfconvert.io/pdf-to-png',
      name: 'Free PDF to PNG Converter Online – PDF to Image No Signup | FreePDFConvert',
      description: 'Convert PDF to PNG free online. Extract high-quality lossless PNG images from every PDF page instantly. No signup, no watermark, 100% secure.',
      isPartOf: { '@id': 'https://freepdfconvert.io/#website' },
      about: { '@id': 'https://freepdfconvert.io/pdf-to-png/#software' },
      breadcrumb: { '@id': 'https://freepdfconvert.io/pdf-to-png/#breadcrumb' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://freepdfconvert.io/pdf-to-png/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freepdfconvert.io/' },
        { '@type': 'ListItem', position: 2, name: 'PDF to PNG', item: 'https://freepdfconvert.io/pdf-to-png' }
      ]
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://freepdfconvert.io/pdf-to-png/#software',
      name: 'Free PDF to PNG Converter Online',
      url: 'https://freepdfconvert.io/pdf-to-png',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert PDF to PNG Online Free',
      description: 'Convert PDF pages to PNG images in 3 simple steps using FreePDFConvert.',
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Upload PDF File',
          text: "Click 'Select PDF File' or drag and drop your PDF into the upload area."
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Convert to PNG',
          text: 'The converter automatically renders each PDF page into a high-quality PNG image with lossless quality.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download PNG',
          text: 'Click Download PNG to save your images. No signup required, no watermark added.'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://freepdfconvert.io/pdf-to-png/#faq',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ]
};

const PdfToPng = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

        {/* Structured Schema Injected via Next.js Optimized Execution Worker */}
        <Script
          id="pdf-to-png-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedGraphSchema) }}
        />

        <Header />

        <main 
          id="main-content"
          className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full"
          role="main"
          aria-label="PDF to PNG Engine Interface"
        >

          {/* ── STATUS: IDLE ──────────────────────────────────────────────── */}
          {status === 'idle' && (
            <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

              {/* Header Title Block */}
              <header className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                  Free <span className="text-rose-600">PDF to PNG</span> Converter Online
                </h1>
                <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                  Convert every PDF page into a lossless, high-quality PNG image instantly.
                  100% free, no signup, no watermark required.
                </p>
              </header>

              {/* Upload Workspace Zone Dropzone */}
              <section
                aria-label="File Upload Hub"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                  ${dragActive ? 'border-rose-600 scale-[1.02] bg-rose-50' : 'border-gray-200 bg-white hover:border-rose-300'}`}
                role="region"
              >
                <label 
                  htmlFor="pdf-to-png-input"
                  className="group cursor-pointer flex flex-col items-center w-full"
                  aria-label="Choose local machine PDF target document"
                >
                  <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8" aria-hidden="true">
                    <Plus size={32} strokeWidth={3} />
                  </div>
                  <div className="text-center space-y-4">
                    <span className="inline-block bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg active:scale-95 transition-transform">
                      Select PDF File
                    </span>
                    <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">or drop PDF file here</p>
                  </div>
                  <input
                    id="pdf-to-png-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept={acceptedFiles}
                    aria-label="Upload PDF file to convert to PNG images"
                  />
                </label>
              </section>

              {/* Value Proposition Grid Cards */}
              <section aria-label="Tool core features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <ImageIcon className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Lossless PNG Quality</h3>
                  <p className="text-gray-500 text-sm">PNG uses lossless compression — every pixel from your PDF is preserved perfectly with no quality degradation.</p>
                </div>
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                  <p className="text-gray-500 text-sm">Upload your PDF and get PNG images in seconds. No waiting, no queue, no software to install on your device.</p>
                </div>
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                  <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF is automatically deleted after conversion and never stored or shared with anyone.</p>
                </div>
              </section>

              {/* Multi-Step Workflow Instructions */}
              <section aria-labelledby="how-to-heading" className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                <h2 id="how-to-heading" className="text-2xl font-black text-gray-900 mb-6">
                  How to Convert PDF to PNG Online (3 Steps)
                </h2>
                <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <li>
                    <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> into the upload area above.
                  </li>
                  <li>
                    <strong className="text-gray-900">Step 2 —</strong> The converter renders each page of your PDF into a lossless <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.png</code> image with full sharpness and detail preserved.
                  </li>
                  <li>
                    <strong className="text-gray-900">Step 3 —</strong> Click "Download PNG" to save your images. No account, no email, no watermark.
                  </li>
                </ol>
              </section>

              {/* FAQ Section */}
              <section aria-labelledby="faq-heading" className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                <h2 id="faq-heading" className="text-2xl font-black text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {FAQ_ITEMS.map((item) => (
                    <div key={item.q}>
                      <h3 className="font-bold text-gray-800 mb-1">{item.q}</h3>
                      <p className="text-gray-500 text-sm">{item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </article>
          )}

          {/* ── STATUS: ASSET CONVERSION PROCESSING PIPELINE ────────────────── */}
          {(status === 'uploading' || status === 'processing') && (
            <div 
              className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg border border-gray-50 animate-in zoom-in-95 duration-300"
              role="status"
              aria-live="polite"
              aria-label={status === 'uploading' ? 'Streaming binary segments to context worker' : 'Compiling graphical image matrices'}
            >
              <div className="relative mb-8 flex justify-center items-center">
                <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} aria-hidden="true" />
                <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                  {status === 'uploading'
                    ? <Upload className="text-rose-600 animate-bounce w-12 h-12" aria-hidden="true" />
                    : <Loader2 className="text-rose-600 animate-spin w-12 h-12" aria-hidden="true" />}
                </div>
              </div>
              <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                {status === 'uploading' ? 'Uploading' : 'Converting'}...
              </h2>
              <p className="text-gray-400 text-sm mb-8 truncate max-w-xs mx-auto">{fileQueue[0]?.name}</p>
              <div 
                className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={status === 'processing' ? 92 : 45}
                aria-label="Conversion output progress track"
              >
                <div
                  className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
                />
              </div>
            </div>
          )}

          {/* ── STATUS: CONVERSION COMPLETED DELIVERY TERMINAL ──────────────── */}
          {status === 'completed' && (
            <div 
              className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500"
              role="status"
              aria-live="polite"
              aria-label="Document rendering finished cleanly. High resolution assets ready for export."
            >
              <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100" aria-hidden="true">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Conversion Complete!</h2>
              <p className="text-gray-400 mb-6 text-sm">Your PDF has been converted to PNG images successfully.</p>
              <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                <button
                  onClick={handleDownload}
                  className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-all active:scale-[0.98]"
                  aria-label="Download generated structural high-quality PNG layout documents"
                >
                  <Download size={28} aria-hidden="true" /> DOWNLOAD PNG
                </button>
                <button 
                  onClick={reset} 
                  className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                  aria-label="Reset workspace states to idle"
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
    )}
  </BaseToolLogic>
);

export default PdfToPng;