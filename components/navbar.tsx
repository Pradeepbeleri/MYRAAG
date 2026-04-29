'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isDemoMode, setIsDemoMode] = useState(false)

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9D4EDD] to-[#00D4FF] flex items-center justify-center text-white font-bold text-sm">
            M
          </div>
          <span className="text-xl font-bold gradient-text">MYRAAG</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Transcript', href: '/transcript' },
            { label: 'Archive', href: '/archive' },
            { label: 'Settings', href: '/settings' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#888] hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsDemoMode(!isDemoMode)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isDemoMode
                ? 'bg-[#00FF88]/20 text-[#00FF88] border border-[#00FF88]/30'
                : 'bg-white/5 text-[#888] border border-white/10'
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${isDemoMode ? 'bg-[#00FF88] animate-pulse' : 'bg-[#888]'}`} />
            Demo Mode
          </button>

          <Link
            href="/dashboard"
            className="hidden md:block px-4 py-2 bg-gradient-to-r from-[#9D4EDD] to-[#7B2CBF] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Launch App
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
