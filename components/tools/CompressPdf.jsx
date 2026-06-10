'use client';
// ============================================================
// ✅ SEO NOTE:
// Title/description/og/twitter/robots/canonical → handled in
// [slug]/page.jsx via generateMetadata(). Do NOT add <title>
// or <meta> tags here — 'use client' renders inside <body>.
//
// ✅ FAQ FIX:
// Declarative self-contained FAQPage JSON-LD mapped directly from
// a single FAQ_ITEMS array for perfect layout sync.
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://freepdfconvert.io/compress-pdf',
      url: 'https://freepdfconvert.io/compress-pdf',
      name: 'Compress PDF Online Free – Reduce PDF File Size | FreePDFConvert',
      description: 'Compress PDF files online for free. Reduce PDF size up to 90% without losing quality. No signup, no watermark, instant download. Fast & secure.',
      isPartOf: { '@id': 'https://freepdfconvert.io/#website' },
      about: { '@id': 'https://freepdfconvert.io/compress-pdf/#software' },
      breadcrumb: { '@id': 'https://freepdfconvert.io/compress-pdf/#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://freepdfconvert.io/compress-pdf/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freepdfconvert.io/' },
        { '@type': 'ListItem', position: 2, name: 'Compress PDF', item: 'https://freepdfconvert.io/compress-pdf' },
      ],
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

const TrustBadge = ({ label }) => (
  <span className="bg-white border border-slate-100 rounded-xl px-4 py-2 shadow-sm text-sm text-slate-600 font-semibold tracking-wide">
    {label}
  </span>
);

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4 items-start hover:shadow-md transition-shadow duration-300">
    <div className="text-xl bg-rose-50 text-rose-600 p-2 rounded-xl flex items-center justify-center shrink-0" aria-hidden="true">
      <CheckCircle2 size={20} />
    </div>
    <div>
      <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

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
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
          <Script
            id="compress-pdf-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />

          <Header />

          <main
            id="main-content"
            className="flex-1 flex flex-col items-center justify-start pt-8 md:pt-12 px-4 md:px-6 w-full max-w-7xl mx-auto"
            role="main"
            aria-label="Compress PDF Tool"
          >
            {/* ── IDLE STATE ──────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-500">
                
                {/* Hero / Header Section */}
                <header className="text-center mb-8 md:mb-10 max-w-3xl mx-auto">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                    {seo?.h1 ?? 'Compress PDF Online Free'}
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
                    {seo?.subtitle ?? 'Reduce PDF file size up to 90% without losing quality. Free, instant, no signup required.'}
                  </p>
                </header>

                {/* Main Interaction Card Workflow */}
                <div className="w-full max-w-2xl bg-white rounded-3xl border border-slate-100 shadow-xl p-4 md:p-6 mb-12">
                  
                  {/* Step 1: Drop Zone / File Info UI */}
                  <section aria-label="Upload your PDF file" className="w-full mb-6">
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative w-full ${
                        fileQueue.length > 0 ? 'min-h-[100px]' : 'min-h-[240px] md:min-h-[280px]'
                      } rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4
                        ${dragActive ? 'border-rose-500 bg-rose-50/50 scale-[1.01]' : 'border-slate-200 bg-slate-50/50 hover:border-rose-400 hover:bg-white'}`}
                      role="region"
                    >
                      <label
                        htmlFor="pdf-upload-input"
                        className="group cursor-pointer flex flex-col items-center w-full py-4"
                        aria-label="Select a PDF file to compress"
                      >
                        {fileQueue.length === 0 ? (
                          <>
                            <div className="bg-rose-600 text-white p-4 rounded-2xl shadow-lg shadow-rose-200 group-hover:scale-105 transition-transform duration-300 mb-4" aria-hidden="true">
                              <Plus size={28} strokeWidth={2.5} />
                            </div>
                            <span className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-md active:scale-98 transition-all">
                              Select PDF File
                            </span>
                            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-3">
                              or drop file here
                            </p>
                          </>
                        ) : (
                          <div className="flex flex-col items-center w-full px-4">
                            <p className="text-slate-700 font-bold text-sm bg-slate-100 px-4 py-2 rounded-lg max-w-full truncate mb-2">
                              📎 {fileQueue[0]?.name}
                            </p>
                            <span className="text-rose-600 hover:text-rose-700 font-bold text-xs underline">
                              Change Selected File
                            </span>
                          </div>
                        )}
                        <input
                          id="pdf-upload-input"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept={acceptedFiles}
                        />
                      </label>
                    </div>
                  </section>

                  {/* Step 2: Compression Level Setup (Rendered Contextually) */}
                  {fileQueue.length > 0 && (
                    <section className="w-full border-t border-slate-100 pt-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="mb-4">
                        <h2 className="text-lg font-bold text-slate-800">Select Compression Profile</h2>
                        <p className="text-xs text-slate-400">Optimize and balance visual clarity against desired output size</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                        {[
                          { key: 'extreme', label: 'Extreme', desc: 'Lowest quality, maximum size reduction', Icon: Zap },
                          { key: 'recommended', label: 'Recommended', desc: 'Good quality, optimal compression', Icon: CheckCircle2 },
                          { key: 'low', label: 'Less', desc: 'Near-original clarity, light compression', Icon: Settings },
                        ].map(({ key, label, desc, Icon }) => (
                          <button
                            key={key}
                            type="button"
                            onClick={() => setCompressionLevel(key)}
                            aria-pressed={compressionLevel === key}
                            className={`p-4 rounded-xl border-2 transition-all text-left flex flex-col justify-between ${
                              compressionLevel === key
                                ? 'border-rose-600 bg-rose-50/30 shadow-sm'
                                : 'border-slate-100 bg-white hover:border-slate-200'
                            }`}
                          >
                            <div>
                              <div className={`w-8 h-8 rounded-lg mb-3 flex items-center justify-center ${
                                compressionLevel === key ? 'bg-rose-600 text-white' : 'bg-slate-100 text-slate-500'
                              }`}>
                                <Icon size={16} aria-hidden="true" />
                              </div>
                              <div className="font-black text-slate-800 text-xs uppercase tracking-wider">{label}</div>
                              <div className="text-[11px] text-slate-400 leading-tight mt-1">{desc}</div>
                            </div>
                          </button>
                        ))}
                      </div>

                      <button
                        onClick={() => startProcessing()}
                        className="w-full bg-rose-600 hover:bg-rose-700 text-white py-4 rounded-xl text-lg font-black shadow-lg shadow-rose-100 transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                        aria-label="Start compressing your PDF"
                      >
                        COMPRESS PDF NOW
                      </button>
                    </section>
                  )}
                </div>

                {/* Trust Badges Bar */}
                <section aria-label="Key features" className="flex flex-wrap justify-center gap-3 max-w-4xl px-4">
                  {[
                    '🔒 100% Secure & Private',
                    '⚡ Instant Processing',
                    '🆓 Completely Free',
                    '🚫 No Watermarks',
                    '🌐 Browser Based',
                    '♾️ Unlimited Runs',
                  ].map((badge) => (
                    <TrustBadge key={badge} label={badge} />
                  ))}
                </section>

                {/* Content Section: How It Works */}
                <section aria-labelledby="how-it-works-heading" className="mt-20 w-full max-w-3xl border-t border-slate-100 pt-16">
                  <h2 id="how-it-works-heading" className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-10">
                    How to Compress a PDF — 3 Easy Steps
                  </h2>
                  <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                    {[
                      { step: '1', title: 'Upload File', desc: 'Click "Select PDF File" or drag and drop your document target directly into the wrapper box.', icon: '📤' },
                      { step: '2', title: 'Pick Level', desc: 'Select Extreme, Recommended, or Less profile matching your conversion goals.', icon: '⚙️' },
                      { step: '3', title: 'Download', desc: 'Execute processing logic, grab your lightweight document, and go. File data wipes instantly.', icon: '📥' },
                    ].map(({ step, title, desc, icon }) => (
                      <li key={step} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100/80 text-center">
                        <div className="text-3xl mb-3" aria-hidden="true">{icon}</div>
                        <h3 className="font-bold text-slate-900 text-base mb-1.5">Step {step}: {title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Content Section: Value Proposition Grid */}
                <section aria-labelledby="why-heading" className="mt-20 w-full max-w-3xl">
                  <h2 id="why-heading" className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-10">
                    Why Use FreePDFConvert to Compress PDF?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: 'Up to 90% Size Reduction', desc: 'Our smart compression engine reduces PDF file size dramatically while preserving readability and structure.' },
                      { title: 'Three Compression Levels', desc: 'Choose Extreme for the smallest file, Recommended for the best balance, or Less for near-original quality.' },
                      { title: 'No Sign-Up Required', desc: 'Compress PDFs instantly without creating an account or providing your email — just upload and go.' },
                      { title: 'No Watermark Added', desc: 'Your compressed PDF is completely clean. No logos, no branding, no watermarks — ever.' },
                      { title: 'Files Deleted Immediately', desc: 'Your PDF is permanently deleted from our servers right after compression. 100% private and secure.' },
                      { title: 'Works on All Devices', desc: 'Compress PDFs on Windows, Mac, iPhone, or Android — any browser, any device, no installation needed.' },
                    ].map((f) => (
                      <FeatureCard key={f.title} {...f} />
                    ))}
                  </div>
                </section>

                {/* Content Section: Profiles Explained */}
                <section aria-labelledby="levels-heading" className="mt-20 w-full max-w-3xl">
                  <h2 id="levels-heading" className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-10">
                    Compression Profiles Explained
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { icon: '⚡', title: 'Extreme', desc: 'Maximum file size reduction. Best for restrictive email limits. Some image content quality drops.' },
                      { icon: '✨', title: 'Recommended', desc: 'Ideal standard profile. Noticeably smaller footprint with robust preservation of structural details.' },
                      { icon: '🎯', title: 'Less', desc: 'Minimal alteration footprint. Optimized for heavy vector archives and clean digital asset retention.' },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm text-center">
                        <div className="text-2xl mb-2.5" aria-hidden="true">{icon}</div>
                        <h3 className="font-bold text-slate-900 mb-1 text-sm">{title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Content Section: Plain HTML FAQs */}
                <section aria-labelledby="faq-heading" className="mt-20 w-full max-w-3xl mb-6">
                  <h2 id="faq-heading" className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-10">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {FAQ_ITEMS.map(({ q, a }) => (
                      <div key={q} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-slate-900 text-sm mb-1.5">{q}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed">{a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Editorial Copy Block */}
                <section aria-labelledby="seo-content-heading" className="mt-12 w-full max-w-3xl mb-12 bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm">
                  <h2 id="seo-content-heading" className="text-lg font-black text-slate-900 mb-3">
                    Compress PDF Online — Fast, Free & Secure
                  </h2>
                  <div className="text-slate-500 text-xs space-y-3 leading-relaxed">
                    <p>
                      <strong className="text-slate-700">FreePDFConvert</strong> is the fastest way to{' '}
                      <strong className="text-slate-700">compress PDF files online</strong>, completely free
                      and without registration. Whether you need to shrink a PDF for email, reduce a scanned
                      document, or minimize a presentation file, our{' '}
                      <strong className="text-slate-700">PDF compressor</strong> handles it in seconds.
                    </p>
                    <p>
                      Unlike other tools, our{' '}
                      <strong className="text-slate-700">free PDF size reducer</strong> gives you three
                      compression levels so you stay in control of the quality vs. size trade-off. The output
                      is completely watermark-free and ready to share or upload anywhere.
                    </p>
                    <p>
                      Need to <strong className="text-slate-700">reduce PDF file size</strong> quickly? Upload
                      your file, choose your compression level, and download the result instantly. Your file is
                      deleted from our servers immediately after, making FreePDFConvert the most private{' '}
                      <strong className="text-slate-700">online PDF compressor</strong> available.
                    </p>
                  </div>
                </section>

              </article>
            )}

            {/* ── LOADING / CONVERTING STATES ─────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div
                className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 text-center w-full max-w-md my-auto animate-in zoom-in-95 duration-200"
                role="status"
                aria-live="polite"
                aria-label={status === 'uploading' ? 'Uploading your PDF' : 'Compressing your PDF'}
              >
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings
                    className="text-slate-100 animate-[spin_10s_linear_infinite] w-28 h-28 absolute"
                    strokeWidth={1}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 bg-rose-50 text-rose-600 p-5 rounded-2xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="animate-bounce w-10 h-10" aria-hidden="true" />
                      : <Loader2 className="animate-spin w-10 h-10" aria-hidden="true" />
                    }
                  </div>
                </div>
                <h2 className="text-xl font-black text-slate-850 mb-1 tracking-tight uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Compressing'}...
                </h2>
                <p className="text-slate-400 font-medium text-xs mb-6 truncate px-4">
                  {fileQueue[0]?.name}
                </p>
                <div
                  className="w-full bg-slate-100 h-2 rounded-full overflow-hidden shadow-inner"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={status === 'processing' ? 92 : 45}
                >
                  <div className="bg-rose-600 h-full transition-all duration-500 ease-out" style={{ width: status === 'processing' ? '92%' : '45%' }} />
                </div>
              </div>
            )}

            {/* ── COMPLETED STATE ─────────────────────────────────────────── */}
            {status === 'completed' && (
              <div
                className="text-center w-full max-w-md my-auto animate-in fade-in slide-in-from-bottom-4 duration-400"
                role="status"
                aria-live="polite"
              >
                <div className="bg-emerald-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100" aria-hidden="true">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">
                  Compressed!
                </h2>
                <p className="text-slate-400 text-sm mb-6">Your optimized PDF generation sequence ended successfully.</p>
                
                <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col items-center gap-4">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-4 text-base font-black rounded-xl transition-all shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Download size={20} aria-hidden="true" /> DOWNLOAD COMPRESSED PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-slate-400 hover:text-slate-600 font-bold text-xs tracking-wide transition-colors uppercase mt-1"
                  >
                    Compress Another File
                  </button>
                </div>
              </div>
            )}

          </main>

          <div className="mt-auto">
            <Footer />
          </div>
        </div>
      );
    }}
  </BaseToolLogic>
);

export default CompressPdf;