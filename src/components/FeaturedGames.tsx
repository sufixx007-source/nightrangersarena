"use client";

import React from 'react';
import { AppGame } from '@/types';
import GameCard from './GameCard';

interface FeaturedGamesProps {
  apps: AppGame[];
}

const FeaturedGames = ({ apps }: FeaturedGamesProps) => {
  const featured = apps.filter(app => app.isFeatured);

  if (featured.length === 0) return null;

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            Featured <span className="text-gradient">Hits</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our most popular and highly-rated titles. Experience the best of Night Rangers Arena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((app) => (
            <GameCard key={app.id} game={app} isFeatured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
