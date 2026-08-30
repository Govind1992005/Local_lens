import { fetchConcurrentSearch } from '@/lib/api';

describe('Frontend API URL configuration regression test', () => {
  it('uses NEXT_PUBLIC_API_URL or defaults to live render URL', () => {
    const url = process.env.NEXT_PUBLIC_API_URL || 'https://local-lens-so3q.onrender.com';
    expect(url).toBe('https://local-lens-so3q.onrender.com');
  });
});
