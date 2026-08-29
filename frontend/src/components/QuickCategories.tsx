"use client";

import React from 'react';
import { Utensils, Compass, Drama, Map as MapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickCategoriesProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export const QuickCategories: React.FC<QuickCategoriesProps> = ({ activeCategory, onSelectCategory }) => {
  const categories = [
    {
      id: 'food',
      title: 'Food',
      subtext: 'Explore authentic local dishes & cuisines',
      icon: Utensils,
      bgColor: 'from-orange-500/20 to-amber-500/20',
      borderColor: 'border-orange-500/40',
      iconColor: 'text-orange-500',
      bgImage: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'places',
      title: 'Places',
      subtext: 'Discover famous tourist attractions and landmarks',
      icon: Compass,
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/40',
      iconColor: 'text-blue-500',
      bgImage: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'culture',
      title: 'Culture',
      subtext: 'Experience local traditions, festivals, and heritage',
      icon: Drama,
      bgColor: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/40',
      iconColor: 'text-purple-500',
      bgImage: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'map',
      title: 'Explore Map',
      subtext: 'Explore locations on an interactive map',
      icon: MapIcon,
      bgColor: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/40',
      iconColor: 'text-emerald-500',
      bgImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="categories" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-[#D8A657]">
          What do you want to discover today?
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1310] mt-2">
          Browse by <span className="text-[#FF6A4D] italic">Category</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          const isSelected = activeCategory === cat.id;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onSelectCategory(cat.id)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-2 group shadow-lg ${
                isSelected ? 'ring-4 ring-[#FF6A4D]' : ''
              }`}
            >
              {/* Background preview image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.bgImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310] via-[#1C1310]/80 to-[#1C1310]/40 group-hover:via-[#1C1310]/70 transition-all duration-300" />

              {/* Card Content */}
              <div className="relative p-6 flex flex-col justify-between h-64 z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-inner`}>
                  <IconComp className={`w-6 h-6 ${cat.iconColor}`} />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 flex items-center space-x-2">
                    <span>{cat.title}</span>
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">
                    {cat.subtext}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
