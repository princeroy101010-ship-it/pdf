'use client';

// ============================================================================
// ⚠️ SEO PRODUCTION NOTICE:
// Legacy HTML meta tags (<title>, <meta>, <link>) have been stripped down.
// In order to secure 100% indexed accuracy in Next.js, inject them via a static 
// or dynamic layout configuration file downstream using generateMetadata().
// ============================================================================

import React from 'react';
import Script from 'next/script';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, Monitor } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pdf-to-pptx'];

// ─── Single Source Of Truth (SSOT) For Content Markup & Schemas ──────────────
const FAQ_ITEMS = [
  {
    q: 'How do I convert PDF to PowerPoint for free?',
    a: "Upload your PDF file to FreePDFConvert's free PDF to PowerPoint converter, click Convert, and download your PPTX file instantly. No signup or software installation required."
  },
  {
    q: 'Is the PDF to PowerPoint converter free?',
    a: "Yes. FreePDFConvert's PDF to PPTX tool is completely free with no hidden fees, no subscription, and no account needed."
  },
  {
    q: 'Will the converted PPTX have a watermark?',
    a: 'No. FreePDFConvert never adds watermarks to converted files. Your PowerPoint output is always clean and professional.'
  },
  {
    q: 'Does each PDF page become a PowerPoint slide?',
    a: 'Yes. Each page of your PDF is converted into a separate slide in the PowerPoint presentation, preserving the layout and content.'
  },
  {
    q: 'Is the output compatible with Microsoft PowerPoint?',
    a: 'Yes. The output is a standard PPTX file compatible with Microsoft PowerPoint 2007 and later, Google Slides, LibreOffice Impress, and all modern presentation applications.'
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
      '@id': 'https://www.freepdfconvert.io/pdf-to-pptx',
      url: 'https://www.freepdfconvert.io/pdf-to-pptx',
      name: 'Free PDF to PowerPoint Converter Online – PDF to PPTX No Signup | FreePDFConvert',
      description: 'Convert PDF to PowerPoint PPTX free online. Turn PDF slides into editable presentations instantly. No signup, no watermark, 100% secure. Best free PDF to PPTX converter.',
      isPartOf: { '@id': 'https://www.freepdfconvert.io/#website' },
      about: { '@id': 'https://www.freepdfconvert.io/pdf-to-pptx/#software' },
      breadcrumb: { '@id': 'https://www.freepdfconvert.io/pdf-to-pptx/#breadcrumb' }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.freepdfconvert.io/pdf-to-pptx/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freepdfconvert.io/' },
        { '@type': 'ListItem', position: 2, name: 'PDF to PowerPoint', item: 'https://www.freepdfconvert.io/pdf-to-pptx' }
      ]
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://www.freepdfconvert.io/pdf-to-pptx/#software',
      name: 'Free PDF to PowerPoint Converter Online',
      url: 'https://www.freepdfconvert.io/pdf-to-pptx',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'All',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert PDF to PowerPoint Online Free',
      description: 'Convert a PDF into an editable PowerPoint PPTX presentation in 3 simple steps.',
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
          name: 'Convert to PowerPoint',
          text: 'The converter automatically transforms each PDF page into an editable PowerPoint slide.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Download PPTX',
          text: 'Click Download PPTX to save your presentation. No signup required, no watermark added.'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.freepdfconvert.io/pdf-to-pptx/#faq',
      mainEntity: FAQ_ITEMS.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a }
      }))
    }
  ]
};

const PdfToPptx = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

        {/* Structured Schema Injected via Next.js Optimized Execution Worker */}
        <Script
          id="pdf-to-pptx-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedGraphSchema) }}
        />

        <Header />

        <main 
          id="main-content"
          className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full"
          role="main"
          aria-label="PDF to PowerPoint Engine Interface"
        >

          {/* ── STATUS: IDLE ──────────────────────────────────────────────── */}
          {status === 'idle' && (
            <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

              {/* Header Title Block */}
              <header className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                  Free <span className="text-rose-600">PDF to PowerPoint</span> Converter Online
                </h1>
                <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                  Convert PDF slides into editable PowerPoint PPTX presentations instantly.
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
                  htmlFor="pdf-to-pptx-input"
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
                    id="pdf-to-pptx-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept={acceptedFiles}
                    aria-label="Upload PDF file to convert to PowerPoint layout slides"
                  />
                </label>
              </section>

        

            </article>
          )}

          {/* ── STATUS: ASSET CONVERSION PROCESSING PIPELINE ────────────────── */}
          {(status === 'uploading' || status === 'processing') && (
            <div 
              className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg border border-gray-50 animate-in zoom-in-95 duration-300"
              role="status"
              aria-live="polite"
              aria-label={status === 'uploading' ? 'Streaming binary segments to context worker' : 'Compiling presentation structural layers'}
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
                aria-label="Conversion presentation progress track"
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
              aria-label="Document rendering finished cleanly. Presentation file delivery live."
            >
              <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100" aria-hidden="true">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Conversion Complete!</h2>
              <p className="text-gray-400 mb-6 text-sm">Your PDF has been converted to PowerPoint successfully.</p>
              <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                <button
                  onClick={handleDownload}
                  className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-all active:scale-[0.98]"
                  aria-label="Download generated PowerPoint presentation binary document"
                >
                  <Download size={28} aria-hidden="true" /> DOWNLOAD PPTX
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
      {/* Value Proposition Grid Cards */}
              <section aria-label="Tool core features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <Monitor className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Each Page Becomes a Slide</h3>
                  <p className="text-gray-500 text-sm">Every page of your PDF is converted into a separate PowerPoint slide, preserving the original layout and content.</p>
                </div>
                <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                  <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                  <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                  <p className="text-gray-500 text-sm">Upload your PDF and get a ready-to-edit PPTX file in seconds. Compatible with PowerPoint, Google Slides, and LibreOffice.</p>
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
                  How to Convert PDF to PowerPoint Online (3 Steps)
                </h2>
                <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <li>
                    <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> into the upload area above.
                  </li>
                  <li>
                    <strong className="text-gray-900">Step 2 —</strong> The converter automatically transforms each PDF page into an editable slide inside a <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pptx</code> presentation file.
                  </li>
                  <li>
                    <strong className="text-gray-900">Step 3 —</strong> Click "Download PPTX" to save your presentation. No account, no email, no watermark.
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
        </main>

        <div className="mt-10 md:mt-20">
          <Footer />
        </div>
      </div>
    )}
  </BaseToolLogic>
);

export default PdfToPptx;