import pytest
from app.data import PLACES_DATA, FOODS_DATA

def test_bangalore_places_and_images():
    bangalore_places = [p for p in PLACES_DATA if p["state_id"] == "karnataka" and p["city_id"] == "bengaluru"]
    assert len(bangalore_places) >= 5, "Bangalore should have at least 5 featured places"
    for place in bangalore_places:
        assert "image" in place and place["image"].startswith("http"), f"Place {place['title']} missing valid image URL"

def test_bangalore_foods_and_images():
    bangalore_foods = [f for f in FOODS_DATA if f["state_id"] == "karnataka" and f["city_id"] == "bengaluru"]
    assert len(bangalore_foods) >= 3, "Bangalore should have at least 3 authentic foods"
    for food in bangalore_foods:
        assert "image" in food and food["image"].startswith("http"), f"Food {food['dish_name']} missing valid image URL"
