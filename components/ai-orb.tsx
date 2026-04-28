'use client'

import { motion } from 'framer-motion'

interface AIORBProps {
  size?: number
  active?: boolean
}

export default function AIOrb({ size = 200, active = false }: AIORBProps) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer rings */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-[#9D4EDD]/20"
          animate={{ scale: [1, 1.1 * i, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: `scale(${1 + i * 0.15})` }}
        />
      ))}

      {/* Main orb */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #C77DFF, #9D4EDD, #3A0CA3)',
          boxShadow: active
            ? '0 0 60px rgba(157, 78, 221, 0.8), 0 0 120px rgba(157, 78, 221, 0.4)'
            : '0 0 40px rgba(157, 78, 221, 0.5)',
        }}
        animate={active ? { scale: [1, 1.05, 1] } : { scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Inner glow */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent)',
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Particles */}
      {active && [0, 60, 120, 180, 240, 300].map((angle) => (
        <motion.div
          key={angle}
          className="absolute w-1 h-1 rounded-full bg-[#00D4FF]"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(angle * Math.PI / 180) * (size * 0.6), 0],
            y: [0, Math.sin(angle * Math.PI / 180) * (size * 0.6), 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: 2, delay: angle / 360, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-3 h-3 rounded-full bg-white"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </div>
  )
}
