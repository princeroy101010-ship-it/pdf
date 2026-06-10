'use client';
import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pdf-to-Text'];

// Fixed Tailwind compilation issue by providing explicit style primitives
const COLOR_CLASSES = {
  bg: 'bg-rose-600',
  border: 'border-rose-600',
  hoverBorder: 'hover:border-rose-500',
  text: 'text-rose-600'
};

const BTN_TEXT = 'Select PDF File';
const DL_TEXT = 'DOWNLOAD TEXT FILE';




function PdfToTextdata() {
  return (
    <BaseToolLogic config={config}>
      {({
        status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload 
      }) => (
        <>
             {status === 'idle' && (
                <article
                  className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700"
                  itemScope
                  itemType="https://schema.org/SoftwareApplication"
                >
              
               

                  {/* Drop Zone */}
                  <section
                    aria-label="Upload your PDF file"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                      ${dragActive ? `${COLOR_CLASSES.border} scale-[1.02] bg-green-50` : `border-gray-200 bg-white ${COLOR_CLASSES.hoverBorder}`}`}
                    role="region"
                  >
                    <label
                      htmlFor="pdf-upload-input"
                      className="group cursor-pointer flex flex-col items-center w-full"
                      aria-label="Select a PDF file to convert to text"
                    >
                      <div
                        className={`${COLOR_CLASSES.bg} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}
                        aria-hidden="true"
                      >
                        <Plus size={32} strokeWidth={3} />
                      </div>
                      <div className="text-center space-y-4">
                        <span className={`inline-block ${COLOR_CLASSES.bg} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg`}>
                          {BTN_TEXT}
                        </span>
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">
                          or drop file here
                        </p>
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

                  {/* ── TRUST BADGES ──────────────────────────────────── */}
                  <section
                    aria-label="Key features"
                    className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5 text-sm text-gray-500 font-semibold"
                  >
                    {[
                      '🔒 100% Secure & Private',
                      '⚡ Instant Conversion',
                      '🆓 Completely Free',
                      '📄 Supports Scanned PDFs',
                      '🌐 No Install Required',
                      '🌐 No File Size Limit'
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </section>



                </article>
              )}

              {/* ── UPLOADING / PROCESSING STATE ───────────────────────── */}
              {(status === 'uploading' || status === 'processing') && (
                <div
                  className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg"
                  role="status"
                  aria-live="polite"
                  aria-label={status === 'uploading' ? 'Uploading your PDF file' : 'Converting PDF to text'}
                >
                  <div className="relative mb-8 flex justify-center items-center">
                    <Settings
                      className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute"
                      strokeWidth={1}
                      aria-hidden="true"
                    >
                      <title>Processing settings</title>
                    </Settings>
                    <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                      {status === 'uploading'
                        ? <Upload className={`${COLOR_CLASSES.text} animate-bounce w-12 h-12`} aria-hidden="true" />
                        : <Loader2 className={`${COLOR_CLASSES.text} animate-spin w-12 h-12`} aria-hidden="true" />
                      }
                    </div>
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                    {status === 'uploading' ? 'Uploading' : 'Converting'}...
                  </h2>
                  <p className="text-gray-400 text-sm mb-8 truncate" aria-label={`File: ${fileQueue[0]?.name}`}>
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
                      className={`${COLOR_CLASSES.bg} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
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
                  aria-label="Conversion complete. Your text file is ready to download."
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
                  <p className="text-gray-500 mb-6">Your PDF has been converted to text. Click below to download.</p>
                  <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                    <button
                      onClick={handleDownload}
                      className={`${COLOR_CLASSES.bg} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-transform`}
                      aria-label="Download your converted text file"
                    >
                      <Download size={28} aria-hidden="true" /> {DL_TEXT}
                    </button>
                    <button
                      onClick={reset}
                      className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                      aria-label="Convert another PDF file"
                    >
                      Convert another file
                    </button>
                  </div>
                </div>
              )}

        </>
      )}
    </BaseToolLogic>
  );
}

// ─── Main page component ─────────────────────────────────────────────────────
// ✅ Header, H1, badges, features, how-to, FAQ all render on the server.
// ✅ Only <JpgToPdfUploader> is client-side (needs useState).
// ✅ Semrush/Googlebot see full text content without executing any JS.
const PdfToText = () => (
   <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Header />

            <main
              id="main-content"
              className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6"
              role="main"
              aria-label="PDF to Text Converter Tool"
            >

   <header className="text-center mb-8 md:mb-12">
                    <h1
                      className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
                    >
                      PDF to Text Converter
                    </h1>
                    <p
                      className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto"
                      itemProp="description"
                    >
                      Convert PDF to plain text online — free, instant, no sign-up required. Extract text from any PDF in seconds.
                    </p>
                  </header>

                  
              <PdfToTextdata/>
                  <section
                    aria-labelledby="how-it-works-heading"
                    className="mt-16 w-full max-w-3xl"
                    itemScope
                    itemType="https://schema.org/HowTo"
                  >
                    <meta itemProp="name" content="How to Convert PDF to Text Online" />
                    <h2
                      id="how-it-works-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      How to Convert PDF to Text — 3 Easy Steps
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                      {[
                        {
                          step: '1',
                          title: 'Upload Your PDF',
                          desc: 'Click "Select PDF File" or drag and drop your PDF onto the upload area.',
                          icon: '📤'
                        },
                        {
                          step: '2',
                          title: 'Convert Instantly',
                          desc: 'Our engine extracts all text from your PDF — including scanned pages via OCR.',
                          icon: '⚙️'
                        },
                        {
                          step: '3',
                          title: 'Download Text File',
                          desc: 'Click Download to save your .txt file. Your PDF is never stored on our servers.',
                          icon: '📥'
                        }
                      ].map(({ step, title, desc, icon }) => (
                        <li
                          key={step}
                          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center"
                          itemProp="step"
                          itemScope
                          itemType="https://schema.org/HowToStep"
                        >
                          <div className="text-4xl mb-3" aria-hidden="true">{icon}</div>
                          <meta itemProp="position" content={step} />
                          <h3
                            className="font-black text-gray-900 text-lg mb-2"
                            itemProp="name"
                          >
                            Step {step}: {title}
                          </h3>
                          <p className="text-gray-500 text-sm" itemProp="text">{desc}</p>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {/* ── WHY USE FREEPDFCONVERT ─────────────────────────── */}
                  <section
                    aria-labelledby="why-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="why-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      Why Use FreePDFConvert to Extract Text from PDF?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        {
                          title: 'No Sign-Up Required',
                          desc: 'Convert PDF to text instantly without creating an account or providing an email address.'
                        },
                        {
                          title: 'OCR for Scanned PDFs',
                          desc: 'Our built-in OCR technology accurately extracts text from scanned documents and image-based PDFs.'
                        },
                        {
                          title: 'High Accuracy Extraction',
                          desc: 'Preserves formatting and accurately extracts all readable text, tables, and content from your PDF.'
                        },
                        {
                          title: 'Works on All Devices',
                          desc: 'Use our PDF to text converter on Windows, Mac, iPhone, Android — any browser, any device.'
                        },
                        {
                          title: 'Files Deleted Immediately',
                          desc: 'Your uploaded PDF is permanently deleted from our servers right after conversion. 100% private.'
                        },
                        {
                          title: 'Completely Free Forever',
                          desc: 'No hidden fees, no premium plan needed. Convert unlimited PDFs to text for free, always.'
                        }
                      ].map(({ title, desc }) => (
                        <div
                          key={title}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
                        >
                          <span className="text-2xl mt-0.5" aria-hidden="true">✅</span>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* ── FAQ ───────────────────────────────────────────── */}
                  <section
                    aria-labelledby="faq-heading"
                    className="mt-16 w-full max-w-3xl mb-8"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                  >
                    <h2
                      id="faq-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {[
                        {
                          q: 'How do I convert PDF to text for free?',
                          a: 'Simply upload your PDF file on this page, click Convert, and download the extracted plain text file — completely free, no sign-up needed.'
                        },
                        {
                          q: 'Can I convert a scanned PDF to text?',
                          a: 'Yes! FreePDFConvert uses advanced OCR (Optical Character Recognition) to extract text from scanned PDFs and image-based PDF documents with high accuracy.'
                        },
                        {
                          q: 'Is FreePDFConvert safe and secure?',
                          a: 'Absolutely. All file transfers use HTTPS encryption. Your PDF files are deleted from our servers immediately after conversion. We never store or share your documents.'
                        },
                        {
                          q: 'What file formats can I download after conversion?',
                          a: 'After converting your PDF, you can download a plain .txt (text) file that can be opened in any text editor, Word, Notepad, or any other application.'
                        },
                        {
                          q: 'Is there a file size limit for PDF to text conversion?',
                          a: 'FreePDFConvert supports large PDF files. You can convert PDFs free with no restrictions on the number of pages or file size.'
                        },
                        {
                          q: 'Do I need to install any software?',
                          a: 'No installation required. FreePDFConvert is a 100% online tool — just open it in any web browser on any device and start converting instantly.'
                        }
                      ].map(({ q, a }) => (
                        <div
                          key={q}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                          itemProp="mainEntity"
                          itemScope
                          itemType="https://schema.org/Question"
                        >
                          <h3
                            className="font-bold text-gray-900 mb-2"
                            itemProp="name"
                          >
                            {q}
                          </h3>
                          <div
                            itemProp="acceptedAnswer"
                            itemScope
                            itemType="https://schema.org/Answer"
                          >
                            <p className="text-gray-500 text-sm leading-relaxed" itemProp="text">{a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* ── SEO PARAGRAPH CONTENT ─────────────────────────── */}
                  <section
                    aria-labelledby="seo-content-heading"
                    className="mt-4 w-full max-w-3xl mb-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                  >
                    <h2
                      id="seo-content-heading"
                      className="text-xl font-black text-gray-900 mb-4"
                    >
                      Convert PDF to Text Online — Fast & Free
                    </h2>
                    <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                      <p>
                        <strong className="text-gray-700">FreePDFConvert</strong> is the easiest way to <strong className="text-gray-700">convert PDF to text</strong> online, completely free and without any registration. Whether you have a native PDF or a scanned document, our <strong className="text-gray-700">PDF to text converter</strong> accurately extracts all content in seconds.
                      </p>
                      <p>
                        Unlike other tools, our <strong className="text-gray-700">free PDF to text extractor</strong> works entirely in your browser — no software download, no email required. It supports all types of PDFs including password-protected files, multi-page documents, and image-based PDFs via OCR.
                      </p>
                      <p>
                        Need to <strong className="text-gray-700">extract text from PDF</strong> for editing, copying, or data analysis? Simply upload your file, let our converter process it, and download the clean <strong className="text-gray-700">.txt file</strong>. Your file is never stored on our servers, making FreePDFConvert the most private <strong className="text-gray-700">PDF text extractor</strong> available online.
                      </p>
                    </div>
                  </section>
            </main>

            <div className="mt-10 md:mt-20">
              <Footer />
            </div>
          </div>
);

export default PdfToText;