'use client'

import AnimateInView from './AnimateInView'

const features = [
  {
    icon: '🧠',
    title: 'Smart Midpoint Engine',
    description:
      'Our algorithm goes beyond simple geography — it accounts for real travel times, traffic patterns, and transit options to find the genuinely fairest spot.',
    color: '#6C5CE7',
    badge: 'Core',
  },
  {
    icon: '🗳️',
    title: 'Group Voting',
    description:
      "Everyone in the group gets a say. Browse venues, swipe right on favorites, and watch consensus emerge in real-time without any arguments.",
    color: '#4ECDC4',
    badge: 'Popular',
  },
  {
    icon: '💬',
    title: 'Built-in Chat',
    description:
      'Keep all the coordination in one place. No switching between apps — chat, vote, and plan all in the same thread.',
    color: '#A29BFE',
    badge: null,
  },
  {
    icon: '📅',
    title: 'Shared Calendar',
    description:
      "See when everyone's free at a glance. Find the overlap and lock in a date before momentum dies.",
    color: '#81ECEC',
    badge: null,
  },
  {
    icon: '⭐',
    title: 'Venue Match Scores',
    description:
      "Every venue gets a match score based on distance fairness, group preferences, and vibe. No more guessing if a place is actually good.",
    color: '#FDCB6E',
    badge: 'New',
  },
  {
    icon: '🔒',
    title: 'Privacy Controls',
    description:
      "Share only your neighborhood, not your exact address. Your location data is never stored after the session ends.",
    color: '#6C5CE7',
    badge: null,
  },
]

export default function Features() {
  return (
    <section className="section-padding relative">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(78,205,196,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto">
        <AnimateInView className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary">
            Everything your group needs.
            <br />
            <span className="gradient-text">Nothing it doesn&apos;t.</span>
          </h2>
        </AnimateInView>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimateInView key={f.title} delay={i * 0.08}>
              <div
                className="glass-card rounded-2xl p-6 h-full group hover:scale-[1.02] transition-all duration-300 cursor-default"
                style={{ borderColor: `${f.color}20` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}25` }}
                  >
                    {f.icon}
                  </div>
                  {f.badge && (
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{ background: `${f.color}20`, color: f.color }}
                    >
                      {f.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-text-primary text-base mb-2">{f.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
