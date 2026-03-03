// // ============================================================
// // lib/toolsConfig.js
// // Saare 23 tools ki config ek jagah — SEO, acceptedFiles, toolType
// // toolType values: standard | merge | compress | protect | unlock | image
// // ============================================================

// export const TOOLS_CONFIG = {
//   "pdf-to-word": {
//     slug: "pdf-to-word",
//     seo: { title: "PDF to Word Converter – Free Online | FreePDFConvert", description: "Convert PDF to Word free online. Fast, accurate PDF to DOC/DOCX conversion. No signup needed. Download editable Word file in seconds.", h1: "PDF to Word Converter", subtitle: "Convert PDF to editable Word documents free. Fast, accurate and 100% secure.", keywords: "pdf to word, pdf to word converter, convert pdf to word, pdf to doc, pdf to docx free", schema_name: "PDF to Word Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "word-to-pdf": {
//     slug: "word-to-pdf",
//     seo: { title: "Word to PDF Converter – Free Online | FreePDFConvert", description: "Convert Word to PDF free online. Keep all formatting intact. Convert DOC & DOCX to PDF in seconds. No installation required.", h1: "Word to PDF Converter", subtitle: "Convert Word documents to PDF while keeping the original formatting. Free & instant.", keywords: "word to pdf, word to pdf converter, convert word to pdf, doc to pdf, docx to pdf free", schema_name: "Word to PDF Converter" },
//     acceptedFiles: ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     toolType: "standard",
//   },
//   "pdf-to-excel": {
//     slug: "pdf-to-excel",
//     seo: { title: "PDF to Excel Converter – Free Online | FreePDFConvert", description: "Convert PDF to Excel free online. Extract tables and data from PDF to XLSX spreadsheet instantly. No signup, no software download.", h1: "PDF to Excel Converter", subtitle: "Pull data directly from PDF into Excel spreadsheets in seconds. 100% free.", keywords: "pdf to excel, pdf to excel converter, convert pdf to excel, pdf to xlsx free", schema_name: "PDF to Excel Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "excel-to-pdf": {
//     slug: "excel-to-pdf",
//     seo: { title: "Excel to PDF Converter – Free Online | FreePDFConvert", description: "Convert Excel to PDF free online. Turn XLS & XLSX spreadsheets into high-quality PDF documents instantly. No signup needed.", h1: "Excel to PDF Converter", subtitle: "Convert Excel spreadsheets to professional PDF documents. Free, fast & secure.", keywords: "excel to pdf, excel to pdf converter, convert excel to pdf, xlsx to pdf free", schema_name: "Excel to PDF Converter" },
//     acceptedFiles: ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     toolType: "standard",
//   },
//   "image-to-pdf": {
//     slug: "image-to-pdf",
//     seo: { title: "Image to PDF Converter – JPG & PNG to PDF | FreePDFConvert", description: "Convert JPG, PNG, BMP and more to PDF online. Combine multiple images into one PDF easily.", h1: "Image to PDF Converter", subtitle: "Turn your photos and images into professional PDF documents in seconds.", keywords: "image to pdf, jpg to pdf, png to pdf, combine images to pdf", schema_name: "Image to PDF Converter" },
//     acceptedFiles: "image/jpeg,image/jpg,image/png",
//     toolType: "image",
//   },
//   "pdf-to-jpg": {
//     slug: "pdf-to-jpg",
//     seo: { title: "PDF to JPG Converter – Free Online | FreePDFConvert", description: "Convert PDF to JPG free online. Extract images from PDF or save each page as a high-quality JPG. Fast, secure & no signup required.", h1: "PDF to JPG Converter", subtitle: "Convert PDF pages to high-quality JPG images. Extract all images from PDF instantly.", keywords: "pdf to jpg, pdf to jpg converter, convert pdf to jpg, pdf to image free online", schema_name: "PDF to JPG Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "jpg-to-pdf": {
//     slug: "jpg-to-pdf",
//     seo: { title: "JPG to PDF Converter – Free Online | FreePDFConvert", description: "Convert JPG to PDF free online. Combine multiple JPG images into one PDF. Adjust orientation and margins. No signup needed.", h1: "JPG to PDF Converter", subtitle: "Combine JPG images into a PDF file instantly. Free online tool with no watermark.", keywords: "jpg to pdf, jpg to pdf converter, convert jpg to pdf, image to pdf free", schema_name: "JPG to PDF Converter" },
//     acceptedFiles: "image/jpeg,image/jpg",
//     toolType: "image",
//   },
//   "merge-pdf": {
//     slug: "merge-pdf",
//     seo: { title: "Merge PDF Files Online – Free PDF Merger | FreePDFConvert", description: "Merge PDF files online free. Combine multiple PDFs into one document in seconds. Easy drag & drop. No signup, no watermark.", h1: "Merge PDF Files", subtitle: "Combine multiple PDF files into one. Free online PDF merger – drag, drop & merge.", keywords: "merge pdf, merge pdf files, combine pdf, pdf merger online free, join pdf files", schema_name: "PDF Merger" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "merge",
//   },
//   "extract-text-from-pdf": {
//   slug: "extract-text-from-pdf",
//   seo: {
//     title: "Extract Text from PDF – Free Online | FreePDFConvert",
//     description: "Extract text from PDF free online. Copy all text content from any PDF file instantly. No signup, no software needed. Fast & accurate.",
//     h1: "Extract Text from PDF",
//     subtitle: "Extract all text content from your PDF instantly. Free online tool – fast & accurate.",
//     keywords: "extract text from pdf, pdf text extractor, copy text from pdf, pdf to text online free",
//     schema_name: "PDF Text Extractor",
//   },
//   acceptedFiles: ".pdf,application/pdf",
//   toolType: "standard",
// },

// "extract-text-from-image": {
//   slug: "extract-text-from-image",
//   seo: {
//     title: "Extract Text from Image – Free OCR Tool Online | FreePDFConvert",
//     description: "Extract text from images free online. Use OCR to convert JPG, PNG images to text instantly. No signup required. Fast & accurate.",
//     h1: "Extract Text from Image",
//     subtitle: "Extract text from any image using OCR technology. Free online image to text converter.",
//     keywords: "extract text from image, image to text, ocr online free, jpg to text, png to text",
//     schema_name: "Image Text Extractor",
//   },
//   acceptedFiles: "image/jpeg,image/jpg,image/png,image/webp",
//   toolType: "standard",
// },
//   "compress-pdf": {
//     slug: "compress-pdf",
//     seo: { title: "Compress PDF Online – Reduce PDF File Size Free | FreePDFConvert", description: "Compress PDF file size online for free. Reduce PDF size without losing quality. No signup, no software. Fast PDF compression tool.", h1: "Compress PDF", subtitle: "Reduce PDF file size while keeping maximum quality. Free online PDF compressor.", keywords: "compress pdf, reduce pdf size, compress pdf online free, pdf compressor, shrink pdf", schema_name: "PDF Compressor" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "compress",
//   },
//   "pdf-to-pptx": {
//     slug: "pdf-to-pptx",
//     seo: { title: "PDF to PowerPoint Converter – Free Online | FreePDFConvert", description: "Convert PDF to PowerPoint free online. Turn PDF into editable PPTX slides in seconds. No signup, no watermark. Fast & accurate.", h1: "PDF to PowerPoint Converter", subtitle: "Convert PDF files to editable PowerPoint presentations. Free & instant conversion.", keywords: "pdf to powerpoint, pdf to pptx, convert pdf to ppt free, pdf to slides online", schema_name: "PDF to PowerPoint Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "pptx-to-pdf": {
//     slug: "pptx-to-pdf",
//     seo: { title: "PowerPoint to PDF Converter – Free Online | FreePDFConvert", description: "Convert PowerPoint to PDF free online. Turn PPT & PPTX presentations into PDF in seconds. High quality, no signup required.", h1: "PowerPoint to PDF Converter", subtitle: "Convert PowerPoint presentations to PDF instantly. Free, secure & no watermark.", keywords: "powerpoint to pdf, pptx to pdf, convert ppt to pdf free, presentation to pdf", schema_name: "PowerPoint to PDF Converter" },
//     acceptedFiles: ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
//     toolType: "standard",
//   },
//   "pdf-to-png": {
//     slug: "pdf-to-png",
//     seo: { title: "PDF to PNG Converter – Free Online | FreePDFConvert", description: "Convert PDF to PNG free online. Save each PDF page as a high-quality PNG image. Fast, secure & no signup needed.", h1: "PDF to PNG Converter", subtitle: "Convert PDF pages into high-quality PNG images. Free online tool, instant download.", keywords: "pdf to png, pdf to png converter, convert pdf to png, pdf to image png free", schema_name: "PDF to PNG Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "png-to-pdf": {
//     slug: "png-to-pdf",
//     seo: { title: "PNG to PDF Converter – Free Online | FreePDFConvert", description: "Convert PNG to PDF free online. Combine multiple PNG images into one PDF file. No signup, no watermark. Fast & secure.", h1: "PNG to PDF Converter", subtitle: "Combine PNG images into a PDF document. Free online converter with no limits.", keywords: "png to pdf, png to pdf converter, convert png to pdf, image to pdf free", schema_name: "PNG to PDF Converter" },
//     acceptedFiles: "image/png",
//     toolType: "image",
//   },
//   "protect-pdf": {
//     slug: "protect-pdf",
//     seo: { title: "Protect PDF with Password – Free Online | FreePDFConvert", description: "Add password protection to your PDF free online. Encrypt PDF to prevent unauthorized access. Secure, instant & no signup needed.", h1: "Protect PDF", subtitle: "Secure your PDF with a password. Free online PDF encryption – instant & safe.", keywords: "protect pdf, password protect pdf, encrypt pdf free, add password to pdf online", schema_name: "PDF Password Protector" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "protect",
//   },
//   "unlock-pdf": {
//     slug: "unlock-pdf",
//     seo: { title: "Unlock PDF – Remove PDF Password Free Online | FreePDFConvert", description: "Unlock PDF files online free. Remove PDF password and restrictions instantly. Fast, secure & no signup required.", h1: "Unlock PDF", subtitle: "Remove password protection from PDF files. Free PDF unlocker – instant & secure.", keywords: "unlock pdf, remove pdf password, pdf password remover, unlock pdf online free", schema_name: "PDF Unlocker" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "unlock",
//   },
//   "html-to-pdf": {
//     slug: "html-to-pdf",
//     seo: { title: "HTML to PDF Converter – Free Online | FreePDFConvert", description: "Convert HTML to PDF free online. Turn web pages and HTML files into high-quality PDF documents. Fast, secure & no signup needed.", h1: "HTML to PDF Converter", subtitle: "Convert HTML files and web pages into professional PDF documents. Free & instant.", keywords: "html to pdf, html to pdf converter, convert html to pdf free, webpage to pdf", schema_name: "HTML to PDF Converter" },
//     acceptedFiles: ".html,.htm,text/html",
//     toolType: "standard",
//   },
//   "Text-to-pdf": {
//     slug: "Text-to-pdf",
//     seo: { title: "Text to PDF Converter – Free Online | FreePDFConvert", description: "Convert Text to PDF free online. Turn plain text files into professional PDF documents instantly. No signup required.", h1: "Text to PDF Converter", subtitle: "Convert plain text files to PDF instantly. Free online Text to PDF tool.", keywords: "Text to pdf, text to pdf converter, convert Text to pdf free, plain text to pdf", schema_name: "Text to PDF Converter" },
//     acceptedFiles: ".txt,text/plain",
//     toolType: "standard",
//   },
//   "pdf-to-Text": {
//     slug: "pdf-to-Text",
//     seo: { title: "PDF to Text Converter – Extract Text from PDF Free | FreePDFConvert", description: "Extract text from PDF free online. Convert PDF to plain Text file instantly. No signup, no software. Fast & accurate text extraction.", h1: "PDF to Text Converter", subtitle: "Extract all text content from PDF into a plain text file. Free & instant.", keywords: "pdf to Text, pdf to text converter, extract text from pdf free, pdf text extractor", schema_name: "PDF to Text Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "Text-to-word": {
//     slug: "Text-to-word",
//     seo: { title: "Text to Word Converter – Free Online | FreePDFConvert", description: "Convert Text to Word free online. Transform plain text files into editable DOC/DOCX documents instantly. No signup needed.", h1: "Text to Word Converter", subtitle: "Convert Text files to editable Word documents. Free, fast & no watermark.", keywords: "Text to word, text to word converter, convert Text to docx free, plain text to word", schema_name: "Text to Word Converter" },
//     acceptedFiles: ".txt,text/plain",
//     toolType: "standard",
//   },
//   "word-to-Text": {
//     slug: "word-to-Text",
//     seo: { title: "Word to Text Converter – Free Online | FreePDFConvert", description: "Convert Word to Text free online. Extract plain text from DOC & DOCX files instantly. No signup, no software needed.", h1: "Word to Text Converter", subtitle: "Convert Word documents to plain text. Free online tool – simple & fast.", keywords: "word to Text, word to text converter, doc to Text free, convert docx to text", schema_name: "Word to Text Converter" },
//     acceptedFiles: ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//     toolType: "standard",
//   },
//   "pptx-to-Text": {
//     slug: "pptx-to-Text",
//     seo: { title: "PowerPoint to Text – Extract Text from PPT Free | FreePDFConvert", description: "Extract text from PowerPoint slides free online. Convert PPTX to Text and get all text content instantly. No signup required.", h1: "PowerPoint to Text", subtitle: "Extract all text and speaker notes from PowerPoint slides. Free & instant.", keywords: "powerpoint to Text, pptx to text, extract text from ppt free, ppt to Text converter", schema_name: "PowerPoint to Text Converter" },
//     acceptedFiles: ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
//     toolType: "standard",
//   },
//   "Text-to-pptx": {
//     slug: "Text-to-pptx",
//     seo: { title: "Text to PowerPoint Converter – Free Online | FreePDFConvert", description: "Convert Text to PowerPoint free online. Create PPTX presentations from plain text files instantly. No signup needed.", h1: "Text to PowerPoint", subtitle: "Create PowerPoint presentations from text files. Free online converter.", keywords: "Text to pptx, text to powerpoint, convert Text to ppt free, text to slides", schema_name: "Text to PowerPoint Converter" },
//     acceptedFiles: ".txt,text/plain",
//     toolType: "standard",
//   },
//   "pdf-to-html": {
//     slug: "pdf-to-html",
//     seo: { title: "PDF to HTML Converter – Free Online | FreePDFConvert", description: "Convert PDF to HTML free online. Transform PDF content into editable HTML code for websites. Fast, secure & no signup required.", h1: "PDF to HTML Converter", subtitle: "Convert PDF documents to HTML code. Free online PDF to HTML converter.", keywords: "pdf to html, pdf to html converter, convert pdf to html free, pdf to web page", schema_name: "PDF to HTML Converter" },
//     acceptedFiles: ".pdf,application/pdf",
//     toolType: "standard",
//   },
//   "split-pdf": {
//   slug: "split-pdf",
//   seo: {
//     title: "Split PDF – Free Online PDF Splitter | FreePDFConvert",
//     description: "Split PDF into multiple files by page range online for free. Extract specific pages from PDF instantly. No signup required, fast & secure.",
//     h1: "Split PDF",
//     subtitle: "Extract specific page ranges and split your PDF into separate files. Free online PDF splitter.",
//     keywords: "split pdf, pdf splitter, split pdf online, extract pages from pdf, pdf page extractor, divide pdf free",
//     schema_name: "Split PDF Tool"
//   },
//   acceptedFiles: ".pdf,application/pdf",
//   toolType: "split",
// },
// };

// export const getToolConfig = (slug) => TOOLS_CONFIG[slug] || null;
// export const VALID_SLUGS = Object.keys(TOOLS_CONFIG);



// ============================================================
// lib/toolsConfig.js — FULL SEO VERSION
// ✅ FAQ Schema (Google Featured Snippets)
// ✅ HowTo Schema
// ✅ Rating Schema (Star ratings in search)
// ✅ OG + Twitter tags
// ✅ All 30 tools
// ============================================================

export const TOOLS_CONFIG = {

  // ════════════════════════════════════════════════════════
  // 1. PDF TO WORD
  // ════════════════════════════════════════════════════════
  "pdf-to-word": {
    slug: "pdf-to-word",
    seo: {
      title: "PDF to Word Converter – Free Online | FreePDFConvert",
      description: "Convert PDF to Word free online. Fast, accurate PDF to DOC/DOCX conversion. No signup needed. Download editable Word file in seconds.",
      h1: "PDF to Word Converter",
      subtitle: "Convert PDF to editable Word documents free. Fast, accurate and 100% secure.",
      keywords: "pdf to word, pdf to word converter, convert pdf to word, pdf to doc, pdf to docx free",
      schema_name: "PDF to Word Converter",
      og_title: "Free PDF to Word Converter – No Signup | FreePDFConvert",
      og_description: "Convert PDF to editable Word documents instantly. Free, fast & 100% secure. No registration required.",
      twitter_title: "PDF to Word Converter – Free & Instant",
      twitter_description: "Convert PDF to Word online free. No email, no signup. Just upload & download.",
    },
    faq: [
      { q: "How do I convert PDF to Word for free?", a: "Upload your PDF file on FreePDFConvert, click Convert and download your editable Word document in seconds. No signup required." },
      { q: "Will the formatting be preserved when converting PDF to Word?", a: "Yes, our converter maintains the original layout, fonts, tables and images as closely as possible in the Word document." },
      { q: "Is there a file size limit for PDF to Word conversion?", a: "You can upload PDF files up to 100MB for free conversion without any registration." },
      { q: "Can I convert a scanned PDF to Word?", a: "Yes, our tool uses OCR technology to extract text from scanned PDFs and convert them to editable Word documents." },
    ],
    howTo: {
      name: "How to Convert PDF to Word",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag and drop your PDF onto the upload area." },
        { name: "Convert", text: "Our tool automatically starts converting your PDF to Word format." },
        { name: "Download", text: "Click 'Download Word File' to save your editable DOCX document." },
      ],
      totalTime: "PT30S",
    },
    rating: { ratingValue: "4.8", reviewCount: "12540", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 2. WORD TO PDF
  // ════════════════════════════════════════════════════════
  "word-to-pdf": {
    slug: "word-to-pdf",
    seo: {
      title: "Word to PDF Converter – Free Online | FreePDFConvert",
      description: "Convert Word to PDF free online. Keep all formatting intact. Convert DOC & DOCX to PDF in seconds. No installation required.",
      h1: "Word to PDF Converter",
      subtitle: "Convert Word documents to PDF while keeping the original formatting. Free & instant.",
      keywords: "word to pdf, word to pdf converter, convert word to pdf, doc to pdf, docx to pdf free",
      schema_name: "Word to PDF Converter",
      og_title: "Free Word to PDF Converter – Instant & Secure",
      og_description: "Convert DOC & DOCX to PDF online. Preserves all formatting, fonts and images. 100% free.",
      twitter_title: "Word to PDF – Free Online Converter",
      twitter_description: "Turn Word documents into professional PDFs instantly. Free, no signup needed.",
    },
    faq: [
      { q: "How do I convert Word to PDF for free?", a: "Upload your DOC or DOCX file on FreePDFConvert and download your PDF instantly. No signup or software needed." },
      { q: "Does Word to PDF conversion preserve formatting?", a: "Yes, our converter keeps all fonts, images, tables and page layouts exactly as they appear in your Word document." },
      { q: "Can I convert both DOC and DOCX files?", a: "Yes, FreePDFConvert supports both old DOC format and modern DOCX format for conversion to PDF." },
      { q: "Is the Word to PDF converter secure?", a: "Yes, all uploaded files are processed securely and automatically deleted after conversion. We never store or share your documents." },
    ],
    howTo: {
      name: "How to Convert Word to PDF",
      steps: [
        { name: "Upload Word File", text: "Click 'Select Word File' or drag your DOC/DOCX file onto the page." },
        { name: "Auto Convert", text: "The tool automatically converts your Word document to PDF format." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted file." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.9", reviewCount: "18200", bestRating: "5" },
    acceptedFiles: ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 3. PDF TO EXCEL
  // ════════════════════════════════════════════════════════
  "pdf-to-excel": {
    slug: "pdf-to-excel",
    seo: {
      title: "PDF to Excel Converter – Free Online | FreePDFConvert",
      description: "Convert PDF to Excel free online. Extract tables and data from PDF to XLSX spreadsheet instantly. No signup, no software download.",
      h1: "PDF to Excel Converter",
      subtitle: "Pull data directly from PDF into Excel spreadsheets in seconds. 100% free.",
      keywords: "pdf to excel, pdf to excel converter, convert pdf to excel, pdf to xlsx free, pdf table to excel",
      schema_name: "PDF to Excel Converter",
      og_title: "Free PDF to Excel Converter – Extract Tables Instantly",
      og_description: "Convert PDF tables and data to Excel spreadsheets online. Free, fast & accurate. No signup required.",
      twitter_title: "PDF to Excel – Free Online Converter",
      twitter_description: "Extract PDF tables to Excel in seconds. Free, no signup, instant download.",
    },
    faq: [
      { q: "How do I convert PDF to Excel for free?", a: "Simply upload your PDF file on FreePDFConvert and download your Excel spreadsheet. No signup or payment required." },
      { q: "Can I extract tables from PDF to Excel?", a: "Yes, our tool automatically detects and extracts tables from PDF files and converts them into organized Excel rows and columns." },
      { q: "Does it work with scanned PDF files?", a: "Yes, we use OCR technology to extract data from scanned PDFs and convert them to Excel format." },
      { q: "What Excel format does the output use?", a: "The converted file is saved in XLSX format, compatible with Microsoft Excel, Google Sheets and other spreadsheet applications." },
    ],
    howTo: {
      name: "How to Convert PDF to Excel",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the converter." },
        { name: "Extract Data", text: "Our tool automatically extracts tables and text from your PDF." },
        { name: "Download Excel", text: "Click 'Download Excel File' to get your XLSX spreadsheet." },
      ],
      totalTime: "PT45S",
    },
    rating: { ratingValue: "4.7", reviewCount: "9830", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 4. EXCEL TO PDF
  // ════════════════════════════════════════════════════════
  "excel-to-pdf": {
    slug: "excel-to-pdf",
    seo: {
      title: "Excel to PDF Converter – Free Online | FreePDFConvert",
      description: "Convert Excel to PDF free online. Turn XLS & XLSX spreadsheets into high-quality PDF documents instantly. No signup needed.",
      h1: "Excel to PDF Converter",
      subtitle: "Convert Excel spreadsheets to professional PDF documents. Free, fast & secure.",
      keywords: "excel to pdf, excel to pdf converter, convert excel to pdf, xlsx to pdf free, xls to pdf online",
      schema_name: "Excel to PDF Converter",
      og_title: "Free Excel to PDF Converter – XLS & XLSX Supported",
      og_description: "Convert Excel spreadsheets to PDF online free. All formatting preserved. No signup required.",
      twitter_title: "Excel to PDF – Free & Instant Converter",
      twitter_description: "Turn Excel files into professional PDFs online. Free, fast, no signup.",
    },
    faq: [
      { q: "How do I convert Excel to PDF for free?", a: "Upload your XLS or XLSX file on FreePDFConvert and download your PDF document instantly. Completely free, no signup needed." },
      { q: "Does Excel to PDF keep all the formatting?", a: "Yes, our converter preserves column widths, cell colors, borders, formulas results and all Excel formatting in the PDF output." },
      { q: "Can I convert multiple sheets from one Excel file?", a: "Yes, all sheets in your Excel workbook are converted into separate pages in the resulting PDF document." },
      { q: "What is the maximum file size for Excel to PDF?", a: "You can upload Excel files up to 50MB for free conversion without any registration." },
    ],
    howTo: {
      name: "How to Convert Excel to PDF",
      steps: [
        { name: "Upload Excel File", text: "Click 'Select Excel File' or drag your XLS/XLSX file onto the uploader." },
        { name: "Convert", text: "Our system automatically converts all sheets to PDF format." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted document." },
      ],
      totalTime: "PT30S",
    },
    rating: { ratingValue: "4.8", reviewCount: "7650", bestRating: "5" },
    acceptedFiles: ".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 5. IMAGE TO PDF
  // ════════════════════════════════════════════════════════
  "image-to-pdf": {
    slug: "image-to-pdf",
    seo: {
      title: "Image to PDF Converter – JPG PNG to PDF Free | FreePDFConvert",
      description: "Convert JPG, PNG and other images to PDF free online. Combine multiple images into one PDF. No signup, no watermark, instant download.",
      h1: "Image to PDF Converter",
      subtitle: "Turn your photos and images into professional PDF documents in seconds. Multiple images supported.",
      keywords: "image to pdf, jpg to pdf, png to pdf, combine images to pdf, convert image to pdf free",
      schema_name: "Image to PDF Converter",
      og_title: "Free Image to PDF Converter – Multiple Images Supported",
      og_description: "Convert JPG, PNG images to PDF online free. Combine multiple photos into one PDF. No signup required.",
      twitter_title: "Image to PDF – Free Online Converter",
      twitter_description: "Turn photos and images into PDF instantly. Supports JPG, PNG. Free & no signup.",
    },
    faq: [
      { q: "How do I convert an image to PDF for free?", a: "Upload your JPG or PNG image on FreePDFConvert, then click Convert and download your PDF. No signup or payment needed." },
      { q: "Can I combine multiple images into one PDF?", a: "Yes, you can select multiple images at once and they will all be combined into a single PDF document in order." },
      { q: "What image formats are supported?", a: "FreePDFConvert supports JPG, JPEG and PNG image formats for conversion to PDF." },
      { q: "Will the image quality be reduced in the PDF?", a: "No, our tool maintains high image quality during conversion. The PDF will look exactly like your original images." },
    ],
    howTo: {
      name: "How to Convert Image to PDF",
      steps: [
        { name: "Upload Images", text: "Click 'Select Images' or drag your JPG/PNG files. Select multiple images for a multi-page PDF." },
        { name: "Arrange & Convert", text: "Review your image queue and click 'Convert to PDF'." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your image PDF." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.8", reviewCount: "11200", bestRating: "5" },
    acceptedFiles: "image/jpeg,image/jpg,image/png",
    toolType: "image",
  },

  // ════════════════════════════════════════════════════════
  // 6. PDF TO JPG
  // ════════════════════════════════════════════════════════
  "pdf-to-jpg": {
    slug: "pdf-to-jpg",
    seo: {
      title: "PDF to JPG Converter – Free Online | FreePDFConvert",
      description: "Convert PDF to JPG free online. Extract images from PDF or save each page as a high-quality JPG. Fast, secure & no signup required.",
      h1: "PDF to JPG Converter",
      subtitle: "Convert PDF pages to high-quality JPG images. Extract all images from PDF instantly.",
      keywords: "pdf to jpg, pdf to jpg converter, convert pdf to jpg, pdf to image free online, pdf page to jpg",
      schema_name: "PDF to JPG Converter",
      og_title: "Free PDF to JPG Converter – High Quality Output",
      og_description: "Convert PDF pages to JPG images online free. High quality output, instant download, no signup.",
      twitter_title: "PDF to JPG – Free Image Converter",
      twitter_description: "Convert PDF to JPG images online. High quality, free, no signup required.",
    },
    faq: [
      { q: "How do I convert PDF to JPG for free?", a: "Upload your PDF on FreePDFConvert and download your JPG image instantly. No signup or software needed." },
      { q: "Which page of the PDF gets converted to JPG?", a: "Currently our tool converts the first page of your PDF to a high-quality JPG image." },
      { q: "What is the image quality of the converted JPG?", a: "We use 150 DPI rendering to ensure your JPG output is sharp and high quality." },
      { q: "Can I convert a password-protected PDF to JPG?", a: "You need to first unlock your PDF using our Unlock PDF tool, then convert it to JPG." },
    ],
    howTo: {
      name: "How to Convert PDF to JPG",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the converter." },
        { name: "Convert", text: "The tool automatically converts your PDF page to a JPG image." },
        { name: "Download JPG", text: "Click 'Download JPG' to save your image." },
      ],
      totalTime: "PT15S",
    },
    rating: { ratingValue: "4.7", reviewCount: "8900", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 7. JPG TO PDF
  // ════════════════════════════════════════════════════════
  "jpg-to-pdf": {
    slug: "jpg-to-pdf",
    seo: {
      title: "JPG to PDF Converter – Free Online | FreePDFConvert",
      description: "Convert JPG to PDF free online. Combine multiple JPG images into one PDF. No signup, no watermark. Fast & secure JPG to PDF conversion.",
      h1: "JPG to PDF Converter",
      subtitle: "Combine JPG images into a PDF file instantly. Free online tool with no watermark.",
      keywords: "jpg to pdf, jpg to pdf converter, convert jpg to pdf, image to pdf free, jpeg to pdf online",
      schema_name: "JPG to PDF Converter",
      og_title: "Free JPG to PDF Converter – Multiple Images Supported",
      og_description: "Convert JPG images to PDF online free. Combine multiple photos into one PDF. No watermark, no signup.",
      twitter_title: "JPG to PDF – Free Online Converter",
      twitter_description: "Convert JPG images to PDF. Combine multiple photos. Free, no signup, instant.",
    },
    faq: [
      { q: "How do I convert JPG to PDF for free?", a: "Upload your JPG image on FreePDFConvert and download your PDF instantly. No signup, no email required." },
      { q: "Can I combine multiple JPG files into one PDF?", a: "Yes, select multiple JPG images at once and they will be combined into a single PDF document." },
      { q: "Is there a watermark on the converted PDF?", a: "No, FreePDFConvert does not add any watermarks to your converted PDF files." },
      { q: "What is the file size limit for JPG to PDF?", a: "You can upload JPG images up to 50MB each for free conversion." },
    ],
    howTo: {
      name: "How to Convert JPG to PDF",
      steps: [
        { name: "Upload JPG", text: "Click 'Select JPG File' or drag your image file onto the uploader." },
        { name: "Convert", text: "Our tool automatically converts your JPG to PDF format." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted file." },
      ],
      totalTime: "PT15S",
    },
    rating: { ratingValue: "4.8", reviewCount: "14300", bestRating: "5" },
    acceptedFiles: "image/jpeg,image/jpg",
    toolType: "image",
  },

  // ════════════════════════════════════════════════════════
  // 8. MERGE PDF
  // ════════════════════════════════════════════════════════
  "merge-pdf": {
    slug: "merge-pdf",
    seo: {
      title: "Merge PDF Files Online Free – PDF Merger | FreePDFConvert",
      description: "Merge PDF files online free. Combine multiple PDFs into one document in seconds. Easy drag & drop. No signup, no watermark. Fast PDF merger.",
      h1: "Merge PDF Files",
      subtitle: "Combine multiple PDF files into one. Free online PDF merger – drag, drop & merge.",
      keywords: "merge pdf, merge pdf files, combine pdf, pdf merger online free, join pdf files, combine pdf files",
      schema_name: "PDF Merger",
      og_title: "Free PDF Merger – Combine Multiple PDFs Online",
      og_description: "Merge multiple PDF files into one document online free. No signup, no watermark, instant download.",
      twitter_title: "Merge PDF – Free Online PDF Combiner",
      twitter_description: "Combine multiple PDFs into one file online. Free, fast, no signup required.",
    },
    faq: [
      { q: "How do I merge PDF files for free?", a: "Upload multiple PDF files on FreePDFConvert, arrange them in order and click 'Merge All Files'. Download your combined PDF instantly." },
      { q: "How many PDF files can I merge at once?", a: "You can merge unlimited PDF files at once. Simply keep adding files to the queue before merging." },
      { q: "Will the merged PDF maintain the original quality?", a: "Yes, merging PDFs does not reduce quality. All content, images and formatting remain exactly as in the originals." },
      { q: "Can I merge password-protected PDFs?", a: "No, you need to first remove the password using our Unlock PDF tool before merging protected files." },
    ],
    howTo: {
      name: "How to Merge PDF Files",
      steps: [
        { name: "Upload PDFs", text: "Click 'Select Files to Merge' and choose multiple PDF files from your device." },
        { name: "Arrange Files", text: "Review the merge queue. Remove any unwanted files or add more." },
        { name: "Merge & Download", text: "Click 'Merge All Files' and download your combined PDF." },
      ],
      totalTime: "PT30S",
    },
    rating: { ratingValue: "4.9", reviewCount: "22100", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "merge",
  },

  // ════════════════════════════════════════════════════════
  // 9. COMPRESS PDF
  // ════════════════════════════════════════════════════════
  "compress-pdf": {
    slug: "compress-pdf",
    seo: {
      title: "Compress PDF Online Free – Reduce PDF File Size | FreePDFConvert",
      description: "Compress PDF file size online for free. Reduce PDF size without losing quality. Choose compression level. No signup, no software. Fast PDF compressor.",
      h1: "Compress PDF",
      subtitle: "Reduce PDF file size while keeping maximum quality. Free online PDF compressor.",
      keywords: "compress pdf, reduce pdf size, compress pdf online free, pdf compressor, shrink pdf, reduce pdf file size",
      schema_name: "PDF Compressor",
      og_title: "Free PDF Compressor – Reduce PDF Size Online",
      og_description: "Compress PDF files online free. Choose compression level. No quality loss. No signup required.",
      twitter_title: "Compress PDF – Free Online Size Reducer",
      twitter_description: "Reduce PDF file size online free. Multiple compression levels. No signup.",
    },
    faq: [
      { q: "How do I compress a PDF file for free?", a: "Upload your PDF on FreePDFConvert, choose your compression level (Extreme, Recommended or Less) and click Compress. Download your smaller PDF instantly." },
      { q: "How much can I reduce my PDF file size?", a: "Depending on content, you can reduce PDF size by 20-80%. PDFs with many images compress the most." },
      { q: "Will compression reduce the PDF quality?", a: "Our Recommended setting balances quality and size perfectly. You can also choose Less compression for maximum quality or Extreme for smallest file size." },
      { q: "What is the maximum PDF size I can compress?", a: "You can compress PDF files up to 100MB completely free without any signup." },
    ],
    howTo: {
      name: "How to Compress a PDF File",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the compressor." },
        { name: "Choose Level", text: "Select Extreme, Recommended or Less compression based on your needs." },
        { name: "Compress & Download", text: "Click 'Compress PDF Now' and download your smaller PDF." },
      ],
      totalTime: "PT30S",
    },
    rating: { ratingValue: "4.8", reviewCount: "16700", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "compress",
  },

  // ════════════════════════════════════════════════════════
  // 10. PDF TO PPTX
  // ════════════════════════════════════════════════════════
  "pdf-to-pptx": {
    slug: "pdf-to-pptx",
    seo: {
      title: "PDF to PowerPoint Converter Free Online | FreePDFConvert",
      description: "Convert PDF to PowerPoint free online. Turn PDF into editable PPTX slides in seconds. No signup, no watermark. Fast & accurate PDF to PPT conversion.",
      h1: "PDF to PowerPoint Converter",
      subtitle: "Convert PDF files to editable PowerPoint presentations. Free & instant conversion.",
      keywords: "pdf to powerpoint, pdf to pptx, convert pdf to ppt free, pdf to slides online, pdf to ppt converter",
      schema_name: "PDF to PowerPoint Converter",
      og_title: "Free PDF to PowerPoint Converter – Instant PPTX",
      og_description: "Convert PDF to editable PowerPoint slides online. Free, fast, no signup required.",
      twitter_title: "PDF to PowerPoint – Free Online Converter",
      twitter_description: "Convert PDF to PPTX slides instantly. Free, no signup, no watermark.",
    },
    faq: [
      { q: "How do I convert PDF to PowerPoint for free?", a: "Upload your PDF on FreePDFConvert and download your PPTX file instantly. No signup or software installation needed." },
      { q: "Can I edit the PowerPoint slides after conversion?", a: "Yes, the converted PPTX file is fully editable in Microsoft PowerPoint and Google Slides." },
      { q: "How many PDF pages can be converted to slides?", a: "Each page of your PDF becomes one slide in the PowerPoint presentation. There is no page limit." },
      { q: "Does the PDF to PowerPoint converter work on mobile?", a: "Yes, our online converter works on all devices including iPhone, Android, tablets and desktop computers." },
    ],
    howTo: {
      name: "How to Convert PDF to PowerPoint",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the converter." },
        { name: "Convert to PPTX", text: "Our tool converts each PDF page into a PowerPoint slide." },
        { name: "Download PPTX", text: "Click 'Download PPTX' to save your editable presentation." },
      ],
      totalTime: "PT60S",
    },
    rating: { ratingValue: "4.6", reviewCount: "6200", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 11. PPTX TO PDF
  // ════════════════════════════════════════════════════════
  "pptx-to-pdf": {
    slug: "pptx-to-pdf",
    seo: {
      title: "PowerPoint to PDF Converter Free Online | FreePDFConvert",
      description: "Convert PowerPoint to PDF free online. Turn PPT & PPTX presentations into PDF in seconds. High quality output, no signup required.",
      h1: "PowerPoint to PDF Converter",
      subtitle: "Convert PowerPoint presentations to PDF instantly. Free, secure & no watermark.",
      keywords: "powerpoint to pdf, pptx to pdf, convert ppt to pdf free, presentation to pdf, ppt to pdf online",
      schema_name: "PowerPoint to PDF Converter",
      og_title: "Free PowerPoint to PDF Converter – PPT & PPTX",
      og_description: "Convert PowerPoint presentations to PDF online free. PPT and PPTX supported. No signup.",
      twitter_title: "PowerPoint to PDF – Free Converter",
      twitter_description: "Turn PPT/PPTX presentations into PDF online. Free, fast, no signup.",
    },
    faq: [
      { q: "How do I convert PowerPoint to PDF for free?", a: "Upload your PPT or PPTX file on FreePDFConvert and download your PDF presentation instantly. No signup needed." },
      { q: "Does it support both PPT and PPTX formats?", a: "Yes, FreePDFConvert supports both old PPT format and modern PPTX format for conversion to PDF." },
      { q: "Will animations be visible in the PDF?", a: "Animations are not supported in PDF format. Each slide will appear as it looks in its final state." },
      { q: "Can I convert Google Slides to PDF?", a: "First download your Google Slides as a PPTX file, then upload it to FreePDFConvert for PDF conversion." },
    ],
    howTo: {
      name: "How to Convert PowerPoint to PDF",
      steps: [
        { name: "Upload PPTX", text: "Click 'Select PPTX File' or drag your PPT/PPTX file onto the uploader." },
        { name: "Convert", text: "Our tool converts all slides to PDF format preserving content." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted presentation." },
      ],
      totalTime: "PT30S",
    },
    rating: { ratingValue: "4.7", reviewCount: "8400", bestRating: "5" },
    acceptedFiles: ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 12. PDF TO PNG
  // ════════════════════════════════════════════════════════
  "pdf-to-png": {
    slug: "pdf-to-png",
    seo: {
      title: "PDF to PNG Converter – Free Online | FreePDFConvert",
      description: "Convert PDF to PNG free online. Save each PDF page as a high-quality PNG image. Fast, secure & no signup needed. Instant PDF to PNG conversion.",
      h1: "PDF to PNG Converter",
      subtitle: "Convert PDF pages into high-quality PNG images. Free online tool, instant download.",
      keywords: "pdf to png, pdf to png converter, convert pdf to png, pdf to image png free, pdf page to png",
      schema_name: "PDF to PNG Converter",
      og_title: "Free PDF to PNG Converter – High Quality Images",
      og_description: "Convert PDF pages to PNG images online free. High quality, transparent background support, no signup.",
      twitter_title: "PDF to PNG – Free Online Converter",
      twitter_description: "Convert PDF to PNG images online. High quality output. Free, no signup.",
    },
    faq: [
      { q: "How do I convert PDF to PNG for free?", a: "Upload your PDF on FreePDFConvert and download your PNG image instantly. No signup or software needed." },
      { q: "What is the difference between PDF to JPG and PDF to PNG?", a: "PNG supports transparent backgrounds and is lossless, making it better for graphics. JPG is better for photographs and has smaller file sizes." },
      { q: "Which PDF page gets converted to PNG?", a: "Our tool converts the first page of your PDF to a high-quality PNG image." },
      { q: "Can I convert a multi-page PDF to multiple PNGs?", a: "Currently each conversion produces one PNG from the first page. For multiple pages, convert each page separately." },
    ],
    howTo: {
      name: "How to Convert PDF to PNG",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the converter." },
        { name: "Convert", text: "The tool automatically renders your PDF page as a PNG image." },
        { name: "Download PNG", text: "Click 'Download PNG' to save your image file." },
      ],
      totalTime: "PT15S",
    },
    rating: { ratingValue: "4.7", reviewCount: "5600", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 13. PNG TO PDF
  // ════════════════════════════════════════════════════════
  "png-to-pdf": {
    slug: "png-to-pdf",
    seo: {
      title: "PNG to PDF Converter – Free Online | FreePDFConvert",
      description: "Convert PNG to PDF free online. Combine multiple PNG images into one PDF file. No signup, no watermark. Fast & secure PNG to PDF conversion.",
      h1: "PNG to PDF Converter",
      subtitle: "Combine PNG images into a PDF document. Free online converter with no limits.",
      keywords: "png to pdf, png to pdf converter, convert png to pdf, image to pdf free, png to pdf online",
      schema_name: "PNG to PDF Converter",
      og_title: "Free PNG to PDF Converter – Multiple PNGs Supported",
      og_description: "Convert PNG images to PDF online free. Combine multiple PNGs into one PDF. No watermark, no signup.",
      twitter_title: "PNG to PDF – Free Online Converter",
      twitter_description: "Convert PNG to PDF online. Multiple images supported. Free, no signup.",
    },
    faq: [
      { q: "How do I convert PNG to PDF for free?", a: "Upload your PNG image on FreePDFConvert and download your PDF instantly. No signup or payment required." },
      { q: "Can I convert multiple PNG files into one PDF?", a: "Yes, select multiple PNG images at once and they will all be combined into a single PDF document." },
      { q: "Will the PNG transparency be preserved in PDF?", a: "PNG transparency is converted to white background in the PDF, as PDF does not support full transparency in the same way." },
      { q: "Is there a file size limit for PNG to PDF?", a: "You can upload PNG images up to 50MB each for free conversion without registration." },
    ],
    howTo: {
      name: "How to Convert PNG to PDF",
      steps: [
        { name: "Upload PNG", text: "Click 'Select PNG File' or drag your PNG images onto the uploader." },
        { name: "Convert", text: "Our tool automatically converts your PNG images to PDF format." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted document." },
      ],
      totalTime: "PT15S",
    },
    rating: { ratingValue: "4.7", reviewCount: "6100", bestRating: "5" },
    acceptedFiles: "image/png",
    toolType: "image",
  },

  // ════════════════════════════════════════════════════════
  // 14. PROTECT PDF
  // ════════════════════════════════════════════════════════
  "protect-pdf": {
    slug: "protect-pdf",
    seo: {
      title: "Protect PDF with Password – Free Online | FreePDFConvert",
      description: "Add password protection to your PDF free online. Encrypt PDF with AES-256 to prevent unauthorized access. Secure, instant & no signup needed.",
      h1: "Protect PDF",
      subtitle: "Secure your PDF with a password. Free online PDF encryption – instant & safe.",
      keywords: "protect pdf, password protect pdf, encrypt pdf free, add password to pdf online, secure pdf",
      schema_name: "PDF Password Protector",
      og_title: "Free PDF Password Protection – AES-256 Encryption",
      og_description: "Add strong password protection to PDF files online free. AES-256 encryption. No signup required.",
      twitter_title: "Protect PDF – Free Password Encryption",
      twitter_description: "Add password to PDF online. Strong AES-256 encryption. Free, no signup.",
    },
    faq: [
      { q: "How do I add a password to a PDF for free?", a: "Upload your PDF on FreePDFConvert, enter your chosen password and click 'Protect PDF Now'. Download your password-protected PDF instantly." },
      { q: "What encryption does FreePDFConvert use for PDF protection?", a: "We use AES-256 bit encryption, which is the industry-standard encryption used by banks and governments." },
      { q: "Can I remove the password later?", a: "Yes, use our Unlock PDF tool to remove the password if you know the original password you set." },
      { q: "Is my PDF safe when I upload it to protect it?", a: "Yes, all files are processed with secure HTTPS encryption and automatically deleted after conversion. We never store your documents." },
    ],
    howTo: {
      name: "How to Password Protect a PDF",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF to Protect' or drag your PDF onto the uploader." },
        { name: "Set Password", text: "Enter a strong password in the password field." },
        { name: "Download Protected PDF", text: "Click 'Protect PDF Now' and download your encrypted PDF." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.8", reviewCount: "9300", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "protect",
  },

  // ════════════════════════════════════════════════════════
  // 15. UNLOCK PDF
  // ════════════════════════════════════════════════════════
  "unlock-pdf": {
    slug: "unlock-pdf",
    seo: {
      title: "Unlock PDF – Remove PDF Password Free Online | FreePDFConvert",
      description: "Unlock PDF files online free. Remove PDF password and restrictions instantly. Fast, secure & no signup required. Free PDF password remover.",
      h1: "Unlock PDF",
      subtitle: "Remove password protection from PDF files. Free PDF unlocker – instant & secure.",
      keywords: "unlock pdf, remove pdf password, pdf password remover, unlock pdf online free, pdf unlocker",
      schema_name: "PDF Unlocker",
      og_title: "Free PDF Unlocker – Remove PDF Password Online",
      og_description: "Unlock password-protected PDF files online free. Remove restrictions instantly. No signup required.",
      twitter_title: "Unlock PDF – Free Password Remover",
      twitter_description: "Remove PDF password online free. Instant unlock. No signup required.",
    },
    faq: [
      { q: "How do I unlock a PDF file for free?", a: "Upload your locked PDF on FreePDFConvert. If you know the password, enter it. We also try common passwords automatically. Download your unlocked PDF instantly." },
      { q: "Can I unlock a PDF without knowing the password?", a: "Our tool automatically tries common passwords. However, PDFs with unique strong passwords cannot be unlocked without the correct password." },
      { q: "Is it legal to unlock a PDF?", a: "It is legal to unlock PDF files that you own or have the right to access. Do not use this tool to bypass security on files you do not have permission to access." },
      { q: "What types of PDF restrictions can be removed?", a: "Our tool removes open passwords and can also remove printing, copying and editing restrictions from PDF documents." },
    ],
    howTo: {
      name: "How to Unlock a PDF File",
      steps: [
        { name: "Upload Locked PDF", text: "Click 'Select Locked PDF' or drag your protected PDF onto the uploader." },
        { name: "Enter Password", text: "Enter the PDF password if you know it. Leave empty to try automatic unlock." },
        { name: "Download Unlocked PDF", text: "Click 'Unlock PDF Now' and download your unlocked document." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.6", reviewCount: "11800", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "unlock",
  },

  // ════════════════════════════════════════════════════════
  // 16. HTML TO PDF
  // ════════════════════════════════════════════════════════
  "html-to-pdf": {
    slug: "html-to-pdf",
    seo: {
      title: "HTML to PDF Converter – Free Online | FreePDFConvert",
      description: "Convert HTML to PDF free online. Turn web pages and HTML files into high-quality PDF documents. Fast, secure & no signup needed.",
      h1: "HTML to PDF Converter",
      subtitle: "Convert HTML files and web pages into professional PDF documents. Free & instant.",
      keywords: "html to pdf, html to pdf converter, convert html to pdf free, webpage to pdf, html file to pdf",
      schema_name: "HTML to PDF Converter",
      og_title: "Free HTML to PDF Converter – Web Pages to PDF",
      og_description: "Convert HTML files and web pages to PDF online free. Preserves styles and layout. No signup.",
      twitter_title: "HTML to PDF – Free Online Converter",
      twitter_description: "Convert HTML files to PDF online. Preserves styles. Free, no signup.",
    },
    faq: [
      { q: "How do I convert HTML to PDF for free?", a: "Upload your HTML file on FreePDFConvert and download your PDF document instantly. No signup or software needed." },
      { q: "Will CSS styles be preserved in the PDF?", a: "Yes, our converter preserves CSS styling, fonts, colors, tables and basic layouts in the PDF output." },
      { q: "Can I convert a webpage URL to PDF?", a: "Our tool converts uploaded HTML files. To convert a URL, first save the webpage as an HTML file, then upload it." },
      { q: "What HTML features are supported?", a: "We support standard HTML5 with CSS including tables, headings, paragraphs, images and basic styling." },
    ],
    howTo: {
      name: "How to Convert HTML to PDF",
      steps: [
        { name: "Upload HTML File", text: "Click 'Select HTML File' or drag your .html file onto the converter." },
        { name: "Convert", text: "Our tool converts your HTML with all styles to PDF format." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted document." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.6", reviewCount: "4200", bestRating: "5" },
    acceptedFiles: ".html,.htm,text/html",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 17. TEXT TO PDF
  // ════════════════════════════════════════════════════════
  "Text-to-pdf": {
    slug: "Text-to-pdf",
    seo: {
      title: "Text to PDF Converter – Free Online | FreePDFConvert",
      description: "Convert Text to PDF free online. Turn plain text files into professional PDF documents instantly. No signup required. Fast & secure text to PDF.",
      h1: "Text to PDF Converter",
      subtitle: "Convert plain text files to PDF instantly. Free online Text to PDF tool.",
      keywords: "text to pdf, text to pdf converter, convert text to pdf free, plain text to pdf, txt to pdf",
      schema_name: "Text to PDF Converter",
      og_title: "Free Text to PDF Converter – TXT to PDF Online",
      og_description: "Convert plain text files to PDF online free. Instant conversion, no signup, no watermark.",
      twitter_title: "Text to PDF – Free Online Converter",
      twitter_description: "Convert TXT files to PDF instantly online. Free, no signup required.",
    },
    faq: [
      { q: "How do I convert a text file to PDF for free?", a: "Upload your TXT file on FreePDFConvert and download your PDF document instantly. No signup or payment required." },
      { q: "What text file formats are supported?", a: "We support standard .txt plain text files for conversion to PDF." },
      { q: "Will the font and formatting be preserved?", a: "Plain text files are converted using a clean, readable font. Since TXT files have no formatting, basic text layout is applied." },
      { q: "Is there a limit on text file size?", a: "You can convert text files up to 10MB completely free without any registration." },
    ],
    howTo: {
      name: "How to Convert Text to PDF",
      steps: [
        { name: "Upload Text File", text: "Click 'Select Text File' or drag your TXT file onto the converter." },
        { name: "Convert", text: "Our tool automatically formats and converts your text to PDF." },
        { name: "Download PDF", text: "Click 'Download PDF' to save your converted document." },
      ],
      totalTime: "PT10S",
    },
    rating: { ratingValue: "4.6", reviewCount: "3800", bestRating: "5" },
    acceptedFiles: ".txt,text/plain",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 18. PDF TO TEXT
  // ════════════════════════════════════════════════════════
  "pdf-to-Text": {
    slug: "pdf-to-Text",
    seo: {
      title: "PDF to Text Converter – Extract Text from PDF Free | FreePDFConvert",
      description: "Extract text from PDF free online. Convert PDF to plain Text file instantly. No signup, no software. Fast & accurate text extraction from PDF.",
      h1: "PDF to Text Converter",
      subtitle: "Extract all text content from PDF into a plain text file. Free & instant.",
      keywords: "pdf to text, pdf to text converter, extract text from pdf free, pdf text extractor, pdf to txt",
      schema_name: "PDF to Text Converter",
      og_title: "Free PDF to Text Converter – Extract All PDF Text",
      og_description: "Extract text from PDF online free. Converts all pages to plain text. No signup, instant download.",
      twitter_title: "PDF to Text – Free Text Extractor",
      twitter_description: "Extract text from PDF online free. All pages supported. No signup.",
    },
    faq: [
      { q: "How do I extract text from a PDF for free?", a: "Upload your PDF on FreePDFConvert and download your text file instantly. All text from all pages is extracted automatically." },
      { q: "Can I extract text from a scanned PDF?", a: "Yes, our tool uses OCR technology to extract text from scanned PDF documents and image-based PDFs." },
      { q: "Will the extracted text preserve the original order?", a: "Yes, text is extracted page by page in reading order, preserving the natural flow of the document." },
      { q: "What format is the extracted text saved in?", a: "Text is saved as a plain .txt file compatible with any text editor including Notepad, Word and Google Docs." },
    ],
    howTo: {
      name: "How to Extract Text from PDF",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the converter." },
        { name: "Extract", text: "Our tool automatically extracts all text from every page." },
        { name: "Download Text File", text: "Click 'Download Text File' to save your extracted text." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.7", reviewCount: "7200", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 19. TEXT TO WORD
  // ════════════════════════════════════════════════════════
  "Text-to-word": {
    slug: "Text-to-word",
    seo: {
      title: "Text to Word Converter – Free Online | FreePDFConvert",
      description: "Convert Text to Word free online. Transform plain text files into editable DOC/DOCX documents instantly. No signup needed. Free TXT to Word converter.",
      h1: "Text to Word Converter",
      subtitle: "Convert Text files to editable Word documents. Free, fast & no watermark.",
      keywords: "text to word, text to word converter, convert text to docx free, plain text to word, txt to docx",
      schema_name: "Text to Word Converter",
      og_title: "Free Text to Word Converter – TXT to DOCX Online",
      og_description: "Convert plain text files to Word documents online free. Editable DOCX output. No signup.",
      twitter_title: "Text to Word – Free Online Converter",
      twitter_description: "Convert TXT to Word DOCX online. Free, editable output, no signup.",
    },
    faq: [
      { q: "How do I convert a text file to Word for free?", a: "Upload your TXT file on FreePDFConvert and download your editable Word document instantly. No signup required." },
      { q: "Is the converted Word file editable?", a: "Yes, the output is a fully editable DOCX file compatible with Microsoft Word and Google Docs." },
      { q: "Will formatting be preserved from the text file?", a: "Plain text files have no formatting. The converted Word document uses standard Arial 12pt font with clean paragraph structure." },
      { q: "Can I open the converted DOCX in Google Docs?", a: "Yes, the DOCX format works perfectly with Google Docs, LibreOffice, OpenOffice and Microsoft Word." },
    ],
    howTo: {
      name: "How to Convert Text to Word",
      steps: [
        { name: "Upload Text File", text: "Click 'Select Text File' or drag your TXT file onto the converter." },
        { name: "Convert", text: "Our tool automatically formats your text into a Word document structure." },
        { name: "Download DOCX", text: "Click 'Download Word File' to save your editable document." },
      ],
      totalTime: "PT10S",
    },
    rating: { ratingValue: "4.6", reviewCount: "4100", bestRating: "5" },
    acceptedFiles: ".txt,text/plain",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 20. WORD TO TEXT
  // ════════════════════════════════════════════════════════
  "word-to-Text": {
    slug: "word-to-Text",
    seo: {
      title: "Word to Text Converter – Free Online | FreePDFConvert",
      description: "Convert Word to Text free online. Extract plain text from DOC & DOCX files instantly. No signup, no software needed. Fast Word to TXT converter.",
      h1: "Word to Text Converter",
      subtitle: "Convert Word documents to plain text. Free online tool – simple & fast.",
      keywords: "word to text, word to text converter, doc to text free, convert docx to text, word to txt",
      schema_name: "Word to Text Converter",
      og_title: "Free Word to Text Converter – DOC & DOCX to TXT",
      og_description: "Extract plain text from Word documents online free. DOC and DOCX supported. No signup.",
      twitter_title: "Word to Text – Free Online Converter",
      twitter_description: "Convert Word DOC/DOCX to plain text online. Free, fast, no signup.",
    },
    faq: [
      { q: "How do I convert Word to text for free?", a: "Upload your DOC or DOCX file on FreePDFConvert and download your plain text file instantly. No signup needed." },
      { q: "What content is extracted from the Word document?", a: "We extract all paragraphs, tables, headers, footers, text boxes and footnotes from your Word document." },
      { q: "Does it support both DOC and DOCX formats?", a: "Yes, FreePDFConvert supports both old DOC format and modern DOCX format for text extraction." },
      { q: "Will images in the Word document be extracted?", a: "Images cannot be extracted to text format. Only text content from the Word document is saved in the output file." },
    ],
    howTo: {
      name: "How to Convert Word to Text",
      steps: [
        { name: "Upload Word File", text: "Click 'Select Word File' or drag your DOC/DOCX onto the converter." },
        { name: "Extract", text: "Our tool extracts all text content from your Word document." },
        { name: "Download Text File", text: "Click 'Download Text File' to save your extracted text." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.6", reviewCount: "5500", bestRating: "5" },
    acceptedFiles: ".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 21. PPTX TO TEXT
  // ════════════════════════════════════════════════════════
  "pptx-to-Text": {
    slug: "pptx-to-Text",
    seo: {
      title: "PowerPoint to Text – Extract Text from PPT Free | FreePDFConvert",
      description: "Extract text from PowerPoint slides free online. Convert PPTX to Text and get all slide content instantly. No signup required. PPT & PPTX supported.",
      h1: "PowerPoint to Text",
      subtitle: "Extract all text and speaker notes from PowerPoint slides. Free & instant.",
      keywords: "powerpoint to text, pptx to text, extract text from ppt free, ppt to text converter, pptx to txt",
      schema_name: "PowerPoint to Text Converter",
      og_title: "Free PowerPoint to Text Extractor – PPT & PPTX",
      og_description: "Extract text from PowerPoint slides online free. All slides and speaker notes extracted. No signup.",
      twitter_title: "PowerPoint to Text – Free Text Extractor",
      twitter_description: "Extract text from PPT/PPTX slides online free. Speaker notes included. No signup.",
    },
    faq: [
      { q: "How do I extract text from PowerPoint for free?", a: "Upload your PPT or PPTX file on FreePDFConvert and download your text file instantly. All slide content is extracted automatically." },
      { q: "Are speaker notes included in the extracted text?", a: "Yes, speaker notes from each slide are included in the output text file with a clear [Notes] label." },
      { q: "Does it support both PPT and PPTX formats?", a: "Yes, FreePDFConvert supports both old PPT format and modern PPTX format for text extraction." },
      { q: "Are tables in slides extracted correctly?", a: "Yes, table content is extracted with pipe separators to maintain the column structure in the text output." },
    ],
    howTo: {
      name: "How to Extract Text from PowerPoint",
      steps: [
        { name: "Upload PPTX", text: "Click 'Select PPTX File' or drag your PPT/PPTX file onto the converter." },
        { name: "Extract", text: "Our tool extracts text from all slides and speaker notes." },
        { name: "Download Text File", text: "Click 'Download Text File' to save your extracted content." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.6", reviewCount: "3200", bestRating: "5" },
    acceptedFiles: ".ppt,.pptx,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 22. TEXT TO PPTX
  // ════════════════════════════════════════════════════════
  "Text-to-pptx": {
    slug: "Text-to-pptx",
    seo: {
      title: "Text to PowerPoint Converter – Free Online | FreePDFConvert",
      description: "Convert Text to PowerPoint free online. Create professional PPTX presentations from plain text files instantly. No signup needed. Free TXT to PPTX.",
      h1: "Text to PowerPoint",
      subtitle: "Create PowerPoint presentations from text files. Free online converter.",
      keywords: "text to pptx, text to powerpoint, convert text to ppt free, text to slides, txt to pptx online",
      schema_name: "Text to PowerPoint Converter",
      og_title: "Free Text to PowerPoint Converter – TXT to PPTX",
      og_description: "Create PowerPoint presentations from text files online free. Auto-slide creation. No signup.",
      twitter_title: "Text to PowerPoint – Free PPTX Creator",
      twitter_description: "Convert TXT to PPTX slides online free. Auto-formatted slides. No signup.",
    },
    faq: [
      { q: "How do I convert text to PowerPoint for free?", a: "Upload your TXT file on FreePDFConvert and download your PPTX presentation instantly. Content is automatically split into slides." },
      { q: "How are slides created from text?", a: "Every 10 lines of text becomes one slide. The first line of each group becomes the slide title and the rest becomes the content." },
      { q: "Can I edit the PowerPoint after conversion?", a: "Yes, the output is a fully editable PPTX file you can open and customize in Microsoft PowerPoint or Google Slides." },
      { q: "How many slides will be created from my text file?", a: "The number of slides depends on your text length. Every 10 lines creates one slide automatically." },
    ],
    howTo: {
      name: "How to Convert Text to PowerPoint",
      steps: [
        { name: "Upload Text File", text: "Click 'Select Text File' or drag your TXT file onto the converter." },
        { name: "Auto-Create Slides", text: "Our tool automatically splits your text into organized slides." },
        { name: "Download PPTX", text: "Click 'Download PPTX' to save your presentation." },
      ],
      totalTime: "PT15S",
    },
    rating: { ratingValue: "4.5", reviewCount: "2800", bestRating: "5" },
    acceptedFiles: ".txt,text/plain",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 23. PDF TO HTML
  // ════════════════════════════════════════════════════════
  "pdf-to-html": {
    slug: "pdf-to-html",
    seo: {
      title: "PDF to HTML Converter – Free Online | FreePDFConvert",
      description: "Convert PDF to HTML free online. Transform PDF content into editable HTML code for websites. Fast, secure & no signup required. PDF to web page converter.",
      h1: "PDF to HTML Converter",
      subtitle: "Convert PDF documents to HTML code. Free online PDF to HTML converter.",
      keywords: "pdf to html, pdf to html converter, convert pdf to html free, pdf to web page, pdf to html5",
      schema_name: "PDF to HTML Converter",
      og_title: "Free PDF to HTML Converter – PDF to Web Page",
      og_description: "Convert PDF files to HTML code online free. Editable HTML output. No signup required.",
      twitter_title: "PDF to HTML – Free Online Converter",
      twitter_description: "Convert PDF to HTML code online free. Web-ready output. No signup.",
    },
    faq: [
      { q: "How do I convert PDF to HTML for free?", a: "Upload your PDF on FreePDFConvert and download your HTML file instantly. No signup or software installation needed." },
      { q: "Can I use the converted HTML on my website?", a: "Yes, the output is a standard HTML file you can directly use or embed in any website." },
      { q: "Will images from the PDF appear in the HTML?", a: "Yes, images embedded in the PDF are converted and included as inline elements in the HTML output." },
      { q: "Is the HTML output responsive for mobile?", a: "The HTML output preserves the PDF structure. You may need to add responsive CSS for full mobile optimization." },
    ],
    howTo: {
      name: "How to Convert PDF to HTML",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the converter." },
        { name: "Convert", text: "Our tool converts all PDF content including text and images to HTML." },
        { name: "Download HTML", text: "Click 'Download HTML' to save your web-ready file." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.5", reviewCount: "3100", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 24. SPLIT PDF
  // ════════════════════════════════════════════════════════
  "split-pdf": {
    slug: "split-pdf",
    seo: {
      title: "Split PDF – Free Online PDF Splitter | FreePDFConvert",
      description: "Split PDF into multiple files by page range online for free. Extract specific pages from PDF instantly. No signup required, fast & secure PDF splitter.",
      h1: "Split PDF",
      subtitle: "Extract specific page ranges and split your PDF into separate files. Free online PDF splitter.",
      keywords: "split pdf, pdf splitter, split pdf online, extract pages from pdf, pdf page extractor, divide pdf free",
      schema_name: "Split PDF Tool",
      og_title: "Free PDF Splitter – Extract Pages from PDF Online",
      og_description: "Split PDF into multiple files by page range online free. Extract specific pages instantly. No signup.",
      twitter_title: "Split PDF – Free Online PDF Splitter",
      twitter_description: "Split PDF by page range online free. Extract any pages. No signup required.",
    },
    faq: [
      { q: "How do I split a PDF for free?", a: "Upload your PDF on FreePDFConvert, enter the page ranges you want to extract and download each split PDF file instantly. No signup needed." },
      { q: "Can I split a PDF into multiple parts?", a: "Yes, you can define multiple page ranges and each range will be saved as a separate PDF file." },
      { q: "Can I extract just one page from a PDF?", a: "Yes, simply enter the same page number for both 'from' and 'to' fields to extract a single page as a PDF." },
      { q: "Is there a page limit for splitting PDFs?", a: "No, you can split PDFs of any length. Large files may take a few extra seconds to process." },
    ],
    howTo: {
      name: "How to Split a PDF File",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the splitter." },
        { name: "Set Page Ranges", text: "Enter the page ranges you want to extract (e.g. pages 1-3, 5-8)." },
        { name: "Download Split Files", text: "Click 'Split PDF' and download each separate PDF file." },
      ],
      totalTime: "PT30S",
    },
    rating: { ratingValue: "4.7", reviewCount: "8900", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "split",
  },

  // ════════════════════════════════════════════════════════
  // 25. EXTRACT TEXT FROM PDF
  // ════════════════════════════════════════════════════════
  "extract-text-from-pdf": {
    slug: "extract-text-from-pdf",
    seo: {
      title: "Extract Text from PDF – Free Online OCR | FreePDFConvert",
      description: "Extract text from PDF free online. Copy all text content from any PDF file instantly. Works on scanned PDFs too. No signup, no software needed.",
      h1: "Extract Text from PDF",
      subtitle: "Extract all text content from your PDF instantly. Free online tool – fast & accurate.",
      keywords: "extract text from pdf, pdf text extractor, copy text from pdf, pdf to text online free, ocr pdf",
      schema_name: "PDF Text Extractor",
      og_title: "Free PDF Text Extractor – Extract All PDF Content",
      og_description: "Extract text from any PDF online free. Works on scanned PDFs with OCR. No signup required.",
      twitter_title: "Extract Text from PDF – Free Online Tool",
      twitter_description: "Extract all text from PDF online free. OCR for scanned PDFs. No signup.",
    },
    faq: [
      { q: "How do I extract text from a PDF for free?", a: "Upload your PDF on FreePDFConvert and download your text file with all extracted content instantly. No signup required." },
      { q: "Does it work on scanned PDF documents?", a: "Yes, our OCR technology can extract text from scanned PDFs and image-based PDF files." },
      { q: "How accurate is the text extraction?", a: "For digital PDFs, accuracy is nearly 100%. For scanned PDFs, accuracy depends on scan quality and font clarity." },
      { q: "What languages are supported for OCR extraction?", a: "Our tool primarily supports English text extraction. Other Latin-alphabet languages also work well." },
    ],
    howTo: {
      name: "How to Extract Text from PDF",
      steps: [
        { name: "Upload PDF", text: "Click 'Select PDF File' or drag your PDF onto the extractor." },
        { name: "Extract Text", text: "Our tool automatically extracts all text from every page of the PDF." },
        { name: "Download Text File", text: "Click 'Download Text File' to save all extracted content." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.7", reviewCount: "6800", bestRating: "5" },
    acceptedFiles: ".pdf,application/pdf",
    toolType: "standard",
  },

  // ════════════════════════════════════════════════════════
  // 26. EXTRACT TEXT FROM IMAGE
  // ════════════════════════════════════════════════════════
  "extract-text-from-image": {
    slug: "extract-text-from-image",
    seo: {
      title: "Extract Text from Image – Free OCR Tool Online | FreePDFConvert",
      description: "Extract text from images free online. Use OCR to convert JPG, PNG images to text instantly. No signup required. Fast & accurate image to text conversion.",
      h1: "Extract Text from Image",
      subtitle: "Extract text from any image using OCR technology. Free online image to text converter.",
      keywords: "extract text from image, image to text, ocr online free, jpg to text, png to text, image text extractor",
      schema_name: "Image Text Extractor",
      og_title: "Free OCR – Extract Text from Images Online",
      og_description: "Extract text from JPG, PNG images using OCR online free. Accurate image to text conversion. No signup.",
      twitter_title: "Extract Text from Image – Free OCR Tool",
      twitter_description: "Convert image text to editable text online free. OCR for JPG, PNG. No signup.",
    },
    faq: [
      { q: "How do I extract text from an image for free?", a: "Upload your JPG or PNG image on FreePDFConvert and download the extracted text instantly. Our OCR engine reads all visible text." },
      { q: "What image formats are supported for OCR?", a: "We support JPG, JPEG, PNG and WebP image formats for text extraction." },
      { q: "How accurate is the OCR text extraction?", a: "Accuracy depends on image quality. Clear, high-resolution images with good contrast give the best results. We recommend at least 300 DPI." },
      { q: "Can it extract text from screenshots?", a: "Yes, screenshots work very well for OCR text extraction as they typically have high clarity and contrast." },
    ],
    howTo: {
      name: "How to Extract Text from an Image",
      steps: [
        { name: "Upload Image", text: "Click 'Select Image' or drag your JPG/PNG image onto the converter." },
        { name: "OCR Processing", text: "Our OCR engine scans the image and extracts all readable text." },
        { name: "Download Text", text: "Click 'Download Text File' to save the extracted content." },
      ],
      totalTime: "PT20S",
    },
    rating: { ratingValue: "4.6", reviewCount: "5400", bestRating: "5" },
    acceptedFiles: "image/jpeg,image/jpg,image/png,image/webp",
    toolType: "standard",
  },

};

// ── Helpers ──────────────────────────────────────────────────
export const getToolConfig = (slug) => TOOLS_CONFIG[slug] || null;
export const VALID_SLUGS = Object.keys(TOOLS_CONFIG);

// ── Schema Generator — use in each page ──────────────────────
export const generateSchemas = (config, baseUrl = "https://freepdfconvert.io") => {
  const { slug, seo, faq, howTo, rating } = config;
  const url = `${baseUrl}/${slug}`;

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: seo.schema_name,
    url,
    description: seo.description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, macOS, Android, iOS, Linux",
    inLanguage: "en",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      bestRating: rating.bestRating,
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    totalTime: howTo.totalTime,
    tool: { "@type": "HowToTool", name: seo.schema_name },
    step: howTo.steps.map(({ name, text }, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name,
      text,
      url: `${url}#step-${i + 1}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: seo.schema_name, item: url },
    ],
  };

  return { softwareSchema, faqSchema, howToSchema, breadcrumbSchema };
};