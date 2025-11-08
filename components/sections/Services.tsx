'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Compass, Hotel, Car, Sun } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Safari Adventures',
    description: 'Guided wildlife tours through Maasai Mara, Serengeti, and beyond with expert naturalists.',
    color: 'bg-emerald-100 text-emerald-700',
    image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Hotel,
    title: 'Luxury Accommodations',
    description: 'Premium lodges and tented camps offering authentic safari experiences with modern comfort.',
    color: 'bg-amber-100 text-amber-700',
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Car,
    title: 'Airport Transfers',
    description: 'Reliable pickup and drop-off services from JKIA to your destination across Kenya.',
    color: 'bg-orange-100 text-orange-700',
    image: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Sun,
    title: 'Day Trips & Tours',
    description: 'Explore Nairobi National Park, cultural villages, and iconic East African landmarks.',
    color: 'bg-yellow-100 text-yellow-700',
    image: 'https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Safari Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive travel solutions for your perfect East African adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group shadow-2xl transition-all duration-300 cursor-pointer border-0 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute bottom-4 left-4 ${service.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
