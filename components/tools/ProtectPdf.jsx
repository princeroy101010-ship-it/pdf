'use client';

import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, ShieldCheck, Eye, EyeOff, Lock, X, Settings, Zap, KeyRound } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['protect-pdf'];







function ProtectPdfdata() {
  return (
    <BaseToolLogic config={config}>
      {({
        status, dragActive, fileQueue, acceptedFiles, password, showPassword,
        setPassword, setShowPassword,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        startProcessing, reset, handleDownload 
      }) => (
        <>
         {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">

                {/* H1 + Intro */}
             
                {/* Password UI — shown after file selected */}
                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl animate-in slide-in-from-top-4 space-y-4 mb-8">
                    <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-3 truncate">
                        <div className="bg-rose-50 p-2 rounded-lg text-rose-600">
                          <Lock size={18} aria-hidden="true" />
                        </div>
                        <span className="font-bold text-gray-700 text-sm truncate">{fileQueue[0].name}</span>
                      </div>
                      <button
                        onClick={reset}
                        className="text-gray-300 hover:text-rose-600 transition-colors focus:outline-none"
                        aria-label="Remove selected file"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="p-5 md:p-8 bg-white rounded-[2.5rem] border-2 border-rose-100 shadow-2xl space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">Set PDF Password</h3>
                        <p className="text-sm text-gray-400 font-medium">Encrypt your document with a strong password</p>
                      </div>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter secret password..."
                          className="w-full px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-rose-500 focus:bg-white transition-all outline-none font-bold text-base text-gray-700 placeholder:text-gray-300"
                          aria-label="Enter password to protect PDF"
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-600 focus:outline-none"
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                        </button>
                      </div>
                      <button
                        onClick={() => startProcessing()}
                        disabled={!password}
                        className="w-full bg-rose-600 disabled:bg-gray-200 disabled:cursor-not-allowed text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl shadow-rose-100 hover:bg-rose-700 transition-all active:scale-95 flex items-center justify-center gap-3 focus:outline-none"
                        aria-label="Encrypt and protect PDF with password"
                      >
                        <ShieldCheck size={24} aria-hidden="true" /> PROTECT PDF NOW
                      </button>
                    </div>
                  </div>
                )}

                {/* Upload Zone */}
                {fileQueue.length === 0 && (
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                      ${dragActive ? 'border-rose-600 bg-rose-50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-rose-400'}`}
                    role="region"
                    aria-label="PDF dropzone protective logic configuration mapping handler"
                  >
                    <label className="group cursor-pointer flex flex-col items-center w-full focus-within:outline-none">
                      <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                        <Plus size={32} strokeWidth={3} />
                      </div>
                      <div className="text-center space-y-4">
                        <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg transition-all transform group-hover:shadow-2xl">
                          Select PDF to Protect
                        </span>
                        <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">or drop PDF file here</p>
                      </div>
                      <input
                        type="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        accept={acceptedFiles}
                        aria-label="Upload PDF file to protect with password"
                      />
                    </label>
                  </div>
                )}

            

              </article>
            )}

            {/* ── PROCESSING STATE ────────────────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300">
                <div className="relative mb-8 md:mb-12 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    <ShieldCheck className="text-rose-600 w-12 h-12" />
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">Encrypting...</h2>
                <p className="text-gray-400 font-medium text-sm mb-8 truncate px-4 max-w-xs mx-auto">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
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
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100">
                  <CheckCircle2 size={40} />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">PDF Protected!</h2>
                <p className="text-gray-400 mb-6 text-sm">Your PDF has been encrypted and password-protected successfully.</p>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-4 focus:outline-none"
                    aria-label="Download password-protected PDF file"
                  >
                    <Download size={28} aria-hidden="true" /> DOWNLOAD PROTECTED PDF
                  </button>
                  <button
                    onClick={reset}
                    className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors focus:outline-none"
                  >
                    Protect another file
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
const ProtectPdf = () => (
  <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">


          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6 max-w-5xl mx-auto w-full">

   <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                    Protect <span className="text-rose-600">PDF with Password</span> Free Online
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Add strong password encryption to any PDF instantly.
                    100% free, no signup, no watermark required.
                  </p>
                </header>

<ProtectPdfdata />         
    <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <KeyRound className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Strong AES Encryption</h3>
                    <p className="text-gray-500 text-sm">Your PDF is protected with strong AES encryption. Without the correct password, the document cannot be opened or read by anyone.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Instant Protection</h3>
                    <p className="text-gray-500 text-sm">Upload your PDF, enter a password, and download your encrypted file in seconds. Works with any PDF regardless of size.</p>
                  </div>
                  <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                    <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                    <h3 className="font-bold text-base mb-2">Fully Private</h3>
                    <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF and your password are never stored on our servers or shared with any third party.</p>
                  </div>
                </section>

                {/* How It Works */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
                  <h2 className="text-2xl font-black text-gray-900 mb-6">
                    How to Password Protect a PDF Online (3 Steps)
                  </h2>
                  <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                    <li>
                      <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF to Protect" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> file into the upload area above.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 2 —</strong> Enter your chosen password in the password field. Use a strong mix of letters, numbers, and symbols for maximum security.
                    </li>
                    <li>
                      <strong className="text-gray-900">Step 3 —</strong> Click "Protect PDF Now" and download your encrypted PDF. No account, no email, no watermark.
                    </li>
                  </ol>
                </section>

                {/* FAQ Section Accordions */}
                <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-16">
                  <h2 className="text-2xl font-black text-gray-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <div className="mt-6">
  

  <ul className="list-disc pl-6 space-y-3 text-gray-600">
    <li>
      <strong>How do I protect a PDF file online?</strong> Upload your PDF, enter a password, and click the Protect PDF button to secure your document instantly.
    </li>

    <li>
      <strong>What is the best PDF password protection tool?</strong> A reliable PDF protection tool encrypts your files securely and prevents unauthorized access.
    </li>

    <li>
      <strong>Can I add a password to a PDF for free?</strong> Yes, you can add password protection to PDF files online completely free of charge.
    </li>

    <li>
      <strong>Is PDF password protection secure?</strong> Yes, PDF encryption helps protect sensitive information and restricts access to authorized users only.
    </li>

    <li>
      <strong>Can I protect PDF files on mobile devices?</strong> Yes, the tool works on Android, iPhone, tablets, Windows, and Mac devices.
    </li>

    <li>
      <strong>Are my PDF files secure during processing?</strong> Yes, uploaded files are processed securely and automatically deleted after protection is applied.
    </li>

    <li>
      <strong>Can I protect a PDF without installing software?</strong> Yes, everything works directly in your web browser with no downloads required.
    </li>

    <li>
      <strong>How long does it take to password-protect a PDF?</strong> Most PDF files are protected within a few seconds, depending on file size.
    </li>

    <li>
      <strong>Why should I password-protect a PDF?</strong> Password protection helps keep confidential documents secure and prevents unauthorized viewing.
    </li>

    <li>
      <strong>Can protected PDF files still be shared?</strong> Yes, you can share protected PDFs normally, but recipients will need the correct password to open them.
    </li>
  </ul>
</div>
                </section>
          </main>

          <div className="mt-10 md:mt-20">
            <Footer />
          </div>
        </div>
);

export default ProtectPdf;