import { motion } from 'framer-motion'

const paragraphs = [
  "I wanted to introduce myself differently this time — not the same static thing I send everywhere.",
  "I'm Vedant. Who am I? A hard worker and a fast learner. It might sound like a line out of a Jake Gyllenhaal movie — Nightcrawler — but it's genuinely who I am.",
  "If there's something new put in front of me — some technology I've never touched — I will work until I master it. I will not give up on it. It doesn't matter if I can't sleep for it, it doesn't matter how many hours it takes. Until the work is finished, I don't stop. That's my way of doing things.",
  "I'm passionate about technology, and whatever I get interested in, I go deep into it — not just to say I did it, but to actually finish it.",
]

export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[var(--story-bg)] px-6 py-28 text-[var(--story-ink)] md:px-12 md:py-40"
    >
      {/* ambient light sweeps — original CSS, evokes a night drive without copying any artwork */}
      <div
        className="pointer-events-none absolute -left-1/3 top-1/4 h-[140%] w-[70%] -rotate-12 opacity-[0.07]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--story-amber), transparent)' }}
      />
      <div
        className="pointer-events-none absolute -right-1/3 bottom-0 h-[140%] w-[70%] rotate-12 opacity-[0.05]"
        style={{ background: 'linear-gradient(90deg, transparent, var(--story-amber), transparent)' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(232,169,75,0.10), transparent 60%)' }}
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-center text-[11px] uppercase tracking-[0.3em] text-[var(--story-amber)]/70"
        >
          a 30-second read, then it's your call
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-vintage mt-5 text-center text-3xl italic leading-tight text-[var(--story-ink)] sm:text-4xl md:text-5xl"
        >
          Not a pitch.
          <br /> Just me.
        </motion.h2>

        <div className="mt-14 flex flex-col gap-7">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="font-serif-vintage text-lg leading-relaxed text-[var(--story-dim)] md:text-xl"
            >
              {p}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 border-t border-[var(--story-amber)]/20 pt-10 text-center"
        >
          <p className="font-serif-vintage text-2xl italic text-[var(--story-amber)] sm:text-3xl">
            Give me the opportunity.
            <br /> I will not let you down.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
