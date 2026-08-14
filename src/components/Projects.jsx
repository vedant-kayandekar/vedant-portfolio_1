const projects = [
  {
    tag: 'HACKATHON · 2ND PLACE',
    title: 'AI 3D Yoga Companion — RAG-Powered Responses',
    desc: 'Real-time pose detection & correction with a 3D companion rigged in Blender, RAG implemented via pgvector, and a streaming TTS pipeline for low-latency speech.',
    stack: ['Node.js', 'React', 'pgvector', 'Python CV'],
    github: '#',
    link: 'http://yogakickfit.playongear.com',
    big: true,
  },
  {
    tag: 'HACKATHON · 2ND PLACE',
    title: 'FinLens — Fake Transaction Fraud Detection',
    desc: 'Fraud-detection platform built solo-led with a 3-person team — trained and benchmarked 4 ML models in parallel, cut perceived load time from minutes to near-instant by streaming the strongest result first.',
    stack: ['Python', 'FastAPI', 'React', 'Supabase'],
    github: 'https://github.com/vedant-kayandekar/fraud-detection-backend',
    big: true,
  },
  {
    tag: 'VENTURE · LIVE',
    title: 'PlayOnGear & AnyCoaches',
    desc: 'Self-developed platforms and digital ventures built from the ground up to solve real-world problems. Includes playongear.com & anycoaches.playongear.com.',
    stack: ['React', 'Full-Stack'],
    link: 'https://playongear.com',
  },
  {
    tag: 'CLIENT WORK · PENDING HANDOVER',
    title: 'Client Websites',
    desc: 'Freelance builds for small businesses — WordPress/WooCommerce and custom stacks.',
    stack: ['WordPress', 'React'],
    link: 'http://papayawhip-quail-969155.hostingersite.com',
  },
  {
    tag: 'PROJECT',
    title: 'P2P WebRTC Video Call API',
    desc: 'Real-time 1:1 and multi-user video conferencing built on raw WebRTC.',
    stack: ['Python', 'Django', 'WebRTC'],
    github: 'https://github.com/vedant-kayandekar/p2p-and-grp-videocall-app-and-aslo-omegle-feature',
  },
  {
    tag: 'PROJECT',
    title: 'Inventory & CRM System',
    desc: 'Stock tracking and order management for small and medium businesses.',
    stack: ['Python', 'Django', 'SQLite'],
    github: 'https://github.com/vedant-kayandekar/Inventory-Management-Python-Django',
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
                <div className="flex gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[var(--proj-ink)]/5 p-1.5 transition-colors hover:bg-[var(--proj-ink)]/10"
                      title="View on GitHub"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-[var(--proj-ink)]/5 p-1.5 transition-colors hover:bg-[var(--proj-ink)]/10"
                      title="Visit Live Site"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  )}
                </div>
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
