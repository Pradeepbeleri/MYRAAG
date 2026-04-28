'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import AIOrb from '@/components/ai-orb'
import StatCard from '@/components/stat-card'

const features = [
  {
    icon: '🎙️',
    title: 'Voice Recognition',
    description: 'Industry-leading 14ms latency with 97% accuracy across 50+ languages. MYRAAG hears every word, every nuance.',
    color: '#9D4EDD',
  },
  {
    icon: '📜',
    title: 'Smart Transcription',
    description: 'Real-time speaker diarization with timestamped transcripts. Never miss a single word from your meetings.',
    color: '#00D4FF',
  },
  {
    icon: '✦',
    title: 'AI Summary',
    description: 'Instant GPT-powered summaries extracting action items, decisions, and key insights from every session.',
    color: '#00FF88',
  },
  {
    icon: '🗄️',
    title: 'Archive Search',
    description: 'Semantic search across your entire meeting archive. Find any conversation, decision, or idea instantly.',
    color: '#FFB800',
  },
  {
    icon: '👥',
    title: 'Team Sync',
    description: 'Share transcripts, assign tasks, and collaborate in real-time. Keep every stakeholder in the loop.',
    color: '#FF006E',
  },
  {
    icon: '📊',
    title: 'Analytics',
    description: 'Deep sentiment analysis, productivity metrics, and conversation insights to optimize your workflow.',
    color: '#C77DFF',
  },
]

const steps = [
  {
    step: '01',
    title: 'Activate Your Voice OS',
    description: 'Click the microphone and MYRAAG instantly connects. No setup, no configuration — just speak.',
    icon: '🎙️',
  },
  {
    step: '02',
    title: 'AI Processes Everything',
    description: 'Real-time transcription, speaker identification, and AI analysis happen simultaneously at 14ms latency.',
    icon: '⚡',
  },
  {
    step: '03',
    title: 'Act on Intelligence',
    description: 'Get instant summaries, auto-generated action items, and deep insights to supercharge your productivity.',
    icon: '🚀',
  },
]

const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: ['5 hours/month recording', '10 meeting summaries', 'Basic transcription', 'Email support'],
    cta: 'Get Started Free',
    highlight: false,
    color: '#888',
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For power users and teams',
    features: ['Unlimited recording', 'Unlimited summaries', 'Advanced AI analysis', 'Team collaboration', 'API access', 'Priority support'],
    cta: 'Start Pro Trial',
    highlight: true,
    color: '#9D4EDD',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For large organizations',
    features: ['Everything in Pro', 'Custom AI models', 'SSO & SAML', 'Dedicated infrastructure', 'SLA guarantee', '24/7 support'],
    cta: 'Contact Sales',
    highlight: false,
    color: '#00D4FF',
  },
]

export default function LandingPage() {
  const [isOrbActive] = useState(true)

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <Navbar />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animated-gradient pt-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#9D4EDD 1px, transparent 1px), linear-gradient(90deg, #9D4EDD 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(157,78,221,0.15) 0%, transparent 70%)' }}
        />

        {/* Floating orbs background */}
        {[
          { top: '15%', left: '8%', size: 120, opacity: 0.15 },
          { top: '70%', right: '5%', size: 80, opacity: 0.1 },
          { top: '40%', right: '15%', size: 60, opacity: 0.08 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: (orb as { left?: string }).left,
              right: (orb as { right?: string }).right,
              background: `radial-gradient(circle, rgba(157,78,221,${orb.opacity}), transparent)`,
              filter: 'blur(40px)',
            }}
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#9D4EDD]/10 border border-[#9D4EDD]/30 text-xs font-medium text-[#9D4EDD] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse" />
            Now Live — AI Voice OS v2.0
            <span className="px-2 py-0.5 rounded-full bg-[#9D4EDD]/20 text-[#C77DFF]">NEW</span>
          </motion.div>

          {/* Central AIOrb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <AIOrb size={160} active={isOrbActive} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-black leading-tight mb-6"
          >
            Meet{' '}
            <span className="gradient-text">MYRAAG</span>
            <br />
            <span className="text-[#F5F5F5]">Your Intelligent</span>
            <br />
            <span className="text-[#F5F5F5]">Voice Operating System</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            MYRAAG transforms every conversation into actionable intelligence. Real-time transcription,
            AI summaries, and voice-powered automation — all at 14ms latency.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/dashboard"
              className="group px-8 py-4 rounded-xl text-white font-semibold text-lg transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
                boxShadow: '0 0 30px rgba(157, 78, 221, 0.4)',
              }}
            >
              <span className="flex items-center gap-2">
                🚀 Start Free
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
            <button
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-white/20 text-[#F5F5F5] hover:bg-white/5 transition-all"
            >
              ▶ Watch Demo
            </button>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#888]"
          >
            <span className="flex items-center gap-2">
              <span className="text-[#00FF88]">✓</span> No credit card required
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#444]" />
            <span className="flex items-center gap-2">
              <span className="text-[#00FF88]">✓</span> Free plan available
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#444]" />
            <span className="flex items-center gap-2">
              <span className="text-[#00FF88]">✓</span> SOC 2 certified
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-[#9D4EDD]" />
          </div>
        </motion.div>
      </section>

      {/* ── STATS SECTION ── */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engineered for <span className="gradient-text">Peak Performance</span>
            </h2>
            <p className="text-[#888] text-lg">Numbers that define the future of voice AI</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <StatCard
              value={14}
              suffix="ms"
              label="Response Latency"
              description="Industry-leading voice processing speed"
              color="#00D4FF"
            />
            <StatCard
              value={97}
              suffix="%"
              label="Accuracy Rate"
              description="Across 50+ languages and accents"
              color="#9D4EDD"
            />
            <StatCard
              value={5}
              suffix="x"
              label="Productivity Boost"
              description="Average improvement for Pro users"
              color="#00FF88"
            />
          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="py-24 px-6 relative">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #9D4EDD 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-[#9D4EDD] tracking-widest uppercase mb-3 block">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Move Faster</span>
            </h2>
            <p className="text-[#888] text-lg max-w-2xl mx-auto">
              MYRAAG is the complete intelligence layer for your voice-driven workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass rounded-2xl p-6 cursor-pointer group"
                style={{ borderColor: `${feature.color}22` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}30` }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#C77DFF] transition-colors">{feature.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{feature.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: feature.color }}>
                  Learn more
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, #9D4EDD22, transparent)' }}
        />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-[#00D4FF] tracking-widest uppercase mb-3 block">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Up and Running in <span className="gradient-text">60 Seconds</span>
            </h2>
            <p className="text-[#888] text-lg">No lengthy onboarding. No technical setup. Just pure intelligence.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-[#9D4EDD]/40 to-transparent" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, #9D4EDD22, #00D4FF11)',
                      border: '1px solid rgba(157, 78, 221, 0.3)',
                      boxShadow: '0 0 30px rgba(157, 78, 221, 0.2)',
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)' }}
                  >
                    {idx + 1}
                  </div>
                </div>
                <div className="text-xs font-mono text-[#9D4EDD] mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-mono text-[#FFB800] tracking-widest uppercase mb-3 block">Pricing</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-[#888] text-lg">Start free. Scale as you grow. No surprises.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-8 ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-[#9D4EDD]/20 to-[#7B2CBF]/10'
                    : 'glass'
                }`}
                style={{
                  border: tier.highlight
                    ? '1px solid rgba(157, 78, 221, 0.5)'
                    : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: tier.highlight ? '0 0 40px rgba(157, 78, 221, 0.2)' : undefined,
                }}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF]">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                  <p className="text-[#888] text-sm mb-4">{tier.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-white">{tier.price}</span>
                    <span className="text-[#888] text-sm mb-1">/{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#E0E0E0]">
                      <span className="text-[#00FF88] flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: tier.highlight
                      ? 'linear-gradient(135deg, #9D4EDD, #7B2CBF)'
                      : 'rgba(255,255,255,0.05)',
                    border: tier.highlight ? 'none' : `1px solid ${tier.color}30`,
                    color: tier.highlight ? 'white' : tier.color,
                    boxShadow: tier.highlight ? '0 4px 20px rgba(157, 78, 221, 0.3)' : undefined,
                  }}
                >
                  {tier.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-16 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(157,78,221,0.2), rgba(0,212,255,0.1))',
              border: '1px solid rgba(157, 78, 221, 0.3)',
              boxShadow: '0 0 80px rgba(157, 78, 221, 0.2)',
            }}
          >
            {/* Background orb */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(157,78,221,0.3), transparent)',
              }}
            />
            <div className="relative z-10">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="text-5xl mb-6 inline-block"
              >
                ✦
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                Ready to Transform
                <br />
                <span className="gradient-text">Your Productivity?</span>
              </h2>
              <p className="text-[#888] text-lg mb-8 max-w-xl mx-auto">
                Join thousands of teams using MYRAAG to capture, analyze, and act on every conversation.
                Start free today — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="px-10 py-4 rounded-xl text-white font-bold text-lg transition-all hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, #9D4EDD, #7B2CBF)',
                    boxShadow: '0 0 40px rgba(157, 78, 221, 0.5)',
                  }}
                >
                  🚀 Get Started Free
                </Link>
                <Link
                  href="/dashboard"
                  className="px-10 py-4 rounded-xl font-bold text-lg border border-white/20 text-[#F5F5F5] hover:bg-white/5 transition-all"
                >
                  View Demo →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9D4EDD] to-[#00D4FF] flex items-center justify-center text-white font-bold text-sm">
                  M
                </div>
                <span className="text-xl font-bold gradient-text">MYRAAG</span>
              </div>
              <p className="text-[#888] text-sm leading-relaxed">
                Intelligent Rhythm of Productivity, Memory, and Voice Automation.
              </p>
            </div>
            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
              },
              {
                title: 'Company',
                links: ['About', 'Blog', 'Careers', 'Press'],
              },
              {
                title: 'Legal',
                links: ['Privacy', 'Terms', 'Security', 'Cookies'],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#888] hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#888] text-sm">© 2024 MYRAAG. All rights reserved.</p>
            <div className="flex items-center gap-4 text-[#888] text-sm">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
