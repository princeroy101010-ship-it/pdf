import React from 'react';
import { Zap, ShieldCheck, Sparkles, Smartphone, CloudOff, Target, Plus, Files } from 'lucide-react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Link from 'next/link';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
    {/* Decorative Gradient Background */}
    <div className="absolute -right-8 -top-8 w-32 h-32 bg-rose-50 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 scale-50 group-hover:scale-150"></div>
    
    <div className="w-14 h-14 md:w-16 md:h-16 bg-rose-600 text-white rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-lg shadow-rose-200 group-hover:rotate-[360deg] transition-transform duration-700 relative z-10">
      <Icon size={28} className="md:w-8 md:h-8" />
    </div>
    
    <h3 className="text-xl md:text-2xl font-black text-gray-800 mb-3 md:mb-4 relative z-10 group-hover:text-rose-600 transition-colors">{title}</h3>
    <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed relative z-10">
      {desc}
    </p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    { icon: Zap, title: "Lightning Fast", desc: "Our high-speed servers process your PDFs in seconds, not minutes. Speed is our DNA." },
    { icon: CloudOff, title: "Offline Ready", desc: "Process files directly in your browser without waiting for long server queues." },
    { icon: Sparkles, title: "AI Optimization", desc: "We use smart algorithms to compress files while maintaining 100% crystal clear quality." },
    { icon: Smartphone, title: "Mobile First", desc: "Whether you're on iPhone or Android, VIP-PDF works flawlessly on every screen size." },
    { icon: ShieldCheck, title: "Privacy First", desc: "We don't just say it, we do it. No files are stored longer than 2 hours. Ever." },
    { icon: Target, title: "High Accuracy", desc: "Convert PDFs to Word or Excel with the industry's highest formatting retention rate." }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans">
        {/* Hero Header */}
        <header className="max-w-5xl mx-auto text-center py-16 md:py-24 px-6">
          <span className="text-rose-600 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm mb-4 md:mb-6 inline-block bg-rose-50 px-4 md:px-6 py-2 rounded-full">
            The VIP Difference
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight leading-[1.1]">
            Not just another <br className="hidden md:block" />
            <span className="text-rose-600 underline decoration-rose-200 underline-offset-4 md:underline-offset-8">PDF Tool.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We combined professional-grade technology with a beautiful, simple interface to give you the best document experience on the web.
          </p>
        </header>

        {/* Features Grid */}
        <main className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 md:mt-20 bg-gray-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Background Icon - hidden on very small screens to avoid clutter */}
            <Files className="absolute -left-10 -bottom-10 w-48 h-48 md:w-64 md:h-64 opacity-10 rotate-12 text-white hidden sm:block" />
            
            <h2 className="text-2xl md:text-4xl font-black text-white mb-6 md:mb-8 relative z-10 leading-tight">
              Ready to experience <br className="md:hidden" /> the speed?
            </h2>
            
            <Link href='/'>
              <button className="w-full sm:w-auto bg-rose-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-lg md:text-xl hover:bg-rose-700 transition-all shadow-xl shadow-rose-900/20 active:scale-95 flex items-center justify-center gap-3 mx-auto relative z-10">
                <Plus size={20} className="md:w-6 md:h-6" /> START NOW
              </button>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WhyChooseUs;