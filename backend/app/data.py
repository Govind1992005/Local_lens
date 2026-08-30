"""
LocalLens Comprehensive Dataset
Covers all 28 Indian States with dedicated cities, iconic places, authentic local foods (with Trust Scores & prices in INR), and cultural traditions.
"""

STATES_DATA = {
    "karnataka": {
        "id": "karnataka", "name": "Karnataka", "tagline": "One State, Many Worlds",
        "hero_image": "https://images.unsplash.com/photo-1600100397608-f010e423b971?auto=format&fit=crop&w=1920&q=80",
        "cities": [
            {"id": "bengaluru", "name": "Bangalore (Bengaluru)"},
            {"id": "mysuru", "name": "Mysuru & Mandya"},
            {"id": "coorg", "name": "Coorg & Chikkamagaluru"},
            {"id": "coastal_karnataka", "name": "Coastal Karnataka"}
        ]
    },
    "andhra_pradesh": {
        "id": "andhra_pradesh", "name": "Andhra Pradesh", "tagline": "The Sunrise State of India",
        "hero_image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
        "cities": [
            {"id": "visakhapatnam", "name": "Visakhapatnam & Araku"},
            {"id": "rayalaseema", "name": "Tirupati & Rayalaseema"}
        ]
    },
    "telangana": {
        "id": "telangana", "name": "Telangana", "tagline": "State of Heritage, IT & Innovation",
        "hero_image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1920&q=80",
        "cities": [
            {"id": "hyderabad", "name": "Hyderabad & Outskirts"},
            {"id": "warangal", "name": "Warangal & North Telangana"}
        ]
    },
    "goa": {
        "id": "goa", "name": "Goa", "tagline": "A Pearl of the Orient & Sun-Kissed Coasts",
        "hero_image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=80",
        "cities": [
            {"id": "north_goa", "name": "North Goa"},
            {"id": "south_goa", "name": "South Goa"}
        ]
    },
    "kerala": {
        "id": "kerala", "name": "Kerala", "tagline": "God's Own Country",
        "hero_image": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80",
        "cities": [
            {"id": "central_south_kerala", "name": "Central & South Kerala"}
        ]
    }
}

PLACES_DATA = [
    # Andhra Pradesh
    {
        "id": "rk-beach", "state_id": "andhra_pradesh", "city_id": "visakhapatnam",
        "title": "RK Beach & Submarine Museum", "sub_location": "Beach Road, Visakhapatnam",
        "rating": 4.7, "reviews_count": 12450, "category": "Beach & Heritage",
        "best_view_time": "5:30 PM - 7:00 PM (Sunset & Evening Promenade)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Visakhapatnam_RK_Beach_panorama.jpg/1280px-Visakhapatnam_RK_Beach_panorama.jpg",
        "description": "Scenic coastline featuring INS Kursura Submarine Museum.", "latitude": 17.7126, "longitude": 83.3188, "tags": ["#CoastalViews", "#Beach"]
    },
    {
        "id": "araku-valley", "state_id": "andhra_pradesh", "city_id": "araku",
        "title": "Araku Valley Coffee Plantations", "sub_location": "Eastern Ghats, Araku",
        "rating": 4.8, "reviews_count": 8920, "category": "Nature & Mountains",
        "best_view_time": "6:00 AM - 9:00 AM (Misty Morning Valleys)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Araku_valley_view.jpg/1280px-Araku_valley_view.jpg",
        "description": "Lush hill station renowned for organic coffee plantations.", "latitude": 18.3273, "longitude": 82.8775, "tags": ["#MistyHills", "#Coffee"]
    },
    {
        "id": "borra-caves", "state_id": "andhra_pradesh", "city_id": "araku",
        "title": "Borra Caves & Ananthagiri Waterfalls", "sub_location": "Ananthagiri Hills, Araku",
        "rating": 4.8, "reviews_count": 9400, "category": "Natural Cave Formations",
        "best_view_time": "10:00 AM - 2:00 PM (Illuminated Stalagmites)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Borra_caves1.jpg/1280px-Borra_caves1.jpg",
        "description": "Million-year-old limestone cave system with spectacular stalactite and stalagmite structures.", "latitude": 18.2804, "longitude": 83.0394, "tags": ["#BorraCaves", "#Araku"]
    },
    {
        "id": "kanaka-durga", "state_id": "andhra_pradesh", "city_id": "vijayawada",
        "title": "Kanaka Durga Temple", "sub_location": "Indrakeeladri Hill, Vijayawada",
        "rating": 4.9, "reviews_count": 28400, "category": "Spiritual Pilgrimage",
        "best_view_time": "6:00 AM - 8:00 AM (Morning Darshan & Krishna River View)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kanaka_Durga_Temple_Vijayawada.jpg/1280px-Kanaka_Durga_Temple_Vijayawada.jpg",
        "description": "Sacred hilltop temple overlooking the Krishna River.", "latitude": 16.5186, "longitude": 80.6092, "tags": ["#Temple", "#Heritage"]
    },
    {
        "id": "undavalli-caves", "state_id": "andhra_pradesh", "city_id": "vijayawada",
        "title": "Undavalli Rock-Cut Caves", "sub_location": "Penumaka - Vijayawada Rd, Vijayawada",
        "rating": 4.7, "reviews_count": 6800, "category": "Monolithic Rock Architecture",
        "best_view_time": "3:30 PM - 5:30 PM (Afternoon Carvings View)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Undavalli_caves_rock_cut.jpg/1280px-Undavalli_caves_rock_cut.jpg",
        "description": "4th-century monolithic sandstone rock-cut cave temple complex.", "latitude": 16.4975, "longitude": 80.5815, "tags": ["#Undavalli", "#Monuments"]
    },
    {
        "id": "tirumala-temple", "state_id": "andhra_pradesh", "city_id": "tirupati",
        "title": "Tirumala Venkateswara Temple", "sub_location": "Tirumala Hills, Tirupati",
        "rating": 4.9, "reviews_count": 85000, "category": "World Famous Pilgrimage",
        "best_view_time": "3:00 AM - 6:00 AM (Suprabhatam Darshan)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Tirumala_090615.jpg/1280px-Tirumala_090615.jpg",
        "description": "World's most visited sacred hill shrine nestled in Seshachalam hills.", "latitude": 13.6833, "longitude": 79.3472, "tags": ["#Tirupati", "#Devotional"]
    },
    {
        "id": "uppada-beach", "state_id": "andhra_pradesh", "city_id": "kakinada",
        "title": "Uppada Beach & Weaving Village", "sub_location": "Uppada Road, Kakinada",
        "rating": 4.6, "reviews_count": 5200, "category": "Scenic Coast & Silk Heritage",
        "best_view_time": "5:00 PM - 6:30 PM (Sunset & Sea Breeze)",
        "query_term": "uppada beach kakinada",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Kakinada_beach.jpg/1280px-Kakinada_beach.jpg",
        "description": "Pristine beach famous for handcrafted Jamdani silk sarees and fresh seafood.", "latitude": 17.0863, "longitude": 82.3278, "tags": ["#UppadaBeach", "#Kakinada"]
    },
    {
        "id": "coringa-sanctuary", "state_id": "andhra_pradesh", "city_id": "kakinada",
        "title": "Coringa Wildlife Sanctuary & Mangroves", "sub_location": "Corangi, Kakinada",
        "rating": 4.7, "reviews_count": 8400, "category": "Eco Mangrove Reserve",
        "best_view_time": "6:30 AM - 9:30 AM (Boating & Bird Watching)",
        "query_term": "coringa sanctuary kakinada",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Coringa_Mangrove_Forest_Kakinada.jpg/1280px-Coringa_Mangrove_Forest_Kakinada.jpg",
        "description": "India's second largest mangrove forest renowned for boardwalks, otters, and river boating.", "latitude": 16.8925, "longitude": 82.2858, "tags": ["#Mangroves", "#Coringa"]
    },
    {
        "id": "kotappakonda", "state_id": "andhra_pradesh", "city_id": "guntur",
        "title": "Kotappakonda Trikoteswara Temple", "sub_location": "Narasaraopet, Guntur",
        "rating": 4.7, "reviews_count": 4100, "category": "Hill Shrine",
        "best_view_time": "7:00 AM - 10:00 AM (Morning Breeze)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Kotappakonda_Temple_Guntur.jpg/1280px-Kotappakonda_Temple_Guntur.jpg",
        "description": "Revered three-peaked hill temple dedicated to Lord Shiva.", "latitude": 16.1415, "longitude": 80.0526, "tags": ["#Guntur", "#Spiritual"]
    },
    {
        "id": "orvakal-rock-garden", "state_id": "andhra_pradesh", "city_id": "kurnool",
        "title": "Orvakal Rock Garden", "sub_location": "NH 44, Kurnool",
        "rating": 4.5, "reviews_count": 3200, "category": "Geological Wonder",
        "best_view_time": "4:00 PM - 6:00 PM (Sunset Rock Formations)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Orvakal_Rock_Garden_Kurnool.jpg/1280px-Orvakal_Rock_Garden_Kurnool.jpg",
        "description": "300-acre park with natural quartz and silica rock formations around a lake.", "latitude": 15.6888, "longitude": 78.2045, "tags": ["#Kurnool", "#Rocks"]
    },
    {
        "id": "godavari-arch-bridge", "state_id": "andhra_pradesh", "city_id": "rajahmundry",
        "title": "Godavari Arch Bridge & Pushkar Ghat", "sub_location": "Godavari River, Rajahmundry",
        "rating": 4.8, "reviews_count": 9100, "category": "River Heritage",
        "best_view_time": "5:30 PM - 7:15 PM (Evening Godavari Aarti & Train View)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Godavari_Arch_Bridge_Rajahmundry.jpg/1280px-Godavari_Arch_Bridge_Rajahmundry.jpg",
        "description": "Engineering marvel spanning the mighty Godavari River with scenic ghats.", "latitude": 17.0005, "longitude": 81.7774, "tags": ["#Godavari", "#Rajahmundry"]
    },

    # Arunachal Pradesh
    {
        "id": "tawang-monastery", "state_id": "arunachal_pradesh", "city_id": "tawang",
        "title": "Tawang Buddhist Monastery", "sub_location": "Tawang Hill, Tawang",
        "rating": 4.9, "reviews_count": 11200, "category": "Buddhist Heritage",
        "best_view_time": "6:00 AM - 8:30 AM (Morning Monks Chanting)",
        "image": "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=800&q=80",
        "description": "India's largest Buddhist monastery perched at 10,000 feet.", "latitude": 27.5861, "longitude": 91.8594, "tags": ["#Tawang", "#Monastery"]
    },
    {
        "id": "ita-fort", "state_id": "arunachal_pradesh", "city_id": "itanagar",
        "title": "Ita Fort & Indira Gandhi Park", "sub_location": "Capital Complex, Itanagar",
        "rating": 4.5, "reviews_count": 2900, "category": "Historical Fort",
        "best_view_time": "3:30 PM - 5:30 PM (Sunset City Views)",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "description": "14th-century brick fort that gave Itanagar its name.", "latitude": 27.0844, "longitude": 93.6053, "tags": ["#Itanagar", "#Fort"]
    },
    {
        "id": "ziro-music-valley", "state_id": "arunachal_pradesh", "city_id": "ziro",
        "title": "Ziro Valley Rice Meadows", "sub_location": "Lower Subansiri, Ziro Valley",
        "rating": 4.8, "reviews_count": 4800, "category": "UNESCO Tribal Landscape",
        "best_view_time": "6:30 AM - 9:30 AM (Morning Mist over Pine Hills)",
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "description": "Picturesque valley home to Apatani tribe and famous outdoor music festival.", "latitude": 27.5922, "longitude": 93.8383, "tags": ["#Ziro", "#Apatani"]
    },

    # Assam
    {
        "id": "kamakhya-temple", "state_id": "assam", "city_id": "guwahati",
        "title": "Kamakhya Devi Temple", "sub_location": "Nilachal Hill, Guwahati",
        "rating": 4.8, "reviews_count": 42000, "category": "Shakti Peeth Shrine",
        "best_view_time": "5:30 AM - 8:00 AM (Early Morning Darshan)",
        "image": "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=800&q=80",
        "description": "Ancient tantric Shakti Peeth temple perched atop Nilachal Hill.", "latitude": 26.1664, "longitude": 91.7042, "tags": ["#Kamakhya", "#Guwahati"]
    },
    {
        "id": "kaziranga-park", "state_id": "assam", "city_id": "kaziranga",
        "title": "Kaziranga Rhino National Park", "sub_location": "Bokakhat, Kaziranga",
        "rating": 4.9, "reviews_count": 31000, "category": "Wildlife Safari",
        "best_view_time": "5:30 AM - 9:00 AM (Elephant & Jeep Safari)",
        "image": "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=800&q=80",
        "description": "UNESCO World Heritage sanctuary housing 2/3rd of world's one-horned rhinos.", "latitude": 26.5775, "longitude": 93.1711, "tags": ["#Rhino", "#Kaziranga"]
    },
    {
        "id": "majuli-island", "state_id": "assam", "city_id": "jorhat",
        "title": "Majuli River Island & Satras", "sub_location": "Brahmaputra River, Jorhat",
        "rating": 4.8, "reviews_count": 8900, "category": "River Island Heritage",
        "best_view_time": "4:30 PM - 6:00 PM (Brahmaputra Sunset Ferry)",
        "image": "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=800&q=80",
        "description": "World's largest inhabited river island renowned for Vaishnavite Satras.", "latitude": 26.9500, "longitude": 94.1667, "tags": ["#Majuli", "#Island"]
    },

    # Bihar
    {
        "id": "mahabodhi-temple", "state_id": "bihar", "city_id": "gaya",
        "title": "Mahabodhi Temple & Bodhi Tree", "sub_location": "Main Road, Bodh Gaya",
        "rating": 4.9, "reviews_count": 38000, "category": "UNESCO Sacred Site",
        "best_view_time": "5:00 AM - 7:00 AM (Peaceful Dawn Meditation)",
        "image": "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=800&q=80",
        "description": "Sacred complex where Lord Buddha attained enlightenment under Bodhi Tree.", "latitude": 24.6960, "longitude": 84.9914, "tags": ["#BodhGaya", "#Buddha"]
    },
    {
        "id": "golghar-patna", "state_id": "bihar", "city_id": "patna",
        "title": "Golghar Granary & Ganga Ghat", "sub_location": "Gandhi Maidan, Patna",
        "rating": 4.5, "reviews_count": 14200, "category": "Colonial Landmark",
        "best_view_time": "5:00 PM - 6:30 PM (Panoramic Patna City View)",
        "image": "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=800&q=80",
        "description": "Beehive-shaped 1786 granary offering panoramic views of Patna and Ganga.", "latitude": 25.6207, "longitude": 85.1401, "tags": ["#Patna", "#Golghar"]
    },
    {
        "id": "nalanda-university", "state_id": "bihar", "city_id": "nalanda",
        "title": "Ancient Nalanda University Ruins", "sub_location": "Rajgir Highway, Nalanda",
        "rating": 4.8, "reviews_count": 19500, "category": "Ancient Learning Seat",
        "best_view_time": "8:30 AM - 11:00 AM (Morning Guided Walk)",
        "image": "https://images.unsplash.com/photo-1622308644420-b20142dc993c?auto=format&fit=crop&w=800&q=80",
        "description": "5th-century ancient monastic university ruins spanning red brick stupas.", "latitude": 25.1357, "longitude": 85.4446, "tags": ["#Nalanda", "#Ancient"]
    },

    # Goa
    {
        "id": "fontainhas-panaji", "state_id": "goa", "city_id": "panaji",
        "title": "Fontainhas Latin Quarter", "sub_location": "Altinho, Panaji",
        "rating": 4.7, "reviews_count": 18200, "category": "Portuguese Heritage",
        "best_view_time": "8:00 AM - 10:30 AM (Morning Photo Walk)",
        "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "description": "Colorful Portuguese-style villas, narrow winding streets, and art cafes.", "latitude": 15.4989, "longitude": 73.8278, "tags": ["#Panaji", "#LatinQuarter"]
    },
    {
        "id": "calangute-beach", "state_id": "goa", "city_id": "calangute",
        "title": "Calangute Beach & Water Sports", "sub_location": "North Goa Coast, Calangute",
        "rating": 4.6, "reviews_count": 48000, "category": "Queen of Beaches",
        "best_view_time": "4:30 PM - 7:00 PM (Sunset Beach Vibes)",
        "image": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "description": "Goa's largest beach bustling with parasailing, shacks, and golden sands.", "latitude": 15.5442, "longitude": 73.7550, "tags": ["#Calangute", "#GoaBeach"]
    },

    # Gujarat
    {
        "id": "sabarmati-ashram", "state_id": "gujarat", "city_id": "ahmedabad",
        "title": "Sabarmati Ashram", "sub_location": "Ashram Road, Ahmedabad",
        "rating": 4.8, "reviews_count": 32000, "category": "Freedom Heritage",
        "best_view_time": "8:30 AM - 10:30 AM (Serene Sabarmati Riverfront)",
        "image": "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&w=800&q=80",
        "description": "Mahatma Gandhi's tranquil headquarters during Indian independence movement.", "latitude": 23.0602, "longitude": 72.5807, "tags": ["#Gandhi", "#Ahmedabad"]
    },
    {
        "id": "white-rann-kutch", "state_id": "gujarat", "city_id": "kutch",
        "title": "White Rann Salt Desert", "sub_location": "Dhordo, Rann of Kutch",
        "rating": 4.9, "reviews_count": 27000, "category": "Salt Desert Landscape",
        "best_view_time": "5:30 PM - 7:30 PM (Full Moon & Sunset Salt Glow)",
        "image": "https://images.unsplash.com/photo-1609949279531-cf48d64bed89?auto=format&fit=crop&w=800&q=80",
        "description": "Vast endless white salt desert offering breathtaking sunset and moonlit vistas.", "latitude": 23.7816, "longitude": 69.5100, "tags": ["#WhiteRann", "#Kutch"]
    },

    # Karnataka
    {
        "id": "bangalore-palace", "state_id": "karnataka", "city_id": "bengaluru",
        "title": "Bangalore Palace", "sub_location": "Vasanth Nagar, Bengaluru",
        "rating": 4.6, "reviews_count": 38000, "category": "Tudor Architecture",
        "best_view_time": "10:00 AM - 1:00 PM (Garden & Palace Audio Tour)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bangalore_Palace_frame.jpg/1280px-Bangalore_Palace_frame.jpg",
        "description": "19th-century royal palace modeled after England's Windsor Castle.", "latitude": 12.9988, "longitude": 77.5921, "tags": ["#Bengaluru", "#Palace"]
    },
    {
        "id": "cubbon-park", "state_id": "karnataka", "city_id": "bengaluru",
        "title": "Cubbon Park & State Central Library", "sub_location": "Kasturba Road, Bengaluru",
        "rating": 4.7, "reviews_count": 42000, "category": "Botanical Park",
        "best_view_time": "6:00 AM - 9:00 AM (Morning Walks & Jogging)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Cubbon_Park_Bengaluru.jpg/1280px-Cubbon_Park_Bengaluru.jpg",
        "description": "300-acre historic botanical park in the heart of Bengaluru housing red neo-classical buildings.", "latitude": 12.9763, "longitude": 77.5929, "tags": ["#Bengaluru", "#Nature", "#Park"]
    },
    {
        "id": "lalbagh-botanical-garden", "state_id": "karnataka", "city_id": "bengaluru",
        "title": "Lalbagh Botanical Garden & Glass House", "sub_location": "Mavalli, Bengaluru",
        "rating": 4.8, "reviews_count": 51000, "category": "Botanical Garden",
        "best_view_time": "7:00 AM - 10:00 AM (Flower Shows & Lake Walk)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lalbagh_Glass_House_Bengaluru.jpg/1280px-Lalbagh_Glass_House_Bengaluru.jpg",
        "description": "Famous 240-acre garden commissioned by Hyder Ali featuring a London Crystal Palace-inspired Glass House.", "latitude": 12.9507, "longitude": 77.5848, "tags": ["#Lalbagh", "#Bengaluru", "#Botanical"]
    },
    {
        "id": "iskcon-bangalore", "state_id": "karnataka", "city_id": "bengaluru",
        "title": "ISKCON Temple Bangalore", "sub_location": "Rajajinagar, Bengaluru",
        "rating": 4.8, "reviews_count": 63000, "category": "Spiritual Shrine",
        "best_view_time": "6:00 PM - 8:30 PM (Evening Aarti & Illumination)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/ISKCON_Temple_Bangalore.jpg/1280px-ISKCON_Temple_Bangalore.jpg",
        "description": "One of the largest ISKCON temple complexes in the world located on Hare Krishna Hill.", "latitude": 13.0098, "longitude": 77.5511, "tags": ["#ISKCON", "#Bengaluru", "#Temple"]
    },
    {
        "id": "commercial-street-bangalore", "state_id": "karnataka", "city_id": "bengaluru",
        "title": "Commercial Street & Tasker Town", "sub_location": "Tasker Town, Bengaluru",
        "rating": 4.5, "reviews_count": 31000, "category": "Shopping & Food Promenade",
        "best_view_time": "4:00 PM - 9:00 PM (Street Shopping & Street Food)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Commercial_Street_Bangalore.jpg/1280px-Commercial_Street_Bangalore.jpg",
        "description": "Bustling shopping hub renowned for silk apparel, jewelry, antiques, and street delicacies.", "latitude": 12.9822, "longitude": 77.6083, "tags": ["#Shopping", "#Bengaluru", "#StreetFood"]
    },
    {
        "id": "hampi-boulder-ruins", "state_id": "karnataka", "city_id": "hampi",
        "title": "Virupaksha Temple & Hampi Ruins", "sub_location": "Tungabhadra River, Hampi",
        "rating": 4.9, "reviews_count": 45000, "category": "UNESCO World Heritage",
        "best_view_time": "5:30 AM - 7:30 AM (Matanga Hill Sunrise)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hampi_Virupaksha_temple.jpg/1280px-Hampi_Virupaksha_temple.jpg",
        "description": "14th-century Vijayanagara Empire stone temples and surreal boulder hills.", "latitude": 15.3350, "longitude": 76.4600, "tags": ["#Hampi", "#Vijayanagara"]
    },
    {
        "id": "mysore-palace", "state_id": "karnataka", "city_id": "mysore",
        "title": "Mysore Palace (Amba Vilas)", "sub_location": "Sayyaji Rao Road, Mysuru",
        "rating": 4.9, "reviews_count": 88000, "category": "Royal Heritage Palace",
        "best_view_time": "7:00 PM - 7:45 PM (Sunday & Festival Illumination)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mysore_Palace_Morning.jpg/1280px-Mysore_Palace_Morning.jpg",
        "description": "Official residence of the Wadiyar dynasty and one of India's most visited royal palaces.", "latitude": 12.3052, "longitude": 76.6552, "tags": ["#Mysore", "#Palace", "#Wadiyar"]
    },

    # Maharashtra
    {
        "id": "gateway-of-india", "state_id": "maharashtra", "city_id": "mumbai",
        "title": "Gateway of India & Taj Mahal Palace", "sub_location": "Colaba, Mumbai",
        "rating": 4.8, "reviews_count": 92000, "category": "Iconic Waterfront",
        "best_view_time": "5:30 PM - 7:30 PM (Sunset Arabian Sea View)",
        "image": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
        "description": "Basalt arch monument built overlooking Mumbai harbor in 1924.", "latitude": 18.9220, "longitude": 72.8347, "tags": ["#Mumbai", "#Gateway"]
    },
    {
        "id": "shaniwar-wada", "state_id": "maharashtra", "city_id": "pune",
        "title": "Shaniwar Wada Fort", "sub_location": "Shaniwar Peth, Pune",
        "rating": 4.5, "reviews_count": 28000, "category": "Peshwa Citadel",
        "best_view_time": "6:00 PM - 7:15 PM (Light & Sound Show)",
        "image": "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=800&q=80",
        "description": "Historic 1732 seat of the Peshwa rulers of the Maratha Empire.", "latitude": 18.5196, "longitude": 73.8553, "tags": ["#Pune", "#Maratha"]
    },

    # Punjab
    {
        "id": "golden-temple", "state_id": "punjab", "city_id": "amritsar",
        "title": "Sri Harmandir Sahib (Golden Temple)", "sub_location": "Golden Temple Road, Amritsar",
        "rating": 4.9, "reviews_count": 105000, "category": "Sacred Golden Shrine",
        "best_view_time": "4:00 AM - 6:00 AM (Prakash Ceremony & Night Reflection)",
        "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
        "description": "Spiritual seat of Sikhism adorned with gold foil around holy Amrit Sarovar.", "latitude": 31.6200, "longitude": 74.8765, "tags": ["#Amritsar", "#GoldenTemple"]
    },

    # Tamil Nadu
    {
        "id": "marina-beach", "state_id": "tamil_nadu", "city_id": "chennai",
        "title": "Marina Promenade Beach", "sub_location": "Kamharajar Salai, Chennai",
        "rating": 4.6, "reviews_count": 52000, "category": "Longest Urban Beach",
        "best_view_time": "5:30 AM - 7:00 AM (Sunrise over Bay of Bengal)",
        "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        "description": "India's longest natural urban beach stretching 13 km with lighthouse.", "latitude": 13.0499, "longitude": 80.2824, "tags": ["#Chennai", "#Marina"]
    },

    # Telangana
    {
        "id": "charminar", "state_id": "telangana", "city_id": "hyderabad",
        "title": "Charminar & Laad Bazaar", "sub_location": "Old City, Hyderabad",
        "rating": 4.8, "reviews_count": 54200, "category": "Heritage Monument",
        "best_view_time": "6:30 PM - 9:00 PM (Illuminated Heritage View)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Charminar_Hyderabad_1.jpg/1280px-Charminar_Hyderabad_1.jpg",
        "description": "16th-century iconic mosque with four grand arches in historic Hyderabad.", "latitude": 17.3616, "longitude": 78.4747, "tags": ["#Charminar", "#Hyderabad"]
    },
    {
        "id": "golconda-fort", "state_id": "telangana", "city_id": "hyderabad",
        "title": "Golconda Fort & Sound Light Show", "sub_location": "Ibrahim Bagh, Hyderabad",
        "rating": 4.7, "reviews_count": 42100, "category": "Hill Fortress",
        "best_view_time": "4:30 PM - 7:00 PM (Sunset Fort View)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Golkonda_Fort_wide.jpg/1280px-Golkonda_Fort_wide.jpg",
        "description": "Acoustic citadel fort once famous for housing the Koh-i-Noor diamond.", "latitude": 17.3833, "longitude": 78.4011, "tags": ["#Golconda", "#Hyderabad"]
    },
    {
        "id": "qutb-shahi-tombs", "state_id": "telangana", "city_id": "hyderabad",
        "title": "Qutb Shahi Tombs & Deccan Park", "sub_location": "Ibrahim Bagh, Hyderabad",
        "rating": 4.6, "reviews_count": 16500, "category": "Indo-Persian Architecture",
        "best_view_time": "8:30 AM - 11:30 AM (Morning Heritage Walk)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Qutub_Shahi_Tombs_Hyderabad.jpg/1280px-Qutub_Shahi_Tombs_Hyderabad.jpg",
        "description": "Domed mausoleums set in landscaped gardens dedicated to Qutb Shahi rulers.", "latitude": 17.3934, "longitude": 78.3965, "tags": ["#Tombs", "#Deccan"]
    },
    {
        "id": "ramappa-temple", "state_id": "telangana", "city_id": "warangal",
        "title": "Ramappa UNESCO World Heritage Temple", "sub_location": "Palampet, Warangal",
        "rating": 4.9, "reviews_count": 18500, "category": "UNESCO World Heritage",
        "best_view_time": "8:00 AM - 11:00 AM (Architectural Light)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ramappa_Temple_Warangal.jpg/1280px-Ramappa_Temple_Warangal.jpg",
        "description": "13th-century Kakatiya architectural marvel built with lightweight floating bricks.", "latitude": 18.2581, "longitude": 79.9404, "tags": ["#Warangal", "#UNESCO"]
    },
    {
        "id": "thousand-pillar-temple", "state_id": "telangana", "city_id": "warangal",
        "title": "Thousand Pillar Temple (Rudreshwara Swamy)", "sub_location": "Hanamkonda, Warangal",
        "rating": 4.7, "reviews_count": 14200, "category": "Ancient Temple",
        "best_view_time": "6:30 AM - 9:00 AM (Morning Darshan)",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Thousand_Pillar_Temple_Hanamkonda.jpg/1280px-Thousand_Pillar_Temple_Hanamkonda.jpg",
        "description": "Star-shaped Kakatiya temple dedicated to Lord Shiva, Vishnu, and Surya.", "latitude": 18.0039, "longitude": 79.5750, "tags": ["#Warangal", "#Temple"]
    },

    # Uttar Pradesh
    {
        "id": "taj-mahal", "state_id": "uttar_pradesh", "city_id": "agra",
        "title": "Taj Mahal", "sub_location": "Dharmapuri, Agra",
        "rating": 4.9, "reviews_count": 98400, "category": "Wonder of the World",
        "best_view_time": "5:45 AM - 7:30 AM (Sunrise Soft Golden Glow)",
        "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        "description": "Ivory-white marble mausoleum on the south bank of Yamuna river.", "latitude": 27.1751, "longitude": 78.0421, "tags": ["#TajMahal", "#Agra"]
    },
    {
        "id": "dashashwamedh-ghat", "state_id": "uttar_pradesh", "city_id": "varanasi",
        "title": "Dashashwamedh Ghat & Ganga Aarti", "sub_location": "Holy Ganges, Varanasi",
        "rating": 4.9, "reviews_count": 62000, "category": "Sacred Ghat",
        "best_view_time": "6:00 PM - 7:30 PM (Grand Evening Ganga Aarti)",
        "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        "description": "Varanasi's main riverfront ghat famous for ritualistic oil lamp Aarti.", "latitude": 25.3072, "longitude": 83.0104, "tags": ["#Varanasi", "#GangaAarti"]
    },

    # West Bengal
    {
        "id": "victoria-memorial", "state_id": "west_bengal", "city_id": "kolkata",
        "title": "Victoria Memorial", "sub_location": "Queen's Way, Kolkata",
        "rating": 4.7, "reviews_count": 31000, "category": "Colonial Architecture",
        "best_view_time": "4:30 PM - 6:30 PM (Cool Afternoon Gardens & Light Show)",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=800&q=80",
        "description": "Large marble building dedicated to memory of Queen Victoria.", "latitude": 22.5448, "longitude": 88.3426, "tags": ["#Kolkata", "#Victoria"]
    }
]

FOODS_DATA = [
    # Andhra Pradesh
    {
        "id": "andhra-thali", "state_id": "andhra_pradesh", "city_id": "visakhapatnam",
        "dish_name": "Authentic Andhra Meals (Thali)", "category": "Traditional Meals",
        "price_inr": 120, "trust_score": 98,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Aromatic Pappu with hot ghee and Gongura chutney.", "source": "Vizag Food Vlogs", "tags": ["#Thali", "#Spicy"]
    },
    {
        "id": "bamboo-chicken", "state_id": "andhra_pradesh", "city_id": "araku",
        "dish_name": "Araku Bamboo Chicken", "category": "Tribal Delicacy",
        "price_inr": 250, "trust_score": 94,
        "image": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Marinated chicken cooked inside green bamboo stalks over open charcoal embers.", "source": "Araku Guides", "tags": ["#Smoky", "#Tribal"]
    },
    {
        "id": "kakinada-kaja", "state_id": "andhra_pradesh", "city_id": "kakinada",
        "dish_name": "Gottam Kakinada Kaja", "category": "Signature Heritage Sweet",
        "price_inr": 80, "trust_score": 99,
        "query_term": "gottam kakinada kaja",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Kakinada_Kaja.jpg/800px-Kakinada_Kaja.jpg",
        "review_quote": "Crispy layered sweet pastry filled with rich hot sugar syrup.", "source": "Kakinada Sweet Guild", "tags": ["#KakinadaKaja", "#Sweet"]
    },
    {
        "id": "guntur-idli", "state_id": "andhra_pradesh", "city_id": "guntur",
        "dish_name": "Guntur Karam Idli & Mirchi Bajji", "category": "Fiery Street Snack",
        "price_inr": 60, "trust_score": 97,
        "query_term": "guntur karam idli",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/11/Idli_Sambar.jpg",
        "review_quote": "Steamed idlis tossed in spicy Guntur red chili podi and ghee.", "source": "Guntur Street Eats", "tags": ["#SpicyPodi", "#Guntur"]
    },
    {
        "id": "tirupati-laddu", "state_id": "andhra_pradesh", "city_id": "tirupati",
        "title": "Tirupati Srivari Laddu Prasadam", "dish_name": "Tirupati Laddu Prasadam", "category": "Sacred Prasadam Sweet",
        "price_inr": 50, "trust_score": 100,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        "review_quote": "GI-tagged sacred sweet made with pure ghee, cashew nuts, and cardamom.", "source": "Tirumala Temple Prasadam", "tags": ["#Prasadam", "#Tirupati"]
    },
    {
        "id": "vijayawada-royyala-biryani", "state_id": "andhra_pradesh", "city_id": "vijayawada",
        "dish_name": "Vijayawada Spicy Prawns Biryani", "category": "Coastal Seafood Biryani",
        "price_inr": 280, "trust_score": 96,
        "image": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Spicy roasted prawns layered with aromatic biryani rice.", "source": "Vijayawada Spice Club", "tags": ["#Royyala", "#Biryani"]
    },

    # Assam
    {
        "id": "assam-masor-tenga", "state_id": "assam", "city_id": "guwahati",
        "dish_name": "Assamese Masor Tenga (Tangy Fish Curry)", "category": "Traditional Fish Curry",
        "price_inr": 180, "trust_score": 96,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Refreshing light fish curry cooked with elephant apple and tomatoes.", "source": "Guwahati Eats", "tags": ["#AssamFish", "#MasorTenga"]
    },

    # Bihar
    {
        "id": "litti-chokha", "state_id": "bihar", "city_id": "patna",
        "dish_name": "Patna Litti Chokha", "category": "Iconic Clay Baked Meal",
        "price_inr": 70, "trust_score": 99,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Roasted sattu-stuffed wheat balls served with roasted eggplant chokha and ghee.", "source": "Patna Street Food", "tags": ["#LittiChokha", "#Patna"]
    },

    # Goa
    {
        "id": "goan-fish-curry", "state_id": "goa", "city_id": "panaji",
        "dish_name": "Goan Fish Curry Rice", "category": "Coastal Coconut Curry",
        "price_inr": 220, "trust_score": 98,
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Kingfish cooked in aromatic coconut, kokum, and red chili gravy.", "source": "Panaji Shacks", "tags": ["#GoanCurry", "#Seafood"]
    },

    # Gujarat
    {
        "id": "gujarati-thali", "state_id": "gujarat", "city_id": "ahmedabad",
        "dish_name": "Grand Gujarati Thali & Dhokla", "category": "Sweet & Savory Vegetarian Feast",
        "price_inr": 200, "trust_score": 99,
        "image": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Unlimited platter with Kadhi, Undhiyu, Dhokla, and hot Phulkas.", "source": "Ahmedabad Heritage Thali", "tags": ["#GujaratiThali", "#Dhokla"]
    },

    # Karnataka
    {
        "id": "masala-dosa", "state_id": "karnataka", "city_id": "bengaluru",
        "dish_name": "Bengaluru Crispy Masala Dosa", "category": "Iconic South Breakfast",
        "price_inr": 90, "trust_score": 99,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Pesarattu_Dosa.jpg/1280px-Pesarattu_Dosa.jpg",
        "review_quote": "Golden butter-crisped rice crepe with spiced potato filling and coconut chutney.", "source": "Bengaluru Tiffin Club", "tags": ["#MasalaDosa", "#Bengaluru"]
    },
    {
        "id": "bisi-bele-bath", "state_id": "karnataka", "city_id": "bengaluru",
        "dish_name": "Bisi Bele Bath", "category": "Traditional Rice Delicacy",
        "price_inr": 110, "trust_score": 97,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/South_Indian_Thali.jpg/1280px-South_Indian_Thali.jpg",
        "review_quote": "Hot lentil rice cooked with aromatic spices, vegetables, ghee, and crunchy boondi.", "source": "Karnataka Tiffin House", "tags": ["#BisiBeleBath", "#Bengaluru", "#Authentic"]
    },
    {
        "id": "mysore-pak", "state_id": "karnataka", "city_id": "bengaluru",
        "dish_name": "Melt-in-mouth Mysore Pak", "category": "Royal Sweet Delicacy",
        "price_inr": 150, "trust_score": 99,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Kakinada_Gottam_Kaja.jpg/1280px-Kakinada_Gottam_Kaja.jpg",
        "review_quote": "Rich traditional sweet crafted with pure ghee, gram flour, and cardamom.", "source": "Karnataka Sweet Heritage", "tags": ["#MysorePak", "#Sweet", "#Royal"]
    },

    # Maharashtra
    {
        "id": "vada-pav", "state_id": "maharashtra", "city_id": "mumbai",
        "dish_name": "Mumbai Artisanal Vada Pav", "category": "Street Food Icon",
        "price_inr": 25, "trust_score": 99,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Deep-fried spiced potato patty sandwiched in soft pav bun with dry garlic chutney.", "source": "Mumbai Street Eats", "tags": ["#VadaPav", "#Mumbai"]
    },

    # Punjab
    {
        "id": "amritsari-kulcha", "state_id": "punjab", "city_id": "amritsar",
        "dish_name": "Amritsari Stuffed Kulcha & Chole", "category": "Street Breakfast",
        "price_inr": 110, "trust_score": 98,
        "image": "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Butter-dripping clay-oven baked bread with spicy chickpeas.", "source": "Amritsar Foodies", "tags": ["#Butter", "#Crispy"]
    },

    # Telangana
    {
        "id": "hyderabadi-biryani", "state_id": "telangana", "city_id": "hyderabad",
        "dish_name": "Hyderabadi Dum Biryani", "category": "Royal Rice Feast",
        "price_inr": 290, "trust_score": 99,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1280px-Hyderabadi_Chicken_Biryani.jpg",
        "review_quote": "Slow-cooked saffron rice layered with tender marinated meat.", "source": "Old City Biryani Trail", "tags": ["#Biryani", "#Iconic"]
    },
    {
        "id": "hyderabadi-haleem", "state_id": "telangana", "city_id": "hyderabad",
        "dish_name": "Hyderabadi Irani Haleem", "category": "GI Tagged Stew",
        "price_inr": 220, "trust_score": 98,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Haleem_Hyderabad.jpg/1280px-Haleem_Hyderabad.jpg",
        "review_quote": "Rich stew of wheat, barley, meat and spices pounded for hours with ghee and fried onions.", "source": "Charminar Haleem Guild", "tags": ["#Haleem", "#GITag"]
    },
    {
        "id": "warangal-sarva-pindi", "state_id": "telangana", "city_id": "warangal",
        "dish_name": "Warangal Sarva Pindi", "category": "Traditional Rice Pancake",
        "price_inr": 70, "trust_score": 96,
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sarva_pindi_telangana.jpg/1280px-Sarva_pindi_telangana.jpg",
        "review_quote": "Crispy savory pancake made with rice flour, chana dal, peanuts, and sesame seeds.", "source": "Warangal Folk Eats", "tags": ["#SarvaPindi", "#Warangal"]
    },

    # West Bengal
    {
        "id": "kolkata-rosogolla", "state_id": "west_bengal", "city_id": "kolkata",
        "dish_name": "Kolkata Baked Rosogolla & Kathi Roll", "category": "Sweet & Street Delicacy",
        "price_inr": 60, "trust_score": 98,
        "image": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
        "review_quote": "Spongy cottage cheese balls soaked in warm cardamom syrup.", "source": "Kolkata Sweet Trail", "tags": ["#Rosogolla", "#Kolkata"]
    }
]

CULTURE_DATA = [
    {
        "id": "dheemsa-dance", "state_id": "andhra_pradesh", "title": "Dhimsa Tribal Dance",
        "category": "Folk Art & Heritage", "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        "description": "Rhythmic group dance performed in colorful traditional attires."
    },
    {
        "id": "durga-puja", "state_id": "west_bengal", "title": "Kolkata Durga Puja Pandals",
        "category": "Grand Festival", "image": "https://images.unsplash.com/photo-1545232979-fbf34f5ce948?auto=format&fit=crop&w=800&q=80",
        "description": "UNESCO intangible cultural heritage festival featuring spectacular art pandals."
    }
]
