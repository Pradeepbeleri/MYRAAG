'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCardProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  color?: string
}

export default function StatCard({ value, suffix = '', prefix = '', label, description, color = '#9D4EDD' }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 2000
    const step = value / (duration / 16)
    let current = 0
    const timer = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 card-hover neon-border-purple"
    >
      <div className="text-4xl font-bold mb-2" style={{ color }}>
        {prefix}{count}{suffix}
      </div>
      <div className="text-white font-semibold text-lg mb-1">{label}</div>
      {description && <div className="text-[#888] text-sm">{description}</div>}
    </motion.div>
  )
}
