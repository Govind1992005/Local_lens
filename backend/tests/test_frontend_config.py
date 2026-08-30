"""
Regression test for frontend environment URL fallback and build configuration sanity.
"""

import os
from pathlib import Path

def test_frontend_api_urls_configured():
    api_ts = Path(__file__).parent.parent / "frontend" / "src" / "lib" / "api.ts"
    content = api_ts.read_text()
    assert "process.env.NEXT_PUBLIC_API_URL" in content
    assert "https://local-lens-so3q.onrender.com" in content
