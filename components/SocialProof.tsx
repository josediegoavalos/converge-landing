'use client'

import AnimateInView from './AnimateInView'

const testimonials = [
  {
    quote:
      "We've been using the beta for two months and we've gone out more times than in the past year. Converge basically saved our friendship.",
    name: 'Daniela R.',
    handle: '@daniela_r',
    role: 'Med student, Lima',
    avatar: 'D',
    color: '#6C5CE7',
    stars: 5,
  },
  {
    quote:
      "I'm always the one who drives the farthest in our friend group. Converge finally proved it — and now everyone takes turns picking the spot.",
    name: 'Marcus T.',
    handle: '@marcust',
    role: 'Software engineer, NYC',
    avatar: 'M',
    color: '#4ECDC4',
    stars: 5,
  },
  {
    quote:
      "The voting feature is genius. We used to spend 30 minutes debating over text. Now it takes like 2 minutes and nobody feels steamrolled.",
    name: 'Priya K.',
    handle: '@priyak',
    role: 'Designer, San Francisco',
    avatar: 'P',
    color: '#A29BFE',
    stars: 5,
  },
]

const stats = [
  { value: '2.4x', label: 'More hangouts per month', color: '#6C5CE7' },
  { value: '87%', label: 'Reduce planning time', color: '#4ECDC4' },
  { value: '12+', label: 'Cities in beta', color: '#A29BFE' },
  { value: '4.9', label: 'Average group satisfaction', color: '#FDCB6E' },
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
            Social proof
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            Built for friend groups who
            <br />
            <span className="gradient-text">actually want to hang out.</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
            Early beta testers from our waitlist are already using Converge. Here&apos;s what they say.
          </p>
        </AnimateInView>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <AnimateInView key={s.label} delay={i * 0.08}>
              <div
                className="glass-card rounded-2xl p-5 text-center"
                style={{ borderColor: `${s.color}20` }}
              >
                <div className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>
                  {s.value}
                </div>
                <div className="text-xs text-text-secondary">{s.label}</div>
              </div>
            </AnimateInView>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimateInView key={t.name} delay={i * 0.12}>
              <div
                className="glass-card rounded-2xl p-6 h-full flex flex-col"
                style={{ borderColor: `${t.color}20` }}
              >
                <StarRating count={t.stars} />

                <blockquote className="mt-4 text-text-secondary text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-text-primary leading-none">{t.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
