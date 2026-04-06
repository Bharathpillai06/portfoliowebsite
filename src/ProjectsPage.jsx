import { useNavigate } from 'react-router-dom'

const projects = [
  {
    name: 'AUTONOMOUS WILDLIFE TRACKING DRONE',
    stack: 'Python · YOLOv8 · TensorRT · DeepSORT · MAVLink · NVIDIA Jetson Orin Nano Super · RealSense D435i',
    date: 'Present',
    color: '#7dd4fc',
    link: null,
    bullets: [
      'Designs and deploys a GPS-denied autonomous drone that tracks wildlife in real time using onboard edge AI on an NVIDIA Jetson Orin Nano Super (67 TOPS)',
      'Multi-stage perception pipeline: YOLOv8 + TensorRT at 60 FPS, DeepSORT multi-target tracking, monocular depth via Intel RealSense D435i, and optical flow for velocity estimation under forest canopy',
      'Perception feeds a PID control loop generating velocity commands to a Pixhawk 6C over UART/MAVLink in GUIDED mode',
      'Non-invasive — no GPS collars or physical contact; designed for real-world deployment on a Holybro X500 v2 airframe',
      'Conducted at the Icicle Lab, OSU, under faculty mentor Chris Stewart; extends prior Imageomics Lab work on edge AI wildlife localization',
    ],
  },
  {
    name: 'STRATOSENSE — 3RD PLACE',
    stack: 'Python · Bayesian Assimilation · Kriging · Synoptic Data · Sondehub',
    date: 'Spring 2026',
    color: '#a78bfa',
    link: 'https://lnkd.in/gNkP9JaP',
    bullets: [
      'Atmospheric data fusion platform built at Buckeye Black Box; combines weather station and balloon flight data into a continuous global picture',
      'Fuses ground station data (Synoptic Data) and weather balloon flights (Sondehub) using Bayesian assimilation to reconcile discrepancies',
      'Kriging model fills spatial gaps between data points; interactive map with 3D visualizations and a condition scorecard',
    ],
  },
  {
    name: 'BIOHACK — 2ND PLACE',
    stack: 'Python · PyTorch · OpenCV · Blender',
    date: 'Feb 2026',
    color: '#c4001a',
    link: 'https://github.com/Rishivarshil/private_BioHack_2026',
    bullets: [
      'Deep learning pipeline for cross-modal kidney imaging analysis built at BioHack; generates vector embeddings from heterogeneous medical imagery',
      'Preprocessed medical imagery with OpenCV via segmentation and masking for clean model inputs',
      'Modeled kidney cortex in Blender using BPY with NURBS curve tubules and procedural sinusoidal winding',
      'Self-supervised autoencoder compressing 512-d embeddings → 64-d latent space',
    ],
  },
  {
    name: 'WILDSENSE — 3RD PLACE',
    stack: 'Python · YOLOv8 · BioCLIP · ESP32-CAM · Raspberry Pi',
    date: 'Mar 2026',
    color: '#3ce2ff',
    link: 'https://github.com/Bharathpillai06/MakeOHI-O-2026',
    bullets: [
      'Built an edge AI wildlife camera trap system at Make I/O 2026 automating species ID and GPS estimation with no cloud dependency',
      'Designed PIR-triggered capture pipeline on ESP32-CAM integrating YOLOv8 detection, BioCLIP classification, and geometric GPS projection',
      'Deployed full inference stack on Raspberry Pi, generating structured GPS-tagged datasets deployable in low-power, bandwidth-limited field environments',
    ],
  },
  {
    name: 'DATAIO — 3RD PLACE',
    stack: 'Python · Pandas · AWS QuickSight',
    date: 'Mar 2025',
    link: null,
    color: '#f0b429',
    bullets: [
      'EV infrastructure gap analysis built at DataIO; processed ~500,000 U.S. charger and vehicle registration records to quantify coverage deficits',
      'Identified 12 high-priority underserved regions by correlating EV adoption rates with charger density',
      'Geospatial heat maps in AWS QuickSight visualizing charger density deficits nationwide',
    ],
  },
]

export default function ProjectsPage() {
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
        .proj-stripe  { position:absolute; right:0; top:0; bottom:0; width:5px; background:#c4001a; z-index:10; }
        .proj-stripe2 { position:absolute; right:9px; top:0; bottom:0; width:2px; background:rgba(245,122,139,0.22); z-index:10; }
        .proj-stripe3 { position:absolute; left:0; top:0; bottom:0; width:4px; background:#1a6aff; z-index:10; }
        .proj-back {
          position:absolute; top:28px; left:28px; z-index:20;
          font-family:'Anton',sans-serif; font-style:italic; letter-spacing:3px;
          color:rgba(60,226,255,0.6); font-size:14px; cursor:pointer;
          border:1px solid rgba(60,226,255,0.2); padding:6px 16px;
          transition:all 0.2s ease; background:none;
        }
        .proj-back:hover { color:#3ce2ff; border-color:#3ce2ff; background:rgba(60,226,255,0.05); }
        .proj-card {
          border-left:3px solid;
          padding:20px 24px;
          margin-bottom:24px;
          background:rgba(255,255,255,0.02);
          transition:background 0.2s;
        }
        .proj-card:hover { background:rgba(255,255,255,0.045); }
        .diagonal-bar {
          position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#1a6aff,#c4001a);
        }
      `}</style>

      <div className="diagonal-bar" />
      <div className="proj-stripe" />
      <div className="proj-stripe2" />
      <div className="proj-stripe3" />
      <button className="proj-back" onClick={() => navigate(-1)}>← BACK</button>

      <div style={{ padding: '80px 60px 40px 60px', overflowY: 'auto', flex: 1 }}>
        <div style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 11, letterSpacing: 6, color: '#c4001a', marginBottom: 8 }}>
          PORTFOLIO // PROJECTS
        </div>
        <div style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 52, lineHeight: 0.9, letterSpacing: 2, marginBottom: 36 }}>
          SIDE<br /><span style={{ color: '#3ce2ff' }}>PROJECTS</span>
        </div>

        {projects.map((p) => (
          <div key={p.name} className="proj-card" style={{ borderColor: p.color }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
              <span style={{ fontFamily: "'Anton', sans-serif", fontStyle: 'italic', fontSize: 18, color: p.color, letterSpacing: 1 }}>
                {p.name}
              </span>
              <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: 2 }}>{p.date}</span>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: 11, color: 'rgba(255,255,255,0.35)', letterSpacing: 1, marginBottom: 10 }}>
              {p.stack}
            </div>
            <ul style={{ paddingLeft: 16 }}>
              {p.bullets.map((b, i) => (
                <li key={i} style={{ fontFamily: 'monospace', fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, letterSpacing: 0.5 }}>
                  {b}
                </li>
              ))}
            </ul>
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 10, fontFamily: 'monospace', fontSize: 11, letterSpacing: 2, color: p.color, borderBottom: `1px solid ${p.color}`, textDecoration: 'none', opacity: 0.7 }}>
                GITHUB →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
