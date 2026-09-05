import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import menuVideo from './assets/main1.mp4'
import P3Menu from './P3Menu'
import PageTransition from './PageTransition'
import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
import SocialsPage from './SocialsPage'
import ProjectsPage from './ProjectsPage'
import MobileHome from './MobileHome'
import useIsMobile from './hooks/useIsMobile'
import { track } from './lib/analytics'

function MenuScreen() {
  const navigate = useNavigate()

  useEffect(() => {
    document.body.classList.add('menu-open')
    return () => document.body.classList.remove('menu-open')
  }, [])

  const handleNavigate = (page) => {
    track('menu_select', { item: page })
    if (page === 'github') { window.open('https://github.com/Bharathpillai06', '_blank', 'noreferrer'); return }
    navigate(`/${page}`)
  }

  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline preload="auto" />
      <P3Menu onNavigate={handleNavigate} />
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const mobile = useIsMobile()
  const Home = mobile ? MobileHome : MenuScreen
  useEffect(() => { track('page_view', { path: location.pathname, layout: mobile ? 'mobile' : 'desktop' }) }, [location.pathname, mobile])
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"         element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about"    element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/resume"   element={<PageTransition><ResumePage /></PageTransition>} />
        <Route path="/socials"  element={<PageTransition><SocialsPage /></PageTransition>} />
        <Route path="/sideproj" element={<PageTransition><ProjectsPage /></PageTransition>} />
        <Route path="*"         element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}
