export interface City {
  id: string;
  name: string;
}

export interface StateData {
  id: string;
  name: string;
  tagline: string;
  hero_image: string;
  cities: City[];
}

export interface Place {
  id: string;
  state_id: string;
  city_id: string;
  title: string;
  sub_location: string;
  rating: number;
  reviews_count: number;
  category: string;
  image: string;
  image_url?: string;
  description: string;
  best_view_time?: string;
  vlog_consensus?: string;
  verified_by_data_gov?: boolean;
  latitude: number;
  longitude: number;
  tags: string[];
}

export interface Food {
  id: string;
  state_id: string;
  city_id: string;
  dish_name: string;
  category: string;
  price_inr: number;
  trust_score: number;
  image: string;
  review_quote: string;
  source: string;
  tags: string[];
}

export interface CultureItem {
  id: string;
  state_id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface TripItineraryDay {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  recommended_food: string;
}

export interface TripPlannerResult {
  state_name: string;
  city_name?: string;
  total_days: number;
  itinerary: TripItineraryDay[];
  estimated_cost_inr: string;
  insider_tips: string[];
}
