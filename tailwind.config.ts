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
        background: '#0A0A14',
        surface: '#12121F',
        'surface-2': '#1A1A2E',
        border: '#2A2A40',
        purple: {
          DEFAULT: '#6C5CE7',
          light: '#8B7FF0',
          dark: '#5A4BD1',
          muted: 'rgba(108,92,231,0.15)',
        },
        teal: {
          DEFAULT: '#4ECDC4',
          light: '#72D8D1',
          dark: '#3BBBB2',
          muted: 'rgba(78,205,196,0.15)',
        },
        text: {
          primary: '#F0F0FF',
          secondary: '#A0A0C0',
          muted: '#60607A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-purple-teal':
          'linear-gradient(135deg, #6C5CE7 0%, #4ECDC4 100%)',
        'hero-glow':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,92,231,0.3) 0%, transparent 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'ping-slow': 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(108,92,231,0.3)',
        'glow-teal': '0 0 40px rgba(78,205,196,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
