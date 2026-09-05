// shared page-load reveal: one staggered sequence per page, nothing else moves on its own
export const reveal = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
}
export const item = {
  hidden: { opacity: 0, x: -18, skewX: -4 },
  show: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
}
