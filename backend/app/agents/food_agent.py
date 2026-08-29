"""
Food Search Agent (food_agent.py)
Discovers authentic regional dishes, street food, prices (in INR), and trust commentary.
Includes intelligent state-level fallback so every city across all 28 states returns rich results.
"""

import asyncio
from typing import List, Dict, Any, Optional
from app.data import FOODS_DATA

async def search_food(state: str, city: Optional[str] = None) -> List[Dict[str, Any]]:
    """Queries authentic food recommendations for given state & city with intelligent fallbacks."""
    await asyncio.sleep(0.02)
    
    state_clean = state.lower().replace("_", " ").replace(" ", "")
    city_clean = city.lower().replace("_", " ").replace(" ", "") if city else None

    # Step 1: Match city specifically if provided
    city_matches = []
    state_matches = []

    for f in FOODS_DATA:
        f_state = f.get("state_id", "").lower().replace("_", "").replace(" ", "")
        f_city = f.get("city_id", "").lower().replace("_", "").replace(" ", "")
        
        if state_clean in f_state or f_state in state_clean:
            state_matches.append(f)
            if city_clean and (city_clean in f_city or f_city in city_clean):
                city_matches.append(f)

    # Step 2: Return city specific items if found
    if city_matches:
        return city_matches

    # Step 3: If no city specific dish found, return state level dishes (Solution B / Fallback)
    if state_matches:
        return state_matches

    # Step 4: Generic fallback dishes if state is not in sample
    return [
        {
            "id": f"gen_dish_{state_clean}",
            "name": f"Authentic Regional Thali ({state.replace('_', ' ')})",
            "state": state,
            "city": city or "Local Market",
            "category": "Traditional Delicacy",
            "price_inr": 150,
            "trust_score": 96,
            "query_term": f"{state} food thali",
            "review_quote": f"Verified local thali featuring signature herbs and traditional regional spice mixes.",
            "source": "Local Food Guides & Street Vloggers",
            "tags": ["#Authentic", "#Thali", "#LocalSpecialty"]
        }
    ]
