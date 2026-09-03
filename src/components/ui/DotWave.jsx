import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

/**
 * A dot field modulated by a travelling sine wave — the particle-wave idiom
 * that dominates current background work, tuned to this site's own language:
 * it is the <Vitals> ECG line turned into a field, so the page reads as a
 * pulse rather than as a generic gradient.
 *
 * Pure inline SVG: nothing to download, colour comes from `currentColor` (set
 * a text-* class on the wrapper), and only one group transform animates, so
 * the several hundred circles are painted once and never re-laid-out.
 *
 * The tile holds exactly two wave periods and is drawn twice side by side, so
 * translating it by one tile width loops seamlessly.
 */
const COLS = 32
const ROWS = 6
const VB_W = 1200
const VB_H = 300

export default function DotWave({ className = '', duration = 26, amplitude = 26 }) {
  const reduced = useReducedMotion()

  const dots = useMemo(() => {
    const spacing = VB_W / COLS
    const rowGap = VB_H / (ROWS + 1)
    const out = []
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        // Two full periods across the tile, each row phase-shifted so the
        // field ripples diagonally instead of marching in lockstep.
        const t = (c / COLS) * Math.PI * 4 + r * 0.42
        const wave = 0.5 + 0.5 * Math.sin(t)
        out.push({
          cx: c * spacing,
          cy: rowGap * (r + 1) + Math.sin(t) * amplitude,
          r: 1 + wave * 1.1,
          opacity: 0.18 + wave * 0.5,
        })
      }
    }
    return out
  }, [amplitude])

  const tile = (offset) =>
    dots.map((d, i) => (
      <circle
        key={`${offset}-${i}`}
        cx={d.cx + offset}
        cy={d.cy}
        r={d.r}
        fill="currentColor"
        opacity={d.opacity}
      />
    ))

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={className}
    >
      <motion.g
        animate={reduced ? undefined : { x: [0, -VB_W] }}
        transition={reduced ? undefined : { duration, repeat: Infinity, ease: 'linear' }}
      >
        {tile(0)}
        {tile(VB_W)}
      </motion.g>
    </svg>
  )
}
