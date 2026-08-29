<<<<<<< HEAD
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

=======
# Local Lens - Project Documentation & Guide

## 1. Project Overview
Local Lens is a full-stack web application designed to help users discover authentic local places, traditional food, cultural experiences, and custom AI-generated itineraries for various regions across India.

---

## 2. Work Completed So Far

### Backend (FastAPI)
- **Created REST API endpoints:**
  - `/api/places`: Retrieves popular regional landmarks and tourist spots.
  - `/api/food`: Retrieves traditional food items, price, ratings, and local trust scores.
  - `/api/culture`: Retrieves heritage experiences and art forms.
  - `/api/search`: Unified search across places, food, and culture.
  - `/api/ai/trip-planner`: Custom multi-day trip planner logic.
  - `/api/trust-scores`: Local trust score calculation engine.
- Configured CORS middleware to support seamless frontend integration.

### Frontend (Next.js + Tailwind CSS)
- **Designed responsive user interface with:**
  - Hero banner with location/region search selector.
  - Category cards grid for quick browsing.
  - Popular Places Carousel with interactive details modal.
  - Food Grid with local trust scores and pricing.
  - Interactive Map View (Leaflet / React-Leaflet).
  - Floating AI Trip Planner modal.

---

## 3. Tech Stack & Skillsets Used

### Frontend
- **Framework:** Next.js 14 (React 18)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **UI & Icons:** Lucide React, Framer Motion
- **Maps:** Leaflet, React-Leaflet

### Backend
- **Framework:** FastAPI (Python 3.8+)
- **Data Validation:** Pydantic
- **Web Server:** Uvicorn
- **API Architecture:** RESTful API design with CORS handling

### DevOps & Tooling
- Shell scripts (`start.sh`)
- Node.js & npm package management
- Python virtual environment (`venv`) management

---

## 4. How to Run the Application

### Prerequisites
Make sure you have installed:
- Python 3.8+
- Node.js 18+ & npm

### Installation Steps

#### Step 1: Install Backend Dependencies
>>>>>>> 7d0672fdaa8233ef125b8c74d90bb26ebef4701d
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

<<<<<<< HEAD
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
=======
#### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Running the Project

#### Option 1: Quick Start (Single Script)
```bash
chmod +x start.sh
./start.sh
```

#### Option 2: Manual Start (Two Terminals)

**Terminal 1 — Backend (Port 8000):**
```bash
cd backend
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

**Terminal 2 — Frontend (Port 3000):**
```bash
cd frontend
npm run dev -- -p 3000
>>>>>>> 7d0672fdaa8233ef125b8c74d90bb26ebef4701d
```

---

<<<<<<< HEAD
## 🛡️ License & Credits
Built as part of the **LocalLens** open-source travel discovery initiative.
=======
## 5. Application Access URLs
- **Frontend App:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **Interactive API Documentation (Swagger):** http://localhost:8000/docs
>>>>>>> 7d0672fdaa8233ef125b8c74d90bb26ebef4701d
