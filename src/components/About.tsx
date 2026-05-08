"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Play } from 'lucide-react';

const About = ({ devName, description }: { devName: string, description: string }) => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white border-y border-slate-100">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
              Behind the <br />
              <span className="text-gradient">Arena Walls</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At {devName}, we are dedicated to redefining the mobile gaming landscape. Our studio combines cutting-edge technology with creative storytelling to deliver unparalleled digital experiences.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Our team is committed to pushing the boundaries of what's possible on mobile devices. We believe in creating games that aren't just played, but remembered.
            </p>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Globe, label: 'Privacy Policy', href: 'https://night-rangers-pp.netlify.app/' },
                { icon: Mail, label: 'Contact', href: 'mailto:aliahmad0262626@gmail.com' },
                { icon: Play, label: 'Play Store', href: 'https://play.google.com/store/apps/developer?id=Night+Rangers+Arena' },
              ].map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-primary/10 hover:border-primary/30 transition-all group"
                >
                  <link.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="aspect-square rounded-[40px] overflow-hidden relative bg-[#0a0a0a] shadow-2xl border border-slate-100">
               <motion.img 
                  src="/companyIcon.png" 
                  alt="Night Rangers Arena Logo" 
                  className="w-full h-full object-cover"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
               />
               <div className="absolute bottom-12 text-sm font-bold tracking-[0.5em] text-slate-300 z-0 opacity-20">STUDIOS</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
