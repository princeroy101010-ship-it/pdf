'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';
import { PngToPdfSEO } from '../seo';

const config = TOOLS_CONFIG['png-to-pdf'];
const BTN_TEXT = 'Select PNG File';
const DL_TEXT = 'DOWNLOAD PDF';

// Tailwind JIT-safe color theme dictionary
const THEME = {
  bg: 'bg-rose-600',
  text: 'text-rose-600',
  border: 'border-rose-600',
  hoverBorder: 'hover:border-rose-300',
  focusRing: 'focus:ring-rose-500'
};



function PngToPdfdata() {
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
                  aria-label="PNG file upload area"
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
                      aria-label="Upload PNG file to convert to PDF"
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
                    aria-label="Download converted PDF document"
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
const PngToPdf = () => (
<div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

   
          <Header />
          
          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">
    <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                  PNG to PDF Converter Free Online Tool 
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Convert PNG to PDF free online instantly. No signup needed. High quality, fast & secure PNG image to PDF converter. Works on mobile, Windows, Mac & Linux.
                  </p>
                </header>

                <PngToPdfdata />
  

            
                {/* ─── SEO CONTENT SECTION ─── */}
                <section className="mt-16 w-full max-w-3xl text-left space-y-8">

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      How to Convert PNG to PDF Free Online
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 text-base">
                      <li>Click <strong>Select PNG File</strong> or drag &amp; drop your PNG image above.</li>
                      <li>Wait a few seconds while we convert your file instantly.</li>
                      <li>Click <strong>Download PDF</strong> — done! No signup, no watermark.</li>
                    </ol>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                      Why Use FreePDFConvert to Convert PNG to PDF?
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-600 text-sm">
                      {[
                        "✅ 100% Free — no hidden fees",
                        "✅ No watermark on PDF",
                        "✅ No signup or account needed",
                        "✅ High quality, no image compression",
                        "✅ Works on iPhone, Android, PC, Mac",
                        "✅ Secure — files deleted after conversion",
                        "✅ Convert multiple PNG to one PDF",
                        "✅ Fast conversion in seconds",
                      ].map((f) => (
                        <li key={f} className="bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">{f}</li>
                      ))}
                    </ul>
                  </div>

                  
               <div className="space-y-4">
  <h2 className="text-2xl font-bold text-gray-800">
    Frequently Asked Questions
  </h2>

  <ul className="space-y-4 text-gray-600">
    <li>
      <strong className="text-gray-800">
        How do I convert PNG to PDF online for free?
      </strong>
      <p className="mt-1">
        Upload your PNG images, click the Convert button, and download the generated PDF file instantly. No registration is required.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        What is the best PNG to PDF converter?
      </strong>
      <p className="mt-1">
        A good PNG to PDF converter should be fast, secure, free, and able to preserve image quality. Our tool provides all these features.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Can I convert multiple PNG images into one PDF?
      </strong>
      <p className="mt-1">
        Yes, you can upload multiple PNG files and combine them into a single PDF document in the correct order.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Does converting PNG to PDF reduce image quality?
      </strong>
      <p className="mt-1">
        No, the converter maintains the original image quality as much as possible while creating the PDF file.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Is this PNG to PDF converter free?
      </strong>
      <p className="mt-1">
        Yes, the tool is completely free to use with no hidden fees, subscriptions, or account creation required.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Can I use the PNG to PDF converter on mobile devices?
      </strong>
      <p className="mt-1">
        Yes, the tool works on Android, iPhone, iPad, Windows, Mac, and all modern web browsers.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Are my PNG files secure during conversion?
      </strong>
      <p className="mt-1">
        Yes, uploaded files are processed securely and automatically deleted after conversion to protect your privacy.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Can I convert PNG to PDF without installing software?
      </strong>
      <p className="mt-1">
        Yes, everything happens online in your browser, so no software download or installation is needed.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        How long does PNG to PDF conversion take?
      </strong>
      <p className="mt-1">
        Most conversions are completed within a few seconds, depending on the number and size of your PNG files.
      </p>
    </li>

    <li>
      <strong className="text-gray-800">
        Can I create a high-quality PDF from PNG images?
      </strong>
      <p className="mt-1">
        Yes, the converter generates high-quality PDF documents while preserving the clarity and resolution of your PNG images.
      </p>
    </li>
  </ul>
</div>

                </section>

                              <PngToPdfSEO/>    

          </main>
          <div className="mt-10 md:mt-20"><Footer /></div>
        </div>
);

export default PngToPdf;