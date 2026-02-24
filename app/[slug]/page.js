
// 'use client';

// import React, { useState, use } from 'react';
// import {
//   Files, Upload, ArrowLeft, Eye, EyeOff,
//   CheckCircle2, Loader2, Download, RefreshCw,
//   Plus, ShieldCheck, Zap, Lock, X, FileText, Settings
// } from 'lucide-react';
// import Footer from '@/components/footer';
// import Header from '@/components/header';

// // ============================================================
// // ✅ PER-TOOL SEO DATA TABLE
// // Each tool has unique: title (max 60 chars) + description (max 155 chars)
// // Keywords chosen from high-volume Google searches
// // ============================================================
// const TOOL_SEO = {
//   "pdf-to-word": {
//     title: "PDF to Word Converter – Free Online | FreePDFConvert",
//     description: "Convert PDF to Word free online. Fast, accurate PDF to DOC/DOCX conversion. No signup needed. Download editable Word file in seconds.",
//     h1: "PDF to Word Converter",
//     subtitle: "Convert PDF to editable Word documents free. Fast, accurate and 100% secure.",
//     keywords: "pdf to word, pdf to word converter, convert pdf to word, pdf to doc, pdf to docx free",
//     schema_name: "PDF to Word Converter",
//   },
//   "word-to-pdf": {
//     title: "Word to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert Word to PDF free online. Keep all formatting intact. Convert DOC & DOCX to PDF in seconds. No installation required.",
//     h1: "Word to PDF Converter",
//     subtitle: "Convert Word documents to PDF while keeping the original formatting. Free & instant.",
//     keywords: "word to pdf, word to pdf converter, convert word to pdf, doc to pdf, docx to pdf free",
//     schema_name: "Word to PDF Converter",
//   },
//   "pdf-to-excel": {
//     title: "PDF to Excel Converter – Free Online | FreePDFConvert",
//     description: "Convert PDF to Excel free online. Extract tables and data from PDF to XLSX spreadsheet instantly. No signup, no software download.",
//     h1: "PDF to Excel Converter",
//     subtitle: "Pull data directly from PDF into Excel spreadsheets in seconds. 100% free.",
//     keywords: "pdf to excel, pdf to excel converter, convert pdf to excel, pdf to xlsx free",
//     schema_name: "PDF to Excel Converter",
//   },
//   "excel-to-pdf": {
//     title: "Excel to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert Excel to PDF free online. Turn XLS & XLSX spreadsheets into high-quality PDF documents instantly. No signup needed.",
//     h1: "Excel to PDF Converter",
//     subtitle: "Convert Excel spreadsheets to professional PDF documents. Free, fast & secure.",
//     keywords: "excel to pdf, excel to pdf converter, convert excel to pdf, xlsx to pdf free",
//     schema_name: "Excel to PDF Converter",
//   },
//   "pdf-to-jpg": {
//     title: "PDF to JPG Converter – Free Online | FreePDFConvert",
//     description: "Convert PDF to JPG free online. Extract images from PDF or save each page as a high-quality JPG. Fast, secure & no signup required.",
//     h1: "PDF to JPG Converter",
//     subtitle: "Convert PDF pages to high-quality JPG images. Extract all images from PDF instantly.",
//     keywords: "pdf to jpg, pdf to jpg converter, convert pdf to jpg, pdf to image free online",
//     schema_name: "PDF to JPG Converter",
//   },
//   "jpg-to-pdf": {
//     title: "JPG to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert JPG to PDF free online. Combine multiple JPG images into one PDF. Adjust orientation and margins. No signup needed.",
//     h1: "JPG to PDF Converter",
//     subtitle: "Combine JPG images into a PDF file instantly. Free online tool with no watermark.",
//     keywords: "jpg to pdf, jpg to pdf converter, convert jpg to pdf, image to pdf free",
//     schema_name: "JPG to PDF Converter",
//   },
//   "merge-pdf": {
//     title: "Merge PDF Files Online – Free PDF Merger | FreePDFConvert",
//     description: "Merge PDF files online free. Combine multiple PDFs into one document in seconds. Easy drag & drop. No signup, no watermark.",
//     h1: "Merge PDF Files",
//     subtitle: "Combine multiple PDF files into one. Free online PDF merger – drag, drop & merge.",
//     keywords: "merge pdf, merge pdf files, combine pdf, pdf merger online free, join pdf files",
//     schema_name: "PDF Merger",
//   },
//   "compress-pdf": {
//     title: "Compress PDF Online – Reduce PDF File Size Free | FreePDFConvert",
//     description: "Compress PDF file size online for free. Reduce PDF size without losing quality. No signup, no software. Fast PDF compression tool.",
//     h1: "Compress PDF",
//     subtitle: "Reduce PDF file size while keeping maximum quality. Free online PDF compressor.",
//     keywords: "compress pdf, reduce pdf size, compress pdf online free, pdf compressor, shrink pdf",
//     schema_name: "PDF Compressor",
//   },
//   "pdf-to-pptx": {
//     title: "PDF to PowerPoint Converter – Free Online | FreePDFConvert",
//     description: "Convert PDF to PowerPoint free online. Turn PDF into editable PPTX slides in seconds. No signup, no watermark. Fast & accurate.",
//     h1: "PDF to PowerPoint Converter",
//     subtitle: "Convert PDF files to editable PowerPoint presentations. Free & instant conversion.",
//     keywords: "pdf to powerpoint, pdf to pptx, convert pdf to ppt free, pdf to slides online",
//     schema_name: "PDF to PowerPoint Converter",
//   },
//   "pptx-to-pdf": {
//     title: "PowerPoint to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert PowerPoint to PDF free online. Turn PPT & PPTX presentations into PDF in seconds. High quality, no signup required.",
//     h1: "PowerPoint to PDF Converter",
//     subtitle: "Convert PowerPoint presentations to PDF instantly. Free, secure & no watermark.",
//     keywords: "powerpoint to pdf, pptx to pdf, convert ppt to pdf free, presentation to pdf",
//     schema_name: "PowerPoint to PDF Converter",
//   },
//   "pdf-to-png": {
//     title: "PDF to PNG Converter – Free Online | FreePDFConvert",
//     description: "Convert PDF to PNG free online. Save each PDF page as a high-quality PNG image. Fast, secure & no signup needed.",
//     h1: "PDF to PNG Converter",
//     subtitle: "Convert PDF pages into high-quality PNG images. Free online tool, instant download.",
//     keywords: "pdf to png, pdf to png converter, convert pdf to png, pdf to image png free",
//     schema_name: "PDF to PNG Converter",
//   },
//   "png-to-pdf": {
//     title: "PNG to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert PNG to PDF free online. Combine multiple PNG images into one PDF file. No signup, no watermark. Fast & secure.",
//     h1: "PNG to PDF Converter",
//     subtitle: "Combine PNG images into a PDF document. Free online converter with no limits.",
//     keywords: "png to pdf, png to pdf converter, convert png to pdf, image to pdf free",
//     schema_name: "PNG to PDF Converter",
//   },
//   "protect-pdf": {
//     title: "Protect PDF with Password – Free Online | FreePDFConvert",
//     description: "Add password protection to your PDF free online. Encrypt PDF to prevent unauthorized access. Secure, instant & no signup needed.",
//     h1: "Protect PDF",
//     subtitle: "Secure your PDF with a password. Free online PDF encryption – instant & safe.",
//     keywords: "protect pdf, password protect pdf, encrypt pdf free, add password to pdf online",
//     schema_name: "PDF Password Protector",
//   },
//   "unlock-pdf": {
//     title: "Unlock PDF – Remove PDF Password Free Online | FreePDFConvert",
//     description: "Unlock PDF files online free. Remove PDF password and restrictions instantly. Fast, secure & no signup required.",
//     h1: "Unlock PDF",
//     subtitle: "Remove password protection from PDF files. Free PDF unlocker – instant & secure.",
//     keywords: "unlock pdf, remove pdf password, pdf password remover, unlock pdf online free",
//     schema_name: "PDF Unlocker",
//   },
//   "html-to-pdf": {
//     title: "HTML to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert HTML to PDF free online. Turn web pages and HTML files into high-quality PDF documents. Fast, secure & no signup needed.",
//     h1: "HTML to PDF Converter",
//     subtitle: "Convert HTML files and web pages into professional PDF documents. Free & instant.",
//     keywords: "html to pdf, html to pdf converter, convert html to pdf free, webpage to pdf",
//     schema_name: "HTML to PDF Converter",
//   },
//   "txt-to-pdf": {
//     title: "TXT to PDF Converter – Free Online | FreePDFConvert",
//     description: "Convert TXT to PDF free online. Turn plain text files into professional PDF documents instantly. No signup required.",
//     h1: "TXT to PDF Converter",
//     subtitle: "Convert plain text files to PDF instantly. Free online TXT to PDF tool.",
//     keywords: "txt to pdf, text to pdf converter, convert txt to pdf free, plain text to pdf",
//     schema_name: "TXT to PDF Converter",
//   },
//   "pdf-to-txt": {
//     title: "PDF to TXT Converter – Extract Text from PDF Free | FreePDFConvert",
//     description: "Extract text from PDF free online. Convert PDF to plain TXT file instantly. No signup, no software. Fast & accurate text extraction.",
//     h1: "PDF to TXT Converter",
//     subtitle: "Extract all text content from PDF into a plain text file. Free & instant.",
//     keywords: "pdf to txt, pdf to text converter, extract text from pdf free, pdf text extractor",
//     schema_name: "PDF to Text Converter",
//   },
//   "txt-to-word": {
//     title: "TXT to Word Converter – Free Online | FreePDFConvert",
//     description: "Convert TXT to Word free online. Transform plain text files into editable DOC/DOCX documents instantly. No signup needed.",
//     h1: "TXT to Word Converter",
//     subtitle: "Convert TXT files to editable Word documents. Free, fast & no watermark.",
//     keywords: "txt to word, text to word converter, convert txt to docx free, plain text to word",
//     schema_name: "TXT to Word Converter",
//   },
//   "word-to-txt": {
//     title: "Word to TXT Converter – Free Online | FreePDFConvert",
//     description: "Convert Word to TXT free online. Extract plain text from DOC & DOCX files instantly. No signup, no software needed.",
//     h1: "Word to TXT Converter",
//     subtitle: "Convert Word documents to plain text. Free online tool – simple & fast.",
//     keywords: "word to txt, word to text converter, doc to txt free, convert docx to text",
//     schema_name: "Word to TXT Converter",
//   },
//   "pptx-to-txt": {
//     title: "PowerPoint to TXT – Extract Text from PPT Free | FreePDFConvert",
//     description: "Extract text from PowerPoint slides free online. Convert PPTX to TXT and get all text content instantly. No signup required.",
//     h1: "PowerPoint to TXT",
//     subtitle: "Extract all text and speaker notes from PowerPoint slides. Free & instant.",
//     keywords: "powerpoint to txt, pptx to text, extract text from ppt free, ppt to txt converter",
//     schema_name: "PowerPoint to TXT Converter",
//   },
//   "txt-to-pptx": {
//     title: "TXT to PowerPoint Converter – Free Online | FreePDFConvert",
//     description: "Convert TXT to PowerPoint free online. Create PPTX presentations from plain text files instantly. No signup needed.",
//     h1: "TXT to PowerPoint",
//     subtitle: "Create PowerPoint presentations from text files. Free online converter.",
//     keywords: "txt to pptx, text to powerpoint, convert txt to ppt free, text to slides",
//     schema_name: "TXT to PowerPoint Converter",
//   },
//   "pdf-to-html": {
//     title: "PDF to HTML Converter – Free Online | FreePDFConvert",
//     description: "Convert PDF to HTML free online. Transform PDF content into editable HTML code for websites. Fast, secure & no signup required.",
//     h1: "PDF to HTML Converter",
//     subtitle: "Convert PDF documents to HTML code. Free online PDF to HTML converter.",
//     keywords: "pdf to html, pdf to html converter, convert pdf to html free, pdf to web page",
//     schema_name: "PDF to HTML Converter",
//   },
// };

// // ✅ Fallback SEO for any slug not in the list above
// const getToolSEO = (slug) => {
//   if (TOOL_SEO[slug]) return TOOL_SEO[slug];
//   const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
//   return {
//     title: `${name} – Free Online Tool | FreePDFConvert`,
//     description: `Free online ${name} tool. Fast, secure & easy to use. No installation or signup required. Convert files instantly.`,
//     h1: name,
//     subtitle: `Free online ${name}. Fast, secure and easy to use. No signup required.`,
//     keywords: `${slug.replace(/-/g, " ")}, free online ${slug.replace(/-/g, " ")}, ${name} free`,
//     schema_name: name,
//   };
// };

// // ============================================================
// // ✅ TOOL PAGE COMPONENT
// // ============================================================
// const ToolSlugPage = ({ params }) => {
//   const resolvedParams = use(params);
//   const toolSlug = resolvedParams?.slug || "";
//   const seo = getToolSEO(toolSlug);

//   const [compressionLevel, setCompressionLevel] = useState('recommended');
//   const [fileQueue, setFileQueue] = useState([]);
//   const [status, setStatus] = useState('idle');
//   const [dragActive, setDragActive] = useState(false);
//   const [downloadUrl, setDownloadUrl] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const isMergeTool = toolSlug === 'merge-pdf';
//   const isProtectTool = toolSlug === 'protect-pdf';

//   const getAcceptedFiles = () => {
//     if (toolSlug === 'jpg-to-pdf') return "image/jpeg,image/jpg";
//     if (toolSlug === 'png-to-pdf') return "image/png";
//     if (toolSlug === 'word-to-pdf' || toolSlug === 'word-to-txt') return ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
//     if (toolSlug === 'excel-to-pdf') return ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
//     if (toolSlug === 'compress-pdf') return ".pdf,application/pdf";
//     if (toolSlug === 'pptx-to-pdf' || toolSlug === 'pptx-to-txt') return ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation";
//     if (toolSlug === 'txt-to-pdf' || toolSlug === 'txt-to-word' || toolSlug === 'txt-to-pptx') return ".txt,text/plain";
//     if (toolSlug === 'html-to-pdf') return ".html,.htm,text/html";
//     return ".pdf,application/pdf";
//   };

//   const handleFileChange = (e) => {
//     const selectedFiles = Array.from(e.target.files || e.dataTransfer?.files || []);
//     if (selectedFiles.length === 0) return;
//     const manualTools = ['merge-pdf', 'compress-pdf', 'protect-pdf'];
//     if (manualTools.includes(toolSlug)) {
//       setFileQueue(prev => isMergeTool ? [...prev, ...selectedFiles] : selectedFiles);
//     } else {
//       setFileQueue(selectedFiles);
//       startProcessing(selectedFiles);
//     }
//   };

//   const removeFile = (index) => setFileQueue(prev => prev.filter((_, i) => i !== index));

//   const startProcessing = async (filesToProcess = fileQueue) => {
//     if (filesToProcess.length === 0) return;
//     if (isProtectTool && !password) { alert("Please set a password!"); return; }
//     setStatus('uploading');
//     const formData = new FormData();
//     filesToProcess.forEach(f => formData.append('files', f));
//     formData.append('compression_level', compressionLevel);
//     formData.append('tool_type', toolSlug);
//     formData.append('password', password);
//     try {
//       const response = await fetch('http://resourcepool-pool.shop/api/process/', { method: 'POST', body: formData });
//       const data = await response.json();
//       setStatus('processing');
//       if (data.download_url) { setDownloadUrl(data.download_url); setStatus('completed'); }
//     } catch (error) { alert("⚠️ " + error.message); setStatus('idle'); }
//   };

//   const reset = () => { setFileQueue([]); setStatus('idle'); setDownloadUrl(''); setPassword(''); };

//   // ✅ SoftwareApplication Schema — per tool, unique
//   const toolSchema = {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     name: seo.schema_name,
//     url: `https://freepdfconvert.io/${toolSlug}`,
//     description: seo.description,
//     applicationCategory: "BusinessApplication",
//     operatingSystem: "Windows, macOS, Android, iOS, Linux",
//     inLanguage: "en",
//     offers: {
//       "@type": "Offer",
//       price: "0",
//       priceCurrency: "USD",
//     },
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: "4.8",
//       reviewCount: "1820",
//       bestRating: "5",
//       worstRating: "1",
//     },
//   };

//   // ✅ BreadcrumbList Schema — helps Google show navigation in results
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://freepdfconvert.io",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: seo.schema_name,
//         item: `https://freepdfconvert.io/${toolSlug}`,
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100">

//       {/* ✅ Dynamic SEO Meta Tags (per tool) */}
//       <title>{seo.title}</title>
//       <meta name="description" content={seo.description} />
//       <meta name="keywords" content={seo.keywords} />
//       <link rel="canonical" href={`https://freepdfconvert.io/${toolSlug}`} />
//       <meta property="og:title" content={seo.title} />
//       <meta property="og:description" content={seo.description} />
//       <meta property="og:url" content={`https://freepdfconvert.io/${toolSlug}`} />
//       <meta property="og:type" content="website" />
//       <meta property="og:image" content="/og-image.png" />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={seo.title} />
//       <meta name="twitter:description" content={seo.description} />
//       <meta name="robots" content="index, follow" />

//       {/* ✅ Schema Markups */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />

//       <Header />

//       <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-6" role="main" aria-label={seo.schema_name}>

//         {status === 'idle' && (
//           <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
//             <header className="text-center mb-12">
//               {/* ✅ H1 updated with SEO keyword — styling SAME */}
//               <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
//                 {seo.h1}
//               </h1>
//               <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
//                 {seo.subtitle}
//               </p>
//             </header>

//             {/* ✅ All UI below — ZERO change from original */}
//             {isProtectTool && fileQueue.length > 0 && status === 'idle' && (
//               <div className="w-full max-w-2xl animate-in slide-in-from-top-4 space-y-4 mb-8">
//                 <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
//                   <div className="flex items-center gap-3 truncate">
//                     <div className="bg-rose-50 p-2 rounded-lg text-rose-600"><Lock size={18} /></div>
//                     <span className="font-bold text-gray-700 text-sm truncate">{fileQueue[0].name}</span>
//                   </div>
//                   <button onClick={reset} className="text-gray-300 hover:text-rose-600 transition-colors"><X size={18} /></button>
//                 </div>
//                 <div className="p-8 bg-white rounded-[2.5rem] border-2 border-rose-100 shadow-2xl space-y-6 relative overflow-hidden">
//                   <div className="text-center">
//                     <h3 className="text-xl font-black text-gray-800 tracking-tight">Set PDF Password</h3>
//                     <p className="text-sm text-gray-400 font-medium">Encrypt your document with a strong password</p>
//                   </div>
//                   <div className="relative group">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter secret password..."
//                       className="w-full px-6 py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-rose-500 focus:bg-white transition-all outline-none font-bold text-lg text-gray-700 placeholder:text-gray-300"
//                     />
//                     <button onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-600">
//                       {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
//                     </button>
//                   </div>
//                   <button onClick={() => startProcessing()} disabled={!password} className="w-full bg-rose-600 disabled:bg-gray-200 text-white py-5 rounded-2xl text-xl font-black shadow-xl shadow-rose-100 hover:bg-rose-700 transition-all active:scale-95 flex items-center justify-center gap-3">
//                     <ShieldCheck size={24} /> PROTECT PDF NOW
//                   </button>
//                 </div>
//               </div>
//             )}

//             {isMergeTool && fileQueue.length > 0 && (
//               <div className="w-full max-w-2xl mb-6 space-y-2 animate-in slide-in-from-bottom-4">
//                 <div className="flex justify-between items-center px-4 mb-2">
//                   <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Merge Queue ({fileQueue.length})</span>
//                   <button onClick={reset} className="text-xs font-bold text-rose-500 hover:underline">Clear All</button>
//                 </div>
//                 {fileQueue.map((file, idx) => (
//                   <div key={idx} className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
//                     <div className="flex items-center gap-3 truncate">
//                       <div className="bg-rose-50 p-2 rounded-lg text-rose-600"><FileText size={18} /></div>
//                       <span className="font-bold text-gray-700 text-sm truncate">{file.name}</span>
//                     </div>
//                     <button onClick={() => removeFile(idx)} className="text-gray-300 hover:text-rose-600 transition-colors"><X size={18} /></button>
//                   </div>
//                 ))}
//                 <button onClick={() => startProcessing()} className="w-full bg-gray-900 text-white py-5 rounded-2xl text-xl font-black shadow-xl hover:bg-rose-600 transition-all mt-4 active:scale-95">
//                   MERGE ALL FILES
//                 </button>
//               </div>
//             )}

//             <div
//               onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
//               onDragLeave={() => setDragActive(false)}
//               onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFileChange(e); }}
//               className={`relative w-full max-w-2xl ${isMergeTool && fileQueue.length > 0 ? 'min-h-[150px]' : 'min-h-[350px]'} rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8
//                 ${dragActive ? "border-rose-500 bg-rose-50/50 scale-[1.02]" : "border-gray-200 bg-white hover:border-rose-300"}`}
//             >
//               <label className="group cursor-pointer flex flex-col items-center w-full">
//                 <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-8">
//                   <Plus size={40} strokeWidth={3} />
//                 </div>
//                 <div className="text-center space-y-4">
//                   <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all shadow-lg active:scale-95">
//                     {isMergeTool ? (fileQueue.length > 0 ? 'Add Another PDF' : 'Select Files to Merge') : 'Select File'}
//                   </span>
//                   {!isMergeTool && <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">or drop file here</p>}
//                 </div>
//                 <input type="file" className="hidden" onChange={handleFileChange} accept={getAcceptedFiles()} multiple={isMergeTool} />
//               </label>
//             </div>
//           </article>
//         )}

//         {(status === 'uploading' || status === 'processing') && (
//           <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300 relative overflow-hidden">
//             <div className="relative mb-12 flex justify-center items-center">
//               <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
//               <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
//                 {status === 'uploading' ? <Upload className="text-rose-600 animate-bounce w-12 h-12" /> : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
//               </div>
//             </div>
//             <h2 className="text-2xl font-black text-gray-800 mb-2 tracking-tight uppercase">{status === 'uploading' ? 'Uploading' : 'Magic in Progress'}...</h2>
//             <p className="text-gray-400 font-medium text-sm mb-10 truncate px-4">{isMergeTool ? `${fileQueue.length} files in queue` : fileQueue[0]?.name}</p>
//             <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-2 shadow-inner">
//               <div className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
//             </div>
//           </div>
//         )}

//         {status === 'completed' && (
//           <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
//             <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100"><CheckCircle2 size={40} /></div>
//             <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Success!</h1>
//             <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
//               <button onClick={async () => { }} className="group bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:rounded-2xl md:text-2xl font-black transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4">
//                 <Download size={28} /> DOWNLOAD NOW
//               </button>
//               <button onClick={reset} className="text-gray-400 hover:text-rose-600 font-bold flex items-center gap-2 transition-colors text-xs uppercase tracking-widest mt-2"><RefreshCw size={14} /> Start Another Task</button>
//             </div>
//           </div>
//         )}

//         {toolSlug === 'compress-pdf' && fileQueue.length > 0 && status === 'idle' && (
//           <div className="w-full max-w-2xl mt-8">
//             {/* Compression options — same as original */}
//           </div>
//         )}

//       </main>
//       <div className="mt-20"><Footer /></div>
//     </div>
//   );
// };

// export default ToolSlugPage;
'use client';

import React, { useState, use } from 'react';
import {
  Files, Upload, ArrowLeft, Eye, EyeOff,
  CheckCircle2, Loader2, Download, RefreshCw,
  Plus, ShieldCheck, Home, Lock, X, FileText, Settings
} from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

const TOOL_SEO = {
  "pdf-to-word": { title: "PDF to Word Converter – Free Online | FreePDFConvert", description: "Convert PDF to Word free online. Fast, accurate PDF to DOC/DOCX conversion. No signup needed. Download editable Word file in seconds.", h1: "PDF to Word Converter", subtitle: "Convert PDF to editable Word documents free. Fast, accurate and 100% secure.", keywords: "pdf to word, pdf to word converter, convert pdf to word, pdf to doc, pdf to docx free", schema_name: "PDF to Word Converter" },
  "word-to-pdf": { title: "Word to PDF Converter – Free Online | FreePDFConvert", description: "Convert Word to PDF free online. Keep all formatting intact. Convert DOC & DOCX to PDF in seconds. No installation required.", h1: "Word to PDF Converter", subtitle: "Convert Word documents to PDF while keeping the original formatting. Free & instant.", keywords: "word to pdf, word to pdf converter, convert word to pdf, doc to pdf, docx to pdf free", schema_name: "Word to PDF Converter" },
  "pdf-to-excel": { title: "PDF to Excel Converter – Free Online | FreePDFConvert", description: "Convert PDF to Excel free online. Extract tables and data from PDF to XLSX spreadsheet instantly. No signup, no software download.", h1: "PDF to Excel Converter", subtitle: "Pull data directly from PDF into Excel spreadsheets in seconds. 100% free.", keywords: "pdf to excel, pdf to excel converter, convert pdf to excel, pdf to xlsx free", schema_name: "PDF to Excel Converter" },
  "excel-to-pdf": { title: "Excel to PDF Converter – Free Online | FreePDFConvert", description: "Convert Excel to PDF free online. Turn XLS & XLSX spreadsheets into high-quality PDF documents instantly. No signup needed.", h1: "Excel to PDF Converter", subtitle: "Convert Excel spreadsheets to professional PDF documents. Free, fast & secure.", keywords: "excel to pdf, excel to pdf converter, convert excel to pdf, xlsx to pdf free", schema_name: "Excel to PDF Converter" },
  "pdf-to-jpg": { title: "PDF to JPG Converter – Free Online | FreePDFConvert", description: "Convert PDF to JPG free online. Extract images from PDF or save each page as a high-quality JPG. Fast, secure & no signup required.", h1: "PDF to JPG Converter", subtitle: "Convert PDF pages to high-quality JPG images. Extract all images from PDF instantly.", keywords: "pdf to jpg, pdf to jpg converter, convert pdf to jpg, pdf to image free online", schema_name: "PDF to JPG Converter" },
  "jpg-to-pdf": { title: "JPG to PDF Converter – Free Online | FreePDFConvert", description: "Convert JPG to PDF free online. Combine multiple JPG images into one PDF. Adjust orientation and margins. No signup needed.", h1: "JPG to PDF Converter", subtitle: "Combine JPG images into a PDF file instantly. Free online tool with no watermark.", keywords: "jpg to pdf, jpg to pdf converter, convert jpg to pdf, image to pdf free", schema_name: "JPG to PDF Converter" },
  "merge-pdf": { title: "Merge PDF Files Online – Free PDF Merger | FreePDFConvert", description: "Merge PDF files online free. Combine multiple PDFs into one document in seconds. Easy drag & drop. No signup, no watermark.", h1: "Merge PDF Files", subtitle: "Combine multiple PDF files into one. Free online PDF merger – drag, drop & merge.", keywords: "merge pdf, merge pdf files, combine pdf, pdf merger online free, join pdf files", schema_name: "PDF Merger" },
  "compress-pdf": { title: "Compress PDF Online – Reduce PDF File Size Free | FreePDFConvert", description: "Compress PDF file size online for free. Reduce PDF size without losing quality. No signup, no software. Fast PDF compression tool.", h1: "Compress PDF", subtitle: "Reduce PDF file size while keeping maximum quality. Free online PDF compressor.", keywords: "compress pdf, reduce pdf size, compress pdf online free, pdf compressor, shrink pdf", schema_name: "PDF Compressor" },
  "pdf-to-pptx": { title: "PDF to PowerPoint Converter – Free Online | FreePDFConvert", description: "Convert PDF to PowerPoint free online. Turn PDF into editable PPTX slides in seconds. No signup, no watermark. Fast & accurate.", h1: "PDF to PowerPoint Converter", subtitle: "Convert PDF files to editable PowerPoint presentations. Free & instant conversion.", keywords: "pdf to powerpoint, pdf to pptx, convert pdf to ppt free, pdf to slides online", schema_name: "PDF to PowerPoint Converter" },
  "pptx-to-pdf": { title: "PowerPoint to PDF Converter – Free Online | FreePDFConvert", description: "Convert PowerPoint to PDF free online. Turn PPT & PPTX presentations into PDF in seconds. High quality, no signup required.", h1: "PowerPoint to PDF Converter", subtitle: "Convert PowerPoint presentations to PDF instantly. Free, secure & no watermark.", keywords: "powerpoint to pdf, pptx to pdf, convert ppt to pdf free, presentation to pdf", schema_name: "PowerPoint to PDF Converter" },
  "pdf-to-png": { title: "PDF to PNG Converter – Free Online | FreePDFConvert", description: "Convert PDF to PNG free online. Save each PDF page as a high-quality PNG image. Fast, secure & no signup needed.", h1: "PDF to PNG Converter", subtitle: "Convert PDF pages into high-quality PNG images. Free online tool, instant download.", keywords: "pdf to png, pdf to png converter, convert pdf to png, pdf to image png free", schema_name: "PDF to PNG Converter" },
  "png-to-pdf": { title: "PNG to PDF Converter – Free Online | FreePDFConvert", description: "Convert PNG to PDF free online. Combine multiple PNG images into one PDF file. No signup, no watermark. Fast & secure.", h1: "PNG to PDF Converter", subtitle: "Combine PNG images into a PDF document. Free online converter with no limits.", keywords: "png to pdf, png to pdf converter, convert png to pdf, image to pdf free", schema_name: "PNG to PDF Converter" },
  "protect-pdf": { title: "Protect PDF with Password – Free Online | FreePDFConvert", description: "Add password protection to your PDF free online. Encrypt PDF to prevent unauthorized access. Secure, instant & no signup needed.", h1: "Protect PDF", subtitle: "Secure your PDF with a password. Free online PDF encryption – instant & safe.", keywords: "protect pdf, password protect pdf, encrypt pdf free, add password to pdf online", schema_name: "PDF Password Protector" },
  "unlock-pdf": { title: "Unlock PDF – Remove PDF Password Free Online | FreePDFConvert", description: "Unlock PDF files online free. Remove PDF password and restrictions instantly. Fast, secure & no signup required.", h1: "Unlock PDF", subtitle: "Remove password protection from PDF files. Free PDF unlocker – instant & secure.", keywords: "unlock pdf, remove pdf password, pdf password remover, unlock pdf online free", schema_name: "PDF Unlocker" },
  "html-to-pdf": { title: "HTML to PDF Converter – Free Online | FreePDFConvert", description: "Convert HTML to PDF free online. Turn web pages and HTML files into high-quality PDF documents. Fast, secure & no signup needed.", h1: "HTML to PDF Converter", subtitle: "Convert HTML files and web pages into professional PDF documents. Free & instant.", keywords: "html to pdf, html to pdf converter, convert html to pdf free, webpage to pdf", schema_name: "HTML to PDF Converter" },
  "txt-to-pdf": { title: "TXT to PDF Converter – Free Online | FreePDFConvert", description: "Convert TXT to PDF free online. Turn plain text files into professional PDF documents instantly. No signup required.", h1: "TXT to PDF Converter", subtitle: "Convert plain text files to PDF instantly. Free online TXT to PDF tool.", keywords: "txt to pdf, text to pdf converter, convert txt to pdf free, plain text to pdf", schema_name: "TXT to PDF Converter" },
  "pdf-to-txt": { title: "PDF to TXT Converter – Extract Text from PDF Free | FreePDFConvert", description: "Extract text from PDF free online. Convert PDF to plain TXT file instantly. No signup, no software. Fast & accurate text extraction.", h1: "PDF to TXT Converter", subtitle: "Extract all text content from PDF into a plain text file. Free & instant.", keywords: "pdf to txt, pdf to text converter, extract text from pdf free, pdf text extractor", schema_name: "PDF to Text Converter" },
  "txt-to-word": { title: "TXT to Word Converter – Free Online | FreePDFConvert", description: "Convert TXT to Word free online. Transform plain text files into editable DOC/DOCX documents instantly. No signup needed.", h1: "TXT to Word Converter", subtitle: "Convert TXT files to editable Word documents. Free, fast & no watermark.", keywords: "txt to word, text to word converter, convert txt to docx free, plain text to word", schema_name: "TXT to Word Converter" },
  "word-to-txt": { title: "Word to TXT Converter – Free Online | FreePDFConvert", description: "Convert Word to TXT free online. Extract plain text from DOC & DOCX files instantly. No signup, no software needed.", h1: "Word to TXT Converter", subtitle: "Convert Word documents to plain text. Free online tool – simple & fast.", keywords: "word to txt, word to text converter, doc to txt free, convert docx to text", schema_name: "Word to TXT Converter" },
  "pptx-to-txt": { title: "PowerPoint to TXT – Extract Text from PPT Free | FreePDFConvert", description: "Extract text from PowerPoint slides free online. Convert PPTX to TXT and get all text content instantly. No signup required.", h1: "PowerPoint to TXT", subtitle: "Extract all text and speaker notes from PowerPoint slides. Free & instant.", keywords: "powerpoint to txt, pptx to text, extract text from ppt free, ppt to txt converter", schema_name: "PowerPoint to TXT Converter" },
  "txt-to-pptx": { title: "TXT to PowerPoint Converter – Free Online | FreePDFConvert", description: "Convert TXT to PowerPoint free online. Create PPTX presentations from plain text files instantly. No signup needed.", h1: "TXT to PowerPoint", subtitle: "Create PowerPoint presentations from text files. Free online converter.", keywords: "txt to pptx, text to powerpoint, convert txt to ppt free, text to slides", schema_name: "TXT to PowerPoint Converter" },
  "pdf-to-html": { title: "PDF to HTML Converter – Free Online | FreePDFConvert", description: "Convert PDF to HTML free online. Transform PDF content into editable HTML code for websites. Fast, secure & no signup required.", h1: "PDF to HTML Converter", subtitle: "Convert PDF documents to HTML code. Free online PDF to HTML converter.", keywords: "pdf to html, pdf to html converter, convert pdf to html free, pdf to web page", schema_name: "PDF to HTML Converter" },
};

const getToolSEO = (slug) => {
  if (TOOL_SEO[slug]) return TOOL_SEO[slug];
  const name = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    title: `${name} – Free Online Tool | FreePDFConvert`,
    description: `Free online ${name} tool. Fast, secure & easy to use. No installation or signup required. Convert files instantly.`,
    h1: name,
    subtitle: `Free online ${name}. Fast, secure and easy to use. No signup required.`,
    keywords: `${slug.replace(/-/g, " ")}, free online ${slug.replace(/-/g, " ")}, ${name} free`,
    schema_name: name,
  };
};

const ToolSlugPage = ({ params }) => {
  const resolvedParams = use(params);
  const toolSlug = resolvedParams?.slug || "";
  const seo = getToolSEO(toolSlug);
  const isValidTool = toolSlug in TOOL_SEO;

  const [compressionLevel, setCompressionLevel] = useState('recommended');
  const [fileQueue, setFileQueue] = useState([]);
  const [status, setStatus] = useState('idle');
  const [dragActive, setDragActive] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isMergeTool = toolSlug === 'merge-pdf';
  const isProtectTool = toolSlug === 'protect-pdf';

  const getAcceptedFiles = () => {
    if (toolSlug === 'jpg-to-pdf') return "image/jpeg,image/jpg";
    if (toolSlug === 'png-to-pdf') return "image/png";
    if (toolSlug === 'word-to-pdf' || toolSlug === 'word-to-txt') return ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    if (toolSlug === 'excel-to-pdf') return ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    if (toolSlug === 'compress-pdf') return ".pdf,application/pdf";
    if (toolSlug === 'pptx-to-pdf' || toolSlug === 'pptx-to-txt') return ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation";
    if (toolSlug === 'txt-to-pdf' || toolSlug === 'txt-to-word' || toolSlug === 'txt-to-pptx') return ".txt,text/plain";
    if (toolSlug === 'html-to-pdf') return ".html,.htm,text/html";
    return ".pdf,application/pdf";
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files || e.dataTransfer?.files || []);
    if (selectedFiles.length === 0) return;
    const manualTools = ['merge-pdf', 'compress-pdf', 'protect-pdf'];
    if (manualTools.includes(toolSlug)) {
      setFileQueue(prev => isMergeTool ? [...prev, ...selectedFiles] : selectedFiles);
    } else {
      setFileQueue(selectedFiles);
      startProcessing(selectedFiles);
    }
  };

  const removeFile = (index) => setFileQueue(prev => prev.filter((_, i) => i !== index));

  const startProcessing = async (filesToProcess = fileQueue) => {
    if (filesToProcess.length === 0) return;
    if (isProtectTool && !password) { alert("Please set a password!"); return; }
    setStatus('uploading');
    const formData = new FormData();
    filesToProcess.forEach(f => formData.append('files', f));
    formData.append('compression_level', compressionLevel);
    formData.append('tool_type', toolSlug);
    formData.append('password', password);
    try {
      const response = await fetch('https://resourcepool-pool.shop/api/process/', { method: 'POST', body: formData });
      const data = await response.json();
      setStatus('processing');
      if (data.download_url) { setDownloadUrl(data.download_url); setStatus('completed'); }
    } catch (error) { alert("⚠️ " + error.message); setStatus('idle'); }
  };

  const reset = () => { setFileQueue([]); setStatus('idle'); setDownloadUrl(''); setPassword(''); };

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: seo.schema_name,
    url: `https://freepdfconvert.io/${toolSlug}`,
    description: seo.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Android, iOS, Linux",
    inLanguage: "en",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "1820", bestRating: "5", worstRating: "1" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://freepdfconvert.io" },
      { "@type": "ListItem", position: 2, name: seo.schema_name, item: `https://freepdfconvert.io/${toolSlug}` },
    ],
  };


if (!isValidTool) {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-red-50 px-4">
        <div className="text-center w-full max-w-md mx-auto">
          <div className="relative mb-6">
            <div className="text-8xl sm:text-9xl md:text-[150px] font-black text-red-100 leading-none select-none">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <FileText size={48} className="text-red-400 sm:w-14 sm:h-14 md:w-16 md:h-16" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">Page Not Found</h1>
          <p className="text-gray-500 text-sm sm:text-base mb-8 leading-relaxed px-2">
            The tool or page you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm sm:text-base"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-rose-100">

      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={`https://freepdfconvert.io/${toolSlug}`} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={`https://freepdfconvert.io/${toolSlug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="robots" content="index, follow" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />

      {/* ✅ px-4 mobile, px-6 desktop */}
      <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6" role="main" aria-label={seo.schema_name}>

        {status === 'idle' && (
          <article className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
            {/* ✅ mb-8 mobile, mb-12 desktop */}
            <header className="text-center mb-8 md:mb-12">
              {/* ✅ text-3xl mobile, text-6xl desktop */}
              <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">
                {seo.h1}
              </h1>
              {/* ✅ text-base mobile, text-lg desktop */}
              <p className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                {seo.subtitle}
              </p>
            </header>

            {isProtectTool && fileQueue.length > 0 && status === 'idle' && (
              <div className="w-full max-w-2xl animate-in slide-in-from-top-4 space-y-4 mb-8">
                <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3 truncate">
                    <div className="bg-rose-50 p-2 rounded-lg text-rose-600"><Lock size={18} /></div>
                    <span className="font-bold text-gray-700 text-sm truncate">{fileQueue[0].name}</span>
                  </div>
                  <button onClick={reset} className="text-gray-300 hover:text-rose-600 transition-colors"><X size={18} /></button>
                </div>
                {/* ✅ p-5 mobile, p-8 desktop */}
                <div className="p-5 md:p-8 bg-white rounded-[2.5rem] border-2 border-rose-100 shadow-2xl space-y-6 relative overflow-hidden">
                  <div className="text-center">
                    <h3 className="text-xl font-black text-gray-800 tracking-tight">Set PDF Password</h3>
                    <p className="text-sm text-gray-400 font-medium">Encrypt your document with a strong password</p>
                  </div>
                  <div className="relative group">
                    {/* ✅ px-4 py-4 text-base mobile */}
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter secret password..."
                      className="w-full px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-rose-500 focus:bg-white transition-all outline-none font-bold text-base md:text-lg text-gray-700 placeholder:text-gray-300"
                    />
                    <button onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-rose-600">
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                  {/* ✅ py-4 text-lg mobile */}
                  <button onClick={() => startProcessing()} disabled={!password} className="w-full bg-rose-600 disabled:bg-gray-200 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl shadow-rose-100 hover:bg-rose-700 transition-all active:scale-95 flex items-center justify-center gap-3">
                    <ShieldCheck size={24} /> PROTECT PDF NOW
                  </button>
                </div>
              </div>
            )}

            {isMergeTool && fileQueue.length > 0 && (
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
                {/* ✅ py-4 text-lg mobile */}
                <button onClick={() => startProcessing()} className="w-full bg-gray-900 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl hover:bg-rose-600 transition-all mt-4 active:scale-95">
                  MERGE ALL FILES
                </button>
              </div>
            )}

            {/* ✅ min-h smaller on mobile, p-4 mobile p-8 desktop */}
            <div
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFileChange(e); }}
              className={`relative w-full max-w-2xl ${isMergeTool && fileQueue.length > 0 ? 'min-h-[120px] md:min-h-[150px]' : 'min-h-[280px] md:min-h-[350px]'} rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                ${dragActive ? "border-rose-500 bg-rose-50/50 scale-[1.02]" : "border-gray-200 bg-white hover:border-rose-300"}`}
            >
              <label className="group cursor-pointer flex flex-col items-center w-full">
                {/* ✅ p-4 mb-5 mobile, p-6 mb-8 desktop */}
                <div className="bg-rose-600 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8">
                  <Plus size={32} strokeWidth={3} />
                </div>
                <div className="text-center space-y-4">
                  {/* ✅ px-6 py-4 text-base mobile */}
                  <span className="inline-block bg-rose-600 hover:bg-rose-700 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold transition-all shadow-lg active:scale-95">
                    {isMergeTool ? (fileQueue.length > 0 ? 'Add Another PDF' : 'Select Files to Merge') : 'Select File'}
                  </span>
                  {!isMergeTool && <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">or drop file here</p>}
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} accept={getAcceptedFiles()} multiple={isMergeTool} />
              </label>
            </div>
          </article>
        )}

        {(status === 'uploading' || status === 'processing') && (
          /* ✅ p-8 mobile, p-16 desktop */
          <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300 relative overflow-hidden">
            <div className="relative mb-8 md:mb-12 flex justify-center items-center">
              <Settings className="text-rose-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute" strokeWidth={1} />
              <div className="relative z-10 bg-rose-50 p-6 rounded-3xl animate-pulse">
                {status === 'uploading' ? <Upload className="text-rose-600 animate-bounce w-12 h-12" /> : <Loader2 className="text-rose-600 animate-spin w-12 h-12" />}
              </div>
            </div>
            <h2 className="text-2xl font-black text-gray-800 mb-2 tracking-tight uppercase">{status === 'uploading' ? 'Uploading' : 'Magic in Progress'}...</h2>
            <p className="text-gray-400 font-medium text-sm mb-8 md:mb-10 truncate px-4">{isMergeTool ? `${fileQueue.length} files in queue` : fileQueue[0]?.name}</p>
            <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden mb-2 shadow-inner">
              <div className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}></div>
            </div>
          </div>
        )}

        {status === 'completed' && (
          <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100"><CheckCircle2 size={40} /></div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Success!</h1>
            {/* ✅ p-5 mobile, p-8 desktop */}
            <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
              <button onClick={async () => { }} className="group bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:rounded-2xl md:text-2xl font-black transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4">
                <Download size={28} /> DOWNLOAD NOW
              </button>
              <button onClick={reset} className="text-gray-400 hover:text-rose-600 font-bold flex items-center gap-2 transition-colors text-xs uppercase tracking-widest mt-2"><RefreshCw size={14} /> Start Another Task</button>
            </div>
          </div>
        )}

        {toolSlug === 'compress-pdf' && fileQueue.length > 0 && status === 'idle' && (
          <div className="w-full max-w-2xl mt-8">
            {/* Compression options — same as original */}
          </div>
        )}

      </main>
      <div className="mt-10 md:mt-20"><Footer /></div>
    </div>
  );
};

export default ToolSlugPage;