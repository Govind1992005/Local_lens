"use client";

import React, { useState, useEffect } from 'react';
import { StateData, Place, Food, CultureItem } from '@/types';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { QuickCategories } from '@/components/QuickCategories';
import { PlacesCarousel } from '@/components/PlacesCarousel';
import { FoodCarousel } from '@/components/FoodCarousel';
import { CultureSection } from '@/components/CultureSection';
import { InteractiveMap } from '@/components/InteractiveMap';
import { AITripPlanner } from '@/components/AITripPlanner';
import { FooterValueProp } from '@/components/FooterValueProp';

// Embedded initial states dataset for instant rendering & API fallback
const INITIAL_STATES: StateData[] = [
  {
    id: "andhra_pradesh",
    name: "Andhra Pradesh",
    tagline: "The Sunrise State of India",
    hero_image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "visakhapatnam", name: "Visakhapatnam (Vizag)" },
      { id: "araku", name: "Araku Valley" },
      { id: "vijayawada", name: "Vijayawada" },
      { id: "tirupati", name: "Tirupati" }
    ]
  },
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "The Land of Kings & Palaces",
    hero_image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "jaipur", name: "Jaipur" },
      { id: "udaipur", name: "Udaipur" },
      { id: "jaisalmer", name: "Jaisalmer" },
      { id: "jodhpur", name: "Jodhpur" }
    ]
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country",
    hero_image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "alleppey", name: "Alleppey (Alappuzha)" },
      { id: "munnar", name: "Munnar" },
      { id: "kochi", name: "Kochi" },
      { id: "varkala", name: "Varkala" }
    ]
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    tagline: "Unlimited Gateway to Heritage & Energy",
    hero_image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "mumbai", name: "Mumbai" },
      { id: "pune", name: "Pune" },
      { id: "nashik", name: "Nashik" },
      { id: "aurangabad", name: "Chhatrapati Sambhajinagar" }
    ]
  },
  {
    id: "tamil_nadu",
    name: "Tamil Nadu",
    tagline: "Land of Temples & Dravidian Heritage",
    hero_image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "chennai", name: "Chennai" },
      { id: "madurai", name: "Madurai" },
      { id: "ooty", name: "Ooty" },
      { id: "thanjavur", name: "Thanjavur" }
    ]
  }
];

const INITIAL_PLACES: Place[] = [
  {
    id: "rk-beach",
    state_id: "andhra_pradesh",
    city_id: "visakhapatnam",
    title: "RK Beach & Submarine Museum",
    sub_location: "Beach Road, Visakhapatnam",
    rating: 4.7,
    reviews_count: 12450,
    category: "Beach & Heritage",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    description: "Scenic coastline featuring the iconic INS Kursura Submarine Museum and vibrant sunset promenades.",
    latitude: 17.7126,
    longitude: 83.3188,
    tags: ["#CoastalViews", "#Beach", "#Museum"]
  },
  {
    id: "araku-valley",
    state_id: "andhra_pradesh",
    city_id: "araku",
    title: "Araku Valley Coffee Plantations",
    sub_location: "Eastern Ghats, Araku",
    rating: 4.8,
    reviews_count: 8920,
    category: "Nature & Mountains",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "Lush hill station renowned for organic coffee plantations, misty valleys, and tribal museum culture.",
    latitude: 18.3273,
    longitude: 82.8775,
    tags: ["#MistyHills", "#CoffeePlantation", "#Nature"]
  },
  {
    id: "borra-caves",
    state_id: "andhra_pradesh",
    city_id: "araku",
    title: "Borra Stalactite Caves",
    sub_location: "Ananthagiri Hills, Araku",
    rating: 4.6,
    reviews_count: 6540,
    category: "Heritage & Geological",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    description: "One of India's deepest limestone caves featuring naturally formed stalagmites illuminated with vibrant lights.",
    latitude: 18.2804,
    longitude: 83.0396,
    tags: ["#Geology", "#Caves", "#Adventure"]
  },
  {
    id: "kailasagiri",
    state_id: "andhra_pradesh",
    city_id: "visakhapatnam",
    title: "Kailasagiri Hilltop Park",
    sub_location: "Hill Top Road, Visakhapatnam",
    rating: 4.6,
    reviews_count: 9100,
    category: "Panoramic Viewpoint",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Hilltop park offering panoramic views of the Bay of Bengal, ropeway rides, and colossal Shiva-Parvati statues.",
    latitude: 17.7492,
    longitude: 83.3422,
    tags: ["#PanoramicViews", "#Ropeway", "#Park"]
  },
  {
    id: "hawa-mahal",
    state_id: "rajasthan",
    city_id: "jaipur",
    title: "Hawa Mahal (Palace of Winds)",
    sub_location: "Pink City, Jaipur",
    rating: 4.8,
    reviews_count: 34200,
    category: "Heritage Architecture",
    image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
    description: "Five-story pink sandstone palace with 953 intricately carved windows (jharokhas) designed for royal breezes.",
    latitude: 26.9239,
    longitude: 75.8267,
    tags: ["#HeritageTemples", "#Architecture", "#PinkCity"]
  },
  {
    id: "alleppey-backwaters",
    state_id: "kerala",
    city_id: "alleppey",
    title: "Alleppey Houseboat Backwaters",
    sub_location: "Punnamada Lake, Alleppey",
    rating: 4.9,
    reviews_count: 41200,
    category: "Eco Tourism",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    description: "Tranquil network of lagoons, lakes, and canals navigated by traditional Kettuvallam houseboats.",
    latitude: 9.4981,
    longitude: 76.3388,
    tags: ["#Backwaters", "#Houseboat", "#Serene"]
  }
];

const INITIAL_FOODS: Food[] = [
  {
    id: "andhra-thali",
    state_id: "andhra_pradesh",
    city_id: "visakhapatnam",
    dish_name: "Authentic Andhra Meals (Thali)",
    category: "Traditional Meals",
    price_inr: 120,
    trust_score: 98,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    review_quote: "Pure spice perfection! The aromatic Pappu with hot ghee and Gongura chutney is unmatched.",
    source: "Local Foodie Vlogs & 1,420 Reviews",
    tags: ["#Thali", "#Spicy", "#Authentic"]
  },
  {
    id: "gongura-pachadi",
    state_id: "andhra_pradesh",
    city_id: "vijayawada",
    dish_name: "Gongura Pachadi & Rice",
    category: "Local Specialty Chutney",
    price_inr: 60,
    trust_score: 96,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    review_quote: "The tangy signature sorrel leaf pickle served with hot steaming rice and garlic pods.",
    source: "YouTube Street Food Vloggers",
    tags: ["#Tangy", "#StreetFood", "#Signature"]
  },
  {
    id: "bamboo-chicken",
    state_id: "andhra_pradesh",
    city_id: "araku",
    dish_name: "Araku Bamboo Chicken",
    category: "Tribal Delicacy",
    price_inr: 250,
    trust_score: 94,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    review_quote: "Marinated chicken cooked inside green bamboo stalks over open charcoal embers with zero added oil.",
    source: "Araku Tribal Food Guides",
    tags: ["#TribalFood", "#Organic", "#Smoky"]
  },
  {
    id: "pesarattu",
    state_id: "andhra_pradesh",
    city_id: "visakhapatnam",
    dish_name: "MLA Pesarattu Upma",
    category: "Breakfast Classic",
    price_inr: 80,
    trust_score: 95,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    review_quote: "Crispy green gram crepe stuffed with savory ginger upma served with fresh ginger chutney.",
    source: "Coastal Andhra Breakfast Club",
    tags: ["#Breakfast", "#Healthy", "#Crispy"]
  },
  {
    id: "dal-baati-churma",
    state_id: "rajasthan",
    city_id: "jaipur",
    dish_name: "Dal Baati Churma",
    category: "Royal Cuisine",
    price_inr: 220,
    trust_score: 99,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    review_quote: "Baked wheat balls dipped in pure desi ghee served with spicy Panchmel dal and sweet churma.",
    source: "Jaipur Food Tours & Heritage Guides",
    tags: ["#RoyalThali", "#DesiGhee", "#MustTry"]
  }
];

const INITIAL_CULTURE: CultureItem[] = [
  {
    id: "dheemsa-dance",
    state_id: "andhra_pradesh",
    title: "Dhimsa Tribal Dance",
    category: "Folk Art & Heritage",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
    description: "Rhythmic tribal group dance performed in colorful traditional attires in Araku valley."
  },
  {
    id: "ghoomar-rajasthan",
    state_id: "rajasthan",
    title: "Ghoomar Folk Performance",
    category: "Traditional Dance",
    image: "https://images.unsplash.com/photo-1545232979-fbf34f5ce948?auto=format&fit=crop&w=800&q=80",
    description: "Royal swirling dance performed by women wearing flowing ghagras during festivals."
  },
  {
    id: "kathakali-kerala",
    state_id: "kerala",
    title: "Kathakali Classical Drama",
    category: "Classical Art",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
    description: "Storytelling dance-drama known for elaborate vibrant face makeup and hand gestures."
  }
];

export default function Home() {
  const [states] = useState<StateData[]>(INITIAL_STATES);
  const [selectedState, setSelectedState] = useState<StateData>(INITIAL_STATES[0]);
  const [selectedCityId, setSelectedCityId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('places');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Filtered places & foods based on selected state, optional city, and search query
  const filteredPlaces = INITIAL_PLACES.filter((p) => {
    const matchesState = p.state_id === selectedState.id;
    const matchesCity = !selectedCityId || p.city_id === selectedCityId;
    const matchesQuery = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesState && matchesCity && matchesQuery;
  });

  const filteredFoods = INITIAL_FOODS.filter((f) => {
    const matchesState = f.state_id === selectedState.id;
    const matchesCity = !selectedCityId || f.city_id === selectedCityId;
    const matchesQuery = !searchQuery || 
      f.dish_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesState && matchesCity && matchesQuery;
  });

  const filteredCulture = INITIAL_CULTURE.filter(c => c.state_id === selectedState.id);

  const handleStateSelect = (stateObj: StateData) => {
    setSelectedState(stateObj);
    setSelectedCityId(''); // Reset city on state change
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById('places');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickFilterClick = (tag: string) => {
    setSearchQuery(tag);
    const targetElement = document.getElementById('places');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* Top Header Navigation */}
      <Navbar 
        onCategoryClick={(cat) => setActiveCategory(cat)}
        favoritesCount={favorites.length}
      />

      {/* Hero Section with Dynamic State Background & City Selector */}
      <HeroSection
        states={states}
        selectedState={selectedState}
        selectedCityId={selectedCityId}
        searchQuery={searchQuery}
        onSelectState={handleStateSelect}
        onSelectCity={(cityId) => setSelectedCityId(cityId)}
        onSearchQueryChange={(query) => setSearchQuery(query)}
        onSearchSubmit={handleSearchSubmit}
        onQuickFilterClick={handleQuickFilterClick}
      />

      {/* Quick Interactive Category Cards */}
      <QuickCategories
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          const elem = document.getElementById(cat);
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Popular Places Carousel */}
      <PlacesCarousel
        stateName={selectedState.name}
        places={filteredPlaces}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
      />

      {/* Taste the Region (Food Recommendations & Trust Scores Carousel) */}
      <FoodCarousel
        stateName={selectedState.name}
        foods={filteredFoods}
        onToggleFavorite={handleToggleFavorite}
        favorites={favorites}
      />

      {/* Cultural Traditions Section */}
      <CultureSection
        stateName={selectedState.name}
        cultureItems={filteredCulture.length > 0 ? filteredCulture : INITIAL_CULTURE}
      />

      {/* Interactive Map View */}
      <InteractiveMap
        places={filteredPlaces.length > 0 ? filteredPlaces : INITIAL_PLACES}
        selectedStateName={selectedState.name}
      />

      {/* AI Trip Planner Section (Claude API Prompt pipeline) */}
      <AITripPlanner
        states={states}
        selectedState={selectedState}
      />

      {/* Footer Value Proposition Bar */}
      <FooterValueProp />
    </main>
  );
}
