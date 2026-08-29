"""
Search API Router (backend/app/api/search.py)
Concurrent search endpoint /api/v1/search/concurrent
"""

from fastapi import APIRouter, Query, HTTPException
from typing import Optional

from app.schemas.search import ConcurrentSearchResponse
from app.agents.search_orchestrator import orchestrate_concurrent_search

router = APIRouter(prefix="/api/v1/search", tags=["Concurrent Search"])

@router.get("/concurrent", response_model=ConcurrentSearchResponse)
async def concurrent_search(
    state: str = Query(..., description="Target Indian state (e.g., Andhra Pradesh, Rajasthan, Kerala)"),
    city: Optional[str] = Query(None, description="Optional city within the state")
):
    """Executes multi-agent concurrent search (Food Agent, Places Agent, Image Resolver Agent)."""
    if not state.strip():
        raise HTTPException(status_code=400, detail="State parameter is required")

    results = await orchestrate_concurrent_search(state=state, city=city)
    return results
