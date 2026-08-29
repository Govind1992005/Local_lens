"use client";

import { useState, useEffect, useCallback } from 'react';

export interface MultiSearchResults {
  places: any[];
  food: any[];
}

export function useMultiSearch(state: string, city?: string) {
  const [data, setData] = useState<MultiSearchResults | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSearch = useCallback(async () => {
    if (!state) return;
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({ state });
      if (city) queryParams.append('city', city);

      const res = await fetch(`http://localhost:8000/api/v1/search/concurrent?${queryParams.toString()}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch search results: ${res.statusText}`);
      }
      const json = await res.json();
      setData(json.results);
    } catch (err: any) {
      console.warn('useMultiSearch fallback activated:', err.message);
      // Fallback response structure
      setData(null);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [state, city]);

  useEffect(() => {
    fetchSearch();
  }, [fetchSearch]);

  return { data, loading, error, refetch: fetchSearch };
}
