"use client";

import React, { useState } from 'react';
import { Youtube, Film, Eye, Award, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface YouTubeAnalysisProps {
  youtubeData?: any;
  locationName: string;
}

export const YouTubeAnalysisSection: React.FC<YouTubeAnalysisProps> = ({ youtubeData, locationName }) => {
  const [activeTab, setActiveTab] = useState<'recent' | 'popular' | 'top_channels'>('popular');
  const [expanded, setExpanded] = useState(true);

  if (!youtubeData || !youtubeData.video_breakdown) return null;

  const getVideosForTab = () => {
    if (activeTab === 'recent') return youtubeData.video_breakdown.recent_10 || [];
    if (activeTab === 'popular') return youtubeData.video_breakdown.popular_10 || [];
    return youtubeData.video_breakdown.top_channels_10 || [];
  };

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto my-8 bg-gradient-to-br from-red-950/20 via-[#1C1310] to-black rounded-3xl border border-red-500/20 text-white shadow-2xl overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-red-600 rounded-2xl text-white shadow-lg shadow-red-600/30">
            <Youtube className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs uppercase font-bold tracking-widest text-red-400">
                AI YouTube Video & Vlog Insights Agent
              </span>
              <span className="bg-red-500/20 border border-red-500/40 text-red-300 text-[10px] font-bold px-2 py-0.5 rounded-full">
                30 Videos Scraped
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-0.5">
              What Vloggers Are Saying About <span className="text-[#FF6A4D] italic">{locationName}</span>
            </h3>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="self-start md:self-auto bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-colors border border-white/10"
        >
          <span>{expanded ? 'Collapse Insights' : 'Expand Insights'}</span>
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-6 space-y-6"
          >
            {/* Insights Summary Bullet Grid */}
            <div className="bg-black/40 p-4 rounded-2xl border border-red-500/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D8A657] mb-2 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#D8A657]" />
                <span>AI Consensus from 30 Analyzed YouTube Videos</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300 font-light">
                {youtubeData.insights_summary?.map((summaryItem: string, idx: number) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-red-400 font-bold">•</span>
                    <span>{summaryItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video Category Filter Tabs (10 Recent / 10 Popular / 10 Top Channels) */}
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('popular')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                    activeTab === 'popular'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>10 Most Popular Videos</span>
                </button>

                <button
                  onClick={() => setActiveTab('recent')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                    activeTab === 'recent'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>10 Recent Vlogs (2026)</span>
                </button>

                <button
                  onClick={() => setActiveTab('top_channels')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-2 transition-all ${
                    activeTab === 'top_channels'
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>10 Top Creator Channels</span>
                </button>
              </div>

              {/* Video List Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {getVideosForTab().map((video: any, index: number) => (
                  <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/40 transition-colors">
                    <span className="text-[10px] uppercase font-bold text-red-400 block mb-1">
                      {video.type}
                    </span>
                    <h5 className="font-bold text-xs text-white line-clamp-2 mb-2">
                      {video.title}
                    </h5>
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span className="truncate">{video.channel}</span>
                      <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono font-bold">
                        {video.views}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
