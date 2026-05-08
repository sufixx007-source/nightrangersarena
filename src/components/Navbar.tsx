"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Gamepad2, Menu, X, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "glass py-4 shadow-sm" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden group-hover:glow-primary transition-all duration-300">
            <img src="/companyIcon.png" alt="Night Rangers Arena Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gradient">
            NIGHT RANGERS <span className="text-slate-900">ARENA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Games', 'About'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
          <a 
            href="https://play.google.com/store/apps/developer?id=Night+Rangers+Arena" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-semibold text-primary hover:bg-primary/20 transition-all"
          >
            Google Play <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-300">
          {['Home', 'Games', 'About'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
