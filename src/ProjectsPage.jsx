import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { item } from './components/motion'
import { Rule } from './components/Decor'
import SlashButton from './components/SlashButton'
import { sideProjects } from './data/content'

export default function ProjectsPage() {
  return (
    <Shell>
      <motion.div variants={item} className="kicker">Projects</motion.div>
      <motion.h1 variants={item} className="title">Side<br /><em>projects</em></motion.h1>
      <motion.p variants={item} className="sub">Hackathon builds and the drone I'm putting together at the Icicle Lab.</motion.p>
      <motion.div variants={item}><Rule /></motion.div>

      {sideProjects.map((p) => (
        <motion.article key={p.name} variants={item} className="card" style={{ '--accent': p.color }}>
          <div className="card__top">
            <span className="card__name">{p.name}</span>
            <span className="card__date">{p.date}</span>
          </div>
          <div className="card__meta card__meta--dim">{p.stack}</div>
          <ul>{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          {p.link && <SlashButton href={p.link} style={{ '--c': p.color }}>{p.link.includes('github') ? 'GitHub' : 'Open'}</SlashButton>}
        </motion.article>
      ))}
    </Shell>
  )
}
