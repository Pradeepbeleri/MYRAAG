import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#9D4EDD', dark: '#7B2CBF', light: '#C77DFF' },
        secondary: { DEFAULT: '#00D4FF', dark: '#00B4D8' },
        background: { DEFAULT: '#0D0D0D', card: '#1A1A1A', elevated: '#242424' },
        success: '#00FF88',
        warning: '#FFB800',
        error: '#FF006E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #9D4EDD, 0 0 10px #9D4EDD' },
          '100%': { boxShadow: '0 0 20px #9D4EDD, 0 0 40px #9D4EDD, 0 0 60px #9D4EDD' },
        },
      },
    },
  },
  plugins: [],
}
export default config
