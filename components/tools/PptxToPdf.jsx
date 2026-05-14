'use client';
import React from 'react';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pptx-to-pdf'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select PPTX File';
const DL_TEXT = 'DOWNLOAD PDF';

const PdfToExcel = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => {

      // ─── SEO VALUES ───
      const SEO = {
        title:       "PPTX to PDF Converter – Free Online Tool | FreePDFConvert",
        description: "Convert PowerPoint to PDF free online. No signup, no watermark. Fast & secure PPTX to PDF converter. Works on Windows, Mac, iPhone & Android.",
        keywords:    "pptx to pdf, powerpoint to pdf, convert pptx to pdf, pptx to pdf free, powerpoint to pdf converter, convert powerpoint to pdf online, pptx to pdf online, free pptx to pdf, ppt to pdf, ppt to pdf converter, convert ppt to pdf free, powerpoint to pdf no watermark, pptx to pdf without losing quality, save powerpoint as pdf, export ppt to pdf",
        h1:          "Convert PPTX to PDF Free Online",
        subtitle:    "Fast, free & secure. No signup required. Convert any PowerPoint file to PDF in seconds — works on all devices.",
        canonical:   `https://freepdfconvert.io/${config.slug}`,
        ogImage:     "/og-pptx-to-pdf.png",
      };

      // ─── JSON-LD: WebApplication Schema ───
      const schemaWebApp = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "PPTX to PDF Converter",
        "url": SEO.canonical,
        "description": SEO.description,
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": [
          "Convert PPTX to PDF online for free",
          "No registration required",
          "No watermark on output PDF",
          "High quality PDF output preserving slides layout",
          "Works on Windows, Mac, Linux, Android, iOS"
        ]
      };

      // ─── JSON-LD: FAQPage Schema ───
      const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I convert PPTX to PDF for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Upload your PPTX or PPT file on FreePDFConvert.io, click Convert, and download your PDF instantly. It's 100% free with no signup required."
            }
          },
          {
            "@type": "Question",
            "name": "Does the PDF keep the PowerPoint formatting and layout?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. FreePDFConvert preserves all slide layouts, fonts, images, and formatting when converting PowerPoint to PDF."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a watermark on the converted PDF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. FreePDFConvert adds zero watermarks to your converted PDF files — completely free and clean output."
            }
          },
          {
            "@type": "Question",
            "name": "Can I convert PPT (older format) as well as PPTX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our converter supports both .pptx and .ppt PowerPoint formats and converts them to high-quality PDF documents."
            }
          },
          {
            "@type": "Question",
            "name": "Does this PowerPoint to PDF converter work on mobile?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. FreePDFConvert works on all devices including iPhone, Android, Windows, Mac, and Linux — no app download needed."
            }
          }
        ]
      };

      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

          {/* ─── SEO HEAD TAGS ─── */}
          <title>{SEO.title}</title>
          <meta name="description" content={SEO.description} />
          <meta name="keywords" content={SEO.keywords} />
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
          <meta name="author" content="FreePDFConvert" />
          <link rel="canonical" href={SEO.canonical} />

          {/* Open Graph */}
          <meta property="og:title" content={SEO.title} />
          <meta property="og:description" content={SEO.description} />
          <meta property="og:url" content={SEO.canonical} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={SEO.ogImage} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="FreePDFConvert" />
          <meta property="og:locale" content="en_US" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={SEO.title} />
          <meta name="twitter:description" content={SEO.description} />
          <meta name="twitter:image" content={SEO.ogImage} />

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApp) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
          />

          {/* ─── PAGE CONTENT (unchanged) ─── */}
          <Header />
          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">

            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    {SEO.h1}
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    {SEO.subtitle}
                  </p>
                </header>

                <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? `border-${COLOR} scale-[1.02] bg-green-50` : 'border-gray-200 bg-white hover:border-green-300'}`}>
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className={`bg-${COLOR} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}>
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className={`inline-block bg-${COLOR} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg`}>{BTN_TEXT}</span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop file here</p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} accept={acceptedFiles} />
                  </label>
                </div>

                {/* ─── SEO CONTENT SECTION ─── */}
                <section className="mt-16 w-full max-w-3xl text-left space-y-8">

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      How to Convert PowerPoint to PDF Free Online
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 text-base">
                      <li>Click <strong>Select PPTX File</strong> or drag &amp; drop your PowerPoint file above.</li>
                      <li>Wait a few seconds while we convert your presentation instantly.</li>
                      <li>Click <strong>Download PDF</strong> — done! No signup, no watermark.</li>
                    </ol>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      Why Use FreePDFConvert for PowerPoint to PDF?
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                      {[
                        "✅ 100% Free — no hidden fees",
                        "✅ No watermark on PDF",
                        "✅ No signup or account needed",
                        "✅ Preserves all slides, fonts & images",
                        "✅ Works on iPhone, Android, PC, Mac",
                        "✅ Secure — files deleted after conversion",
                        "✅ Supports PPT & PPTX formats",
                        "✅ Fast conversion in seconds",
                      ].map((f) => (
                        <li key={f} className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">{f}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {schemaFAQ.mainEntity.map((faq) => (
                        <details key={faq.name} className="bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100 group">
                          <summary className="font-semibold text-gray-800 cursor-pointer list-none flex justify-between items-center">
                            {faq.name}
                            <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                          </summary>
                          <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                            {faq.acceptedAnswer.text}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>

                </section>
                {/* ─── END SEO CONTENT ─── */}

              </article>
            )}

            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg">
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading' ? <Upload className={`text-${COLOR} animate-bounce w-12 h-12`} /> : <Loader2 className={`text-${COLOR} animate-spin w-12 h-12`} />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">{status === 'uploading' ? 'Uploading' : 'Converting'}...</h2>
                <p className="text-gray-400 text-sm mb-8 truncate">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className={`bg-${COLOR} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
                </div>
              </div>
            )}

            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3"><CheckCircle2 size={40} /></div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Success!</h1>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button onClick={handleDownload} className={`bg-${COLOR} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4`}>
                    <Download size={28} /> {DL_TEXT}
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm">Convert another file</button>
                </div>
              </div>
            )}
          </main>
          <div className="mt-10 md:mt-20"><Footer /></div>
        </div>
      );
    }}
  </BaseToolLogic>
);

export default PdfToExcel;