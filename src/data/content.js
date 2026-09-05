export const NAV = [
  { to: '/about',    label: 'About' },
  { to: '/resume',   label: 'Resume' },
  { to: '/sideproj', label: 'Projects' },
  { to: '/socials',  label: 'Socials' },
]

export const skills = {
  'Languages':      ['Python', 'Java', 'Rust', 'C', 'Assembly'],
  'Frameworks':     ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'OpenCV', 'Matplotlib', 'YOLO', 'BioCLIP'],
  'Tools':          ['Git', 'Docker', 'AWS', 'Linux', 'Raspberry Pi', 'ESP32', 'GNU Radio', 'RTL-SDR', 'VS Code'],
  'Certifications': ['AWS Cloud Practitioner', 'Google Cloud Digital Leader', 'HuggingFace MCP Fundamentals'],
}

export const coursework = ['Data Structures & Algorithms', 'Intro to Database Systems', 'Electronics for CS', 'Linear Algebra']

export const experience = [
  {
    org: 'OnRamp Hub: Ohio · Defense Innovation Unit (DIU) program',
    role: 'Subject Matter Expert Intern',
    date: 'May 2026 – Present',
    bullets: [
      'Designing technology transition pipelines that accelerate the commercialization of AFRL intellectual property',
      'Evaluating early-stage technologies and developing strategies to advance Technology Readiness Levels (TRL)',
      'Creating technical capability summaries for DoW partners and maintaining a database of companies and R&D trends',
    ],
  },
  {
    org: 'NSF ICICLE AI Institute',
    role: 'Undergraduate Researcher — Computer Vision & Edge Systems',
    date: 'May 2025 – Present',
    bullets: [
      'Built a model to get detected animals GPS coordinates using HFOV, camera bearing, and Vincenty geodesic math',
      'Validated GPS localization results against acoustic data, demonstrating cross-modal agreement with ~80% overlap',
      'Merged multimodal audio and camera data using Pandas, NumPy, and OpenCV reducing reporting time by ~70%',
    ],
  },
  {
    org: 'OSU Dept. of Engineering & National Security Agency',
    role: 'Undergraduate Researcher — Software Defined Radio Systems',
    date: 'Mar 2026 – May 2026',
    bullets: [
      'Implemented a SPECK128/256 cipher for an anti-jam frequency algorithm, tested against NSA vectors',
      'Developed diagrams for frequency assignment and bitsliced index computation for multi-user channel hopping',
    ],
  },
]

export const publications = [
  {
    name: 'Cross-Modal Corroboration for Annotation-Free Wildlife Monitoring',
    venue: 'First author — CV4Animals Workshop, CVPR 2026',
    date: 'Jun 2026',
    bullets: [
      'Self-validating framework combining BioCLIP 2 vision and acoustic classification, cross-checked against behavioral ecology priors to eliminate manual annotation; validated on a Milu deer herd.',
    ],
  },
  {
    name: 'SmartWilds: Multimodal Wildlife Monitoring Dataset',
    venue: 'Co-author — Imageomics Workshop, NeurIPS 2025',
    date: 'Sep 2025',
    bullets: [
      'Peer-reviewed dataset integrating drone imagery, camera traps, and bioacoustics for conservation-scale computer vision, species detection, and habitat monitoring research.',
    ],
  },
]

export const resumeProjects = [
  {
    name: 'Wildlife Tracking Drone',
    stack: 'Python, YOLOv8, TensorRT, DeepSORT, MAVLink, RealSense',
    date: 'Present',
    bullets: [
      'Designing and deploying an autonomous drone that tracks wildlife using an onboard Jetson Nano',
      'YOLOv8 + TensorRT at 60 FPS, DeepSORT multi-target tracking, monocular depth via Intel RealSense D435i, and optical flow for velocity estimation',
      'Perception feeds a PID control loop generating commands to a Pixhawk 6C over UART in GUIDED mode',
    ],
  },
  {
    name: 'BioHack — 2nd Place',
    stack: 'Python, PyTorch, OpenCV, Blender',
    date: 'Feb 2026',
    bullets: [
      'Created a deep learning workflow into vector embeddings for analysis across heterogeneous kidney imaging',
      'Preprocessed medical imagery with OpenCV by segmentation and masking for clear inputs for model inference',
      'Modeled kidney cortex using BPY in Blender, creating NURBS curve tubules with procedural sinusoidal winding',
      'Trained a self-supervised autoencoder in PyTorch to compress 512-d embeddings to 64-d latent space',
    ],
  },
  {
    name: 'MakeIO — 3rd Place',
    stack: 'Python, YOLOv8, TensorFlow, PyTorch, Raspberry Pi',
    date: 'Mar 2026',
    bullets: [
      'Built a multimodal edge AI pipeline combining YOLOv8 detection with an audio CNN for real-time wildlife health',
      'Achieved 0% accuracy degradation vs. supercomputer server baseline at 14.9x lower energy consumption',
      'Designed a CNN processing 24 features achieving a 36% runtime reduction on ARM vs. standard architecture',
    ],
  },
]

export const sideProjects = [
  {
    name: 'Autonomous wildlife tracking drone',
    stack: 'Python, YOLOv8, TensorRT, DeepSORT, MAVLink, Jetson Orin Nano Super, RealSense D435i',
    date: 'Present',
    color: '#7dd4fc',
    link: null,
    bullets: [
      'GPS-denied autonomous drone that tracks wildlife in real time using onboard edge AI on an NVIDIA Jetson Orin Nano Super (67 TOPS)',
      'Multi-stage perception pipeline: YOLOv8 + TensorRT at 60 FPS, DeepSORT multi-target tracking, monocular depth via Intel RealSense D435i, and optical flow for velocity estimation under forest canopy',
      'Perception feeds a PID control loop generating velocity commands to a Pixhawk 6C over UART/MAVLink in GUIDED mode',
      'Non-invasive — no GPS collars or physical contact; designed for real-world deployment on a Holybro X500 v2 airframe',
      'Conducted at the Icicle Lab, OSU, under faculty mentor Chris Stewart; extends prior Imageomics Lab work on edge AI wildlife localization',
    ],
  },
  {
    name: 'StratoSense — 3rd place',
    stack: 'Python, Bayesian assimilation, Kriging, Synoptic Data, Sondehub',
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
    name: 'BioHack — 2nd place',
    stack: 'Python, PyTorch, OpenCV, Blender',
    date: 'Feb 2026',
    color: '#ff4d6a',
    link: 'https://github.com/Rishivarshil/private_BioHack_2026',
    bullets: [
      'Deep learning pipeline for cross-modal kidney imaging analysis built at BioHack; generates vector embeddings from heterogeneous medical imagery',
      'Preprocessed medical imagery with OpenCV via segmentation and masking for clean model inputs',
      'Modeled kidney cortex in Blender using BPY with NURBS curve tubules and procedural sinusoidal winding',
      'Self-supervised autoencoder compressing 512-d embeddings → 64-d latent space',
    ],
  },
  {
    name: 'WildSense — 3rd place',
    stack: 'Python, YOLOv8, BioCLIP, ESP32-CAM, Raspberry Pi',
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
    name: 'DataIO — 3rd place',
    stack: 'Python, Pandas, AWS QuickSight',
    date: 'Mar 2025',
    color: '#f0b429',
    link: null,
    bullets: [
      'EV infrastructure gap analysis built at DataIO; processed ~500,000 U.S. charger and vehicle registration records to quantify coverage deficits',
      'Identified 12 high-priority underserved regions by correlating EV adoption rates with charger density',
      'Geospatial heat maps in AWS QuickSight visualizing charger density deficits nationwide',
    ],
  },
]

export const links = [
  { id: 'email',    label: 'Email',    value: 'bharathptech@gmail.com',        href: 'mailto:bharathptech@gmail.com',          color: '#3ce2ff' },
  { id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/BharathPillai', href: 'https://www.linkedin.com/in/BharathPillai', color: '#4a9eff' },
  { id: 'github',   label: 'GitHub',   value: 'github.com/Bharathpillai06',    href: 'https://github.com/Bharathpillai06',       color: '#e6edf3' },
  { id: 'youtube',  label: 'YouTube',  value: 'youtube.com/@BoratholosCoding', href: 'https://youtube.com/@BoratholosCoding',    color: '#ff2a2a' },
  { id: 'phone',    label: 'Phone',    value: '614-687-6451',                  href: 'tel:6146876451',                          color: '#f4f8ff' },
]
