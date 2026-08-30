"use client";

import React, { useState } from 'react';
import { Cpu, Terminal, ArrowRight, ShieldCheck, CheckCircle2, Loader2, Database, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AgentVisualizationProps {
  selectedStateName: string;
  selectedCityId?: string;
  loading?: boolean;
  placesCount?: number;
  foodsCount?: number;
}

export const AgentVisualization: React.FC<AgentVisualizationProps> = ({ 
  selectedStateName, 
  selectedCityId,
  loading = false,
  placesCount = 0,
  foodsCount = 0
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const cityLabel = selectedCityId ? selectedCityId.replace(/_/g, ' ').toUpperCase() : 'ALL CITIES';

  return (
    <div className="max-w-4xl mx-auto my-6 px-6">


      {/* Visual Pipeline Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 bg-[#1C1310] rounded-2xl border border-white/10 p-6 text-white shadow-2xl overflow-hidden font-mono text-xs"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-[#FF6A4D]" />
                <span className="font-bold text-gray-200 uppercase tracking-wider">
                  Real-Time Request & Pipeline Trace
                </span>
              </div>
              <div className="flex items-center space-x-2">
                {loading ? (
                  <span className="bg-amber-500/20 text-amber-400 border border-amber-500/40 px-3 py-1 rounded-md text-[10px] font-bold flex items-center space-x-1 animate-pulse">
                    <Loader2 className="w-3 h-3 animate-spin" />
                    <span>FETCHING AGENT DATA...</span>
                  </span>
                ) : (
                  <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 rounded-md text-[10px] font-bold flex items-center space-x-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>AGENTS READY</span>
                  </span>
                )}
              </div>
            </div>

            {/* Architecture Node Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 font-sans">
              <div className={`p-3 rounded-xl border transition-all ${loading ? 'bg-[#FF6A4D]/30 border-[#FF6A4D] text-white animate-pulse' : 'bg-white/10 border-white/20 text-white'}`}>
                <div className="text-[10px] uppercase font-bold text-[#FF6A4D] mb-1">Stage 1: Primary Agent</div>
                <div className="font-bold text-xs">Food & Places Discovery</div>
                <div className="text-[10px] opacity-80 mt-1">Discovered {placesCount} Places & {foodsCount} Foods</div>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${loading ? 'bg-[#D8A657]/30 border-[#D8A657] text-white animate-pulse' : 'bg-white/10 border-white/20 text-white'}`}>
                <div className="text-[10px] uppercase font-bold text-[#D8A657] mb-1">Stage 2: Chained Agent</div>
                <div className="font-bold text-xs">YouTube Vlog Consensus</div>
                <div className="text-[10px] opacity-80 mt-1">Analyzed Vlogs for Stage 1 Entities</div>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${loading ? 'bg-purple-500/30 border-purple-500 text-white animate-pulse' : 'bg-white/10 border-white/20 text-white'}`}>
                <div className="text-[10px] uppercase font-bold text-purple-400 mb-1">Stage 3: Dependent Agent</div>
                <div className="font-bold text-xs">High-Fidelity Image Resolver</div>
                <div className="text-[10px] opacity-80 mt-1">Matched Unique Photos & Names</div>
              </div>
            </div>

            {/* Live Real-Time Logs Stream */}
            <div className="bg-black/80 p-4 rounded-xl border border-white/10 font-mono text-[11px] leading-relaxed space-y-2 max-h-52 overflow-y-auto">
              <div className="flex items-start space-x-2 text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>[LIVE REQUEST] Target State: <strong className="text-white">{selectedStateName}</strong> | Target City: <strong className="text-white">{cityLabel}</strong></span>
              </div>

              <div className="flex items-start space-x-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                <span>[API ENDPOINT] GET http://localhost:8000/api/v1/search/concurrent?state={encodeURIComponent(selectedStateName)}&city={selectedCityId || ''}</span>
              </div>

              {loading ? (
                <div className="flex items-center space-x-2 text-amber-400 animate-pulse pt-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>[ACTIVE AGENTS] Spawning asyncio.gather(FoodAgent, PlacesAgent, ImageResolver) in real-time...</span>
                </div>
              ) : (
                <>
                  <div className="flex items-start space-x-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>[FOOD AGENT] Sourced authentic dishes with Trust Scores for {selectedStateName} ({cityLabel}).</span>
                  </div>
                  <div className="flex items-start space-x-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>[PLACES AGENT] Extracted OpenStreetMap POIs, ratings, coordinates & best view times.</span>
                  </div>
                  <div className="flex items-start space-x-2 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    <span>[IMAGE RESOLVER] High-definition distinct photo URLs assigned with zero duplicates.</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
