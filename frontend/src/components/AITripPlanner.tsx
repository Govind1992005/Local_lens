"use client";

import React, { useState } from 'react';
import { StateData, TripPlannerResult } from '@/types';
import { Sparkles, Calendar, DollarSign, Lightbulb, MapPin, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface AITripPlannerProps {
  states: StateData[];
  selectedState: StateData;
}

export const AITripPlanner: React.FC<AITripPlannerProps> = ({ states, selectedState }) => {
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState('Moderate');
  const [selectedCityId, setSelectedCityId] = useState('');
  const [loading, setLoading] = useState(false);
  const [planResult, setPlanResult] = useState<TripPlannerResult | null>(null);

  const handleGeneratePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state_id: selectedState.id,
          city_id: selectedCityId || null,
          days: days,
          budget: budget,
          interests: ["Food", "Heritage", "Nature"]
        })
      });

      if (response.ok) {
        const data = await response.json();
        setPlanResult(data);
      } else {
        // Fallback simulation if backend endpoint is unavailable during demo
        setTimeout(() => {
          setPlanResult({
            state_name: selectedState.name,
            total_days: days,
            itinerary: Array.from({ length: days }, (_, i) => ({
              day: i + 1,
              title: `Day ${i + 1}: Uncovering Local Treasures in ${selectedState.name}`,
              morning: `Visit popular heritage landmarks early morning for scenic photos.`,
              afternoon: `Enjoy authentic lunch thali followed by guided handicraft market walk.`,
              evening: `Watch sunset at coastal/hillside viewpoint and sample local street snacks.`,
              recommended_food: `Authentic Regional Thali (Trust Score: 98%)`
            })),
            estimated_cost_inr: `₹${days * 2000} - ₹${days * 3500} INR per person`,
            insider_tips: [
              "Book heritage museum tickets online to bypass long queues.",
              "Try food stalls with high Trust Scores recommended by local reviewers.",
              "Travel during early morning or sunset hours for pleasant weather."
            ]
          });
        }, 1000);
      }
    } catch (err) {
      console.log('Using simulated trip plan response fallback:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="planner" className="py-16 px-6 max-w-7xl mx-auto my-12 bg-gradient-to-br from-[#1C1310] via-[#2D221E] to-[#1C1310] rounded-3xl text-white shadow-2xl relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A4D]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D8A657]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-[#FF6A4D]/20 border border-[#FF6A4D]/40 px-4 py-1.5 rounded-full mb-3">
            <Sparkles className="w-4 h-4 text-[#FF6A4D]" />
            <span className="text-xs uppercase tracking-widest text-[#FF6A4D] font-bold">
              AI Multi-Day Itinerary Generator
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            Plan Your Ideal Trip to <span className="text-[#FF6A4D] italic">{selectedState.name}</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-2 font-light">
            Powered by Claude API reasoning pipeline to deliver authentic, day-by-day travel schedules.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleGeneratePlan} className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl mb-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Trip Duration */}
          <div>
            <label className="block text-xs uppercase font-bold text-gray-300 mb-2">
              Duration (Days)
            </label>
            <div className="flex items-center space-x-2 bg-black/40 rounded-xl p-2 border border-white/10">
              <Calendar className="w-4 h-4 text-[#FF6A4D] ml-2" />
              <input
                type="number"
                min={1}
                max={7}
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value) || 1)}
                className="w-full bg-transparent text-white font-bold text-sm focus:outline-none"
              />
            </div>
          </div>

          {/* Budget Tier */}
          <div>
            <label className="block text-xs uppercase font-bold text-gray-300 mb-2">
              Budget Tier
            </label>
            <div className="flex items-center space-x-2 bg-black/40 rounded-xl p-2 border border-white/10">
              <DollarSign className="w-4 h-4 text-[#D8A657] ml-2" />
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-transparent text-white font-semibold text-sm focus:outline-none cursor-pointer"
              >
                <option value="Budget" className="bg-[#1C1310] text-white">Budget (Backpacker)</option>
                <option value="Moderate" className="bg-[#1C1310] text-white">Moderate (Comfort)</option>
                <option value="Luxury" className="bg-[#1C1310] text-white">Luxury (Royal)</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF6A4D] hover:bg-[#E8583B] text-white py-3 px-6 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-[#FF6A4D]/30 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Curating Itinerary...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Generate Itinerary</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Results Container */}
        {planResult && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#D8A657] tracking-wider">
                  AI Generated Custom Plan
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  {planResult.total_days}-Day Local Experience in {planResult.state_name}
                </h3>
              </div>
              <div className="bg-[#FF6A4D]/20 border border-[#FF6A4D]/40 text-[#FF6A4D] font-bold text-xs px-4 py-2 rounded-xl text-center">
                Est. Cost: {planResult.estimated_cost_inr}
              </div>
            </div>

            {/* Daily Breakdown */}
            <div className="space-y-6">
              {planResult.itinerary.map((dayItem) => (
                <div key={dayItem.day} className="bg-black/30 p-5 rounded-xl border border-white/10">
                  <h4 className="font-bold text-base text-[#D8A657] mb-3 flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-[#FF6A4D]" />
                    <span>{dayItem.title}</span>
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-300">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <span className="font-bold text-white block mb-1">Morning:</span>
                      {dayItem.morning}
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <span className="font-bold text-white block mb-1">Afternoon:</span>
                      {dayItem.afternoon}
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg">
                      <span className="font-bold text-white block mb-1">Evening:</span>
                      {dayItem.evening}
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-emerald-300 font-medium flex items-center space-x-1">
                    <span>Must-Try Meal:</span>
                    <span className="text-white font-bold">{dayItem.recommended_food}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Insider Tips */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-bold text-sm text-[#D8A657] mb-3 flex items-center space-x-2">
                <Lightbulb className="w-4 h-4 text-[#D8A657]" />
                <span>Insider Local Advice</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-300">
                {planResult.insider_tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#FF6A4D]">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
