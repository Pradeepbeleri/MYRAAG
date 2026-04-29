'use client'

import { motion } from 'framer-motion'
import { mockActionItems } from '@/lib/mock-data'

export default function SummaryPanel() {
  const priorityColors: Record<string, string> = {
    high: '#FF006E',
    medium: '#FFB800',
    low: '#00FF88',
  }

  return (
    <div className="space-y-6">
      {/* AI Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#9D4EDD]">✦</span>
          <h3 className="font-semibold text-white">AI Summary</h3>
        </div>
        <p className="text-[#888] text-sm leading-relaxed">
          The team conducted a Q3 product roadmap review with positive outcomes. Key highlights included a 23% improvement in user retention and industry-leading 14ms response latency. The team aligned on conference announcement strategy and upcoming sprint priorities.
        </p>
      </motion.div>

      {/* Action Items */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#FFB800]">⚡</span>
          <h3 className="font-semibold text-white">Action Items</h3>
          <span className="ml-auto text-xs bg-[#FFB800]/20 text-[#FFB800] px-2 py-0.5 rounded-full">{mockActionItems.length}</span>
        </div>
        <div className="space-y-2">
          {mockActionItems.map((item) => (
            <div key={item.id} className="flex items-start gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors">
              <span
                className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                style={{ background: priorityColors[item.priority] }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#E0E0E0]">{item.text}</p>
                <p className="text-xs text-[#888] mt-0.5">{item.assignee} · Due {item.due}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Sentiment Meter */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass rounded-xl p-5"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#00FF88]">💡</span>
          <h3 className="font-semibold text-white">Sentiment Analysis</h3>
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs text-[#888] mb-1">
            <span>Overall Sentiment</span>
            <span className="text-[#00FF88] font-medium">85% Positive</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(to right, #9D4EDD, #00FF88)' }}
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[
            { label: 'Positive', value: '72%', color: '#00FF88' },
            { label: 'Neutral', value: '20%', color: '#FFB800' },
            { label: 'Negative', value: '8%', color: '#FF006E' },
          ].map((item) => (
            <div key={item.label} className="text-center p-2 rounded-lg bg-white/5">
              <div className="text-sm font-bold" style={{ color: item.color }}>{item.value}</div>
              <div className="text-xs text-[#888]">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Export Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all"
        style={{
          background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
          boxShadow: '0 4px 20px rgba(157, 78, 221, 0.3)',
        }}
      >
        📄 Export as PDF
      </motion.button>
    </div>
  )
}
