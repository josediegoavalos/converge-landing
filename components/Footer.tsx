'use client'

import { useLanguage } from '@/lib/LanguageContext'

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.857L1.254 2.25H8.08l4.259 5.627 5.905-5.627zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth="0" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.55V6.79a4.86 4.86 0 01-1.07-.1z" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative border-t"
      style={{ borderColor: 'rgba(42,42,64,0.6)', background: '#08080F' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top row */}
        <div className="grid md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #6C5CE7, #4ECDC4)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="2.5" fill="white" />
                  <path d="M2 2L8 8M14 2L8 8M2 14L8 8M14 14L8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-bold text-lg text-text-primary">Converge</span>
            </div>

            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {f.tagline}
            </p>

            <div className="flex gap-3 mt-5">
              {[
                { Icon: TwitterIcon, label: 'Twitter' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: TikTokIcon, label: 'TikTok' },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
                  style={{ background: 'rgba(42,42,64,0.6)', border: '1px solid rgba(42,42,64,0.8)' }}
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(f.links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
                {category}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <span className="text-sm text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t"
          style={{ borderColor: 'rgba(42,42,64,0.5)' }}
        >
          <p className="text-xs text-text-muted">
            &copy; {year} Converge. {f.rights}
          </p>
          <p className="text-xs text-text-muted">
            Made with love in Lima, Peru{' '}
            <span role="img" aria-label="Peru flag">🇵🇪</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
