import { useNavigate } from 'react-router-dom'

const links = [
  { label: 'EMAIL',    value: 'bharathptech@gmail.com',                    href: 'mailto:bharathptech@gmail.com', color: '#3ce2ff' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/BharathPillai',             href: 'https://www.linkedin.com/in/BharathPillai', color: '#0a66c2' },
  { label: 'GITHUB',   value: 'github.com/Bharathpillai06',                href: 'https://github.com/Bharathpillai06', color: '#e6edf3' },
  { label: 'YOUTUBE',  value: 'youtube.com/@BoratholosCoding',             href: 'https://youtube.com/@BoratholosCoding', color: '#ff2a2a' },
  { label: 'PHONE',    value: '614-687-6451',                              href: 'tel:6146876451', color: 'rgba(255,255,255,0.4)' },
]

export default function SocialsPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#050d1a',
      color: '#fff',
      fontFamily: "'Anton', sans-serif",
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .soc-stripe  { position:absolute; right:0; top:0; bottom:0; width:5px; background:#c4001a; z-index:10; }
        .soc-stripe2 { position:absolute; right:9px; top:0; bottom:0; width:2px; background:rgba(245,122,139,0.22); z-index:10; }
        .soc-stripe3 { position:absolute; left:0; top:0; bottom:0; width:4px; background:#1a6aff; z-index:10; }
        .soc-back {
          position:absolute; top:28px; left:28px; z-index:20;
          font-family:'Anton',sans-serif; font-style:italic; letter-spacing:3px;
          color:rgba(60,226,255,0.6); font-size:14px; cursor:pointer;
          border:1px solid rgba(60,226,255,0.2); padding:6px 16px;
          transition:all 0.2s ease; background:none;
        }
        .soc-back:hover { color:#3ce2ff; border-color:#3ce2ff; background:rgba(60,226,255,0.05); }
        .soc-link {
          display:flex; align-items:center; gap:20px;
          padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.06);
          text-decoration:none; transition:all 0.2s ease;
        }
        .soc-link:hover { padding-left:12px; border-bottom-color:rgba(60,226,255,0.3); }
        .soc-label {
          font-family:'Anton',sans-serif; font-style:italic; font-size:11px;
          letter-spacing:4px; color:rgba(255,255,255,0.3); width:90px; flex-shrink:0;
        }
        .soc-value {
          font-family:monospace; font-size:14px; letter-spacing:1px;
        }
        .diagonal-bar {
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#1a6aff,#c4001a);
        }
      `}</style>

      <div className="diagonal-bar" />
      <div className="soc-stripe" />
      <div className="soc-stripe2" />
      <div className="soc-stripe3" />
      <button className="soc-back" onClick={() => navigate(-1)}>← BACK</button>

      <div style={{ width: '100%', maxWidth: 560, padding: '0 60px' }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 11, letterSpacing: 6, color: '#c4001a', marginBottom: 8 }}>
          CONTACT // SOCIALS
        </div>
        <div style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 56, lineHeight: 0.9, letterSpacing: 2, marginBottom: 36 }}>
          FIND<br /><span style={{ color: '#3ce2ff' }}>ME HERE</span>
        </div>

        {links.map(l => (
          <a key={l.label} className="soc-link" href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            <span className="soc-label">{l.label}</span>
            <span className="soc-value" style={{ color: l.color }}>{l.value}</span>
          </a>
        ))}

        <div style={{ marginTop: 32, fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: 2 }}>
          YOUTUBE: BORATHOLOS CODING — 4,000+ MONTHLY VIEWS
        </div>
      </div>
    </div>
  )
}
