'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AIOrb from '@/components/ai-orb'
import MicrophoneButton from '@/components/microphone-button'
import Waveform from '@/components/waveform'
import { mockCommands, mockStats } from '@/lib/mock-data'
import { formatTime } from '@/lib/utils'

const topStats = [
  { label: 'Processing Latency', value: '14ms', icon: '⚡', color: '#00D4FF', sub: 'Industry best' },
  { label: 'Session Duration', value: '00:00', icon: '⏱', color: '#9D4EDD', sub: 'Current session' },
  { label: 'Commands Today', value: '24', icon: '🎙️', color: '#00FF88', sub: '+8 from yesterday' },
  { label: 'Accuracy Score', value: '97%', icon: '🎯', color: '#FFB800', sub: 'Last 7 days avg' },
]

export default function DashboardPage() {
  const [isListening, setIsListening] = useState(false)
  const [sessionSeconds, setSessionSeconds] = useState(0)
  const [currentCommand, setCurrentCommand] = useState('')
  const [productivity, setProductivity] = useState(78)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isListening) {
      interval = setInterval(() => setSessionSeconds((s) => s + 1), 1000)
    } else {
      setSessionSeconds(0)
    }
    return () => clearInterval(interval)
  }, [isListening])

  const handleMicToggle = (active: boolean) => {
    setIsListening(active)
    if (active) {
      const commands = [
        'Schedule meeting with team tomorrow at 10am...',
        'Summarize last sprint standup notes...',
        'Create task: Review API documentation...',
        'Send daily report to Slack channel...',
      ]
      let idx = 0
      const cmdInterval = setInterval(() => {
        if (idx < commands.length && active) {
          setCurrentCommand(commands[idx])
          idx++
        } else {
          clearInterval(cmdInterval)
          setCurrentCommand('')
        }
      }, 2500)
    } else {
      setCurrentCommand('')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-3xl font-black text-white">Command Center</h1>
          <p className="text-[#888] text-sm mt-1">Your AI Voice OS is ready</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#00FF88]/10 border border-[#00FF88]/30">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="text-xs font-medium text-[#00FF88]">System Online</span>
          </div>
          <div className="glass rounded-xl px-4 py-2 text-sm text-[#888]">
            {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
        </div>
      </motion.div>

      {/* Top Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {topStats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass rounded-xl p-5 card-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xl">{stat.icon}</span>
              <span className="text-xs text-[#888]">{stat.sub}</span>
            </div>
            <div className="text-2xl font-black mb-1" style={{ color: stat.color }}>
              {stat.label === 'Session Duration' ? formatTime(sessionSeconds) : stat.value}
            </div>
            <div className="text-xs text-[#888] font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Central Voice Interface */}
        <div className="lg:col-span-2 space-y-6">
          {/* Voice Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: isListening
                ? 'linear-gradient(135deg, rgba(157,78,221,0.15), rgba(0,212,255,0.05))'
                : undefined,
            }}
          >
            {/* Background radial */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(157,78,221,0.3), transparent)',
              }}
            />

            <div className="relative z-10">
              {/* AIOrb */}
              <div className="flex justify-center mb-8">
                <AIOrb size={120} active={isListening} />
              </div>

              {/* Waveform */}
              <div className="mb-8">
                <Waveform active={isListening} bars={40} color={isListening ? '#9D4EDD' : '#333'} />
              </div>

              {/* Microphone Button */}
              <div className="flex justify-center mb-12">
                <MicrophoneButton onToggle={handleMicToggle} />
              </div>

              {/* Current Command Display */}
              <motion.div
                className="min-h-[48px] flex items-center justify-center"
                animate={{ opacity: currentCommand ? 1 : 0.5 }}
              >
                {currentCommand ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-xl px-6 py-3 text-sm text-[#E0E0E0] font-mono max-w-md"
                  >
                    <span className="text-[#9D4EDD]">▶ </span>{currentCommand}
                  </motion.div>
                ) : (
                  <p className="text-[#888] text-sm">
                    {isListening ? 'Waiting for command...' : 'Press the microphone to start'}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Session Insights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-lg font-bold text-white mb-5">Session Insights</h2>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Hours Saved', value: mockStats.hoursSaved, suffix: 'h', color: '#00FF88' },
                { label: 'Meetings Processed', value: mockStats.meetingsProcessed, suffix: '', color: '#9D4EDD' },
                { label: 'Commands Run', value: mockStats.commandsExecuted, suffix: '', color: '#00D4FF' },
              ].map((item) => (
                <div key={item.label} className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl font-black mb-1" style={{ color: item.color }}>
                    {item.value.toLocaleString()}{item.suffix}
                  </div>
                  <div className="text-xs text-[#888]">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {/* Recent Commands */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-white">Recent Commands</h2>
              <span className="text-xs text-[#888] bg-white/5 px-2 py-1 rounded-full">Today</span>
            </div>
            <div className="space-y-3">
              {mockCommands.map((cmd, idx) => (
                <motion.div
                  key={cmd.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="w-6 h-6 rounded-full bg-[#00FF88]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#00FF88] text-xs">✓</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-[#E0E0E0] leading-relaxed truncate group-hover:text-white transition-colors">
                      {cmd.command}
                    </p>
                    <p className="text-xs text-[#888] mt-0.5">{cmd.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Productivity Score */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-lg font-bold text-white mb-5">Productivity Score</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-28 h-28">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#1A1A1A" strokeWidth="10" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="url(#prodGrad)"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                    animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - productivity / 100) }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="prodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#9D4EDD" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-white">{productivity}%</span>
                  <span className="text-xs text-[#888]">Score</span>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-[#888]">
              Excellent productivity today! You&apos;re in the top 15% of users.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {[
                { label: 'Focus Time', value: '4.2h', color: '#9D4EDD' },
                { label: 'Tasks Done', value: '12', color: '#00FF88' },
              ].map((m) => (
                <div key={m.label} className="bg-white/5 rounded-xl p-3 text-center">
                  <div className="font-bold text-lg" style={{ color: m.color }}>{m.value}</div>
                  <div className="text-xs text-[#888]">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
