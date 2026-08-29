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
import { AgentVisualization } from '@/components/AgentVisualization';
import { YouTubeAnalysisSection } from '@/components/YouTubeAnalysisSection';
import { MultiModalAssistantModal } from '@/components/MultiModalAssistantModal';
import { FooterValueProp } from '@/components/FooterValueProp';

// Full dataset fallback state for offline rendering
const INITIAL_STATES: StateData[] = [
  {
    id: "andhra_pradesh", name: "Andhra Pradesh", tagline: "The Sunrise State of India",
    hero_image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=80",
    cities: [
      { id: "visakhapatnam", name: "Visakhapatnam (Vizag)" }, { id: "araku", name: "Araku Valley" },
      { id: "vijayawada", name: "Vijayawada" }, { id: "tirupati", name: "Tirupati" },
      { id: "guntur", name: "Guntur" }, { id: "kakinada", name: "Kakinada" }
    ]
  },
  {
    id: "arunachal_pradesh", name: "Arunachal Pradesh", tagline: "Land of the Dawn-Lit Mountains",
    hero_image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "tawang", name: "Tawang" }, { id: "itanagar", name: "Itanagar" }, { id: "ziro", name: "Ziro Valley" }]
  },
  {
    id: "assam", name: "Assam", tagline: "Land of Blue Hills & Red River",
    hero_image: "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "guwahati", name: "Guwahati" }, { id: "kaziranga", name: "Kaziranga" }, { id: "jorhat", name: "Jorhat" }]
  },
  {
    id: "bihar", name: "Bihar", tagline: "Blissful Land of Enlightenment & Heritage",
    hero_image: "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "patna", name: "Patna" }, { id: "gaya", name: "Bodh Gaya" }, { id: "nalanda", name: "Nalanda" }]
  },
  {
    id: "chhattisgarh", name: "Chhattisgarh", tagline: "Full of Surprises & Majestic Waterfalls",
    hero_image: "https://images.unsplash.com/photo-1617854818583-09e7f077a156?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "raipur", name: "Raipur" }, { id: "jagdalpur", name: "Jagdalpur" }]
  },
  {
    id: "goa", name: "Goa", tagline: "A Pearl of the Orient & Sun-Kissed Coasts",
    hero_image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "panaji", name: "Panaji" }, { id: "calangute", name: "Calangute" }, { id: "margao", name: "Margao" }]
  },
  {
    id: "gujarat", name: "Gujarat", tagline: "Land of Legends & White Desert",
    hero_image: "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "ahmedabad", name: "Ahmedabad" }, { id: "kutch", name: "Rann of Kutch" }, { id: "surat", name: "Surat" }]
  },
  {
    id: "haryana", name: "Haryana", tagline: "A Land of Milk, Ghee & Epic History",
    hero_image: "https://images.unsplash.com/photo-1588096344356-9b589415c899?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "gurugram", name: "Gurugram" }, { id: "kurukshetra", name: "Kurukshetra" }]
  },
  {
    id: "himachal_pradesh", name: "Himachal Pradesh", tagline: "Land of Gods & Snow-Capped Peaks",
    hero_image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "shimla", name: "Shimla" }, { id: "manali", name: "Manali" }, { id: "dharamshala", name: "Dharamshala" }]
  },
  {
    id: "jharkhand", name: "Jharkhand", tagline: "The Land of Forests & Waterfalls",
    hero_image: "https://images.unsplash.com/photo-1607583449132-70b54e7d488e?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "ranchi", name: "Ranchi" }, { id: "jamshedpur", name: "Jamshedpur" }]
  },
  {
    id: "karnataka", name: "Karnataka", tagline: "One State, Many Worlds",
    hero_image: "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "bengaluru", name: "Bengaluru" }, { id: "mysuru", name: "Mysuru" }, { id: "hampi", name: "Hampi" }, { id: "coorg", name: "Coorg" }]
  },
  {
    id: "kerala", name: "Kerala", tagline: "God's Own Country",
    hero_image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "alleppey", name: "Alleppey" }, { id: "munnar", name: "Munnar" }, { id: "kochi", name: "Kochi" }, { id: "varkala", name: "Varkala" }]
  },
  {
    id: "madhya_pradesh", name: "Madhya Pradesh", tagline: "The Heart of Incredible India",
    hero_image: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "indore", name: "Indore" }, { id: "bhopal", name: "Bhopal" }, { id: "khajuraho", name: "Khajuraho" }]
  },
  {
    id: "maharashtra", name: "Maharashtra", tagline: "Unlimited Gateway to Heritage & Energy",
    hero_image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "mumbai", name: "Mumbai" }, { id: "pune", name: "Pune" }, { id: "nashik", name: "Nashik" }]
  },
  {
    id: "manipur", name: "Manipur", tagline: "Jewel of India & Floating Lake Marvels",
    hero_image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "imphal", name: "Imphal" }, { id: "loktak", name: "Loktak Lake" }]
  },
  {
    id: "meghalaya", name: "Meghalaya", tagline: "Abode of Clouds & Living Root Bridges",
    hero_image: "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "shillong", name: "Shillong" }, { id: "cherrapunji", name: "Cherrapunji" }]
  },
  {
    id: "mizoram", name: "Mizoram", tagline: "Land of Rolling Hills & Serene Valleys",
    hero_image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "aizawl", name: "Aizawl" }, { id: "lunglei", name: "Lunglei" }]
  },
  {
    id: "nagaland", name: "Nagaland", tagline: "Land of Festivals & Vibrant Heritage",
    hero_image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "kohima", name: "Kohima" }, { id: "dimapur", name: "Dimapur" }]
  },
  {
    id: "odisha", name: "Odisha", tagline: "India's Best Kept Secret & Golden Sands",
    hero_image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "puri", name: "Puri" }, { id: "bhubaneswar", name: "Bhubaneswar" }, { id: "konark", name: "Konark" }]
  },
  {
    id: "punjab", name: "Punjab", tagline: "Land of Five Rivers & Golden Warmth",
    hero_image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "amritsar", name: "Amritsar" }, { id: "ludhiana", name: "Ludhiana" }]
  },
  {
    id: "rajasthan", name: "Rajasthan", tagline: "The Land of Kings & Palaces",
    hero_image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "jaipur", name: "Jaipur" }, { id: "udaipur", name: "Udaipur" }, { id: "jaisalmer", name: "Jaisalmer" }]
  },
  {
    id: "sikkim", name: "Sikkim", tagline: "Small State, Big Heart & Majestic Kanchenjunga",
    hero_image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "gangtok", name: "Gangtok" }, { id: "pelling", name: "Pelling" }]
  },
  {
    id: "tamil_nadu", name: "Tamil Nadu", tagline: "Land of Temples & Dravidian Heritage",
    hero_image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "chennai", name: "Chennai" }, { id: "madurai", name: "Madurai" }, { id: "ooty", name: "Ooty" }]
  },
  {
    id: "telangana", name: "Telangana", tagline: "The Seed State of Innovation & Pearl City",
    hero_image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "hyderabad", name: "Hyderabad" }, { id: "warangal", name: "Warangal" }]
  },
  {
    id: "tripura", name: "Tripura", tagline: "Land of Royal Palaces & Rock Cut Carvings",
    hero_image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "agartala", name: "Agartala" }, { id: "unakoti", name: "Unakoti" }]
  },
  {
    id: "uttar_pradesh", name: "Uttar Pradesh", tagline: "The Heritage Heartland of India",
    hero_image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "agra", name: "Agra" }, { id: "varanasi", name: "Varanasi" }, { id: "lucknow", name: "Lucknow" }]
  },
  {
    id: "uttarakhand", name: "Uttarakhand", tagline: "Simply Heaven on Earth (Devbhoomi)",
    hero_image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "rishikesh", name: "Rishikesh" }, { id: "haridwar", name: "Haridwar" }, { id: "nainital", name: "Nainital" }]
  },
  {
    id: "west_bengal", name: "West Bengal", tagline: "Beautiful Bengal & Sweet Cultural Soul",
    hero_image: "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=1920&q=80",
    cities: [{ id: "kolkata", name: "Kolkata" }, { id: "darjeeling", name: "Darjeeling" }]
  }
];

const INITIAL_PLACES: Place[] = [
  {
    id: "uppada-beach",
    state_id: "andhra_pradesh",
    city_id: "kakinada",
    title: "Uppada Beach & Weaving Village",
    sub_location: "Uppada Road, Kakinada",
    rating: 4.6,
    reviews_count: 5200,
    category: "Scenic Coast & Silk Heritage",
    best_view_time: "5:00 PM - 6:30 PM (Sunset & Sea Breeze)",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    description: "Pristine beach famous for handcrafted Jamdani silk sarees and fresh seafood.",
    latitude: 17.0863,
    longitude: 82.3278,
    tags: ["#UppadaBeach", "#Kakinada"]
  },
  {
    id: "coringa-sanctuary",
    state_id: "andhra_pradesh",
    city_id: "kakinada",
    title: "Coringa Wildlife Sanctuary & Mangroves",
    sub_location: "Corangi, Kakinada",
    rating: 4.7,
    reviews_count: 8400,
    category: "Eco Mangrove Reserve",
    best_view_time: "6:30 AM - 9:30 AM (Boating & Bird Watching)",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "India's second largest mangrove forest renowned for boardwalks, otters, and river boating.",
    latitude: 16.8925,
    longitude: 82.2858,
    tags: ["#Mangroves", "#Coringa"]
  },
  {
    id: "rk-beach",
    state_id: "andhra_pradesh",
    city_id: "visakhapatnam",
    title: "RK Beach & Submarine Museum",
    sub_location: "Beach Road, Visakhapatnam",
    rating: 4.7,
    reviews_count: 12450,
    category: "Beach & Heritage",
    best_view_time: "5:30 PM - 7:00 PM (Sunset & Evening Promenade)",
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
    best_view_time: "6:00 AM - 9:00 AM (Misty Morning Valleys)",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "Lush hill station renowned for organic coffee plantations, misty valleys, and tribal museum culture.",
    latitude: 18.3273,
    longitude: 82.8775,
    tags: ["#MistyHills", "#CoffeePlantation", "#Nature"]
  }
];

const INITIAL_FOODS: Food[] = [
  {
    id: "kakinada-kaja",
    state_id: "andhra_pradesh",
    city_id: "kakinada",
    dish_name: "Gottam Kakinada Kaja",
    category: "Signature Heritage Sweet",
    price_inr: 80,
    trust_score: 99,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    review_quote: "Crispy multi-layered sweet pastry filled with rich hot sugar syrup.",
    source: "Kakinada Sweet Guild",
    tags: ["#KakinadaKaja", "#Sweet"]
  },
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
  const [states, setStates] = useState<StateData[]>(INITIAL_STATES);
  const [selectedState, setSelectedState] = useState<StateData>(INITIAL_STATES[0]);
  const [selectedCityId, setSelectedCityId] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('places');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Fetch all 28 states dynamically from FastAPI backend on mount
  useEffect(() => {
    fetch('http://localhost:8000/api/states')
      .then(res => res.json())
      .then((data: StateData[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setStates(data);
          setSelectedState(data[0]);
        }
      })
      .catch(err => console.log('Backend states API offline, using initial list:', err));
  }, []);

  const [places, setPlaces] = useState<Place[]>([]);
  const [foods, setFoods] = useState<Food[]>([]);
  const [culture, setCulture] = useState<CultureItem[]>([]);
  const [restaurantTiers, setRestaurantTiers] = useState<any>(null);
  const [youtubeData, setYoutubeData] = useState<any>(null);
  const [dataGovData, setDataGovData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch data from multi-agent API whenever selectedState or selectedCityId changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const params = new URLSearchParams({ state: selectedState.name });
    if (selectedCityId) {
      params.append('city', selectedCityId);
    }

    fetch(`http://localhost:8000/api/v1/search/concurrent?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted && data.results) {
          if (data.results.youtube_analysis) {
            setYoutubeData(data.results.youtube_analysis);
          }
          if (data.results.data_gov_in_metrics) {
            setDataGovData(data.results.data_gov_in_metrics);
          }
          if (data.results.restaurant_tiers) {
            setRestaurantTiers(data.results.restaurant_tiers);
          }
          
          // Map places returned by agent for this specific location
          if (data.results.places && data.results.places.length > 0) {
            setPlaces(data.results.places.map((p: any) => ({
              id: p.id,
              state_id: selectedState.id,
              city_id: p.city_id ? p.city_id.toLowerCase().replace(/\s+/g, '_') : (p.city ? p.city.toLowerCase().replace(/\s+/g, '_') : selectedCityId),
              title: p.title || p.name,
              sub_location: p.sub_location || `${p.city || selectedState.name}, ${selectedState.name}`,
              rating: p.rating || 4.5,
              reviews_count: p.reviews_count || 1200,
              category: p.category || "Attraction",
              best_view_time: p.best_view_time || "Morning / Evening",
              image: p.image || p.image_url,
              description: p.description,
              latitude: p.latitude || 17.7,
              longitude: p.longitude || 83.3,
              tags: p.tags || ["#LocalLens", "#Explore"]
            })));
          } else {
            // Static fallback for places if backend returned empty list
            setPlaces(INITIAL_PLACES.filter(p => p.state_id === selectedState.id && (!selectedCityId || p.city_id === selectedCityId)));
          }

          // Map foods returned by agent for this specific location
          if (data.results.food && data.results.food.length > 0) {
            setFoods(data.results.food.map((f: any) => ({
              id: f.id,
              state_id: selectedState.id,
              city_id: f.city_id ? f.city_id.toLowerCase().replace(/\s+/g, '_') : (f.city ? f.city.toLowerCase().replace(/\s+/g, '_') : selectedCityId),
              dish_name: f.dish_name || f.name,
              category: f.category || "Local Delicacy",
              price_inr: f.price_inr || 150,
              trust_score: f.trust_score || 95,
              image: f.image || f.image_url,
              review_quote: f.review_quote || "Must-try authentic dish verified by local foodies.",
              source: f.source || "Local Reviews",
              tags: f.tags || ["#Authentic", "#LocalSpecialty"]
            })));
          } else {
            // Static fallback for foods if backend returned empty list
            setFoods(INITIAL_FOODS.filter(f => f.state_id === selectedState.id && (!selectedCityId || f.city_id === selectedCityId)));
          }
        }
      })
      .catch(err => {
        console.warn('Backend search agent offline, using static dataset fallback:', err);
        const filteredP = INITIAL_PLACES.filter(p => p.state_id === selectedState.id && (!selectedCityId || p.city_id === selectedCityId));
        const filteredF = INITIAL_FOODS.filter(f => f.state_id === selectedState.id && (!selectedCityId || f.city_id === selectedCityId));
        setPlaces(filteredP);
        setFoods(filteredF);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; };
  }, [selectedState, selectedCityId]);

  // Filter places & foods based on selectedCityId and active search query
  const filteredPlaces = places.filter((p) => {
    const matchesCity = !selectedCityId || p.city_id === selectedCityId || (p.sub_location && p.sub_location.toLowerCase().includes(selectedCityId.replace(/_/g, ' ')));
    const matchesQuery = !searchQuery || 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCity && matchesQuery;
  });

  const filteredFoods = foods.filter((f) => {
    const matchesCity = !selectedCityId || f.city_id === selectedCityId;
    const matchesQuery = !searchQuery || 
      f.dish_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      f.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCity && matchesQuery;
  });

  const filteredCulture = INITIAL_CULTURE.filter(c => c.state_id === selectedState.id);

  const handleStateSelect = (stateObj: StateData) => {
    setSelectedState(stateObj);
    setSelectedCityId(''); // Reset city selection on state change
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

      {/* Real-Time Agent Execution Pipeline Inspector */}
      <AgentVisualization
        selectedStateName={selectedState.name}
        selectedCityId={selectedCityId}
        loading={loading}
        placesCount={places.length}
        foodsCount={foods.length}
      />

      {/* Multi-Modal AI Assistant Guide Banner & Modal */}
      <MultiModalAssistantModal
        selectedStateName={selectedState.name}
        selectedCityId={selectedCityId}
        placesCount={places.length}
        foodsCount={foods.length}
        placesData={places}
        foodsData={foods}
        restaurantTiers={restaurantTiers}
        youtubeData={youtubeData}
        dataGovData={dataGovData}
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

      {/* AI YouTube Vlogs & Transcripts Scraper Section */}
      <YouTubeAnalysisSection
        youtubeData={youtubeData}
        locationName={selectedCityId ? selectedCityId.replace(/_/g, ' ').toUpperCase() : selectedState.name}
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
