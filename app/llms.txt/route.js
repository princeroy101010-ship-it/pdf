// ============================================================
// ✅ LLMs.txt ROUTE — app/llms.txt/route.js
//
// File path: app/llms.txt/route.js
// Output:    https://freepdfconvert.io/llms.txt
//
// SEMRUSH ERROR FIXED:
//   ✅ "LLMs.txt not found" — 1 new issue
//
// WHY llms.txt MATTERS (2025-2026):
//   AI tools (ChatGPT, Claude, Perplexity, Gemini) use this file
//   to understand your site when answering user questions.
//   It's like robots.txt — but for AI language models.
//   Early adoption = competitive advantage in AI search results.
// ============================================================

export async function GET() {
  const content = `# FreePDFConvert

> Free online PDF converter — convert PDF to Word, Excel, JPG, PowerPoint, and more. No installation required. 100% free. Fast and secure.

FreePDFConvert offers 25+ free PDF tools accessible directly in your browser. All conversions happen online — no software download needed.

## Core PDF Conversion Tools

- [PDF to Word](https://freepdfconvert.io/pdf-to-word): Convert PDF files to editable Word (.docx) documents
- [Word to PDF](https://freepdfconvert.io/word-to-pdf): Convert Word documents to PDF format
- [PDF to Excel](https://freepdfconvert.io/pdf-to-excel): Convert PDF tables to Excel spreadsheets (.xlsx)
- [Excel to PDF](https://freepdfconvert.io/excel-to-pdf): Convert Excel files to PDF
- [PDF to JPG](https://freepdfconvert.io/pdf-to-jpg): Convert PDF pages to JPG images
- [JPG to PDF](https://freepdfconvert.io/jpg-to-pdf): Convert JPG images to PDF
- [PDF to PNG](https://freepdfconvert.io/pdf-to-png): Convert PDF pages to PNG images
- [PNG to PDF](https://freepdfconvert.io/png-to-pdf): Convert PNG images to PDF

## PDF Management Tools

- [Merge PDF](https://freepdfconvert.io/merge-pdf): Combine multiple PDF files into one
- [Split PDF](https://freepdfconvert.io/split-pdf): Split a PDF into separate pages or sections
- [Compress PDF](https://freepdfconvert.io/compress-pdf): Reduce PDF file size while maintaining quality
- [Protect PDF](https://freepdfconvert.io/protect-pdf): Add password protection to a PDF
- [Unlock PDF](https://freepdfconvert.io/unlock-pdf): Remove password from a PDF

## Presentation & HTML Conversion

- [PDF to PowerPoint](https://freepdfconvert.io/pdf-to-pptx): Convert PDF to editable PPTX presentation
- [PowerPoint to PDF](https://freepdfconvert.io/pptx-to-pdf): Convert PPTX presentations to PDF
- [HTML to PDF](https://freepdfconvert.io/html-to-pdf): Convert HTML web pages to PDF
- [PDF to HTML](https://freepdfconvert.io/pdf-to-html): Convert PDF files to HTML format

## Text Conversion Tools

- [PDF to Text](https://freepdfconvert.io/pdf-to-text): Extract plain text from PDF files
- [Text to PDF](https://freepdfconvert.io/text-to-pdf): Convert plain text to PDF
- [Text to Word](https://freepdfconvert.io/text-to-word): Convert text files to Word documents
- [Word to Text](https://freepdfconvert.io/word-to-text): Extract plain text from Word documents
- [Text to PowerPoint](https://freepdfconvert.io/text-to-pptx): Convert text to PowerPoint presentation
- [PowerPoint to Text](https://freepdfconvert.io/pptx-to-text): Extract text from PowerPoint files

## OCR & Image Tools

- [Extract Text from PDF](https://freepdfconvert.io/extract-text-from-pdf): OCR — extract text from scanned PDF
- [Extract Text from Image](https://freepdfconvert.io/extract-text-from-image): OCR — extract text from images
- [Image to PDF](https://freepdfconvert.io/image-to-pdf): Convert any image format to PDF

## Optional

- [Sitemap](https://freepdfconvert.io/sitemap.xml)
- [Homepage](https://freepdfconvert.io)
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      // ✅ Cache for 24 hours — update when you add new tools
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
    },
  });
}