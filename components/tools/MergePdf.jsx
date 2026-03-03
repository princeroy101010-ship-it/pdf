'use client';
import React from 'react';
import { Download, CheckCircle2, Upload, Loader2, Plus, X, FileText, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['merge-pdf'];

const MergePdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        removeFile, startProcessing, reset, handleDownload }) => {
      const seo = config.seo;
      return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <link rel="canonical" href={`https://freepdfconvert.io/${config.slug}`} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:url" content={`https://freepdfconvert.io/${config.slug}`} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/og-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="robots" content="index, follow" />

          <Header />

          <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6">
            {status === 'idle' && (
              <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
                <header className="text-center mb-8 md:mb-12">
                  <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">{seo.h1}</h1>
                  <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">{seo.subtitle}</p>
                </header>

                {fileQueue.length > 0 && (
                  <div className="w-full max-w-2xl mb-6 space-y-2 animate-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center px-4 mb-2">
                      <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Merge Queue ({fileQueue.length})</span>
                      <button onClick={reset} className="text-xs font-bold text-rose-500 hover:underline">Clear All</button>
                    </div>
                    {fileQueue.map((file, idx) => (
                      <div key={idx} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3 truncate">
                          <div className="bg-rose-50 p-2 rounded-lg text-rose-600"><FileText size={18} /></div>
                          <span className="font-bold text-gray-700 text-sm truncate">{file.name}</span>
                        </div>
                        <button onClick={() => removeFile(idx)} className="text-gray-300 hover:text-rose-600 transition-colors"><X size={18} /></button>
                      </div>
                    ))}
                    <button onClick={() => startProcessing()}
                      className="w-full bg-gray-900 hover:bg-rose-600 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl transition-all mt-4 active:scale-95">
                      MERGE ALL FILES
                    </button>
                  </div>
                )}

                <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
                  className={`relative w-full max-w-2xl ${fileQueue.length > 0 ? 'min-h-[120px] md:min-h-[150px]' : 'min-h-[280px] md:min-h-[350px]'} rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                    ${dragActive ? 'border-rose-600 bg-rose-50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-rose-400'}`}>
                  <label className="group cursor-pointer flex flex-col items-center w-full">
                    <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                      <Plus size={32} strokeWidth={3} />
                    </div>
                    <div className="text-center space-y-4">
                      <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg active:scale-95">
                        {fileQueue.length > 0 ? 'Add Another PDF' : 'Select Files to Merge'}
                      </span>
                    </div>
                    <input type="file" className="hidden" onChange={handleFileChange} accept={acceptedFiles} multiple />
                  </label>
                </div>
              </article>
            )}

            {(status === 'uploading' || status === 'processing') && (
              <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300">
                <div className="relative mb-8 md:mb-12 flex justify-center items-center">
                  <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
                  <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                    {status === 'uploading'
                      ? <Upload className="text-rose-600 animate-bounce w-12 h-12" />
                      : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
                  </div>
                </div>
                <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">Merging...</h2>
                <p className="text-gray-400 font-medium text-sm mb-8">{fileQueue.length} files in queue</p>
                <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner">
                  <div className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
                </div>
              </div>
            )}

            {status === 'completed' && (
              <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
                <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100">
                  <CheckCircle2 size={40} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Merged!</h1>
                <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                  <button onClick={handleDownload}
                    className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4">
                    <Download size={28} /> DOWNLOAD MERGED PDF
                  </button>
                  <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors">
                    Merge more files
                  </button>
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

export default MergePdf;