import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV } from '../data/content'
import { Backdrop, Monogram } from './Decor'
import { Icons } from './icons'
import SlashButton from './SlashButton'
import { reveal } from './motion'
import { track } from '../lib/analytics'

const TAB_ICON = { '/about': Icons.about, '/resume': Icons.resume, '/sideproj': Icons.projects, '/socials': Icons.socials }


export default function Shell({ children, home = false }) {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const onKey = (e) => { if (e.key === 'ArrowLeft' || e.key === 'Escape') navigate('/') }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [navigate])

  return (
    <div className="shell">
      <div className="shell__topbar" /><div className="shell__edge-l" /><div className="shell__edge-r" /><div className="shell__edge-r2" />
      <Backdrop />

      <header className="shell__head">
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Monogram as={NavLink} to="/" aria-label="Home" />
          {!home && <SlashButton to="/" back>Menu</SlashButton>}
        </div>
        <nav className="shell__nav" aria-label="Sections">
          {NAV.map(n => <NavLink key={n.to} to={n.to} onClick={() => track('nav_click', { to: n.to, via: 'header' })}>{n.label}</NavLink>)}
        </nav>
      </header>

      <motion.main className="shell__body" variants={reveal} initial="hidden" animate="show">
        {children}
      </motion.main>

      <nav className="tabbar" aria-label="Sections">
        <NavLink to="/" end>{Icons.home}<span>Home</span></NavLink>
        {NAV.map(n => <NavLink key={n.to} to={n.to} onClick={() => track('nav_click', { to: n.to, via: 'tabbar' })}>{TAB_ICON[n.to]}<span>{n.label}</span></NavLink>)}
      </nav>
    </div>
  )
}
