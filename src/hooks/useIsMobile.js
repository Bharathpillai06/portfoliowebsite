import { useEffect, useState } from 'react'

const Q = '(max-width: 720px), (pointer: coarse) and (max-width: 1024px)'

// phones/tablets get the plain portfolio; laptops get the game menu
export default function useIsMobile() {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(Q).matches)
  useEffect(() => {
    const mq = window.matchMedia(Q)
    const on = (e) => setM(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return m
}
