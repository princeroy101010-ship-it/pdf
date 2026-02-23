'use client'
import React, { useState } from 'react';
import { 
  Files, 
  Github,
  Twitter,
  LifeBuoy,
  Menu,
  X
} from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-50 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href='/' className="flex items-center gap-2 cursor-pointer relative z-50">
          <div className="bg-rose-600 p-1.5 rounded-lg">
            <Files className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black text-gray-800 tracking-tight">
            VIP<span className="text-rose-600">PDF</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-600 uppercase tracking-wide">
          <a href="/merge-pdf" className="hover:text-rose-600 transition">Merge PDF</a>
          <a href="/excel-to-pdf" className="hover:text-rose-600 transition">Convert PDF</a>
          <a href="/" className="hover:text-rose-600 transition">All Tools</a>
        </div>

        {/* Desktop Socials & Support */}
        <div className="hidden md:flex items-center gap-5">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition"><Github size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition"><Twitter size={20} /></a>
          <div className="h-6 w-[1px] bg-gray-200 mx-1"></div>
          <button className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-rose-100 transition-all">
            <LifeBuoy size={18} /> Support
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors relative z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-8 space-y-8 md:hidden animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col space-y-6">
            <a href="/merge-pdf" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-gray-800 border-b pb-2">Merge PDF</a>
            <a href="/excel-to-pdf" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-gray-800 border-b pb-2">Convert PDF</a>
            <a href="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-gray-800 border-b pb-2">All Tools</a>
          </div>
          
          <div className="pt-4 space-y-6">
             <button className="w-full flex items-center justify-center gap-3 bg-rose-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-rose-100">
                <LifeBuoy size={22} /> Get Support
             </button>
             
             <div className="flex justify-center gap-8 text-gray-400 pt-4">
                <a href="#"><Github size={32} /></a>
                <a href="#"><Twitter size={32} /></a>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;