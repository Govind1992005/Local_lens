from pydantic import BaseModel
from typing import List, Optional

class PlaceResult(BaseModel):
    id: str
    name: str
    city: str
    state: str
    rating: float
    reviews_count: int
    category: str
    image_url: str
    description: str
    latitude: float
    longitude: float
    tags: List[str]

class FoodResult(BaseModel):
    id: str
    name: str
    city: str
    state: str
    category: str
    price_inr: int
    trust_score: int
    image_url: str
    review_quote: str
    source: str
    tags: List[str]

class ConcurrentSearchResponse(BaseModel):
    state: str
    city: Optional[str] = None
    results: dict
