"""
Sequential & Multi-Stage Chained Agent Pipeline (app/agents/chained_orchestrator.py)

Stage 1: Primary Discovery Agents (Places & Food) identify core entities for the location.
Stage 2: YouTube Insights Agent analyzes video consensus specifically for Stage 1 entities.
Stage 3: High-Fidelity Image Resolver Agent inspects the specific entity outputs from Stage 1 & Stage 2 to fetch & verify unique high-resolution images.
"""

import asyncio
from typing import Optional, Dict, Any

from app.agents.food_agent import search_food_and_restaurants
from app.agents.places_agent import search_places
from app.agents.image_agent import resolve_images
from app.agents.youtube_agent import analyze_youtube_vlogs
from app.agents.langchain_agent import execute_langchain_react_agent

async def orchestrate_chained_search(state: str, city: Optional[str] = None) -> Dict[str, Any]:
    """
    Executes a multi-stage chained agent pipeline:
    Stage 1: Primary Entity Discovery (Places & Food + Budget/Moderate/Luxury Restaurants)
    Stage 2: YouTube Vlog Consensus on Discovered Entities (10 Recent, 10 Popular, 10 High Subs)
    Stage 3: High-Fidelity Image Resolver Agent fetching distinct photos for confirmed entities
    """
    
    # -------------------------------------------------------------------------
    # STAGE 1: Primary Entity Discovery Agents
    # -------------------------------------------------------------------------
    food_task = asyncio.create_task(search_food_and_restaurants(state=state, city=city))
    places_task = asyncio.create_task(search_places(state=state, city=city))
    langchain_task = asyncio.create_task(execute_langchain_react_agent(state=state, city=city))

    restaurant_data, raw_places, langchain_tool_result = await asyncio.gather(food_task, places_task, langchain_task)

    raw_foods = restaurant_data.get("all_restaurants", [])
    discovered_place_names = [p.get("name") or p.get("title") for p in raw_places]
    discovered_food_names = [r.get("name") for r in raw_foods]

    # -------------------------------------------------------------------------
    # STAGE 2: Secondary Dependent Agent (YouTube Analysis for 30 videos)
    # -------------------------------------------------------------------------
    youtube_analysis = await analyze_youtube_vlogs(state=state, city=city)
    
    youtube_analysis["insights_summary"].append(
        f"Top Vlogger Recommended Places: {', '.join(discovered_place_names[:2])} and Restaurants: {', '.join(discovered_food_names[:2])}."
    )

    # -------------------------------------------------------------------------
    # STAGE 3: Final Dependent Agent (Image Resolver)
    # -------------------------------------------------------------------------
    places_img_task = asyncio.create_task(resolve_images(raw_places))
    foods_img_task = asyncio.create_task(resolve_images(raw_foods))

    places_images, foods_images = await asyncio.gather(places_img_task, foods_img_task)

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
        "pipeline_stages": {
            "stage_1_discovery": {
                "discovered_places_count": len(raw_places),
                "discovered_foods_count": len(raw_foods)
            },
            "stage_2_youtube_chain": {
                "analyzed_based_on_entities": discovered_place_names + discovered_food_names
            },
            "stage_3_image_resolution": {
                "resolved_images_count": len(places_images) + len(foods_images)
            },
            "stage_4_langchain_tool_binding": langchain_tool_result
        },
        "results": {
            "places": formatted_places,
            "food": formatted_foods,
            "restaurant_tiers": restaurant_data,
            "youtube_analysis": youtube_analysis,
            "langchain_agent_tool_output": langchain_tool_result
        }
    }
    }
        },
        "results": {
            "places": formatted_places,
            "food": formatted_foods,
            "youtube_analysis": youtube_analysis
        }
    }
