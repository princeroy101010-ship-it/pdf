'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, FileText } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';
import { PptxToTextSEO } from '../seo';

const config = TOOLS_CONFIG['pptx-to-Text'];

// ─── SEO: JSON-LD Schemas ────────────────────────────────────────────────────





function PptxToTextdata() {
  return (
    <BaseToolLogic config={config}>
      {({
        status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload
      }) => (
        <>
           {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
           

                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 scale-[1.02] bg-rose-50' : 'border-gray-200 bg-white hover:border-rose-300'}`}
                  role="region"
                  aria-label="PowerPoint text dropzone extraction handler"
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full focus-within:outline-none">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg transform group-hover:shadow-2xl transition-all">
                        Select PPTX only .pptx File
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop PPTX file here</p>
                    </div>
                    <input
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload PowerPoint PPTX file to extract text"
                    />
                  </label>
                </div>

           

              </article>
            )}

            {/* ── PROCESSING STATE ────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg animate-in fade-in scale-in duration-300">
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="text-rose-600 animate-bounce w-12 h-12" />
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-gray-400 text-sm mb-8 truncate max-w-xs mx-auto">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div
                    className={`bg-rose-600 h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
                    role="progressbar"
                    aria-valuenow={status === 'processing' ? 92 : 45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            )}

            {/* ── COMPLETED STATE ─────────────────────────────────────────── */}
            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Extraction Complete!</h2>
                <p className="text-gray-400 mb-6 text-sm">All slide text has been extracted to a plain text file successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 transition-all flex items-center justify-center gap-4"
                    aria-label="Download extracted plain text TXT file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD TEXT FILE
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors focus:outline-none">
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
const PptxToText = () => (
     <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">



          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full">

              <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    Free <span className="text-rose-600">PowerPoint to Text</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Extract all slide text from your PowerPoint PPTX and save it as a plain TXT file instantly.
                    100% free, no signup, no watermark.
                  </p>
                </header>

                <PptxToTextdata />
                <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <FileText className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">All Slides Extracted</h3>
                    <p className="text-gray-500 text-sm">Every word from every slide in your PowerPoint presentation is extracted and saved into a single clean TXT file.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Conversion</h3>
                    <p className="text-gray-500 text-sm">Upload your PPTX and get a ready-to-use TXT file in seconds. Opens in Notepad, VS Code, Word, Google Docs, and more.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                    <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PPTX is automatically deleted after conversion and never stored or shared with anyone.</p>
                  </div>
                </section>

                {/* How It Works */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Convert PowerPoint to Text Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select PPTX File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pptx</code> file into the upload area above.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> The converter automatically scans every slide and extracts all text content into a clean <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.txt</code> plain text file.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Download Text File" to save your TXT. No account, no email, no watermark.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                  <h2 className="text-2xl font-black text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                 <div className="mt-6">


  <ul className="list-disc pl-6 space-y-3 text-gray-600">
    <li>
      <strong>How do I convert PPTX to text online for free?</strong> Upload your PowerPoint presentation and extract text instantly without registration.
    </li>

    <li>
      <strong>What is the best PPTX to text converter?</strong> A reliable converter extracts text accurately from all PowerPoint slides while preserving content order.
    </li>

    <li>
      <strong>Can I extract text from PowerPoint presentations?</strong> Yes, you can extract text from all slides in a PPTX file and save it as a text document.
    </li>

    <li>
      <strong>Is PPTX to text conversion free?</strong> Yes, you can convert PPTX files to text online completely free of charge.
    </li>

    <li>
      <strong>Can I use a PPTX to text converter on mobile?</strong> Yes, the tool works on Android, iPhone, tablets, and desktop devices.
    </li>

    <li>
      <strong>Are my PowerPoint files secure?</strong> Yes, uploaded PPTX files are processed securely and deleted automatically after conversion.
    </li>

    <li>
      <strong>Can I convert PPTX to text without software?</strong> Yes, the entire conversion process works directly in your web browser.
    </li>

    <li>
      <strong>How long does PPTX to text conversion take?</strong> Most PowerPoint presentations are converted to text within a few seconds.
    </li>

    <li>
      <strong>Why convert PPTX to text?</strong> Text files are easier to edit, copy, analyze, and reuse in documents, websites, and reports.
    </li>

    <li>
      <strong>Does the converter extract text from all slides?</strong> Yes, text from all slides in the original PPTX presentation is extracted and included in the output.
    </li>
  </ul>
</div>
                </section>
                              <PptxToTextSEO/>    

          </main>

          <div className="mt-10 md:mt-20">
            <Footer />
          </div>
        </div>
);

export default PptxToText;
