"""
Agent Orchestrator (search_orchestrator.py)
Executes Food, Places, and Image agents concurrently using asyncio.gather().
"""

import asyncio
from typing import Optional, Dict, Any

from app.agents.food_agent import search_food
from app.agents.places_agent import search_places
from app.agents.image_agent import resolve_images
from app.agents.youtube_agent import analyze_youtube_vlogs

async def orchestrate_concurrent_search(state: str, city: Optional[str] = None) -> Dict[str, Any]:
    """Runs Food Search, Places Search, YouTube Vlogs Agent, and Image Resolver Agent in parallel."""
    
    # Step 1: Execute Food, Places, and YouTube Vlogs agents concurrently
    food_task = asyncio.create_task(search_food(state=state, city=city))
    places_task = asyncio.create_task(search_places(state=state, city=city))
    youtube_task = asyncio.create_task(analyze_youtube_vlogs(state=state, city=city))

    raw_foods, raw_places, youtube_insights = await asyncio.gather(food_task, places_task, youtube_task)

    # Step 2: Execute Image Resolver Agent concurrently for places and foods
    places_img_task = asyncio.create_task(resolve_images(raw_places))
    foods_img_task = asyncio.create_task(resolve_images(raw_foods))

    places_images, foods_images = await asyncio.gather(places_img_task, foods_img_task)

    # Step 3: Map distinct image URLs back to place & food items
    formatted_places = []
    for idx, p in enumerate(raw_places):
        p_copy = dict(p)
        p_copy["image_url"] = places_images[idx]
        formatted_places.append(p_copy)

    formatted_foods = []
    for idx, f in enumerate(raw_foods):
        f_copy = dict(f)
        f_copy["image_url"] = foods_images[idx]
        formatted_foods.append(f_copy)

    return {
        "state": state,
        "city": city,
        "results": {
            "places": formatted_places,
            "food": formatted_foods,
            "youtube_analysis": youtube_insights
        }
    }
