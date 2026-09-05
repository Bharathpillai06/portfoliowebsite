import { useState, useEffect, useRef } from 'react'
import { Monogram } from './components/Decor'
import { sfx } from './lib/sfx'
import './P3Menu.css'

const ITEMS = [
  { id: 'about',    label: 'ABOUT ME',      page: 'about',    size: 80, x: 0,  y: 0,  skew: -6,  skewY: 10  },
  { id: 'resume',   label: 'RESUME',        page: 'resume',   size: 66, x: 20, y: 8,  skew: -11, skewY: -10 },
  { id: 'github',   label: 'GITHUB LINK',   page: 'github',   size: 68, x: 8,  y: 6,  skew: 0,   skewY: -4  },
  { id: 'socials',  label: 'SOCIALS',       page: 'socials',  size: 74, x: 16, y: 8,  skew: -3,  skewY: 5   },
  { id: 'sideproj', label: 'SIDE PROJECTS', page: 'sideproj', size: 56, x: 10, y: 6,  skew: -4,  skewY: 7   },
]

export default function P3Menu({ onNavigate }) {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [leaving, setLeaving] = useState(null)
  const touch = useRef(false)

  const activate = (i) => { if (i !== active) sfx.move(); setActive(i); setAnimKey(k => k + 1) }

  const go = (i) => {
    // flash the selection, then leave — lets the tap animation land on touch screens
    activate(i)
    sfx.confirm()
    setLeaving(i)
    setTimeout(() => onNavigate?.(ITEMS[i].page), 240)
  }

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 700)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp')   { e.preventDefault(); activate(Math.max(0, active - 1)) }
      if (e.key === 'ArrowDown') { e.preventDefault(); activate(Math.min(ITEMS.length - 1, active + 1)) }
      if (e.key === 'Enter')     go(active)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="p3-overlay">
      <div className="p3-stripe" /><div className="p3-stripe2" />

      <div className={`p3-brand ${mounted ? 'mounted' : ''}`}>
        <Monogram />
        <div>
          <div className="p3-brand__name">Bharath K. Pillai</div>
          <div className="p3-brand__sub">CSE @ Ohio State · edge AI · SDR</div>
        </div>
      </div>

      <nav className="p3-menu" aria-label="Main menu">
        {ITEMS.map((it, i) => {
          const isActive = active === i
          const dist = Math.abs(i - active)
          return (
            <button
              key={it.id}
              type="button"
              className={`p3-row ${isActive ? 'active' : ''} ${mounted ? 'mounted' : ''} ${leaving === i ? 'leaving' : ''}`}
              style={{
                '--fs': it.size, '--x': `${it.x}px`, '--y': `${it.y}px`,
                '--skew': `${it.skew}deg`, '--skewY': `${it.skewY}deg`,
                '--dim': isActive ? 1 : Math.max(0.55, 1 - dist * 0.18),
                transitionDelay: mounted ? `${i * 80}ms` : '0ms',
              }}
              onClick={() => go(i)}
              onTouchStart={() => { touch.current = true }}
              onMouseEnter={() => { if (!touch.current) activate(i) }}
              onFocus={() => activate(i)}
              aria-current={isActive ? 'true' : undefined}
            >
              <span className="p3-glow" aria-hidden="true" />
              <span className="p3-skew">
                <span key={isActive ? `pop-${i}-${animKey}` : `idle-${i}`} className={`p3-shadow${isActive ? ' pop' : ''}`} aria-hidden="true" />
                <span className="p3-highlight" aria-hidden="true" />
                {leaving === i && <span className="p3-burst" aria-hidden="true">{[...Array(7)].map((_, k) => <i key={k} style={{ '--k': k }} />)}</span>}
                <span key={`lbl-${i}-${isActive ? animKey : 'idle'}`} className={`p3-label${isActive ? ' pop' : ''}`}>
                  <span className="p3-label__dark">{it.label}</span>
                  <span className="p3-label__bright" aria-hidden="true">{it.label}</span>
                </span>
              </span>
            </button>
          )
        })}
      </nav>

      <div className={`p3-hint ${mounted ? 'mounted' : ''}`}>
        <div className="p3-hint__row p3-hint__kb"><span className="p3-hint__key">↑↓</span><span>navigate</span></div>
        <div className="p3-hint__row p3-hint__kb"><span className="p3-hint__key">↵</span><span>confirm</span></div>
        <div className="p3-hint__row p3-hint__touch">tap a section to open it</div>
      </div>
    </div>
  )
}
