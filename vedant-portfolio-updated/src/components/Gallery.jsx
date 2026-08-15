import { motion } from 'framer-motion'

// TODO: replace these with the real LinkedIn post URLs for each moment.
const stops = [
  {
    id: 'intern',
    tag: 'STAGE 01',
    title: 'Software Developer Intern',
    org: 'Innovative Informatics Pvt. Ltd.',
    caption: 'Shipping a live enterprise ERP module — React, .NET Core, SQL Server.',
    linkedin: 'https://www.linkedin.com/in/vedant-kayandekar/',
    img1: '/gallery/intern-1.jpg',
    img2: '/gallery/intern-2.jpg',
    imageSide: 'left',
    accent: 'var(--gallery-accent)',
  },
  {
    id: 'hackathon-1',
    tag: 'STAGE 02',
    title: 'FinLens — 2nd Place',
    org: 'Techsagar 2026, National AI Hackathon',
    caption: 'Led a 3-person team benchmarking 4 ML models for real-time fraud detection.',
    linkedin: 'https://www.linkedin.com/in/vedant-kayandekar/',
    img1: '/gallery/hackathon-1-a.jpg',
    img2: '/gallery/hackathon-1-b.jpg',
    imageSide: 'right',
    accent: 'var(--gallery-accent2)',
  },
  {
    id: 'hackathon-2',
    tag: 'STAGE 03',
    title: 'AI Yoga Companion — 2nd Place',
    org: 'Hacktech Fusion 2025',
    caption: 'RAG + pgvector + real-time pose detection, with a 3D companion built in Blender.',
    linkedin: 'https://www.linkedin.com/in/vedant-kayandekar/',
    img1: '/gallery/hackathon-2-a.jpg',
    img2: '/gallery/hackathon-2-b.jpg',
    imageSide: 'left',
    accent: 'var(--gallery-accent)',
  },
]

function PixelImagePair({ img1, img2, caption1, caption2, accent, href }) {
  return (
    <div className="relative mx-auto h-[300px] w-[260px] sm:h-[340px] sm:w-[300px]">
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -10, scale: 1.04 }}
        whileTap={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        className="absolute left-0 top-0 z-10 block h-[68%] w-[70%] overflow-hidden bg-[var(--gallery-bg2)]"
        style={{ border: `3px solid ${accent}`, boxShadow: `6px 6px 0 rgba(0,0,0,0.55)`, imageRendering: 'auto' }}
      >
        <img src={img1} alt={caption1} className="h-full w-full object-cover" loading="lazy" />
      </motion.a>
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -10, scale: 1.04 }}
        whileTap={{ y: -6, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        className="absolute bottom-0 right-0 z-20 block h-[68%] w-[70%] overflow-hidden bg-[var(--gallery-bg2)]"
        style={{ border: `3px solid ${accent}`, boxShadow: `6px 6px 0 rgba(0,0,0,0.55)` }}
      >
        <img src={img2} alt={caption2} className="h-full w-full object-cover" loading="lazy" />
      </motion.a>
    </div>
  )
}

function StopMarker({ accent }) {
  return (
    <div
      className="relative hidden h-4 w-4 shrink-0 rotate-45 md:block"
      style={{ background: accent, boxShadow: `0 0 0 4px var(--gallery-bg), 0 0 14px ${accent}` }}
    />
  )
}

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden px-6 py-24 text-[var(--gallery-ink)] md:px-12 md:py-32"
      style={{
        background:
          'linear-gradient(180deg, var(--gallery-bg) 0%, var(--gallery-bg2) 100%)',
        backgroundImage:
          'linear-gradient(180deg, var(--gallery-bg) 0%, var(--gallery-bg2) 100%), linear-gradient(var(--gallery-grid) 1px, transparent 1px), linear-gradient(90deg, var(--gallery-grid) 1px, transparent 1px)',
        backgroundSize: 'auto, 28px 28px, 28px 28px',
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-pixel text-[10px] leading-none text-[var(--gallery-accent)]">
            &lt; LEVEL SELECT &gt;
          </span>
          <h2 className="font-pixel mt-5 text-xl leading-relaxed sm:text-2xl md:text-3xl">
            THE GALLERY
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm text-[var(--gallery-ink)]/60">
            Three moments, in-game. Click a photo to jump to the LinkedIn post.
          </p>
        </div>

        <div className="relative mt-20">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 md:block"
            style={{
              background:
                'repeating-linear-gradient(to bottom, var(--gallery-accent) 0, var(--gallery-accent) 8px, transparent 8px, transparent 18px)',
              opacity: 0.35,
            }}
          />

          <div className="flex flex-col gap-20 md:gap-16">
            {stops.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative flex flex-col items-center gap-8 md:flex-row md:gap-10 ${
                  s.imageSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <PixelImagePair
                    img1={s.img1}
                    img2={s.img2}
                    caption1={`${s.title} photo 1`}
                    caption2={`${s.title} photo 2`}
                    accent={s.accent}
                    href={s.linkedin}
                  />
                </div>

                <StopMarker accent={s.accent} />

                <div className="flex-1 text-center md:text-left">
                  <span
                    className="font-pixel inline-block text-[9px]"
                    style={{ color: s.accent }}
                  >
                    {s.tag}
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-[var(--gallery-ink)] md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--gallery-ink)]/60">{s.org}</p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--gallery-ink)]/75 md:mx-0 mx-auto">
                    {s.caption}
                  </p>
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-pixel mt-5 inline-block text-[9px]"
                    style={{ color: s.accent }}
                  >
                    VIEW POST →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
