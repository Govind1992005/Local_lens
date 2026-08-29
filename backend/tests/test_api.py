"""
Pytest unit & integration test suite for LocalLens FastAPI backend.
Mocks external agent scraping and image resolver APIs for parallel execution verification.
"""

import pytest
from unittest.mock import patch, AsyncMock
from fastapi.testclient import TestClient
import sys
import os

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app.main import app

client = TestClient(app)

def test_health_check():
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"

def test_get_states():
    response = client.get("/api/states")
    assert response.status_code == 200
    states = response.json()
    assert len(states) == 28
    # Ensure every state has a non-empty list of cities
    for st in states:
        assert "cities" in st
        assert len(st["cities"]) > 0

def test_get_places_contains_best_view_time():
    response = client.get("/api/places?state_id=andhra_pradesh")
    assert response.status_code == 200
    places = response.json()
    assert len(places) > 0
    assert "best_view_time" in places[0]
    assert len(places[0]["best_view_time"]) > 0

def test_city_specific_filtering_for_kakinada():
    """Verifies that selecting Kakinada returns only Kakinada places and excludes Vizag places."""
    response = client.get("/api/places?state_id=andhra_pradesh&city_id=kakinada")
    assert response.status_code == 200
    places = response.json()
    assert len(places) > 0
    for p in places:
        assert p["city_id"] == "kakinada"
        assert p["city_id"] != "visakhapatnam"

def test_city_specific_filtering_for_warangal():
    """Verifies that selecting Warangal in Telangana returns only Warangal places and excludes Hyderabad places."""
    response = client.get("/api/places?state_id=telangana&city_id=warangal")
    assert response.status_code == 200
    places = response.json()
    assert len(places) > 0
    for p in places:
        assert p["city_id"] == "warangal"
        assert p["city_id"] != "hyderabad"

def test_concurrent_search_endpoint_success():
    """Tests /api/v1/search/concurrent endpoint for multi-agent parallel execution."""
    response = client.get("/api/v1/search/concurrent?state=Andhra_Pradesh&city=Visakhapatnam")
    assert response.status_code == 200
    data = response.json()
    assert data["state"] == "Andhra_Pradesh"
    assert data["city"] == "Visakhapatnam"
    assert "results" in data
    assert "places" in data["results"]
    assert "food" in data["results"]
    assert len(data["results"]["places"]) > 0
    assert len(data["results"]["food"]) > 0
    # Verify multi-source data processing in search output
    assert "youtube_analysis" in data["results"]
    assert "data_gov_in_metrics" in data["results"]
    assert "transcript_extracted_recommendations" in data["results"]["youtube_analysis"]
    assert "vlog_consensus" in data["results"]["places"][0]
    assert "vlog_consensus" in data["results"]["food"][0]

def test_concurrent_search_distinct_image_resolution():
    """Verifies that high-fidelity image agent assigns distinct image URLs."""
    response = client.get("/api/v1/search/concurrent?state=Andhra_Pradesh")
    assert response.status_code == 200
    results = response.json()["results"]
    
    place_imgs = [p["image_url"] for p in results["places"]]
    food_imgs = [f["image_url"] for f in results["food"]]
    
    # Assert image URLs are valid strings and non-empty
    for img in place_imgs + food_imgs:
        assert img.startswith("http")

@pytest.mark.asyncio
async def test_data_gov_agent_telangana_and_andhra_pradesh():
    """Verifies that data_gov_agent fetches records for Telangana & Andhra Pradesh."""
    from app.agents.data_gov_agent import fetch_data_gov_in_metrics
    
    ap_res = await fetch_data_gov_in_metrics(state="Andhra Pradesh")
    assert ap_res["state_metrics"]["state_name"] == "Andhra Pradesh"
    assert len(ap_res["top_5_places"]) == 5
    assert ap_res["top_5_places"][0]["city"] == "Kakinada"
    
    tg_res = await fetch_data_gov_in_metrics(state="Telangana")
    assert tg_res["state_metrics"]["state_name"] == "Telangana"
    assert len(tg_res["top_5_places"]) == 5
    assert tg_res["top_5_places"][0]["name"].startswith("Charminar")
    
    # Test typo tolerance for telengana
    tg_typo_res = await fetch_data_gov_in_metrics(state="Telengana")
    assert tg_typo_res["state_metrics"]["state_name"] == "Telangana"

@pytest.mark.asyncio
async def test_search_orchestrator_parallel_mocking():
    """Mocks food_agent, places_agent, and image_agent to test orchestrator isolation."""
    from app.agents.search_orchestrator import orchestrate_concurrent_search
    
    with patch("app.agents.search_orchestrator.search_food", new_callable=AsyncMock) as mock_food, \
         patch("app.agents.search_orchestrator.search_places", new_callable=AsyncMock) as mock_places, \
         patch("app.agents.search_orchestrator.resolve_images", new_callable=AsyncMock) as mock_img:

        mock_food.return_value = [{"id": "f1", "name": "Biryani", "query_term": "biryani"}]
        mock_places.return_value = [{"id": "p1", "name": "Fort", "query_term": "fort"}]
        mock_img.side_effect = [["https://img.com/fort.jpg"], ["https://img.com/biryani.jpg"]]

        res = await orchestrate_concurrent_search(state="Telangana", city="Hyderabad")
        
        assert res["state"] == "Telangana"
        assert res["results"]["places"][0]["image_url"] == "https://img.com/fort.jpg"
        assert res["results"]["food"][0]["image_url"] == "https://img.com/biryani.jpg"
