"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Place } from '@/types';
import { Star, MapPin, ChevronLeft, ChevronRight, Heart, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  
  // Open modal via custom event listener
  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<Place>;
      setSelectedPlace(customEvent.detail);
    };
    window.addEventListener('openPlaceModal', handleOpenModal);
    return () => window.removeEventListener('openPlaceModal', handleOpenModal);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPlace(null);
    };
    if (selectedPlace) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPlace]);

  // Handle outside click to close modal
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedPlace(null);
    }
  };

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

  // Helper to fallback to standard images if agent image isn't available or seems generic
  const getDisplayImage = (place: Place) => {
    // If we have an image_url from the image agent, use it (assumed to be a real authentic photo from Wikipedia/Google)
    if (place.image_url && place.image_url.startsWith('http')) {
      return place.image_url;
    }
    // Fallback to existing image
    return place.image;
  };

  return (
    <>
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
              const displayImg = getDisplayImage(place);
              
              return (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="min-w-[280px] sm:min-w-[340px] max-w-[340px] bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex-shrink-0 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelectedPlace(place)}
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={displayImg}
                        alt={place.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          // Fallback if the high-fidelity agent image fails to load (404, etc.)
                          (e.target as HTMLImageElement).src = place.image;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Rating Star Badge */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center space-x-1 shadow-md">
                        <Star className="w-3.5 h-3.5 fill-[#D8A657] text-[#D8A657]" />
                        <span className="text-xs font-bold text-[#1C1310]">{place.rating}</span>
                        <span className="text-[10px] text-gray-500">({place.reviews_count.toLocaleString()})</span>
                      </div>

                      {/* Favorite Button (stops event propagation so card doesn't click) */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite?.(place.id);
                        }}
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
                      
                      {/* Verified Badge if present */}
                      {place.verified_by_data_gov && (
                         <span className="absolute bottom-3 right-3 bg-green-600/90 text-white backdrop-blur-sm text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md flex items-center shadow-sm">
                           <span className="mr-1">✓</span> Govt Verified
                         </span>
                      )}
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
                    {place.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 text-[10px] font-medium px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {place.tags.length > 3 && (
                      <span className="bg-gray-50 text-gray-400 text-[10px] font-medium px-2 py-0.5 rounded">
                        +{place.tags.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>

      {/* Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOutsideClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto overflow-x-hidden flex flex-col md:flex-row relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPlace(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={getDisplayImage(selectedPlace)} 
                  alt={selectedPlace.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = selectedPlace.image; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:bg-gradient-to-r" />
                
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1 block">
                    {selectedPlace.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold leading-tight shadow-sm">
                    {selectedPlace.title}
                  </h2>
                  <div className="flex items-center mt-2 space-x-1.5 opacity-90 text-sm">
                    <MapPin className="w-4 h-4 text-[#FF6A4D]" />
                    <span>{selectedPlace.sub_location}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                    <div className="flex items-center space-x-2 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-100">
                      <Star className="w-4 h-4 fill-[#D8A657] text-[#D8A657]" />
                      <span className="font-bold text-gray-800">{selectedPlace.rating}</span>
                      <span className="text-xs text-gray-500">({selectedPlace.reviews_count.toLocaleString()} reviews)</span>
                    </div>
                    
                    {selectedPlace.verified_by_data_gov && (
                      <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2.5 py-1 rounded-md border border-green-100">
                        <span className="text-xs font-bold">✓ Gov Verified</span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-sm uppercase tracking-wider font-bold text-gray-400 mb-2">About this place</h3>
                  <p className="text-gray-700 leading-relaxed font-light mb-6">
                    {selectedPlace.description}
                  </p>

                  {/* Highlights/Consensus */}
                  {(selectedPlace.vlog_consensus || selectedPlace.best_view_time) && (
                    <div className="space-y-3 mb-6 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      {selectedPlace.best_view_time && (
                        <div>
                          <span className="text-xs font-bold text-[#D8A657] uppercase tracking-wide block mb-1">Best Time to Visit</span>
                          <p className="text-sm font-medium text-gray-800">{selectedPlace.best_view_time}</p>
                        </div>
                      )}
                      
                      {selectedPlace.vlog_consensus && selectedPlace.best_view_time && <div className="h-px bg-gray-200 w-full" />}
                      
                      {selectedPlace.vlog_consensus && (
                        <div>
                          <span className="text-xs font-bold text-blue-500 uppercase tracking-wide block mb-1">Traveler Insights</span>
                          <p className="text-sm italic text-gray-700">{selectedPlace.vlog_consensus}</p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xs uppercase tracking-wider font-bold text-gray-400 mb-2">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPlace.tags.map((tag) => (
                        <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Get Directions Button Repositioned Inside Modal */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${selectedPlace.title} ${selectedPlace.sub_location}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-[#1C1310] hover:bg-[#FF6A4D] text-white py-3.5 px-6 rounded-xl transition-colors duration-300 shadow-md font-medium"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
