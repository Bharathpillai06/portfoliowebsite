import { useNavigate } from 'react-router-dom'

const experience = [
  {
    org: 'OSU Dept. of Engineering & USW R&E',
    role: 'Undergraduate Researcher — Software Defined Radio Systems',
    date: 'Mar 2026 – Present',
    bullets: [
      'Creating a SPECK128/256 and Caju 32-bit cipher for an anti-jam frequency algorithm, tested against NSA vectors',
      'Developing H(k,t) frequency assignment and bitsliced index computation for multi-user channel hopping',
      'Building toward deployment on two physical SDRs for a live frequency-hopping point-to-point anti-jam radio link',
    ],
  },
  {
    org: 'OSU Dept. of Engineering & Imageomics',
    role: 'Undergraduate Researcher — Computer Vision & Edge Systems',
    date: 'May 2025 – Present',
    bullets: [
      'Built a model to get detected animals GPS coordinates using HFOV, camera bearing, and Vincenty geodesic math',
      'Validated GPS localization results against acoustic data, demonstrating cross-modal agreement with ~80% overlap',
      'Merged multimodal audio and camera data using Pandas, NumPy, and OpenCV reducing reporting time by ~70%',
    ],
  },
]

const projects = [
  {
    name: 'BioHack — 2nd Place',
    stack: 'Python, PyTorch, OpenCV, Blender',
    date: 'Feb 2026',
    bullets: [
      'Created a deep learning workflow into vector embeddings for analysis across heterogeneous kidney imaging',
      'Preprocessed medical imagery with OpenCV by segmentation and masking for clear inputs for model inference',
      'Trained a self-supervised autoencoder in PyTorch to compress 512-d embeddings to 64-d latent space',
    ],
  },
  {
    name: 'Edge AI Wildlife Monitoring System',
    stack: 'Python, YOLOv8, TensorFlow, PyTorch, Raspberry Pi',
    date: 'Mar 2026',
    bullets: [
      'Built a multimodal edge AI pipeline combining YOLOv8 detection with an audio CNN for real-time wildlife health',
      'Achieved 0% accuracy degradation vs. supercomputer baseline at 14.9x lower energy consumption',
      'Designed a CNN processing 24 features achieving a 36% runtime reduction on ARM vs. standard architecture',
    ],
  },
  {
    name: 'DataIO — 3rd Place',
    stack: 'Python, Pandas, AWS QuickSight',
    date: 'Mar 2025',
    bullets: [
      'Processed ~500,000 U.S. EV charger and vehicle registration data in Pandas to quantify coverage gaps',
      'Identified 12 high-priority underserved regions by correlating EV adoption rates with charger density deficits',
      'Visualized geospatial heat maps in AWS QuickSight to identify charger density and underserved regions',
    ],
  },
]

function Block({ item }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 4 }}>
        <span style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 16, color: '#fff', letterSpacing: 1 }}>
          {item.org || item.name}
        </span>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#c4001a', letterSpacing: 2 }}>{item.date}</span>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#3ce2ff', letterSpacing: 1, marginBottom: 8 }}>
        {item.role || item.stack}
      </div>
      <ul style={{ paddingLeft: 16 }}>
        {item.bullets.map((b, i) => (
          <li key={i} style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, letterSpacing: 0.5 }}>
            {b}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ResumePage() {
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
        .res-stripe  { position:absolute; right:0; top:0; bottom:0; width:5px; background:#c4001a; z-index:10; }
        .res-stripe2 { position:absolute; right:9px; top:0; bottom:0; width:2px; background:rgba(245,122,139,0.22); z-index:10; }
        .res-stripe3 { position:absolute; left:0; top:0; bottom:0; width:4px; background:#1a6aff; z-index:10; }
        .res-back {
          position:absolute; top:28px; left:28px; z-index:20;
          font-family:'Anton',sans-serif; font-style:italic; letter-spacing:3px;
          color:rgba(60,226,255,0.6); font-size:14px; cursor:pointer;
          border:1px solid rgba(60,226,255,0.2); padding:6px 16px;
          transition:all 0.2s ease; background:none;
        }
        .res-back:hover { color:#3ce2ff; border-color:#3ce2ff; background:rgba(60,226,255,0.05); }
        .section-head {
          font-family:'Anton',sans-serif; font-style:italic; font-size:11px;
          letter-spacing:5px; color:#c4001a; margin-bottom:12px; margin-top:28px;
        }
        .divider { width:40px; height:2px; background:#1a6aff; margin:8px 0 20px; }
        .diagonal-bar {
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#1a6aff,#c4001a);
        }
      `}</style>

      <div className="diagonal-bar" />
      <div className="res-stripe" />
      <div className="res-stripe2" />
      <div className="res-stripe3" />

      <button className="res-back" onClick={() => navigate(-1)}>← BACK</button>

      <div style={{ padding: '80px 60px 40px 60px', overflowY: 'auto', flex: 1 }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 48, lineHeight: 0.9, letterSpacing: 2, marginBottom: 6 }}>
          RESUME
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, marginBottom: 28 }}>
          BHARATH K. PILLAI — OSU CS&E 2027
        </div>

        <div className="section-head">EXPERIENCE</div>
        <div className="divider" />
        {experience.map((e, i) => <Block key={i} item={e} />)}

        <div className="section-head">PUBLICATIONS</div>
        <div className="divider" />
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 4 }}>
            <span style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 16, color: '#fff', letterSpacing: 1 }}>
              SmartWilds: Multimodal Wildlife Monitoring Dataset
            </span>
            <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#c4001a', letterSpacing: 2 }}>Sep 2025</span>
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#3ce2ff', letterSpacing: 1, marginBottom: 8 }}>
            NeurIPS 2025 — Imageomics Workshop
          </div>
          <div style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, letterSpacing: 0.5 }}>
            Co-author on a peer-reviewed multimodal wildlife monitoring dataset integrating drone imagery, camera traps, and bioacoustics. Supports conservation computer vision, species detection, and habitat monitoring research.
          </div>
        </div>

        <div className="section-head">PROJECTS</div>
        <div className="divider" />
        {projects.map((p, i) => <Block key={i} item={p} />)}
      </div>
    </div>
  )
}
