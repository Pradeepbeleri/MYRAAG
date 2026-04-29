'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface MicButtonProps {
  onToggle?: (active: boolean) => void
}

export default function MicrophoneButton({ onToggle }: MicButtonProps) {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    const next = !isActive
    setIsActive(next)
    onToggle?.(next)
  }

  return (
    <div className="relative flex items-center justify-center">
      {/* Ripple rings when active */}
      <AnimatePresence>
        {isActive && [1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border-2 border-[#9D4EDD]"
            initial={{ width: 80, height: 80, opacity: 0.8 }}
            animate={{ width: 80 + i * 50, height: 80 + i * 50, opacity: 0 }}
            transition={{ duration: 2, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        onClick={handleClick}
        className="relative w-20 h-20 rounded-full flex items-center justify-center text-3xl cursor-pointer z-10"
        style={{
          background: isActive
            ? 'radial-gradient(circle, #C77DFF, #9D4EDD)'
            : 'radial-gradient(circle, #2A1A3E, #1A0A2E)',
          boxShadow: isActive
            ? '0 0 40px rgba(157, 78, 221, 0.8), 0 0 80px rgba(157, 78, 221, 0.4)'
            : '0 0 20px rgba(157, 78, 221, 0.3)',
          border: '2px solid rgba(157, 78, 221, 0.5)',
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
        transition={isActive ? { duration: 1.5, repeat: Infinity } : {}}
        aria-label={isActive ? 'Stop recording' : 'Start recording'}
      >
        <span>{isActive ? '⏹' : '🎙'}</span>
      </motion.button>

      {/* Status text */}
      <motion.div
        className="absolute -bottom-8 text-xs font-medium"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color: isActive ? '#9D4EDD' : '#888' }}
      >
        {isActive ? 'Listening...' : 'Click to speak'}
      </motion.div>
    </div>
  )
}
