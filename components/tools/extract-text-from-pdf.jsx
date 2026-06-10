'use client';
// ============================================================
// ✅ SEO NOTE:
// Title, meta description, canonical, open graph, and robots 
// are handled asynchronously inside app/[slug]/page.jsx using 
// generateMetadata(). Do not declare <title> or <meta> here.
// ============================================================
import React, { useState } from 'react';
import Script from 'next/script';
import {
  Plus, Loader2, CheckCircle2,
  Copy, ClipboardCheck, RefreshCw, AlertCircle, Search, ShieldCheck, Zap
} from 'lucide-react';
import Tesseract from 'tesseract.js';
import Header from '@/components/header';
import Footer from '@/components/footer';

// ─── PDF.js worker fix ───────────────────────────────────────────────────────
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

const fmt = (n) => n.toLocaleString();

const FAQ_ITEMS = [
  {
    q: 'How do I extract text from a scanned PDF?',
    a: 'Upload your scanned PDF to FreePDFConvert\'s free OCR tool. It will automatically detect and extract all text using AI-powered OCR technology. No signup required.',
  },
  {
    q: 'Is this OCR tool free?',
    a: 'Yes, FreePDFConvert\'s OCR tool is 100% free with no hidden fees, no watermarks, and no signup required.',
  },
  {
    q: 'Is my PDF file safe to upload?',
    a: 'Yes. Your PDF is processed entirely in your browser using client-side technology. Files never leave your device and are never uploaded to any server.',
  },
  {
    q: 'Does this work on scanned PDFs?',
    a: 'Yes. FreePDFConvert uses the Tesseract OCR engine to read scanned and image-based PDFs and convert them to editable text.',
  }
];



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
      if (!context) return reject(new Error('Failed to capture canvas 2D render context.'));
      
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page
        .render({ canvasContext: context, viewport })
        .promise.then(() => canvas.toBlob(resolve, 'image/png'))
        .catch(reject);
    });

  const handleFile = async (file) => {
    if (!file) return;

    if (file.type !== 'application/pdf') {
      setErrorMsg('Only PDF files are supported. Please upload a valid .pdf file.');
      setStatus('error');
      return;
    }

    setFileName(file.name);
    setStatus('processing');
    setProgress(0);
    setExtractedText('');
    setErrorMsg('');

    try {
      setProgressLabel('Initializing OCR Engine...');
      const lib = await getPdfJs();
      const buffer = await file.arrayBuffer();
      const pdf = await lib.getDocument({ data: new Uint8Array(buffer) }).promise;
      const total = pdf.numPages;

      let nativeText = '';
      let hasText = false;

      for (let i = 1; i <= total; i++) {
        setProgressLabel(`Reading Page ${i} of ${total}...`);
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(' ');
        if (pageText.trim().length > 30) hasText = true;
        nativeText += pageText + '\n\n';
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
        setProgressLabel(`AI Scanning Page ${i} of ${total}...`);
        const page = await pdf.getPage(i);
        const blob = await pageToBlob(page);
        const text = await ocrBlob(blob, i - 1, total);
        ocrText += (total > 1 ? `─── Page ${i} ───\n` : '') + text.trim() + '\n\n';
      }

      setExtractedText(ocrText.trim() || '(No text found in this PDF)');
      setStatus('completed');
      setProgress(100);

    } catch (err) {
      setErrorMsg(err.message || 'An error occurred during text extraction.');
      setStatus('error');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  const copyText = () => {
    if (!extractedText) return;
    navigator.clipboard.writeText(extractedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const downloadText = () => {
    if (!extractedText) return;
    const blob = new Blob([extractedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (fileName ? fileName.replace('.pdf', '') : 'extracted-text') + '-extracted.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setExtractedText(''); setStatus('idle'); setFileName('');
    setProgress(0); setProgressLabel(''); setErrorMsg('');
  };

  const wordCount = extractedText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
   
      <Header />

      <main 
        id="main-content"
        className="flex-1 flex flex-col items-center justify-start pt-10 px-4 md:px-6 max-w-5xl mx-auto w-full"
        role="main"
        aria-label="PDF text extractor tool container"
      >
        {/* ── SEO: H1 + Intro ──────────────────────────────────────────────── */}
        <header className="text-center mb-12 animate-in fade-in slide-in-from-top-3 duration-500">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            Free Online <span className="text-rose-600">OCR</span> – Extract Text from PDF
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Convert scanned and non-selectable PDFs into editable text instantly.
            100% free, no signup, no watermark. AI-powered accuracy.
          </p>
        </header>

        {/* ── TOOL CORE ────────────────────────────────────────────────────── */}
        <section aria-label="PDF OCR Dynamic Workspace Engine" className="w-full flex justify-center">

          {/* IDLE: Upload Zone */}
          {status === 'idle' && (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="w-full max-w-2xl min-h-[320px] rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white hover:border-rose-400 hover:bg-slate-50/30 flex flex-col items-center justify-center p-8 transition-all duration-300 shadow-sm"
            >
              <label className="group cursor-pointer flex flex-col items-center w-full gap-4 select-none">
                <div className="bg-rose-50 text-rose-600 p-6 rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-rose-100/50">
                  <Plus size={36} strokeWidth={3} />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">Upload Scanned PDF File</h2>
                <p className="text-sm text-slate-400 text-center font-medium">Drag & drop your PDF file here, or click to browse</p>
                <span className="bg-rose-600 text-white px-12 py-4.5 rounded-2xl text-lg font-bold shadow-xl shadow-rose-100 hover:bg-rose-700 active:scale-98 transition-all mt-2">
                  Select PDF File
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                  accept="application/pdf,.pdf"
                />
              </label>
            </div>
          )}

          {/* PROCESSING */}
          {status === 'processing' && (
            <div 
              className="bg-white p-16 rounded-[3rem] shadow-xl text-center w-full max-w-lg border border-slate-100"
              role="status"
              aria-live="polite"
            >
              <Loader2 className="text-rose-600 animate-spin w-16 h-16 mx-auto mb-8" />
              <h2 className="text-2xl font-black text-slate-800 uppercase tracking-wide">{progressLabel || 'Reading Document Layout...'}</h2>
              <p className="text-slate-400 text-xs font-bold truncate max-w-xs mx-auto mt-2">{fileName}</p>
              <div className="w-full bg-slate-100 h-3 rounded-full mt-8 overflow-hidden shadow-inner">
                <div
                  className="bg-rose-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="mt-4 font-black text-rose-600 text-xl">{progress}%</p>
            </div>
          )}

          {/* COMPLETED */}
          {status === 'completed' && (
            <article className="w-full bg-white p-6 md:p-8 rounded-[2.5rem] shadow-xl border border-slate-100 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-50 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest">Text Extracted Successfully</h2>
                    <p className="text-xs text-slate-400 font-bold max-w-xs md:max-w-md truncate mt-0.5">{fileName || 'ocr_result_document'}</p>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={copyText}
                    className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-black active:scale-95 transition-all shadow-sm"
                    aria-label="Copy document text values"
                  >
                    {isCopied ? <ClipboardCheck size={16} /> : <Copy size={16} />}
                    {isCopied ? 'Copied!' : 'Copy Text'}
                  </button>
                  <button
                    onClick={downloadText}
                    className="bg-rose-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-rose-700 active:scale-95 transition-all shadow-sm"
                    aria-label="Download conversion as raw flat text file"
                  >
                    Download .txt
                  </button>
                  <button
                    onClick={reset}
                    className="p-2.5 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300 shadow-sm"
                    aria-label="Reset workspace layout frame"
                  >
                    <RefreshCw size={18} />
                  </button>
                </div>
              </div>
              <label htmlFor="pdf-text-editor" className="sr-only">Review and refine extracted text</label>
              <textarea
                id="pdf-text-editor"
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                className="w-full h-[450px] p-6 bg-slate-50/70 rounded-2xl text-slate-700 leading-relaxed font-medium resize-none focus:ring-2 focus:ring-rose-500/10 focus:bg-white outline-none border border-slate-100 transition-all text-base md:text-lg"
                aria-label="Extracted text workspace"
              />
              <div className="flex justify-between mt-4 text-xs text-slate-400 font-black px-2 tracking-wider">
                <span>WORDS: {fmt(wordCount)}</span>
                <span>CHARACTERS: {fmt(extractedText.length)}</span>
              </div>
            </article>
          )}

          {/* ERROR */}
          {status === 'error' && (
            <div 
              className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center max-w-md border border-red-50 my-auto"
              role="status"
              aria-live="assertive"
            >
              <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-6" />
              <h2 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">Extraction Failed</h2>
              <p className="text-slate-500 text-sm mb-8 font-medium leading-relaxed">{errorMsg}</p>
              <button
                onClick={reset}
                className="bg-rose-600 text-white px-10 py-4 rounded-2xl font-black text-sm shadow-md hover:bg-rose-700 active:scale-98 transition-all"
              >
                Try Again
              </button>
            </div>
          )}
        </section>

        {/* ── SEO: Feature Cards ───────────────────────────────────────────── */}
        <section
          aria-label="Core tool advantages and features"
          className="grid md:grid-cols-3 gap-8 mt-24 mb-10 w-full animate-in fade-in duration-500"
        >
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <Zap className="text-rose-600 mb-4" aria-hidden="true" size={28} />
            <h3 className="font-black text-lg text-slate-900 mb-2">Instant OCR Engine</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Extract non-selectable text from any scanned PDF in seconds using client-side AI-powered optical character tracking configurations.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <ShieldCheck className="text-rose-600 mb-4" aria-hidden="true" size={28} />
            <h3 className="font-black text-lg text-slate-900 mb-2">100% Private Architecture</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your sensitive document files are handled inside browser sandboxes. Core assets never transfer to tracking cloud infrastructure arrays.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
            <Search className="text-rose-600 mb-4" aria-hidden="true" size={28} />
            <h3 className="font-black text-lg text-slate-900 mb-2">High Resolution Layouts</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Powered natively by Tesseract.js components — identifying text sequences accurately out of dense tabular blocks or multi-column grids.
            </p>
          </div>
        </section>

        {/* ── SEO: How It Works (H2 content) ──────────────────────────────── */}
        <section aria-labelledby="how-it-works-heading" className="w-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mb-10">
          <h2 id="how-it-works-heading" className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-wide">
            How to Extract Text from a Scanned PDF — Direct Strategy
          </h2>
          <ol className="space-y-4 text-slate-500 text-sm font-medium leading-relaxed" role="list">
            <li><strong className="text-slate-900">Step 1 — Upload Document:</strong> Click "Select PDF File" or drop files inside the interactive area frame tracking target.</li>
            <li><strong className="text-slate-900">Step 2 — Structural Parsing:</strong> The converter verifies if text content strings exist. If missing, optical scanning modules activate immediately.</li>
            <li><strong className="text-slate-900">Step 3 — Progress Computation:</strong> Monitor scanning runtimes across active pages via real-time progress indicators.</li>
            <li><strong className="text-slate-900">Step 4 — Copy Data Arrays:</strong> Move editable target strings onto your active dashboard or copy them as complete flat text scripts.</li>
          </ol>
        </section>

        {/* ── SEO: FAQ Section (H2 + Q&A for featured snippets) ───────────── */}
        <section aria-labelledby="faq-main-heading" className="w-full bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-10 mb-16">
          <h2 id="faq-main-heading" className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQ_ITEMS.map(({ q, a }, idx) => (
              <div key={idx} className="border-b border-slate-50 pb-5 last:border-0 last:pb-0">
                <h3 className="font-black text-slate-800 text-base mb-2">{q}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}