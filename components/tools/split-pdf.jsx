'use client';

import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Plus, Settings, Loader2, X, Scissors, FileText, Trash2, Zap, ShieldCheck, Layers } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';

// ─── PDF Page Thumbnail ───────────────────────────────────────────────────────
const PageThumb = ({ pdfDoc, pageNum, selected, onClick }) => {
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!pdfDoc || !canvasRef.current) return;
    let cancelled = false;
    pdfDoc.getPage(pageNum).then(page => {
      if (cancelled) return;
      const viewport = page.getViewport({ scale: 0.35 });
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');
      page.render({ canvasContext: ctx, viewport }).promise.then(() => {
        if (!cancelled) setLoaded(true);
      });
    });
    return () => { cancelled = true; };
  }, [pdfDoc, pageNum]);

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center cursor-pointer group transition-all duration-200 select-none
        ${selected ? 'scale-105' : 'hover:scale-102'}`}
      aria-label={`Page ${pageNum}${selected ? ' (selected)' : ''}`}
    >
      <div className={`absolute top-1 right-1 z-10 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
        ${selected ? 'bg-rose-600 border-rose-600' : 'bg-white border-gray-300 group-hover:border-rose-400'}`}>
        {selected && <span className="text-white text-[10px] font-black">✓</span>}
      </div>
      <div className={`rounded-xl overflow-hidden shadow-md border-2 transition-all duration-200
        ${selected ? 'border-rose-500 shadow-rose-200 shadow-lg' : 'border-gray-200 group-hover:border-rose-300'}`}>
        {!loaded && (
          <div className="w-[90px] h-[127px] bg-gray-100 flex items-center justify-center">
            <Loader2 size={18} className="text-gray-300 animate-spin" />
          </div>
        )}
        <canvas ref={canvasRef} className={loaded ? 'block' : 'hidden'} />
      </div>
      <span className={`mt-2 text-xs font-bold ${selected ? 'text-rose-600' : 'text-gray-400'}`}>
        {pageNum}
      </span>
    </div>
  );
};

// ─── Mode Button ──────────────────────────────────────────────────────────────
const ModeBtn = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all border-2
      ${active ? 'bg-rose-600 text-white border-rose-600 shadow-md' : 'bg-white text-gray-500 border-gray-200 hover:border-rose-300 hover:text-rose-500'}`}
  >
    {children}
  </button>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const SplitPdf = () => {
  const [pdfDoc, setPdfDoc]               = useState(null);
  const [totalPages, setTotalPages]       = useState(0);
  const [fileName, setFileName]           = useState('');
  const [fileObj, setFileObj]             = useState(null);
  const [mode, setMode]                   = useState('range');
  const [ranges, setRanges]               = useState([{ from: '1', to: '' }]);
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [everyN, setEveryN]               = useState(1);
  const [splitStatus, setSplitStatus]     = useState('idle');
  const [splitFiles, setSplitFiles]       = useState([]);
  const [splitError, setSplitError]       = useState('');

  const fileInputRef = useRef(null);

  const loadPdfJs = () => new Promise((resolve) => {
    if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    s.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      resolve(window.pdfjsLib);
    };
    document.head.appendChild(s);
  });

  const handleFileSelect = async (file) => {
    if (!file || file.type !== 'application/pdf') return;
    setFileName(file.name); setFileObj(file); setSplitError('');
    setSplitFiles([]); setSplitStatus('idle'); setSelectedPages(new Set());
    setRanges([{ from: '1', to: '' }]);
    const pdfjsLib = await loadPdfJs();
    const buf = await file.arrayBuffer();
    const doc = await pdfjsLib.getDocument({ data: buf }).promise;
    setPdfDoc(doc); setTotalPages(doc.numPages);
    setRanges([{ from: '1', to: String(doc.numPages) }]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) handleFileSelect(f);
  };

  const addRange    = () => setRanges(p => [...p, { from: '', to: '' }]);
  const removeRange = (i) => setRanges(p => p.filter((_, idx) => idx !== i));
  const updateRange = (i, field, val) =>
    setRanges(p => p.map((r, idx) => idx === i ? { ...r, [field]: val } : r));

  const togglePage  = (n) => setSelectedPages(prev => { const s = new Set(prev); s.has(n) ? s.delete(n) : s.add(n); return s; });
  const selectAll   = () => setSelectedPages(new Set(Array.from({ length: totalPages }, (_, i) => i + 1)));
  const selectNone  = () => setSelectedPages(new Set());

  const buildApiRanges = () => {
    if (mode === 'range')  return ranges.filter(r => r.from && r.to).map(r => ({ from: r.from, to: r.to }));
    if (mode === 'select') return [...selectedPages].sort((a,b)=>a-b).map(p => ({ from: String(p), to: String(p) }));
    if (mode === 'every') {
      const result = [];
      for (let i = 1; i <= totalPages; i += everyN)
        result.push({ from: String(i), to: String(Math.min(i + everyN - 1, totalPages)) });
      return result;
    }
    return [];
  };

  const handleSplit = async () => {
    const apiRanges = buildApiRanges();
    if (!apiRanges.length) { setSplitError('Please configure split options.'); return; }
    setSplitStatus('processing'); setSplitError('');
    const formData = new FormData();
    formData.append('files', fileObj);
    formData.append('tool_type', 'split-pdf');
    formData.append('ranges', JSON.stringify(apiRanges));
    try {
      const res  = await fetch('https://resourcepool-pool.shop/api/process/', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.error) { setSplitError(data.error); setSplitStatus('idle'); return; }
      setSplitFiles(data.files || [{ name: 'split.pdf', url: data.download_url }]);
      setSplitStatus('done');
    } catch (e) { setSplitError(e.message); setSplitStatus('idle'); }
  };

  const downloadFile = async (url, name) => {
    try {
      const r    = await fetch(url);
      const blob = await r.blob();
      const a    = document.createElement('a');
      a.href     = window.URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    } catch { window.location.href = url; }
  };

  const downloadAll = () => splitFiles.forEach(f => downloadFile(f.url, f.name));

  const reset = () => {
    setPdfDoc(null); setTotalPages(0); setFileName(''); setFileObj(null);
    setRanges([{ from: '1', to: '' }]); setSelectedPages(new Set());
    setSplitFiles([]); setSplitStatus('idle'); setSplitError('');
    setMode('range'); setEveryN(1);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">


      <Header />

      <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-10 px-4 pb-16 max-w-5xl mx-auto w-full">

        {/* ── STEP 1: Upload ─────────────────────────────────────────────────── */}
        {!pdfDoc && splitStatus === 'idle' && (
          <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in duration-500">

            {/* H1 + Intro */}
            <header className="text-center mb-10">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                Split <span className="text-rose-600">PDF</span> Online Free
              </h1>
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto">
                Extract pages, split by range, or divide PDF into individual pages.
                100% free, no signup, no watermark required.
              </p>
            </header>

            {/* Upload Zone */}
            <div
              onDragOver={e => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="relative w-full max-w-2xl min-h-[300px] rounded-[2.5rem] border-2 border-dashed border-gray-200 bg-white hover:border-rose-400 hover:bg-rose-50/30 transition-all duration-300 flex flex-col items-center justify-center p-8 cursor-pointer group"
              aria-label="Upload PDF to split"
            >
              <div className="bg-rose-600 text-white p-5 rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-6">
                <Plus size={32} strokeWidth={3} />
              </div>
              <span className="bg-rose-600 text-white px-10 py-4 rounded-2xl text-lg font-black shadow-lg group-hover:bg-rose-700 transition">
                Select PDF File
              </span>
              <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest mt-4">or drop PDF here</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                onChange={e => { if (e.target.files[0]) handleFileSelect(e.target.files[0]); }}
                aria-label="Upload PDF file to split"
              />
            </div>

      

          </article>
        )}

        {/* ── STEP 2: Configure Split ─────────────────────────────────────────── */}
        {pdfDoc && splitStatus === 'idle' && (
          <div className="w-full max-w-5xl animate-in fade-in duration-500">

            {/* File Info Bar */}
            <div className="flex items-center justify-between bg-white border border-gray-200 rounded-2xl px-5 py-4 mb-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="bg-rose-100 p-2.5 rounded-xl">
                  <FileText size={20} className="text-rose-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm truncate max-w-[280px]">{fileName}</p>
                  <p className="text-xs text-gray-400 font-semibold">{totalPages} pages</p>
                </div>
              </div>
              <button
                onClick={reset}
                className="text-gray-400 hover:text-rose-500 transition p-2 rounded-xl hover:bg-rose-50"
                aria-label="Remove file and start over"
              >
                <X size={18} />
              </button>
            </div>

            {/* Split Mode Tabs */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Split Mode</p>
              <div className="flex flex-wrap gap-3 mb-6">
                <ModeBtn active={mode === 'range'}  onClick={() => setMode('range')}>📄 By Page Range</ModeBtn>
                <ModeBtn active={mode === 'select'} onClick={() => setMode('select')}>🖱️ Select Pages</ModeBtn>
                <ModeBtn active={mode === 'every'}  onClick={() => setMode('every')}>✂️ Split Every N Pages</ModeBtn>
              </div>

              {/* Range Mode */}
              {mode === 'range' && (
                <div className="space-y-3">
                  {ranges.map((r, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-4 border border-gray-100">
                      <div className="bg-rose-600 text-white text-xs font-black w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex items-center gap-3 flex-1 flex-wrap">
                        <span className="text-sm font-bold text-gray-500">Pages</span>
                        <input type="number" min={1} max={totalPages} value={r.from}
                          onChange={e => updateRange(i, 'from', e.target.value)}
                          className="w-20 border-2 border-gray-200 rounded-xl px-3 py-2 text-sm font-black text-black text-center focus:outline-none focus:border-rose-400 bg-white"
                          placeholder="1" aria-label="From page" />
                        <span className="text-sm font-bold text-gray-400">to</span>
                        <input type="number" min={1} max={totalPages} value={r.to}
                          onChange={e => updateRange(i, 'to', e.target.value)}
                          className="w-20 border-2 border-gray-200 rounded-xl px-3 text-black py-2 text-sm font-black text-center focus:outline-none focus:border-rose-400 bg-white"
                          placeholder={String(totalPages)} aria-label="To page" />
                        {r.from && r.to && (
                          <span className="text-xs text-gray-400 font-semibold bg-gray-100 px-3 py-1 rounded-lg">
                            {Math.max(0, Number(r.to) - Number(r.from) + 1)} pages → Part {i + 1}.pdf
                          </span>
                        )}
                      </div>
                      {ranges.length > 1 && (
                        <button onClick={() => removeRange(i)} className="text-gray-300 hover:text-rose-500 transition p-1" aria-label="Remove range">
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button onClick={addRange}
                    className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-3.5 text-sm font-bold text-gray-400 hover:border-rose-300 hover:text-rose-500 transition flex items-center justify-center gap-2">
                    <Plus size={16} /> Add Another Range
                  </button>
                </div>
              )}

              {/* Select Pages Mode */}
              {mode === 'select' && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <button onClick={selectAll} className="text-xs font-bold text-rose-600 hover:underline">Select All</button>
                    <span className="text-gray-300">|</span>
                    <button onClick={selectNone} className="text-xs font-bold text-gray-400 hover:text-gray-600 hover:underline">Clear</button>
                    <span className="ml-auto text-xs font-bold bg-rose-50 text-rose-600 px-3 py-1 rounded-lg">
                      {selectedPages.size} selected
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 max-h-[380px] overflow-y-auto p-2 bg-gray-50 rounded-2xl border border-gray-100">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                      <PageThumb key={n} pdfDoc={pdfDoc} pageNum={n} selected={selectedPages.has(n)} onClick={() => togglePage(n)} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">Each selected page will become a separate PDF</p>
                </div>
              )}

              {/* Every N Mode */}
              {mode === 'every' && (
                <div className="flex flex-col items-center gap-6 py-4">
                  <div className="flex items-center gap-5 bg-gray-50 rounded-2xl px-8 py-6 border border-gray-100">
                    <button onClick={() => setEveryN(v => Math.max(1, v - 1))}
                      className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-rose-400 hover:text-rose-600 transition font-black text-xl"
                      aria-label="Decrease pages per file">−</button>
                    <div className="text-center">
                      <span className="text-5xl font-black text-rose-600">{everyN}</span>
                      <p className="text-xs text-gray-400 font-bold mt-1">pages per file</p>
                    </div>
                    <button onClick={() => setEveryN(v => Math.min(totalPages, v + 1))}
                      className="w-10 h-10 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center hover:border-rose-400 hover:text-rose-600 transition font-black text-xl"
                      aria-label="Increase pages per file">+</button>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[1, 2, 5, 10].map(n => (
                      <button key={n} onClick={() => setEveryN(n)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition
                          ${everyN === n ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-gray-500 border-gray-200 hover:border-rose-300'}`}>
                        Every {n} page{n > 1 ? 's' : ''}
                      </button>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-semibold bg-orange-50 border border-orange-100 px-5 py-3 rounded-xl">
                    Will produce <span className="text-rose-600 font-black">{Math.ceil(totalPages / everyN)}</span> PDF files
                  </p>
                </div>
              )}
            </div>

            {splitError && (
              <p className="text-rose-500 text-sm mb-4 text-center font-semibold bg-rose-50 py-3 rounded-xl border border-rose-100">
                ⚠️ {splitError}
              </p>
            )}

            <button
              onClick={handleSplit}
              className="w-full bg-rose-600 text-white py-5 rounded-2xl text-xl font-black shadow-xl hover:bg-rose-700 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
              aria-label="Split PDF now"
            >
              <Scissors size={24} aria-hidden="true" /> Split PDF
            </button>
          </div>
        )}

        {/* ── PROCESSING ─────────────────────────────────────────────────────── */}
        {splitStatus === 'processing' && (
          <div className="bg-white p-12 rounded-[3rem] shadow-2xl text-center w-full max-w-lg">
            <div className="relative mb-8 flex justify-center items-center">
              <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-36 h-36 absolute" strokeWidth={1} />
              <div className="relative z-10 bg-rose-50 p-6 rounded-3xl">
                <Loader2 className="text-rose-600 animate-spin w-14 h-14" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-gray-800 uppercase mb-2">Splitting PDF...</h2>
            <p className="text-gray-400 text-sm mb-8 truncate">{fileName}</p>
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden">
              <div
                className="bg-rose-600 h-full w-[85%] animate-pulse rounded-full"
                role="progressbar"
                aria-valuenow={85}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        )}

        {/* ── DONE ───────────────────────────────────────────────────────────── */}
        {splitStatus === 'done' && splitFiles.length > 0 && (
          <div className="text-center w-full max-w-2xl animate-in fade-in duration-500">
            <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl rotate-3">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-2">Split Complete!</h2>
            <p className="text-gray-400 font-semibold mb-8">
              {splitFiles.length} file{splitFiles.length > 1 ? 's' : ''} ready to download
            </p>

            <div className="bg-white p-6 rounded-[2rem] shadow-xl flex flex-col gap-3 mb-4">
              {splitFiles.map((f, i) => (
                <button
                  key={i}
                  onClick={() => downloadFile(f.url, f.name)}
                  className="bg-gray-50 hover:bg-rose-50 border-2 border-gray-100 hover:border-rose-200 text-gray-700 hover:text-rose-600 w-full py-4 px-5 text-sm font-bold rounded-2xl transition-all flex items-center justify-between gap-3 group"
                  aria-label={`Download ${f.name}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-rose-100 group-hover:bg-rose-200 p-2 rounded-xl transition">
                      <FileText size={16} className="text-rose-600" aria-hidden="true" />
                    </div>
                    <span className="truncate max-w-[260px]">{f.name}</span>
                  </div>
                  <Download size={16} className="flex-shrink-0" aria-hidden="true" />
                </button>
              ))}
            </div>

            {splitFiles.length > 1 && (
              <button
                onClick={downloadAll}
                className="w-full bg-rose-600 text-white py-5 rounded-2xl text-lg font-black shadow-xl hover:bg-rose-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 mb-4"
                aria-label="Download all split PDF files"
              >
                <Download size={22} aria-hidden="true" /> Download All Files
              </button>
            )}

            <button onClick={reset} className="text-gray-400 hover:text-gray-600 font-semibold text-sm">
              Split another PDF
            </button>
          </div>
        )}


      {/* Feature Cards */}
            <section aria-label="Tool features" className="grid md:grid-cols-3 gap-6 mt-16 mb-6 w-full">
              <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Layers className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                <h3 className="font-bold text-base mb-2">3 Split Modes</h3>
                <p className="text-gray-500 text-sm">Split by page range, select individual pages visually, or automatically divide every N pages into separate PDFs.</p>
              </div>
              <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                <Zap className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                <h3 className="font-bold text-base mb-2">Visual Page Picker</h3>
                <p className="text-gray-500 text-sm">See thumbnail previews of every page and click to select exactly which pages to extract — no guessing page numbers.</p>
              </div>
              <div className="p-7 bg-white rounded-3xl shadow-sm border border-gray-100">
                <ShieldCheck className="text-rose-600 mb-3" size={24} aria-hidden="true" />
                <h3 className="font-bold text-base mb-2">Secure & Private</h3>
                <p className="text-gray-500 text-sm">SSL encryption on all uploads. Your PDF is automatically deleted after splitting and never stored or shared with anyone.</p>
              </div>
            </section>

            {/* How It Works */}
            <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mt-2 mb-6">
              <h2 className="text-2xl font-black text-gray-900 mb-6">
                How to Split a PDF Online (3 Steps)
              </h2>
              <ol className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <li>
                  <strong className="text-gray-900">Step 1 —</strong> Click "Select PDF File" or drag and drop your <code className="bg-gray-100 px-1.5 py-0.5 rounded text-xs">.pdf</code> into the upload area above.
                </li>
                <li>
                  <strong className="text-gray-900">Step 2 —</strong> Choose your split mode: by page range, visually select pages, or split every N pages. Set your options and click "Split PDF".
                </li>
                <li>
                  <strong className="text-gray-900">Step 3 —</strong> Download your individual PDF files. No account, no email, no watermark.
                </li>
              </ol>
            </section>

            {/* FAQ Section */}
            <section className="w-full bg-white rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 mb-6">
              <h2 className="text-2xl font-black text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">How do I split a PDF online for free?</h3>
                  <p className="text-gray-500 text-sm">Upload your PDF above, choose a split mode, configure your options, and click Split PDF. Download your files instantly with no signup required.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Can I extract only specific pages from a PDF?</h3>
                  <p className="text-gray-500 text-sm">Yes. Use "Select Pages" mode to see thumbnail previews of every page and click exactly which pages to extract into separate PDF files.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">How many split modes are available?</h3>
                  <p className="text-gray-500 text-sm">Three modes: by page range (e.g. pages 1–5 into one file), by selecting individual pages visually, or automatically every N pages.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Will the split PDF files have a watermark?</h3>
                  <p className="text-gray-500 text-sm">No. FreePDFConvert never adds watermarks to any output file. All split PDFs are always completely clean.</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Is my PDF safe when uploaded?</h3>
                  <p className="text-gray-500 text-sm">Yes. All transfers use SSL encryption. Your PDF is automatically deleted after splitting and is never shared with any third party.</p>
                </div>
              </div>
            </section>
      </main>

      <Footer />
    </div>
  );
};

export default SplitPdf;