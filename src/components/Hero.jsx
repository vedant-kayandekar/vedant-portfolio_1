import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls, useAnimations, Bounds, Html } from '@react-three/drei'
import { Suspense, useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'

const socials = [
  { label: 'GitHub', href: '#', icon: 'github' },
  { label: 'LinkedIn', href: '#', icon: 'linkedin' },
  { label: 'YouTube', href: '#', icon: 'youtube' },
  { label: 'Instagram', href: '#', icon: 'instagram' },
  { label: 'Email', href: 'mailto:vedantassociates2004@gmail.com', icon: 'mail' },
]

function SocialIcon({ icon }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (icon === 'github')
    return (
      <svg {...common} strokeWidth={0} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.9-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
      </svg>
    )
  if (icon === 'linkedin')
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  if (icon === 'youtube')
    return (
      <svg {...common}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    )
  if (icon === 'instagram')
    return (
      <svg {...common}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16.11 11.64A4 4 0 1 1 12 8a4 4 0 0 1 4.11 3.64z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  if (icon === 'mail')
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    )
  return null
}

function Loader() {
  return (
    <Html center>
      <div className="relative flex items-center justify-center">
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-[var(--splithero-orange)]/40 blur-xl"></div>
        <div className="absolute h-16 w-16 animate-pulse rounded-full bg-[var(--splithero-orange)]/60 blur-md"></div>
        <div className="z-10 whitespace-nowrap font-mono text-sm font-bold tracking-widest text-[#0a0d12]">
          LOADING MAGIC...
        </div>
      </div>
    </Html>
  )
}

function DualAvatarModel() {
  const group = useRef()
  
  // Load both GLBs
  const idleModel = useGLTF('/animated_model.glb') 
  const landingModel = useGLTF('/landing_model.glb')
  
  // Combine animations into one array so the mixer can control both
  const combinedAnims = useMemo(() => {
    const idles = idleModel.animations.map(a => { const c = a.clone(); c.name = 'Idle'; return c; })
    const landings = landingModel.animations.map(a => { const c = a.clone(); c.name = 'Landing'; return c; })
    return [...idles, ...landings]
  }, [idleModel.animations, landingModel.animations])

  const { actions } = useAnimations(combinedAnims, group)

  useEffect(() => {
    if (actions['Landing'] && actions['Idle']) {
      // Play landing animation once
      actions['Landing'].setLoop(THREE.LoopOnce, 1)
      actions['Landing'].clampWhenFinished = true
      actions['Landing'].play()
      
      const duration = actions['Landing'].getClip().duration
      
      // Wait for it to finish + 1 second, then crossfade
      const timer = setTimeout(() => {
        actions['Idle'].reset().play()
        actions['Idle'].crossFadeFrom(actions['Landing'], 1, true)
      }, (duration * 1000) + 1000)
      
      return () => clearTimeout(timer)
    }
  }, [actions])

  // Find head bone dynamically for eye tracking
  const headBone = useMemo(() => {
    let bone = null
    idleModel.scene.traverse((child) => {
      if (child.isBone && child.name.toLowerCase().includes('head')) {
        if (!bone) bone = child
      }
    })
    return bone
  }, [idleModel.scene])

  useFrame((state) => {
    const targetX = (state.mouse.x * Math.PI) / 2
    const targetY = (state.mouse.y * Math.PI) / 2.5
    
    if (headBone) {
      headBone.rotation.y += (targetX - headBone.rotation.y) * 0.1
      headBone.rotation.x += (-targetY - headBone.rotation.x) * 0.1
    } else if (group.current) {
      group.current.rotation.y += (targetX * 0.5 - group.current.rotation.y) * 0.1
    }
  })

  return (
    <group ref={group}>
      <primitive object={idleModel.scene} />
    </group>
  )
}
useGLTF.preload('/animated_model.glb')
useGLTF.preload('/landing_model.glb')

const roles = ['Software Engineer', 'Full-Stack Developer', 'Coach & Creator']

export default function Hero() {
  return (
    <section id="home" className="relative flex h-screen w-full overflow-hidden">
      
      {/* 1. BACKGROUND LAYER (Lowest Z) */}
      {/* Split background: 60/40 on mobile for an edgy look, 50/50 on desktop */}
      <div className="absolute inset-0 z-0 flex">
        <div className="w-[60%] bg-[var(--splithero-dark)] md:w-1/2"></div>
        <div className="w-[40%] bg-[var(--splithero-orange)] md:w-1/2"></div>
      </div>

      {/* 2. 3D MODEL LAYER (Middle Z) */}
      {/* On mobile: width 85% anchored right so it shifts right. Desktop: exact right half */}
      <div className="absolute inset-y-0 right-0 z-10 w-[85%] md:w-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="h-full w-full"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="h-full w-full">
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} />
              <directionalLight position={[-10, -10, -5]} intensity={0.5} />
              <Environment preset="city" />

              {/* Smaller margin = MASSIVELY BIGGER model! */}
              <Bounds fit clip observe margin={0.8}>
                <DualAvatarModel />
              </Bounds>
              
              <OrbitControls makeDefault enableZoom={false} enablePan={false} />
            </Suspense>
          </Canvas>
        </motion.div>

        <span className="absolute bottom-6 right-6 z-20 font-mono text-xs text-[var(--splithero-dark)]/60 md:bottom-10 md:right-10">
          {new Date().getFullYear()}
        </span>
      </div>

      {/* 3. TEXT FOREGROUND LAYER (Highest Z) */}
      {/* No background colors here! Pure text overlapping the 3D model */}
      <div className="pointer-events-none relative z-20 flex h-full w-full flex-col justify-center px-6 py-28 text-[#f2efe9] md:pointer-events-auto md:w-1/2 md:px-14 lg:px-20">
        <div className="pointer-events-auto max-w-[280px] sm:max-w-sm md:max-w-none">
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
            className="mt-6 text-sm leading-relaxed text-white/60 md:max-w-md md:text-base"
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
              href="#experience"
              className="rounded-md bg-[var(--splithero-orange)] px-6 py-3 font-display text-sm font-semibold text-[#0d0d0d] transition hover:brightness-110"
            >
              My Experience
            </a>
            <a
              href="#projects"
              className="rounded-md border border-white/25 px-6 py-3 font-display text-sm font-semibold text-white/85 transition hover:border-white/60"
            >
              See my work
            </a>
          </motion.div>

          {/* social icon column */}
          <div className="mt-12 flex items-center gap-5 text-white/40 md:absolute md:bottom-12 md:left-14 md:mt-0 lg:left-20">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className={`transition flex items-center justify-center ${
                  s.icon === 'github' 
                    ? 'text-white scale-[1.35] hover:text-[var(--splithero-orange)]' 
                    : 'hover:text-[var(--splithero-orange)]'
                }`}
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
