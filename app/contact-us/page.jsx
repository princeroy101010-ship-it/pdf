import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Mail, MessageCircle, Twitter, Send, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value, label, link, color }) => (
  <a 
    href={link} 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
  >
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${color}`}>
      <Icon size={28} />
    </div>
    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{label}</p>
    <h3 className="text-2xl font-black text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">{title}</h3>
    <p className="text-gray-500 font-medium mb-6">{value}</p>
    <div className="flex items-center gap-2 text-rose-600 font-black text-sm uppercase tracking-wider">
      Contact Now <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
    </div>
  </a>
);

const ContactUs = () => (
  <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
    <Header />
    
    <main className="flex-1 max-w-7xl mx-auto px-6 py-20 w-full">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <span className="bg-rose-50 text-rose-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6 inline-block">
          Support Hub
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
          Let's <span className="text-rose-600 underline decoration-rose-100 underline-offset-8">Connect.</span>
        </h1>
        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
          Need help with a file? Or have a feature suggestion? Reach out to us directly on your favorite platform.
        </p>
      </div>

      {/* Main Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <ContactCard 
          label="Email Support"
          icon={Mail}
          title="Official Email"
          value="support@vip-pdf.com"
          link="mailto:support@vip-pdf.com"
          color="bg-rose-50 text-rose-600"
        />
        <ContactCard 
          label="Telegram Bot"
          icon={Send}
          title="Direct Message"
          value="@VIP_PDF_Support"
          link="https://t.me/your_telegram_link" // Apna link yahan dalein
          color="bg-sky-50 text-sky-600"
        />
        <ContactCard 
          label="Community"
          icon={Twitter}
          title="X / Twitter"
          value="Latest Updates"
          link="https://twitter.com/your_twitter_link" // Apna link yahan dalein
          color="bg-gray-900 text-white"
        />
      </div>

      {/* New Social Action Banner */}
      <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-gray-100 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Join our <span className="text-rose-600">VIP Community</span> for instant updates!
            </h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl text-sm font-bold">
                <ShieldCheck size={18} /> Secure Support
              </div>
              <div className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl text-sm font-bold">
                <Zap size={18} /> Fast Response
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Telegram Button */}
            <a 
              href="https://t.me/your_telegram_link" 
              className="flex-1 bg-[#229ED9] text-white p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-sky-100"
            >
              <Send size={32} strokeWidth={2.5} />
              <span className="font-black text-lg tracking-tight">TELEGRAM</span>
            </a>

            {/* Twitter Button */}
            <a 
              href="https://twitter.com/your_twitter_link" 
              className="flex-1 bg-gray-900 text-white p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all shadow-lg shadow-gray-200"
            >
              <Twitter size={32} strokeWidth={2.5} />
              <span className="font-black text-lg tracking-tight">TWITTER</span>
            </a>
          </div>
        </div>
        
        {/* Decorative Background Icon */}
        <Globe className="absolute -right-20 -bottom-20 w-80 h-80 text-rose-50/50 -z-0" />
      </div>
    </main>

    <Footer />
  </div>
);

export default ContactUs;