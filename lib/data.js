// lib/data.js
export const personalData = {
  name: 'Ramy Mohareb',
  title: 'Senior Solution Architect',
  email: 'ramy.mohareb1@gmail.com',
  phone: '+971 (0) 55 426 7340',
  linkedin: 'https://www.linkedin.com/in/ramy-mohareb-b357743b/',
  gitlab: 'https://gitlab.com/rmohareb-profile',
  location: 'Dubai, UAE',
};

export const typingRoles = [
  'Solution Architect',
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
    role: 'Senior Consultant → Solution Architect',
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

// New: Blog posts data
export const blogPosts = [
  {
    id: 1,
    title: 'Modernizing Enterprise Content Management: Lessons from the Field',
    excerpt:
      "After leading 25+ ECM implementations, here are the key patterns I've observed for successful digital transformation in large organizations.",
    content: `# Modernizing Enterprise Content Management: Lessons from the Field

After spending over a decade implementing enterprise content management solutions across energy, government, and construction sectors, I've observed patterns that separate successful transformations from costly failures.

## The Challenge: Legacy Systems Don't Age Gracefully

Most organizations I work with are dealing with 10-15 year old ECM systems that were state-of-the-art when implemented but now feel like digital dinosaurs. The symptoms are always the same:

- **Performance degradation** as data volumes grow exponentially
- **Integration nightmares** with modern cloud services
- **User experience** that feels like using software from 2010
- **Maintenance costs** that grow faster than business value

## Three Pillars of Successful ECM Modernization

### 1. Cloud-First, But Not Cloud-Only

The most successful projects I've led follow a hybrid approach. We migrate what makes sense to cloud (typically 70-80% of content) while keeping sensitive or regulatory-constrained data on-premises with secure cloud connectivity.

**Key insight**: Don't lift-and-shift. Re-architect for cloud-native patterns.

### 2. API-Driven Integration Strategy

Modern ECM isn't a monolith—it's the content layer in a broader digital ecosystem. Every project now includes:

- **RESTful APIs** for all content operations
- **Event-driven architecture** for real-time synchronization
- **Microservices** for specific business functions

This approach enabled one energy client to reduce integration time from 6 months to 6 weeks.

### 3. User Experience as a First-Class Citizen

Traditional ECM interfaces were built for power users. Modern implementations need to serve everyone from C-level executives to field technicians.

**Practical tip**: Design for the mobile-first use case, then scale up to desktop.

## The OpenText Advantage

Working with OpenText's latest cloud offerings, I've seen dramatic improvements in:

- **Deployment speed**: 60% faster than traditional on-premises
- **Total cost of ownership**: 40% reduction over 5 years
- **User adoption**: 85% higher satisfaction scores

## What's Next?

The future of ECM is increasingly about intelligence—AI-powered classification, automated compliance checking, and predictive analytics. Organizations that start building these capabilities now will have a significant competitive advantage.

*Want to discuss your ECM modernization strategy? [Get in touch](/contact) for a confidential assessment.*`,
    publishDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Enterprise Architecture',
    tags: ['ECM', 'Digital Transformation', 'Cloud Architecture', 'OpenText'],
    featured: true,
  },
  {
    id: 2,
    title: 'Building Award-Winning Solutions: The Tag Validation Innovation',
    excerpt:
      'A deep dive into the automated tag validation system that earned me Innovation Award Finalist recognition in 2025.',
    content: `# Building Award-Winning Solutions: The Tag Validation Innovation

When QatarEnergy approached us with a challenge around engineering tag validation, I knew we were looking at an opportunity to fundamentally change how capital projects manage document governance.

## The Problem: Manual Validation Hell

Engineering projects involve thousands of documents, each tagged with metadata that must align perfectly with ERP systems. The manual validation process was:

- **Time-consuming**: 2-3 days per major document package
- **Error-prone**: 15-20% error rate in manual checks
- **Bottleneck**: Delaying project milestones by weeks
- **Expensive**: Full-time team just for validation

## The Solution: Intelligent Automation

We built a system that automatically validates engineering tags against multiple data sources:

### Architecture Overview

\`\`\`
[AVEVA TMS] → [Validation Engine] → [SAP ERP]
     ↓              ↓                  ↓
[Document Store] ← [Governance API] ← [Approval Workflow]
\`\`\`

### Key Components

1. **Real-time Integration** with AVEVA TMS for engineering data
2. **SAP Connectivity** for ERP master data validation  
3. **Visual Governance Tools** for exception handling
4. **Automated Workflows** for approval routing

## The Impact

Results after 6 months of operation:

- **99.2% accuracy** in tag validation
- **85% reduction** in validation time
- **$2.3M annual savings** in process efficiency
- **Zero project delays** due to tag validation issues

## Technical Insights

The most challenging aspect was handling the complexity of engineering hierarchies. We solved this with:

- **Graph database modeling** for relationship mapping
- **Machine learning** for pattern recognition in tag structures
- **Event-driven architecture** for real-time updates

## Innovation Recognition

This solution earned Innovation Award Finalist recognition because it demonstrated:

- **Technical excellence** in system integration
- **Business impact** with measurable ROI
- **Scalability** across multiple project types
- **User adoption** exceeding 95%

## Lessons Learned

1. **Start with the user workflow**, not the technology
2. **Invest heavily in data quality** before automation
3. **Build for exceptions**, not just happy paths
4. **Measure everything** from day one

*Interested in similar innovations for your projects? [Let's discuss](/contact) how automation can transform your operations.*`,
    publishDate: '2025-01-10',
    readTime: '6 min read',
    category: 'Innovation',
    tags: ['Automation', 'Engineering', 'SAP Integration', 'AVEVA'],
    featured: true,
  },
  {
    id: 3,
    title: 'AWS vs. GCP for Enterprise ECM: A Practical Comparison',
    excerpt:
      'Real-world insights from implementing ECM solutions on both AWS and Google Cloud Platform in enterprise environments.',
    content: `# AWS vs. GCP for Enterprise ECM: A Practical Comparison

Having implemented enterprise content management solutions on both AWS and Google Cloud Platform, I often get asked: "Which cloud platform should we choose for our ECM project?"

The answer, as always in architecture, is "it depends." But here's what I've learned from real implementations.

## Current Project Mix

In my recent projects:
- **AWS**: 70% of implementations (7 out of 10 projects)
- **GCP**: 30% of implementations (3 out of 10 projects)

## AWS Strengths for ECM

### Ecosystem Maturity
AWS has the most mature ecosystem for enterprise applications:
- **FSx for Windows** provides excellent performance for document repositories
- **Transfer Family** simplifies legacy system integration
- **Lambda functions** handle document processing efficiently

### Enterprise Features
- **VPC connectivity** options are extensive
- **GuardDuty/Macie** provide robust security monitoring
- **CloudFormation** enables infrastructure as code

### Real Example: Energy Client Migration
Migrated 15TB of engineering documents from on-premises Documentum to AWS:
- **S3 storage costs**: 60% less than traditional SAN
- **Lambda processing**: Automated metadata extraction
- **Aurora PostgreSQL**: 3x performance improvement

## GCP Advantages

### AI/ML Integration
Google's AI services shine for content intelligence:
- **Document AI** for automated classification
- **Cloud Vision** for image content analysis
- **BigQuery** for content analytics

### Networking
- **Cloud Interconnect** provides reliable hybrid connectivity
- **Global load balancing** works seamlessly

### Cost Efficiency
For compute-intensive workloads, GCP often provides better price/performance.

## Decision Framework

Choose **AWS** when:
- Legacy system integration is complex
- Enterprise security/compliance is paramount
- You need extensive third-party tool support
- Windows-based infrastructure is prevalent

Choose **GCP** when:
- AI/ML content processing is a priority
- You have significant data analytics requirements
- Kubernetes/container-first architecture
- Cost optimization is critical for compute workloads

## Hybrid Approach

In one recent project, we used both:
- **AWS** for production ECM workloads and enterprise integration
- **GCP** for AI-powered content classification and analytics

This hybrid approach delivered the best of both platforms.

## Practical Recommendations

1. **Start with a proof-of-concept** on both platforms
2. **Evaluate total cost**, not just compute pricing
3. **Consider your team's expertise** and training requirements
4. **Think long-term** about platform evolution

*Planning a cloud migration for your ECM? [Contact me](/contact) for a platform assessment tailored to your requirements.*`,
    publishDate: '2025-01-05',
    readTime: '5 min read',
    category: 'Cloud Architecture',
    tags: ['AWS', 'GCP', 'Cloud Migration', 'ECM'],
    featured: false,
  },
];
