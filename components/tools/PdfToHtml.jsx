'use client';
// ============================================================================
// ✅ SEO ARCHITECTURE WARNING:
// Title, description, open-graph tags, and canonical links have been removed.
// They must be declared in your server-side page/layout context via Next.js
// generateMetadata() to ensure search engines parse them reliably.
//
// ✅ SCHEMA MAPPING DESIGN:
// A single FAQ_ITEMS dataset maps to both the visual UI markup and the 
// structured JSON-LD object to maintain data parity without manual tracking.
// ============================================================================
import React from 'react';
import Script from 'next/script';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, Code } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pdf-to-html'];

// ─── Single Source Of Truth For Frequently Asked Questions ──────────────────
const FAQ_ITEMS = [
  {
    q: 'How do I convert PDF to HTML for free?',
    a: "Upload your PDF file to FreePDFConvert's free PDF to HTML converter, click Convert, and download your HTML file instantly. No signup or software installation required."
  },
  {
    q: 'Does the HTML output preserve the PDF layout?',
    a: 'Yes. The converter preserves the text content, headings, paragraphs, and document structure of your PDF in the output HTML file.'
  },
  {
    q: 'Will the converted HTML file have a watermark?',
    a: 'No. FreePDFConvert never adds watermarks to any converted file. Your HTML output is always completely clean.'
  },
  {
    q: 'Can I open the HTML file in a browser?',
    a: 'Yes. The output is a standard .html file that opens in any web browser — Chrome, Firefox, Safari, or Edge — and can be edited in any code editor like VS Code.'
  },
  {
    q: 'Is my PDF safe when I upload it?',
    a: 'Yes. All transfers use SSL encryption. Your PDF is automatically deleted from our servers after conversion and is never shared with any third party.'
  }
];

// ─── Unified JSON-LD Graph Construction ─────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://freepdfconvert.io/pdf-to-html',
      url: 'https://freepdfconvert.io/pdf-to-html',
      name: 'Free PDF to HTML Converter Online – PDF to HTML No Signup | FreePDFConvert',
      description: 'Convert PDF to HTML free online. Transform PDF documents into web-ready HTML files instantly. No signup, no watermark, 100% secure. Best free PDF to HTML converter.',
      isPartOf: { '@id': 'https://freepdfconvert.io/#website' },
      about: { '@id': 'https://freepdfconvert.io/pdf-to-html/#software' },
      breadcrumb: { '@id': 'https://freepdfconvert.io/pdf-to-html/#breadcrumb' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://freepdfconvert.io/pdf-to-html/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freepdfconvert.io/' },
        { '@type': 'ListItem', position: 2, name: 'PDF to HTML', item: 'https://freepdfconvert.io/pdf-to-html' }
      ]
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://freepdfconvert.io/pdf-to-html/#software',
      name: 'Free PDF to HTML Converter Online',
      url: 'https://freepdfconvert.io/pdf-to-html',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert PDF to HTML Online Free',
      description: 'Convert a PDF document to an HTML file in 3 simple steps using FreePDFConvert.',
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
          name: 'Convert to HTML',
          text: 'The converter automatically transforms your PDF content into a structured HTML file.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download HTML File',
          text: 'Click Download HTML to save your file. No signup required, no watermark added.'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://freepdfconvert.io/pdf-to-html/#faq',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a }
      }))
    }
  ]
};

const PdfToHtml = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

        {/* ✅ Injected Safely via Standard Modern Script Execution Block */}
        <Script
          id="pdf-to-html-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />

        <main 
          id="main-content"
          className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full"
          role="main"
          aria-label="PDF to HTML Conversion Interface"
        >

          {/* ── STATUS: IDLE ──────────────────────────────────────────────── */}
          {status === 'idle' && (
            <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

              {/* Title & Introduction Section */}
              <header className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                  Free <span className="text-rose-600">PDF to HTML</span> Converter Online
                </h1>
                <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                  Convert PDF documents into web-ready HTML files instantly.
                  100% free, no signup, no watermark required.
                </p>
              </header>

              {/* File Dropzone Region */}
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
                  htmlFor="pdf-to-html-input"
                  className="group cursor-pointer flex flex-col items-center w-full"
                  aria-label="Choose a local PDF file to convert"
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
                    id="pdf-to-html-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept={acceptedFiles}
                    aria-label="Upload PDF file to convert to HTML"
                  />
                </label>
              </section>

              {/* Core Features Overview Grid */}
              <section aria-label="Tool value propositions" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <Code className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Web-Ready HTML Output</h3>
                  <p className="text-gray-500 text-sm">Your PDF is converted into a clean, structured HTML file — ready to open in any browser or edit in any code editor.</p>
                </div>
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                  <p className="text-gray-500 text-sm">Upload your PDF and get a ready-to-use HTML file in seconds. No waiting, no queue, no software to install.</p>
                </div>
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                  <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF is automatically deleted after conversion and never stored or shared.</p>
                </div>
              </section>

              {/* Execution Workflow Details Section */}
              <section aria-labelledby="how-to-heading" className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                <h2 id="how-to-heading" className="text-2xl font-black text-gray-900 mb-6">
                  How to Convert PDF to HTML Online (3 Steps)
                </h2>
                <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <li>
                    <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> file into the upload area above.
                  </li>
                  <li>
                    <strong className="text-gray-900">Step 2 —</strong> The converter automatically extracts text, headings, and structure from your PDF and builds a clean <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.html</code> file.
                  </li>
                  <li>
                    <strong className="text-gray-900">Step 3 —</strong> Click "Download HTML" to save your file. No account, no email, no watermark added.
                  </li>
                </ol>
              </section>

              {/* Accessible Frequently Asked Questions */}
              <section aria-labelledby="faq-heading" className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                <h2 id="faq-heading" className="text-2xl font-black text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {FAQ_ITEMS.map(({ q, a }) => (
                    <div key={q}>
                      <h3 className="font-bold text-gray-800 mb-1">{q}</h3>
                      <p className="text-gray-500 text-sm">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </article>
          )}

          {/* ── STATUS: LOADING PIPELINE ───────────────────────────────────── */}
          {(status === 'uploading' || status === 'processing') && (
            <div 
              className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg border border-gray-50 animate-in zoom-in-95 duration-300"
              role="status"
              aria-live="polite"
              aria-label={status === 'uploading' ? 'Uploading files to storage node' : 'Processing layout vector calculations'}
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
                aria-label="File migration status bar"
              >
                <div
                  className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
                />
              </div>
            </div>
          )}

          {/* ── STATUS: COMPLETED ─────────────────────────────────────────── */}
          {status === 'completed' && (
            <div 
              className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500"
              role="status"
              aria-live="polite"
              aria-label="File formatting finished. Code payload is compiled and available for delivery."
            >
              <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100" aria-hidden="true">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Conversion Complete!</h2>
              <p className="text-gray-400 mb-6 text-sm">Your PDF has been converted to HTML successfully.</p>
              <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                <button
                  onClick={handleDownload}
                  className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-all active:scale-[0.98]"
                  aria-label="Download generated HTML markup asset"
                >
                  <Download size={28} aria-hidden="true" /> DOWNLOAD HTML
                </button>
                <button 
                  onClick={reset} 
                  className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                  aria-label="Flush state cache and convert another target file"
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

export default PdfToHtml;