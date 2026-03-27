'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/lib/LanguageContext'

interface WaitlistFormProps {
  variant?: 'hero' | 'cta'
  initialCount?: number
}

export default function WaitlistForm({
  variant = 'hero',
  initialCount = 1247,
}: WaitlistFormProps) {
  const { t } = useLanguage()
  const f = t.waitlistForm

  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [count, setCount] = useState(initialCount)

  useEffect(() => {
    fetch('/api/waitlist')
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.count === 'number' && d.count > 0) setCount(d.count)
      })
      .catch(() => {})
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return

    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setEmail('')
        if (typeof data.count === 'number') {
          setCount(data.count)
        } else {
          setCount((prev) => prev + 1)
        }
      } else {
        setStatus('error')
        // Map known API error codes to translated messages
        if (res.status === 409) {
          setMessage(f.errors.alreadyOnList)
        } else {
          setMessage(f.errors.generic)
        }
      }
    } catch {
      setStatus('error')
      setMessage(f.errors.network)
    }
  }

  const isHero = variant === 'hero'

  return (
    <div className={isHero ? '' : 'text-center'}>
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-3 py-4"
          >
            <motion.div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(78,205,196,0.15)', border: '2px solid #4ECDC4' }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.svg width="32" height="32" viewBox="0 0 32 32">
                <motion.path
                  d="M6 16 L13 23 L26 9"
                  fill="none"
                  stroke="#4ECDC4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
              </motion.svg>
            </motion.div>

            <div>
              <p className="font-semibold text-text-primary text-lg">{f.successTitle}</p>
              <p className="text-text-secondary text-sm mt-1">{f.successDesc}</p>
            </div>

            <motion.div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ background: 'rgba(108,92,231,0.15)', border: '1px solid rgba(108,92,231,0.3)' }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple" />
              </span>
              <span className="text-text-secondary">
                <span className="text-text-primary font-semibold">{count.toLocaleString()}</span>{' '}
                {f.counter}
              </span>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <form
              onSubmit={handleSubmit}
              className={`flex gap-2 ${isHero ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row max-w-md mx-auto'}`}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                placeholder={f.placeholder}
                required
                disabled={status === 'loading'}
                className={`
                  flex-1 px-4 py-3 rounded-xl text-text-primary placeholder-text-muted
                  border border-border bg-surface-2
                  focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple
                  disabled:opacity-60 transition-colors
                  ${status === 'error' ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
                `}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !email.trim()}
                className="btn-primary px-6 py-3 rounded-xl font-semibold text-white whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {f.joining}
                  </span>
                ) : (
                  f.cta
                )}
              </button>
            </form>

            <AnimatePresence>
              {status === 'error' && message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="mt-2 text-sm text-red-400"
                >
                  {message}
                </motion.p>
              )}
            </AnimatePresence>

            <div className={`flex items-center gap-2 mt-3 text-sm text-text-secondary ${!isHero ? 'justify-center' : ''}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple" />
              </span>
              <span>
                <span className="text-text-primary font-semibold">{count.toLocaleString()}</span>{' '}
                {f.counter}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
