"use client";

import React, { useRef } from 'react';
import { Place } from '@/types';
import { Star, MapPin, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

interface PlacesCarouselProps {
  stateName: string;
  places: Place[];
  onToggleFavorite?: (id: string) => void;
  favorites?: string[];
}

export const PlacesCarousel: React.FC<PlacesCarouselProps> = ({
  stateName,
  places,
  onToggleFavorite,
  favorites = []
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="places" className="py-12 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#D8A657]">
            Curated Local Attractions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1310] mt-1">
            Popular Places in <span className="text-[#FF6A4D] italic">{stateName}</span>
          </h2>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-[#FF6A4D] hover:text-white transition-colors duration-200 flex items-center justify-center border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-[#FF6A4D] hover:text-white transition-colors duration-200 flex items-center justify-center border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {places.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
          <p className="text-gray-500">No places found matching your filter criteria.</p>
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {places.map((place, index) => {
            const isFav = favorites.includes(place.id);
            return (
              <motion.div
                key={place.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Header with Badge */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Rating Star Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-md">
                      <Star className="w-3.5 h-3.5 fill-[#D8A657] text-[#D8A657]" />
                      <span className="text-xs font-bold text-[#1C1310]">{place.rating}</span>
                      <span className="text-[10px] text-gray-500">({place.reviews_count.toLocaleString()})</span>
                    </div>

                    {/* Favorite Button */}
                    <button
                      onClick={() => onToggleFavorite?.(place.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-colors shadow-md ${
                        isFav ? 'bg-[#FF6A4D] text-white' : 'bg-black/30 text-white hover:bg-white hover:text-[#FF6A4D]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                    </button>

                    {/* Category pill */}
                    <span className="absolute bottom-3 left-3 bg-[#1C1310]/70 text-gray-200 backdrop-blur-sm text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-md">
                      {place.category}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-[#1C1310] group-hover:text-[#FF6A4D] transition-colors line-clamp-1">
                      {place.title}
                    </h3>
                    <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#FF6A4D]" />
                      <span className="truncate">{place.sub_location}</span>
                    </div>

                    {/* Best View Time Badge */}
                    {place.best_view_time && (
                      <div className="bg-[#FAF8F5] border border-amber-200/60 rounded-lg p-2 mb-3">
                        <span className="block text-[10px] uppercase font-bold text-[#D8A657]">Best Time to Visit:</span>
                        <span className="text-xs font-semibold text-gray-800">{place.best_view_time}</span>
                      </div>
                    )}

                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-light">
                      {place.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="px-5 pb-5 pt-0 flex flex-wrap gap-1">
                  {place.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};
