'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Plus, FileText, Loader2, CheckCircle2,
  Copy, ClipboardCheck, RefreshCw, AlertCircle
} from 'lucide-react';
import Tesseract from 'tesseract.js';
import Header from '@/components/header';
import Footer from '@/components/footer';

// --- PDF.js worker setup ---
let pdfjs = null;
async function getPdfJs() {
  if (pdfjs) return pdfjs;
  const lib = await import('pdfjs-dist');
  lib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.mjs',
    import.meta.url
  ).toString();
  pdfjs = lib;
  return lib;
}

export default function OCRToolPage() {
  const [extractedText, setExtractedText] = useState('');
  const [status, setStatus] = useState('idle');
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [fileName, setFileName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const ocrBlob = async (blob, pageIdx, totalPages) => {
    const { data: { text } } = await Tesseract.recognize(blob, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          const base = pageIdx / totalPages;
          setProgress(Math.round((base + m.progress / totalPages) * 100));
        }
      },
    });
    return text;
  };

  const pageToBlob = (page) =>
    new Promise((resolve, reject) => {
      const viewport = page.getViewport({ scale: 2.0 });
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page
        .render({ canvasContext: context, viewport })
        .promise.then(() => canvas.toBlob(resolve, 'image/png'))
        .catch(reject);
    });

  const handleFile = async (file) => {
    if (!file) return;
    setFileName(file.name);
    setStatus('processing');
    setProgress(0);
    setExtractedText('');
    setErrorMsg('');

    try {
      if (file.type.startsWith('image/')) {
        setProgressLabel('Scanning image…');
        const { data: { text } } = await Tesseract.recognize(file, 'eng', {
          logger: (m) => {
            if (m.status === 'recognizing text')
              setProgress(Math.round(m.progress * 100));
          },
        });
        setExtractedText(text.trim() || '(No text detected)');
        setStatus('completed');
        setProgress(100);
        return;
      }

      if (file.type === 'application/pdf') {
        setProgressLabel('Loading PDF engine…');
        const lib = await getPdfJs();
        const buffer = await file.arrayBuffer();
        const pdf = await lib.getDocument({ data: new Uint8Array(buffer) }).promise;
        const total = pdf.numPages;

        let nativeText = '';
        let hasText = false;

        for (let i = 1; i <= total; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          let pageText = '';
          let lastY = null;
          for (const item of content.items) {
            if (!item.str) continue;
            if (lastY !== null && Math.abs(item.transform[5] - lastY) > 5)
              pageText += '\n';
            pageText += item.str + ' ';
            lastY = item.transform[5];
          }
          const trimmed = pageText.trim();
          if (trimmed.length > 30) hasText = true;
          nativeText += trimmed + '\n\n';
          setProgress(Math.round((i / total) * (hasText ? 100 : 50)));
        }

        if (hasText) {
          setExtractedText(nativeText.trim());
          setStatus('completed');
          setProgress(100);
          return;
        }

        let ocrText = '';
        for (let i = 1; i <= total; i++) {
          const page = await pdf.getPage(i);
          const blob = await pageToBlob(page);
          const text = await ocrBlob(blob, i - 1, total);
          ocrText += (total > 1 ? `--- Page ${i} ---\n` : '') + text.trim() + '\n\n';
        }
        setExtractedText(ocrText.trim() || '(No text could be extracted)');
        setStatus('completed');
        setProgress(100);
        return;
      }
      throw new Error('Unsupported file type. Please upload a PDF or image.');
    } catch (err) {
      setErrorMsg(err.message || 'Unknown error occurred');
      setStatus('error');
    }
  };

  const onInputChange = (e) => handleFile(e.target.files?.[0]);
  const copyText = () => {
    navigator.clipboard.writeText(extractedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const reset = () => {
    setExtractedText(''); setStatus('idle'); setFileName('');
    setProgress(0); setProgressLabel(''); setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-10 px-4 md:px-6">

        {status === 'idle' && (
          <article className="w-full max-w-4xl flex flex-col items-center">
            <header className="text-center mb-12">
              {/* ✅ SEO: H1 Keyword Rich */}
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                Extract Text From Image Online Free
              </h1>
              <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                Need to grab text from a picture? Our AI-powered OCR tool accurately extracts text from JPG, PNG, WEBP, and scanned PDFs instantly. Fast, free, and secure.
              </p>
            </header>

            <div className="relative mb-16 w-full max-w-2xl min-h-[320px] rounded-[3rem] border-2 border-dashed border-gray-200 bg-white hover:border-rose-400 flex flex-col items-center justify-center p-8 transition-all shadow-sm">
              <label className="group cursor-pointer flex flex-col items-center w-full gap-6">
                <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-xl transition-all group-hover:scale-110 group-hover:rotate-3">
                  <Plus size={36} strokeWidth={3} />
                </div>
                <div className="text-center">
                   <span className="bg-rose-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold shadow-lg hover:bg-rose-700 transition-colors inline-block mb-4">
                     Upload Image / PDF
                   </span>
                   <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest">
                     JPG • PNG • WEBP • SCANNED PDF
                   </p>
                </div>
                <input type="file" className="hidden" onChange={onInputChange} accept="image/*,application/pdf" />
              </label>
            </div>

            {/* ✅ SEO: How-to Section for Ranking */}
            <section className="w-full max-w-4xl bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 mb-10">
              <h2 className="text-2xl font-black text-gray-800 text-center mb-10 uppercase tracking-wide">How to Convert Image to Text?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">1</div>
                  <h3 className="font-bold text-gray-900 mb-2">Select Image</h3>
                  <p className="text-gray-500 text-sm">Upload any JPG, PNG or PDF document from your device.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">2</div>
                  <h3 className="font-bold text-gray-900 mb-2">AI Extraction</h3>
                  <p className="text-gray-500 text-sm">Our neural networks scan the image for editable text characters.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">3</div>
                  <h3 className="font-bold text-gray-900 mb-2">Get Results</h3>
                  <p className="text-gray-500 text-sm">Review the extracted text and copy it to your clipboard instantly.</p>
                </div>
              </div>
            </section>
          </article>
        )}

        {status === 'processing' && (
          <div className="bg-white p-16 mb-20 rounded-[3rem] shadow-2xl text-center w-full max-w-lg border border-rose-50">
            <Loader2 className="text-rose-600 animate-spin w-20 h-20 mx-auto mb-8" />
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-widest">{progressLabel}</h2>
            <div className="w-full bg-gray-100 h-4 rounded-full mt-8 overflow-hidden">
              <div className="bg-rose-600 h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 font-black text-rose-600 text-xl">{progress}%</p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-white p-12 mb-10 rounded-[2.5rem] shadow-2xl text-center w-full max-w-lg border-2 border-red-50">
            <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-gray-800 mb-3 uppercase">Extraction Error</h2>
            <p className="text-gray-500 mb-8 font-medium">{errorMsg}</p>
            <button onClick={reset} className="bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-700 transition-all shadow-lg">Try Another File</button>
          </div>
        )}

        {status === 'completed' && (
          <div className="w-full max-w-4xl mb-20 animate-in fade-in zoom-in duration-300">
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-50 pb-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <CheckCircle2 className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h2 className="font-black text-gray-800 uppercase text-sm tracking-widest">Extracted Text</h2>
                    <p className="text-xs text-gray-400 font-bold">{fileName}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button onClick={copyText} className="bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg active:scale-95">
                    {isCopied ? <ClipboardCheck size={20} /> : <Copy size={20} />}
                    {isCopied ? 'Copied' : 'Copy Text'}
                  </button>
                  <button onClick={reset} className="p-3 bg-gray-50 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-2xl transition-all active:rotate-180 duration-500">
                    <RefreshCw size={24} />
                  </button>
                </div>
              </div>
              <textarea
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                spellCheck="false"
                className="w-full h-[500px] p-6 bg-gray-50 rounded-[2rem] text-lg text-gray-700 leading-relaxed font-medium resize-none focus:outline-none focus:ring-2 focus:ring-rose-100 transition-all"
              />
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}