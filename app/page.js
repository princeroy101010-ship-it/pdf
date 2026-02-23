
// import React from 'react';
// import { 
//   FileSpreadsheet, 
//   FileText, 
//   Files, 
//   Image as ImageIcon, 
//   Lock, 
//   Unlock, 
//   FileUp,
//   FileCheck,
//   Github,
//   Twitter,
//   LifeBuoy,
//   Zap
// } from 'lucide-react';
// import Footer from '@/components/footer';
// import Header from '@/components/header';

// const ToolCard = ({ icon: Icon, title, desc, color, bgColor, slug }) => (
//   /* Yahan slug use kiya hai taake click karne par URL change ho */
//   <a href={`/${slug}`} className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden block">
//     {/* Background Decorative Element */}
//     <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ${bgColor}`}></div>
    
//     <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${bgColor} ${color}`}>
//       <Icon size={28} />
//     </div>
    
//     <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
//       {title}
//     </h3>
//     <p className="text-gray-500 text-sm leading-relaxed">
//       {desc}
//     </p>
//   </a>
// );

// const VIPConverter = () => {
//   const tools = [
//     {
//       title: "PDF to Excel",
//       slug: "pdf-to-excel",
//       desc: "Extract tables from PDF to Microsoft Excel spreadsheets easily.",
//       icon: FileSpreadsheet,
//       color: "text-green-600",
//       bgColor: "bg-green-50"
//     },
//     {
//       title: "Excel to PDF",
//       slug: "excel-to-pdf",
//       desc: "Convert your Excel sheets into high-quality PDF documents.",
//       icon: FileCheck,
//       color: "text-emerald-600",
//       bgColor: "bg-emerald-50"
//     },
//     {
//       title: "Word to PDF",
//       slug: "word-to-pdf",
//       desc: "The best way to convert Word to PDF while keeping formatting.",
//       icon: FileText,
//       color: "text-blue-600",
//       bgColor: "bg-blue-50"
//     },
//     {
//   title: "PDF to PowerPoint",
//   slug: "pdf-to-pptx",
//   desc: "Convert your PDF presentations to editable PowerPoint PPTX slides.",
//   icon: FileUp, // Aap yahan koi bhi icon use kar sakte hain
//   color: "text-orange-600",
//   bgColor: "bg-orange-50"
// },
// {
//   title: "Compress PDF",
//   slug: "compress-pdf",
//   desc: "Reduce the file size of your PDF while optimizing for maximal quality.",
//   icon: Zap, // Zap icon compression/speed ko show karta hai
//   color: "text-blue-700",
//   bgColor: "bg-blue-50"
// },
// {
//   title: "HTML to PDF",
//   slug: "html-to-pdf",
//   desc: "Convert web pages or HTML files into high-quality PDF documents.",
//   icon: FileUp,
//   color: "text-cyan-600",
//   bgColor: "bg-cyan-50"
// },
// {
//   title: "TXT to PDF",
//   slug: "txt-to-pdf",
//   desc: "Convert plain text files into professional PDF documents instantly.",
//   icon: FileUp,
//   color: "text-slate-600",
//   bgColor: "bg-slate-50"
// },
// {
//   title: "PDF to TXT",
//   slug: "pdf-to-txt",
//   desc: "Extract all text content from your PDF into a simple TXT file.",
//   icon: FileText,
//   color: "text-yellow-700",
//   bgColor: "bg-yellow-50"
// },
// {
//   title: "TXT to Word",
//   slug: "txt-to-word",
//   desc: "Transform your plain text documents into editable Word files.",
//   icon: FileText,
//   color: "text-indigo-600",
//   bgColor: "bg-indigo-50"
// },
// {
//   title: "Word to TXT",
//   slug: "word-to-txt",
//   desc: "Convert Microsoft Word documents back to simple, clean text.",
//   icon: FileText,
//   color: "text-blue-500",
//   bgColor: "bg-blue-50"
// },
// {
//   title: "PowerPoint to TXT",
//   slug: "pptx-to-txt",
//   desc: "Extract speaker notes and slide text into a clean text document.",
//   icon: FileText,
//   color: "text-orange-600",
//   bgColor: "bg-orange-50"
// },
// {
//   title: "TXT to PowerPoint",
//   slug: "txt-to-pptx",
//   desc: "Create a basic PowerPoint presentation directly from your text files.",
//   icon: FileUp,
//   color: "text-red-700",
//   bgColor: "bg-red-50"
// },
// {
//   title: "PDF to HTML",
//   slug: "pdf-to-html",
//   desc: "Transform your PDF content into editable HTML code for websites.",
//   icon: FileText,
//   color: "text-purple-600",
//   bgColor: "bg-purple-50"
// },
// {
//   title: "PDF to Word",
//   slug: "pdf-to-word",
//   desc: "Convert PDF documents to editable Microsoft Word files with high accuracy.",
//   icon: FileText,
//   color: "text-blue-700",
//   bgColor: "bg-blue-50"
// },
// {
//   title: "PowerPoint to PDF",
//   slug: "pptx-to-pdf",
//   desc: "Turn your PowerPoint presentations into easy-to-view PDF documents.",
//   icon: FileUp,
//   color: "text-orange-700",
//   bgColor: "bg-orange-50"
// },
// {
//   title: "PDF to PNG",
//   slug: "pdf-to-png",
//   desc: "Convert each PDF page into a high-quality PNG image file.",
//   icon: ImageIcon,
//   color: "text-rose-500",
//   bgColor: "bg-rose-50"
// },
// {
//   title: "PNG to PDF",
//   slug: "png-to-pdf",
//   desc: "Combine or convert PNG images into a professional PDF document.",
//   icon: FileCheck,
//   color: "text-teal-600",
//   bgColor: "bg-teal-50"
// },
//     {
//       title: "Merge PDF",
//       slug: "merge-pdf",
//       desc: "Combine multiple PDF files into one single organized document.",
//       icon: Files,
//       color: "text-rose-600",
//       bgColor: "bg-rose-50"
//     },
//     {
//       title: "JPG to PDF",
//       slug: "jpg-to-pdf",
//       desc: "Convert images to PDF with adjustable orientation and margins.",
//       icon: ImageIcon,
//       color: "text-amber-600",
//       bgColor: "bg-amber-50"
//     },
//     {
//       title: "PDF to JPG",
//       slug: "pdf-to-jpg",
//       desc: "Extract all images inside a PDF or convert pages to JPG images.",
//       icon: FileUp,
//       color: "text-pink-600",
//       bgColor: "bg-pink-50"
//     },
//     {
//       title: "Unlock PDF",
//       slug: "unlock-pdf",
//       desc: "Remove passwords and security from protected PDF files.",
//       icon: Unlock,
//       color: "text-gray-700",
//       bgColor: "bg-gray-100"
//     },
//     {
//       title: "Protect PDF",
//       slug: "protect-pdf",
//       desc: "Encrypt your PDF with a password to prevent unauthorized access.",
//       icon: Lock,
//       color: "text-indigo-600",
//       bgColor: "bg-indigo-50"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#f8f9fa]">
//       {/* Navbar */}
//     <Header/>

//       {/* Hero Section */}
//       <header className="max-w-4xl mx-auto text-center py-20 px-4">
//         <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
//           Every tool you need to <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">work with PDFs</span>
//         </h1>
//         <p className="text-xl text-gray-500 font-medium">
//           Powerful, easy to use, and 100% secure. Convert, merge, and edit files in seconds.
//         </p>
//       </header>

//       {/* Main Grid */}
//       <main className="max-w-7xl mx-auto px-6 pb-24">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {tools.map((tool, index) => (
//             <ToolCard key={index} {...tool} />
//           ))}
//         </div>
//       </main>

//     <Footer />
//     </div>
//   );
// };

// export default VIPConverter;


import React from 'react';
import Link from 'next/link'; // Next.js Link for better performance
import { 
  FileSpreadsheet, FileText, Files, Image as ImageIcon, 
  Lock, Unlock, FileUp, FileCheck, Zap 
} from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';

// ToolCard optimized with 'title' and 'aria-label'
const ToolCard = ({ icon: Icon, title, desc, color, bgColor, slug }) => (
  <Link 
    href={`/${slug}`} 
    title={title}
    aria-label={`Use tool: ${title}`}
    className="group relative bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden block"
  >
    <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500 ${bgColor}`}></div>
    
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${bgColor} ${color}`}>
      <Icon size={28} aria-hidden="true" />
    </div>
    
    <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
      {title}
    </h2>
    <p className="text-gray-500 text-sm leading-relaxed">
      {desc}
    </p>
  </Link>
);

const VIPConverter = () => {
  const tools = [
    { title: "PDF to Excel", slug: "pdf-to-excel", desc: "Extract tables from PDF to Microsoft Excel spreadsheets easily.", icon: FileSpreadsheet, color: "text-green-600", bgColor: "bg-green-50" },
    { title: "Excel to PDF", slug: "excel-to-pdf", desc: "Convert your Excel sheets into high-quality PDF documents.", icon: FileCheck, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { title: "Word to PDF", slug: "word-to-pdf", desc: "The best way to convert Word to PDF while keeping formatting.", icon: FileText, color: "text-blue-600", bgColor: "bg-blue-50" },
    { title: "PDF to PowerPoint", slug: "pdf-to-pptx", desc: "Convert your PDF presentations to editable PowerPoint PPTX slides.", icon: FileUp, color: "text-orange-600", bgColor: "bg-orange-50" },
    { title: "Compress PDF", slug: "compress-pdf", desc: "Reduce the file size of your PDF while optimizing for maximal quality.", icon: Zap, color: "text-blue-700", bgColor: "bg-blue-50" },
    { title: "HTML to PDF", slug: "html-to-pdf", desc: "Convert web pages or HTML files into high-quality PDF documents.", icon: FileUp, color: "text-cyan-600", bgColor: "bg-cyan-50" },
    { title: "TXT to PDF", slug: "txt-to-pdf", desc: "Convert plain text files into professional PDF documents instantly.", icon: FileUp, color: "text-slate-600", bgColor: "bg-slate-50" },
    { title: "PDF to TXT", slug: "pdf-to-txt", desc: "Extract all text content from your PDF into a simple TXT file.", icon: FileText, color: "text-yellow-700", bgColor: "bg-yellow-50" },
    { title: "TXT to Word", slug: "txt-to-word", desc: "Transform your plain text documents into editable Word files.", icon: FileText, color: "text-indigo-600", bgColor: "bg-indigo-50" },
    { title: "Word to TXT", slug: "word-to-txt", desc: "Convert Microsoft Word documents back to simple, clean text.", icon: FileText, color: "text-blue-500", bgColor: "bg-blue-50" },
    { title: "PowerPoint to TXT", slug: "pptx-to-txt", desc: "Extract speaker notes and slide text into a clean text document.", icon: FileText, color: "text-orange-600", bgColor: "bg-orange-50" },
    { title: "TXT to PowerPoint", slug: "txt-to-pptx", desc: "Create a basic PowerPoint presentation directly from your text files.", icon: FileUp, color: "text-red-700", bgColor: "bg-red-50" },
    { title: "PDF to HTML", slug: "pdf-to-html", desc: "Transform your PDF content into editable HTML code for websites.", icon: FileText, color: "text-purple-600", bgColor: "bg-purple-50" },
    { title: "PDF to Word", slug: "pdf-to-word", desc: "Convert PDF documents to editable Microsoft Word files.", icon: FileText, color: "text-blue-700", bgColor: "bg-blue-50" },
    { title: "PowerPoint to PDF", slug: "pptx-to-pdf", desc: "Turn your PowerPoint presentations into PDF documents.", icon: FileUp, color: "text-orange-700", bgColor: "bg-orange-50" },
    { title: "PDF to PNG", slug: "pdf-to-png", desc: "Convert each PDF page into a high-quality PNG image file.", icon: ImageIcon, color: "text-rose-500", bgColor: "bg-rose-50" },
    { title: "PNG to PDF", slug: "png-to-pdf", desc: "Combine or convert PNG images into a professional PDF document.", icon: FileCheck, color: "text-teal-600", bgColor: "bg-teal-50" },
    { title: "Merge PDF", slug: "merge-pdf", desc: "Combine multiple PDF files into one single organized document.", icon: Files, color: "text-rose-600", bgColor: "bg-rose-50" },
    { title: "JPG to PDF", slug: "jpg-to-pdf", desc: "Convert images to PDF with adjustable orientation and margins.", icon: ImageIcon, color: "text-amber-600", bgColor: "bg-amber-50" },
    { title: "PDF to JPG", slug: "pdf-to-jpg", desc: "Extract images inside a PDF or convert pages to JPG images.", icon: FileUp, color: "text-pink-600", bgColor: "bg-pink-50" },
    { title: "Unlock PDF", slug: "unlock-pdf", desc: "Remove passwords and security from protected PDF files.", icon: Unlock, color: "text-gray-700", bgColor: "bg-gray-100" },
    { title: "Protect PDF", slug: "protect-pdf", desc: "Encrypt your PDF with a password to prevent unauthorized access.", icon: Lock, color: "text-indigo-600", bgColor: "bg-indigo-50" }
  ];

  // --- GOOGLE RICH SNIPPET FOR LISTING ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": tools.slice(0, 10).map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "url": `https://yourdomain.com/${tool.slug}`
    }))
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header/>

      {/* Hero Section with Semantic H1 */}
      <header className="max-w-4xl mx-auto text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Every tool you need to <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">work with PDFs</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium">
          Powerful, easy to use, and 100% secure. Convert, merge, and edit PDF files in seconds.
        </p>
      </header>

      {/* Main Grid with ARIA Landmark */}
      <main className="max-w-7xl mx-auto px-6 pb-24" role="main">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VIPConverter;