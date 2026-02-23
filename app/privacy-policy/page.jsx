import React from 'react';
import { ShieldCheck, Lock, Trash2, EyeOff, Files, ArrowLeft } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

const PolicySection = ({ icon: Icon, title, children }) => (
  <div className="mb-12 group">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-rose-50 p-3 rounded-xl text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-gray-800 tracking-tight">{title}</h2>
    </div>
    <div className="pl-14 text-gray-500 font-medium leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => {
  return (
   <>
   
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
<Header/>     
 <header className="bg-white  py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-rose-600 font-black tracking-widest uppercase text-sm mb-4 block">Last Updated: Feb 2026</span>
          <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Privacy <span className="text-rose-600">Policy</span></h1>
          <p className="text-xl text-gray-400 font-medium">Your trust is our most valuable asset. Here is how we protect your data.</p>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
        {/* Intro Card */}
        <div className="bg-rose-600 rounded-[2.5rem] p-10 mb-16 text-white shadow-xl shadow-rose-100 relative overflow-hidden">
          <Files className="absolute -right-10 -bottom-10 w-64 h-64 opacity-10 rotate-12" />
          <h2 className="text-3xl font-black mb-4 relative z-10">Our Privacy Promise</h2>
          <p className="text-rose-100 text-lg font-medium relative z-10 leading-relaxed">
            VIP-PDF does not store your files. We do not read your content. We do not sell your data. 
            All processing is automated and files are deleted permanently within 2 hours.
          </p>
        </div>

        {/* Detailed Sections */}
        <PolicySection icon={Lock} title="Data Encryption">
          <p>Every file you upload is transmitted via <strong>SSL/TLS (Secure Sockets Layer)</strong> encryption. This ensures that no one can intercept your data while it travels from your device to our servers.</p>
          <p>Once on our servers, files are processed in a secure environment where even our developers cannot access them manually.</p>
        </PolicySection>

        <PolicySection icon={Trash2} title="Automatic File Deletion">
          <p>We believe in "Data Minimization". Your files are kept on our temporary servers for a maximum of <strong>2 hours</strong> to give you enough time to download them.</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Files are automatically purged by our system.</li>
            <li>Once deleted, files cannot be recovered.</li>
            <li>We do not keep any hidden backups of your documents.</li>
          </ul>
        </PolicySection>

        <PolicySection icon={EyeOff} title="No Content Inspection">
          <p>Our tools are 100% automated. No human being at VIP-PDF reads, views, or analyzes the content of the documents you process. Whether it's a bank statement or a personal letter, your content remains private.</p>
        </PolicySection>

        <PolicySection icon={ShieldCheck} title="Third-Party Sharing">
          <p>We <strong>never</strong> sell, trade, or rent your personal information or documents to third parties. We are not in the business of data harvesting; we are in the business of PDF tools.</p>
        </PolicySection>

        {/* Contact Note */}
        <div className="mt-20 p-8 bg-white border border-gray-100 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Have questions about your privacy?</h3>
          <p className="text-gray-400 font-medium mb-6">Contact our security team anytime.</p>
          <Link href={'contact-us'}>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-black hover:bg-rose-600 transition-all active:scale-95">
            EMAIL SECURITY TEAM
          </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
   
   </>
  );
};

export default PrivacyPolicy;