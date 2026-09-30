import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { track } from './lib/analytics'
import { sfx } from './lib/sfx'
import { links } from './data/content'
import useIsMobile from './hooks/useIsMobile'

// Contact page laid out like the Velvet Room compendium menu: three ornate tilted cards
// cascading across a velvet-blue tiled floor. Hovered/focused card lights up.
const CARDS = [
  { id: 'youtube',  title: 'YouTube',  pos: { left: '30%', top: '4%'  }, w: 350, rot: -8 },
  { id: 'linkedin', title: 'LinkedIn', pos: { left: '14%', top: '33%' }, w: 390, rot: -11 },
  { id: 'email',    title: 'Email',    pos: { left: '36%', top: '60%' }, w: 440, rot: -26 },
]

function VelvetBackdrop() {
  return (
    <div className="velvet" aria-hidden="true">
      <div className="velvet__quilt" />
      <div className="velvet__floor" />
      <svg className="velvet__water" preserveAspectRatio="none">
        <filter id="vw" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.006 0.012" numOctaves="2" seed="3">
            <animate attributeName="seed" values="3;4;5;6;7;8" dur="2.4s" repeatCount="indefinite" calcMode="discrete" />
          </feTurbulence>
          {/* collapse to one channel, keep only a thin band -> vein-like water lines, tint cyan */}
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  1 0 0 0 0" result="n" />
          <feComponentTransfer in="n" result="lines"><feFuncA type="table" tableValues="0 0 0 0 1 0.2 0 0 0" /></feComponentTransfer>
          <feFlood floodColor="#7fe6ff" />
          <feComposite in2="lines" operator="in" />
        </filter>
        <rect width="100%" height="100%" filter="url(#vw)" />
      </svg>
      <div className="velvet__vignette" />
    </div>
  )
}

export default function SocialsPage() {
  const mobile = useIsMobile()
  return (
    <Shell className="shell--velvet">
      <VelvetBackdrop />
      <motion.h1
        className="velvet__ask"
        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.4 }}
      >
        Who do you wish to contact?
      </motion.h1>

      <div className="vstage">
        {CARDS.map((c, i) => {
          const l = links.find(x => x.id === c.id)
          const rot = mobile ? c.rot * 0.3 : c.rot
          return (
            <motion.a
              key={c.id}
              className={`vcard vcard--${i}`}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{ ...c.pos, width: c.w, '--rot': `${rot}deg` }}
              initial={{ opacity: 0, y: -60, rotate: rot - 25 }}
              animate={{ opacity: 1, y: 0, rotate: rot }}
              transition={{ delay: 0.35 + i * 0.1, type: 'spring', stiffness: 260, damping: 18 }}
              whileHover={{ scale: 1.06, rotate: rot + 2 }}
              whileFocus={{ scale: 1.06, rotate: rot + 2 }}
              onMouseEnter={() => sfx.move()}
              onClick={() => { sfx.confirm(); track('social_click', { id: c.id }) }}
            >
              <span className="vcard__frame">
                <span className="vcard__title">{c.title}</span>
                <span className="vcard__sub">{l.value}</span>
              </span>
            </motion.a>
          )
        })}
      </div>

      <div className="velvet__keys" aria-hidden="true"><kbd>↵</kbd>Confirm <kbd>Esc</kbd>Close</div>
    </Shell>
  )
}
