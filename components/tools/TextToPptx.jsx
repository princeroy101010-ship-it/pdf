'use client';
import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';
import { generateSchemas } from '@/lib/toolsConfig';
import { TextToPptxSEO } from '../seo';

const config = TOOLS_CONFIG['Text-to-pptx'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select Text File';
const DL_TEXT = 'DOWNLOAD PPTX';




function TextToPptxdata() {
  
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
               
                >
                

                  {/* Drop Zone */}
                  <section
                    aria-label="Upload your text file to convert to PowerPoint"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                      ${dragActive ? `border-${COLOR} scale-[1.02] bg-green-50` : 'border-gray-200 bg-white hover:border-green-300'}`}
                    role="region"
                  >
                    <label
                      htmlFor="txt-pptx-upload-input"
                      className="group cursor-pointer flex flex-col items-center w-full"
                      aria-label="Select a text file to convert to PowerPoint PPTX"
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
                        id="txt-pptx-upload-input"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept={acceptedFiles}
                        aria-label="Upload text file to convert to PPTX"
                      />
                    </label>
                  </section>

                  {/* ── TRUST BADGES ──────────────────────────────────── */}
                  <section
                    aria-label="Key features of text to PowerPoint converter"
                    className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5 text-sm text-gray-500 font-semibold"
                  >
                    {[
                      '🔒 100% Secure & Private',
                      '⚡ Instant Conversion',
                      '🆓 Completely Free',
                      '🚫 No Watermark',
                      '🌐 No Install Required',
                      '📊 Compatible with PowerPoint'
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
                  aria-label={status === 'uploading' ? 'Uploading your text file' : 'Converting text to PowerPoint PPTX'}
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
                  aria-label="Conversion complete. Your PowerPoint file is ready to download."
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
                  <p className="text-gray-500 mb-6">Your text has been converted to PowerPoint. Click below to download.</p>
                  <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                    <button
                      onClick={handleDownload}
                      className={`bg-${COLOR} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4 transition-transform`}
                      aria-label="Download your converted PowerPoint PPTX file"
                    >
                      <Download size={28} aria-hidden="true" /> {DL_TEXT}
                    </button>
                    <button
                      onClick={reset}
                      className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                      aria-label="Convert another text file to PowerPoint"
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
const TextToPptx = () => (
  
 <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Header />

            <main
              id="main-content"
              className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6"
              role="main"
              aria-label="Text to PowerPoint PPTX Converter Tool"
            >

     <header className="text-center mb-8 md:mb-12">
                    <h1
                      className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
                      itemProp="name"
                    >
                      Text to PowerPoint Converter
                    </h1>
                    <p
                      className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto"
                      itemProp="description"
                    >
                      Convert any text file to PowerPoint PPTX online — free, instant, no sign-up required. Turn your TXT file into a presentation in seconds.
                    </p>
                  </header>
     <TextToPptxdata />
                  {/* ── HOW IT WORKS ──────────────────────────────────── */}
                  <section
                    aria-labelledby="how-it-works-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="how-it-works-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      How to Convert Text to PowerPoint — 3 Easy Steps
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                      {[
                        {
                          step: '1',
                          title: 'Upload Your Text File',
                          desc: 'Click "Select Text File" or drag and drop your .txt file into the upload area above.',
                          icon: '📤'
                        },
                        {
                          step: '2',
                          title: 'Auto-Generate Slides',
                          desc: 'Our converter automatically structures your text into clean PowerPoint slides instantly.',
                          icon: '⚙️'
                        },
                        {
                          step: '3',
                          title: 'Download Your PPTX',
                          desc: 'Click Download PPTX. No watermark, no sign-up — open it directly in Microsoft PowerPoint or Google Slides.',
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
                      Why Use FreePDFConvert for Text to PPTX?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        {
                          title: 'No Sign-Up Required',
                          desc: 'Convert text to PowerPoint instantly without creating an account or providing any email address — just upload and convert.'
                        },
                        {
                          title: 'No Watermark on Slides',
                          desc: 'Your downloaded PPTX file is completely clean. No logos, no branding, no watermarks added anywhere on your slides.'
                        },
                        {
                          title: 'PowerPoint Compatible',
                          desc: 'The output .pptx file opens perfectly in Microsoft PowerPoint, Google Slides, LibreOffice Impress, and Keynote.'
                        },
                        {
                          title: 'Works on All Devices',
                          desc: 'Use our text to PPTX converter on Windows, Mac, iPhone, or Android — any browser, any device, anywhere in the world.'
                        },
                        {
                          title: 'Files Deleted Immediately',
                          desc: 'Your text file is permanently deleted from our servers right after conversion. Your data stays 100% private and secure.'
                        },
                        {
                          title: 'Completely Free Forever',
                          desc: 'No hidden fees, no premium plan needed. Convert unlimited text files to PowerPoint presentations for free, always.'
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
                          q: 'How do I convert text to PowerPoint for free?',
                          a: 'Simply upload your .txt file on this page, click Convert, and download your PPTX presentation — completely free, no sign-up needed.'
                        },
                        {
                          q: 'Can I convert a TXT file to PPTX online?',
                          a: 'Yes! FreePDFConvert lets you convert any plain text or .txt file into a PowerPoint PPTX presentation online, right in your browser — no software needed.'
                        },
                        {
                          q: 'Will my PowerPoint file have a watermark?',
                          a: 'No. FreePDFConvert generates clean PPTX files with absolutely no watermarks, logos, or branding added to your presentation slides.'
                        },
                        {
                          q: 'Is FreePDFConvert safe for converting text to PPTX?',
                          a: 'Yes. All file transfers use HTTPS encryption. Your text files are permanently deleted from our servers immediately after conversion. We never store or share your content.'
                        },
                        {
                          q: 'Can I open the PPTX in Microsoft PowerPoint or Google Slides?',
                          a: 'Absolutely. The downloaded .pptx file is fully compatible with Microsoft PowerPoint, Google Slides, LibreOffice Impress, and all major presentation software.'
                        },
                        {
                          q: 'Is there a file size or conversion limit?',
                          a: 'FreePDFConvert supports large text files. You can convert .txt files to PPTX free with no restrictions on file size or number of conversions per day.'
                        }
                      ].map(({ q, a }) => (
                        <div
                          key={q}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                        
                        >
                          <h3
                            className="font-bold text-gray-900 mb-2"
                            itemProp="name"
                          >
                            {q}
                          </h3>
                          <div
                        
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
                      Convert Text to PowerPoint Online — Fast & Free
                    </h2>
                    <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                      <p>
                        <strong className="text-gray-700">FreePDFConvert</strong> is the easiest way to <strong className="text-gray-700">convert text to PowerPoint</strong> online, completely free and without any registration. Whether you have a plain <strong className="text-gray-700">.txt file</strong> or a Notepad document, our <strong className="text-gray-700">text to PPTX converter</strong> automatically generates a clean, structured PowerPoint presentation in seconds.
                      </p>
                      <p>
                        Unlike other tools, our <strong className="text-gray-700">free TXT to PPTX converter</strong> works entirely in your browser — no software download, no email required. The output <strong className="text-gray-700">.pptx file</strong> is completely watermark-free and fully compatible with Microsoft PowerPoint, Google Slides, and LibreOffice Impress.
                      </p>
                      <p>
                        Need to quickly <strong className="text-gray-700">convert a text file to a presentation</strong>? Simply upload your file, let our converter generate the slides, and download your <strong className="text-gray-700">PowerPoint file</strong> instantly. Your text file is deleted from our servers immediately after conversion, making FreePDFConvert the most private <strong className="text-gray-700">online text to PowerPoint converter</strong> available.
                      </p>
                    </div>
                  </section>
                  <TextToPptxSEO/>
            </main>

            <div className="mt-10 md:mt-20">
              <Footer />
            </div>
          </div>
);

export default TextToPptx;