// short synthesized UI blips (no audio files). Silent until the user has interacted with the page.
let ctx
function ac() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)()
  if (ctx.state === 'suspended') ctx.resume()
  return ctx
}
function blip(freq, dur, type = 'square', gain = 0.05) {
  try {
    const c = ac(), o = c.createOscillator(), g = c.createGain()
    o.type = type; o.frequency.setValueAtTime(freq, c.currentTime)
    o.frequency.exponentialRampToValueAtTime(freq * 1.6, c.currentTime + dur)
    g.gain.setValueAtTime(gain, c.currentTime)
    g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur)
    o.connect(g).connect(c.destination); o.start(); o.stop(c.currentTime + dur)
  } catch { /* no audio, fine */ }
}
export const sfx = {
  move:    () => blip(880, 0.06),
  confirm: () => { blip(660, 0.09, 'triangle', 0.07); setTimeout(() => blip(990, 0.12, 'triangle', 0.06), 60) },
}
