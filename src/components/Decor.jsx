// Original decorative pieces in the site's visual language (halftone, slashes, cut corners).

export function Backdrop() {
  return (
    <>
      <div className="slash-bg" aria-hidden="true" />
      <div className="halftone" aria-hidden="true" />
    </>
  )
}

export function Rule() {
  return <div className="rule" aria-hidden="true" />
}

export function Chip({ children }) {
  return <span className="chip">{children}</span>
}

export function Monogram({ as: Tag = 'div', ...props }) {
  return (
    <Tag className="mono" {...props}>
      <svg viewBox="0 0 46 44" width="46" height="44" aria-hidden="true">
        <polygon points="14,4 46,4 35,44 3,44" fill="#c4001a" />
        <polygon points="11,0 43,0 32,40 0,40" fill="#f4f8ff" />
        <text x="21" y="29" textAnchor="middle" fontFamily="Anton, sans-serif" fontStyle="italic" fontSize="19" fill="#050d1a" letterSpacing="1">BP</text>
      </svg>
    </Tag>
  )
}
