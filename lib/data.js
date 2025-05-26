// lib/data.js - Main site data (personal, career, skills, etc.)
export const personalData = {
  name: 'Ramy Mohareb',
  title: 'Senior Solutions Architect',
  email: 'ramy.mohareb1@gmail.com',
  phone: '+971 (0) 55 426 7340',
  linkedin: 'https://www.linkedin.com/in/ramy-mohareb-b357743b/',
  gitlab: 'https://gitlab.com/rmohareb-profile',
  location: 'Dubai, UAE',
};

export const typingRoles = [
  'Solutions Architect',
  'Innovation Leader',
  'Technical Strategist',
  'Cloud Expert',
  'Enterprise Architect',
];

export const stats = [
  { target: 14, label: 'Years Experience' },
  { target: 25, label: 'RFPs Delivered' },
  { target: 20, label: 'Certifications' },
  { target: 3, label: 'Major Sectors' },
];

export const careerTimeline = [
  {
    company: 'OpenText',
    period: '2020-Present',
    role: 'Senior Consultant → Solutions Architect',
    highlight: 'Innovation Award Finalist, EPIC architect',
    description:
      'Led modernization programs, designed cloud-ready systems, presented to C-level clients',
  },
  {
    company: 'SquareOne Technologies',
    period: '2017-2020',
    role: 'Senior ECM Consultant & Project Lead',
    highlight: '10+ ECM solutions across sectors',
    description:
      'Delivered ECM solutions across public sector, insurance, energy, and construction',
  },
  {
    company: 'EMC² - Dell Technologies',
    period: '2011-2017',
    role: 'Senior ECM Consultant',
    highlight: 'Documentum expert, 50+ workflows',
    description:
      'Led enterprise content management implementations, ISO-compliant workflows',
  },
];

export const techStack = [
  {
    icon: '☁️',
    title: 'Cloud & Architecture',
    skills: [
      { name: 'AWS (Lambda, S3, FSx)', level: 'Expert' },
      { name: 'GCP Cloud Interconnect', level: 'Advanced' },
      { name: 'Microservices/Serverless', level: 'Expert' },
      { name: 'Hybrid Cloud Design', level: 'Expert' },
    ],
  },
  {
    icon: '🔗',
    title: 'ECM & Integration',
    skills: [
      { name: 'OpenText Documentum', level: 'Expert' },
      { name: 'SAP DMS Integration', level: 'Expert' },
      { name: 'Hyland OnBase', level: 'Advanced' },
      { name: 'REST APIs & Kafka', level: 'Expert' },
    ],
  },
  {
    icon: '💻',
    title: 'Development',
    skills: [
      { name: 'Java (Spring Boot)', level: 'Expert' },
      { name: 'JavaScript (React/Node.js)', level: 'Advanced' },
      { name: 'PostgreSQL/Oracle', level: 'Expert' },
      { name: 'MongoDB/DynamoDB', level: 'Advanced' },
    ],
  },
];

export const certifications = [
  'CISSP - Nov 2026',
  'Fortify SCA & SSC',
  'OpenText Content Server',
  'OnBase API Developer',
  'Oracle DBA Professional',
  'CCNA Cisco',
];

export const projects = [
  {
    title: 'Automated Tag Validation Governance',
    description:
      'Designed and deployed a groundbreaking system that automates engineering tag validation with ERP-integrated governance, eliminating manual checks and dramatically improving compliance in capital projects.',
    tags: ['AVEVA TMS', 'SAP Integration', 'Workflow Automation', 'Governance'],
    highlight: true,
  },
  {
    title: 'QatarEnergy LNG - AIMS Program',
    description:
      'Lead architect for national LNG program, designing and scaling three interlinked capital and operational information systems with multiple stakeholders.',
    tags: [
      'Enterprise Architecture',
      'LNG Operations',
      'Multi-system Integration',
    ],
    highlight: false,
  },
  {
    title: 'EPIC Global Rollout',
    description:
      'Spearheaded global rollout of multi-client Engineering Projects Information Control platform for major energy clients including Aramco and Qatar Energy.',
    tags: ['Global Deployment', 'Client Customization', 'Energy Sector'],
    highlight: false,
  },
  {
    title: 'Cloud Migration & Modernization',
    description:
      'Led modernization of legacy ECM landscapes with hybrid OpenText Cloud governance models, improving scalability and reducing operational costs.',
    tags: ['Cloud Migration', 'Legacy Modernization', 'Hybrid Architecture'],
    highlight: false,
  },
];

export const services = [
  {
    icon: '🏗️',
    title: 'Architecture Review',
    description:
      'Comprehensive evaluation of your enterprise systems and recommendations for optimization',
  },
  {
    icon: '🚀',
    title: 'Digital Transformation',
    description:
      'Strategy and execution for modernizing legacy systems to cloud-native architectures',
  },
  {
    icon: '🎯',
    title: 'Technical Due Diligence',
    description:
      'Independent assessment of technology investments and architectural decisions',
  },
];
