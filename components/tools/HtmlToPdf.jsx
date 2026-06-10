'use client';

// ============================================================
// ✅ SEO NOTE:
// Title, meta description, canonical, open graph, and robots 
// are handled asynchronously inside app/[slug]/page.jsx using 
// generateMetadata(). Do not declare <title> or <meta> here.
// ============================================================

import React from 'react';
import Script from 'next/script';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings, Zap, ShieldCheck, FileText } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['html-to-pdf'];
const BTN_TEXT = 'Select HTML File';
const DL_TEXT = 'DOWNLOAD PDF';

const FAQ_ITEMS = [
  {
    q: 'How do I convert HTML to PDF for free?',
    a: 'Upload your HTML file to FreePDFConvert\'s free HTML to PDF converter. Click convert and download your PDF instantly. No signup or software installation required.'
  },
  {
    q: 'Is the HTML to PDF converter free?',
    a: 'Yes, FreePDFConvert\'s HTML to PDF tool is 100% free with no hidden fees, no watermarks, and no account needed.'
  },
  {
    q: 'Does the converted PDF have a watermark?',
    a: 'No. FreePDFConvert never adds watermarks to your converted PDF files. All outputs are clean and professional.'
  },
  {
    q: 'Is my HTML file safe to upload?',
    a: 'Yes. Your file is processed securely with SSL encryption and automatically deleted after conversion. We never store or share your files.'
  },
  {
    q: 'Can I convert an HTML webpage to PDF?',
    a: 'Yes. Simply save your webpage as an .html file and upload it to FreePDFConvert. The tool will convert it to a properly formatted PDF document.'
  }
];









function HmtltopdfUploader() {
  return (
    <BaseToolLogic config={config}>
      {({
        status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload
      }) => (
        <>
      
            {/* ── IDLE: Upload ─────────────────────────────────────────────── */}
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
          

                {/* Upload Zone */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 scale-[1.02] bg-rose-50' : 'border-slate-200 bg-white hover:border-rose-400'}`}
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full select-none">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-100 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-black shadow-lg hover:bg-rose-700 transition-colors">
                        {BTN_TEXT}
                      </span>
                      <p className="text-slate-400 font-black text-xs uppercase tracking-widest">or drop .html file here</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload HTML file to convert to PDF"
                    />
                  </label>
                </div>

            

              </article>
            )}

            {/* ── PROCESSING ───────────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div 
                className="bg-white p-8 md:p-16 rounded-[3rem] shadow-xl text-center w-full max-w-lg border border-slate-50"
                role="status"
                aria-live="polite"
              >
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="text-rose-600 animate-bounce w-12 h-12" />
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />
                    }
                  </div>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2 uppercase tracking-wide">
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-slate-400 text-xs font-bold mb-8 truncate max-w-xs mx-auto">{fileQueue[0]?.name}</p>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`bg-rose-600 h-full transition-all duration-700 rounded-full ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
                    role="progressbar"
                    aria-valuenow={status === 'processing' ? 92 : 45}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            )}

            {/* ── COMPLETED ────────────────────────────────────────────────── */}
            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl aria-live='assertive' animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100 rotate-3">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                  Conversion Complete!
                </h2>
                <p className="text-slate-400 mb-6 text-sm font-semibold">Your HTML file has been converted to PDF successfully.</p>
                <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 text-white w-full py-5 text-xl md:text-2xl font-black rounded-2xl shadow-xl shadow-rose-100 hover:bg-rose-700 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all flex items-center justify-center gap-4"
                    aria-label="Download converted PDF file frame asset"
                  >
                    <Download size={28} /> {DL_TEXT}
                  </button>
                  <button
                    onClick={reset}
                    className="text-slate-400 hover:text-rose-600 font-bold text-sm transition-colors duration-300"
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
const htlmtoPdf = () => (
   <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      

          <Header />

          <main 
            id="main-content" 
            className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full"
            role="main"
            aria-label="HTML to PDF converter utility section"
          >

      <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                    Free <span className="text-rose-600">HTML to PDF</span> Converter Online
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Convert any HTML file to a clean, formatted PDF instantly.
                    100% free, no signup, no watermark required.
                  </p>
                </header>

<HmtltopdfUploader />
    {/* Feature Cards */}
                <section
                  aria-label="Core workspace options and service advantages"
                  className="grid md:grid-cols-3 gap-6 mt-16 mb-4 w-full"
                >
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-black text-slate-900 text-base mb-2">Instant Conversion</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Upload your HTML file and get a perfectly formatted PDF in seconds. No waiting, no queue.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-black text-slate-900 text-base mb-2">Secure & Private</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Your HTML files are encrypted during transfer and automatically deleted after conversion. We never store your data.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <FileText className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-black text-slate-900 text-base mb-2">No Watermark</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">Every converted PDF is completely clean. No FreePDFConvert branding, no watermarks — ever.</p>
                  </div>
                </section>

                {/* How It Works — H2 for SEO */}
                <section aria-labelledby="how-it-works-heading" className="w-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mt-6 mb-6">
                  <h2 id="how-it-works-heading" className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-wide">
                    How to Convert HTML to PDF Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-slate-500 text-sm font-medium leading-relaxed" role="list">
                    <li>
                      <strong className="text-slate-900">Step 1 — Upload Document:</strong> Click "Select HTML File" or drag and drop your <code className="bg-slate-50 px-1.5 py-0.5 rounded text-xs text-rose-600 font-bold border border-slate-100">.html</code> file into the upload area above.
                    </li>
                    <li>
                      <strong className="text-slate-900">Step 2 — Auto Rendering:</strong> The converter automatically processes your file, preserving your layout, CSS styles, typography frameworks, and links inside the output PDF.
                    </li>
                    <li>
                      <strong className="text-slate-900">Step 3 — Download Asset:</strong> Click "Download PDF" to save your fresh, structural document. No validation email or signup requested.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section — H2 + structured Q&A for featured snippets */}
                <section aria-labelledby="faq-main-heading" className="w-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mt-0 mb-16">
                  <h2 id="faq-main-heading" className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-wide">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    {FAQ_ITEMS.map((item, idx) => (
                      <div key={idx} className="border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                        <h3 className="font-black text-slate-800 text-base mb-2">{item.q}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    ))}
                  </div>
                </section>
          </main>

          <div className="mt-10 md:mt-20">
            <Footer />
          </div>
        </div>
);

export default htlmtoPdf;