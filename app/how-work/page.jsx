import Footer from '@/components/footer';
import Header from '@/components/header';
import { MousePointer2,ChevronRight, Settings2, DownloadCloud, Plus } from 'lucide-react';
import Link from 'next/link';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: MousePointer2,
      title: "Upload Files",
      desc: "Select the PDF or documents you want to process from your device."
    },
    {
      number: "02",
      icon: Settings2,
      title: "Configure",
      desc: "Choose compression levels or tools settings for perfect results."
    },
    {
      number: "03",
      icon: DownloadCloud,
      title: "Download",
      desc: "Your processed file is ready in seconds. Secure and high quality."
    }
  ];

  return (
       <>
        <Header/>
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            How it <span className="text-rose-600">Works?</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm">
            Professional results in 3 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              {/* Step Number Background */}
              <div className="absolute -top-10 text-[120px] font-black text-gray-200/50 -z-0 group-hover:text-rose-100 transition-colors">
                {step.number}
              </div>
              
              <div className="w-24 h-24 bg-rose-600 text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-xl shadow-rose-200 rotate-3 group-hover:rotate-6 transition-transform z-10">
                <step.icon size={40} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-2xl font-black text-gray-800 mb-4 z-10">{step.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed px-6 z-10">
                {step.desc}
              </p>

              {/* Connector Arrow (Desktop Only) */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-12 -right-6 text-gray-300">
                  <ChevronRight size={48} strokeWidth={1} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <Link href="/">
          <button  className="bg-gray-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-rose-600 transition-all shadow-2xl active:scale-95 flex items-center gap-3 mx-auto">
            <Plus size={24} /> GET STARTED NOW
          </button>
          </Link>
        </div>
      </div>
    </section>
    <Footer/>
       </>
  );
};

export default HowItWorks