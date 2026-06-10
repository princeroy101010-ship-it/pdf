'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['pptx-to-pdf'];
const BTN_TEXT = 'Select PPTX .pptx File';
const DL_TEXT = 'DOWNLOAD PDF';

// Tailwind JIT compiler safe style tokens
const THEME = {
  bg: 'bg-rose-600',
  text: 'text-rose-600',
  border: 'border-rose-600',
  hoverBorder: 'hover:border-rose-300',
  focusRing: 'focus:ring-rose-500'
};




function PptxToPdfdata() {
  return (
    <BaseToolLogic config={config}>
      {({
    status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload 
      }) => (
        <>
            {/* ─── IDLE STATE ──────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
          

                <div 
                  onDragOver={handleDragOver} 
                  onDragLeave={handleDragLeave} 
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? `${THEME.border} scale-[1.02] bg-green-50` : `border-gray-200 bg-white ${THEME.hoverBorder}`}`}
                  role="region"
                  aria-label="PowerPoint presentation dropzone"
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
                      aria-label="Upload PowerPoint presentation file"
                    />
                  </label>
                </div>

          

              </article>
            )}

            {/* ─── UPLOADING / PROCESSING STATE ──────────────────────────────── */}
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
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">{status === 'uploading' ? 'Uploading' : 'Converting'}...</h2>
                <p className="text-gray-400 text-sm mb-8 truncate max-w-xs mx-auto">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className={`${THEME.bg} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
                </div>
              </div>
            )}

            {/* ─── COMPLETED STATE ───────────────────────────────────────────── */}
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
                    aria-label="Download converted PDF architecture file"
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
        </>
      )}
    </BaseToolLogic>
  );
}

// ─── Main page component ─────────────────────────────────────────────────────
// ✅ Header, H1, badges, features, how-to, FAQ all render on the server.
// ✅ Only <JpgToPdfUploader> is client-side (needs useState).
// ✅ Semrush/Googlebot see full text content without executing any JS.
const PptxToPdf = () => (
  <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">


          <Header />
          
          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">

            <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    Convert PPTX to PDF Online Free
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Free online PPTX to PDF converter. Convert PowerPoint presentations to high-quality PDF documents instantly without registration
                  </p>
                </header>
                <PptxToPdfdata />

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

               <div className="mt-6">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    Popular PPTX to PDF Questions
  </h2>

  <ul className="list-disc pl-6 space-y-3 text-gray-600">
    <li>
      <strong>How do I convert PPTX to PDF online for free?</strong> Upload your PowerPoint presentation and convert it to PDF instantly without registration.
    </li>

    <li>
      <strong>What is the best PPTX to PDF converter?</strong> A reliable converter preserves slide layouts, fonts, images, and formatting while providing fast conversion.
    </li>

    <li>
      <strong>Can I convert PowerPoint to PDF without losing formatting?</strong> Yes, the converter maintains the original design, text, and slide structure as accurately as possible.
    </li>

    <li>
      <strong>Is PPTX to PDF conversion free?</strong> Yes, you can convert PPTX files to PDF online completely free of charge.
    </li>

    <li>
      <strong>Can I use a PPTX to PDF converter on mobile?</strong> Yes, the tool works on Android, iPhone, tablets, and desktop devices.
    </li>

    <li>
      <strong>Are my PowerPoint files secure?</strong> Yes, uploaded PPTX files are processed securely and deleted automatically after conversion.
    </li>

    <li>
      <strong>Can I convert PPTX to PDF without software?</strong> Yes, the entire conversion process works directly in your web browser.
    </li>

    <li>
      <strong>How long does PPTX to PDF conversion take?</strong> Most PowerPoint presentations are converted to PDF within a few seconds.
    </li>

    <li>
      <strong>Why convert PPTX to PDF?</strong> PDF files are easier to share, print, and view consistently across all devices and operating systems.
    </li>

    <li>
      <strong>Does the PDF keep all PowerPoint slides?</strong> Yes, all slides from the original PPTX presentation are included in the converted PDF document.
    </li>
  </ul>
</div>

                </section>
          </main>
          <div className="mt-10 md:mt-20"><Footer /></div>
        </div>
);

export default PptxToPdf;