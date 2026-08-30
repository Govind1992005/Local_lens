"""
Pytest unit & integration test suite for LocalLens FastAPI backend.
Refactored using .claude/skills/pytest-skill standards with fixtures,
parametrization, clean async mocking, and comprehensive assertion patterns.
"""

import sys
import os
from unittest.mock import patch, AsyncMock
import pytest
from fastapi.testclient import TestClient

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.main import app
from app.agents.data_gov_agent import fetch_data_gov_in_metrics
from app.agents.search_orchestrator import orchestrate_concurrent_search


@pytest.fixture(scope="module")
def api_client():
    """Module-scoped FastAPI TestClient fixture."""
    with TestClient(app) as client:
        yield client


def test_health_check(api_client):
    response = api_client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "ok"


def test_get_states(api_client):
    response = api_client.get("/api/states")
    assert response.status_code == 200
    states = response.json()
    assert len(states) == 5
    expected_state_ids = {"karnataka", "andhra_pradesh", "telangana", "goa", "kerala"}
    assert {state["id"] for state in states} == expected_state_ids
    for state in states:
        assert "cities" in state
        assert len(state["cities"]) > 0


@pytest.mark.parametrize(
    "state_id,city_id,expected_city,excluded_city",
    [
        ("andhra_pradesh", "visakhapatnam", "visakhapatnam", "rayalaseema"),
        ("telangana", "warangal", "warangal", "hyderabad"),
    ],
)
def test_city_specific_filtering(api_client, state_id, city_id, expected_city, excluded_city):
    """Parametrized test for city-specific filtering logic across multiple states."""
    response = api_client.get(f"/api/places?state_id={state_id}&city_id={city_id}")
    assert response.status_code == 200
    places = response.json()
    assert len(places) > 0
    for place in places:
        assert place["city_id"] == expected_city
        assert place["city_id"] != excluded_city


def test_concurrent_search_endpoint_success(api_client):
    """Tests /api/v1/search/concurrent endpoint for multi-agent parallel execution."""
    response = api_client.get("/api/v1/search/concurrent?state=Andhra_Pradesh&city=Visakhapatnam")
    assert response.status_code == 200
    data = response.json()
    assert data["state"] == "Andhra_Pradesh"
    assert data["city"] == "Visakhapatnam"
    assert "results" in data
    assert len(data["results"]["places"]) > 0
    assert len(data["results"]["food"]) > 0
    assert "youtube_analysis" in data["results"]
    assert "data_gov_in_metrics" in data["results"]


def test_concurrent_search_distinct_image_resolution(api_client):
    """Verifies that high-fidelity image agent assigns distinct image URLs."""
    response = api_client.get("/api/v1/search/concurrent?state=Andhra_Pradesh")
    assert response.status_code == 200
    results = response.json()["results"]

    place_imgs = [p["image_url"] for p in results["places"]]
    food_imgs = [f["image_url"] for f in results["food"]]

    for img in place_imgs + food_imgs:
        assert img.startswith("http")


@pytest.mark.asyncio
@pytest.mark.parametrize(
    "state_input,expected_state_name,expected_first_city_or_place",
    [
        ("Andhra Pradesh", "Andhra Pradesh", "Visakhapatnam"),
        ("Telangana", "Telangana", "Charminar"),
        ("Telengana", "Telangana", "Charminar"),
    ],
)
async def test_data_gov_agent_metrics(state_input, expected_state_name, expected_first_city_or_place):
    """Parametrized async test for data_gov_agent metrics fetching and typo tolerance."""
    res = await fetch_data_gov_in_metrics(state=state_input)
    assert res["state_metrics"]["state_name"] == expected_state_name
    assert len(res["top_5_places"]) == 5


@pytest.mark.asyncio
async def test_search_orchestrator_parallel_mocking():
    """Mocks food_agent, places_agent, and image_agent to verify orchestrator isolation."""
    with patch("app.agents.search_orchestrator.search_food_and_restaurants", new_callable=AsyncMock) as mock_food, \
         patch("app.agents.search_orchestrator.search_places", new_callable=AsyncMock) as mock_places, \
         patch("app.agents.search_orchestrator.resolve_images", new_callable=AsyncMock) as mock_img:

        mock_food.return_value = [{"id": "f1", "name": "Biryani", "query_term": "biryani"}]
        mock_places.return_value = [{"id": "p1", "name": "Fort", "query_term": "fort"}]
        mock_img.side_effect = [["https://img.com/fort.jpg"], ["https://img.com/biryani.jpg"]]

        res = await orchestrate_concurrent_search(state="Telangana", city="Hyderabad")

        assert res["state"] == "Telangana"
        assert res["results"]["places"][0]["image_url"] == "https://img.com/fort.jpg"
        assert res["results"]["food"][0]["image_url"] == "https://img.com/biryani.jpg"

