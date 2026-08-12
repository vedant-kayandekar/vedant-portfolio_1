// NOTE: these are placeholder quotes so the section isn't empty.
// Swap in real testimonials from internship supervisors, coaching clients,
// hackathon teammates, or client-website customers before you publish.
const testimonials = [
  {
    quote:
      'Placeholder — swap for a real quote from your internship supervisor about the ERP work.',
    name: 'Add name',
    role: 'Innovative Informatics · Supervisor',
  },
  {
    quote:
      'Placeholder — swap for a quote from a coaching or yoga client on AnyCoaches.',
    name: 'Add name',
    role: 'AnyCoaches · Client',
  },
  {
    quote:
      'Placeholder — swap for feedback from a client website you built and delivered.',
    name: 'Add name',
    role: 'Freelance Client',
  },
  {
    quote:
      'Placeholder — swap for a quote from a hackathon teammate on FinLens or the Yoga AI.',
    name: 'Add name',
    role: 'Techsagar 2026 · Teammate',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[var(--test-bg)] px-6 py-28 text-[var(--test-ink)] md:px-12 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="font-serif-vintage text-sm italic text-[var(--test-navy)]">
            No. 04 — In their words
          </span>
          <h2 className="font-serif-vintage mt-3 text-4xl font-medium leading-tight md:text-5xl">
            What people say after
            <br /> working with me
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative border border-[var(--test-ink)]/15 bg-[#fbf6ee] p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              <span className="font-serif-vintage absolute -top-5 left-7 text-6xl text-[var(--test-rose)]">
                "
              </span>
              <p className="font-serif-vintage relative z-10 text-lg italic leading-relaxed text-[var(--test-ink)]/90">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-[var(--test-ink)]/10 pt-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white"
                  style={{ background: 'var(--test-navy)' }}
                >
                  VK
                </div>
                <div>
                  <p className="font-display text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-[var(--test-ink)]/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
