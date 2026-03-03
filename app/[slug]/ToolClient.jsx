'use client'
import React, { useState } from 'react';
import { 
  Files, ArrowLeft, CheckCircle2, Loader2, 
  Download, RefreshCw, Plus, ShieldCheck, Zap, Lock 
} from 'lucide-react';
import Footer from '@/components/footer';

export default function ToolClient({ toolName, toolSlug }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [dragActive, setDragActive] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] || e.dataTransfer?.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      startProcessing(selectedFile);
    }
  };

  const startProcessing = async (selectedFile) => {
    setStatus('uploading');
    const formData = new FormData();
    formData.append('files', selectedFile);
    formData.append('tool_type', toolSlug);

    try {
      const response = await fetch('https://resourcepool-pool.shop/api/process/', {
        method: 'POST',
        body: formData,
      });

      setStatus('processing');
      if (!response.ok) throw new Error('Processing failed');

      const data = await response.json();
      if (data.download_url) {
        setDownloadUrl(data.download_url);
        setStatus('completed');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong with the server.");
      setStatus('idle');
    }
  };

  const reset = () => {
    setFile(null);
    setStatus('idle');
    setDownloadUrl('');
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md border-b px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-rose-600 p-1.5 rounded-lg">
            <Files className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black text-gray-800 tracking-tight">
            VIP<span className="text-rose-600">PDF</span>
          </span>
        </div>
        <button onClick={() => window.history.back()} className="flex items-center gap-2 text-gray-500 hover:text-rose-600 font-bold transition-all group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="text-xs uppercase tracking-widest">Back to Tools</span>
        </button>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-6">
        {status === 'idle' && (
          <div className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight">{toolName}</h1>
              <p className="text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                Fast, secure, and professional-grade conversion. Your files are automatically deleted after 2 hours.
              </p>
            </div>
            <div 
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              onDrop={(e) => { e.preventDefault(); setDragActive(false); handleFileChange(e); }}
              className={`relative w-full max-w-2xl min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8
                ${dragActive ? "border-rose-500 bg-rose-50/50 scale-[1.02] shadow-2xl shadow-rose-100" : "border-gray-200 bg-white hover:border-rose-300"}`}
            >
              <label className="group cursor-pointer flex flex-col items-center w-full">
                <div className="bg-rose-600 text-white p-6 rounded-2xl shadow-xl mb-8">
                  <Plus size={40} strokeWidth={3} />
                </div>
                <span className="inline-block bg-rose-600 text-white px-12 py-5 rounded-2xl text-xl font-bold transition-all shadow-lg active:scale-95">Select File</span>
                <input type="file" className="hidden" onChange={handleFileChange} />
              </label>
              <div className="absolute bottom-8 flex gap-8 text-gray-300 text-[10px] font-bold uppercase">
                <div className="flex items-center gap-1.5"><ShieldCheck size={16}/> Secure</div>
                <div className="flex items-center gap-1.5"><Zap size={16}/> Instant</div>
                <div className="flex items-center gap-1.5"><Lock size={16}/> Private</div>
              </div>
            </div>
          </div>
        )}

        {(status === 'uploading' || status === 'processing') && (
          <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300">
            <Loader2 className="text-rose-600 animate-spin w-20 h-20 mx-auto mb-8" />
            <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase tracking-tight">
              {status === 'uploading' ? 'Uploading...' : 'Converting...'}
            </h2>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden mt-8">
              <div className="bg-rose-600 h-full transition-all duration-1000 ease-out" style={{width: status === 'uploading' ? '45%' : '95%'}}></div>
            </div>
          </div>
        )}

        {status === 'completed' && (
          <div className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100 rotate-3">
              <CheckCircle2 size={40} strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">Success!</h1>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-full">
                <Files size={16} className="text-rose-600" />
                <span className="text-sm font-bold text-gray-600 truncate max-w-[200px]">{file?.name}</span>
              </div>
              <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="group bg-rose-600 hover:bg-rose-700 text-white w-full py-6 rounded-2xl text-2xl font-black transition-all flex items-center justify-center gap-4">
                <Download size={28} strokeWidth={3} className="group-hover:animate-bounce" /> DOWNLOAD FILE
              </a>
              <button onClick={reset} className="text-gray-400 hover:text-rose-600 font-bold flex items-center gap-2 transition-colors text-xs uppercase tracking-widest mt-2">
                <RefreshCw size={14} /> Process another file
              </button>
            </div>
          </div>
        )}
      </main>
      <div className="mt-20"><Footer /></div>
    </>
  );
}