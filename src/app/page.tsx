import React from 'react';
import { scrapeDeveloperData } from '@/services/scraper';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import FeaturedGames from '@/components/FeaturedGames';
import AllGamesGrid from '@/components/AllGamesGrid';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const { developer, apps } = await scrapeDeveloperData();

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary selection:text-white">
      <Navbar />
      
      {apps.length > 0 ? (
        <>
          <Hero devName={developer.name} />
          <AllGamesGrid apps={apps} />
          <About devName={developer.name} description={developer.description || ''} />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[60vh] text-center px-6">
          <div>
            <h1 className="section-title mb-4">Under Maintenance</h1>
            <p className="text-slate-500 text-xl">We're updating our collection. Please check back in a few minutes.</p>
          </div>
        </div>
      )}
      
      <Footer />
    </main>
  );
}
