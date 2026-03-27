'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

const friends = [
  { id: 1, x: 18, y: 22, color: '#6C5CE7', delay: 0 },
  { id: 2, x: 78, y: 18, color: '#4ECDC4', delay: 0.15 },
  { id: 3, x: 12, y: 72, color: '#A29BFE', delay: 0.3 },
  { id: 4, x: 82, y: 68, color: '#81ECEC', delay: 0.45 },
]

const midpoint = { x: 50, y: 45 }

const streets = [
  { x1: 0, y1: 30, x2: 100, y2: 30 },
  { x1: 0, y1: 55, x2: 100, y2: 55 },
  { x1: 0, y1: 78, x2: 100, y2: 78 },
  { x1: 25, y1: 0, x2: 25, y2: 100 },
  { x1: 50, y1: 0, x2: 50, y2: 100 },
  { x1: 75, y1: 0, x2: 75, y2: 100 },
]

const venueData = [
  { x: 36, y: 35, score: 97, color: '#6C5CE7', emoji: '☕' },
  { x: 60, y: 38, score: 94, color: '#4ECDC4', emoji: '🍹' },
]

export default function MapMockup() {
  const { t } = useLanguage()
  const m = t.mapMockup

  return (
    <div className="relative w-full max-w-lg mx-auto select-none">
      {/* Phone frame */}
      <div
        className="relative rounded-3xl overflow-hidden border border-border shadow-glow"
        style={{ background: '#0E0E1C', aspectRatio: '9/16', maxHeight: 520 }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span className="text-[10px] text-text-secondary font-medium">9:41</span>
          <div className="w-20 h-5 bg-black rounded-full" />
          <div className="flex gap-1 items-center">
            <div className="w-3 h-2 rounded-sm bg-text-secondary opacity-60" />
            <div className="w-3 h-2 rounded-sm bg-text-secondary opacity-60" />
          </div>
        </div>

        {/* App header */}
        <div className="px-4 pb-2 flex items-center justify-between">
          <div>
            <p className="text-xs text-text-muted">{m.findingFor}</p>
            <p className="text-sm font-semibold text-text-primary">{m.groupName}</p>
          </div>
          <div className="rounded-full bg-purple-muted border border-purple px-3 py-1">
            <span className="text-xs font-medium text-purple-light">{m.live}</span>
          </div>
        </div>

        {/* Map area */}
        <div
          className="relative mx-3 rounded-2xl overflow-hidden border border-border"
          style={{ height: 280 }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ background: '#12121F' }}>
            {/* Grid */}
            {streets.map((s, i) => (
              <line
                key={i}
                x1={`${s.x1}%`} y1={`${s.y1}%`}
                x2={`${s.x2}%`} y2={`${s.y2}%`}
                stroke="rgba(42,42,64,0.8)"
                strokeWidth="0.5"
              />
            ))}

            {/* Dashed lines from friends to midpoint */}
            {friends.map((f) => (
              <motion.line
                key={`line-${f.id}`}
                x1={`${f.x}%`} y1={`${f.y}%`}
                x2={`${midpoint.x}%`} y2={`${midpoint.y}%`}
                stroke={f.color}
                strokeWidth="0.6"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.2, delay: f.delay + 0.6, ease: 'easeOut' }}
              />
            ))}

            {/* Venue dots */}
            {venueData.map((v, i) => (
              <motion.g
                key={`venue-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + i * 0.15, type: 'spring' }}
              >
                <circle cx={`${v.x}%`} cy={`${v.y}%`} r="1.2" fill="#4ECDC4" opacity="0.8" />
                <circle cx={`${v.x}%`} cy={`${v.y}%`} r="2.5" fill="#4ECDC4" opacity="0.12" />
              </motion.g>
            ))}

            {/* Friend pins */}
            {friends.map((f) => (
              <motion.g
                key={`pin-${f.id}`}
                initial={{ opacity: 0, y: -10, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: f.delay, type: 'spring', stiffness: 200 }}
              >
                <circle cx={`${f.x}%`} cy={`${f.y}%`} r="3.5" fill={f.color} opacity="0.2" />
                <circle cx={`${f.x}%`} cy={`${f.y}%`} r="2" fill={f.color} />
                <circle cx={`${f.x}%`} cy={`${f.y}%`} r="0.8" fill="white" />
              </motion.g>
            ))}

            {/* Midpoint pulse rings */}
            <motion.circle
              cx={`${midpoint.x}%`} cy={`${midpoint.y}%`} r="6"
              fill="none" stroke="#6C5CE7" strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.8, 2.5] }}
              transition={{ delay: 2, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.circle
              cx={`${midpoint.x}%`} cy={`${midpoint.y}%`} r="4"
              fill="none" stroke="#6C5CE7" strokeWidth="0.5"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.5, 0], scale: [0.5, 1.4, 2] }}
              transition={{ delay: 2.3, duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            />

            {/* Midpoint star */}
            <motion.g
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: 'spring', stiffness: 300 }}
            >
              <circle cx={`${midpoint.x}%`} cy={`${midpoint.y}%`} r="5" fill="rgba(108,92,231,0.25)" />
              <circle cx={`${midpoint.x}%`} cy={`${midpoint.y}%`} r="3" fill="#6C5CE7" />
              <circle cx={`${midpoint.x}%`} cy={`${midpoint.y}%`} r="1.2" fill="white" />
            </motion.g>
          </svg>

          {/* Midpoint label */}
          <motion.div
            className="absolute"
            style={{ left: '46%', top: '20%' }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
          >
            <div className="bg-purple text-white text-[9px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap shadow-glow">
              {m.midpoint}
            </div>
          </motion.div>
        </div>

        {/* Bottom card — venue list */}
        <motion.div
          className="mx-3 mt-3 rounded-2xl p-3 border border-border"
          style={{ background: '#1A1A2E' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.5 }}
        >
          <p className="text-[10px] text-text-muted mb-2 font-medium uppercase tracking-wider">
            {m.topVenues}
          </p>
          <div className="space-y-2">
            {venueData.map((v, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.6 + i * 0.15 }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-xs"
                    style={{ background: `${v.color}20` }}
                  >
                    {v.emoji}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-text-primary leading-none">
                      {i === 0 ? 'Cafe Luna' : 'The Rooftop'}
                    </p>
                    <p className="text-[9px] text-text-muted mt-0.5">{m.venueTypes[i]}</p>
                  </div>
                </div>
                <div
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ color: v.color, background: `${v.color}20` }}
                >
                  {v.score}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative glow */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30 rounded-full"
        style={{ background: 'radial-gradient(circle, #6C5CE7 0%, #4ECDC4 50%, transparent 70%)' }}
      />
    </div>
  )
}
