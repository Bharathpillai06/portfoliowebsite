import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { item } from './components/motion'
import { Rule } from './components/Decor'
import { SocialGlyphs } from './components/icons'
import { track } from './lib/analytics'
import { links } from './data/content'

export default function SocialsPage() {
  return (
    <Shell>
      <motion.div variants={item} className="kicker">Contact</motion.div>
      <motion.h1 variants={item} className="title">Find me<br /><em>here</em></motion.h1>
      <motion.p variants={item} className="sub">Email is the fastest way to reach me.</motion.p>
      <motion.div variants={item}><Rule /></motion.div>

      <div style={{ maxWidth: 620 }}>
        {links.map(l => (
          <motion.a
            key={l.id} variants={item} className="soc"
            href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={() => track('social_click', { id: l.id })}
            style={{ '--c': l.color }}
          >
            <span className="soc__icon">{SocialGlyphs[l.id]}</span>
            <span className="soc__label">{l.label}</span>
            <span className="soc__value">{l.value}</span>
            <span className="soc__go" aria-hidden="true">→</span>
          </motion.a>
        ))}
      </div>
    </Shell>
  )
}
