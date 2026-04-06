import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import menuVideo from './assets/main1.mp4'
import P3Menu from './P3Menu'
import PageTransition from './PageTransition'
import AboutPage from './AboutPage'
import ResumePage from './ResumePage'
import SocialsPage from './SocialsPage'
import ProjectsPage from './ProjectsPage'
import './App.css'

function MenuScreen() {
  const navigate = useNavigate()

  const handleNavigate = (page) => {
    if (page === 'github') {
      window.open('https://github.com/Bharathpillai06', '_blank', 'noreferrer')
      return
    }
    navigate(`/${page}`)
  }

  return (
    <div id="menu-screen">
      <video src={menuVideo} autoPlay loop muted playsInline />
      <P3Menu onNavigate={handleNavigate} />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><MenuScreen /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition><AboutPage /></PageTransition>
        } />
        <Route path="/resume" element={
          <PageTransition><ResumePage /></PageTransition>
        } />
        <Route path="/socials" element={
          <PageTransition><SocialsPage /></PageTransition>
        } />
        <Route path="/sideproj" element={
          <PageTransition><ProjectsPage /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AnimatedRoutes />
}
