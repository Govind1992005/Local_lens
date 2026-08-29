#!/bin/bash

# LocalLens Full-Stack Launch Script
# Starts both Python FastAPI Backend and Next.js Frontend concurrently

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "--------------------------------------------------------"
echo "  🚀 Launching LocalLens Full-Stack Web Application"
echo "--------------------------------------------------------"

# Function to clean up background processes on exit
cleanup() {
  echo ""
  echo "⚠️ Stopping LocalLens backend and frontend servers..."
  kill $(jobs -p) 2>/dev/null || true
  exit 0
}

trap cleanup SIGINT SIGTERM EXIT

# Step 1: Start FastAPI Backend Server
echo "📦 [1/2] Starting Python FastAPI Backend on http://localhost:8000..."
if [ -d "$PROJECT_ROOT/backend/venv" ]; then
  source "$PROJECT_ROOT/backend/venv/bin/activate"
fi

cd "$PROJECT_ROOT/backend"
python3 -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!

# Wait briefly for backend startup
sleep 2

# Step 2: Start Next.js Frontend Development Server
echo "💻 [2/2] Starting Next.js Frontend on http://localhost:3000..."
cd "$PROJECT_ROOT/frontend"
npm run dev -- -p 3000 &
FRONTEND_PID=$!

echo ""
echo "--------------------------------------------------------"
echo "  🎉 LocalLens Application is Ready!"
echo "  - Frontend UI:     http://localhost:3000"
echo "  - Backend API:      http://localhost:8000"
echo "  - Swagger Docs:    http://localhost:8000/docs"
echo "--------------------------------------------------------"
echo "  Press Ctrl+C to stop all servers."
echo "--------------------------------------------------------"

wait
