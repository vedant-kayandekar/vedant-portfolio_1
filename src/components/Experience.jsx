import { motion } from 'framer-motion'

const rungs = [
  {
    step: 'Rung 01',
    title: 'Software Developer Intern',
    org: 'Innovative Informatics Pvt. Ltd.',
    period: 'May 2025 – Jul 2025',
    color: 'var(--exp-coral)',
    align: 'left',
    points: [
      'Built a live, multi-tier enterprise ERP module — React + .NET Core/C# + SQL Server.',
      'Designed the expense-voucher schema and shipped role-based RESTful CRUD APIs end-to-end.',
      'Optimized stored procedures, indexing and triggers on high-traffic production tables.',
    ],
  },
  {
    step: 'Rung 02',
    title: 'Self-Developed Ventures',
    org: 'PlayOnGear & AnyCoaches',
    period: '2025 – Present',
    color: 'var(--exp-teal)',
    align: 'right',
    points: [
      'PlayOnGear — sports e-commerce on WordPress/WooCommerce, owned hosting to payments.',
      'AnyCoaches — full-stack coaching marketplace: Node.js, Express, React, PostgreSQL.',
      'Sole architect and engineer across two live products, two different stacks.',
    ],
  },
  {
    step: 'Rung 03',
    title: '2× Hackathon Podium',
    org: 'Techsagar 2026 · Hacktech Fusion 2025',
    period: '2025 – 2026',
    color: 'var(--exp-purple)',
    align: 'left',
    points: [
      'FinLens — led a 3-person team to 2nd place benchmarking 4 ML fraud-detection models.',
      'AI Yoga Companion — 2nd place; RAG + pgvector + real-time pose detection, 3D in Blender.',
      'Deployed full stacks solo under live-demo pressure, including a same-day auth fallback.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[var(--exp-bg)] px-6 py-28 text-[var(--exp-ink)] md:px-12 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display max-w-lg text-5xl font-semibold leading-[0.95] tracking-tight md:text-6xl">
            The climb
            <br />
            so far.
          </h2>
          <p className="max-w-xs text-sm text-[var(--exp-ink)]/60">
            Three rungs up so far — one live production system, two ventures
            built solo, two hackathon podiums. Read bottom to top.
          </p>
        </div>

        {/* the ladder */}
        <div className="relative mt-20">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 md:block"
            style={{
              background:
                'repeating-linear-gradient(to bottom, var(--exp-ink) 0, var(--exp-ink) 10px, transparent 10px, transparent 20px)',
              opacity: 0.25,
            }}
          />

          <div className="flex flex-col gap-16 md:gap-6">
            {rungs.map((r, i) => (
              <motion.div
                key={r.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex md:items-center ${
                  r.align === 'left' ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div
                  className="w-full rounded-[28px] p-8 shadow-[6px_6px_0_rgba(22,19,15,0.9)] md:w-[46%]"
                  style={{ background: r.color }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/60">
                      {r.step}
                    </span>
                    <span className="font-mono text-[11px] text-black/60">{r.period}</span>
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-semibold text-[var(--exp-ink)] md:text-3xl">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-black/70">{r.org}</p>
                  <ul className="mt-5 space-y-2.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-black/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/50" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top marker: hire me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-16 flex flex-col items-center gap-3 text-center md:mt-24"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-black/50">
              Next rung
            </span>
            <div
              className="rounded-full px-8 py-4 shadow-[6px_6px_0_rgba(22,19,15,0.9)]"
              style={{ background: 'var(--exp-yellow)' }}
            >
              <span className="font-display text-lg font-semibold text-[var(--exp-ink)] md:text-xl">
                You — hiring me next.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
