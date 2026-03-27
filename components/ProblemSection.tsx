'use client'

import AnimateInView from './AnimateInView'
import { useLanguage } from '@/lib/LanguageContext'

const emojis = ['💬', '🚗', '😴']
const colors = ['#6C5CE7', '#4ECDC4', '#A29BFE']

export default function ProblemSection() {
  const { t } = useLanguage()
  const p = t.problem

  return (
    <section className="section-padding relative">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple mb-3">
            {p.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {p.h2[0]}
            <br />
            <span className="gradient-text">{p.h2[1]}</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-xl mx-auto">
            {p.subtitle}
          </p>
        </AnimateInView>

        <div className="grid md:grid-cols-3 gap-6">
          {p.cards.map((card, i) => (
            <AnimateInView key={i} delay={i * 0.12}>
              <div
                className="glass-card rounded-2xl p-7 h-full group hover:border-opacity-80 transition-all duration-300"
                style={{
                  borderColor: `${colors[i]}30`,
                  background: 'linear-gradient(135deg, rgba(18,18,31,0.9) 0%, rgba(26,26,46,0.7) 100%)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${colors[i]}18`, border: `1px solid ${colors[i]}30` }}
                >
                  {emojis[i]}
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: colors[i] }}>
                  {card.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
