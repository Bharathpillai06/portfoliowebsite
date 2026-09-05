import { motion } from 'framer-motion'

// Double-circle mask wipe: navy circle swallows the screen, sky circle chases it, both collapse to reveal the new page.
const rings = [
  { color: '#141c6e', delay: 0 },
  { color: '#72cff6', delay: 0.09 },
]
const ease = [0.76, 0, 0.24, 1]

export default function PageTransition({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      {rings.map((r, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, background: r.color, zIndex: 999 - i, pointerEvents: 'none' }}
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{ clipPath: ['circle(0% at 50% 50%)', 'circle(80% at 50% 50%)', 'circle(80% at 50% 50%)', 'circle(0% at 50% 50%)'] }}
          transition={{ duration: 0.75, delay: r.delay, times: [0, 0.4, 0.55, 1], ease }}
        />
      ))}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2, delay: 0.32 }}>
        {children}
      </motion.div>
    </div>
  )
}
