import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { item } from './components/motion'
import { Rule } from './components/Decor'
import SlashButton from './components/SlashButton'
import { experience, publications, resumeProjects } from './data/content'

function Block({ it }) {
  return (
    <motion.article variants={item} className="card">
      <div className="card__top">
        <span className="card__name" style={{ color: 'var(--paper)' }}>{it.org || it.name}</span>
        <span className="card__date">{it.date}</span>
      </div>
      <div className="card__meta">{it.role || it.stack || it.venue}</div>
      <ul>{it.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
    </motion.article>
  )
}

export default function ResumePage() {
  return (
    <Shell>
      <motion.div variants={item} className="kicker">Resume</motion.div>
      <motion.h1 variants={item} className="title">Experience<br /><em>&amp; work</em></motion.h1>
      <motion.p variants={item} className="sub"><strong>Bharath K. Pillai</strong> · OSU CSE, Class of 2028</motion.p>
      <motion.div variants={item} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 20 }}>
        <SlashButton href="/Bharath_Pillai_Resume.pdf" download="Bharath_Pillai_Resume.pdf">Download PDF</SlashButton>
        <SlashButton href="/Bharath_Pillai_Resume.pdf" white>Open in new tab</SlashButton>
      </motion.div>
      <motion.div variants={item}><Rule /></motion.div>

      <motion.h2 variants={item} className="h2">Experience</motion.h2>
      {experience.map((e, i) => <Block key={i} it={e} />)}

      <motion.h2 variants={item} className="h2">Publications</motion.h2>
      {publications.map((p, i) => <Block key={i} it={p} />)}

      <motion.h2 variants={item} className="h2">Selected projects</motion.h2>
      {resumeProjects.map((p, i) => <Block key={i} it={p} />)}

      <motion.div variants={item} style={{ marginTop: 28 }}>
        <SlashButton to="/sideproj">All side projects</SlashButton>
      </motion.div>
    </Shell>
  )
}
