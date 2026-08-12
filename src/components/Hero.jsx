import { motion } from 'framer-motion'

const socials = [
  { label: 'Email', href: 'mailto:vedantassociates2004@gmail.com', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/vedant-kayandekar', icon: 'github' },
  { label: 'Phone', href: 'tel:+919167375587', icon: 'phone' },
]

function SocialIcon({ icon }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (icon === 'mail')
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    )
  if (icon === 'github')
    return (
      <svg {...common} strokeWidth={0} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

// Placeholder for 3D Model
function ModelPlaceholder() {
  return (
    <div className="flex aspect-square w-[60%] max-w-[320px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--splithero-dark)]/30 p-6 text-center text-[var(--splithero-dark)]/60">
      <svg className="mb-3 h-10 w-10 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
      <span className="font-display font-medium">3D Model Ready</span>
      <span className="mt-1 text-xs">Waiting for .glb file</span>
    </div>
  )
}

const roles = ['Software Engineer', 'Full-Stack Developer', 'Coach & Creator']

export default function Hero() {
  return (
    <section id="home" className="relative grid min-h-screen w-full grid-cols-1 overflow-hidden md:grid-cols-2">
      {/* LEFT — dark panel */}
      <div className="relative flex min-h-[62vh] flex-col justify-center bg-[var(--splithero-dark)] px-6 py-28 text-[#f2efe9] md:min-h-screen md:px-14 lg:px-20">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--splithero-orange)]"
        >
          Computer Engineering · Mumbai, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          Hi there, I'm
          <br />
          <span className="text-white">Vedant Kayandekar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-display text-lg font-medium text-white/35 sm:text-xl"
        >
          {roles.map((r, i) => (
            <span key={r} className={i === 0 ? 'text-white/70' : ''}>
              {r}
              {i < roles.length - 1 && <span className="ml-3 text-white/20">/</span>}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-6 max-w-md text-sm leading-relaxed text-white/55 md:text-base"
        >
          I build full-stack software — from a live enterprise ERP system to
          ventures I've launched and shipped solo. Curious by nature,
          engineering-minded, and currently deepening DSA and system design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-md bg-[var(--splithero-orange)] px-6 py-3 font-display text-sm font-semibold text-[#0d0d0d] transition hover:brightness-110"
          >
            Reach out to me
          </a>
          <a
            href="#projects"
            className="rounded-md border border-white/25 px-6 py-3 font-display text-sm font-semibold text-white/85 transition hover:border-white/60"
          >
            See my work
          </a>
        </motion.div>

        {/* social icon column */}
        <div className="mt-14 flex gap-5 text-white/40 md:absolute md:bottom-12 md:left-14 md:mt-0 lg:left-20">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="transition hover:text-[var(--splithero-orange)]"
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — tangy orange panel */}
      <div className="relative flex min-h-[38vh] items-center justify-center bg-[var(--splithero-orange)] md:min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <ModelPlaceholder />
        </motion.div>

        <span className="absolute bottom-6 right-6 font-mono text-xs text-[var(--splithero-dark)]/60 md:bottom-10 md:right-10">
          {new Date().getFullYear()}
        </span>
      </div>
    </section>
  )
}
