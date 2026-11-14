import { useEffect, useRef } from 'react'

// Muted, looping background video that actually autoplays on phones.
// React sets `muted` only as a DOM property, never as the HTML attribute, and iOS Safari
// checks the attribute before allowing inline autoplay — so set both by hand, then call play().
// If the browser still refuses (Low Power Mode, data saver), start on the first touch/scroll.
export default function BgVideo({ src, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    v.setAttribute('playsinline', '')
    v.setAttribute('webkit-playsinline', '')

    const tryPlay = () => { if (v.paused) v.play().catch(() => {}) }
    tryPlay()

    const evs = ['touchstart', 'pointerdown', 'scroll', 'keydown']
    const kick = () => { tryPlay(); if (!v.paused) evs.forEach(e => window.removeEventListener(e, kick)) }
    evs.forEach(e => window.addEventListener(e, kick, { passive: true }))
    const onVis = () => { if (!document.hidden) tryPlay() }
    document.addEventListener('visibilitychange', onVis)
    v.addEventListener('canplay', tryPlay)

    return () => {
      evs.forEach(e => window.removeEventListener(e, kick))
      document.removeEventListener('visibilitychange', onVis)
      v.removeEventListener('canplay', tryPlay)
    }
  }, [src])

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
      disableRemotePlayback
      {...rest}
    />
  )
}
