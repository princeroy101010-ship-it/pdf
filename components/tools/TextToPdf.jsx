'use client';
import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['text-to-pdf'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select Text File';
const DL_TEXT = 'DOWNLOAD PDF';

// ─── FAQ DATA (single source of truth) ───────────────────────────────────────
// ✅ FIX: Define FAQs ONCE — used in both JSON-LD and rendered HTML.
//         Previously, JSON-LD and inline microdata had separate FAQ lists
//         causing Google Search Console to flag 3 "Unnamed item" errors.
const FAQ_ITEMS = [
  {
    q: 'How do I convert text to PDF for free?',
    a: 'Simply upload your .txt file on this page, click Convert, and download the PDF — completely free, no sign-up needed.',
  },
  {
    q: 'Can I convert a TXT file to PDF online?',
    a: 'Yes! FreePDFConvert lets you convert any .txt or plain text file to a professional PDF document online, right in your browser — no software needed.',
  },
  {
    q: 'Will my PDF have a watermark?',
    a: 'No. FreePDFConvert generates clean PDF files with absolutely no watermarks, logos, or branding added to your converted document.',
  },
  {
    q: 'Is FreePDFConvert safe and secure?',
    a: 'Yes. All file transfers use HTTPS encryption. Your text files are permanently deleted from our servers immediately after conversion. We never read or share your content.',
  },
  {
    q: 'What devices support this text to PDF converter?',
    a: 'Our tool works on all devices — Windows, Mac, Linux, iPhone, iPad, and Android — in any modern web browser. No app installation required.',
  },
  {
    q: 'Is there a file size limit?',
    a: 'FreePDFConvert supports large text files. You can convert .txt files to PDF free with no restrictions on file size or number of conversions.',
  },
];

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
// ✅ FIX: FAQPage schema now uses FAQ_ITEMS — same questions shown in HTML.
//         Removed duplicate WebSite schema (already in layout.js #website).
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.freepdfconvert.io/text-to-pdf',
      url: 'https://www.freepdfconvert.io/text-to-pdf',
      name: 'Text to PDF Converter – Free Online Tool | FreePDFConvert',
      description:
        'Convert text to PDF online for free. No installation, no sign-up required. Turn any TXT file into a professional PDF in seconds — fast, secure and 100% free.',
      isPartOf: { '@id': 'https://www.freepdfconvert.io/#website' },
      about: { '@id': 'https://www.freepdfconvert.io/text-to-pdf/#software' },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.freepdfconvert.io/' },
          { '@type': 'ListItem', position: 2, name: 'Text to PDF', item: 'https://www.freepdfconvert.io/text-to-pdf' },
        ],
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://www.freepdfconvert.io/text-to-pdf/#software',
      name: 'Text to PDF Converter',
      url: 'https://www.freepdfconvert.io/text-to-pdf',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All – Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Convert TXT to PDF free',
        'No registration required',
        'Instant PDF download',
        'Secure file processing',
        'Works on all devices',
        'No watermark on output',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '1987',
        bestRating: '5',
        worstRating: '1',
      },
    },
    // ✅ FIX: Single FAQPage — built from FAQ_ITEMS, matches rendered HTML exactly.
    {
      '@type': 'FAQPage',
      '@id': 'https://www.freepdfconvert.io/text-to-pdf/#faq',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@type': 'HowTo',
      name: 'How to Convert Text to PDF Online',
      description: 'Convert any TXT file to PDF in 3 simple steps using FreePDFConvert.',
      step: [
        {
          '@type': 'HowToStep',
          position: '1',
          name: 'Upload Your Text File',
          text: "Click 'Select Text File' or drag and drop your .txt file into the upload area on FreePDFConvert.",
        },
        {
          '@type': 'HowToStep',
          position: '2',
          name: 'Convert to PDF',
          text: 'Our converter instantly processes your text file and generates a professional PDF document.',
        },
        {
          '@type': 'HowToStep',
          position: '3',
          name: 'Download Your PDF',
          text: 'Click Download PDF to save your file. Your text file is deleted from our servers immediately after conversion.',
        },
      ],
    },
  ],
};

const TextToPdf = () => (
  <BaseToolLogic config={config}>
    {({
      status,
      dragActive,
      fileQueue,
      acceptedFiles,
      handleFileChange,
      handleDragOver,
      handleDragLeave,
      handleDrop,
      reset,
      handleDownload,
    }) => {
      return (
        <>
          {/* ─── HEAD / SEO ─────────────────────────────────────────────── */}
          <Head>
            <title>Text to PDF Converter Free Online, No Sign-Up</title>
            <meta
              name="description"
              content="Convert text to PDF online free — no email, no install needed. Turn any TXT file into a clean PDF in seconds. No watermark. Fast, private & 100% free."
            />
            <meta
              name="keywords"
              content="text to pdf, txt to pdf, convert text to pdf, text to pdf converter, txt to pdf converter, text file to pdf, online text to pdf, free text to pdf, convert txt to pdf online, plain text to pdf, notepad to pdf, text document to pdf"
            />
            <meta
              name="robots"
              content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            />
            <meta name="author" content="FreePDFConvert" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://www.freepdfconvert.io/text-to-pdf" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta
              property="og:title"
              content="Text to PDF Converter – Free Online, No Sign-Up | FreePDFConvert"
            />
            <meta
              property="og:description"
              content="Convert text to PDF online free — no email, no install. Turn any TXT file into a clean PDF instantly. No watermark added."
            />
            <meta property="og:url" content="https://www.freepdfconvert.io/text-to-pdf" />
            <meta property="og:image" content="https://www.freepdfconvert.io/og-text-to-pdf.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta
              property="og:image:alt"
              content="FreePDFConvert – Free Text to PDF Converter"
            />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta
              name="twitter:title"
              content="Text to PDF Converter – Free Online | FreePDFConvert"
            />
            <meta
              name="twitter:description"
              content="Convert any TXT file to PDF online for free. No sign-up, no watermark, instant download."
            />
            <meta name="twitter:image" content="https://www.freepdfconvert.io/og-text-to-pdf.png" />

            {/* ✅ Single JSON-LD block — no microdata in HTML */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </Head>

          {/* ─── PAGE ───────────────────────────────────────────────────── */}
          <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Header />

            <main
              id="main-content"
              className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6"
              role="main"
              aria-label="Text to PDF Converter Tool"
            >
              {/* ── IDLE STATE ─────────────────────────────────────────── */}
              {status === 'idle' && (
                // ✅ FIX: Removed itemScope/itemType/itemProp microdata from article.
                //         Microdata + JSON-LD together caused the 3 invalid FAQ items.
                <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                  {/* Hero Header */}
                  <header className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                      Text to PDF Converter
                    </h1>
                    <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                      Convert any text file to PDF online — free, instant, no sign-up required.
                      Turn your TXT file into a clean PDF in seconds.
                    </p>
                  </header>

                  {/* Drop Zone */}
                  <section
                    aria-label="Upload your text file"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                      ${dragActive
                        ? `border-${COLOR} scale-[1.02] bg-green-50`
                        : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                    role="region"
                  >
                    <label
                      htmlFor="txt-upload-input"
                      className="group cursor-pointer flex flex-col items-center w-full"
                      aria-label="Select a text file to convert to PDF"
                    >
                      <div
                        className={`bg-${COLOR} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}
                        aria-hidden="true"
                      >
                        <Plus size={32} strokeWidth={3} />
                      </div>
                      <div className="text-center space-y-4">
                        <span
                          className={`inline-block bg-${COLOR} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg`}
                        >
                          {BTN_TEXT}
                        </span>
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">
                          or drop file here
                        </p>
                      </div>
                      <input
                        id="txt-upload-input"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept={acceptedFiles}
                        aria-label="Upload text file"
                      />
                    </label>
                  </section>

                  {/* Trust Badges */}
                  <section
                    aria-label="Key features"
                    className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5 text-sm text-gray-500 font-semibold"
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
                        className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </section>

                  {/* How It Works */}
         
                </article>
              )}

              {/* ── UPLOADING / PROCESSING STATE ───────────────────────── */}
              {(status === 'uploading' || status === 'processing') && (
                <div
                  className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg"
                  role="status"
                  aria-live="polite"
                  aria-label={
                    status === 'uploading'
                      ? 'Uploading your text file'
                      : 'Converting text to PDF'
                  }
                >
                  <div className="relative mb-8 flex justify-center items-center">
                    <Settings
                      className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                      {status === 'uploading' ? (
                        <Upload
                          className={`text-${COLOR} animate-bounce w-12 h-12`}
                          aria-hidden="true"
                        />
                      ) : (
                        <Loader2
                          className={`text-${COLOR} animate-spin w-12 h-12`}
                          aria-hidden="true"
                        />
                      )}
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
                      className={`bg-${COLOR} h-full transition-all duration-700 ${
                        status === 'processing' ? 'w-[92%]' : 'w-[45%]'
                      }`}
                    />
                  </div>
                </div>
              )}

              {/* ── COMPLETED STATE ─────────────────────────────────────── */}
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
                  <p className="text-gray-500 mb-6">
                    Your text has been converted to PDF. Click below to download.
                  </p>
                  <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                    <button
                      onClick={handleDownload}
                      className={`bg-${COLOR} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-transform`}
                      aria-label="Download your converted PDF file"
                    >
                      <Download size={28} aria-hidden="true" /> {DL_TEXT}
                    </button>
                    <button
                      onClick={reset}
                      className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                      aria-label="Convert another text file"
                    >
                      Convert another file
                    </button>
                  </div>
                </div>
              )}



                       <section
                    aria-labelledby="how-it-works-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="how-it-works-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      How to Convert Text to PDF — 3 Easy Steps
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                      {[
                        {
                          step: '1',
                          title: 'Upload Your Text File',
                          desc: 'Click "Select Text File" or drag and drop your .txt file into the upload area.',
                          icon: '📤',
                        },
                        {
                          step: '2',
                          title: 'Convert to PDF',
                          desc: 'Our converter instantly processes your text and generates a clean, professional PDF document.',
                          icon: '⚙️',
                        },
                        {
                          step: '3',
                          title: 'Download Your PDF',
                          desc: 'Click Download PDF to save your file. No watermark, no sign-up — your file deleted immediately after.',
                          icon: '📥',
                        },
                      ].map(({ step, title, desc, icon }) => (
                        <li
                          key={step}
                          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center"
                        >
                          <div className="text-4xl mb-3" aria-hidden="true">
                            {icon}
                          </div>
                          <h3 className="font-black text-gray-900 text-lg mb-2">
                            Step {step}: {title}
                          </h3>
                          <p className="text-gray-500 text-sm">{desc}</p>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {/* Why Use FreePDFConvert */}
                  <section
                    aria-labelledby="why-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="why-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      Why Use FreePDFConvert for Text to PDF?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        {
                          title: 'No Sign-Up Required',
                          desc: 'Convert TXT to PDF instantly without creating an account or providing an email address — just upload and go.',
                        },
                        {
                          title: 'No Watermark on Output',
                          desc: 'Your downloaded PDF is completely clean. No logos, no branding, no watermarks added to your document.',
                        },
                        {
                          title: 'Perfect PDF Formatting',
                          desc: 'Your text is formatted into a properly structured, readable PDF with clean margins and professional layout.',
                        },
                        {
                          title: 'Works on All Devices',
                          desc: 'Use our text to PDF converter on Windows, Mac, iPhone, or Android — any browser, any device, anywhere.',
                        },
                        {
                          title: 'Files Deleted Immediately',
                          desc: 'Your uploaded text file is permanently deleted from our servers right after conversion. 100% private.',
                        },
                        {
                          title: 'Completely Free Forever',
                          desc: 'No hidden charges, no premium plan. Convert unlimited text files to PDF for free, always and forever.',
                        },
                      ].map(({ title, desc }) => (
                        <div
                          key={title}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
                        >
                          <span className="text-2xl mt-0.5" aria-hidden="true">
                            ✅
                          </span>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* ── FAQ ───────────────────────────────────────────── */}
                  {/* ✅ FIX: Removed itemScope/itemType/itemProp microdata entirely.
                             Schema is declared once in JSON-LD above (FAQ_ITEMS).
                             Plain semantic HTML only — no schema.org attributes. */}
                  <section
                    aria-labelledby="faq-heading"
                    className="mt-16 w-full max-w-3xl mb-8"
                  >
                    <h2
                      id="faq-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {FAQ_ITEMS.map(({ q, a }) => (
                        <div
                          key={q}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                        >
                          <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* SEO Paragraph Content */}
                  <section
                    aria-labelledby="seo-content-heading"
                    className="mt-4 w-full max-w-3xl mb-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                  >
                    <h2
                      id="seo-content-heading"
                      className="text-xl font-black text-gray-900 mb-4"
                    >
                      Convert Text to PDF Online — Fast & Free
                    </h2>
                    <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                      <p>
                        <strong className="text-gray-700">FreePDFConvert</strong> is the fastest
                        way to <strong className="text-gray-700">convert text to PDF</strong>{' '}
                        online, completely free and without registration. Whether you have a plain{' '}
                        <strong className="text-gray-700">.txt file</strong>, a Notepad document,
                        or any other plain text file, our{' '}
                        <strong className="text-gray-700">text to PDF converter</strong> turns it
                        into a clean, professional PDF in seconds.
                      </p>
                      <p>
                        Unlike other tools, our{' '}
                        <strong className="text-gray-700">free TXT to PDF converter</strong> works
                        entirely in your browser — no software download, no email required. The
                        output PDF is completely watermark-free, making it perfect for professional
                        use, sharing, or printing.
                      </p>
                      <p>
                        Need to{' '}
                        <strong className="text-gray-700">convert a text file to PDF</strong>{' '}
                        quickly? Simply upload your file, let our converter process it, and download
                        your <strong className="text-gray-700">PDF file</strong> instantly. Your
                        file is deleted from our servers immediately after conversion, making
                        FreePDFConvert the most private{' '}
                        <strong className="text-gray-700">online text to PDF tool</strong>{' '}
                        available.
                      </p>
                    </div>
                  </section>
            </main>

            <div className="mt-10 md:mt-20">
              <Footer />
            </div>
          </div>
        </>
      );
    }}
  </BaseToolLogic>
);

export default TextToPdf;