"""
LocalLens FastAPI Backend Server
Provides endpoints for States, Cities, Places, Authentic Foods (with Trust Scores), Search, and AI Trip Planner.
"""

from fastapi import FastAPI, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List
import os

from app.data import STATES_DATA, PLACES_DATA, FOODS_DATA, CULTURE_DATA
from app.api.search import router as search_router

app = FastAPI(
    title="LocalLens API",
    description="Backend API for LocalLens - Discover places like a local",
    version="1.0.0"
)

app.include_router(search_router)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TripPlannerRequest(BaseModel):
    state_id: str
    city_id: Optional[str] = None
    days: int = 3
    budget: Optional[str] = "Moderate" # Budget, Moderate, Luxury
    interests: Optional[List[str]] = ["Food", "Heritage", "Nature"]

class TripDayItinerary(BaseModel):
    day: int
    title: str
    morning: str
    afternoon: str
    evening: str
    recommended_food: str

class TripPlannerResponse(BaseModel):
    state_name: str
    city_name: Optional[str] = None
    total_days: int
    itinerary: List[TripDayItinerary]
    estimated_cost_inr: str
    insider_tips: List[str]

@app.get("/health")
def health_check():
    return {"status": "ok", "service": "LocalLens API", "version": "1.0.0"}

@app.get("/api/states")
def get_states():
    """Returns all supported Indian states with metadata and cities."""
    return list(STATES_DATA.values())

@app.get("/api/states/{state_id}")
def get_state(state_id: str):
    """Returns detailed state information including cities."""
    if state_id not in STATES_DATA:
        raise HTTPException(status_code=404, detail="State not found")
    return STATES_DATA[state_id]

@app.get("/api/places")
def get_places(
    state_id: Optional[str] = Query(None, description="Filter by state ID"),
    city_id: Optional[str] = Query(None, description="Filter by city ID"),
    query: Optional[str] = Query(None, description="Search term in title, tags, description")
):
    """Returns list of places filtered by state, city, or search term."""
    results = PLACES_DATA
    if state_id:
        results = [p for p in results if p["state_id"] == state_id]
    if city_id:
        results = [p for p in results if p["city_id"] == city_id]
    if query:
        q = query.lower()
        results = [
            p for p in results 
            if q in p["title"].lower() or q in p["description"].lower() or any(q in t.lower() for t in p["tags"])
        ]
    return results

@app.get("/api/foods")
def get_foods(
    state_id: Optional[str] = Query(None, description="Filter by state ID"),
    city_id: Optional[str] = Query(None, description="Filter by city ID"),
    query: Optional[str] = Query(None, description="Search term in dish name or category")
):
    """Returns local dish recommendations with Trust Scores and pricing."""
    results = FOODS_DATA
    if state_id:
        results = [f for f in results if f["state_id"] == state_id]
    if city_id:
        results = [f for f in results if f["city_id"] == city_id]
    if query:
        q = query.lower()
        results = [
            f for f in results 
            if q in f["dish_name"].lower() or q in f["category"].lower() or any(q in t.lower() for t in f["tags"])
        ]
    return results

@app.get("/api/culture")
def get_culture(state_id: Optional[str] = Query(None)):
    """Returns cultural heritage items."""
    results = CULTURE_DATA
    if state_id:
        results = [c for c in results if c["state_id"] == state_id]
    return results

@app.get("/api/search")
def global_search(
    q: Optional[str] = Query("", description="Search term"),
    state_id: Optional[str] = Query(None),
    city_id: Optional[str] = Query(None)
):
    """Unified search for places, foods, and cultural experiences."""
    matched_places = get_places(state_id=state_id, city_id=city_id, query=q)
    matched_foods = get_foods(state_id=state_id, city_id=city_id, query=q)
    matched_culture = get_culture(state_id=state_id)
    
    return {
        "query": q,
        "state_id": state_id,
        "city_id": city_id,
        "places": matched_places,
        "foods": matched_foods,
        "culture": matched_culture,
        "total_results": len(matched_places) + len(matched_foods) + len(matched_culture)
    }

@app.post("/api/planner", response_model=TripPlannerResponse)
def generate_trip_itinerary(req: TripPlannerRequest):
    """AI Trip Planner endpoint generating multi-day itineraries based on Claude API prompt structure."""
    state_info = STATES_DATA.get(req.state_id)
    if not state_info:
        raise HTTPException(status_code=404, detail="State not found")

    city_name = None
    if req.city_id:
        c_matches = [c["name"] for c in state_info["cities"] if c["id"] == req.city_id]
        if c_matches:
            city_name = c_matches[0]

    state_places = [p for p in PLACES_DATA if p["state_id"] == req.state_id]
    state_foods = [f for f in FOODS_DATA if f["state_id"] == req.state_id]

    # Generate multi-day itinerary based on requested days
    itinerary = []
    for day in range(1, req.days + 1):
        place_idx = (day - 1) % len(state_places) if state_places else 0
        food_idx = (day - 1) % len(state_foods) if state_foods else 0
        
        p_title = state_places[place_idx]["title"] if state_places else "Explore local landmarks"
        f_title = state_foods[food_idx]["dish_name"] if state_foods else "Local thali"

        itinerary.append(
            TripDayItinerary(
                day=day,
                title=f"Day {day}: Discovering Highlights of {city_name or state_info['name']}",
                morning=f"Visit {p_title} early morning for best views and photogenic lighting.",
                afternoon=f"Explore surrounding local handicraft markets and enjoy a traditional lunch break.",
                evening=f"Relax at scenic promenade and sample authentic regional street treats.",
                recommended_food=f"{f_title} (Trust Score: {state_foods[food_idx]['trust_score']}% if state_foods else '95%')"
            )
        )

    estimated_cost = f"₹{req.days * 1800} - ₹{req.days * 3500} INR per person"
    tips = [
        "Opt for early morning visits to popular landmarks to beat the queue.",
        "Always try dishes with high Trust Scores verified from local reviews.",
        "Use local auto-rickshaws or eco-taxis for authentic short distance commutes."
    ]

    return TripPlannerResponse(
        state_name=state_info["name"],
        city_name=city_name,
        total_days=req.days,
        itinerary=itinerary,
        estimated_cost_inr=estimated_cost,
        insider_tips=tips
    )
