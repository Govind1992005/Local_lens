import { TripItineraryDay } from '@/types';

describe('TripItineraryDay type regression test', () => {
  it('correctly uses string type for afternoon, evening, and recommended_food', () => {
    const day: TripItineraryDay = {
      day: 1,
      title: 'City Exploration',
      morning: 'Visit temple',
      afternoon: 'Local museum',
      evening: 'Sunset point',
      recommended_food: 'Local thali'
    };

    expect(typeof day.afternoon).toBe('string');
    expect(typeof day.evening).toBe('string');
    expect(typeof day.recommended_food).toBe('string');
  });
});
