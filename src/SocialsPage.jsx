import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { track } from './lib/analytics'
import { sfx } from './lib/sfx'
import { links } from './data/content'
import useIsMobile from './hooks/useIsMobile'

// Contact page on the Velvet Room compendium screenshot (public/velvet-room.jpg).
// Our cards sit exactly over the three cards in the image; positions are % of the 16:9 image.
// HUD bits in the screenshot (question, date/Dark Hour, button prompts) are covered by edge shading.
const CARDS = [
  { id: 'youtube',  title: 'YouTube',  cx: 40.7, cy: 28.8, w: 20, h: 11.5, rot: 7 },
  { id: 'linkedin', title: 'LinkedIn', cx: 39.3, cy: 50.5, w: 23, h: 17.5, rot: -13 },
  { id: 'email',    title: 'Email',    cx: 51.6, cy: 76.5, w: 31, h: 26,   rot: -49 },
]

function Card({ c, i, mobile }) {
  const l = links.find(x => x.id === c.id)
  const rot = mobile ? c.rot * 0.25 : c.rot
  const place = mobile ? {} : { left: `${c.cx}%`, top: `${c.cy}%`, width: `${c.w}%`, height: `${c.h}%` }
  return (
    <motion.a
      className={`vcard vcard--${i}`}
      href={l.href}
      target={l.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      style={{ ...place, x: mobile ? 0 : '-50%', y: mobile ? 0 : '-50%' }}
      initial={{ opacity: 0, scale: 0.8, rotate: rot - 12 }}
      animate={{ opacity: 1, scale: 1, rotate: rot }}
      transition={{ delay: 0.25 + i * 0.08, type: 'spring', stiffness: 280, damping: 20 }}
      whileHover={{ scale: 1.08, rotate: rot + (rot < 0 ? 3 : -3) }}
      whileFocus={{ scale: 1.08, rotate: rot + (rot < 0 ? 3 : -3) }}
      whileTap={{ scale: 0.97 }}
      onMouseEnter={() => sfx.move()}
      onClick={() => { sfx.confirm(); track('social_click', { id: c.id }) }}
    >
      <span className="vcard__float" style={{ animationDelay: `${-i * 0.9}s` }}>
        <span className="vcard__frame">
          <span className="vcard__title">{c.title}</span>
          <span className="vcard__sub">{l.value}</span>
        </span>
      </span>
    </motion.a>
  )
}

export default function SocialsPage() {
  const mobile = useIsMobile()
  return (
    <Shell className="shell--velvet">
      <div className="vroom" aria-hidden="true">
        <div className="vroom__stage"><img src="/velvet-room.jpg" alt="" /></div>
        <div className="vroom__shade" />
      </div>

      <motion.h1 className="velvet__ask" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
        Do you wish to contact?
      </motion.h1>

      {mobile ? (
        <div className="vlist">{CARDS.map((c, i) => <Card key={c.id} c={c} i={i} mobile />)}</div>
      ) : (
        <div className="vroom vroom--cards"><div className="vroom__stage">{CARDS.map((c, i) => <Card key={c.id} c={c} i={i} />)}</div></div>
      )}
    </Shell>
  )
}
