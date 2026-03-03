'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Plus, FileText, Loader2, CheckCircle2,
  Copy, ClipboardCheck, RefreshCw, AlertCircle
} from 'lucide-react';
import Tesseract from 'tesseract.js';
import Header from '@/components/header';
import Footer from '@/components/footer';

// ─── PDF.js worker fix ───────────────────────────────────────────────────────
// We import the worker as a bundled entry so Next.js handles it correctly.
// No external CDN needed — avoids version mismatch & fetch errors entirely.
let pdfjs = null;

async function getPdfJs() {
  if (pdfjs) return pdfjs;

  const lib = await import('pdfjs-dist');

  // Next.js / Webpack: point workerSrc to the file inside node_modules
  // so it is served from the same origin (no CDN fetch required).
  lib.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.mjs',
    import.meta.url
  ).toString();

  pdfjs = lib;
  return lib;
}
// ────────────────────────────────────────────────────────────────────────────

const fmt = (n) => n.toLocaleString();

export default function OCRToolPage() {
  const [extractedText, setExtractedText] = useState('');
  const [status, setStatus]               = useState('idle');   // idle | processing | completed | error
  const [progress, setProgress]           = useState(0);
  const [progressLabel, setProgressLabel] = useState('');
  const [isCopied, setIsCopied]           = useState(false);
  const [fileName, setFileName]           = useState('');
  const [errorMsg, setErrorMsg]           = useState('');

  // ── OCR a single canvas blob (for scanned PDF pages) ──
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

  // ── Render a PDF page to canvas → blob ──
  const pageToBlob = (page) =>
    new Promise((resolve, reject) => {
      const viewport = page.getViewport({ scale: 2.0 });
      const canvas   = document.createElement('canvas');
      canvas.width   = viewport.width;
      canvas.height  = viewport.height;
      page
        .render({ canvasContext: canvas.getContext('2d'), viewport })
        .promise.then(() => canvas.toBlob(resolve, 'image/png'))
        .catch(reject);
    });

  // ── Main handler ──
  const handleFile = async (file) => {
    if (!file) return;
    setFileName(file.name);
    setStatus('processing');
    setProgress(0);
    setExtractedText('');
    setErrorMsg('');

    try {
      // ── IMAGE ──
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

      // ── PDF ──
      if (file.type === 'application/pdf') {
        setProgressLabel('Loading PDF engine…');
        const lib = await getPdfJs();

        setProgressLabel('Parsing PDF…');
        const buffer  = await file.arrayBuffer();
        const pdf     = await lib.getDocument({ data: new Uint8Array(buffer) }).promise;
        const total   = pdf.numPages;

        // Pass 1 — native text layer (instant for text-based PDFs)
        setProgressLabel(`Extracting text (${total} page${total > 1 ? 's' : ''})…`);
        let nativeText = '';
        let hasText    = false;

        for (let i = 1; i <= total; i++) {
          const page    = await pdf.getPage(i);
          const content = await page.getTextContent();

          let pageText = '';
          let lastY    = null;

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

        // Pass 2 — scanned PDF: render each page → Tesseract OCR
        setProgressLabel('Scanned PDF — running OCR on each page…');
        let ocrText = '';

        for (let i = 1; i <= total; i++) {
          setProgressLabel(`OCR: page ${i} / ${total}…`);
          const page  = await pdf.getPage(i);
          const blob  = await pageToBlob(page);
          const text  = await ocrBlob(blob, i - 1, total);
          ocrText += (total > 1 ? `─── Page ${i} ───\n` : '') + text.trim() + '\n\n';
        }

        setExtractedText(ocrText.trim() || '(No text could be extracted)');
        setStatus('completed');
        setProgress(100);
        return;
      }

      throw new Error('Unsupported file type. Please upload a PDF or image.');

    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || 'Unknown error');
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

  const wordCount = extractedText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
              <Header />

      <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-10 px-4 md:px-6">

        {/* ── IDLE ── */}
        {status === 'idle' && (
          <article className="w-full max-w-4xl flex flex-col items-center">
            <header className="text-center mb-12">
              <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                OCR Extractor
              </h1>
              <p className="text-gray-500 font-medium">
                Extract text from images &amp; PDFs — including scanned documents.
              </p>
            </header>

            <div className="relative mb-20 w-full max-w-2xl min-h-[300px] rounded-[2.5rem] border-2 border-dashed border-gray-200 bg-white hover:border-rose-300 flex flex-col items-center justify-center p-8 transition-all ">
              <label className="group cursor-pointer flex flex-col items-center w-full gap-4">
                <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-xl transition-all group-hover:scale-110">
                  <Plus size={32} strokeWidth={3} />
                </div>
                <p className="text-gray-400 text-sm font-medium text-center">
                   PDF
                </p>
                <span className="bg-rose-600 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-lg hover:bg-rose-700 transition-colors">
                  Select File
                </span>
                <input type="file" className="hidden" onChange={onInputChange}   accept=".pdf,application/pdf"
 />
              </label>
            </div>
          </article>
        )}

        {/* ── PROCESSING ── */}
        {status === 'processing' && (
          <div className="bg-white p-16 rounded-[3rem] shadow-2xl mb-20 text-center w-full max-w-lg">
            <Loader2 className="text-rose-600 animate-spin w-16 h-16 mx-auto mb-8" />
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-wide">
              Processing…
            </h2>
            {fileName && (
              <p className="text-gray-400 text-sm mt-2 truncate max-w-xs mx-auto">{fileName}</p>
            )}
            <div className="w-full bg-gray-100 h-3 rounded-full mt-8 overflow-hidden">
              <div
                className="bg-rose-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-3 font-bold text-rose-500">{progress}%</p>
            {progressLabel && (
              <p className="mt-2 text-gray-400 text-sm">{progressLabel}</p>
            )}
          </div>
        )}

        {/* ── ERROR ── */}
        {status === 'error' && (
          <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center w-full max-w-lg">
            <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-gray-800 mb-3">Something went wrong</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">{errorMsg}</p>
            <button
              onClick={reset}
              className="bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {/* ── COMPLETED ── */}
        {status === 'completed' && (
          <div className="w-full max-w-4xl mb-10">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 mb-6">
                <div className="flex items-center gap-2 min-w-0">
                  <CheckCircle2 className="text-emerald-500 flex-shrink-0" size={20} />
                  <span className="font-bold text-gray-700 uppercase tracking-widest text-sm">
                    Extracted Text
                  </span>
                  {fileName && (
                    <span className="text-gray-400 text-xs truncate max-w-[180px]">
                      — {fileName}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={copyText}
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-gray-700 transition-colors"
                  >
                    {isCopied ? <ClipboardCheck size={16} /> : <Copy size={16} />}
                    {isCopied ? 'Copied!' : 'Copy Text'}
                  </button>
                  <button
                    onClick={reset}
                    className="p-2.5 bg-gray-50 rounded-xl hover:bg-rose-50 hover:text-rose-600 transition-colors"
                    title="Start over"
                  >
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>

              <textarea
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                className="w-full h-[450px] p-5 bg-gray-50 rounded-2xl text-base text-gray-700 leading-relaxed font-medium resize-y border border-gray-100 focus:outline-none focus:ring-2 focus:ring-rose-200"
              />

              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span>{fmt(wordCount)} words · {fmt(extractedText.length)} characters</span>
                <span className="text-gray-300">Editable — make changes above</span>
              </div>
            </div>
          </div>
        )}

      </main>
            <Footer />

    </div>
  );
}