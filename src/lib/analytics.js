// All tracking goes through here so the backend can be swapped in one place.
import { inject, track as vercelTrack } from '@vercel/analytics'

export function initAnalytics() {
  inject({ mode: import.meta.env.PROD ? 'production' : 'development' })
}

// event name + small flat props, e.g. track('menu_select', { item: 'resume' })
export function track(name, props) {
  try { vercelTrack(name, props) } catch { /* never break the UI over analytics */ }
  if (import.meta.env.DEV) console.debug('[track]', name, props ?? '')
}
