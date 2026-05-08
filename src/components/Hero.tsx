"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Download, ChevronRight } from "lucide-react";

const Hero = ({ devName }: { devName: string }) => {
  return (
    <section
      id="home"
      className="relative min-h-[75vh] flex items-center justify-center pt-4 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white opacity-100" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="section-title mb-4 text-slate-900 leading-[0.9]">
            The Ultimate <br />
            <span className="text-gradient leading-tight">{devName}</span>{" "}
            <br />
            Experience
          </h1>
          <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl mb-10 leading-relaxed">
            Crafting high-fidelity mobile experiences that push the boundaries
            of performance and immersion. We build the future of mobile gaming.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#games"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 px-8 py-4 bg-slate-900 text-white rounded-[20px] font-bold text-lg transition-all shadow-xl shadow-slate-200 hover:bg-primary hover:shadow-primary/20 cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>Explore Collection</span>
              <ChevronRight className="w-6 h-6 opacity-50 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://play.google.com/store/apps/developer?id=Night+Rangers+Arena"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-4 px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-[20px] font-bold text-lg transition-all hover:border-slate-200 hover:bg-slate-50 cursor-pointer shadow-sm hover:shadow-md"
            >
              <Download className="w-5 h-5" />
              <span>Google Play Profile</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Hero;
