"use client";

import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { AppGame } from '@/types';
import GameCard from './GameCard';

interface AllGamesGridProps {
  apps: AppGame[];
}

const AllGamesGrid = ({ apps }: AllGamesGridProps) => {
  const [search, setSearch] = useState('');
  const [minRating, setMinRating] = useState(0);

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(search.toLowerCase());
      const matchesRating = parseFloat(app.rating) >= minRating;
      return matchesSearch && matchesRating;
    });
  }, [apps, search, minRating]);

  return (
    <section id="games" className="py-20 bg-slate-100/80 relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="section-title mb-6 text-slate-900">
              All <span className="text-gradient">Games</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-lg">
              Explore our diverse collection of high-fidelity mobile experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <input 
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-11 pr-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all w-full sm:w-64"
              />
            </div>

            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-3">
              <StarRatingFilter current={minRating} onChange={setMinRating} />
            </div>
          </div>
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map((app) => (
              <GameCard key={app.id} game={app} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 glass-card rounded-3xl">
            <SlidersHorizontal className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-400">No games found matching your filters.</h3>
            <button 
              onClick={() => { setSearch(''); setMinRating(0); }}
              className="mt-4 text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const StarRatingFilter = ({ current, onChange }: { current: number, onChange: (val: number) => void }) => {
  return (
    <div className="flex items-center gap-1">
      <span className="text-xs font-bold text-gray-500 mr-2">MIN RATING:</span>
      {[4, 4.5, 4.7].map((val) => (
        <button
          key={val}
          onClick={() => onChange(current === val ? 0 : val)}
          className={cn(
            "px-3 py-1 rounded-lg text-xs font-black transition-all",
            current === val 
              ? "bg-primary text-white" 
              : "bg-white/5 text-gray-400 hover:bg-white/10"
          )}
        >
          {val}+
        </button>
      ))}
    </div>
  );
};

import { cn } from '@/lib/utils';

export default AllGamesGrid;
