import { useEffect, useState } from 'react'

export default function Nav({ links = [] }) {
  const [active, setActive] = useState(links[0]?.id || 'home')

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      // rootMargin fires when the section crosses the middle of the screen
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [links])

  const isDark = active === 'home' || active === 'projects'

  return (
    <nav className="fixed left-1/2 top-5 z-50 w-[95vw] max-w-max -translate-x-1/2">
      <ul
        className="flex flex-wrap items-center justify-center gap-1 rounded-[2rem] border px-1.5 py-1.5 backdrop-blur-md transition-colors md:rounded-full"
        style={{
          borderColor: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)',
          background: isDark ? 'rgba(10,13,18,0.55)' : 'rgba(255,255,255,0.55)',
        }}
      >
        {links.map((l) => (
          <li key={l.id}>
            <a
              href={`#${l.id}`}
              className="font-display block rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors sm:px-3.5 sm:text-xs md:px-4"
              style={{
                color:
                  active === l.id
                    ? isDark
                      ? '#0a0d12'
                      : '#fff'
                    : isDark
                    ? 'rgba(255,255,255,0.65)'
                    : 'rgba(0,0,0,0.55)',
                background:
                  active === l.id ? (isDark ? '#7ef0c0' : '#16130f') : 'transparent',
              }}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
