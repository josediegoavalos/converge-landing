'use client'

import AnimateInView from './AnimateInView'
import { useLanguage } from '@/lib/LanguageContext'

function FriendsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 24c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="8" r="3.5" stroke="#4ECDC4" strokeWidth="1.5" />
      <circle cx="6" cy="8" r="3.5" stroke="#4ECDC4" strokeWidth="1.5" />
    </svg>
  )
}

function MidpointIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="3" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
      <path d="M14 3v4M14 21v4M3 14h4M21 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function VenueIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L17.09 10.26L24 11.27L19 16.14L20.18 23.02L14 19.77L7.82 23.02L9 16.14L4 11.27L10.91 10.26L14 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  )
}

const StepIcons = [FriendsIcon, MidpointIcon, VenueIcon]
const stepColors = ['#6C5CE7', '#4ECDC4', '#A29BFE']

export default function HowItWorks() {
  const { t } = useLanguage()
  const h = t.howItWorks

  return (
    <section
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(108,92,231,0.05) 50%, transparent 100%)' }}
    >
      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
            {h.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {h.h2[0]}
            <br />
            <span className="gradient-text">{h.h2[1]}</span>
          </h2>
        </AnimateInView>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-16 left-1/4 right-1/4 h-px"
            style={{ background: 'linear-gradient(90deg, #6C5CE7, #4ECDC4, #A29BFE)' }}
          />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {h.steps.map((step, i) => {
              const Icon = StepIcons[i]
              const color = stepColors[i]
              return (
                <AnimateInView key={i} delay={i * 0.15}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                        style={{ background: `${color}18`, border: `2px solid ${color}40`, color }}
                      >
                        <Icon />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-black flex items-center justify-center"
                        style={{ background: color, color: 'white' }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                    <p className="text-text-secondary leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                </AnimateInView>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
