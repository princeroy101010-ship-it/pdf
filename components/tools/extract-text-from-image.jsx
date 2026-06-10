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

const FAQ_ITEMS = [
  {
    q: 'How can I extract text from an image online for free?',
    a: 'Simply upload your image (JPG, PNG, or WEBP) or scanned PDF to our free OCR tool. The system uses high-precision neural networks to scan text characters, turning them into editable plain text in real time with zero cost.',
  },
  {
    q: 'Can this OCR tool extract text from scanned PDF files?',
    a: 'Yes. If your PDF contains scanned physical pages or flattened images, our tool converts each page into high-resolution images canvas layouts automatically, then reads the text via client-side OCR processing.',
  },
  {
    q: 'Is it safe to upload confidential documents to this extraction tool?',
    a: 'Absolutely. All processing occurs locally directly inside your browser sandbox engine using WebAssembly compiled scripts. Your files are never sent or stored on external cloud databases, ensuring complete data privacy.',
  }
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://freepdfconvert.io/image-to-text',
      url: 'https://freepdfconvert.io/image-to-text',
      name: 'Extract Text From Image Online Free – Accurate OCR | FreePDFConvert',
      description: 'Convert images to text seamlessly. Free online AI OCR tool to instantly extract editable text from JPG, PNG, WEBP files and scanned PDFs without registering.',
      isPartOf: { '@id': 'https://freepdfconvert.io/#website' },
      breadcrumb: { '@id': 'https://freepdfconvert.io/image-to-text/#breadcrumb' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://freepdfconvert.io/image-to-text/#breadcrumb',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://freepdfconvert.io/' },
        { '@type': 'ListItem', position: 2, name: 'Image to Text', item: 'https://freepdfconvert.io/image-to-text' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://freepdfconvert.io/image-to-text/#software',
      name: 'AI Image Text Extractor OCR – FreePDFConvert',
      url: 'https://freepdfconvert.io/image-to-text',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'All – Web Browser Client',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      featureList: [
        'Image to text converter free',
        'Scanned PDF text extraction',
        'Secure client-side browser OCR processing',
        'Instant copy-to-clipboard text output',
        'No subscription or account required'
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://freepdfconvert.io/image-to-text/#faq',
      mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
  ],
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
      const context = canvas.getContext('2d');
      if (!context) return reject(new Error('Failed to create canvas 2D rendering context context.'));
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
        setProgressLabel('Scanning image items…');
        const { data: { text } } = await Tesseract.recognize(file, 'eng', {
          logger: (m) => {
            if (m.status === 'recognizing text')
              setProgress(Math.round(m.progress * 100));
          },
        });
        setExtractedText(text.trim() || '(No text detected inside this file)');
        setStatus('completed');
        setProgress(100);
        return;
      }

      if (file.type === 'application/pdf') {
        setProgressLabel('Loading PDF engine module…');
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

        setProgressLabel('Performing deep OCR scan…');
        let ocrText = '';
        for (let i = 1; i <= total; i++) {
          const page = await pdf.getPage(i);
          const blob = await pageToBlob(page);
          const text = await ocrBlob(blob, i - 1, total);
          ocrText += (total > 1 ? `--- Page ${i} ---\n` : '') + text.trim() + '\n\n';
        }
        setExtractedText(ocrText.trim() || '(No readable data text could be extracted)');
        setStatus('completed');
        setProgress(100);
        return;
      }
      throw new Error('Unsupported file type. Please upload an image file or standard PDF format.');
    } catch (err) {
      setErrorMsg(err.message || 'Unknown processing error error occurred');
      setStatus('error');
    }
  };

  const onInputChange = (e) => handleFile(e.target.files?.[0]);
  
  const copyText = () => {
    if (!extractedText) return;
    navigator.clipboard.writeText(extractedText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const reset = () => {
    setExtractedText(''); setStatus('idle'); setFileName('');
    setProgress(0); setProgressLabel(''); setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900">
      <Script
        id="image-to-text-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />

      <main 
        id="main-content"
        className="flex-1 flex flex-col items-center justify-start pt-8 md:pt-12 px-4 md:px-6 w-full max-w-7xl mx-auto"
        role="main"
        aria-label="Image Text Extractor OCR Tool"
      >
        {/* ── IDLE STATE ──────────────────────────────────────────────── */}
        {status === 'idle' && (
          <article className="w-full flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-500">
            <header className="text-center mb-10 max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                Extract Text From Image Online Free
              </h1>
              <p className="text-slate-500 text-base md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                Need to grab text layout parameters from a picture? Our AI-powered OCR tool safely extracts readable strings from JPG, PNG, WEBP files, and scanned PDFs instantly. Fast, completely free, and production-secure.
              </p>
            </header>

            <div className="w-full max-w-2xl bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-4 md:p-6 mb-12">
              <section aria-label="Upload source file" className="w-full">
                <div className="relative w-full min-h-[260px] md:min-h-[300px] rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 hover:border-rose-400 hover:bg-white flex flex-col items-center justify-center p-6 transition-all duration-300">
                  <label className="group cursor-pointer flex flex-col items-center w-full gap-5 select-none" aria-label="Select file input">
                    <div className="bg-rose-600 text-white p-4.5 rounded-xl shadow-lg shadow-rose-200 transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                      <Plus size={28} strokeWidth={2.5} />
                    </div>
                    <div className="text-center">
                       <span className="bg-rose-600 hover:bg-rose-700 active:scale-98 text-white px-8 py-3.5 rounded-xl text-base font-bold shadow-md transition-all inline-block mb-3">
                         Upload Image / PDF
                       </span>
                       <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                         JPG • PNG • WEBP • SCANNED PDF
                       </p>
                    </div>
                    <input type="file" className="hidden" onChange={onInputChange} accept="image/*,application/pdf" />
                  </label>
                </div>
              </section>
            </div>

            {/* How-to Informational Section */}
            <section aria-labelledby="how-to-heading" className="w-full max-w-3xl bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm mb-12">
              <h2 id="how-to-heading" className="text-xl md:text-2xl font-black text-slate-900 text-center mb-8 uppercase tracking-wide">
                How to Convert Image to Text — 3 Easy Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                {[
                  { step: '1', title: 'Choose Document', desc: 'Select or drag any image file or scanned page layout into our web sandbox drop frame area.' },
                  { step: '2', title: 'AI OCR Processing', desc: 'Our responsive browser client parses internal layouts and reads characters using neural modules securely.' },
                  { step: '3', title: 'Extract & Copy', desc: 'Instantly view your clean plain text data results within our editor ready for rapid data entry clipboard saves.' }
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex flex-col items-center text-center px-2">
                    <div className="w-10 h-10 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-black text-sm mb-3" aria-hidden="true">{step}</div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Structured Value Proposition Cards */}
            <section aria-labelledby="why-heading" className="w-full max-w-3xl mb-12">
              <h2 id="why-heading" className="text-xl md:text-2xl font-black text-slate-900 text-center mb-8 uppercase tracking-wide">
                Advanced Client-Side Text Extraction System
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: '🔒 Private Processing Architecture', desc: 'Your uploaded ledger records and text strings are computed using local device sandbox tasks. No image files transmit to cloud servers.' },
                  { title: '📑 Smart Scanned PDF Conversion', desc: 'Fallback converters convert non-selectable, image-based PDF logs into high clarity canvas assets to guarantee accurate text recovery.' },
                  { title: '⚡ Multi-Format Compatibility Engine', desc: 'Works with standard JPG screenshots, PNG camera captures, modern compressed WEBP outputs, and multi-page doc files.' },
                  { title: '🆓 No Subscription or Account Walls', desc: 'Enjoy unlimited character scans and extractions without dealing with dynamic subscription plans or profile signup forms.' }
                ].map((item) => (
                  <div key={item.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Listing Markup View */}
            <section aria-labelledby="faq-heading" className="w-full max-w-3xl mb-12">
              <h2 id="faq-heading" className="text-xl md:text-2xl font-black text-slate-900 text-center mb-8 uppercase tracking-wide">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map(({ q, a }) => (
                  <div key={q} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-sm mb-1">{q}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>
        )}

        {/* ── LOADING STATE ────────────────────────────────────────────── */}
        {status === 'processing' && (
          <div 
            className="bg-white p-12 mb-20 rounded-3xl shadow-xl border border-slate-100 text-center w-full max-w-md my-auto animate-in zoom-in-95 duration-200"
            role="status"
            aria-live="polite"
          >
            <Loader2 className="text-rose-600 animate-spin w-16 h-16 mx-auto mb-6" />
            <h2 className="text-xl font-black text-slate-900 mb-1 tracking-tight uppercase">
              {progressLabel || 'Extracting Character Arrays...'}
            </h2>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-6 overflow-hidden shadow-inner">
              <div className="bg-rose-600 h-full rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-3 font-black text-rose-600 text-lg">{progress}%</p>
          </div>
        )}

        {/* ── ERROR STATE ───────────────────────────────────────────────── */}
        {status === 'error' && (
          <div 
            className="bg-white p-10 mb-20 rounded-3xl shadow-xl text-center w-full max-w-md border border-slate-100 my-auto"
            role="status"
            aria-live="assertive"
          >
            <AlertCircle className="text-red-500 w-14 h-14 mx-auto mb-4" />
            <h2 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-wide">Extraction Failed</h2>
            <p className="text-slate-500 text-sm mb-6 font-medium leading-relaxed">{errorMsg}</p>
            <button onClick={reset} className="bg-rose-600 hover:bg-rose-700 active:scale-98 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all">
              Try Another File
            </button>
          </div>
        )}

        {/* ── COMPLETED STATE ───────────────────────────────────────────── */}
        {status === 'completed' && (
          <div className="w-full max-w-4xl mb-16 animate-in fade-in zoom-in-98 duration-300">
            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-xl border border-slate-100">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-50 pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h2 className="font-black text-slate-900 uppercase text-xs tracking-widest">Extracted Text Content</h2>
                    <p className="text-xs text-slate-400 font-bold max-w-xs md:max-w-md truncate mt-0.5">{fileName || 'ocr_result_output'}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={copyText} 
                    className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all active:scale-95 shadow-sm"
                  >
                    {isCopied ? <ClipboardCheck size={18} /> : <Copy size={18} />}
                    {isCopied ? 'Copied' : 'Copy Text'}
                  </button>
                  <button 
                    onClick={reset} 
                    title="Process another document"
                    className="p-2.5 bg-slate-50 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-300"
                  >
                    <RefreshCw size={20} />
                  </button>
                </div>
              </div>

              <label htmlFor="ocr-text-editor" className="sr-only">Review and edit extracted OCR text string</label>
              <textarea
                id="ocr-text-editor"
                value={extractedText}
                onChange={(e) => setExtractedText(e.target.value)}
                spellCheck="false"
                className="w-full h-[450px] md:h-[520px] p-5 md:p-6 bg-slate-50/70 rounded-2xl text-slate-700 text-base md:text-lg leading-relaxed font-medium resize-none focus:outline-none focus:ring-2 focus:ring-rose-500/10 focus:bg-white transition-all border border-slate-100"
              />
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}