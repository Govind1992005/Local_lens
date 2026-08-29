"use client";

import React, { useState } from 'react';
import { Search, Heart, User, Aperture } from 'lucide-react';

interface NavbarProps {
  onCategoryClick?: (category: string) => void;
  favoritesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onCategoryClick, favoritesCount = 0 }) => {
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Explore', id: 'categories' },
    { name: 'Food', id: 'food' },
    { name: 'Places', id: 'places' },
    { name: 'Culture', id: 'culture' },
    { name: 'Map', id: 'map' },
    { name: 'AI Planner', id: 'planner' },
  ];

  const handleNavClick = (name: string, id: string) => {
    setActiveNav(name);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-[#1C1310]/90 via-[#1C1310]/60 to-transparent backdrop-blur-sm transition-all duration-300 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo & Tagline */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavClick('Home', 'hero')}>
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF6A4D] to-[#D8A657] text-white shadow-lg shadow-[#FF6A4D]/20">
            <Aperture className="w-6 h-6 animate-spin-slow" />
            <span className="absolute w-2 h-2 rounded-full bg-white"></span>
          </div>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Local<span className="text-[#FF6A4D] italic">Lens</span>
              </span>
            </div>
            <p className="text-[10px] text-gray-300 tracking-wider font-light hidden sm:block">
              Discover a place like a local.
            </p>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#1C1310]/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.name, item.id)}
              className={`px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 ${
                activeNav === item.name
                  ? 'bg-[#FF6A4D] text-white shadow-md'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => handleNavClick('Explore', 'places')}
            className="p-2 text-gray-200 hover:text-white transition-colors hover:bg-white/10 rounded-full"
            title="Search Places"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            className="relative p-2 text-gray-200 hover:text-[#FF6A4D] transition-colors hover:bg-white/10 rounded-full"
            title="Favorites"
          >
            <Heart className="w-5 h-5" />
            {favoritesCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#FF6A4D] text-white text-[10px] font-bold flex items-center justify-center">
                {favoritesCount}
              </span>
            )}
          </button>

          <button className="flex items-center space-x-2 bg-[#FF6A4D] hover:bg-[#E8583B] text-white px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg shadow-[#FF6A4D]/30 hover:scale-105 active:scale-95">
            <User className="w-4 h-4" />
            <span>Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};
