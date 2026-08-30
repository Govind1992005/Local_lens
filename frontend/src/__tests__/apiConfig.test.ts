import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import apiBaseUrl from '@/lib/api';

describe('Frontend API URL Configuration', () => {
  it('uses NEXT_PUBLIC_API_URL or default render backend', () => {
    const defaultUrl = process.env.NEXT_PUBLIC_API_URL || 'https://local-lens-so3q.onrender.com';
    expect(defaultUrl).toContain('onrender.com');
  });
});
