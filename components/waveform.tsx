'use client'

import { motion } from 'framer-motion'

interface WaveformProps {
  active?: boolean
  bars?: number
  color?: string
}

export default function Waveform({ active = false, bars = 32, color = '#9D4EDD' }: WaveformProps) {
  return (
    <div className="flex items-center justify-center gap-[3px] h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full flex-shrink-0"
          style={{
            width: 3,
            background: `linear-gradient(to top, ${color}, ${color}88)`,
          }}
          animate={
            active
              ? {
                  height: [4, 8 + ((i * 7 + 13) % 40), 4 + ((i * 3 + 5) % 30), 10 + ((i * 11 + 7) % 50), 4],
                }
              : { height: 4 }
          }
          transition={
            active
              ? {
                  duration: 1.2,
                  repeat: Infinity,
                  delay: (i / bars) * 0.8,
                  ease: 'easeInOut',
                }
              : { duration: 0.3 }
          }
        />
      ))}
    </div>
  )
}
