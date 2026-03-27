'use client'

import AnimateInView from './AnimateInView'
import { useLanguage } from '@/lib/LanguageContext'

const statsMeta = [
  { value: '2.4x', color: '#6C5CE7' },
  { value: '87%', color: '#4ECDC4' },
  { value: '12+', color: '#A29BFE' },
  { value: '4.9', color: '#FDCB6E' },
]

const testimonialsMeta = [
  { name: 'Daniela R.', avatar: 'D', color: '#6C5CE7', stars: 5 },
  { name: 'Marcus T.', avatar: 'M', color: '#4ECDC4', stars: 5 },
  { name: 'Priya K.', avatar: 'P', color: '#A29BFE', stars: 5 },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FDCB6E">
          <path d="M7 1L8.854 5.09L13.33 5.74L10.165 8.823L10.927 13.26L7 11.16L3.073 13.26L3.835 8.823L0.67 5.74L5.146 5.09L7 1Z" />
        </svg>
      ))}
    </div>
  )
}

export default function SocialProof() {
  const { t } = useLanguage()
  const s = t.socialProof

  return (
    <section
      className="section-padding relative"
      style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(108,92,231,0.04) 50%, transparent 100%)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal mb-3">
            {s.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            {s.h2[0]}
            <br />
            <span className="gradient-text">{s.h2[1]}</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
            {s.subtitle}
          </p>
        </AnimateInView>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {s.stats.map((stat, i) => (
            <AnimateInView key={i} delay={i * 0.08}>
              <div
                className="glass-card rounded-2xl p-5 text-center"
                style={{ borderColor: `${statsMeta[i].color}20` }}
              >
                <div className="text-3xl font-extrabold mb-1" style={{ color: statsMeta[i].color }}>
                  {statsMeta[i].value}
                </div>
                <div className="text-xs text-text-secondary">{stat.label}</div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {s.testimonials.map((testimonial, i) => {
            const meta = testimonialsMeta[i]
            return (
              <AnimateInView key={i} delay={i * 0.12}>
                <div
                  className="glass-card rounded-2xl p-6 h-full flex flex-col"
                  style={{ borderColor: `${meta.color}20` }}
                >
                  <StarRating count={meta.stars} />

                  <blockquote className="mt-4 text-text-secondary text-sm leading-relaxed flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  <div className="mt-5 flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: meta.color }}
                    >
                      {meta.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary leading-none">{meta.name}</p>
                      <p className="text-xs text-text-muted mt-0.5">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateInView>
            )
          })}
        </div>
      </div>
    </section>
  )
}
