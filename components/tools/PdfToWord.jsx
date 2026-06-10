'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pdf-to-word'];
const BTN_TEXT = 'Select PDF File';
const DL_TEXT = 'DOWNLOAD WORD FILE';

// Tailwind JIT-safe color dictionary
const THEME = {
  bg: 'bg-rose-600',
  text: 'text-rose-600',
  border: 'border-rose-600',
  hoverBorder: 'hover:border-rose-300',
  focusRing: 'focus:ring-rose-500'
};



// ─── Component ────────────────────────────────────────────────────────────────
const PdfToWord = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => {
      const seo = config?.seo || { h1: "Convert PDF to Word", subtitle: "Free online tool to transform PDFs into editable DOCX files effortlessly." };
      
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">


          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">

            {/* ── IDLE STATE ──────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article
                className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700"
                itemScope
                itemType="https://schema.org/SoftwareApplication"
              >
                {/* Hidden SEO metadata for crawlers */}
                <meta itemProp="name" content="PDF to Word Converter" />
                <meta itemProp="applicationCategory" content="UtilitiesApplication" />
                <meta itemProp="operatingSystem" content="Web Browser" />
                <meta itemProp="offers" content='{"@type":"Offer","price":"0","priceCurrency":"USD"}' />

                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    {seo.h1}
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    {seo.subtitle}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mt-5 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    <span>✓ 100% Free</span>
                    <span>✓ No Signup</span>
                    <span>✓ No Watermark</span>
                    <span>✓ Secure & Private</span>
                    <span>✓ Instant Download</span>
                  </div>
                </header>

                {/* Upload Area */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? `${THEME.border} scale-[1.02] bg-green-50` : `border-gray-200 bg-white ${THEME.hoverBorder}`}`}
                  role="region"
                  aria-label="PDF file upload area"
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full focus-within:outline-none">
                    <div className={`${THEME.bg} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}>
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className={`inline-block ${THEME.bg} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg transform group-hover:shadow-2xl transition-all`}>
                        {BTN_TEXT}
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop file here</p>
                    </div>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload PDF file to convert to Word"
                      title="Upload PDF file"
                    />
                  </label>
                </div>

              </article>
            )}

            {/* ── UPLOADING / PROCESSING STATE ──────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg animate-in fade-in scale-in duration-300">
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className={`${THEME.text} animate-bounce w-12 h-12`} />
                      : <Loader2 className={`${THEME.text} animate-spin w-12 h-12`} />
                    }
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-gray-400 text-sm mb-8 truncate max-w-xs mx-auto">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className={`${THEME.bg} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
                </div>
              </div>
            )}

            {/* ── COMPLETED STATE ───────────────────────────────────────────── */}
            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
                  <CheckCircle2 size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Success!</h1>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className={`${THEME.bg} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 transition-all flex items-center justify-center gap-4`}
                    aria-label="Download converted Word file"
                  >
                    <Download size={28} /> {DL_TEXT}
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors focus:outline-none"
                  >
                    Convert another file
                  </button>
                </div>
              </div>
            )}


                {/* ── SEO CONTENT SECTION (Fully Crawlable and Indexed) ── */}
                <section className="w-full max-w-4xl mt-16 md:mt-24 space-y-12 text-gray-600">

                  {/* How It Works */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      How to Convert PDF to Word Online
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        { step: '1', title: 'Upload Your PDF', desc: 'Click "Select PDF File" or drag and drop your PDF document into the upload area. Supports any PDF file up to 50MB.' },
                        { step: '2', title: 'Auto Conversion', desc: 'Our engine instantly converts your PDF to an editable Word DOCX file, preserving fonts, tables, and layout.' },
                        { step: '3', title: 'Download DOCX', desc: 'Click Download to save your Word file. Open it directly in Microsoft Word, Google Docs, or LibreOffice.' },
                      ].map(({ step, title, desc }) => (
                        <div key={step} className="bg-white rounded-3xl p-6 shadow-sm text-center">
                          <div className={`w-12 h-12 rounded-full ${THEME.bg} text-white font-black text-xl flex items-center justify-center mx-auto mb-4`}>{step}</div>
                          <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      Why Use FreePDFConvert PDF to Word Converter?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { title: 'Completely Free, No Hidden Costs', desc: 'Convert unlimited PDFs to Word for free. No subscription, no credit card, no limitations.' },
                        { title: 'No Registration Required', desc: 'Start converting PDF to Word instantly. No account, no email, no personal data needed.' },
                        { title: 'Accurate Format Preservation', desc: 'Tables, fonts, columns, and images are kept intact during PDF to DOCX conversion.' },
                        { title: 'Secure & Private Conversion', desc: 'Files are encrypted with SSL and deleted from servers after 1 hour. Your data stays safe.' },
                        { title: 'Works in Any Browser', desc: 'No software install required. Works on Chrome, Firefox, Safari, Edge — on PC, Mac, or mobile.' },
                        { title: 'Lightning Fast Results', desc: 'Most PDF to Word conversions complete in under 10 seconds, even for large documents.' },
                      ].map(({ title, desc }) => (
                        <div key={title} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                          <CheckCircle2 className={`${THEME.text} mt-1 shrink-0`} size={20} />
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                            <p className="text-sm text-gray-500">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {[
                        { q: 'How do I convert PDF to Word for free?', a: 'Simply upload your PDF file on this page, wait a few seconds for conversion, then click Download. The entire process is free with no signup required.' },
                        { q: 'Does PDF to Word conversion preserve formatting?', a: 'Yes. FreePDFConvert preserves fonts, tables, columns, headings, and images during conversion. Complex layouts may vary slightly depending on PDF type.' },
                        { q: 'Is it safe to convert my PDF to Word online?', a: 'Absolutely. All uploads use SSL encryption. Files are stored temporarily and automatically deleted from our servers after 1 hour.' },
                        { q: 'Can I convert a scanned PDF to Word?', a: 'Yes. Our OCR (Optical Character Recognition) technology can extract text from scanned PDFs and convert them into editable Word documents.' },
                        { q: 'What Word format does the converted file use?', a: 'The output is in .docx format, which is fully compatible with Microsoft Word 2007 and later, Google Docs, LibreOffice, and WPS Office.' },
                        { q: 'Is there a file size limit for PDF to Word conversion?', a: 'You can convert PDF files up to 50MB in size, completely free, without creating an account.' },
                      ].map(({ q, a }) => (
                        <details key={q} className="bg-white rounded-2xl shadow-sm group border border-transparent hover:border-gray-100 transition-colors">
                          <summary className="p-5 font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center focus:outline-none">
                            {q}
                            <span className={`${THEME.text} font-black text-lg group-open:rotate-45 transition-transform`}>+</span>
                          </summary>
                          <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
                        </details>
                      ))}
                    </div>
                  </div>

                  {/* Related Tools */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      Other Free PDF Tools You May Need
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { href: '/merge-pdf', label: 'Merge PDF' },
                        { href: '/compress-pdf', label: 'Compress PDF' },
                        { href: '/pdf-to-excel', label: 'PDF to Excel' },
                        { href: '/pdf-to-jpg', label: 'PDF to JPG' },
                        { href: '/word-to-pdf', label: 'Word to PDF' },
                        { href: '/split-pdf', label: 'Split PDF' },
                        { href: '/unlock-pdf', label: 'Unlock PDF' },
                        { href: '/protect-pdf', label: 'Protect PDF' },
                      ].map(({ href, label }) => (
                        <a
                          key={href}
                          href={href}
                          className={`bg-white rounded-2xl p-4 shadow-sm text-center text-sm font-bold text-gray-700 hover:${THEME.text} hover:shadow-md transition-all border border-transparent hover:border-gray-100`}
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>

                </section>
          </main>

          <div className="mt-10 md:mt-20">
            <Footer />
          </div>

        </div>
      );
    }}
  </BaseToolLogic>
);

export default PdfToWord;