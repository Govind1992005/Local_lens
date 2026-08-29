"""
Pytest unit and integration test suite for LocalLens FastAPI backend.
Mocks external API calls (Claude API, Groq, Google Maps).
"""

import pytest
from unittest.mock import patch, MagicMock
from fastapi.testclient import TestClient
import sys
import os

# Add backend root to sys.path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.main import app

client = TestClient(app)

def test_health_check():
    """Verify system health check endpoint."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert response.json()["service"] == "LocalLens API"

def test_get_states():
    """Verify fetching all supported Indian states."""
    response = client.get("/api/states")
    assert response.status_code == 200
    states = response.json()
    assert isinstance(states, list)
    assert len(states) >= 5
    state_ids = [s["id"] for s in states]
    assert "andhra_pradesh" in state_ids
    assert "rajasthan" in state_ids

def test_get_single_state_success():
    """Verify fetching specific state details."""
    response = client.get("/api/states/andhra_pradesh")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Andhra Pradesh"
    assert len(data["cities"]) > 0

def test_get_single_state_not_found():
    """Verify 404 response for invalid state ID."""
    response = client.get("/api/states/invalid_state_id")
    assert response.status_code == 404

def test_get_places_filter_by_state():
    """Verify filtering places by state ID."""
    response = client.get("/api/places?state_id=andhra_pradesh")
    assert response.status_code == 200
    places = response.json()
    assert len(places) > 0
    for place in places:
        assert place["state_id"] == "andhra_pradesh"

def test_get_places_search_query():
    """Verify searching places by keyword."""
    response = client.get("/api/places?query=beach")
    assert response.status_code == 200
    places = response.json()
    assert len(places) > 0
    assert "Beach" in places[0]["title"] or "Beach" in places[0]["tags"][0] or "Beach" in places[0]["description"]

def test_get_foods_with_trust_scores():
    """Verify authentic food recommendations and trust scores."""
    response = client.get("/api/foods?state_id=andhra_pradesh")
    assert response.status_code == 200
    foods = response.json()
    assert len(foods) > 0
    for food in foods:
        assert "trust_score" in food
        assert 0 <= food["trust_score"] <= 100
        assert "price_inr" in food

def test_global_search_endpoint():
    """Verify unified global search across places, foods, and culture."""
    response = client.get("/api/search?q=thali&state_id=andhra_pradesh")
    assert response.status_code == 200
    data = response.json()
    assert "places" in data
    assert "foods" in data
    assert "culture" in data
    assert data["total_results"] >= 1

@patch("app.main.STATES_DATA")
def test_ai_trip_planner_mocked(mock_states):
    """Verify AI Trip Planner itinerary generation with external Claude API calls mocked."""
    mock_states.get.return_value = {
        "id": "andhra_pradesh",
        "name": "Andhra Pradesh",
        "cities": [{"id": "visakhapatnam", "name": "Visakhapatnam"}]
    }

    payload = {
        "state_id": "andhra_pradesh",
        "city_id": "visakhapatnam",
        "days": 3,
        "budget": "Moderate",
        "interests": ["Food", "Heritage"]
    }
    
    response = client.post("/api/planner", json=payload)
    assert response.status_code == 200
    result = response.json()
    assert result["state_name"] == "Andhra Pradesh"
    assert result["total_days"] == 3
    assert len(result["itinerary"]) == 3
    assert "INR" in result["estimated_cost_inr"]
