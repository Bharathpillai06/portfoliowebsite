import { motion } from 'framer-motion'
import Shell from './components/Shell'
import { item } from './components/motion'
import { Chip, Rule } from './components/Decor'
import SlashButton from './components/SlashButton'
import { skills, coursework } from './data/content'

export default function AboutPage() {
  return (
    <Shell>
      <motion.div variants={item} className="kicker">About</motion.div>
      <motion.h1 variants={item} className="title">Bharath<br /><em>K. Pillai</em></motion.h1>
      <motion.p variants={item} className="sub">
        <strong>B.S. Computer Science &amp; Engineering</strong>, The Ohio State University<br />
        Minor in Robotics and Autonomous Systems · expected May 2028
      </motion.p>
      <motion.div variants={item}><Rule /></motion.div>

      <motion.div variants={item} className="prose">
        <p>I work on computer vision and edge AI for wildlife monitoring at the NSF ICICLE AI Institute, and on the defense side at OnRamp Hub: Ohio, where I'm designing technology transition pipelines to commercialize AFRL intellectual property and advance early-stage tech up the TRL ladder. I like problems where the model has to run on real hardware in the field — Jetsons, Pis, SDRs — not just in a notebook.</p>
      </motion.div>

      <motion.h2 variants={item} className="h2">Skills</motion.h2>
      <motion.div variants={item} className="skills">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat}>
            <h3>{cat}</h3>
            <div>{items.map(s => <Chip key={s}>{s}</Chip>)}</div>
          </div>
        ))}
      </motion.div>

      <motion.h2 variants={item} className="h2">Coursework</motion.h2>
      <motion.div variants={item}>
        {coursework.map(c => <Chip key={c}>{c}</Chip>)}
      </motion.div>

      <motion.div variants={item} style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 36 }}>
        <SlashButton to="/resume">Resume</SlashButton>
        <SlashButton to="/sideproj" white>Projects</SlashButton>
      </motion.div>
    </Shell>
  )
}
