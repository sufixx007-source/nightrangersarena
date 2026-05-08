"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ExternalLink, Play } from 'lucide-react';
import { AppGame } from '@/types';
import { cn, truncateText } from '@/lib/utils';

interface GameCardProps {
  game: AppGame;
  isFeatured?: boolean;
}

const GameCard = ({ game, isFeatured }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[32px] overflow-hidden group h-full flex flex-col bg-white"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* Background Image (Screenshot or Placeholder) */}
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
            {game.screenshots && game.screenshots.length > 0 ? (
                <img 
                    src={game.screenshots[0]} 
                    alt={game.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out" 
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
                  <Play className="w-12 h-12 text-slate-300 group-hover:text-primary/30 transition-all duration-500" />
                </div>
            )}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        
        {/* Featured Badge */}
        {isFeatured && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase rounded-full tracking-widest shadow-sm">
            Featured
          </div>
        )}
      </div>

      <div className="p-8 flex items-start gap-5">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500">
            {game.icon ? (
              <img src={game.icon} alt={game.name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-50">
                <Play className="w-6 h-6 text-slate-300" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-grow min-w-0">
          <h3 className="font-bold text-xl text-slate-900 group-hover:text-primary transition-colors truncate mb-1">
            {game.name}
          </h3>
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
             {game.category || 'Mobile Game'}
          </p>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
            {truncateText(game.description, 100)}
          </p>
          
          <a 
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white hover:bg-primary rounded-2xl text-xs font-bold transition-all shadow-md hover:shadow-lg"
          >
            Get it <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
