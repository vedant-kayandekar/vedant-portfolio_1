const links = [
  { label: 'Email', value: 'vedantassociates2004@gmail.com', href: 'mailto:vedantassociates2004@gmail.com' },
  { label: 'Phone', value: '+91 9167375587', href: 'tel:+919167375587' },
  { label: 'GitHub', value: 'github.com/vedant-kayandekar', href: 'https://github.com/vedant-kayandekar' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 md:px-12"
      style={{
        background:
          'radial-gradient(circle at 20% 20%, var(--contact-c) 0%, transparent 45%), radial-gradient(circle at 80% 30%, var(--contact-b) 0%, transparent 50%), linear-gradient(160deg, var(--contact-a), #1c1440)',
      }}
    >
      {/* floating glass blobs for ambience */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/60">Get in touch</span>
          <h2 className="font-display mt-4 text-5xl font-semibold leading-[1] text-white md:text-6xl">
            Let's build
            <br /> something.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
            Open to full-stack and software engineering roles. If there's a
            team or a problem you think I'm a fit for, I'd like to hear about
            it.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] md:p-10">
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault()
              const data = new FormData(e.target)
              const subject = encodeURIComponent(`Portfolio contact from ${data.get('name')}`)
              const body = encodeURIComponent(String(data.get('message') || ''))
              window.location.href = `mailto:vedantassociates2004@gmail.com?subject=${subject}&body=${body}`
            }}
          >
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/70" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md transition focus:border-white/60"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/70" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md transition focus:border-white/60"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-medium text-white/70" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full resize-none rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md transition focus:border-white/60"
                placeholder="Say hello"
              />
            </div>
            <button
              type="submit"
              className="font-display mt-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1c1440] transition hover:scale-[1.02]"
            >
              Send message
            </button>
          </form>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center justify-between text-xs text-white/70 transition hover:text-white"
              >
                <span className="font-mono uppercase tracking-wider text-white/40">{l.label}</span>
                <span>{l.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/30">
        © {new Date().getFullYear()} Vedant Kayandekar
      </p>
    </section>
  )
}
