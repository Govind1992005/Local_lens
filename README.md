# 🔍 LocalLens - Full-Stack Indian Tourism & Culinary Discovery Platform

LocalLens is a full-stack web application that empowers travelers to **discover places like a local**. It combines a dynamic Next.js frontend with a multi-agent FastAPI backend to surface authentic regional dishes (with Trust Scores), local attractions, and AI-generated multi-day trip itineraries.

---

## 🏗️ Architecture & Technical Stack

```text
local-lens/
├── frontend/                 # Next.js 14 App Router (React, TailwindCSS, Framer Motion, Lucide)
│   ├── src/
│   │   ├── components/       # HeroSection, PlacesCarousel, FoodCarousel, AITripPlanner, etc.
│   │   ├── app/              # Page layouts & main route handler
│   │   ├── hooks/            # Custom React hooks (e.g. useMultiSearch)
│   │   └── lib/              # API clients and utilities
│   └── package.json
├── backend/                  # Python FastAPI Backend
│   ├── app/
│   │   ├── agents/           # Concurrent AI Agents (food_agent, places_agent, image_agent, search_orchestrator)
│   │   ├── api/              # API Endpoints (/api/v1/search/concurrent)
│   │   ├── schemas/          # Pydantic Request/Response validation models
│   │   └── main.py           # FastAPI entry point & CORS configuration
│   ├── tests/                # Pytest unit and integration test suite
│   └── requirements.txt
├── postman/                  # Postman v2.1 Collection JSON
├── tests/e2e/                # NightwatchJS E2E Test Suite
├── start.sh                  # One-click Concurrent Launch Script
└── README.md
```

### Stack Highlights:
- **Frontend**: Next.js 14, React 18, TailwindCSS, Framer Motion, Lucide Icons, Leaflet.js.
- **Backend API**: Python FastAPI (Async routing, Pydantic data schemas).
- **Multi-Agent Pipeline**: 
  - **Food Agent (`food_agent.py`)**: Extracts regional street food, pricing in ₹ INR, and Trust Scores.
  - **Places Agent (`places_agent.py`)**: Discovers landmarks, coordinates, and historical viewpoints.
  - **High-Fidelity Image Resolver (`image_agent.py`)**: Concurrently resolves distinct, high-res images to guarantee zero duplicate fallback photos.
  - **Search Orchestrator (`search_orchestrator.py`)**: Runs all agents in parallel using `asyncio.gather()`.

---

## 🚀 Quick Start & Installation

### Prerequisites:
- **Node.js**: v18.0.0+
- **Python**: v3.10+
- **npm** or **yarn**

### 1. Clone & Set Up Environment

```bash
git clone https://github.com/vasanth/locallens.git
cd locallens
```

### 2. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

*(Or run tests immediately)*:
```bash
pytest
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
```

---

## ⚡ Running the Application

You can launch both the Python FastAPI backend and Next.js frontend concurrently using the included executable `start.sh` script:

```bash
# Make script executable (if needed)
chmod +x ./start.sh

# Start full-stack app
./start.sh
```

- **Frontend Application**: `http://localhost:3000`
- **FastAPI Backend Service**: `http://localhost:8000`
- **Interactive OpenAPI/Swagger Docs**: `http://localhost:8000/docs`

---

## 🧪 Running Test Suites & Skills

### 1. Python Pytest Backend Unit & Integration Tests:
```bash
cd backend
pytest -v
```

### 2. NightwatchJS End-to-End UI Tests:
```bash
# Run headless browser E2E tests
npx nightwatch
```

### 3. Postman Collection Import:
Import the provided `postman/LocalLens_Postman_Collection.json` directly into Postman or run via Newman CLI:
```bash
npx newman run postman/LocalLens_Postman_Collection.json
```

---

## 🛡️ License & Credits
Built as part of the **LocalLens** open-source travel discovery initiative.
