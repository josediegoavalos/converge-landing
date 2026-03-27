'use client'

import AnimateInView from './AnimateInView'
import { useLanguage } from '@/lib/LanguageContext'

const featureMeta = [
  { icon: '🧠', color: '#6C5CE7' },
  { icon: '🗳️', color: '#4ECDC4' },
  { icon: '💬', color: '#A29BFE' },
  { icon: '📅', color: '#81ECEC' },
  { icon: '⭐', color: '#FDCB6E' },
  { icon: '🔒', color: '#6C5CE7' },
]

export default function Features() {
  const { t } = useLanguage()
  const f = t.features

  return (
    <section className="section-padding relative">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(78,205,196,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple mb-3">
            {f.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {f.h2[0]}
            <br />
            <span className="gradient-text">{f.h2[1]}</span>
          </h2>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {f.items.map((item, i) => {
            const meta = featureMeta[i]
            return (
              <AnimateInView key={i} delay={i * 0.08}>
                <div
                  className="glass-card rounded-2xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 cursor-default"
                  style={{ borderColor: `${meta.color}20` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${meta.color}15`, border: `1px solid ${meta.color}25` }}
                    >
                      {meta.icon}
                    </div>
                    {item.badge && (
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                        style={{ background: `${meta.color}20`, color: meta.color }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-text-primary text-base mb-2">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimateInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
