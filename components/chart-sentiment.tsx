'use client'

import { motion } from 'framer-motion'
import { mockSentimentData } from '@/lib/mock-data'

export default function ChartSentiment() {
  const maxScore = 1
  const chartHeight = 120

  return (
    <div className="w-full">
      <div className="flex items-end gap-2 h-32 mb-2">
        {mockSentimentData.map((point, idx) => {
          const height = (point.score / maxScore) * chartHeight
          const hue = point.score > 0.8 ? '#00FF88' : point.score > 0.65 ? '#9D4EDD' : '#FFB800'
          return (
            <div key={point.date} className="flex-1 flex flex-col items-center gap-1">
              <motion.div
                className="w-full rounded-t-sm relative group cursor-pointer"
                style={{ height, background: `linear-gradient(to top, ${hue}44, ${hue})` }}
                initial={{ height: 0 }}
                animate={{ height }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-white bg-[#1A1A1A] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {Math.round(point.score * 100)}%
                </div>
              </motion.div>
              <span className="text-xs text-[#888]">{point.date}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
