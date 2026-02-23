import React from 'react';
import { Files, Facebook, Twitter, Instagram, Linkedin, Mail, Globe } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white  pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href='/' className="flex items-center gap-2 mb-6">
              <div className="bg-rose-600 p-1.5 rounded-lg">
                <Files className="text-white" size={20} />
              </div>
              <span className="text-xl font-black text-gray-800 tracking-tight">
                VIP<span className="text-rose-600">PDF</span>
              </span>
            </Link>
            <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
              The world's most premium and secure PDF toolkit. We make document management effortless, fast, and completely free for everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Solutions</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href={'merge-pdf'} className="hover:text-rose-600 transition">Merge PDF</Link></li>
              <li><Link href={'pdf-to-word'} className="hover:text-rose-600 transition">PDF to Word</Link></li>
              <li><Link href={'compress-pdf'} className="hover:text-rose-600 transition">Compress PDF</Link></li>
              <li><Link href={"excel-to-pdf"} className="hover:text-rose-600 transition">PDF Converter</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href={'about-us'} className="hover:text-rose-600 transition">Our Story</Link></li>
              <li><Link href={"how-work"} className="hover:text-rose-600 transition">How it Works</Link></li>
              <li><Link href={"contact-us"} className="hover:text-rose-600 transition">Contact Us</Link></li>
              <li><Link href={"features"} className="hover:text-rose-600 transition">Why Choose Us</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-gray-500">
              <li><Link href={"privacy-policy"} className="hover:text-rose-600 transition">Privacy Policy</Link></li>
              <li><Link href={"terms-of-service"} className="hover:text-rose-600 transition">Terms of Service</Link></li>
              <li><Link href={"cookie-policy"} className="hover:text-rose-600 transition">Cookie Policy</Link></li>
              <li><Link href={"security"} className="hover:text-rose-600 transition">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8  flex flex-col md:row-span-1 md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 VIP-PDF Tool. Built with ❤️ for a better web.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium cursor-pointer hover:text-rose-600 transition">
              <Globe size={16} />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm font-medium cursor-pointer hover:text-rose-600 transition">
              <Mail size={16} />
              <span>support@vippdf.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;