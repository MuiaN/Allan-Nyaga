'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/16116697/pexels-photo-16116697.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-amber-500" />
          <span className="text-amber-500 font-medium tracking-wide uppercase text-sm">
            Nairobi, Kenya
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Discover the Magic of
          <span className="block text-amber-500 mt-2">East African Safaris</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience the breathtaking wildlife of Maasai Mara and beyond.
          Expertly crafted safari adventures across Kenya and Tanzania.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-base sm:text-lg font-semibold rounded-lg shadow-xl transition-all hover:scale-105"
            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Safari Packages
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-base sm:text-lg font-semibold rounded-lg shadow-xl transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 border border-white/20">
            <div className="text-3xl font-bold text-amber-500 mb-2">15+</div>
            <div className="text-white font-medium">Years Experience</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-amber-500 mb-2">5000+</div>
            <div className="text-white font-medium">Happy Travelers</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
            <div className="text-white font-medium">Safari Destinations</div>
          </div>
        </div>
      </div>
    </section>
  );
}
