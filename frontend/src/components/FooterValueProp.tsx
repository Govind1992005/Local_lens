"use client";

import React from 'react';
import { ShieldCheck, Video, Heart, Award } from 'lucide-react';

export const FooterValueProp: React.FC = () => {
  const valueProps = [
    {
      icon: ShieldCheck,
      title: "Authentic & Reliable",
      description: "Curated local information & review verification.",
      color: "text-[#0F5132]"
    },
    {
      icon: Video,
      title: "Local Insights",
      description: "Sourced directly from local reviews and videos.",
      color: "text-[#FF6A4D]"
    },
    {
      icon: Award,
      title: "Best Experiences",
      description: "Handpicked recommendations & hidden spots.",
      color: "text-[#D8A657]"
    },
    {
      icon: Heart,
      title: "Save Favorites",
      description: "Bookmark places and dishes to your trip itinerary.",
      color: "text-[#FF6A4D]"
    }
  ];

  return (
    <footer className="bg-[#1C1310] text-white pt-16 pb-12 border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Value Proposition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {valueProps.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300">
                <div className="p-3 rounded-xl bg-white/10 flex-shrink-0">
                  <IconComp className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-white">{item.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <div className="mb-4 sm:mb-0">
            <span className="font-serif text-lg font-bold text-white">Local<span className="text-[#FF6A4D] italic">Lens</span></span>
            <span className="ml-2 font-light">© 2026 LocalLens Inc. All rights reserved.</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">API Specs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
