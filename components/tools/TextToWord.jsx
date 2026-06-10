'use client';
import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['Text-to-word'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select Text File';
const DL_TEXT = 'DOWNLOAD WORD FILE';








function TextToWorddata() {
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
               

                  {/* Hero Header */}
              

                  {/* Drop Zone */}
                  <section
                    aria-label="Upload your text file to convert to Word"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                      ${dragActive ? `border-${COLOR} scale-[1.02] bg-green-50` : 'border-gray-200 bg-white hover:border-green-300'}`}
                    role="region"
                  >
                    <label
                      htmlFor="txt-word-upload-input"
                      className="group cursor-pointer flex flex-col items-center w-full"
                      aria-label="Select a text file to convert to Word DOCX"
                    >
                      <div
                        className={`bg-${COLOR} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}
                        aria-hidden="true"
                      >
                        <Plus size={32} strokeWidth={3} />
                      </div>
                      <div className="text-center space-y-4">
                        <span className={`inline-block bg-${COLOR} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg`}>
                          {BTN_TEXT}
                        </span>
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">
                          or drop file here
                        </p>
                      </div>
                      <input
                        id="txt-word-upload-input"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept={acceptedFiles}
                        aria-label="Upload text file to convert to Word DOCX"
                      />
                    </label>
                  </section>

                  {/* ── TRUST BADGES ──────────────────────────────────── */}
                  <section
                    aria-label="Key features of text to Word converter"
                    className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5 text-sm text-gray-500 font-semibold"
                  >
                    {[
                      '🔒 100% Secure & Private',
                      '⚡ Instant Conversion',
                      '🆓 Completely Free',
                      '🚫 No Watermark',
                      '✏️ Fully Editable DOCX',
                      '🌐 No Install Required'
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
                  aria-label={status === 'uploading' ? 'Uploading your text file' : 'Converting text to Word DOCX'}
                >
                  <div className="relative mb-8 flex justify-center items-center">
                    <Settings
                      className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                      {status === 'uploading'
                        ? <Upload className={`text-${COLOR} animate-bounce w-12 h-12`} aria-hidden="true" />
                        : <Loader2 className={`text-${COLOR} animate-spin w-12 h-12`} aria-hidden="true" />
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
                      className={`bg-${COLOR} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
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
                  aria-label="Conversion complete. Your Word file is ready to download."
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
                  <p className="text-gray-500 mb-6">Your text has been converted to Word DOCX. Click below to download.</p>
                  <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                    <button
                      onClick={handleDownload}
                      className={`bg-${COLOR} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-transform`}
                      aria-label="Download your converted Word DOCX file"
                    >
                      <Download size={28} aria-hidden="true" /> {DL_TEXT}
                    </button>
                    <button
                      onClick={reset}
                      className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                      aria-label="Convert another text file to Word"
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
const TextToWord = () => (
 <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Header />

            <main
              id="main-content"
              className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6"
              role="main"
              aria-label="Text to Word DOCX Converter Tool"
            >
    <header className="text-center mb-8 md:mb-12">
                    <h1
                      className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
                      itemProp="name"
                    >
                      Text to Word Converter
                    </h1>
                    <p
                      className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto"
                      itemProp="description"
                    >
                      Convert any text file to Word DOCX online — free, instant, no sign-up required. Turn your TXT file into a fully editable Word document in seconds.
                    </p>
                  </header>
<TextToWorddata />            
                  {/* ── HOW IT WORKS ──────────────────────────────────── */}
                  <section
                    aria-labelledby="how-it-works-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="how-it-works-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      How to Convert Text to Word — 3 Easy Steps
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                      {[
                        {
                          step: '1',
                          title: 'Upload Your Text File',
                          desc: 'Click "Select Text File" or drag and drop your .txt or plain text file into the upload area above.',
                          icon: '📤'
                        },
                        {
                          step: '2',
                          title: 'Convert to Word DOCX',
                          desc: 'Our converter instantly processes your text and generates a fully editable Word DOCX document.',
                          icon: '⚙️'
                        },
                        {
                          step: '3',
                          title: 'Download & Edit',
                          desc: 'Download your Word file. Open and edit it in Microsoft Word, Google Docs, or any word processor — no watermark.',
                          icon: '📥'
                        }
                      ].map(({ step, title, desc, icon }) => (
                        <li
                          key={step}
                          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center"
                        >
                          <div className="text-4xl mb-3" aria-hidden="true">{icon}</div>
                          <h3 className="font-black text-gray-900 text-lg mb-2">
                            Step {step}: {title}
                          </h3>
                          <p className="text-gray-500 text-sm">{desc}</p>
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
                      Why Use FreePDFConvert for Text to Word?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        {
                          title: 'No Sign-Up Required',
                          desc: 'Convert text to Word instantly without creating an account or providing any email — just upload and download.'
                        },
                        {
                          title: 'Fully Editable DOCX Output',
                          desc: 'The output is a proper .docx file you can edit, format, and modify freely in Microsoft Word or Google Docs.'
                        },
                        {
                          title: 'No Watermark on Document',
                          desc: 'Your downloaded Word file is completely clean. No logos, no branding, no watermarks — ever.'
                        },
                        {
                          title: 'Works on All Devices',
                          desc: 'Use our text to Word converter on Windows, Mac, iPhone, or Android — any browser, any device, anywhere.'
                        },
                        {
                          title: 'Files Deleted Immediately',
                          desc: 'Your uploaded text file is permanently deleted from our servers right after conversion. 100% private and secure.'
                        },
                        {
                          title: 'Completely Free Forever',
                          desc: 'No hidden charges, no premium plan. Convert unlimited text files to Word documents for free, always.'
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
                          q: 'How do I convert text to Word for free?',
                          a: 'Simply upload your .txt file on this page, click Convert, and download your editable Word DOCX document — completely free, no sign-up needed.'
                        },
                        {
                          q: 'Can I convert a TXT file to DOCX online?',
                          a: 'Yes! FreePDFConvert lets you convert any plain text or .txt file into a fully editable Word DOCX document online, right in your browser — no software needed.'
                        },
                        {
                          q: 'Will the Word document have a watermark?',
                          a: 'No. FreePDFConvert generates completely clean Word files with no watermarks, logos, or branding added anywhere in your document.'
                        },
                        {
                          q: 'Can I edit the Word file after conversion?',
                          a: 'Absolutely. The output is a fully editable .docx file that opens perfectly in Microsoft Word, Google Docs, LibreOffice Writer, and all major word processors.'
                        },
                        {
                          q: 'Is FreePDFConvert safe for text to Word conversion?',
                          a: 'Yes. All file transfers use HTTPS encryption. Your text files are permanently deleted from our servers immediately after conversion. We never store or share your content.'
                        },
                        {
                          q: 'Is there a file size or conversion limit?',
                          a: 'FreePDFConvert supports large text files. You can convert .txt files to Word DOCX free with no restrictions on file size or number of daily conversions.'
                        }
                      ].map(({ q, a }) => (
                        <div
                          key={q}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                          itemScope
                          itemType="https://schema.org/Question"
                          itemProp="mainEntity"
                        >
                          <h3
                            className="font-bold text-gray-900 mb-2"
                            itemProp="name"
                          >
                            {q}
                          </h3>
                          <div
                            itemScope
                            itemType="https://schema.org/Answer"
                            itemProp="acceptedAnswer"
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
                      Convert Text to Word Document Online — Fast & Free
                    </h2>
                    <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                      <p>
                        <strong className="text-gray-700">FreePDFConvert</strong> is the fastest way to <strong className="text-gray-700">convert text to Word</strong> online, completely free and without registration. Whether you have a plain <strong className="text-gray-700">.txt file</strong>, a Notepad document, or any plain text content, our <strong className="text-gray-700">text to Word converter</strong> turns it into a fully editable <strong className="text-gray-700">DOCX document</strong> in seconds.
                      </p>
                      <p>
                        Unlike other tools, our <strong className="text-gray-700">free TXT to DOCX converter</strong> works entirely in your browser — no software download, no email required. The output Word file is completely watermark-free and fully compatible with Microsoft Word, Google Docs, and LibreOffice Writer.
                      </p>
                      <p>
                        Need to <strong className="text-gray-700">convert a text file to a Word document</strong> for editing or sharing? Simply upload your file, let our converter process it, and download your <strong className="text-gray-700">.docx file</strong> instantly. Your original text file is deleted from our servers right after conversion, making FreePDFConvert the most private <strong className="text-gray-700">online text to Word converter</strong> available today.
                      </p>
                    </div>
                  </section>
            </main>

            <div className="mt-10 md:mt-20">
              <Footer />
            </div>
          </div>
);

export default TextToWord;