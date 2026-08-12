// BACKUP — the original dark/particle-field hero, kept here in case you want
// to switch back. Not imported anywhere in the app right now.
// To restore: copy this file's content into src/components/Hero.jsx.
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron, Points, PointMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

function ParticleField() {
  const ref = useRef()
  const count = 900
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    const r = 5 + Math.random() * 4
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
  }
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#7ef0c0" size={0.02} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  )
}

function CoreShape() {
  const group = useRef()
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.15
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
    }
  })
  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
        <Icosahedron args={[1.6, 2]}>
          <MeshDistortMaterial
            color="#12181f"
            emissive="#173026"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.6}
            distort={0.35}
            speed={1.6}
          />
        </Icosahedron>
      </Float>
      <Icosahedron args={[1.62, 1]}>
        <meshBasicMaterial color="#7ef0c0" wireframe transparent opacity={0.12} />
      </Icosahedron>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#7ef0c0" />
      <pointLight position={[-4, -2, -3]} intensity={20} color="#4f7fff" />
      <CoreShape />
      <ParticleField />
    </>
  )
}

const bubbles = [
  {
    label: 'Software Engineer',
    sub: '.NET · React · Full-Stack',
    size: 168,
    top: '8%',
    right: '4%',
    delay: 0,
    duration: 7,
    emphasis: true,
  },
  {
    label: 'Content Creator',
    sub: 'Building in public',
    size: 108,
    top: '42%',
    right: '18%',
    delay: 1.1,
    duration: 8.5,
    emphasis: false,
  },
  {
    label: 'Martial Arts & Yoga Coach',
    sub: 'USKA · LEARYARD · Govt. Certified',
    size: 118,
    top: '68%',
    right: '2%',
    delay: 0.5,
    duration: 9,
    emphasis: false,
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[var(--hero-bg)]">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.8]}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating identity bubbles — right side, ambient, secondary to the main role */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {bubbles.map((b, i) => (
          <motion.div
            key={b.label}
            className="absolute flex flex-col items-center justify-center rounded-full text-center backdrop-blur-sm"
            style={{
              width: b.size,
              height: b.size,
              top: b.top,
              right: b.right,
              background: b.emphasis
                ? 'linear-gradient(155deg, rgba(126,240,192,0.16), rgba(126,240,192,0.03))'
                : 'linear-gradient(155deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
              border: b.emphasis ? '1px solid rgba(126,240,192,0.35)' : '1px solid rgba(255,255,255,0.14)',
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, -18, 0, 14, 0], opacity: 1 }}
            transition={{ delay: b.delay, duration: b.duration, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className={`font-display px-3 leading-tight ${b.emphasis ? 'text-[13px] font-semibold text-[var(--hero-accent)]' : 'text-[11px] font-medium text-white/70'}`}>
              {b.label}
            </span>
            <span className="mt-1 hidden px-3 text-[9px] text-white/40 lg:block">{b.sub}</span>
          </motion.div>
        ))}
      </div>

      {/* Hero copy */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--hero-accent)]"
        >
          Computer Engineering · Mumbai, India
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display mt-4 max-w-3xl text-[13vw] font-semibold leading-[0.95] tracking-tight text-[var(--hero-fg)] sm:text-6xl md:text-7xl"
        >
          Vedant
          <br />
          Kayandekar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-md text-base text-white/60 md:text-lg"
        >
          I build full-stack software — from live enterprise ERP systems to
          ventures I've launched and shipped solo. Currently deepening DSA
          and system design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="rounded-full bg-[var(--hero-accent)] px-6 py-3 font-display text-sm font-semibold text-[#0a0d12] transition hover:scale-[1.03]"
          >
            Let's talk
          </a>
          <a
            href="#projects"
            className="rounded-full border border-white/20 px-6 py-3 font-display text-sm font-semibold text-white/80 transition hover:border-white/50"
          >
            View work
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
        scroll
      </div>
    </section>
  )
}
