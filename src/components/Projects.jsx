const projects = [
  {
    tag: 'HACKATHON · 2ND PLACE',
    title: 'FinLens',
    desc:
      'Fraud-detection platform built solo-led with a 3-person team — trained and benchmarked 4 ML models in parallel, cut perceived load time from minutes to near-instant by streaming the strongest result first.',
    stack: ['Python', 'FastAPI', 'React', 'Supabase'],
    big: true,
  },
  {
    tag: 'HACKATHON · 2ND PLACE',
    title: 'AI Yoga Companion',
    desc:
      'Real-time pose detection & correction with a 3D companion rigged in Blender, RAG-grounded responses via pgvector, and a streaming TTS pipeline for low-latency speech.',
    stack: ['Node.js', 'React', 'pgvector', 'Python CV'],
    big: true,
  },
  {
    tag: 'CLIENT WORK · SELLING',
    title: 'Client Websites',
    desc: 'Freelance builds for small businesses — WordPress/WooCommerce and custom stacks.',
    stack: ['WordPress', 'React'],
  },
  {
    tag: 'PROJECT',
    title: 'P2P WebRTC Video Call API',
    desc: 'Real-time 1:1 and multi-user video conferencing built on raw WebRTC.',
    stack: ['Python', 'Django', 'WebRTC'],
  },
  {
    tag: 'PROJECT',
    title: 'Inventory & CRM System',
    desc: 'Stock tracking and order management for small and medium businesses.',
    stack: ['Python', 'Django', 'SQLite'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[var(--proj-bg)] px-4 py-24 text-[var(--proj-ink)] md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b-4 border-[var(--proj-ink)] pb-6">
          <h2 className="font-impact text-5xl leading-[0.9] md:text-7xl">PROJECTS</h2>
          <span className="font-mono text-xs">// 05 SHIPPED — MORE IN PROGRESS</span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`group border-4 border-[var(--proj-ink)] bg-white p-6 transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0_#0e0e0e] md:p-8 ${
                p.big ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="font-mono inline-block bg-[var(--proj-ink)] px-2.5 py-1 text-[11px] font-bold text-[var(--proj-yellow)]">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-impact mt-5 text-3xl leading-[0.95] md:text-4xl">{p.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/75 md:text-base">{p.desc}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono border-2 border-[var(--proj-ink)] px-2 py-1 text-[11px] font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://github.com/vedant-kayandekar"
          target="_blank"
          rel="noreferrer"
          className="font-impact mt-10 inline-flex items-center gap-3 border-4 border-[var(--proj-ink)] bg-[var(--proj-yellow)] px-6 py-4 text-lg transition hover:-translate-y-1 hover:shadow-[8px_8px_0_#0e0e0e]"
        >
          VIEW ALL ON GITHUB →
        </a>
      </div>
    </section>
  )
}
