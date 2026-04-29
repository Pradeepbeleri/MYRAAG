'use client'

import { motion } from 'framer-motion'
import { mockTranscripts } from '@/lib/mock-data'

export default function TranscriptViewer() {
  return (
    <div className="space-y-4">
      {mockTranscripts.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="flex gap-3 group"
        >
          {/* Avatar */}
          <div
            className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white"
            style={{ background: item.speakerColor + '33', border: `1px solid ${item.speakerColor}` }}
          >
            {item.speaker.charAt(0)}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold" style={{ color: item.speakerColor }}>
                {item.speaker}
              </span>
              <span className="text-xs text-[#888] font-mono">{item.timestamp}</span>
            </div>
            <div className="glass rounded-lg rounded-tl-none p-3 text-sm text-[#E0E0E0] leading-relaxed group-hover:border-[#9D4EDD]/30 transition-colors">
              {item.text}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
