import { useEffect, useRef, useState } from 'react'

const SRC = '/bgm.mp3'
const VOL = 0.35
const KEY = 'bgm-muted'

const readMuted = () => { try { return localStorage.getItem(KEY) === '1' } catch { return false } }

// Browsers block autoplay with sound, so this tries once on load and
// otherwise starts on the visitor's first click/tap/keypress.
export default function BgMusic() {
  const ref = useRef(null)
  const [muted, setMuted] = useState(readMuted)
  const [playing, setPlaying] = useState(false)

  const play = () => ref.current?.play().then(() => setPlaying(true)).catch(() => {})

  useEffect(() => {
    const a = ref.current
    if (!a || muted) return
    a.volume = VOL
    play()
    const evs = ['pointerdown', 'keydown', 'touchstart']
    const once = () => { play(); evs.forEach(e => window.removeEventListener(e, once)) }
    evs.forEach(e => window.addEventListener(e, once))
    return () => evs.forEach(e => window.removeEventListener(e, once))
  }, [muted])

  // pause when the tab is hidden, resume when it comes back
  useEffect(() => {
    const onVis = () => {
      const a = ref.current
      if (!a || muted) return
      if (document.hidden) a.pause()
      else if (playing) a.play().catch(() => {})
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [muted, playing])

  const toggle = () => {
    const next = !muted
    setMuted(next)
    try { localStorage.setItem(KEY, next ? '1' : '0') } catch { /* private mode */ }
    if (next) { ref.current?.pause(); setPlaying(false) } else play()
  }

  const on = playing && !muted
  return (
    <>
      <audio ref={ref} src={SRC} loop preload="auto" />
      <button
        type="button"
        className={`bgm-toggle ${on ? 'on' : ''}`}
        onClick={toggle}
        aria-label={on ? 'Mute music' : 'Play music'}
        aria-pressed={on}
      >
        <span>{on ? '♪ BGM ON' : '♪ BGM OFF'}</span>
      </button>
    </>
  )
}
