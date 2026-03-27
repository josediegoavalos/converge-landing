'use client'

import { motion } from 'framer-motion'
import MapMockup from './MapMockup'
import WaitlistForm from './WaitlistForm'
import { useLanguage } from '@/lib/LanguageContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

export default function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex items-center section-padding overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: '#6C5CE7' }}
      />
      <div
        className="absolute top-1/2 -right-40 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: '#4ECDC4' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{
                background: 'rgba(108,92,231,0.12)',
                border: '1px solid rgba(108,92,231,0.35)',
                color: '#A29BFE',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple" />
              </span>
              {h.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
            >
              {h.h1[0]}
              <br />
              <span className="gradient-text">{h.h1[1]}</span>
              <br />
              {h.h1[2]}
            </motion.h1>

            <motion.p
              custom={0.25}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-5 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-lg"
            >
              {h.subtitle}
            </motion.p>

            {/* Form */}
            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8"
            >
              <WaitlistForm variant="hero" />
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              custom={0.55}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-8 flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {['A', 'S', 'J', 'T', 'R'].map((l, i) => (
                  <div
                    key={l}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ring-2 ring-background"
                    style={{ background: `hsl(${200 + i * 40}, 70%, 55%)` }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-text-secondary">{h.socialProof}</p>
            </motion.div>
          </div>

          {/* Right — map mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm animate-float">
              <MapMockup />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
