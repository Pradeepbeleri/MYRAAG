'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { icon: '⚡', label: 'Command Center', href: '/dashboard' },
  { icon: '🎙️', label: 'Live Session', href: '/dashboard' },
  { icon: '📜', label: 'Transcript', href: '/transcript' },
  { icon: '🗄️', label: 'Archive', href: '/archive' },
  { icon: '📊', label: 'Analytics', href: '/dashboard' },
  { icon: '⚙️', label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 240 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-16 bottom-0 z-40 glass border-r border-white/10 flex flex-col overflow-hidden"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 right-3 w-6 h-6 rounded-md bg-white/5 hover:bg-white/10 flex items-center justify-center text-xs text-[#888] transition-colors z-10"
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed ? '→' : '←'}
      </button>

      {/* Nav Items */}
      <nav className="flex-1 pt-14 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-1 transition-all group ${
                isActive
                  ? 'bg-[#9D4EDD]/20 text-[#9D4EDD] neon-border-purple'
                  : 'text-[#888] hover:bg-white/5 hover:text-white'
              }`}
            >
              <span className="text-base flex-shrink-0">{item.icon}</span>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          )
        })}
      </nav>

      {/* User Profile */}
      <div className="p-3 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#00D4FF] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">
            P
          </div>
          <AnimatePresence>
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-xs font-medium text-white truncate">Pradeep</p>
                <p className="text-xs text-[#888] truncate">Pro Plan</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.aside>
  )
}
