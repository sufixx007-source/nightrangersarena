"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Download, Star, Award } from 'lucide-react';

interface StatsProps {
  totalApps: number;
  totalDownloads: string;
  avgRating: string;
}

const Stats = ({ totalApps, totalDownloads, avgRating }: StatsProps) => {
  const stats = [
    { label: 'Total Games', value: totalApps, icon: AppWindow, suffix: '+' },
    { label: 'Downloads', value: totalDownloads, icon: Download, suffix: '' },
    { label: 'Average Rating', value: avgRating, icon: Star, suffix: '/5' },
    { label: 'Awards Won', value: '12', icon: Award, suffix: '+' },
  ];

  return (
    <section id="stats" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center flex flex-col items-center group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all group-hover:scale-110 duration-300">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-4xl font-black mb-2 text-white">
                {stat.value}{stat.suffix}
              </h3>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
