'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const packages = [
  {
    title: 'Classic Maasai Mara Safari',
    duration: '4 Days / 3 Nights',
    price: '$1,250',
    groupSize: '2-8 People',
    image: 'https://images.pexels.com/photos/34098/south-africa-hluhluwe-giraffes-pattern.jpg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Big Five viewing', 'Luxury tented camp', 'Game drives', 'Cultural visit'],
    featured: true,
  },
  {
    title: 'Serengeti & Ngorongoro Explorer',
    duration: '6 Days / 5 Nights',
    price: '$2,450',
    groupSize: '2-6 People',
    image: 'https://images.pexels.com/photos/2254070/pexels-photo-2254070.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Crater viewing', 'Migration routes', 'Luxury lodges', 'Hot air balloon'],
    featured: true,
  },
  {
    title: 'Amboseli & Tsavo Adventure',
    duration: '5 Days / 4 Nights',
    price: '$1,650',
    groupSize: '2-10 People',
    image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Mt. Kilimanjaro views', 'Elephant herds', 'Red elephants', 'Bird watching'],
    featured: false,
  },
  {
    title: 'Kenya Coast & Safari Combo',
    duration: '8 Days / 7 Nights',
    price: '$2,890',
    groupSize: '2-8 People',
    image: 'https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=800',
    highlights: ['Maasai Mara safari', 'Beach resort', 'Snorkeling', 'Diani Beach'],
    featured: false,
  },
];

export default function FeaturedPackages() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!api) return;

    api.on('select', onSelect);
    api.on('reInit', onSelect);

    // Set initial state
    onSelect(api);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Safari Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked adventures showcasing the best of Kenya and Tanzania
          </p>
        </div>

        <div>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {packages.map((pkg, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card
                    className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${pkg.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {pkg.featured && (
                        <Badge className="absolute top-4 right-4 bg-amber-600 hover:bg-amber-700 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <CardContent className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                        {pkg.title}
                      </h3>

                      <div className="flex items-center gap-4 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">{pkg.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{pkg.groupSize}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {pkg.highlights.slice(0, 3).map((highlight, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-emerald-600 text-emerald-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t mt-auto">
                        <div>
                          <div className="text-sm text-gray-500">From</div>
                          <div className="text-2xl font-bold text-amber-600">{pkg.price}</div>
                          <div className="text-xs text-gray-500">per person</div>
                        </div>
                        <Button className="bg-emerald-700 hover:bg-emerald-800 text-white">
                          Make Booking
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors disabled:opacity-50 disabled:border-gray-300 disabled:text-gray-300 disabled:bg-transparent"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white transition-colors disabled:opacity-50 disabled:border-gray-300 disabled:text-gray-300 disabled:bg-transparent"
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
