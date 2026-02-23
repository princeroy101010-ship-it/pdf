import React from 'react'
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Play, ShieldCheck, Zap } from 'lucide-react';

const AboutUs = () => (
  <>
    <Header />
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-rose-600 font-black tracking-widest uppercase text-sm">Our Mission</span>
          <h1 className="text-5xl font-black text-gray-900 mt-4 mb-8">
            We make PDF management <br/>
            <span className="text-rose-600 underline decoration-rose-200 underline-offset-8">effortless.</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-medium">
            VIP-PDF was born in 2026 with a simple goal: To provide professional-grade document tools to everyone, for free, without compromising security.
          </p>
        </div>

        {/* Video & Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* Video Player Section */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-100/50 rounded-[3.5rem] blur-2xl group-hover:bg-rose-200/50 transition-all duration-500"></div>
            <div className="relative bg-gray-900 rounded-[3rem] aspect-video overflow-hidden shadow-2xl border-8 border-white">
              {/* Replace 'your-video-url.mp4' with your actual video link */}
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover opacity-80"
              >
                <source src="/about-preview.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay Play Button (Decorative) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-5 rounded-full text-white border border-white/30">
                  <Play fill="currentColor" size={32} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <ShieldCheck size={28} strokeWidth={2.5} />
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">Security First</h2>
              </div>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                Every file processed on our platform is encrypted and automatically deleted within 2 hours. Your privacy isn't just a feature—it's our foundation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-rose-600">
                <Zap size={28} strokeWidth={2.5} />
                <h2 className="text-3xl font-black text-gray-800 tracking-tight">Speed & Quality</h2>
              </div>
              <p className="text-gray-500 font-medium text-lg leading-relaxed">
                We use high-end server architecture to ensure your documents are processed in seconds with pixel-perfect accuracy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default AboutUs;