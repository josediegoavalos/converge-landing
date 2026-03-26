'use client'

import AnimateInView from './AnimateInView'
import WaitlistForm from './WaitlistForm'

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(78,205,196,0.3), transparent)' }}
      />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108,92,231,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <AnimateInView>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: 'rgba(78,205,196,0.12)',
              border: '1px solid rgba(78,205,196,0.35)',
              color: '#4ECDC4',
            }}
          >
            <span>Launching soon</span>
            <span>🚀</span>
          </div>
        </AnimateInView>

        <AnimateInView delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary leading-tight">
            Be the first to know
            <br />
            <span className="gradient-text">when we launch.</span>
          </h2>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <p className="mt-4 text-text-secondary text-lg max-w-lg mx-auto">
            Early access members get the app free for 3 months and help shape the features that matter most to their friend groups.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.3}>
          <div className="mt-10">
            <WaitlistForm variant="cta" />
          </div>
        </AnimateInView>

        <AnimateInView delay={0.4}>
          <p className="mt-4 text-xs text-text-muted">
            No spam. Unsubscribe any time. We&apos;ll only reach out when Converge is ready.
          </p>
        </AnimateInView>
      </div>
    </section>
  )
}
