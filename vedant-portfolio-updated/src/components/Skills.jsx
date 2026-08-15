import { Suspense, useMemo, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bounds } from '@react-three/drei'
import * as THREE from 'three'

const skills = [
  { name: 'Python', color: '#3776ab' },
  { name: 'C++', color: '#00599c' },
  { name: 'C#', color: '#68217a' },
  { name: 'JavaScript', color: '#e8c547', dark: true },
  { name: 'React', color: '#20232a' },
  { name: 'Node.js', color: '#3c873a' },
  { name: '.NET Core', color: '#512bd4' },
  { name: 'Django', color: '#0c4b33' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MySQL', color: '#4479a1' },
  { name: 'SQL Server', color: '#a4373a' },
  { name: 'Git', color: '#e5522d' },
]

function makeChipTexture(label, bg, darkText) {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = bg
  ctx.beginPath()
  ctx.arc(128, 128, 126, 0, Math.PI * 2)
  ctx.fill()
  ctx.strokeStyle = darkText ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.35)'
  ctx.lineWidth = 6
  ctx.beginPath()
  ctx.arc(128, 128, 122, 0, Math.PI * 2)
  ctx.stroke()
  ctx.fillStyle = darkText ? '#16130f' : '#f5f3ef'
  ctx.font = '600 30px Space Grotesk, Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const words = label.split(' ')
  if (words.length > 1) {
    ctx.fillText(words[0], 128, 112)
    ctx.fillText(words.slice(1).join(' '), 128, 148)
  } else {
    ctx.fillText(label, 128, 130)
  }
  const tex = new THREE.CanvasTexture(canvas)
  tex.anisotropy = 4
  return tex
}

function SkillChip({ skill, position }) {
  const group = useRef()
  const anim = useRef({ animating: false, start: 0, fromRot: Math.PI / 2, toRot: Math.PI / 2, duration: 0.85 })
  const [hovered, setHovered] = useState(false)

  const topTex = useMemo(() => makeChipTexture(skill.name, skill.color, !!skill.dark), [skill])

  useFrame((state) => {
    if (!group.current) return
    const a = anim.current
    if (a.animating) {
      const t = Math.min((state.clock.elapsedTime - a.start) / a.duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      group.current.rotation.x = a.fromRot + (a.toRot - a.fromRot) * ease
      group.current.position.y = position[1] + Math.sin(t * Math.PI) * 0.55
      if (t >= 1) {
        a.animating = false
        a.fromRot = a.toRot
        group.current.position.y = position[1]
      }
    } else {
      // gentle idle hover lift, no ambient motion otherwise (stays static)
      const target = hovered ? position[1] + 0.12 : position[1]
      group.current.position.y += (target - group.current.position.y) * 0.15
    }
  })

  const handleClick = () => {
    const a = anim.current
    if (a.animating) return
    a.animating = true
    a.start = performance.now() / 1000
    a.fromRot = a.toRot
    a.toRot = a.fromRot + Math.PI * 2
  }

  return (
    <group
      ref={group}
      position={position}
      rotation={[Math.PI / 2, 0, 0]}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true)
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setHovered(false)
        document.body.style.cursor = 'auto'
      }}
    >
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.85, 0.85, 0.34, 48]} />
        <meshStandardMaterial color={skill.color} roughness={0.4} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.171, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.84, 48]} />
        <meshStandardMaterial map={topTex} roughness={0.5} />
      </mesh>
      <mesh position={[0, -0.171, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.84, 48]} />
        <meshStandardMaterial map={topTex} roughness={0.5} />
      </mesh>
    </group>
  )
}

function Grid() {
  const cols = window.innerWidth < 768 ? 3 : 4
  const spacingX = 2.15
  const spacingY = 1.95
  const rows = Math.ceil(skills.length / cols)
  const offsetX = ((cols - 1) * spacingX) / 2
  const offsetY = ((rows - 1) * spacingY) / 2

  return (
    <>
      {skills.map((s, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = col * spacingX - offsetX
        const y = offsetY - row * spacingY
        return <SkillChip key={s.name} skill={s} position={[x, y, 0]} />
      })}
    </>
  )
}

export default function Skills() {
  const [cols, setCols] = useState(4)

  useEffect(() => {
    const handleResize = () => setCols(window.innerWidth < 768 ? 3 : 4)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section id="skills" className="relative bg-[var(--skills-bg)] px-6 py-24 text-[var(--skills-ink)] md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--skills-ink)]/50">
            Toolkit
          </span>
          <h2 className="font-display mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Skills, in the round
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[var(--skills-ink)]/60">
            Click a chip to flip it. Twelve tools I reach for most, from
            production backend work to the ventures I've shipped solo.
          </p>
        </div>

        <div className="mt-14 h-[520px] w-full md:h-[560px]">
          <Canvas shadows camera={{ position: [0, 0, 9.5], fov: 42 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.75} />
              <directionalLight position={[4, 6, 6]} intensity={1.1} castShadow />
              <directionalLight position={[-4, -2, 4]} intensity={0.35} />
              <Bounds fit clip observe margin={1.2}>
                <Grid key={cols} />
              </Bounds>
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  )
}
