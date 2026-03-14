
import { TOOLS_CONFIG, generateSchemas } from '@/lib/toolsConfig';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

// ── SEO Metadata ─────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];
  if (!config) return {};
  const { seo } = config;
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `https://freepdfconvert.io/${slug}` },
    openGraph: {
      title: seo.og_title || seo.title,
      description: seo.og_description || seo.description,
      url: `https://freepdfconvert.io/${slug}`,
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      locale: "en_US",
      siteName: "FreePDFConvert",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.twitter_title || seo.title,
      description: seo.twitter_description || seo.description,
      images: ["/og-image.png"],
    },
    robots: "index, follow",
  };
}

// ── SSG ──────────────────────────────────────────────────────
export async function generateStaticParams() {
  return Object.keys(TOOLS_CONFIG).map((slug) => ({ slug }));
}

// ── Tool Components ──────────────────────────────────────────
const TOOL_COMPONENTS = {
  'pdf-to-word':              dynamic(() => import('@/components/tools/PdfToWord')),
  'word-to-pdf':              dynamic(() => import('@/components/tools/WordToPdf')),
  'pdf-to-excel':             dynamic(() => import('@/components/tools/PdfToExcel')),
  'excel-to-pdf':             dynamic(() => import('@/components/tools/ExcelToPdf')),
  'image-to-pdf':             dynamic(() => import('@/components/tools/ImageToPdf')),
  'pdf-to-jpg':               dynamic(() => import('@/components/tools/PdfToJpg')),
  'jpg-to-pdf':               dynamic(() => import('@/components/tools/JpgToPdf')),
  'merge-pdf':                dynamic(() => import('@/components/tools/MergePdf')),
  'compress-pdf':             dynamic(() => import('@/components/tools/CompressPdf')),
  'pdf-to-pptx':              dynamic(() => import('@/components/tools/PdfToPptx')),
  'pptx-to-pdf':              dynamic(() => import('@/components/tools/PptxToPdf')),
  'pdf-to-png':               dynamic(() => import('@/components/tools/PdfToPng')),
  'png-to-pdf':               dynamic(() => import('@/components/tools/PngToPdf')),
  'protect-pdf':              dynamic(() => import('@/components/tools/ProtectPdf')),
  'unlock-pdf':               dynamic(() => import('@/components/tools/UnlockPdf')),
  'html-to-pdf':              dynamic(() => import('@/components/tools/HtmlToPdf')),
  'text-to-pdf':              dynamic(() => import('@/components/tools/TextToPdf')),
  'pdf-to-text':              dynamic(() => import('@/components/tools/PdfToText')),
  'text-to-word':             dynamic(() => import('@/components/tools/TextToWord')),
  'word-to-text':             dynamic(() => import('@/components/tools/WordToText')),
  'pptx-to-text':             dynamic(() => import('@/components/tools/PptxToText')),
  'text-to-pptx':             dynamic(() => import('@/components/tools/TextToPptx')),
  'pdf-to-html':              dynamic(() => import('@/components/tools/PdfToHtml')),
  'split-pdf':                dynamic(() => import('@/components/tools/split-pdf')),
  'extract-text-from-pdf':    dynamic(() => import('@/components/tools/extract-text-from-pdf')),
  'extract-text-from-image':  dynamic(() => import('@/components/tools/extract-text-from-image')),
};

// ── Page ─────────────────────────────────────────────────────
const ToolSlugPage = async ({ params }) => {
  const { slug } = await params;
  const config = TOOLS_CONFIG[slug];
  if (!config) notFound();

  const ToolComponent = TOOL_COMPONENTS[slug];
  const { softwareSchema, faqSchema, howToSchema, breadcrumbSchema } = generateSchemas(config);

  return (
    <>
      {/* ✅ All 4 schemas auto-injected for every tool */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ToolComponent />
    </>
  );
};

export default ToolSlugPage;