'use client';
// ============================================================
// ✅ SEO NOTE:
// Title/description/og/twitter/robots/canonical → handled in
// [slug]/page.jsx via generateMetadata(). Do NOT add <title>
// or <meta> tags here — 'use client' renders inside <body>.
//
// ✅ FAQ FIX:
// Previously: no FAQ schema here, but layout.js FAQPage was
// leaking onto this URL → Google flagged 2 invalid items.
// Fix: declare a self-contained FAQPage JSON-LD on this page,
// using a single FAQ_ITEMS array for both schema + HTML so
// they always match. No microdata (itemScope/itemProp) used.
// ============================================================
import React from 'react';
import Script from 'next/script';
import {
  Download, CheckCircle2, Upload, Loader2,
  Plus, Zap, Settings, ShieldCheck, Clock, Star, Globe,
} from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['compress-pdf'];

// ─── Single source of truth for FAQ ──────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: 'How do I compress a PDF for free?',
    a: 'Upload your PDF on FreePDFConvert, choose your compression level (Extreme, Recommended, or Less), click Compress PDF Now, and download the smaller file — 100% free, no signup required.',
  },
  {
    q: 'Will compressing a PDF reduce its quality?',
    a: 'It depends on the compression level you choose. "Less" compression keeps near-original quality, "Recommended" balances size and quality, and "Extreme" gives the smallest file with some quality reduction.',
  },
  {
    q: 'How much can I reduce a PDF file size?',
    a: 'FreePDFConvert can reduce PDF size by up to 90% depending on the content. PDFs with many images compress the most; text-heavy PDFs compress less but still see significant reduction.',
  },
  {
    q: 'Is it safe to upload my PDF to compress it?',
    a: 'Yes. All uploads are encrypted with HTTPS/SSL. Your files are permanently and automatically deleted from our servers immediately after processing. We never read, store, or share your files.',
  },
  {
    q: 'Does the compressed PDF have a watermark?',
    a: 'No. FreePDFConvert never adds watermarks, logos, or branding to your compressed PDF. The output is completely clean.',
  },
  {
    q: 'What devices can I use to compress a PDF?',
    a: 'Our PDF compressor works on all devices — Windows, Mac, Linux, iPhone, iPad, and Android — in any modern browser. No app or software installation is needed.',
  },
  {
    q: 'Is there a file size limit for PDF compression?',
    a: 'FreePDFConvert supports large PDF files. You can compress PDFs free with no restrictions on the number of compressions.',
  },
  {
    q: 'What is the difference between the compression levels?',
    a: 'Extreme gives the smallest file size with lower image quality. Recommended is the best balance for most use cases. Less compression preserves near-original quality with moderate size reduction.',
  },
];

// ─── JSON-LD — FAQPage + WebPage + SoftwareApplication ───────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://freepdfconvert.io/compress-pdf',
      url: 'https://freepdfconvert.io/compress-pdf',
      name: 'Compress PDF Online Free – Reduce PDF File Size | FreePDFConvert',
      description:
        'Compress PDF files online for free. Reduce PDF size up to 90% without losing quality. No signup, no watermark, instant download. Fast & secure.',
      isPartOf: { '@id': 'https://freepdfconvert.io/#website' },
      about: { '@id': 'https://freepdfconvert.io/compress-pdf/#software' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freepdfconvert.io/' },
          { '@type': 'ListItem', position: 2, name: 'Compress PDF', item: 'https://freepdfconvert.io/compress-pdf' },
        ],
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://freepdfconvert.io/compress-pdf/#software',
      name: 'PDF Compressor – FreePDFConvert',
      url: 'https://freepdfconvert.io/compress-pdf',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All – Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Compress PDF free online',
        'Three compression levels',
        'Up to 90% file size reduction',
        'No watermark added',
        'No registration required',
        'Works on all devices',
        'Instant download',
        'Files deleted after processing',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '2143',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'HowTo',
      name: 'How to Compress a PDF Online',
      description: 'Reduce your PDF file size in 3 easy steps using FreePDFConvert.',
      step: [
        {
          '@type': 'HowToStep',
          position: '1',
          name: 'Upload Your PDF',
          text: "Click 'Select PDF File' or drag and drop your PDF into the upload area.",
        },
        {
          '@type': 'HowToStep',
          position: '2',
          name: 'Choose Compression Level',
          text: 'Select Extreme, Recommended, or Less compression depending on your quality vs. size preference.',
        },
        {
          '@type': 'HowToStep',
          position: '3',
          name: 'Download Compressed PDF',
          text: 'Click Compress PDF Now, then download your smaller PDF. File is deleted from servers immediately.',
        },
      ],
    },
    // ✅ Single FAQPage — built from FAQ_ITEMS, exactly matches rendered HTML
    {
      '@type': 'FAQPage',
      '@id': 'https://freepdfconvert.io/compress-pdf/#faq',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────
const TrustBadge = ({ label }) => (
  <span className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm text-sm text-gray-500 font-semibold">
    {label}
  </span>
);

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start">
    <span className="text-2xl mt-0.5" aria-hidden="true">✅</span>
    <div>
      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const CompressPdf = () => (
  <BaseToolLogic config={config}>
    {({
      status, dragActive, fileQueue, acceptedFiles,
      compressionLevel, setCompressionLevel,
      handleFileChange, handleDragOver, handleDragLeave, handleDrop,
      startProcessing, reset, handleDownload,
    }) => {
      const seo = config.seo;

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ✅ JSON-LD — afterInteractive so it doesn't block render */}
          <Script
            id="compress-pdf-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Header />

          <main
            id="main-content"
            className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6"
            role="main"
            aria-label="Compress PDF Tool"
          >

            {/* ── IDLE ──────────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* Hero */}
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    {seo?.h1 ?? 'Compress PDF Online Free'}
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                    {seo?.subtitle ?? 'Reduce PDF file size up to 90% without losing quality. Free, instant, no signup required.'}
                  </p>
                </header>

                {/* Compression Level — shows after file selected */}
                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl mb-10 animate-in slide-in-from-bottom-4">
                    <div className="text-center mb-6">
                      <h2 className="text-xl font-bold text-gray-800">Choose Compression Level</h2>
                      <p className="text-sm text-gray-500">Balance between file size and quality</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {[
                        { key: 'extreme',     label: 'Extreme',     desc: 'Less quality, high compression', Icon: Zap },
                        { key: 'recommended', label: 'Recommended', desc: 'Good quality, good compression', Icon: CheckCircle2 },
                        { key: 'low',         label: 'Less',        desc: 'High quality, low compression',  Icon: Settings },
                      ].map(({ key, label, desc, Icon }) => (
                        <button
                          key={key}
                          onClick={() => setCompressionLevel(key)}
                          aria-pressed={compressionLevel === key}
                          className={`p-5 rounded-3xl border-2 transition-all text-left ${
                            compressionLevel === key
                              ? 'border-blue-700 bg-blue-50'
                              : 'border-gray-100 bg-white hover:border-blue-200'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl mb-3 flex items-center justify-center ${
                            compressionLevel === key ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-500'
                          }`}>
                            <Icon size={20} aria-hidden="true" />
                          </div>
                          <div className="font-black text-gray-800 text-sm uppercase">{label}</div>
                          <div className="text-xs text-gray-500 leading-tight mt-1">{desc}</div>
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => startProcessing()}
                      className="w-full hover:bg-rose-700 text-white py-5 bg-rose-600 rounded-2xl text-xl font-black shadow-xl shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-3"
                      aria-label="Start compressing your PDF"
                    >
                      COMPRESS PDF NOW
                    </button>
                  </div>
                )}

                {/* Drop Zone */}
                <section
                  aria-label="Upload your PDF file"
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl ${
                    fileQueue.length > 0 ? 'min-h-[120px] md:min-h-[150px]' : 'min-h-[280px] md:min-h-[350px]'
                  } rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 bg-blue-50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-blue-400'}`}
                  role="region"
                >
                  <label
                    htmlFor="pdf-upload-input"
                    className="group cursor-pointer flex flex-col items-center w-full"
                    aria-label="Select a PDF file to compress"
                  >
                    <div
                      className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-blue-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8"
                      aria-hidden="true"
                    >
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg active:scale-95">
                        {fileQueue.length > 0 ? 'Change File' : 'Select PDF File'}
                      </span>
                      {fileQueue.length === 0 && (
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">
                          or drop file here
                        </p>
                      )}
                    </div>
                    <input
                      id="pdf-upload-input"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload PDF file"
                    />
                  </label>
                </section>

                {/* Trust Badges */}
                <section
                  aria-label="Key features"
                  className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5"
                >
                  {[
                    '🔒 100% Secure & Private',
                    '⚡ Instant Compression',
                    '🆓 Completely Free',
                    '🚫 No Watermark',
                    '🌐 No Install Required',
                    '♾️ Unlimited Compressions',
                  ].map((badge) => (
                    <TrustBadge key={badge} label={badge} />
                  ))}
                </section>

                {/* How It Works */}
                <section aria-labelledby="how-it-works-heading" className="mt-16 w-full max-w-3xl">
                  <h2
                    id="how-it-works-heading"
                    className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                  >
                    How to Compress a PDF — 3 Easy Steps
                  </h2>
                  <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                    {[
                      { step: '1', title: 'Upload Your PDF',         desc: 'Click "Select PDF File" or drag and drop your PDF into the upload area.',                                         icon: '📤' },
                      { step: '2', title: 'Choose Compression',      desc: 'Select Extreme, Recommended, or Less compression to balance file size vs. quality.',                               icon: '⚙️' },
                      { step: '3', title: 'Download Compressed PDF', desc: 'Click Compress PDF Now and download your smaller file. Your PDF is deleted from our servers immediately after.', icon: '📥' },
                    ].map(({ step, title, desc, icon }) => (
                      <li key={step} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
                        <div className="text-4xl mb-3" aria-hidden="true">{icon}</div>
                        <h3 className="font-black text-gray-900 text-lg mb-2">Step {step}: {title}</h3>
                        <p className="text-gray-500 text-sm">{desc}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Why FreePDFConvert */}
                <section aria-labelledby="why-heading" className="mt-16 w-full max-w-3xl">
                  <h2
                    id="why-heading"
                    className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                  >
                    Why Use FreePDFConvert to Compress PDF?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { title: 'Up to 90% Size Reduction',   desc: 'Our smart compression engine reduces PDF file size dramatically while preserving readability and structure.' },
                      { title: 'Three Compression Levels',   desc: 'Choose Extreme for the smallest file, Recommended for the best balance, or Less for near-original quality.' },
                      { title: 'No Sign-Up Required',        desc: 'Compress PDFs instantly without creating an account or providing your email — just upload and go.' },
                      { title: 'No Watermark Added',         desc: 'Your compressed PDF is completely clean. No logos, no branding, no watermarks — ever.' },
                      { title: 'Files Deleted Immediately',  desc: 'Your PDF is permanently deleted from our servers right after compression. 100% private and secure.' },
                      { title: 'Works on All Devices',       desc: 'Compress PDFs on Windows, Mac, iPhone, or Android — any browser, any device, no installation needed.' },
                    ].map((f) => (
                      <FeatureCard key={f.title} {...f} />
                    ))}
                  </div>
                </section>

                {/* Compression Levels Explained */}
                <section aria-labelledby="levels-heading" className="mt-16 w-full max-w-3xl">
                  <h2
                    id="levels-heading"
                    className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                  >
                    Compression Levels Explained
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                      { icon: '⚡', title: 'Extreme',     desc: 'Maximum size reduction. Best for email attachments, web uploads, or anywhere file size is critical. Some image quality reduction.' },
                      { icon: '✅', title: 'Recommended', desc: 'The ideal balance for most users. Noticeably smaller file with minimal quality loss. Best for sharing documents professionally.' },
                      { icon: '🎯', title: 'Less',        desc: 'Minimal compression with near-original quality. Best for archiving or when you need the highest quality preserved.' },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
                        <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQ — plain HTML, no microdata */}
                <section aria-labelledby="faq-heading" className="mt-16 w-full max-w-3xl mb-8">
                  <h2
                    id="faq-heading"
                    className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {FAQ_ITEMS.map(({ q, a }) => (
                      <div key={q} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SEO Content Block */}
                <section
                  aria-labelledby="seo-content-heading"
                  className="mt-4 w-full max-w-3xl mb-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                >
                  <h2 id="seo-content-heading" className="text-xl font-black text-gray-900 mb-4">
                    Compress PDF Online — Fast, Free & Secure
                  </h2>
                  <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                    <p>
                      <strong className="text-gray-700">FreePDFConvert</strong> is the fastest way to{' '}
                      <strong className="text-gray-700">compress PDF files online</strong>, completely free
                      and without registration. Whether you need to shrink a PDF for email, reduce a scanned
                      document, or minimize a presentation file, our{' '}
                      <strong className="text-gray-700">PDF compressor</strong> handles it in seconds.
                    </p>
                    <p>
                      Unlike other tools, our{' '}
                      <strong className="text-gray-700">free PDF size reducer</strong> gives you three
                      compression levels so you stay in control of the quality vs. size trade-off. The output
                      is completely watermark-free and ready to share or upload anywhere.
                    </p>
                    <p>
                      Need to <strong className="text-gray-700">reduce PDF file size</strong> quickly? Upload
                      your file, choose your compression level, and download the result instantly. Your file is
                      deleted from our servers immediately after, making FreePDFConvert the most private{' '}
                      <strong className="text-gray-700">online PDF compressor</strong> available.
                    </p>
                  </div>
                </section>

              </article>
            )}

            {/* ── UPLOADING / PROCESSING ────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div
                className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300"
                role="status"
                aria-live="polite"
                aria-label={status === 'uploading' ? 'Uploading your PDF' : 'Compressing your PDF'}
              >
                <div className="relative mb-8 md:mb-12 flex justify-center items-center">
                  <Settings
                    className="text-blue-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 bg-blue-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="text-blue-700 animate-bounce w-12 h-12" aria-hidden="true" />
                      : <Loader2 className="text-blue-700 animate-spin w-12 h-12" aria-hidden="true" />
                    }
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 tracking-tight uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Compressing'}...
                </h2>
                <p className="text-gray-400 font-medium text-sm mb-8 truncate px-4" aria-label={`File: ${fileQueue[0]?.name}`}>
                  {fileQueue[0]?.name}
                </p>
                <div
                  className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={status === 'processing' ? 92 : 45}
                  aria-label="Compression progress"
                >
                  <div className={`bg-rose-600 h-full transition-all duration-700 ease-out ${
                    status === 'processing' ? 'w-[92%]' : 'w-[45%]'
                  }`} />
                </div>
              </div>
            )}

            {/* ── COMPLETED ─────────────────────────────────────────────── */}
            {status === 'completed' && (
              <div
                className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500"
                role="status"
                aria-live="polite"
                aria-label="Compression complete. Your PDF is ready to download."
              >
                <div
                  className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100"
                  aria-hidden="true"
                >
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
                  Compressed!
                </h2>
                <p className="text-gray-500 mb-6">Your PDF has been compressed. Click below to download.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-blue-200 hover:-translate-y-1 flex items-center justify-center gap-4"
                    aria-label="Download your compressed PDF file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD COMPRESSED PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                    aria-label="Compress another PDF file"
                  >
                    Compress another file
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

export default CompressPdf;