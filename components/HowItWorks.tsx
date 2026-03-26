'use client'

import AnimateInView from './AnimateInView'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="8" r="3.5" stroke="#4ECDC4" strokeWidth="1.5" />
        <circle cx="6" cy="8" r="3.5" stroke="#4ECDC4" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Select your friends',
    description:
      'Add friends by sharing a link or entering addresses. No accounts required — just paste in where everyone is starting from.',
    color: '#6C5CE7',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
        <circle cx="14" cy="14" r="2" fill="currentColor" />
        <path d="M14 3v4M14 21v4M3 14h4M21 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'See your midpoint',
    description:
      "Converge instantly calculates the fairest meeting point — not just geographic center, but weighted by travel time so nobody gets the short end.",
    color: '#4ECDC4',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L17.09 10.26L24 11.27L19 16.14L20.18 23.02L14 19.77L7.82 23.02L9 16.14L4 11.27L10.91 10.26L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Browse and vote on venues',
    description:
      "Browse curated spots near the midpoint, filtered by vibe and budget. Everyone votes on favorites — the group picks itself.",
    color: '#A29BFE',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(108,92,231,0.05) 50%, transparent 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            From group chat to hangout
            <br />
            <span className="gradient-text">in three steps.</span>
          </h2>
        </AnimateInView>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-px"
            style={{ background: 'linear-gradient(90deg, #6C5CE7, #4ECDC4, #A29BFE)' }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <AnimateInView key={step.number} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center lg:items-center">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        background: `${step.color}18`,
                        border: `2px solid ${step.color}40`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center"
                      style={{ background: step.color, color: 'white' }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed max-w-xs">{step.description}</p>
                </div>
              </AnimateInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
