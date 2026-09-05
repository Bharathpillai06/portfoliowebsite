import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { item } from './components/motion'
import { Chip, Rule } from './components/Decor'
import { SocialGlyphs } from './components/icons'
import SlashButton from './components/SlashButton'
import { track } from './lib/analytics'
import { experience, sideProjects, links, skills } from './data/content'

// Plain, scrollable landing page for phones. Same content as the desktop menu leads to, no video.
export default function MobileHome() {
  const featured = sideProjects.slice(0, 3)
  const contact = links.filter(l => ['email', 'linkedin', 'github'].includes(l.id))
  return (
    <Shell home>
      <motion.div variants={item} className="kicker">Portfolio</motion.div>
      <motion.h1 variants={item} className="title">Bharath<br /><em>K. Pillai</em></motion.h1>
      <motion.p variants={item} className="sub">
        CS &amp; engineering student at Ohio State. I build computer-vision and edge-AI systems for wildlife monitoring, and work on defense tech transition at OnRamp Hub: Ohio.
      </motion.p>
      <motion.div variants={item} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 22 }}>
        <SlashButton to="/resume">Resume</SlashButton>
        <SlashButton href="/Bharath_Pillai_Resume.pdf" white>PDF</SlashButton>
      </motion.div>
      <motion.div variants={item}><Rule /></motion.div>

      <motion.h2 variants={item} className="h2">Now</motion.h2>
      {experience.slice(0, 2).map((e, i) => (
        <motion.article key={i} variants={item} className="card">
          <div className="card__top">
            <span className="card__name" style={{ color: 'var(--paper)', fontSize: 18 }}>{e.role.split(' — ')[1] || e.role}</span>
            <span className="card__date">{e.date}</span>
          </div>
          <div className="card__meta">{e.org}</div>
          <ul><li>{e.bullets[0]}</li></ul>
        </motion.article>
      ))}

      <motion.h2 variants={item} className="h2">Projects</motion.h2>
      {featured.map(p => (
        <motion.article key={p.name} variants={item} className="card" style={{ '--accent': p.color }}>
          <div className="card__top">
            <span className="card__name" style={{ fontSize: 18 }}>{p.name}</span>
            <span className="card__date">{p.date}</span>
          </div>
          <div className="card__meta card__meta--dim">{p.stack}</div>
          <ul><li>{p.bullets[0]}</li></ul>
        </motion.article>
      ))}
      <motion.div variants={item}><SlashButton to="/sideproj">All projects</SlashButton></motion.div>

      <motion.h2 variants={item} className="h2">Stack</motion.h2>
      <motion.div variants={item}>
        {[...skills.Languages, ...skills.Frameworks.slice(0, 5), ...skills.Tools.slice(0, 5)].map(s => <Chip key={s}>{s}</Chip>)}
      </motion.div>

      <motion.h2 variants={item} className="h2">Contact</motion.h2>
      <div>
        {contact.map(l => (
          <motion.a key={l.id} variants={item} className="soc" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" onClick={() => track('social_click', { id: l.id })} style={{ '--c': l.color }}>
            <span className="soc__icon">{SocialGlyphs[l.id]}</span>
            <span className="soc__value">{l.value}</span>
          </motion.a>
        ))}
      </div>
    </Shell>
  )
}
