import { Link } from 'react-router-dom'
import { track } from '../lib/analytics'

// Persona-style cut button: white panel sweeps in from the left, red panel chases it.
export default function SlashButton({ to, href, onClick, back, white, download, children, ...rest }) {
  const cls = `sbtn${back ? ' sbtn--back' : ''}${white ? ' sbtn--white' : ''}`
  const arrow = <span className="sbtn__arrow" aria-hidden="true">{back ? '←' : '→'}</span>
  const inner = <>{children}{arrow}</>
  const label = typeof children === 'string' ? children : 'button'
  const hit = () => track('button_click', { label, target: to || href || 'action' })

  if (to) return <Link to={to} className={cls} onClick={hit} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} target={download ? undefined : "_blank"} rel="noreferrer" download={download} onClick={hit} {...rest}>{inner}</a>
  return <button type="button" className={cls} onClick={(e) => { hit(); onClick?.(e) }} {...rest}>{inner}</button>
}
