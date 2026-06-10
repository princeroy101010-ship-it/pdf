'use client';
import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['word-to-pdf'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select Word File';
const DL_TEXT = 'DOWNLOAD PDF';







function WordToPdfdata() {
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
             
             

                {/* Upload Area */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? `border-${COLOR} scale-[1.02] bg-green-50` : 'border-gray-200 bg-white hover:border-green-300'}`}
                  role="region"
                  aria-label="Word file upload area"
                >
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className={`bg-${COLOR} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}>
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className={`inline-block bg-${COLOR} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg`}>
                        {BTN_TEXT}
                      </span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop file here</p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept={acceptedFiles}
                      aria-label="Upload Word file to convert to PDF"
                      title="Upload DOC or DOCX file"
                    />
                  </label>
                </div>

             
              </article>
            )}

            {/* ── UPLOADING / PROCESSING ───────────────────────────────── */}
            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg">
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className={`text-${COLOR} animate-bounce w-12 h-12`} />
                      : <Loader2 className={`text-${COLOR} animate-spin w-12 h-12`} />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                  {status === 'uploading' ? 'Uploading' : 'Converting'}...
                </h2>
                <p className="text-gray-400 text-sm mb-8 truncate">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className={`bg-${COLOR} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`} />
                </div>
              </div>
            )}

            {/* ── COMPLETED ────────────────────────────────────────────── */}
            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3">
                  <CheckCircle2 size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Success!</h1>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button
                    onClick={handleDownload}
                    className={`bg-${COLOR} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4`}
                    aria-label="Download converted PDF file"
                  >
                    <Download size={28} /> {DL_TEXT}
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm">
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
const WordToPdf = () => (
 <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">



          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">

   <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                   Word to Text Converter Online Free
                  </h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                    Convert Word documents (DOC and DOCX) to plain text online for free. Fast, secure, and accurate text extraction with no signup required
                  </p>
                  {/* Trust Signals */}
                  <div className="flex flex-wrap justify-center gap-3 mt-5 text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    <span>✓ 100% Free</span>
                    <span>✓ No Signup</span>
                    <span>✓ No Watermark</span>
                    <span>✓ Secure & Private</span>
                    <span>✓ Instant Download</span>
                  </div>
                </header>
                <WordToPdfdata />          
                <section className="w-full max-w-4xl mt-16 md:mt-24 space-y-12 text-gray-600">

                  {/* How It Works */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      How to Convert Word to PDF Online Free
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          step: '1',
                          title: 'Upload Your Word File',
                          desc: 'Click "Select Word File" or drag and drop your DOC or DOCX document. Supports files up to 50MB, no account needed.',
                        },
                        {
                          step: '2',
                          title: 'Instant Conversion',
                          desc: 'Our engine converts your Word document to a high-quality PDF, preserving all fonts, images, tables, and formatting perfectly.',
                        },
                        {
                          step: '3',
                          title: 'Download Your PDF',
                          desc: 'Click Download PDF to save your file instantly. Open in any PDF viewer on PC, Mac, iPhone, or Android.',
                        },
                      ].map(({ step, title, desc }) => (
                        <div key={step} className="bg-white rounded-3xl p-6 shadow-sm text-center">
                          <div className="w-12 h-12 rounded-full bg-rose-600 text-white font-black text-xl flex items-center justify-center mx-auto mb-4">{step}</div>
                          <h3 className="font-black text-gray-900 text-lg mb-2">{title}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      Why Use FreePDFConvert Word to PDF Converter?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        { title: 'Completely Free – No Hidden Fees', desc: 'Convert unlimited Word files to PDF at zero cost. No subscription, no credit card, no limits.' },
                        { title: 'No Registration Needed', desc: 'Start instantly. No account, no email address, no personal information required.' },
                        { title: 'Perfect Format Preservation', desc: 'Fonts, images, bullet points, tables, headers, and footers are all kept exactly as in your Word document.' },
                        { title: 'Bank-Level Security', desc: 'SSL encryption on all uploads. Files are permanently deleted after 1 hour. Your documents stay private.' },
                        { title: 'Works on All Devices', desc: 'No software to install. Convert Word to PDF on Chrome, Safari, Firefox — on Windows, Mac, or mobile.' },
                        { title: 'Fast – Results in Seconds', desc: 'Most Word to PDF conversions finish in under 10 seconds, even for large multi-page documents.' },
                      ].map(({ title, desc }) => (
                        <div key={title} className="bg-white rounded-2xl p-5 shadow-sm flex gap-4 items-start">
                          <CheckCircle2 className="text-rose-600 mt-1 shrink-0" size={20} />
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                            <p className="text-sm text-gray-500">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* FAQ */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      Frequently Asked Questions – Word to PDF
                    </h2>
                    <div className="space-y-4">
                      {[
                        {
                          q: 'How do I convert Word to PDF for free?',
                          a: 'Upload your DOC or DOCX file on this page. Our tool converts it instantly and you can download the PDF with one click. No signup, completely free.',
                        },
                        {
                          q: 'Does Word to PDF conversion preserve formatting?',
                          a: 'Yes. FreePDFConvert preserves fonts, tables, images, headers, footers, and all other formatting. The output PDF looks identical to your original Word document.',
                        },
                        {
                          q: 'Can I convert DOCX to PDF without Microsoft Word installed?',
                          a: 'Yes. FreePDFConvert runs entirely in your browser. You do not need Microsoft Word, Adobe Acrobat, or any other software installed.',
                        },
                        {
                          q: 'Is converting Word to PDF online safe?',
                          a: 'Absolutely. All uploads are protected by SSL encryption. Files are automatically deleted from our servers after 1 hour and are never accessed by third parties.',
                        },
                        {
                          q: 'What Word file formats are supported?',
                          a: 'FreePDFConvert supports both DOC (Word 97–2003) and DOCX (Word 2007 and later) file formats.',
                        },
                        {
                          q: 'Is there a page or file size limit?',
                          a: 'You can convert Word files up to 50MB in size for free. There is no page limit.',
                        },
                      ].map(({ q, a }) => (
                        <details key={q} className="bg-white rounded-2xl shadow-sm group">
                          <summary className="p-5 font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                            {q}
                            <span className="text-rose-600 font-black text-lg group-open:rotate-45 transition-transform">+</span>
                          </summary>
                          <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
                        </details>
                      ))}
                    </div>
                  </div>

                  {/* Related Tools – Internal Linking */}
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 text-center">
                      Other Free PDF Tools
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { href: '/pdf-to-word',  label: 'PDF to Word'  },
                        { href: '/merge-pdf',    label: 'Merge PDF'    },
                        { href: '/compress-pdf', label: 'Compress PDF' },
                        { href: '/pdf-to-excel', label: 'PDF to Excel' },
                        { href: '/pdf-to-jpg',   label: 'PDF to JPG'   },
                        { href: '/jpg-to-pdf',   label: 'JPG to PDF'   },
                        { href: '/split-pdf',    label: 'Split PDF'    },
                        { href: '/unlock-pdf',   label: 'Unlock PDF'   },
                      ].map(({ href, label }) => (
                        <a
                          key={href}
                          href={href}
                          className="bg-white rounded-2xl p-4 shadow-sm text-center text-sm font-bold text-gray-700 hover:text-rose-600 hover:shadow-md transition-all"
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

export default WordToPdf;