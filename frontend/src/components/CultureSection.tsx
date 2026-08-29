"use client";

import React from 'react';
import { CultureItem } from '@/types';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface CultureSectionProps {
  stateName: string;
  cultureItems: CultureItem[];
}

export const CultureSection: React.FC<CultureSectionProps> = ({ stateName, cultureItems }) => {
  return (
    <section id="culture" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs uppercase font-bold tracking-widest text-[#D8A657]">
          Living Heritage & Traditions
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1310] mt-1">
          Cultural Heritage of <span className="text-[#FF6A4D] italic">{stateName}</span>
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto mt-2 font-light">
          Immerse yourself in traditional folk art forms, centuries-old festivals, and indigenous music.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cultureItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-[#D8A657]/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider">
                {item.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-serif text-xl font-bold text-[#1C1310] group-hover:text-[#FF6A4D] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
