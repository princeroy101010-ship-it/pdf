'use client';
import React from 'react';
import Head from 'next/head';
import { Download, CheckCircle2, Upload, Loader2, Plus, Lock, Eye, EyeOff, X, Settings } from 'lucide-react';
import Header from '../header';
import Footer from '../footer';
import BaseToolLogic from '../BaseToolComponent';
import { TOOLS_CONFIG } from '@/lib/toolsConfig';

const config = TOOLS_CONFIG['unlock-pdf'];

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://freepdfconvert.io/unlock-pdf",
      "url": "https://freepdfconvert.io/unlock-pdf",
      "name": "Unlock PDF – Remove PDF Password Free Online | FreePDFConvert",
      "description": "Unlock password-protected PDF files online for free. Remove PDF password instantly — no software, no sign-up. Fast, secure & 100% free PDF unlocker.",
      "isPartOf": { "@id": "https://freepdfconvert.io/#website" },
      "about": { "@id": "https://freepdfconvert.io/unlock-pdf/#software" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://freepdfconvert.io/" },
          { "@type": "ListItem", "position": 2, "name": "Unlock PDF", "item": "https://freepdfconvert.io/unlock-pdf" }
        ]
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://freepdfconvert.io/unlock-pdf/#software",
      "name": "Unlock PDF – PDF Password Remover",
      "url": "https://freepdfconvert.io/unlock-pdf",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "All – Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Remove PDF password free",
        "Unlock PDF online instantly",
        "No registration required",
        "Auto-unlock without password",
        "Secure file processing",
        "Works on all devices"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "3241",
        "bestRating": "5",
        "worstRating": "1"
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I unlock a password-protected PDF for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Upload your locked PDF on FreePDFConvert.io, enter the password if you know it (or leave it blank for auto-unlock), click Unlock, and download the unlocked PDF — completely free with no sign-up."
          }
        },
        {
          "@type": "Question",
          "name": "Can I remove a PDF password without knowing it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! FreePDFConvert can attempt to auto-unlock owner-restricted PDFs (those with print/copy/edit restrictions) without a password. Simply upload the file and click Unlock."
          }
        },
        {
          "@type": "Question",
          "name": "Is it safe to upload my PDF to remove the password?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All file uploads use HTTPS encryption. Your PDF is permanently deleted from our servers immediately after processing. We never store, read, or share your documents."
          }
        },
        {
          "@type": "Question",
          "name": "What types of PDF protection can FreePDFConvert remove?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FreePDFConvert can remove owner-level restrictions such as print, copy, and edit locks. For user-password-protected PDFs, you will need to enter the correct password to unlock them."
          }
        },
        {
          "@type": "Question",
          "name": "Does the unlocked PDF have a watermark?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The unlocked PDF is completely clean with no watermarks, logos, or branding added by FreePDFConvert."
          }
        },
        {
          "@type": "Question",
          "name": "What devices work with the PDF unlocker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our PDF password remover works on all devices — Windows, Mac, Linux, iPhone, iPad, and Android — in any modern web browser. No app or software installation required."
          }
        }
      ]
    },
    {
      "@type": "HowTo",
      "name": "How to Unlock a Password-Protected PDF Online",
      "description": "Remove PDF password protection in 3 simple steps using FreePDFConvert — free, no sign-up.",
      "step": [
        {
          "@type": "HowToStep",
          "position": "1",
          "name": "Upload Your Locked PDF",
          "text": "Click 'Select Locked PDF' or drag and drop your password-protected PDF into the upload area."
        },
        {
          "@type": "HowToStep",
          "position": "2",
          "name": "Enter Password or Auto-Unlock",
          "text": "Enter the PDF password if you know it, or leave the field blank to let our tool attempt automatic unlocking."
        },
        {
          "@type": "HowToStep",
          "position": "3",
          "name": "Download Unlocked PDF",
          "text": "Click Unlock PDF Now, then download your unlocked PDF file. No watermark. Your file is deleted immediately after."
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://freepdfconvert.io/#website",
      "url": "https://freepdfconvert.io/",
      "name": "FreePDFConvert",
      "description": "Free online PDF conversion and utility tools. Convert, merge, split, unlock and protect PDF files.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://freepdfconvert.io/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

const UnlockPdf = () => (
  <BaseToolLogic config={config}>
    {({ status, dragActive, fileQueue, acceptedFiles, password, showPassword,
        setPassword, setShowPassword,
        handleFileChange, handleDragOver, handleDragLeave, handleDrop,
        startProcessing, reset, handleDownload }) => {

      return (
        <>
          {/* ─── HEAD / SEO ─────────────────────────────────────────────── */}
          <Head>
            {/* Primary Meta */}
            <title>Unlock PDF – Remove PDF Password Free Online | FreePDFConvert</title>
            <meta name="description" content="Unlock password-protected PDF files online free — no email, no install. Remove PDF password instantly. Auto-unlock without password. Fast, secure & 100% free." />
            <meta name="keywords" content="unlock pdf, remove pdf password, pdf password remover, unlock password protected pdf, pdf unlocker, remove password from pdf, unlock pdf online free, pdf password unlock, open locked pdf, decrypt pdf online, pdf unlock tool, remove pdf restrictions" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="author" content="FreePDFConvert" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="canonical" href="https://freepdfconvert.io/unlock-pdf" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="FreePDFConvert" />
            <meta property="og:title" content="Unlock PDF – Remove PDF Password Free Online | FreePDFConvert" />
            <meta property="og:description" content="Unlock password-protected PDF files online free. Remove PDF password instantly — no sign-up, no watermark. Auto-unlock without password." />
            <meta property="og:url" content="https://freepdfconvert.io/unlock-pdf" />
            <meta property="og:image" content="https://freepdfconvert.io/og-unlock-pdf.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="FreePDFConvert – Free PDF Password Remover & Unlocker" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@freepdfconvert" />
            <meta name="twitter:title" content="Unlock PDF – Remove PDF Password Free Online | FreePDFConvert" />
            <meta name="twitter:description" content="Remove password from PDF online free. No sign-up, no watermark. Auto-unlock without password. Instant download." />
            <meta name="twitter:image" content="https://freepdfconvert.io/og-unlock-pdf.png" />

            {/* JSON-LD Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
          </Head>

          {/* ─── PAGE ───────────────────────────────────────────────────── */}
          <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans">
            <Header />

            <main
              id="main-content"
              className="flex-1 flex flex-col items-center justify-start pt-6 md:pt-8 px-4 md:px-6"
              role="main"
              aria-label="Unlock PDF Password Remover Tool"
            >

              {/* ── IDLE STATE ─────────────────────────────────────────── */}
              {status === 'idle' && (
                <article
                  className="w-full max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-top-4 duration-700"
                  itemScope
                  itemType="https://schema.org/SoftwareApplication"
                >
                  <meta itemProp="name" content="Unlock PDF – PDF Password Remover" />
                  <meta itemProp="applicationCategory" content="UtilitiesApplication" />
                  <meta itemProp="operatingSystem" content="Web Browser" />

                  {/* Hero Header */}
                  <header className="text-center mb-8 md:mb-12">
                    <h1
                      className="text-3xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
                      itemProp="name"
                    >
                      Unlock PDF Online Free
                    </h1>
                    <p
                      className="text-base md:text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed"
                      itemProp="description"
                    >
                      Remove password from any PDF instantly — free, no sign-up required. Auto-unlock without password. Download your unlocked PDF in seconds.
                    </p>
                  </header>

                  {/* Password Input State — file selected */}
                  {fileQueue.length > 0 && (
                    <div className="w-full max-w-2xl animate-in slide-in-from-top-4 space-y-4 mb-8">
                      <div className="bg-white border border-gray-100 p-4 rounded-2xl flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-3 truncate">
                          <div className="bg-amber-50 p-2 rounded-lg text-amber-600" aria-hidden="true">
                            <Lock size={18} />
                          </div>
                          <span className="font-bold text-gray-700 text-sm truncate">{fileQueue[0].name}</span>
                        </div>
                        <button
                          onClick={reset}
                          className="text-gray-300 hover:text-rose-600 transition-colors"
                          aria-label="Remove selected file"
                        >
                          <X size={18} aria-hidden="true" />
                        </button>
                      </div>
                      <div className="p-5 md:p-8 bg-white rounded-[2.5rem] border-2 border-amber-100 shadow-2xl space-y-6">
                        <div className="text-center">
                          <h2 className="text-xl font-black text-gray-800 tracking-tight">Enter PDF Password</h2>
                          <p className="text-sm text-gray-400 font-medium">Leave empty — we'll try to unlock automatically</p>
                        </div>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password (if known)..."
                            className="w-full px-4 md:px-6 py-4 md:py-5 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-amber-500 focus:bg-white transition-all outline-none font-bold text-base text-gray-700 placeholder:text-gray-300"
                            aria-label="PDF password (optional)"
                          />
                          <button
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-amber-600"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? <EyeOff size={22} aria-hidden="true" /> : <Eye size={22} aria-hidden="true" />}
                          </button>
                        </div>
                        <button
                          onClick={() => startProcessing()}
                          className="w-full bg-amber-500 hover:bg-amber-600 text-white py-4 md:py-5 rounded-2xl text-lg md:text-xl font-black shadow-xl shadow-amber-100 transition-all active:scale-95 flex items-center justify-center gap-3"
                          aria-label="Unlock this PDF now"
                        >
                          <Lock size={24} aria-hidden="true" /> UNLOCK PDF NOW
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Drop Zone — no file selected */}
                  {fileQueue.length === 0 && (
                    <section
                      aria-label="Upload your locked PDF file"
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative w-full max-w-2xl min-h-[280px] md:min-h-[350px] rounded-[2.5rem] border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-4 md:p-8
                        ${dragActive ? 'border-rose-500 bg-amber-50 scale-[1.02]' : 'border-gray-200 bg-white hover:border-rose-400'}`}
                      role="region"
                    >
                      <label
                        htmlFor="unlock-pdf-upload-input"
                        className="group cursor-pointer flex flex-col items-center w-full"
                        aria-label="Select a password-protected PDF to unlock"
                      >
                        <div
                          className="bg-rose-500 text-white p-4 md:p-6 rounded-2xl shadow-xl shadow-rose-200 group-hover:scale-110 group-hover:rotate-90 transition-all duration-500 mb-5 md:mb-8"
                          aria-hidden="true"
                        >
                          <Plus size={32} strokeWidth={3} />
                        </div>
                        <div className="text-center space-y-4">
                          <span className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 md:px-12 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold shadow-lg active:scale-95">
                            Select Locked PDF
                          </span>
                          <p className="text-gray-400 font-semibold text-sm uppercase tracking-widest block">
                            or drop file here
                          </p>
                        </div>
                        <input
                          id="unlock-pdf-upload-input"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                          accept={acceptedFiles}
                          aria-label="Upload a password-protected PDF file"
                        />
                      </label>
                    </section>
                  )}

                  {/* ── TRUST BADGES ──────────────────────────────────── */}
                  <section
                    aria-label="Key features of PDF unlocker"
                    className="mt-8 flex flex-wrap justify-center gap-3 md:gap-5 text-sm text-gray-500 font-semibold"
                  >
                    {[
                      '🔓 Auto-Unlock Without Password',
                      '🔒 100% Secure & Private',
                      '⚡ Instant Unlocking',
                      '🆓 Completely Free',
                      '🚫 No Watermark',
                      '🌐 No Install Required'
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </section>

                  {/* ── HOW IT WORKS ──────────────────────────────────── */}
                  <section
                    aria-labelledby="how-it-works-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="how-it-works-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      How to Unlock a PDF — 3 Easy Steps
                    </h2>
                    <ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
                      {[
                        {
                          step: '1',
                          title: 'Upload Locked PDF',
                          desc: 'Click "Select Locked PDF" or drag and drop your password-protected PDF into the upload area.',
                          icon: '📤'
                        },
                        {
                          step: '2',
                          title: 'Enter Password or Auto-Unlock',
                          desc: 'Enter the password if you know it — or leave blank and our tool will attempt to auto-unlock restrictions.',
                          icon: '🔑'
                        },
                        {
                          step: '3',
                          title: 'Download Unlocked PDF',
                          desc: 'Click Unlock PDF Now and download your clean, unrestricted PDF instantly. No watermark added.',
                          icon: '📥'
                        }
                      ].map(({ step, title, desc, icon }) => (
                        <li
                          key={step}
                          className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center"
                        >
                          <div className="text-4xl mb-3" aria-hidden="true">{icon}</div>
                          <h3 className="font-black text-gray-900 text-lg mb-2">
                            Step {step}: {title}
                          </h3>
                          <p className="text-gray-500 text-sm">{desc}</p>
                        </li>
                      ))}
                    </ol>
                  </section>

                  {/* ── WHY USE FREEPDFCONVERT ─────────────────────────── */}
                  <section
                    aria-labelledby="why-heading"
                    className="mt-16 w-full max-w-3xl"
                  >
                    <h2
                      id="why-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      Why Use FreePDFConvert to Unlock PDF?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {[
                        {
                          title: 'Auto-Unlock Without Password',
                          desc: 'Our tool can automatically remove owner-level restrictions (print, copy, edit locks) without needing any password at all.'
                        },
                        {
                          title: 'No Sign-Up Required',
                          desc: 'Unlock PDF online instantly without creating an account or providing any email address — just upload and unlock.'
                        },
                        {
                          title: 'No Watermark on Output',
                          desc: 'Your downloaded unlocked PDF is completely clean. No logos, no branding, no watermarks added to your document.'
                        },
                        {
                          title: 'Works on All Devices',
                          desc: 'Use our PDF unlocker on Windows, Mac, iPhone, or Android — any browser, any device, no app needed.'
                        },
                        {
                          title: 'Files Deleted Immediately',
                          desc: 'Your uploaded PDF is permanently deleted from our servers right after processing. 100% private and confidential.'
                        },
                        {
                          title: 'Completely Free Forever',
                          desc: 'No hidden charges, no premium plan. Unlock unlimited password-protected PDFs for free, always.'
                        }
                      ].map(({ title, desc }) => (
                        <div
                          key={title}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 items-start"
                        >
                          <span className="text-2xl mt-0.5" aria-hidden="true">✅</span>
                          <div>
                            <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* ── FAQ ───────────────────────────────────────────── */}
                  <section
                    aria-labelledby="faq-heading"
                    className="mt-16 w-full max-w-3xl mb-8"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                  >
                    <h2
                      id="faq-heading"
                      className="text-2xl md:text-3xl font-black text-gray-900 text-center mb-8"
                    >
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                      {[
                        {
                          q: 'How do I unlock a password-protected PDF for free?',
                          a: 'Upload your locked PDF on FreePDFConvert.io, enter the password if you know it (or leave it blank for auto-unlock), click Unlock PDF Now, and download your unlocked PDF — completely free with no sign-up.'
                        },
                        {
                          q: 'Can I remove a PDF password without knowing it?',
                          a: 'Yes! FreePDFConvert can automatically remove owner-level restrictions (print, copy, edit locks) without a password. Simply upload the file and click Unlock. Note: user-password protected PDFs require the correct password.'
                        },
                        {
                          q: 'What types of PDF protection can be removed?',
                          a: 'FreePDFConvert can remove owner-level restrictions such as print, copy, and edit locks without a password. For user-password-protected PDFs (those that require a password to open), you will need to enter the correct password.'
                        },
                        {
                          q: 'Is it safe to upload my PDF to remove the password?',
                          a: 'Yes. All file transfers use HTTPS encryption. Your PDF is permanently deleted from our servers immediately after processing. We never store, read, or share your documents.'
                        },
                        {
                          q: 'Will the unlocked PDF have a watermark?',
                          a: 'No. FreePDFConvert generates completely clean unlocked PDF files with no watermarks, logos, or branding added anywhere in your document.'
                        },
                        {
                          q: 'What devices work with the PDF unlocker?',
                          a: 'Our PDF password remover works on all devices — Windows, Mac, Linux, iPhone, iPad, and Android — in any modern web browser. No app or software installation required.'
                        }
                      ].map(({ q, a }) => (
                        <div
                          key={q}
                          className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                          itemScope
                          itemType="https://schema.org/Question"
                          itemProp="mainEntity"
                        >
                          <h3
                            className="font-bold text-gray-900 mb-2"
                            itemProp="name"
                          >
                            {q}
                          </h3>
                          <div
                            itemScope
                            itemType="https://schema.org/Answer"
                            itemProp="acceptedAnswer"
                          >
                            <p className="text-gray-500 text-sm leading-relaxed" itemProp="text">{a}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* ── SEO PARAGRAPH CONTENT ─────────────────────────── */}
                  <section
                    aria-labelledby="seo-content-heading"
                    className="mt-4 w-full max-w-3xl mb-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                  >
                    <h2
                      id="seo-content-heading"
                      className="text-xl font-black text-gray-900 mb-4"
                    >
                      Remove PDF Password Online — Fast, Free & Secure
                    </h2>
                    <div className="text-gray-500 text-sm space-y-3 leading-relaxed">
                      <p>
                        <strong className="text-gray-700">FreePDFConvert</strong> is the easiest way to <strong className="text-gray-700">unlock PDF files online</strong>, completely free and without registration. Whether your PDF is locked with a user password or has owner restrictions preventing printing, copying, or editing, our <strong className="text-gray-700">PDF password remover</strong> handles it instantly in your browser.
                      </p>
                      <p>
                        Our <strong className="text-gray-700">free PDF unlocker</strong> supports auto-unlock for owner-restricted PDFs — no password needed. For user-password-protected files, simply enter the password and we'll remove it permanently. The output PDF is clean, fully unrestricted, and completely watermark-free.
                      </p>
                      <p>
                        Need to <strong className="text-gray-700">remove a PDF password</strong> quickly and securely? Upload your locked PDF, click Unlock, and download your <strong className="text-gray-700">unlocked PDF</strong> in seconds. Your file is deleted from our servers immediately after processing, making FreePDFConvert the most private <strong className="text-gray-700">online PDF password remover</strong> available.
                      </p>
                    </div>
                  </section>

                </article>
              )}

              {/* ── UPLOADING / PROCESSING STATE ───────────────────────── */}
              {(status === 'uploading' || status === 'processing') && (
                <div
                  className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-gray-50 text-center w-full max-w-lg animate-in zoom-in-95 duration-300"
                  role="status"
                  aria-live="polite"
                  aria-label={status === 'uploading' ? 'Uploading your PDF file' : 'Removing PDF password'}
                >
                  <div className="relative mb-8 md:mb-12 flex justify-center items-center">
                    <Settings
                      className="text-amber-100 animate-[spin_8s_linear_infinite] w-32 h-32 absolute"
                      strokeWidth={1}
                      aria-hidden="true"
                    />
                    <div className="relative z-10 bg-amber-50 p-6 rounded-3xl animate-pulse">
                      <Lock className="text-rose-500 w-12 h-12 animate-pulse" aria-hidden="true" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-black text-gray-800 mb-2 uppercase">
                    {status === 'uploading' ? 'Uploading...' : 'Unlocking...'}
                  </h2>
                  <p className="text-gray-400 font-medium text-sm mb-8 truncate px-4" aria-label={`File: ${fileQueue[0]?.name}`}>
                    {fileQueue[0]?.name}
                  </p>
                  <div
                    className="w-full bg-gray-100 h-3 rounded-full overflow-hidden shadow-inner"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={status === 'processing' ? 92 : 45}
                    aria-label="Unlocking progress"
                  >
                    <div
                      className={`bg-rose-600 h-full transition-all duration-700 ease-out ${status === 'processing' ? 'w-[92%]' : 'w-[45%]'}`}
                    />
                  </div>
                </div>
              )}

              {/* ── COMPLETED STATE ─────────────────────────────────────── */}
              {status === 'completed' && (
                <div
                  className="text-center w-full max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-500"
                  role="status"
                  aria-live="polite"
                  aria-label="PDF unlocked successfully. Your file is ready to download."
                >
                  <div
                    className="bg-emerald-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl rotate-3 shadow-emerald-100"
                    aria-hidden="true"
                  >
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tight">
                    PDF Unlocked!
                  </h2>
                  <p className="text-gray-500 mb-6">Password removed successfully. Your PDF is ready to download.</p>
                  <div className="bg-white p-5 md:p-8 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col items-center gap-6">
                    <button
                      onClick={handleDownload}
                      className="bg-rose-600 hover:bg-rose-700 text-white w-full py-6 text-xl md:text-2xl font-black rounded-2xl transition-all shadow-xl shadow-rose-200 hover:-translate-y-1 flex items-center justify-center gap-4"
                      aria-label="Download your unlocked PDF file"
                    >
                      <Download size={28} aria-hidden="true" /> DOWNLOAD UNLOCKED PDF
                    </button>
                    <button
                      onClick={reset}
                      className="text-gray-400 hover:text-gray-600 font-semibold text-sm transition-colors"
                      aria-label="Unlock another PDF file"
                    >
                      Unlock another file
                    </button>
                  </div>
                </div>
              )}

            </main>

            <div className="mt-10 md:mt-20">
              <Footer />
            </div>
          </div>
        </>
      );
    }}
  </BaseToolLogic>
);

export default UnlockPdf;