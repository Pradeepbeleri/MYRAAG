'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { mockMeetings } from '@/lib/mock-data'
import ChartSentiment from '@/components/chart-sentiment'

const filters = ['All', 'Product', 'Engineering', 'Marketing', 'Investor']

export default function ArchivePage() {
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filtered = mockMeetings.filter((m) => {
    const matchSearch =
      m.title.toLowerCase().includes(search.toLowerCase()) ||
      m.summary.toLowerCase().includes(search.toLowerCase()) ||
      m.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))

    const matchFilter =
      activeFilter === 'All' ||
      m.tags.some((t) => t.toLowerCase() === activeFilter.toLowerCase())

    return matchSearch && matchFilter
  })

  const getSentimentColor = (score: number) => {
    if (score >= 0.8) return '#00FF88'
    if (score >= 0.65) return '#FFB800'
    return '#FF006E'
  }

  const getSentimentLabel = (score: number) => {
    if (score >= 0.8) return 'Very Positive'
    if (score >= 0.65) return 'Positive'
    return 'Mixed'
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black text-white mb-1">Meeting Archive</h1>
        <p className="text-[#888] text-sm">Search and explore all your past sessions</p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="relative mb-6"
      >
        <div className="glass rounded-2xl flex items-center gap-4 px-6 py-4 focus-within:border-[#9D4EDD]/50 transition-colors">
          <span className="text-[#888] text-xl">🔍</span>
          <input
            type="text"
            placeholder="Search meetings, topics, participants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-[#555] outline-none text-lg"
          />
          {search && (
            <button onClick={() => setSearch('')} className="text-[#888] hover:text-white text-sm">
              ✕
            </button>
          )}
          <div className="hidden md:flex items-center gap-2 text-xs text-[#555]">
            <span className="px-2 py-1 rounded bg-white/5 font-mono">⌘K</span>
          </div>
        </div>
      </motion.div>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="flex items-center gap-2 mb-6 overflow-x-auto pb-1"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              activeFilter === filter
                ? 'text-white'
                : 'text-[#888] hover:text-white hover:bg-white/5'
            }`}
            style={
              activeFilter === filter
                ? {
                    background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
                    boxShadow: '0 0 20px rgba(157, 78, 221, 0.3)',
                  }
                : {}
            }
          >
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {[
          { label: 'Total Meetings', value: '342', icon: '🗄️', color: '#9D4EDD' },
          { label: 'Hours Recorded', value: '127h', icon: '⏱', color: '#00D4FF' },
          { label: 'Hours Saved', value: '89h', icon: '💾', color: '#00FF88' },
          { label: 'Avg Sentiment', value: '82%', icon: '💡', color: '#FFB800' },
        ].map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + idx * 0.05 }}
            className="glass rounded-xl p-4 flex items-center gap-3"
          >
            <span className="text-xl">{stat.icon}</span>
            <div>
              <div className="font-bold text-lg" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs text-[#888]">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Meeting Cards */}
        <div className="xl:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-white">
              {filtered.length} Meeting{filtered.length !== 1 ? 's' : ''}
            </h2>
            <select className="bg-white/5 border border-white/10 text-[#888] text-xs rounded-lg px-3 py-1.5 outline-none">
              <option>Latest first</option>
              <option>Oldest first</option>
              <option>Best sentiment</option>
            </select>
          </div>

          <AnimatePresence mode="popLayout">
            <div className="space-y-4">
              {filtered.map((meeting, idx) => (
                <motion.div
                  key={meeting.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="glass rounded-2xl p-5 cursor-pointer group card-hover"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white group-hover:text-[#C77DFF] transition-colors truncate">
                        {meeting.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-[#888]">
                        <span>📅 {meeting.date}</span>
                        <span>⏱ {meeting.duration}</span>
                        <span>👥 {meeting.participants.length} participants</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <div
                        className="text-sm font-bold"
                        style={{ color: getSentimentColor(meeting.sentiment) }}
                      >
                        {Math.round(meeting.sentiment * 100)}%
                      </div>
                      <div className="text-xs" style={{ color: getSentimentColor(meeting.sentiment) }}>
                        {getSentimentLabel(meeting.sentiment)}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#888] mb-3 leading-relaxed">{meeting.summary}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {meeting.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-[#9D4EDD]/10 text-[#9D4EDD] border border-[#9D4EDD]/20"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <button className="text-xs text-[#888] hover:text-[#9D4EDD] transition-colors opacity-0 group-hover:opacity-100">
                      View details →
                    </button>
                  </div>

                  {/* Sentiment bar */}
                  <div className="mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: getSentimentColor(meeting.sentiment) }}
                      initial={{ width: 0 }}
                      animate={{ width: `${meeting.sentiment * 100}%` }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}

              {filtered.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 text-[#888]"
                >
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-lg font-medium text-white mb-2">No meetings found</p>
                  <p className="text-sm">Try adjusting your search or filters</p>
                </motion.div>
              )}
            </div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                  currentPage === page
                    ? 'text-white'
                    : 'text-[#888] hover:text-white hover:bg-white/5'
                }`}
                style={
                  currentPage === page
                    ? { background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)' }
                    : {}
                }
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* Sidebar Panel */}
        <div className="space-y-6">
          {/* Sentiment Trend */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-white">Sentiment Trend</h3>
              <span className="text-xs text-[#888]">Last 7 days</span>
            </div>
            <ChartSentiment />
          </motion.div>

          {/* Top Topics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-bold text-white mb-5">Top Topics</h3>
            <div className="space-y-3">
              {[
                { topic: 'Product Strategy', count: 12, width: '80%' },
                { topic: 'Engineering', count: 9, width: '60%' },
                { topic: 'Marketing', count: 7, width: '47%' },
                { topic: 'Investment', count: 4, width: '27%' },
                { topic: 'Design', count: 3, width: '20%' },
              ].map((item) => (
                <div key={item.topic}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#E0E0E0]">{item.topic}</span>
                    <span className="text-[#888]">{item.count} meetings</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #9D4EDD, #00D4FF)' }}
                      initial={{ width: 0 }}
                      animate={{ width: item.width }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Export */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-bold text-white mb-4">Export Archive</h3>
            <div className="space-y-2">
              {[
                { format: 'PDF Report', icon: '📄', desc: 'Full archive with insights' },
                { format: 'CSV Export', icon: '📊', desc: 'Raw data for analysis' },
                { format: 'JSON Backup', icon: '💾', desc: 'Complete backup' },
              ].map((exp) => (
                <button
                  key={exp.format}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left"
                >
                  <span>{exp.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-white">{exp.format}</div>
                    <div className="text-xs text-[#888]">{exp.desc}</div>
                  </div>
                  <span className="ml-auto text-[#888] text-xs">→</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
