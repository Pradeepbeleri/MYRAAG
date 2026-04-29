'use client'

import { motion } from 'framer-motion'
import TranscriptViewer from '@/components/transcript-viewer'
import SummaryPanel from '@/components/summary-panel'

export default function TranscriptPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl font-black text-white">Live Transcript</h1>
          <p className="text-[#888] text-sm mt-1">Real-time AI-powered transcription</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF006E]/10 border border-[#FF006E]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF006E] animate-pulse" />
            <span className="text-xs font-medium text-[#FF006E]">LIVE</span>
          </div>
          <button className="glass px-4 py-2 rounded-xl text-sm text-[#888] hover:text-white transition-colors">
            ⏸ Pause
          </button>
          <button
            className="px-4 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)' }}
          >
            📄 Export
          </button>
        </div>
      </motion.div>

      {/* Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Transcript Side (60%) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-3"
        >
          <div className="glass rounded-2xl p-6 h-full">
            {/* Transcript Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF006E] animate-pulse" />
                <h2 className="font-bold text-white">Q3 Product Roadmap Review</h2>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#888]">
                <span className="font-mono">01:52</span>
                <span>3 speakers</span>
              </div>
            </div>

            {/* Speaker legend */}
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
              {[
                { name: 'Alex Chen', color: '#9D4EDD' },
                { name: 'Sarah Kim', color: '#00D4FF' },
                { name: 'Marcus Powell', color: '#00FF88' },
              ].map((speaker) => (
                <div key={speaker.name} className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: speaker.color }} />
                  <span className="text-xs text-[#888]">{speaker.name}</span>
                </div>
              ))}
            </div>

            {/* Transcript */}
            <div className="overflow-y-auto max-h-[60vh] pr-2">
              <TranscriptViewer />
            </div>

            {/* Bottom toolbar */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-xs text-[#888] hover:text-white transition-colors flex items-center gap-1">
                  🔍 Search transcript
                </button>
                <button className="text-xs text-[#888] hover:text-white transition-colors flex items-center gap-1">
                  📋 Copy all
                </button>
              </div>
              <span className="text-xs text-[#888]">8 entries · 1m 52s</span>
            </div>
          </div>
        </motion.div>

        {/* Summary Side (40%) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-white text-lg">AI Analysis</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-[#9D4EDD]/20 text-[#9D4EDD] border border-[#9D4EDD]/30">
              Auto-updating
            </span>
          </div>
          <SummaryPanel />
        </motion.div>
      </div>
    </div>
  )
}
