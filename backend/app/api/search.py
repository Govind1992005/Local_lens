"""
Search API Router (backend/app/api/search.py)
Concurrent search endpoint /api/v1/search/concurrent
"""

from fastapi import APIRouter, Query, HTTPException
from typing import Optional

from app.schemas.search import ConcurrentSearchResponse
from app.agents.chained_orchestrator import orchestrate_chained_search

router = APIRouter(prefix="/api/v1/search", tags=["Concurrent Search"])

@router.get("/concurrent", response_model=ConcurrentSearchResponse)
async def concurrent_search(
    state: str = Query(..., description="Target Indian state (e.g., Andhra Pradesh, Rajasthan, Kerala)"),
    city: Optional[str] = Query(None, description="Optional city within the state")
):
    """Executes multi-stage chained agent pipeline (Stage 1 Discovery -> Stage 2 YouTube Consensus -> Stage 3 Image Resolution)."""
    if not state.strip():
        raise HTTPException(status_code=400, detail="State parameter is required")

    results = await orchestrate_chained_search(state=state, city=city)
    return results
