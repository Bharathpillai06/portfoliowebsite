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
        <p>Currently pursuing a B.S. in Computer Science at The Ohio State University, with a specialization in computer systems and a minor in Robotics and Autonomous Systems. I am currently working on autonomous drones and camera traps.</p>
        <p>At the ReRout Lab under the National Science Foundation's ICICLE grant, I design distributed edge-computing architectures for large-scale environmental monitoring. In parallel, I work at the Defense Innovation Unit helping evaluate early stage defense startups.</p>
        <p>I'm most drawn to problems at the intersection of autonomy, perception, and real time robotics.</p>
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
