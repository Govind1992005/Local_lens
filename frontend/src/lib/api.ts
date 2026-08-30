import { Place, Food } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://local-lens-so3q.onrender.com';

export async function fetchConcurrentSearch(state: string, city?: string) {
  const params = new URLSearchParams({ state });
  if (city) params.append('city', city);

  const response = await fetch(`${API_BASE_URL}/api/v1/search/concurrent?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`Concurrent search API error: ${response.statusText}`);
  }
  return response.json();
}
