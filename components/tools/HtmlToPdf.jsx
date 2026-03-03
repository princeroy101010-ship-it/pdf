'use client';
import React from 'react';
import { Download, CheckCircle2, Upload, Loader2, Plus, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['html-to-pdf'];
const COLOR = 'rose-600';
const BTN_TEXT = 'Select HTML File';
const DL_TEXT = 'DOWNLOAD PDF';

const PdfToExcel = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        reset, handleDownload }) => {
      const seo = config.seo;
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
          {/* SEO */}
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-image.png" />
          <meta name="robots" content="index, follow" />

          <Header />
          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">

            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">{seo.h1}</h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">{seo.subtitle}</p>
                </header>

                <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                  className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? `border-${COLOR} scale-[1.02] bg-green-50` : 'border-gray-200 bg-white hover:border-green-300'}`}>
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className={`bg-${COLOR} text-white p-4 md:p-6 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8`}>
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className={`inline-block bg-${COLOR} text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg`}>{BTN_TEXT}</span>
                      <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest">or drop file here</p>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} accept={acceptedFiles} />
                  </label>
                </div>
              </article>
            )}

            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg">
                <div className="relative mb-8 flex justify-center items-center">
                  <Settings className="text-green-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-green-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading' ? <Upload className={`text-${COLOR} animate-bounce w-12 h-12`} /> : <Loader2 className={`text-${COLOR} animate-spin w-12 h-12`} />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">{status === 'uploading' ? 'Uploading' : 'Converting'}...</h2>
                <p className="text-gray-400 text-sm mb-8 truncate">{fileQueue[0]?.name}</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
                  <div className={`bg-${COLOR} h-full transition-all duration-700 ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
                </div>
              </div>
            )}

            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3"><CheckCircle2 size={40} /></div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">Success!</h1>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center gap-6">
                  <button onClick={handleDownload} className={`bg-${COLOR} text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl shadow-xl hover:-translate-y-1 flex items-center justify-center gap-4`}>
                    <Download size={28} /> {DL_TEXT}
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm">Convert another file</button>
                </div>
              </div>
            )}
          </main>
          <div className="mt-10 md:mt-20"><Footer /></div>
        </div>
      );
    }}
  </BaseToolLogic>
);
export default PdfToExcel;