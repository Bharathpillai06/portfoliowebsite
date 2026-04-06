import { useNavigate } from 'react-router-dom'

const skills = {
  'LANGUAGES': ['Java', 'Python', 'Rust', 'C', 'Assembly'],
  'FRAMEWORKS': ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'OpenCV', 'Flask', 'scikit-learn', 'YOLO', 'SAM', 'SAHI'],
  'TOOLS': ['Git', 'Docker', 'AWS', 'Linux', 'Raspberry Pi', 'ESP32', 'GNU Radio', 'RTL-SDR'],
  'CERTIFICATIONS': ['AWS Cloud Practitioner', 'Google Cloud Digital Leader', 'HuggingFace MCP Fundamentals'],
}

export default function AboutPage() {
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
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .about-stripe  { position:absolute; right:0; top:0; bottom:0; width:5px; background:#c4001a; z-index:10; }
        .about-stripe2 { position:absolute; right:9px; top:0; bottom:0; width:2px; background:rgba(245,122,139,0.22); z-index:10; }
        .about-stripe3 { position:absolute; left:0; top:0; bottom:0; width:4px; background:#1a6aff; z-index:10; }
        .about-back {
          position:absolute; top:28px; left:28px; z-index:20;
          font-family:'Anton',sans-serif; font-style:italic; letter-spacing:3px;
          color:rgba(60,226,255,0.6); font-size:14px; cursor:pointer;
          border:1px solid rgba(60,226,255,0.2); padding:6px 16px;
          transition:all 0.2s ease;
        }
        .about-back:hover { color:#3ce2ff; border-color:#3ce2ff; background:rgba(60,226,255,0.05); }
        .skill-tag {
          display:inline-block; background:rgba(60,226,255,0.08);
          border:1px solid rgba(60,226,255,0.2); color:#3ce2ff;
          font-family:monospace; font-size:12px; padding:3px 10px;
          margin:3px; letter-spacing:1px;
        }
        .section-title {
          font-family:'Anton',sans-serif; font-style:italic;
          color:rgba(255,255,255,0.25); font-size:11px; letter-spacing:4px;
          margin-bottom:8px;
        }
        .diagonal-bar {
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#1a6aff,#c4001a);
        }
      `}</style>

      <div className="diagonal-bar" />
      <div className="about-stripe" />
      <div className="about-stripe2" />
      <div className="about-stripe3" />

      <button className="about-back" onClick={() => navigate(-1)}>← BACK</button>

      <div style={{ padding: '80px 60px 40px 60px', overflowY: 'auto', flex: 1 }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 11, letterSpacing: 6, color: '#c4001a', marginBottom: 6 }}>
            PORTFOLIO // ABOUT ME
          </div>
          <h1 style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 72, lineHeight: 0.9, letterSpacing: 2 }}>
            BHARATH<br />
            <span style={{ color: '#3ce2ff' }}>K. PILLAI</span>
          </h1>
          <div style={{ marginTop: 16, fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.5)', letterSpacing: 2 }}>
            B.S. COMPUTER SCIENCE & ENGINEERING — THE OHIO STATE UNIVERSITY
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#3ce2ff', letterSpacing: 2, marginTop: 4 }}>
            MINOR: ROBOTICS AND AUTONOMOUS SYSTEMS
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.3)', letterSpacing: 2, marginTop: 4 }}>
            EXPECTED GRADUATION: DEC 2027
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 60, height: 2, background: '#c4001a', marginBottom: 32 }} />

        {/* Skills Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px 40px' }}>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat}>
              <div className="section-title">{cat}</div>
              <div>{items.map(s => <span key={s} className="skill-tag">{s}</span>)}</div>
            </div>
          ))}
        </div>

        {/* Coursework */}
        <div style={{ marginTop: 36 }}>
          <div className="section-title">RELEVANT COURSEWORK</div>
          <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'rgba(255,255,255,0.55)', letterSpacing: 1, lineHeight: 1.8 }}>
            Data Structures & Algorithms &nbsp;·&nbsp; Systems I &nbsp;·&nbsp; Software II &nbsp;·&nbsp; Electronics for CSE &nbsp;·&nbsp; Linear Algebra
          </div>
        </div>

        {/* Nav hint */}
        <div style={{ position: 'absolute', bottom: 24, right: 28, fontFamily: "'Anton', sans-serif", fontSize: 11, letterSpacing: 3, color: 'rgba(255,255,255,0.2)' }}>
          ← BACK
        </div>
      </div>
    </div>
  )
}
