'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">Safari Adventures</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for unforgettable wildlife experiences across Kenya and Tanzania.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Safari Destinations</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Maasai Mara</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Serengeti National Park</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Amboseli National Park</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ngorongoro Crater</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Tsavo National Park</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Wildlife Safaris</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Luxury Lodges</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Airport Transfers</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Day Trips</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cultural Tours</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                <span>Westlands, Nairobi<br />Kenya, East Africa</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>+254 700 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span>info@safarikenya.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Safari Adventures Kenya. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
