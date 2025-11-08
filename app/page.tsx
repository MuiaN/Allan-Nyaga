'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import FeaturedPackages from '@/components/sections/FeaturedPackages';
import BookingCTA from '@/components/sections/BookingCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <FeaturedPackages />
      <BookingCTA />
      <Footer />
    </main>
  );
}
