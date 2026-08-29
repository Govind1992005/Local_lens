"use client";

import React from 'react';
import { StateData } from '@/types';
import { Search, MapPin, Aperture, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeroSectionProps {
  states: StateData[];
  selectedState: StateData;
  selectedCityId: string;
  searchQuery: string;
  onSelectState: (state: StateData) => void;
  onSelectCity: (cityId: string) => void;
  onSearchQueryChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onQuickFilterClick: (tag: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  states,
  selectedState,
  selectedCityId,
  searchQuery,
  onSelectState,
  onSelectCity,
  onSearchQueryChange,
  onSearchSubmit,
  onQuickFilterClick
}) => {
  const quickFilters = ["#Thali", "#CoastalViews", "#StreetFood", "#HeritageTemples"];

  return (
    <div id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Image Container with Smooth Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedState.id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url('${selectedState.hero_image}')` }}
        />
      </AnimatePresence>

      {/* Premium Warm Dusk Gradient Overlay (#1C1310 to transparent) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310] via-[#1C1310]/60 to-[#1C1310]/40 z-10" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#1C1310]/30 to-[#1C1310]/80 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-[#D8A657]/20 border border-[#D8A657]/40 px-4 py-1.5 rounded-full backdrop-blur-md mb-6"
        >
          <Compass className="w-4 h-4 text-[#D8A657]" />
          <span className="text-xs uppercase tracking-widest text-[#D8A657] font-semibold">
            {selectedState.tagline}
          </span>
        </motion.div>

        {/* Dynamic Headline */}
        <motion.h1 
          key={selectedState.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6 drop-shadow-md"
        >
          DISCOVER YOUR <br className="hidden sm:inline" />
          <span className="text-[#FF6A4D] italic underline decoration-[#D8A657]/40 decoration-wavy">
            {selectedState.name.toUpperCase()}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light"
        >
          Uncover authentic regional cuisines, hidden architectural marvels, and rich cultural heritage handpicked by verified locals.
        </motion.p>

        {/* Glassmorphic Floating Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 shadow-2xl shadow-black/50 max-w-4xl mx-auto"
        >
          <form onSubmit={onSearchSubmit} className="flex flex-col md:flex-row items-center gap-3">
            {/* State Selector */}
            <div className="w-full md:w-1/4 relative">
              <label className="block text-[10px] uppercase font-bold text-gray-300 text-left px-2 mb-1">
                State (Required)
              </label>
              <select
                value={selectedState.id}
                onChange={(e) => {
                  const stateObj = states.find(s => s.id === e.target.value);
                  if (stateObj) onSelectState(stateObj);
                }}
                className="w-full bg-black/40 text-white text-sm font-medium rounded-xl px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6A4D] appearance-none cursor-pointer"
              >
                {states.map(s => (
                  <option key={s.id} value={s.id} className="bg-[#1C1310] text-white">
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City Selector */}
            <div className="w-full md:w-1/4 relative">
              <label className="block text-[10px] uppercase font-bold text-gray-300 text-left px-2 mb-1">
                City (Optional)
              </label>
              <select
                value={selectedCityId}
                onChange={(e) => onSelectCity(e.target.value)}
                className="w-full bg-black/40 text-white text-sm font-medium rounded-xl px-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6A4D] appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#1C1310] text-white">All Cities in {selectedState.name}</option>
                {selectedState.cities.map(c => (
                  <option key={c.id} value={c.id} className="bg-[#1C1310] text-white">
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Text Search Input */}
            <div className="w-full md:w-2/5 relative">
              <label className="block text-[10px] uppercase font-bold text-gray-300 text-left px-2 mb-1">
                Keywords / Craving
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Where to? or What are you craving?"
                  value={searchQuery}
                  onChange={(e) => onSearchQueryChange(e.target.value)}
                  className="w-full bg-black/40 text-white placeholder-gray-400 text-sm font-medium rounded-xl pl-10 pr-4 py-3 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6A4D]"
                />
                <MapPin className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Search Action Button */}
            <div className="w-full md:w-auto self-end">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#FF6A4D] hover:bg-[#E8583B] text-white px-8 py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-[#FF6A4D]/40 hover:scale-105 active:scale-95"
              >
                <Aperture className="w-5 h-5 animate-spin-slow" />
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Quick-Filter Tag Pills */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4 pt-3 border-t border-white/10">
            <span className="text-xs text-gray-300 font-medium mr-1">Quick Filters:</span>
            {quickFilters.map((tag) => (
              <button
                key={tag}
                onClick={() => onQuickFilterClick(tag)}
                className="bg-white/10 hover:bg-[#FF6A4D]/30 border border-white/20 hover:border-[#FF6A4D] text-gray-200 text-xs px-3 py-1 rounded-full transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
