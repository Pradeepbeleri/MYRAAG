'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const personalityModes = [
  { id: 'professional', label: 'Professional', emoji: '💼', desc: 'Formal, precise, business-focused responses', color: '#9D4EDD' },
  { id: 'friendly', label: 'Friendly', emoji: '😊', desc: 'Warm, conversational, encouraging tone', color: '#00D4FF' },
  { id: 'founder', label: 'Founder', emoji: '🚀', desc: 'Fast-paced, decisive, startup mindset', color: '#00FF88' },
  { id: 'student', label: 'Student', emoji: '🎓', desc: 'Educational, patient, detailed explanations', color: '#FFB800' },
]

const voiceModels = [
  'MYRAAG Neural v2 (Default)',
  'ElevenLabs - Rachel',
  'ElevenLabs - Adam',
  'OpenAI TTS - Nova',
  'Google Wavenet - en-US-F',
]

const themeColors = [
  { label: 'Purple (Default)', primary: '#9D4EDD', secondary: '#00D4FF' },
  { label: 'Blue Ocean', primary: '#0070F3', secondary: '#00D4FF' },
  { label: 'Green Matrix', primary: '#00FF88', secondary: '#00D4FF' },
  { label: 'Rose Gold', primary: '#FF006E', secondary: '#FFB800' },
  { label: 'Solar', primary: '#FFB800', secondary: '#FF006E' },
]

const integrations = [
  { name: 'GitHub', icon: '🐙', desc: 'Auto-create issues from action items', enabled: true },
  { name: 'Slack', icon: '💬', desc: 'Post summaries to channels', enabled: true },
  { name: 'Notion', icon: '📓', desc: 'Sync transcripts to workspace', enabled: false },
  { name: 'Google Calendar', icon: '📅', desc: 'Link meetings to calendar events', enabled: false },
]

const securityToggles = [
  { label: 'Two-Factor Authentication', desc: 'Extra layer of account security', enabled: true },
  { label: 'End-to-End Encryption', desc: 'All recordings encrypted at rest', enabled: true },
  { label: 'Auto-delete recordings', desc: 'Delete raw audio after processing', enabled: false },
  { label: 'Anonymize transcripts', desc: 'Remove PII from stored data', enabled: false },
]

const notificationPrefs = [
  { label: 'Session complete', desc: 'When transcript is ready', enabled: true },
  { label: 'Action item reminders', desc: 'Daily digest of pending tasks', enabled: true },
  { label: 'Weekly insights report', desc: 'Productivity summary email', enabled: false },
  { label: 'Product updates', desc: 'New features and improvements', enabled: true },
]

export default function SettingsPage() {
  const [activePersonality, setActivePersonality] = useState('professional')
  const [selectedVoice, setSelectedVoice] = useState(voiceModels[0])
  const [selectedTheme, setSelectedTheme] = useState(0)
  const [intStates, setIntStates] = useState(integrations.map((i) => i.enabled))
  const [secStates, setSecStates] = useState(securityToggles.map((s) => s.enabled))
  const [notifStates, setNotifStates] = useState(notificationPrefs.map((n) => n.enabled))
  const [name, setName] = useState('Pradeep Beleri')
  const [email, setEmail] = useState('pradeep@myraag.ai')

  const Toggle = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className="relative w-11 h-6 rounded-full transition-all flex-shrink-0"
      style={{ background: enabled ? '#9D4EDD' : 'rgba(255,255,255,0.1)' }}
      aria-checked={enabled}
      role="switch"
    >
      <motion.div
        animate={{ x: enabled ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="absolute top-1 w-4 h-4 rounded-full bg-white shadow"
      />
    </button>
  )

  return (
    <div className="min-h-screen max-w-4xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-black text-white">Settings</h1>
        <p className="text-[#888] text-sm mt-1">Customize your MYRAAG experience</p>
      </motion.div>

      <div className="space-y-8">
        {/* ── PROFILE SECTION ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-6">User Profile</h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
            {/* Avatar */}
            <div className="relative">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white"
                style={{ background: 'linear-gradient(135deg, #9D4EDD, #00D4FF)' }}
              >
                P
              </div>
              <button className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#9D4EDD] flex items-center justify-center text-xs text-white">
                ✏️
              </button>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xl font-bold text-white">{name}</span>
                <span className="px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF]">
                  Pro Plan
                </span>
              </div>
              <p className="text-[#888] text-sm">{email}</p>
              <p className="text-xs text-[#888] mt-1">Member since Jan 2024 · 342 sessions recorded</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-[#888] mb-2">Display Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#9D4EDD]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#888] mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#9D4EDD]/50 transition-colors"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              className="px-6 py-2.5 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)' }}
            >
              Save Changes
            </button>
          </div>
        </motion.section>

        {/* ── AI PERSONALITY ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-2">AI Personality</h2>
          <p className="text-[#888] text-sm mb-6">Choose how MYRAAG communicates with you</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {personalityModes.map((mode) => (
              <motion.button
                key={mode.id}
                onClick={() => setActivePersonality(mode.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-4 rounded-xl text-left transition-all"
                style={{
                  background:
                    activePersonality === mode.id
                      ? `${mode.color}15`
                      : 'rgba(255,255,255,0.03)',
                  border:
                    activePersonality === mode.id
                      ? `1px solid ${mode.color}40`
                      : '1px solid rgba(255,255,255,0.08)',
                  boxShadow:
                    activePersonality === mode.id
                      ? `0 0 20px ${mode.color}20`
                      : undefined,
                }}
              >
                {activePersonality === mode.id && (
                  <div
                    className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-[10px] text-white"
                    style={{ background: mode.color }}
                  >
                    ✓
                  </div>
                )}
                <div className="text-2xl mb-2">{mode.emoji}</div>
                <div className="text-sm font-semibold text-white mb-1">{mode.label}</div>
                <div className="text-xs text-[#888] leading-relaxed">{mode.desc}</div>
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* ── VOICE MODEL ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-2">Voice Model</h2>
          <p className="text-[#888] text-sm mb-5">Select the AI voice for MYRAAG&apos;s responses</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {voiceModels.map((model) => (
              <button
                key={model}
                onClick={() => setSelectedVoice(model)}
                className="flex items-center gap-3 p-4 rounded-xl text-left transition-all"
                style={{
                  background: selectedVoice === model ? 'rgba(157,78,221,0.1)' : 'rgba(255,255,255,0.03)',
                  border: selectedVoice === model ? '1px solid rgba(157,78,221,0.4)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: selectedVoice === model ? '#9D4EDD' : 'rgba(255,255,255,0.05)',
                  }}
                >
                  <span className="text-sm">{selectedVoice === model ? '▶' : '🔊'}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-white truncate">{model}</div>
                </div>
                {selectedVoice === model && (
                  <span className="text-[#9D4EDD] text-xs">Active</span>
                )}
              </button>
            ))}
          </div>
        </motion.section>

        {/* ── THEME ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-2">Theme</h2>
          <p className="text-[#888] text-sm mb-5">Customize your color palette</p>
          <div className="flex flex-wrap gap-3">
            {themeColors.map((theme, idx) => (
              <button
                key={theme.label}
                onClick={() => setSelectedTheme(idx)}
                className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all"
                style={{
                  background: selectedTheme === idx ? 'rgba(255,255,255,0.05)' : 'transparent',
                  border: selectedTheme === idx ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent',
                }}
              >
                <div className="flex gap-1">
                  <div className="w-6 h-6 rounded-full" style={{ background: theme.primary }} />
                  <div className="w-6 h-6 rounded-full" style={{ background: theme.secondary }} />
                </div>
                <span className="text-xs text-[#888]">{theme.label}</span>
                {selectedTheme === idx && <span className="text-[10px] text-[#9D4EDD]">Active</span>}
              </button>
            ))}
          </div>
        </motion.section>

        {/* ── INTEGRATIONS ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-2">Integrations</h2>
          <p className="text-[#888] text-sm mb-5">Connect your favorite tools</p>
          <div className="space-y-3">
            {integrations.map((int, idx) => (
              <div
                key={int.name}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <span className="text-2xl">{int.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{int.name}</div>
                  <div className="text-xs text-[#888]">{int.desc}</div>
                </div>
                <div className="flex items-center gap-3">
                  {intStates[idx] && (
                    <span className="text-xs text-[#00FF88] hidden sm:block">Connected</span>
                  )}
                  <Toggle
                    enabled={intStates[idx]}
                    onToggle={() =>
                      setIntStates((prev) => prev.map((v, i) => (i === idx ? !v : v)))
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── SECURITY ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-2">Security & Privacy</h2>
          <p className="text-[#888] text-sm mb-5">Keep your data safe</p>
          <div className="space-y-3">
            {securityToggles.map((sec, idx) => (
              <div
                key={sec.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{sec.label}</div>
                  <div className="text-xs text-[#888]">{sec.desc}</div>
                </div>
                <Toggle
                  enabled={secStates[idx]}
                  onToggle={() =>
                    setSecStates((prev) => prev.map((v, i) => (i === idx ? !v : v)))
                  }
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── NOTIFICATIONS ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass rounded-2xl p-6"
        >
          <h2 className="text-lg font-bold text-white mb-2">Notifications</h2>
          <p className="text-[#888] text-sm mb-5">Control what you hear from us</p>
          <div className="space-y-3">
            {notificationPrefs.map((notif, idx) => (
              <div
                key={notif.label}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white">{notif.label}</div>
                  <div className="text-xs text-[#888]">{notif.desc}</div>
                </div>
                <Toggle
                  enabled={notifStates[idx]}
                  onToggle={() =>
                    setNotifStates((prev) => prev.map((v, i) => (i === idx ? !v : v)))
                  }
                />
              </div>
            ))}
          </div>
        </motion.section>

        {/* ── DANGER ZONE ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6 border border-[#FF006E]/30"
          style={{ background: 'rgba(255, 0, 110, 0.05)' }}
        >
          <h2 className="text-lg font-bold text-[#FF006E] mb-2">⚠ Danger Zone</h2>
          <p className="text-[#888] text-sm mb-5">These actions are irreversible. Proceed with caution.</p>
          <div className="space-y-3">
            {[
              { label: 'Delete All Recordings', desc: 'Permanently delete all stored audio files' },
              { label: 'Clear Archive', desc: 'Remove all transcripts and meeting history' },
              { label: 'Delete Account', desc: 'Permanently close your MYRAAG account' },
            ].map((action) => (
              <div
                key={action.label}
                className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#FF006E]/5 border border-[#FF006E]/15"
              >
                <div>
                  <div className="text-sm font-semibold text-white">{action.label}</div>
                  <div className="text-xs text-[#888]">{action.desc}</div>
                </div>
                <button className="flex-shrink-0 px-4 py-2 rounded-xl text-xs font-semibold text-[#FF006E] border border-[#FF006E]/30 hover:bg-[#FF006E]/10 transition-colors">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}
