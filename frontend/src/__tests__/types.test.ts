import { Place } from '@/types';

describe('Place interface regression test', () => {
  it('supports image_url optional field on Place interface', () => {
    const testPlace: Place = {
      id: 'p1',
      state_id: 'tn',
      city_id: 'chennai',
      title: 'Marina Beach',
      sub_location: 'Chennai',
      rating: 4.5,
      reviews_count: 1200,
      category: 'Beach',
      image: 'https://example.com/image.jpg',
      image_url: 'https://example.com/image_url.jpg',
      description: 'Longest natural urban beach',
      latitude: 13.0475,
      longitude: 80.2824,
      tags: ['beach', 'scenic']
    };

    expect(testPlace.image_url).toBe('https://example.com/image_url.jpg');
  });
});
