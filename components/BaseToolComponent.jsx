'use client';

// ============================================================
// components/tools/BaseToolLogic.jsx
// ✅ Sirf Logic yahan — States, API calls, Handlers
// ✅ UI har tool ka apna hoga
// Usage:
//   <BaseToolLogic config={config}>
//     {(props) => <YourToolUI {...props} />}
//   </BaseToolLogic>
// ============================================================

import { useState } from 'react';

const BaseToolLogic = ({ config, children }) => {
  const { slug, acceptedFiles, toolType } = config;

  const isMergeTool    = toolType === 'merge';
  const isProtectTool  = toolType === 'protect';
  const isUnlockTool   = toolType === 'unlock';
  const isCompressTool = toolType === 'compress';
  const isImageTool    = toolType === 'image';

  const [compressionLevel, setCompressionLevel] = useState('recommended');
  const [fileQueue, setFileQueue]       = useState([]);
  const [status, setStatus]             = useState('idle');
  const [dragActive, setDragActive]     = useState(false);
  const [downloadUrl, setDownloadUrl]   = useState('');
  const [password, setPassword]         = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLocked, setIsLocked]         = useState(false);
  const [lockChecked, setLockChecked]   = useState(false);

  // ── File Change ──────────────────────────────────────────
  const handleFileChange = async (e) => {
    const selectedFiles = Array.from(e.target.files || e.dataTransfer?.files || []);
    if (selectedFiles.length === 0) return;

    const shouldCheckLock =
      !isImageTool &&
      toolType !== 'protect' &&
      toolType !== 'unlock' &&
      selectedFiles[0]?.type === 'application/pdf';

    if (shouldCheckLock) {
      const formData = new FormData();
      formData.append('file', selectedFiles[0]);
      try {
        const res = await fetch('https://resourcepool-pool.shop/api/check-pdf/', {
          method: 'POST', body: formData,
        });
        const data = await res.json();
        if (data.is_locked) {
          setIsLocked(true); setLockChecked(true);
          setFileQueue(selectedFiles); return;
        }
      } catch (err) { console.error('Lock check failed', err); }
    }

    setIsLocked(false); setLockChecked(false);

    const manualTools = ['merge', 'compress', 'protect'];
    if (manualTools.includes(toolType)) {
      setFileQueue(prev => isMergeTool ? [...prev, ...selectedFiles] : selectedFiles);
    } else {
      setFileQueue(selectedFiles);
      startProcessing(selectedFiles);
    }
  };

  // ── Drag & Drop ──────────────────────────────────────────
  const handleDragOver  = (e) => { e.preventDefault(); setDragActive(true); };
  const handleDragLeave = ()  => setDragActive(false);
  const handleDrop      = (e) => {
    e.preventDefault(); setDragActive(false); handleFileChange(e);
  };

  // ── Remove File ──────────────────────────────────────────
  const removeFile = (index) =>
    setFileQueue(prev => prev.filter((_, i) => i !== index));

  // ── Process ──────────────────────────────────────────────
  const startProcessing = async (filesToProcess = fileQueue) => {
    if (filesToProcess.length === 0) return;
    if (isProtectTool && !password) { alert('Please set a password!'); return; }

    setStatus('uploading'); setPasswordError(false);

    const formData = new FormData();
    filesToProcess.forEach(f => formData.append('files', f));
    formData.append('compression_level', compressionLevel);
    formData.append('tool_type', slug);
    formData.append('password', password);

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 60000);
      const response = await fetch('https://resourcepool-pool.shop/api/process/', {
        method: 'POST', body: formData, signal: controller.signal,
      });
      clearTimeout(timeout);
      const data = await response.json();

      if (data.error === 'PASSWORD_REQUIRED') {
        setStatus('idle'); setPasswordError(true); return;
      }
      if (data.download_url) {
        setDownloadUrl(data.download_url); setStatus('completed');
      } else {
        setStatus('idle'); alert('⚠️ Conversion failed. Please try again.');
      }
    } catch (error) {
      alert('⚠️ ' + error.message); setStatus('idle');
    }
  };

  // ── Reset ────────────────────────────────────────────────
  const reset = () => {
    setFileQueue([]); setStatus('idle'); setDownloadUrl('');
    setPassword(''); setIsLocked(false); setLockChecked(false);
    setPasswordError(false);
  };

  // ── Download ─────────────────────────────────────────────
  const handleDownload = async () => {
    if (!downloadUrl) return;
    try {
      const response = await fetch(downloadUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = downloadUrl.split('/').pop() || 'download.pdf';
      document.body.appendChild(a); a.click();
      window.URL.revokeObjectURL(url); document.body.removeChild(a);
    } catch { window.location.href = downloadUrl; }
  };

  // ── Render children with all props ───────────────────────
  return children({
    // state
    status, dragActive, fileQueue, downloadUrl,
    password, showPassword, compressionLevel,
    passwordError, isLocked, lockChecked,
    // flags
    isMergeTool, isProtectTool, isUnlockTool, isCompressTool, isImageTool,
    // config
    acceptedFiles, slug,
    // setters
    setPassword, setShowPassword, setCompressionLevel,
    // handlers
    handleFileChange, handleDragOver, handleDragLeave, handleDrop,
    removeFile, startProcessing, reset, handleDownload,
  });
};

export default BaseToolLogic;