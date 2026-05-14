'use client';

import React, { useState } from 'react';
import Head from 'next/head';
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

// ─── SEO: JSON-LD Schema ─────────────────────────────────────────────────────
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Free Online OCR – Extract Text from PDF",
  "url": "https://freepdfconvert.io/extract-text-from-pdf",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "description": "Free online OCR tool to extract text from scanned PDFs. No signup required. 100% secure browser-based processing.",
  "isAccessibleForFree": true,
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract text from a scanned PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your scanned PDF to FreePDFConvert's free OCR tool. It will automatically detect and extract all text using AI-powered OCR technology. No signup required."
      }
    },
    {
      "@type": "Question",
      "name": "Is this OCR tool free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, FreePDFConvert's OCR tool is 100% free with no hidden fees, no watermarks, and no signup required."
      }
    },
    {
      "@type": "Question",
      "name": "Is my PDF file safe to upload?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Your PDF is processed entirely in your browser using client-side technology. Files never leave your device and are never uploaded to any server."
      }
    },
    {
      "@type": "Question",
      "name": "Does this work on scanned PDFs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FreePDFConvert uses the Tesseract OCR engine to read scanned and image-based PDFs and convert them to editable text."
      }
    }
  ]
};

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
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page
        .render({ canvasContext: canvas.getContext('2d'), viewport })
        .promise.then(() => canvas.toBlob(resolve, 'image/png'))
        .catch(reject);
    });

  const handleFile = async (file) => {
    if (!file) return;

    // ── PDF only ─────────────────────────────────────────────────────────────
    if (file.type !== 'application/pdf') {
      setErrorMsg('Only PDF files are supported. Please upload a .pdf file.');
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

      // Try native text extraction first
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

      // Scanned PDF — use OCR
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

  // Drag & drop support
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e) => e.preventDefault();

  const copyText = () => {
    navigator.clipboard.writeText(extractedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([extractedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName.replace('.pdf', '') + '-extracted.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setExtractedText(''); setStatus('idle'); setFileName('');
    setProgress(0); setProgressLabel(''); setErrorMsg('');
  };

  const wordCount = extractedText.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">

      {/* ── SEO HEAD ─────────────────────────────────────────────────────────── */}
      <Head>
        {/* Primary SEO */}
        <title>Free Online OCR – Extract Text from Scanned PDF | FreePDFConvert</title>
        <meta name="description" content="Extract text from scanned PDF files free online. AI-powered OCR converts non-selectable PDF text into editable content instantly. No signup, no watermark." />
        <meta name="keywords" content="extract text from pdf, pdf ocr online free, ocr pdf to text, scanned pdf to text, pdf text extractor, copy text from pdf online, free ocr tool" />

        {/* Canonical & hreflang */}
        <link rel="canonical" href="https://freepdfconvert.io/extract-text-from-pdf" />
        <link rel="alternate" hreflang="en" href="https://freepdfconvert.io/extract-text-from-pdf" />

        {/* Robots */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Free Online OCR – Extract Text from Scanned PDF | FreePDFConvert" />
        <meta property="og:description" content="Extract text from any scanned PDF free online. AI OCR engine. No signup, no watermark, 100% private browser-based processing." />
        <meta property="og:url" content="https://freepdfconvert.io/extract-text-from-pdf" />
        <meta property="og:site_name" content="FreePDFConvert" />
        <meta property="og:image" content="https://freepdfconvert.io/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free OCR tool to extract text from scanned PDF" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@freepdfconvert" />
        <meta name="twitter:title" content="Free Online OCR – Extract Text from Scanned PDF" />
        <meta name="twitter:description" content="Extract text from scanned PDFs free. AI OCR. No signup required." />
        <meta name="twitter:image" content="https://freepdfconvert.io/og-image.png" />

        {/* Structured Data: WebApplication */}
        <script type="application/ld+json">{JSON.stringify(toolSchema)}</script>

        {/* Structured Data: FAQ — helps Google show rich results */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Head>

      <Header />

      <main className="flex-1 flex flex-col items-center justify-start pt-10 px-4 md:px-6 max-w-5xl mx-auto w-full">

        {/* ── SEO: H1 + Intro ──────────────────────────────────────────────── */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
            Free Online <span className="text-rose-600">OCR</span> – Extract Text from PDF
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">
            Convert scanned and non-selectable PDFs into editable text instantly.
            100% free, no signup, no watermark. AI-powered accuracy.
          </p>
        </header>

        {/* ── TOOL CORE ────────────────────────────────────────────────────── */}
        <section aria-label="PDF OCR Tool" className="w-full flex justify-center">

          {/* IDLE: Upload Zone */}
          {status === 'idle' && (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              className="w-full max-w-2xl min-h-[320px] rounded-[2.5rem] border-2 border-dashed border-gray-200 bg-white hover:border-rose-300 flex flex-col items-center justify-center p-8 transition-all shadow-sm"
            >
              <label className="group cursor-pointer flex flex-col items-center w-full gap-4">
                <div className="bg-rose-50 text-rose-600 p-6 rounded-2xl transition-all group-hover:scale-105">
                  <Plus size={36} strokeWidth={3} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Upload Scanned PDF File</h2>
                <p className="text-sm text-gray-400 text-center">Drag & drop your PDF here, or click to select</p>
                <span className="bg-rose-600 text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-lg hover:bg-rose-700 transition-all">
                  Select PDF File
                </span>
                {/* PDF ONLY — accept only .pdf */}
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
            <div className="bg-white p-16 rounded-[3rem] shadow-2xl text-center w-full max-w-lg border border-gray-50">
              <Loader2 className="text-rose-600 animate-spin w-16 h-16 mx-auto mb-8" />
              <h2 className="text-2xl font-black text-gray-800 uppercase tracking-wide">{progressLabel}</h2>
              <p className="text-gray-400 text-sm mt-2">{fileName}</p>
              <div className="w-full bg-gray-100 h-3 rounded-full mt-8 overflow-hidden">
                <div
                  className="bg-rose-600 h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                  role="progressbar"
                  aria-valuenow={progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="mt-4 font-bold text-rose-600 text-lg">{progress}%</p>
            </div>
          )}

          {/* COMPLETED */}
          {status === 'completed' && (
            <article className="w-full bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-emerald-500" size={20} />
                  <span className="font-bold text-gray-700 uppercase tracking-widest text-sm">
                    Text Extracted — {fileName}
                  </span>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={copyText}
                    className="bg-gray-900 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-gray-700 transition-all"
                    aria-label="Copy extracted text"
                  >
                    {isCopied ? <ClipboardCheck size={16} /> : <Copy size={16} />}
                    {isCopied ? 'Copied!' : 'Copy Text'}
                  </button>
                  <button
                    onClick={downloadText}
                    className="bg-rose-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 text-sm hover:bg-rose-700 transition-all"
                    aria-label="Download extracted text as .txt"
                  >
                    Download .txt
                  </button>
                  <button
                    onClick={reset}
                    className="p-2.5 bg-gray-50 rounded-xl hover:text-rose-600 transition-colors shadow-sm"
                    aria-label="Reset and upload another PDF"
                  >
                    <RefreshCw size={18} />
                  </button>
                </div>
              </div>
              <textarea
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                className="w-full h-[450px] p-6 bg-gray-50 rounded-2xl text-gray-700 leading-relaxed font-medium resize-none focus:ring-2 focus:ring-rose-200 outline-none border border-transparent"
                aria-label="Extracted text content"
              />
              <div className="flex justify-between mt-4 text-xs text-gray-400 font-bold px-2">
                <span>WORDS: {fmt(wordCount)}</span>
                <span>CHARACTERS: {fmt(extractedText.length)}</span>
              </div>
            </article>
          )}

          {/* ERROR */}
          {status === 'error' && (
            <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center max-w-md border border-red-50">
              <AlertCircle className="text-red-500 w-16 h-16 mx-auto mb-6" />
              <h2 className="text-xl font-bold text-gray-800">Extraction Failed</h2>
              <p className="text-gray-500 text-sm mb-8">{errorMsg}</p>
              <button
                onClick={reset}
                className="bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-rose-700"
              >
                Try Again
              </button>
            </div>
          )}
        </section>

        {/* ── SEO: Feature Cards ───────────────────────────────────────────── */}
        <section
          aria-label="Tool features"
          className="grid md:grid-cols-3 gap-8 mt-24 mb-10 w-full"
        >
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <Zap className="text-rose-600 mb-4" aria-hidden="true" />
            <h3 className="font-bold text-lg mb-2">Instant OCR</h3>
            <p className="text-gray-500 text-sm">
              Extract non-selectable text from any scanned PDF in seconds using AI-powered OCR technology.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <ShieldCheck className="text-rose-600 mb-4" aria-hidden="true" />
            <h3 className="font-bold text-lg mb-2">100% Private</h3>
            <p className="text-gray-500 text-sm">
              Your PDF is processed entirely inside your browser. Files never leave your device and are never uploaded to any server.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
            <Search className="text-rose-600 mb-4" aria-hidden="true" />
            <h3 className="font-bold text-lg mb-2">High Accuracy</h3>
            <p className="text-gray-500 text-sm">
              Powered by the Tesseract.js OCR engine — recognizes text from complex layouts, multiple columns, and various fonts.
            </p>
          </div>
        </section>

        {/* ── SEO: How It Works (H2 content) ──────────────────────────────── */}
        <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-10 mb-10">
          <h2 className="text-2xl font-black text-gray-900 mb-6">
            How to Extract Text from a Scanned PDF
          </h2>
          <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
            <li><strong className="text-gray-900">Step 1 —</strong> Click "Select PDF File" or drag and drop your scanned PDF into the upload area above.</li>
            <li><strong className="text-gray-900">Step 2 —</strong> The tool automatically detects whether the PDF contains native text or is a scanned image. If scanned, the AI OCR engine activates.</li>
            <li><strong className="text-gray-900">Step 3 —</strong> Wait a few seconds while each page is processed. A progress bar tracks the OCR scan.</li>
            <li><strong className="text-gray-900">Step 4 —</strong> Copy the extracted text to your clipboard or download it as a .txt file.</li>
          </ol>
        </section>

        {/* ── SEO: FAQ Section (H2 + Q&A for featured snippets) ───────────── */}
        <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-10 mb-16">
          <h2 className="text-2xl font-black text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-800 mb-1">How do I extract text from a scanned PDF?</h3>
              <p className="text-gray-500 text-sm">Upload your scanned PDF above. The tool will automatically use OCR to read the page images and convert them into selectable, editable text.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Is this OCR tool completely free?</h3>
              <p className="text-gray-500 text-sm">Yes. FreePDFConvert's OCR extractor is 100% free with no signup, no watermark, and no file size limits for standard PDFs.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Is my uploaded PDF secure?</h3>
              <p className="text-gray-500 text-sm">Yes. All processing happens inside your browser using client-side JavaScript. Your PDF is never sent to our servers.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">Can it read multi-page scanned PDFs?</h3>
              <p className="text-gray-500 text-sm">Yes. The tool processes each page individually and combines all extracted text into a single output, clearly labeled by page number.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">What languages does the OCR support?</h3>
              <p className="text-gray-500 text-sm">Currently optimized for English. Tesseract.js supports many languages — multi-language support is coming soon.</p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}