'use client'

import AnimateInView from './AnimateInView'

const problems = [
  {
    emoji: '💬',
    title: 'The endless group chat debate',
    description:
      '"How about downtown?" "Too far for me." "What about the east side?" — 2 hours later, you still haven\'t decided.',
    color: '#6C5CE7',
  },
  {
    emoji: '🚗',
    title: 'One person always drives further',
    description:
      'Every single time it\'s somehow "central" for everyone — except that one friend who drives 45 minutes while everyone else drives 10.',
    color: '#4ECDC4',
  },
  {
    emoji: '😴',
    title: 'Settling for the same boring spot',
    description:
      'You give up finding somewhere new and just go to the same place you\'ve been to 20 times because nobody can agree on anything else.',
    color: '#A29BFE',
  },
]

export default function ProblemSection() {
  return (
    <section className="section-padding relative">
      {/* Divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple mb-3">
            Sound familiar?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            The group hangout struggle
            <br />
            <span className="gradient-text">is real.</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            You want to hang out. Your friends want to hang out. So why does it feel impossible?
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <AnimateInView key={p.title} delay={i * 0.12}>
              <div
                className="glass-card rounded-2xl p-7 h-full group hover:border-opacity-80 transition-all duration-300"
                style={{
                  borderColor: `${p.color}30`,
                  background: `linear-gradient(135deg, rgba(18,18,31,0.9) 0%, rgba(26,26,46,0.7) 100%)`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${p.color}18`, border: `1px solid ${p.color}30` }}
                >
                  {p.emoji}
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: p.color }}
                >
                  {p.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {p.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
