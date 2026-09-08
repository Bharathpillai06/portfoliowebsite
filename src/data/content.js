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

export const coursework = ['Data Structures & Algorithms', 'Database Systems', 'Electronics for CS', 'Linear Algebra']

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
      'Deployed the radio achieving 10,000 hops per second at a cost under $5,000',
    ],
  },
]

export const publications = [
  {
    name: 'Cross-Modal Corroboration for Annotation-Free Wildlife Monitoring',
    venue: 'First author — CV4Animals Workshop, CVPR 2026',
    date: 'Jun 2026',
    bullets: [
      'Self-validating framework estimating animal depth from ground-based camera sensors using BioCLIP 2 vision and acoustic classification.',
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
      'Building an autonomous drone that tracks wildlife using an onboard Jetson Nano',
      'Optimized a YOLOv8 + TensorRT detection pipeline to 60 FPS with DeepSORT multi-target tracking',
      'Fused RealSense D435i depth and optical flow to estimate target range and velocity',
      'Implemented a PID controller driving a Pixhawk 6C over UART',
    ],
  },
  {
    name: 'BioHack — 2nd Place (200 participants)',
    stack: 'Python, PyTorch, OpenCV, Blender',
    date: 'Feb 2026',
    bullets: [
      'Created a deep learning workflow for analysis across heterogeneous kidney imaging',
      'Preprocessed medical imagery with OpenCV by segmentation and masking for clear inputs for model inference',
      'Modeled kidney cortex using BPY in Blender, creating NURBS curve tubules with procedural sinusoidal winding',
      'Trained a self-supervised autoencoder in PyTorch to compress 512-d embeddings to 64-d latent space',
    ],
  },
  {
    name: 'MakeIO — 3rd Place (500 participants)',
    stack: 'Python, YOLOv8, TensorFlow, PyTorch, Raspberry Pi',
    date: 'Mar 2026',
    bullets: [
      'Built a multimodal edge AI pipeline combining YOLOv8 detection with an audio CNN for real-time wildlife health',
      'Achieved 0% accuracy degradation vs. supercomputer server baseline at 14.9x lower energy consumption',
    ],
  },
]

export const sideProjects = [
  {
    name: 'Wildlife tracking drone',
    stack: 'Python, YOLOv8, TensorRT, DeepSORT, MAVLink, Jetson Orin Nano Super, RealSense D435i',
    date: 'Present',
    color: '#7dd4fc',
    link: null,
    bullets: [
      'Building a GPS-denied autonomous drone that tracks wildlife in real time using an onboard Jetson Orin Nano Super (67 TOPS), with no collars or physical contact',
      'Optimized a YOLOv8 + TensorRT detection pipeline to 60 FPS with DeepSORT multi-target tracking',
      'Fused RealSense D435i depth and optical flow to estimate target range and velocity under forest canopy',
      'Implemented a PID controller driving a Pixhawk 6C over UART/MAVLink in GUIDED mode on a Holybro X500 v2 airframe',
      'Conducted at the Icicle Lab, OSU, under faculty mentor Chris Stewart',
    ],
  },
  {
    name: 'StratoSense — 3rd place',
    stack: 'Python, Bayesian assimilation, Kriging, Synoptic Data, Sondehub',
    date: 'Spring 2026',
    color: '#a78bfa',
    link: null, // TODO: direct GitHub URL
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
    link: 'https://github.com/Bharathpillai06/biohack',
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
