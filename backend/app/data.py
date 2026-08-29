"""
LocalLens Backend Mock Database & Sample Dataset
Includes Indian states, cities, famous places, authentic foods with trust scores, and cultural traditions.
"""

STATES_DATA = {
    "andhra_pradesh": {
        "id": "andhra_pradesh",
        "name": "Andhra Pradesh",
        "tagline": "The Sunrise State of India",
        "hero_image": "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1920&q=80", # Visakhapatnam Coastal Beach / Bay
        "cities": [
            {"id": "visakhapatnam", "name": "Visakhapatnam (Vizag)"},
            {"id": "araku", "name": "Araku Valley"},
            {"id": "vijayawada", "name": "Vijayawada"},
            {"id": "tirupati", "name": "Tirupati"}
        ]
    },
    "rajasthan": {
        "id": "rajasthan", "name": "Rajasthan",
        "tagline": "The Land of Kings & Palaces",
        "hero_image": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=1920&q=80", # Hawa Mahal / Jaipur Fort
        "cities": [
            {"id": "jaipur", "name": "Jaipur"},
            {"id": "udaipur", "name": "Udaipur"},
            {"id": "jaisalmer", "name": "Jaisalmer"},
            {"id": "jodhpur", "name": "Jodhpur"}
        ]
    },
    "kerala": {
        "id": "kerala",
        "name": "Kerala",
        "tagline": "God's Own Country",
        "hero_image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80", # Kerala Backwaters
        "cities": [
            {"id": "alleppey", "name": "Alleppey (Alappuzha)"},
            {"id": "munnar", "name": "Munnar"},
            {"id": "kochi", "name": "Kochi"},
            {"id": "varkala", "name": "Varkala"}
        ]
    },
    "maharashtra": {
        "id": "maharashtra",
        "name": "Maharashtra",
        "tagline": "Unlimited Gateway to Heritage & Energy",
        "hero_image": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1920&q=80", # Gateway of India / Marine Drive
        "cities": [
            {"id": "mumbai", "name": "Mumbai"},
            {"id": "pune", "name": "Pune"},
            {"id": "nashik", "name": "Nashik"},
            {"id": "aurangabad", "name": "Chhatrapati Sambhajinagar"}
        ]
    },
    "tamil_nadu": {
        "id": "tamil_nadu",
        "name": "Tamil Nadu",
        "tagline": "Land of Temples & Dravidian Heritage",
        "hero_image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=80", # Meenakshi Temple / Chennai Beach
        "cities": [
            {"id": "chennai", "name": "Chennai"},
            {"id": "madurai", "name": "Madurai"},
            {"id": "ooty", "name": "Ooty"},
            {"id": "thanjavur", "name": "Thanjavur"}
        ]
    }
}

PLACES_DATA = [
    # Andhra Pradesh
    {
        "id": "rk-beach",
        "state_id": "andhra_pradesh",
        "city_id": "visakhapatnam",
        "title": "RK Beach & Submarine Museum",
        "sub_location": "Beach Road, Visakhapatnam",
        "rating": 4.7,
        "reviews_count": 12450,
        "category": "Beach & Heritage",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "description": "Scenic coastline featuring the iconic INS Kursura Submarine Museum and vibrant sunset promenades.",
        "latitude": 17.7126,
        "longitude": 83.3188,
        "tags": ["#CoastalViews", "#Beach", "#Museum"]
    },
    {
        "id": "araku-valley",
        "state_id": "andhra_pradesh",
        "city_id": "araku",
        "title": "Araku Valley Coffee Plantations",
        "sub_location": "Eastern Ghats, Araku",
        "rating": 4.8,
        "reviews_count": 8920,
        "category": "Nature & Mountains",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "description": "Lush hill station renowned for organic coffee plantations, misty valleys, and tribal museum culture.",
        "latitude": 18.3273,
        "longitude": 82.8775,
        "tags": ["#MistyHills", "#CoffeePlantation", "#Nature"]
    },
    {
        "id": "borra-caves",
        "state_id": "andhra_pradesh",
        "city_id": "araku",
        "title": "Borra Stalactite Caves",
        "sub_location": "Ananthagiri Hills, Araku",
        "rating": 4.6,
        "reviews_count": 6540,
        "category": "Heritage & Geological",
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        "description": "One of India's deepest limestone caves featuring naturally formed stalagmites illuminated with vibrant lights.",
        "latitude": 18.2804,
        "longitude": 83.0396,
        "tags": ["#Geology", "#Caves", "#Adventure"]
    },
    {
        "id": "kailasagiri",
        "state_id": "andhra_pradesh",
        "city_id": "visakhapatnam",
        "title": "Kailasagiri Hilltop Park",
        "sub_location": "Hill Top Road, Visakhapatnam",
        "rating": 4.6,
        "reviews_count": 9100,
        "category": "Panoramic Viewpoint",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "description": "Hilltop park offering panoramic views of the Bay of Bengal, ropeway rides, and colossal Shiva-Parvati statues.",
        "latitude": 17.7492,
        "longitude": 83.3422,
        "tags": ["#PanoramicViews", "#Ropeway", "#Park"]
    },
    # Rajasthan
    {
        "id": "hawa-mahal",
        "state_id": "rajasthan",
        "city_id": "jaipur",
        "title": "Hawa Mahal (Palace of Winds)",
        "sub_location": "Pink City, Jaipur",
        "rating": 4.8,
        "reviews_count": 34200,
        "category": "Heritage Architecture",
        "image": "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=80",
        "description": "Five-story pink sandstone palace with 953 intricately carved windows (jharokhas) designed for royal breezes.",
        "latitude": 26.9239,
        "longitude": 75.8267,
        "tags": ["#HeritageTemples", "#Architecture", "#PinkCity"]
    },
    {
        "id": "city-palace-udaipur",
        "state_id": "rajasthan",
        "city_id": "udaipur",
        "title": "Udaipur City Palace & Lake Pichola",
        "sub_location": "Lake Pichola, Udaipur",
        "rating": 4.9,
        "reviews_count": 28900,
        "category": "Palace & Lakes",
        "image": "https://images.unsplash.com/photo-1615836245337-f5b9b2303f1c?auto=format&fit=crop&w=800&q=80",
        "description": "Majestic palace complex built over 400 years overlooking the serene waters of Lake Pichola.",
        "latitude": 24.5764,
        "longitude": 73.6835,
        "tags": ["#Palace", "#LakeViews", "#Royalty"]
    },
    # Kerala
    {
        "id": "alleppey-backwaters",
        "state_id": "kerala",
        "city_id": "alleppey",
        "title": "Alleppey Houseboat Backwaters",
        "sub_location": "Punnamada Lake, Alleppey",
        "rating": 4.9,
        "reviews_count": 41200,
        "category": "Eco Tourism & Cruising",
        "image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
        "description": "Tranquil network of lagoons, lakes, and canals navigated by traditional Kettuvallam houseboats.",
        "latitude": 9.4981,
        "longitude": 76.3388,
        "tags": ["#Backwaters", "#Houseboat", "#Serene"]
    },
    {
        "id": "tea-gardens-munnar",
        "state_id": "kerala",
        "city_id": "munnar",
        "title": "Munnar Tea Estates & Mattupetty",
        "sub_location": "Kannan Devan Hills, Munnar",
        "rating": 4.8,
        "reviews_count": 18500,
        "category": "Nature & Plantation",
        "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        "description": "Endless rolling green tea plantations nestled high in the Western Ghats with cool mountain breeze.",
        "latitude": 10.0889,
        "longitude": 77.0595,
        "tags": ["#TeaEstates", "#Greenery", "#Hills"]
    },
    # Maharashtra
    {
        "id": "marine-drive",
        "state_id": "maharashtra",
        "city_id": "mumbai",
        "title": "Marine Drive & Queen's Necklace",
        "sub_location": "South Mumbai, Mumbai",
        "rating": 4.8,
        "reviews_count": 52100,
        "category": "Urban Promenade",
        "image": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
        "description": "3.6 km long C-shaped boulevard along the Arabian Sea coast, famous for sparkling evening lights.",
        "latitude": 18.9438,
        "longitude": 72.8230,
        "tags": ["#CoastalViews", "#Sunset", "#CityLights"]
    },
    # Tamil Nadu
    {
        "id": "meenakshi-temple",
        "state_id": "tamil_nadu",
        "city_id": "madurai",
        "title": "Madurai Meenakshi Amman Temple",
        "sub_location": "Grand Bazaar, Madurai",
        "rating": 4.9,
        "reviews_count": 38900,
        "category": "Spiritual Heritage",
        "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        "description": "Ancient Dravidian architectural marvel featuring 14 towering gopurams decorated with thousands of colorful sculptures.",
        "latitude": 9.9195,
        "longitude": 78.1193,
        "tags": ["#HeritageTemples", "#Spiritual", "#Dravidian"]
    }
]

FOODS_DATA = [
    # Andhra Pradesh
    {
        "id": "andhra-thali",
        "state_id": "andhra_pradesh",
        "city_id": "visakhapatnam",
        "dish_name": "Authentic Andhra Meals (Thali)",
        "category": "Traditional Meals",
        "price_inr": 120,
        "trust_score": 98,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Pure spice perfection! The aromatic Pappu with hot ghee and Gongura chutney is unmatched.",
        "source": "Local Foodie Vlogs & 1,420 Reviews",
        "tags": ["#Thali", "#Spicy", "#Authentic"]
    },
    {
        "id": "gongura-pachadi",
        "state_id": "andhra_pradesh",
        "city_id": "vijayawada",
        "dish_name": "Gongura Pachadi & Rice",
        "category": "Local Specialty Chutney",
        "price_inr": 60,
        "trust_score": 96,
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        "review_quote": "The tangy signature sorrel leaf pickle served with hot steaming rice and garlic pods.",
        "source": "YouTube Street Food Vloggers",
        "tags": ["#Tangy", "#StreetFood", "#Signature"]
    },
    {
        "id": "bamboo-chicken",
        "state_id": "andhra_pradesh",
        "city_id": "araku",
        "dish_name": "Araku Bamboo Chicken",
        "category": "Tribal Delicacy",
        "price_inr": 250,
        "trust_score": 94,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Marinated chicken cooked inside green bamboo stalks over open charcoal embers with zero added oil.",
        "source": "Araku Tribal Food Guides",
        "tags": ["#TribalFood", "#Organic", "#Smoky"]
    },
    {
        "id": "pesarattu",
        "state_id": "andhra_pradesh",
        "city_id": "visakhapatnam",
        "dish_name": "MLA Pesarattu Upma",
        "category": "Breakfast Classic",
        "price_inr": 80,
        "trust_score": 95,
        "image": "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Crispy green gram crepe stuffed with savory ginger upma served with fresh ginger chutney.",
        "source": "Coastal Andhra Breakfast Club",
        "tags": ["#Breakfast", "#Healthy", "#Crispy"]
    },

    # Rajasthan
    {
        "id": "dal-baati-churma",
        "state_id": "rajasthan",
        "city_id": "jaipur",
        "dish_name": "Dal Baati Churma",
        "category": "Royal Cuisine",
        "price_inr": 220,
        "trust_score": 99,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Baked wheat balls dipped in pure desi ghee served with spicy Panchmel dal and sweet churma.",
        "source": "Jaipur Food Tours & Heritage Guides",
        "tags": ["#RoyalThali", "#DesiGhee", "#MustTry"]
    },
    {
        "id": "laal-maas",
        "state_id": "rajasthan",
        "city_id": "jodhpur",
        "dish_name": "Traditional Laal Maas",
        "category": "Royal Meat Curry",
        "price_inr": 380,
        "trust_score": 95,
        "image": "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Fiery red mutton curry slow-cooked with Mathania red chilies and yogurt.",
        "source": "Jodhpur Heritage Chefs",
        "tags": ["#SpicyCurry", "#MathaniaChili", "#Heritage"]
    },

    # Kerala
    {
        "id": "kerala-sadya",
        "state_id": "kerala",
        "city_id": "alleppey",
        "dish_name": "Traditional Onam Sadya",
        "category": "Banana Leaf Feast",
        "price_inr": 280,
        "trust_score": 99,
        "image": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Grand vegetarian banquet featuring 24+ dishes served on fresh plantain leaf with Palada Payasam.",
        "source": "Kerala Culinary Heritage",
        "tags": ["#BananaLeaf", "#Sadya", "#Feast"]
    },
    {
        "id": "karimeen-pollichathu",
        "state_id": "kerala",
        "city_id": "kochi",
        "dish_name": "Karimeen Pollichathu",
        "category": "Backwater Seafood",
        "price_inr": 450,
        "trust_score": 97,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Pearl spot fish marinated in spicy shallot paste, wrapped in banana leaf and grilled on tawa.",
        "source": "Kochi Backwater Foodies",
        "tags": ["#Seafood", "#BananaLeafWrap", "#Coastal"]
    },

    # Maharashtra
    {
        "id": "vada-pav",
        "state_id": "maharashtra",
        "city_id": "mumbai",
        "dish_name": "Mumbai Artisanal Vada Pav",
        "category": "Street Food Icon",
        "price_inr": 25,
        "trust_score": 99,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Deep-fried spiced potato patty sandwiched in soft pav bun with dry garlic chutney.",
        "source": "Mumbai Street Food Collective",
        "tags": ["#StreetFood", "#BudgetFriendly", "#Iconic"]
    },
    {
        "id": "misal-pav",
        "state_id": "maharashtra",
        "city_id": "pune",
        "dish_name": "Kolhapuri Spicy Misal Pav",
        "category": "Spicy Breakfast",
        "price_inr": 90,
        "trust_score": 96,
        "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Sprouted moth bean curry topped with crunchy farsan, chopped onions, and lemon juice.",
        "source": "Pune Food Trail",
        "tags": ["#SpicyMisal", "#Farsan", "#Breakfast"]
    },

    # Tamil Nadu
    {
        "id": "cheeese-kothu-parotta",
        "state_id": "tamil_nadu",
        "city_id": "madurai",
        "dish_name": "Madurai Kothu Parotta",
        "category": "Night Market Special",
        "price_inr": 140,
        "trust_score": 96,
        "image": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Flaky layered parotta shredded on iron griddle with eggs, chicken gravy, and aromatic spices.",
        "source": "Madurai Street Eats",
        "tags": ["#StreetFood", "#Kothu", "#NightMarket"]
    }
]

CULTURE_DATA = [
    {
        "id": "dheemsa-dance",
        "state_id": "andhra_pradesh",
        "title": "Dhimsa Tribal Dance",
        "category": "Folk Art & Heritage",
        "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        "description": "Rhythmic tribal group dance performed in colorful traditional attires in Araku valley."
    },
    {
        "id": "ghoomar-rajasthan",
        "state_id": "rajasthan",
        "title": "Ghoomar Folk Performance",
        "category": "Traditional Dance",
        "image": "https://images.unsplash.com/photo-1545232979-fbf34f5ce948?auto=format&fit=crop&w=800&q=80",
        "description": "Royal swirling dance performed by women wearing flowing ghagras during festivals."
    },
    {
        "id": "kathakali-kerala",
        "state_id": "kerala",
        "title": "Kathakali Classical Drama",
        "category": "Classical Art",
        "image": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80",
        "description": "Storytelling dance-drama known for elaborate vibrant face makeup and hand gestures."
    }
]
