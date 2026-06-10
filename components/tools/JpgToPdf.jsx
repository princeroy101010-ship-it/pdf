'use client';
// ============================================================================
// ✅ SEO ARCHITECTURE:
// Title/description/og/twitter/robots/canonical → handled in [slug]/page.jsx 
// via generateMetadata(). Do NOT use <Head> here — 'use client' renders inside 
// <body>, meta tags placed here are ignored by Google entirely.
//
// ✅ MATCHING SCHEMA & CONTENT VALIDATION:
// A single FAQ_ITEMS array drives both JSON-LD and HTML view. No microdata 
// (itemScope/itemProp) used anywhere to prevent structural indexing pollution.
// ============================================================================
import React from 'react';
import Script from 'next/script';
import {
  Download, CheckCircle2, Upload, Loader2,
  Plus, Settings, Zap, ShieldCheck, FileImage,
} from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['jpg-to-pdf'];

// ─── Single Source Of Truth For Frequently Asked Questions ──────────────────
const FAQ_ITEMS = [
  {
    q: 'How do I convert a JPG to PDF for free?',
    a: 'Click "Select JPG File" above, upload your image, and click Convert. Your PDF will be ready to download in seconds. No signup or software installation needed.',
  },
  {
    q: 'Is this JPG to PDF converter completely free?',
    a: 'Yes. FreePDFConvert\'s JPG to PDF tool is 100% free with no hidden charges, no subscription, and no tricks.',
  },
  {
    q: 'Will my converted PDF have a watermark?',
    a: 'No. We never add watermarks to any output file. Your PDF will always be clean and ready to use professionally.',
  },
  {
    q: 'Does it support JPEG files too?',
    a: 'Yes. Both .jpg and .jpeg file formats are fully supported. Simply upload either and the converter handles it automatically.',
  },
  {
    q: 'Is my image safe when uploaded?',
    a: 'Yes. All transfers use SSL encryption. Your JPG file is automatically deleted from our servers after conversion and is never shared with any third party.',
  },
];

// ─── Static JSON-LD Graph Structure (Declared Outside Render Loop) ──────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.freepdfconvert.io/jpg-to-pdf',
      url: 'https://www.freepdfconvert.io/jpg-to-pdf',
      name: 'Free JPG to PDF Converter Online – No Signup, No Watermark | FreePDFConvert',
      description:
        'Convert JPG to PDF free online in seconds. Upload your JPG or JPEG image and download a clean PDF instantly. No signup, no watermark, no software needed.',
      isPartOf: { '@id': 'https://www.freepdfconvert.io/#website' },
      about: { '@id': 'https://www.freepdfconvert.io/jpg-to-pdf/#software' },
      breadcrumb: { '@id': 'https://www.freepdfconvert.io/jpg-to-pdf/#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.freepdfconvert.io/jpg-to-pdf/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freepdfconvert.io/' },
        { '@type': 'ListItem', position: 2, name: 'JPG to PDF', item: 'https://www.freepdfconvert.io/jpg-to-pdf' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.freepdfconvert.io/jpg-to-pdf/#software',
      name: 'Free JPG to PDF Converter Online',
      url: 'https://www.freepdfconvert.io/jpg-to-pdf',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All – Web Browser',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Convert JPG to PDF free',
        'JPEG to PDF supported',
        'No signup required',
        'No watermark added',
        'Instant download',
        'SSL encrypted uploads',
        'Files deleted after conversion',
        'Works on all devices',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1874',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert JPG to PDF Online Free',
      description: 'Convert a JPG image to PDF in 3 simple steps using FreePDFConvert.',
      step: [
        {
          '@type': 'HowToStep',
          position: '1',
          name: 'Upload JPG File',
          text: "Click 'Select JPG File' or drag and drop your JPG or JPEG image into the upload area.",
        },
        {
          '@type': 'HowToStep',
          position: '2',
          name: 'Convert to PDF',
          text: 'The converter automatically processes your JPG and converts it into a properly formatted PDF document.',
        },
        {
          '@type': 'HowToStep',
          position: '3',
          name: 'Download PDF',
          text: 'Click Download PDF to save your file. No signup required, no watermark added.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.freepdfconvert.io/jpg-to-pdf/#faq',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

// ─── Component Blueprint ────────────────────────────────────────────────────
const JpgToPdf = () => (
  <BaseToolLogic config={config}>
    {({
      status, dragActive, fileQueue, acceptedFiles,
      handleFileChange, handleDragOver, handleDragLeave, handleDrop,
      reset, handleDownload,
    }) => (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

        {/* ✅ Single Compiled Static JSON-LD Resource Block */}
        <Script
          id="jpg-to-pdf-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />

        <main
          id="main-content"
          className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full"
          role="main"
          aria-label="JPG to PDF Converter Tool"
        >

          {/* ── STATUS: IDLE ──────────────────────────────────────────────── */}
          {status === 'idle' && (
            <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

              {/* Hero Banner Area */}
              <header className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                  Free <span className="text-rose-600">JPG to PDF</span> Converter Online
                </h1>
                <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                  Convert JPG and JPEG images to PDF instantly.
                  100% free, no signup, no watermark required.
                </p>
              </header>

              {/* Secure Upload Boundary dropzone */}
              <section
                aria-label="Upload your JPG file"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                  ${dragActive ? 'border-rose-600 scale-[1.02] bg-rose-50' : 'border-gray-200 bg-white hover:border-rose-300'}`}
                role="region"
              >
                <label
                  htmlFor="jpg-upload-input"
                  className="group cursor-pointer flex flex-col items-center w-full"
                  aria-label="Select a JPG image to convert to PDF"
                >
                  <div
                    className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8"
                    aria-hidden="true"
                  >
                    <Plus size={32} strokeWidth={3} />
                  </div>
                  <div className="text-center space-y-4">
                    <span className="inline-block bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg">
                      Select JPG File
                    </span>
                    <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">
                      or drop JPG / JPEG file here
                    </p>
                  </div>
                  <input
                    id="jpg-upload-input"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept={acceptedFiles}
                    multiple={false}
                    aria-label="Upload JPG image to convert to PDF"
                  />
                </label>
              </section>

              {/* Structural Value Verification Metrics */}
              <section
                aria-label="Key features"
                className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5"
              >
                {[
                  '🔒 100% Secure & Private',
                  '⚡ Instant Conversion',
                  '🆓 Completely Free',
                  '🚫 No Watermark',
                  '🌐 No Install Required',
                  '♾️ Unlimited Conversions',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm text-sm text-gray-500 font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </section>

           

            </article>
          )}

          {/* ── STATUS: UPLOADING / PROCESSING ────────────────────────────── */}
          {(status === 'uploading' || status === 'processing') && (
            <div
              className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg"
              role="status"
              aria-live="polite"
              aria-label={status === 'uploading' ? 'Uploading your JPG' : 'Converting JPG to PDF'}
            >
              <div className="relative mb-8 flex justify-center items-center">
                <Settings
                  className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                  {status === 'uploading'
                    ? <Upload className="text-rose-600 animate-bounce w-12 h-12" aria-hidden="true" />
                    : <Loader2 className="text-rose-600 animate-spin w-12 h-12" aria-hidden="true" />
                  }
                </div>
              </div>
              <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                {status === 'uploading' ? 'Uploading' : 'Converting'}...
              </h2>
              <p
                className="text-gray-400 text-sm mb-8 truncate"
                aria-label={`File: ${fileQueue[0]?.name}`}
              >
                {fileQueue[0]?.name}
              </p>
              <div
                className="w-full bg-gray-100 h-3 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={status === 'processing' ? 92 : 45}
                aria-label="Conversion progress"
              >
                <div
                  className={`bg-rose-600 h-full transition-all duration-700 ${
                    status === 'processing' ? 'w-[92%]' : 'w-[45%]'
                  }`}
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
              aria-label="Conversion complete. Your PDF is ready to download."
            >
              <div
                className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3"
                aria-hidden="true"
              >
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
                Conversion Complete!
              </h2>
              <p className="text-gray-400 mb-6 text-sm">
                Your JPG has been converted to PDF successfully.
              </p>
              <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                <button
                  onClick={handleDownload}
                  className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-all"
                  aria-label="Download your converted PDF file"
                >
                  <Download size={28} aria-hidden="true" /> DOWNLOAD PDF
                </button>
                <button
                  onClick={reset}
                  className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                  aria-label="Convert another JPG file"
                >
                  Convert another file
                </button>
              </div>
            </div>
          )}

   {/* Context Metric Features */}
              <section
                aria-label="Tool features"
                className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full"
              >
                {[
                  {
                    Icon: Zap,
                    title: 'Instant Conversion',
                    desc: 'Upload your JPG file and get a clean, properly formatted PDF in seconds. No waiting, no queue.',
                  },
                  {
                    Icon: FileImage,
                    title: 'High Quality Output',
                    desc: 'Your JPG image is embedded in the PDF at full resolution — no compression, no quality loss during conversion.',
                  },
                  {
                    Icon: ShieldCheck,
                    title: 'Secure & Private',
                    desc: 'All file transfers use SSL encryption. Your JPG is automatically deleted after conversion and never stored or shared.',
                  },
                ].map(({ Icon, title, desc }) => (
                  <div key={title} className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Icon className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                ))}
              </section>

              {/* Execution Steps Description Node */}
              <section
                aria-labelledby="how-it-works-heading"
                className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6"
              >
                <h2
                  id="how-it-works-heading"
                  className="text-2xl font-black text-gray-900 mb-6"
                >
                  How to Convert JPG to PDF Online (3 Steps)
                </h2>
                <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  {[
                    {
                      n: 1,
                      text: (
                        <>
                          Click <strong className="text-gray-900">"Select JPG File"</strong> or drag
                          and drop your{' '}
                          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.jpg</code> or{' '}
                          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.jpeg</code>{' '}
                          image into the upload area above.
                        </>
                      ),
                    },
                    {
                      n: 2,
                      text: 'The converter automatically processes your image and creates a properly sized PDF document.',
                    },
                    {
                      n: 3,
                      text: 'Click "Download PDF" to save your file. No account, no email, no watermark added.',
                    },
                  ].map(({ n, text }) => (
                    <li key={n}>
                      <strong className="text-gray-900">Step {n} —</strong> {text}
                    </li>
                  ))}
                </ol>
              </section>

              {/* Document Textual Validation FAQs */}
              <section
                aria-labelledby="faq-heading"
                className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16"
              >
                <h2
                  id="faq-heading"
                  className="text-2xl font-black text-gray-900 mb-8"
                >
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
        </main>

        <div className="mt-10 md:mt-20">
          <Footer />
        </div>
      </div>
    )}
  </BaseToolLogic>
);

export default JpgToPdf;