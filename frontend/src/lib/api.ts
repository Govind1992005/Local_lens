import { Place, Food } from '@/types';

export async function fetchConcurrentSearch(state: string, city?: string) {
  const params = new URLSearchParams({ state });
  if (city) params.append('city', city);

  const response = await fetch(`http://localhost:8000/api/v1/search/concurrent?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Concurrent search API error: ${response.statusText}`);
  }
  return response.json();
}
